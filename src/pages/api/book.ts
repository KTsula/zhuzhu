import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { buildEmail, json, escapeHtml } from '../../lib/notify';

export const prerender = false;

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  guests?: string;
  venue?: string;
  note?: string;
  lang?: string;
};

// Persist the booking to Supabase. No SDK — a direct PostgREST insert with the
// service key. Best-effort: if Supabase isn't configured or errors, the booking
// still succeeds (the team email is the source of truth).
async function saveToSupabase(row: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return;
  try {
    const res = await fetch(`${url}/rest/v1/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) console.error('[/api/book] supabase insert failed:', res.status, await res.text());
  } catch (err) {
    console.error('[/api/book] supabase threw:', err);
  }
}

// Customer-facing confirmation email (sent only when the contact is an email).
function confirmation(name: string, lang: 'en' | 'ka') {
  const safe = escapeHtml(name);
  const t = lang === 'ka'
    ? {
        subject: 'მივიღეთ თქვენი ჯავშანი — ჟუჟუ',
        hiText: `მადლობა, ${name}.`,
        hiHtml: `მადლობა, ${safe}.`,
        body: 'თქვენი მოთხოვნა მივიღეთ. ერთ სამუშაო დღეში გიპასუხებთ — მენიუს პირველ ვერსიასა და ფასს გამოგიგზავნით.',
        tasting: 'დიდი ღონისძიებისთვის წინასწარი დეგუსტაციის მოწყობაც შეგვიძლია — უბრალოდ უპასუხეთ ამ წერილს.',
        sign: 'ჟუჟუ · კოქტეილ-დესერტები, თბილისი',
      }
    : {
        subject: "We've got your booking — ZhuZhu",
        hiText: `Thank you, ${name}.`,
        hiHtml: `Thank you, ${safe}.`,
        body: 'We have your request and will reply within one working day with a draft menu and a quote.',
        tasting: 'For a larger event we can also arrange a tasting beforehand — just reply to this email.',
        sign: 'ZhuZhu · cocktail desserts, Tbilisi',
      };
  const text = `${t.hiText}\n\n${t.body}\n\n${t.tasting}\n\n— ${t.sign}`;
  const html = `
    <div style="font-family: Spectral, Georgia, serif; color: #14100d; font-size: 16px; line-height: 1.7;">
      <h2 style="font-style: italic; font-weight: 400; font-size: 22px; margin: 0 0 18px; color: #8a1f3c;">${t.hiHtml}</h2>
      <p style="margin: 0 0 16px;">${t.body}</p>
      <p style="margin: 0 0 24px; color: #6b6256;">${t.tasting}</p>
      <p style="font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #c69859; margin: 0;">${t.sign}</p>
    </div>`;
  return { subject: t.subject, text, html };
}

export const POST: APIRoute = async ({ request }) => {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'bad-json' }, 400);
  }

  const name  = (body.name  || '').trim().slice(0, 200);
  const phone = (body.phone || '').trim().slice(0, 100);
  const email = (body.email || '').trim().slice(0, 200).toLowerCase();
  // Phone is required; email is optional. Name is required.
  if (!name || !phone) {
    return json({ ok: false, error: 'missing-fields' }, 422);
  }
  // If an email was given, it must look valid.
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'bad-email' }, 422);
  }

  const date   = (body.date   || '').trim().slice(0, 100);
  const guests = (body.guests || '').trim().slice(0, 100);
  const venue  = (body.venue  || '').trim().slice(0, 200);
  const note   = (body.note   || '').trim().slice(0, 4000);
  const lang: 'en' | 'ka' = body.lang === 'ka' ? 'ka' : 'en';

  // `contact` kept populated for backward-compatibility with older rows/readers.
  const contact = [phone, email].filter(Boolean).join(' · ');
  await saveToSupabase({ name, phone, email: email || null, contact, date, guests, venue, note, lang });

  const { text, html } = buildEmail({
    title: `New booking — ${name}`,
    rows: [
      ['Name',   name],
      ['Phone',  phone],
      ['Email',  email],
      ['Date',   date],
      ['Guests', guests],
      ['Address', venue],
      ['Lang',   lang],
    ],
    note,
  });

  const apiKey = process.env.RESEND_API_KEY;
  const from   = process.env.BOOKING_FROM ?? 'ZhuZhu Bookings <bookings@zhuzhu.ge>';
  const to     = process.env.BOOKING_TO   ?? 'hello@zhuzhu.ge';

  if (!apiKey) {
    console.error('[/api/book] RESEND_API_KEY missing — payload:', text);
    return json({ ok: false, error: 'no-api-key' }, 500);
  }

  const resend = new Resend(apiKey);
  const replyTo = email || undefined;
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `ZhuZhu booking — ${name}`,
      replyTo,
      text,
      html,
    });
    if (error) {
      console.error('[/api/book] resend error:', error);
      return json({ ok: false, error: 'send-failed' }, 502);
    }

    // Best-effort confirmation to the customer (only if they gave an email).
    if (replyTo) {
      const c = confirmation(name, lang);
      const { error: cErr } = await resend.emails.send({
        from,
        to: replyTo,
        replyTo: to,
        subject: c.subject,
        text: c.text,
        html: c.html,
      });
      if (cErr) console.error('[/api/book] confirmation send error:', cErr);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('[/api/book] threw:', err);
    return json({ ok: false, error: 'exception' }, 500);
  }
};
