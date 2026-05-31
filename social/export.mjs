// Export every slide HTML in this folder to a 1080×1350 PNG.
// Run:  node export.mjs
// Needs puppeteer (or puppeteer-core + an installed Chrome). Installs on first run.

import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'out');

async function ensurePuppeteer() {
  try { await import('puppeteer'); return true; }
  catch {
    console.log('Installing puppeteer (one-time)…');
    const r = spawnSync('npm', ['i', '--no-save', 'puppeteer'], { stdio: 'inherit', cwd: HERE, shell: true });
    return r.status === 0;
  }
}

async function findSlides() {
  const dirs = (await readdir(HERE, { withFileTypes: true }))
    .filter(d => d.isDirectory() && d.name.startsWith('post-'))
    .map(d => d.name);
  const out = [];
  for (const d of dirs) {
    const files = await readdir(join(HERE, d));
    for (const f of files.filter(x => x.endsWith('.html')).sort()) {
      out.push({ dir: d, file: f });
    }
  }
  return out;
}

(async () => {
  if (!await ensurePuppeteer()) { console.error('puppeteer install failed'); process.exit(1); }
  const puppeteer = (await import('puppeteer')).default;
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

  const slides = await findSlides();
  console.log(`exporting ${slides.length} slides to ./out/`);

  const browser = await puppeteer.launch({ defaultViewport: { width: 1080, height: 1350, deviceScaleFactor: 2 } });
  const page = await browser.newPage();

  for (const { dir, file } of slides) {
    const url = pathToFileURL(join(HERE, dir, file)).href;
    const name = `${dir}_${file.replace('.html','')}.png`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    // small settle for webfonts
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: join(OUT, name), type: 'png', clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    console.log(`  ✓ ${name}`);
  }

  await browser.close();
  console.log('done.');
})().catch(e => { console.error(e); process.exit(1); });
