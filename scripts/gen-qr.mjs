#!/usr/bin/env node
// Generate a branded QR code with the ZhuZhu logo centred.
//
// Usage:
//   node scripts/gen-qr.mjs "<url>" "<outPath.svg>" [logoPath]
//
// Example:
//   node scripts/gen-qr.mjs "https://zhuzhu.ge/tasted-us?at=gastro-week-2026" \
//                            public/qr/gastro-week-2026.svg
//
// The logo (public/logo-transparent.png by default) is base64-embedded so
// the SVG renders standalone — no external file dependencies. Error
// correction is forced to "H" (~30% recoverable) so the centred logo can
// safely obscure ~25% of the code without breaking scanning.

import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';

const url      = process.argv[2];
const out      = process.argv[3];
const logoPath = process.argv[4] || 'public/logo-transparent.png';

if (!url || !out) {
  console.error('Usage: node scripts/gen-qr.mjs "<url>" "<outPath.svg>" [logoPath]');
  process.exit(1);
}

const DARK  = '#0a0706';   // night
const LIGHT = '#faf3e1';   // warm bone

// Embed the logo as base64 so the SVG is fully self-contained
const logoBuf = fs.readFileSync(logoPath);
const logoDataUri = `data:image/png;base64,${logoBuf.toString('base64')}`;

const qrSvg = await QRCode.toString(url, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: DARK, light: LIGHT },
});

// Read the QR's viewBox so the brand mark goes in the same coordinate space
const vbMatch = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
const vb = vbMatch ? parseInt(vbMatch[1], 10) : 45;

const cx     = vb / 2;
const cy     = vb / 2;
const r      = vb * 0.125;            // backing radius (~25% of QR side, ~5% area)
const haloR  = r + vb * 0.006;        // thin bone halo for visual separation
const logoSz = r * 2 * 0.95;          // logo width — fills 95% of the dark backing

const mark = `
  <g transform="translate(${cx}, ${cy})" aria-hidden="true">
    <circle r="${haloR.toFixed(3)}" fill="${LIGHT}"/>
    <circle r="${r.toFixed(3)}" fill="${DARK}"/>
    <image href="${logoDataUri}"
           x="${(-logoSz / 2).toFixed(3)}" y="${(-logoSz / 2).toFixed(3)}"
           width="${logoSz.toFixed(3)}" height="${logoSz.toFixed(3)}"
           preserveAspectRatio="xMidYMid meet"/>
  </g>
`;

// Bake a printable raster-friendly width while keeping the SVG vector
const branded = qrSvg
  .replace(/width="\d+"/, 'width="2048"')
  .replace(/height="\d+"/, 'height="2048"')
  .replace('</svg>', mark + '</svg>');

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, branded);

console.log(`OK  ${out}`);
console.log(`    URL: ${url}`);
console.log(`    Logo: ${logoPath}`);
console.log(`    viewBox: 0 0 ${vb} ${vb} · vector, scales to any print size`);
