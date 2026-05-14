function generateWoodEntry(mod, name, overrides = {}) {
  const prefix = mod === "minecraft" ? "" : `${mod}:`;

  // Исключения
  const isFlorus = name === "florus"; // у флоруса стебель, а не лог
  const isNetherWood = name === "crimson" || name === "warped"; // нет лодок/табличек
  const isBamboo = name === "bamboo"; // особый блок вместо лога

  // Вычисляем ID лога (с учётом исключений)
  let logId;
  if (isFlorus) logId = `${prefix}florus_stem`;
  else if (isBamboo) logId = `${prefix}bamboo_block`;
  else logId = `${prefix}${name}_log`;

  const entry = {
    mod: mod,
    name: name,
    planks: `${prefix}${name}_planks`,
    log: logId,
    trapdoor: `${prefix}${name}_trapdoor`,
    door: `${prefix}${name}_door`,
    fence: `${prefix}${name}_fence`,
    fence_gate: `${prefix}${name}_fence_gate`,
    pressure_plate: `${prefix}${name}_pressure_plate`,
    button: `${prefix}${name}_button`,
    slab: `${prefix}${name}_slab`,
    ...overrides,
  };

  // Только для обычных деревьев (не Nether и не Bamboo)
  const hasExtraItems = !isNetherWood && !isBamboo;
  if (hasExtraItems) {
    entry.boat = `${prefix}${name}_boat`;
    entry.chest_boat = `${prefix}${name}_chest_boat`;
    entry.sign = `${prefix}${name}_sign`;
    entry.hanging_sign = `${prefix}${name}_hanging_sign`;
  }

  return entry;
}

const woodNames = {
  minecraft: [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "mangrove",
    "cherry",
    "crimson",
    "warped",
  ],
  biomesoplenty: [
    "fir",
    "pine",
    "maple",
    "willow",
    "dead",
    "magic",
    "mahogany",
    "jacaranda",
    "palm",
    "umbran",
    "hellbark",
    "empyreal",
  ],
  biomeswevegone: [
    "aspen",
    "blue_enchanted",
    "cika",
    "cypress",
    "ebony",
    "fir",
    "florus",
    "green_enchanted",
    "holly",
    "mahogany",
    "ironwood",
    "jacaranda",
    "maple",
    "palm",
    "pine",
    "rainbow_eucalyptus",
    "redwood",
    "sakura",
    "skyris",
    "white_mangrove",
    "willow",
    "witch_hazel",
    "zelkova",
  ],
  quark: ["ancient", "azalea", "blossom"],
};

global.WoodTypes = [];

for (const [mod, names] of Object.entries(woodNames)) {
  for (const name of names) {
    global.WoodTypes.push(generateWoodEntry(mod, name));
  }
}

global.WoodTypesMap = new Map();
global.WoodTypes.forEach((wood) => {
  global.WoodTypesMap.set(wood.log, wood);
  global.WoodTypesMap.set(wood.planks, wood);
});
console.log(
  `[DR2] Сгененерированно ${global.WoodTypes.length} типов древесины`,
);
