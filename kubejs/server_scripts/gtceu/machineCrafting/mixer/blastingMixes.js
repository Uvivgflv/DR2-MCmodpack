const MixerRegistry = (event) => {
  event.recipes.gtceu
    .mixer("gtceu:cloggrum_steel_dust")
    .itemInputs("#forge:dusts/steel", "#forge:dusts/cloggrum")
    .inputFluids(Fluid.of("undergarden:virulent_mix_source", 1200))
    .itemOutputs("2x gtceu:cloggrum_steel_dust")
    .duration(150)
    .EUt(27);

  event.recipes.gtceu
    .mixer("gtceu:blazing_deorum_dust")
    .itemInputs("2x gtceu:deorum_dust", "gtceu:blazeium_dust")
    .inputFluids(Fluid.of("gtceu:mercury", 1000))
    .itemOutputs("3x gtceu:blazing_deorum_dust")
    .duration(320)
    .EUt(48);
};
