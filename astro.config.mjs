import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://www.china-nature.com",
  vite: { plugins: [tailwindcss()] },
  trailingSlash: 'always',
});
