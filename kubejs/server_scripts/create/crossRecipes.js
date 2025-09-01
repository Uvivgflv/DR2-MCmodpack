const RegistryCreateCrossRecipes = event => {
    //#region mechanical crafter vanilla
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "K": {
            "tag": "forge:exquisite_gems"
            },
            "D": {
            "tag": "forge:plates/diamond"
            },
            "B": {
            "item": "minecraft:book"
            },
            "Q":{
            "item": "malum:block_of_blazing_quartz"
            },
            "O":{
            "item": "tconstruct:obsidian_pane"
            },
            "G":{
            "item": "malum:block_of_hallowed_gold"
            },
            "S":{
            "item": "forbidden_arcanus:stellarite_block"
            },
            "E":{
            "item": "malum:block_of_brilliance"
        }
        },
        "pattern": [
            "  K  ",
            " DBD ",
            "DDQDD",
            "OGSEO",
            "OOOOO"
        ],
        "result": {
        "count": 1,
        "item": "minecraft:enchanting_table"
        }
    }).id('dr2:create/crosscrafts/misc/enchanting_table')
    //#endregion
}