const InfAbyssFirstLayer = event =>{
//#region magnetite ore
    event.add("kubejs:magnetite_inf", vein => {
        vein.weight(22)
        vein.clusterSize(15) 
        vein.density(0.4) 
        vein.discardChanceOnAirExposure(0)

        vein.layer("first_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
    ))
    })
//#endregion
//#region hematite ore
    event.add("kubejs:hematite_inf", vein => {
        vein.weight(22)
        vein.clusterSize(15)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0) 

        vein.layer("first_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Hematite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 1))
    ))
    })
//#endregion
//#region pyrite ore
    event.add("kubejs:pyrite_inf", vein => {
        vein.weight(22)
        vein.clusterSize(15)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0) 

        vein.layer("first_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Pyrite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 1))
    ))
    })
//#region quartz ore
    event.add("kubejs:quartz_sand_inf", vein => {
        vein.weight(22)
        vein.clusterSize(15)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0) 

        vein.layer("first_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.GarnetRed).size(1, 1))
    ))
    })
    //second layer sulfur saltpeter 

}