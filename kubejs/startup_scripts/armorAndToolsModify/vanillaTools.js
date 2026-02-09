const AllToolsModifocation = (event) => {
    const ListVanilla = [
        /^minecraft:.*_pickaxe/,
        /^minecraft:.*_hoe/,
        /^minecraft:.*_shovel/
    ];

    const ListIE = [
        /^immersiveengineering:pickaxe_.*/,
        /^immersiveengineering:axe_.*/,
        /^immersiveengineering:sword_.*/,
        /^immersiveengineering:hoe_.*/,
        /^immersiveengineering:shovel_.*/
    ];

    const ListTWF = [
        /^twilightforest:(?!giant_pickaxe).*_pickaxe/,
        /^twilightforest:(?!(gold_minotaur_axe|diamond_minotaur_axe)).*_axe/,
        /^twilightforest:.*_shovel/,
        /^twilightforest:.*_hoe/
    ];

    ListIE.forEach(element => {
        const item_id = element;
        event.modify(item_id, (item) => {
            item.maxDamage = 1;
        });
    });

    ListTWF.forEach(element => {
        const item_id = element;
        event.modify(item_id, (item) => {
            item.maxDamage = 1;
        });
    });

    ListVanilla.forEach(element => {
        const item_id = element;
        event.modify(item_id, (item) => {
            item.maxDamage = 1;
        });
    });
}