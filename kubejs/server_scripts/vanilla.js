const registerVanillaRecipes = (event) =>{
//#region remove recipes
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
//--
event.remove({output:'minecraft:crafting_table'})
event.remove({output:'minecraft:furnace'})
//--
event.remove({id:'minecraft:netherite_ingot'})
event.remove({id:'tconstruct:common/materials/netherite_ingot_from_nuggets'})
//--
event.remove({output:'minecraft:paper'})
//--
event.remove({id:'minecraft:lectern'})
event.remove({id:'minecraft:dispenser'})
event.remove({id:'minecraft:dropper'})
event.remove({id:'minecraft:piston'})
event.remove({id:'tconstruct:common/slime/sticky_piston'})
event.remove({id:'undergarden:sticky_piston_from_goo_ball'})
event.remove({id:'minecraft:sticky_piston'})
event.remove({id:'minecraft:brewing_stand'})
event.remove({output:'minecraft:anvil'})
event.remove({id:'minecraft:smoker'})
event.remove({id:'minecraft:blast_furnace'})
event.remove({output:'minecraft:grindstone'})
event.remove({id:'minecraft:smithing_table'})
event.remove({id:'minecraft:stonecutter'})
event.remove({output:/^minecraft:.*_bed/})
event.remove({id:'quark:building/crafting/furnaces/blackstone_smoker'})
event.remove({id:'quark:building/crafting/furnaces/deepslate_smoker'})
event.remove({id:'quark:building/crafting/furnaces/blackstone_blast_furnace'})
event.remove({id:'quark:building/crafting/furnaces/deepslate_blast_furnace'})
event.remove({id:'tconstruct:common/basalt_blast_furnace'})
event.remove({id:'minecraft:barrel'})
//--
event.remove({id:'tfmg:mixing/cast_iron_ingot'})
event.remove({id:'gtceu:shapeless/fireclay_dust'})
event.remove({id:'quark:oddities/crafting/backpack'})
event.remove({id:'tconstruct:tables/crafting_station_from_logs'})
event.remove({id:'supplementaties:slime_ball'})
//--
event.remove({output:'#kubejs:disabled_items'})
//#endregion

//#region Add recipes for stage 1
//#region remove chest recipes
event.remove({id:'quark:world/crafting/woodsets/ancient/chest'})
event.remove({id:'quark:world/crafting/woodsets/azalea/chest'})
event.remove({id:'quark:world/crafting/woodsets/blossom/chest'})
event.remove({id:'quark:building/crafting/chests/oak_chest'})
event.remove({id:'quark:building/crafting/chests/spruce_chest'})
event.remove({id:'quark:building/crafting/chests/acacia_chest'})
event.remove({id:'quark:building/crafting/chests/birch_chest'})
event.remove({id:'quark:building/crafting/chests/jungle_chest'})
event.remove({id:'quark:building/crafting/chests/mangrove_chest'})
event.remove({id:'quark:building/crafting/chests/dark_oak_chest'})
event.remove({id:'quark:building/crafting/chests/crimson_chest'})
event.remove({id:'quark:building/crafting/chests/warped_chest'})
event.remove({id:'quark:building/crafting/chests/bamboo_chest'})
event.remove({id:'quark:building/crafting/chests/cherry_chest'})
event.remove({id:'quark:building/crafting/chests/nether_brick_chest'})
event.remove({id:'quark:building/crafting/chests/purpur_chest'})
event.remove({id:'quark:building/crafting/chests/prismarine_chest'})
//#endregion

//#region add chest recipes
event.shaped('quark:ancient_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'quark:ancient_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/ancient_chest')

event.shaped('quark:azalea_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'quark:azalea_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/azalea_chest')

event.shaped('quark:blossom_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'quark:blossom_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/blossom_chest')

event.shaped('quark:oak_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:oak_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/oak_chest')

event.shaped('quark:spruce_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:spruce_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/spruce_chest')

event.shaped('quark:birch_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:birch_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/birch_chest')

event.shaped('quark:jungle_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:jungle_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/jungle_chest')

event.shaped('quark:acacia_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:acacia_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/acacia_chest')

event.shaped('quark:dark_oak_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:dark_oak_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/dark_oak_chest')

event.shaped('quark:crimson_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:crimson_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/crimson_chest')

event.shaped('quark:warped_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:warped_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/warped_chest')

event.shaped('quark:mangrove_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:mangrove_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/mangrove_chest')

event.shaped('quark:cherry_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:cherry_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/cherry_chest')

event.shaped('quark:bamboo_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:bamboo_planks',
  B:'#cct:chest_nugget'
}).id('cct:storage/bamboo_chest')

event.shaped('quark:nether_brick_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:nether_bricks',
  B:'#cct:chest_nugget'
}).id('cct:storage/nether_chest')

event.shaped('quark:purpur_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:purpur_block',
  B:'#cct:chest_nugget'
}).id('cct:storage/purpur_chest')

event.shaped('quark:prismarine_chest',[
  'AAA',
  'ABA',
  'AAA'
],{
  A:'minecraft:prismarine',
  B:'#cct:chest_nugget'
}).id('cct:storage/prismarine_chest')
//#endregion
//#endregion
//#region functioanal blocks
event.shaped(
    Item.of('minecraft:crafting_table'),[
        'fp',
        'PP'
    ],{
        f:'minecraft:flint',
        p:'tconstruct:pattern',
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

event.replaceInput(
  {id:'gtceu:shaped/sticky_piston_resin'},
  'gtceu:sticky_resin',
  '#cct:resin'
)

event.shaped('minecraft:barrel',[
  'ABA',
  'ACA',
  'ABA'
],{
  A:'#minecraft:planks',
  B:'#minecraft:wooden_slabs',
  C:'#forge:tools/hammers'
}).id('cct:barrel')

// event.shaped('minecraft:bed',[
//   'AAA',
//   'BCB',
//   'DED'
// ],{
//   A:'',
//   B:'',
//   C:'',
//   D:'',
//   E:''
// })

event.shaped('minecraft:blast_furnace',[
  'AAA',
  'BCD',
  'EFE'
],{
  A:'#forge:plates/iron',
  B:'minecraft:iron_bars',
  C:'minecraft:furnace',
  D:'quark:sturdy_stone',
  E:'#tconstruct:smeltery_bricks',
  F:'tfmg:fireproof_bricks'
}).id('cct:blast_furnace')

event.shaped('minecraft:smoker',[
  'ABA',
  'CDC',
  'EFE'
],{
  A:Item.of('tconstruct:large_plate', '{Material:"tconstruct:bronze"}').strongNBT(),
  B:'#forge:plates/bronze',
  C:Item.of('tconstruct:large_plate', '{Material:"tconstruct:nahuatl"}').strongNBT(),
  D:'minecraft:furnace',
  E:'#tconstruct:smeltery_bricks',
  F:'tfmg:fireproof_bricks'
}).id('cct:smoker')

event.shaped('minecraft:brewing_stand',[
  ' A ',
  ' BE',
  'CDC'
],{
  A:'twilightforest:fiery_tears',
  B:'minecraft:blaze_rod',
  C:'#forge:plates/invar',
  D:'#forge:ingots/fiery',
  E:'#forge:tools/files'
}).id('cct:brewing_stand')

event.shaped('minecraft:anvil',[
  'AAA',
  'CBD',
  'BBB'
],{
  A:'#forge:storage_blocks/steel',
  B:'#forge:ingots/steel',
  C:'#forge:tools/hammers',
  D:'#forge:tools/crowbars'
}).id('cct:anvil')

event.shaped('minecraft:grindstone',[
  'ABA',
  'CDC',
  'EFE'
],{
  A:'#forge:screws/iron',
  B:'#forge:tools/screwdrivers',
  C:'#minecraft:planks',
  D:'quark:sturdy_stone',
  E:'#forge:rods/wood',
  F:'#forge:tools/files'
}).id('cct:grindstone')

event.shaped('minecraft:smithing_table',[
  'AAA',
  'BCD',
  'EFE'
],{
  A:Item.of('tconstruct:large_plate', '{Material:"tconstruct:lead"}').strongNBT(),
  B:'#forge:tools/hammers',
  C:'quark:sturdy_stone',
  D:'#forge:tools/files',
  E:'#forge:bolts/lead',
  F:'tconstruct:crafting_station'
}).id('cct:smithing_table')
//#endregion
//#region primitive glassblowing
event.blasting('minecraft:glass','kubejs:prim_glass_mix').xp(0.2).cookingTime(1200).id('cct:blasting/glass')
//#endregion
event.shapeless('3x gtceu:fireclay_dust',['gtceu:clay_dust', 'gtceu:brick_dust', 'tfmg:fireclay_ball']).id('cct:phase1/fireclay_dust')
}


