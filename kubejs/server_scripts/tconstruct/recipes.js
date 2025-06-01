const RegistryTconstructResipes = event => {
    //#region remove recipes misc
        event.remove({id:'tconstruct:tables/modifier_worktable'})
        event.remove({id:'tconstruct:tables/tinkers_chest'})
        event.remove({id:'tconstruct:tables/part_chest'})
        event.remove({id:'tconstruct:tables/cast_chest'})
        event.remove({id:'tconstruct:tables/tinkers_forge'})
        event.remove({id:'tconstruct:tables/tinkers_anvil'})
        event.remove({id:'tconstruct:tools/building/flint_and_brick'})
    //#endregion

    //#region remove smeltery recipes
        event.remove({id:'tconstruct:smeltery/seared/grout'})
        event.remove({id:'tconstruct:smeltery/seared/grout_multiple'})
        event.remove({id:'tconstruct:smeltery/scorched/nether_grout'})
        event.remove({id:'tconstruct:smeltery/scorched/nether_grout_multiple'})
        event.remove({id:'quark:tweaks/crafting/slab_to_block'})
        event.remove({id:'tconstruct:smeltery/seared/seared_bricks_crafting'})
        event.remove({id:'tconstruct:smeltery/seared/seared_bricks_from_bricks'})
        event.remove({id:'tconstruct:smeltery/seared/seared_brick_kiln'})
        event.remove({id:'tconstruct:smeltery/seared/seared_brick'})
        event.remove({id:'tconstruct:smeltery/seared/melter'})
        event.remove({id:'tconstruct:smeltery/seared/heater'})
        event.remove({id:'tconstruct:smeltery/seared/basin'})
        event.remove({id:'tconstruct:smeltery/seared/table'})
        event.remove({id:'tconstruct:smeltery/seared/drain'})
        event.remove({id:'tconstruct:smeltery/seared/drain_retextured'})
        event.remove({id:'tconstruct:smeltery/seared/duct'})
        event.remove({id:'tconstruct:smeltery/seared/duct_retextured'})
        event.remove({id:'tconstruct:smeltery/seared/chute'})
        event.remove({id:'tconstruct:smeltery/seared/chute_retextured'})
        event.remove({id:'tconstruct:smeltery/seared/ingot_tank'})
        event.remove({id:'tconstruct:smeltery/seared/fuel_tank'})
        event.remove({id:'tconstruct:smeltery/seared/seared_glass'})
        event.remove({id:'tconstruct:smeltery/casting/seared/smeltery_controller'})
        //--
        
    //#endregion

    //#region add smeltery recipes
        event.shaped('2x tconstruct:grout',[
            'ABC',
            'DEF',
            'CBA'
        ],{
            A:'#minecraft:sand',
            B:'kubejs:ash_compound',
            C:'#forge:gravel',
            D:'tfmg:fireclay_ball',
            E:'minecraft:clay',
            F:'#forge:dusts/brick'
        }).id('cct:smeltery/grout')

        event.smelting('tconstruct:seared_brick','tconstruct:grout').xp(0.5).cookingTime(800).id('cct:smeltery/smelting/seared_brick')
        
        // event.shaped('tconstruct:seared_bricks',[
        //     'AA',
        //     'AA'
        // ],{A:'tconstruct:seared_brick'}).id('cct:smeltery/seared_bricks')


        
        event.shaped('tconstruct:seared_melter',[
            'AAA',
            'BCB',
            'DAD'
        ],{
            A:'tconstruct:seared_glass',
            B:'tconstruct:seared_bricks',
            C:'#forge:tools/hammers',
            D:'tfmg:fireproof_bricks'
        }).id('cct:smeltery/seared_melter')

        event.shaped('tconstruct:seared_heater',[
            'ABA',
            'BCB',
            'ABA'
        ],{
            A:'tconstruct:seared_bricks',
            B:'tfmg:fireproof_bricks',
            C:'#forge:tools/hammers'
        }).id('cct:smeltery/seared_heater')

        event.shaped('tconstruct:seared_basin',[
            'ABA',
            'CDC',
            'CAC'
        ],{
            A:'tfmg:fireproof_bricks',
            B:'#forge:tools/files',
            C:'tconstruct:seared_bricks',
            D:'#forge:tools/hammers'
        }).id('cct:smeltery/seared_basin')

        event.shaped('tconstruct:seared_table',[
            'ABA',
            'BCB',
            'ADA'
        ],{
            A:'tconstruct:seared_bricks',
            B:'tfmg:fireproof_bricks',
            C:'#forge:tools/hammers',
            D:'#forge:tools/files'
        }).id('cct:smeltery/seared_table')

        event.shaped('tconstruct:seared_drain',[
            'ABA',
            'CDC',
            'AEA'
        ],{
            A:'#forge:screws/copper',
            B:'tfmg:fireproof_bricks',
            C:'#forge:plates/copper',
            D:'#forge:tools/hammers',
            E:'tconstruct:seared_bricks'
        }).id('cct:smeltery/seared_drain')

        event.shaped('tconstruct:seared_duct',[
            'ABA',
            'CDC',
            'AEA'
        ],{
            C:'#forge:screws/gold',
            B:'tfmg:fireproof_bricks',
            A:'#forge:plates/gold',
            D:'#forge:tools/hammers',
            E:'tconstruct:seared_bricks'
        }).id('cct:smeltery/seared_duct')

        event.shaped('tconstruct:seared_chute', [
            'ABA',
            'CDE',
            'ABA'
        ],{
            A:'#forge:screws/copper',
            B:'#forge:plates/copper',
            C:'tconstruct:seared_bricks',
            D:'#forge:tools/hammers',
            E:'tfmg:fireproof_bricks'
        }).id('cct:smeltery/seared_chute')

        event.shaped('tconstruct:seared_ingot_tank',[
            'ABA',
            'CBC',
            'ABA'
        ],{
            A:'tconstruct:seared_bricks',
            B:'tconstruct:seared_glass',
            C:'tfmg:fireproof_bricks'
        }).id('cct:smeltery/seared_ingot_tank')

        event.shaped('tconstruct:seared_fuel_tank',[
            'ABA',
            'BCB',
            'ABA'
        ],{
            A:'tconstruct:seared_bricks',
            B:'tfmg:fireproof_bricks',
            C:'tconstruct:seared_glass'
        }).id('cct:smeltery/seared_fuel_tank')

        event.shaped('tconstruct:seared_glass',[
            'ABA',
            'CDC',
            'ABA'
        ],{
            A:'#forge:plates/iron',
            B:'tconstruct:seared_bricks',
            C:'tfmg:fireproof_bricks',
            D:'#forge:glass'
        }).id('cct:smeltery/seared_glass')
    //#endregion
}