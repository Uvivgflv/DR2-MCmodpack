//priority 20
const RemoveRecipes = (event) => {

    global.REMOVE_RECIPES.MODS.QUARK.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.BASE.MINECRAFT.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.BASE.BIOMES.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.MODS.TCONSTRUCT.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.MODS.SUPPLEMENTARIES.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.MODS.AETHER.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.MODS.AQUACULTURE.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.MODS.DELIGHT_MODS.forEach(id_ => event.remove({id: id_}));
    global.REMOVE_RECIPES.MODS.GTCEU.forEach(id_ => event.remove({id: id_}));
    


    const recipeOutputs = global.RECIPES_REMOVE_OUTPUT;

    recipeOutputs.forEach(item => {
        const out_item = item;
        event.remove({output: out_item});
    });   
};