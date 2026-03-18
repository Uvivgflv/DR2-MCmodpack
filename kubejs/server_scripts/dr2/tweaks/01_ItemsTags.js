const DR2TweaksTagsItems = (event) => {
  //#region consts
  const disabledItemList = [
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
    /^gtceu:.*_pickaxe/,
    /^gtceu:.*_axe/,
    /^gtceu:.*_hoe/,
    /^gtceu:.*_spade/,
    /^gtceu:.*_shovel/,
    /^gtceu:.*_mining_hammer/,
    /^gtceu:.*_scythe/,
    /^gtceu:.*_sword/,
    /^immersiveengineering:pickaxe_.*/,
    /^immersiveengineering:axe_.*/,
    /^immersiveengineering:sword_.*/,
    /^immersiveengineering:hoe_.*/,
    /^immersiveengineering:shovel_.*/,
    //--lightman curr
    /^lightmanscurrency:card_display_.*/,
    /^lightmanscurrency:shelf_.*/,
    /^lightmanscurrency:freezer_.*/,
    /^lightmanscurrency:bookshelf_.*/,
    /^lightmanscurrency:gacha_machine_.*/,
    /^lightmanscurrency:auction_stand_.*/,
    //--IE plates&rawOres
    /^immersiveengineering:plate_.*/,
    /^immersiveengineering:dust_.*/,
    /^immersiveengineering:ingot_.*/,
    /^immersiveengineering:nugget_.*/,
    /^immersiveengineering:raw_.*/,
    //--lootr
    /^lootr:.*/,
    //--adAstra
    /^ad_astra:.*_rod/,
    /^ad_astra:.*_plate/,
    /^ad_astra:.*_ingot/,
    /^ad_astra:.*_nugget/,
    /^ad_astra:raw_.*/,
    /^ad_astra:moon_.*_ore/,
    /^ad_astra:venus_.*_ore/,
    /^ad_astra:mars_.*_ore/,
    /^ad_astra:mercury_.*_ore/,
    /^ad_astra:glacio_.*_ore/,
    /^ad_astra:moon_.*_ore/,
    //--ad_extendra
    /^ad_extendra:.*_plate/,
    /^ad_extendra:raw_.*/,
    /^ad_extendra:.*_nugget/,
    /^ad_extendra:jupiter_.*_ore/,
    /^ad_exdendra:ceres_.*_ore/,
    /^ad_exdendra:uranus_.*_ore/,
    /^ad_exdendra:neptune_.*_ore/,
    /^ad_exdendra:orcus_.*_ore/,
    /^ad_exdendra:haumea_.*_ore/,
    /^ad_exdendra:quaoar_.*_ore/,
    /^ad_exdendra:gonggong_.*_ore/,
    /^ad_exdendra:sedna_.*_ore/,
    /^ad_exdendra:b_.*_ore/,
    //--deeperdarker
    /^deeperdarker:skulk_stone_.*_ore/,
    /^deeperdarker:gloomslate_.*_ore/,
    //--undergarden
    /^undergarden:depthrock_.*_ore/,
    /^undergarden:shiverstone_.*_ore/,
    /^undergarden:tremblecrust_.*_ore/,
    //--create
    /^create:raw_.*/,
    /^create:.*_ingot/,
    /^create:.*_sheet/,
    //--tfmg
    /^tfmg:.*_ingot/,
    /^tfmg:.*_plate/,
    /^tfmg:.*_sheet/,
    /^tfmg:raw_.*/,
    /^tfmg:.*_sword/,
    /^tfmg:.*_pickaxe/,
    /^tfmg:.*_axe/,
    /^tfmg:.*_shovel/,
    /^tfmg:.*_hoe/,
    //--quark
    /^quark:lootr_.*/,
    //--malum
    "malum:deepslate_soulstone_ore",
    "malum:soulstone_ore",
    "malum:brilliant_deepslate",
    "malum:brilliant_stone",
    "malum:cthonic_gold_ore",
  ];

  const chestItemList = [
    "minecraft:iron_nugget",
    "gtceu:zinc_nugget",
    "gtceu:copper_nugget",
    "gtceu:aluminium_nugget",
    "gtceu:lead_nugget",
    "gtceu:bronze_nugget",
    "gtceu:invar_nugget",
    "gtceu:steel_nugget",
    "gtceu:wrought_iron_nugget",
    //--
  ];

  const chestRingsList = [
    "gtceu:iron_ring",
    "gtceu:wrought_iron_ring",
    "gtceu:steel_ring",
    "gtceu:copper_ring",
    "gtceu:zinc_ring",
    "gtceu:aluminium_ring",
    "gtceu:bronze_ring",
  ];

  const resinItemList = [
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

  const andesiteAlloyBlocks = [
    "quark:shale",
    "minecraft:andesite",
    "minecraft:granite",
    "minecraft:diorite",
    "minecraft:tuff",
    "quark:limestone",
    "quark:jasper",
    "minecraft:dripstone_block",
  ];

  const anchorBlocks = [
    "gtceu:lead_block",
    "minecraft:iron_block",
    "gtceu:wrought_iron_block",
  ];
  //#endregion

  //#region add tags
  event.add("kubejs:disabled_items", disabledItemList);
  event.add("dr2:chest_nugget", chestItemList);
  event.add("dr2:chest_rings", chestRingsList);
  event.add("cct:resin", resinItemList);

  event.add("dr2:andesite_alloy_stones", andesiteAlloyBlocks);

  event.add("dr2:anchor_iron_blocks", anchorBlocks);

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
  event.add("dr2:cloth_low_quality", [
    "forbidden_arcanus:cloth",
    "kubejs:old_fabric",
  ]);
  event.add("dr2:lantern_fuel", [
    "twilightforest:torchberries",
    "#forge:dusts/sulfur",
    "gtceu:coke_gem",
    "netherexp:fossil_fuel",
    "minecraft:charcoal",
    "minecraft:coal",
    "gtceu:sticky_resin",
  ]);
  //#endregion
  //#region remove tags
  event.removeAllTagsFrom("tfmg:heavy_plate");
  event.removeAllTagsFrom("ad_astra:steel_plate");
  event.remove("twilightforest:portal/activator", "minecraft:diamond");
  //#endregion
  //#region derorTags
  event.add("dr2:decor_screws/iron", [
    "gtceu:iron_screw",
    "gtceu:wrought_iron_screw",
  ]);

  event.add("dr2:decor_screws/bronze", [
    "gtceu:black_bronze_screw",
    "gtceu:bronze_screw",
    "gtceu:bismuth_bronze_screw",
  ]);

  event.add("dr2:decor_screws/copper", [
    "gtceu:annealed_copper_screw",
    "gtceu:copper_screw",
  ]);
  //#endregion
};
