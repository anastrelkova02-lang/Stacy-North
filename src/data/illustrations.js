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
 *    The arrangement on the page is set in `galleryLayout` at the bottom of this file.
 */
export const illustrations = [
  {
    id: "rainy-campfire",
    src: "images/illustrations/rainy-campfire.webp",
    full: "images/illustrations/rainy-campfire-full.webp",
    width: 5100,
    height: 2550,
    title: {
      en: "Rainy Night Campfire",
      uk: "Багаття дощової ночі"
    },
    description: {
      en: "A little mouse in a yellow raincoat toasts marshmallows by her glowing log house.",
      uk: "Мишка в жовтому дощовику підсмажує маршмелоу біля свого сяйливого будиночка в колоді."
    }
  },
  {
    id: "stork-school",
    src: "images/illustrations/stork-school.webp",
    full: "images/illustrations/stork-school.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Off to School",
      uk: "До школи"
    },
    description: {
      en: "A stork with a backpack full of books flies past a big autumn tree, where little animals hold colourful balloons.",
      uk: "Лелека з рюкзаком, повним книжок, пролітає повз велике осіннє дерево, під яким маленькі звірята тримають різнобарвні кульки."
    }
  },
  {
    id: "baxter-autumn",
    src: "images/illustrations/baxter-autumn.webp",
    full: "images/illustrations/baxter-autumn.webp",
    width: 2000,
    height: 1000,
    title: {
      en: "Baxter the Bear Cub",
      uk: "Ведмежа Бакстер"
    },
    description: {
      en: "Baxter the bear cub in a golden autumn forest, where beavers saw logs and raccoons hang mushrooms out to dry.",
      uk: "Ведмежа Бакстер у золотому осінньому лісі, де бобри пиляють колоди, а єноти сушать гриби."
    }
  },
  {
    id: "stump-house",
    src: "images/illustrations/stump-house.webp",
    full: "images/illustrations/stump-house-full.webp",
    width: 1080,
    height: 1350,
    title: {
      en: "Autumn Cleaning",
      uk: "Осіннє прибирання"
    },
    description: {
      en: "A mouse sweeps up fallen leaves in front of her tree-stump house.",
      uk: "Мишка підмітає опале листя біля свого будиночка в старому пні."
    }
  },
  {
    id: "tomato-soup-tower",
    src: "images/illustrations/tomato-soup-tower.webp",
    full: "images/illustrations/tomato-soup-tower-full.webp",
    width: 5100,
    height: 2550,
    title: {
      en: "Tomato Soup Tower",
      uk: "Будиночок із консервних бляшанок"
    },
    description: {
      en: "A tiny worm's tea house built from tins, glowing among giant leaves and fireflies at night.",
      uk: "Чайний будиночок маленького хробачка, збудований із консервних бляшанок, світиться вночі серед величезного листя та світлячків."
    }
  },
  {
    id: "frog-pond",
    src: "images/illustrations/frog-pond.webp",
    full: "images/illustrations/frog-pond-full.webp",
    width: 1920,
    height: 1080,
    title: {
      en: "Pond Song",
      uk: "Пісенька біля ставка"
    },
    description: {
      en: "Two frogs spend a lazy summer day on the pond, surrounded by dragonflies.",
      uk: "Дві жабки проводять лінивий літній день на ставку серед бабок."
    }
  },
  {
    id: "whales",
    src: "images/illustrations/whales.webp",
    full: "images/illustrations/whales.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Whale Song",
      uk: "Пісня китів"
    },
    description: {
      en: "Gentle whales drift through the deep blue sea.",
      uk: "Лагідні кити пливуть глибоким синім морем."
    }
  },
  {
    id: "savanna-hide-and-seek",
    src: "images/illustrations/savanna-hide-and-seek.webp",
    full: "images/illustrations/savanna-hide-and-seek.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Hide and Seek in the Savanna",
      uk: "Хованки в савані"
    },
    description: {
      en: "An elephant, a rhino, a giraffe, a zebra and a gazelle play hide and seek among the bushes of the savanna.",
      uk: "Слон, носоріг, жирафа, зебра й газель граються в хованки серед кущів савани."
    }
  },
  {
    id: "cookie-tin-workshop",
    src: "images/illustrations/cookie-tin-workshop.webp",
    full: "images/illustrations/cookie-tin-workshop-full.webp",
    width: 1080,
    height: 1350,
    title: {
      en: "The Cookie Tin Workshop",
      uk: "Майстерня в коробці з-під печива"
    },
    description: {
      en: "A ladybug knits a long scarf inside a cookie tin full of sewing treasures.",
      uk: "Сонечко в’яже довгий шарф у бляшаній коробці, повній швейних скарбів."
    }
  },
  {
    id: "submarine",
    src: "images/illustrations/submarine.webp",
    full: "images/illustrations/submarine.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Little Submarine",
      uk: "Маленький підводний човен"
    },
    description: {
      en: "A tiny submarine explores the underwater world.",
      uk: "Маленький підводний човен досліджує підводний світ."
    }
  },
  {
    id: "moon-mice",
    src: "images/illustrations/moon-mice.webp",
    full: "images/illustrations/moon-mice.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Mice on the Moon",
      uk: "Мишки на Місяці"
    },
    description: {
      en: "Little mice on an adventure to the moon.",
      uk: "Маленькі мишки вирушають у пригоду на Місяць."
    }
  },
  {
    id: "muddy-piglet",
    src: "images/illustrations/muddy-piglet.webp",
    full: "images/illustrations/muddy-piglet.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Muddy Piglet",
      uk: "Брудне поросятко"
    },
    description: {
      en: "A happy piglet splashes in a puddle of mud.",
      uk: "Щасливе поросятко хлюпається в калюжі."
    }
  },
  {
    id: "ghost-movie-night",
    src: "images/illustrations/ghost-movie-night.webp",
    full: "images/illustrations/ghost-movie-night-full.webp",
    width: 1080,
    height: 1350,
    title: {
      en: "Ghost Movie Night",
      uk: "Кіновечір із привидами"
    },
    description: {
      en: "Even ghosts get scared at a horror movie.",
      uk: "Навіть привиди бояться фільмів жахів."
    }
  },
  {
    id: "coral-reef",
    src: "images/illustrations/coral-reef.webp",
    full: "images/illustrations/coral-reef-full.webp",
    width: 1920,
    height: 1080,
    title: {
      en: "Under the Sea",
      uk: "Під водою"
    },
    description: {
      en: "Two little divers meet a curious crab and a friendly octopus on a bright coral reef.",
      uk: "Двоє маленьких пірнальників знайомляться з допитливим крабом і привітним восьминогом на яскравому кораловому рифі."
    }
  },
  {
    id: "safari-waterhole",
    src: "images/illustrations/safari-waterhole.webp",
    full: "images/illustrations/safari-waterhole.webp",
    width: 1600,
    height: 900,
    title: {
      en: "Safari Waterhole",
      uk: "Водопій на сафарі"
    },
    description: {
      en: "Animals gather at the waterhole on a sunny safari day.",
      uk: "Тварини збираються біля водопою в сонячний день сафарі."
    }
  },
  {
    id: "apple-house",
    src: "images/illustrations/apple-house.webp",
    full: "images/illustrations/apple-house-full.webp",
    width: 1080,
    height: 1350,
    title: {
      en: "Tea in the Apple",
      uk: "Чаювання в яблуці"
    },
    description: {
      en: "Two worms share tea and cake in their warm apple home while it rains outside.",
      uk: "Два хробачки п’ють чай із тістечком у своєму теплому яблучному будиночку, поки надворі йде дощ."
    }
  },
  {
    id: "forest-house",
    src: "images/illustrations/baxter-house.webp",
    full: "images/illustrations/baxter-house.webp",
    width: 5100,
    height: 2550,
    title: {
      en: "Little House in the Forest",
      uk: "Будиночок у лісі"
    },
    description: {
      en: "A cosy hill house with a glowing round door and window in the night forest.",
      uk: "Затишний будиночок у пагорбі з круглими дверима та теплим вогником у вікні серед нічного лісу."
    }
  },
  {
    id: "gingerbread-house",
    src: "images/illustrations/gingerbread-house.webp",
    full: "images/illustrations/gingerbread-house-full.webp",
    width: 2000,
    height: 2000,
    title: {
      en: "Gingerbread Day",
      uk: "Пряниковий день"
    },
    description: {
      en: "Decorating a gingerbread house while the snow falls outside.",
      uk: "Поки за вікном падає сніг, дівчинка прикрашає пряниковий будиночок."
    }
  },
  {
    id: "pumpkin-evening",
    src: "images/illustrations/pumpkin-evening.webp",
    full: "images/illustrations/pumpkin-evening-full.webp",
    width: 2000,
    height: 2000,
    title: {
      en: "Pumpkin Evening",
      uk: "Гарбузовий вечір"
    },
    description: {
      en: "A bear carves a pumpkin by the fireplace, with two little ghosts for company.",
      uk: "Ведмідь вирізає гарбуз біля каміна, а компанію йому складають двоє маленьких привидів."
    }
  }
];

/**
 * GALLERY COMPOSITION — how the pictures above are arranged on desktop, row by row.
 * Every id must appear once, in the same order as the list above.
 *
 *   width   share of the gallery width the row takes (in %)
 *   align   'left' | 'right' | 'center' — where a narrower row sits
 *   pair    'match'   → the two pictures get the same height (a portrait next to a landscape
 *                       automatically becomes much narrower, so nothing is cropped)
 *           'stagger' → two pictures at their own widths (`widths`), the second one lower (`drop`, %)
 *
 * Sizes were chosen from each file's real proportions:
 *   2:1 very wide → 80–100 %,  16:9 landscape → 60–70 % alone,
 *   4:5 portrait → ~28–33 % (always beside a landscape, never alone and wide),  1:1 square → ~36 %.
 * On phones every picture gets its own line; width depends on its shape (see styles.css).
 */
export const galleryLayout = [
  { ids: ['rainy-campfire'], width: 100 },
  { ids: ['stork-school'], width: 100 },
  { ids: ['baxter-autumn'], width: 100 },
  { ids: ['stump-house', 'tomato-soup-tower'], pair: 'match', width: 92, align: 'right' },
  { ids: ['frog-pond'], width: 100 },
  { ids: ['whales'], width: 100 },
  { ids: ['savanna-hide-and-seek'], width: 100 },
  { ids: ['cookie-tin-workshop', 'submarine'], pair: 'match', width: 90, align: 'left' },
  { ids: ['moon-mice', 'muddy-piglet'], pair: 'stagger', widths: [44, 50], drop: 12, width: 100 },
  { ids: ['ghost-movie-night', 'coral-reef'], pair: 'match', width: 96, align: 'left' },
  { ids: ['safari-waterhole', 'apple-house'], pair: 'match', width: 86, align: 'right' },
  { ids: ['forest-house'], width: 84, align: 'left' },
  { ids: ['gingerbread-house', 'pumpkin-evening'], pair: 'stagger', widths: [46, 41], drop: 9, width: 74, align: 'center' },
];
