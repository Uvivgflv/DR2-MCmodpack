const RegisterTConSmelteryCompat = (event) => {
  // //#region alloys compat
  // //#region sterling silver

  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: 90,
          tag: "forge:molten_copper",
        },
        {
          amount: 360,
          tag: "tconstruct:molten_silver",
        },
      ],
      result: {
        amount: 450,
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
        amount: 810,
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
        amount: 90,
        tag: "forge:sterling_silver",
      },
      temperature: 425,
      time: 23,
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
      cooling_time: 57,
      fluid: {
        amount: 90,
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
      cooling_time: 57,
      fluid: {
        amount: 90,
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
      cooling_time: 200,
      fluid: {
        amount: 810,
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
          amount: 90,
          tag: "forge:molten_iron",
        },
        {
          amount: 90,
          tag: "tconstruct:molten_tin",
        },
      ],
      result: {
        amount: 180,
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
        amount: 810,
        tag: "forge:tin_alloy",
      },
      temperature: 600,
      time: 141,
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
        amount: 90,
        tag: "forge:tin_alloy",
      },
      temperature: 600,
      time: 23,
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
      cooling_time: 57,
      fluid: {
        amount: 90,
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
      cooling_time: 57,
      fluid: {
        amount: 90,
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
      cooling_time: 200,
      fluid: {
        amount: 810,
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
        amount: 90,
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
        amount: 810,
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
        amount: 90,
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
        amount: 90,
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
        amount: 90,
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
        amount: 90,
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
          amount: 90,
          fluid: "tcintegrations:molten_soul_stained_steel",
        },
        {
          amount: 180,
          fluid: "tcintegrations:molten_manasteel",
        },
        {
          amount: 360,
          tag: "forge:relict",
        },
      ],
      result: {
        amount: 3600,
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
        amount: 90,
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
        amount: 90,
        tag: "forge:venomius",
      },
      result: {
        tag: "forge:ingots/venomius",
      },
    })
    .id("dr2:tconstruct/casting/venomius_ingot");
  //#endregion
  //#region black_bronze v0.3.2
  //alloying
  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: 270,
          tag: "forge:molten_copper",
        },
        {
          amount: 180,
          tag: "tconstruct:molten_electrum",
        },
      ],
      result: {
        amount: 450,
        tag: "forge:black_bronze",
      },
      temperature: 800,
    })
    .id("cct:compat/alloying/black_bronze");
  //melting block
  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:storage_blocks/black_bronze",
        },
      ],
      ingredient: {
        tag: "forge:storage_blocks/black_bronze",
      },
      result: {
        amount: 810,
        tag: "forge:black_bronze",
      },
      temperature: 850,
      time: 141,
    })
    .id("cct:compat/alloying/black_bronze/melting_block");
  //melting ingot
  event
    .custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/black_bronze",
        },
      ],
      ingredient: {
        tag: "forge:ingots/black_bronze",
      },
      result: {
        amount: 90,
        tag: "forge:black_bronze",
      },
      temperature: 800,
      time: 23,
    })
    .id("cct:compat/alloying/black_bronze/melting_ingot");
  //casting plate
  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/plate",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:plates/black_bronze",
        },
      ],
      cooling_time: 57,
      fluid: {
        amount: 90,
        tag: "forge:black_bronze",
      },
      result: {
        tag: "forge:plates/black_bronze",
      },
    })
    .id("cct:compat/alloyng/black_bronze/plate");
  //casting ingot
  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/black_bronze",
        },
      ],
      cooling_time: 57,
      fluid: {
        amount: 90,
        tag: "forge:black_bronze",
      },
      result: {
        tag: "forge:ingots/black_bronze",
      },
    })
    .id("cct:compat/alloyng/black_bronze/ingot");
  //casting block
  event
    .custom({
      type: "tconstruct:casting_basin",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "#forge:storage_blocks/black_bronze",
        },
      ],
      cooling_time: 200,
      fluid: {
        amount: 810,
        tag: "forge:black_bronze",
      },
      result: {
        tag: "forge:storage_blocks/black_bronze",
      },
    })
    .id("cct:compat/alloyng/black_bronze/block");
  //#endregion
  //#region large plate black bronze
  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/large_plate",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/black_bronze",
        },
      ],
      cooling_time: 350,
      fluid: {
        amount: 720,
        tag: "forge:black_bronze",
      },
      result: {
        item: "kubejs:large_plate_black_bronze",
      },
    })
    .id("dr2:compat/alloyng/black_bronze/large_plate");
  //melting this
  event
    .custom({
      type: "tconstruct:melting",
      ingredient: {
        item: "kubejs:large_plate_black_bronze",
      },
      result: {
        amount: 720,
        tag: "forge:black_bronze",
      },
      temperature: 800,
      time: 20,
    })
    .id("dr2:compat/alloying/black_bronze/melting_large_plate");
  //#endregion
  //#region large plate deorum
  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/large_plate",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: "forge:ingots/deorum",
        },
      ],
      cooling_time: 350,
      fluid: {
        amount: 720,
        tag: "forge:deorum",
      },
      result: {
        item: "kubejs:large_plate_deorum",
      },
    })
    .id("dr2:compat/alloyng/deorum/large_plate");
  //melting this
  event
    .custom({
      type: "tconstruct:melting",
      ingredient: {
        item: "kubejs:large_plate_deorum",
      },
      result: {
        amount: 720,
        tag: "forge:deorum",
      },
      temperature: 800,
      time: 20,
    })
    .id("dr2:compat/alloying/deorum/melting_large_plate");
  //#endregion
};
