const registerVanillaRecipes = (event) =>{
//удаление рецептов ванильного майнкрафта
//---------
//удаление рецептов инструментов и брони
event.remove({id:/^minecraft:.*_pickaxe/})
event.remove({id:/^minecraft:.*_axe/})
event.remove({id:/^minecraft:.*_sword/})
event.remove({id:/^minecraft:.*_hoe/})
event.remove({id:/^minecraft:.*_shovel/})
//--
event.remove({output:/^minecraft:.*_helmet/})
event.remove({output:/^minecraft:.*_chestplate/})
event.remove({output:/^minecraft:.*_leggings/})
event.remove({output:/^minecraft:.*_boots/})
//--
event.remove({id:'minecraft:fishing_rod'})
event.remove({output:'minecraft:lead'})
//удаление рецептов крафтовых станций
event.remove({output:'minecraft:crafting_table'})
event.remove({output:'minecraft:furnace'})
//удаление рецептов незерита
event.remove({id:'minecraft:netherite_ingot'})
event.remove({id:'tconstruct:common/materials/netherite_ingot_from_nuggets'})
//удаление рецепта материалов
//paper
event.remove({output:'minecraft:paper'})
//удаление рецептов прочих функциональных блоков
event.remove({id:'minecraft:lectern'})
event.remove({id:'minecraft:dispenser'})
event.remove({id:'minecraft:dropper'})
event.remove({id:'minecraft:piston'})
event.remove({id:'minecraft:brewing_stand'})
event.remove({id:'minecraft:anvil'})
event.remove({id:'minecraft:smoker'})
event.remove({id:'minecraft:blast_furnace'})
event.remove({id:'minecraft:grindstone'})
event.remove({id:'minecraft:smithing_table'})
event.remove({id:'minecraft:stonecutter'})
event.remove({output:/^minecraft:.*_bed/})
//-----
//Add recipes for stage 1
//-----
event.shaped(
    Item.of('minecraft:crafting_table'),[
        'fp',
        'lP'
    ],{
        f:'minecraft:flint',
        p:'tconstruct:pattern',
        l:'#forge:stripped_logs',
        P:'#minecraft:planks'
    }
).id('cct:crafting_table')

event.shaped(
    Item.of('minecraft:furnace'),[
        'cfc',
        'cac',
        'ccc'
    ],{
        c:'#forge:cobblestone',
        f:'minecraft:flint',
        a:'kubejs:ash_compound'
    }
).id('cct:furnace')

event.shaped(
    Item.of('kubejs:ash_compound'),[
        'aga',
        'gsg',
        'aga'
    ],{
        a:'#forge:dusts/ash',
        g:'supplementaries:daub',
        s:'#minecraft:sand'
    }
).id('cct:ash_compound')
//stripped vanilla logs
// event.shapeless(
//     Item.of('minecraft:stripped_oak_log'),['minecraft:oak_log','#forge:tools/knives']
// ).id('cct:stripped_logs_from_knifes')
event.custom({
    "type": "create:item_application",
  "ingredients": [
    {
      "item": "tconstruct:crafting_station"
    },
    {
      "item": "tconstruct:pattern"
    }
  ],
  "results": [
    {
      "item": "tconstruct:tinker_station"
    }
  ]
}).id('cct:tinker_station_from_item_application')

}














