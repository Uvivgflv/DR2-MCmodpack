const UndeadsMobDrops = (event) => {
  //проверить какие именно спавнятся в мире
  var Undeads = [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:husk",
    "minecraft:drowned",
    "twilightforest:skeleton_druid",
    "savage_and_ravage:skeleton_villager",
    "underground_jungle:mossy_skeleton",
    "luminous_monsters:miner_skeleton",
    "luminous_monsters:glacial_skeleton",
    "luminous_monsters:swamp_skeleton",
    "luminous_monsters:dark_oak_skeleton",
    "luminous_monsters:savanna_skeleton",
    "luminous_monsters:cherry_skeleton",
    //'luminousworld:miner_skeleton',
    //'luminousworld:glacial_skeleton',
    //'luminousworld:swamp_skeleton',
    //'luminousworld:dark_oak_skeleton',
    //'luminousworld:savanna_skeleton',
    //'luminousworld:cherry_skeleton',
    "luminous_monsters:miner_zombie",
    "luminous_monsters:glacial_zombie",
    "luminous_monsters:swamp_zombie",
    "luminous_monsters:dark_oak_zombie",
    "luminous_monsters:savanna_zombie",
    "luminous_monsters:cherry_zombie",
    //'luminousworld:miner_zombie',
    //'luminousworld:glacial_zombie',
    //'luminousworld:swamp_zombie',
    //'luminousworld:dark_oak_zombie',
    //'luminousworld:savanna_zombie',
    //'luminousworld:cherry_zombie',
    "luminousworld:auburn_zombie",
    "luminous_depths:sculky_zombie",
    "glowroot:glowrooted_zombie",
  ];

  function DoUndeadDropLowLvl(event) {
    Undeads.forEach((element) => {
      event
        .addEntityLootModifier(element)
        .killedByPlayer()
        .customCondition({
          condition: "autoleveling:level_check",
          min: 5,
          max: 10,
        })
        .randomChance(0.12)
        .addLoot("gtceu:undemetall_nugget");
    });
  }
  DoUndeadDropLowLvl(event);

  function DoUndeadDropMidLvl(event) {
    Undeads.forEach((element) => {
      event
        .addEntityLootModifier(element)
        .killedByPlayer()
        .customCondition({
          condition: "autoleveling:level_check",
          min: 11,
          max: 20,
        })
        .randomChance(0.12)
        .addLoot("kubejs:undemetall_shard");
    });
  }
  DoUndeadDropMidLvl(event);

  function DoUndeadDropHighLvl(event) {
    Undeads.forEach((element) => {
      event
        .addEntityLootModifier(element)
        .killedByPlayer()
        .customCondition({
          condition: "autoleveling:level_check",
          min: 21,
          max: 35,
        })
        .randomChance(0.12)
        .addLoot("kubejs:undemetall_chunk");
    });
  }
  DoUndeadDropHighLvl(event);
};
