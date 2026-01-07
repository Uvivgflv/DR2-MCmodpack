const RegistryIronsSpellbooksRecipes = (event) => {
  var ISB = "irons_spellbooks:";
  //#region remove recipes
  //! Разобраться с тем что можно изменить в рецептах заклинаний
  event.remove({ id: /^irons_spellbooks:.*_spell_book/ });
};
