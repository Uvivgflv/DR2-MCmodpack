const TconstructSmelteryCompatRegister = (event) => {
//#region consts
  const ingot = global.IngotUnit;
  const nugget = global.NuggetUnit;
  const block = global.BlockUnit;
  const second = 20;

  const Alloys = [
    {name: 'tin_alloy', component1: 'gtceu:tin', component2: 'gtceu:iron', value: '1:1=2', temp: 900},
    {name: 'red_alloy', component1: 'gtceu:redstone', component2: 'gtceu:copper', value: '4:1=1', temp: 980}
  ];

  let AlloyingRecipe112 = (input1, input2, output, temp) => {
    event.custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: ingot,
          fluid: input1,
        },
        {
          amount: ingot,
          fluid: input2,
        }
      ],
      result: {
        amount: ingot*2,
        fluid: output,
      },
      temperature: temp
    }).id(`dr2:tconstruct/compat/alloy/${output.replace('gtceu:', '')}`);
  };

//#endregion

//#region alloys
  event.custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: ingot*4,
          fluid: 'gtceu:redstone',
        },
        {
          amount: ingot,
          fluid: 'gtceu:copper',
        }
      ],
      result: {
        amount: ingot,
        fluid: 'gtceu:red_alloy',
      },
      temperature: 980
  }).id('dr2:tconstruct/compat/alloy/red_alloy');

  event.custom({
      type: "tconstruct:alloy",
      inputs: [
        {
          amount: ingot,
          fluid: 'gtceu:tin',
        },
        {
          amount: ingot,
          fluid: 'gtceu:iron',
        }
      ],
      result: {
        amount: ingot,
        fluid: 'gtceu:tin_alloy',
      },
      temperature: 900
  }).id('dr2:tconstruct/compat/alloy/tin_alloy');

  
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
