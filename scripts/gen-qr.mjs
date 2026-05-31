#!/usr/bin/env node
// Generate a branded QR code with the ZhuZhu logo centred.
//
// Usage:
//   node scripts/gen-qr.mjs "<url>" "<outPath.svg>" [logoPath] [--invert]
//
// --invert flips the colour scheme so the QR is bone-on-night (matches the
//   site's dark canvas). Modern phone cameras and QR apps read inverted
//   codes fine; only legacy industrial scanners may refuse.
//
// Error correction is forced to "H" (~30% recoverable) so the centre logo
// can safely obscure ~25% of the code without breaking scanning.

import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';

const args       = process.argv.slice(2);
const inverted   = args.includes('--invert');
const positional = args.filter((a) => !a.startsWith('--'));
const url        = positional[0];
const out        = positional[1];
const logoPath   = positional[2] || 'public/logo-transparent.png';

if (!url || !out) {
  console.error('Usage: node scripts/gen-qr.mjs "<url>" "<outPath.svg>" [logoPath] [--invert]');
  process.exit(1);
}

const NIGHT = '#0a0706';
const BONE  = '#faf3e1';

// In normal mode: data = night, background = bone.
// In inverted mode: data = bone, background = night (matches site palette).
const dataColor  = inverted ? BONE  : NIGHT;
const bgColor    = inverted ? NIGHT : BONE;

// Centre mark: halo uses the data colour (always contrasts the bg), inner
// disc uses the bg colour (blends seamlessly into the QR field).
const haloColor  = dataColor;
const innerColor = bgColor;

// Embed the logo as base64 so the SVG is fully self-contained
const logoBuf = fs.readFileSync(logoPath);
const logoDataUri = `data:image/png;base64,${logoBuf.toString('base64')}`;

const qrSvg = await QRCode.toString(url, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: dataColor, light: bgColor },
});

// Read the QR's viewBox so the brand mark goes in the same coordinate space
const vbMatch = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
const vb = vbMatch ? parseInt(vbMatch[1], 10) : 45;

const cx     = vb / 2;
const cy     = vb / 2;
const r      = vb * 0.125;            // backing radius (~25% of QR side, ~5% area)
const haloR  = r + vb * 0.006;        // thin halo for visual separation
const logoSz = r * 2 * 0.95;          // logo width — fills 95% of the inner disc

const mark = `
  <g transform="translate(${cx}, ${cy})" aria-hidden="true">
    <circle r="${haloR.toFixed(3)}" fill="${haloColor}"/>
    <circle r="${r.toFixed(3)}" fill="${innerColor}"/>
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
console.log(`    Variant: ${inverted ? 'inverted (bone on night)' : 'standard (night on bone)'}`);
console.log(`    Logo: ${logoPath}`);
console.log(`    viewBox: 0 0 ${vb} ${vb} · vector, scales to any print size`);
