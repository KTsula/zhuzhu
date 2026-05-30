#!/usr/bin/env node
// Generate a branded QR code (with the ZhuZhu teardrop in the centre).
//
// Usage:
//   node scripts/gen-qr.mjs "<url>" "<outPath.svg>"
//
// Example:
//   node scripts/gen-qr.mjs "https://zhuzhu.ge/tasted-us?at=gastro-week-2026" \
//                            public/qr/gastro-week-2026.svg
//
// Error correction level is forced to "H" (~30% recoverable) so the centre
// brand mark can safely obscure ~20% of the code without breaking scanning.

import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';

const url = process.argv[2];
const out = process.argv[3];

if (!url || !out) {
  console.error('Usage: node scripts/gen-qr.mjs "<url>" "<outPath.svg>"');
  process.exit(1);
}

const DARK  = '#0a0706';   // night
const LIGHT = '#faf3e1';   // warm bone
const GOLD  = '#c69859';

const qrSvg = await QRCode.toString(url, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: DARK, light: LIGHT },
});

// Read the QR's viewBox so we can place the brand mark in the same coordinate space
const vbMatch = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
const vb = vbMatch ? parseInt(vbMatch[1], 10) : 45;

const cx = vb / 2;
const cy = vb / 2;
const r  = vb * 0.105;          // outer hole radius: ~21% of QR width
const ringR = r - vb * 0.004;
const dropScale = r / 50;       // teardrop path drawn at ~50 unit height

const mark = `
  <g transform="translate(${cx}, ${cy})" aria-hidden="true">
    <circle r="${r.toFixed(3)}" fill="${LIGHT}"/>
    <circle r="${ringR.toFixed(3)}" fill="${DARK}"/>
    <g transform="scale(${dropScale.toFixed(4)})">
      <path d="M 0 -30 C -14 -5 -14 25 0 32 C 14 25 14 -5 0 -30 Z"
            fill="none" stroke="${GOLD}" stroke-width="3.2"
            stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="0" cy="14" r="2.6" fill="${GOLD}"/>
    </g>
  </g>
`;

// Force a printable raster-friendly size while keeping the SVG vector
const branded = qrSvg
  .replace(/width="\d+"/, 'width="2048"')
  .replace(/height="\d+"/, 'height="2048"')
  .replace('</svg>', mark + '</svg>');

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, branded);

console.log(`OK  ${out}`);
console.log(`    URL: ${url}`);
console.log(`    viewBox: 0 0 ${vb} ${vb} (vector — scales to any print size)`);
