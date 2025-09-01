const RegistryStartUpItems = (event) =>{
    //event.create('fiery_scraps').displayName('Огненные обломки').glow(true).fireResistant().rarity('RARE')
    event.create('forgotter_mechanism_fragment').displayName('Фрагмент забытого механизма')
    event.create('forgotten_mechanism_core').displayName('Ядро забытого механизма')
    event.create('catalyst').displayName('Катализатор')
    event.create('ancient_fragments').displayName('Древние фрагменты')
    event.create('frost_fragment').displayName('Ледянной осколок')
    event.create('sculk_fibers').displayName('Скалковые волокна')
    event.create('illager_chains').displayName('Украшения разбойников')
    event.create('corrupted_flesh').displayName('Потусторонняя ткань')
    event.create('rusty_v1').displayName('Вазилиновое дрисло')
    event.create('twforest_activator').displayName('Ключ от сумеречного леса').unstackable()
    event.create('inert_dust').displayName('Инертный порошок')
    event.create('aluminum_casting_compound').displayName('Смесь для плавки алюминия')
    //фрагменты материалов редкости
    event.create('common_fragment').displayName('Осколки магического металла')
    event.create('uncommon_fragment').displayName('Обрывки ткани времени')
    event.create('rare_fragment').displayName('Крупица светящегося кристалла')
    event.create('epic_fragment').displayName('Крупицы арканы')
    event.create('legendary_fragment').displayName('Осколки жемчуженны богославленной кузни')
    //материалы крафта
    event.create('ash_compound').displayName('Зольная смесь')
    event.create('prim_glass_mix').displayName('Стеклянная смесь')
    event.create('tinned_leather').displayName('Обработанная кожа')
    event.create('raw_relict').displayName('Необработанный реликтовый металл')
    event.create('relict_ingot').displayName('Слиток реликтового металла')//ug unique material
    event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").displayName('Computation Matrix')
    //вспомогательные предметы
    event.create('iron_casing_parts').displayName('Железные детали')
    event.create('brass_casing_parts').displayName('Латунные детали')
    //drop from mobs undergarden
    event.create('fermanted_warp').displayName('Ферментированное искажение')
    event.create('under_shards').displayName('Глубинные осколки')
    //приколы
    event.create('processors_super_soup').displayName('Супер суп из процессоров').maxStackSize(16).food(food =>{
        food
        .hunger(12)
        .saturation(12)
    })
    event.create('fried_beer').displayName('Жаренное пиво').maxStackSize(4).food(food => {
        food
        .hunger(10)
        .saturation(10)
    })
    event.create('snus').displayName('Подозрительный мешочек').maxStackSize(16).food(food => {
        food
        .hunger(1)
        .saturation(20)
        .effect('minecraft:poison', 100, 0, 2)
        .removeEffect('minecraft:hunger')
    })
}

const RegistryStartUpBlocks = (event) =>{
    event.create('unfired_coke_bricks')
    .displayName('Необоженные коксовые кирпичи')
    .requiresTool(true)
    .soundType('gravel')
    .tagBlock('minecraft:mineable/shovel')

    event.create('lead_molded_bricks')
    .displayName('Залитые свинцом кирпичи')
    .requiresTool(true)
    .soundType('stone')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:mineable/wrench')
   // event.create('computation_matrix').displayName('TEST')
}
