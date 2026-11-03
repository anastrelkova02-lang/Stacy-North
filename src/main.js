import './styles.css';
import { SITE } from './config.js';
import { translations } from './i18n/translations.js';
import { illustrations } from './data/illustrations.js';

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
  document.title = t('meta.title');
  setMeta('meta[name="description"]', t('meta.description'));
  setMeta('meta[property="og:title"]', t('meta.title'));
  setMeta('meta[property="og:description"]', t('meta.description'));

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
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
  if (r >= 1.3) return 'wide';
  if (r >= 0.9) return 'square';
  return 'tall';
};

// pleasant automatic positions for entries without a `layout`
const AUTO = {
  wide: [
    { start: 1, span: 8, nudge: 0 },
    { start: 5, span: 8, nudge: 2 },
  ],
  square: [
    { start: 1, span: 6, nudge: 0 },
    { start: 7, span: 6, nudge: 3 },
  ],
  tall: [
    { start: 8, span: 5, nudge: 3 },
    { start: 1, span: 5, nudge: 0 },
  ],
};

const galleryItems = []; // { item, el } — used to re-translate in place

function buildGallery(container, items) {
  if (!container) return;
  const counters = { wide: 0, square: 0, tall: 0, flow: 0 };

  items.forEach((item, index) => {
    const shape = shapeOf(item);
    const layout = item.layout ?? AUTO[shape][counters[shape] % AUTO[shape].length];
    counters[shape]++;
    const alt = shape === 'wide' ? counters.wide % 2 : counters.flow++ % 2;

    const fig = document.createElement('figure');
    fig.className = 'art reveal';
    fig.dataset.shape = shape;
    fig.dataset.alt = String(alt);
    fig.style.setProperty('--start', layout.start);
    fig.style.setProperty('--span', layout.span);
    fig.style.setProperty('--nudge', layout.nudge ?? 0);
    fig.style.setProperty('--ratio', `${item.width} / ${item.height}`);

    const sizes = `(min-width: 961px) ${Math.round((layout.span / 12) * 100)}vw, (min-width: 601px) ${
      shape === 'wide' ? 100 : 50
    }vw, 100vw`;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'art-button';
    btn.addEventListener('click', () => lightbox.open(items, index, btn));

    const frame = document.createElement('span');
    frame.className = 'art-frame';

    const img = new Image();
    img.src = item.src;
    const thumbW = Math.min(1100, item.width);
    const fullW = Math.min(2400, item.width);
    if (item.full && item.full !== item.src && fullW > thumbW) {
      img.srcset = `${item.src} ${thumbW}w, ${item.full} ${fullW}w`;
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
    container.appendChild(fig);
    galleryItems.push({ item, el: fig });
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
setupReveal();
