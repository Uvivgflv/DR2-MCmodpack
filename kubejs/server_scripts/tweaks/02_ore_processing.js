
var CopperRawMaterials = [
    {name:'minecraft:raw_copper', countRaw: 1, countSmeltRaw: 20},
    {name:'gtceu:raw_chalcopyrite', countRaw: 1, countSmelt: 18},
    {name:'gtceu:raw_tetrahedrite', countRaw: 2, countSmeltRaw: 40},
    {name:'gtceu:raw_malachite', countRaw: 1, countSmeltRaw: 18},
    {name:'gtceu:raw_chalcocite', countRaw: 2, countSmeltRaw: 18},
    {name:'gtceu:raw_bornite', countRaw: 2, countSmeltRaw: 40}
];

var IronRawMaterials = [
    {name: 'minecraft:raw_iron', countRaw: 1, countSmeltRaw: 20},
    {name: 'gtceu:raw_pyrite', countRaw: 1, countSmeltRaw: 18},
    {name: 'gtceu:raw_basaltic_mineral_sand', countRaw: 2, countSmeltRaw: 18},
    {name: 'gtceu:raw_magnetite', countRaw: 2, countSmeltRaw: 40},
    {name: 'gtceu:raw_yellow_limonite', countRaw: 1, countSmeltRaw: 18},
    {name: 'gtceu:raw_hematite', countRaw: 2, countSmeltRaw: 40},
    {name: 'gtceu:raw_goethite', countRaw: 1, countSmeltRaw: 18}
];

var TinRawMaterials = [
    {name: 'gtceu:raw_tin', countRaw: 1, countSmeltRaw: 20},
    {name: 'gtceu:raw_cassiterite', countRaw: 1, countSmeltRaw: 18},
    {name: 'gtceu:raw_cassiterite_sand', countRaw: 2, countSmeltRaw: 40}
];

var CobaltRawMaterials = [
    {name: 'gtceu:raw_cobalt', countRaw: 1, countSmeltRaw: 20},
    {name: 'gtceu:raw_cobaltite', countRaw: 1, countSmeltRaw: 18}
];

var NickelRawMaterials = [
    {name: 'gtceu:raw_nickel', countRaw: 1, countSmeltRaw: 20},
    {name: 'gtceu:raw_garnierite', countRaw: 1, countSmeltRaw: 18},
    {name: 'gtceu:raw_pentlandite', countRaw: 5, countSmeltRaw: 50}
];

var LeadRawMaterials = [
    {name: 'gtceu:raw_lead', countRaw: 1, countSmeltRaw: 20},
    {name: 'gtceu:raw_galena', countRaw: 1, countSmeltRaw: 18}
];

var GoldRawMaterial = [
    {name: 'minecraft:raw_gold', countRaw: 1, countSmeltRaw: 20}
];

var SilverRawMaterial = [
    {name: 'gtceu:raw_silver', countRaw: 1, countSmeltRaw: 18}
];

function rawCopperOreProcessing(event) {
    CopperRawMaterials.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'gtceu:copper_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_copper',
                amount: CountSmeltRaw
            },
            temperature: 500,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));

    });
};

function rawIronOreProcessing(event) {
    IronRawMaterials.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'minecraft:iron_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_iron',
                amount: CountSmeltRaw
            },
            temperature: 800,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
    });
}

function rawTinOreProcessing(event) {
    TinRawMaterials.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'gtceu:tin_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_tin',
                amount: CountSmeltRaw
            },
            temperature: 255,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
    });
};

function rawCobaltOreProcessing(event) {
    CobaltRawMaterials.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'gtceu:cobalt_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_cobalt',
                amount: CountSmeltRaw
            },
            temperature: 950,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));

    });
};

function rawNickelOreProcessing(event) {
    NickelRawMaterials.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'gtceu:nickel_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_nickel',
                amount: CountSmeltRaw
            },
            temperature: 950,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
    });
};

function rawLeadOreProcessing(event) {
    LeadRawMaterials.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'gtceu:lead_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_lead',
                amount: CountSmeltRaw
            },
            temperature: 330,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
    });
};

//благородные металлы 

function goldRawOreProcessing(event) {
    GoldRawMaterial.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'minecraft:gold_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_gold',
                amount: CountSmeltRaw
            },
            temperature: 700,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
    });
};

function rawSilverOreProcessing(event) {
    SilverRawMaterial.forEach((item) => {
        const ItemName = item.name;
        const CountRaw = item.countRaw;
        const CountSmeltRaw = item.countSmeltRaw;
        const OutputName = 'gtceu:silver_nugget';
        //smelting/blasting raw ore to nuggets
        event.smelting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*30).xp(0.1).id('kubejs:smelting/raw_ore_processing/'+ItemName.replace(':','_'));
        event.blasting(`${CountRaw}x ${OutputName}`, ItemName).cookingTime(20*15).xp(0.1).id('kubejs:blasting/raw_ore_processing/'+ItemName.replace(':','_'));
        //smelting in tconstruct smeltery
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                item: ItemName
            },
            result: {
                fluid: 'tconstruct:molten_silver',
                amount: CountSmeltRaw
            },
            temperature: 650,
            time: 20*5
        }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
    });
};

const CustomOreProcessing = (event) => {
    rawCopperOreProcessing(event);
    rawIronOreProcessing(event);
    rawTinOreProcessing(event);
    rawCobaltOreProcessing(event);
    rawNickelOreProcessing(event);
    rawLeadOreProcessing(event);
    goldRawOreProcessing(event);
    rawSilverOreProcessing(event);
}
