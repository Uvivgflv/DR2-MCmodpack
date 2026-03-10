const GTCEUMultiblockMachinesRegistry = (event) => {
    const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');

    event.create('large_steam_alloy_smelter', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 4))
        // The number in holder is the max amount of parallel it can use.
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('alloy_smelter')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "CCC", "BCB")
            .aisle("CEC", "CBC", "CGC")
            .aisle("CCC", "CHC", "BGB")
            .where('B', Predicates.any())
            .where('C', Predicates.blocks('gtceu:steam_machine_casing').setMinGlobalLimited(10)
               .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1)))
            .where('D', Predicates.blocks("gtceu:industrial_steam_casing"))
            .where('E', Predicates.blocks("gtceu:bronze_brick_casing"))
            .where('G', Predicates.blocks("gtceu:bronze_machine_casing"))
            .where('H', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel("gtceu:block/casings/steam/bronze/bottom",
            "gtceu:block/machines/alloy_smelter")
};