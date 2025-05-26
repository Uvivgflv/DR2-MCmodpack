WorldgenEvents.remove(event => 
{ 
    event.removeOres(props => 
        { props.worldgenLayer = 'underground_ores';
             props.blocks = [
                //tfmg ores & create zinc
                'create:deepslate_zinc_ore','create:zinc_ore',
                'tfmg:deepslate_nickel_ore','tfmg:nickel_ore',
                'tfmg:deepslate_lead_ore','tfmg:lead_ore',
                'tfmg:deepslate_lithium_ore','tfmg:lithium_ore',
                'tconstruct:cobalt_ore'
                ] 
        }) 
})