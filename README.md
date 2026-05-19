# ZhuZhu — ჟუჟუ

Marketing site for **ZhuZhu**, a premium jelly cocktail shots event-catering brand
based in Tbilisi, Georgia. Domain: [zhuzhu.ge](https://zhuzhu.ge).

Astro 5 (static) · TypeScript · Tailwind v4 (CSS-first via `@tailwindcss/vite`) · zero-JS by default.

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

The output is static HTML/CSS in `dist/`. Host-agnostic.

### Netlify

1. Connect the repo on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set the domain `zhuzhu.ge` under **Domain management**.

### Cloudflare Pages

1. *Create application → Connect to Git → select this repo.*
2. Framework preset: **Astro**.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add the custom domain `zhuzhu.ge`.

### Vercel

1. *Add New Project → import this repo.*
2. Framework preset auto-detects **Astro**.
3. Build command and output dir are auto-filled.

## Assets

The hero section autoplays a muted, looped video at `/hero.mp4`. Until you drop
the real file in `public/hero.mp4` a CSS-gradient poster card shows in its place.

Convert from `.mkv`:

```bash
ffmpeg -i input.mkv -c:v libx264 -crf 23 -an -vf "scale=1920:-2" public/hero.mp4
# optional smaller webm:
ffmpeg -i input.mkv -c:v libvpx-vp9 -b:v 0 -crf 32 -an -vf "scale=1600:-2" public/hero.webm
```

The OG card lives at `public/og.svg` — render it to `og.jpg` before launch
(most social platforms prefer raster):

```bash
npx svgexport public/og.svg public/og.jpg 1200:630 jpg 90%
```

Then flip the default `ogImage` in `src/layouts/Base.astro` from `/og.svg` → `/og.jpg`.

## Wiring a real form backend

`src/components/BookingForm.astro` currently opens a pre-filled
`mailto:hello@zhuzhu.ge` and disables the submit button with a success message.

To swap in a real backend later:

- **Resend** — add an `[POST] /api/book` endpoint (switch the adapter in
  `astro.config.mjs` to `@astrojs/node` or run the form as a serverless function
  on Vercel/Cloudflare). Replace the `mailto:` handler in BookingForm with a
  `fetch('/api/book', { method: 'POST', body: JSON.stringify(payload) })`.
- **Formspree** — set the form `action="https://formspree.io/f/yourcode"` and
  drop the JS handler.

The submit handler is marked `// TODO: replace with Resend/Formspree when backend is ready`.

## Content

Typed content lives under `src/content/`:

- `menu.ts` — twelve flavours, categories, allergens
- `packages.ts` — three packages, four-step process

No CMS yet — edit those files, rebuild.

## Design reference

This implementation uses the Claude Design handoff bundle at
[`https://api.anthropic.com/v1/design/h/mQwBySCj1MdEBCVME2rxkg`](https://api.anthropic.com/v1/design/h/mQwBySCj1MdEBCVME2rxkg)
as the source of truth for typography, palette, spacing and motion language:

- Cream parchment `#faf3e1` ground, Saperavi wine `#6b1226`, Chacha gold `#b88a3a`,
  deep ink `#1a120c`
- Cormorant Garamond + Noto Serif Georgian + Jost (bilingual)
- Editorial layouts, italic-accent serif inside upright headlines, horizontal
  marquee ticker, hover-nudge menu rows, film grain overlay
- All scroll-reveal driven by a single IntersectionObserver
- Respects `prefers-reduced-motion`

## Project structure

```
public/
  favicon.svg
  og.svg
  robots.txt
  hero.mp4              (drop your loop here)
src/
  components/
    Nav.astro
    Hero.astro
    FlavourTicker.astro
    MenuRow.astro
    PackageCard.astro
    ProcessStep.astro
    BookingForm.astro
    Footer.astro
    GrainOverlay.astro
    Reveal.astro
  content/
    menu.ts
    packages.ts
  layouts/
    Base.astro
  pages/
    index.astro       /  ←  landing
    menu.astro        /menu
    packages.astro    /packages
    book.astro        /book
    about.astro       /about
  styles/
    global.css
astro.config.mjs
tailwind via @tailwindcss/vite (CSS-first @theme block)
```

## License

Private — © ZhuZhu / ჟუჟუ
