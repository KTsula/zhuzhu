// Shared helpers for the form-notification API routes (/api/book, /api/lead).
// Both routes validate a JSON payload and email it to the team via Resend;
// the escaping, JSON responses and email markup live here so they stay
// identical and in one place.

/** Escape a user-supplied string for safe inclusion in an HTML email body. */
export const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  );

/** Build a JSON `Response` with the given body and status. */
export const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

type Row = readonly [label: string, value: string];

/**
 * Render the shared ZhuZhu notification email as plain-text + HTML.
 * `title` and every row value (and the optional note) are escaped here,
 * so callers pass raw strings.
 */
export function buildEmail(opts: {
  title: string;
  rows: readonly Row[];
  note?: string;
}): { text: string; html: string } {
  const { title, rows, note } = opts;

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
    (note ? `\n\nNote:\n${note}` : '');

  const rowsHtml = rows
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding: 6px 12px 6px 0; color: #c69859; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; vertical-align: top; width: 120px;">${k}</td>
          <td style="padding: 6px 0;">${escapeHtml(v) || '<span style="color:#999">—</span>'}</td>
        </tr>`
    )
    .join('');

  const noteHtml = note
    ? `<div style="margin-top: 18px; padding-top: 18px; border-top: 1px solid #c69859;">
        <div style="color: #c69859; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 8px;">Note</div>
        <div style="white-space: pre-wrap;">${escapeHtml(note)}</div>
      </div>`
    : '';

  const html = `
    <div style="font-family: Spectral, Georgia, serif; color: #14100d; font-size: 16px; line-height: 1.6;">
      <h2 style="font-style: italic; font-weight: 400; font-size: 22px; margin: 0 0 18px; color: #8a1f3c;">
        ${escapeHtml(title)}
      </h2>
      <table style="border-collapse: collapse; width: 100%;">${rowsHtml}
      </table>
      ${noteHtml}
    </div>
  `;

  return { text, html };
}
