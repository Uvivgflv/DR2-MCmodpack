const RegistryStartUpItems = (event) =>{
    //event.create('fiery_scraps').displayName('Огненные обломки').glow(true).fireResistant().rarity('RARE')
    event.create('forgotter_mechanism_fragment').displayName('Фрагмент забытого механизма')
    event.create('forgotten_mechanism_core').displayName('Ядро забытого механизма')
    event.create('catalyst').displayName('Катализатор')
    event.create('ancient_fragments').displayName('Древние фрагменты')
    event.create('frost_fragment').displayName('Ледянной осколок')
    event.create('sculk_thing').displayName('Скалковые волокна')
    event.create('illager_chains').displayName('Украшения разбойников')
    event.create('corrupted_flesh').displayName('Потусторонняя ткань')
    event.create('rusty_v1').displayName('Вазилиновое дрисло')
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
}

const RegistryStartUpBlocks = (event) =>{
    event.create('unfired_coke_bricks').displayName('Необоженные коксовые кирпичи')
}