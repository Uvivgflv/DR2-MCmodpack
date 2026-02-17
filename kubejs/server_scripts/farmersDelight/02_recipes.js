const FarmersDelightRecipesRegistry = (event) => {
    //#region consts
    const woodType = global.VanillaWoodTypes;
    
    let cabinetCraftingIron = (output, input, input1) => {
    event.shaped(output, [
      'ABC',
      'DED',
      'CBC'
    ],{
        A: '#forge:tools/screwdrivers',
        B: '#dr2:decor_screws/iron',
        C: input,
        D: input1,
        E: '#forge:tools/saws',
      }).id(`dr2:farmersdeligth/cabinet/${output.split(':')[1]}_iron`);
    };

    let drawerCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_drawer`, [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A:'#dr2:decor_screws/iron',
            B:input,
            C:input1,
            D:'#forge:tools/saws',
            E:'#forge:tools/screwdrivers'
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_drawer_iron`);
    };

    let drawerWithDoorCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_drawer_with_door`, [
            'AAB',
            'BCD',
            'AAE'
        ],{
            A:input,
            B:'#dr2:decor_screws/iron',
            C:'#forge:tools/saws',
            D:input1,
            E:'#forge:tools/screwdrivers'
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_drawer_with_door_iron`);
    };

    let drawerWithBooksCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_drawer_with_books`, [
            'ABA',
            'CDC',
            'BEF'
        ],{
            A:'#dr2:decor_screws/iron',
            B:input,
            C:input1,
            D:'#forge:tools/saws',
            E:'#forge:bookshelves',
            F:'#forge:tools/screwdrivers'
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_drawer_with_books_iron`);
    };

    let drawerSmallCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:small_${output}_drawers`, [
            'AAB',
            'ACD',
            'BAE'
        ],{
            A:input,
            B:'#dr2:decor_screws/iron',
            C:input1,
            D:'#forge:tools/saws',
            E:'#forge:tools/screwdrivers'
        }).id(`dr2:farmersdelight/drawer/storagedelight_small_${output}_drawers_iron`);
    };

    let bookshelfWithDoorCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_bookshelf_with_door`, [
            'ABC',
            'DEF',
            'ABA'
        ],{
            A:'#dr2:decor_screws/iron',
            B:input,
            C:'#forge:tools/screwdrivers',
            D:input1,
            E:'#forge:tools/saws',
            F:'#forge:bookshelves'
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_bookshelf_with_door_iron`);
    };

    let glassCabinetCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:glass_${output}_cabinet`, [
            'ABC',
            'DEF',
            'ABA'
        ],{
            A:'#dr2:decor_screws/iron',
            B:input,
            C:'#forge:tools/screwdrivers',
            D:input1,
            E:'#forge:glass_panes/colorless',
            F:'#forge:tools/saws'
        }).id(`dr2:farmersdelight/drawer/storagedelight_glass_${output}_cabinet_iron`);
    };

    let cabinetWithGlassDoorsCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_cabinet_with_glass_doors`, [
            'ABC',
            'DED',
            'ABF'
        ],{
            A:'#dr2:decor_screws/iron',
            B:input,
            C:'#forge:tools/saws',
            D:'#forge:glass_panes/colorless',
            E:input1,
            F:'#forge:tools/screwdrivers'
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_cabinet_with_galss_doors_iron`);
    };

    let singleDoorCabinetCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_single_door_cabinet`, [
            'ABB',
            'CDC',
            'EBB'
        ],{
            A:'#forge:tools/saws',
            B:input,
            C:'#dr2:decor_screws/iron',
            D:input1,
            E:'#forge:tools/screwdrivers'
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_single_door_cabinet`);
    };

    let cabinetWithPolishedDeepslateCountertopCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_cabinet_with_polished_deepslate_countertop`, [
            'ABB',
            'CDE',
            'FGG'
        ],{
            A:'#forge:tools/files',
            B:'minecraft:polished_deepslate_slab',
            C:'#forge:tools/screwdrivers',
            D:'#dr2:decor_screws/iron',
            E:input1,
            F:'#forge:tools/saws',
            G:input
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_cabinet_with_polished_deepslate_countertop`);
    };

    let cabinetWithPolishedAndesiteCountertopCraftingIron = (output, input, input1) => {
        event.shaped(`storagedelight:${output}_cabinet_with_polished_andesite_countertop`, [
            'ABB',
            'CDE',
            'FGG'
        ],{
            A:'#forge:tools/files',
            B:'minecraft:polished_andesite_slab',
            C:'#forge:tools/screwdrivers',
            D:'#dr2:decor_screws/iron',
            E:input1,
            F:'#forge:tools/saws',
            G:input
        }).id(`dr2:farmersdelight/drawer/storagedelight_${output}_cabinet_with_polished_andesite_countertop`);
    }; 

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

    event.shaped('farmersdelight:cutting_board', [
        'C D',
        'ABB'
    ],{
        A:'#forge:rods/wooden',
        B:'#minecraft:wooden_slabs',
        C:'#forge:tools/knives',
        D:'#forge:tools/saws'
    }).id('dr2:farmersdelight/cutting_board');

    //#endregion
    
    //#region containers
    woodType.forEach(element => {
        const wood = element.name;
        const output_id = element.cabinet;
        const input_trapdoor = element.trapdoor;
        const input_slab = element.slab;
        cabinetCraftingIron(output_id, input_slab, input_trapdoor);
        drawerCraftingIron(wood, input_slab, input_trapdoor);
        drawerWithBooksCraftingIron(wood, input_slab, input_trapdoor);
        drawerWithDoorCraftingIron(wood, input_slab, input_trapdoor);
        drawerSmallCraftingIron(wood, input_slab, input_trapdoor);
        bookshelfWithDoorCraftingIron(wood, input_slab, input_trapdoor);
        glassCabinetCraftingIron(wood, input_slab, input_trapdoor);
        cabinetWithGlassDoorsCraftingIron(wood, input_slab, input_trapdoor);
        //cabinetWithGlassDoorsCraftingIron(wood, input_slab, input_trapdoor);
        singleDoorCabinetCraftingIron(wood, input_slab, input_trapdoor);
        cabinetWithPolishedDeepslateCountertopCraftingIron(wood, input_slab, input_trapdoor);
        cabinetWithPolishedAndesiteCountertopCraftingIron(wood, input_slab, input_trapdoor);
    });

    //#endregion
}