const RegisterDecorModule = (event) => {
    //#region consts 
    const woodTypes = [ //add fence, fence gate, boats, signs
    //vanilla

    //biomesoplenty
    {name: 'biomesoplenty', planks: 'biomesoplenty:fir_planks', trapdoor: 'biomesoplenty:fir_trapdoor', door: 'biomesoplenty:fir_door', fence: 'biomesoplenty:fir_fence', gate: 'biomesoplenty:fir_fence_gate', boat: 'biomesoplenty:fir_boat', boat_chest: 'biomesoplenty:fir_chest_boat', press: 'biomesoplenty:fir_pressure_plate', button: 'biomesoplenty:fir_button', slab: 'biomesoplenty:fir_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:pine_planks', trapdoor: 'biomesoplenty:pine_trapdoor', door: 'biomesoplenty:pine_door', fence: 'biomesoplenty:pine_fence', gate: 'biomesoplenty:pine_fence_gate', boat: 'biomesoplenty:pine_boat', boat_chest: 'biomesoplenty:pine_chest_boat', press: 'biomesoplenty:pine_pressure_plate', button: 'biomesoplenty:pine_button', slab: 'biomesoplenty:pine_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:maple_planks', trapdoor: 'biomesoplenty:maple_trapdoor', door: 'biomesoplenty:maple_door', fence: 'biomesoplenty:maple_fence', gate: 'biomesoplenty:maple_fence_gate', boat: 'biomesoplenty:maple_boat', boat_chest: 'biomesoplenty:maple_chest_boat', press: 'biomesoplenty:maple_pressure_plate', button: 'biomesoplenty:maple_button', slab: 'biomesoplenty:maple_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:willow_planks', trapdoor: 'biomesoplenty:willow_trapdoor', door: 'biomesoplenty:willow_door', fence: 'biomesoplenty:willow_fence', gate: 'biomesoplenty:willow_fence_gate', boat: 'biomesoplenty:willow_boat', boat_chest: 'biomesoplenty:willow_chest_boat', press: 'biomesoplenty:willow_pressure_plate', button: 'biomesoplenty:willow_button', slab: 'biomesoplenty:willow_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:dead_planks', trapdoor: 'biomesoplenty:dead_trapdoor', door: 'biomesoplenty:dead_door', fence: 'biomesoplenty:dead_fence', gate: 'biomesoplenty:dead_fence_gate', boat: 'biomesoplenty:dead_boat', boat_chest: 'biomesoplenty:dead_chest_boat', press: 'biomesoplenty:dead_pressure_plate', button: 'biomesoplenty:dead_button', slab: 'biomesoplenty:dead_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:magic_planks', trapdoor: 'biomesoplenty:magic_trapdoor', door: 'biomesoplenty:magic_door', fence: 'biomesoplenty:magic_fence', gate: 'biomesoplenty:magic_fence_gate', boat: 'biomesoplenty:magic_boat', boat_chest: 'biomesoplenty:magic_chest_boat', press: 'biomesoplenty:magic_pressure_plate', button: 'biomesoplenty:magic_button', slab: 'biomesoplenty:magic_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:redwood_planks', trapdoor: 'biomesoplenty:redwood_trapdoor', door: 'biomesoplenty:redwood_door', fence: 'biomesoplenty:redwood_fence', gate: 'biomesoplenty:redwood_fence_gate', boat: 'biomesoplenty:redwood_boat', boat_chest: 'biomesoplenty:redwood_chest_boat', press: 'biomesoplenty:redwood_pressure_plate', button: 'biomesoplenty:redwood_button', slab: 'biomesoplenty:redwood_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:mahogany_planks', trapdoor: 'biomesoplenty:mahogany_trapdoor', door: 'biomesoplenty:mahogany_door', fence: 'biomesoplenty:mahogany_fence', gate: 'biomesoplenty:mahogany_fence_gate', boat: 'biomesoplenty:mahogany_boat', boat_chest: 'biomesoplenty:mahogany_chest_boat', press: 'biomesoplenty:mahogany_pressure_plate', button: 'biomesoplenty:mahogany_button', slab: 'biomesoplenty:mahogany_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:jacaranda_planks', trapdoor: 'biomesoplenty:jacaranda_trapdoor', door: 'biomesoplenty:jacaranda_door', fence: 'biomesoplenty:jacaranda_fence', gate: 'biomesoplenty:jacaranda_fence_gate', boat: 'biomesoplenty:jacaranda_boat', boat_chest: 'biomesoplenty:jacaranda_chest_boat', press: 'biomesoplenty:jacaranda_pressure_plate', button: 'biomesoplenty:jacaranda_button', slab: 'biomesoplenty:jacaranda_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:palm_planks', trapdoor: 'biomesoplenty:palm_trapdoor', door: 'biomesoplenty:palm_door', fence: 'biomesoplenty:palm_fence', gate: 'biomesoplenty:palm_fence_gate', boat: 'biomesoplenty:palm_boat', boat_chest: 'biomesoplenty:palm_chest_boat', press: 'biomesoplenty:palm_pressure_plate', button: 'biomesoplenty:palm_button', slab: 'biomesoplenty:palm_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:umbran_planks', trapdoor: 'biomesoplenty:umbran_trapdoor', door: 'biomesoplenty:umbran_door', fence: 'biomesoplenty:umbran_fence', gate: 'biomesoplenty:umbran_fence_gate', boat: 'biomesoplenty:umbran_boat', boat_chest: 'biomesoplenty:umbran_chest_boat', press: 'biomesoplenty:umbran_pressure_plate', button: 'biomesoplenty:umbran_button', slab: 'biomesoplenty:umbran_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:hellbark_planks', trapdoor: 'biomesoplenty:hellbark_trapdoor', door: 'biomesoplenty:hellbark_door', fence: 'biomesoplenty:hellbark_fence', gate: 'biomesoplenty:hellbark_fence_gate', boat: 'biomesoplenty:hellbark_boat', boat_chest: 'biomesoplenty:hellbark_chest_boat', press: 'biomesoplenty:hellbark_pressure_plate', button: 'biomesoplenty:hellbark_button', slab: 'biomesoplenty:hellbark_slab'},
    {name: 'biomesoplenty', planks: 'biomesoplenty:empyreal_planks', trapdoor: 'biomesoplenty:empyreal_trapdoor', door: 'biomesoplenty:empyreal_door', fence: 'biomesoplenty:empyreal_fence', gate: 'biomesoplenty:empyreal_fence_gate', boat: 'biomesoplenty:empyreal_boat', boat_chest: 'biomesoplenty:empyreal_chest_boat', press: 'biomesoplenty:empyreal_pressure_plate', button: 'biomesoplenty:empyreal_button', slab: 'biomesoplenty:empyreal_slab'},
    //biomeswevegone
    {name: 'biomeswevegone', planks: 'biomeswevegone:aspen_planks', trapdoor: 'biomeswevegone:aspen_trapdoor', door: 'biomeswevegone:aspen_door', fence: 'biomeswevegone:aspen_fence', gate: 'biomeswevegone:aspen_fence_gate', boat: 'biomeswevegone:aspen_boat', boat_chest: 'biomeswevegone:aspen_chest_boat', press: 'biomeswevegone:aspen_pressure_plate', button: 'biomeswevegone:aspen_button', slab: 'biomeswevegone:aspen_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:blue_enchanted_planks', trapdoor: 'biomeswevegone:blue_enchanted_trapdoor', door: 'biomeswevegone:blue_enchanted_door', fence: 'biomeswevegone:blue_enchanted_fence', gate: 'biomeswevegone:blue_enchanted_fence_gate', boat: 'biomeswevegone:blue_enchanted_boat', boat_chest: 'biomeswevegone:blue_enchanted_chest_boat', press: 'biomeswevegone:blue_enchanted_pressure_plate', button: 'biomeswevegone:blue_enchanted_button', slab: 'biomeswevegone:blue_enchanted_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:cika_planks', trapdoor: 'biomeswevegone:cika_trapdoor', door: 'biomeswevegone:cika_door', fence: 'biomeswevegone:cika_fence', gate: 'biomeswevegone:cika_fence_gate', boat: 'biomeswevegone:cika_boat', boat_chest: 'biomeswevegone:cika_chest_boat', press: 'biomeswevegone:cika_pressure_plate', button: 'biomeswevegone:cika_button', slab: 'biomeswevegone:cika_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:cypress_planks', trapdoor: 'biomeswevegone:cypress_trapdoor', door: 'biomeswevegone:cypress_door', fence: 'biomeswevegone:cypress_fence', gate: 'biomeswevegone:cypress_fence_gate', boat: 'biomeswevegone:cypress_boat', boat_chest: 'biomeswevegone:cypress_chest_boat', press: 'biomeswevegone:cypress_pressure_plate', button: 'biomeswevegone:cypress_button', slab: 'biomeswevegone:cypress_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:ebony_planks', trapdoor: 'biomeswevegone:ebony_trapdoor', door: 'biomeswevegone:ebony_door', fence: 'biomeswevegone:ebony_fence', gate: 'biomeswevegone:ebony_fence_gate', boat: 'biomeswevegone:ebony_boat', boat_chest: 'biomeswevegone:ebony_chest_boat', press: 'biomeswevegone:ebony_pressure_plate', button: 'biomeswevegone:ebony_button', slab: 'biomeswevegone:ebony_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:fir_planks', trapdoor: 'biomeswevegone:fir_trapdoor', door: 'biomeswevegone:fir_door', fence: 'biomeswevegone:fir_fence', gate: 'biomeswevegone:fir_fence_gate', boat: 'biomeswevegone:fir_boat', boat_chest: 'biomeswevegone:fir_chest_boat', press: 'biomeswevegone:fir_pressure_plate', button: 'biomeswevegone:fir_button', slab: 'biomeswevegone:fir_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:florus_planks', trapdoor: 'biomeswevegone:florus_trapdoor', door: 'biomeswevegone:florus_door', fence: 'biomeswevegone:florus_fence', gate: 'biomeswevegone:florus_fence_gate', boat: 'biomeswevegone:florus_boat', boat_chest: 'biomeswevegone:florus_chest_boat', press: 'biomeswevegone:florus_pressure_plate', button: 'biomeswevegone:florus_button', slab: 'biomeswevegone:florus_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:green_enchanted_planks', trapdoor: 'biomeswevegone:green_enchanted_trapdoor', door: 'biomeswevegone:green_enchanted_door', fence: 'biomeswevegone:green_enchanted_fence', gate: 'biomeswevegone:green_enchanted_fence_gate', boat: 'biomeswevegone:green_enchanted_boat', boat_chest: 'biomeswevegone:green_enchanted_chest_boat', press: 'biomeswevegone:green_enchanted_pressure_plate', button: 'biomeswevegone:green_enchanted_button', slab: 'biomeswevegone:green_enchanted_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:holly_planks', trapdoor: 'biomeswevegone:holly_trapdoor', door: 'biomeswevegone:holly_door', fence: 'biomeswevegone:holly_fence', gate: 'biomeswevegone:holly_fence_gate', boat: 'biomeswevegone:holly_boat', boat_chest: 'biomeswevegone:holly_chest_boat', press: 'biomeswevegone:holly_pressure_plate', button: 'biomeswevegone:holly_button', slab: 'biomeswevegone:holly_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:mahogany_planks', trapdoor: 'biomeswevegone:mahogany_trapdoor', door: 'biomeswevegone:mahogany_door', fence: 'biomeswevegone:mahogany_fence', gate: 'biomeswevegone:mahogany_fence_gate', boat: 'biomeswevegone:mahogany_boat', boat_chest: 'biomeswevegone:mahogany_chest_boat', press: 'biomeswevegone:mahogany_pressure_plate', button: 'biomeswevegone:mahogany_button', slab: 'biomeswevegone:mahogany_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:ironwood_planks', trapdoor: 'biomeswevegone:ironwood_trapdoor', door: 'biomeswevegone:ironwood_door', fence: 'biomeswevegone:ironwood_fence', gate: 'biomeswevegone:ironwood_fence_gate', boat: 'biomeswevegone:ironwood_boat', boat_chest: 'biomeswevegone:ironwood_chest_boat', press: 'biomeswevegone:ironwood_pressure_plate', button: 'biomeswevegone:ironwood_button', slab: 'biomeswevegone:ironwood_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:jacaranda_planks', trapdoor: 'biomeswevegone:jacaranda_trapdoor', door: 'biomeswevegone:jacaranda_door', fence: 'biomeswevegone:jacaranda_fence', gate: 'biomeswevegone:jacaranda_fence_gate', boat: 'biomeswevegone:jacaranda_boat', boat_chest: 'biomeswevegone:jacaranda_chest_boat', press: 'biomeswevegone:jacaranda_pressure_plate', button: 'biomeswevegone:jacaranda_button', slab: 'biomeswevegone:jacaranda_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:maple_planks', trapdoor: 'biomeswevegone:maple_trapdoor', door: 'biomeswevegone:maple_door', fence: 'biomeswevegone:maple_fence', gate: 'biomeswevegone:maple_fence_gate', boat: 'biomeswevegone:maple_boat', boat_chest: 'biomeswevegone:maple_chest_boat', press: 'biomeswevegone:maple_pressure_plate', button: 'biomeswevegone:maple_button', slab: 'biomeswevegone:maple_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:palm_planks', trapdoor: 'biomeswevegone:palm_trapdoor', door: 'biomeswevegone:palm_door', fence: 'biomeswevegone:palm_fence', gate: 'biomeswevegone:palm_fence_gate', boat: 'biomeswevegone:palm_boat', boat_chest: 'biomeswevegone:palm_chest_boat', press: 'biomeswevegone:palm_pressure_plate', button: 'biomeswevegone:palm_button', slab: 'biomeswevegone:palm_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:pine_planks', trapdoor: 'biomeswevegone:pine_trapdoor', door: 'biomeswevegone:pine_door', fence: 'biomeswevegone:pine_fence', gate: 'biomeswevegone:pine_fence_gate', boat: 'biomeswevegone:pine_boat', boat_chest: 'biomeswevegone:pine_chest_boat', press: 'biomeswevegone:pine_pressure_plate', button: 'biomeswevegone:pine_button', slab: 'biomeswevegone:pine_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:rainbow_eucalyptus_planks', trapdoor: 'biomeswevegone:rainbow_eucalyptus_trapdoor', door: 'biomeswevegone:rainbow_eucalyptus_door', fence: 'biomeswevegone:rainbow_eucalyptus_fence', gate: 'biomeswevegone:rainbow_eucalyptus_fence_gate', boat: 'biomeswevegone:rainbow_eucalyptus_boat', boat_chest: 'biomeswevegone:rainbow_eucalyptus_chest_boat', press: 'biomeswevegone:rainbow_eucalyptus_pressure_plate', button: 'biomeswevegone:rainbow_eucalyptus_button', slab: 'biomeswevegone:rainbow_eucalyptus_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:redwood_planks', trapdoor: 'biomeswevegone:redwood_trapdoor', door: 'biomeswevegone:redwood_door', fence: 'biomeswevegone:redwood_fence', gate: 'biomeswevegone:redwood_fence_gate', boat: 'biomeswevegone:redwood_boat', boat_chest: 'biomeswevegone:redwood_chest_boat', press: 'biomeswevegone:redwood_pressure_plate', button: 'biomeswevegone:redwood_button', slab: 'biomeswevegone:redwood_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:sakura_planks', trapdoor: 'biomeswevegone:sakura_trapdoor', door: 'biomeswevegone:sakura_door', fence: 'biomeswevegone:sakura_fence', gate: 'biomeswevegone:sakura_fence_gate', boat: 'biomeswevegone:sakura_boat', boat_chest: 'biomeswevegone:sakura_chest_boat', press: 'biomeswevegone:sakura_pressure_plate', button: 'biomeswevegone:sakura_button', slab: 'biomeswevegone:sakura_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:skyris_planks', trapdoor: 'biomeswevegone:skyris_trapdoor', door: 'biomeswevegone:skyris_door', fence: 'biomeswevegone:skyris_fence', gate: 'biomeswevegone:skyris_fence_gate', boat: 'biomeswevegone:skyris_boat', boat_chest: 'biomeswevegone:skyris_chest_boat', press: 'biomeswevegone:skyris_pressure_plate', button: 'biomeswevegone:skyris_button', slab: 'biomeswevegone:skyris_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:white_mangrove_planks', trapdoor: 'biomeswevegone:white_mangrove_trapdoor', door: 'biomeswevegone:white_mangrove_door', fence: 'biomeswevegone:white_mangrove_fence', gate: 'biomeswevegone:white_mangrove_fence_gate', boat: 'biomeswevegone:white_mangrove_boat', boat_chest: 'biomeswevegone:white_mangrove_chest_boat', press: 'biomeswevegone:white_mangrove_pressure_plate', button: 'biomeswevegone:white_mangrove_button', slab: 'biomeswevegone:white_mangrove_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:willow_planks', trapdoor: 'biomeswevegone:willow_trapdoor', door: 'biomeswevegone:willow_door', fence: 'biomeswevegone:willow_fence', gate: 'biomeswevegone:willow_fence_gate', boat: 'biomeswevegone:willow_boat', boat_chest: 'biomeswevegone:willow_chest_boat', press: 'biomeswevegone:willow_pressure_plate', button: 'biomeswevegone:willow_button', slab: 'biomeswevegone:willow_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:witch_hazel_planks', trapdoor: 'biomeswevegone:witch_hazel_trapdoor', door: 'biomeswevegone:witch_hazel_door', fence: 'biomeswevegone:witch_hazel_fence', gate: 'biomeswevegone:witch_hazel_fence_gate', boat: 'biomeswevegone:witch_hazel_boat', boat_chest: 'biomeswevegone:witch_hazel_chest_boat', press: 'biomeswevegone:witch_hazel_pressure_plate', button: 'biomeswevegone:witch_hazel_button', slab: 'biomeswevegone:witch_hazel_slab'},
    {name: 'biomeswevegone', planks: 'biomeswevegone:zelkova_planks', trapdoor: 'biomeswevegone:zelkova_trapdoor', door: 'biomeswevegone:zelkova_door', fence: 'biomeswevegone:zelkova_fence', gate: 'biomeswevegone:zelkova_fence_gate', boat: 'biomeswevegone:zelkova_boat', boat_chest: 'biomeswevegone:zelkova_chest_boat', press: 'biomeswevegone:zelkova_pressure_plate', button: 'biomeswevegone:zelkova_button', slab: 'biomeswevegone:zelkova_slab'}
    ];

    let trapdoorCraftingIron = (output, input) => {
        event.shaped(output, [
            'ABC',
            'BDB',
            'CBA'
        ],{
            A:'#forge:bolts/iron',
            B: input,
            C:'#forge:rods/wooden',
            D:'#forge:tools/screwdrivers'
        }).id(`dr2:decor/trapdoor/${output.replace(':', '/')}_iron`);
    };

    let trapdoorCraftingWroughtIron = (output, input) => {
        event.shaped(output, [
            'ABC',
            'BDB',
            'CBA'
        ],{
            A:'#forge:bolts/wrought_iron',
            B: input,
            C:'#forge:rods/wooden',
            D:'#forge:tools/screwdrivers'
        }).id(`dr2:decor/trapdoor/${output.replace(':', '/')}_wrought_iron`);
    };

    let doorCraftingIron = (output, input, input1) => {
        event.shaped(output, [
            'ABC',
            'ADE',
            'AAF'
        ],{
            A: input,
            B: input1,
            C: '#forge:tools/screwdrivers',
            D:'#forge:rings/iron',
            E:'#forge:screws/iron',
            F:'#gtceu:tools/crafting_saws'
        }).id(`dr2:decor/door/${output.replace(':', '/')}_iron`);
    };

    let doorCraftingWroughtIron = (output, input, input1) => {
        event.shaped(output, [
            'ABC',
            'ADE',
            'AAF'
        ],{
            A: input,
            B: input1,
            C: '#forge:tools/screwdrivers',
            D:'#forge:rings/wrought_iron',
            E:'#forge:screws/wrought_iron',
            F:'#gtceu:tools/crafting_saws'
        }).id(`dr2:decor/door/${output.replace(':', '/')}_wrought_iron`);
    };

    let fenceCrafting = (output, input) => {
        event.shaped(output, [
            'ABA',
            'ABA',
            'ABA'
        ],{
            A: input,
            B: '#forge:rods/wooden'
        }).id(`dr2:decor/fence/${output.replace(':', '/')}`);
    };

    let fenceGatesFlint = (output, input) => {
        event.shaped(output, [
            'A A',
            'BCB',
            'BCB'
        ],{
            A:'#forge:gems/flint',
            B:'#forge:rods/wooden',
            C: input
        }).id(`dr2:decor/fence_gates/${output.replace(':', '/')}_flint`);
    };

    let fenceGatesScrewIron = (output, input) => {
        event.shaped(output, [
            'ABA',
            'CDC',
            'CDC'
        ],{
            A:'#forge:screws/iron',
            B:'#forge:tools/screwdrivers',
            C:'#forge:rods/wooden',
            D:input
        }).id(`dr2:decor/fence_gates/${output.replace(':', '/')}_iron`);
    };

    let fenceGatesScrewWroughtIron = (output, input) => {
        event.shaped(output, [
            'ABA',
            'CDC',
            'CDC'
        ],{
            A:'#forge:screws/wrought_iron',
            B:'#forge:tools/screwdrivers',
            C:'#forge:rods/wooden',
            D:input
        }).id(`dr2:decor/fence_gates/${output.replace(':', '/')}_wrought_iron`);
    };

    let boatCrafting = (output, input, input1) => {
        event.shaped(output, [
            'ABA',
            'ACA',
            'DDD'
        ],{
            A: input,
            B: '#minecraft:shovels',
            C: '#gtceu:tools/crafting_knives',
            D: input1
        }).id(`dr2:decor/boat/${output.replace(':', '/')}`);
    };

    let boatChestCrafting = (output, input) => {
        event.shaped(output, [
            'A  ',
            'B  '
        ],{
            A: input,
            B:'#forge:chests/wooden'
        }).id(`dr2:decor/chest_boat/${output.replace(':', '/')}`);
    };

    let pressurePlateCraftingIron = (output, input) => {
        event.shaped('2x '+output, [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A:'#forge:bolts/wood',
            B:'#forge:tools/mallets',
            C:input,
            D:'#forge:springs/iron',
            E:'#forge:tools/screwdrivers'
        }).id(`dr2:decor/pressure_plates/${output.replace(':','/')}_iron`);
    };

    let pressurePlateCraftingCopper = (output, input) => {
        event.shaped('2x '+output, [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A:'#forge:bolts/wood',
            B:'#forge:tools/mallets',
            C:input,
            D:'#forge:springs/copper',
            E:'#forge:tools/screwdrivers'
        }).id(`dr2:decor/pressure_plates/${output.replace(':','/')}_copper`);
    };

    let buttonCrafting = (output, input) => {
        event.shaped('6x '+output, [
            '   ',
            'AB ',
            '   '
        ],{
            A: '#forge:tools/saws',
            B: input
        }).id(`dr2:decor/pressure_plates/${output.replace(':', '/')}`);
    };

    let slabSawing = (output, input) => {
        event.shaped('2x '+output, [
            '   ',
            'AB ',
            '   '
        ],{
            A:'#forge:tools/saws',
            B: input
        }).id(`dr2:decor/slabs/${output.replace(':', '/')}`);
    };
    //#endregion

    //#region light sources
    event.shaped('4x supplementaries:sconce', [
        'A B',
        'CDC',
        ' E '
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:tools/files',
        C:'#forge:rings/wrought_iron',
        D:'#dr2:lantern_fuel',
        E:'#forge:rods/treated_wood'
    }).id('dr2:decor/sconce');

    event.shaped('minecraft:lantern', [
        'ABC',
        'DED',
        ' B '
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:rings/wrought_iron',
        C:'#forge:tools/files',
        D:'#forge:rods/wrought_iron',
        E:'#dr2:lantern_fuel'
    }).id('dr2:decor/lantern');

    event.shaped('minecraft:soul_lantern', [
        'ABC',
        'DED',
        ' B '
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:rings/wrought_iron',
        C:'#forge:tools/files',
        D:'#forge:rods/wrought_iron',
        E:'minecraft:soul_torch'
    }).id('dr2:decor/soul_lantern');

    event.shaped('2x minecraft:torch', [
        'A ',
        'B '
    ],{
        A:'#dr2:lantern_fuel',
        B:'#forge:rods/wooden'
    }).id('dr2:decor/torch');

    event.shaped('2x minecraft:redstone_torch', [
        'A ',
        'B ',
        'C '
    ],{
        A:'#forge:tiny_dusts/redstone',
        B:'#dr2:lantern_fuel',
        C:'#forge:rods/wooden'
    }).id('dr2:decor/redstone_torch');

    event.shaped('6x minecraft:redstone_torch', [
        'A ',
        'BB ',
        'CC '
    ],{
        A:'#forge:dusts/redstone',
        B:'#dr2:lantern_fuel',
        C:'#forge:rods/wooden'
    }).id('dr2:decor/redstone_torch_alt');
    //#endregion

    //#region decor miniblocks
    event.shaped('supplementaries:goblet', [
        ' A ',
        'BCD',
        'EFE'
    ],{
        A:'#forge:tools/hammers',
        B:'#forge:tools/wire_cutters',
        C:'#forge:plates/wrought_iron',
        D:'#forge:tools/files',
        E:'#forge:rings/wrought_iron',
        F:'#forge:bolts/wrought_iron'
    }).id('dr2:decor/goblet');

    event.shaped('supplementaries:hat_stand', [
        ' A ',
        'BCD',
        'EFE'
    ],{
        A:'#minecraft:planks',
        B:'#forge:tools/saws',
        C:'#forge:bolts/wood',
        D:'#forge:tools/files',
        E:'#forge:plates/wrought_iron',
        F:'minecraft:stone_pressure_plate'
    }).id('dr2:decor/hat_stand');

    event.shaped('2x minecraft:stone_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'
    ],{
        A:'#forge:screws/wrought_iron',
        B:'#forge:tools/hammers',
        C:'minecraft:stone_slab',
        D:'#forge:springs/copper',
        E:'#forge:tools/screwdrivers'
    }).id('dr2:decor/stone_pressure_plate');
    //#endregion

    //#region doors trapdoors
    woodTypes.forEach(element => {
        const planks_id = element.planks;
        const slab_id = element.slab;
        const trapdoor_id = element.trapdoor;
        const door_id = element.door;
        const fence_id = element.fence;
        const fence_gate_id = element.gate;
        const boat_id = element.boat;
        const chest_boat_id = element.boat_chest;
        const press_id = element.press;
        const button_id = element.button;
        //const namespace = element.name;
        trapdoorCraftingIron(trapdoor_id, planks_id);
        trapdoorCraftingWroughtIron(trapdoor_id, planks_id);
        doorCraftingIron(door_id, planks_id, trapdoor_id);
        doorCraftingWroughtIron(door_id, planks_id, trapdoor_id);
        fenceCrafting(fence_id, planks_id);
        fenceGatesFlint(fence_gate_id, planks_id);
        fenceGatesScrewIron(fence_gate_id, planks_id);
        fenceGatesScrewWroughtIron(fence_gate_id, planks_id);
        boatCrafting(boat_id, planks_id, slab_id);
        boatChestCrafting(chest_boat_id, boat_id);
        pressurePlateCraftingIron(press_id, slab_id);
        pressurePlateCraftingCopper(press_id, slab_id);
        buttonCrafting(button_id, press_id);
        if(slab_id != undefined||slab_id != '') {slabSawing(slab_id, planks_id);}
    });
    //#endregion
};