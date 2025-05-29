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

    //#endregion
}