#!/usr/bin/env node
// Generate ZhuZhu business cards.
//
// Outputs:
//   public/cards/front.svg              — same front on every card
//   public/cards/back-generic.svg       — generic (no founder name)
//   public/cards/back-keti.svg          — Keti / Co-founder
//   public/cards/back-anna.svg          — Anna / Co-founder
//   public/cards/back-lado.svg          — Lado / Co-founder
//
// Spec:
//   Trim: 85 x 55 mm (European business-card standard)
//   Bleed: 3 mm on every side → SVG canvas 91 x 61 mm
//   Safe zone: content kept inside 6–85 mm × 6–55 mm
//
// Workflow for printing:
//   1. Open the SVG in Figma / Illustrator / Inkscape
//   2. Select all text → Convert to outlines / Object → Path
//   3. Export as PDF (CMYK, embed all)
//   4. Send to printer with 3 mm bleed
//
// Recommended finishes (talk to the printer):
//   - 400 gsm matte black uncoated stock, OR silk-laminated black
//   - Gold foil stamp on: shape outline, cube highlight, hairlines, wordmark
//   - Keep QR ink-printed (foil reflects → camera fails to scan)

import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';

const NIGHT       = '#0a0706';
const BONE        = '#ede1c4';
const BONE_WARM   = '#e3d3ab';
const ASH         = '#b3a48a';
const GOLD        = '#c69859';
const GOLD_BRIGHT = '#e3b76d';

const cubeUri = `data:image/png;base64,${fs.readFileSync('public/cubes/tarragon-lime.png').toString('base64')}`;

// Inverted QR (bone modules on night) for the homepage
const qrPngBuf = await QRCode.toBuffer('https://zhuzhu.ge/', {
  type: 'png',
  errorCorrectionLevel: 'H',
  margin: 1,
  width: 600,
  color: { dark: BONE, light: NIGHT },
});
const qrUri = `data:image/png;base64,${qrPngBuf.toString('base64')}`;

// Font import — embedded so the rendered preview pulls Google Fonts.
// (For final print, convert text → outlines in your design app.)
const fontImport = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;1,300;1,400&amp;family=Noto+Serif+Georgian:wght@400&amp;family=Manrope:wght@500;600&amp;display=swap');
  </style>
`;

// Cropmarks at the trim (3 mm from each edge). Faint, not for production —
// printers add their own marks. These are visual aids only.
const cropmarks = `
  <g stroke="${GOLD}" stroke-width="0.05" opacity="0.3" fill="none">
    <line x1="0" y1="3" x2="2" y2="3"/>     <line x1="3" y1="0" x2="3" y2="2"/>
    <line x1="89" y1="3" x2="91" y2="3"/>   <line x1="88" y1="0" x2="88" y2="2"/>
    <line x1="0" y1="58" x2="2" y2="58"/>   <line x1="3" y1="59" x2="3" y2="61"/>
    <line x1="89" y1="58" x2="91" y2="58"/> <line x1="88" y1="59" x2="88" y2="61"/>
  </g>
`;

// ───── FRONT ──────────────────────────────────────────────────────
// Composition (within 3–88 × 3–58 trim):
//   cube centred upper portion at ~10–32 vertical
//   "Cocktails, in bites." italic Spectral ~38–42
//   "შეჟუჟუნდი" italic Georgian, gold-bright ~44–48
//   "zhuzhu.ge" tiny wordmark ~52–56
const front = `<svg xmlns="http://www.w3.org/2000/svg"
     width="91mm" height="61mm"
     viewBox="0 0 91 61">
  ${fontImport}
  <rect width="91" height="61" fill="${NIGHT}"/>

  <!-- Hero cube (Honey Lemon — tarragon-lime.png) -->
  <image href="${cubeUri}" x="33" y="6" width="25" height="25" preserveAspectRatio="xMidYMid meet"/>

  <!-- English tagline -->
  <text x="45.5" y="40"
        font-family="Spectral, Georgia, 'Times New Roman', serif"
        font-style="italic" font-weight="300" font-size="5"
        fill="${BONE}" text-anchor="middle"
        letter-spacing="-0.05">
    Cocktails, in bites.
  </text>

  <!-- Gold em-dash separator (subtle) -->
  <line x1="40" y1="44" x2="51" y2="44" stroke="${GOLD}" stroke-width="0.15" opacity="0.55"/>

  <!-- Georgian companion -->
  <text x="45.5" y="49"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif"
        font-weight="400" font-size="4"
        fill="${GOLD_BRIGHT}" text-anchor="middle">
    შეჟუჟუნდი
  </text>

  <!-- Wordmark + domain at the very bottom -->
  <text x="45.5" y="56"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="300" font-size="3"
        fill="${BONE_WARM}" text-anchor="middle"
        letter-spacing="0.05">
    zhuzhu.ge
  </text>

  ${cropmarks}
</svg>`;

// ───── BACK ───────────────────────────────────────────────────────
// Left column (3–32): QR centred vertically.
// Right column (38–85): name + role + contact stack, left-aligned.
// Bottom rule + "TBILISI · 2024" footer.
function back({ name = null, role = null } = {}) {
  // Generic card has no founder name; use the brand wordmark in that slot.
  const headLine    = name ?? 'zhuzhu';
  const headStyle   = name ? 'font-weight="400"' : 'font-weight="300"';
  const subLine     = role ?? 'Cocktail desserts.';
  const subColor    = role ? GOLD : ASH;
  const subStyle    = role
    ? `font-family="Manrope, sans-serif" font-weight="500" font-size="2.4" letter-spacing="0.32"`
    : `font-family="Spectral, Georgia, serif" font-style="italic" font-weight="300" font-size="3"`;
  const subText     = role ? role.toUpperCase() : subLine;

  return `<svg xmlns="http://www.w3.org/2000/svg"
     width="91mm" height="61mm"
     viewBox="0 0 91 61">
  ${fontImport}
  <rect width="91" height="61" fill="${NIGHT}"/>

  <!-- QR (homepage), bone on night, with the logo mark already centred -->
  <image href="${qrUri}" x="9" y="15.5" width="24" height="24"/>
  <text x="21" y="44.5"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2"
        fill="${ASH}" text-anchor="middle"
        letter-spacing="0.32">
    SCAN
  </text>

  <!-- Name / wordmark -->
  <text x="40" y="18.5"
        font-family="Spectral, Georgia, serif"
        font-style="italic" ${headStyle} font-size="6.5"
        fill="${BONE}">
    ${headLine}
  </text>

  <!-- Role (or tagline on generic) -->
  <text x="40" y="${role ? 23 : 23.5}"
        ${subStyle}
        fill="${subColor}">
    ${subText}
  </text>

  <!-- Contact stack -->
  <g font-family="Spectral, Georgia, serif"
     font-style="italic" font-weight="300"
     font-size="3.2" fill="${BONE_WARM}">
    <text x="40" y="32">hello@zhuzhu.ge</text>
    <text x="40" y="37">+995 XXX XX XX XX</text>
    <text x="40" y="42">@she_zhuzhu_ndi</text>
  </g>

  <!-- Bottom hairline + city/year -->
  <line x1="40" y1="49" x2="85" y2="49" stroke="${GOLD}" stroke-width="0.15" opacity="0.4"/>
  <text x="40" y="55"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.4"
        fill="${GOLD}"
        letter-spacing="0.36">
    TBILISI · 2024
  </text>

  ${cropmarks}
</svg>`;
}

const backs = [
  { variant: 'generic', name: null,   role: null },
  { variant: 'keti',    name: 'Keti', role: 'Co-founder' },
  { variant: 'anna',    name: 'Anna', role: 'Co-founder' },
  { variant: 'lado',    name: 'Lado', role: 'Co-founder' },
];

fs.mkdirSync('public/cards', { recursive: true });
fs.writeFileSync('public/cards/front.svg', front);
for (const b of backs) {
  fs.writeFileSync(`public/cards/back-${b.variant}.svg`, back(b));
}

console.log('OK Generated:');
console.log('  public/cards/front.svg');
backs.forEach((b) => console.log(`  public/cards/back-${b.variant}.svg`));
console.log();
console.log('Next: rasterize to PNG previews with');
console.log('  for f in public/cards/*.svg; do');
console.log('    npx svgexport "$f" "${f%.svg}.png" 2048: png 100%');
console.log('  done');
