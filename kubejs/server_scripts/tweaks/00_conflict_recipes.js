const RegistryTweaksRecipes = event => {
    var IE = 'immersiveengineering'
    //#region ingots from nuggets
    //--copper
    event.remove({id:IE+':crafting/nugget_copper_to_copper_ingot'});
    event.remove({id:'malum:copper_ingot_from_nugget'});
    event.remove({id:'tconstruct/common/materials/copper_ingot_from_nuggets'});
    event.remove({id:'create:crafting/materials/copper_ingot'});
    //--zinc
    event.remove({id:'create:crafting/materials/zinc_ingot_from_compacting'});
    //--brass
    event.remove({id:'create:crafting/materials/brass_ingot_from_compacting'});
    //--bronze
    event.remove({id:'tcintegrations:bronze_nuggets_from_ingot'});
    //--cobalt
    event.remove({id:'tconstruct:common/materials/cobalt_ingot_from_nuggets'});
    //--nickel
    event.remove({id:IE+':crafting/nugget_nickel_to_ingot_nickel'});
    //#endregion 
    //#region ingots from blocks
    //--zinc
    event.remove({id:'create:crafting/materials/zinc_ingot_from_decompacting'});
    //--brass
    event.remove({id:'create:crafting/materials/brass_ingot_from_decompacting'});
    //--bronze
    event.remove({id:'tcintegrations:bronze_ingots_from_block'});
    //--cobalt
    event.remove({id:'tconstruct:common/materials/cobalt_ingot_from_block'});
    //--nickel
    event.remove({id:IE+':crafting/storage_nickel_to_ingot_nickel'});
    //#endregion
    //#region blocks from ingots
    //--zinc
    event.remove({id:'create:crafting/materials/zinc_block_from_compacting'});
    //--brass
    event.remove({id:'create:crafting/materials/brass_block_from_compacting'});
    //--bronze
    event.remove({id:'tcintegrations:bronze_block_from_ingots'});
    //--cobalt
    event.remove({id:'tconstruct:common/materials/cobalt_block_from_ingots'});
    //--nickel
    event.remove({id:IE+':crafting/ingot_nickel_to_storage_nickel'});
    //#endregion


    //#region remove smelting recipes for raw ores
    //--copper raw
    event.remove({id:'minecraft:copper_ingot_from_smelting_raw_copper'}); //replace to nuggets 20*30 ticks
    event.remove({id:'minecraft:copper_ingot_from_blasting_raw_copper'}); //replace to nuggets 20*15 ticks
    //--iron raw
    event.remove({id:'minecraft:iron_igot_from_smelting_raw_iron'});
    event.remove({id:'minecraft:iron_igot_from_blasting_raw_iron'});
    //--gold raw 
    event.remove({id:'minecraft:gold_ingot_from_smelting_raw_gold'});
    event.remove({id:'minecraft:gold_ingot_from_blasting_raw_gold'});
    //--gtceu reg ex raw ores
    event.remove({id:/^gtceu:smelting\/smelt_raw_.*_ore_to_ingot/});
    event.remove({id:/^gtceu:blasting\/smelt_raw_.*_ore_to_ingot/});
    //#endregion

    //#region remove smelting recipes for crushed and impure ores
    //--gtceu reg ex crushed ores
    event.remove({id:/^gtceu:smelting\/smelt_crushed_ore.*_to_ingot/});
    event.remove({id:/^gtceu:blasting\/smelt_crushed_ore.*_to_ingot/});
    //--gtceu reg ex impure ores
    event.remove({id:/^gtceu:smelting\/smelt_impure_dust.*_to_ingot/});
    event.remove({id:/^gtceu:blasting\/smelt_impure_dust.*_to_ingot/});
    //#endregion

    
    
    //#region add smelting recipes for raw ores
    
}