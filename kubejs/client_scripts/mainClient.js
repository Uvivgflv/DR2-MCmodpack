ItemEvents.tooltip((event) => {
  ItemDescRegistry(event);
  //v0.2 20102025 4:15
  RegistryItemModification(event);
});

JEIEvents.hideItems((event) => {
  JEIEventsRegistry(event);
});
