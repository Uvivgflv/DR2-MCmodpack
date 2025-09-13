//priority 1
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('twilight')
        .targets('#minecraft:stone_ore_replaceables') // [*] 
        .dimensions('twilightforest:twilight_forest') // [*]
    event.create('undergarden')
        .targets('undergarden:depthrock')
        .dimensions('undergarden:undergarden')
    event.create('deepdark')
        .targets('deep_dark_regrowth:grimstone')
        .dimensions('minecraft:overworld')
    event.create('overworld')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions('minecraft:overworld')
    event.create('dacite_biomes')
        .targets('biomeswevegone:dacite', '#minecraft:stone_ore_replaceables')
        .dimensions('minecraft:overworld')
    event.create('first_layer_inf')
        .targets('infinite_abyss:deepstone')
        .dimensions('infinite_abyss:first_layer')
    event.create('second_layer_inf')
        .targets('infinite_abyss:red_deepstone')
        .dimensions('infinite_abyss:second_layer')
    //tests
    event.create('tw_test_tree')
        .targets('twilightforest:root')
        .dimensions('twilightforest:twilight_forest')

    event.create('ad_astra_moon')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon')

    event.create('ad_astra_mars')
        .targets('ad_astra:mars_stone')
        .dimensions('ad_astra:mars')

    event.create('ad_astra_venus')
        .targets('ad_astra:venus_stone')
        .dimensions('ad_astra:venus')
})

