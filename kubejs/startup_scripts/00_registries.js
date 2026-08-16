//priority 10
const OreBlockRegistriesEvent = (event) => {
    /**
     * event.create('blockium', 'ore') // 
        .stateSupplier(() => Block.getBlock('my_mod:blockium').defaultBlockState()) // 
        .baseModelLocation('my_mod:block/blockium') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
     */
};

const OreLayersRegistriesEvent = (event) => {
    /**
     * event.create('my_custom_layer')
        .targets('#minecraft:stone_ore_replaceables', 'minecraft:endstone') // [*] 
        .dimensions('minecraft:overworld', 'minecraft:the_end') // [*]
     */
};

const MaterialRegistriesEvent = (event) => {
   /**
    * event.create('andesite_alloy')
        .ingot()
        .components('1x andesite', '1x iron')
        .color(0x839689).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
    */
};