const GTCEUecipesRegistry = (event) => {
  //#region add materials recipes
  //bismuth bronze

  //#endregion

  //#region electric blast furnace

  event.recipes.gtceu
    .electric_blast_furnace("gtceu:aluminium_ingot_nitrogen")
    .itemInputs("kubejs:aluminum_casting_compound")
    .itemOutputs("gtceu:aluminium_ingot")
    .inputFluids(GTMaterials.Nitrogen.getFluid(250))
    .duration(1200)
    .blastFurnaceTemp(1700)
    .circuit(2)
    .EUt(128);
  //nitrogen

  event.recipes.gtceu
    .electric_blast_furnace("gtceu:aluminium_ingot")
    .itemInputs("kubejs:aluminum_casting_compound")
    .itemOutputs("gtceu:aluminium_ingot")
    .duration(1900)
    .blastFurnaceTemp(1700)
    .circuit(1)
    .EUt(128);

  //#endregion

  //#region add recipes
  event
    .shaped("kubejs:unfired_coke_bricks", ["AA", "AA"], {
      A: "gtceu:compressed_coke_clay",
    })
    .id("cct:coke_oven/shaped/unfired_coke_bricks");

  event
    .shaped("gtceu:firebricks", ["ABA", "BAB", "ABA"], {
      A: "tfmg:fireproof_brick",
      B: "gtceu:firebrick",
    })
    .id("cct:primitive_blast_furnace/shaped/firebricks");
  //#endregion
  //#region add bronze steam machine recipes
  event
    .shaped("gtceu:lp_steam_solid_boiler", ["ABA", "BCB", "DED"], {
      A: "#forge:bolts/iron",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:bronze"}',
      ).strongNBT(),
      C: "#forge:tools/wrench",
      D: "kubejs:lead_molded_bricks",
      E: "gtceu:steam_machine_casing",
    })
    .id("cct:gt/steam/bronze/coal_boiler");

  event
    .shaped("gtceu:lp_steam_compressor", ["ABA", "CDC", "EEE"], {
      A: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:bronze"}',
      ).strongNBT(),
      B: "gtceu:bronze_small_fluid_pipe",
      C: "create:mechanical_piston",
      D: "gtceu:steam_machine_casing",
      E: "kubejs:lead_molded_bricks",
    })
    .id("cct:gt/steam/bronze/compressor");

  event.shaped('gtceu:lp_steam_alloy_smelter', [
    'AAA',
    'BCD',
    'EFE'
  ],{
    A:'#forge:plates/bronze',
    B:'minecraft:iron_bars',
    C:'minecraft:blast_furnace',
    D:'#gtceu:tools/crafting_wrenches',
    E:'gtceu:bronze_machine_casing',
    F:'gtceu:steam_machine_casing'
  }).id('dr2:gt/steam/bronze/alloy_smelter');

  //#endregion
  //#region steel steam machine
  event
    .shaped("gtceu:steel_machine_casing", ["ABA", "BCB", "ABA"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "#forge:tools/hammers",
    })
    .id("cct:gt/steam/steel/steel_machine_casing");

  event
    .shaped("gtceu:hp_steam_solid_boiler", ["ABA", "BCB", "DED"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "#forge:tools/wrench",
      D: "gtceu:steel_brick_casing",
      E: "minecraft:blast_furnace",
    })
    .id("cct:gt/steam/steel/hp_steam_solid_bioler");

  event
    .shaped("gtceu:hp_steam_liquid_boiler", ["ABA", "BCB", "DED"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "#forge:tools/wrench",
      D: "gtceu:steel_brick_casing",
      E: "tconstruct:scorched_fuel_tank",
    })
    .id("cct:gt/steam/steel/hp_steam_liquid_bioler");

  event
    .shaped("gtceu:hp_steam_extractor", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "gtceu:tin_alloy_small_fluid_pipe",
      D: "#forge:tools/wrench",
      E: "gtceu:steel_machine_casing",
      F: "gtceu:steel_brick_casing",
    })
    .id("cct:gt/steam/steel/hp_steam_extractor");

  event
    .shaped("gtceu:hp_steam_macerator", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "#forge:gems/diamond",
      D: "#forge:tools/wrench",
      E: "gtceu:steel_machine_casing",
      F: "gtceu:steel_brick_casing",
    })
    .id("cct:gt/steam/steel/hp_steam_macerator");

  event
    .shaped("gtceu:hp_steam_compressor", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "create:mechanical_piston",
      D: "#forge:tools/wrench",
      E: "gtceu:steel_machine_casing",
      F: "gtceu:steel_brick_casing",
    })
    .id("cct:gt/steam/steel/hp_steam_compressor");

  event
    .shaped("gtceu:hp_steam_forge_hammer", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "minecraft:anvil",
      D: "#forge:tools/wrench",
      E: "gtceu:steel_machine_casing",
      F: "gtceu:steel_brick_casing",
    })
    .id("cct:gt/steam/steel/hp_steam_forge_hammer");

  event
    .shaped("gtceu:hp_steam_furnace", ["ABA", "CDC", "EFE"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "minecraft:furnace",
      D: "#forge:tools/wrench",
      E: "gtceu:steel_machine_casing",
      F: "gtceu:steel_brick_casing",
    })
    .id("cct:gt/steam/steel/hp_steam_furnace");

  event
    .shaped("gtceu:hp_steam_alloy_smelter", ["ABA", "CDG", "EFE"], {
      A: "#forge:plates/steel",
      B: Item.of(
        "tconstruct:large_plate",
        '{Material:"tconstruct:steel"}',
      ).strongNBT(),
      C: "minecraft:blast_furnace",
      D: "#forge:tools/wrench",
      E: "gtceu:steel_machine_casing",
      F: "gtceu:steel_brick_casing",
      G: "tconstruct:scorched_fuel_tank",
    })
    .id("cct:gt/steam/steel/hp_steam_alloy_smelter");
  //#endregion
};
