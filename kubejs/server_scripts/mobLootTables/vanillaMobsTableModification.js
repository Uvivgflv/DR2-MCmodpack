const ModifyVanillaMobLootTable = event =>{
    //#region creeper 1-15 level
    event.addEntityLootModifier('minecraft:creeper').pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 20
        })
        .addLoot('kubejs:catalyst')
    })

    event.addEntityLootModifier("minecraft:creeper").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.09)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 10,
            max: 15
        })
        .addLoot("kubejs:inert_dust")
    })
    //#endregion 
    //#region zombies 1-15 level
    event.addEntityLootModifier('minecraft:zombie').pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.1)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 10
        })
        .addLoot('kubejs:forgotter_mechanism_fragment')
    })

    event.addEntityLootModifier('minecraft:zombie_villager')
    .pool((pool)=>{
        pool.rolls([1, 3])
        pool.randomChance(0.03)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 10
        })
        .addLoot('kubejs:snus')
    })

    event.addEntityLootModifier('minecraft:zombie_villager')
    .pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 10
        })
        .addLoot('kubejs:forgotter_mechanism_fragment')
    })

    event.addEntityLootModifier('minecraft:zombified_piglin')
    .pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.1)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 10
        })
        .addLoot('kubejs:forgotter_mechanism_fragment')
    })
    //#endregion
    //#region skeletons 1-15 level
    event.addEntityLootModifier('minecraft:wither_skeleton')
    .pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.1)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 10
        })
        .addLoot('kubejs:forgotten_mechanism_core')
    })
    //#endregion
    //#region endermans 1-15 level
    
    //#endregion
    
}