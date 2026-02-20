const RegistrySimpleBlocks = event =>{
//not needed while..
    console.log("SimpleBlocks is empty for now!")
}

const RegisterCrafingBlocks = event => {
    //#region crafting blocks
    event.create("unfired_coke_bricks")
        .translationKey(`block.kubejs.unfired_coke_bricks`)
        .requiresTool(true)
        .soundType("gravel")
        .tagBlock("minecraft:mineable/shovel");

    event.create("lead_molded_bricks")
        .translationKey(`block.kubejs.lead_molded_bricks`)
        .requiresTool(true)
        .soundType("stone")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("forge:mineable/wrench");

    event.create("dry_scorched_grout")
        .translationKey(`block.kubejs.dry_scorched_grout`)
        .requiresTool(true)
        .soundType("gravel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable.pickaxe")
    //#endregion
}

const RegisterCompressedBlocks = event => {
    
    //#region storage blocks or structure
    event.create("double_copper_block")
        .translationKey(`block.kubejs.double_copper_block`)
        .requiresTool(true)
        .soundType("wood")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("forge:mineable/wrench");
    
    event.create("resin_crate", 'cardinal')
        .material('wood')
        .hardness(2.0)
        .requiresTool(true)
        .soundType('wood')
        .texture('top', 'kubejs:block/resin_crate_top')
        .texture('side', 'kubejs:block/resin_crate_side')
        .texture('front', 'kubejs:block/resin_crate_side')
        .texture('bottom', 'kubejs:block/crate_bottom')
        .translationKey(`block.kubejs.resin_crate`)
        .tagBlock('forge:storage_blocks/resin')
        .tagBlock('minecraft:mineable/axe');

    event.create("hemp_fiber_block", 'cardinal')
        .material('grass')
        .hardness(0.5)
        .requiresTool(true)
        .soundType('grass')
        .texture('top', 'kubejs:block/hemp_fiber_block_top')
        .texture('bottom', 'kubejs:block/hemp_fiber_block_top')
        .texture('side', 'kubejs:block/hemp_fiber_block')
        .texture('front', 'kubejs:block/hemp_fiber_block')
        .translationKey(`block.kubejs.hemp_fiber_block`)
        .tagBlock('forge:storage_blocks/hemp_fiber')
        .tagBlock('minecraft:mineable/hoe');
    
    event.create("magic_essence_crate", 'cardinal')
        .material('wood')
        .hardness(2.0)
        .requiresTool(true)
        .soundType('wood')
        .texture('top', 'kubejs:block/magic_essence_block_top')
        .texture('side', 'kubejs:block/magic_essence_block_side')
        .texture('front', 'kubejs:block/magic_essence_block_side')
        .texture('bottom', 'kubejs:block/crate_bottom')
        .translationKey(`block.kubejs.magic_essence_crate`)
        .tagBlock('forge:storage_blocks/magic_essence')
        .tagBlock('minecraft:mineable/axe');
    
}

const RegisterTestBlocks = event => {
    event.create("thick_fuel_oil")
        .translationKey(`block.kubejs.thick_fuel_oil`)
        .requiresTool(true)
        .soundType("mud")
        .tagBlock("minecraft:mineable/shovel");
}

const RegisterAllCustomBlocks = event => {
    RegistrySimpleBlocks(event);
    RegisterCrafingBlocks(event);
    RegisterCompressedBlocks(event);
    RegisterTestBlocks(event);
}