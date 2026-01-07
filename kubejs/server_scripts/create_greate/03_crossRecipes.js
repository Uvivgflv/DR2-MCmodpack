const RegistryCreateCrossRecipes = (event) => {
  //#region mechanical crafter vanilla
    event.recipes.create.mechanical_crafting('minecraft:enchanting_table', [
      '  K  ',
      ' DBD ',
      'DDQDD',
      'OGSEO',
      'OOOOO'
    ], {
      K: '#forge:exquisite_gems',
      D: '#forge:plates/diamond',
      B: 'minecraft:book',
      Q: 'malum:block_of_blazing_quartz',
      O: 'tconstruct:obsidian_pane',
      G: 'malum:block_of_hallowed_gold',
      S: 'forbidden_arcanus:stellarite_block',
      E: 'malum:block_of_brilliance'
    }).id('dr2:create/crosscrafts/misc/enchanting_table');
  //#endregion
};
