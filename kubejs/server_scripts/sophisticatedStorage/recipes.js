const SophiStorageRecipesRegistry = (event) => {
  //#region consts
  const woodType = global.VanillaWoodTypes;

  let sophBarrelCraftingBasic = (output, input, input1) => {
    event.shaped(Item.of('sophisticatedstorage:barrel', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'ABA'
    ],{
      A:input,
      B:input1,
      C:'minecraft:redstone_torch',
      D:'#forge:tools/saws'
    }).id(`dr2:sophisticatedstorage/barrel/basic/${output}`);
  };

  let sopBarrelCraftingCopper = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${output}"}`), [
      'ABC',
      'DED',
      'CFA'
    ],{
      A:input,
      B:'#forge:tools/screwdrivers',
      C:'#forge:double_plates/copper',
      D:'#forge:screws/copper',
      E:Item.of('sophisticatedstorage:barrel', `{woodType:"${output}"}`).strongNBT(),
      F:'#forge:tools/hammers'
    }).id(`dr2:sophisticatedstorage/barrel/copper/${output}`);
  };

  let sophBarrelCraftingBronze = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${output}"}`), [
      'ABC',
      'DED',
      'CFA'
    ],{
      A:input,
      B:'#forge:tools/screwdrivers',
      C:'#forge:double_plates/bronze',
      D:'#forge:screws/bronze',
      E:Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${output}"}`).strongNBT(),
      F:'#forge:tools/hammers'
    }).id(`dr2:sophisticatedstorage/barrel/bronze/${output}`);
  };

  let sophBarrelCraftingCloggrumSteel = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${output}"}`), [
      'ABC',
      'DED',
      'CFA'
    ],{
      A:input,
      B:'#forge:tools/screwdrivers',
      C:'#forge:double_plates/cloggrum_steel',
      D:'#forge:screws/cloggrum_steel',
      E:Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${output}"}`).strongNBT(),
      F:'#forge:tools/hammers'
    }).id(`dr2:sophisticatedstorage/barrel/cloggrum_steel/${output}`);
  };

  let sophBarrelCraftingRelict = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${output}"}`), [
      'ABC',
      'DED',
      'CFA'
    ],{
      A:input,
      B:'#forge:tools/screwdrivers',
      C:'#forge:double_plates/relict',
      D:'#forge:screws/relict',
      E:Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${output}"}`).strongNBT(),
      F:'#forge:tools/hammers'
    }).id(`dr2:sophisticatedstorage/barrel/relict/${output}`);
  };

  let sophBarrelCraftingDesh = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:netherite_barrel', `{woodType:"${output}"}`), [
      'ABC',
      'DED',
      'CFA'
    ],{
      A:input,
      B:'#forge:tools/screwdrivers',
      C:'#forge:double_plates/desh',
      D:'#forge:screws/desh',
      E:Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${output}"}`).strongNBT(),
      F:'#forge:tools/hammers'
    }).id(`dr2:sophisticatedstorage/barrel/desh/${output}`);
  };

  let sophChestCraftingBasic = (output, input, input1) => {
    event.shaped(Item.of('sophisticatedstorage:chest', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'AEA'
    ],{
      A:input,
      B:'#forge:tools/saws',
      C:'minecraft:redstone_torch',
      D:'#dr2:chest_rings',
      E:input1
    }).id(`dr2:sophisticatedstorage/chest/basic/${output}`);
  };

  let sophChestCraftingCopper = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:copper_chest', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'EEE'
    ],{
      A:'#forge:plates/copper',
      B:'#forge:tools/hammers',
      C:input,
      D:Item.of('sophisticatedstorage:chest', `{woodType:"${output}"}`).strongNBT(),
      E:'#forge:frames/treated_wood'
    }).id(`dr2:sophisticatedstorge/chest/copper/${output}`);
  };

  let sophChestCraftingWroughtIron = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:iron_chest', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'EEE'
    ],{
      A:'#forge:plates/wrought_iron',
      B:'#forge:tools/hammers',
      C:input,
      D:Item.of('sophisticatedstorage:copper_chest', `{woodType:"${output}"}`).strongNBT(),
      E:'#forge:frames/amethyst_bronze'
    }).id(`dr2:sophisticatedstorge/chest/wrought_iron/${output}`);
  };

  let sophChestCraftingCloggrum = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:gold_chest', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'EEE'
    ],{
      A:'#forge:plates/cloggrum',
      B:'#forge:tools/hammers',
      C:input,
      D:Item.of('sophisticatedstorage:iron_chest', `{woodType:"${output}"}`).strongNBT(),
      E:'#forge:frames/deorum'
    }).id(`dr2:sophisticatedstorge/chest/cloggrum/${output}`);
  };

  let sophChestCraftingPigIron = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:diamond_chest', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'EEE'
    ],{
      A:'gtceu:pig_iron_plate',
      B:'#forge:tools/hammers',
      C:input,
      D:Item.of('sophisticatedstorage:gold_chest', `{woodType:"${output}"}`).strongNBT(),
      E:'#forge:frames/cloggrum_steel'
    }).id(`dr2:sophisticatedstorge/chest/pig_iron/${output}`);
  };

  let sophChestCraftingDesh = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:netherite_chest', `{woodType:"${output}"}`), [
      'ABA',
      'CDC',
      'EEE'
    ],{
      A:'#forge:plates/desh',
      B:'#forge:tools/hammers',
      C:input,
      D:Item.of('sophisticatedstorage:diamond_chest', `{woodType:"${output}"}`).strongNBT(),
      E:'#forge:frames/stainless_steel'
    }).id(`dr2:sophisticatedstorge/chest/desh/${output}`);
  };
  //--ограниченные бочки
  let sophLimitedBarrel1CraftBasic = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_barrel_1`, `{woodType:"${output}"}`), [
      'AB ',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/wood',
      D:Item.of('sophisticatedstorage:barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_barrel_1/basic/${output}`);
  };

  let sophLimitedBarrel2CraftBasic = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:limited_barrel_2', `{woodType:"${output}"}`), [
      ' BA',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/wood',
      D:Item.of('sophisticatedstorage:barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_barrel_2/basic/${output}`);
  };

  let sophLimitedBarrel3CraftBasic = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:limited_barrel_3', `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      ' BA'
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/wood',
      D:Item.of('sophisticatedstorage:barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_barrel_3/basic/${output}`);
  };

  let sophLimitedBarrel4CraftBasic = (output, input) => {
    event.shaped(Item.of('sophisticatedstorage:limited_barrel_4', `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      'AB '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/wood',
      D:Item.of('sophisticatedstorage:barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_barrel_4/basic/${output}`);
  };
  //--
  let sophLimitedBarrel1CraftCopper = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_copper_barrel_1`, `{woodType:"${output}"}`), [
      'AB ',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/copper',
      D:Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_copper_barrel_1/basic/${output}`);
  };

  let sophLimitedBarrel2CraftCopper = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_copper_barrel_2`, `{woodType:"${output}"}`), [
      ' BA',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/copper',
      D:Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_copper_barrel_2/basic/${output}`);
  };

  let sophLimitedBarrel3CraftCopper = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_copper_barrel_3`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      ' BA'
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/copper',
      D:Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_copper_barrel_3/basic/${output}`);
  };

  let sophLimitedBarrel4CraftCopper = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_copper_barrel_4`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      'AB '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/copper',
      D:Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_copper_barrel_4/basic/${output}`);
  };
  //--
  let sophLimitedBarrel1CraftBronze = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_iron_barrel_1`, `{woodType:"${output}"}`), [
      'AB ',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/bronze',
      D:Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_bronze_barrel_1/basic/${output}`);
  };

  let sophLimitedBarrel2CraftBronze = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_iron_barrel_2`, `{woodType:"${output}"}`), [
      ' BA',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/bronze',
      D:Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_bronze_barrel_2/basic/${output}`);
  };

  let sophLimitedBarrel3CraftBronze = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_iron_barrel_3`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      ' BA'
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/bronze',
      D:Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_bronze_barrel_3/basic/${output}`);
  };

  let sophLimitedBarrel4CraftBronze = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_iron_barrel_4`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      'AB '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/bronze',
      D:Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_bronze_barrel_4/basic/${output}`);
  };
  //--
  let sophLimitedBarrel1CraftCloggrum = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_gold_barrel_1`, `{woodType:"${output}"}`), [
      'AB ',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/cloggrum_steel',
      D:Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_cloggrum_steel_barrel_1/basic/${output}`);
  };

  let sophLimitedBarrel2CraftCloggrum = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_gold_barrel_2`, `{woodType:"${output}"}`), [
      ' BA',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/cloggrum_steel',
      D:Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_cloggrum_steel_barrel_2/basic/${output}`);
  };

  let sophLimitedBarrel3CraftCloggrum = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_gold_barrel_3`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      ' BA'
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/cloggrum_steel',
      D:Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_cloggrum_steel_barrel_3/basic/${output}`);
  };

  let sophLimitedBarrel4CraftCloggrum = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_gold_barrel_4`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      'AB '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/cloggrum_steel',
      D:Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_cloggrum_steel_barrel_4/basic/${output}`);
  };
  //--
  let sophLimitedBarrel1CraftRelict = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_diamond_barrel_1`, `{woodType:"${output}"}`), [
      'AB ',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/relict',
      D:Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_relict_barrel_1/basic/${output}`);
  };

  let sophLimitedBarrel2CraftRelict = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_diamond_barrel_2`, `{woodType:"${output}"}`), [
      ' BA',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/relict',
      D:Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_relict_barrel_2/basic/${output}`);
  };

  let sophLimitedBarrel3CraftRelict = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_diamond_barrel_3`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      ' BA'
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/relict',
      D:Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_relict_barrel_3/basic/${output}`);
  };

  let sophLimitedBarrel4CraftRelict = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_diamond_barrel_4`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      'AB '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/relict',
      D:Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_relict_barrel_4/basic/${output}`);
  };
  //--
  let sophLimitedBarrel1CraftDesh = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_netherite_barrel_1`, `{woodType:"${output}"}`), [
      'AB ',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/desh',
      D:Item.of('sophisticatedstorage:netherite_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_desh_barrel_1/basic/${output}`);
  };

  let sophLimitedBarrel2CraftDesh = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_netherite_barrel_2`, `{woodType:"${output}"}`), [
      ' BA',
      'CDC',
      ' B '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/desh',
      D:Item.of('sophisticatedstorage:netherite_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_desh_barrel_2/basic/${output}`);
  };

  let sophLimitedBarrel3CraftDesh = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_netherite_barrel_3`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      ' BA'
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/desh',
      D:Item.of('sophisticatedstorage:netherite_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_desh_barrel_3/basic/${output}`);
  };

  let sophLimitedBarrel4CraftDesh = (output, input) => {
    event.shaped(Item.of(`sophisticatedstorage:limited_netherite_barrel_4`, `{woodType:"${output}"}`), [
      ' B ',
      'CDC',
      'AB '
    ],{
      A:'#forge:tools/screwdrivers',
      B:input,
      C:'#forge:screws/desh',
      D:Item.of('sophisticatedstorage:netherite_barrel', `{woodType:"${output}"}`).strongNBT()
    }).id(`dr2:sophisticatedstorage/limited_desh_barrel_4/basic/${output}`);
  };
  //#endregion
  //#region storages
  woodType.forEach(element => {
    const wood = element.name;
    const input_slab = element.slab;
    const input_planks = `minecraft:${wood}_planks`;
    sophBarrelCraftingBasic(wood, input_planks, input_slab);
    sopBarrelCraftingCopper(wood, input_slab);
    sophBarrelCraftingBronze(wood, input_slab);
    sophBarrelCraftingCloggrumSteel(wood, input_slab);
    sophBarrelCraftingRelict(wood, input_slab);
    sophBarrelCraftingDesh(wood, input_slab);
    //--
    sophChestCraftingBasic(wood, input_planks, input_slab);
    sophChestCraftingCopper(wood, input_slab);
    sophChestCraftingWroughtIron(wood, input_slab);
    sophChestCraftingCloggrum(wood, input_slab);
    sophChestCraftingPigIron(wood, input_slab);
    sophChestCraftingDesh(wood, input_slab);
    //--
    sophLimitedBarrel1CraftBasic(wood, input_slab);
    sophLimitedBarrel2CraftBasic(wood, input_slab);
    sophLimitedBarrel3CraftBasic(wood, input_slab);
    sophLimitedBarrel4CraftBasic(wood, input_slab);

    sophLimitedBarrel1CraftCopper(wood, input_slab);
    sophLimitedBarrel2CraftCopper(wood, input_slab);
    sophLimitedBarrel3CraftCopper(wood, input_slab);
    sophLimitedBarrel4CraftCopper(wood, input_slab);

    sophLimitedBarrel1CraftBronze(wood, input_slab);
    sophLimitedBarrel2CraftBronze(wood, input_slab);
    sophLimitedBarrel3CraftBronze(wood, input_slab);
    sophLimitedBarrel4CraftBronze(wood, input_slab);

    sophLimitedBarrel1CraftCloggrum(wood, input_slab);
    sophLimitedBarrel2CraftCloggrum(wood, input_slab);
    sophLimitedBarrel3CraftCloggrum(wood, input_slab);
    sophLimitedBarrel4CraftCloggrum(wood, input_slab);

    sophLimitedBarrel1CraftRelict(wood, input_slab);
    sophLimitedBarrel2CraftRelict(wood, input_slab);
    sophLimitedBarrel3CraftRelict(wood, input_slab);
    sophLimitedBarrel4CraftRelict(wood, input_slab);

    sophLimitedBarrel1CraftDesh(wood, input_slab);
    sophLimitedBarrel2CraftDesh(wood, input_slab);
    sophLimitedBarrel3CraftDesh(wood, input_slab);
    sophLimitedBarrel4CraftDesh(wood, input_slab);

  });
  //#endregion
  //#region upgrades recipes
  //#endregion
};
