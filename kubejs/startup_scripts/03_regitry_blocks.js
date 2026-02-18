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