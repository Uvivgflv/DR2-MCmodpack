const RegisterPetalApothecaryRecipes = (event) => {
  //#region remove recipes
  event.remove({ id: /botania:petal_apothecary\/.*/ }); //remove all
  //#endregion
  //#region add recipes like json
  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: "botania:petals/white",
        },
        {
          tag: "botania:petals/white",
        },
        {
          tag: "botania:petals/white",
        },
        {
          item: "minecraft:oxeye_daisy",
        },
      ],
      output: {
        item: "botania:pure_daisy",
      },
      reagent: {
        tag: "botania:seed_apothecary_reagent",
      },
    })
    .id("dr2:botania/petal_apothecary/pure_daisy");

  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: "botania:petals/brown",
        },
        {
          tag: "botania:petals/red",
        },
        {
          tag: "botania:petals/red",
        },
        {
          tag: "botania:petals/red",
        },
        {
          item: "minecraft:red_tulip",
        },
        {
          item: "minecraft:orange_tulip",
        },
      ],
      output: {
        item: "botania:endoflame",
      },
      reagent: {
        tag: "botania:seed_apothecary_reagent",
      },
    })
    .id("dr2:botania/petal_apothecary/endoflame");
  //todo: all recipes for flowers in v0.4.2
};
