const AdAstraVenus = event => {
//#region coal ore
    event.add('kubejs:coal_venus', vein =>{
        vein.weight(20)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)

        vein.layer('ad_astra_venus')

        vein.heightRangeUniform(0, 100)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Coal).size(3, 5))
        .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(1, 2))
    ))
    })
//#endregion
//#region calorite ore
    event.add('kubejs:calorite_venus', vein =>{
        vein.weight(20)
        vein.clusterSize(24)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_venus')

        vein.heightRangeUniform(-20, 30)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Realgar).size(2, 5))
        .layer(l => l.weight(2).mat(GTMaterials.get('calorite')).size(2, 4))
        .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Redstone).size(1, 3))
    ))
    })
//#endregion
//#region sulfuric ores
    event.add('kubejs:sulfur_venus', vein =>{
        vein.weight(20)
        vein.clusterSize(24)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_venus')

        vein.heightRangeUniform(-20, 30)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 5))
        .layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 1))
    ))
    })

    event.add('kubejs:pyrochlore', vein =>{
        vein.weight(20)
        vein.clusterSize(23)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_venus')

        vein.heightRangeUniform(20, 100)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Pyrochlore).size(2, 5))
        .layer(l => l.weight(3).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.FullersEarth).size(1, 1))
    ))
    })

//#endregion
//#region titan ores

}