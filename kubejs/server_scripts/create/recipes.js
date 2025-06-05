const RegisterCreateRecipes = event =>{
    //#region remove recipes
        event.remove({id:'create:item_application/andesite_casing_from_log'})
        event.remove({id:'create:item_application/andesite_casing_from_wood'})
        event.remove({id:'create:item_application/brass_casing_from_wood'})
        event.remove({id:'create:item_application/brass_casing_from_log'})
        event.remove({id:'create:item_application/copper_casing_from_wood'})
        event.remove({id:'create:item_application/copper_casing_from_log'})
        //--
        event.remove({output:'create:cogwheel'})
        event.remove({output:'create:large_cogwheel'})
        event.remove({output:'create:shaft'})

    //#endregion

    //#region add casing recipes using other
    event.shaped('kubejs:brass_casing_parts',[
        'ABC',
        'BDB',
        'CBA'
    ],{
        A:'#forge:bolts/electrum',
        B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:rose_gold"}').strongNBT(),
        C:'#forge:double_plates/rose_gold',
        D:'#forge:tools/wrench'
    }).id('cct:create/casing_parts/brass')

    event.shaped('kubejs:iron_casing_parts',[
        'ABC',
        'BDB',
        'CBA'
    ],{
        A:'#forge:bolts/iron',
        B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}').strongNBT(),
        C:'#forge:rods/iron',
        D:'#forge:tools/wrench'
    }).id('cct:create/casing_parts/iron')

    event.custom({
        "type": "create:item_application",
            "ingredients": [
            {
            "tag": "minecraft:logs" 
            },
            {
            "item": "kubejs:iron_casing_parts"
            }],
        "results": [
            {
            "item": "create:andesite_casing"
            }]
        }).id('cct:item_application/andesite_casing')

    event.custom({
                "type": "create:item_application",
            "ingredients": [
            {
            "tag": "cct:brass_casing_wood_variant" 
            },
            {
            "item": "kubejs:brass_casing_parts"
            }],
        "results": [
            {
            "item": "create:brass_casing"
            }]
    }).id('cct:item_application/brass_casing')

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
                "tag": "forge:storage_blocks/copper"
                },
            "cast_consumed": true,
            "cooling_time": 500,
            "fluid": {
            "amount": 540,
            "tag": "tconstruct:molten_slimesteel"
            },
        "result": "create:copper_casing"
    }).id('cct:create/casting/copper_casing')
    //#endregion

    //#region kinetic recipes

    event.shaped('create:cogwheel',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'tconstruct:nahuatl',
        B:'create:shaft'
    }).id('cct:create/cogwheel')

    event.shaped('create:large_cogwheel',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'tconstruct:nahuatl',
        B:'create:cogwheel'
    }).id('cct:create/large_cogwheel')

    event.stonecutting('16x create:shaft', Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT()).id('cct:create/stonecutting/shafts')

    //#endrecipes
}