const RegisterCreateCompatRecipes = (event) => {
  //#region mixing recipes
  event.recipes.greate.mixing('kubejs:aluminum_casting_compound', [
    '#forge:dusts/aluminium',
    '#forge:dusts/aluminium',
    '#forge:dusts/aluminium',
    '#forge:dusts/borax',
    '#forge:dusts/borax',
    '#forge:dusts/basalt',
    'kubejs:inert_dust'
  ])
  .heated()
  .id('kubejs:create/compat/aluminum_compound')
  .recipeTier(0);

  event.recipes.greate.mixing('6x kubejs:dry_scorched_grout', [
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'kubejs:black_ash_dust',
    'kubejs:black_ash_dust',
    'kubejs:black_ash_dust',
    'kubejs:black_ash_dust',
    '#forge:dusts/netherrack',
    '#forge:dusts/netherrack',
    '#forge:dusts/netherrack',
    '#forge:dusts/netherrack'
  ])
  .id('dr2:creata/compat/dry_scorched_grout')
  .recipeTier(1);
  //#endregion

  //#regin filling recipes
  event.recipes.create.filling('create:rose_quartz', [
    Fluid.of('gtceu:redstone', 250),
    '#forge:gems/quartzite'
  ]).id('dr2:create/compat/rose_quartz_from_quartzite');
  //#endregion
};
