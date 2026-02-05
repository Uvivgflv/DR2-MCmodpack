const RegisterDecorModule = (event) => {
    //#region light sources
    event.shaped('4x supplementaries:sconce', [
        'A B',
        'CDC',
        ' E '
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:tools/files',
        C:'#forge:rings/wrought_iron',
        D:'#dr2:lantern_fuel',
        E:'#forge:rods/treated_wood'
    }).id('dr2:decor/sconce');

    event.shaped('minecraft:lantern', [
        'ABC',
        'DED',
        ' B '
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:rings/wrought_iron',
        C:'#forge:tools/files',
        D:'#forge:rods/wrought_iron',
        E:'#dr2:lantern_fuel'
    }).id('dr2:decor/lantern');

    event.shaped('minecraft:soul_lantern', [
        'ABC',
        'DED',
        ' B '
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:rings/wrought_iron',
        C:'#forge:tools/files',
        D:'#forge:rods/wrought_iron',
        E:'minecraft:soul_torch'
    }).id('dr2:decor/soul_lantern');

    event.shaped('2x minecraft:torch', [
        'A ',
        'B '
    ],{
        A:'#dr2:lantern_fuel',
        B:'#forge:rods/wooden'
    }).id('dr2:decor/torch');

    event.shaped('2x minecraft:redstone_torch', [
        'A ',
        'B ',
        'C '
    ],{
        A:'#forge:tiny_dusts/redstone',
        B:'#dr2:lantern_fuel',
        C:'#forge:rods/wooden'
    }).id('dr2:decor/redstone_torch');

    event.shaped('6x minecraft:redstone_torch', [
        'A ',
        'BB ',
        'CC '
    ],{
        A:'#forge:dusts/redstone',
        B:'#dr2:lantern_fuel',
        C:'#forge:rods/wooden'
    }).id('dr2:decor/redstone_torch_alt');
    //#endregion

    //#region decor miniblocks
    event.shaped('supplementaries:goblet', [
        ' A ',
        'BCD',
        'EFE'
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:tools/wire_cutters',
        C:'#forge:plates/wrought_iron',
        D:'#forge:tools/files',
        E:'#forge:rings/wrought_iron',
        F:'#forge:bolts/wrought_iron'
    }).id('dr2:decor/goblet');

    event.shaped('supplementaries:hat_stand', [
        ' A ',
        'BCD',
        'EFE'
    ],{
        A:'#minecraft:planks',
        B:'#forge:tools/saws',
        C:'#forge:bolts/wood',
        D:'#forge:tools/files',
        E:'#forge:plates/wrought_iron',
        F:'minecraft:stone_pressure_plate'
    }).id('dr2:decor/hat_stand');

    event.shaped('2x minecraft:stone_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'
    ],{
        A:'#forge:screws/wrought_iron',
        B:'#forge:tools/hammers',
        C:'minecraft:stone_slab',
        D:'#forge:springs/copper',
        E:'#forge:tools/screwdrivers'
    }).id('dr2:decor/stone_pressure_plate');

    
    //#endregion
};