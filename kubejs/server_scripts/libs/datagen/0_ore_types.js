//priority 1000
//#region ore data generation

// Базовая конфигурация всех руд
const oreConfig = {
  // Металлы (основные)
  iron: {
    type: "metal",
    element: "iron",
    defaultQuality: 3,
    variants: [
      {
        name: "minecraft:raw_iron",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_pyrite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_basaltic_mineral_sand",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
      {
        name: "gtceu:raw_magnetite",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
      {
        name: "gtceu:raw_yellow_limonite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_hematite",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
      {
        name: "gtceu:raw_goethite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_granitic_mineral_sand",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
    ],
  },
  gold: {
    type: "metal",
    element: "gold",
    defaultQuality: 4,
    variants: [
      {
        name: "minecraft:raw_gold",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  copper: {
    type: "metal",
    element: "copper",
    defaultQuality: 3,
    variants: [
      {
        name: "minecraft:raw_copper",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_chalcopyrite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_tetrahedrite",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
      {
        name: "gtceu:raw_malachite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_chalcocite",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
      {
        name: "gtceu:raw_bornite",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
    ],
  },
  tin: {
    type: "metal",
    element: "tin",
    defaultQuality: 3,
    variants: [
      {
        name: "gtceu:raw_tin",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_cassiterite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_cassiterite_sand",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
    ],
  },
  lead: {
    type: "metal",
    element: "lead",
    defaultQuality: 3,
    variants: [
      {
        name: "gtceu:raw_lead",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_galena",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  silver: {
    type: "metal",
    element: "silver",
    defaultQuality: 4,
    variants: [
      {
        name: "gtceu:raw_silver",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  nickel: {
    type: "metal",
    element: "nickel",
    defaultQuality: 4,
    variants: [
      {
        name: "gtceu:raw_nickel",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_garnierite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_pentlandite",
        countRaw: 5,
        countSmeltRaw: global.MATERIAL.ingots(1) + global.MATERIAL.nuggets(1),
      },
    ],
  },
  cobalt: {
    type: "metal",
    element: "cobalt",
    defaultQuality: 5,
    variants: [
      {
        name: "gtceu:raw_cobalt",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_cobaltite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },

  // Специальные руды (с нестандартным элементом)
  magnetite: {
    type: "metal",
    element: "iron", // магнетит даёт железо
    defaultQuality: 5,
    variants: [
      {
        name: "gtceu:raw_magnetite",
        countRaw: 2,
        countSmeltRaw: global.MATERIAL.nuggets(4),
      },
    ],
  },
  malachite: {
    type: "metal",
    element: "copper", // малахит даёт медь
    defaultQuality: 3,
    variants: [
      {
        name: "gtceu:raw_malachite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  molybdenite: {
    type: "metal",
    element: "molybdenum",
    defaultQuality: 4,
    variants: [
      {
        name: "gtceu:raw_molybdenite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  naquadah: {
    type: "metal",
    element: "naquadah",
    defaultQuality: 6,
    variants: [
      {
        name: "gtceu:raw_naquadah",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  neodymium: {
    type: "metal",
    element: "neodymium",
    defaultQuality: 5,
    variants: [
      {
        name: "gtceu:raw_neodymium",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
  aluminium: {
    type: "metal",
    element: "aluminium",
    defaultQuality: 3,
    variants: [
      {
        name: "gtceu:raw_aluminium",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
      {
        name: "gtceu:raw_bauxite",
        countRaw: 1,
        countSmeltRaw: global.MATERIAL.nuggets(2),
      },
    ],
  },
};

// Генерация основных массивов
global.RawOreVariants = []; // Все руды с качеством и элементом
global.OreProcessingData = {
  // Индексированные данные для быстрого доступа
  byRawOre: new Map(), // поиск по raw_ore
  byElement: new Map(), // поиск по элементу
  byType: new Map(), // поиск по типу
};

// Генерация специфических массивов (для обратной совместимости)
global.CopperOreTypes = [];
global.IronOreTypes = [];
global.TinOreTypes = [];
global.LeadOreTypes = [];
global.SilverOreTypes = [];
global.GoldOreTypes = [];
global.NickelOreTypes = [];
global.CobaltOreTypes = [];

// Заполняем все структуры
for (const [oreName, oreData] of Object.entries(oreConfig)) {
  const { type, element, defaultQuality, variants } = oreData;

  // Добавляем в RawOreVariants
  variants.forEach((variant) => {
    const rawOreEntry = {
      name: variant.name,
      type: type,
      element: element,
      quality: defaultQuality,
      countRaw: variant.countRaw,
      countSmeltRaw: variant.countSmeltRaw,
    };

    global.RawOreVariants.push(rawOreEntry);

    // Индексация для быстрого поиска
    global.OreProcessingData.byRawOre.set(variant.name, rawOreEntry);

    if (!global.OreProcessingData.byElement.has(element)) {
      global.OreProcessingData.byElement.set(element, []);
    }
    global.OreProcessingData.byElement.get(element).push(rawOreEntry);

    if (!global.OreProcessingData.byType.has(type)) {
      global.OreProcessingData.byType.set(type, []);
    }
    global.OreProcessingData.byType.get(type).push(rawOreEntry);
  });

  // Заполняем специфические массивы (для обратной совместимости)
  const targetArray = {
    copper: global.CopperOreTypes,
    iron: global.IronOreTypes,
    tin: global.TinOreTypes,
    lead: global.LeadOreTypes,
    silver: global.SilverOreTypes,
    gold: global.GoldOreTypes,
    nickel: global.NickelOreTypes,
    cobalt: global.CobaltOreTypes,
  }[oreName];

  if (targetArray) {
    variants.forEach((variant) => {
      targetArray.push({
        name: variant.name,
        countRaw: variant.countRaw,
        countSmeltRaw: variant.countSmeltRaw,
      });
    });
  }
}

// Хелперы для работы с рудами
global.OreHelper = {
  // Получить данные по raw_ore
  getByRawOre: (rawOreId) => global.OreProcessingData.byRawOre.get(rawOreId),

  // Получить все руды для элемента
  getByElement: (element) =>
    global.OreProcessingData.byElement.get(element) || [],

  // Получить качество руды
  getQuality: (rawOreId) =>
    global.OreProcessingData.byRawOre.get(rawOreId)?.quality ?? 3,

  // Получить выход в mb из плавильни
  getSmeltOutput: (rawOreId) => {
    const data = global.OreProcessingData.byRawOre.get(rawOreId);
    return data?.countSmeltRaw ?? global.MATERIAL.nuggets(2);
  },

  // Проверить, является ли предмет рудой
  isRawOre: (itemId) => global.OreProcessingData.byRawOre.has(itemId),

  // Получить элемент (результат переработки)
  getElement: (rawOreId) =>
    global.OreProcessingData.byRawOre.get(rawOreId)?.element ?? null,
};

console.log(`[DR2] Сгенерировано ${global.RawOreVariants.length} типов руд`);
console.log(
  `[DR2] Доступно элементов: ${global.OreProcessingData.byElement.size}`,
);

//#endregion
