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

  var railSlabs = [
    'minecraft:smooth_stone_slab',
    'minecraft:polished_granite_slab',
    'minecraft:granite_slab',
    'minecraft:polished_blackstone_slab',
    'unearthed:marble_slab',
    'unearthed:white_granite_slab',
    'unearthed:polished_white_granite_slab'
  ];

  var rebaredRodTwo = [
    'gtceu:long_bronze_rod',
    'gtceu:long_iron_rod'
  ];

  var rebaredRodFour = ['gtceu:long_vanadium_steel_rod', 'gtceu:long_hsla_steel_rod', 'gtceu:long_steel_rod'];
  var rebaredRodSix = ['gtceu:long_cloggrum_steel_rod', 'gtceu:long_tungsten_steel_rod'];
  //#endregion
  //#region add tags
  event.add("forge:dusts/netherrack", "create:cinder_flour");
  event.add("dr2:millstone_polished_granite", polishedGranite);
  event.add("dr2:mechanical_drill_drill_heads", mechanicalDrillDrillsHeads);
  event.add("dr2:mechanical_mixer_rotors", mechanicalMixerRotors);
  event.add("dr2:mechanical_saw_saw_blades", mechanicalSawSawBlades);
  event.add("dr2:rail_slabs", railSlabs);
  event.add('dr2:rebared_rod_two', rebaredRodTwo);
  event.add('dr2:rebared_rod_four', rebaredRodFour);
  event.add('dr2:rebared_rod_six', rebaredRodSix);
  //#endregion
};
