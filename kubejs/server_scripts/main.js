ServerEvents.recipes(event => {
    registerVanillaRecipes(event)
    RegisterTFMGRecipes(event)
    RegistryCCTRecipes(event)
    RegistryTconstructResipes(event)
    RegisterAE2Recipes(event)
    RegisterBotaniaRecipes(event)
})
ServerEvents.tags('item', event => {
    RegisterItemsTagsMain(event)
    RegisterCreateTags(event)
})
ServerEvents.tags('block', event =>{
    RegisterBotaniaTagsBlock(event)
})