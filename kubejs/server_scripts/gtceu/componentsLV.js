// в этом файле все рецепты связанные с компонентами LV эры

const RegisterGTCEUComponentsRecipes = (event) => {
  //#region remove component recipes
  event.remove({ id: "gtceu:shaped/electronic_circuit_lv" });
  event.remove({ id: "gtceu:/shaped/vacuum_tube" });
  event.remove({ id: /^gtceu:shaped\/resistor_.*/ });
  event.remove({ id: /^gtceu:shaped\/electric_motor_lv_.*/ });
  event.remove({ id: /^gtceu:shaped\/electric_pump_lv_.*/ });
  event.remove({ id: /^gtceu:shaped\/conveyor_module_lv_.*/ });
  event.remove({ id: "gtceu:shaped/electric_piston_lv" });
  event.remove({ id: "gtceu:shaped/robot_arm_lv" });
  event.remove({ id: "gtceu:shaped/emitter_lv" });
  event.remove({ id: "gtceu:shaped/sensor_lv" });
};
