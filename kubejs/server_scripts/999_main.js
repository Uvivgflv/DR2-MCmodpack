//priority 999

//#region Worldgen events
GTCEuServerEvents.oreVeins(event => {
    AllOreVeinsEvent(event);
})
//#endregion

//#region Tags events
ServerEvents.tags('item', event => {
    DRPItemTagEvent(event);
    TConstructTagsEvent(event);
    FDelightTagEvent(event);
});

ServerEvents.tags('block', event => {

});
//#endregion

//#region Recipes events
ServerEvents.recipes(event => {
    RemoveRecipes(event);
    
    //MODS
    //MINECRAFT
    DRPWoodAndPlanksEvents(event)
    DRPRecipesEvent(event);
    TConstructSearedRecipesEvents(event);
    TConstructStationsRecipesEvent(event);
    GTCEuRecipesEvent(event);
    GTCEuMachineRecipesEvent(event);
    FDelightRecipesEvent(event);
    //MinecraftRecipesEvent(event); //may be usless 'cause all in DRPRecipesEvent
    
});
//#endregion