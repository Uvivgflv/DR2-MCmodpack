LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:carminite_broodling").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 1,
            max: 5
        }
        )
        .addLoot('kubejs:common_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:carminite_broodling").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 5,
            max: 8
        }
        )
        .addLoot('kubejs:uncommon_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:carminite_broodling").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 8,
            max: 12
        }
        )
        .addLoot('kubejs:rare_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:carminite_broodling").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 12,
            max: 20
        }
        )
        .addLoot('kubejs:epic_fragment')
    })

    event
        .addEntityLootModifier("twilightforest:carminite_broodling").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.05)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 20,
            max: 30
        }
        )
        .addLoot('kubejs:legendary_fragment')
    })
})