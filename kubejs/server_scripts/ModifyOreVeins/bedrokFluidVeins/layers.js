const BedrokFluidFirstLayer = (event) => {
  event.add("kubejs:copper_waters_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:copper_waters").fluid);
    vein.weight(15);
    vein.minimumYield(50);
    vein.maximumYield(200);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:heavy_oil_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:oil_heavy").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:light_oil_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:oil_light").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:medium_oil_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:oil_medium").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:oil_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:oil").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });
  //+
  event.add("kubejs:iron_resin_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:iron_resin").fluid);
    vein.weight(15);
    vein.minimumYield(20);
    vein.maximumYield(100);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });
  //+
  event.add("kubejs:natural_gas_bedrock_vein_layer1", (vein) => {
    vein.dimensions("infinite_abyss:first_layer");
    vein.fluid(() => Fluid.of("gtceu:natural_gas").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });
};
