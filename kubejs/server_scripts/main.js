ServerEvents.recipes(event => {
    registerVanillaRecipes(event)
    RegisterTFMGRecipes(event)
    RegistryCCTRecipes(event)
    RegistryTconstructResipes(event)
    RegisterAE2Recipes(event)
})
ServerEvents.tags('item', event => {
    RegisterDisabledItems(event)
    RegisterCreateTags(event)
})