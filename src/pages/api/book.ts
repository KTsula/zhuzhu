import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

type Body = {
  name?: string;
  contact?: string;
  date?: string;
  guests?: string;
  venue?: string;
  note?: string;
  lang?: string;
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  );

export const POST: APIRoute = async ({ request }) => {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'bad-json' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name    = (body.name    || '').trim().slice(0, 200);
  const contact = (body.contact || '').trim().slice(0, 200);
  if (!name || !contact) {
    return new Response(JSON.stringify({ ok: false, error: 'missing-fields' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const date   = (body.date   || '').trim().slice(0, 100);
  const guests = (body.guests || '').trim().slice(0, 100);
  const venue  = (body.venue  || '').trim().slice(0, 200);
  const note   = (body.note   || '').trim().slice(0, 4000);
  const lang   = body.lang === 'ka' ? 'ka' : 'en';

  const subject = `ZhuZhu booking — ${name}`;
  const lines = [
    ['Name',    name],
    ['Contact', contact],
    ['Date',    date],
    ['Guests',  guests],
    ['Venue',   venue],
    ['Lang',    lang],
  ];
  const text =
    lines.map(([k, v]) => `${k}: ${v}`).join('\n') +
    (note ? `\n\nNote:\n${note}` : '');

  const html = `
    <div style="font-family: Spectral, Georgia, serif; color: #14100d; font-size: 16px; line-height: 1.6;">
      <h2 style="font-style: italic; font-weight: 400; font-size: 22px; margin: 0 0 18px; color: #8a1f3c;">
        New booking — ${escape(name)}
      </h2>
      <table style="border-collapse: collapse; width: 100%;">
        ${lines.map(([k, v]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #c69859; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; vertical-align: top; width: 110px;">${k}</td>
            <td style="padding: 6px 0;">${escape(v) || '<span style="color:#999">—</span>'}</td>
          </tr>
        `).join('')}
      </table>
      ${note ? `<div style="margin-top: 18px; padding-top: 18px; border-top: 1px solid #c69859;">
        <div style="color: #c69859; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 8px;">Note</div>
        <div style="white-space: pre-wrap;">${escape(note)}</div>
      </div>` : ''}
    </div>
  `;

  const apiKey = import.meta.env.RESEND_API_KEY;
  const from   = import.meta.env.BOOKING_FROM ?? 'ZhuZhu Bookings <bookings@zhuzhu.ge>';
  const to     = import.meta.env.BOOKING_TO   ?? 'hello@zhuzhu.ge';

  if (!apiKey) {
    console.error('[/api/book] RESEND_API_KEY missing — payload:', text);
    return new Response(JSON.stringify({ ok: false, error: 'no-api-key' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(apiKey);
  try {
    const reply = contact.includes('@') ? contact : undefined;
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: reply,
      text,
      html,
    });
    if (error) {
      console.error('[/api/book] resend error:', error);
      return new Response(JSON.stringify({ ok: false, error: 'send-failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[/api/book] threw:', err);
    return new Response(JSON.stringify({ ok: false, error: 'exception' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
