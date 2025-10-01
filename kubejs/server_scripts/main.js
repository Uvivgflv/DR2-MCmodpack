ServerEvents.recipes(event => {
    registerVanillaRecipes(event)
    RegisterTFMGRecipes(event)
    RegistryCCTRecipes(event)
    RegistryTconstructResipes(event)
    RegistrySmelteryRecipes(event)
    RegisterAE2Recipes(event)
    RegistryTGCEURecipes(event)
    RegisterBotaniaRecipes(event)
    RegisterSophisBackpacksRecipes(event)
    RegisterCreateRecipes(event)
    RegisterTConSmelteryCompat(event)
    RegisterApothRecipes(event)
    RegisterCreateCompatRecipes(event)
    //build 0.2.27082025 21:55
    RegisterCBSRecipes(event)
    RegistryCreateGTMCrafterRecipes(event)
    RegistryBMRecipes(event)
    RegistrySeqAssembleGTPartsRecipes(event)
    RegisterApothCreateTicCompat(event)
    RegisterMalumRecipes(event)
    RegistryInfAbyssRecipes(event)
    //v0.1.10092025 6:48
    RegistryTCONTweaks(event)
    //v0.1.01102025 16:30
    RegistryAdAstraRecipes(event)

    console.log('Register DR2 custom recipes')
})
ServerEvents.tags('item', event => {
    RegisterItemsTagsMain(event)
    RegisterCreateTags(event)
    RegisterMalumTags(event)
    //v0.1.16092025 3:35
    RegistryInfAbyssTagsItems(event)
    //v0.1.01102025 16:30
    RegistryAdAstraItemTags(event)

    console.log('Register DR2 custom itemTags')
})
ServerEvents.tags('block', event =>{
    RegisterBotaniaTagsBlock(event)
    RegisterGTTagsBlocks(event)
    //v0.1.01102025 16:30
    //RegistryAdAstraBlockTags(event) //не уверен что будет необходимо

    console.log('Register DR2 custom blockTags')
})
GTCEuServerEvents.oreVeins(event => {
    //v0.1.13092025 22:20
    AdAstraMoon(event)
    AdAstraMars(event)
    AdAstraVenus(event)
    //v0.1.14092025 18:50
    AdAstraMercury(event)
    //v0.1.13092025 23:20
    InfAbyssFirstLayer(event)
    InfAbyssSecondLayer(event)
    //v0.1.01102025 16:20
    //MidnightOreVeins(event)
    TwilightforestOreVeins(event)
    UndergardenOreVeins(event)
    OverworldOreVeins(event)

    console.log('Register GTCEU custom oreVeins')
})
GTCEuServerEvents.fluidVeins(event => {
    //BedrokFluidOverworld(event)
    console.log('Register GTCEU custom fluidVeins')
})