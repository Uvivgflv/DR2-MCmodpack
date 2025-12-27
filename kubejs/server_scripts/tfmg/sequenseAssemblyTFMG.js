const RegistrySeqAssemblyTFMGRecipes = (event) => {
  //#region blocks
  event.recipes
    .createSequencedAssembly(
      ["tfmg:heavy_machinery_casing"],
      "immersiveengineering:heavy_engineering",
      [
        event.recipes.createDeploying(
          "kubejs:incomplete_heavy_machinery_casing",
          ["kubejs:incomplete_heavy_machinery_casing", "gtceu:steel_plate"],
        ),
        event.recipes.createDeploying(
          "kubejs:incomplete_heavy_machinery_casing",
          ["kubejs:incomplete_heavy_machinery_casing", "gtceu:steel_plate"],
        ),
        event.recipes.createDeploying(
          "kubejs:incomplete_heavy_machinery_casing",
          ["kubejs:incomplete_heavy_machinery_casing", "gtceu:steel_frame"],
        ),
        event.recipes.createFilling(
          "kubejs:incomplete_heavy_machinery_casing",
          [
            "kubejs:incomplete_heavy_machinery_casing",
            Fluid.of("gtceu:lubricant", 800),
          ],
        ),
        event.recipes.createPressing(
          "kubejs:incomplete_heavy_machinery_casing",
          ["kubejs:incomplete_heavy_machinery_casing"],
        ),
      ],
    )
    .transitionalItem("kubejs:incomplete_heavy_machinery_casing")
    .loops(2)
    .id("dr2:tfmg/sequense/heavy_machinery_casing");
  //#endregion
};
