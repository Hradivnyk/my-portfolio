# My Personal Portfolio

A simple, minimalist personal portfolio at [stashohulia.dev](https://stashohulia.dev),
built with [Astro](https://astro.build).

## Tech Stack

- **Framework:** Astro (static output, no adapter — plain HTML and CSS, no UI framework)
- **Integrations:** [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- **Hosting:** Cloudflare Workers Static Assets, deployed on every push to `main`

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

3.  **Build for production:**

    ```bash
    npm run build
    ```

## Deployment

Pushing to `main` triggers a Cloudflare Workers build, which runs `npm run build`
and then `npx wrangler deploy`. There is nothing to run by hand.

[`wrangler.jsonc`](wrangler.jsonc) points at `dist/` and sets
`not_found_handling: "404-page"` so [`src/pages/404.astro`](src/pages/404.astro)
is served with a real 404 status.

## Files worth knowing about

| Path | Purpose |
| --- | --- |
| [`public/_redirects`](public/_redirects) | `/tg`, `/lnkd`, `/code` → external profiles (301) |
| [`public/_headers`](public/_headers) | Cache headers; hashed assets are immutable |
| [`public/og.png`](public/og.png) | Link preview image, 1200×630 |
| [`.nvmrc`](.nvmrc) | Node version for the Cloudflare build |

`public/og.png` and `public/apple-touch-icon.png` are generated from
`src/assets/avatar.webp`; regenerate them if the avatar changes.
