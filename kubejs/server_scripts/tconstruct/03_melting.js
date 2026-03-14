const TconstructMeltingRecipesRegistry = (event) => {
//#region consts
  const ingot = global.IngotUnit;
  const nugget = global.NuggetUnit;
  const block = global.BlockUnit;
  const second = 20;
  //consts for compat 
  const Materials = [
    {type: 'alloy', name: 'wrought_iron', ingotTag: 'forge:ingots/wrought_iron', blockTag: 'forge:storage_blocks/wrought_iron', defaultFluid: 'gtceu:wrought_iron', timeIngot: second*2, timeBlock: (second*2)*9, temp: 900},
    {type: 'alloy', name: 'red_alloy', ingotTag: 'forge:ingots/red_alloy', blockTag: 'forge:storage_blocks/red_alloy', defaultFluid: 'gtceu:red_alloy', timeIngot: second*1, timeBlock: (second*2)*9, temp: 500},
    {type: 'alloy', name: 'sterling_silver', ingotTag: 'forge:ingots/sterling_silver', blockTag: 'forge:storage_blocks/sterling_silver', defaultFluid: 'gtceu:sterling_silver', timeIngot: second*4, timeBlock: (second*4)*9, temp: 790},
    {type: 'alloy', name: 'potin', ingotTag: 'forge:ingots/potin', blockTag: 'forge:storage_blocks/potin', defaultFluid: 'gtceu:potin', timeIngot: second*2, timeBlock: (second*2)*9, temp: 650},
    {type: 'alloy', name: 'tin_alloy', ingotTag: 'forge:ingots/tin_alloy', blockTag: 'forge:storage_blocks/tin_alloy', defaultFluid: 'gtceu:tin_alloy', timeIngot: second, timeBlock: second*9, temp: 360},
    {type: 'alloy', name: 'venomius', ingotTag: 'forge:ingots/venomius', blockTag: 'forge:storage_blocks/venomius', defaultFluid: 'gtceu:venomius', timeIngot: second*9, timeBlock: (second*9)*9, temp: 1200},
    {type: 'ore', name: 'relict', raw: 'forge:raw_materials/relict', ingotTag: 'forge:ingots/relict', blockTag: 'forge:storage_blocks/relict', defaultFluid: 'gtceu:relict', timeIngot: second*3, timeBlock: (second*3)*9, temp: 980},
    {type: 'ore', name: 'cloggrum', raw: 'forge:raw_materials/cloggrum', ingotTag: 'forge:ingots/cloggrum', blockTag: 'forge:storage_blocks/cloggrum', defaultFluid: 'gtceu:cloggrum', timeIngot: second*5, timeBlock: (second*5)*9, temp: 800},
    {type: 'alloy', name: 'cloggrum_steel', ingotTag: 'forge:ingots/cloggrum_steel', blockTag: 'forge:storage_blocks/cloggrum_steel', defaultFluid: 'gtceu:cloggrum_steel', timeIngot: second*4, timeBlock: (second*4)*9, temp: 1000},
    {type: 'alloy', name: 'amethyst_bronze', ingotTag: 'forge:ingots/amethyst_bronze', blockTag: 'forge:storage_blocks/amethyst_bronze', defaultFluid: 'tconstruct:molten_amethyst_bronze', timeIngot: second*5, timeBlock: (second*5)*9, temp: 820},
   // {type: 'ore', name: 'iron', raw: ''}
  ];

  let MeltingIngotByTag = (output, input, time, temp) => {
    if(/^forge:ingots\/.*/.test(input)){
      event.custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: input,
        },
      ],
      ingredient: {
        tag: input,
      },
      result: {
        amount: ingot,
        fluid: output,
      },
      temperature: temp,
      time: time,
      }).id(`dr2:tconstruct/compat/melting_igot_tag_${input.replace('forge:ingots/', '')}`);
    }else{
      console.log(`Tag mismatch for ${input}, skip recipe...`);
    };
  };

  let MeltiniigBlockByTag = (output, input, time, temp) => {
    if(/^forge:storage_blocks\/.*/.test(input)){
      event.custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: input,
        },
      ],
      ingredient: {
        tag: input,
      },
      result: {
        amount: ingot,
        fluid: output,
      },
      temperature: temp,
      time: time,
      }).id(`dr2:tconstruct/compat/melting_block_tag_${input.replace('forge:storage_blocks/', '')}`);
    }else{
      console.log(`Tag mismatch for ${input}, skip recipe...`);
    };
  };

  let CastingIngotTagFromFluid = (output, fluid, time) => {
    if(/^forge:ingots\/.*/.test(output)){
      event.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/ingot",
      },
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: output,
        },
      ],
      cooling_time: time,
      fluid: {
        amount: ingot,
        fluid: fluid,
      },
      result: {
        tag: output,
      }
    }).id(`dr2:tconstruct/compat/casting_ingot_tag_${output.replace('forge:ingots/', '')}`);
    }else{
      console.log(`Tag mismatch for ${output}, skip recipe...`);
    };
  };

  let CastingBasinBlockTagFromFluid = (output, fluid, time) => {
    if(/^forge:storage_blocks\/.*/.test(output)){
      event.custom({
        type: "tconstruct:casting_basin",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: output,
        },
      ],
      cooling_time: time,
      fluid: {
        amount: block,
        fluid: fluid,
      },
      result: {
        tag: output,
      },
    }).id(`dr2:tconstruct/compat/casting_block_tag_${output.replace('forge:storage_blocks/', '')}`);
    }else{
    console.log(`Tag mismatch for ${output}, skip recipe...`);
    };
  };

  let RawOreMeltingInFluid = (fluid, input, temp, time, condition) => {
    if(condition == 'ore'){
      event.custom({
      type: "tconstruct:melting",
      conditions: [
        {
          type: "mantle:tag_filled",
          tag: input,
        },
      ],
      ingredient: {
        tag: input,
      },
      result: {
        amount: ingot,
        fluid: fluid,
      },
      temperature: temp,
      time: time,
      }).id(`dr2:tconstruct/compat/melting_ore_tag_${input.replace('forge:raw_materials/', '')}`);
    }else{
      console.log(`Material ${input.replace('forge:raw_materials/', '')} is not "ORE"`);
    }
    
  }

//#endregion
  //#region add Materials compat
  //custom materials and compatin materials melting/casting
  Materials.forEach(element => {
    const ingot_tag = element.ingotTag;
    const block_tag = element.blockTag;
    const fluid = element.defaultFluid;
    const ingot_time = element.timeIngot;
    const block_time = element.timeBlock;
    const temp = element.temp;
    const condition = element.type;
    const ore = element.raw;
    const time_cool = Math.floor(element.timeIngot/2);

    MeltingIngotByTag(fluid, ingot_tag, ingot_time, temp);
    MeltiniigBlockByTag(fluid, block_tag, block_time, temp);
    CastingIngotTagFromFluid(ingot_tag, fluid, time_cool);
    CastingBasinBlockTagFromFluid(block_tag, fluid, time_cool);
    if(ore !== undefined){
      RawOreMeltingInFluid(fluid, ore, temp, ingot_time, condition);
    };
  })
  //#endregion
};
