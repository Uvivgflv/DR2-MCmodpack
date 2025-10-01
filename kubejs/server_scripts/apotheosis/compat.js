const RegisterApothCreateTicCompat = event => {
    //#region mechanical crafter ???
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "C": {"item": "malum:chunk_of_brilliance"},
            "D": {"tag": "forge:plates/diamond"},
            "B": {"item": "minecraft:book"},
            "W": {"tag": "forge:storage_blocks/sapphire"},
            "O": {"item": "tconstruct:obsidian_pane"},
            "E": {"tag": "forge:storage_blocks/green_sapphire"},
            "F": {"tag": "forge:storage_blocks/carminite"},
            "A": {"tag": "forge:storage_blocks/opal"}
        },
        "pattern":[
            "  C  ",
            " DBD ",
            "DDWDD",
            "OEFAO",
            "OOOOO"
        ],
        "result":{
            "count": 1,
            "item": "minecraft:enchanting_table"
        }
    }).id('dr2:apoth/comp/create/mechanical_crafter/enchanting_table')
}