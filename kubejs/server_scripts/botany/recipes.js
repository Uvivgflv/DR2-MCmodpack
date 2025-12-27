const RegisterBotaniaRecipes = (event) => {
  //#region remove recipes for pure daisy
  event.remove({ id: "botania:pure_daisy/livingwood" });
  event.remove({ id: "botania:mana_pool" });
  event.remove({ id: "botania:apothecary_default" });
  event.remove({ id: "botania:mana_spreader" });
  //#endregion
  /**
   * манасталь делать из стали
   * наполненный манаалмаз из безупречного алмаза
   * --
   * все инструменты и броню отбалансировать
   */
  //#region add pure daisy recipes
  event
    .custom({
      type: "botania:state_copying_pure_daisy",
      input: {
        type: "tag",
        tag: "cct:magic_logs",
      },
      output: "botania:livingwood_log",
    })
    .id("cct:pure_daisy/livingwood");
  //#endregion

  //#region crafting recipes
  event
    .shaped("botania:mana_pool", ["A A", "BCB", "DED"], {
      A: "#forge:tools/files",
      B: "botania:polished_livingrock",
      C: "#forge:tools/hammers",
      D: "#forge:plates/steel",
      E: "botania:chiseled_livingrock_bricks",
    })
    .id("dr2:botania/crafting/mana_pool");

  event
    .shaped("botania:apothecary_default", ["ABA", "CDE", "DDD"], {
      A: "#forge:plates/steel",
      B: "#botania:petals",
      C: "#forge:tools/files",
      D: "quark:sturdy_stone",
      E: "#forge:tools/hammers",
    })
    .id("dr2:botania/crafting/apothecary");

  event
    .shaped("botania:mana_spreader", ["AAA", "BCD", "AAA"], {
      A: "botania:livingwood_planks",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:copper"}',
      ).strongNBT(),
      C: "#botania:petals",
      D: "#forge:tools/saws",
    })
    .id("dr2:botania/crafting/mana_spreader");
  //#endregion
};
