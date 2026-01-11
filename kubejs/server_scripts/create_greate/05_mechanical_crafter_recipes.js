const RegisterMechanicalCrafterRecipes = (event) => {
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