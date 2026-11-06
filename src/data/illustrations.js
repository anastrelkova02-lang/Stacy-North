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
 *    src      image shown in the gallery            (srcWidth = its real pixel width)
 *    small    800px-wide copy for phones and ordinary screens (`name-800.webp`)
 *    full     large image for the lightbox (optional, falls back to `src`; fullWidth = its width)
 *    video    (optional) silent looping .mp4 that plays by itself instead of the picture;
 *             `src` / `full` are then its first frame (shown until it plays, and for reduced motion)
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
    small: "images/illustrations/rainy-campfire-800.webp",
    srcWidth: 1100,
    fullWidth: 2400,
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
    // animated: a silent looping video that plays by itself; `src` is its first frame (still image)
    video: "images/illustrations/stork-school-video.mp4",
    src: "images/illustrations/stork-school-poster.webp",
    full: "images/illustrations/stork-school-poster.webp",
    srcWidth: 1280,
    fullWidth: 1280,
    width: 1280,
    height: 720,
    title: {
      en: "Off to School",
      uk: "До школи"
    },
    description: {
      en: "Animated illustration: a stork with a backpack full of books flaps its wings past a big autumn tree, where three little storks and animal friends with colourful balloons wave goodbye.",
      uk: "Анімована ілюстрація: лелека з рюкзаком, повним книжок, махає крилами біля великого осіннього дерева, під яким троє маленьких лелек і звірята з різнобарвними кульками махають на прощання."
    }
  },
  {
    id: "baxter-autumn",
    src: "images/illustrations/baxter-autumn.webp",
    full: "images/illustrations/baxter-autumn.webp",
    small: "images/illustrations/baxter-autumn-800.webp",
    srcWidth: 1600,
    fullWidth: 1600,
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
    small: "images/illustrations/stump-house-800.webp",
    srcWidth: 1600,
    fullWidth: 2000,
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
    small: "images/illustrations/tomato-soup-tower-800.webp",
    srcWidth: 1100,
    fullWidth: 2400,
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
    // animated: a silent looping video that plays by itself; `src` is its first frame (still image)
    video: "images/illustrations/frog-pond-video.mp4",
    src: "images/illustrations/frog-pond-poster.webp",
    full: "images/illustrations/frog-pond-poster.webp",
    srcWidth: 1280,
    fullWidth: 1280,
    width: 1280,
    height: 720,
    title: {
      en: "Pond Song",
      uk: "Пісенька біля ставка"
    },
    description: {
      en: "Animated illustration: two frogs relax on a lily pond, one on a lily pad and one singing on a floating log, surrounded by dragonflies and reeds.",
      uk: "Анімована ілюстрація: дві жабки відпочивають на ставку: одна сидить на листку латаття, інша співає на колоді серед бабок і очерету."
    }
  },
  {
    id: "whales",
    // animated: a silent looping video that plays by itself; `src` is its first frame (still image)
    video: "images/illustrations/whales-video.mp4",
    src: "images/illustrations/whales-poster.webp",
    full: "images/illustrations/whales-poster.webp",
    srcWidth: 1280,
    fullWidth: 1280,
    width: 1280,
    height: 720,
    title: {
      en: "Whale Song",
      uk: "Пісня китів"
    },
    description: {
      en: "Animated illustration: a mother whale and her calf swim through the blue sea past colourful coral and little fish.",
      uk: "Анімована ілюстрація: мама-кит і китеня пливуть синім морем повз барвисті корали й маленьких рибок."
    }
  },
  {
    id: "savanna-hide-and-seek",
    src: "images/illustrations/savanna-hide-and-seek.webp",
    full: "images/illustrations/savanna-hide-and-seek.webp",
    small: "images/illustrations/savanna-hide-and-seek-800.webp",
    srcWidth: 1600,
    fullWidth: 1600,
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
    small: "images/illustrations/cookie-tin-workshop-800.webp",
    srcWidth: 1600,
    fullWidth: 2000,
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
    // animated: a silent looping video that plays by itself; `src` is its first frame (still image)
    video: "images/illustrations/submarine-video.mp4",
    src: "images/illustrations/submarine-poster.webp",
    full: "images/illustrations/submarine-poster.webp",
    srcWidth: 1280,
    fullWidth: 1280,
    width: 1280,
    height: 720,
    title: {
      en: "Little Submarine",
      uk: "Маленький підводний човен"
    },
    description: {
      en: "Animated illustration: two children look out of the portholes of a little yellow submarine exploring a colourful coral reef.",
      uk: "Анімована ілюстрація: двоє дітей визирають з ілюмінаторів маленького жовтого підводного човна, що досліджує барвистий кораловий риф."
    }
  },
  {
    id: "moon-mice",
    src: "images/illustrations/moon-mice.webp",
    full: "images/illustrations/moon-mice.webp",
    small: "images/illustrations/moon-mice-800.webp",
    srcWidth: 1600,
    fullWidth: 1600,
    width: 1600,
    height: 900,
    title: {
      en: "Moonlit Tea",
      uk: "Чай під місяцем"
    },
    description: {
      en: "Two mice wrapped in a patchwork blanket sip tea and nibble cheese in their tree hollow, gazing at a full moon that looks like cheese.",
      uk: "Дві мишки, закутані в клаптикову ковдру, п’ють чай і їдять сир у своєму дуплі, милуючись повним місяцем, схожим на сир."
    }
  },
  {
    id: "muddy-piglet",
    src: "images/illustrations/muddy-piglet.webp",
    full: "images/illustrations/muddy-piglet.webp",
    small: "images/illustrations/muddy-piglet-800.webp",
    srcWidth: 1600,
    fullWidth: 1600,
    width: 1600,
    height: 900,
    title: {
      en: "Muddy Piglet",
      uk: "Брудне поросятко"
    },
    description: {
      en: "A happy piglet in a blue dress splashes in a muddy puddle on the grass, surrounded by acorns and autumn leaves.",
      uk: "Щасливе поросятко в блакитній сукенці хлюпається в брудній калюжі на траві серед жолудів та осіннього листя."
    }
  },
  {
    id: "ghost-movie-night",
    src: "images/illustrations/ghost-movie-night.webp",
    full: "images/illustrations/ghost-movie-night-full.webp",
    small: "images/illustrations/ghost-movie-night-800.webp",
    srcWidth: 1600,
    fullWidth: 2000,
    width: 1080,
    height: 1350,
    title: {
      en: "Ghost Movie Night",
      uk: "Кіновечір із привидами"
    },
    description: {
      en: "Three little ghosts and a ghost dog huddle on a red sofa with popcorn, frightened by a horror movie on TV.",
      uk: "Троє маленьких привидів і собака-привид тиснуться на червоному дивані з попкорном, налякані фільмом жахів."
    }
  },
  {
    id: "coral-reef",
    // animated: a silent looping video that plays by itself; `src` is its first frame (still image)
    video: "images/illustrations/coral-reef-video.mp4",
    src: "images/illustrations/coral-reef-poster.webp",
    full: "images/illustrations/coral-reef-poster.webp",
    srcWidth: 1280,
    fullWidth: 1280,
    width: 1280,
    height: 720,
    title: {
      en: "Under the Sea",
      uk: "Під водою"
    },
    description: {
      en: "Animated illustration: two little divers meet a curious crab and a friendly octopus on a bright coral reef.",
      uk: "Анімована ілюстрація: двоє маленьких пірнальників знайомляться з допитливим крабом і привітним восьминогом на яскравому кораловому рифі."
    }
  },
  {
    id: "safari-waterhole",
    src: "images/illustrations/safari-waterhole.webp",
    full: "images/illustrations/safari-waterhole.webp",
    small: "images/illustrations/safari-waterhole-800.webp",
    srcWidth: 1600,
    fullWidth: 1600,
    width: 1600,
    height: 900,
    title: {
      en: "Safari Waterhole",
      uk: "Водопій на сафарі"
    },
    description: {
      en: "An elephant, a buffalo, a grumpy rhino with birds on its back, a hippo and a lion gather at a sunny savanna waterhole.",
      uk: "Слон, буйвіл, сердитий носоріг із пташками на спині, бегемот і лев збираються біля водопою в сонячній савані."
    }
  },
  {
    id: "apple-house",
    src: "images/illustrations/apple-house.webp",
    full: "images/illustrations/apple-house-full.webp",
    small: "images/illustrations/apple-house-800.webp",
    srcWidth: 1600,
    fullWidth: 2000,
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
    small: "images/illustrations/baxter-house-800.webp",
    srcWidth: 1600,
    fullWidth: 1600,
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
    small: "images/illustrations/gingerbread-house-800.webp",
    srcWidth: 1100,
    fullWidth: 2000,
    width: 2000,
    height: 2000,
    title: {
      en: "Gingerbread Day",
      uk: "Пряниковий день"
    },
    description: {
      en: "A girl with candy-cane hair clips decorates a gingerbread house at a table full of sweets and baking things, while snow falls outside the window.",
      uk: "Дівчинка із заколками-льодяниками прикрашає пряниковий будиночок за столом, повним солодощів і кухонного начиння, поки за вікном падає сніг."
    }
  },
  {
    id: "pumpkin-evening",
    src: "images/illustrations/pumpkin-evening.webp",
    full: "images/illustrations/pumpkin-evening-full.webp",
    small: "images/illustrations/pumpkin-evening-800.webp",
    srcWidth: 1100,
    fullWidth: 2000,
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
 * GALLERY COMPOSITION — one picture per row, in the order of the list above.
 * Every illustration has exactly the same width (the gallery width, see `.canvas` in
 * styles.css); its height follows its own proportions, so portraits are taller and
 * landscapes shorter. Nothing is cropped or stretched.
 */
export const galleryLayout = illustrations.map(({ id }) => ({ ids: [id] }));
