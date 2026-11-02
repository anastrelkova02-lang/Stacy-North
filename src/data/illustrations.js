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
 *    title / description   { en, ru }  — description is also used as the image alt text
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
    title: { en: 'Tomato Soup Tower', ru: 'Домик из консервных банок' },
    description: {
      en: 'A tiny worm\'s tea house built from tins, glowing among giant leaves and fireflies at night.',
      ru: 'Чайный домик маленького червячка, построенный из консервных банок, светится в ночи среди огромных листьев и светлячков.',
    },
    layout: { start: 1, span: 8, nudge: 0 },
  },
  {
    id: 'hello-september',
    src: 'images/illustrations/hello-september.webp',
    full: 'images/illustrations/hello-september-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Hello, September!', ru: 'Привет, сентябрь!' },
    description: {
      en: 'A cosy acorn village wakes up to the first days of autumn.',
      ru: 'Уютная деревушка в желудях встречает первые дни осени.',
    },
    layout: { start: 10, span: 3, nudge: 7 },
  },
  {
    id: 'gingerbread-house',
    src: 'images/illustrations/gingerbread-house.webp',
    full: 'images/illustrations/gingerbread-house-full.webp',
    width: 2000,
    height: 2000,
    title: { en: 'Gingerbread Day', ru: 'Пряничный день' },
    description: {
      en: 'Decorating a gingerbread house while the snow falls outside.',
      ru: 'Пока за окном идёт снег, девочка украшает пряничный домик.',
    },
    layout: { start: 2, span: 5, nudge: 2 },
  },
  {
    id: 'coral-reef',
    src: 'images/illustrations/coral-reef.webp',
    full: 'images/illustrations/coral-reef-full.webp',
    width: 1920,
    height: 1080,
    title: { en: 'Under the Sea', ru: 'Под водой' },
    description: {
      en: 'Two little divers meet a curious crab and a friendly octopus on a bright coral reef.',
      ru: 'Двое маленьких ныряльщиков знакомятся с любопытным крабом и дружелюбным осьминогом на ярком коралловом рифе.',
    },
    layout: { start: 7, span: 6, nudge: 10 },
  },
  {
    id: 'rainy-campfire',
    src: 'images/illustrations/rainy-campfire.webp',
    full: 'images/illustrations/rainy-campfire-full.webp',
    width: 5100,
    height: 2550,
    title: { en: 'Rainy Night Campfire', ru: 'Костёр в дождливую ночь' },
    description: {
      en: 'A little mouse in a yellow raincoat toasts marshmallows by her glowing log house.',
      ru: 'Мышка в жёлтом дождевике жарит маршмеллоу у своего светящегося домика в бревне.',
    },
    layout: { start: 3, span: 9, nudge: 2 },
  },
  {
    id: 'cookie-tin-workshop',
    src: 'images/illustrations/cookie-tin-workshop.webp',
    full: 'images/illustrations/cookie-tin-workshop-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'The Cookie Tin Workshop', ru: 'Мастерская в коробке из-под печенья' },
    description: {
      en: 'A ladybug knits a long scarf inside a cookie tin full of sewing treasures.',
      ru: 'Божья коровка вяжет длинный шарф в жестяной коробке, полной швейных сокровищ.',
    },
    layout: { start: 1, span: 4, nudge: 1 },
  },
  {
    id: 'pumpkin-evening',
    src: 'images/illustrations/pumpkin-evening.webp',
    full: 'images/illustrations/pumpkin-evening-full.webp',
    width: 2000,
    height: 2000,
    title: { en: 'Pumpkin Evening', ru: 'Тыквенный вечер' },
    description: {
      en: 'A bear carves a pumpkin by the fireplace, with two little ghosts for company.',
      ru: 'Медведь вырезает тыкву у камина, а компанию ему составляют два маленьких привидения.',
    },
    layout: { start: 6, span: 4, nudge: 9 },
  },
  {
    id: 'apple-house',
    src: 'images/illustrations/apple-house.webp',
    full: 'images/illustrations/apple-house-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Tea in the Apple', ru: 'Чаепитие в яблоке' },
    description: {
      en: 'Two worms share tea and cake in their warm apple home while it rains outside.',
      ru: 'Два червячка пьют чай с пирожным в своём тёплом яблочном домике, пока снаружи идёт дождь.',
    },
    layout: { start: 10, span: 3, nudge: 4 },
  },
  {
    id: 'baxter-the-bear',
    src: 'images/illustrations/baxter-the-bear.webp',
    full: 'images/illustrations/baxter-the-bear-full.webp',
    width: 5100,
    height: 2550,
    title: { en: 'Baxter the Bear Cub', ru: 'Медвежонок Бакстер' },
    description: {
      en: 'A spread from a story about Baxter, a little bear who couldn\'t fall asleep for the winter.',
      ru: 'Разворот из истории о медвежонке Бакстере, который никак не мог впасть в спячку.',
    },
    layout: { start: 1, span: 9, nudge: 3 },
  },
  {
    id: 'stump-house',
    src: 'images/illustrations/stump-house.webp',
    full: 'images/illustrations/stump-house-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Autumn Cleaning', ru: 'Осенняя уборка' },
    description: {
      en: 'A mouse sweeps up fallen leaves in front of her tree-stump house.',
      ru: 'Мышка подметает опавшие листья у своего домика в старом пне.',
    },
    layout: { start: 2, span: 4, nudge: 3 },
  },
  {
    id: 'frog-pond',
    src: 'images/illustrations/frog-pond.webp',
    full: 'images/illustrations/frog-pond-full.webp',
    width: 1920,
    height: 1080,
    title: { en: 'Pond Song', ru: 'Песенка у пруда' },
    description: {
      en: 'Two frogs spend a lazy summer day on the pond, surrounded by dragonflies.',
      ru: 'Две лягушки проводят ленивый летний день на пруду в окружении стрекоз.',
    },
    layout: { start: 7, span: 6, nudge: 11 },
  },
  {
    id: 'ghost-movie-night',
    src: 'images/illustrations/ghost-movie-night.webp',
    full: 'images/illustrations/ghost-movie-night-full.webp',
    width: 1080,
    height: 1350,
    title: { en: 'Ghost Movie Night', ru: 'Киновечер с привидениями' },
    description: {
      en: 'Even ghosts get scared at a horror movie.',
      ru: 'Даже привидения боятся фильмов ужасов.',
    },
    layout: { start: 5, span: 4, nudge: 3 },
  },
];
