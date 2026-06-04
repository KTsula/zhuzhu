# ZhuZhu — ჟუჟუ

Marketing site for **ZhuZhu**, a premium cocktail-dessert event-catering brand
based in Tbilisi, Georgia. Domain: [zhuzhu.ge](https://zhuzhu.ge).

Astro 5 · TypeScript · hand-written scoped CSS · bilingual (EN/KA) · near-zero JS.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build        # → dist/
npm run preview      # serve dist/
```

## Deploy

Deployed on **Vercel** (`@astrojs/vercel` adapter). Push to the connected repo
and Vercel builds with `npm run build`. The two `/api/*` routes run as
serverless functions; everything else is prerendered static HTML.

The custom domain `zhuzhu.ge` is set under the project's **Domains** settings.

## Single sources of truth

Two files hold everything that's likely to change. Edit them and every page and
component updates automatically — there are no copies elsewhere.

- **Content & pricing — `src/content/copy.ts`.** All bilingual copy plus the
  signature flavours, classics, packages, founders and per-page SEO metadata.
  Prices live here as numbers (e.g. a signature's per-cube `price`, a package
  `total`) and are formatted at render time, so changing a price in `copy.ts`
  updates the menu, the order page and every box that references it.
- **Branding — `src/styles/global.css`.** The `:root` block is the only place
  colours, font families and the type scale are defined. Components reference
  them as `var(--gold)`, `var(--display)`, `var(--t-2xl)`, etc.

There is no CMS — edit the files and rebuild.

## Forms

Both forms POST JSON to a serverless route that validates the payload, escapes
it, and emails the team via [Resend](https://resend.com):

- `src/components/BookingForm.astro` → `POST /api/book` (`src/pages/api/book.ts`)
- `src/pages/tasted-us.astro` lead capture → `POST /api/lead` (`src/pages/api/lead.ts`)

Shared escaping, JSON-response and email-template helpers live in
`src/lib/notify.ts`. The routes read these environment variables (set them in
Vercel):

```
RESEND_API_KEY      # required to actually send; without it the form still
                    # succeeds for the user and the payload is logged
BOOKING_FROM        # optional, defaults to "ZhuZhu Bookings <bookings@zhuzhu.ge>"
BOOKING_TO          # optional, defaults to "hello@zhuzhu.ge"
LEADS_FROM          # optional, defaults to "ZhuZhu Leads <leads@zhuzhu.ge>"
LEADS_TO            # optional, defaults to "hello@zhuzhu.ge"
```

Both `/api/book` and `/api/lead` also persist to **Supabase** via a direct
PostgREST insert with the service key (`SUPABASE_URL`, `SUPABASE_SERVICE_KEY`).
Bookings land in `public.bookings` (now with separate `phone` / `email`
columns); leads and box-waitlist signups upsert into `public.leads` (keyed on
`email`, with a `source` tag — e.g. `box-waitlist`). Saves are best-effort: if
Supabase is unconfigured or errors, the form still succeeds and the team email
is the backup.

The mystery-box subscription (Paddle) is not live yet — the `/box` page is an
email **waitlist** for now (writes to `public.leads`, `source = box-waitlist`).

## Design language

- Palette: night `#0a0706` ground, bone `#ede1c4` text, gold `#c69859` accent,
  wine `#8a1f3c`.
- Type: **Spectral** (display, italic) + **Manrope** (body/UI) + **Noto Serif
  Georgian** (Georgian), all self-hosted via `@fontsource`.
- Editorial dark layouts, an italic-accent serif display face, and a first-land
  veil intro.
- All scroll-reveal is driven by a single `IntersectionObserver` in
  `src/layouts/Base.astro`; the signature carousel uses `motion`.
- Respects `prefers-reduced-motion` throughout.

Language is switched client-side (`src/scripts/lang.ts`) by toggling
`html[data-lang]`; CSS shows the matching `.lng-en` / `.lng-ka` spans.

## Project structure

```
public/                  static assets (logo, og.png, favicon, cube images)
src/
  components/            Nav, Hero, SignatureShowcase, Packages, MenuClassics,
                         MoreFlavours, Manifesto, BookingForm, Footer, Wordmark,
                         LangSwitch, HookVeil
  content/
    copy.ts              ← content + pricing source of truth
  lib/
    notify.ts            shared helpers for the /api form routes
  layouts/
    Base.astro           <head>, nav, footer, reveal observer
  pages/
    index.astro          /            landing
    menu.astro           /menu
    order.astro          /order
    box.astro            /box         monthly subscription
    about.astro          /about
    tasted-us.astro      /tasted-us   post-event list signup
    book.astro           → 301 /#book
    packages.astro       → 301 /order
    api/book.ts          POST booking → Resend
    api/lead.ts          POST lead    → Resend
  scripts/
    lang.ts              language toggle
  styles/
    global.css           ← branding source of truth + reset
```

> Print-design surfaces (business cards, stand poster, product cards) and the
> Remotion marketing pipeline live under `scripts/`, `social/` and `marketing/`
> and are git-ignored — local-only, never deployed.

## License

Private — © ZhuZhu / ჟუჟუ
