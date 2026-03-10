const RegisterCreateRecipes = (event) => {
  //#region add basic recipes
  event.shaped('gtceu:wood_dust', [
    ' A ',
    ' B '
  ],{
    A:'#forge:tools/saws',
    B:'#minecraft:planks'
  }).id('dr2:greate/util/wood_dust_manual');

  event.shaped('gtceu:wood_plate', [
    'ABB',
    'CBB',
    ' D '
  ],{
    A:'gtceu:sticky_resin',
    B:'gtceu:wood_dust',
    C:'#forge:tools/mallets',
    D:'gtceu:brick_wooden_form'
  }).keepIngredient('gtceu:brick_wooden_form').id('dr2:greate/util/wood_plate_manual');

  event.custom({
    type: "tconstruct:casting_basin",
    cast: {tag: 'dr2:andesite_alloy_stones'},
    cast_consumed: true,
    cooling_time: 120,
    fluid: {
      amount: ingot*2,
      fluid: 'gtceu:wrought_iron'
    },
    result: 'create:andesite_alloy'
  }).id('dr2:casting/compat/create/andesite_alloy_from_wrought_iron');
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
      A: "#forge:bolts/wrought_iron",
      B: '#forge:plates/wrought_iron',
      C: "#forge:rods/wrought_iron",
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
  //?tconstruct recipe 
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
    .shaped("2x create:fluid_tank", [
      "AB ",
      "CDC",
      " BE"
    ], {
      A:'#gtceu:tools/crafting_screwdrivers',
      B:'#forge:screws/copper',
      C:'#forge:plates/copper',
      D:'gtceu:wood_drum',
      E:'#gtceu:tools/crafting_hammers'
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

  event.shaped('greate:andesite_alloy_mechanical_pump', [
    ' AB',
    'CDE',
    ' A '
  ],{
    A:'#forge:screws/andesite_alloy',
    B:'#gtceu:tools/crafting_screwdrivers',
    C:'#gtceu:tools/crafting_wrenches',
    D:'create:fluid_pipe',
    E:'greate:andesite_alloy_cogwheel'
  }).id('dr2:create/mechanical_pump_uls');

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
  //#endregion
  //#region add machines

  event
    .shaped("create:mechanical_drill", ["ABC", "DED", "FFF"], {
      A: "#forge:tools/hammers",
      B: "#dr2:mechanical_drill_drill_heads",
      C: "#forge:tools/files",
      D: "#forge:bolts/wrought_iron",
      E: "create:cogwheel",
      F: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/mechanical_drill");

  event
    .shaped("create:deployer", ["ABC", "DEF", "GK "], {
      A: "create:electron_tube",
      B: "create:brass_hand",
      C: "#forge:tools/files",
      D: "#forge:bolts/wrought_iron",
      E: "create:cogwheel",
      F: "create:shaft",
      G: "#forge:tools/hammers",
      K: "create:andesite_casing",
    })
    .id("dr2:create/crafting/kinetics/deployer");

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
  //#endregion
  //#region add press recipes
  event.recipes.createPressing(
    '2x kubejs:rebar',
    '#dr2:rebared_rod_two'
  )
  .id('dr2:create/pressing/rebar_2');
  event.recipes.createPressing(
    '4x kubejs:rebar',
    '#dr2:rebared_rod_four'
  )
  .id('dr2:create/pressing/rebar_4');
  event.recipes.createPressing(
    '6x kubejs:rebar',
    '#dr2:rebared_rod_six'
  )
  .id('dr2:create/pressing/rebar_6');
  //#endregion
  //#region rails and train blocks recipes
  
  //#endregion
  //#region greate mod recipes
  //todo: унификация рецептов сплавов удалить андезитовый сплав и заменить его на стальной, стальной заменить коррундом
  //#endregion
  //v1.2a or v1.1.01a
  //#region storrage system recipes
  event.shaped('2x create:item_vault',[
    'AB ',
    'CDC',
    ' B '
  ],{
    A:'#forge:tools/screwdrivers',
    B:'#forge:plates/wrought_iron',
    C:'#forge:screws/wrought_iron',
    D:'gtceu:wood_crate'
  }).id('dr2:create/item_vault');
  //#endregion
};
