import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://www.chinanaturetrip.com",
  vite: { plugins: [tailwindcss()] },
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
