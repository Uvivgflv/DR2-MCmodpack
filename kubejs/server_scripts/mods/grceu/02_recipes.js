//priority 200
const GTCEuMachineRecipesEvent = (event) => {
     event.recipes.gtceu.alloy_smelter('wrought_iron_from_iron_and_calcite')
        .itemInputs(
            '4x #forge:dusts/calcite',
            '#forge:ingots/iron'
        )
        .itemOutputs(
            'gtceu:wrought_iron_ingot'
        )
        .duration(30)
        .EUt(8);
};