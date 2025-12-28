//Этот файл будет удален и заменен на 2-3 новых файла 
const RegistryStartUpItems = (event) => {
  //#region mobDrop
  event
    .create("forgotter_mechanism_fragment")
    .translationKey(`item.kubejs.forgotter_mechanism_fragment`);
  event
    .create("forgotten_mechanism_core")
    .translationKey(`item.kubejs.forgotten_mechanism_core`);
  event.create("catalyst").translationKey(`item.kubejs.catalyst`);
  event
    .create("ancient_fragments")
    .translationKey(`item.kubejs.ancient_fragments`);
  event.create("frost_fragment").translationKey(`item.kubejs.frost_fragment`);
  event.create("sculk_fibers").translationKey(`item.kubejs.sculk_fibers`);
  event.create("illager_chains").translationKey(`item.kubejs.illager_chains`);
  event.create("corrupted_flesh").translationKey(`item.kubejs.corrupted_flesh`);
  event.create("old_fabric").translationKey(`item.kubejs.old_fabric`);
  event.create("fermanted_warp").translationKey(`item.kubejs.fermanted_warp`);
  event.create("under_shards").translationKey(`item.kubejs.under_shards`);
  //#endregion
  /**
     * 
     все кастомные дроп-материалы
     зарегистрировать как 
     GTMaterials 
     */
  //#region ALL undead drops
  event
    .create("undemetall_nugget")
    .translationKey(`item.kubejs.undemetall_nugget`);
  event
    .create("undemetall_shard")
    .translationKey(`item.kubejs.undemetall_shard`);
  event
    .create("undemetall_chunk")
    .translationKey(`item.kubejs.undemetall_chunk`);
  //#endregion
  //#region ALL magic drops
  event
    .create("enchanted_metall_nuget")
    .translationKey(`item.kubejs.enchanted_metall_nuget`);
  event
    .create("enchanted_metall_shard")
    .translationKey(`item.kubejs.enchanted_metall_shard`);
  event
    .create("enchanted_metall_chunk")
    .translationKey(`item.kubejs.enchanted_metall_chunk`);
  //#endregion
  //#region ALL water drops
  event
    .create("oceanic_semimetall_nugget")
    .translationKey(`item.kubejs.oceanic_semimetall_nugget`);
  event
    .create("oceanic_semimetall_shard")
    .translationKey(`item.kubejs.oceanic_semimetall_shard`);
  event
    .create("oceanic_semimetall_chunk")
    .translationKey(`item.kubejs.oceanic_semimetall_chunk`);
  //#endregion
  //#region ALL fire drops
  event
    .create("hellstone_nugget")
    .translationKey(`item.kubejs.hellstone_nugget`);
  event.create("hellstone_shard").translationKey(`item.kubejs.hellstone_shard`);
  event.create("hellstone_chunk").translationKey(`item.kubejs.hellstone_chunk`);
  //#endregion
  //#region rarity materials
  event.create("common_fragment").translationKey(`item.kubejs.common_fragment`);
  event
    .create("uncommon_fragment")
    .translationKey(`item.kubejs.uncommon_fragment`);
  event.create("rare_fragment").translationKey(`item.kubejs.rare_fragment`);
  event.create("epic_fragment").translationKey(`item.kubejs.epic_fragment`);
  event
    .create("legendary_fragment")
    .translationKey(`item.kubejs.legendary_fragment`);
  //#endregion
  //#region crafting materials
  event.create("ash_compound").translationKey(`item.kubejs.ash_compound`);
  event.create("prim_glass_mix").translationKey(`item.kubejs.prim_glass_mix`);
  event.create("tinned_leather").translationKey(`item.kubejs.tinned_leather`);
  event
    .create("aluminum_casting_compound")
    .translationKey(`item.kubejs.aluminum_casting_compound`);
  event.create("inert_dust").translationKey(`item.kubejs.inert_dust`);
  //#endregion
  //#region utility items
  event
    .create("iron_casing_parts") //+texture
    .translationKey(`item.kubejs.iron_casing_parts`);
  event
    .create("brass_casing_parts") //+texture
    .translationKey(`item.kubejs.brass_casing_parts`);
  event
    .create("twforest_activator") //+texture
    .translationKey(`item.kubejs.twforest_activator`)
    .unstackable();
  event.create("twiligth_core").translationKey(`item.kubejs.twilight_core`);
  event
    .create("twilight_space_component")
    .translationKey(`item.kubejs.twilight_space_component`);
  //#endregion
  //#region funny items
  //delete all test items
  //event.create('rusty_v1').displayName('Вазилиновое дрисло')
  event
    .create("processors_super_soup")
    .translationKey(`item.kubejs.processors_super_soup`)
    .maxStackSize(16)
    .food((food) => {
      food.hunger(12).saturation(12);
    });
  event
    .create("fried_beer")
    .translationKey(`item.kubejs.fried_beer`)
    .maxStackSize(4)
    .food((food) => {
      food.hunger(10).saturation(10);
    });
  event
    .create("snus")
    .translationKey(`item.kubejs.snus`)
    .maxStackSize(16)
    .food((food) => {
      food
        .hunger(1)
        .saturation(20)
        .effect("minecraft:poison", 100, 0, 2)
        .removeEffect("minecraft:hunger");
    });
  //#endregion
  //#region incomplete parts
  //immersive parts
  event
    .create("incomplete_component_iron")
    .translationKey(`item.kubejs.incomplete_component_iron`);

  event
    .create("incomplete_component_steel")
    .translationKey(`item.kubejs.incomplete_component_steel`);
  event
    .create("incomplete_heavy_machinery_casing")
    .translationKey(`item.kubejs.incomplete_heavy_machinery_casing`);
  event
    .create("incomplete_heavy_engineering")
    .translationKey(`item.kubejs.incomplete_heavy_engineering`);
  event
    .create("incomplete_light_engineering")
    .translationKey(`item.kubejs.incomplete_light_engineering`);
  event
    .create("incomplete_rs_engineering")
    .translationKey(`item.kubejs.incomplete_rs_engineering`);
  event
    .create("incomplete_radiator_engineering")
    .translationKey(`item.kubejs.incomplete_radiator_engineering`);
  event
    .create("incomplete_generator_engineering")
    .translationKey(`item.kubejs.incomplete_generator_engineering`);
  //--LV
  event
    .create("incomplete_ulv_machine_hull")
    .translationKey(`item.kubejs.incomplete_ulv_machine_hull`);
  event
    .create("incomplete_lv_machine_hull")
    .translationKey(`item.kubejs.incomplete_lv_macine_hull`);
  event
    .create("incomplete_lv_electric_motor")
    .translationKey(`item.kubejs.incomplete_lv_electric_motor`);
  event
    .create("incomplete_lv_electric_pump")
    .translationKey(`item.kubejs.incomplete_lv_electric_pump`);
  event
    .create("incomplete_lv_electric_piston")
    .translationKey(`item.kubejs.incomplete_llv_electric_piston`);
  event
    .create("incomplete_lv_fluid_regulator")
    .translationKey(`item.kubejs.incomplete_lv_fluid_regulator`);
  event
    .create("incomplete_lv_conveyor_module")
    .translationKey(`item.kubejs.incomplete_lv_conveyor_module`);
  event
    .create("incomplete_lv_robot_arm")
    .translationKey(`item.kubejs.incomplete_lv_robot_arm`);
  event
    .create("incomplete_lv_circuit")
    .translationKey(`item.kubejs.incomplete_lv_circuit`);
  //--MV
  event
    .create("incomplete_mv_machine_hull")
    .translationKey(`item.kubejs.incomplete_mv_machine_hull`);
  event
    .create("incomplete_mv_electric_motor")
    .translationKey(`item.kubejs.incomplete_mv_electric_motor`);
  event
    .create("incomplete_mv_electric_pump")
    .translationKey(`item.kubejs.incomplete_mv_electric_pump`);
  event
    .create("incomplete_mv_electric_piston")
    .translationKey(`item.kubejs.incomplete_mv_electric_piston`);
  event
    .create("incomplete_mv_fluid_regulator")
    .translationKey(`item.kubejs.incomplete_mv_fluid_regulator`);
  event
    .create("incomplete_mv_conveyor_module")
    .translationKey(`item.kubejs.incomplete_mv_conveyor_module`);
  event
    .create("incomplete_mv_robot_arm")
    .translationKey(`item.kubejs.incomplete_mv_robot_arm`);
  // event.create('')

  //#endregion
  //#region large plates
  event
    .create("large_plate_black_bronze")
    .translationKey(`item.kubejs.large_plate_black_bronze`);
  event
    .create("large_plate_deorum")
    .translationKey(`item.kubejs.large_plate_deorum`);
  //#endregion

  //#region spell book blanks
  event
    .create("gold_spellbook_blank")
    .translationKey(`item.kubejs.gold_spellbook_blank`);
  event
    .create("diamond_spellbook_blank")
    .translationKey(`item.kubejs.diamond_spellbook_blank`);
  event
    .create("netherite_spellbook_blank")
    .translationKey(`item.kubejs.netherite_spellbook_blank`);
  event
    .create("dragon_spellbook_blank")
    .translationKey(`item.kubejs.dragon_spellbook_blank`);
  //#endregion
};

const RegistryStartUpBlocks = (event) => {
  event
    .create("unfired_coke_bricks")
    .translationKey(`block.kubejs.unfired_coke_bricks`)
    .requiresTool(true)
    .soundType("gravel")
    .tagBlock("minecraft:mineable/shovel");

  event
    .create("lead_molded_bricks")
    .translationKey(`block.kubejs.lead_molded_bricks`)
    .requiresTool(true)
    .soundType("stone")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/wrench");

  //#region compressed blocks
  event
    .create("double_copper_block")
    .translationKey(`block.kubejs.double_copper_block`)
    .requiresTool(true)
    .soundType("wood")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:mineable/wrench");
  //#endregion

  //#region testing blocks
  event
    .create("thick_fuel_oil")
    .translationKey(`block.kubejs.thick_fuel_oil`)
    .requiresTool(true)
    .soundType("mud")
    .tagBlock("minecraft:mineable/shovel");
};

const RegistryItemModification = (event) => {
  event.add(
    "kubejs:twforest_activator",
    Text.translate(`tooltip.kubejs.twforest_activator_tooltip`),
  );
};
