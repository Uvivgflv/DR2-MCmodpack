const BedrokFluidUndergarden = (event) => {
  event.add("kubejs:heavy_oil_bedrock_vein_under", (vein) => {
    vein.dimensions("undergarden:undergarden");
    vein.fluid(() => Fluid.of("gtceu:oil_heavy").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:medium_oil_bedrock_vein_under", (vein) => {
    vein.dimensions("undergarden:undergarden");
    vein.fluid(() => Fluid.of("gtceu:oil_medium").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:light_oil_bedrock_vein_under", (vein) => {
    vein.dimensions("undergarden:undergarden");
    vein.fluid(() => Fluid.of("gtceu:oil_light").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:oil_bedrock_vein_under", (vein) => {
    vein.dimensions("undergarden:undergarden");
    vein.fluid(() => Fluid.of("gtceu:oil").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:lead_mixture_bedrock_vein_under", (vein) => {
    vein.dimensions("undergarden:undergarden");
    vein.fluid(() => Fluid.of("gtceu:lead_mixture").fluid);
    vein.weight(15);
    vein.minimumYield(40);
    vein.maximumYield(100);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });

  event.add("kubejs:silver_tincture_bedrock_vein_under", (vein) => {
    vein.dimensions("undergarden:undergarden");
    vein.fluid(() => Fluid.of("gtceu:silver_tincture").fluid);
    vein.weight(15);
    vein.minimumYield(50);
    vein.maximumYield(100);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });
};
