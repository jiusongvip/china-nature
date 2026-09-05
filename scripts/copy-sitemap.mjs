import { readFileSync, writeFileSync, existsSync } from "node:fs";

// Publish a standard /sitemap.xml (search engines & GEO checks expect this path).
// Astro's @astrojs/sitemap emits sitemap-index.xml + sitemap-0.xml; we alias the
// actual URL list as sitemap.xml so both the index and the direct file resolve.
const src = existsSync("dist/sitemap-0.xml") ? "dist/sitemap-0.xml" : "dist/sitemap-index.xml";
const xml = readFileSync(src, "utf8");
writeFileSync("dist/sitemap.xml", xml);
console.log("sitemap.xml written from", src);
