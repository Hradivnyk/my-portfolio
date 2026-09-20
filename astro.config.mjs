// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stashohulia.dev',
  integrations: [
    sitemap({
      // The 404 page is noindex; keeping it out of the sitemap avoids
      // telling crawlers to fetch a page we ask them not to index.
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
});
