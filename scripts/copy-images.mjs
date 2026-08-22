// Copy & compress sister-site images into china-nature/public/images/
// Source images are first-party (own site network) — safe to reuse.
// Target rule: WebP, < 200KB per image. Steps: 1600px/q82 -> 1280px/q75 -> 1024px/q70 -> 900px/q65.
import { mkdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = "D:/workspace/website";
const OUT = "D:/workspace/website/china-nature/public/images";

// [source, dest-name]
const IMAGES = [
  // Karst
  ["guilin-yangshuo/public/images/hero-li-river.webp", "karst-li-river.webp"],
  ["guilin-yangshuo/public/images/yangshuo.webp", "karst-yangshuo.webp"],
  ["guilin-yangshuo/public/images/xingping.webp", "karst-xingping.webp"],
  ["yunnan-province/public/images/kunming-stone-forest.webp", "karst-stone-forest.webp"],
  // Danxia
  ["chinese-mountains/public/images/mountains/danxia.webp", "danxia-zhangye.webp"],
  // Mountains
  ["chinese-mountains/public/images/mountains/huangshan.webp", "mountains-huangshan.webp"],
  ["chinese-mountains/public/images/mountains/zhangjiajie-2.webp", "mountains-zhangjiajie.webp"],
  ["chinese-mountains/public/images/mountains/fanjing.webp", "mountains-fanjing.webp"],
  // Lakes
  ["chinese-mountains/public/images/mountains/kanas.webp", "lakes-kanas.webp"],
  // Deserts
  ["dunhuang-jiuquan/public/images/crescent-lake.webp", "deserts-crescent-lake.webp"],
  ["dunhuang-jiuquan/public/images/yadan-geopark.webp", "deserts-yadan.webp"],
  // Glaciers & snow peaks
  ["chinese-mountains/public/images/mountains/hailuogou.webp", "glaciers-hailuogou.webp"],
  ["chinese-mountains/public/images/mountains/meili-snow.webp", "glaciers-meili.webp"],
  // Grasslands
  ["yunnan-province/public/images/shangri-la-grassland.webp", "grasslands-shangri-la.webp"],
  // Forests
  ["yunnan-province/public/images/xishuangbanna-rainforest.webp", "forests-xishuangbanna.webp"],
  // Plateau
  ["tibet-lhasa-potala/public/images/tibet-landscape.webp", "plateau-tibet.webp"],
  ["tibet-lhasa-potala/public/images/himalaya-landscape.webp", "plateau-himalaya.webp"],
  ["shangri-la-yunnan/public/images/pudacuo-national-park.webp", "plateau-pudacuo.webp"],
  ["yunnan-province/public/images/tiger-leaping-gorge.webp", "plateau-tiger-leaping-gorge.webp"],
  // Wildlife
  ["dujiangyan-panda-base/public/images/dujiangyan-panda-center.webp", "wildlife-panda.webp"],
  ["dujiangyan-panda-base/public/images/panda-forest.webp", "wildlife-panda-forest.webp"],
  ["dujiangyan-panda-base/public/images/red-panda.webp", "wildlife-red-panda.webp"],
  ["shangri-la-yunnan/public/images/snub-nosed-monkey.webp", "wildlife-snub-nosed-monkey.webp"],
  ["tibet-lhasa-potala/public/images/yak-himalaya.webp", "wildlife-yak.webp"],
  // Extra: rice terraces (nature + human)
  ["yunnan-province/public/images/yuanyang-terraces.webp", "terraces-yuanyang.webp"],
];

mkdirSync(OUT, { recursive: true });

let ok = 0, skipped = 0, failed = 0;

for (const [srcRel, destName] of IMAGES) {
  const src = path.join(ROOT, srcRel);
  const dest = path.join(OUT, destName);
  try {
    const srcSizeKB = Math.round(statSync(src).size / 1024);
    // step down until under 200KB
    let buf = null;
    let kb = Infinity;
    for (const [w, q] of [[1600, 82], [1280, 75], [1024, 70], [900, 65]]) {
      buf = await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: q })
        .toBuffer();
      kb = Math.round(buf.length / 1024);
      if (kb <= 200) break;
    }
    writeFileSync(dest, buf);
    console.log(`OK  ${destName}  ${srcSizeKB}KB -> ${kb}KB`);
    ok++;
  } catch (e) {
    console.error(`FAIL ${destName}: ${e.message}`);
    failed++;
  }
}

console.log(`\nDone: ${ok} copied, ${failed} failed.`);
