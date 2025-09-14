const AdAstraMars = event =>{
//#region iron ore
    event.add('kubejs:iron_mars', vein =>{
        vein.weight(20)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)

        vein.layer('ad_astra_mars')

        vein.heightRangeTriangle(-10, 100)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Hematite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
    ))
    })
//#endregion
//#region diamond ore
    event.add('kubejs:diamond_mars', vein =>{
        vein.weight(14)
        vein.clusterSize(32)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(1)
        
        vein.layer('ad_astra_mars')

        vein.heightRangeTriangle(-60, -20)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(4).mat(GTMaterials.Coal).size(3, 4))
        .layer(l => l.weight(3).mat(GTMaterials.Graphene).size(2, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Diamond).size(2, 3))
    ))
    })
//#endregion
//#region ostrum&iridium ore
    event.add('kubejs:ostrum_mars', vein =>{
        vein.weight(12)
        vein.clusterSize(20)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(1)
        
        vein.layer('ad_astra_mars')

        vein.heightRangeUniform(-60, 0)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(5).mat(GTMaterials.get('ostrum')).size(3, 5))
        .layer(l => l.weight(3).mat(GTMaterials.GarnetRed).size(1, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Iridium).size(0, 1))
    ))
    })


}