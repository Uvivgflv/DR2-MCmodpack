const RegisterForbiddenArcanusItemTags = (event) => {
  //#region remove tags
  var disabledItemsList = [
    "forbidden_arcanus:deorum_ingot",
    "forbidden_arcanus:obsidian_ingot",
    "forbidden_arcanus:deorum_block",
    "forbidden_arcanus:deorum_nugget",
  ];
  event.removeAllTagsFrom(disabledItemsList);
  //#endregion
};
