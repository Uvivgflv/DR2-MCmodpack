const ProgressModuleRecipesRegistry = (event) => {
  //#region consts
  const MetallsForHands = [
    {item: 'minecraft:iron_nugget', output: 'gtceu:tiny_iron_dust'},
    {item: 'gtceu:copper_nugget', output: 'gtceu:tiny_copper_dust'},
    {item: 'minecraft:gold_nugget', output: 'gtceu:tiny_gold_dust'},
    {item: 'gtceu:tin_nugget', output: 'gtceu:tiny_tin_dust'}
  ];

  let woodSawing = (output, input) => {
    event.shaped(output, [
      'A ',
      'B '
    ],{
        A: '#forge:tools/saws',
        B: input
      }).id(`dr2:progress_module/hand/${output.split(':')[1]}`);
  };
  //!trapdoors doors sings and other tnigs

  const WoodTypes = global.WoodTypes;
  //#endregion

  //#region functions for metalls
  function processMetalls(metalls) {
    metalls.forEach(metal => {
      const itemID = metal.item;
      const outputID = metal.output;

      event.shapeless(outputID, [itemID, '#forge:tools/mortars'])
        .id(`dr2:progress_module/hand/${outputID.split(':')[1]}`);
    });
  }
  //#endregion
  processMetalls(MetallsForHands);
  //#region for wood replace output?
  function removePlanksrecipes(event) {
    var planksTag = '#minecraft:planks';
    Ingredient.of(planksTag).stacks.forEach((element) => {
      const itemId = element.id;
      event.remove({ output: itemId, type: 'minecraft:crafting_shaped', not: { id: /^gtceu:shaped\/.*/} });
      event.remove({ output: itemId, type: 'minecraft:crafting_shapeless'});

    });
  }

  removePlanksrecipes(event);
  
  
  function registerWoodSawingRecipes(event) {
    WoodTypes.forEach(element => {
      const itemId = element.log;
      const planksId = element.planks;
      event.shaped('4x '+planksId, [
      'A ',
      'B '
    ],{
        A: '#forge:tools/saws',
        B: itemId
      }).id(`dr2:progress_module/hand_saws/${planksId.split(':')[1]}/${itemId.replace(':', '/')}`);
    })};
  
  registerWoodSawingRecipes(event);
  //#endregion
  
  //#region for add recipes manually Wood Metall Tools and Ores
  event.smelting('minecraft:copper_ingot', '#forge:dusts/copper').id('dr2:progress_module/smelting/copper_from_dust');
  event.smelting('gtceu:tin_ingot', '#forge:dusts/tin').id('dr2:progress_module/smelting/tin_from_dust');
  event.smelting('gtceu:bronze_ingot', '#forge:dusts/bronze').id('dr2:progress_module/smelting/bronze_from_dust');
  event.smelting('minecraft:gold_ingot', '#forge:dusts/gold').id('dr2:progress_module/smelting/gold_from_dust');

  //woodSawing('2x forbidden_arcanus:edelwood_planks', '#forbidden_arcanus:edelwood_logs');
  
  event.shaped('gtceu:flint_saw', [
    'AA',
    'BA'
  ],{
    B: 'minecraft:flint',
    A: '#forge:rods/wooden'
  }).id('dr2:progress_module/shaped/flint_saw');

  event.shapeless('minecraft:coal', ['gtceu:raw_coal', '#forge:tools/hammers']).id('dr2:progress_module/hand/coal_from_hammer');
  event.shapeless('2x gtceu:fullers_earth_dust', ['gtceu:raw_fullers_earth', '#forge:tools/hammers', ]).id('dr2:progress_module/hand/fullers_earht_from_hammer');
  event.shapeless('minecraft:diamond', ['gtceu:raw_diamond', '#forge:tools/hammers']).id('dr2:progress_module/hand/diamond_from_hammer');
  //#endregion
};