# Stacy North — Portfolio

The portfolio website of **Stacy North**, children's book illustrator.
It's a single page in English and Russian, with a white canvas, handwritten type, and the artwork as the only colour.

Built with plain HTML, CSS and JavaScript, bundled by [Vite](https://vitejs.dev). It has one development dependency and no frameworks, and it deploys to Vercel for free.

---

## Run it on your computer

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone https://github.com/<your-username>/stacy-north-portfolio.git
cd stacy-north-portfolio
npm install
npm run dev        # opens http://localhost:5173
```

| Command           | What it does                                         |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Starts a local server that reloads when you edit     |
| `npm run build`   | Builds the production site into `dist/`              |
| `npm run preview` | Serves the built `dist/` folder so you can check it  |

---

## Where to change things

| What                                | File                                  |
| ----------------------------------- | ------------------------------------- |
| Email, Instagram link, default language | `src/config.js`                   |
| All text, in English and Russian (menu, about, contact…) | `src/i18n/translations.js` |
| Illustrations: add, remove, reorder, retitle | `src/data/illustrations.js`  |
| Animations: videos, GIFs, Vimeo/YouTube | `src/data/animations.js`          |
| Portrait photo for the About section | `index.html` (look for `PHOTO PLACEHOLDER`) |
| Colours, spacing, sizes             | `src/styles.css`                      |

### Add an illustration
1. Put the picture in `public/images/illustrations/`. WebP or JPG at about 1100 px wide works well, and you can add a second, larger copy for the full-screen view.
2. In `src/data/illustrations.js`, copy one entry, then change `src`, `width`, `height`, `title` and `description`.
3. `layout` is optional. Leave it out and the gallery places the picture for you.

### Add an animation
Put an `.mp4` file, and optionally a poster image, in `public/animations/`. Then replace a `placeholder` entry in `src/data/animations.js`:

```js
{
  id: 'my-film',
  type: 'video',
  src: 'animations/my-film.mp4',
  poster: 'animations/my-film-poster.webp',
  width: 1920,
  height: 1080,
  title: { en: 'My film', ru: 'Мой фильм' },
  description: { en: '…', ru: '…' },
}
```

The other types are `gif` (an animated GIF or WebP) and `embed`, which takes a `https://player.vimeo.com/video/…` or `https://www.youtube.com/embed/…` link plus a `poster`.

### Add the portrait photo
Save it as `public/images/stacy-portrait.webp`. In `index.html`, replace the `<div class="photo-placeholder">…</div>` block with:
```html
<img src="images/stacy-portrait.webp" alt="Stacy North" width="1080" height="1350" loading="lazy" />
```

---

## Fonts

- **NaomisHand**: navigation, body text and captions
- **Innocent**: headings

Neither font includes Cyrillic letters. While Russian is selected, the site uses two hand-drawn companion fonts with Cyrillic, **Neucha** for text and **Caveat** for headings. Both are free under the SIL Open Font License and are stored in `public/fonts/`. Nothing loads from Google.

## Language

English is the default. The visitor's choice is saved in their browser. You can also send a link that opens straight in Russian: `https://stacy-north.vercel.app/?lang=ru`

---

## Publish on Vercel for free

1. Push this folder to a GitHub repository named `stacy-north-portfolio`.
2. Go to [vercel.com/signup](https://vercel.com/signup) and choose **Continue with GitHub**. The free **Hobby** plan is enough.
3. Click **Add New… → Project**, find `stacy-north-portfolio` and click **Import**.
4. Vercel detects **Vite** on its own. The settings are already in `vercel.json`:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variables: none
5. Click **Deploy**. About a minute later you get a link like `https://stacy-north-portfolio.vercel.app`.
6. To get a shorter name, open **Settings → Domains** in your Vercel project, then **Edit** the `.vercel.app` domain and type `stacy-north`. This gives `stacy-north.vercel.app` if the name is free. It costs nothing, and you don't need to buy a domain.

After that, every `git push` to the `main` branch publishes the changes automatically.
