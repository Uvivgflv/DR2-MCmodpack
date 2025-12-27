const RegisterApotheosisInfusionResipes = (event) => {
  /**
   * Инфузия используется для крафта книг из IronSpells
   * Инфузия используется для создания Наполненной душестали
   * наполненая душесталь - это материал для Malum, BM и книг
   * заклинаний
   */

  //#region spellbooks infusion
  event
    .custom({
      type: "apotheosis:enchanting",
      conditions: [
        {
          type: "apotheosis:module",
          module: "enchantment",
        },
      ],
      input: {
        item: "kubejs:gold_spellbook_blank",
      },
      requirements: {
        eterna: 45,
        quanta: 5,
        arcana: 5,
      },
      max_requirements: {
        eterna: -1,
        quanta: -1,
        arcana: -1,
      },
      display_level: 15,
      result: {
        item: "irons_spellbooks:gold_spell_book",
        count: 1,
      },
    })
    .id("dr2:apotheosis/infusion/gold_spell_book");

  event
    .custom({
      type: "apotheosis:enchanting",
      conditions: [
        {
          type: "apotheosis:module",
          module: "enchantment",
        },
      ],
      input: {
        item: "kubejs:diamond_spellbook_blank",
      },
      requirements: {
        eterna: 45,
        quanta: 20,
        arcana: 5,
      },
      max_requirements: {
        eterna: -1,
        quanta: -1,
        arcana: -1,
      },
      display_level: 15,
      result: {
        item: "irons_spellbooks:diamond_spell_book",
        count: 1,
      },
    })
    .id("dr2:apotheosis/infusion/diamond_spell_book");

  event
    .custom({
      type: "apotheosis:enchanting",
      conditions: [
        {
          type: "apotheosis:module",
          module: "enchantment",
        },
      ],
      input: {
        item: "kubejs:netherite_spellbook_blank",
      },
      requirements: {
        eterna: 45,
        quanta: 10,
        arcana: 15,
      },
      max_requirements: {
        eterna: -1,
        quanta: -1,
        arcana: -1,
      },
      display_level: 20,
      result: {
        item: "irons_spellbooks:netherite_spell_book",
        count: 1,
      },
    })
    .id("dr2:apotheosis/infusion/netherite_spell_book");
  //#endregion

  //#region materials
  event
    .custom({
      type: "apotheosis:enchanting",
      conditions: [
        {
          type: "apotheosis:module",
          module: "enchantment",
        },
      ],
      input: {
        item: "twilightforest:borer_essence",
      },
      requirements: {
        eterna: 5,
        quanta: 5,
        arcana: 5,
      },
      max_requirements: {
        eterna: -1,
        quanta: -1,
        arcana: -1,
      },
      display_level: 3,
      result: {
        item: "irons_spellbooks:arcane_essence",
        count: 4,
      },
    })
    .id("dr2:apotheosis/infusion/magic_essence");
};
