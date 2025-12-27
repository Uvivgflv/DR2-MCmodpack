const RegistryIronsSpellbooksRecipes = (event) => {
  var ISB = "irons_spellbooks:";
  //#region remove recipes
  event.remove({ id: /^irons_spellbooks:.*_spell_book/ });
};
