const TconstructResipesRegistry = (event) => {
  //#region remove recipes misc
  event.remove({ id: "tconstruct:tables/modifier_worktable" });
  event.remove({ id: "tconstruct:tables/tinkers_chest" });
  event.remove({ id: "tconstruct:tables/part_chest" });
  event.remove({ id: "tconstruct:tables/cast_chest" });
  event.remove({ id: "tconstruct:tables/tinkers_forge" });
  event.remove({ id: "tconstruct:tables/tinkers_anvil" });
  event.remove({ id: "tconstruct:tools/building/flint_and_brick" });
  //#endregion

  //#region remove smeltery recipes
  event.remove({ id: "tconstruct:smeltery/seared/grout" });
  event.remove({ id: "tconstruct:smeltery/seared/grout_multiple" });
  event.remove({ id: "tconstruct:smeltery/scorched/nether_grout" });
  event.remove({ id: "tconstruct:smeltery/scorched/nether_grout_multiple" });
  event.remove({ id: "quark:tweaks/crafting/slab_to_block" });
  event.remove({ id: "tconstruct:smeltery/seared/seared_bricks_crafting" });
  event.remove({ id: "tconstruct:smeltery/seared/seared_bricks_from_bricks" });
  event.remove({ id: "tconstruct:smeltery/seared/seared_brick_kiln" });
  event.remove({ id: "tconstruct:smeltery/seared/seared_brick" });
  event.remove({ id: "tconstruct:smeltery/seared/melter" });
  event.remove({ id: "tconstruct:smeltery/seared/heater" });
  event.remove({ id: "tconstruct:smeltery/seared/basin" });
  event.remove({ id: "tconstruct:smeltery/seared/table" });
  event.remove({ id: "tconstruct:smeltery/seared/drain" });
  event.remove({ id: "tconstruct:smeltery/seared/drain_retextured" });
  event.remove({ id: "tconstruct:smeltery/seared/duct" });
  event.remove({ id: "tconstruct:smeltery/seared/duct_retextured" });
  event.remove({ id: "tconstruct:smeltery/seared/chute" });
  event.remove({ id: "tconstruct:smeltery/seared/chute_retextured" });
  event.remove({ id: "tconstruct:smeltery/seared/ingot_tank" });
  event.remove({ id: "tconstruct:smeltery/seared/fuel_tank" });
  event.remove({ id: "tconstruct:smeltery/seared/seared_glass" });
  event.remove({
    id: "tconstruct:smeltery/casting/seared/smeltery_controller",
  });
  //--

  //#endregion

  //#region add smeltery recipes
  event
    .shaped("2x tconstruct:grout", ["ABC", "DEF", "CBA"], {
      A: "#minecraft:sand",
      B: "kubejs:ash_compound",
      C: "#forge:gravel",
      D: "tfmg:fireclay_ball",
      E: "minecraft:clay",
      F: "#forge:dusts/brick",
    })
    .id("dr2:smeltery/grout");
  
  event.custom({
    type: "tconstruct:casting_basin",
    cast: {item: 'kubejs:dry_scorched_grout'},
    cast_consumed: true,
    cooling_time: 1080,
    fluid: {
      amount: 144,
      fluid: 'tconstruct:magma'
    },
    result: 'tconstruct:nether_grout'
  }).id('dr2:smeltery/nether_grout');

  event.custom({
    type: "tconstruct:casting_basin",
    cast: {item: 'minecraft:anvil'},
    cast_consumed: true,
    cooling_time: 300,
    fluid: {
      amount: 1296,
      fluid: 'tconstruct:scorched_stone'
    },
    result: 'tconstruct:scorched_anvil'
  }).id('dr2:smeltery/scorched_anvil');

  event
    .smelting("tconstruct:seared_brick", "tconstruct:grout")
    .xp(0.5)
    .cookingTime(800)
    .id("dr2:smeltery/smelting/seared_brick");

  event.smelting('tconstruct:scorched_brick', 'tconstruct:nether_grout')
    .xp(1.0)
    .cookingTime(1800)
    .id('dr2:smeltery/smelting/scorched_brick');

  event.blasting('2x tconstruct:scorched_brick', 'tconstruct:nether_grout')
    .xp(1.5)
    .cookingTime(800)
    .id('dr2:smeltery/blasting/scorched_brick');
  // event.shaped('tconstruct:seared_bricks',[
  //     'AA',
  //     'AA'
  // ],{A:'tconstruct:seared_brick'}).id('dr2:smeltery/seared_bricks')

  event
    .shaped("tconstruct:seared_melter", ["AAA", "BCB", "DAD"], {
      A: "tconstruct:seared_glass",
      B: "tconstruct:seared_bricks",
      C: "#forge:tools/hammers",
      D: "tfmg:fireproof_bricks",
    })
    .id("dr2:smeltery/seared_melter");

  event
    .shaped("tconstruct:seared_heater", ["ABA", "BCB", "ABA"], {
      A: "tconstruct:seared_bricks",
      B: "tfmg:fireproof_bricks",
      C: "#forge:tools/hammers",
    })
    .id("dr2:smeltery/seared_heater");

  event
    .shaped("tconstruct:seared_basin", ["ABA", "CDC", "CAC"], {
      A: "tfmg:fireproof_bricks",
      B: "#forge:tools/files",
      C: "tconstruct:seared_bricks",
      D: "#forge:tools/hammers",
    })
    .id("dr2:smeltery/seared_basin");

  event
    .shaped("tconstruct:seared_table", ["ABA", "BCB", "ADA"], {
      A: "tconstruct:seared_bricks",
      B: "tfmg:fireproof_bricks",
      C: "#forge:tools/hammers",
      D: "#forge:tools/files",
    })
    .id("dr2:smeltery/seared_table");

  event
    .shaped("tconstruct:seared_drain", ["ABA", "CDC", "AEA"], {
      A: "#forge:screws/copper",
      B: "tfmg:fireproof_bricks",
      C: "#forge:plates/copper",
      D: "#forge:tools/hammers",
      E: "tconstruct:seared_bricks",
    })
    .id("dr2:smeltery/seared_drain");

  event
    .shaped("tconstruct:seared_duct", ["ABA", "CDC", "AEA"], {
      C: "#forge:screws/gold",
      B: "tfmg:fireproof_bricks",
      A: "#forge:plates/gold",
      D: "#forge:tools/hammers",
      E: "tconstruct:seared_bricks",
    })
    .id("dr2:smeltery/seared_duct");

  event
    .shaped("tconstruct:seared_chute", ["ABA", "CDE", "ABA"], {
      A: "#forge:screws/copper",
      B: "#forge:plates/copper",
      C: "tconstruct:seared_bricks",
      D: "#forge:tools/hammers",
      E: "tfmg:fireproof_bricks",
    })
    .id("dr2:smeltery/seared_chute");

  event
    .shaped("tconstruct:seared_ingot_tank", ["ABA", "CBC", "ABA"], {
      A: "tconstruct:seared_bricks",
      B: "tconstruct:seared_glass",
      C: "tfmg:fireproof_bricks",
    })
    .id("dr2:smeltery/seared_ingot_tank");

  event
    .shaped("tconstruct:seared_fuel_tank", ["ABA", "BCB", "ABA"], {
      A: "tconstruct:seared_bricks",
      B: "tfmg:fireproof_bricks",
      C: "tconstruct:seared_glass",
    })
    .id("dr2:smeltery/seared_fuel_tank");

  event
    .shaped("tconstruct:seared_glass", ["ABA", "CDC", "ABA"], {
      A: "#forge:plates/iron",
      B: "tconstruct:seared_bricks",
      C: "tfmg:fireproof_bricks",
      D: "#forge:glass",
    })
    .id("dr2:smeltery/seared_glass");
  //#endregion

  //#region add cross recipes
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
    .id("dr2:smeltery/casting/smeltery_contriller");

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
    .id("dr2:coke_oven/coke_bricks_casting");

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
    .id("dr2:coke_oven/casting/coke_oven");

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
    .id("dr2:primitive_blast_furnace/casting/primitive_blast_furnace");

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
    .id("dr2:casting/steam_machine_casing");

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
        fluid: "gtceu:lead",
      },
      result: "kubejs:lead_molded_bricks",
    })
    .id("dr2:casting/lead_foundation");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: {
        tag: "minecraft:planks",
      },
      cast_consumed: true,
      cooling_time: 90,
      fluid: {
        amount: ingot,
        fluid: "gtceu:creosote",
      },
      result: "gtceu:treated_wood_planks",
    })
    .id("dr2:casting/treated_wood_planks");

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
    .id("dr2:casting/steel_brick_casing");

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
  //#endregion

  //#region alloys recipes
  //queens slime
  event.remove({ id: "tconstruct:smeltery/alloys/molten_queens_slime" });

  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: 1440,
          fluid: "undergarden:virulent_mix_source",
        },
        {
          amount: 180,
          tag: "forge:molten_fiery",
        },
        {
          amount: 360,
          tag: "forge:magma",
        },
        {
          amount: 90,
          fluid: "gtceu:gold",
        },
      ],
      result: {
        amount: 360,
        fluid: "tconstruct:molten_queens_slime",
      },
      temperature: 1150,
    })
    .id("dr2:tconstruct/alloys/molten_queen_slime");

  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: 250,
          fluid: "tconstruct:earth_slime",
        },
        {
          amount: 90,
          fluid: "minecraft:water",
        },
      ],
      result: {
        amount: 100,
        fluid: "gtceu:glue",
      },
      temperature: 100,
    })
    .id("dr2:tconstruct/alloys/glue");

  //#endregion
};
