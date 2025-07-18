GTCEuServerEvents.oreVeins(event => {
    
    
    event.add("kubejs:cthonic_vein", vein => {
        // Basic vein generation properties
        vein.weight(10) // [*] 
        vein.clusterSize(10) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("twilight") // [*] 
        //vein.dimensions("twilightforest:twilightforest") // 
        //vein.biomes("twilightforest:oak_savannah")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-32, 5) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Silver).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
        .layer(l => l.weight(1).block(() => Block.getBlock('malum:cthonic_gold_ore')).size(1, 1))
    ))
    })

    event.add("kubejs:soul_vein", vein => {
        // Basic vein generation properties
        vein.weight(8) // [*] 
        vein.clusterSize(7) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("twilight") // [*] 
        //vein.dimensions("twilightforest:twilightforest") // 
        //vein.biomes("twilightforest:dense_forest")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-32, 5) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Cobalt).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
        .layer(l => l.weight(1).block(() => Block.getBlock('malum:soulstone_ore')).size(1, 1))
    ))
    })

    event.add("kubejs:exp_vein", vein => {
        // Basic vein generation properties
        vein.weight(3) // [*] 
        vein.clusterSize(8) // [*] 
        vein.density(0.2) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("twilight") // [*] 
        //vein.dimensions("twilightforest:twilightforest") // 
        //vein.biomes("twilightforest:dense_forest")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-32, 5) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(4).mat(GTMaterials.Emerald).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.GreenSapphire).size(1, 1))
        .layer(l => l.weight(2).block(() => Block.getBlock('malum:brilliant_stone')).size(1, 1))
        .layer(l => l.weight(1).block(() => Block.getBlock('forbidden_arcanus:xpetrified_ore')).size(1, 1))
    ))
    })

    event.add("kubejs:exp1_vein", vein => {
        // Basic vein generation properties
        vein.weight(3) // [*] 
        vein.clusterSize(8) // [*] 
        vein.density(0.2) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("twilight") // [*] 
        //vein.dimensions("twilightforest:twilightforest") // 
        //vein.biomes("twilightforest:dense_forest")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-12, 12) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(4).mat(GTMaterials.Emerald).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.GreenSapphire).size(1, 1))
        .layer(l => l.weight(2).block(() => Block.getBlock('malum:brilliant_stone')).size(1, 1))
    ))
    })

    event.add("kubejs:rune_vein", vein => {
        // Basic vein generation properties
        vein.weight(15) // [*] 
        vein.clusterSize(10) // [*] 
        vein.density(0.3) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("twilight") // [*] 
        //vein.dimensions("twilightforest:twilightforest") // 
        //vein.biomes("twilightforest:dense_forest")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-12, 12) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(4).mat(GTMaterials.Opal).size(2, 4))
        .layer(l => l.weight(3).block(() => Block.getBlock('forbidden_arcanus:arcane_crystal_ore')).size(1, 1))
        .layer(l => l.weight(2).block(() => Block.getBlock('forbidden_arcanus:runic_stone')).size(1, 1))
    ))
    })

    event.add("kubejs:tw_lapis_vein", vein => {
        // Basic vein generation properties
        vein.weight(19) // [*] 
        vein.clusterSize(10) // [*] 
        vein.density(0.7) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("twilight") // [*] 
        //vein.dimensions("twilightforest:twilightforest") // 
        //vein.biomes("twilightforest:dense_forest")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        //vein.heightRangeUniform(-12, 12) // 
        vein.heightRangeTriangle(-32, 12) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(4).mat(GTMaterials.Sodalite).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 1))
        .layer(l => l.weight(3).mat(GTMaterials.Calcite).size(2,2))
    ))
    })
})