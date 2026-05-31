#!/usr/bin/env node
// Generate ZhuZhu business cards.
//
// Outputs:
//   public/cards/front.svg              — same front on every card
//   public/cards/back-generic.svg       — generic (brand)
//   public/cards/back-keti.svg          — Keti Sulamanidze · ქეთი სულამანიძე
//   public/cards/back-anna.svg          — Anna Chigladze · ანა ჭიღლაძე
//   public/cards/back-lado.svg          — Vladimer Rusetsky · ვლადიმერ რუსეცკი
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
//   - Gold foil stamp on hairlines, role caps, "შეჟუჟუნდი", the middle dot
//   - Keep QR ink-printed (foil reflects → camera fails to scan)

import QRCode from 'qrcode';
import fs from 'node:fs';

const NIGHT       = '#0a0706';
const BONE        = '#ede1c4';
const BONE_WARM   = '#e3d3ab';
const ASH         = '#b3a48a';
const GOLD        = '#c69859';
const GOLD_BRIGHT = '#e3b76d';

const cubeUri = `data:image/png;base64,${fs.readFileSync('public/cubes/honey-chacha.png').toString('base64')}`;
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

const fontImport = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;1,300;1,400&amp;family=Noto+Serif+Georgian:wght@400;500&amp;family=Manrope:wght@500;600&amp;display=swap');
  </style>
`;

const cropmarks = `
  <g stroke="${GOLD}" stroke-width="0.05" opacity="0.3" fill="none">
    <line x1="0" y1="3" x2="2" y2="3"/>     <line x1="3" y1="0" x2="3" y2="2"/>
    <line x1="89" y1="3" x2="91" y2="3"/>   <line x1="88" y1="0" x2="88" y2="2"/>
    <line x1="0" y1="58" x2="2" y2="58"/>   <line x1="3" y1="59" x2="3" y2="61"/>
    <line x1="89" y1="58" x2="91" y2="58"/> <line x1="88" y1="59" x2="88" y2="61"/>
  </g>
`;

// Tiny logo signature for the back corner
const logoMark = `<image href="${logoUri}" x="78" y="49" width="9" height="9" preserveAspectRatio="xMidYMid meet" opacity="0.85"/>`;

// ───── FRONT ──────────────────────────────────────────────────────
// Top: "ZhuZhu · ჟუჟუ" wordmark text (no logo image — moved to back)
// Middle: cube (the hero)
// Below cube: "Cocktails, in bites." + gold em-dash + "შეჟუჟუნდი"
const front = `<svg xmlns="http://www.w3.org/2000/svg"
     width="91mm" height="61mm"
     viewBox="0 0 91 61">
  ${fontImport}
  <rect width="91" height="61" fill="${NIGHT}"/>

  <!-- Brand wordmark at top, inline bilingual (Georgian first) -->
  <text x="45.5" y="11.5"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="400" font-size="4"
        fill="${BONE}" text-anchor="middle">
    <tspan font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif" font-size="3.6" dy="-0.1">ჟუჟუ</tspan><tspan fill="${GOLD}" dx="2.5" dy="-0.1">·</tspan><tspan dx="2.5" dy="0.2">ZhuZhu</tspan>
  </text>

  <!-- Hero cube (Honey Chacha — honey-chacha.png) -->
  <image href="${cubeUri}" x="35" y="16" width="21" height="21" preserveAspectRatio="xMidYMid meet"/>

  <!-- English tagline -->
  <text x="45.5" y="44"
        font-family="Spectral, Georgia, 'Times New Roman', serif"
        font-style="italic" font-weight="300" font-size="3.5"
        fill="${BONE}" text-anchor="middle"
        letter-spacing="-0.03">
    Cocktails, in bites.
  </text>

  <!-- Gold em-dash separator -->
  <line x1="42.5" y1="47" x2="48.5" y2="47" stroke="${GOLD}" stroke-width="0.12" opacity="0.55"/>

  <!-- Georgian companion -->
  <text x="45.5" y="52"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif"
        font-weight="400" font-size="2.8"
        fill="${GOLD_BRIGHT}" text-anchor="middle">
    შეჟუჟუნდი
  </text>

  ${cropmarks}
</svg>`;

// ───── BACK ───────────────────────────────────────────────────────
// Left column (9–32): QR + "SCAN" caption
// Right column (38–85):
//   Generic: "ZhuZhu · ჟუჟუ" inline + "COCKTAIL DESSERTS"
//   Founder: Georgian full name (italic Noto Serif Georgian) ABOVE
//            English full name (italic Spectral, smaller) + "CO-FOUNDER"
//   Contact stack below
//   Tiny logo bottom-right corner as brand signature
function back({ nameEn = null, nameKa = null, roleEn = null } = {}) {
  let nameBlock;

  if (nameEn && nameKa) {
    // Founder card: Georgian on top, English below, smaller font.
    nameBlock = `
  <!-- Georgian full name (above) -->
  <text x="40" y="20"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif"
        font-style="italic" font-weight="400" font-size="4.6"
        fill="${BONE}">
    ${nameKa}
  </text>
  <!-- English full name (below, smaller) -->
  <text x="40" y="25.5"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="300" font-size="3.8"
        fill="${BONE_WARM}">
    ${nameEn}
  </text>
  <!-- Role -->
  <text x="40" y="31"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.3"
        fill="${GOLD}"
        letter-spacing="0.32">
    ${(roleEn ?? 'Co-founder').toUpperCase()}
  </text>`;
  } else {
    // Generic card: inline "ჟუჟუ · ZHUZHU" (Georgian first) + tagline.
    nameBlock = `
  <!-- Bilingual brand wordmark inline (Georgian first) -->
  <text x="40" y="22"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="400" font-size="6"
        fill="${BONE}">
    <tspan font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif" font-size="5.4" dy="-0.1">ჟუჟუ</tspan><tspan fill="${GOLD}" dx="3" dy="-0.2">·</tspan><tspan dx="3" dy="0.3">ZhuZhu</tspan>
  </text>
  <!-- Tagline in tracked caps -->
  <text x="40" y="29"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.3"
        fill="${GOLD}"
        letter-spacing="0.32">
    COCKTAIL DESSERTS
  </text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg"
     width="91mm" height="61mm"
     viewBox="0 0 91 61">
  ${fontImport}
  <rect width="91" height="61" fill="${NIGHT}"/>

  <!-- QR (homepage), bone on night -->
  <image href="${qrUri}" x="9" y="19" width="23" height="23"/>
  <text x="20.5" y="47"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2"
        fill="${ASH}" text-anchor="middle"
        letter-spacing="0.32">
    SCAN
  </text>

  ${nameBlock}

  <!-- Contact stack -->
  <g font-family="Spectral, Georgia, serif"
     font-style="italic" font-weight="300"
     font-size="3.2" fill="${BONE_WARM}">
    <text x="40" y="40">hello@zhuzhu.ge</text>
    <text x="40" y="45">+995 XXX XX XX XX</text>
    <text x="40" y="50">@she_zhuzhu_ndi</text>
  </g>

  <!-- Logo signature in the bottom-right corner -->
  ${logoMark}

  ${cropmarks}
</svg>`;
}

const backs = [
  { variant: 'generic', nameEn: null,                  nameKa: null,                       roleEn: null         },
  { variant: 'keti',    nameEn: 'Keti Sulamanidze',    nameKa: 'ქეთი სულამანიძე',    roleEn: 'Co-founder' },
  { variant: 'anna',    nameEn: 'Anna Chigladze',      nameKa: 'ანა ჭიღლაძე',        roleEn: 'Co-founder' },
  { variant: 'lado',    nameEn: 'Vladimer Rusetsky',   nameKa: 'ვლადიმერ რუსეცკი',   roleEn: 'Co-founder' },
];

fs.mkdirSync('public/cards', { recursive: true });
fs.writeFileSync('public/cards/front.svg', front);
for (const b of backs) {
  fs.writeFileSync(`public/cards/back-${b.variant}.svg`, back(b));
}

console.log('OK Generated:');
console.log('  public/cards/front.svg');
backs.forEach((b) => console.log(`  public/cards/back-${b.variant}.svg`));
