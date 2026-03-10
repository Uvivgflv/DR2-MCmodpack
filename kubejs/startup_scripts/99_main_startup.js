
Platform.mods.kubejs.name = "Dark Realms 2";

StartupEvents.registry("item", (event) => {
  RegisterAllCustomItems(event);
});

StartupEvents.registry("block", (event) => {
  RegisterAllCustomBlocks(event);
});

BlockEvents.modification((event) => {
  RegisterBlockModify(event);
})

ItemEvents.modification((event) => {
  ArmorModify(event);
  ToolsModify(event);             //edit in v1.3.5 patch 2
});

WorldgenEvents.remove((event) => {
  RemoveOres(event);

  console.log("Ores remove from generation levels");
});

GTCEuStartupEvents.materialModification((event) => {
  //v0.1.14092025 0:25
  //крашит из-за отсутствия материалов крафта (слитков)
  //GTCEuMatMod(event)
  GTToolsCreation(event);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
  GTCEUMultiblockMachinesRegistry(event);
});

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  //v0.1.03102025
  GTCEuMaterialRegistry(event);
});

GTCEuStartupEvents.registry("gtceu:tag_prefix", (event) => {
  RegisterOreBlocksGT(event);
  //registerUnearthedStoneTypes(event)
});
