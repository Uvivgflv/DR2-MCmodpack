//priority 1
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('twilight')
        .targets('#minecraft:stone_ore_replaceables') // [*] 
        .dimensions('twilightforest:twilight_forest') // [*]
})

