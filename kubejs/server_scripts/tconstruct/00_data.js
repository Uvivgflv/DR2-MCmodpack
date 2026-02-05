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
};