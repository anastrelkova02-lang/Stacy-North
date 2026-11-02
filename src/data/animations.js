/**
 * ─────────────────────────────────────────────────────────────
 *  ANIMATIONS — the animations gallery is built from this list.
 * ─────────────────────────────────────────────────────────────
 *
 *  Put animation files in  public/animations/
 *
 *  Supported `type` values
 *    'video'        MP4 / WebM file. Plays silently on loop in the gallery,
 *                   opens with sound + controls when clicked.
 *                     src:    'animations/my-film.mp4'
 *                     poster: 'animations/my-film-poster.webp'   (optional, recommended)
 *    'gif'          Animated GIF / animated WebP.
 *                     src:    'animations/my-loop.gif'
 *    'embed'        YouTube or Vimeo. Shows `poster` in the gallery, plays in the lightbox.
 *                     embed:  'https://player.vimeo.com/video/123456789'
 *                             or 'https://www.youtube.com/embed/VIDEO_ID'
 *                     poster: 'animations/my-film-poster.webp'
 *    'placeholder'  An empty hand-drawn frame shown until the real file is ready.
 *                   Replace these entries with real ones (delete `type: 'placeholder'`).
 *
 *  width / height → proportions of the animation (e.g. 1920 × 1080)
 *  layout         → same as in illustrations.js (optional)
 */
export const animations = [
  {
    id: 'animation-1',
    type: 'placeholder', // ← PLACEHOLDER: replace with { type: 'video', src: 'animations/....mp4', poster: ... }
    width: 1920,
    height: 1080,
    title: { en: 'Animation coming soon', ru: 'Анимация скоро появится' },
    description: { en: '', ru: '' },
    layout: { start: 1, span: 7, nudge: 0 },
  },
  {
    id: 'animation-2',
    type: 'placeholder', // ← PLACEHOLDER
    width: 1080,
    height: 1350,
    title: { en: 'Animation coming soon', ru: 'Анимация скоро появится' },
    description: { en: '', ru: '' },
    layout: { start: 9, span: 4, nudge: 6 },
  },
  {
    id: 'animation-3',
    type: 'placeholder', // ← PLACEHOLDER
    width: 1080,
    height: 1080,
    title: { en: 'Animation coming soon', ru: 'Анимация скоро появится' },
    description: { en: '', ru: '' },
    layout: { start: 3, span: 4, nudge: 2 },
  },
  {
    id: 'animation-4',
    type: 'placeholder', // ← PLACEHOLDER
    width: 1920,
    height: 1080,
    title: { en: 'Animation coming soon', ru: 'Анимация скоро появится' },
    description: { en: '', ru: '' },
    layout: { start: 8, span: 5, nudge: 8 },
  },
];
