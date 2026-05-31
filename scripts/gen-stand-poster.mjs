#!/usr/bin/env node
// Generate the ZhuZhu stand poster — the brand intro sheet that sits on
// our stand at Tbilisi Gastro Week. One sheet, A3 portrait, dark canvas,
// with a prominent QR routing to /tasted-us?at=gastro-week-2026.
//
// Outputs:
//   public/posters/zhuzhu-stand.svg
//   public/posters/zhuzhu-stand.png   (~1200 × 1697, fits under preview limit)
//
// Workflow for printing:
//   1. Open the SVG in Figma / Illustrator / Inkscape
//   2. Convert text to outlines
//   3. Export PDF (CMYK, embed all) with 3 mm bleed
//
// Print spec:
//   A3 portrait — 297 × 420 mm trim + 3 mm bleed (SVG viewBox 303 × 426).
//   400 gsm matte black uncoated, optional gold foil on the wordmark
//   middle dot, the SIGNATURE/TBILISI eyebrow, and the rules.
//   The QR stays ink-printed (foil reflects → scanners fail).

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
    @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;1,300;1,400&amp;family=Noto+Serif+Georgian:wght@400;500&amp;family=Manrope:wght@400;500;600&amp;display=swap');
  </style>
`;

// Embed the gastro-week dark QR (bone modules on night) — matches canvas.
const qrUri = `data:image/png;base64,${fs.readFileSync('public/qr/gastro-week-2026-dark.png').toString('base64')}`;

// Crop marks at trim corners (3,3) / (300,3) / (3,423) / (300,423).
const cropmarks = `
  <g stroke="${GOLD}" stroke-width="0.12" opacity="0.3" fill="none">
    <line x1="0" y1="3" x2="2" y2="3"/>     <line x1="3" y1="0" x2="3" y2="2"/>
    <line x1="301" y1="3" x2="303" y2="3"/> <line x1="300" y1="0" x2="300" y2="2"/>
    <line x1="0" y1="423" x2="2" y2="423"/> <line x1="3" y1="424" x2="3" y2="426"/>
    <line x1="301" y1="423" x2="303" y2="423"/> <line x1="300" y1="424" x2="300" y2="426"/>
  </g>
`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg"
     width="297mm" height="420mm"
     viewBox="0 0 303 426">
  ${fontImport}
  <rect width="303" height="426" fill="${NIGHT}"/>

  <!-- Double hairline gold frame (inset from trim) -->
  <rect x="14"   y="14"   width="275" height="398" fill="none" stroke="${GOLD}" stroke-width="0.5" opacity="0.55"/>
  <rect x="17"   y="17"   width="269" height="392" fill="none" stroke="${GOLD}" stroke-width="0.2" opacity="0.35"/>

  <!-- ── Eyebrow ───────────────────────────────────────── -->
  <text x="28" y="30"
        font-family="Manrope, sans-serif" font-weight="500" font-size="3.4"
        fill="${GOLD}" letter-spacing="0.5">SIGNATURE  ·  COCKTAIL DESSERTS</text>
  <text x="275" y="30"
        font-family="Manrope, sans-serif" font-weight="500" font-size="3.4"
        fill="${ASH}" text-anchor="end" letter-spacing="0.5">TBILISI  ·  ATELIER</text>

  <!-- ── Hero wordmark ─────────────────────────────────── -->
  <text x="151.5" y="90"
        font-family="Spectral, Georgia, serif" font-style="italic" font-weight="400" font-size="38"
        fill="${BONE}" text-anchor="middle" letter-spacing="-0.02">
    <tspan font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif" font-size="34" dy="-1">ჟუჟუ</tspan><tspan fill="${GOLD}" dx="9" dy="0">·</tspan><tspan dx="9" dy="1">ZhuZhu</tspan>
  </text>

  <!-- ── Tagline ───────────────────────────────────────── -->
  <text x="151.5" y="118"
        font-family="Spectral, Georgia, serif" font-style="italic" font-weight="300" font-size="9"
        fill="${BONE_WARM}" text-anchor="middle" letter-spacing="-0.005">
    Cocktails, in bites.
  </text>

  <!-- ── Brand slogan (the verb form of ჟუჟუ) ──────────── -->
  <text x="151.5" y="135"
        font-family="'Noto Serif Georgian', Sylfaen, Georgia, serif" font-style="italic" font-weight="400" font-size="8.5"
        fill="${GOLD_BRIGHT}" text-anchor="middle">
    შეჟუჟუნდი
  </text>

  <!-- ── Decorative rule ───────────────────────────────── -->
  <line x1="133" y1="160" x2="170" y2="160" stroke="${GOLD}" stroke-width="0.3" opacity="0.7"/>

  <!-- ── Natural-ingredient pledge — the headline catch ── -->
  <text x="151.5" y="195"
        font-family="Manrope, sans-serif" font-weight="600" font-size="6.2"
        fill="${GOLD_BRIGHT}" text-anchor="middle" letter-spacing="0.32">
    NO ARTIFICIAL COLORS  ·  NO ARTIFICIAL FLAVORS
  </text>
  <text x="151.5" y="206"
        font-family="Spectral, Georgia, serif" font-style="italic" font-weight="300" font-size="5"
        fill="${ASH}" text-anchor="middle">
    Every ingredient picked, distilled or fermented in Georgia.
  </text>

  <!-- ── Decorative rule ───────────────────────────────── -->
  <line x1="133" y1="230" x2="170" y2="230" stroke="${GOLD}" stroke-width="0.3" opacity="0.7"/>

  <!-- ── The three signatures (names triad) ────────────── -->
  <text x="151.5" y="248"
        font-family="Manrope, sans-serif" font-weight="500" font-size="3.8"
        fill="${ASH}" text-anchor="middle" letter-spacing="0.42">
    THE THREE SIGNATURES
  </text>
  <text x="151.5" y="260"
        font-family="Spectral, Georgia, serif" font-style="italic" font-weight="400" font-size="7"
        fill="${BONE}" text-anchor="middle" letter-spacing="-0.005">
    Honey Chacha  ·  Cream Kiss  ·  Kinza Garden
  </text>

  <!-- ── QR — the conversion moment (larger, more central) -->
  <image href="${qrUri}" x="106.5" y="278" width="90" height="90" preserveAspectRatio="xMidYMid meet"/>

  <!-- ── QR caption ────────────────────────────────────── -->
  <text x="151.5" y="382"
        font-family="Manrope, sans-serif" font-weight="600" font-size="6"
        fill="${GOLD}" text-anchor="middle" letter-spacing="0.5">
    SCAN  ·  TBILISI GASTRO WEEK
  </text>
  <text x="151.5" y="392"
        font-family="Spectral, Georgia, serif" font-style="italic" font-weight="300" font-size="4.6"
        fill="${BONE_WARM}" text-anchor="middle">
    Tonight’s perks, monthly flavours, and the box.
  </text>

  <!-- ── Footer — handles + contact ───────────────────── -->
  <text x="151.5" y="406"
        font-family="Manrope, sans-serif" font-weight="500" font-size="3.4"
        fill="${ASH}" text-anchor="middle" letter-spacing="0.4">
    @SHE_ZHUZHU_NDI    ·    ZHUZHU.GE    ·    HELLO@ZHUZHU.GE
  </text>

  ${cropmarks}
</svg>`;

fs.mkdirSync('public/posters', { recursive: true });
const svgPath = 'public/posters/zhuzhu-stand.svg';
const pngPath = 'public/posters/zhuzhu-stand.png';
fs.writeFileSync(svgPath, svg);
// 1200 wide → ~1688 tall (under the 2000px preview limit).
execSync(`npx --yes svgexport "${svgPath}" "${pngPath}" 1200:`, { stdio: 'inherit' });

console.log('\nOK Generated:');
console.log(`  ${svgPath}`);
console.log(`  ${pngPath}`);
