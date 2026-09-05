import { readFileSync, writeFileSync, existsSync } from "node:fs";
import sharp from "sharp";

const src = "public/images/hero-karst.webp";
const inputBuf = readFileSync(src);
// Desktop/main variant at 1280 wide
const desktop = await sharp(inputBuf).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 55 }).toBuffer();
writeFileSync(src, desktop);
// Mobile variant at 800 wide (~20 KiB) — phones display <=420px CSS, 2x = 840
const mobile = await sharp(inputBuf).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 55 }).toBuffer();
writeFileSync("public/images/hero-karst-800.webp", mobile);
console.log("desktop:", Math.round(desktop.length / 1) + "B", "mobile:", Math.round(mobile.length / 1) + "B");
