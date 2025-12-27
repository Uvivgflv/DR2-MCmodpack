const RegisterCreateRecipes = (event) => {
  //#region remove recipes
  event.remove({ id: "create:item_application/andesite_casing_from_log" });
  event.remove({ id: "create:item_application/andesite_casing_from_wood" });
  event.remove({ id: "create:item_application/brass_casing_from_wood" });
  event.remove({ id: "create:item_application/brass_casing_from_log" });
  event.remove({ id: "create:item_application/copper_casing_from_wood" });
  event.remove({ id: "create:item_application/copper_casing_from_log" });
  //--
  event.remove({ output: "create:cogwheel" });
  event.remove({ output: "create:large_cogwheel" });
  event.remove({ output: "create:shaft" });
  //--
  event.remove({ id: "create:crafting/materials/electron_tube" });
  event.remove({ id: "create:crafting/appliances/copper_backtank" });
  //--machines
  event.remove({ id: "create:crafting/kinetics/fluid_tank" });
  event.remove({ id: "create:crafting/kinetics/brass_hand" });
  event.remove({ id: "create:crafting/kinetics/mechanical_press" });
  event.remove({ id: "create:crafting/kinetics/deployer" });
  event.remove({ id: "create:crafting/kinetics/spout" });
  event.remove({ id: "create:crafting/kinetics/mechanical_crafter" });
  event.remove({ id: "create:crafting/kinetics/mechanical_mixer" });
  event.remove({ id: "create:crafting/kinetics/basin" });
  event.remove({ id: "create:crafting/kinetics/millstone" });
  event.remove({ id: "create:mechanical_crafting/crushing_wheel" });
  event.remove({ id: "create:crafting/kinetics/mechanical_drill" });
  event.remove({ id: "create:crafting/kinetics/mechanical_saw" });
  event.remove({ id: "create:crafting/kinetics/mechanical_arm" });
  event.remove({ id: "create:crafting/kinetics/radial_chassis" });

  //#endregion

  //#region add casing recipes using other
  event
    .shaped("kubejs:brass_casing_parts", ["ABC", "BDB", "CBA"], {
      A: "#forge:bolts/electrum",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:rose_gold"}',
      ).strongNBT(),
      C: "#forge:double_plates/rose_gold",
      D: "#forge:tools/wrench",
    })
    .id("cct:create/casing_parts/brass");

  event
    .shaped("kubejs:iron_casing_parts", ["ABC", "BDB", "CBA"], {
      A: "#forge:bolts/iron",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:iron"}',
      ).strongNBT(),
      C: "#forge:rods/iron",
      D: "#forge:tools/wrench",
    })
    .id("cct:create/casing_parts/iron");

  event
    .custom({
      type: "create:item_application",
      ingredients: [
        {
          tag: "minecraft:logs",
        },
        {
          item: "kubejs:iron_casing_parts",
        },
      ],
      results: [
        {
          item: "create:andesite_casing",
        },
      ],
    })
    .id("cct:item_application/andesite_casing");

  event
    .custom({
      type: "create:item_application",
      ingredients: [
        {
          tag: "cct:brass_casing_wood_variant",
        },
        {
          item: "kubejs:brass_casing_parts",
        },
      ],
      results: [
        {
          item: "create:brass_casing",
        },
      ],
    })
    .id("cct:item_application/brass_casing");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        tag: "forge:storage_blocks/copper",
      },
      cast_consumed: true,
      cooling_time: 500,
      fluid: {
        amount: 540,
        tag: "tconstruct:molten_slimesteel",
      },
      result: "create:copper_casing",
    })
    .id("cct:create/casting/copper_casing");
  //#endregion

  //#region kinetic recipes

  event
    .shaped("create:cogwheel", [" A ", "ABA", " A "], {
      A: "tconstruct:nahuatl",
      B: "create:shaft",
    })
    .id("cct:create/cogwheel");

  event
    .shaped("create:large_cogwheel", [" A ", "ABA", " A "], {
      A: "tconstruct:nahuatl",
      B: "create:cogwheel",
    })
    .id("cct:create/large_cogwheel");

  event
    .shaped("create:fluid_tank", ["ABA", "CDC", "ABA"], {
      A: "#forge:screws/copper",
      B: "#forge:double_plates/red_alloy",
      C: "#forge:plates/red_alloy",
      D: "#forge:glass_panes",
    })
    .id("dr2:create/fluid_tank");

  event
    .shaped("create:brass_hand", ["ABC", "DDD", "EDF"], {
      A: "#forge:screws/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "#forge:tools/screwdrivers",
      D: "#forge:plates/brass",
      E: "#forge:tools/hammers",
      F: "#forge:tools/files",
    })
    .id("dr2:create/brass_hand");

  event
    .stonecutting(
      "16x create:shaft",
      Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
    )
    .id("cct:create/stonecutting/shafts");

  //#endregion
  //#region add materials recipes

  event
    .shaped("create:electron_tube", ["ABC", "DED", "ABF"], {
      A: "gtceu:copper_single_wire",
      B: "#forge:plates/sterling_silver",
      C: "#forge:fine_wires/copper",
      D: "gtceu:resistor",
      E: "gtceu:resin_circuit_board",
      F: "create:polished_rose_quartz",
    })
    .id("cct:create/electrone_tube");

  event
    .shaped("create:copper_backtank", ["ABA", "CDC", "EFG"], {
      A: "#forge:plates/steel",
      B: "create:shaft",
      C: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:copper"}',
      ).strongNBT(),
      D: "#forge:frames/bronze",
      E: "#forge:tools/hammers",
      F: Item.of(
        "twilightforest:knightmetal_chestplate",
        "{Damage:0}",
      ).strongNBT(),
      G: "#forge:tools/wrenches",
    })
    .id("cct:create/copper_backtank");

  event
    .custom({
      type: "create:filling",
      ingredients: [
        {
          tag: "forge:gems/quartzite",
        },
        {
          amount: 250,
          fluid: "gtceu:redstone",
        },
      ],
      results: [
        {
          item: "create:rose_quartz",
        },
      ],
    })
    .id("dr2:create/materials/rose_quartz_from_quartzite");
  //#endregion
  //#region add machines
  event
    .shaped("create:millstone", ["ABC", "DBD", "EFE"], {
      A: "#forge:tools/hammers",
      B: "#dr2:millstone_polished_granite",
      C: "#forge:tools/files",
      D: "create:cogwheel",
      E: "#forge:bolts/iron",
      F: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/millstone");

  event
    .shaped("create:mechanical_drill", ["ABC", "DED", "FFF"], {
      A: "#forge:tools/hammers",
      B: "#dr2:mechanical_drill_drill_heads",
      C: "#forge:tools/files",
      D: "#forge:bolts/iron",
      E: "create:cogwheel",
      F: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/mechanical_drill");

  event
    .shaped("create:deployer", ["ABC", "DEF", "GK "], {
      A: "create:electron_tube",
      B: "create:brass_hand",
      C: "#forge:tools/files",
      D: "#forge:bolts/iron",
      E: "create:cogwheel",
      F: "create:shaft",
      G: "#forge:tools/hammers",
      K: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/deployer");

  event
    .shaped("create:mechanical_press", ["ABC", "DEF", "GKG"], {
      A: "#forge:tools/files",
      B: "create:shaft",
      C: "create:cogwheel",
      D: "create:large_cogwheel",
      E: "minecraft:anvil",
      F: "#forge:tools/hammers",
      G: "#forge:bolts/iron",
      K: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/mechanical_press");

  event
    .shaped("create:mechanical_mixer", ["ABA", "CDE", " F "], {
      A: "#forge:screws/iron",
      B: "create:andesite_casing",
      C: "#forge:tools/screwdrivers",
      D: "create:shaft",
      E: "#forge:tools/files",
      F: "#dr2:mechanical_mixer_rotors",
    })
    .id("dr2:create/crafting/kinetics/mechanical_mixer");

  event
    .shaped("create:spout", [" A ", " B ", " C "], {
      A: "create:copper_casing",
      B: "#forge:rings/rubber",
      C: "#forge:tools/mallets",
    })
    .id("dr2:create/crafting/kinetics/spout");

  event
    .shaped("create:basin", ["ABA", "CAC", "   "], {
      A: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      B: "#forge:tools/hammers",
      C: "#forge:plates/steel",
    })
    .id("dr2:create/crafting/kinetics/basin");

  event
    .shaped("create:mechanical_saw", [" A ", "BCD", "EFE"], {
      A: "#dr2:mechanical_saw_saw_blades",
      B: "#forge:tools/files",
      C: "create:cogwheel",
      D: "#forge:tools/screwdrivers",
      E: "#forge:screws/iron",
      F: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/mechanical_saw");

  event
    .shaped("2x create:mechanical_crafter", ["ABA", "CDC", "AEA"], {
      A: "create:cogwheel",
      B: "create:electron_tube",
      C: "#forge:workbenches",
      D: "create:precision_mechanism",
      E: "create:brass_casing",
    })
    .id("dr2:create/crafting/kinetics/mechanical_crafter");

  event.shaped("create:radial_chassis", ["ABA", "CBC", "ABA"], {
    A: "#forge:plates/steel",
    B: "#dr2:hardened_planks",
    C: Item.of(
      "tconstruct:large_plate",
      '{Material:"tconstruct:steel"}',
    ).strongNBT(),
  });

  event.recipes
    .createMechanicalCrafting(
      "2x create:crushing_wheel",
      [" ABA ", "ABCBA", "BCDCB", "ABCBA", " ABA "],
      {
        A: Item.of(
          "tconstruct:large_plate",
          '{Material:"tconstruct:steel"}',
        ).strongNBT(),
        B: "#dr2:millstone_polished_granite",
        C: "gtceu:steel_brick_casing",
        D: "create:radial_chassis",
      },
    )
    .id("dr2:create/mechanical_crafting/crushing_wheel");
  //#endregion
};
