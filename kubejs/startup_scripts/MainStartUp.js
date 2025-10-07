StartupEvents.registry('item', event => {
    RegistryStartUpItems(event)
})
StartupEvents.registry('block', event =>{
    RegistryStartUpBlocks(event)
})
ItemEvents.modification(event => {
    ArmorModify(event)
    ToolsModify(event)
})
WorldgenEvents.remove(event =>{
    //v0.1.02102025 13:10
    RemoveOres(event)

    console.log('Ores remove from generation levels')
})
GTCEuStartupEvents.materialModification(event =>{
    //v0.1.14092025 0:25
    //крашит из-за отсутствия материалов крафта (слитков)
    //GTCEuMatMod(event)
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    //v0.1.03102025
    GTCEuMaterialRegistry(event)
})
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    RegisterOreBlocksGT(event)
})

