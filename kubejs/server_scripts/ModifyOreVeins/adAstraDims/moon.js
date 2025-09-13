const AdAstraMoon = event =>{
//#region copper ore
    event.add('kubejs:copper_moon', vein =>{
        vein.weight(20)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)

        vein.layer('ad_astra_moon')

        vein.heightRangeTriangle(-10, 100)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Copper).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 1))
    ))
    })
//#endregion
//#region desh ore
    event.add('kubejs:desh_moon', vein =>{
        vein.weight(8)
        vein.clusterSize(12)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(0)

        vein.layer('ad_astra_moon')

        vein.heightRangeUniform(-60, 0)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pyrite).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(1, 2))
            ))
    })
//#endregion
//#region iron ore
    event.add('kubejs:iron_moon', vein =>{
        vein.weight(20)
        vein.clusterSize(32)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer('ad_astra_moon')

        vein.heightRangeTriangle(-60, 45)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(3, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 2))
            ))
    })

}