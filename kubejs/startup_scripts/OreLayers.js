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
    //tests
    event.create('tw_test_tree')
        .targets('twilightforest:root')
        .dimensions('twilightforest:twilight_forest')
})

