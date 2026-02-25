const GlobalLootTablesRegistry = (event) => {
    //#region all
    const ItemsToRemove = [
        /^gtceu:.*_ingot/,
        /^sophisticatedbackpacks:.*_backpack/,
        "botania:manasteel_ingot",
        "irons_restrictions:fragment",
    ];
    ItemsToRemove.forEach(element => {
        event.addLootTypeModifier(LootType.CHEST)
        .removeLoot(element);
    });
    //#endregion 
    //#region Twilightforest
//to room & dead_ends
    const AddToLabyrinthLoot1 = [
        'irons_spellbooks:arcane_essence',
        'irons_spellbooks:divine_pearl',
        'irons_spellbooks:blood_vial',
        'irons_spellbooks:frozen_bone',
        'irons_spellbooks:lightning_bottle'
    ];
//to vault
    const AddToLabyrinthLoot2 = [
        'gtceu:soul_stained_steel_ingot',
        'gtceu:manasteel_ingot'
    ]

    const AddLibraryLoot = [
        "enigmaticlegacy:tattered_tome",
        "enigmaticlegacy:withered_tome",
        'enigmaticaddons:void_tome',
        'enigmaticlegacy:animal_guidebook',
        'enigmaticlegacy:hunter_guidebook',
        'enigmaticaddons:sanguinary_handbook',
        'enigmaticaddons:false_justice',
        'enigmaticaddons:artificial_flower',
        'enigmaticlegacy:void_stone'
    ];

    const AddTWStrongholdLoot = [
        'enigmaticaddons:forgotten_ice',
        'enigmaticlegacy:recall_potion',
        'artifacts:cross_necklace',
        'artifacts:obsidian_skull',
        'artifacts:running_shoes',
        'artifacts:scarf_of_invisibility'
    ];

    const AddHillsLoot = [
        'gtceu:raw_garnierite_block',
        'gtceu:raw_cobalt_block'
    ];

    event.addLootTableModifier('minecraft:chests/ancient_city')
    .randomChance(0.15)
    .addLoot('kubejs:twforest_activator');

    AddToLabyrinthLoot1.forEach(element => {
        event.addLootTableModifier('twilightforest:chests/labyrinth_room')
        .randomChance(0.57)
        .addLoot(element);

        event.addLootTableModifier('twilightforest:chests/labyrinth_dead_end')
        .randomChance(0.57)
        .addLoot(element);
    });

    AddToLabyrinthLoot2.forEach(element => {
        event.addLootTableModifier('twilightforest:chests/labyrinth_vault')
        .randomChance(0.60)
        .addLoot(element);
    });

    AddLibraryLoot.forEach(element => {
        event.addLootTableModifier('twilightforest:chests/tower_library')
        .randomChance(0.15)
        .addLoot(element);
    });

    AddTWStrongholdLoot.forEach(element => {
        event.addLootTableModifier('twilightforest:chests/stronghold_room')
        .randomChance(0.4)
        .addLoot(element);

        event.addLootTableModifier('twilightforest:chests/stronghold_cache')
        .randomChance(0.8)
        .addLoot(element);
    });

    AddHillsLoot.forEach(element => {
        event.addLootTableModifier(/^twilightforest:chests\/hill_.*/)
        .randomChance(0.67)
        .addLoot(element);
    });
    //#endregion

    //#region irons_spellbooks

    const AllSchools = global.RestrictionsCrating;

    AllSchools.forEach(element => {
        const school_id = element.id;
        event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.03)
        .addLoot(Item.of('irons_restrictions:manuscript', `{SchoolId:"irons_spellbooks:${school_id}"}`));
    })
    
    //#endregion



    
    
}