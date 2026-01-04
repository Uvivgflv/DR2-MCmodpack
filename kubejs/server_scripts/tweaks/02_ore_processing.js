const RegisterCustomOreProcessing = event => {
    const ore_variants = global.ORE_VARIANTS;

    try{
    ore_variants.forEach(variant => {
        const mod_name = variant.namespace;
        const ore_name = variant.name;
        const raw_name = `${mod_name}:raw_${ore_name}`;
        const nugget_name = `${mod_name}_${ore_name}`;
        if(variant.type === 'metal'&& variant.pure === true){
            event.smelting('3x '+nugget_name, raw_name).xp(0.1).cookingTime(20*30).id(`dr2:smelting/${ore_name}_nugget_from_raw_ore`);
            event.blasting('3x '+nugget_name, raw_name).xp(0.1).cookingTime(20*15).id(`dr2:blasting/${ore_name}_nugget_from_raw_ore`);
        }
    });
    }catch(e){
    console.log("Error registering custom ore processing recipes: " + e);
    };

    //TODO: создать отельный массив для руд которые нужно перерабатывать в наггеты
}