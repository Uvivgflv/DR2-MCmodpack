const RegisterSophisBackpacksRecipes = event =>{
    //#region remove recipes
        event.remove({id:'sophisticatedbackpacks:backpack'})
        event.remove({output:/^sophisticatedbackpacks:.*_backpack/})
    //#endregion

    //region add recipes
        event.shaped('sophisticatedbackpacks:backpack',[
            'ABB',
            'CDC',
            'CEC'
        ],{
            A:'minecraft:name_tag',
            B:Item.of('tconstruct:bowstring', '{Material:"tconstruct:leather"}').strongNBT(),
            C:'kubejs:tinned_leather',
            D:'#forge:chests/wooden',
            E:'gtceu:treated_wood_plate'
        }).id('dr2:leather_backpack')

        event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:copper_backpack"
            }
        ],
        key: {
            B: {
                "item": "sophisticatedbackpacks:backpack"
            },
            I: {
                "tag": "forge:double_plates/iron"
            },
            R: {
                "tag": 'forge:rods/iron'
            },
            P: {
                "tag": 'forge:plates/iron'
            },
            C: {
                "tag": "forge:chests/wooden"
            },
            W: {
                "item": "tconstruct:nahuatl"
            }
        },
        pattern: [
            "RPR",
            "IBI",
            "CWC"
        ],
        result: {
          item: "sophisticatedbackpacks:copper_backpack"
        }
        }).id('dr2:copper_backpack')

        event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:iron_backpack"
            }
        ],
        key: {
            B: {
                "item": "sophisticatedbackpacks:backpack"
            },
            I: {
                "tag": "forge:double_plates/hepatizon"
            },
            R: {
                "tag": 'forge:rods/hepatizon'
            },
            P: {
                "tag": 'forge:plates/hepatizon'
            },
            C: {
                "item": "gtceu:steel_crate"
            },
            W: {
                "item": "biomesoplenty:hellbark_planks"
            }
        },
        pattern: [
            "RPR",
            "IBI",
            "CWC"
        ],
        result: {
          item: "sophisticatedbackpacks:iron_backpack"
        }
        }).id('dr2:iron_backpack')
    //#endregion
}