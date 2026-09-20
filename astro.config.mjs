// @ts-check
import { execFileSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Date of the last commit that touched published content. Build time would be
// wrong: every deploy would claim the page changed, and Google discounts a
// lastmod it catches lying. Falls back to now if git is unavailable — the
// Cloudflare build clones shallowly, but depth 1 still carries this commit.
function lastContentChange() {
  try {
    const iso = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', 'src', 'public'],
      { encoding: 'utf8' },
    ).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://stashohulia.dev',
  integrations: [
    sitemap({
      // The 404 page is noindex; keeping it out of the sitemap avoids
      // telling crawlers to fetch a page we ask them not to index.
      filter: (page) => !page.endsWith('/404'),
      lastmod: lastContentChange(),
      // Nothing here is news, video, or translated, so the default namespaces
      // are dead weight on the urlset element.
      namespaces: { news: false, xhtml: false, image: false, video: false },
    }),
  ],
});
