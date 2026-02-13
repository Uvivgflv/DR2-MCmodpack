//priority 500
var CopperRawMaterials = global.CopperOreTypes;
var IronRawMaterials = global.IronOreTypes;
var TinRawMaterials = global.TinOreTypes;
var CobaltRawMaterials = global.CobaltOreTypes;
var NickelRawMaterials = global.NickelOreTypes;
var LeadRawMaterials = global.LeadOreTypes;
var GoldRawMaterial = global.GoldOreTypes;
var SilverRawMaterial = global.SilverOreTypes;

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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:copper',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 500,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));

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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:iron',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 800,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:tin',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 255,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:cobalt',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 950,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));

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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:nickel',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 950,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:lead',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 330,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceu:gold',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 700,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
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
        // event.custom({
        //     type: 'tconstruct:melting',
        //     ingredient: {
        //         item: ItemName
        //     },
        //     result: {
        //         fluid: 'gtceut:silver',
        //         amount: CountSmeltRaw
        //     },
        //     temperature: 650,
        //     time: 20*5
        // }).id('kubejs:tconstruct/smelting/raw_ore_processing/'+ItemName.replace(':','_'));
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
};
