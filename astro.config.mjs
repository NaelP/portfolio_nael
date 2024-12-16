import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://NaelP.github.io',
  base: 'portfolio_nael',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
