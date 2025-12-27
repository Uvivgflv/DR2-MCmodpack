const RegisterIEAlloysmelterRecipes = (event) => {
  //#region remove recipes
  event.remove({ id: "immersiveengineering:alloysmelter/manyullyn" });
  //#endregion

  //#region add recipes
  event.remove({ id: "immersiveengineering:crafting/alloybrick" });

  event
    .shaped("2x immersiveengineering:alloybrick", ["AB", "BA"], {
      A: "#forge:sand",
      B: "tfmg:fireproof_brick",
    })
    .id("dr2:alloybrick");

  event.custom({
    type: "immersiveengineering:alloy",
    input0: {
      base_ingredient: {
        item: "tconstruct:grout",
      },
      count: 4,
    },
    input1: {
      base_ingredient: {
        item: "gtceu:fullers_earth_dust",
      },
      count: 3,
    },
    result: {
      item: "tconstruct:seared_brick",
      count: 4,
    },
    time: 800,
  });
};
