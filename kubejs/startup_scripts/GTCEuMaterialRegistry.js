GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('hepatizon')
        .ingot()
        .components('2x copper', '1x cobalt', '1x nether_quartz')
        .color(0x2C0D4B).iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_LONG_ROD
        )
    event.create('fiery')//check tag #forge:ingots/fiery
    .ingot()
    .components('2x iron')
    .color(0x824304).iconSet(GTMaterialIconSet.METALLIC)
    .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_LONG_ROD
        )
    event.create('relict')//add tag #forge:ingots/relict
    .ingot().blastTemp(2200).fluid().ore()
    .components('2x lead', '4x oxygen', 'coal', 'water')
    .color(0x540124).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE
        )
    event.create('queens_slime')//metall??
    .components('gold', '2x iron')
    .ingot()
    .color(0x66b302).iconSet(GTMaterialIconSet.DULL)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_LONG_ROD
    )
    event.create('cloggrum')//just compact
    .components('ammonia', '2x copper')
    .ingot().ore()
    .color(0xb59f70).iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD
    )
    event.create('regalium')
    .components('3x aluminium', 'quartzite')
    .gem()
    .color(0xffea03).iconSet(GTMaterialIconSet.LAPIS)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_DENSE
    )
    event.create('soul_stained_steel')
    .components('iron')
    .ingot()
    .color(0xd136f7).iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD
    )
    event.create('manasteel')
    .components('iron', '2x coal')
    .ingot()
    .color(0x07a0f2).iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD
    )
    event.create('terrasteel')
    .components('iron', 'ender_pearl', '2x coal')
    .ingot()
    .color(0x07f207).iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD
    )
    event.create('pig_iron')
    .components('iron', 'coal', '2x hydrogen')
    .ingot()
    .color(0xdb7dac).iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD
    )
    event.create('venomius') //mv material
    .components('3x relict', '1x soul_stained_steel', '2x manasteel')
    .ingot().liquid()
    .color(0x0342ad).iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.SOLDER_MATERIAL_GOOD
    )
    event.create('desh') //IV material
    .ingot().liquid().ore()
    .color(0xe37100).iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR
    )
    //test
    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
    //osmium & iridium
    GTMaterials.Osmium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Iridium.setProperty(PropertyKey.ORE, new $OreProperty());
    //GTMaterials.Tantalum.setProperty(PropertyKey.ORE, new $OreProperty());
    //GTMaterials.Chromium.setProperty(PropertyKey.ORE, new $OreProperty());
    //GTMaterials.Vanadium.setProperty(PropertyKey.ORE, new $OreProperty());
    // GTMaterials.Gallium.setProperty(PropertyKey.ORE, new $OreProperty());
    // GTMaterials.Indium.setProperty(PropertyKey.ORE, new $OreProperty());
    // GTMaterials.Palladium.setProperty(PropertyKey.ORE, new $OreProperty());
    //platinum, vanadium, palladium, gallium, indium, tantalum
})