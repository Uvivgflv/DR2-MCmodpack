const RemoveOres = event =>{
//#region ore lists
    var oreList = [
        'create:deepslate_zinc_ore','create:zinc_ore',
        'tfmg:deepslate_nickel_ore','tfmg:nickel_ore',
        'tfmg:deepslate_lead_ore','tfmg:lead_ore',
        'tfmg:deepslate_lithium_ore','tfmg:lithium_ore',
        'deeperdarker:sculk_stone_coal_ore',
        'deeperdarker:sculk_stone_iron_ore',
        'deeperdarker:sculk_stone_gold_ore',
        'deeperdarker:sculk_stone_diamond_ore',
        'deeperdarker:sculk_stone_lapis_ore',
        'deeperdarker:sculk_stone_emerald_ore',
        'deeperdarker:sculk_stone_redstone_ore',
        'deeperdarker:sculk_stone_copper_ore',
        'deeperdarker:gloomslate_coal_ore',
        'deeperdarker:gloomslate_iron_ore',
        'deeperdarker:gloomslate_copper_ore',
        'deeperdarker:gloomslate_gold_ore',
        'deeperdarker:gloomslate_emerald_ore',
        'deeperdarker:gloomslate_redstone_ore',
        'deeperdarker:gloomslate_lapis_ore',
        'deeperdarker:gloomslate_diamond_ore',
        'glowroot:glowroot_coppe_ore',
        'glowroot:glowroot_iron_ore',
        'glowroot:glowroot_gold_ore',
        'glowroot:glowroot_lapis_ore', 
        'glowroot:glowroot_emerald_ore',
        'glowroot:glowroot_redstone_ore',
        'glowroot:glowroot_diamond_ore',
        'malum:deepslate_quartz_ore',
        'malum:natural_quartz_ore', 
        'malum:soulstone_ore',
        'forbidden_arcanus:xpetrified_ore',
        'malum:cthonic_gold_ore',
        'forbidden_arcanus:arcane_crystal_ore',
        'forbidden_arcanus:runic_deepslate',
        'malum:brilliant_deepslate',
        'undergarden:depthrock_diamond_ore',
        'undergarden:depthrock_cloggrum_ore',
        'undergarden:shiverstone_coal_ore',
        'undergarden:shiverstone_cloggrum_ore',
        'undergarden:depthrock_coal_ore',
        'undergarden:depthrock_utherium_ore',
        'undergarden:depthrock_regalium_ore',
        'undergarden:depthrock_iron_ore',
        'undergarden:depthrock_gold_ore',
        'glowroot:glowroot_coal_ore',
        'dungeons_and_combat:titanium_ore',
        'dungeons_and_combat:titanium_deepslate_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:deepslate_ostrum_ore',
        'ad_astra:deepslate_calorite_ore'
    ]

    var oreListUndergarden = [
        'undergarden:depthrock_diamond_ore',
        'undergarden:depthrock_cloggrum_ore',
        'undergarden:shiverstone_coal_ore',
        'undergarden:shiverstone_cloggrum_ore',
        'undergarden:depthrock_coal_ore',
        'undergarden:depthrock_utherium_ore',
        'undergarden:depthrock_regalium_ore',
        'undergarden:depthrock_iron_ore',
        'undergarden:depthrock_gold_ore',
        'glowroot:glowroot_coppe_ore',
        'glowroot:glowroot_iron_ore',
        'glowroot:glowroot_gold_ore',
        'glowroot:glowroot_lapis_ore', 
        'glowroot:glowroot_emerald_ore',
        'glowroot:glowroot_redstone_ore',
        'glowroot:glowroot_diamond_ore',
        'glowroot:glowroot_coal_ore'
    ]

    var oreListMoon = [
        'ad_astra:moon_cheese_ore', //remove
        'ad_astra:moon_desh_ore', //replace
        'ad_astra:moon_iron_ore', //replace
        'ad_astra:moon_ice_shard_ore' //remove
    ]

    var oreListMars = [
        'ad_astra:mars_iron_ore', //replace
        'ad_astra:mars_diamond_ore', //replace
        'ad_astra:mars_ostrum_ore', //replace
        'ad_astra:mars_ice_shard_ore' //remove
    ]

    var oreListVenus = [
        'ad_astra:venus_coal_ore', //replae
        'ad_astra:venus_gold_ore', //replace
        'ad_astra:venus_diamond_ore', //remove
        'ad_astra:venus_calorite_ore' //replace
    ]

    var oreListMercury = [
        'ad_astra:mercury_iron_ore' //replace
    ]

    var oreListInfLayers = [
        'infinite_abyss:opal_ore'
    ]

    var oreListMidnight = [
        'midnight:virilux_ore',
        'midnight:dark_pearl_ore',
        'midnight:tenebrum_ore',
        'midnight:nagrilite_ore',
        'midnight:rendium_ore',
        'midnight:ebonite_ore'
    ]
//#endregion

//#region ores remove
    event.removeOres(props =>
        { props.worldgenLayer = 'underground_ores'
            props.blocks = oreListMidnight
        }
    )
    event.removeOres(props =>{
        props.worldgenLayer = 'underground_decoration'
        props.blocks = 'midnight:virilux_ore'
    })
    event.removeOres(props => 
        { props.worldgenLayer = 'underground_ores'
            props.blocks = oreList
        })
    event.removeOres(props =>{
        props.worldgenLayer = 'underground_ores'
        props.blocks = oreListMoon
    })
    event.removeOres(props =>{
        props.worldgenLayer = 'underground_ores'
        props.blocks = oreListMars
    })
    event.removeOres(props =>{
        props.worldgenLayer = 'underground_ores'
        props.blocks = oreListVenus
    })
    event.removeOres(props =>{
        props.worldgenLayer = 'underground_ores'
        props.blocks = oreListMercury
    })
    event.removeOres(props =>
    {
        props.worldgenLayer = 'underground_decoration'
        props.blocks = oreListUndergarden
    })

    event.removeOres(props =>
    {
        props.worldgenLayer = 'underground_ores'
        props.blocks = oreListInfLayers
    })

    //event.removeFeature('gtceu:raw_oil_sprout')
//#endregion
}
//#region oreblocks
