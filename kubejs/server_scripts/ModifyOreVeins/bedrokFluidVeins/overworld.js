const BedrokFluidOverworld = (event) => {
  event.add("kubejs:copper_waters_bedrock_vein", (vein) => {
    vein.dimensions("minecraft:overworld");
    vein.fluid(() => Fluid.of("gtceu:copper_waters").fluid);
    vein.weight(15);
    vein.minimumYield(120);
    vein.maximumYield(720);
    vein.depletionAmount(2);
    vein.depletionChance(1);
    vein.depletedYield(50);
  });
};
