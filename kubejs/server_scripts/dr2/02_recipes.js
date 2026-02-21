const DR2RecipesRegistry = (event) => {
  //#region add recipes for custon items
  event
    .shaped("kubejs:prim_glass_mix", ["ABA", "BCB", "ABA"], {
      A: "#minecraft:sand",
      B: "#forge:dusts/ash",
      C: "#forge:tools/mortars",
    })
    .id("dr2:materials/glass_mix");

  event
    .shaped("3x kubejs:tinned_leather", ["ABA", "BAB", " C "], {
      A: "#forge:string",
      B: Item.of(
        "tconstruct:bowstring",
        '{Material:"tconstruct:leather"}',
      ).strongNBT(),
      C: "#forge:tools/mallets",
    })
    .id("dr2:tinned_leather");

  event.shaped('minecraft:clay', [
    ' A ',
    'BBB',
    'BBB'
  ],{
    A:"#forge:tools/hammers",
    B:'minecraft:clay_ball'
  }).id('dr2:clay_block');

  event.shaped('2x kubejs:modest_silk_fabric', [
    'ABA',
    'CAC',
    'ACA'
  ],{
    A:'kubejs:old_fibers',
    B:'#forge:tools/mallets',
    C:'kubejs:strudy_fiber'
  }).id('dr2:materials/modest_fabric');

  event.shaped('kubejs:strudy_fiber',[
    ' AB',
    'ACA',
    'DA '
  ],{
    A:'immersiveengineering:hemp_fiber',
    B:'#forge:tools/mallets',
    C:'minecraft:honeycomb',
    D:'minecraft:bowl'
  })
  .keepIngredient('minecraft:bowl')
  .id('dr2:materials/strudy_fiber_honeycombs');

  event.shaped('4x kubejs:strudy_fiber',[
    ' AB',
    'ACA',
    'DA '
  ],{
    A:'immersiveengineering:hemp_fiber',
    B:'#forge:tools/mallets',
    C:'gtceu:wax_dust',
    D:'minecraft:bowl'
  })
  .keepIngredient('minecraft:bowl')
  .id('dr2:materials/strudy_fiber_wax');

  event.shapeless('kubejs:resin_crate',['9x gtceu:sticky_resin']).id('dr2:misc/resin_storage_block');
  event.shapeless('9x gtceu:sticky_resin',['kubejs:resin_crate']).id('dr2:misc/resin_storage_block_unpack');
  event.shapeless('kubejs:hemp_fiber_block', ['9x immersiveengineering:hemp_fiber']).id('dr2:misc/hemp_fiber_block');
  event.shapeless('9x immersiveengineering:hemp_fiber', ['kubejs:hemp_fiber_block']).id('dr2:misc/hemp_fiber_block_unpack');
  event.shapeless('kubejs:magic_essence_crate', ['9x irons_spellbooks:arcane_essence']).id('dr2:misc/magic_essence_block');
  event.shapeless('9x irons_spellbooks:arcane_essence', ['kubejs:magic_essence_crate']).id('dr2:misc/magic_essence_block_unpack');
  event.shapeless('kubejs:double_copper_block', ['9x #forge:storage_blocks/copper']).id('dr2:misc/double_copper_block');

  event.custom({
    type:"tconstruct:casting_table",
    cast: {
      item: 'kubejs:modest_silk_fabric'
    },
    cast_consumed: true,
    cooling_time: 80,
    fluid: {
      amount: 144,
      fluid: "tconstruct:molten_amethyst_bronze"
    },
    result: 'kubejs:amethyst_gilded_fabric'
  }).id('dr2:materials/amethyst_gilded_fabric_from_casting');

  event
    .custom({
      type: "apotheosis:enchanting",
      conditions: [
        {
          type: "apotheosis:module",
          module: "enchantment",
        },
      ],
      input: {
        item: 'kubejs:amethyst_gilded_fabric',
      },
      requirements: {
        eterna: 5,
        quanta: 5,
        arcana: 5,
      },
      max_requirements: {
        eterna: -1,
        quanta: -1,
        arcana: -1,
      },
      display_level: 5,
      result: {
        item: 'kubejs:enchanted_amethyst_gilded_fabric',
        count: 1,
      },
    })
    .id("dr2:materials/enchanted_amethyst_fabric_from_infusion");


  event.recipes.greate.milling([
    Item.of('kubejs:old_fibers').withChance(0.8),
    Item.of('minecraft:string').withChance(0.2)
  ],'kubejs:old_fabric')
  .id('dr2:material/old_fibers_with_strings')
  .recipeTier(0);
  //#endregion
};