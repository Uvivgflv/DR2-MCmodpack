//priority 200
const GTCEuRecipesEvent = (event) => {
    event.shaped('minecraft:blast_furnace', [
        'ABC',
        'DED',
        'FDF'
    ], {
        A:'#gtceu:tools/crafting_wrenches',
        B:'#gtceu:tools/crafting_files',
        C:'#gtceu:tools/crafting_screwdrivers',
        D:'#forge:plates/wrought_iron',
        E:'minecraft:furnace',
        F:'#forge:screws/wrought_iron'
    }).id('drp:gtceu/blast_furnace');
}