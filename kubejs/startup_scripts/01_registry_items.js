const RegisterOreVariants = event =>{
    //const MOD_IDS = global.MOD_IDS;
    const ORE_VARIANTS = global.ORE_VARIANTS;
    //#region registry ore types
    const ORE_TYPE_GEMS = Object.freeze([
        {name: 'amethyst'}, {name: 'lazurite'}, {name: 'graphite'}, {name: 'coal'},
        {name: 'apatite'}, {name: 'lapis'}, {name: 'graphene'}, {name: 'zeolite'},
        {name: 'asbestos'}, {name: 'monazite'}, {name: 'granitic_mineral_sand'}, {name: 'electrotine'},
        {name: 'basaltic_mineral_sand'}, {name: 'olivine'}, {name: 'garnet_sand'}, {name: 'blue_topaz'},
        {name: 'barite'}, {name: 'soapstone'}, {name: 'glauconite_sand'}, {name: 'mica'},
        {name: 'bastnasite'}, {name: 'nether_quartz'}, {name: 'diamond'}, {name: 'fullers_earth'},
        {name: 'bentonite'}, {name: 'oilsands'}, {name: 'alunite'}, {name: 'sulfur'},
        {name: 'virilux'}, {name: 'certus_quartz'}, {name: 'almandine'}, {name: 'saltpeter'},
        {name: 'gypsum'}, {name: 'emerald'}, {name: 'spessartine'}, {name: 'sapphire'},
        {name: 'night_crystal'}, {name: 'green_sapphire'}, {name: 'talc'}, {name: 'ruby'},
        {name: 'red_garnet'}, {name: 'yellow_garnet'}, {name: 'dark_pearl'}, {name: 'rendium'},
        {name: 'quartzite'}, {name: 'sulfur_dioxide'}, {name: 'topaz'}, {name: 'redstone'}, 
        {name: 'rock_salt'}, {name: 'diatomite'}, {name: 'tricalcium_phosphate'},{name: 'realgar'}, {name: 'opal'},
        {name: 'calcite'}, {name: 'grossular'}, {name: 'trona'}, {name: 'pyrope'}, {name: 'sodalite'}, {name: 'salt'}
    ]);//save for copy-past in ORE_VARIANTS
try
{
    ORE_VARIANTS.forEach(variant => {
        const color = variant.color;
        const name = variant.name;

        if (variant.type === 'metal') {
            event.create(`tiny_${name}_raw_ore`&&variant.color != undefined)
                .translationKey(`item.kubejs.tiny_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/raw_metal_ore_base')
                .color(0, color);
        } else if (variant.type === 'gem'&&variant.color != undefined){
            event.create(`tiny_${name}_raw_ore`)
                .translationKey(`item.kubejs.tiny_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/raw_gem_ore_base')
                .color(0, color);
        }else
        {
            console.log("Ore type and Color is undefined for: "+ variant.name+" skip registration...");
        }
    });
}catch(error){
    console.log(error.message);
}
}
/*TODO: регистрация всех предметов-дропов, регистрация блоков
1. добавление текстуры для видов, добавление тегов для руд типа #forge:raw_materials & #forge:raw_materials/name
*/