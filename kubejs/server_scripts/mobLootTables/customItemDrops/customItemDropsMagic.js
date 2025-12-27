const MagicMobDrops = (event) => {
  //добавить мобов магических да...
  var Magics = ["minecraft:enderman"];

  function DoMagicsDropLowLvl(event) {
    Magics.forEach((element) => {
      event
        .addEntityLootModifier(element)
        .killedByPlayer()
        .customCondition({
          condition: "autoleveling:level_check",
          min: 5,
          max: 10,
        })
        .randomChance(0.08)
        .addLoot("gtceu:enchanted_metall_nugget");
    });
  }
  DoMagicsDropLowLvl(event);

  function DoMagicsDropMidLvl(event) {
    Magics.forEach((element) => {
      event
        .addEntityLootModifier(element)
        .killedByPlayer()
        .customCondition({
          condition: "autoleveling:level_check",
          min: 11,
          max: 20,
        })
        .randomChance(0.08)
        .addLoot("kubejs:enchanted_metall_shard");
    });
  }
  DoMagicsDropMidLvl(event);

  function DoMagicsDropHighLvl(event) {
    Magics.forEach((element) => {
      event
        .addEntityLootModifier(element)
        .killedByPlayer()
        .customCondition({
          condition: "autoleveling:level_check",
          min: 21,
          max: 35,
        })
        .randomChance(0.08)
        .addLoot("kubejs:enchanted_metall_chunk");
    });
  }
  DoMagicsDropHighLvl(event);
};
