GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        console.log("Modifying vein: " + id)
        vein.density(0.5)
    })
    event.modify("gtceu:oilsands_vein", vein => {
        vein.density(0.1)
        vein.weight(8)
    })
    event.modify("gtceu:apatite_vein", vein => {
        vein.density(0.1)
    })
    
    event.remove("gtceu:redstone_vein_ow") 
    
    event.modify("gtceu:magnetite_vein_ow", vein => {
        vein.density(0.12)
        vein.weight(35)
    })
    event.modify("gtceu:lapis_vein", vein => {
        vein.density(0.1)
    })
    event.modify("gtceu:nickel_vein", vein => {
        vein.weight(22)
    })
    event.modify("gtceu:diamond_vein", vein => {
        vein.density(0.11)
        vein.weight(16)
    })
    event.modify("gtceu:mica_vein", vein =>{
        vein.density(0.15)
    })
    event.modify("gtceu:sapphire_vein", vein =>{
        vein.density(0.12)
        vein.weight(15)
    })
    event.modify("gtceu:garnet_vein", vein =>{
        vein.density(0.1)
    })
    event.modify("gtceu:garnet_tin_vein", vein =>{
        vein.density(0.08)
    })
    event.modify("gtceu:lubricant_vein", vein =>{
        vein.density(0.2)
    })
    event.modify("gtceu:olivine_vein", vein =>{
        vein.density(0.08)
    })
    event.modify("gtceu:saltpeter_vein", vein =>{
        vein.density(0.1)
    })
    event.modify("gtceu:nether_quartz_vein", vein =>{
        vein.density(0.15)
    })
    event.modify("gtceu:sulfur_vein", vein =>{
        vein.density(0.2)
    })
    event.modify("gtceu:certus_quartz", vein =>{
        vein.density(0.15)
    })
    event.modify("gtceu:monazite_vein", vein =>{
        vein.density(0.06)
    })
    event.modify("gtceu:salts_vein", vein =>{
        vein.density(0.06)
    })
    event.modify("gtceu:mineral_sand_vein", vein =>{
        vein.density(0.08)
    })
})