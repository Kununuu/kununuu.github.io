// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://kununuu.github.io",
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
