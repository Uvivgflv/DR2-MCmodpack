const RegistryTGCEURecipes = event =>{
    //#region remove recipes
        event.remove({id:'gtceu:shaped/casing_coke_bricks'})
        event.remove({id:'gtceu:shaped/coke_oven'})
        event.remove({id:'gtceu:shaped/casing_primitive_bricks'})
        //--
        event.remove({id:'gtceu:shaped/steam_miner_bronze'})
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
}