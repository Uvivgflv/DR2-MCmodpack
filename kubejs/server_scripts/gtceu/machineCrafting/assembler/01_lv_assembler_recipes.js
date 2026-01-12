const RegisterLVAssemblerRecipes = event => { //!удалить рецепты GREATE перд добавлением
    event.recipes.gtceu.assembler('create:fluid_tank')
        .itemInputs(
            '4x #forge:glass_panes',
            '8x #forge:screws/copper',
            '4x #forge:plates/copper'
        )
        .inputFluids(
            Fluid.of('gtceu:rubber', 250)
        )
        .itemOutputs(
            '4x create:fluid_tank'
        )
        .duration(100)
        .EUt(30)
}