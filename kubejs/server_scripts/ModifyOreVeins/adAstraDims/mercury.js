const AdAstraMercury = event =>{
//#region gold&silver ore
    event.add('kubejs:gold_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Gold).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Electrum).size(1, 1))
    ))
    })

    event.add('kubejs:magnetite_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Gold).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Osmium).size(1, 1))
    ))
    })
//#endregion
//#region iron ores
    event.add('kubejs:iron_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
    ))
    })

    event.add('kubejs:magnetic_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Cobaltite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Garnierite).size(1, 1))
    ))
    })

    event.add('kubejs:oxides_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.YellowLimonite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 1))
    ))
    })
//#endregion
//#region cinnabar&redstone
    event.add('kubejs:cinnabar_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Cinnabar).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
    ))
    })

    event.add('kubejs:redstone_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Cinnabar).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
    ))
    })
//#endregion
//#region uran
    event.add('kubejs:radioactive_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(1, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Pitchblende).size(1, 1))
    ))
    })

    event.add('kubejs:radioactive1_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Thorium).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Bornite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 1))
    ))
    })
//#endregion
//#region heavy metals
    event.add('kubejs:lead_mercury', vein =>{
        vein.weight(23)
        vein.clusterSize(32)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)

        vein.layer('ad_astra_mercury')

        vein.heightRangeUniform(-60, 120)

        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Lead).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Galena).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Osmium).size(1, 1))
    ))
    })
}