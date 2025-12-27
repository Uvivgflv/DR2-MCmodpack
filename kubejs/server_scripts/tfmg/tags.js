const RegisterTFMGItemTags = (event) => {
  //#region ore LIST
  var TFMGRemoveList = [
    "tfmg:lead_ore",
    "tfmg:deepslate_lead_ore",
    "tfmg:nickel_ore",
    "tfmg:deepslate_nickel_ore",
    "tfmg:lithium_ore",
    "tfmg:deepslate_lithium_ore",
    "tfmg:raw_nickel_block",
    "tfmg:raw_lead_block",
    "tfmg:raw_lithium_block",
    "tfmg:steel_block",
    "tfmg:cast_iron_block",
    "tfmg:aluminum_block",
    "tfmg:plastic_block",
    "tfmg:lead_block",
    "tfmg:constantan_block",
    "tfmg:nickel_block",
    "tfmg:lithium_block",
    "tfmg:coal_coke_block",
    /^tfmg:raw.*/,
  ];
  event.removeAllTagsFrom(TFMGRemoveList);
};
