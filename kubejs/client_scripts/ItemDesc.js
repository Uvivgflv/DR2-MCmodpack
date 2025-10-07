const ItemDescRegistry = event =>{
    event.add('kubejs:inert_dust', 'Дроп с Криперов 10-15 уровня!')
    event.add('kubejs:catalyst', 'Дроп с Криперов 5-10 уровня!')
    event.add('kubejs:forgotter_mechanism_fragment', 'Дроп с Зомби 5-10 уровня!')
    event.add('kubejs:forgotten_mechanism_core', 'Дроп со Скелетов иссушителей 5-10 уровня!')
    event.add('kubejs:snus', 'Дроп с Зомби-крестянина 5-10 уровня!')
    event.add([
        'kubejs:common_fragment',
        'kubejs:uncommon_fragment',
        'kubejs:rare_fragment',
        'kubejs:epic_fragment',
        'kubejs:legendary_fragment'
    ], 'Дроп с существ Сумеречного леса 1-30 уровня!')
}