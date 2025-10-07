const RegistryAdAstraRecipes = event => {
    //#region remove rockets recipes
    //#endregion
    event.remove({id:'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench'})
    event.remove({id:'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench'})
    event.remove({id:'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench'})
    event.remove({id:'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench'})
    //#region remove machine recipes
    //#endregion
    event.remove({id:'ad_astra:nasa_workbench'})//recreate
    event.remove({id:'ad_astra:compressor'})//hide
    event.remove({id:'ad_astra:coal_generator'})//hide
    event.remove({id:'ad_astra:etrionic_blast_furnace'})//hide
    event.remove({id:'ad_astra:fuel_refinery'})//hide
    event.remove({id:'ad_astra:oxygen_loader'})//recreate
    event.remove({id:'ad_astra:solar_panel'})//hide
    event.remove({id:'ad_astra:water_pump'})//hide
    event.remove({id:'ad_astra:energizer'})//hide
    event.remove({id:'ad_astra:cryo_freezer'})//hide
    event.remove({id:'ad_astra:oxygen_sensor'})//recreate
    event.remove({id:'ad_astra:oxygen_distributor'})//recrate
    event.remove({id:'ad_astra:gravity_normalizer'})//recreate
    //#region remove armor recipes
    event.remove({output:/^ad_astra:space_.*/})
    event.remove({output:/^ad_astra:netherite_space_.*/})
    event.remove({output:/^ad_astra:jet_suit_.*/})
    //#endregion
    //#region remove other
    event.remove({output:/^ad_astra:.*_flag/})

    //#endregion

    //#region add rocket parts recipes in crafting table
    /*
    ракеты 1 и 2 уровня делать на последовательной сборке крейта
    3 уровень на сборочной машине
    4 и далее на сборочной линии GTCEU
    */
    //#endregion

    //#region add armor recipes
    //#endregion
}