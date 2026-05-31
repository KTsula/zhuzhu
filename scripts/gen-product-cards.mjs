#!/usr/bin/env node
// Generate ZhuZhu signature product cards (for wooden-block stand display).
//
// Outputs (3 cards, 100 x 90 mm trim + 3 mm bleed → SVG 106 x 96):
//   public/products/card-honey-chacha.svg / .png   — Nº 01
//   public/products/card-cream-kiss.svg   / .png   — Nº 02
//   public/products/card-kinza-garden.svg / .png   — Nº 03
//
// Anatomy:
//   Visible zone   = top 65 mm  (everything readable lives here)
//   Insertion zone = bottom 25 mm  (slides into the wooden block, invisible)
//   Bleed          = 3 mm every side
//
// Workflow for printing:
//   1. Open the SVG in Figma / Illustrator / Inkscape
//   2. Convert text to outlines
//   3. Export PDF (CMYK, embed all) with 3 mm bleed
//
// Recommended finishes (same as biz cards):
//   400 gsm matte black uncoated stock, gold foil on hairlines + the
//   middle dot in the brand mark + the Nº numeral. Hook line stays
//   ink-printed (foil at small italic body sizes can muddy).

import fs from 'node:fs';
import { execSync } from 'node:child_process';

const NIGHT       = '#0a0706';
const BONE        = '#ede1c4';
const BONE_WARM   = '#e3d3ab';
const ASH         = '#b3a48a';
const GOLD        = '#c69859';
const GOLD_BRIGHT = '#e3b76d';

const fontImport = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;1,300;1,400&amp;family=Noto+Serif+Georgian:wght@400;500&amp;family=Manrope:wght@500;600&amp;display=swap');
  </style>
`;

// Trim 100x90, bleed 3mm → viewBox 106x96.
// Crop marks at trim corners (3,3) — (103,3) — (3,93) — (103,93).
const cropmarks = `
  <g stroke="${GOLD}" stroke-width="0.05" opacity="0.3" fill="none">
    <line x1="0" y1="3" x2="2" y2="3"/>       <line x1="3" y1="0" x2="3" y2="2"/>
    <line x1="104" y1="3" x2="106" y2="3"/>   <line x1="103" y1="0" x2="103" y2="2"/>
    <line x1="0" y1="93" x2="2" y2="93"/>     <line x1="3" y1="94" x2="3" y2="96"/>
    <line x1="104" y1="93" x2="106" y2="93"/> <line x1="103" y1="94" x2="103" y2="96"/>
  </g>
`;

const products = [
  {
    slug: 'honey-chacha',
    nameEn: 'Honey Chacha',
    nameKa: 'თაფლის ჭაჭა',
    ingredients: ['Honey', 'Chacha', 'Lemon'],
  },
  {
    slug: 'cream-kiss',
    nameEn: 'Cream Kiss',
    nameKa: 'კრემის კოცნა',
    ingredients: ['Churchkhela', 'Walnut', 'Cream', 'Baileys'],
  },
  {
    slug: 'kinza-garden',
    nameEn: 'Kinza Garden',
    nameKa: 'ქინძის ბაღი',
    ingredients: ['Cilantro', 'Limoncello', 'Gin'],
  },
];

function card(p) {
  const ingLine = p.ingredients.map((s) => s.toUpperCase()).join('   ·   ');
  // Visible top zone: trim y=0..65 → viewBox y=3..68.
  // Insertion (hidden): trim y=65..90 → viewBox y=68..93. Empty NIGHT.
  // Bleed: 3mm each side → viewBox 0..3 and 93..96 on each axis edge.
  return `<svg xmlns="http://www.w3.org/2000/svg"
     width="100mm" height="90mm"
     viewBox="0 0 106 96">
  ${fontImport}
  <rect width="106" height="96" fill="${NIGHT}"/>

  <!-- Double hairline gold frame — contained in the VISIBLE zone only. -->
  <rect x="7"   y="7"   width="92" height="57" fill="none" stroke="${GOLD}" stroke-width="0.18" opacity="0.62"/>
  <rect x="8.5" y="8.5" width="89" height="54" fill="none" stroke="${GOLD}" stroke-width="0.08" opacity="0.40"/>

  <!-- Top eyebrow: SIGNATURE on the left, TBILISI on the right -->
  <text x="14" y="14.5"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.4"
        fill="${GOLD}"
        letter-spacing="0.42">SIGNATURE</text>

  <text x="92" y="14.5"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.4"
        fill="${ASH}" text-anchor="end"
        letter-spacing="0.42">TBILISI</text>

  <!-- English dish name — the headline -->
  <text x="53" y="33"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="400" font-size="11"
        fill="${BONE}" text-anchor="middle"
        letter-spacing="-0.02">${p.nameEn}</text>

  <!-- Georgian companion name -->
  <text x="53" y="42"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif"
        font-style="italic" font-weight="400" font-size="5.4"
        fill="${BONE_WARM}" text-anchor="middle">${p.nameKa}</text>

  <!-- Gold rule (decorative divider) -->
  <line x1="48" y1="49" x2="58" y2="49" stroke="${GOLD}" stroke-width="0.18" opacity="0.75"/>

  <!-- Ingredient triad (caps tracked, gold) -->
  <text x="53" y="56"
        font-family="Manrope, sans-serif"
        font-weight="500" font-size="2.8"
        fill="${GOLD_BRIGHT}" text-anchor="middle"
        letter-spacing="0.36">${ingLine}</text>

  <!-- Brand watermark — Georgian first, gold middot, ZhuZhu camelCase -->
  <text x="53" y="61.5"
        font-family="Spectral, Georgia, serif"
        font-style="italic" font-weight="300" font-size="2.6"
        fill="${ASH}" text-anchor="middle">
    <tspan font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif" font-size="2.4">ჟუჟუ</tspan><tspan fill="${GOLD}" dx="1.6">·</tspan><tspan dx="1.6">ZhuZhu</tspan>
  </text>

  ${cropmarks}
</svg>`;
}

fs.mkdirSync('public/products', { recursive: true });

for (const p of products) {
  const svgPath = `public/products/card-${p.slug}.svg`;
  const pngPath = `public/products/card-${p.slug}.png`;
  fs.writeFileSync(svgPath, card(p));
  // Raster at 1500 wide so the preview tool can still read PNGs (<2000px limit).
  execSync(`npx --yes svgexport "${svgPath}" "${pngPath}" 1500:`, { stdio: 'inherit' });
}

console.log('\nOK Generated:');
products.forEach((p) => {
  console.log(`  public/products/card-${p.slug}.svg`);
  console.log(`  public/products/card-${p.slug}.png`);
});
