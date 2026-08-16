//priority 100
const DRPItemTagEvent = (event) => {
    const ChestNuggets = [
        'gtceu:copper_nugget',
        'gtceu:steel_nugget',
        'born_in_chaos_v1:dark_metal_nugget',
        'undergarden:cloggrum_nugget',
        'gtceu:lead_nugget',
        'gtceu:zinc_nugget',
        'kubejs:flint_shard'
    ];

    const ChestRings = [
        'gtceu:aluminium_ring',
        'gtceu:wrought_iron_ring',
        'gtceu:tin_ring',
        'gtceu:bronze_ring',
        'gtceu:lead_ring',
        'gtceu:zinc_ring',
        'gtceu:copper_ring',
        'gtceu:steel_ring'
    ];

    const Staws = [
        'biomesoplenty:watergrass',
        'farmersdelight:straw',
        'minecraft:wheat',
        'biomesoplenty:barley'
    ];

    const SteelIngotRemove = [
        'tconstruct:steel_ingot',
        'createbigcannons:steel_ingot',
        'dungeons_and_combat:steel_ingot'
    ];

    const SteelBlockRemove = [
        'createbigcannons:steel_block',
        'tconstruct:steel_block'
    ];

    const SteelNuggetRemove = [
        'tconstruct:steel_nugget',
        'createbigcannons:steel_scrap'
    ];

    event.add('drp:chest_nuggets', ChestNuggets);
    event.add('drp:chest_rings', ChestRings);
    event.add('drp:straws', Staws);
    //? Возможно удалить сами предметы из этих списков
    event.remove('forge:ingots/steel', SteelIngotRemove);
    event.remove('forge:storage_blocks/steel', SteelBlockRemove);
    event.remove('forge:nuggets/steel', SteelNuggetRemove);
}