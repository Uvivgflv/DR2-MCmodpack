WorldgenEvents.remove(event => 
{ 
    var oreList = ['create:deepslate_zinc_ore','create:zinc_ore',
                'tfmg:deepslate_nickel_ore','tfmg:nickel_ore',
                'tfmg:deepslate_lead_ore','tfmg:lead_ore',
                'tfmg:deepslate_lithium_ore','tfmg:lithium_ore',
                'deeperdarker:sculk_stone_coal_ore', 'deeperdarker:sculk_stone_iron_ore',
        'deeperdarker:sculk_stone_gold_ore', 'deeperdarker:sculk_stone_diamond_ore',
        'deeperdarker:sculk_stone_lapis_ore', 'deeperdarker:sculk_stone_emerald_ore',
        'deeperdarker:sculk_stone_redstone_ore', 'deeperdarker:sculk_stone_copper_ore',
        'deeperdarker:gloomslate_coal_ore', 'deeperdarker:gloomslate_iron_ore',
        'deeperdarker:gloomslate_copper_ore', 'deeperdarker:gloomslate_gold_ore',
        'deeperdarker:gloomslate_emerald_ore', 'deeperdarker:gloomslate_redstone_ore',
        'deeperdarker:gloomslate_lapis_ore', 'deeperdarker:gloomslate_diamond_ore',
        'glowroot:glowroot_coppe_ore', 'glowroot:glowroot_iron_ore',
        'glowroot:glowroot_gold_ore', 'glowroot:glowroot_lapis_ore', 
        'glowroot:glowroot_emerald_ore', 'glowroot:glowroot_redstone_ore',
        'glowroot:glowroot_diamond_ore', 'malum:deepslate_quartz_ore', 'malum:natural_quartz_ore', 
        'malum:soulstone_ore', 'forbidden_arcanus:xpetrified_ore', 'malum:cthonic_gold_ore',
        'forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:runic_deepslate', 'malum:brilliant_deepslate', 'undergarden:depthrock_diamond_ore',
        'undergarden:depthrock_cloggrum_ore',
        'undergarden:shiverstone_coal_ore',
        'undergarden:shiverstone_cloggrum_ore',
        'undergarden:depthrock_coal_ore',
        'undergarden:depthrock_utherium_ore',
        'undergarden:depthrock_regalium_ore',
        'undergarden:depthrock_iron_ore',
        'undergarden:depthrock_gold_ore']

    var oreListUndergarden = [
        'undergarden:depthrock_diamond_ore',
        'undergarden:depthrock_cloggrum_ore',
        'undergarden:shiverstone_coal_ore',
        'undergarden:shiverstone_cloggrum_ore',
        'undergarden:depthrock_coal_ore',
        'undergarden:depthrock_utherium_ore',
        'undergarden:depthrock_regalium_ore',
        'undergarden:depthrock_iron_ore',
        'undergarden:depthrock_gold_ore']
    event.removeOres(props => 
        { props.worldgenLayer = 'underground_ores'
            props.blocks = oreList
        })
    event.removeOres(props =>
    {
        props.worldgenLayer = 'underground_decoration'
        props.blocks = oreListUndergarden
        console.log('undergarden ores tried to remove !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    })
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('depthrock', 'ore')
        .stateSupplier(() => Block.getBlock('undergarden:depthrock').defaultBlockState()) // 
        .baseModelLocation('undergarden:block/depthrock')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        console.log('undergarden stone type registered ')
})