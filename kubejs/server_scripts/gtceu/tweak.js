ServerEvents.recipes(event => {
    event.forEachRecipe({ mod: 'gtceu' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*4) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
})