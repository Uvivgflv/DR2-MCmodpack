const RegistryCreateGTMCrafterRecipes = event => {
    //#region lv machines
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "I": {
                "tag": "forge:double_plates/invar"
            },
            "C": {
                "tag": "gtceu:circuits/lv"
            },
            "R": {
                "item": "gtceu:copper_quadruple_wire"
            },
            "S": {
                "item": "gtceu:lv_machine_hull"
            },
            "V": {
                "item": "gtceu:tin_single_cable"
            }
        },
        "pattern": [
            " III ",
            "ICRCI",
            "IRSRI",
            " VRV "
        ],
        "result": {
        "count": 1,
        "item": "gtceu:lv_electric_furnace"
        }
    }).id('dr2:gtcreate/lv/electric_furnace')

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "B": {
                "tag": "tconstruct:scorched_blocks"
            },
            "P": {
                "tag": "forge:double_plates/steel"
            },
            "C": {
                "tag": "gtceu:circuits/lv"
            },
            "R": {
                "item": "gtceu:copper_octal_wire"
            },
            "M": {
                "item": "gtceu:lv_machine_hull"
            },
            "V": {
                "item": "gtceu:tin_single_cable"
            }
        },
        "pattern":[
            "BPPPB",
            " CRC ",
            "PRMRP",
            "BVRVB"
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_alloy_smelter"
        }
    }).id('dr2:gtcreate/lv/lv_alloy_smelter')

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "I": {
                "tag": "forge:double_plates/invar"
            },
            "P": {
                "tag": "forge:double_plates/steel"
            },
            "C": {
                "tag": "gtceu:circuits/lv"
            },
            "G": {
                "tag": "forge:dusts/graphite"
            },
            "M": {
                "item": "gtceu:lv_machine_hull"
            },
            "V": {
                "item": "gtceu:tin_quadruple_cable"
            }
        },
        "pattern":[
            " PPP ",
            "IVGVI",
            "C M C",
            "PPPPP"
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_arc_furnace"
        }
    }).id('dr2:gtcreate/lv/lv_arc_furnace')
    //#endregion
}