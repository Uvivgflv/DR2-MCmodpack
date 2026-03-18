const DR2TweaksTagsBlocks = (event) => {
  //#region consts
  const sandBlockList = [
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

  const stoneBlockList = [
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
    "quark:jasper",
  ];

  const grassBlockList = [
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

  const rewriteStoneTag = [
    "minecraft:warped_nylium",
    "minecraft:crimson_nylium",
  ];
  const RemovePlanksTag = ["#minecraft:planks"];

  const RemoveStoneTag = ["minecraft:smooth_stone"];
  //#endregion
  //#region add tags

  event.add("dr2:blocks/hardened_planks", [
    "tfmg:hardened_planks",
    "gtceu:treated_wood_planks",
    "immersiveengineering:treated_wood_horizontal",
  ]);

  event.add("realistic_steps:sand_tag", sandBlockList);
  event.add("realistic_steps:sand_tag", "#chipped:sand");

  event.add("realistic_steps:stone_tag", stoneBlockList);
  event.remove("realistic_steps:stone_tag", rewriteStoneTag);

  //--remove some tag for balance

  event.remove("realistic_steps:stone_tag", RemoveStoneTag);
  event.remove("realistic_steps:planks_tag", RemovePlanksTag);

  event.add("realistic_steps:grass_tag", grassBlockList);
  event.add("realistic_steps:grass_tag", "#dr2:grass_regolite");
  //#endregion
};
