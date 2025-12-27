const RegistrySophiStorageRecipes = (event) => {
  let SophStorage = "sophisticatedstorage";
  //#region remove all recipes
  //event.remove({mod:'sophisticatedstorage'}) //nuke
  //#endregion
  //#region remove uprd recipes
  event.remove({ id: SophStorage + ":upgrade_base" });
  event.remove({
    id: /^sophisticatedstorage:.*_upgrade_from_backpack_pickup_upgrade/,
  });
  event.remove({ id: /^sophisticatedstorage:.*_upgrade/ });
  event.remove({
    id: SophStorage + ":basic_to_iron_tier_from_basic_to_copper_tier",
  });
  //event.remove({id:SophStorage+':pickup_upgrade'})
  event.remove({ id: SophStorage + ":generic_barrel" });
  event.remove({ id: SophStorage + ":spruce_barrel_from_vanilla_barrel" });
  event.remove({ id: SophStorage + ":spruce_barrel" });
  //#endregion
  //#region upgrade recipes
  event
    .shaped("2x sophisticatedstorage:upgrade_base", ["ABA", "BCB", "ABA"], {
      A: "#minecraft:logs",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:iron"}',
      ).strongNBT(),
      C: "#dr2:hardened_planks",
    })
    .id("dr2:" + SophStorage + "/upgrades/upgrade_base");

  event
    .shaped(
      "sophisticatedstorage:basic_to_copper_tier_upgrade",
      ["ABA", "FCF", "ADA"],
      {
        F: "#sophisticatedstorage:base_tier_wooden_storage",
        A: Item.of(
          "tconstruct:large_plate",
          '{Material:"tconstruct:copper"}',
        ).strongNBT(),
        C: "sophisticatedstorage:upgrade_base",
        D: "#forge:tools/files",
        B: "#forge:tools/saws",
      },
    )
    .id("dr2:" + SophStorage + "/upgrades/copper_upgrade");

  event
    .shaped(
      "sophisticatedstorage:basic_to_iron_tier_upgrade",
      ["ABA", "CDC", "AEA"],
      {
        A: "#forge:double_plates/black_bronze",
        B: "#forge:tools/saws",
        C: "#sophisticatedstorage:base_tier_wooden_storage",
        D: "sophisticatedstorage:upgrade_base",
        E: "#forge:tools/files",
      },
    )
    .id("dr2:" + SophStorage + "/upgrades/black_bronze_upgrade");

  event
    .shaped(
      "sophisticatedstorage:basic_to_gold_tier_upgrade",
      ["ABA", "CDC", "AEA"],
      {
        A: "#forge:double_plates/cloggrum_steel",
        B: "#forge:tools/saws",
        C: "#sophisticatedstorage:base_tier_wooden_storage",
        D: "sophisticatedstorage:upgrade_base",
        E: "#forge:tools/files",
      },
    )
    .id("dr2:" + SophStorage + "/upgrades/cloggrum_steel_upgrade");

  event
    .shaped(
      "sophisticatedstorage:basic_to_diamond_tier_upgrade",
      ["ABA", "CDC", "AEA"],
      {
        A: "#forge:double_plates/relict",
        B: "#forge:tools/saws",
        C: "#sophisticatedstorage:base_tier_wooden_storage",
        D: "sophisticatedstorage:upgrade_base",
        E: "#forge:tools/files",
      },
    )
    .id("dr2:" + SophStorage + "/upgrades/relict_upgrade");
  //#endregion
  //#region add recipes barrels
  event
    .shaped(
      Item.of("sophisticatedstorage:barrel", '{woodType:"spruce"}'),
      ["ABA", "ACA", "ABA"],
      {
        A: "#minecraft:planks",
        B: "#minecraft:wooden_slabs",
        C: "#forge:tools/hammers",
      },
    )
    .id("dr2:" + SophStorage + "/barrel");

  event
    .shapeless(
      Item.of("sophisticatedstorage:barrel", '{woodType:"spruce"}'),
      "minecraft:barrel",
    )
    .id("dr2:" + SophStorage + "/barrel_from_vanilla");
};
