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
  });
  //#endregion
  //#region upgrades recipes
  //#endregion
};
