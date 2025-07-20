LootJS.modifiers((event) => {
    var chanse = 0.01
    event
        .addEntityLootModifier("twilightforest:towerwood_borer").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(chanse)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 1,
            max: 5
        }
        )
        .addLoot('kubejs:common_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:towerwood_borer").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(chanse)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 8
        }
        )
        .addLoot('kubejs:uncommon_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:towerwood_borer").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(chanse)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 8,
            max: 12
        }
        )
        .addLoot('kubejs:rare_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:towerwood_borer").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(chanse)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 12,
            max: 20
        }
        )
        .addLoot('kubejs:epic_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:towerwood_borer").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(chanse)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 20,
            max: 30
        }
        )
        .addLoot('kubejs:legendary_fragment')
    })
})