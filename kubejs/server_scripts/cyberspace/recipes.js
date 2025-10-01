const RegisterCBSRecipes = event => {
    event.remove({mod:'cyberspace'})
    //переделать на механический крафтер или на сборочную машину
    event.shaped('cyberspace:terminal',[
        'ABA',
        'CDE',
        'FGF'
    ],{
        A:'gtceu:carbon_fiber_plate',
        B:'gtceu:lv_sensor',
        C:'gtceu:prospector.lv',
        D:'gtceu:computer_monitor_cover',
        E:'gtceu:microchip_processor',
        F:'#forge:plates/steel',
        G:'gtceu:solid_machine_casing'
    }).id('dr2:cyberspace_terminal')
}