//priority 200
const TConstructStationsRecipesEvent = (event) => {
    event.shaped('tconstruct:part_builder', [
        'AAB',
        'CC ',
        'DD '
    ],{
        A:'#forge:bolts/wood',
        B:'#gtceu:tools/crafting_saws',
        C:'tconstruct:pattern',
        D:'gtceu:wood_plate'
    }).id('drp:tconstruct/part_builder');

    event.shaped('tconstruct:tinker_station', [
        'AAA',
        'BCB',
        'BDB'
    ],{
        A:'tconstruct:pattern',
        B:'gtceu:wood_plate',
        C:'#forge:bolts/wood',
        D:'#gtceu:tools/crafting_saws'
    }).id('drp:tconstruct/tinker_station');

    event.shaped('tconstruct:part_chest', [
        'ABC',
        'DED',
        ' F '
    ],{
        A:'#gtceu:tools/crafting_saws',
        B:'#forge:bolts/wood',
        C:'#gtceu:tools/crafting_mallets',
        D:'#forge:rods/long/wood',
        E:'#forge:chests/wooden',
        F:'gtceu:wood_plate'
    }).id('drp:tconstruct/part_chest');

    event.shaped('tconstruct:tinkers_chest', [
        'ABC',
        'BDB',
        'EFE'
    ],{
        A:'#gtceu:tools/crafting_saws',
        B:'#forge:bolts/wood',
        C:'#gtceu:tools/crafting_mallets',
        D:'#forge:chests/wooden',
        E:'#forge:rods/long/wood',
        F:'gtceu:wood_plate'
    }).id('drp:tconstruct/tinkers_chest');

    
};