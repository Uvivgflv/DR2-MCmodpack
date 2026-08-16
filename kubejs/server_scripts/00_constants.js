//priority 0
//kubejs/00_constants.js
// Dark realms Project made by UviV.gflv
//#region Globals vars
/**
 * @Object Array
 * @param vanilla default wood materials
 * @param biomesoplenty moded wood materials biomesoplenty
 */
global.WOOD_MATERIAL = {
    VANILLA: {
        LOGS: [
            'oak',
            'birch',
            'spruce',
            'dark_oak',
            'jungle',
            'mangrove',
            'acacia'
        ],
        STEMS: [
            'crimson',
            'warped'
        ],
        BAMBOO: [
            'bamboo'
        ]
    },
    BIOMESOPLENTY: {
        LOGS: [
            'fir',
            'pine',
            'maple',
            'redwood',
            'mahogany',
            'jacaranda',
            'palm',
            'willow',
            'dead',
            'magic',
            'umbran',
            'hellbark',
            'empyreal'
        ],
        STEMS: [
            ''
        ]
    },
    QUARK: {
        LOGS: [
            'ancient',
            'azalea',
            'blossom'
        ]
    },
    TWILIGHT: {
        LOGS: [
            'twilight',
            'canopy',
            'dark',
            'time',
            'transformation',
            'mining',
            'sorting'
        ]
    }
};
/**
 * @Object Array
 * @param color string - name of color for regex
 */
global.COLOR_MATERIAL = [
    {color: 'white'},
    {color: 'black'},
    {color: 'gray'},
    {color: 'light_gray'},
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'},
    {color: 'yellow'},
    {color: 'orange'},
    {color: 'pink'},
    {color: 'lime'},
    {color: 'light_blue'},
    {color: 'purple'},
    {color: 'magenta'},
    {color: 'cyan'},
    {color: 'brown'}
];

global.HOSTILES = [];

global.INGOT = 144;
global.BLOCK = 1296;
global.SECOND = 20;
global.MINUTE = 1200;
//#endregion

//#region Remove recipes arrays
global.REMOVE_RECIPES = {
    BASE: {
        MINECRAFT: [
            "minecraft:furnace",
            'minecraft:blast_furnace',
            'minecraft:smoker',
            /^minecraft:.*_bed/,
            'minecraft:crafting_table',
            /^minecraft:.*_shovel/,
            /^minecraft:.*_axe/,
            /^minecraft:.*_pickaxe/,
            /^minecraft:.*_sword/,
            /^minecraft:.*_hoe/
        ],
        BIOMES: [
            /^biomesoplenty:.*_planks/
            //biomesoplenty
            //endlessbiomes
            //betterend
            //theouterend
        ]
    },
    MODS: {
        AETHER: [
            'aether:skyroot_crafting_table'
        ],
        AE2: [
            //ae2
        ],
        ALEXS_CAVES: [
            //caves
        ],
        DELIGHT_MODS: [
            //alexsdeligth
            //farmersdelight
            //netherdelight
            //!all deligths
            /^farmersdelight:organic_compost_.*/,
            'farmersdelight:cooking_pot',
            'farmersdelight:stove',
            'farmersdelight:cutting_board',
            'farmersdelight:skillet'
        ],
        APOTHEOSIS: [
            //apotheosis
            //
        ],
        AQUACULTURE: [
            'aquaculture:planks_from_driftwood'
        ],
        BORN_IN_CHAOS: [
            ''
        ],
        GTCEU: [
            /^gtceu:shapeless\/.*_planks/,
            /^gtceu:shaped\/.*_saw/,
            'gtceu:shaped/blast_furnace'
        ],
        QUARK: [
            'quark:building/crafting/furnaces/cobblestone_furnace',
            'quark:building/crafting/furnaces/blackstone_blast_furnace',
            'quark:building/crafting/furnaces/deepslate_blast_furnace',
            'quark:building/crafting/furnaces/blackstone_smoker',
            'quark:building/crafting/furnaces/deepslate_smoker',
            'quark:building/crafting/furnaces/blackstone_furnace',
            'quark:building/crafting/furnaces/deepslate_furnace',
            'quark:building/crafting/furnaces/mixed_furnace',
            /^quark:tweaks\/crafting\/utility\/chests\/.*_chest_wood/,
            /^quark:building\/crafting\/chests\/.*_chest/,
            /^quark:world\/crafting\/woodsets\/.*\/chest/,
            /^quark:world\/crafting\/woodsets\/.*\/chest_wood/
            
        ],
        TCONSTRUCT: [
            'tconstruct:common/basalt_blast_furnace',
            'tconstruct:smeltery/seared/grout',
            'tconstruct:smeltery/seared/grout_multiple',
            'tconstruct:smeltery/seared/seared_bricks_from_brick',
            'tconstruct:smeltery/seared/melter',
            'tconstruct:smeltery/seared/heater',
            'tconstruct:smeltery/seared/drain',
            'tconstruct:smeltery/seared/drain_retextured',
            'tconstruct:smeltery/seared/duct',
            'tconstruct:smeltery/seared/duct_retextured',
            'tconstruct:smeltery/seared/chute',
            'tconstruct:smeltery/seared/chute_retextured',
            'tconstruct:smeltery/seared/fuel_tank',
            'tconstruct:smeltery/seared/faucet',
            'tconstruct:smeltery/seared/basin',
            'tconstruct:smeltery/seared/table',
            'tconstruct:smeltery/casting/seared/smeltery_controller',

            'tconstruct:smeltery/seared/seared_brick_kiln',
            'tconstruct:smeltery/seared/seared_brick',
            'tconstruct:smeltery/casting/seared/brick_composite',

            /^tconstruct:tables\/.*/

        ],
        SUPPLEMENTARIES: [
            'supplementaries:bed_from_feather_block'
        ]
    }
}
//#endregion

//#region Crafting pressets

//#endregion

//#region Arrays for recipes
global.RECIPES_REMOVE_OUTPUT = [
    'minecraft:smoker',
    'minecraft:stonecutter',
    'minecraft:cartography_table',
    'minecraft:fletching_table',
    'minecraft:smithing_table',
    'minecraft:grindstone',
    'minecraft:loom',
    'minecraft:anvil',
    'minecraft:enchanting_table',
    'minecraft:brewing_stand',
    'minecraft:cauldron',
    'minecraft:chest',
    'minecraft:barrel',
    'minecraft:bookshelf',

    'tconstruct:tinkers_anvil',
    'tconstruct:scorched_anvil'
];

global.RECIPES_REMOVE_ID = [];
//#endregion

//#region Arrays for loot
global.LOOT_ITEMS_BLACKLIST = [
    
];
//#endregion

