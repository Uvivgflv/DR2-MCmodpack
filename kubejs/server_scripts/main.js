ServerEvents.recipes(event => {
    registerVanillaRecipes(event)
    RegisterTFMGRecipes(event)
    RegistryCCTRecipes(event)
    RegistryTconstructResipes(event)
})
ServerEvents.tags('item', event => {
    RegisterDisabledItems(event)
    RegisterCreateTags(event)
})