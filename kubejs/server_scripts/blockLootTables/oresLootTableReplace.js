const BlockLootTableReplace = (event) => {
  //malum quartz ore drop small quartz dust depend on fortune
  //
  var malum_quartz = ["malum:deepslate_quartz_ore", "malum:natural_quartz_ore"];
  event
    .addBlockLootModifier(malum_quartz)
    .replaceLoot("malum:natural_quartz", "gtceu:small_quartzite_dust", true);

  function regoliteRemoveLoot(event) {
    Ingredient.of("#dr2:regolite").stacks.forEach((element) => {
      const itemId = element.id;
      event.addBlockLootModifier(itemId).removeLoot("unearthed:regolith");
    });
  }

  // regoliteRemoveLoot(event)
};
//replaced with datapack
function regoliteLootTableReplace(event) {
  Ingredient.of("#dr2:regolite").stacks.forEach((element) => {
    const itemId = element.id;
    event.addBlockLootModifier(itemId).removeLoot("unearthed:regolith");
    event.addBlockLootModifier(itemId).addLoot(itemId);
  });
}

function grassRegoliteLootTableReplace(event) {
  Ingredient.of("#dr2:grass_regolite").stacks.forEach((element) => {
    const itemId = element.id;
    const nonGrassId = itemId.replace("_grassy", "");
    event.addBlockLootModifier(itemId).removeLoot("unearthed:regolith");
    event.addBlockLootModifier(itemId).addLoot(nonGrassId);
  });
}
