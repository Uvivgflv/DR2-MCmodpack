const RegistrySmelteryRecipes = event =>{
    event.custom({
                "type": "tconstruct:casting_basin",
                "cast": {
                    "item": "minecraft:blast_furnace"
                        },
                    "cast_consumed": true,
                "cooling_time": 400,
                 "fluid": {
                    "amount": 1080,
                    "tag": "forge:molten_copper"
                },
                "result": "tconstruct:smeltery_controller"
    }).id('cct:smeltery/casting/smeltery_contriller')

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
                "item": "kubejs:unfired_coke_bricks"
                },
            "cast_consumed": true,
            "cooling_time": 400,
            "fluid": {
            "amount": 90,
            "tag": "tconstruct:molten_clay"
            },
        "result": "gtceu:coke_oven_bricks"
    }).id('cct:coke_oven/coke_bricks_casting')

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
                "item": "gtceu:coke_oven_bricks"
                },
            "cast_consumed": true,
            "cooling_time": 900,
            "fluid": {
            "amount": 1080,
            "tag": "tconstruct:molten_amethyst_bronze"
            },
        "result": "gtceu:coke_oven"
    }).id('cct:coke_oven/casting/coke_oven')

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
                "item": "gtceu:firebricks"
                },
            "cast_consumed": true,
            "cooling_time": 1200,
            "fluid": {
            "amount": 1080,
            "tag": "tconstruct:molten_slimesteel"
            },
        "result": "gtceu:primitive_blast_furnace"
    }).id('cct:primitive_blast_furnace/casting/primitive_blast_furnace')

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
                "item": "gtceu:coke_oven_bricks"
                },
            "cast_consumed": true,
            "cooling_time": 1200,
            "fluid": {
            "amount": 540,
            "tag": "tconstruct:molten_bronze"
            },
        "result": "gtceu:steam_machine_casing"
    }).id('cct:casting/steam_machine_casing')
}