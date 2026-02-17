const RegisterOreBlocksGT = (event) => {
  event
    .create("depthrock", "ore")
    .stateSupplier(() =>
      Block.getBlock("undergarden:depthrock").defaultBlockState(),
    ) //
    .baseModelLocation("undergarden:block/depthrock")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  console.log("undergarden stone type registered ");

  event
    .create("dacite", "ore")
    .stateSupplier(() =>
      Block.getBlock("biomeswevegone:dacite").defaultBlockState(),
    )
    .baseModelLocation("biomeswevegone:block/dacite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  console.log("dacite stone type registered ");
  event
    .create("deepstone", "ore")
    .stateSupplier(() =>
      Block.getBlock("infinite_abyss:deepstone").defaultBlockState(),
    )
    .baseModelLocation("infinite_abyss:block/deepstone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  event
    .create("red_deepstone", "ore")
    .stateSupplier(() =>
      Block.getBlock("infinite_abyss:red_deepstone").defaultBlockState(),
    )
    .baseModelLocation("infinite_abyss:block/red_deepstone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  event
    .create("moon_stone", "ore")
    .stateSupplier(() =>
      Block.getBlock("ad_astra:moon_stone").defaultBlockState(),
    )
    .baseModelLocation("ad_astra:block/moon_stone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  event
    .create("mars_stone", "ore")
    .stateSupplier(() =>
      Block.getBlock("ad_astra:mars_stone").defaultBlockState(),
    )
    .baseModelLocation("ad_astra:block/mars_stone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  event
    .create("venus_stone", "ore")
    .stateSupplier(() =>
      Block.getBlock("ad_astra:venus_stone").defaultBlockState(),
    )
    .baseModelLocation("ad_astra:block/venus_stone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  event
    .create("mercury_stone", "ore")
    .stateSupplier(() =>
      Block.getBlock("ad_astra:mercury_stone").defaultBlockState(),
    )
    .baseModelLocation("ad_astra:block/mercury_stone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);

  event
    .create("nightstone", "ore")
    .stateSupplier(() =>
      Block.getBlock("midnight:nightstone").defaultBlockState(),
    )
    .baseModelLocation("midnight:block/nightstone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
};

