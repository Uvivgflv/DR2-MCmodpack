GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((veinId, vein) => {
        vein.surfaceIndicatorGenerator(indicator => indicator
            .block(Block.getBlock("minecraft:air")) // (1)
            .placement("above")
            .density(0.4) // Unsure if this matters
            .radius(5) // Unsure if this matters
        )
    })
})