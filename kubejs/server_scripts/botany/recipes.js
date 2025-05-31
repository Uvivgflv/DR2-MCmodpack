const RegisterBotaniaRecipes = event =>{
    //#region remove recipes for pure daisy
        event.remove({id:'botania:pure_daisy/livingwood'})
    //#endregion

    //#region add pure daisy recipes
        event.custom({
            "type": "botania:state_copying_pure_daisy",
            "input": {
                "type": "tag",
                "tag": "cct:magic_logs"
            },
            "output": "botania:livingwood_log"
        }).id('cct:pure_daisy/livingwood')
    //#endregion
}