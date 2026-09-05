import { readFileSync, writeFileSync, existsSync } from "node:fs";
import sharp from "sharp";

// Homepage top-10 card images render at ~322px wide (mobile) / 224px (desktop)
// but were served at 600px. Shrink to the real display width. The same files are
// reused on /landscapes/ (max ~400px) — 322px is a safe compromise.
const cards = [
  "mountains-zhangjiajie",
  "lakes-jiuzhaigou",
  "danxia-zhangye",
  "karst-li-river",
  "mountains-huangshan",
  "deserts-crescent-lake",
  "plateau-tiger-leaping-gorge",
  "glaciers-hailuogou",
  "karst-stone-forest",
  "glaciers-meili",
];

const src = "public/images";
const hero = { name: "hero-karst", width: 1280, quality: 60 };

async function toWebp(file, width, quality) {
  const input = `${src}/${file}.webp`;
  if (!existsSync(input)) return;
  const inputBuf = readFileSync(input);
  const buf = await sharp(inputBuf).resize({ width, withoutEnlargement: true }).webp({ quality }).toBuffer();
  writeFileSync(input, buf);
  console.log(`${file}: ${Math.round(readFileSync(input).length / 1)} B -> ${buf.length} B`);
}

for (const c of cards) await toWebp(c, 322, 80);
await toWebp(hero.name, hero.width, hero.quality);
console.log("done");
