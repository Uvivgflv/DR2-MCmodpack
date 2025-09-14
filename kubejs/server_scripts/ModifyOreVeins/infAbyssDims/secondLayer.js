const InfAbyssSecondLayer = event =>{
//#region sulfur
event.add("kubejs:sulfur_inf2", vein => {
        vein.weight(22)
        vein.clusterSize(23) 
        vein.density(0.4) 
        vein.discardChanceOnAirExposure(1)

        vein.layer("first_layer_inf")

        vein.heightRangeUniform(5, 120)

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
    ))
    })
//#endregion
//#region saltpeter

//#endregion
//#region titanium
}