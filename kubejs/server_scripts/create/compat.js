const RegisterCreateCompatRecipes = event => {

    //#region mixing recipes
    //если рецепт требует нагрева то он по факту залочен крейтовским нагревателем из
    //бляйза и после доступа в ад
    event.custom({
        "type":"create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:dusts/aluminium"
            },
            {
                "tag": "forge:dusts/aluminium"
            },
            {
                "tag": "forge:dusts/aluminium"
            },
            {
                "tag": "forge:dusts/aluminium"
            },
            {
                "tag": "forge:dusts/borax"
            },
            {
                "tag": "forge:dusts/borax"
            },
            {
                "tag": "forge:dusts/basalt",
            },
            {
                "item": "kubejs:inert_dust"
            }
        ],
        "results": [
            {
                "item": "kubejs:aluminum_casting_compound",
                "count": 8
            }
        ]
    }).id('cct:create/comp/mix/aluminum_compound')

    //#endregion
}