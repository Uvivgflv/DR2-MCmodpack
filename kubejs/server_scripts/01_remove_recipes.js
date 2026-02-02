const RemoveRecipesByMods = event => {
    var RecipesVanilla = global.REMOVE_RECIPES_MINECRAFT;
    var RecipesApoheosis = global.REMOVE_RECIPES_APOTHEOSIS;
    var RecipesIE = global.REMOVE_RECIPES_IMMERSIVEENGINEERING;
    var RecipesGTCEu = global.REMOVE_RECIPES_GTCUE;
    var RecipesLuminous = global.REMOVE_RECIPES_LUMINOUS;
    var RecipesTFMG = global.REMOVE_RECIPES_TFMG;
    var RecipesCreate = global.REMOVE_RECIPES_CREATE;
    var RecipesUndergarden = global.REMOVE_RECIPES_UNDERGARDEN;
    var RecipesIronsSpellbooks = global.REMOVE_IRONS_SPELLBOOKS;
    //vanilla
    RecipesVanilla.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });
    //immersive engineering
    RecipesIE.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });
    //GTCEu
    RecipesGTCEu.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });
    //luminous
    RecipesLuminous.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    }); 
    //tfmg
    RecipesTFMG.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });
    //create
    RecipesCreate.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });
    //undergarden
    RecipesUndergarden.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });
    //irons spellbooks
    RecipesIronsSpellbooks.forEach(element => {
       const recipes_id = element;
       event.remove({id:recipes_id}); 
    });

};

const RemoveRecipesByOutput = event => {
    var RecipesOutputs = global.REMOVE_RECIPES_OUTPUTS;

    RecipesOutputs.forEach(element => {
        const recipe_output = element;
        event.remove({output: recipe_output});
    });
};