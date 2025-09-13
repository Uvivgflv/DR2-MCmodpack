GTCEuServerEvents.oreVeins(event => {
    /* Надо доработать эту идею возможно добавить тэги к этим биомам #cct:copper_ore_biomes
    var copper_biomes = 
    [
        'minecraft:taiga',
        'minecraft:grove',
        'minecraft:meadow',
        'minecraft:old_growth_pine_taiga',
        'biomesoplenty:forested_field',
        'biomesoplenty:field'
    ]

    var iron_biomes =
    [
        'biomeswevegone:dacite_ridges',
        'biomesoplenty:highlands',
        'biomesoplenty:crag',
        'minecraft:forest',
        'minecraft:plains',
        'minecraft:stony_shore'
    ]

    var coal_biomes =
    [
        'biomesoplenty:highlands',
        'biomesoplenty:crag',
        'biomesoplenty:forested_field',
        'biomesoplenty:field',
        'biomesoplenty:coniferous_forest'        
    ]
    */
    event.add("kubejs:add_copper", vein => {
        // Basic vein generation properties
        vein.weight(9) // [*] 
        vein.clusterSize(12) // [*] 
        vein.density(0.6) // [*] 
        vein.discardChanceOnAirExposure(1)
        //vein.biomes('minecraft:stony_shore') 
        //vein.biomes(['minecraft:savanna', 'biomesoplenty:scrubland'])

        vein.layer("overworld") // [*] 

        vein.heightRangeUniform(0, 100) // 
        //vein.heightRangeTriangle(-32, 5) // 

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Copper).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 1))
    ))
    })
    event.add('kubejs:add_iron', vein => {
        vein.weight(5)
        vein.clusterSize(10)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(0)
        

        vein.layer('overworld')

        vein.heightRangeTriangle(0, 65)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Goethite).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.YellowLimonite).size(3, 5))
                .layer(l =>l.weight(3).mat(GTMaterials.Hematite).size(3, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 1))
            )
        )

    })
    event.add('kubejs:add_tin', vein => {
        vein.weight(5)
        vein.clusterSize(10)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(0)

        vein.layer('overworld')

        vein.heightRangeUniform(30, 150)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Tin).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Cassiterite).size(3, 5))
            )
        )

    })
    event.add('kubejs:add_iron_biomes', vein => {
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        //vein.biomes('#minecraft:iron_spawn_biomes')

        vein.layer('dacite_biomes')

        vein.heightRangeUniform(65, 250)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Goethite).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.YellowLimonite).size(3, 5))
                .layer(l =>l.weight(3).mat(GTMaterials.Hematite).size(3, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 1))
            )
        )
    })
    event.add('kubejs:add_copper_biomes', vein => {
        vein.weight(20)
        vein.clusterSize(22)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)

        vein.layer('overworld')

        vein.heightRangeTriangle(75, 200)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Copper).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 1))
    ))
    })
    event.add('kubejs:add_coal_biomes', vein => {
        vein.weight(20)
        vein.clusterSize(12)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
       // vein.biomes('#minecraft:coal_spawn_biomes')

        vein.layer('overworld')

        vein.heightRangeTriangle(75, 200)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Coal).size(4, 4))
        .layer(l => l.weight(1).mat(GTMaterials.Graphite).size(1, 1))
    ))
    })
})