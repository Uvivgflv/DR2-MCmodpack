const RegistryCustomMatRecipes = event =>{
    //#region hepatizon
    //ingot from dust & dust from ingot
    event.recipes.gtceu.macerator('hepatizon_to_dust')
        .itemInput('#forge:ingots/hepatizon')
        .itemOutput('')
    

    //#endregion
}