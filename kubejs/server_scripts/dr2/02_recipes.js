const DR2RecipesRegistry = (event) => {
  //#region add recipes for custon items
  event
    .shaped("kubejs:prim_glass_mix", ["ABA", "BCB", "ABA"], {
      A: "#minecraft:sand",
      B: "#forge:dusts/ash",
      C: "#forge:tools/mortars",
    })
    .id("dr2:materials/glass_mix");

  event
    .shaped("3x kubejs:tinned_leather", ["ABA", "BAB", " C "], {
      A: "#forge:string",
      B: Item.of(
        "tconstruct:bowstring",
        '{Material:"tconstruct:leather"}',
      ).strongNBT(),
      C: "#forge:tools/mallets",
    })
    .id("dr2:tinned_leather");

  event.shaped('minecraft:clay', [
    ' A ',
    'BBB',
    'BBB'
  ],{
    A:"#forge:tools/hammers",
    B:'minecraft:clay_ball'
  }).id('dr2:clay_block');

  //#endregion
};