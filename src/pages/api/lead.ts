import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { buildEmail, json } from '../../lib/notify';

export const prerender = false;

type Body = {
  email?: string;
  birthMonth?: number | string;
  source?: string;
  refEmail?: string;
  lang?: string;
};

// Persist the lead to Supabase via a direct PostgREST upsert with the service
// key (no SDK). Best-effort: if Supabase isn't configured or errors, the lead
// still succeeds for the user (the team email is the backup source of truth).
// Upsert on `email` so a returning visitor doesn't error or duplicate.
async function saveToSupabase(row: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return;
  try {
    const res = await fetch(`${url}/rest/v1/leads?on_conflict=email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) console.error('[/api/lead] supabase upsert failed:', res.status, await res.text());
  } catch (err) {
    console.error('[/api/lead] supabase threw:', err);
  }
}

export const POST: APIRoute = async ({ request }) => {
  let body: Body;
  try { body = await request.json(); }
  catch { return json({ ok: false, error: 'bad-json' }, 400); }

  const email = (body.email || '').trim().slice(0, 200).toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'bad-email' }, 422);
  }

  const birthMonthRaw = body.birthMonth;
  const birthMonth = birthMonthRaw && Number(birthMonthRaw) >= 1 && Number(birthMonthRaw) <= 12
    ? Number(birthMonthRaw) : null;
  const source = (body.source || '').trim().slice(0, 100);
  const refEmail = (body.refEmail || '').trim().slice(0, 200).toLowerCase();
  const lang = body.lang === 'ka' ? 'ka' : 'en';

  await saveToSupabase({
    email,
    birth_month: birthMonth,
    source: source || null,
    ref_email: refEmail || null,
    lang,
  });

  const month = birthMonth ? new Date(2000, birthMonth - 1, 1).toLocaleString('en-US', { month: 'long' }) : '—';
  const { text, html } = buildEmail({
    title: `New lead — ${email}`,
    rows: [
      ['Email',       email],
      ['Source',      source || '—'],
      ['Birth month', month],
      ['Referrer',    refEmail || '—'],
      ['Lang',        lang],
    ],
  });

  const apiKey = process.env.RESEND_API_KEY;
  const from   = process.env.LEADS_FROM ?? 'ZhuZhu Leads <leads@zhuzhu.ge>';
  const to     = process.env.LEADS_TO   ?? 'hello@zhuzhu.ge';

  if (!apiKey) {
    console.error('[/api/lead] RESEND_API_KEY missing — payload:', text);
    // Don't fail the user; they're trying to give us their email.
    return json({ ok: true, queued: false });
  }

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from, to,
      subject: `ZhuZhu lead — ${email}${source ? ' · ' + source : ''}`,
      replyTo: email,
      text, html,
    });
    if (error) {
      console.error('[/api/lead] resend error:', error);
      return json({ ok: true, queued: false });
    }
    return json({ ok: true, queued: true });
  } catch (err) {
    console.error('[/api/lead] threw:', err);
    return json({ ok: true, queued: false });
  }
};
