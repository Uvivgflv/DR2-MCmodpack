//  Структурировать и группировать все регистрации
//  Добавить необходимые материалы из магических модов
//
//
//
const GTCEuMaterialRegistry = (event) => {
  //#region compat materials
  event
    .create("hepatizon")
    .ingot()
    .fluid()
    .blastTemp(1700)
    .components("2x copper", "1x cobalt", "1x nether_quartz")
    .color(0x2c0d4b)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("fiery") //check tag #forge:ingots/fiery
    .ingot()
    .components("2x iron")
    .color(0x824304)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  //#endregion
  event
    .create("relict") //add tag #forge:ingots/relict
    .ingot()
    .blastTemp(2200)
    .fluid()
    .ore()
    .components("2x lead", "4x oxygen", "coal", "water")
    .color(0x540124)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("queens_slime") //metall??
    .components("gold", "2x iron")
    .ingot()
    .color(0x66b302)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("cloggrum") //just compact
    .components("ammonia", "2x copper")
    .ingot()
    .liquid()
    .ore()
    .color(0xb59f70)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("regalium")
    .components("3x aluminium", "quartzite")
    .gem()
    .color(0xffea03)
    .iconSet(GTMaterialIconSet.LAPIS)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE);
  event
    .create("soul_stained_steel")
    .components("iron")
    .liquid()
    .ingot()
    .color(0xd136f7)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("manasteel")
    .components("iron", "2x coal")
    .ingot()
    .liquid()
    .color(0x07a0f2)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("terrasteel")
    .components("iron", "ender_pearl", "2x coal")
    .ingot()
    .liquid()
    .color(0x07f207)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("pig_iron")
    .components("iron", "coal", "2x hydrogen")
    .ingot()
    .color(0xdb7dac)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("venomius") //mv material
    .components("3x relict", "1x soul_stained_steel", "2x manasteel")
    .ingot()
    .liquid()
    .color(0x0342ad)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.SOLDER_MATERIAL_GOOD,
    );
  event
    .create("desh") //IV material
    .ingot()
    .liquid()
    .ore()
    .color(0xe37100)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("ostrum")
    .ingot()
    .liquid()
    .ore()
    .color(0x593d49)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("calorite")
    .ingot()
    .liquid()
    .ore()
    .color(0xad1834)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  //midnight ores
  event
    .create("night_crystal")
    .gem()
    .liquid()
    .ore()
    .color(0x644ac2)
    .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
    .flags(GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.GENERATE_DENSE);
  event
    .create("blazeium") //HV circuit material
    .components("4x sulfur", "oxygen", "flint")
    .ingot()
    .liquid()
    .ore()
    .color(0xffa826)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  //the midnight materials
  event
    .create("rendium")
    .gem()
    .liquid()
    .ore()
    .color(0x4839b8)
    .iconSet(GTMaterialIconSet.EMERALD)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("dark_pearl")
    .gem()
    .liquid()
    .ore()
    .color(0x482478)
    .secondaryColor(0x1a1224)
    .iconSet(GTMaterialIconSet.EMERALD)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("nagrilite")
    .ingot()
    .liquid()
    .ore()
    .color(0x3d3942)
    .secondaryColor(0x7c7882)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("tenebrum")
    .ingot()
    .liquid()
    .ore()
    .color(0x4b594e)
    .secondaryColor(0x2d332f)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("virilux")
    .gem()
    .liquid()
    .ore()
    .color(0x0ccf4d)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("ebonite")
    .gem()
    .ore()
    .color(0x241601)
    .secondaryColor(0x030200)
    .iconSet(GTMaterialIconSet.DIAMOND)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_LENS,
    );
  event
    .create("amethyst_bronze")
    .components("copper", "amethyst")
    .ingot()
    .liquid()
    .color(0xd37ddb)
    .secondaryColor(0x803187)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  //#region MAGIC
  event
    .create("deorum")
    .components("2x coal", "gold")
    .ingot()
    .liquid()
    .ore()
    .color(0xad8105)
    .secondaryColor(0x705301)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("goldite")
    .components("2x silver", "gold", "2x sulfur")
    .dust()
    .ore()
    .color(0xc9c9b1)
    .secondaryColor(0x999999)
    .iconSet(GTMaterialIconSet.DULL);
  //need flags?
  event
    .create("blazing_deorum")
    .components("2x deorum", "blazeium")
    .ingot()
    .liquid()
    .blastTemp(1970)
    .color(0xe85e0e)
    .secondaryColor(0xffffff)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("infused_cthonic_gold") // HV+ tier
    .ingot()
    .liquid()
    .blastTemp(1600)
    .color(0xffd505)
    .secondaryColor(0x970ec9)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
    );
  event
    .create("cloggrum_steel") // MV+ tier, storage 3 tier,in future tools
    .components("cloggrum", "steel")
    .ingot()
    .liquid()
    .blastTemp(1300)
    .color(0x756946)
    .secondaryColor(0x36332a)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME
    );



  //#region mobdrop materials
  event
    .create("undemetall") // ALL CREATE & LV == steel
    .ingot()
    .liquid()
    .blastTemp(760)
    .color(0xc4b9be)
    .secondaryColor(0x86b0b3)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("enchanted_metall")
    .ingot()
    .liquid()
    .blastTemp(1000)
    .color(0x91399e)
    .secondaryColor(0x522f57)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("oceanic_semimetall")
    .ingot()
    .liquid()
    .blastTemp(340)
    .color(0x1f88de)
    .secondaryColor(0x05c1ff)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );
  event
    .create("hellstone")
    .ingot()
    .liquid()
    .blastTemp(2400)
    .color(0x99331f)
    .secondaryColor(0xf56a07)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_LONG_ROD,
    );

  //#region custom fluid veins fluids
  event
    .create("copper_waters")
    .components("2x copper", "oxygen", "water")
    .liquid()
    .dust()
    .color(0xc47621)
    .secondaryColor(0x2a9c48)
    .iconSet(GTMaterialIconSet.FINE);

  event
    .create("iron_resin")
    .components("2x iron", "3x oxygen", "water")
    .liquid()
    .dust()
    .color(0x521f0b)
    .secondaryColor(0x0a0300)
    .iconSet(GTMaterialIconSet.BRIGHT);

  event
    .create("lead_mixture")
    .components("2x lead", "oxygen", "ammonia")
    .liquid()
    .dust()
    .color(0x3d3b66)
    .secondaryColor(0x543573)
    .iconSet(GTMaterialIconSet.DULL);

  event
    .create("silver_tincture")
    .components("2x silver", "oxygen", "coal", "ammonia")
    .liquid()
    .dust()
    .color(0x929ea8)
    .secondaryColor(0x87b8e0)
    .iconSet(GTMaterialIconSet.BRIGHT);

  event
    .create("mineralic_lava")
    .components("andesite") //add AL and STONE
    .liquid(2400)
    .dust()
    .color(0xa3380a)
    .iconSet(GTMaterialIconSet.DULL);

  event
    .create("ectoplasm_resin")
    .components("flint", "andesite")
    .liquid(100)
    .dust()
    .color(0x02b2e8)
    .iconSet(GTMaterialIconSet.BRIGHT);

  event
    .create("aluminum_mana")
    .components("aluminium", "water", "manasteel")
    .liquid()
    .dust()
    .color(0x1f48a6)
    .iconSet(GTMaterialIconSet.DIAMOND);

  event
    .create("fiery_tears")
    .liquid(1800)
    .dust()
    .color(0x331306)
    .secondaryColor(0x17b02)
    .iconSet(GTMaterialIconSet.BRIGHT);

  event
    .create("bless_resin")
    .liquid()
    .dust()
    .color(0x14b56a)
    .iconSet(GTMaterialIconSet.DIAMOND);

  //#region material properties
  const $OreProperty = Java.loadClass(
    "com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty",
  );
  //osmium & iridium
  GTMaterials.Osmium.setProperty(PropertyKey.ORE, new $OreProperty());
  GTMaterials.Iridium.setProperty(PropertyKey.ORE, new $OreProperty());
  GTMaterials.Graphene.setProperty(PropertyKey.ORE, new $OreProperty());
  GTMaterials.Electrum.setProperty(PropertyKey.ORE, new $OreProperty());
  GTMaterials.SulfurDioxide.setProperty(PropertyKey.ORE, new $OreProperty());

  //GTMaterials.Tantalum.setProperty(PropertyKey.ORE, new $OreProperty());
  //GTMaterials.Chromium.setProperty(PropertyKey.ORE, new $OreProperty());
  //GTMaterials.Vanadium.setProperty(PropertyKey.ORE, new $OreProperty());
  // GTMaterials.Gallium.setProperty(PropertyKey.ORE, new $OreProperty());
  // GTMaterials.Indium.setProperty(PropertyKey.ORE, new $OreProperty());
  // GTMaterials.Palladium.setProperty(PropertyKey.ORE, new $OreProperty());
  //platinum, vanadium, palladium, gallium, indium, tantalum
};
