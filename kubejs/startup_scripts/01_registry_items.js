const RegisterOreVariants = event =>{
    //MOVE IT TO MOD I TIERED!!
    const ORE_VARIANTS = global.ORE_VARIANTS;
    //#region registry ore types
try
{
    ORE_VARIANTS.forEach(variant => {
        const color = variant.color;
        const name = variant.name;
        //tiny ore variant
        if (variant.type === 'metal') {
            event.create(`tiny_${name}_raw_ore`)
                .translationKey(`item.kubejs.tiny_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/tiny_raw_metal_ore_base')
                .color(0, color)
                .tag(`forge:tiny_raw_materials/${name}`);
        } else if (variant.type === 'gem'){
            event.create(`tiny_${name}_raw_ore`)
                .translationKey(`item.kubejs.tiny_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/raw_gem_ore_base')
                .color(0, color)
                .tag(`forge:tiny_raw_materials/${name}`);
        }else
        {
            console.log("Tiny ore type is undefined for: "+ variant.name+" skip registration...");
        }
        //small ore variant
        if (variant.type === 'metal') {
            event.create(`small_${name}_raw_ore`)
                .translationKey(`item.kubejs.small_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/small_raw_metal_ore_base')
                .color(0, color)
                .tag(`forge:small_raw_materials/${name}`);
        } else if (variant.type === 'gem'){
            event.create(`small_${name}_raw_ore`)
                .translationKey(`item.kubejs.small_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/raw_gem_ore_base')
                .color(0, color)
                .tag(`forge:small_raw_materials/${name}`);
        }else
        {
            console.log("Small ore type is undefined for: "+ variant.name+" skip registration...");
        }
        //large ore variant
        if (variant.type === 'metal') {
            event.create(`large_${name}_raw_ore`)
                .translationKey(`item.kubejs.large_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/large_raw_metal_ore_base')
                .color(0, color)
                .tag(`forge:large_raw_materials/${name}`);
        } else if (variant.type === 'gem'){
            event.create(`large_${name}_raw_ore`)
                .translationKey(`item.kubejs.large_${name}_raw_ore`)
                .texture('layer0', 'kubejs:item/raw_gem_ore_base')
                .color(0, color)
                .tag(`forge:large_raw_materials/${name}`);
        }else
        {
            console.log("Large ore type is undefined for: "+ variant.name+" skip registration...");
        }
    });
}catch(error){
    console.log(error.message);
}
}
/*TODO: регистрация всех предметов-дропов, регистрация блоков
1. добавление текстуры для видов, добавление тегов для руд типа #forge:raw_materials & #forge:raw_materials/name
*/