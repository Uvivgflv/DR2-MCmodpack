const SkeletonsDropsCloth = (event) => {
    var skeletons = [
        "minecraft:skeleton",
        "twilightforest:skeleton_druid",
        "savage_and_ravage:skeleton_villager",
        "luminous_monsters:miner_skeleton",
        "luminous_monsters:glacial_skeleton",
        "luminous_monsters:swamp_skeleton",
        "luminous_monsters:dark_oak_skeleton",
        "luminous_monsters:savanna_skeleton",
        "luminous_monsters:cherry_skeleton"
    ];

    function doSkeletonsDropClothLowLvl(event) {
        skeletons.forEach((element) => {
            event
                .addEntityLootModifier(element)
                .killedByPlayer()
                .customCondition({
                    condition: "autoleveling:level_check",
                    min: 2,
                    max: 10,
                })
                .randomChance(0.12)
                .addLoot('kubejs:old_fabric');
        });
    };

    doSkeletonsDropClothLowLvl(event);
    
}