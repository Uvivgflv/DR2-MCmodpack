//priority 200
const DRPRecipesEvent = (event) => {
    

    //#region vanilla changes
    event.shaped('minecraft:clay', [
        'A  ',
        'BB ',
        'BB '
    ],{
        A:'#gtceu:tools/crafting_hammers',
        B:'minecraft:clay_ball'
    }).id('drp:clay_block_from_clay_ball');

    event.shaped('2x minecraft:clay', [
        'BBB',
        'BAB',
        'BBB'
    ],{
        A:'#gtceu:tools/crafting_hammers',
        B:'minecraft:clay_ball'
    }).id('drp:clay_block_from_clay_ball_multi');

    event.shaped('minecraft:anvil', [
        'AAA',
        'BCD',
        'EEE'
    ],{
        A:'#forge:storage_blocks/steel',
        B:'#gtceu:tools/crafting_files',
        C:'#forge:rods/long/steel',
        D:'#gtceu:tools/crafting_hammers',
        E:'#forge:ingots/steel'
    }).id('drp:anvil_from_steel')

    //#endregion

    //#region 0 tier recipes

    event.shaped('gtceu:flint_saw', [
        'AA',
        'BA'
    ],{
        A:'#forge:rods/wood',
        B:'#forge:gems/flint'
    }).id('drp:tools/flint_saw');
    //#endregion
};
