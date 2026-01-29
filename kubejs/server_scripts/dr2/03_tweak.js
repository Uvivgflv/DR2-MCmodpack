const ProgressModuleRecipesRegistry = (event) => {
  //#region consts
  const MetallsForHands = [
    {item: 'minecraft:iron_nugget', output: 'gtceu:tiny_iron_dust'},
    {item: 'gtceu:copper_nugget', output: 'gtceu:tiny_copper_dust'},
    {item: 'minecraft:gold_nugget', output: 'gtceu:tiny_gold_dust'},
    {item: 'gtceu:tin_nugget', output: 'gtceu:tiny_tin_dust'}
  ];
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

};