const RegisterCustomOreProcessing = event => {
    const RawOres = global.RawOreVariants;

    RawOres.forEach(ore => {
        const oreName = `${ore.namespace}:raw_${ore.name}`;
        const outputCount = ore.quality;
        const nuggetName = `${ore.namespace}:${ore.element}_nugget`;
        switch (ore.element) {
            case 'iron':
                event.smelting(outputCount+'x '+nuggetName, oreName).cookingTime(20*30).id(`kubejs:smelting/raw_ore/${ore.name}`);
                event.blasting(outputCount+'x '+nuggetName, oreName).cookingTime(20*15).id(`kubejs:blasting/raw_ore/${ore.name}`);
                break;
            case 'copper':
                event.smelting(outputCount+'x '+nuggetName, oreName).cookingTime(20*30).id(`kubejs:smelting/raw_ore/${ore.name}`);
                event.blasting(outputCount+'x '+nuggetName, oreName).cookingTime(20*15).id(`kubejs:blasting/raw_ore/${ore.name}`);
                break;
        }
    });

    //TODO: создать отельный массив для руд которые нужно перерабатывать в наггеты
}