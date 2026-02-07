const FarmersDelightRecipesRegistry = (event) => {
    //#region consts
    let cabinetCraftingIron = (output, input, input1) => {
    event.shaped(output, [
      'ABC',
      'DED',
      'CBC'
    ],{
        A: '#forge:tools/screwdrivers',
        B: '#forge:screws/iron',
        C: input,
        D: input1,
        E: '#forge:tools/saws',
      }).id(`dr2:farmersdeligth/cabinet/${output.split(':')[1]}_iron`);
    };

    let cabinetCraftingWroughtIron = (output, input, input1) => {
    event.shaped(output, [
      'ABC',
      'DED',
      'CBC'
    ],{
        A: '#forge:tools/screwdrivers',
        B: '#forge:screws/wrought_iron',
        C: input,
        D: input1,
        E: '#forge:tools/saws',
      }).id(`dr2:farmersdeligth/cabinet/${output.split(':')[1]}_wrought_iron`);
    };

    const woodType = [
        {trapdoor: 'minecraft:oak_trapdoor', slab: 'minecraft:oak_slab', cabinet: 'farmersdelight:oak_cabinet'},
        {trapdoor: 'minecraft:spruce_trapdoor', slab: 'minecraft:spruce_slab', cabinet: 'farmersdelight:spruce_cabinet'},
        {trapdoor: 'minecraft:birch_trapdoor', slab: 'minecraft:birch_slab', cabinet: 'farmersdelight:birch_cabinet'},
        {trapdoor: 'minecraft:jungle_trapdoor', slab: 'minecraft:jungle_slab', cabinet: 'farmersdelight:jungle_cabinet'},
        {trapdoor: 'minecraft:acacia_trapdoor', slab: 'minecraft:acacia_slab', cabinet: 'farmersdelight:acacia_cabinet'},
        {trapdoor: 'minecraft:cherry_trapdoor', slab: 'minecraft:cherry_slab', cabinet: 'farmersdelight:cherry_cabinet'},
        {trapdoor: 'minecraft:dark_oak_trapdoor', slab: 'minecraft:dark_oak_slab', cabinet: 'farmersdelight:dark_oak_cabinet'},
        {trapdoor: 'minecraft:mangrove_trapdoor', slab: 'minecraft:mangrove_slab', cabinet: 'farmersdelight:mangrove_cabinet'},
        {trapdoor: 'minecraft:bamboo_trapdoor', slab: 'minecraft:bamboo_slab', cabinet: 'farmersdelight:bamboo_cabinet'}, 
        {trapdoor: 'minecraft:crimson_trapdoor', slab: 'minecraft:crimson_slab', cabinet: 'farmersdelight:crimson_cabinet'},
        {trapdoor: 'minecraft:warped_trapdoor', slab: 'minecraft:warped_slab', cabinet: 'farmersdelight:warped_cabinet'}
    ]
    //#endregion
    //#region add recipe func blocks
    event.shaped('farmersdelight:cooking_pot', [
        'A A',
        'BCB',
        'DBE'
    ],{
        A:'#forge:rods/treated_wood',
        B:'#forge:plates/bronze',
        C:'minecraft:bucket',
        D:'#forge:tools/files',
        E:'#forge:tools/hammers'
    }).id('dr2:farmersdelight/cooking_pot_from_bronze');

    event.shaped('farmersdelight:cooking_pot', [
        'A A',
        'BCB',
        'DBE'
    ],{
        A:'#forge:rods/treated_wood',
        B:'#forge:plates/wrought_iron',
        C:'minecraft:bucket',
        D:'#forge:tools/files',
        E:'#forge:tools/hammers'
    }).id('dr2:farmersdelight/cooking_pot_from_wrought_iron');

    event.shaped('farmersdelight:stove', [
        'ABA',
        'CDC',
        'EFG'
    ],{
        A:'#forge:plates/bronze',
        B:'#forge:ingots/bronze',
        C:'minecraft:bricks',
        D:'minecraft:campfire',
        E:'#forge:tools/mallets',
        F:'#forge:tools/files',
        G:'#forge:tools/hammers'
    }).id('dr2:farmersdeligth/stove_from_bronze');

    event.shaped('farmersdelight:stove', [
        'ABA',
        'CDC',
        'EFG'
    ],{
        A:'#forge:plates/wrought_iron',
        B:'#forge:ingots/wrought_iron',
        C:'minecraft:bricks',
        D:'minecraft:campfire',
        E:'#forge:tools/mallets',
        F:'#forge:tools/files',
        G:'#forge:tools/hammers'
    }).id('dr2:farmersdeligth/stove_from_wrought_iron');

    event.shaped(Item.of('farmersdelight:skillet', '{Damage:0}'), [
        'DAA',
        'CAA',
        'BCE'
    ],{
        A:'#forge:plates/bronze',
        B:'#forge:rods/treated_wood',
        C:'#forge:screws',
        D:'#forge:tools/screwdrivers',
        E:'#forge:tools/files'
    }).id('dr2:farmersdelight/skillet_from_bronze');

    event.shaped(Item.of('farmersdelight:skillet', '{Damage:0}'), [
        'DAA',
        'CAA',
        'BCE'
    ],{
        A:'#forge:plates/wrought_iron',
        B:'#forge:rods/treated_wood',
        C:'#forge:screws',
        D:'#forge:tools/screwdrivers',
        E:'#forge:tools/files'
    }).id('dr2:farmersdelight/skillet_from_wrought_iron');
    //#endregion
    
    //#region containers
    woodType.forEach(element => {
        const output_id = element.cabinet;
        const input_trapdoor = element.trapdoor;
        const input_slab = element.slab;
        cabinetCraftingIron(output_id, input_slab, input_trapdoor);
        cabinetCraftingWroughtIron(output_id, input_slab, input_trapdoor);
    })

    //#endregion
}