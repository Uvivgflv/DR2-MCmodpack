const RegisterTFMGRecipes = event =>{
    //#region remove aluminum&steel

    event.remove({output:'tfmg:aluminum_ingot'})
    event.remove({output:'tfmg:steel_ingot'})

    //#endregion

    //#region remove armor
    
    event.remove({output:/^tfmg:.*_helmet/})
    event.remove({output:/^tfmg:.*_chestplate/})
    event.remove({output:/^tfmg:.*_leggings/})
    event.remove({output:/^tfmg:.*_boots/})

    //#endregion

    //#region remove some sus recipes

    event.remove({output: 'tfmg:heavy_plate'})

    //#endregion
}