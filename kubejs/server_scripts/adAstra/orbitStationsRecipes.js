const RegistryOrbitStationsRecipes = (event) => {
  //#region remove all recipes for stations
  //? удалить через Data Pack
  event.remove({ id: /^ad_astra:space_station\/.*/ });
  //#endregion
};
