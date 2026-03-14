const RegistryIronsSpellbooksRecipes = (event) => {
  //#region consts 

  const ResearchCraftConst = global.RestrictionsCrating;
  //#endregion

  //#region materials
  event
    .shaped("irons_spellbooks:magic_cloth", [" AC", "ABA", "CA "], {
      A: "botania:manaweave_cloth",
      B: "irons_spellbooks:arcane_essence",
      C: "gtceu:treated_wood_rod",
    })
    .id("dr2:irons_spellbooks/materials/magic_cloth");

  //#endregion

  //#region runes

  //#endregion

  //#region add recipes for staffs
  event
    .shaped("irons_spellbooks:graybeard_staff", [" AB", "CDA", "EF "], {
      A: "#forge:bolts/wood",
      B: "irons_spellbooks:arcane_essence",
      C: "#forge:tools/saws",
      D: "#forge:rods/long/wood",
      E: "#forge:rings/wrought_iron",
      F: "#forge:tools/files",
    })
    .id("dr2:irons_spellbooks/graybeard_staff");
  //#endregion

  //#region add recipes for spell books
  event
    .shaped("irons_spellbooks:copper_spell_book", ["ABC", "ADE", "AFE"], {
      A: "#forge:foils/copper",
      B: "irons_spellbooks:arcane_essence",
      C: "#gtceu:tools/crafting_knives",
      D: "minecraft:book",
      E: "#forge:string",
      F: "#gtceu:tools/crafting_mallets",
    })
    .id("dr2:irons_spellbooks/copper_spell_book");
  //#endregion

  //#region add recipes for armors
  //wandering magician armor
  event
    .shaped(
      "irons_spellbooks:wandering_magician_helmet",
      ["ABA", "BCB", "DED"],
      {
        A: "irons_spellbooks:arcane_essence",
        B: "#dr2:cloth_low_quality",
        C: Item.of("minecraft:leather_helmet", "{Damage:0}").strongNBT(),
        D: "#forge:foils/gold",
        E: "#forge:string",
      },
    )
    .id("dr2:irons_spellbooks/wandering_magician_helmet");

  event
    .shaped(
      "irons_spellbooks:wandering_magician_chestplate",
      ["ABA", "CDC", "CEC"],
      {
        A: "irons_spellbooks:arcane_essence",
        B: Item.of("minecraft:leather_chestplate", "{Damage:0}").strongNBT(),
        C: "#forge:foils/gold",
        D: "#dr2:cloth_low_quality",
        E: "#forge:dyes/red",
      },
    )
    .id("dr2:irons_spellbooks/wandering_magician_chestplate");

  event
    .shaped(
      "irons_spellbooks:wandering_magician_leggings",
      ["ABC", "DED", " F "],
      {
        A: "irons_spellbooks:arcane_essence",
        B: "#forge:foils/gold",
        C: Item.of(
          "tconstruct:tough_binding",
          '{Material:"tconstruct:leather"}',
        ).strongNBT(),
        D: "#dr2:cloth_low_quality",
        E: Item.of("minecraft:leather_leggings", "{Damage:0}").strongNBT(),
        F: "#forge:string",
      },
    )
    .id("dr2:irons_spellbooks/wandering_magician_leggings");

  event
    .shaped(
      "irons_spellbooks:wandering_magician_boots",
      ["ABC", "DED", " F "],
      {
        A: "irons_spellbooks:arcane_essence",
        B: "#forge:foils/gold",
        C: Item.of(
          "tconstruct:tough_binding",
          '{Material:"tconstruct:leather"}',
        ).strongNBT(),
        D: "#dr2:cloth_low_quality",
        E: Item.of("minecraft:leather_boots", "{Damage:0}").strongNBT(),
        F: "#forge:string",
      },
    )
    .id("dr2:irons_spellbooks/wandering_magician_boots");
  //pumpkin armor
  event
    .shaped("irons_spellbooks:pumpkin_helmet", ["ABC", "DED", "FGF"], {
      A: "#forge:rings/tin",
      B: "irons_spellbooks:magic_cloth",
      C: "#forge:string",
      D: "#dr2:cloth_low_quality",
      E: "minecraft:carved_pumpkin",
      F: "#supplementaries:straw",
      G: Item.of("minecraft:leather_helmet", "{Damage:0}").strongNBT(),
    })
    .id("dr2:irons_spellbooks/pumpkin_helmet");

  event
    .shaped("irons_spellbooks:pumpkin_chestplate", ["ABA", "CDC", "CDC"], {
      A: "#forge:string",
      B: "irons_spellbooks:magic_cloth",
      C: "#dr2:cloth_low_quality",
      D: "kubejs:tinned_leather",
    })
    .id("dr2:irons_spellbooks/pumpkin_chestplate");

  event
    .shaped("irons_spellbooks:pumpkin_leggings", ["ABA", "CDC", "EDE"], {
      A: "#dr2:cloth_low_quality",
      B: "irons_spellbooks:magic_cloth",
      C: "kubejs:tinned_leather",
      D: "#forge:string",
      E: "#supplementaries:straw",
    })
    .id("dr2:irons_spellbooks/pumpkin_leggings");

  event
    .shaped("irons_spellbooks:pumpkin_boots", ["ABA", "CAC", "DED"], {
      A: "#forge:string",
      B: "irons_spellbooks:magic_cloth",
      C: "#dr2:cloth_low_quality",
      D: "kubejs:tinned_leather",
      E: "#supplementaries:straw",
    })
    .id("dr2:irons_spellbooks/pumpkin_boots");
  //pyromancer armor
  event
    .shaped("irons_spellbooks:pyromancer_helmet", ["ABA", "CDC", "AEA"], {
      A: "kubejs:tinned_leather",
      B: "irons_spellbooks:magic_cloth",
      C: "kubejs:modest_silk_fabric",
      D: "irons_spellbooks:fire_rune",
      E: Item.of(
        "tconstruct:bowstring",
        '{Material:"tconstruct:weeping_vine"}',
      ).strongNBT(),
    })
    .id("dr2:irons_spellsbooks/armor/pyromancer_helmet");

  event
    .shaped("irons_spellbooks:pyromancer_chestplate", ["ABC", "DED", "FGG"], {
      A: Item.of(
        "tconstruct:bowstring",
        '{Material:"tconstruct:weeping_vine"}',
      ).strongNBT(),
      B: "irons_spellbooks:fire_rune",
      C: "#forge:foils/gold",
      D: "kubejs:modest_silk_fabric",
      E: "irons_spellbooks:magic_cloth",
      F: "#forge:rings/gold",
      G: "kubejs:tinned_leather",
    })
    .id("dr2:irons_spellbooks/armor/pyromancer_chestplate");

  event
    .shaped("irons_spellbooks:pyromancer_leggings", ["ABA", "CDC", "E E"], {
      A: Item.of(
        "tconstruct:bowstring",
        '{Material:"tconstruct:weeping_vine"}',
      ).strongNBT(),
      B: "kubejs:modest_silk_fabric",
      C: "kubejs:tinned_leather",
      D: "irons_spellbooks:fire_rune",
      E: "irons_spellbooks:magic_cloth",
    })
    .id("dr2:irons_spellbooks/armor/pyromancer_leggings");

  event
    .shaped("irons_spellbooks:pyromancer_boots", ["ABA", "CDC", "CEC"], {
      A: "kubejs:modest_silk_fabric",
      B: "irons_spellbooks:magic_cloth",
      C: "kubejs:tinned_leather",
      D: "irons_spellbooks:fire_rune",
      E: "#forge:rings/gold",
    })
    .id("dr2:irons_spellbooks/armor/pyromancer_boots");

  //#endregion

  //#region add recipes for crafting stations
  event
    .shaped("irons_spellbooks:inscription_table", ["ABC", "DEE", "FGF"], {
      A: "#forge:feathers",
      B: "#forge:gems/diamond",
      C: "minecraft:book",
      D: "supplementaries:antique_ink",
      E: "gtceu:treated_wood_slab",
      F: "gtceu:treated_wood_fence",
      G: "#forge:tools/saws",
    })
    .id("dr2:irons_spellbooks/inscription_table");

  event
    .shaped("irons_spellbooks:arcane_anvil", ["ABA", "CDE", "DFD"], {
      A: "#forge:rods/diamond",
      B: "#forge:storage_blocks/amethyst_bronze",
      C: "#forge:tools/hammers",
      D: "#tconstruct:scorched_blocks",
      E: "#forge:tools/crowbars",
      F: "#minecraft:anvil",
    })
    .id("dr2:irons_spellbooks/arcane_anvil");

  event
    .shaped("irons_spellbooks:scroll_forge", ["ABA", "CDE", "FFF"], {
      A: "#forge:plates/obsidian",
      B: "irons_spellbooks:arcane_essence",
      C: "#forge:tools/crowbars",
      D: "#forge:plates/black_steel",
      E: "#forge:tools/hammers",
      F: "#tconstruct:scorched_blocks",
    })
    .id("dr2:irons_spellbooks/scroll_anvil");
  //#endregion
};
