GTCEuServerEvents.oreVeins(event => {
    
   event.add("kubejs:undgr_lead_vein", vein => {
        vein.weight(18)
        vein.clusterSize(12)
        vein.density(1.0)
        vein.discardChanceOnAirExposure(1) 

        // Define where the vein can generate
        vein.layer("undergarden")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(0, 120) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(1).mat(GTMaterials.Silver).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Lead).size(3, 4))
        .layer(l => l.weight(1).block(() => Block.getBlock('undergarden:depthrock_cloggrum_ore')).size(1, 1))
    ))
    })

    event.add("kubejs:undgr_bauxit_vein", vein => {
        vein.weight(10)
        vein.clusterSize(14)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(1) 

        // Define where the vein can generate
        vein.layer("undergarden")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(0, 65) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Pollucite).size(1, 2))
        .layer(l => l.weight(4).mat(GTMaterials.Mica).size(2, 2))
        .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 2))
        .layer(l => l.weight(1).block(() => Block.getBlock('undergarden:depthrock_regalium_ore')).size(1, 1))
    ))
    })

    event.add("kubejs:undgr_realgar_vein", vein => {
        vein.weight(6)
        vein.clusterSize(12)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(1) 

        // Define where the vein can generate
        vein.layer("undergarden")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(0, 120) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Zeolite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Realgar).size(1, 2))
        .layer(l => l.weight(4).mat(GTMaterials.Copper).size(2, 2))
        .layer(l => l.weight(3).block(() => Block.getBlock('undergarden:depthrock_utherium_ore')).size(2, 3))
    ))
    })

    event.add("kubejs:undgr_salt_vein", vein => {
        vein.weight(18)
        vein.clusterSize(15)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(1) 

        // Define where the vein can generate
        vein.layer("undergarden")

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(0, 120) // 
        //vein.heightRangeTriangle(-32, 5) // 

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(4).mat(GTMaterials.Salt).size(1, 3))
        .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(1, 2))
        .layer(l => l.weight(3).mat(GTMaterials.Spodumene).size(2, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
    ))
    })
})