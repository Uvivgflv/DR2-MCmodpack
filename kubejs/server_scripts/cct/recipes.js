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
    }).id('dr2:materials/glass_mix')

    event.shaped('3x kubejs:tinned_leather',[
        'ABA',
        'BAB',
        ' C '
    ],{
        A:'#forge:string',
        B:Item.of('tconstruct:bowstring', '{Material:"tconstruct:leather"}').strongNBT(),
        C:'#forge:tools/mallets'
    }).id('dr2:tinned_leather')

    //#endregion
}