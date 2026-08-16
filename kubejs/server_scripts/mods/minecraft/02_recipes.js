//priority 200
const MinecraftRecipesEvent = (event) => {
    //#region furnaces
    event.shaped('minecraft:furnace',[
        'AAA',
        'ABA',
        'CCC'
    ],{
        A: '',
        B: '',
        C: ''
    }).id('drp:base/minecraft/furnace');

    
    //#endregion
}