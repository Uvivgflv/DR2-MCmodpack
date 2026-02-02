//?MOVE TO 00_CONSTANTS.JS
const RegisterIERecipes = (event) => {
  //#region add recipes 
  event.shaped('immersiveengineering:hammer', [
    'ABA',
    'ACA',
    ' C '
  ],{
    A:'#forge:ingots/bronze',
    B:'#forge:tools/files',
    C:'#forge:rods/wooden'
  }).id('dr2:ie/hammer');
  //#endregion
};
