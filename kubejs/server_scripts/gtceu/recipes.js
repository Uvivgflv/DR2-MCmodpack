const RegistryTGCEURecipes = event =>{
    //#region remove recipes
        event.remove({id:'gtceu:shaped/casing_coke_bricks'})
        event.remove({id:'gtceu:shaped/coke_oven'})
        event.remove({id:'gtceu:smelting/coke_oven_brick'})
        event.remove({id:'gtceu:compressor/coke_bricks'})
        event.remove({id:'gtceu:shaped/casing_primitive_bricks'})
        event.remove({id:'gtceu:shaped/bronze_primitive_blast_furnace'})
        event.remove({id:'gtceu:shaped/casing_bronze_bricks'})
        event.remove({id:'gtceu:shaped/steel_bricks_hull'})
        //--
        event.remove({id:'gtceu:shaped/steam_miner_bronze'})
        event.remove({id:'gtceu:shaped/steam_boiler_coal_bronze'})
        event.remove({id:'gtceu:shaped/steam_compressor_bronze'})
        event.remove({id:'gtceu:shaped/steam_boiler_lava_bronze'})
        event.remove({id:'gtceu:shaped/steam_boiler_solar_bronze'})
        event.remove({id:'gtceu:shaped/steam_extractor_bronze'})
        event.remove({id:'gtceu:shaped/steam_macerator_bronze'})
        event.remove({id:'gtceu:shaped/steam_hammer_bronze'})
        event.remove({id:'gtceu:shaped/steam_furnace_bronze'})
        event.remove({id:'gtceu:shaped/steam_alloy_smelter_bronze'})
        event.remove({id:'gtceu:shaped/steam_rock_breaker_bronze'})
        //--
        event.remove({id:'gtceu:shaped/steel_hull'})
        event.remove({id:'gtceu:shaped/steam_boiler_coal_steel'})
        event.remove({id:'gtceu:shaped/steam_boiler_lava_steel'})
        event.remove({id:'gtceu:shaped/steam_boiler_solar_steel'})
        event.remove({id:'gtceu:shaped/steam_extractor_steel'})
        event.remove({id:'gtceu:shaped/steam_macerator_steel'})
        event.remove({id:'gtceu:shaped/steam_compressor_steel'})
        event.remove({id:'gtceu:shaped/steam_hammer_steel'})
        event.remove({id:'gtceu:shaped/steam_furnace_steel'})
        event.remove({id:'gtceu:shaped/steam_alloy_smelter_steel'})
        event.remove({id:'gtceu:shaped/steam_rock_breaker_steel'})
        event.remove({id:'gtceu:shaped/steam_miner_steel'})



    //#endregion

    //#region add recipes
        event.shaped('kubejs:unfired_coke_bricks',[
            'AA',
            'AA'
        ],{
            A:'gtceu:compressed_coke_clay'
        }).id('cct:coke_oven/shaped/unfired_coke_bricks')

        event.shaped('gtceu:firebricks',[
            'ABA',
            'BAB',
            'ABA'
        ],{
            A:'tfmg:fireproof_brick',
            B:'gtceu:firebrick'
        }).id('cct:primitive_blast_furnace/shaped/firebricks')
    //#endregion 
    //#region add bronze steam machine recipes
        event.shaped('gtceu:lp_steam_solid_boiler',[
            'ABA',
            'BCB',
            'DED'
        ],{
            A:'#forge:bolts/iron',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:bronze"}').strongNBT(),
            C:'#forge:tools/wrench',
            D:'kubejs:lead_molded_bricks',
            E:'gtceu:steam_machine_casing'
        }).id('cct:gt/steam/bronze/coal_boiler')

        event.shaped('gtceu:lp_steam_compressor',[
            'ABA',
            'CDC',
            'EEE'
        ],{
            A:Item.of('tconstruct:large_plate', '{Material:"tconstruct:bronze"}').strongNBT(),
            B:'gtceu:bronze_small_fluid_pipe',
            C:'create:mechanical_piston',
            D:'gtceu:steam_machine_casing',
            E:'kubejs:lead_molded_bricks'
        }).id('cct:gt/steam/bronze/compressor')

    //#endregion
    //#region steel steam machine
        event.shaped('gtceu:steel_machine_casing',[
            'ABA',
            'BCB',
            'ABA'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'#forge:tools/hammers'
        }).id('cct:gt/steam/steel/steel_machine_casing')

        event.shaped('gtceu:hp_steam_solid_boiler',[
            'ABA',
            'BCB',
            'DED'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'#forge:tools/wrench',
            D:'gtceu:steel_brick_casing',
            E:'minecraft:blast_furnace'
        }).id('cct:gt/steam/steel/hp_steam_solid_bioler')

        event.shaped('gtceu:hp_steam_liquid_boiler',[
            'ABA',
            'BCB',
            'DED'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'#forge:tools/wrench',
            D:'gtceu:steel_brick_casing',
            E:'tconstruct:scorched_fuel_tank'
        }).id('cct:gt/steam/steel/hp_steam_liquid_bioler')

        event.shaped('gtceu:hp_steam_extractor',[
            'ABA',
            'CDC',
            'EFE'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'gtceu:tin_alloy_small_fluid_pipe',
            D:'#forge:tools/wrench',
            E:'gtceu:steel_machine_casing',
            F:'gtceu:steel_brick_casing'
        }).id('cct:gt/steam/steel/hp_steam_extractor')

        event.shaped('gtceu:hp_steam_macerator',[
            'ABA',
            'CDC',
            'EFE'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'#forge:gems/diamond',
            D:'#forge:tools/wrench',
            E:'gtceu:steel_machine_casing',
            F:'gtceu:steel_brick_casing'
        }).id('cct:gt/steam/steel/hp_steam_macerator')

        event.shaped('gtceu:hp_steam_compressor',[
            'ABA',
            'CDC',
            'EFE'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'create:mechanical_piston',
            D:'#forge:tools/wrench',
            E:'gtceu:steel_machine_casing',
            F:'gtceu:steel_brick_casing'
        }).id('cct:gt/steam/steel/hp_steam_compressor')

        event.shaped('gtceu:hp_steam_forge_hammer',[
            'ABA',
            'CDC',
            'EFE'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'minecraft:anvil',
            D:'#forge:tools/wrench',
            E:'gtceu:steel_machine_casing',
            F:'gtceu:steel_brick_casing'
        }).id('cct:gt/steam/steel/hp_steam_forge_hammer')

        event.shaped('gtceu:hp_steam_furnace',[
            'ABA',
            'CDC',
            'EFE'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'minecraft:furnace',
            D:'#forge:tools/wrench',
            E:'gtceu:steel_machine_casing',
            F:'gtceu:steel_brick_casing'
        }).id('cct:gt/steam/steel/hp_steam_furnace')

        event.shaped('gtceu:hp_steam_alloy_smelter',[
            'ABA',
            'CDG',
            'EFE'
        ],{
            A:'#forge:plates/steel',
            B:Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}').strongNBT(),
            C:'minecraft:blast_furnace',
            D:'#forge:tools/wrench',
            E:'gtceu:steel_machine_casing',
            F:'gtceu:steel_brick_casing',
            G:'tconstruct:scorched_fuel_tank'
        }).id('cct:gt/steam/steel/hp_steam_alloy_smelter')
    //#endregion
}