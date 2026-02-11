const ItemDescRegistry = (event) => {
  const ListToolsDescr = [
    /^minecraft:.*_pickaxe/,
    /^minecraft:.*_hoe/,
    /^minecraft:.*_shovel/,
    /^immersiveengineering:pickaxe_.*/,
    /^immersiveengineering:axe_.*/,
    /^immersiveengineering:sword_.*/,
    /^immersiveengineering:hoe_.*/,
    /^immersiveengineering:shovel_.*/,
    /^twilightforest:(?!giant_pickaxe).*_pickaxe/,
    /^twilightforest:(?!(gold_minotaur_axe|diamond_minotaur_axe)).*_axe/,
    /^twilightforest:.*_shovel/,
    /^twilightforest:.*_hoe/
  ];

  ListToolsDescr.forEach(element => {
    const item_id = element;
    event.add(item_id, Text.of("Данный инструмент удален из игры,\nно может использоватся в рецептах или переработке!!!").darkRed());
  });
  event.add('supplementaries:antique_ink', "Выпадает с урн в подземельях!")
  event.add("kubejs:inert_dust", "Дроп с Криперов 10-15 уровня!");
  event.add("kubejs:catalyst", "Дроп с Криперов 5-10 уровня!");
  event.add("kubejs:forgotter_mechanism_fragment", "Дроп с Зомби 5-10 уровня!");
  event.add(
    "kubejs:forgotten_mechanism_core",
    "Дроп со Скелетов иссушителей 5-10 уровня!",
  );
  event.add("kubejs:snus", "Дроп с Зомби-крестянина 5-10 уровня!");
  event.add(
    [
      "kubejs:common_fragment",
      "kubejs:uncommon_fragment",
      "kubejs:rare_fragment",
      "kubejs:epic_fragment",
      "kubejs:legendary_fragment",
    ],
    "Дроп с существ Сумеречного леса 1-30 уровня!",
  );
  event.add('kubejs:old_fabric', 'Низкокачественная ткань. Дроп со Скелетов 2-10 уровня!');
};

const RegistryItemModification = (event) => {
  event.add(
    "kubejs:twforest_activator",
    Text.translate(`tooltip.kubejs.twforest_activator_tooltip`),
  );
  event.add(
    "kubejs:large_plate_black_bronze",
    Text.translate(`tooltip.kubejs.large_plate_black_bronze`),
  );
  event.add(
    "kubejs:large_plate_deorum",
    Text.translate(`tooltip.kubejs.large_plate_deorum`),
  );
  event.add(
    "kubejs:gold_spellbook_blank",
    Text.translate(`tooltip.kubejs.gold_spellbook_blank`),
  );
  //продолжить
};
