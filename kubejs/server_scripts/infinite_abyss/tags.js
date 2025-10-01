const RegistryInfAbyssTagsItems = event => {
    //#region remove ore tags from crystal blocks
    event.remove('forge:ores', [
        'infinite_abyss:glowing_red_crystal',
        'infinite_abyss:glowing_red_crystal'
    ])
    //#endregion
}