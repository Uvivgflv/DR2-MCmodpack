const RegistrySeqAssemblyCreateRecipes = (event) => {
  /**
   * ЖД пути 
   * Воронки
   * Баки
   * Хранилища
   * Сундуки
   * ...
   */
  //#region Create railroad recipe
  event.recipes.createSequencedAssembly(
    [
      Item.of("create:track").withChance(120.0),
      Item.of("gtceu:steel_rod").withChance(12.0),
      Item.of("gtceu:iron_plate").withChance(9.0),
    ],
    '#dr2:rail_slabs',
    [
      event.recipes.createDeploying('create:incomplete_track', [
        "create:incomplete_track",
        "kubejs:rebar"
      ]),
      event.recipes.createFilling('create:incomplete_track', [
        "create:incomplete_track",
        Fluid.of("gtceu:concrete", 1000)
      ]),
      event.recipes.createPressing('create:incomplete_track', [
        "create:incomplete_track"
      ])
    ],
  )
  .transitionalItem("create:incomplete_track")
  .id("dr2:create/sequense/railroad/track");
  //#endregion
  //#region IE components
  //IRON
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:component_iron").withChance(120.0),
        Item.of("gtceu:tiny_copper_dust").withChance(12.0),
        Item.of("gtceu:iron_plate").withChance(9.0),
      ],
      "gtceu:resin_circuit_board",
      [
        event.recipes.createDeploying("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
          "gtceu:iron_plate",
        ]),
        event.recipes.createFilling("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
          Fluid.of("gtceu:glue", 500),
        ]),
        event.recipes.createDeploying("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
          "gtceu:resistor",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
          "gtceu:fine_copper_wire",
        ]),
        event.recipes.createFilling("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
          Fluid.of("gtceu:redstone", 500),
        ]),
        event.recipes.createDeploying("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
          "gtceu:iron_plate",
        ]),
        event.recipes.createPressing("kubejs:incomplete_component_iron", [
          "kubejs:incomplete_component_iron",
        ]),
      ],
    )
    .transitionalItem("kubejs:incomplete_component_iron")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/component_iron");
  //STEEL
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:component_steel").withChance(120.0),
        Item.of("gtceu:tiny_electrum_dust").withChance(12.0),
        Item.of("gtceu:black_steel_plate").withChance(9.0),
      ],
      "gtceu:phenolic_circuit_board",
      [
        event.recipes.createDeploying("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
          "gtceu:black_steel_plate",
        ]),
        event.recipes.createFilling("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
          Fluid.of("gtceu:glue", 500),
        ]),
        event.recipes.createDeploying("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
          "tfmg:capacitor_item",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
          "gtceu:fine_electrum_wire",
        ]),
        event.recipes.createFilling("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
          Fluid.of("gtceu:redstone", 500),
        ]),
        event.recipes.createDeploying("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
          "gtceu:black_steel_plate",
        ]),
        event.recipes.createPressing("kubejs:incomplete_component_steel", [
          "kubejs:incomplete_component_steel",
        ]),
      ],
    )
    .transitionalItem("kubejs:incomplete_component_steel")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/component_steel");
  //#endregion
  //#region IE multiblock blocks
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:heavy_engineering").withChance(120.0),
        Item.of("gtceu:electrum_single_wire").withChance(12.0),
        Item.of("gtceu:steel_plate").withChance(9.0),
      ],
      "gtceu:lv_machine_hull",
      [
        event.recipes.createDeploying("kubejs:incomplete_heavy_engineering", [
          "kubejs:incomplete_heavy_engineering",
          "immersiveengineering:component_steel",
        ]),
        event.recipes.createPressing("kubejs:incomplete_heavy_engineering", [
          "kubejs:incomplete_heavy_engineering",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_heavy_engineering", [
          "kubejs:incomplete_heavy_engineering",
          "immersiveengineering:coil_mv",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_heavy_engineering", [
          "kubejs:incomplete_heavy_engineering",
          "gtceu:rubber_plate",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_heavy_engineering", [
          "kubejs:incomplete_heavy_engineering",
          "create:electron_tube",
        ]),
        event.recipes.createPressing("kubejs:incomplete_heavy_engineering", [
          "kubejs:incomplete_heavy_engineering",
        ]),
      ],
    )
    .transitionalItem("kubejs:incomplete_heavy_engineering")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/heavy_engineering");
  //light block
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:light_engineering").withChance(120.0),
        Item.of("gtceu:copper_single_wire").withChance(12.0),
        Item.of("gtceu:small_iron_gear").withChance(9.0),
      ],
      "gtceu:ulv_machine_hull",
      [
        event.recipes.createDeploying("kubejs:incomplete_light_engineering", [
          "kubejs:incomplete_light_engineering",
          "immersiveengineering:component_iron",
        ]),
        event.recipes.createPressing("kubejs:incomplete_light_engineering", [
          "kubejs:incomplete_light_engineering",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_light_engineering", [
          "kubejs:incomplete_light_engineering",
          "immersiveengineering:coil_lv",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_light_engineering", [
          "kubejs:incomplete_light_engineering",
          "gtceu:small_iron_gear",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_light_engineering", [
          "kubejs:incomplete_light_engineering",
          "gtceu:resistor",
        ]),
        event.recipes.createPressing("kubejs:incomplete_light_engineering", [
          "kubejs:incomplete_light_engineering",
        ]),
      ],
    )
    .transitionalItem("kubejs:incomplete_light_engineering")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/light_engineering");
  //redstone block
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:rs_engineering").withChance(120.0),
        Item.of("gtceu:copper_single_wire").withChance(12.0),
        Item.of("gtceu:small_iron_gear").withChance(9.0),
      ],
      "immersiveengineering:sheetmetal_iron",
      [
        event.recipes.createFilling("kubejs:incomplete_rs_engineering", [
          "kubejs:incomplete_rs_engineering",
          Fluid.of("gtceu:redstone", 1000),
        ]),
        event.recipes.createPressing("kubejs:incomplete_rs_engineering", [
          "kubejs:incomplete_rs_engineering",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_rs_engineering", [
          "kubejs:incomplete_rs_engineering",
          "projectred_core:bundled_plate",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_rs_engineering", [
          "kubejs:incomplete_rs_engineering",
          "projectred_core:cathode",
        ]),
        event.recipes.createFilling("kubejs:incomplete_rs_engineering", [
          "kubejs:incomplete_rs_engineering",
          Fluid.of("gtceu:redstone", 1000),
        ]),
        event.recipes.createPressing("kubejs:incomplete_rs_engineering", [
          "kubejs:incomplete_rs_engineering",
        ]),
      ],
    )
    .transitionalItem("kubejs:incomplete_rs_engineering")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/rs_engineering");
  //radiator block
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:radiator").withChance(120.0),
        Item.of("gtceu:tiny_copper_dust").withChance(12.0),
        Item.of("gtceu:tin_plate").withChance(9.0),
      ],
      "immersiveengineering:light_engineering",
      [
        event.recipes.createFilling("kubejs:incomplete_radiator_engineering", [
          "kubejs:incomplete_radiator_engineering",
          Fluid.of("gtceu:glowstone", 800),
        ]),
        event.recipes.createDeploying(
          "kubejs:incomplete_radiator_engineering",
          [
            "kubejs:incomplete_radiator_engineering",
            "gtceu:copper_tiny_fluid_pipe",
          ],
        ),
        event.recipes.createDeploying(
          "kubejs:incomplete_radiator_engineering",
          ["kubejs:incomplete_radiator_engineering", "gtceu:tin_plate"],
        ),
        event.recipes.createDeploying(
          "kubejs:incomplete_radiator_engineering",
          [
            "kubejs:incomplete_radiator_engineering",
            "gtceu:copper_tiny_fluid_pipe",
          ],
        ),
        event.recipes.createPressing("kubejs:incomplete_radiator_engineering", [
          "kubejs:incomplete_radiator_engineering",
        ]),
      ],
    )
    .transitionalItem("kubejs:incomplete_radiator_engineering")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/radiator_engineering");
  //generator block
  event.recipes
    .createSequencedAssembly(
      [
        Item.of("immersiveengineering:generator").withChance(120.0),
        Item.of("gtceu:tiny_electrum_dust").withChance(12.0),
        Item.of("gtceu:electrum_plate").withChance(9.0),
      ],
      "immersiveengineering:heavy_engineering",
      [
        event.recipes.createDeploying(
          "kubejs:incomplete_generator_engineering",
          [
            "kubejs:incomplete_generator_engineering",
            "immersiveengineering:coil_mv",
          ],
        ),
        event.recipes.createDeploying(
          "kubejs:incomplete_generator_engineering",
          [
            "kubejs:incomplete_generator_engineering",
            "immersiveengineering:component_iron",
          ],
        ),
        event.recipes.createDeploying(
          "kubejs:incomplete_generator_engineering",
          [
            "kubejs:incomplete_generator_engineering",
            "immersiveengineering:coil_mv",
          ],
        ),
        event.recipes.createFilling("kubejs:incomplete_generator_engineering", [
          "kubejs:incomplete_generator_engineering",
          Fluid.of("gtceu:glue", 800),
        ]),
        event.recipes.createPressing(
          "kubejs:incomplete_generator_engineering",
          ["kubejs:incomplete_generator_engineering"],
        ),
      ],
    )
    .transitionalItem("kubejs:incomplete_generator_engineering")
    .loops(4)
    .id("dr2:immersiveengineering/sequense/generator_engineering");
  //#endregion
};

