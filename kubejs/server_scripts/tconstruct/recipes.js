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
        //--
        
    //#endregion
}