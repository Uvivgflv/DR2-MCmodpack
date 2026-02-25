const RegistrySeqAssembleGTPartsRecipes = (event) => {
  //#region LV parts
  //ULV machine hull
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "gtceu:ulv_machine_casing",
      },
      loops: 2,
      results: [
        {
          chance: 120.0,
          item: "gtceu:ulv_machine_hull",
        },
        {
          chance: 8.0,
          item: "gtceu:red_alloy_foil",
        },
        {
          chance: 8.0,
          item: "gtceu:tiny_red_alloy_dust",
        },
        {
          chance: 5.0,
          item: "gtceu:small_red_alloy_spring",
        },
        {
          chance: 3.0,
          item: "gtceu:red_alloy_single_wire",
        },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
            {
              item: "gtceu:red_alloy_single_cable",
            },
          ],
          results: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
          ],
        },
        {
          type: "create:filling",
          ingredients: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
            {
              amount: 250,
              fluid: "gtceu:redstone",
            },
          ],
          results: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
          ],
          results: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
            {
              item: "gtceu:double_amethyst_bronze_plate",
            },
          ],
          results: [
            {
              item: "kubejs:incomplete_ulv_machine_hull",
            },
          ],
        },
      ],
      transitionalItem: {
        item: "kubejs:incomplete_ulv_machine_hull",
      },
    })
    .id("dr2:gtceu/sequence/ulv_nachine_hull");
  //LV machine hull IRON
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "gtceu:lv_machine_casing",
      },
      loops: 4,
      results: [
        {
          chance: 120.0,
          item: "gtceu:lv_machine_hull",
        },
        {
          chance: 8.0,
          item: "gtceu:tin_foil",
        },
        {
          chance: 8.0,
          item: "gtceu:tiny_tin_dust",
        },
        {
          chance: 5.0,
          item: "gtceu:small_tin_spring",
        },
        {
          chance: 3.0,
          item: "gtceu:tin_single_wire",
        },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:incomplete_lv_machine_hull",
            },
            {
              item: "gtceu:tin_single_cable",
            },
          ],
          results: [
            {
              item: "kubejs:incomplete_lv_machine_hull",
            },
          ],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { amount: 500, fluid: "gtceu:redstone" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:pressing",
          ingredients: [{ item: "kubejs:incomplete_lv_machine_hull" }],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { item: "gtceu:double_iron_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { item: "gtceu:iron_screw" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_machine_hull" },
    })
    .id("dr2:gtceu/sequence/lv_machine_hull_iron");
  //LV machine hull STEEL
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_machine_casing" },
      loops: 2,
      results: [
        { chance: 120.0, item: "gtceu:lv_machine_hull" },
        { chance: 8.0, item: "gtceu:tin_foil" },
        { chance: 8.0, item: "gtceu:tiny_tin_dust" },
        { chance: 5.0, item: "gtceu:small_tin_spring" },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { item: "gtceu:tin_double_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { amount: 500, fluid: "gtceu:redstone" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:pressing",
          ingredients: [{ item: "kubejs:incomplete_lv_machine_hull" }],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { item: "gtceu:double_steel_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_machine_hull" },
            { item: "gtceu:steel_screw" },
          ],
          results: [{ item: "kubejs:incomplete_lv_machine_hull" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_machine_hull" },
    })
    .id("dr2:gtceu/sequence/lv_machine_hull_steel");
  //LV electric motor IRON
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:magnetic_iron_rod" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_motor" },
        { chance: 8.0, item: "gtceu:long_copper_rod" },
        { chance: 8.0, item: "gtceu:tiny_copper_dust" },
        { chance: 5.0, item: "gtceu:small_copper_spring" },
        { chance: 3.0, item: "gtceu:copper_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "gtceu:copper_single_wire" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { tag: "dr2:stater_insulator_lv" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "gtceu:copper_single_wire" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "gtceu:double_iron_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_motor" },
    })
    .id("dr2:gtceu/sequence/lv_electric_motor_iron");
  //LV electric motor STEEL
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:magnetic_steel_rod" },
      loops: 2,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_motor" },
        { chance: 8.0, item: "gtceu:long_copper_rod" },
        { chance: 8.0, item: "gtceu:tiny_copper_dust" },
        { chance: 5.0, item: "gtceu:small_copper_spring" },
        { chance: 3.0, item: "gtceu:copper_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "gtceu:copper_single_wire" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "minecraft:paper" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "gtceu:copper_single_wire" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_motor" },
            { item: "gtceu:double_steel_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_motor" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_motor" },
    })
    .id("dr2:gtceu/sequence/lv_electric_motor_steel");
  //LV electric pump rubber
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_electric_motor" },
      loops: 6,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_pump" },
        { chance: 8.0, item: "gtceu:tin_rotor" },
        { chance: 8.0, item: "gtceu:rubber_ring" },
        { chance: 5.0, item: "gtceu:bronze_small_fluid_pipe" },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:tin_rotor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:bronze_normal_fluid_pipe" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_pump" },
    })
    .id("dr2:gtceu/sequence/lv_electric_pump_rubber");
  //LV electric pump styrene butadien rubber
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_electric_motor" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_pump" },
        { chance: 8.0, item: "gtceu:tin_rotor" },
        { chance: 8.0, item: "gtceu:styrene_butadiene_rubber_ring" },
        { chance: 5.0, item: "gtceu:bronze_small_fluid_pipe" },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:tin_rotor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:styrene_butadiene_rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:bronze_normal_fluid_pipe" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:styrene_butadiene_rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_pump" },
    })
    .id("dr2:gtceu/sequence/lv_electric_pump_styrene_butadiene_rubber");
  //LV electric pump silicone rubber
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_electric_motor" },
      loops: 2,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_pump" },
        { chance: 8.0, item: "gtceu:tin_rotor" },
        { chance: 8.0, item: "gtceu:silicone_rubber_ring" },
        { chance: 5.0, item: "gtceu:bronze_small_fluid_pipe" },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:tin_rotor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:silicone_rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:bronze_normal_fluid_pipe" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:silicone_rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_pump" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_pump" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_pump" },
    })
    .id("dr2:gtceu/sequence/lv_electric_pump_silicone_rubber");
  //LV electric piston IRON
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:iron_rod" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_piston" },
        { chance: 8.0, item: "gtceu:iron_rod" },
        { chance: 8.0, item: "gtceu:iron_plate" },
        { chance: 5.0, item: "gtceu:small_steel_gear" },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:lv_electric_motor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:double_iron_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:small_steel_gear" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_piston" },
    })
    .id("dr2:gtceu/sequence/lv_electric_piston_iron");
  //LV electric piston STEEL
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:steel_rod" },
      loops: 2,
      results: [
        { chance: 120.0, item: "gtceu:lv_electric_piston" },
        { chance: 8.0, item: "gtceu:steel_rod" },
        { chance: 8.0, item: "gtceu:steel_plate" },
        { chance: 5.0, item: "gtceu:small_steel_gear" },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:lv_electric_motor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:double_steel_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:small_steel_gear" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { amount: 500, fluid: "gtceu:glue" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_electric_piston" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_electric_piston" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_electric_piston" },
    })
    .id("dr2:gtceu/sequence/lv_electric_piston_steel");
  //LV conveyor module IRON
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:long_iron_rod" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_conveyor_module" },
        { chance: 8.0, item: "gtceu:iron_rod" },
        { chance: 8.0, item: "gtceu:iron_plate" },
        { chance: 5.0, item: 'greate:rubber_belt_connector' },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: 'greate:rubber_belt_connector' },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: "gtceu:lv_electric_motor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: "gtceu:small_steel_gear" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { amount: 500, fluid: "gtceu:lubricant" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_conveyor_module" },
    })
    .id("dr2:gtceu/sequense/lv_conveyor_module_iron");
  //LV conveyor module STEEL
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:long_steel_rod" },
      loops: 2,
      results: [
        { chance: 120.0, item: "gtceu:lv_conveyor_module" },
        { chance: 8.0, item: "gtceu:steel_rod" },
        { chance: 8.0, item: "gtceu:steel_plate" },
        { chance: 5.0, item: 'greate:rubber_belt_connector' },
        { chance: 3.0, item: "gtceu:tin_single_wire" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: 'greate:rubber_belt_connector' },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: "gtceu:lv_electric_motor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: "gtceu:small_steel_gear" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { amount: 600, fluid: "gtceu:lubricant" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_conveyor_module" },
            { item: "gtceu:tin_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_conveyor_module" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_conveyor_module" },
    })
    .id("dr2:gtceu/sequense/lv_conveyor_module_steel");
  //LV fluid regulator RUBBER
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_electric_pump" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_fluid_regulator" },
        { chance: 8.0, item: "gtceu:steel_rod" },
        { chance: 8.0, item: "gtceu:tin_screw" },
        { chance: 5.0, item: "gtceu:rubber_ring" },
        { chance: 3.0, item: "gtceu:lv_electric_pump" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { amount: 600, fluid: "gtceu:lubricant" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:steel_bolt" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_fluid_regulator" },
    })
    .id("dr2:gtceu/sequense/lv_fluid_regulator_rubber");
  //LV fluid regulator STYRENE BUTADIENE RUBBER
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_electric_pump" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_fluid_regulator" },
        { chance: 8.0, item: "gtceu:steel_rod" },
        { chance: 8.0, item: "gtceu:tin_screw" },
        { chance: 5.0, item: "create:styrene_butadiene_rubber_ring" },
        { chance: 3.0, item: "gtceu:lv_electric_pump" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:styrene_butadiene_rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { amount: 600, fluid: "gtceu:lubricant" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:steel_bolt" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_fluid_regulator" },
    })
    .id("dr2:gtceu/sequense/lv_fluid_regulator_styrene_butadien_rubber");
  //LV fluid regulator SICONE RUBBER
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:lv_electric_pump" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_fluid_regulator" },
        { chance: 8.0, item: "gtceu:steel_rod" },
        { chance: 8.0, item: "gtceu:tin_screw" },
        { chance: 5.0, item: "create:silicone_rubber_ring" },
        { chance: 3.0, item: "gtceu:lv_electric_pump" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:silicone_rubber_ring" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { amount: 600, fluid: "gtceu:lubricant" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_fluid_regulator" },
            { item: "gtceu:steel_bolt" },
          ],
          results: [{ item: "kubejs:incomplete_lv_fluid_regulator" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_fluid_regulator" },
    })
    .id("dr2:gtceu/sequense/lv_fluid_regulator_silicone_rubber");
  //LV robot arm
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "create:brass_hand" },
      loops: 4,
      results: [
        { chance: 120.0, item: "gtceu:lv_robot_arm" },
        { chance: 8.0, item: "gtceu:steel_rod" },
        { chance: 8.0, item: "gtceu:small_iorn_gear" },
        { chance: 5.0, item: "gtceu:tiny_iron_dust" },
        { chance: 3.0, item: "gtceu:copper_single_cable" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_robot_arm" },
            { item: "gtceu:lv_electric_piston" },
          ],
          results: [{ item: "kubejs:incomplete_lv_robot_arm" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_robot_arm" },
            { item: "gtceu:lv_electric_motor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_robot_arm" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_robot_arm" },
            { item: "gtceu:lv_electric_motor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_robot_arm" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_robot_arm" },
            { item: "gtceu:small_iron_gear" },
          ],
          results: [{ item: "kubejs:incomplete_lv_robot_arm" }],
        },
        {
          type: "create:filling",
          ingredients: [
            { item: "kubejs:incomplete_lv_robot_arm" },
            { amount: 600, fluid: "gtceu:lubricant" },
          ],
          results: [{ item: "kubejs:incomplete_lv_robot_arm" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_robot_arm" },
            { item: "gtceu:basic_electronic_circuit" },
          ],
          results: [{ item: "kubejs:incomplete_lv_robot_arm" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_robot_arm" },
    })
    .id("dr2:gtceu/sequense/lv_robot_arm");
  //LV circuit
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "gtceu:resin_printed_circuit_board" },
      loops: 8,
      results: [
        { chance: 120.0, item: "gtceu:basic_electronic_circuit" },
        { chance: 8.0, item: "gtceu:glass_dust" },
        { chance: 8.0, item: "gtceu:tiny_red_alloy_dust" },
        { chance: 5.0, item: "gtceu:tiny_iron_dust" },
        { chance: 3.0, item: "gtceu:red_alloy_single_cable" },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_circuit" },
            { item: "gtceu:vacuum_tube" },
          ],
          results: [{ item: "kubejs:incomplete_lv_circuit" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_circuit" },
            { item: "gtceu:resistor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_circuit" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_circuit" },
            { item: "gtceu:resistor" },
          ],
          results: [{ item: "kubejs:incomplete_lv_circuit" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_circuit" },
            { item: "gtceu:red_alloy_single_cable" },
          ],
          results: [{ item: "kubejs:incomplete_lv_circuit" }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:incomplete_lv_circuit" },
            { item: "gtceu:steel_plate" },
          ],
          results: [{ item: "kubejs:incomplete_lv_circuit" }],
        },
      ],
      transitionalItem: { item: "kubejs:incomplete_lv_circuit" },
    })
    .id("dr2:gtceu/sequense/lv_circuit");
  //#endregion

  //#region MV parts
  //#endregion
};
