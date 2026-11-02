import './styles.css';
import { SITE } from './config.js';
import { translations } from './i18n/translations.js';
import { illustrations } from './data/illustrations.js';
import { animations } from './data/animations.js';

const STORAGE_KEY = 'stacy-north-lang';
const LANGS = ['en', 'ru'];
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
    { start: 4, span: 9, nudge: 3 },
    { start: 2, span: 8, nudge: 2 },
  ],
  square: [
    { start: 2, span: 5, nudge: 2 },
    { start: 8, span: 4, nudge: 7 },
  ],
  tall: [
    { start: 9, span: 4, nudge: 6 },
    { start: 1, span: 4, nudge: 1 },
    { start: 6, span: 3, nudge: 9 },
  ],
};

const galleryItems = []; // { item, el, kind } — used to re-translate in place

function buildGallery(container, items, kind) {
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
      shape === 'wide' ? 90 : 46
    }vw, 92vw`;

    if (item.type === 'placeholder') {
      fig.innerHTML = `
        <div class="placeholder-frame" style="--ratio:${item.width} / ${item.height}">
          <svg class="sketch-frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M1 1.6 C 30 0.6, 70 2.2, 99 1 C 99.6 35, 98.6 70, 99.2 99 C 70 99.6, 30 98.4, 0.8 99.2 C 1.6 70, 0.4 30, 1 1.6 Z"/>
          </svg>
          <span class="placeholder-inner">
            <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M13 9 C 20 13, 26 17, 31 20 C 25 24, 19 28, 13 31 C 12.6 24, 12.4 16, 13 9 Z"/></svg>
            <span class="js-soon"></span>
          </span>
        </div>`;
      container.appendChild(fig);
      galleryItems.push({ item, el: fig, kind: 'placeholder' });
      return;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'art-button';
    btn.addEventListener('click', () => lightbox.open(items, index, btn));

    const frame = document.createElement('span');
    frame.className = 'art-frame';

    if (item.type === 'video') {
      const v = document.createElement('video');
      v.src = item.src;
      if (item.poster) v.poster = item.poster;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.setAttribute('aria-hidden', 'true');
      v.width = item.width;
      v.height = item.height;
      frame.appendChild(v);
      videoObserver?.observe(v);
    } else {
      const img = new Image();
      const source = item.type === 'embed' ? item.poster : item.src;
      img.src = source;
      const thumbW = Math.min(1100, item.width);
      const fullW = Math.min(2400, item.width);
      if (item.full && item.full !== source && fullW > thumbW) {
        img.srcset = `${source} ${thumbW}w, ${item.full} ${fullW}w`;
        img.sizes = sizes;
      }
      img.width = item.width;
      img.height = item.height;
      img.decoding = 'async';
      img.loading = index < 2 && kind === 'illustration' ? 'eager' : 'lazy';
      if (index < 2 && kind === 'illustration') img.fetchPriority = 'high';
      const markLoaded = () => img.classList.add('is-loaded');
      img.complete ? markLoaded() : img.addEventListener('load', markLoaded, { once: true });
      img.addEventListener('error', markLoaded, { once: true });
      frame.appendChild(img);
    }

    if (kind === 'animation') {
      frame.insertAdjacentHTML(
        'beforeend',
        `<svg class="play-mark" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="20"/><path d="M22 2.5 C 33 2, 42 11, 41.5 22 C 41 33, 33 41.5, 22 41.5 C 11 42, 2.5 33, 2.5 22 C 2.8 11, 11 2.6, 22 2.5 Z"/><path d="M17 14 C 21 16.5, 25 19, 29 22 C 25 24.5, 21 27, 17 29.5 C 16.6 24, 16.6 19, 17 14 Z"/></svg>`
      );
    }

    const caption = document.createElement('span');
    caption.className = 'art-caption';

    btn.append(frame, caption);
    fig.appendChild(btn);
    container.appendChild(fig);
    galleryItems.push({ item, el: fig, kind });
  });
}

function refreshGalleryText() {
  galleryItems.forEach(({ item, el, kind }) => {
    if (kind === 'placeholder') {
      el.querySelector('.js-soon').textContent = t('animations.soon');
      return;
    }
    const title = pick(item.title);
    el.querySelector('.art-caption').textContent = title;
    const media = el.querySelector('img');
    if (media) media.alt = pick(item.description) || title;
    el.querySelector('.art-button').setAttribute(
      'aria-label',
      (kind === 'animation' ? t('animations.play') : t('illustrations.open')) + title
    );
  });
}

// play animation previews only while visible (saves battery & data)
const videoObserver =
  'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) =>
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting && !reduceMotion.matches) target.play().catch(() => {});
            else target.pause();
          }),
        { threshold: 0.25 }
      )
    : null;

/* ───────────────────────── lightbox ───────────────────────── */

const lightbox = (() => {
  const dialog = document.getElementById('lightbox');
  const figure = dialog.querySelector('.lb-figure');
  const media = document.getElementById('lb-media');
  const titleEl = document.getElementById('lb-title');
  const descEl = document.getElementById('lb-desc');
  const countEl = document.getElementById('lb-count');
  const prevBtn = dialog.querySelector('.lb-prev');
  const nextBtn = dialog.querySelector('.lb-next');
  let list = [];
  let index = 0;
  let trigger = null;

  const playable = (items) => items.filter((i) => i.type !== 'placeholder');

  function render() {
    const item = list[index];
    media.innerHTML = '';
    media.style.setProperty('--ratio', `${item.width} / ${item.height}`);
    if (item.type === 'video') {
      const v = document.createElement('video');
      v.src = item.src;
      if (item.poster) v.poster = item.poster;
      v.controls = true;
      v.playsInline = true;
      v.autoplay = !reduceMotion.matches;
      v.loop = true;
      media.appendChild(v);
    } else if (item.type === 'embed') {
      const f = document.createElement('iframe');
      f.src = item.embed;
      f.allow = 'autoplay; fullscreen; picture-in-picture';
      f.allowFullscreen = true;
      f.title = pick(item.title);
      media.appendChild(f);
    } else {
      const img = new Image();
      img.src = item.full || item.src;
      img.width = item.width;
      img.height = item.height;
      img.alt = pick(item.description) || pick(item.title);
      media.appendChild(img);
      // warm the neighbours so arrows feel instant
      [list[index + 1], list[index - 1]].forEach((n) => {
        if (n && !n.type) new Image().src = n.full || n.src;
      });
    }
    updateCaption();
    const multiple = list.length > 1;
    prevBtn.hidden = !multiple;
    nextBtn.hidden = !multiple;
  }

  function updateCaption() {
    const item = list[index];
    if (!item) return;
    titleEl.textContent = pick(item.title);
    descEl.textContent = pick(item.description);
    countEl.textContent = list.length > 1 ? `${index + 1} ${t('lightbox.of')} ${list.length}` : '';
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
    const all = playable(items);
    list = all;
    index = Math.max(0, all.indexOf(items[startIndex]));
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
      media.innerHTML = ''; // stops any video / embed
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

buildGallery(document.getElementById('illustrations-grid'), illustrations, 'illustration');
buildGallery(document.getElementById('animations-grid'), animations, 'animation');
applyTranslations();
setupReveal();
