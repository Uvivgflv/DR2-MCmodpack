const RegisterTConSmelteryCompat = event => {
    // //#region alloys compat
    // //#region sterling silver
   
        event.custom({
            "type": "tconstruct:alloy",
            "inputs": [
                {
            "amount": 90,
            "tag": "forge:molten_copper"
                },
                {
            "amount": 360,
            "tag": "tconstruct:molten_silver"
                }
            ],
            "result": {
            "amount": 450,
            "tag": "forge:sterling_silver"
            },
            "temperature": 820
        }).id('cct:compat/alloying/sterling_silver')

        event.custom({
            "type": "tconstruct:melting",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:storage_blocks/sterling_silver"
                }
            ],
            "ingredient": {
            "tag": "forge:storage_blocks/sterling_silver"
            },
            "result": {
            "amount": 810,
            "tag": "forge:sterling_silver"
            },
            "temperature": 425,
            "time": 141
        }).id('cct:compat/alloying/sterling_silver/melting_block')

        event.custom({
            "type": "tconstruct:melting",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:ingots/sterling_silver"
                }
            ],
            "ingredient": {
            "tag": "forge:ingots/sterling_silver"
            },
            "result": {
            "amount": 90,
            "tag": "forge:sterling_silver"
            },
            "temperature": 425,
            "time": 23
        }).id('cct:compat/alloying/sterling_silver/melting_ingot')

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
            "tag": "tconstruct:casts/multi_use/plate"
                },
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:plates/sterling_silver"
                }
            ],
            "cooling_time": 57,
            "fluid": {
            "amount": 90,
            "tag": "forge:sterling_silver"
            },
            "result": {
            "tag": "forge:plates/sterling_silver"
            }
        }).id('cct:compat/alloyng/sterling_silver/plate')

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
            "tag": "tconstruct:casts/multi_use/ingot"
                },
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:ingots/sterling_silver"
                }
            ],
            "cooling_time": 57,
            "fluid": {
            "amount": 90,
            "tag": "forge:sterling_silver"
            },
            "result": {
            "tag": "forge:ingots/sterling_silver"
            }
        }).id('cct:compat/alloyng/sterling_silver/ingot')

        event.custom({
            "type": "tconstruct:casting_basin",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "#forge:storage_blocks/sterling_silver"
                }
            ],
            "cooling_time": 200,
            "fluid": {
            "amount": 810,
            "tag": "forge:sterling_silver"
            },
            "result": {
            "tag": "forge:storage_blocks/sterling_silver"
            }
        }).id('cct:compat/alloyng/sterling_silver/block')
    //     //#endregion
    // //#region tin_alloy
        event.custom({
            "type": "tconstruct:alloy",
            "inputs": [
                {
            "amount": 90,
            "tag": "forge:molten_iron"
                },
                {
            "amount": 90,
            "tag": "tconstruct:molten_tin"
                }
            ],
            "result": {
            "amount": 180,
            "tag": "forge:tin_alloy"
            },
            "temperature": 820
        }).id('cct:compat/alloying/tin_alloy')

        event.custom({
            "type": "tconstruct:melting",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:storage_blocks/tin_alloy"
                }
            ],
            "ingredient": {
            "tag": "forge:storage_blocks/tin_alloy"
            },
            "result": {
            "amount": 810,
            "tag": "forge:tin_alloy"
            },
            "temperature": 600,
            "time": 141
        }).id('cct:compat/alloying/tin_alloy/melting_block')

        event.custom({
            "type": "tconstruct:melting",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:ingots/tin_alloy"
                }
            ],
            "ingredient": {
            "tag": "forge:ingots/tin_alloy"
            },
            "result": {
            "amount": 90,
            "tag": "forge:tin_alloy"
            },
            "temperature": 600,
            "time": 23
        }).id('cct:compat/alloying/tin_alloy/melting_ingot')

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
            "tag": "tconstruct:casts/multi_use/plate"
                },
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:plates/tin_alloy"
                }
            ],
            "cooling_time": 57,
            "fluid": {
            "amount": 90,
            "tag": "forge:tin_alloy"
            },
            "result": {
            "tag": "forge:plates/tin_alloy"
            }
        }).id('cct:compat/alloyng/tin_alloy/plate')

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
            "tag": "tconstruct:casts/multi_use/ingot"
                },
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:ingots/tin_alloy"
                }
            ],
            "cooling_time": 57,
            "fluid": {
            "amount": 90,
            "tag": "forge:tin_alloy"
            },
            "result": {
            "tag": "forge:ingots/tin_alloy"
            }
        }).id('cct:compat/alloyng/tin_alloy/ingot')

        event.custom({
            "type": "tconstruct:casting_basin",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "#forge:storage_blocks/tin_alloy"
                }
            ],
            "cooling_time": 200,
            "fluid": {
            "amount": 810,
            "tag": "forge:tin_alloy"
            },
            "result": {
            "tag": "forge:storage_blocks/tin_alloy"
            }
        }).id('cct:compat/alloyng/tin_alloy/block')
    //     //#endregion
    // //#region red_alloy
        //#region redstone melting
        event.custom({
            "type": "tconstruct:melting",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:dusts/redstone"
                }
            ],
            "ingredient": {
            "tag": "forge:dusts/redstone"
            },
            "result": {
            "amount": 90,
            "tag": "forge:redstone"
            },
            "temperature": 300,
            "time": 23
        }).id('cct:compat/alloying/melting_redstone')

        event.custom({
            "type": "tconstruct:melting",
            "conditions": [
                {
            "type": "mantle:tag_filled",
            "tag": "forge:storage_blocks/redstone"
                }
            ],
            "ingredient": {
            "tag": "forge:storage_blocks/redstone"
            },
            "result": {
            "amount": 810,
            "tag": "forge:redstone"
            },
            "temperature": 300,
            "time": 200
        }).id('cct:compat/alloying/melting_redstone_block')
    // //#endregion
}