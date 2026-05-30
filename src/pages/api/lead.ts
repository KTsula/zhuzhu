import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

type Body = {
  email?: string;
  birthMonth?: number | string;
  source?: string;
  refEmail?: string;
  lang?: string;
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  );

const j = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let body: Body;
  try { body = await request.json(); }
  catch { return j({ ok: false, error: 'bad-json' }, 400); }

  const email = (body.email || '').trim().slice(0, 200).toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return j({ ok: false, error: 'bad-email' }, 422);
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
  const lines = [
    ['Email',        email],
    ['Source',       source || '—'],
    ['Birth month',  month],
    ['Referrer',     refEmail || '—'],
    ['Lang',         lang],
  ] as const;

  const text = lines.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `
    <div style="font-family: Spectral, Georgia, serif; color: #14100d; font-size: 16px; line-height: 1.6;">
      <h2 style="font-style: italic; font-weight: 400; font-size: 22px; margin: 0 0 18px; color: #8a1f3c;">
        New lead — ${escape(email)}
      </h2>
      <table style="border-collapse: collapse; width: 100%;">
        ${lines.map(([k, v]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #c69859; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; vertical-align: top; width: 120px;">${k}</td>
            <td style="padding: 6px 0;">${escape(v) || '<span style="color:#999">—</span>'}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  `;

  const apiKey = import.meta.env.RESEND_API_KEY;
  const from   = import.meta.env.LEADS_FROM ?? 'ZhuZhu Leads <leads@zhuzhu.ge>';
  const to     = import.meta.env.LEADS_TO   ?? 'hello@zhuzhu.ge';

  if (!apiKey) {
    console.error('[/api/lead] RESEND_API_KEY missing — payload:', text);
    // Don't fail the user; they're trying to give us their email.
    return j({ ok: true, queued: false });
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
      return j({ ok: true, queued: false });
    }
    return j({ ok: true, queued: true });
  } catch (err) {
    console.error('[/api/lead] threw:', err);
    return j({ ok: true, queued: false });
  }
};
