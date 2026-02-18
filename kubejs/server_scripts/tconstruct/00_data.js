const TconstructDataRegistry = event => {
    const recipesToDisable = [
        //--nugget to ingot
        "tconstruct:common/materials/copper_ingot_from_nuggets",
        "tconstruct:common/materials/steel_ingot_from_nuggets",
        "tconstruct:common/materials/pig_iron_ingot_from_nuggets",
        "tconstruct:common/materials/rose_gold_ingot_from_nuggets",
        "tconstruct:common/materials/amethyst_bronze_ingot_from_nuggets",
        "tconstruct:common/materials/slimesteel_ingot_from_nuggets",
        "tconstruct:common/materials/cinderslime_ingot_from_nuggets",
        "tconstruct:common/materials/queens_slime_ingot_from_nuggets",
        "tconstruct:common/materials/manyullyn_ingot_from_nuggets",
        "tconstruct:common/materials/hepatizon_ingot_from_nuggets",
        "tconstruct:common/materials/knightmetal_ingot_from_nuggets",
        //--block to ingot
        "tconstruct:common/materials/copper_ingot_from_block",
        "tconstruct:common/materials/steel_ingot_from_block",
        "tconstruct:common/materials/pig_iron_ingot_from_block",
        "tconstruct:common/materials/rose_gold_ingot_from_block",
        "tconstruct:common/materials/amethyst_bronze_ingot_from_block",
        "tconstruct:common/materials/slimesteel_ingot_from_block",
        "tconstruct:common/materials/cinderslime_ingot_from_block",
        "tconstruct:common/materials/queens_slime_ingot_from_block",
        "tconstruct:common/materials/manyullyn_ingot_from_block",
        "tconstruct:common/materials/hepatizon_ingot_from_block",
        "tconstruct:common/materials/knightmetal_ingot_from_block",
        //--ingot to block
        "tconstruct:common/materials/copper_block_from_ingot",
        "tconstruct:common/materials/steel_block_from_ingot",
        "tconstruct:common/materials/pig_iron_block_from_ingot",
        "tconstruct:common/materials/rose_gold_block_from_ingot",
        "tconstruct:common/materials/amethyst_bronze_block_from_ingot",
        "tconstruct:common/materials/slimesteel_block_from_ingot",
        "tconstruct:common/materials/cinderslime_block_from_ingot",
        "tconstruct:common/materials/queens_slime_block_from_ingot",
        "tconstruct:common/materials/manyullyn_block_from_ingot",
        "tconstruct:common/materials/hepatizon_block_from_ingot",
        "tconstruct:common/materials/knightmetal_block_from_ingot",
        //--ingot to nugget
        "tconstruct:common/materials/copper_nugget_from_ingot",
        "tconstruct:common/materials/steel_nugget_from_ingot",
        "tconstruct:common/materials/pig_iron_nugget_from_ingot",
        "tconstruct:common/materials/rose_gold_nugget_from_ingot",
        "tconstruct:common/materials/amethyst_bronze_nugget_from_ingot",
        "tconstruct:common/materials/slimesteel_nugget_from_ingot",
        "tconstruct:common/materials/cinderslime_nugget_from_ingot",
        "tconstruct:common/materials/queens_slime_nugget_from_ingot",
        "tconstruct:common/materials/manyullyn_nugget_from_ingot",
        "tconstruct:common/materials/hepatizon_nugget_from_ingot",
        "tconstruct:common/materials/knightmetal_nugget_from_ingot" 
    ];

    const customRecipesToDisableCastingBasin = [
        "tconstruct:smeltery/casting/seared/stone/block_from_clay",
        "tconstruct:smeltery/casting/seared/cobble/block",
        "tconstruct:smeltery/casting/seared/cobble/slab",
        "tconstruct:smeltery/casting/seared/cobble/stairs",
        "tconstruct:smeltery/casting/seared/cobble/wall",
        "tconstruct:smeltery/casting/seared/paver",
        "tconstruct:smeltery/casting/seared/bricks/block",
        "tconstruct:smeltery/casting/seared/bricks/slab",
        "tconstruct:smeltery/casting/seared/bricks/stairs",
        "tconstruct:smeltery/casting/seared/bricks/wall",
        "tconstruct:smeltery/casting/seared/cracked",
        "tconstruct:smeltery/casting/seared/chiseled",
        "tconstruct:smeltery/casting/seared/stone/slab",
        "tconstruct:smeltery/casting/seared/stone/stairs",
        "tconstruct:compat/create/andesite_alloy_iron",
        "tconstruct:compat/create/andesite_alloy_zinc",
        "gm_construct:smeltery/casting/metal/malachite/block",
        "tconstruct:smeltery/casting/scorched/polished_from_magma",
        "tconstruct:smeltery/casting/scorched/stone_from_magma"
    
    ];

    const customRecipesToDisableCastingTable = [
        "tconstruct:smeltery/casting/seared/brick_composite",
        "tconstruct:smeltery/casting/scorched/brick_composite"
    ];

    const customRecipesToDisableSmelting = [
        "tconstruct:melting/ironwood/raw",
        "twilight_construct:smeltery/melting/metal/knightmetal/cluster"
    ];

    customRecipesToDisableCastingBasin.forEach(recipeId => {
        const [namespace, path] = recipeId.split(':');
        event.addJson(`${namespace}:recipes/${path}.json`, {
            type: 'tconstruct:casting_basin',
            cast: {item: 'minecraft:air'},
            cast_consumed: true,
            fluid: {
                tag: 'minecraft:empty',
                amount: 1
            },
            result: 'minecraft:air'
        });
    });

    customRecipesToDisableCastingTable.forEach(recipeId => {
        const [namespace, path] = recipeId.split(':');
        event.addJson(`${namespace}:recipes/${path}.json`, {
            type: 'tconstruct:casting_table',
            cast: {item: 'minecraft:air'},
            cast_consumed: true,
            fluid: {
                tag: 'minecraft:empty',
                amount: 1
            },
            result: 'minecraft:air'
        });
    });

    recipesToDisable.forEach(recipeId => {
        const [namespace, path] = recipeId.split(':');
        event.addJson(`${namespace}:recipes/${path}.json`, {
            type: 'minecraft:crafting_shaped',
            ingredients: [],
            result: {
                item: 'minecraft:air',
                count: 0
            },
            conditions: [{
                type: 'forge:false'
            }]
        });
    });

    customRecipesToDisableSmelting.forEach(recipeId => {
        const [namespace, path] = recipeId.split(':');
        event.addJson(`${namespace}:recipes/${path}.jaon`,{
            type: 'tconstruct:melting',
            conditions: [{
                type: 'forge:false'
        }],
        Ingredient: {
            item: 'minecraft:air'
        },
        result: {
            amount: 1,
            tag: 'minecraft:empty'
        },
        temperature: 0,
        time: 0
        });
    })
};