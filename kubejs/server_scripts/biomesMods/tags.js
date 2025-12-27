const RegistryBWGandBOPItemTags = (event) => {
  //#region some missing tags
  event.add("minecraft:dirt", [
    "biomeswevegone:lush_dirt",
    "biomeswevegone:lush_grass_block",
  ]);

  //#endregion
};

const RegistryUnearthedRecipesTags = (event) => {
  event.add("forge:cobblestone", [
    "unearthed:cobbled_slate",
    "unearthed:cobbled_phyllite",
    "unearthed:cobbled_grey_limestone",
    "unearthed:cobbled_beige_limestone",
    "unearthed:cobbled_limestone",
    "biomeswevegone:dacite_cobblestone",
    "biomeswevegone:white_dacite_cobblestone",
  ]);

  event.add("forge:stone", [
    "unearthed:pillow_basalt",
    "unearthed:weathered_rhyolite",
    "unearthed:schist",
    "unearthed:white_granite",
    "unearthed:dacite",
    "unearthed:dolerite",
    "unearthed:quartzite",
    "unearthed:granodiorite",
    "unearthed:mudstone",
    "unearthed:conglomerate",
    "unearthed:siltstone",
    "unearthed:rhyolite",
    "unearthed:gabbro",
  ]);

  event.add("tconstruct:workstation_rock", [
    "unearthed:cobbled_slate",
    "unearthed:cobbled_phyllite",
    "unearthed:cobbled_grey_limestone",
    "unearthed:cobbled_beige_limestone",
    "unearthed:cobbled_limestone",
    "biomeswevegone:dacite_cobblestone",
    "biomeswevegone:white_dacite_cobblestone",
    "unearthed:pillow_basalt",
    "unearthed:weathered_rhyolite",
    "unearthed:schist",
    "unearthed:white_granite",
    "unearthed:dacite",
    "unearthed:dolerite",
    "unearthed:quartzite",
    "unearthed:granodiorite",
    "unearthed:mudstone",
    "unearthed:conglomerate",
    "unearthed:siltstone",
    "unearthed:rhyolite",
    "unearthed:gabbro",
  ]);
};
