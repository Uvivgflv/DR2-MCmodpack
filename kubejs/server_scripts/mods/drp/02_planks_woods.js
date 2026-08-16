//priority 200
const DRPWoodAndPlanksEvents = (event) => {
    event.shaped('4x gtceu:wood_plate', [
        'A  ',
        'B  ',
        '   '
    ],{
        A:'#gtceu:tools/crafting_saws',
        B:'#minecraft:planks'
    }).id('drp:woods/wood_plate_saw');

    let logSawingRecipe = (output, input) => {
        event.shapeless('2x '+output, ['#forge:tools/saws', input])
        .id(`drp:woods/${output.replace(':', '/')}_shapeless_sawing`);
    };

    const WoodVanilla = global.WOOD_MATERIAL.VANILLA.LOGS;
    const WoodBiomesoplenty = global.WOOD_MATERIAL.BIOMESOPLENTY.LOGS;

    WoodVanilla.forEach(wood_variants => {
        const plank = `minecraft:${wood_variants}_planks`;
        const log = `minecraft:${wood_variants}_log`
        logSawingRecipe(plank, log);
    });

    WoodBiomesoplenty.forEach(wood_variants => {
        const plank = `biomesoplenty:${wood_variants}_planks`;
        const log = `biomesoplenty:${wood_variants}_log`;
        logSawingRecipe(plank, log);
    });

    let chestCrafingNugget = (output, input) => {
        event.shaped(`quark:${output}_chest`, [
            'AAA',
            'BCB',
            'AAA'
        ],{
            A:input,
            B:'tconstruct:pattern',
            C:'#drp:chest_nuggets'
        }).id(`drp:funcs/chests/${output}_chest`);
    };

    let chestCraftingRing = (output, input) => {
        event.shaped(`2x quark:${output}_chest`, [
            'AAA',
            'BCB',
            'AAA'
        ],{
            A:input,
            B:'tconstruct:pattern',
            C:'#drp:chest_rings'
        }).id(`drp:funcs/chests/${output}_chest_ring`);
    };

    //const WoodVanilla = global.WOOD_MATERIAL.VANILLA.LOGS;
    const WoodQuark = global.WOOD_MATERIAL.QUARK.LOGS;

    WoodVanilla.forEach(wood_variant => {
        const plank = `minecraft:${wood_variant}_planks`;
        // console.log('DRP DEBUG: '+ wood_variant);
        // console.log('DRP DEBUG: '+ plank);
        chestCrafingNugget(wood_variant, plank);
        chestCraftingRing(wood_variant, plank);
    });

    WoodQuark.forEach(wood_variant => {
        const plank = `quark:${wood_variant}_planks`;
        // console.log('DRP DEBUG: '+ wood_variant);
        // console.log('DRP DEBUG: '+ plank);
        chestCrafingNugget(wood_variant, plank);
        chestCraftingRing(wood_variant, plank);
    });
}