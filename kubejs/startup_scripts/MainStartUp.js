StartupEvents.registry('item', event => {
    RegistryStartUpItems(event)
})
StartupEvents.registry('block', event =>{
    RegistryStartUpBlocks(event)
})
GTCEuStartupEvents.materialModification(event =>{
    //v0.1.14092025 0:25
    //крашит из-за отсутствия материалов крафта (слитков)
    //GTCEuMatMod(event)
})
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    RegisterOreBlocksGT(event)
})

