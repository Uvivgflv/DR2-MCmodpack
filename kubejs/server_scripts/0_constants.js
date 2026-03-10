//priority 1000
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
//woods
global.WoodTypes = [
    {name: 'oak', planks: 'minecraft:oak_planks', log: 'minecraft:oak_log'},
    {name: 'spruce', planks: 'minecraft:spruce_planks', log: 'minecraft:spruce_log'},
    {name: 'birch', planks: 'minecraft:birch_planks', log: 'minecraft:birch_log'},
    {name: 'jungle', planks: 'minecraft:jungle_planks', log: 'minecraft:jungle_log'},
    {name: 'acacia', planks: 'minecraft:acacia_planks', log: 'minecraft:acacia_log'},
    {name: 'dark_oak', planks: 'minecraft:dark_oak_planks', log: 'minecraft:dark_oak_log'},
    {name: 'mangrove', planks: 'minecraft:mangrove_planks', log: 'minecraft:mangrove_log'},
    {name: 'crimson', planks: 'minecraft:crimson_planks', log: 'minecraft:crimson_stem'},
    {name: 'warped', planks: 'minecraft:warped_planks', log: 'minecraft:warped_stem'},
    {name: 'bamboo', planks: 'minecraft:bamboo_planks', log: 'minecraft:bamboo_block'},
    {name: 'cherry', planks: 'minecraft:cherry_planks', log: 'minecraft:cherry_log'},
    //biomes o' plenty
    {name: 'fir', planks: 'biomesoplenty:fir_planks', log: 'biomesoplenty:fir_log'},
    {name: 'pine', planks: 'biomesoplenty:pine_planks', log: 'biomesoplenty:pine_log'},
    {name: 'maple', planks: 'biomesoplenty:maple_planks', log: 'biomesoplenty:maple_log'},
    {name: 'willow', planks: 'biomesoplenty:willow_planks', log: 'biomesoplenty:willow_log'},
    {name: 'dead', planks: 'biomesoplenty:dead_planks', log: 'biomesoplenty:dead_log'},
    {name: 'magic', planks: 'biomesoplenty:magic_planks', log: 'biomesoplenty:magic_log'},
    {name: 'redwood', planks: 'biomesoplenty:redwood_planks', log: 'biomesoplenty:redwood_log'},
    {name: 'mahogany', planks: 'biomesoplenty:mahogany_planks', log: 'biomesoplenty:mahogany_log'},
    {name: 'jacaranda', planks: 'biomesoplenty:jacaranda_planks', log: 'biomesoplenty:jacaranda_log'},
    {name: 'palm', planks: 'biomesoplenty:palm_planks', log: 'biomesoplenty:palm_log'},
    {name: 'umbran', planks: 'biomesoplenty:umbran_planks', log: 'biomesoplenty:umbran_log'},
    {name: 'hellbark', planks: 'biomesoplenty:hellbark_planks', log: 'biomesoplenty:hellbark_log'},
    {name: 'empyreal', planks: 'biomesoplenty:empyreal_planks', log: 'biomesoplenty:empyreal_log'},
    //biomeswevegone
    {name: 'aspen', planks: 'biomeswevegone:aspen_planks', log: 'biomeswevegone:aspen_log'},
    {name: 'blue_enchanted', planks: 'biomeswevegone:blue_enchanted_planks', log: 'biomeswevegone:blue_enchanted_log'},
    {name: 'cika', planks: 'biomeswevegone:cika_planks', log: 'biomeswevegone:cika_log'},
    {name: 'cypress', planks: 'biomeswevegone:cypress_planks', log: 'biomeswevegone:cypress_log'},
    {name: 'ebony', planks: 'biomeswevegone:ebony_planks', log: 'biomeswevegone:ebony_log'},
    {name: 'fir', planks: 'biomeswevegone:fir_planks', log: 'biomeswevegone:fir_log'},
    {name: 'florus', planks: 'biomeswevegone:florus_planks', log: 'biomeswevegone:florus_stem'},
    {name: 'green_enchanted', planks: 'biomeswevegone:green_enchanted_planks', log: 'biomeswevegone:green_enchanted_log'},
    {name: 'holly', planks: 'biomeswevegone:holly_planks', log: 'biomeswevegone:holly_log'},
    {name: 'mahogany', planks: 'biomeswevegone:mahogany_planks', log: 'biomeswevegone:mahogany_log'},
    {name: 'ironwood', planks: 'biomeswevegone:ironwood_planks', log: 'biomeswevegone:ironwood_log'},
    {name: 'jacaranda', planks: 'biomeswevegone:jacaranda_planks', log: 'biomeswevegone:jacaranda_log'},
    {name: 'maple', planks: 'biomeswevegone:maple_planks', log: 'biomeswevegone:maple_log'},
    {name: 'palm', planks: 'biomeswevegone:palm_planks', log: 'biomeswevegone:palm_log'},
    {name: 'pine', planks: 'biomeswevegone:pine_planks', log: 'biomeswevegone:pine_log'},
    {name: 'rainbow_eucalyptus', planks: 'biomeswevegone:rainbow_eucalyptus_planks', log: 'biomeswevegone:rainbow_eucalyptus_log'},
    {name: 'redwood', planks: 'biomeswevegone:redwood_planks', log: 'biomeswevegone:redwood_log'},
    {name: 'sakura', planks: 'biomeswevegone:sakura_planks', log: 'biomeswevegone:sakura_log'},
    {name: 'skyris', planks: 'biomeswevegone:skyris_planks', log: 'biomeswevegone:skyris_log'},
    {name: 'white_mangrove', planks: 'biomeswevegone:white_mangrove_planks', log: 'biomeswevegone:white_mangrove_log'},
    {name: 'willow', planks: 'biomeswevegone:willow_planks', log: 'biomeswevegone:willow_log'},
    {name: 'witch_hazel', planks: 'biomeswevegone:witch_hazel_planks', log: 'biomeswevegone:witch_hazel_log'},
    {name: 'zelkova', planks: 'biomeswevegone:zelkova_planks', log: 'biomeswevegone:zelkova_log'},
    //jadens nether expansion
    {name: 'claret', planks: 'netherexp:claret_planks', log: 'netherexp:cerebrage_claret_stem'}
];
//nbt not work with spirit infusion
global.RestrictionsCrating = [
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"traveloptics:aqua"}'), spirit1: 'aqueous', spirit2: 'arcane', id: 'aqua'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:fire"}'), spirit1: 'infernal', spirit2: 'arcane', id: 'fire'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:ice"}'), spirit1: 'aerial', spirit2: 'arcane', id: 'ice'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:lightning"}'), spirit1: 'wicked', spirit2: 'arcane', id: 'lightning'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:holy"}'), spirit1: 'infernal', spirit2: 'scared', id: 'holy'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:ender"}'), spirit1: 'wicked', spirit2: 'scared', id: 'ender'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:nature"}'), spirit1: 'earthen', spirit2: 'arcane', id: 'nature'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:blood"}'), spirit1: 'eldrich', spirit2: 'scared', id: 'blood'},
    {name: Item.of('irons_restrictions:manuscript', '{SchoolId:"irons_spellbooks:evocation"}'), spirit1: 'earthen', spirit2: 'wicked', id: 'evocation'}
];

global.VanillaWoodTypes = [
        {name: 'oak', log: 'oak_log', trapdoor: 'minecraft:oak_trapdoor', slab: 'minecraft:oak_slab', cabinet: 'farmersdelight:oak_cabinet', drawer: 'storagedelight:oak_drawer'},
        {name: 'spruce', log: 'spruce_log', trapdoor: 'minecraft:spruce_trapdoor', slab: 'minecraft:spruce_slab', cabinet: 'farmersdelight:spruce_cabinet', drawer: 'storagedelight:spruce_drawer'},
        {name: 'birch', log: 'birch_log', trapdoor: 'minecraft:birch_trapdoor', slab: 'minecraft:birch_slab', cabinet: 'farmersdelight:birch_cabinet', drawer: 'storagedelight:birch_drawer'},
        {name: 'jungle', log: 'jungle_log', trapdoor: 'minecraft:jungle_trapdoor', slab: 'minecraft:jungle_slab', cabinet: 'farmersdelight:jungle_cabinet', drawer: 'storagedelight:jungle_drawer'},
        {name: 'acacia', log: 'acacia_log', trapdoor: 'minecraft:acacia_trapdoor', slab: 'minecraft:acacia_slab', cabinet: 'farmersdelight:acacia_cabinet', drawer: 'storagedelight:acacia_drawer'},
        {name: 'cherry', log: 'cherry_log', trapdoor: 'minecraft:cherry_trapdoor', slab: 'minecraft:cherry_slab', cabinet: 'farmersdelight:cherry_cabinet', drawer: 'storagedelight:cherry_drawer'},
        {name: 'dark_oak', log: 'dark_oak_log', trapdoor: 'minecraft:dark_oak_trapdoor', slab: 'minecraft:dark_oak_slab', cabinet: 'farmersdelight:dark_oak_cabinet', drawer: 'storagedelight:dark_oak_drawer'},
        {name: 'mangrove', log: 'mangrove_log', trapdoor: 'minecraft:mangrove_trapdoor', slab: 'minecraft:mangrove_slab', cabinet: 'farmersdelight:mangrove_cabinet', drawer: 'storagedelight:mangrove_drawer'},
        {name: 'bamboo', log: 'bamboo_block', trapdoor: 'minecraft:bamboo_trapdoor', slab: 'minecraft:bamboo_slab', cabinet: 'farmersdelight:bamboo_cabinet', drawer: 'storagedelight:bamboo_drawer'}, 
        {name: 'crimson', log: 'crimson_stem', trapdoor: 'minecraft:crimson_trapdoor', slab: 'minecraft:crimson_slab', cabinet: 'farmersdelight:crimson_cabinet', drawer: 'storagedelight:crimson_drawer'},
        {name: 'warped', log: 'warped_stem', trapdoor: 'minecraft:warped_trapdoor', slab: 'minecraft:warped_slab', cabinet: 'farmersdelight:warped_cabinet', drawer: 'storagedelight:warped_drawer'}
];
//ores

const ingot = 144;
const nugget = ingot/9;
const block = ingot*9;

global.IngotUnit = 144;
global.BlockUnit = 144*9;
global.NuggetUnit = 144/9;
/**
 * @type {Object} CopperOreType
 * @property {string}  name - id raw ore item
 * @property {int} countRaw - count of output from smelting in furnace/balst furnace
 * @property {int} countSmelt - count in mb molten metall from smelting in smeltery
 */
global.CopperOreTypes = [
    {name:'minecraft:raw_copper', countRaw: 1, countSmeltRaw: nugget*2},
    {name:'gtceu:raw_chalcopyrite', countRaw: 1, countSmelt: nugget*2},
    {name:'gtceu:raw_tetrahedrite', countRaw: 2, countSmeltRaw: nugget*4},
    {name:'gtceu:raw_malachite', countRaw: 1, countSmeltRaw: nugget*2},
    {name:'gtceu:raw_chalcocite', countRaw: 2, countSmeltRaw: nugget*4},
    {name:'gtceu:raw_bornite', countRaw: 2, countSmeltRaw: nugget*4}
];
global.IronOreTypes = [
    {name: 'minecraft:raw_iron', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_pyrite', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_basaltic_mineral_sand', countRaw: 2, countSmeltRaw: nugget*4},
    {name: 'gtceu:raw_magnetite', countRaw: 2, countSmeltRaw: nugget*4},
    {name: 'gtceu:raw_yellow_limonite', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_hematite', countRaw: 2, countSmeltRaw: nugget*4},
    {name: 'gtceu:raw_goethite', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_granitic_mineral_sand', countRaw: 2, countSmeltRaw: nugget*4}
];
global.TinOreTypes = [
    {name: 'gtceu:raw_tin', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_cassiterite', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_cassiterite_sand', countRaw: 2, countSmeltRaw: nugget*4}
];
global.CobaltOreTypes = [
    {name: 'gtceu:raw_cobalt', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_cobaltite', countRaw: 1, countSmeltRaw: nugget*2}
];
global.NickelOreTypes = [
    {name: 'gtceu:raw_nickel', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_garnierite', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_pentlandite', countRaw: 5, countSmeltRaw: ingot+nugget}
];
global.LeadOreTypes = [
    {name: 'gtceu:raw_lead', countRaw: 1, countSmeltRaw: nugget*2},
    {name: 'gtceu:raw_galena', countRaw: 1, countSmeltRaw: nugget*2}
];
global.GoldOreTypes = [
    {name: 'minecraft:raw_gold', countRaw: 1, countSmeltRaw: nugget*2}
];
global.SilverOreTypes = [
    {name: 'gtceu:raw_silver', countRaw: 1, countSmeltRaw: nugget*2}
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
    //"#forge:ingots/aluminium",
    /^immersiveengineering:nugget_.*/,
    /^immersiveengineering:plate_.*/,
    /^immersiveengineering:ingot_.*/,
    /^immersiveengineering:storage_.*/,
    /^immersiveengineering:stick_.*/,
    /^immersiveengineering:treated_wood_.*/,
    /^ad_astra:.*_rod/,
    /^aquaculture:.*_fillet_knife/,
    "create:cogwheel",
    "create:large_cogwheel",
    "create:shaft",
    /^irons_restrictions:.*_manuscript/,
    //'botania:mana_bottle',
    //dr2:tag_remove
    "#kubejs:disabled_items"
];

//string array с id рецептов 
///^create:crafting\/*/ 
/**
 * @type {Array} REMOVE_RECIPES_MINECRAFT/Quark/
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
    /^quark:building\/crafting\/furnaces\/.*/,
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
    /^quark:building\/crafting\/chests\/.*/,
    "minecraft:torch",
    //--stone decor
    "minecraft:stone_stairs",
    "minecraft:stone_slab",
    "quark:building/crafting/vertslabs/stone_vertical_slab",
    "minecraft:granite_stairs",
    "minecraft:granite_slab",
    "minecraft:granite_wall",
    "quark:building/crafting/vertslabs/granite_vertical_slab",
    "minecraft:polished_granite",
    "quark:building/crafting/stonevariants/granite_bricks",
    "quark:building/crafting/stonevariants/chiseled_granite_bricks",
    "quark:building/crafting/stonevariants/granite_pillar",
    "quark:world/crafting/walls/granite_bricks_wall",
    "quark:world/crafting/slabs/granite_bricks_slab",
    "quark:building/crafting/vertslabs/granite_bricks_vertical_slab",
    "minecraft:polished_granite_stairs",
    "minecraft:polished_granite_slab",
    "quark:world/crafting/stairs/granite_bricks_stairs",
    "quark:building/crafting/vertslabs/polished_granite_vertical_slab",
    "minecraft:diorite_stairs",
    "minecraft:diorite_slab",
    "quark:building/crafting/vertslabs/diorite_vertical_slab",
    "minecraft:diorite_wall",
    "minecraft:polished_diorite",
    "quark:building/crafting/stonevariants/diorite_bricks",
    "quark:building/crafting/stonevariants/chiseled_diorite_bricks",
    "quark:building/crafting/stonevariants/diorite_pillar",
    "quark:world/crafting/walls/diorite_bricks_wall",
    "quark:world/crafting/slabs/diorite_bricks_slab",
    "quark:building/crafting/vertslabs/diorite_bricks_vertical_slab",
    "quark:world/crafting/stairs/diorite_bricks_stairs",
    "minecraft:polished_diorite_slab",
    "quark:building/crafting/vertslabs/polished_diorite_vertical_slab",
    "minecraft:andesite_stairs",
    "quark:building/crafting/vertslabs/andesite_vertical_slab",
    "minecraft:andesite_wall",
    "minecraft:polished_andesite",
    "quark:building/crafting/stonevariants/andesite_bricks",
    "quark:building/crafting/stonevariants/chiseled_andesite_bricks",
    "quark:building/crafting/stonevariants/andesite_pillar",
    "quark:world/crafting/walls/andesite_bricks_wall",
    "quark:world/crafting/slabs/andesite_bricks_slab",
    "quark:building/crafting/vertslabs/andesite_bricks_vertical_slab",
    "quark:world/crafting/stairs/andesite_bricks_stairs",
    "minecraft:polished_andesite_stairs",
    "minecraft:polished_andesite_slab",
    "quark:building/crafting/vertslabs/polished_andesite_vertical_slab",
    "quark:world/crafting/polished_limestone",
    "quark:building/crafting/stonevariants/limestone_bricks",
    "quark:building/crafting/stonevariants/chiseled_limestone_bricks",
    "quark:building/crafting/stonevariants/limestone_pillar",
    "quark:world/crafting/walls/limestone_bricks_wall",
    "quark:world/crafting/slabs/limestone_bricks_slab",
    "quark:building/crafting/vertslabs/limestone_bricks_vertical_slab",
    "quark:world/crafting/stairs/limestone_bricks_stairs",
    "quark:world/crafting/walls/limestone_wall",
    "quark:building/crafting/vertslabs/limestone_vertical_slab",
    "quark:world/crafting/slabs/polished_limestone_slab",
    "quark:world/crafting/slabs/limestone_slab",
    "quark:world/crafting/stairs/limestone_stairs",
    "quark:building/crafting/vertslabs/polished_limestone_vertical_slab",
    "quark:world/crafting/stairs/polished_limestone_stairs",
    "quark:world/crafting/polished_jasper",
    "quark:building/crafting/stonevariants/jasper_bricks",
    "quark:building/crafting/stonevariants/chiseled_jasper_bricks",
    "quark:building/crafting/stonevariants/jasper_pillar",
    "quark:world/crafting/walls/jasper_bricks_wall",
    "quark:world/crafting/slabs/jasper_bricks_slab",
    "quark:building/crafting/vertslabs/jasper_bricks_vertical_slab",
    "quark:world/crafting/stairs/jasper_bricks_stairs",
    "quark:world/crafting/walls/jasper_wall",
    "quark:world/crafting/stairs/jasper_stairs",
    "quark:building/crafting/vertslabs/polished_jasper_vertical_slab",
    "quark:world/crafting/slabs/polished_jasper_slab",
    "quark:world/crafting/slabs/jasper_slab",
    "quark:building/crafting/vertslabs/jasper_vertical_slab",
    "quark:world/crafting/stairs/polished_jasper_stairs",
    "quark:world/crafting/polished_shale",
    "quark:building/crafting/stonevariants/shale_bricks",
    "quark:building/crafting/stonevariants/chiseled_shale_bricks",
    "quark:building/crafting/stonevariants/shale_pillar",
    "quark:world/crafting/walls/shale_bricks_wall",
    "quark:world/crafting/slabs/shale_bricks_slab",
    "quark:building/crafting/vertslabs/shale_bricks_vertical_slab",
    "quark:world/crafting/stairs/shale_bricks_stairs",
    "quark:world/crafting/walls/shale_wall",
    "quark:building/crafting/vertslabs/shale_vertical_slab",
    "quark:world/crafting/stairs/shale_stairs",
    "quark:world/crafting/slabs/polished_shale_slab",
    "quark:building/crafting/vertslabs/polished_shale_vertical_slab",
    "quark:world/crafting/slabs/shale_slab",
    "quark:world/crafting/stairs/polished_shale_stairs",
    "quark:world/crafting/polished_myalite",
    "quark:building/crafting/stonevariants/myalite_bricks",
    "quark:building/crafting/stonevariants/chiseled_myalite_bricks",
    "quark:building/crafting/stonevariants/myalite_pillar",
    "quark:world/crafting/walls/myalite_bricks_wall",
    "quark:world/crafting/slabs/myalite_bricks_slab",
    "quark:building/crafting/vertslabs/myalite_bricks_vertical_slab",
    "quark:world/crafting/stairs/myalite_bricks_stairs",
    "quark:world/crafting/stairs/polished_myalite_stairs",
    "quark:world/crafting/walls/myalite_wall",
    "quark:world/crafting/stairs/myalite_stairs",
    "quark:building/crafting/vertslabs/polished_myalite_vertical_slab",
    "quark:world/crafting/slabs/myalite_slab",
    "quark:building/crafting/vertslabs/myalite_vertical_slab",
    "quark:world/crafting/slabs/polished_myalite_slab",
    "quark:world/crafting/walls/permafrost_wall",
    "quark:world/crafting/slabs/permafrost_slab",
    "quark:building/crafting/vertslabs/permafrost_vertical_slab",
    "quark:world/crafting/stairs/permafrost_stairs",
    "quark:world/crafting/permafrost_bricks",
    "quark:world/crafting/walls/permafrost_bricks_wall",
    "quark:world/crafting/slabs/permafrost_bricks_slab",
    "quark:building/crafting/vertslabs/permafrost_bricks_vertical_slab",
    "quark:world/crafting/stairs/permafrost_bricks_stairs",
    "quark:building/crafting/stonevariants/vanilla/polished_calcite",
    "quark:building/crafting/stonevariants/calcite_bricks",
    "quark:building/crafting/stonevariants/chiseled_calcite_bricks",
    "quark:building/crafting/stonevariants/calcite_pillar",
    "quark:building/crafting/walls/calcite_bricks_wall",
    "quark:building/crafting/slabs/calcite_bricks_slab",
    "quark:building/crafting/vertslabs/calcite_bricks_vertical_slab",
    "quark:building/crafting/stairs/calcite_bricks_stairs",
    "quark:building/crafting/walls/calcite_wall",
    "quark:building/crafting/slabs/calcite_slab",
    "quark:building/crafting/stairs/calcite_stairs",
    "quark:building/crafting/vertslabs/polished_calcite_vertical_slab",
    "quark:building/crafting/slabs/polished_calcite_slab",
    "quark:building/crafting/stairs/polished_calcite_stairs",
    "quark:building/crafting/stonevariants/vanilla/polished_dripstone",
    "quark:building/crafting/stonevariants/dripstone_bricks",
    "quark:building/crafting/stonevariants/chiseled_dripstone_bricks",
    "quark:building/crafting/stonevariants/dripstone_pillar",
    "quark:building/crafting/walls/dripstone_bricks_wall",
    "quark:building/crafting/slabs/dripstone_bricks_slab",
    "quark:building/crafting/vertslabs/dripstone_bricks_vertical_slab",
    "quark:building/crafting/stairs/dripstone_bricks_stairs",
    "quark:building/crafting/walls/dripstone_block_wall",
    "quark:building/crafting/slabs/dripstone_block_slab",
    "quark:building/crafting/vertslabs/dripstone_block_vertical_slab",
    "quark:building/crafting/stairs/dripstone_block_stairs",
    "quark:building/crafting/slabs/polished_dripstone_slab",
    "quark:building/crafting/vertslabs/polished_dripstone_vertical_slab",
    "quark:building/crafting/stairs/polished_dripstone_stairs",
    "quark:building/crafting/stonevariants/vanilla/polished_tuff",
    "quark:building/crafting/stonevariants/tuff_bricks",
    "quark:building/crafting/stonevariants/chiseled_tuff_bricks",
    "quark:building/crafting/stonevariants/tuff_pillar",
    "quark:building/crafting/walls/tuff_bricks_wall",
    "quark:building/crafting/slabs/tuff_bricks_slab",
    "quark:building/crafting/vertslabs/tuff_bricks_vertical_slab",
    "quark:building/crafting/stairs/tuff_bricks_stairs",
    "quark:building/crafting/walls/tuff_wall",
    "quark:building/crafting/stairs/tuff_stairs",
    "quark:building/crafting/slabs/polished_tuff_slab",
    "quark:building/crafting/vertslabs/polished_tuff_vertical_slab",
    "quark:building/crafting/slabs/tuff_slab",
    "quark:building/crafting/vertslabs/tuff_vertical_slab",
    "quark:building/crafting/stairs/polished_tuff_stairs",
    "minecraft:cobbled_deepslate_stairs",
    "minecraft:cobbled_deepslate_slab",
    "quark:building/crafting/vertslabs/cobbled_deepslate_vertical_slab",
    "minecraft:cobbled_deepslate_wall",
    "minecraft:chiseled_deepslate",
    "minecraft:polished_deepslate",
    "minecraft:polished_deepslate_stairs",
    "minecraft:polished_deepslate_slab",
    "quark:building/crafting/vertslabs/polished_deepslate_vertical_slab",
    "minecraft:deepslate_brick_wall",
    "minecraft:polished_deepslate_wall",
    "minecraft:deepslate_bricks",
    "minecraft:deepslate_brick_slab",
    "minecraft:deepslate_tile_wall",
    "quark:building/crafting/vertslabs/deepslate_brick_vertical_slab",
    "minecraft:deepslate_tiles",
    "minecraft:deepslate_tile_slab",
    "minecraft:deepslate_brick_stairs",
    "minecraft:deepslate_tile_stairs",
    "quark:building/crafting/vertslabs/deepslate_tile_vertical_slab",
    "minecraft:stone_bricks",
    "minecraft:stone_brick_stairs",
    "minecraft:stone_brick_slab",
    "quark:building/crafting/vertslabs/stone_brick_vertical_slab",
    "minecraft:stone_brick_wall",
    "minecraft:chiseled_stone_bricks",
    "supplementaries:stone_tile",
    "supplementaries:stone_tile_stairs",
    "supplementaries:stone_tile_slab",
    "supplementaries:stone_tile_wall",
    "minecraft:brick_stairs",
    "minecraft:brick_slab",
    "quark:building/crafting/vertslabs/brick_vertical_slab",
    "minecraft:brick_wall",
    "minecraft:mud_brick_stairs",
    "quark:building/crafting/carved_mud_bricks",
    "quark:building/crafting/mud_pillar",
    "quark:building/crafting/mud_brick_lattice",
    "minecraft:mud_brick_slab",
    "minecraft:mud_brick_wall",
    "quark:building/crafting/vertslabs/mud_brick_vertical_slab",
    //--carpets
    /^minecraft:.*_carpet/
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
    //"immersiveengineering:crafting/raw_hammercrushing_aluminum",
    /^immersiveengineering:crafting\/raw_hammercrushing_.*/,
    /^immersiveengineering:crafting\/coil_.*/,
    /^immersiveengineering:crafting\/.*_engineering/,
    /^immersiveengineering:crafting\/component_.*/,
    "immersiveengineering:crafting/radiator",
    "immersiveengineering:crafting/generator",
    "immersiveengineering:crafting/hammer",
    "immersiveengineering:alloysmelter/manyullyn",
    "immersiveengineering:crafting/alloybrick",
    "immersiveengineering:crafting/blastbrick",
    "immersiveengineering:crafting/cokebrick",
    "immersiveengineering:crafting/torch",
    "immersiveengineering:crafting/treated_wood_horizontal",
    //--nugget from ingot
    "immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum",
    "immersiveengineering:crafting/nugget_lead_to_ingot_lead",
    "immersiveengineering:crafting/nugget_silver_to_ingot_silver",
    "immersiveengineering:crafting/nugget_uranium_to_ingot_uranium",
    "immersiveengineering:crafting/nugget_constantan_to_ingot_constantan",
    "immersiveengineering:crafting/nugget_electrum_to_ingot_electrum",
    //--ingot from nugget
    "immersiveengineering:crafting/ingot_aluminum_to_nugget_aluminum",
    "immersiveengineering:crafting/ingot_lead_to_nugget_lead",
    "immersiveengineering:crafting/ingot_silver_to_nugget_silver",
    "immersiveengineering:crafting/ingot_uranium_to_nugget_uranium",
    "immersiveengineering:crafting/ingot_constantan_to_nugget_constantan",
    "immersiveengineering:crafting/ingot_electrum_to_nugget_electrum",
    "immersiveengineering:crafting/ingot_steel_to_nugget_steel",
    //--ingot from block
    "immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum",
    "immersiveengineering:crafting/storage_lead_to_ingot_lead",
    "immersiveengineering:crafting/storage_silver_to_ingot_silver",
    "immersiveengineering:crafting/storage_uranium_to_ingot_uranium",
    "immersiveengineering:crafting/storage_constantan_to_ingot_constantan",
    "immersiveengineering:crafting/storage_electrum_to_ingot_electrum",
    //--block from ingot
    "immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum",
    "immersiveengineering:crafting/ingot_lead_to_storage_lead",
    "immersiveengineering:crafting/ingot_silver_to_storage_silver",
    "immersiveengineering:crafting/ingot_constantan_to_storage_constantan",
    "immersiveengineering:crafting/ingot_electrum_to_storage_electrum",
    "immersiveengineering:crafting/ingot_uranium_to_storage_uranium",
    "immersiveengineering:crafting/ingot_steel_to_storage_steel",
    //--plates
    "immersiveengineering:crafting/plate_aluminum_hammering",
    "immersiveengineering:crafting/plate_lead_hammering",
    "immersiveengineering:crafting/plate_silver_hammering",
    "immersiveengineering:crafting/plate_nickel_hammering",
    "immersiveengineering:crafting/plate_constantan_hammering",
    "immersiveengineering:crafting/plate_electrum_hammering",
    //--rods
    "immersiveengineering:crafting/stick_treated",
    "immersiveengineering:crafting/stick_iron",
    "immersiveengineering:crafting/stick_steel",
    "immersiveengineering:crafting/stick_aluminum",
    //--tools
    "immersiveengineering:crafting/pickaxe_steel",
    "immersiveengineering:crafting/shovel_steel",
    "immersiveengineering:crafting/axe_steel",
    "immersiveengineering:crafting/hoe_steel",
    "immersiveengineering:crafting/sword_steel",
    //--ingots from ores
    "immersiveengineering:smelting/ingot_lead3",
    "immersiveengineering:smelting/ingot_lead_from_dust",
    "immersiveengineering:smelting/ingot_lead",
    "immersiveengineering:smelting/ingot_lead2",
    "immersiveengineering:smelting/ingot_lead_from_blasting3",
    "immersiveengineering:smelting/ingot_lead_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_lead_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_lead_from_blasting",
    "immersiveengineering:smelting/ingot_lead_from_blasting2",
    "immersiveengineering:smelting/ingot_silver3",
    "immersiveengineering:smelting/ingot_silver_from_dust",
    "immersiveengineering:smelting/ingot_silver",
    "immersiveengineering:smelting/ingot_silver2",
    "immersiveengineering:smelting/ingot_silver_from_blasting3",
    "immersiveengineering:smelting/ingot_silver_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_silver_from_blasting",
    "immersiveengineering:smelting/ingot_silver_from_blasting2",
    "immersiveengineering:smelting/ingot_aluminum3",
    "immersiveengineering:smelting/ingot_aluminum_from_dust",
    "immersiveengineering:smelting/ingot_aluminum",
    "immersiveengineering:smelting/ingot_aluminum2",
    "immersiveengineering:smelting/ingot_aluminum_from_blasting3",
    "immersiveengineering:smelting/ingot_aluminum_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_aluminum_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_aluminum_from_blasting",
    "immersiveengineering:smelting/ingot_aluminum_from_blasting2",
    "immersiveengineering:smelting/ingot_uranium3",
    "immersiveengineering:smelting/ingot_uranium_from_dust",
    "immersiveengineering:smelting/ingot_uranium",
    "immersiveengineering:smelting/ingot_uranium2",
    "immersiveengineering:smelting/ingot_uranium_from_blasting3",
    "immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_uranium_from_blasting",
    "immersiveengineering:smelting/ingot_uranium_from_blasting2",
    "immersiveengineering:smelting/ingot_nickel3",
    "immersiveengineering:smelting/ingot_nickel_from_dust",
    "immersiveengineering:smelting/ingot_nickel",
    "immersiveengineering:smelting/ingot_nickel2",
    "immersiveengineering:smelting/ingot_nickel_from_blasting3",
    "immersiveengineering:smelting/ingot_nickel_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_nickel_from_dust_from_blasting",
    "immersiveengineering:smelting/ingot_nickel_from_blasting",
    "immersiveengineering:smelting/ingot_nickel_from_blasting2",
    //--crates
    "immersiveengineering:crafting/crate",
    "immersiveengineering:crafting/reinforced_crate"


];

/**
 * @type {Array}
 */
global.REMOVE_RECIPES_GTCUE = [
    "gtceu:shaped/casing_coke_bricks",
    "gtceu:shaped/coke_oven",
    "gtceu:smelting/coke_oven_brick",
    "gtceu:compressor/coke_bricks",
    "gtceu:shaped/casing_primitive_bricks",
    "gtceu:shaped/bronze_primitive_blast_furnace",
    "gtceu:shaped/casing_bronze_bricks",
    "gtceu:shaped/steel_bricks_hull",
    //--
    "gtceu:shaped/steam_miner_bronze",
    "gtceu:shaped/steam_boiler_coal_bronze",
    "gtceu:shaped/steam_compressor_bronze",
    "gtceu:shaped/steam_boiler_lava_bronze",
    "gtceu:shaped/steam_boiler_solar_bronze",
    "gtceu:shaped/steam_extractor_bronze",
    "gtceu:shaped/steam_macerator_bronze",
    "gtceu:shaped/steam_hammer_bronze",
    "gtceu:shaped/steam_furnace_bronze",
    "gtceu:shaped/steam_alloy_smelter_bronze",
    "gtceu:shaped/steam_rock_breaker_bronze",
    //--
    "gtceu:shaped/steel_hull",
    "gtceu:shaped/steam_boiler_coal_steel",
    "gtceu:shaped/steam_boiler_lava_steel",
    "gtceu:shaped/steam_boiler_solar_steel",
    "gtceu:shaped/steam_extractor_steel",
    "gtceu:shaped/steam_macerator_steel",
    "gtceu:shaped/steam_compressor_steel",
    "gtceu:shaped/steam_hammer_steel",
    "gtceu:shaped/steam_furnace_steel",
    "gtceu:shaped/steam_alloy_smelter_steel",
    "gtceu:shaped/steam_rock_breaker_steel",
    "gtceu:shaped/steam_miner_steel",
    //--
    "gtceu:smelting/sticky_resin_from_slime",
    "gtceu:shaped/knife_flint",
    /^gtceu:shaped\/lv_.*/,
    "gtceu:shaped/casing_bronze_firebox",
    "gtceu:assembler/casing_bronze_firebox",
    /^gtceu:shaped\/mv_.*/,
    /^gtceu:shaped\/hv_.*/,
    /^gtceu:shaped\/ev_.*/,
    /^gtceu:shaped\/iv_.*/,
    /^gtceu:shaped\/luv_.*/,
    /^gtceu:shaped\/zpm_.*/,
    /^gtceu:shaped\/uv_.*/,
    //--func blocks
    "gtceu:shaped/scaffolding",
    "gtceu:shaped/furnace",
    "gtceu:shaped/crafting_table",
    "gtceu:shaped/chest",
    "gtceu:shaped/blast_furnace",
    "gtceu:shaped/enchanting_table",
    "tconstruct:common/glass/vanilla/beacon", //!replace to tconstruct array
    "tconstruct:common/glass/vanilla/daylight_detector",
    "gtceu:shaped/stonecutter",
    "gtceu:shaped/smithing_table",
    "gtceu:shaped/grindstone",
    "gtceu:shaped/smoker",
    "gtceu:shaped/anvil",
    "gtceu:shaped/brewing_stand",
    "gtceu:shaped/dispenser",
    "gtceu:shaped/dropper",
    "gtceu:shaped/lectern",
    //--decor module add recipes
    "gtceu:shaped/lantern",
    "gtceu:shaped/soul_lantern",
    "gtceu:shaped/torch_creosote",
    "gtceu:shaped/sticky_resin_torch",
    "gtceu:shaped/torch_coke",
    "gtceu:shaped/torch_charcoal_dust",
    "gtceu:shaped/torch_coke_dust",
    "gtceu:shaped/torch_coal_dust",
    "gtceu:shaped/torch_sulfur",
    "gtceu:shaped/redstone_torch",
    "gtceu:shaped/stone_pressure_plate",
    //--some broken recipes
    "gtceu:shaped_fluid_container/casing_primitive_bricks",
    "gtceu:electric_blast_furnace/blast_aluminium_gas",
    "gtceu:electric_blast_furnace/blast_aluminium",
    //--tools
    /^gtceu:shaped\/shovel_.*/,
    /^gtceu:shaped\/spade_.*/,
    /^gtceu:shaped\/pickaxe_.*/,
    /^gtceu:shaped\/axe_.*/,
    /^gtceu:shaped\/hoe_.*/,
    /^gtceu:shaped\/mining_hammer_.*/,
    /^gtceu:shaped\/scythe_.*/,
    /^gtceu:shaped\/shovel_.*/,

];
/**
 * @type {Array}
 */
global.REMOVE_RECIPES_LUMINOUS = [
    "luminous_depths:aulit_oak_crafting_table_recipe",

];
/**
 * @type {Array} CreateRecipesToRemove
 */
global.REMOVE_RECIPES_CREATE = [
    "create:crafting/appliances/chain_from_zinc",
    "greate:shaped/mechanical_crafter",
    "greate:shaped/wrought_iron_alloy",
    "create:crafting/palettes/scorchia",
    "create:item_application/andesite_casing_from_log",
    "create:item_application/andesite_casing_from_wood",
    "create:item_application/brass_casing_from_wood",
    "create:item_application/brass_casing_from_log",
    "create:item_application/copper_casing_from_wood",
    "create:item_application/copper_casing_from_log",
    /^greate:item_application\/.*_casing_from_.*/,
    "create:crafting/materials/electron_tube",
    "create:crafting/appliances/copper_backtank",
    "create:crafting/kinetics/fluid_tank",
    "create:crafting/kinetics/brass_hand",
    "create:crafting/kinetics/mechanical_press",
    "create:crafting/kinetics/deployer",
    "create:crafting/kinetics/spout",
    "create:crafting/kinetics/mechanical_crafter",
    "create:crafting/kinetics/mechanical_mixer",
    "create:crafting/kinetics/basin",
    "create:crafting/kinetics/millstone",
    "create:mechanical_crafting/crushing_wheel",
    "create:crafting/kinetics/mechanical_drill",
    "create:crafting/kinetics/mechanical_saw",
    "create:crafting/kinetics/mechanical_arm",
    "create:crafting/kinetics/radial_chassis",
    'create:sequenced_assmly/track',
    'create:crafting/kinetics/item_vault',
    'greate:assembler/item_vault_iron',
    "greate:shaped/andesite_alloy_mechanical_pump"
];
/**
 * @type {Array} TFMGRecipesToRemove
 */
global.REMOVE_RECIPES_TFMG = [
    "tfmg:item_application/steel_casing",
    "tfmg:item_application/steel_casing_using_deploer",
    "tfmg:item_application/heavy_machinery_casing",
    "tfmg:item_application/heavy_machinery_casing_using_deploer",
    "tfmg:crafting/kinetics/cast_iron_fluid_tank",
    "tfmg:crafting/kinetics/steel_fluid_tank",
    "tfmg:filling/hardened_planks",
    "tfmg:smelting/fireproof_brick",
    "tfmg:crafting/kinetics/steel_nugget_from_decompacting"
];
/**
 * @type {Array} undergarden RecipesToRemove
 */
global.REMOVE_RECIPES_UNDERGARDEN = [
    "undergarden:stonecutter_from_depthrock",
    "undergarden:stonecutter_from_shiverstone",
    "undergarden:stonecutter_from_tremblecrust",
    "undergarden:torch_ditchbulb_paste",
    "undergarden:undergarden_scaffolding"
];
/**
 * @type {Array} Irons SpellBooks To Remove
 */
global.REMOVE_IRONS_SPELLBOOKS = [
    /^irons_spellbooks:.*_spell_book/,
    "irons_spellbooks:graybeard_staff",
    "irons_spellbooks:inscription_table",
    /^irons_spellbooks:wandering_magician_.*/,
    /^irons_spellbooks:pumpkin_.*/,
    "irons_spellbooks:arcane_anvil",
    "irons_spellbooks:scroll_forge",
    /^irons_spellbooks:pyromancer_.*/,
    /^irons_spellbooks:electromancer_.*/,
    /^irons_spellbooks:archevoker_.*/,
    /^irons_spellbooks:cultist_.*/,
    /^irons_spellbooks:cryomancer_.*/,
    /^irons_spellbooks:shadowwalker_.*/,
    /^irons_spellbooks:priest_.*/,
    /^irons_spellbooks:plagued_.*/,
    /^irons_spellbooks:netherite_mage_.*/,
    "irons_spellbooks:ice_staff",
    "irons_spellbooks:artificer_cane",
    "irons_spellbooks:magic_cloth",
    "irons_spellbooks:energized_core",
    //--materials
    //--research
    ///^irons_restrictions:.*_manuscript/
    
];
/**
 * @type {Array} Supplementaries Recipes To Remove
 */
global.REMOVE_SUPPLEMENTARIES = [
    "supplementaries:sconce",
    "netherexp:torch_from_fossil_fuel",
    "twilightforest:berry_torch",
    "supplementaries:goblet",
    "supplementaries:hat_stand",

];
/**
 * @type {Array} Malum recipes to remove
 */
global.REMOVE_RECIPES_MALUM = [
    "malum:torch_from_blazing_quartz"
];
/**
 * @type {Array} Tconstruct recipes to remove
 */
global.REMOVE_RECIPES_TCONSTRUCT = [
    //--smeltery
    "tconstruct:smeltery/seared/seared_bricks_slab",
    "tconstruct:smeltery/seared/seared_bricks_stairs",
    "tconstruct:smeltery/seared/seared_bricks_wall",
    "tconstruct:smeltery/seared/seared_stone_slab",
    "tconstruct:smeltery/seared/seared_stone_stairs",
    "tconstruct:smeltery/seared/seared_cobble_slab",
    "tconstruct:smeltery/seared/seared_cobble_stairs",
    "tconstruct:smeltery/seared/seared_cobble_wall",
    "tconstruct:tables/tinkers_anvil_material",
    "tconstruct:tables/seared_forge_material",
    "tconstruct:tables/scorched_forge_material",
    "tconstruct:tables/scorched_forge",
    "tconstruct:tables/scorched_anvil_material",
    "tconstruct:tables/scorched_anvil",
    //--smelting recipes
    "gm_construct:recipes/smeltery/casting/metal/malachite/block",
    "tconstruct:smeltery/scorched/scorched_brick",
    "tconstruct:smeltery/scorched/scorched_brick_kiln",
    //--try to disable
    /^tcintegrations:smeltery\/melting\/metal\/cloggrum\/.*/,
    //"tconstruct:smeltery/alloys/molten_amethyst_bronze"   

];
/**
 * @type {Array} GTconstruct recipes to remove
 */
global.REMOVE_RECIPES_GTCONSTRUCT = [
    /^gm_construct:recipes\/smeltery\/melting\/metal\/.*\/raw/
];
/**
 * @type {Array} Farmers Deligth recipes to remove
 */
global.REMOVE_RECIPES_FARMERSDELIGHT = [
    "farmersdelight:cooking_pot",
    "farmersdelight:stove",
    "farmersdelight:skillet",
    /^farmersdelight:.*_cabinet/,
    "farmersdelight:cutting_board",
    /^storagedelight:.*_drawer_with_door/,
    /^storagedelight:.*_drawer/,
    /^storagedelight:.*_drawer_with_books/,
    /^storagedelight:small_.*_drawers/,
    /^storagedelight:.*_bookshelf_with_door/,
    /^storagedelight:glass_.*_cabinet/,
    /^storagedelight:.*_cabinet_with_glass_doors/,
    /^storagedelight:.*_single_door_cabinet/,
    /^storagedelight:.*_cabinet_with_polished_deepslate_countertop/,
    /^storagedelight:.*_cabinet_with_polished_andesite_countertop/,
    "mynethersdelight:crafting/scaffolding_alt",
    "farmersdelight:scaffolding_from_canvas"
   
];
/**
 * @type {Array} Biomesoplenty and biomeswevegone recipes to remove
 */
global.REMOVE_RECIPES_BIOMES = [
    /^biomesoplenty:.*_door/,
    /^biomeswevegone:.*_door/,
    /^biomesoplenty:.*_trapdoor/,
    /^biomeswevegone:.*_trapdoor/,
    /^biomesoplenty:.*_fence/,
    /^biomeswevegone:.*_fence/,
    /^biomesoplenty:.*_fence_gate/,
    /^biomeswevegone:.*_fence_gate/,
    /^biomesoplenty:.*_pressure_plate/,
    /^biomeswevegone:.*_pressure_plate/,
    /^biomesoplenty:.*_button/,
    /^biomeswevegone:.*_button/,
    /^biomesoplenty:.*_sign/,
    /^biomeswevegone:.*_sign/,
    /^biomesoplenty:.*_hanging_sign/,
    /^biomeswevegone:.*_hanging_sign/,
    /^biomesoplenty:.*_boat/,
    /^biomeswevegone:.*_boat/,
    /^biomesoplenty:.*_chest_boat/,
    /^biomeswevegone:.*_chest_boat/,
    /^biomesoplenty:.*_slab/,
    /^biomeswevegone:.*_slab/
];
/**
 * @type {Array} ColdSweet recipes to remove
 */
global.REMOVE_RECIPES_COLDSWEET = [
    "cold_sweat:sewing_table",
    "cold_sweat:hearth",
    "cold_sweat:thermolith",
    "cold_sweat:boiler",
    "cold_sweat:icebox",
    "cold_sweat:thermometer",
    "cold_sweat:soulspring_lamp",
    "cold_sweat:smokestack"
];
/**
 * @type {Array} Ad astra recipes to remove
 */
global.REMOVE_RECIPES_ADASTRA = [
    "ad_astra:iron_rod",
    "ad_astra:steel_rod"
];
/**
 * @type {Array} Sophisticated storage/backpacks recipes to remove
 */
global.REMOVE_RECIPES_SOPHISTICATED = [
    /^sophisticatedstorage:.*_barrel/,
    /^sophisticatedstorage:.*_chest/,
    "sophisticatedstorage:generic_chest",
    "sophisticatedstorage:oak_chest_from_vanilla_chest",
    /^sophisticatedstorage:.*_chest_from_quark_.*_chest/,
    /^sophisticatedstorage:\/tier_upgrade_chest_woodname_.*_doublechest_false_to_.*_chest_woodname_.*_doublechest_false/,
    "sophisticatedstorage:upgrade_base",
    /^sophisticatedstorage:stack_upgrade_tier_.*/,
    /^sophisticatedstorage:storage_stack_upgrade_tier_.*_from_backpack_stack_upgrade_tier_.*/,
    "sophisticatedstorage:storage_stack_upgrade_tier_1_plus_from_backpack_stack_upgrade_starter_tier",
     "sophisticatedstorage:basic_tier_upgrade",
    "sophisticatedstorage:basic_to_copper_tier_upgrade",
    "sophisticatedstorage:basic_to_iron_tier_from_basic_to_copper_tier",
    "sophisticatedstorage:basic_to_iron_tier_upgrade",
    "sophisticatedstorage:basic_to_gold_tier_upgrade",
    "sophisticatedstorage:basic_to_diamond_tier_upgrade",
    "sophisticatedstorage:basic_to_netherite_tier_upgrade",
    "sophisticatedstorage:copper_to_iron_tier_upgrade",
    "sophisticatedstorage:copper_to_gold_tier_upgrade",
    "sophisticatedstorage:copper_to_diamond_tier_upgrade",
    "sophisticatedstorage:copper_to_netherite_tier_upgrade",
    "sophisticatedstorage:gold_to_diamond_tier_upgrade",
    "sophisticatedstorage:gold_to_netherite_tier_upgrade",
    "sophisticatedstorage:diamond_to_netherite_tier_upgrade",
    "sophisticatedstorage:iron_to_gold_tier_upgrade"
    
];

//#endregion