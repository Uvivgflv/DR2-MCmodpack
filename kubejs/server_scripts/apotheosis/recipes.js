const RegisterApothRecipes = event => {
    //#region remove recipes

    //#endregion
    //#region add rarity recipes
    event.shapeless('apotheosis:common_material',['4x kubejs:common_fragment']).id('cct:apoth/rarity_materials/common')
    event.shapeless('apotheosis:uncommon_material',['4x kubejs:uncommon_fragment']).id('cct:apoth/rarity_materials/uncommon')
    event.shapeless('apotheosis:rare_material',['4x kubejs:rare_fragment']).id('cct:apoth/rarity_materials/rare')
    event.shapeless('apotheosis:epic_material',['4x kubejs:epic_fragment']).id('cct:apoth/rarity_materials/epic')
    event.shapeless('apotheosis:mythic_material',['4x kubejs:legendary_fragment']).id('cct:apoth/rarity_materials/legendary')
    //#endregion
    //
}