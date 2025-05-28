const RegistryCCTRecipes = event =>{
    //#region add recipes for custon items
    event.shaped('kubejs:prim_glass_mix',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'#minecraft:sand',
        B:'#forge:dusts/ash',
        C:'#forge:tools/mortars'
    }).id('cct:materials/glass_mix')

    //#endregion
}