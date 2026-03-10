const BlastingFurnaceRecipesGT = (event) => {
  event.remove({ id: "gtceu:electric_blast_furnace/blast_blazing_deorum" });

  event.recipes.gtceu
    .electric_blast_furnace("gtceu:hot_blazing_deorum_ingot")
    .itemInputs("2x gtceu:blazing_deorum_dust")
    .itemOutputs("gtceu:hot_blazing_deorum_ingot")
    .inputFluids(GTMaterials.Blaze.getFluid(1200))
    .duration(1200)
    .blastFurnaceTemp(1970)
    .EUt(512);
};
