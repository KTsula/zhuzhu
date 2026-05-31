#!/usr/bin/env node
// Generate ZhuZhu business cards.
//
// Outputs:
//   public/cards/front.svg              — same front on every card
//   public/cards/back-generic.svg       — generic (brand)
//   public/cards/back-keti.svg          — Keti · ქეთი / Co-founder
//   public/cards/back-anna.svg          — Anna · ანა / Co-founder
//   public/cards/back-lado.svg          — Lado · ლადო / Co-founder
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
// Recommended finishes:
//   - 400 gsm matte black uncoated stock, OR silk-laminated black
//   - Gold foil stamp on: hairlines, role caps, gold tagline
//   - Keep QR ink-printed (foil reflects → camera fails to scan)

import QRCode from 'qrcode';
import fs from 'node:fs';

const NIGHT       = '#0a0706';
const BONE        = '#ede1c4';
const BONE_WARM   = '#e3d3ab';
const ASH         = '#b3a48a';
const GOLD        = '#c69859';
const GOLD_BRIGHT = '#e3b76d';

const cubeUri = `data:image/png;base64,${fs.readFileSync('public/cubes/tarragon-lime.png').toString('base64')}`;
const logoUri = `data:image/png;base64,${fs.readFileSync('public/logo-transparent.png').toString('base64')}`;

// Inverted QR (bone modules on night) → homepage
const qrPngBuf = await QRCode.toBuffer('https://zhuzhu.ge/', {
  type: 'png',
  errorCorrectionLevel: 'H',
  margin: 1,
  width: 600,
  color: { dark: BONE, light: NIGHT },
});
const qrUri = `data:image/png;base64,${qrPngBuf.toString('base64')}`;

// Font import — embedded so the rendered preview pulls Google Fonts.
// For final print, convert text → outlines in your design app.
const fontImport = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;1,300;1,400&amp;family=Noto+Serif+Georgian:wght@400;500&amp;family=Manrope:wght@500;600&amp;display=swap');
  </style>
`;

// Cropmarks at the 3-mm trim — visual aids only.
const cropmarks = `
  <g stroke="${GOLD}" stroke-width="0.05" opacity="0.3" fill="none">
    <line x1="0" y1="3" x2="2" y2="3"/>     <line x1="3" y1="0" x2="3" y2="2"/>
    <line x1="89" y1="3" x2="91" y2="3"/>   <line x1="88" y1="0" x2="88" y2="2"/>
    <line x1="0" y1="58" x2="2" y2="58"/>   <line x1="3" y1="59" x2="3" y2="61"/>
    <line x1="89" y1="58" x2="91" y2="58"/> <line x1="88" y1="59" x2="88" y2="61"/>
  </g>
`;

// ───── FRONT ──────────────────────────────────────────────────────
// Top: small logo (brand signature)
// Middle: cube (hero)
// Below cube: "Cocktails, in bites." + gold em-dash + "შეჟუჟუნდი"
const front = `<svg xmlns="http://www.w3.org/2000/svg"
     width="91mm" height="61mm"
     viewBox="0 0 91 61">
  ${fontImport}
  <rect width="91" height="61" fill="${NIGHT}"/>

  <!-- Logo at top -->
  <image href="${logoUri}" x="38" y="4.5" width="15" height="15" preserveAspectRatio="xMidYMid meet"/>

  <!-- Hero cube (Honey Lemon — tarragon-lime.png) -->
  <image href="${cubeUri}" x="36" y="18" width="19" height="19" preserveAspectRatio="xMidYMid meet"/>

  <!-- English tagline -->
  <text x="45.5" y="44"
        font-family="Spectral, Georgia, 'Times New Roman', serif"
        font-style="italic" font-weight="300" font-size="4.5"
        fill="${BONE}" text-anchor="middle"
        letter-spacing="-0.05">
    Cocktails, in bites.
  </text>

  <!-- Gold em-dash separator -->
  <line x1="41" y1="47.5" x2="50" y2="47.5" stroke="${GOLD}" stroke-width="0.15" opacity="0.55"/>

  <!-- Georgian companion -->
  <text x="45.5" y="53"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif"
        font-weight="400" font-size="3.6"
        fill="${GOLD_BRIGHT}" text-anchor="middle">
    შეჟუჟუნდი
  </text>

  ${cropmarks}
</svg>`;

// ───── BACK ───────────────────────────────────────────────────────
// Left column (8–32): QR centred vertically + "SCAN" caption
// Right column (38–85):
//   English name (italic Spectral)
//   Georgian name (italic Noto Serif Georgian)
//   "CO-FOUNDER" / "COCKTAIL DESSERTS" tracked caps
//   Contact stack
//   Hairline + "TBILISI · 2024" footer
function back({ nameEn = null, nameKa = null, roleEn = null } = {}) {
  // Generic card uses the wordmark in the name slot.
  const headEn  = nameEn ?? 'zhuzhu';
  const headKa  = nameKa ?? 'ჟუჟუ';
  const role    = (roleEn ?? 'Cocktail desserts').toUpperCase();

  return `<svg xmlns="http://www.w3.org/2000/svg"
     width="91mm" height="61mm"
     viewBox="0 0 91 61">
  ${fontImport}
  <rect width="91" height="61" fill="${NIGHT}"/>

  <!-- QR (homepage), bone on night -->
  <image href="${qrUri}" x="9" y="14" width="23" height="23"/>
  <text x="20.5" y="42"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2"
        fill="${ASH}" text-anchor="middle"
        letter-spacing="0.32">
    SCAN
  </text>

  <!-- English name / wordmark -->
  <text x="40" y="17"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="400" font-size="6"
        fill="${BONE}">
    ${headEn}
  </text>

  <!-- Georgian name -->
  <text x="40" y="22.5"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif"
        font-style="italic" font-weight="400" font-size="5"
        fill="${BONE_WARM}">
    ${headKa}
  </text>

  <!-- Role / tagline in tracked caps -->
  <text x="40" y="28"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.3"
        fill="${GOLD}"
        letter-spacing="0.32">
    ${role}
  </text>

  <!-- Contact stack -->
  <g font-family="Spectral, Georgia, serif"
     font-style="italic" font-weight="300"
     font-size="3.2" fill="${BONE_WARM}">
    <text x="40" y="36">hello@zhuzhu.ge</text>
    <text x="40" y="41">+995 XXX XX XX XX</text>
    <text x="40" y="46">@she_zhuzhu_ndi</text>
  </g>

  <!-- Footer hairline + city/year -->
  <line x1="40" y1="51" x2="85" y2="51" stroke="${GOLD}" stroke-width="0.15" opacity="0.4"/>
  <text x="40" y="56"
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
  { variant: 'generic', nameEn: null,   nameKa: null,    roleEn: null         },
  { variant: 'keti',    nameEn: 'Keti', nameKa: 'ქეთი', roleEn: 'Co-founder' },
  { variant: 'anna',    nameEn: 'Anna', nameKa: 'ანა',  roleEn: 'Co-founder' },
  { variant: 'lado',    nameEn: 'Lado', nameKa: 'ლადო', roleEn: 'Co-founder' },
];

fs.mkdirSync('public/cards', { recursive: true });
fs.writeFileSync('public/cards/front.svg', front);
for (const b of backs) {
  fs.writeFileSync(`public/cards/back-${b.variant}.svg`, back(b));
}

console.log('OK Generated:');
console.log('  public/cards/front.svg');
backs.forEach((b) => console.log(`  public/cards/back-${b.variant}.svg`));
