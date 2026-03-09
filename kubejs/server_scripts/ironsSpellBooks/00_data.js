const IronsSpellbooksDataRecipes = (event) => {
    const schools = [
        "fire",
        "holy",
        "ender",
        "nature",
        "aqua",
        "evocation",
        "blood",
        "lightning"
    ];
    schools.forEach(element => {
        const school = element;
        event.addJson(`irons_restrictions:recipes/${school}_manuscript`, {});
    });
};