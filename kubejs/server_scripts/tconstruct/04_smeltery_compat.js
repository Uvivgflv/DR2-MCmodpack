const TconstructSmelteryCompatRegister = (event) => {
  //#region unit consts
  const ingot = global.IngotUnit;
  const nugget = global.NuggetUnit;
  const block = global.BlockUnit;
  const second = 20;
//#endregion
  //#region alloys compat
  //#region sterling silver
  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: ingot,
          tag: "forge:molten_copper",
        },
        {
          amount: ingot*4,
          tag: "tconstruct:molten_silver",
        },
      ],
      result: {
        amount: ingot*5,
        tag: "forge:sterling_silver",
      },
      temperature: 820,
    })
    .id("cct:compat/alloying/sterling_silver");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:storage_blocks/sterling_silver",
        },
      ],
      ingredient: {
        tag: "forge:storage_blocks/sterling_silver",
      },
      result: {
        amount: block,
        tag: "forge:sterling_silver",
      },
      temperature: 425,
      time: 141,
    })
    .id("cct:compat/alloying/sterling_silver/melting_block");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/sterling_silver",
        },
      ],
      ingredient: {
        tag: "forge:ingots/sterling_silver",
      },
      result: {
        amount: ingot,
        tag: "forge:sterling_silver",
      },
      temperature: 425,
      time: second*4,
    })
    .id("cct:compat/alloying/sterling_silver/melting_ingot");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/plate",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:plates/sterling_silver",
        },
      ],
      cooling_time: second*4,
      fluid: {
        amount: ingot,
        tag: "forge:sterling_silver",
      },
      result: {
        tag: "forge:plates/sterling_silver",
      },
    })
    .id("cct:compat/alloyng/sterling_silver/plate");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/sterling_silver",
        },
      ],
      cooling_time: second*4,
      fluid: {
        amount: ingot,
        tag: "forge:sterling_silver",
      },
      result: {
        tag: "forge:ingots/sterling_silver",
      },
    })
    .id("cct:compat/alloyng/sterling_silver/ingot");

  event
    .custom({
      type: "tconstruct:casting_basin",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "#forge:storage_blocks/sterling_silver",
        },
      ],
      cooling_time: second*10,
      fluid: {
        amount: block,
        tag: "forge:sterling_silver",
      },
      result: {
        tag: "forge:storage_blocks/sterling_silver",
      },
    })
    .id("cct:compat/alloyng/sterling_silver/block");
  //#endregion
  //#region tin_alloy
  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: ingot,
          tag: "forge:molten_iron",
        },
        {
          amount: ingot,
          tag: "tconstruct:molten_tin",
        },
      ],
      result: {
        amount: ingot*2,
        tag: "forge:tin_alloy",
      },
      temperature: 820,
    })
    .id("cct:compat/alloying/tin_alloy");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:storage_blocks/tin_alloy",
        },
      ],
      ingredient: {
        tag: "forge:storage_blocks/tin_alloy",
      },
      result: {
        amount: block,
        tag: "forge:tin_alloy",
      },
      temperature: 600,
      time: second*9,
    })
    .id("cct:compat/alloying/tin_alloy/melting_block");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/tin_alloy",
        },
      ],
      ingredient: {
        tag: "forge:ingots/tin_alloy",
      },
      result: {
        amount: ingot,
        tag: "forge:tin_alloy",
      },
      temperature: 600,
      time: second,
    })
    .id("cct:compat/alloying/tin_alloy/melting_ingot");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/plate",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:plates/tin_alloy",
        },
      ],
      cooling_time: second*2,
      fluid: {
        amount: ingot,
        tag: "forge:tin_alloy",
      },
      result: {
        tag: "forge:plates/tin_alloy",
      },
    })
    .id("cct:compat/alloyng/tin_alloy/plate");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/tin_alloy",
        },
      ],
      cooling_time: second*2,
      fluid: {
        amount: ingot,
        tag: "forge:tin_alloy",
      },
      result: {
        tag: "forge:ingots/tin_alloy",
      },
    })
    .id("cct:compat/alloyng/tin_alloy/ingot");

  event
    .custom({
      type: "tconstruct:casting_basin",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "#forge:storage_blocks/tin_alloy",
        },
      ],
      cooling_time: second*10,
      fluid: {
        amount: block,
        tag: "forge:tin_alloy",
      },
      result: {
        tag: "forge:storage_blocks/tin_alloy",
      },
    })
    .id("cct:compat/alloyng/tin_alloy/block");
  //     //#endregion
  // //#region red_alloy
  //#region redstone melting
  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:dusts/redstone",
        },
      ],
      ingredient: {
        tag: "forge:dusts/redstone",
      },
      result: {
        amount: ingot,
        tag: "forge:redstone",
      },
      temperature: 300,
      time: 23,
    })
    .id("cct:compat/alloying/melting_redstone");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:storage_blocks/redstone",
        },
      ],
      ingredient: {
        tag: "forge:storage_blocks/redstone",
      },
      result: {
        amount: block,
        tag: "forge:redstone",
      },
      temperature: 300,
      time: 200,
    })
    .id("cct:compat/alloying/melting_redstone_block");
  // //#endregion
  //#region venomius
  //melting venomius
  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:dusts/venomius",
        },
      ],
      ingredient: {
        tag: "forge:dusts/venomius",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:venomius",
      },
      temperature: 1300,
      time: 23,
    })
    .id("dr2:compat/alloying/melting_venomius_dust");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/venomius",
        },
      ],
      ingredient: {
        tag: "forge:ingots/venomius",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:venomius",
      },
      temperature: 1300,
      time: 23,
    })
    .id("dr2:compat/alloying/melting_venomius_ingot");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:dusts/relict",
        },
      ],
      ingredient: {
        tag: "forge:dusts/relict",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:relict",
      },
      temperature: 1300,
      time: 23,
    })
    .id("dr2:compat/alloying/melting_relict_dust");

  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/relict",
        },
      ],
      ingredient: {
        tag: "forge:ingots/relict",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:relict",
      },
      temperature: 1300,
      time: 23,
    })
    .id("dr2:compat/alloying/melting_relict_ingot");

  //alloying venomius
  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: 1440,
          fluid: "undergarden:virulent_mix_source",
        },
        {
          amount: ingot,
          fluid: "tcintegrations:molten_soul_stained_steel",
        },
        {
          amount: ingot*2,
          fluid: "tcintegrations:molten_manasteel",
        },
        {
          amount: ingot*4,
          tag: "forge:relict",
        },
      ],
      result: {
        amount: ingot*8,
        tag: "forge:venomius",
      },
      temperature: 1300,
    })
    .id("dr2:tconstruct/alloys/molten_venomuis");
  //casting
  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/relict",
        },
      ],
      cooling_time: 77,
      fluid: {
        amount: ingot,
        tag: "forge:relict",
      },
      result: {
        tag: "forge:ingots/relict",
      },
    })
    .id("dr2:tconstruct/casting/relict_ingot");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/venomius",
        },
      ],
      cooling_time: 80,
      fluid: {
        amount: ingot,
        tag: "forge:venomius",
      },
      result: {
        tag: "forge:ingots/venomius",
      },
    })
    .id("dr2:tconstruct/casting/venomius_ingot");
  //#endregion
  //#region vanilla raw ores
  event.custom({
    type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:raw_materials/gold",
        },
      ],
      ingredient: {
        tag: "forge:raw_materials/gold",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:gold",
      },
      temperature: 700,
      time: second*2,
    }).id('dr2:tconstruct/melting/raw_gold');

    event.custom({
    type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:raw_materials/copper",
        },
      ],
      ingredient: {
        tag: "forge:raw_materials/copper",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:copper",
      },
      temperature: 500,
      time: second*2,
    }).id('dr2:tconstruct/melting/raw_copper');

    event.custom({
    type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:raw_materials/tin",
        },
      ],
      ingredient: {
        tag: "forge:raw_materials/tin",
      },
      result: {
        amount: ingot,
        fluid: "gtceu:tin",
      },
      temperature: 300,
      time: second*2,
    }).id('dr2:tconstruct/melting/raw_tin');
  //#endregion 
};
