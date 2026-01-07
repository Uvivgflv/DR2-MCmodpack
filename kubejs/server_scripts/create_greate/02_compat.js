const RegisterCreateCompatRecipes = (event) => {
  //#region mixing recipes
  event.recipes.greate.mixing('kubejs:aluminum_casting_compound', [
    '#forge:dusts/aluminium',
    '#forge:dusts/aluminium',
    '#forge:dusts/aluminium',
    '#forge:dusts/borax',
    '#forge:dusts/borax',
    '#forge:dusts/basalt',
    'kubejs:inert_dust'])
    .heated()
    .id('kubejs:create/compat/aluminum_compound')
    .recipeTier(0);
  //#endregion

  //#regin filling recipes
  event.recipes.create.filling('create:rose_quartz', [
    Fluid.of('gtceu:redstone', 250),
    '#forge:gems/quartzite'
  ]).id('dr2:create/compat/rose_quartz_from_quartzite');
  //#endregion
};
