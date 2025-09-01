const RegisterMalumRecipes = event => {
    //#region remove recipes
    event.remove({id:'malum:spirit_altar'})
    //#endregion

    //#region add recipes shaped
    event.shaped('malum:spirit_altar',[
        'ABA',
        'CDC',
        'EEE'
    ],{
        A: 'malum:cthonic_gold',
        B: 'forbidden_arcanus:mundabitur_dust',
        C: 'malum:runewood_item_pedestal',
        D: 'forbidden_arcanus:arcane_chiseled_darkstone',
        E: 'malum:runewood_planks'
    }).id('dr2:malum/spirit_altar')
    //#endregion
}