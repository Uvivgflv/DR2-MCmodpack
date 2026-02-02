const RegistryIronsSpellbooksRecipes = (event) => {
  //#region add recipes for staffs
  event.shaped('irons_spellbooks:graybeard_staff', [
    ' AB',
    'CDA',
    'EF '
  ],{
    A:'#forge:bolts/wood',
    B:'irons_spellbooks:arcane_essence',
    C:'#forge:tools/saws',
    D:'#forge:rods/long/wood',
    E:'#forge:rings/wrought_iron',
    F:'#forge:tools/files'
  }).id('dr2:irons_spellbooks/graybeard_staff');
  //#endregion

  //#region add recipes for spell books
  event.shaped('irons_spellbooks:copper_spell_book',[
    'ABC',
    'ADE',
    'AFE'
  ],{
    A:'#forge:foils/copper',
    B:'irons_spellbooks:arcane_essence',
    C:'#gtceu:tools/crafting_knives',
    D:'minecraft:book',
    E:'#forge:string',
    F:'#gtceu:tools/crafting_mallets'
  }).id('dr2:irons_spellbooks/copper_spell_book');
  //#endregion

  //#region add recipes for armors
  //wandering magician armor
  event.shaped('irons_spellbooks:wandering_magician_helmet', [
    'ABA',
    'BCB',
    'DED'
  ],{
    A:'irons_spellbooks:arcane_essence',
    B:'#dr2:cloth_low_quality',
    C:Item.of('minecraft:leather_helmet', '{Damage:0}').strongNBT(),
    D:'#forge:foils/gold',
    E:'#forge:string'
  }).id('dr2:irons_spellbooks/wandering_magician_helmet');

  event.shaped("irons_spellbooks:wandering_magician_chestplate", [
    'ABA',
    'CDC',
    'CEC'
  ],{
    A:'irons_spellbooks:arcane_essence',
    B:Item.of('minecraft:leather_chestplate', '{Damage:0}').strongNBT(),
    C:'#forge:foils/gold',
    D:'#dr2:cloth_low_quality',
    E:'#forge:dyes/red'
  }).id('dr2:irons_spellbooks/wandering_magician_chestplate');

  event.shaped("irons_spellbooks:wandering_magician_leggings", [
    'ABC',
    'DED',
    ' F '
  ],{
    A:'irons_spellbooks:arcane_essence',
    B:'#forge:foils/gold',
    C:Item.of('tconstruct:tough_binding', '{Material:"tconstruct:leather"}').strongNBT(),
    D:'#dr2:cloth_low_quality',
    E:Item.of('minecraft:leather_leggings', '{Damage:0}').strongNBT(),
    F:'#forge:string'
  }).id('dr2:irons_spellbooks/wandering_magician_leggings');

  event.shaped("irons_spellbooks:wandering_magician_boots", [
    'ABC',
    'DED',
    ' F '
  ],{
    A:'irons_spellbooks:arcane_essence',
    B:'#forge:foils/gold',
    C:Item.of('tconstruct:tough_binding', '{Material:"tconstruct:leather"}').strongNBT(),
    D:'#dr2:cloth_low_quality',
    E:Item.of('minecraft:leather_boots', '{Damage:0}').strongNBT(),
    F:'#forge:string'
  }).id('dr2:irons_spellbooks/wandering_magician_boots');
  //pumpkin armor
  event.shaped('irons_spellbooks:pumpkin_helmet', [
    'ABC',
    'DED',
    'FGF'
  ],{
    A:'#forge:rings/tin',
    B:'irons_spellbooks:magic_cloth',
    C:'#forge:string',
    D:'#dr2:cloth_low_quality',
    E:'minecraft:carved_pumpkin',
    F:'#supplementaries:straw',
    G:Item.of('minecraft:leather_helmet', '{Damage:0}').strongNBT()
  }).id('dr2:irons_spellbooks/pumpkin_helmet');

  event.shaped('irons_spellbooks:pumpkin_chestplate', [
    'ABA',
    'CDC',
    'CDC'
  ],{
    A:'#forge:string',
    B:'irons_spellbooks:magic_cloth',
    C:'#dr2:cloth_low_quality',
    D:'kubejs:tinned_leather'
  }).id('dr2:irons_spellbooks/pumpkin_chestplate');

  event.shaped('irons_spellbooks:pumpkin_leggings', [
    'ABA',
    'CDC',
    'EDE'
  ],{
    A:'#dr2:cloth_low_quality',
    B:'irons_spellbooks:magic_cloth',
    C:'kubejs:tinned_leather',
    D:'#forge:string',
    E:'#supplementaries:straw',
  }).id('dr2:irons_spellbooks/pumpkin_leggings');

  event.shaped('irons_spellbooks:pumpkin_boots', [
    'ABA',
    'CAC',
    'DED'
  ],{
    A:'#forge:string',
    B:'irons_spellbooks:magic_cloth',
    C:'#dr2:cloth_low_quality',
    D:'kubejs:tinned_leather',
    E:'#supplementaries:straw'
  }).id('dr2:irons_spellbooks/pumpkin_boots');
  //#endregion
};
