import './styles.css';
import { SITE } from './config.js';
import { translations } from './i18n/translations.js';
import { illustrations, galleryLayout } from './data/illustrations.js';

const STORAGE_KEY = 'stacy-north-lang';
const LANGS = ['en', 'uk'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ───────────────────────── language ───────────────────────── */

function readSavedLang() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) return q;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (e) {
    /* storage unavailable (private mode) — fall through */
  }
  return SITE.defaultLang;
}

let lang = readSavedLang();
const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;
const pick = (obj) => (obj ? obj[lang] ?? obj.en ?? '' : '');

function applyTranslations() {
  document.documentElement.lang = lang;
  // each page names its own title key (<body data-title>); the gallery uses meta.title
  const titleKey = document.body.dataset.title || 'meta.title';
  document.title = t(titleKey);
  const descKey = document.body.dataset.description || 'meta.description';
  setMeta('meta[name="description"]', t(descKey));
  setMeta('meta[property="og:title"]', t(titleKey));
  setMeta('meta[property="og:description"]', t(descKey));

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  // texts that contain links (About section) — our own trusted strings from translations.js
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      el.setAttribute(attr, t(key));
    });
  });
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  refreshGalleryText();
  if (lightbox.isOpen) lightbox.updateCaption();
  liftFallbackGlyphs(document.body);
}

/* NaomisHand draws its letters well above the baseline and has no digits, dashes,
   brackets or curly apostrophes. Those characters come from the companion font,
   so we wrap them in <span class="nh"> and CSS lifts them to sit with the handwriting. */
const FALLBACK_CHARS = /[0-9’‘“”\-–—()@©&/]+/g;
function liftFallbackGlyphs(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, svg, .nh, .lightbox')) return NodeFilter.FILTER_REJECT;
      FALLBACK_CHARS.lastIndex = 0;
      return FALLBACK_CHARS.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    let last = 0;
    node.nodeValue.replace(FALLBACK_CHARS, (match, offset) => {
      if (offset > last) frag.append(node.nodeValue.slice(last, offset));
      const span = document.createElement('span');
      span.className = 'nh';
      span.textContent = match;
      frag.append(span);
      last = offset + match.length;
      return match;
    });
    if (last < node.nodeValue.length) frag.append(node.nodeValue.slice(last));
    node.replaceWith(frag);
  });
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', value);
}

function setLang(next) {
  if (!LANGS.includes(next) || next === lang) return;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch (e) {}
  // keep shared links tidy: drop ?lang= once the choice is stored
  const url = new URL(location.href);
  if (url.searchParams.has('lang')) {
    url.searchParams.delete('lang');
    history.replaceState(null, '', url);
  }

  if (reduceMotion.matches) {
    lang = next;
    applyTranslations();
    return;
  }
  document.body.classList.add('is-switching');
  setTimeout(() => {
    lang = next;
    applyTranslations();
    requestAnimationFrame(() => document.body.classList.remove('is-switching'));
  }, 250);
}

document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ───────────────────────── contact links ───────────────────────── */

document.querySelectorAll('.js-email').forEach((a) => (a.href = `mailto:${SITE.email}`));
document.querySelectorAll('.js-email-text').forEach((a) => (a.textContent = SITE.email));
document.querySelectorAll('.js-instagram').forEach((a) => (a.href = SITE.instagram));
document.querySelectorAll('.js-year').forEach((el) => (el.textContent = new Date().getFullYear()));

// tactile "pop" on press (mouse, pen and touch)
document.querySelectorAll('.social-icon').forEach((icon) => {
  icon.addEventListener('pointerdown', () => {
    icon.classList.remove('is-popping');
    void icon.offsetWidth; // restart the animation
    icon.classList.add('is-popping');
  });
  icon.addEventListener('animationend', () => icon.classList.remove('is-popping'));
});

/* ───────────────────────── galleries ───────────────────────── */

const shapeOf = ({ width, height }) => {
  const r = width / height;
  if (r >= 1.9) return 'panorama'; // 2:1 and wider
  if (r >= 1.2) return 'wide'; // 16:9 and similar
  if (r >= 0.9) return 'square';
  return 'tall';
};

const galleryItems = []; // { item, el } — used to re-translate in place

// rows from `galleryLayout`; anything missing or out of order falls back to one picture per row
function rowsFor(items) {
  const flat = galleryLayout.flatMap((row) => row.ids);
  const sameOrder = flat.length === items.length && flat.every((id, i) => items[i].id === id);
  if (sameOrder) return galleryLayout;
  console.warn('galleryLayout does not match the illustrations list — using a simple layout');
  return items.map((item) => ({ ids: [item.id], width: shapeOf(item) === 'tall' ? 34 : 70, align: 'center' }));
}

function buildGallery(container, items) {
  if (!container) return;
  const byId = Object.fromEntries(items.map((item, index) => [item.id, { item, index }]));
  const phoneSide = { wide: 0, panorama: 0 };

  rowsFor(items).forEach((row) => {
    const rowEl = document.createElement('div');
    rowEl.className = `art-row art-row--${row.pair ?? 'single'} art-row--${row.align ?? 'center'}`;
    if (!row.pair && (row.width ?? 100) >= 100) rowEl.classList.add('art-row--full');
    rowEl.style.setProperty('--row-w', `${row.width ?? 100}%`);
    if (row.drop) rowEl.style.setProperty('--drop', `${row.drop}%`);
    if (row.valign === 'bottom') rowEl.classList.add('art-row--bottom');

    row.ids.forEach((id, k) => {
      const { item, index } = byId[id];
      const shape = shapeOf(item);
      const ratio = item.width / item.height;

      const fig = document.createElement('figure');
      fig.className = 'art reveal';
      fig.dataset.shape = shape;
      if (phoneSide[shape] !== undefined) fig.dataset.side = phoneSide[shape]++ % 2 ? 'right' : 'left';
      fig.style.setProperty('--ratio', ratio);
      if (row.pair === 'stagger') fig.style.setProperty('--w', `${row.widths[k]}%`);

      // rough share of the screen this picture takes, so the browser loads a sensible file size
      const share = row.pair === 'stagger' ? row.widths[k] : row.pair === 'match'
        ? ((row.width ?? 100) * ratio) / row.ids.reduce((sum, rid) => sum + byId[rid].item.width / byId[rid].item.height, 0)
        : row.width ?? 100;
      const sizes = row.pair ? `(min-width: 601px) ${Math.round(share * 0.9)}vw, 92vw` : '(min-width: 601px) min(800px, 90vw), 92vw';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'art-button';
      btn.addEventListener('click', () => lightbox.open(items, index, btn));

      const frame = document.createElement('span');
      frame.className = 'art-frame';

      const img = new Image();
      img.src = item.src;
      // the browser picks the smallest file that is still sharp on this screen:
      // 800px copy for phones / ordinary screens, the gallery file for sharp (retina) screens,
      // and the large file only when the gallery file is under 1600px wide
      const candidates = [[item.small, 800], [item.src, item.srcWidth]];
      if (item.full && item.full !== item.src && item.srcWidth < 1600) candidates.push([item.full, item.fullWidth]);
      const usable = candidates.filter(([url, width]) => url && width);
      if (usable.length > 1) {
        img.srcset = usable.map(([url, width]) => `${url} ${width}w`).join(', ');
        img.sizes = sizes;
      }
      img.width = item.width;
      img.height = item.height;
      img.decoding = 'async';
      img.loading = index < 2 ? 'eager' : 'lazy';
      if (index < 2) img.fetchPriority = 'high';
      const markLoaded = () => img.classList.add('is-loaded');
      img.complete ? markLoaded() : img.addEventListener('load', markLoaded, { once: true });
      img.addEventListener('error', markLoaded, { once: true });
      frame.appendChild(img);

      btn.append(frame);
      fig.appendChild(btn);
      rowEl.appendChild(fig);
      galleryItems.push({ item, el: fig });
    });
    container.appendChild(rowEl);
  });
}

function refreshGalleryText() {
  galleryItems.forEach(({ item, el }) => {
    const title = pick(item.title);
    const media = el.querySelector('img');
    if (media) media.alt = pick(item.description) || title;
    el.querySelector('.art-button').setAttribute(
      'aria-label',
      t('illustrations.open') + title
    );
  });
}

/* ───────────────────────── lightbox ───────────────────────── */

const lightbox = (() => {
  const dialog = document.getElementById('lightbox');
  // pages without a gallery (About) have no viewer
  if (!dialog) return { open() {}, close() {}, updateCaption() {}, isOpen: false };
  const figure = dialog.querySelector('.lb-figure');
  const media = document.getElementById('lb-media');
  const prevBtn = dialog.querySelector('.lb-prev');
  const nextBtn = dialog.querySelector('.lb-next');
  let list = [];
  let index = 0;
  let trigger = null;

  function render() {
    const item = list[index];
    media.innerHTML = '';
    const img = new Image();
    img.src = item.full || item.src;
    img.width = item.width;
    img.height = item.height;
    img.alt = pick(item.description) || pick(item.title);
    media.appendChild(img);
    // warm the neighbours so arrows feel instant
    [list[index + 1], list[index - 1]].forEach((n) => {
      if (n) new Image().src = n.full || n.src;
    });
    updateCaption();
    const multiple = list.length > 1;
    prevBtn.hidden = !multiple;
    nextBtn.hidden = !multiple;
  }

  // alt text follows the selected language (nothing is shown as a caption)
  function updateCaption() {
    const img = media.querySelector('img');
    const item = list[index];
    if (img && item) img.alt = pick(item.description) || pick(item.title);
  }

  function go(step) {
    if (list.length < 2) return;
    const next = (index + step + list.length) % list.length;
    if (reduceMotion.matches) {
      index = next;
      render();
      return;
    }
    figure.classList.add('is-changing');
    setTimeout(() => {
      index = next;
      render();
      requestAnimationFrame(() => figure.classList.remove('is-changing'));
    }, 220);
  }

  function open(items, startIndex, from) {
    list = items;
    index = startIndex;
    trigger = from;
    render();
    document.documentElement.classList.add('lb-lock');
    dialog.showModal();
    requestAnimationFrame(() => dialog.classList.add('is-open'));
    api.isOpen = true;
  }

  function close() {
    if (!dialog.open) return;
    dialog.classList.remove('is-open');
    const finish = () => {
      dialog.close();
      media.innerHTML = '';
      document.documentElement.classList.remove('lb-lock');
      trigger?.focus({ preventScroll: true });
      api.isOpen = false;
    };
    reduceMotion.matches ? finish() : setTimeout(finish, 320);
  }

  dialog.querySelector('.lb-close').addEventListener('click', close);
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  dialog.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  });
  // click on the empty white space closes
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || e.target.classList.contains('lightbox-inner') || e.target === media) close();
  });
  // swipe on touch screens
  let sx = null;
  let sy = null;
  dialog.addEventListener(
    'touchstart',
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true }
  );
  dialog.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) go(dx < 0 ? 1 : -1);
    sx = sy = null;
  });

  const api = { open, close, updateCaption, isOpen: false };
  return api;
})();

/* ───────────────────────── reveal on scroll ───────────────────────── */

function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  els.forEach((el) => io.observe(el));
}

/* ───────────────────────── start ───────────────────────── */

buildGallery(document.getElementById('illustrations-grid'), illustrations);
applyTranslations();
liftFallbackGlyphs(document.body);
setupReveal();
