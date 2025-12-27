const RegisterOreVariants = event =>{
    //#region registry ore types
    const ORE_TYPE_METAL = Object.freeze([
        {name: 'iron'}, {name: 'copper'}, {name: 'gold'}, {name: 'magnesite'}, {name: 'magnetite'},
        {name: 'malachite'}, {name: 'molybdenum'}, {name: 'molybdenite'}, {name: 'naquadah'},
        {name: 'neodymium'}, {name: 'nickel'}, {name: 'tin'}, {name: 'aluminium'}, {name: 'beryllium'},
        {name: 'blazeium'}, {name: 'bornite'}, {name: 'vanadium_magnetite'}, {name: 'tungstate'},
        {name: 'galena'}, {name: 'garnierite'}, {name: 'hematite'}, {name: 'bauxite'}, {name: 'deorum'},
        {name: 'desh'}, {name: 'calorite'}, {name: 'cobalt'}, {name: 'wulfenite'}, {name: 'cassiterite'},
        {name: 'cinnabar'}, {name: 'goethite'}, {name: 'goldite'}, {name: 'ilmenite'}, {name: 'iridium'},
        {name: 'cloggrum'}, {name: 'cobaltite'}, {name: 'lepidolite'}, {name: 'cassiterite_sand'}, {name: 'lithium'},
        {name: 'yellow_limonite'}, {name: 'kyanite'}, {name: 'scheelite'}, {name: 'cooperite'}, {name: 'ebonite'},
        {name: 'electrum'}, {name: 'osmium'}, {name: 'nagrilite'}, {name: 'palladium'}, {name: 'pentlandite'},
        {name: 'pyrite'}, {name: 'pyrolusite'}, {name: 'pyrochlore'}, {name: 'platinum'}, {name: 'plutonium'},
        {name: 'powellite'}, {name: 'pollucite'}, {name: 'relict'}, {name: 'lead'}, {name: 'silver'},
        {name: 'spodumene'}, {name: 'stibnite'}, {name: 'sphalerite'}, {name: 'tantalite'}, {name: 'tenebrum'},
        {name: 'tetrahedrite'}, {name: 'thorium'}, {name: 'uraninite'}, {name: 'pitchblende'}, {name: 'chalcocite'},
        {name: 'chalcopyrite'}, {name: 'chromite'}
    ]);

    const ORE_TYPE_GEMS = Object.freeze([
        {name: 'amethyst'}, {name: 'lazurite'}, {name: 'graphite'}, {name: 'coal'},
        {name: 'apatite'}, {name: 'lapis'}, {name: 'graphene'}, {name: 'zeolite'},
        {name: 'asbestos'}, {name: 'monazite'}, {name: 'granitic_mineral_sand'}, {name: 'electrotine'},
        {name: 'basaltic_mineral_sand'}, {name: 'olivine'}, {name: 'garnet_sand'}, {name: 'blue_topaz'},
        {name: 'barite'}, {name: 'soapstone'}, {name: 'glauconite_sand'}, {name: 'mica'},
        {name: 'bastnasite'}, {name: 'nether_quartz'}, {name: 'diamond'}, {name: 'fullers_earth'},
        {name: 'bentonite'}, {name: 'oilsands'}, {name: 'alunite'}, {name: 'sulfur'},
        {name: 'virilux'}, {name: 'certus_quartz'}, {name: 'almandine'}, {name: 'saltpeter'},
        {name: 'gypsum'}, {name: 'emerald'}, {name: 'spessartine'}, {name: 'sapphire'},
        {name: 'night_crystal'}, {name: 'green_sapphire'}, {name: 'talc'}, {name: 'ruby'},
        {name: 'red_garnet'}, {name: 'yellow_garnet'}, {name: 'dark_pearl'}, {name: 'rendium'},
        {name: 'quartzite'}, {name: 'sulfur_dioxide'}, {name: 'topaz'}, {name: 'redstone'}, 
        {name: 'rock_salt'}, {name: 'diatomite'}, {name: 'tricalcium_phosphate'},{name: 'realgar'}, {name: 'opal'},
        {name: 'calcite'}, {name: 'grossular'}, {name: 'trona'}, {name: 'pyrope'}, {name: 'sodalite'}, {name: 'salt'}
    ]);

    ORE_TYPE_METAL.forEach(element => {
        event.create(`tiny_${element.name}_raw_ore`)
        .translationKey(`item.kubejs.tiny_${element.name}_raw_ore`);

        event.create(`small_${element.name}_raw_ore`)
        .translationKey(`item.kubejs.small_${element.name}_raw_ore`);

        event.create(`large_${element.name}_raw_ore`)
        .translationKey(`item.kubejs.large_${element.name}_raw_ore`);
    });
    console.log("Registered ore variants for metals");
    console.log("Total: "+ORE_TYPE_METAL.length);

    ORE_TYPE_GEMS.forEach(element => {
        event.create(`tiny_${element.name}_raw_ore`)
        .translationKey(`item.kubejs.tiny_${element.name}_raw_ore`);

        event.create(`small_${element.name}_raw_ore`)
        .translationKey(`item.kubejs.small_${element.name}_raw_ore`);

        event.create(`large_${element.name}_raw_ore`)
        .translationKey(`item.kubejs.large_${element.name}_raw_ore`);
    });
    console.log("Registered ore variants for gems");
    console.log("Total: "+ORE_TYPE_GEMS.length);
}