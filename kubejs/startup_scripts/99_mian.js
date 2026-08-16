//priority 999
GTCEuStartupEvents.materialModification((event) => {
  GTToolsCreation(event);
});

// GTCEuStartupScriptsEvents.registry('gtceu:material', event => {

// });

// GTCEuStartupScriptsEvents.registry('gtceu:world_gen_layer', event => {

// });

// GTCEuStartupScriptsEvents.registry('gtceu:tag_prefix', event => {

// });

StartupEvents.registry('item', (event) => {
  DRPItemRegistries(event);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
  GTCEUMultiblockMachinesRegistry(event);
});
