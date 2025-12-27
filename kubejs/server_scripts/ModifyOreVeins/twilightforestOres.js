const TwilightforestOreVeins = (event) => {
  event.add("kubejs:cthonic_vein", (vein) => {
    vein.weight(32);
    vein.clusterSize(20);
    vein.density(0.4);
    vein.discardChanceOnAirExposure(1);

    vein.layer("twilight");

    vein.heightRangeUniform(-32, 5);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Silver).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
          .layer((l) =>
            l
              .weight(1)
              .block(() => Block.getBlock("malum:cthonic_gold_ore"))
              .size(1, 1),
          ),
      ),
    );
  });
  //replace soulstone to GTMaterial
  event.add("kubejs:soul_vein", (vein) => {
    vein.weight(17);
    vein.clusterSize(18);
    vein.density(0.25);
    vein.discardChanceOnAirExposure(0);

    vein.layer("twilight");

    vein.heightRangeUniform(-32, 5);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Cobalt).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
          .layer((l) =>
            l
              .weight(1)
              .block(() => Block.getBlock("malum:soulstone_ore"))
              .size(1, 1),
          ),
      ),
    );
  });
  //replace arcane crystal to GTMaterial
  event.add("kubejs:exp_vein", (vein) => {
    vein.weight(3);
    vein.clusterSize(18);
    vein.density(0.2);
    vein.discardChanceOnAirExposure(0);

    vein.layer("twilight");

    vein.heightRangeUniform(-32, 5);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(4).mat(GTMaterials.Emerald).size(2, 4))
          .layer((l) => l.weight(3).mat(GTMaterials.GreenSapphire).size(1, 1))
          .layer((l) =>
            l
              .weight(2)
              .block(() => Block.getBlock("malum:brilliant_stone"))
              .size(1, 1),
          )
          .layer((l) =>
            l
              .weight(1)
              .block(() => Block.getBlock("forbidden_arcanus:xpetrified_ore"))
              .size(1, 1),
          ),
      ),
    );
  });

  event.add("kubejs:exp1_vein", (vein) => {
    vein.weight(3);
    vein.clusterSize(18);
    vein.density(0.2);
    vein.discardChanceOnAirExposure(0);

    vein.layer("twilight");

    vein.heightRangeUniform(-12, 12);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(4).mat(GTMaterials.Emerald).size(2, 4))
          .layer((l) => l.weight(3).mat(GTMaterials.GreenSapphire).size(1, 1))
          .layer((l) =>
            l
              .weight(2)
              .block(() => Block.getBlock("malum:brilliant_stone"))
              .size(1, 1),
          ),
      ),
    );
  });

  event.add("kubejs:rune_vein", (vein) => {
    vein.weight(15);
    vein.clusterSize(20);
    vein.density(0.3);
    vein.discardChanceOnAirExposure(0);

    vein.layer("twilight");

    vein.heightRangeUniform(-12, 12);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(4).mat(GTMaterials.Opal).size(2, 4))
          .layer((l) =>
            l
              .weight(3)
              .block(() =>
                Block.getBlock("forbidden_arcanus:arcane_crystal_ore"),
              )
              .size(1, 1),
          )
          .layer((l) =>
            l
              .weight(2)
              .block(() => Block.getBlock("forbidden_arcanus:runic_stone"))
              .size(1, 1),
          ),
      ),
    );
  });

  event.add("kubejs:tw_lapis_vein", (vein) => {
    vein.weight(25);
    vein.clusterSize(23);
    vein.density(0.2);
    vein.discardChanceOnAirExposure(0);

    vein.layer("twilight");

    vein.heightRangeUniform(-32, 12);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(4).mat(GTMaterials.Sodalite).size(2, 4))
          .layer((l) => l.weight(3).mat(GTMaterials.Lazurite).size(1, 1))
          .layer((l) => l.weight(2).mat(GTMaterials.Lapis).size(1, 1))
          .layer((l) => l.weight(3).mat(GTMaterials.Calcite).size(2, 2)),
      ),
    );
  });

  event.add("kubejs:tw_saphire_vein", (vein) => {
    vein.weight(25);
    vein.clusterSize(23);
    vein.density(0.2);
    vein.discardChanceOnAirExposure(0);

    vein.layer("twilight");

    vein.heightRangeUniform(-32, 12);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(4).mat(GTMaterials.Sapphire).size(2, 4))
          .layer((l) => l.weight(3).mat(GTMaterials.Almandine).size(1, 1))
          .layer((l) => l.weight(2).mat(GTMaterials.Pyrope).size(1, 1))
          .layer((l) => l.weight(3).mat(GTMaterials.GreenSapphire).size(2, 2)),
      ),
    );
  });
};
