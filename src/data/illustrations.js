/**
 * ─────────────────────────────────────────────────────────────
 *  ILLUSTRATIONS — the gallery is built entirely from this list.
 * ─────────────────────────────────────────────────────────────
 *
 *  To ADD an artwork:
 *    1. Put the image in  public/images/illustrations/
 *       (ideally two versions: `name.webp` ~1100px wide and `name-full.webp` ~2400px wide;
 *        a single .jpg/.png also works — just use the same path for `src` and `full`)
 *    2. Copy one of the entries below and change the fields.
 *
 *  To REMOVE an artwork: delete its entry.   To REORDER: move entries up or down.
 *
 *  Fields
 *    src      image shown in the gallery
 *    full     large image for the lightbox (optional, falls back to `src`)
 *    width / height   original pixel size (used to keep the exact proportions — no cropping)
 *    title / description   { en, uk }  — not shown on the page; used as the image alt text
 *                          (for visitors using screen readers) and for search engines
 *    layout   (optional, desktop only) position on a 12-column canvas:
 *               start  → column where the picture begins (1–12)
 *               span   → how many columns wide it is
 *               nudge  → extra space above it, in rem (creates the playful, uneven rhythm)
 *             Leave `layout` out and the site picks a pleasant position automatically.
 */
export const illustrations = [
  {
    id: 'tomato-soup-tower',
    src: 'images/illustrations/tomato-soup-tower.webp',
    full: 'images/illustrations/tomato-soup-tower-full.webp',
    width: 5100,
    height: 2550,
    title: { en: 'Tomato Soup Tower', uk: 'Будиночок із консервних бляшанок' },
    description: {
      en: 'A tiny worm\'s tea house built from tins, glowing among giant leaves and fireflies at night.',
      uk: 'Чайний будиночок маленького хробачка, збудований із консервних бляшанок, світиться вночі серед величезного листя та світлячків.',
    },
    layout: { start: 1, span: 8, nudge: 0 },
  },
  {
    id: 'hello-september',
    src: 'images/illustrations/hello-september.webp',
    full: 'images/illustrations/hello-september-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Hello, September!', uk: 'Привіт, вересню!' },
    description: {
      en: 'A cosy acorn village wakes up to the first days of autumn.',
      uk: 'Затишне жолудеве селище зустрічає перші дні осені.',
    },
    layout: { start: 9, span: 4, nudge: 0 },
  },
  {
    id: 'gingerbread-house',
    src: 'images/illustrations/gingerbread-house.webp',
    full: 'images/illustrations/gingerbread-house-full.webp',
    width: 2000,
    height: 2000,
    title: { en: 'Gingerbread Day', uk: 'Пряниковий день' },
    description: {
      en: 'Decorating a gingerbread house while the snow falls outside.',
      uk: 'Поки за вікном падає сніг, дівчинка прикрашає пряниковий будиночок.',
    },
    layout: { start: 1, span: 6, nudge: 0 },
  },
  {
    id: 'coral-reef',
    src: 'images/illustrations/coral-reef.webp',
    full: 'images/illustrations/coral-reef-full.webp',
    width: 1920,
    height: 1080,
    title: { en: 'Under the Sea', uk: 'Під водою' },
    description: {
      en: 'Two little divers meet a curious crab and a friendly octopus on a bright coral reef.',
      uk: 'Двоє маленьких пірнальників знайомляться з допитливим крабом і привітним восьминогом на яскравому кораловому рифі.',
    },
    layout: { start: 7, span: 6, nudge: 4 },
  },
  {
    id: 'rainy-campfire',
    src: 'images/illustrations/rainy-campfire.webp',
    full: 'images/illustrations/rainy-campfire-full.webp',
    width: 5100,
    height: 2550,
    title: { en: 'Rainy Night Campfire', uk: 'Багаття дощової ночі' },
    description: {
      en: 'A little mouse in a yellow raincoat toasts marshmallows by her glowing log house.',
      uk: 'Мишка в жовтому дощовику підсмажує маршмелоу біля свого сяйливого будиночка в колоді.',
    },
    layout: { start: 1, span: 12, nudge: 0 },
  },
  {
    id: 'cookie-tin-workshop',
    src: 'images/illustrations/cookie-tin-workshop.webp',
    full: 'images/illustrations/cookie-tin-workshop-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'The Cookie Tin Workshop', uk: 'Майстерня в коробці з-під печива' },
    description: {
      en: 'A ladybug knits a long scarf inside a cookie tin full of sewing treasures.',
      uk: 'Сонечко в’яже довгий шарф у бляшаній коробці, повній швейних скарбів.',
    },
    layout: { start: 1, span: 4, nudge: 0 },
  },
  {
    id: 'pumpkin-evening',
    src: 'images/illustrations/pumpkin-evening.webp',
    full: 'images/illustrations/pumpkin-evening-full.webp',
    width: 2000,
    height: 2000,
    title: { en: 'Pumpkin Evening', uk: 'Гарбузовий вечір' },
    description: {
      en: 'A bear carves a pumpkin by the fireplace, with two little ghosts for company.',
      uk: 'Ведмідь вирізає гарбуз біля каміна, а компанію йому складають двоє маленьких привидів.',
    },
    layout: { start: 5, span: 4, nudge: 3 },
  },
  {
    id: 'apple-house',
    src: 'images/illustrations/apple-house.webp',
    full: 'images/illustrations/apple-house-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Tea in the Apple', uk: 'Чаювання в яблуці' },
    description: {
      en: 'Two worms share tea and cake in their warm apple home while it rains outside.',
      uk: 'Два хробачки п’ють чай із тістечком у своєму теплому яблучному будиночку, поки надворі йде дощ.',
    },
    layout: { start: 9, span: 4, nudge: 0 },
  },
  {
    id: 'baxter-the-bear',
    src: 'images/illustrations/baxter-the-bear.webp',
    full: 'images/illustrations/baxter-the-bear-full.webp',
    width: 5100,
    height: 2550,
    title: { en: 'Baxter the Bear Cub', uk: 'Ведмежа Бакстер' },
    description: {
      en: 'A spread from a story about Baxter, a little bear who couldn\'t fall asleep for the winter.',
      uk: 'Розворот з історії про ведмежа Бакстера, яке ніяк не могло заснути на зиму.',
    },
    layout: { start: 1, span: 12, nudge: 0 },
  },
  {
    id: 'stump-house',
    src: 'images/illustrations/stump-house.webp',
    full: 'images/illustrations/stump-house-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Autumn Cleaning', uk: 'Осіннє прибирання' },
    description: {
      en: 'A mouse sweeps up fallen leaves in front of her tree-stump house.',
      uk: 'Мишка підмітає опале листя біля свого будиночка в старому пні.',
    },
    layout: { start: 1, span: 5, nudge: 0 },
  },
  {
    id: 'frog-pond',
    src: 'images/illustrations/frog-pond.webp',
    full: 'images/illustrations/frog-pond-full.webp',
    width: 1920,
    height: 1080,
    title: { en: 'Pond Song', uk: 'Пісенька біля ставка' },
    description: {
      en: 'Two frogs spend a lazy summer day on the pond, surrounded by dragonflies.',
      uk: 'Дві жабки проводять лінивий літній день на ставку серед бабок.',
    },
    layout: { start: 6, span: 7, nudge: 5 },
  },
  {
    id: 'ghost-movie-night',
    src: 'images/illustrations/ghost-movie-night.webp',
    full: 'images/illustrations/ghost-movie-night-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Ghost Movie Night', uk: 'Кіновечір із привидами' },
    description: {
      en: 'Even ghosts get scared at a horror movie.',
      uk: 'Навіть привиди бояться фільмів жахів.',
    },
    layout: { start: 4, span: 6, nudge: 0 },
  },
];
