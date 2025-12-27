const RegisterItemsTagsMain = (event) => {
  //#region disabled items LIST
  var disabledItemList = [
    "luminousworld:ironhammer",
    "luminousworld:goldhammer",
    "luminousworld:diamond_hammer",
    "luminousworld:netherite_hammer",
    "projectred_core:red_iron_comp",
    "projectred_core:red_iron_comp",
    "projectred_core:electrotine_iron_comp",
    "projectred_core:boule",
    "projectred_core:red_ingot",
    "projectred_core:electrotine_ingot",
    "projectred_core:sand_coal_comp",
    "projectred_core:draw_plate",
    "projectred_core:silicon",
    "projectred_core:glow_silicon_comp",
    "projectred_core:red_silicon_comp",
    "projectred_core:electrotine_silicon_comp",
    "projectred_core:infused_silicon",
    "projectred_core:energized_silicon",
    "projectred_core:electrotine_silicon",
    "projectred_core:woven_cloth",
    "projectred_core:sail",
    "aquaculture:wooden_fillet_knife",
    "aquaculture:stone_fillet_knife",
    "aquaculture:iron_fillet_knife",
    "aquaculture:gold_fillet_knife",
    "aquaculture:diamond_fillet_knife",
    "aquaculture:neptunium_fillet_knife",
    "immersiveengineering:plate_steel",
  ];
  //#endregion
  //#region chest items LIST
  var chestItemList = [
    "minecraft:iron_nugget",
    "gtceu:zinc_nugget",
    "gtceu:copper_nugget",
    "gtceu:aluminium_nugget",
    "gtceu:lead_nugget",
    "gtceu:bronze_nugget",
    "gtceu:invar_nugget",
    "gtceu:steel_nugget",
  ];
  //#endregion
  //#region resin items LIST
  var resinItemList = [
    "minecraft:slime_ball",
    "gtceu:sticky_resin",
    "tconstruct:sky_slime_ball",
    "tconstruct:ender_slime_ball",
    "tconstruct:ichor_slime_ball",
    "luminous_depths:indigo_slime_ball",
    "undergarden:goo_ball",
    "malum:cursed_sapball",
    "malum:runic_sapball",
  ];
  //#endregion
  //#region adding tags
  event.add("kubejs:disabled_items", disabledItemList);
  event.add("cct:chest_nugget", chestItemList);
  event.add("cct:resin", resinItemList);

  event.add("cct:stonecuter_saw_blades", [
    "gtceu:bronze_buzz_saw_blade",
    "gtceu:iron_buzz_saw_blade",
  ]);
  event.add("cct:brass_casing_wood_variant", [
    "botania:livingwood_planks",
    "gtceu:treated_wood_planks",
    "tfmg:hardened_planks",
  ]);
  event.add("cct:quality_items", [
    "kubejs:common_fragment",
    "kubejs:uncommon_fragment",
    "kubejs:rare_fragment",
    "kubejs:epic_fragment",
    "kubejs:legendary_fragment",
  ]);
  event.add("cct:rose_quartz", [
    "create:rose_quartz",
    "biomesoplenty:rose_quartz_chunk",
  ]);
  event.add("minecraft:mineable/shovel", "tfmg:fireclay");
  event.add("twilightforest:portal/activator", "kubejs:twforest_activator"); //не уверен что это необходимо
  event.add("forge:gems/regalium", "undergarden:regalium_crystal");
  event.add("dr2:stater_insulator_lv", [
    "minecraft:papper",
    "farmersdelight:canvas",
  ]);
  event.add("dr2:hardened_planks", [
    "tfmg:hardened_planks",
    "gtceu:treated_wood_planks",
    "immersiveengineering:treated_wood_horizontal",
  ]);
  //#endregion
  //#region remove tags
  event.removeAllTagsFrom("tfmg:heavy_plate");
  event.removeAllTagsFrom("ad_astra:steel_plate");
  event.removeAllTagsFrom("immersiveehineering:plate_steel");
  event.remove("twilightforest:portal/activator", "minecraft:diamond");
  //#endregion
};
const RegisterBlocksTagsMain = (event) => {
  //#region adding tags
  event.add("dr2:blocks/hardened_planks", [
    "tfmg:hardened_planks",
    "gtceu:treated_wood_planks",
    "immersiveengineering:treated_wood_horizontal",
  ]);
  //#endregion
};

const RegisterUnearthedTags = (event) => {
  var unearthedStonesList = [
    "unearthed:rhyolite",
    "unearthed:grey_limestone",
    "unearthed:siltstone",
    "unearthed:mudstone",
    "unearthed:conglomerate",
    "unearthed:quartzite",
    "unearthed:dolerite",
    "unearthed:pillow_basalt",
    "unearthed:dacite",
    "unearthed:beige_limestone",
    "unearthed:limestone",
    "unearthed:white_granite",
    "unearthed:granodiorite_regolith",
    "unearthed:granodiorite",
    "unearthed:gabbro_regolith",
    "unearthed:gabbro",
    "unearthed:phyllite",
    "unearthed:slate",
  ];

  event.add("minecraft:stone_ore_replaceables", unearthedStonesList);
};

const RegisterRealisticStepsBlockTags = (event) => {
  var sandBlockList = [
    "biomesoplenty:white_sand",
    "biomeswevegone:white_sand",
    "biomesoplenty:orange_sand",
    "biomesoplenty:black_sand",
    "biomeswevegone:sandy_dirt",
    "biomeswevegone:black_sand",
    "biomesoplenty:dried_salt",
    "biomeswevegone:blue_sand",
    "biomeswevegone:purple_sand",
    "biomeswevegone:pink_sand",
    "biomeswevegone:windswept_sand",
    "biomeswevegone:cracked_sand",
    "biomeswevegone:cracked_red_sand",
  ];

  var stoneBlockList = [
    "biomeswevegone:cut_black_sandstone_slab",
    "biomeswevegone:blue_sandstone",
    "biomeswevegone:blue_sandstone_stairs",
    "biomeswevegone:blue_sandstone_slab",
    "biomeswevegone:chiseled_blue_sandstone",
    "biomeswevegone:smooth_blue_sandstone",
    "biomeswevegone:smooth_blue_sandstone_stairs",
    "biomeswevegone:cut_white_sandstone",
    "biomeswevegone:cut_white_sandstone_slab",
    "twilightforest:underbrick",
    "twilightforest:mazestone_border",
    "twilightforest:mazestone_mosaic",
    "twilightforest:cut_mazestone",
    "twilightforest:decorative_mazestone",
    "twilightforest:mossy_mazestone",
    "twilightforest:cracked_mazestone",
    "twilightforest:mazestone_brick",
    "twilightforest:mazestone",
    "twilightforest:cracked_underbrick",
    "biomeswevegone:smooth_black_sandstone_slab",
    "biomeswevegone:smooth_black_sandstone",
    "biomeswevegone:chiseled_black_sandstone",
    "biomeswevegone:black_sandstone_slab",
    "biomeswevegone:black_sandstone_stairs",
    "biomeswevegone:black_sandstone",
    "twilightforest:underbrick_floor",
    "twilightforest:mossy_underbrick",
    "biomeswevegone:smooth_black_sandstone_stairs",
    "biomeswevegone:cut_black_sandstone",
    "biomeswevegone:smooth_white_sandstone_slab",
    "biomeswevegone:smooth_white_sandstone_stairs",
    "biomeswevegone:smooth_white_sandstone",
    "biomeswevegone:chiseled_white_sandstone",
    "biomeswevegone:white_sandstone_slab",
    "biomeswevegone:white_sandstone_stairs",
    "biomeswevegone:white_sandstone",
    "alexscaves:limestone",
  ];

  var grassBlockList = [
    "minecraft:crimson_nylium",
    "minecraft:warped_nylium",
    "luminous_nether:golden_nylium",
    "tconstruct:blood_ender_slime_grass",
    "tconstruct:blood_ichor_slime_grass",
    "tconstruct:blood_sky_slime_grass",
    "tconstruct:blood_vanilla_slime_grass",
    "tconstruct:blood_earth_slime_grass",
    "luminous_depths:sculk_grass",
    "luminous_depths:deepslate_grass_block",
    "luminous_depths:indigo_grass",
    "luminous_depths:golden_grass_block",
    "underground_jungle:jungle_grass",
    "quark:jasper",
  ];

  var unearthedStonesList = [
    "unearthed:rhyolite",
    "unearthed:grey_limestone",
    "unearthed:siltstone",
    "unearthed:mudstone",
    "unearthed:conglomerate",
    "unearthed:quartzite",
    "unearthed:dolerite",
    "unearthed:pillow_basalt",
    "unearthed:dacite",
    "unearthed:beige_limestone",
    "unearthed:limestone",
    "unearthed:white_granite",
    "unearthed:granodiorite_regolith",
    "unearthed:granodiorite",
    "unearthed:gabbro_regolith",
    "unearthed:gabbro",
    "unearthed:phyllite",
    "unearthed:slate",
    "unearthed:cobbled_grey_limestone",
    "unearthed:cobbled_beige_limestone",
    "unearthed:cobbled_limestone",
  ];

  var rewriteStoneTag = ["minecraft:warped_nylium", "minecraft:crimson_nylium"];
  //#region sandTag
  event.add("realistic_steps:sand_tag", sandBlockList);
  event.add("realistic_steps:sand_tag", "#chipped:sand");
  //#endregion
  //#region stoneTag
  event.add("realistic_steps:stone_tag", unearthedStonesList);
  event.add("realistic_steps:stone_tag", stoneBlockList);
  event.remove("realistic_steps:stone_tag", rewriteStoneTag);

  //#endregion
  //#region grassTag
  event.add("realistic_steps:grass_tag", grassBlockList);
  event.add("realistic_steps:grass_tag", "#dr2:grass_regolite");
};

const UnearthedTagsRegolite = (event) => {
  var regoliteBlocks = [
    "unearthed:conglomerate_regolith",
    "unearthed:sandstone_regolith",
    "unearthed:stone_regolith",
    "unearthed:siltstone_regolith",
    "unearthed:grey_limestone_regolith",
    "unearthed:beige_limestone_regolith",
    "unearthed:limestone_regolith",
    "unearthed:white_granite_regolith",
    "unearthed:rhyolite_regolith",
    "unearthed:granodiorite_regolith",
    "unearthed:gabbro_regolith",
    "unearthed:slate_regolith",
    "unearthed:phyllite_regolith",
    "unearthed:mudstone_regolith",
  ];

  var regoliteGrassBlocks = [
    "unearthed:white_granite_grassy_regolith",
    "unearthed:limestone_grassy_regolith",
    "unearthed:conglomerate_grassy_regolith",
    "unearthed:mudstone_grassy_regolith",
    "unearthed:phyllite_grassy_regolith",
    "unearthed:slate_grassy_regolith",
    "unearthed:gabbro_grassy_regolith",
    "unearthed:granodiorite_grassy_regolith",
    "unearthed:rhyolite_grassy_regolith",
    "unearthed:beige_limestone_grassy_regolith",
    "unearthed:grey_limestone_grassy_regolith",
    "unearthed:siltstone_grassy_regolith",
    "unearthed:stone_grassy_regolith",
    "unearthed:sandstone_grassy_regolith",
  ];

  event.add("dr2:regolite", regoliteBlocks);
  event.add("dr2:grass_regolite", regoliteGrassBlocks);
};
//templates
const CopperOreSpawnBiomes = (event) => {
  var BiomeList = ["minecraft:forest", "minecraft:dark_forest"];

  event.add("dr2:copper_ore_spawn_biome", BiomeList);
};

const IronOreSpawnBiomes = (event) => {
  var BiomeList = [
    "minecraft:taiga",
    "minecraft:old_growth_spruce_taiga",
    "minecraft:old_growth_pine_taiga",
  ];

  event.add("dr2:iron_ore_spawn_biome", BiomeList);
};

const CoalOreSpawnBiomes = (event) => {
  var BiomeList = ["minecraft:stony_shore"];

  event.add("dr2:coal_ore_spawn_biome", BiomeList);
};

const TinOreSpawnBiomes = (event) => {
  var BiomeList = ["biomesoplenty:forested_field", "biomesoplenty:grassland"];

  event.add("dr2:tin_ore_spawn_biome", BiomeList);
};

const GemsOreSpawnBiomes = (event) => {
  var BiomeList = [
    "biomesoplenty:weeping_witch_forest",
    "biomesoplenty:fragment_jungle",
  ];

  event.add("dr2:gems_ore_spawn_biome", BiomeList);
};
