//priority 0
//#region constants
let mode = global.config_common?.balance_mode ?? 1;
let loot = global.config_common?.modules?.[0]?.loot ?? false;
let gt_ores = global.config_common?.modules?.[0]?.gt_ores ?? false;
let unify_alloys = global.config_common?.modules?.[0]?.unify_alloys ?? false;
//#endregion
ServerEvents.highPriorityData((event) => {
  if (unify_alloys) {
    TconstructDataRegistry(event);
  }
});

ServerEvents.lowPriorityData((event) => {
  IronsSpellbooksDataRecipes(event);
});

ServerEvents.tags("item", (event) => {
  DR2TweaksTagsItems(event);
  RegisterCreateTags(event);
  RegisterMalumTags(event);
  RegistryInfAbyssTagsItems(event);
  RegistryAdAstraItemTags(event);
  RegisterTFMGItemTags(event);
  RegisterGTCEUToCreateCompatTags(event);

  console.log("Register DR2 custom itemTags");
});

ServerEvents.tags("block", (event) => {
  RegisterBotaniaTagsBlock(event);
  RegisterGTTagsBlocks(event);
  DR2TweaksTagsBlocks(event);

  console.log("Register DR2 custom blockTags");
});

if (gt_ores) {
  GTCEuServerEvents.oreVeins((event) => {
    AdAstraMoon(event);
    AdAstraMars(event);
    AdAstraVenus(event);
    AdAstraMercury(event);
    InfAbyssFirstLayer(event);
    InfAbyssSecondLayer(event);
    TwilightforestOreVeins(event);
    UndergardenOreVeins(event);
    //OverworldOreVeins(event);
    TheMidnightOreVeins(event);

    console.log("Register GTCEU custom oreVeins");
  });

  GTCEuServerEvents.fluidVeins((event) => {
    //BedrokFluidOverworld(event);
    BedrokFluidUndergarden(event);
    BedrokFluidFirstLayer(event);

    console.log("Register GTCEU custom fluidVeins");
  });
}

if (
  Platform.isLoaded("lootjs") &&
  Platform.isLoaded("luminous_monsters") &&
  Platform.isLoaded("luminousworld") &&
  Platform.isLoaded("luminous_depths")
) {
  if (loot) {
    LootJS.modifiers((event) => {
      SkeletonsDropsCloth(event);
      ModifyVanillaMobLootTable(event);
      //grassRegoliteLootTableReplace(event);
      BlockLootTableReplace(event);
      UndeadsMobDrops(event);
      MagicMobDrops(event);
      GlobalLootTablesRegistry(event);

      console.log("Register DR2 custom loottables");
    });
  } else {
    // LootJS есть, но отключен в конфиге
    ServerEvents.loaded((event) => {
      event.server.tell(Text.yellow("[DR2] Loot система отключена в конфиге"));
    });
  }
} else {
  // LootJS отсутствует
  ServerEvents.loaded((event) => {
    event.server.tell(
      Text.red("[DR2] LootJS мод и дополнительные моды не установлены!"),
    );
  });
}
//#region recipes
ServerEvents.recipes((event) => {
  if (mode < 0 || mode > 3) {
    console.warn(`[DR2] Некорректный режим ${mode}, устанавливаю 1`);
    mode = 1;
  }
  switch (mode) {
    case 0:
      break;
    case 1:
      RemoveRecipesByMods(event); //REMOVE RECIPES USING GLOBAL CONSTS

      ProgressModuleRecipesRegistry(event); //progress tweak v1.2a
      RegisterDecorModule(event); //decor module v1.0a

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
      RegisterGTCEUComponentsRecipes(event); //created v1.0a
      RegisterBotaniaRecipes(event); //change v0.4.0
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
      RegistryBMRecipes(event); //change v0.4.0
      RegistrySeqAssembleGTPartsRecipes(event);
      RegisterApothCreateTicCompat(event);
      RegisterMalumRecipes(event);
      RegistryInfAbyssRecipes(event);
      RegistryAdAstraRecipes(event);
      //?RegistrySeqAssemblyTFMGRecipes(event); REWRITE
      RegistryMechCrafterTFMGRecipes(event);
      registerMechanicalPressPlatesRecipes(event);
      RegistrySeqAssemblyCreateRecipes(event);
      //?RegisterMechanicalCrafterRecipes(event);   REWRITE
      GTCEUMachineCraftingRegistry(event);
      RegisterApotheosisInfusionResipes(event);
      RegistryIronsSpellbooksRecipes(event);
      RegistryWayStoneRecipes(event);
      RegisterPetalApothecaryRecipes(event); //created v0.4.0
      //RegisterAE2Recipes(event)                              //use magic materials
      //RegisterTwilightforestRecipes(event)                   //twilightKey recipes from Hefest forge
      //RegisterBloodMagicRecipes                              //progress into magic mods malum -> bloodmagic -> f&a ->

      console.log("Register [DR2] custom recipes for mode 1");
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      console.log(`Режим ${mode} не распознан, использую нормальный`);
      break;
  }
});
//#endregion
