const AlekisShipsRecipesRegistry = (event) => {
    //#region Remove recipes 
    event.remove({mod: 'alekiships',
         not: {id: 'alekiships:crafting/oar'}});
    //#endregion

    //#region add recipes
    event.shaped('4x alekiships:watercraft_frame_angled', [
        'C  ',
        'AB ',
        'BA '
    ],{
        A:'#forge:bolts/wood',
        B:'minecraft:scaffolding',
        C:'#gtceu:tools/crafting_saws'
    }).id('dr2:alekiships/watercraft_frame');

    event.shaped('2x alekiships:watercraft_frame_flat', [
        ' A',
        'BC'
    ],{
        A:'#gtceu:tools/crafting_saws',
        B:'#forge:bolts/wood',
        C:'minecraft:scaffolding'
    }).id('dr2:alekiships/watercraft_frame_slab');

    event.shaped('alekiships:oarlock', [
        ' A ',
        'BC ',
        'DED'
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:tools/files',
        C:'#forge:rods/long/wrought_iron',
        D:'#forge:ingots/wrought_iron'
    }).id('dr2:alekiships/oarlock');

    event.shaped('alekiships:cleat', [
        ' A ',
        'BCB',
        'DED'
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:plates/wrought_iron',
        C:'#forge:ingots/wrought_iron',
        D:'#forge:rods/wrought_iron',
        E:'#forge:tools/files'
    }).id('dr2:alekiships/cleat');

    event.shaped('alekiships:anchor', [
        ' A ',
        'BCD',
        'EFE'
    ],{
        A:'#forge:tools/crowbars',
        B:'#forge:tools/hammers',
        C:'#forge:rods/long/wrought_iron',
        D:'#forge:tools/files',
        E:'#forge:plates/wrought_iron',
        F:'#dr2:anchor_iron_blocks'
    }).id('dr2:alekiships/anchor');
    //#endregion
}