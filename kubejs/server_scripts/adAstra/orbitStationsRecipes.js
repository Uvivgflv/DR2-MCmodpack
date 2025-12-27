const RegistryOrbitStationsRecipes = (event) => {
  //#region remove all recipes for stations
  event.remove({ id: /^ad_astra:space_station\/.*/ });
  //#endregion
};
