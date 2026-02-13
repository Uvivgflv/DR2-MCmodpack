const TconstructSmelteryRecipesRegistry = (event) => {
//#region unit consts
  const ingot = global.IngotUnit;
  const nugget = global.NuggetUnit;
  const block = global.BlockUnit;
//#endregion

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "minecraft:blast_furnace",
      },
      cast_consumed: true,
      cooling_time: 400,
      fluid: {
        amount: block,
        fluid: "gtceu:copper",
      },
      result: "tconstruct:smeltery_controller",
    })
    .id("cct:smeltery/casting/smeltery_contriller");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "kubejs:unfired_coke_bricks",
      },
      cast_consumed: true,
      cooling_time: 400,
      fluid: {
        amount: ingot,
        tag: "tconstruct:molten_clay",
      },
      result: "gtceu:coke_oven_bricks",
    })
    .id("cct:coke_oven/coke_bricks_casting");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "gtceu:coke_oven_bricks",
      },
      cast_consumed: true,
      cooling_time: 900,
      fluid: {
        amount: block,
        fluid: "gtceu:copper",
      },
      result: "gtceu:coke_oven",
    })
    .id("cct:coke_oven/casting/coke_oven");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "gtceu:firebricks",
      },
      cast_consumed: true,
      cooling_time: 1200,
      fluid: {
        amount: block,
        tag: "tconstruct:molten_slimesteel",
      },
      result: "gtceu:primitive_blast_furnace",
    })
    .id("cct:primitive_blast_furnace/casting/primitive_blast_furnace");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "gtceu:coke_oven_bricks",
      },
      cast_consumed: true,
      cooling_time: 1200,
      fluid: {
        amount: ingot*6,
        fluid: "gtceu:bronze",
      },
      result: "gtceu:steam_machine_casing",
    })
    .id("cct:casting/steam_machine_casing");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "minecraft:bricks",
      },
      cast_consumed: true,
      cooling_time: 1200,
      fluid: {
        amount: ingot*6,
        fluid: "frceu:lead",
      },
      result: "kubejs:lead_molded_bricks",
    })
    .id("cct:casting/lead_foundation");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: "twilightforest:underbrick",
      },
      cast_consumed: true,
      cooling_time: 2200,
      fluid: {
        amount: ingot*6,
        fluid: "gtceu:steel",
      },
      result: "gtceu:steel_brick_casing",
    })
    .id("cct:casting/steel_brick_casing");
  //#region v0.1.10092025
  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: { item: "gtceu:bronze_frame" },
      cast_consumed: true,
      cooling_time: 3200,
      fluid: {
        amount: block,
        fluid: "twilight_construct:fiery_blood",
      },
      result: "gtceu:bronze_firebox_casing",
    })
    .id("dr2:casting/bronze_firebox_casing");

  event.custom({
    type:"tconstruct:casting_table",
    cast: {
      item: 'tfmg:fireproof_brick'
    },
    cast_consumed: true,
    cooling_time: 120,
    fluid: {
      amount: ingot,
      tag: "tconstruct:molten_clay"
    },
    result: 'tconstruct:seared_brick'
  }).id('dr2:casting_table/seared_brick_from_fireproof_brick');

  event.custom({
    type: "tconstruct:casting_basin",
    cast: {item: 'tfmg:fireproof_bricks'},
    cast_consumed: true,
    cooling_time: 1080,
    fluid: {
      amount: ingot*6,
      tag: 'tconstruct:molten_clay'
    },
    result: 'tconstruct:seared_bricks'
  }).id('dr2:casting/seared_bricks_from_fireproof_bricks');

  event.custom({
    type: "tconstruct:casting_basin",
    cast: {item: 'tfmg:fireclay'},
    cast_consumed: true,
    cooling_time: 1080,
    fluid: {
      amount: block,
      tag: 'tconstruct:molten_clay'
    },
    result: 'tconstruct:seared_cobble'
  }).id('dr2:casting/seared_cobble_from_fireproof_clay');
  //#region v0.2 08102025
  //#region Greate/Create compat
  event.custom({
    type: "tconstruct:casting_basin",
    cast: {item: 'minecraft:polished_andesite'},
    cast_consumed: true,
    cooling_time: 120,
    fluid: {
      amount: ingot*2,
      fluid: 'gtceu:iron'
    },
    result: 'create:andesite_alloy'
  }).id('dr2:casting/compat/create/andesite_alloy_from_iron');
  //#endregion
};
