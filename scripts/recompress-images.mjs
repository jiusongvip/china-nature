// Recompress public/images/*.webp in place: target < 100KB per image.
// Skips hero-karst.webp (LCP image, already 87KB) and non-webp files.
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const TARGET_KB = 100;

const steps = [
  { width: 1400, quality: 72 },
  { width: 1280, quality: 70 },
  { width: 1152, quality: 66 },
  { width: 1024, quality: 64 },
  { width: 900, quality: 60 },
];

async function overwrite(p, buf) {
  // sharp on Windows can briefly hold the output handle; retry with backoff
  let lastErr;
  for (let i = 0; i < 6; i++) {
    try { writeFileSync(p, buf); return; } catch (e) { lastErr = e; await new Promise(r => setTimeout(r, 400)); }
  }
  throw lastErr;
}

for (const f of readdirSync(DIR)) {
  if (!f.endsWith(".webp")) continue;
  if (f === "hero-karst.webp") { console.log(`SKIP ${f} (LCP hero)`); continue; }
  const p = path.join(DIR, f);
  const origKB = Math.round(readFileSync(p).length / 1024);
  if (origKB <= TARGET_KB) { console.log(`OK   ${f}  ${origKB}KB (already small)`); continue; }

  let out = null, kb = origKB, w = 0;
  for (const s of steps) {
    // read fully into memory first — sharp's file-handle release lags on Windows,
    // and writing while it is still open fails with UNKNOWN/EPERM
    const input = readFileSync(p);
    const buf = await sharp(input).resize({ width: s.width, withoutEnlargement: true }).webp({ quality: s.quality }).toBuffer();
    out = buf; kb = Math.round(buf.length / 1024); w = s.width;
    if (kb <= TARGET_KB) break;
  }
  if (out && kb < origKB) {
    await overwrite(p, out);
    console.log(`DONE ${f}  ${origKB}KB -> ${kb}KB  (<=${w}px)`);
  } else {
    console.log(`KEEP ${f}  ${origKB}KB (no gain)`);
  }
}
