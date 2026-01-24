const RemoveRecipesByMods = event => {
    var RecipesVanilla = global.REMOVE_RECIPES_MINECRAFT;
    var RecipesApoheosis = global.REMOVE_RECIPES_APOTHEOSIS;
    //vanilla
    RecipesVanilla.forEach(element => {
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