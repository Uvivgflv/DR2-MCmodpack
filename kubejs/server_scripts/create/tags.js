//create tags
const RegisterCreateTags = (event) => {
  //#region vars
  var polishedGranite = [
    "minecraft:polished_granite",
    "unearthed:polished_white_granite",
    "gtceu:polished_red_granite",
  ];

  var mechanicalDrillDrillsHeads = [
    "gtceu:vanadium_steel_drill_head",
    "gtceu:iron_drill_head",
    "gtceu:steel_drill_head",
    "gtceu:stainless_steel_drill_head",
    "gtceu:red_steel_drill_head",
    "gtceu:blue_steel_drill_head",
  ];

  var mechanicalMixerRotors = [
    "gtceu:steel_rotor",
    "gtceu:iron_rotor",
    "gtceu:tin_rotor",
    "gtceu:bronze_rotor",
  ];

  var mechanicalSawSawBlades = [
    "gtceu:red_steel_buzz_saw_blade",
    "gtceu:blue_steel_buzz_saw_blade",
    "gtceu:iron_buzz_saw_blade",
    "gtceu:bronze_buzz_saw_blade",
    "gtceu:steel_buzz_saw_blade",
    "gtceu:vanadium_steel_buzz_saw_blade",
  ];
  //#endregion
  //#region add tags
  event.add("forge:dusts/netherrack", "create:cinder_flour");
  event.add("dr2:millstone_polished_granite", polishedGranite);
  event.add("dr2:mechanical_drill_drill_heads", mechanicalDrillDrillsHeads);
  event.add("dr2:mechanical_mixer_rotors", mechanicalMixerRotors);
  event.add("dr2:mechanical_saw_saw_blades", mechanicalSawSawBlades);
};
