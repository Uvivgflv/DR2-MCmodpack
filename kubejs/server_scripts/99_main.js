// priority: 0
// Все в верстаке сложнее верстака делать с инструментами из gtceu

ServerEvents.highPriorityData((event) => {
  TconstructDataRegistry(event);
  //GTConstructDataRegistry(event);
});

ServerEvents.lowPriorityData((event) => {
  IronsSpellbooksDataRecipes(event);
});

ServerEvents.tags("item", (event) => {
  RegisterItemsTagsMain(event);
  RegisterCreateTags(event);
  RegisterMalumTags(event);
  RegistryInfAbyssTagsItems(event);
  RegistryAdAstraItemTags(event);
  RegisterTFMGItemTags(event);
  RegisterGTCEUToCreateCompatTags(event);
  //RegisterForbiddenArcanusItemTags(event);
  
  console.log("Register DR2 custom itemTags");
});
ServerEvents.tags("block", (event) => {
  RegisterBotaniaTagsBlock(event);
  RegisterGTTagsBlocks(event);
  RegisterBlocksTagsMain(event);
  RegisterRealisticStepsBlockTags(event);

  console.log("Register DR2 custom blockTags");
});

GTCEuServerEvents.oreVeins((event) => {
  AdAstraMoon(event);
  AdAstraMars(event);
  AdAstraVenus(event);
  AdAstraMercury(event);
  InfAbyssFirstLayer(event);
  InfAbyssSecondLayer(event);
  TwilightforestOreVeins(event);
  UndergardenOreVeins(event);
  OverworldOreVeins(event);
  TheMidnightOreVeins(event);

  console.log("Register GTCEU custom oreVeins");
});
GTCEuServerEvents.fluidVeins((event) => {
  BedrokFluidOverworld(event);                              //created v1.0a
  BedrokFluidUndergarden(event);                            //created v1.0a
  BedrokFluidFirstLayer(event);                             //created v1.0a

  console.log("Register GTCEU custom fluidVeins");
});
LootJS.modifiers((event) => {
  SkeletonsDropsCloth(event);
  ModifyVanillaMobLootTable(event);
  grassRegoliteLootTableReplace(event);
  BlockLootTableReplace(event);
  UndeadsMobDrops(event);
  MagicMobDrops(event);
  GlobalLootTablesRegistry(event);

  console.log("Register DR2 custom loottables");
});
/**
 * functions lower letter
 * исполнение после тэгов и датапаков
 */
ServerEvents.recipes((event) => {
  RemoveRecipesByMods(event);                           //REMOVE RECIPES USING GLOBAL CONSTS

  ProgressModuleRecipesRegistry(event);                 //progress tweak v1.2a
  RegisterDecorModule(event);                           //decor module v1.0a

  RegistryTweaksRecipes(event);
  RegisterVanillaRecipes(event);
  CustomOreProcessing(event);
  RegisterTFMGRecipes(event);
  DR2RecipesRegistry(event);
  //--FarmersDelight
  FarmersDelightRecipesRegistry(event);
  //--ColdSweat
  ColdSweetRecipesRegistry(event);
  //--Tconstruct
  TconstructResipesRegistry(event);
  TconstructMeltingRecipesRegistry(event);
  TconstructTweaksRegistry(event);
  TconstructSmelteryCompatRegister(event);
  //--Ae2
  AE2RecipesRegister(event);
  //--GTCEU
  GTCEUecipesRegistry(event);
  RegisterGTCEUComponentsRecipes(event);                  //created v1.0a
  RegisterBotaniaRecipes(event);                          //change v0.4.0
  //--sophisticated
  SophisBackpacksRecipesRegistry(event);
  SophiStorageRecipesRegistry(event);
  //--alekiships
  AlekisShipsRecipesRegistry(event);

  RegisterCreateRecipes(event);
  RegisterApothRecipes(event);
  RegisterCreateCompatRecipes(event);
  RegisterCBSRecipes(event);
  RegistryCreateGTMCrafterRecipes(event);
  RegistryBMRecipes(event);                               //change v0.4.0
  RegistrySeqAssembleGTPartsRecipes(event);
  RegisterApothCreateTicCompat(event);
  RegisterMalumRecipes(event);
  RegistryInfAbyssRecipes(event);
  RegistryAdAstraRecipes(event);
  //!RegisterIERecipes(event);       DELETE                       //moved to 00_constants.js
  //?RegistrySeqAssemblyTFMGRecipes(event); REWRITE
  RegistryMechCrafterTFMGRecipes(event);
  registerMechanicalPressPlatesRecipes(event);
  RegistrySeqAssemblyCreateRecipes(event);
  //?RegisterMechanicalCrafterRecipes(event);   REWRITE
  GTCEUMachineCraftingRegistry(event);
  RegisterApotheosisInfusionResipes(event);
  RegistryIronsSpellbooksRecipes(event);
  RegistryWayStoneRecipes(event);
  //!RegisterIEAlloysmelterRecipes(event);     DELETE               //created v0.4.0
  RegisterPetalApothecaryRecipes(event);                   //created v0.4.0
  //RegisterAE2Recipes(event)                              //use magic materials
  //RegisterTwilightforestRecipes(event)                   //twilightKey recipes from Hefest forge
  //RegisterBloodMagicRecipes                              //progress into magic mods malum -> bloodmagic -> f&a ->

  console.log("Register DR2 custom recipes");
});
