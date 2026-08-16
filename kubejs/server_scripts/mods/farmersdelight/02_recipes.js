//priority 200
const FDelightRecipesEvent = (event) => {
    //#region composts
    event.shapeless('farmersdelight:organic_compost',
        [
            'immersive_weathering:sandy_dirt',
            'minecraft:bone_meal',
            '3x #drp:straws',
            '4x #immersive_weathering:bark'
        ]
    ).id('drp:farmersdelight/organic_compost/lower_bark');

    event.shapeless('farmersdelight:organic_compost',
        [
            'immersive_weathering:sandy_dirt',
            'minecraft:bone_meal',
            '3x #drp:straws',
            '4x minecraft:rotten_flesh'
        ]
    ).id('drp:farmersdelight/organic_compost/lower_rotten_flesh');

    event.shapeless('3x farmersdelight:organic_compost',
        [
            'minecraft:dirt',
            'minecraft:bone_meal',
            '3x #drp:straws',
            '4x #immersive_weathering:bark'
        ]
    ).id('drp:farmersdelight/organic_compost/bark');

    event.shapeless('3x farmersdelight:organic_compost',
        [
            'minecraft:dirt',
            'minecraft:bone_meal',
            '3x #drp:straws',
            '4x minecraft:rotten_flesh'
        ]
    ).id('drp:farmersdelight/organic_compost/rotten_flesh');

    event.shapeless('6x farmersdelight:organic_compost',
        [
            'immersive_weathering:silt',
            'minecraft:bone_meal',
            '3x #drp:straws',
            '4x #immersive_weathering:bark'
        ]
    ).id('drp:farmersdelight/organic_compost/high_bark');

    event.shapeless('6x farmersdelight:organic_compost',
        [
            'immersive_weathering:silt',
            'minecraft:bone_meal',
            '3x #drp:straws',
            '4x minecraft:rotten_flesh'
        ]
    ).id('drp:farmersdelight/organic_compost/high_rotten_flesh');
    //#endregion

    //#region cooking blocks
    event.shaped('farmersdelight:cooking_pot', [
        'ABA',
        'CDC',
        ' C '
    ],{
        A:'#forge:rods/wooden',
        B:'#gtceu:tools/crafting_files',
        C:'#forge:plates/wrought_iron',
        D:'#gtceu:tools/crafting_hammers'
    }).id('drp:farmersdelight/cooking_pot_wrought_iron');

    event.shaped('farmersdelight:cooking_pot', [
        'ABA',
        'CDC',
        ' C '
    ],{
        A:'#forge:rods/wooden',
        B:'#gtceu:tools/crafting_files',
        C:'#forge:plates/copper',
        D:'#gtceu:tools/crafting_hammers'
    }).id('drp:farmersdelight/cooking_pot_copper');

    event.shaped('farmersdelight:stove', [
        'ABB',
        'CDC',
        'CEC'
    ],{
        A:'#gtceu:tools/crafting_hammers',
        B:'#forge:plates/wrought_iron',
        C:'minecraft:bricks',
        D:'minecraft:iron_bars',
        E:'minecraft:furnace'
    }).id('drp:farmersdelight/stove_wrought_iron');

    event.shaped('farmersdelight:stove', [
        'ABB',
        'CDC',
        'CEC'
    ],{
        A:'#gtceu:tools/crafting_hammers',
        B:'#forge:plates/copper',
        C:'minecraft:bricks',
        D:'create:copper_bars',
        E:'minecraft:furnace'
    }).id('drp:farmersdelight/stove_copper');

    event.shaped('farmersdelight:cutting_board', [
        'ABC',
        'AB ',
        '   '
    ],{
        A:'#forge:bolts/wood',
        B:'#minecraft:planks',
        C:'#gtceu:tools/crafting_saws'
    }).id('drp:farmersdelight/cutting_board');

    event.shaped('farmersdelight:skillet', [
        'ABB',
        'CBB',
        'DEF'
    ],{
        A:'#forge:rods/wooden',
        B:'#forge:plates/copper',
        C:'#forge:screws/copper',
        D:'#gtceu:tools/crafting_screwdrivers',
        E:'#gtceu:tools/crafting_files',
        F:'#gtceu:tools/crafting_hammers'
    }).id('drp:farmersdelight/skillet_copper');

    event.shaped('farmersdelight:skillet', [
        'ABB',
        'CBB',
        'DEF'
    ],{
        A:'#forge:rods/wooden',
        B:'#forge:plates/wrought_iron',
        C:'#forge:screws/wrought_iron',
        D:'#gtceu:tools/crafting_screwdrivers',
        E:'#gtceu:tools/crafting_files',
        F:'#gtceu:tools/crafting_hammers'
    }).id('drp:farmersdelight/skillet_wrought_iron');
};