import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://printMelen.github.io',
  base: '/astroGym2',
  integrations: [tailwind()]
});