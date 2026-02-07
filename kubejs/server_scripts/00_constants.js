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
]
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
    "#forge:ingots/aluminium",
    /^immersiveengineering:nugget_.*/,
    /^immersiveengineering:plate_.*/,
    /^immersiveengineering:ingot_.*/,
    /^immersiveengineering:storage_.*/,
    /^immersiveengineering:stick_.*/,
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
    "immersiveengineering:crafting/radiator",
    "immersiveengineering:crafting/generator",
    "immersiveengineering:crafting/hammer",
    "immersiveengineering:alloysmelter/manyullyn",
    "immersiveengineering:crafting/alloybrick",
    "immersiveengineering:crafting/blastbrick",
    "immersiveengineering:crafting/cokebrick",
    "immersiveengineering:crafting/torch",
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
    "gtceu:shaped/stone_pressure_plate"




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
    "greate:shaped/wrought_iron_alloy"
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
    "tfmg:smelting/fireproof_brick"
];
/**
 * @type {Array} undergarden RecipesToRemove
 */
global.REMOVE_RECIPES_UNDERGARDEN = [
    "undergarden:stonecutter_from_depthrock",
    "undergarden:stonecutter_from_shiverstone",
    "undergarden:stonecutter_from_tremblecrust",
    "undergarden:torch_ditchbulb_paste"
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
    "tconstruct:common/materials/copper_ingot_from_nuggets",
    
]
/**
 * @type {Array} Farmers Deligth recipes to remove
 */
global.REMOVE_RECIPES_FARMERSDELIGHT = [
    "farmersdelight:cooking_pot",
    "farmersdelight:stove",
    "farmersdelight:skillet",
    /^farmersdelight:.*_cabinet/
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
//#endregion