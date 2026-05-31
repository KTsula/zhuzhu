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

  // TODO: persist to Supabase.
  // Schema:
  //   create table public.leads (
  //     id uuid default gen_random_uuid() primary key,
  //     email text not null unique,
  //     birth_month int check (birth_month between 1 and 12),
  //     source text,
  //     ref_email text,
  //     lang text default 'en',
  //     is_customer boolean default false,
  //     last_order_at timestamptz,
  //     created_at timestamptz default now()
  //   );
  // create index on public.leads (created_at desc);
  // create index on public.leads (ref_email) where ref_email is not null;
  //
  // Then add @supabase/supabase-js and:
  //   const { createClient } = await import('@supabase/supabase-js');
  //   const supabase = createClient(
  //     import.meta.env.SUPABASE_URL!,
  //     import.meta.env.SUPABASE_SERVICE_KEY!
  //   );
  //   await supabase.from('leads').upsert(
  //     { email, birth_month: birthMonth, source, ref_email: refEmail || null, lang },
  //     { onConflict: 'email' }
  //   );

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
