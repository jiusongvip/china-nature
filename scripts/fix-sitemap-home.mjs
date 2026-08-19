// 构建后处理：将 sitemap 中首页 URL 的尾斜杠去掉，与 canonical 保持一致
// 规范：首页 canonical 与 sitemap 首页均为 https://www.china-nature.com（不带尾斜杠）
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

const sitemaps = readdirSync(dist).filter(
  (f) => f.startsWith("sitemap-") && f.endsWith(".xml")
);

for (const file of sitemaps) {
  const path = join(dist, file);
  const before = readFileSync(path, "utf-8");
  const after = before.replace(
    /<loc>(https:\/\/www\.china-nature\.com)\/<\/loc>/g,
    "<loc>$1</loc>"
  );
  if (after !== before) {
    writeFileSync(path, after, "utf-8");
    console.log(`[fix-sitemap-home] ${file}: 首页 URL 已去尾斜杠`);
  }
}
