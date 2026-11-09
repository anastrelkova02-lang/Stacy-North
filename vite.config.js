import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { illustrations } from './src/data/illustrations.js';

const SITE_URL = 'https://www.stacynorth.com';
const abs = (path) => `${SITE_URL}/${path.replace(/^\//, '')}`;
const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Search engines (Google Images in particular): at build time, the gallery page gets
 *  1. one schema.org ImageObject per illustration in its JSON-LD (creator, credit, copyright),
 *     built from src/data/illustrations.js, so it always matches the gallery;
 *  2. a <noscript> copy of the gallery (plain <img> tags with alt text) for crawlers and
 *     visitors without JavaScript. Visitors with JavaScript never see it; nothing visible changes.
 */
function galleryForSearchEngines() {
  return {
    name: 'gallery-for-search-engines',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (!ctx.filename.endsWith('index.html')) return html;

        const images = illustrations.map((item) => ({
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#img-${item.id}`,
          name: item.title.en,
          caption: item.description.en,
          contentUrl: abs(item.full || item.src),
          thumbnailUrl: abs(item.small || item.src),
          creator: { '@id': `${SITE_URL}/#person` },
          creditText: 'Stacy North',
          copyrightHolder: { '@id': `${SITE_URL}/#person` },
          copyrightNotice: '© Stacy North. All illustrations are protected by copyright.',
          isPartOf: { '@id': `${SITE_URL}/#webpage` },
        }));

        html = html.replace(
          /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
          (_, open, json, close) => {
            const data = JSON.parse(json);
            const page = data['@graph'].find((node) => node['@id'] === `${SITE_URL}/#webpage`);
            if (page) page.image = images.map((img) => ({ '@id': img['@id'] }));
            data['@graph'].push(...images);
            return `${open}\n${JSON.stringify(data, null, 2)}\n    ${close}`;
          }
        );

        const noscript = illustrations
          .map(
            (item) =>
              `<img src="/${item.src}" alt="${escapeHtml(item.description.en)}" width="${item.width}" height="${item.height}" loading="lazy" style="display:block;width:100%;max-width:800px;height:auto;margin:0 auto 24px" />`
          )
          .join('\n          ');
        return html.replace(
          '<div class="canvas" id="illustrations-grid"></div>',
          `<div class="canvas" id="illustrations-grid"></div>\n        <noscript>\n          ${noscript}\n        </noscript>`
        );
      },
    },
  };
}

// Relative asset paths: the built site works at any address (Vercel, a sub-folder, a preview link).
// Two pages: the gallery (index.html) and the About page (about.html → /about on Vercel).
export default defineConfig({
  base: './',
  plugins: [galleryForSearchEngines()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
