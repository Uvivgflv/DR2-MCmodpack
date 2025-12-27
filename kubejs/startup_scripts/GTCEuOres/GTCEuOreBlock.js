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

  // event.create('grimstone', 'ore')
  //     .stateSupplier(() => Block.getBlock('deep_dark_regtowth:grimstone').defaultBlockState()) //
  //     .baseModelLocation('deep_dark_regrowth:block/grimstone')
  //     .unificationEnabled(true)
  //     .materialIconType(GTMaterialIconType.ore)
  //     .generationCondition(ItemGenerationCondition.hasOreProperty)
  // console.log('deep dark regrowth stone type registered ')

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
    .create("root", "ore")
    .stateSupplier(() =>
      Block.getBlock("twilightforest:root").defaultBlockState(),
    )
    .baseModelLocation("twilightforest:block/root")
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
  //#region unearhed

  event
    .create("phyllite", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:phyllite").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/phyllite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("slate", "ore")
    .baseModelLocation("unearthed:block/slate")
    .stateSupplier(() => Block.getBlock("unearthed:slate").defaultBlockState())
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("gabbro", "ore")
    .stateSupplier(() => Block.getBlock("unearthed:gabbro").defaultBlockState())
    .baseModelLocation("unearthed:block/gabbro")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("gabbro_regolith", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:gabbro_regolith").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/gabbro_regolith")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("granodiorite", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:granodiorite").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/granodiorite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("granodiorite_regolith", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:granodiorite_regolith").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/granodiorite_regolith")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("rhyolite", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:rhyolite").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/rhyolite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("white_granite", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:white_granite").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/white_granite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("limestone", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:limestone").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/limestone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("beige_limestone", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:beige_limestone").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/beige_limestone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("grey_limestone", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:grey_limestone").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/grey_limestone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("siltstone", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:siltstone").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/siltstone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("mudstone", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:mudstone").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/mudstone")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("conglomerate", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:conglomerate").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/conglomerate")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("quartzite", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:quartzite").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/quartzite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("dolerite", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:dolerite").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/dolerite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("pillow_basalt", "ore")
    .stateSupplier(() =>
      Block.getBlock("unearthed:pillow_basalt").defaultBlockState(),
    )
    .baseModelLocation("unearthed:block/pillow_basalt")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  event
    .create("daciteun", "ore")
    .stateSupplier(() => Block.getBlock("unearthed:dacite").defaultBlockState())
    .baseModelLocation("unearthed:block/dacite")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
  // event.create('twilight', 'ore')
  //     .stateSupplier(() => Block.getBlock('twilightforest:twilight_oak_wood').defaultBlockState())
  //     .baseModelLocation('twilightforest:block/twilight_oak_wood')
  //     .unificationEnabled(true)
  //     .materialIconType(GTMaterialIconType.ore)
  //     .generationCondition(ItemGenerationCondition.hasOreProperty)
  //#endregion
};

function registerUnearthedStoneTypes(event) {
  Ingredient.of("#dr2:unearthed_stones").stacks.forEach((elemet) => {
    const itemId = elemet.id;

    event
      .create(itemId.replace("unearthed:", ""), "ore")
      .stateSupplier(() => Block.getBlock(itemId).defaultBlockState())
      .baseModelLocation("unearthed:block/" + itemId.replace("unearthed:", ""))
      .unificationEnabled(true)
      .materialIconType(GTMaterialIconType.ore)
      .generationCondition(ItemGenerationCondition.hasOreProperty);
  });
}
