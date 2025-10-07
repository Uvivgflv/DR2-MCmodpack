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

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "P": {
                "tag": "forge:double_plates/hepatizon"
            },
            "G": {
                "item": "gtceu:lv_conveyor_module"
            },
            "C": {
                "tag": "gtceu:circuits/lv"
            },
            "A": {
                "item": "gtceu:lv_robot_arm"
            },
            "M": {
                "item": "gtceu:lv_machine_hull"
            },
            "K": {
                "tag": "forge:double_plates/steel"
            },
            "O": {
                "item": "gtceu:tin_single_cable"
            },
            "F":{"item":"gtceu:lv_electric_pump"}
        },
        "pattern":[
            "PCCCOP",
            "PGAFMP",
            "KKKKOK"
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_assembler"
        }
    }).id('dr2:gtcreate/lv/lv_assembler')

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "C": {
                "tag": "gtceu:circuits/lv"
            },
            "D": {
                "tag": "forge:double_plates/steel"
            },
            "O": {
                "item": "gtceu:tin_single_cable"
            },
            "P": {
                "item": "gtceu:lv_electric_piston"
            },
            "M": {
                "item": "gtceu:lv_machine_hull"
            },
            "R": {
                "item": "gtceu:lv_electric_motor"
            }
        },
        "pattern": [
            "CDCO",
            "P PM",
            "RDRO"
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_bender"
        }
    }).id('dr2:gtcreate/lv/lv_bender')

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "O":{"item":"gtceu:tin_single_cable"},
            "M":{"item":"gtceu:lv_machine_hull"},
            "D":{"tag":"forge:double_plates/steel"},
            "P":{"item":"gtceu:lv_electric_pump"},
            "F":{"item":"gtceu:lv_electric_piston"},
            "T":{"item":"create:fluid_tank"},
            "C":{"tag":"gtceu:circuits/lv"}
        },
        "pattern": [
            "OMO",
            "DPD",
            "DFD",
            "DTC",
            "DTC"
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_canner"
        }
    }).id('dr2:gtcreate/lv/lv_canner')

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "O":{"item":"gtceu:tin_single_cable"},
            "H":{"item":"gtceu:lv_machine_hull"},
            "D":{"tag":"forge:double_plates/steel"},
            "C":{"tag":"gtceu:circuits/lv"},
            "M":{"item":"gtceu:lv_electric_motor"}
        },
        "pattern": [
            " DDD ",
            "DCMCD",
            "DM MD",
            "DCMCD",
            " OHO "
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_centrifuge"
        }
    }).id('dr2:gtcreate/lv/lv_centrifuge')

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "O":{"item":"gtceu:tin_single_cable"},
            "H":{"item":"gtceu:lv_machine_hull"},
            "D":{"tag":"forge:double_plates/steel"},
            "L":{"item":"gtceu:copper_quadruple_wire"},
            "P":{"item":"gtceu:lv_electric_piston"},
            "T":{"item":"create:fluid_tank"},
            "C":{"tag":"gtceu:circuits/lv"},
            "G":{"item":"gtceu:lv_electric_pump"}
        },
        "pattern": [
            "  CCCD",
            " ODDDD",
            "DHLLLD",
            " OPGPD",
            "  TTTD"
        ],
        "result":{
            "count": 1,
            "item": "gtceu:lv_extractor"
        }
    }).id('dr2:gtcreate/lv/lv_extractor')

    

    
    //#endregion
}