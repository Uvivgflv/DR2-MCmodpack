const RegisterGTCEUToCreateCompatTags = (event) => {
  //#region plates
  var mechanicalPressAllowedList = [
    "gtceu:bismuth_bronze_plate",
    "gtceu:vanadium_gallium_plate",
    "gtceu:vanadium_steel_plate",
    "gtceu:bronze_plate",
    "gtceu:blazeium_plate",
    "gtceu:gallium_arsenide_plate",
    "gtceu:amethyst_bronze_plate",
    "gtceu:aluminium_plate",
    "gtceu:battery_alloy_plate",
    "gtceu:stainless_steel_plate",
    "gtceu:nagrilite_plate",
    "gtceu:copper_plate",
    "gtceu:manganese_plate",
    "gtceu:manasteel_plate",
    "gtceu:magnetic_steel_plate",
    "gtceu:magnalium_plate",
    "gtceu:brass_plate",
    "gtceu:cupronickel_plate",
    "gtceu:red_steel_plate",
    "gtceu:queens_slime_plate",
    "gtceu:wrought_iron_plate",
    "gtceu:cobalt_brass_plate",
    "gtceu:cobalt_plate",
    "gtceu:cloggrum_plate",
    "gtceu:kanthal_plate",
    "gtceu:calorite_plate",
    "gtceu:invar_plate",
    "gtceu:gold_plate",
    "gtceu:iron_plate",
    "gtceu:soul_stained_steel_plate",
    "gtceu:desh_plate",
    "gtceu:damascus_steel_plate",
    "gtceu:blue_steel_plate",
    "gtceu:hepatizon_plate",
    "gtceu:gallium_plate",
    "gtceu:tungsten_steel_plate",
    "gtceu:rendium_plate",
    "gtceu:relict_plate",
    "gtceu:annealed_copper_plate",
    "gtceu:ostrum_plate",
    "gtceu:tin_alloy_plate",
    "gtceu:tin_plate",
    "gtceu:fiery_plate",
    "gtceu:nichrome_plate",
    "gtceu:nickel_plate",
    "gtceu:silver_plate",
    "gtceu:blue_alloy_plate",
    "gtceu:steel_plate",
    "gtceu:sterling_silver_plate",
    "gtceu:tantalum_plate",
    "gtceu:tenebrum_plate",
    "gtceu:terrasteel_plate",
    "gtceu:zinc_plate",
    "gtceu:black_bronze_plate",
    "gtceu:black_steel_plate",
    "gtceu:electrum_plate",
    "gtceu:pig_iron_plate",
    "gtceu:lead_plate",
    "gtceu:rose_gold_plate",
  ];
  //get ingot ids
  event.add("dr2:mechanical_press_allow", mechanicalPressAllowedList);
  //#endregion
};

//регистрация крафта механического пресса "мягкие" металлы
function registerMechanicalPressPlatesRecipes(event) {
  Ingredient.of("#dr2:mechanical_press_allow").stacks.forEach((element) => {
    const itemId = element.id;
    const recipeId = `dr2:gtceucreate_${itemId.replace(":", "_")}`;
    const ingotTag = `#forge:ingots/${itemId.replace("gtceu:", "").replace("_plate", "")}`;
    event.recipes.createPressing(itemId, [ingotTag]).id(recipeId);
  });
}
