const InfAbyssFirstLayer = (event) => {
  //#region magnetite ore
  event.add("kubejs:magnetite_inf", (vein) => {
    vein.weight(22);
    vein.clusterSize(23);
    vein.density(0.4);
    vein.discardChanceOnAirExposure(1);

    vein.layer("first_layer_inf");

    vein.heightRangeUniform(5, 120);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Gold).size(1, 1)),
      ),
    );
  });
  //#endregion
  //#region hematite ore
  event.add("kubejs:hematite_inf", (vein) => {
    vein.weight(22);
    vein.clusterSize(22);
    vein.density(0.4);
    vein.discardChanceOnAirExposure(1);

    vein.layer("first_layer_inf");

    vein.heightRangeUniform(5, 120);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Hematite).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 1)),
      ),
    );
  });
  //#endregion
  //#region pyrite ore
  event.add("kubejs:pyrite_inf", (vein) => {
    vein.weight(22);
    vein.clusterSize(32);
    vein.density(0.4);
    vein.discardChanceOnAirExposure(1);

    vein.layer("first_layer_inf");

    vein.heightRangeUniform(5, 120);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Pyrite).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 1)),
      ),
    );
  });
  //#region quartz ore
  event.add("kubejs:quartz_sand_inf", (vein) => {
    vein.weight(22);
    vein.clusterSize(23);
    vein.density(0.4);
    vein.discardChanceOnAirExposure(1);

    vein.layer("first_layer_inf");

    vein.heightRangeUniform(5, 120);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.GarnetRed).size(1, 1)),
      ),
    );
  });
  //second layer sulfur saltpeter
  //#endregion

  //#region chtonic gold
  event.add("kubejs:chtonic_inf", (vein) => {
    vein.weight(8);
    vein.clusterSize(4);
    vein.density(0.33);
    vein.discardChanceOnAirExposure(1);

    vein.layer("first_layer_inf");

    vein.heightRangeUniform(5, 30);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Gold).size(2, 3))
          .layer((l) =>
            l
              .weight(2)
              .block(() => Block.getBlock("malum:cthonic_gold_ore"))
              .size(1, 1),
          ),
      ),
    );
  });
  //#endregion

  //#region magnetite ore plus veined
  event.add("kubejs:magnetite_inf_plus", (vein) => {
    vein.weight(23);
    vein.clusterSize(64);
    vein.density(1.0);
    vein.discardChanceOnAirExposure(1);

    vein.layer("first_layer_inf");

    vein.heightRangeUniform(5, 30);
    vein.veinedVeinGenerator((generator) =>
      generator
        .oreBlock(GTMaterials.Magnetite, 16)
        .rareBlock(GTMaterials.Iron, 10)
        .rareBlockChance(0.3)
        .veininessThreshold(0.1)
        .maxRichnessThreshold(0.3)
        .minRichness(0.3)
        .maxRichness(0.5)
        .edgeRoundoffBegin(10)
        .maxEdgeRoundoff(0.2)
    );
  });
};
