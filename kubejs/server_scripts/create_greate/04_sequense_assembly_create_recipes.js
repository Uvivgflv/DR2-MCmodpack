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
};

