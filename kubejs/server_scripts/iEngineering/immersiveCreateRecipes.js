const RegisterIESequenseAssemblyRecipes = (event) => {
  //! переместить в create/03_sequense_assembly_create_recipes.js данный файл удалить
  //#region components
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
  //#region multiblock blocks
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
const RegisterIEMechanicalCrafterRecipes = (event) => {
  //#region coils
  event.recipes
    .createMechanicalCrafting(
      "immersiveengineering:coil_lv",
      [" AAA ", "AABAA", "ABCBA", "AABAA", " AAA "],
      {
        A: "gtceu:copper_single_wire",
        B: "#forge:rods/iron",
        C: "#forge:rods/long/iron",
      },
    )
    .id("dr2:immersive/mechanical_crafting/coil_lv");

  event.recipes
    .createMechanicalCrafting(
      "immersiveengineering:coil_mv",
      [" AAA ", "AABAA", "ABCBA", "AABAA", " AAA "],
      {
        A: "gtceu:electrum_single_wire",
        B: "#forge:rods/iron",
        C: "#forge:rods/long/iron",
      },
    )
    .id("dr2:immersive/mechanical_crafting/coil_mv");

  event.recipes
    .createMechanicalCrafting(
      "immersiveengineering:coil_hv",
      [" AAA ", "AABAA", "ABCBA", "AABAA", " AAA "],
      {
        A: "gtceu:steel_single_wire",
        B: "#forge:rods/iron",
        C: "#forge:rods/long/iron",
      },
    )
    .id("dr2:immersive/mechanical_crafting/coil_hv");
  //#endregion
};
