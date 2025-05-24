LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:zombie").pool((pool)=>{
        pool.rolls([0, 1])
        pool.randomChance(0.01)
        pool.customCondition({
            condition: "autoleveling:level_check",
            min: 10,
            max: 15
        })
        .addLoot("minecraft:diamond")
    })
})