const InfAbyssSecondLayer = event =>{
//#region sulfur
event.add("kubejs:sulfur_inf2", vein => {
        vein.weight(32)
        vein.clusterSize(23) 
        vein.density(0.6) 
        vein.discardChanceOnAirExposure(1)

        vein.layer("second_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.SulfurDioxide).size(1, 1))
    ))
    })
//#endregion
//#region saltpeter
event.add("kubejs:saltpeter_inf2", vein => {
        vein.weight(32)
        vein.clusterSize(23) 
        vein.density(0.9) 
        vein.discardChanceOnAirExposure(1)

        vein.layer("second_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Borax).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.BasalticMineralSand).size(1, 1))
    ))
    })
//#endregion
//#region titanium
event.add("kubejs:ilmenite_inf2", vein => {
        vein.weight(32)
        vein.clusterSize(23) 
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(1)

        vein.layer("second_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Garnierite).size(1, 1))
    ))
    })
//#endregion
//#region grossulars tantal
event.add("kubejs:tantalite_inf2", vein => {
        vein.weight(32)
        vein.clusterSize(23) 
        vein.density(0.7) 
        vein.discardChanceOnAirExposure(1)

        vein.layer("second_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(2, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(1, 1))
    ))
    })
//#endregion
//#region tungsteen
event.add("kubejs:tungsteen_inf2", vein => {
        vein.weight(15)
        vein.clusterSize(23) 
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(1)

        vein.layer("second_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(2, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 1))
    ))
    })
}