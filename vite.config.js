import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Relative asset paths: the built site works at any address (Vercel, a sub-folder, a preview link).
// Two pages: the gallery (index.html) and the About page (about.html → /about on Vercel).
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
