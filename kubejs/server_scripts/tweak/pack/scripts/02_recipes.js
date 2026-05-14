const RegisterVanillaRecipes = (event) => {
  //#region consts
  const woodTypes = global.VanillaWoodTypes;
  const additionalWoodTypes = [
    { name: "ancient", planks: "quark:ancient_planks" },
    { name: "azalea", planks: "quark:azalea_planks" },
    { name: "blossom", planks: "quark:blossom_planks" },
  ];

  let chestVanillaCraftingNugget = (output, input) => {
    event
      .shaped(`quark:${output}_chest`, ["AAA", "ABA", "AAA"], {
        A: input,
        B: "#dr2:chest_nugget",
      })
      .id(`dr2:vanilla/storage/chest/${output}/nugget`);
  };

  let chestVanillaCraftingRings = (output, input, input1) => {
    event
      .shaped(`2x quark:${output}_chest`, ["ABA", "CDC", "ACA"], {
        A: input,
        B: "#forge:tools/saws",
        C: input1,
        D: "#dr2:chest_rings",
      })
      .id(`dr2:vanilla/storage/chest/${output}/ring`);
  };
  //#endregion
  //#region chests
  woodTypes.forEach((element) => {
    const wood = element.name;
    const planks_id = `minecraft:${wood}_planks`;
    const log_id = `minecraft:` + element.log;
    chestVanillaCraftingNugget(wood, planks_id);
    chestVanillaCraftingRings(wood, planks_id, log_id);
  });

  additionalWoodTypes.forEach((element) => {
    const wood = element.name;
    const planks_id = element.planks;
    const log_id = `quark:${wood}_log`;
    chestVanillaCraftingNugget(wood, planks_id);
    chestVanillaCraftingRings(wood, planks_id, log_id);
  });

  event
    .shaped("quark:nether_brick_chest", ["AAA", "ABA", "AAA"], {
      A: "minecraft:nether_bricks",
      B: "#dr2:chest_nugget",
    })
    .id("cct:storage/nether_chest");

  event
    .shaped("quark:purpur_chest", ["AAA", "ABA", "AAA"], {
      A: "minecraft:purpur_block",
      B: "#dr2:chest_nugget",
    })
    .id("cct:storage/purpur_chest");

  event
    .shaped("quark:prismarine_chest", ["AAA", "ABA", "AAA"], {
      A: "minecraft:prismarine",
      B: "#dr2:chest_nugget",
    })
    .id("cct:storage/prismarine_chest");
  //#endregion

  //#region functioanal blocks

  event
    .shaped("3x minecraft:scaffolding", ["ABA", "ACA", "ADA"], {
      A: "minecraft:bamboo",
      B: "farmersdelight:canvas",
      C: "#forge:bolts/wood",
      D: "#forge:tools/mallets",
    })
    .id("dr2:scaffolding");

  event
    .shaped(Item.of("minecraft:crafting_table"), ["fp", "PP"], {
      f: "minecraft:flint",
      p: "tconstruct:pattern",
      P: "#minecraft:planks",
    })
    .id("cct:crafting_table");

  event
    .shaped(Item.of("minecraft:furnace"), ["cfc", "cac", "ccc"], {
      c: "#forge:cobblestone",
      f: "minecraft:flint",
      a: "kubejs:ash_compound",
    })
    .id("cct:furnace");

  event
    .shaped(Item.of("quark:deepslate_furnace"), ["cfc", "cac", "ccc"], {
      c: "minecraft:cobbled_deepslate",
      f: "minecraft:flint",
      a: "kubejs:ash_compound",
    })
    .id("cct:furnace_deepslate");

  event
    .shaped(Item.of("quark:blackstone_furnace"), ["cfc", "cac", "ccc"], {
      c: "minecraft:blackstone",
      f: "minecraft:flint",
      a: "kubejs:ash_compound",
    })
    .id("cct:furnace_blackstone");

  event
    .shaped(Item.of("kubejs:ash_compound"), ["aga", "gsg", "aga"], {
      a: "#forge:dusts/ash",
      g: "supplementaries:daub",
      s: "#minecraft:sand",
    })
    .id("cct:ash_compound");

  event
    .custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "tconstruct:crafting_station",
        },
        {
          item: "tconstruct:pattern",
        },
      ],
      results: [
        {
          item: "tconstruct:tinker_station",
        },
      ],
    })
    .id("cct:tinker_station_from_item_application");

  event.replaceInput(
    { id: "gtceu:shaped/sticky_piston_resin" },
    "gtceu:sticky_resin",
    "#cct:resin",
  );

  event
    .shaped("minecraft:blast_furnace", ["AAA", "BCD", "EFE"], {
      A: "#forge:plates/iron",
      B: "minecraft:iron_bars",
      C: "minecraft:furnace",
      D: "quark:sturdy_stone",
      E: "#tconstruct:smeltery_bricks",
      F: "tfmg:fireproof_bricks",
    })
    .id("cct:blast_furnace");

  event
    .shaped("minecraft:smoker", ["ABA", "CDC", "EFE"], {
      A: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:bronze"}',
      ).strongNBT(),
      B: "#forge:plates/bronze",
      C: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:nahuatl"}',
      ).strongNBT(),
      D: "minecraft:furnace",
      E: "#tconstruct:smeltery_bricks",
      F: "tfmg:fireproof_bricks",
    })
    .id("cct:smoker");

  event
    .shaped("minecraft:brewing_stand", [" A ", " BE", "CDC"], {
      A: "twilightforest:fiery_tears",
      B: "minecraft:blaze_rod",
      C: "#forge:plates/invar",
      D: "#forge:ingots/fiery",
      E: "#forge:tools/files",
    })
    .id("cct:brewing_stand");

  event
    .shaped("minecraft:anvil", ["AAA", "CBD", "BBB"], {
      A: "#forge:storage_blocks/steel",
      B: "#forge:ingots/steel",
      C: "#forge:tools/hammers",
      D: "#forge:tools/crowbars",
    })
    .id("cct:anvil");

  event
    .shaped("minecraft:grindstone", ["ABA", "CDC", "EFE"], {
      A: "#forge:screws/iron",
      B: "#forge:tools/screwdrivers",
      C: "#minecraft:planks",
      D: "quark:sturdy_stone",
      E: "#forge:rods/wood",
      F: "#forge:tools/files",
    })
    .id("cct:grindstone");

  event
    .shaped("minecraft:smithing_table", ["AAA", "BCD", "EFE"], {
      A: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:lead"}',
      ).strongNBT(),
      B: "#forge:tools/hammers",
      C: "quark:sturdy_stone",
      D: "#forge:tools/files",
      E: "#forge:bolts/lead",
      F: "tconstruct:crafting_station",
    })
    .id("cct:smithing_table");

  event
    .shaped("minecraft:stonecutter", ["ABC", "DED", "FFF"], {
      A: "#forge:tools/screwdrivers",
      B: "#forge:tools/hammers",
      C: "#forge:tools/files",
      D: "#forge:bolts",
      E: "#cct:stonecuter_saw_blades",
      F: "minecraft:smooth_stone_slab",
    })
    .id("cct:stonecutter");

  event
    .shaped("minecraft:lectern", ["AAB", "CDC", "AEA"], {
      A: "#minecraft:wooden_slabs",
      B: "#forge:tools/screwdrivers",
      C: "#forge:bolts",
      D: "#forge:bookshelves",
      E: "#minecraft:planks",
    })
    .id("cct:lectern");

  event
    .shaped("quark:crate", ["ABA", "CDC", "EBF"], {
      A: "#forge:screws/brass",
      B: "#forge:plates/zinc",
      C: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:plated_slimewood"}',
      ).strongNBT(),
      D: "#forge:chests/wooden",
      E: "#forge:tools/screwdrivers",
      F: "#forge:tools/hammers",
    })
    .id("cct:crate");

  event
    .shaped("quark:crafter", ["AAA", "BCB", "DED"], {
      A: "#forge:plates/zinc",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:pig_iron"}',
      ).strongNBT(),
      C: "tconstruct:crafting_station",
      D: "minecraft:redstone",
      E: "minecraft:dropper",
    })
    .id("cct:crafter");

  event
    .shaped("minecraft:dropper", ["ABC", "DED", "FFF"], {
      A: "#forge:tools/files",
      B: "#forge:tools/hammers",
      C: "#forge:tools/crowbars",
      D: "minecraft:smooth_stone",
      E: "minecraft:redstone",
      F: "quark:sturdy_stone",
    })
    .id("cct:dropper");

  event
    .shaped("minecraft:dispenser", ["ABC", "DED", "FGF"], {
      A: "#forge:tools/files",
      B: "#forge:tools/hammers",
      C: "#forge:tools/crowbars",
      D: "minecraft:smooth_stone",
      E: "minecraft:redstone",
      F: "quark:sturdy_stone",
      G: Item.of("minecraft:bow", "{Damage:0}").strongNBT(),
    })
    .id("cct:dispenser");
  //#endregion
  //#region primitive glassblowing
  event
    .blasting("minecraft:glass", "kubejs:prim_glass_mix")
    .xp(0.2)
    .cookingTime(1200)
    .id("cct:blasting/glass");
  //#endregion

  //#region functional items
  event
    .shaped("minecraft:map", [" A ", "ABA", " A "], {
      A: "minecraft:paper",
      B: "minecraft:compass",
    })
    .id("dr2:map");

  event
    .shaped("minecraft:compass", [" A ", "ABA", " A "], {
      A: "#forge:plates/iron",
      B: "#forge:dusts/redstone",
    })
    .id("dr2:compass");

  event
    .shaped("minecraft:clock", [" A ", "ABA", " A "], {
      A: "#forge:plates/gold",
      B: "#forge:dusts/redstone",
    })
    .id("dr2:clock");

  event
    .shaped("minecraft:flint_and_steel", ["ABC", "DEF", " G "], {
      A: "#forge:tools/screwdrivers",
      B: "#forge:small_gears/steel",
      C: "#forge:plates/steel",
      D: "#forge:screws/steel",
      E: "#forge:gems/flint",
      F: "#forge:tools/files",
      G: "#forge:small_springs/steel",
    })
    .id("dr2:flint_and_steel");

  event
    .shaped("minecraft:brush", [" AE", " BD", " C "], {
      A: "minecraft:feather",
      B: "#forge:plates/copper",
      C: "gtceu:treated_wood_rod",
      D: "#forge:screws/bronze",
      E: "#forge:tools/screwdrivers",
    })
    .id("dr2:brush");

  event
    .shaped("betterarcheology:iron_brush", [" AE", " BD", " C "], {
      A: "minecraft:feather",
      B: "#forge:plates/iron",
      C: "gtceu:treated_wood_rod",
      D: "#forge:screws/bronze",
      E: "#forge:tools/screwdrivers",
    })
    .id("dr2:brush_iron");

  event
    .shaped("betterarcheology:diamond_brush", [" AE", " BD", " C "], {
      A: "minecraft:feather",
      B: "#forge:plates/diamond",
      C: "gtceu:treated_wood_rod",
      D: "#forge:screws/bronze",
      E: "#forge:tools/screwdrivers",
    })
    .id("dr2:brush_diamond");

  event
    .shaped("quark:trowel", [" A ", "BCE", " DF"], {
      A: "#forge:tools/hammers",
      B: "gtceu:treated_wood_rod",
      C: "#forge:bolts/iron",
      D: "#forge:ingots/iron",
      E: "#forge:tools/files",
      F: "#forge:plates/iron",
    })
    .id("dr2:trowel");

  event
    .shaped("minecraft:shears", ["ABC", "DEB", " DK"], {
      A: "#forge:tools/screwdrivers",
      B: "#forge:plates/iron",
      C: "#forge:tools/files",
      D: "minecraft:stick",
      E: "#forge:screws/iron",
      K: "#forge:tools/hammers",
    })
    .id("dr2:shears");

  event
    .shaped("minecraft:fishing_rod", ["  A", " BA", "C D"], {
      A: "#forge:string",
      B: "minecraft:stick",
      C: "#forge:rods/long/wood",
      D: "aquaculture:iron_hook",
    })
    .id("dr2:fishing_rod");
  //#endregion

  //#region resources & materials
  event
    .shapeless("3x gtceu:fireclay_dust", [
      "gtceu:clay_dust",
      "gtceu:brick_dust",
      "tfmg:fireclay_ball",
    ])
    .id("cct:phase1/fireclay_dust");
  event
    .shapeless("tfmg:hardened_planks", "gtceu:treated_wood_planks")
    .id("cct:converting/treated_wood/tfmg_to_gt");
  event
    .shapeless("gtceu:treated_wood_planks", "tfmg:hardened_planks")
    .id("cct:converting/treated_wood/gt_to_tfmg");

  event
    .blasting("tfmg:fireproof_brick", "tfmg:fireclay_ball")
    .cookingTime(1800)
    .xp(1.0)
    .id("cct:fireproof_brick_blasting");
  event
    .smelting("tfmg:fireproof_brick", "tfmg:fireclay_ball")
    .cookingTime(2000)
    .xp(1.0)
    .id("cct:fireproof_brick_smelting");
};
