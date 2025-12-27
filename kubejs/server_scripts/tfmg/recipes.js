const RegisterTFMGRecipes = (event) => {
  //#region remove aluminum&steel

  event.remove({ output: "tfmg:aluminum_ingot" });
  event.remove({ output: "tfmg:steel_ingot" });

  //#endregion
  //#region remove casing recipes
  event.remove({ id: "tfmg:item_application/steel_casing" });
  event.remove({ id: "tfmg:item_application/steel_casing_using_deploer" });
  event.remove({ id: "tfmg:item_application/heavy_machinery_casing" });
  event.remove({
    id: "tfmg:item_application/heavy_machinery_casing_using_deploer",
  });
  event.remove({ id: "tfmg:crafting/kinetics/cast_iron_fluid_tank" });
  event.remove({ id: "tfmg:crafting/kinetics/steel_fluid_tank" });
  //--remove materials
  event.remove({ id: "tfmg:filling/hardened_planks" });
  event.remove({ output: "tfmg:cast_iron_ingot" });
  event.remove({ output: "tfmg:cast_iron_nugget" });
  event.remove({ output: /^tfmg:.*_sheet/ });
  //#endregion
  //#region remove armor

  event.remove({ output: /^tfmg:.*_helmet/ });
  event.remove({ output: /^tfmg:.*_chestplate/ });
  event.remove({ output: /^tfmg:.*_leggings/ });
  event.remove({ output: /^tfmg:.*_boots/ });

  //#endregion

  //#region remove some sus recipes

  event.remove({ output: "tfmg:heavy_plate" });

  //#endregion
  //#region remove crafting stations
  //#endregion
  //#region add recipes
  event
    .custom({
      type: "create:item_application",
      ingredients: [
        { tag: "dr2:hardened_planks" },
        { tag: "forge:plates/steel" },
      ],
      results: [{ item: "tfmg:steel_casing" }],
    })
    .id("dr2:tfmg/item_application/steel_casing");
  //#endregion
};
