//#region global custom recipes patterns&constants
/**
 * @type {Object} RawOreVariant
 * @property {string} name - The name of the ore variant (e.g., "iron", "gold")
 * @property {string} type - The type of the ore variant (e.g., "metal", "gem")
 * @property {string} namespace - The namespace associated with the ore variant (e.g., mod ID)
 * @property {number} quality - Коэффициент качества руды от 3 до 6
 * @property {string} element - Результат переработки руды (например, "iron", "gold")
 */
global.RawOreVariants = [
    {name: 'iron', type: 'metal', namespace: 'minecraft', quality: 3, element: 'iron'},
    {name: 'gold', type: 'metal', namespace: 'minecraft', quality: 4, element: 'gold'},
    {name: 'copper', type: 'metal', namespace: 'minecraft', quality: 3, element: 'copper'},
    {name: 'tin', type: 'metal', namespace: 'gtceu', quality: 3, element: 'tin'},
    {name: 'lead', type: 'metal', namespace: 'gtceu', quality: 3, element: 'lead'},
    {name: 'silver', type: 'metal', namespace: 'gtceu', quality: 4, element: 'silver'},
    {name: 'magnetite', type: 'metal', namespace: 'gtceu', quality: 5, element: 'iron'},
    {name: 'malachite', type: 'metal', namespace: 'gtceu', quality: 3, element: 'copper'},
    {name: 'molybdenite', type: 'metal', namespace: 'gtceu', quality: 4, element: 'molybdenum'},
    {name: 'molybdenum', type: 'metal', namespace: 'gtceu', quality: 4, element: 'molybdenum'},
    {name: 'naquadah', type: 'metal', namespace: 'gtceu', quality: 6, element: 'naquadah'},
    {name: 'neodymium', type: 'metal', namespace: 'gtceu', quality: 5, element: 'neodymium'},
    {name: 'nickel', type: 'metal', namespace: 'gtceu', quality: 4, element: 'nickel'},
    {name: 'aluminium', type: 'metal', namespace: 'gtceu', quality: 3, element: 'aluminium'},
    {name: 'bauxite', type: 'metal', namespace: 'gtceu', quality: 3, element: 'aluminium'}
    
];
//можно весь список указать в itemObliterator
global.DISABLED_ITEMS = [];

//тупо event.remove({output:this});
global.REMOVE_RECIPES_OUTPUTS = [ //from all files where output in condition
    /^minecraft:.*_helmet/,
    /^minecraft:.*_chestplate/,
    /^minecraft:.*_leggings/,
    /^minecraft:.*_boots/,
    "minecraft:lead",
    "minecraft:map",
    "minecraft:crafting_table",
    "minecraft:furnace",
    "minecraft:enchanting_table",
    "minecraft:paper",
    "minecraft:anvil",
    "minecraft:grindstone",
    "minecraft:stonecutter",
    /^minecraft:.*_bed/,
    "immersiveengineering:component_iron",
    "immersiveengineering:component_steel",
    /^immersiveengineering:plate.*/,
    //dr2:tag_remove
    "#kubejs:disabled_items"
];

//string array с id рецептов 
///^create:crafting\/*/ 
/**
 * @type {Array} REMOVE_RECIPES_MINECRAFT
 */
global.REMOVE_RECIPES_MINECRAFT = [
    /^minecraft:.*_pickaxe/,
    /^minecraft:.*_axe/,
    /^minecraft:.*_sword/,
    /^minecraft:.*_hoe/,
    /^minecraft:.*_shovel/,
    "minecraft:fishing_rod",
    "minecraft:compass",
    "minecraft:clock",
    "gtceu:shaped/flint_and_steel",
    "minecraft:brush",
    "betterarcheology:iron_brush",
    "betterarcheology:diamond_brush",
    "quark:tools/crafting/trowel",
    "minecraft:shears",
    "minecraft:spyglass",
    /^biomeswevegone:.*_crafting_table/,
    "quark:building/crafting/furnaces/deepslate_furnace",
    "quark:building/crafting/furnaces/blackstone_furnace",
    "luminousworld:smelt_white_oak",
    "luminousworld:smelt_palm",
    "luminousworld:smelt_auburn",
    "luminousworld:smelt_baobab",
    "luminousworld:smelt_soft_birch",
    "minecraft:netherite_ingot",
    "tconstruct:common/materials/netherite_ingot_from_nuggets",
    "minecraft:lectern",
    "minecraft:dispenser",
    "minecraft:dropper",
    "minecraft:piston",
    "tconstruct:common/slime/sticky_piston",
    "undergarden:sticky_piston_from_goo_ball",
    "minecraft:sticky_piston",
    "minecraft:brewing_stand",
    "minecraft:smoker",
    "minecraft:blast_furnace",
    "minecraft:smithing_table",
    "quark:building/crafting/furnaces/blackstone_smoker",
    "quark:building/crafting/furnaces/deepslate_smoker",
    "quark:building/crafting/furnaces/blackstone_blast_furnace",
    "quark:building/crafting/furnaces/deepslate_blast_furnace",
    "tconstruct:common/basalt_blast_furnace",
    "minecraft:barrel",
    "quark:oddities/crafting/crate",
    "quark:automation/crafting/crafter",
    "tfmg:mixing/cast_iron_ingot",
    "tfmg:smelting/fireclay_brick",
    "gtceu:shapeless/fireclay_dust",
    "quark:oddities/crafting/backpack",
    "tconstruct:tables/crafting_station_from_logs",
    "supplementaties:slime_ball",
    "tfmg:filling/hardened_wood_creosote",
    "quark:world/crafting/woodsets/ancient/chest",
    "quark:world/crafting/woodsets/azalea/chest",
    "quark:world/crafting/woodsets/blossom/chest",
    "quark:building/crafting/chests/oak_chest",
    "quark:building/crafting/chests/spruce_chest",
    "quark:building/crafting/chests/acacia_chest",
    "quark:building/crafting/chests/birch_chest",
    "quark:building/crafting/chests/jungle_chest",
    "quark:building/crafting/chests/mangrove_chest",
    "quark:building/crafting/chests/dark_oak_chest",
    "quark:building/crafting/chests/crimson_chest",
    "quark:building/crafting/chests/warped_chest",
    "quark:building/crafting/chests/bamboo_chest",
    "quark:building/crafting/chests/cherry_chest",
    "quark:building/crafting/chests/nether_brick_chest",
    "quark:building/crafting/chests/purpur_chest",
    "quark:building/crafting/chests/prismarine_chest"
];

/**
 * @type {Array}
 */
global.REMOVE_RECIPES_APOTHEOSIS = [
    
];

/**
 * @type {Array}
 */
global.REMOVE_RECIPES_IMMERSIVEENGINEERING = [
    /^immersiveengineering:crafting\/hummercrushing_.*/,
    /^immersiveengineering:crafting\/coil_.*/,
    /^immersiveengineering:crafting\/.*_engineering/,
    "immersiveengineering:crafting/radiator",
    "immersiveengineering:crafting/generator"
];
//#endregion