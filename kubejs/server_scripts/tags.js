const RegisterItemsTagsMain = (event) => {

    event.add('kubejs:disabled_items', 'luminousworld:ironhammer')
    event.add('kubejs:disabled_items', 'luminousworld:goldhammer')
    event.add('kubejs:disabled_items', 'luminousworld:diamond_hammer')
    event.add('kubejs:disabled_items', 'luminousworld:netherite_hammer')
    event.add('kubejs:disabled_items', 'projectred_core:red_iron_comp')
    event.add('kubejs:disabled_items', 'projectred_core:electrotine_iron_comp')
    event.add('kubejs:disabled_items', 'projectred_core:boule')
    event.add('kubejs:disabled_items', 'projectred_core:red_ingot')
    event.add('kubejs:disabled_items', 'projectred_core:electrotine_ingot')
    event.add('kubejs:disabled_items', 'projectred_core:sand_coal_comp')
    event.add('kubejs:disabled_items', 'projectred_core:draw_plate')
    event.add('kubejs:disabled_items', 'projectred_core:silicon')
    event.add('kubejs:disabled_items', 'projectred_core:glow_silicon_comp')
    event.add('kubejs:disabled_items', 'projectred_core:red_silicon_comp')
    event.add('kubejs:disabled_items', 'projectred_core:electrotine_silicon_comp')
    event.add('kubejs:disabled_items', 'projectred_core:infused_silicon')
    event.add('kubejs:disabled_items', 'projectred_core:energized_silicon')
    event.add('kubejs:disabled_items', 'projectred_core:electrotine_silicon')
    event.add('kubejs:disabled_items', 'projectred_core:woven_cloth')
    event.add('kubejs:disabled_items', 'projectred_core:sail')
    event.add('cct:chest_nugget',[
        'minecraft:iron_nugget',
        'gtceu:zinc_nugget',
        'gtceu:copper_nugget',
        'gtceu:aluminium_nugget',
        'gtceu:lead_nugget',
        'gtceu:bronze_nugget',
        'gtceu:invar_nugget',
        'gtceu:steel_nugget'
    ])
    event.add('cct:resin', [
        'minecraft:slime_ball', 
        'gtceu:sticky_resin', 
        'tconstruct:sky_slime_ball',
        'tconstruct:ender_slime_ball',
        'tconstruct:ichor_slime_ball',
        'luminous_depths:indigo_slime_ball',
        'undergarden:goo_ball',
        'malum:cursed_sapball',
        'malum:runic_sapball'
    ])
    event.add('cct:stonecuter_saw_blades', [
        'gtceu:bronze_buzz_saw_blade', 
        'gtceu:iron_buzz_saw_blade'
    ])
    event.add('cct:brass_casing_wood_variant',[
        'botania:livingwood_planks',
        'gtceu:treated_wood_planks',
        'tfmg:hardened_planks'
    ])
    event.add('twilightforest:portal/activator', 'kubejs:twforest_activator')
    event.remove('twilightforest:portal/activator', 'minecraft:diamond')
    
    event.removeAllTagsFrom('tfmg:heavy_plate')

}