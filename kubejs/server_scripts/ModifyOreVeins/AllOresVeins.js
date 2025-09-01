GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:redstone_vein_ow")//nether
    event.remove("gtceu:salts_vein")//undergarden
    event.remove("gtceu:lapis_vein")//twilightforest
    event.remove("gtceu:manganese_vein_ow")//undergarden
    event.remove("gtceu:olivine_vein")//twilightforest
    event.remove("gtceu:mica_vein")//undergarden 
    event.remove("gtceu:nickel_vein")//twilightforest кобальт никель руда камня душ
    event.remove("gtceu:sapphire_vein")//twilightforest альмандин пироп сапфир зеленый сапфир
    event.remove("gtceu:garnet_tin_vein")//undergarden касетиритовый песок гранатовый песок асбест диотомовый пелит
    event.remove("gtceu:galena_vein")//undergarden галена серебро свинец
    event.remove("gtceu:apatite_vein")//undergarden апатит трикальцийфосфат пирохлор
    event.remove("gtceu:oilsands_vein")// undergarden

    event.modifyAll((id, vein) => {
        console.log("Modifying vein:" + id)
        vein.density(0.06)
        vein.weight(1)
    })
    event.modify("gtceu:copper_tin_vein", vein => {
        vein.density(0.4)
        vein.heightRangeUniform(-60, 32)
    })
    event.modify("gtceu:copper_vein", vein =>{
        vein.density(0.4)
        vein.heightRangeUniform(-60, 32)
    })
    event.modify("gtceu:magnetite_vein_ow", vein => {
        vein.density(0.12)
        //vein.weight(35)
    })
    event.modify("gtceu:diamond_vein", vein => {
        vein.density(0.05)
        //vein.weight(16)
    })
    event.modify("gtceu:garnet_vein", vein =>{
        vein.density(0.1)
    })
    event.modify("gtceu:lubricant_vein", vein =>{
        vein.density(0.05)
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
    event.modify("gtceu:mineral_sand_vein", vein =>{
        vein.density(0.08)
    })
})