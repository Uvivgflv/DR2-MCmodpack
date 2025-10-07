const TheMidnightOreVeins = event =>{
    //#region native ores
    //#region rendium
    event.add('kubejs:midnight_rendium', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.59)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(20, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.get('rendium')).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Quartzite).size(3, 5))
                .layer(l =>l.weight(3).mat(GTMaterials.Sapphire).size(3, 3))
            )
        )
    })
    //#endregion
    //#region tenebrum ore
    event.add('kubejs:midnight_tenedrum', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(-50, 12)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.get('tenebrum')).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Magnesite).size(3, 5))
                .layer(l =>l.weight(3).mat(GTMaterials.Graphite).size(3, 3))
            )
        )
    })
    //#endregion
    //#region nagrelite
    event.add('kubejs:midnight_nagrelite', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(-60, 0)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.get('tenebrum')).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.get('nagrilite')).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Ilmenite).size(1, 1))
            )
        )
    })
    //#endregion
    //#region blazium
    event.add('kubejs:midnight_blazeium', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(-60, -12)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Grossular).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.get('blazeium')).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.get('relict')).size(1, 1))
            )
        )
    })
    //#endregion
    //#region night crystal
    event.add('kubejs:midnight_night_crystal', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(0, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.get('night_crystal')).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.get('rendium')).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
            )
        )
    })
    //#endregion
    //#region dark pearl
    event.add('kubejs:midnight_dark_pearl', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(0, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.get('dark_pearl')).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.get('ebonite')).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Opal).size(1, 1))
            )
        )
    })
    //#endregion
    //#endregion
    //#region basic ores
    //#region copper
    event.add('kubejs:midnight_copper', vein => {
        vein.weight(32)
        vein.clusterSize(8)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(32, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Malachite).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Chalcopyrite).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Copper).size(1, 1))
            )
        )
    })
    
    event.add('kubejs:midnight_copper_deep', vein => {
        vein.weight(32)
        vein.clusterSize(18)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(-50, 0)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Copper).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Chalcopyrite).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Malachite).size(1, 1))
            )
        )
    })
    //#endregion
    //#region iron
    event.add('kubejs:midnight_magnetite', vein => {
        vein.weight(32)
        vein.clusterSize(20)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(20, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Magnetite).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.VanadiumMagnetite).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Gold).size(1, 1))
            )
        )
    })

    event.add('kubejs:midnight_hematite', vein => {
        vein.weight(32)
        vein.clusterSize(12)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(0, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.YellowLimonite).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Hematite).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Iron).size(1, 1))
            )
        )
    })
    //#endregion
    //#region tin
    event.add('kubejs:midnight_casseteritte', vein => {
        vein.weight(32)
        vein.clusterSize(8)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)

        vein.layer('midnight')

        vein.heightRangeTriangle(50, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Cassiterite).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Chalcopyrite).size(3, 5))
            )
        )
    })
    //#endregion 
    //#region coal
    event.add('kubejs:midnight_coal', vein => {
        vein.weight(32)
        vein.clusterSize(20)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(1)

        vein.layer('midnight')

        vein.heightRangeTriangle(60, 120)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l =>l.weight(4).mat(GTMaterials.Coal).size(4, 5))
                .layer(l =>l.weight(4).mat(GTMaterials.Coal).size(3, 5))
                .layer(l =>l.weight(1).mat(GTMaterials.Graphite).size(1, 1))
            )
        )
    })

}