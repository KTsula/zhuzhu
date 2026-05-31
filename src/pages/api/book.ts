import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { buildEmail, json } from '../../lib/notify';

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

export const POST: APIRoute = async ({ request }) => {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'bad-json' }, 400);
  }

  const name    = (body.name    || '').trim().slice(0, 200);
  const contact = (body.contact || '').trim().slice(0, 200);
  if (!name || !contact) {
    return json({ ok: false, error: 'missing-fields' }, 422);
  }

  const date   = (body.date   || '').trim().slice(0, 100);
  const guests = (body.guests || '').trim().slice(0, 100);
  const venue  = (body.venue  || '').trim().slice(0, 200);
  const note   = (body.note   || '').trim().slice(0, 4000);
  const lang   = body.lang === 'ka' ? 'ka' : 'en';

  const { text, html } = buildEmail({
    title: `New booking — ${name}`,
    rows: [
      ['Name',    name],
      ['Contact', contact],
      ['Date',    date],
      ['Guests',  guests],
      ['Venue',   venue],
      ['Lang',    lang],
    ],
    note,
  });

  const apiKey = import.meta.env.RESEND_API_KEY;
  const from   = import.meta.env.BOOKING_FROM ?? 'ZhuZhu Bookings <bookings@zhuzhu.ge>';
  const to     = import.meta.env.BOOKING_TO   ?? 'hello@zhuzhu.ge';

  if (!apiKey) {
    console.error('[/api/book] RESEND_API_KEY missing — payload:', text);
    return json({ ok: false, error: 'no-api-key' }, 500);
  }

  const resend = new Resend(apiKey);
  try {
    const reply = contact.includes('@') ? contact : undefined;
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `ZhuZhu booking — ${name}`,
      replyTo: reply,
      text,
      html,
    });
    if (error) {
      console.error('[/api/book] resend error:', error);
      return json({ ok: false, error: 'send-failed' }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error('[/api/book] threw:', err);
    return json({ ok: false, error: 'exception' }, 500);
  }
};
