const ColdSweetRecipesRegistry = (event) => {
    //#rehion consts
    //#endregion

    //#region recipes func blocks
    event.shaped('cold_sweat:sewing_table', [
        'ABB',
        'CDE',
        'FFF'
    ],{
        A:'#minecraft:wool_carpets',
        B:'kubejs:tinned_leather',
        C:'#forge:tools/hammers',
        D:'#forge:plates/wrought_iron',
        E:'#forge:tools/files',
        F:'#minecraft:planks'
    }).id('dr2:cold_sweat/sewing_table');

    event.shaped('cold_sweat:boiler', [
        'ABC',
        'BDB',
        'EEE'
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:plates/wrought_iron',
        C:'#forge:tools/files',
        D:'minecraft:furnace',
        E:'minecraft:cobbled_deepslate'
    }).id('dr2:cold_sweat/boiler');

    event.shaped('cold_sweat:hearth', [
        'ABC',
        'DAD',
        'EFE'
    ],{
        A:'#forge:plates/wrought_iron',
        B:'#forge:tools/hammers',
        C:'cold_sweat:smokestack',
        D:'tfmg:fireproof_brick',
        E:'tfmg:fireproof_bricks',
        F:'#minecraft:soul_fire_base_blocks'
    }).id('dr2:cold_sweat/hearth');

    event.shaped('6x cold_sweat:smokestack', [
        'ABA',
        'A A',
        'ACA'
    ],{
        A:'#forge:cobblestone',
        B:'#forge:tools/files',
        C:'#forge:tools/hammers'
    }).id('dr2:cold_sweat/msokestack');

    event.shaped('cold_sweat:thermolith', [
        'ABB',
        'ACB',
        'DEF'
    ],{
        A:'cold_sweat:chameleon_molt',
        B:'#forge:plates/copper',
        C:'#forge:tools/files',
        D:'#forge:tools/hammers',
        E:'#minecraft:terracotta',
        F:'#forge:tools/crowbars'
    }).id('dr2:cold_sweat/thermolith');
    //#endregion

    //#region func items

    event.shaped('cold_sweat:thermometer', [
        'ABB',
        'CDC',
        'EFG'
    ],{
        A:'#forge:tools/screwdrivers',
        B:'#forge:dusts/redstone',
        C:'#forge:screws/brass',
        D:'#forge:plates/gold',
        E:'#forge:tools/files',
        F:'#forge:glass_panes/colorless',
        G:'#forge:tools/mallets'
    }).id('dr2:cold_sweat/thermometer');

    event.shaped(Item.of('cold_sweat:soulspring_lamp', '{Fuel:64.0d}'), [
        'ABC',
        'DED',
        'F F'
    ],{
        A:'#forge:tools/screwdrivers',
        B:'#forge:plates/gold',
        C:'#forge:plates/steel',
        E:'minecraft:heart_of_the_sea',
        D:'#forge:screws/steel',
        F:'minecraft:chain'
    }).id('dr2:cold_sweat/soulspring_lamp');
    //#endregion

}