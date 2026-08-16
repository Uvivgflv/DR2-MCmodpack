//priority 200

const second = global.SECOND;

const TConstructSearedRecipesEvents = (event) => {
    //-seared

    event.smelting('3x tconstruct:seared_brick', 'tconstruct:grout')
    .xp(0.2)
    .cookingTime(second*20)
    .id('drp:tconstruct/seared_brick_smelting');

    event.shapeless('2x tconstruct:grout', [
        '3x #forge:sand',
        'minecraft:clay',
        '3x #forge:gravel'
    ]).id('drp:tconstruct/grout_manual');

    event.shaped('2x tconstruct:seared_bricks', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'tconstruct:seared_brick',
        B:Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT()
    }).replaceIngredient('ceramicbucket:ceramic_bucket', 'ceramicbucket:ceramic_bucket')
    .id('drp:tconstruct/seared_bricks_manual/ceramic_bucket');

    event.shaped('2x tconstruct:seared_bricks', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'tconstruct:seared_brick',
        B:'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('drp:tconstruct/seared_bricks_manual/iron_bucket');

    event.shaped('tconstruct:seared_melter', [
        'A A',
        'BCB',
        'DED'
    ],{
        A:'supplementaries:ash_brick',
        B:'#tconstruct:seared_bricks',
        C:'tconstruct:seared_fuel_gauge',
        D:'minecraft:bricks',
        E:'tconstruct:seared_brick'
    }).id('drp:tconstruct/seared_melter');

    event.shaped('tconstruct:seared_heater', [
        'ABA',
        'B B',
        'ABA'
    ],{
        A:'#tconstruct:seared_bricks',
        B:'minecraft:bricks'
    }).id('drp:tconstruct/seared_heater');

    event.shaped('tconstruct:seared_drain', [
        '   ',
        'ABA',
        'CDC'
    ],{
        A:'#forge:plates/copper',
        B:'#forge:bolts/copper',
        C:'#tconstruct:seared_bricks',
        D:'#gtceu:tools/crafting_hammers'
    }).id('drp:tconstruct/seared_drain');

    event.shaped('tconstruct:seared_duct', [
        '   ',
        'ABA',
        'CDC'
    ],{
        A:'#forge:plates/gold',
        B:'#forge:bolts/gold',
        C:'#tconstruct:seared_bricks',
        D:'#gtceu:tools/crafting_hammers'
    }).id('drp:tconstruct/seared_duct');

    event.shaped('tconstruct:seared_chute', [
        'ABA',
        'CDC',
        '   '
    ],{
        A:'#tconstruct:seared_bricks',
        B:'#gtceu:tools/crafting_hammers',
        C:'#forge:plates/copper',
        D:'#forge:bolts/copper'
    }).id('drp:tconstruct/seared_chute');

    event.shaped('tconstruct:seared_fuel_tank', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'#tconstruct:seared_bricks',
        B:'minecraft:bricks',
        C:'#forge:glass/colorless'
    }).id('drp:tconstruct/seared_fuel_tank');

    event.shaped('3x tconstruct:seared_faucet', [
        'ABA',
        ' A ',
        '   '
    ],{
        A:'tconstruct:seared_brick',
        B:'#gtceu:tools/crafting_hammers'
    }).id('drp:tconstruct/seared_faucet');

    event.shaped('tconstruct:seared_basin', [
        'ABA',
        'CDC',
        'ACA'
    ],{
        A:'#tconstruct:seared_bricks',
        B:'#gtceu:tools/crafting_hammers',
        C:'minecraft:bricks',
        D:'minecraft:cauldron'
    }).id('drp:tconstruct/seared_basin');

    event.shaped('tconstruct:seared_table', [
        'ABA',
        'BCB',
        'ADA'
    ],{
        A:'#tconstruct:seared_bricks',
        B:'minecraft:bricks',
        C:'create:andesite_table_cloth',
        D:'#gtceu:tools/crafting_hammers'
    }).id('drp:tconstruct/seared_table');
};