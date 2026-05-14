//priority 1000
//#region fluid to material
global.MATERIAL = {
  // Базовые единицы (mb)
  NUGGET: 16,
  INGOT: 144,
  BLOCK: 1296,

  // Хелперы для расчётов
  nuggets: (n) => n * 16,
  ingots: (n) => n * 144,
  blocks: (n) => n * 1296,

  // Предустановленные значения
  halfIngot: 72,
  quarterIngot: 36,
  twoIngots: 288,
  threeIngots: 432,
  fourIngots: 576,
  fiveIngots: 720,

  // Жидкости
  BUCKET: 1000,
  BOTTLE: 250,
  GLASS: 250,
};
//#endregion
//#region time
const SECONDS = 20;
const MINUTES = 60 * SECONDS;

global.time = {
  // Секунды
  seconds: (n) => n * SECONDS,
  sec: (n) => n * SECONDS, // короткий алиас

  // Минуты
  minutes: (n) => n * MINUTES,
  min: (n) => n * MINUTES, // короткий алиас

  // Предустановленные значения (для быстрого доступа)
  tick: 1,

  // Часто используемые значения
  t5: 5 * SECONDS, // 5 секунд = 100 тиков
  t10: 10 * SECONDS, // 10 секунд = 200 тиков
  t15: 15 * SECONDS, // 15 секунд = 300 тиков
  t20: 20 * SECONDS, // 20 секунд = 400 тиков
  t30: 30 * SECONDS, // 30 секунд = 600 тиков
  t45: 45 * SECONDS, // 45 секунд = 900 тиков

  m1: 1 * MINUTES, // 1 минута = 1200 тиков
  m2: 2 * MINUTES, // 2 минуты = 2400 тиков
  m3: 3 * MINUTES, // 3 минуты = 3600 тиков
  m5: 5 * MINUTES, // 5 минут = 6000 тиков
  m10: 10 * MINUTES, // 10 минут = 12000 тиков
  m15: 15 * MINUTES, // 15 минут = 18000 тиков
  m30: 30 * MINUTES, // 30 минут = 36000 тиков
  hour: 60 * MINUTES, // 1 час = 72000 тиков
};

/*
// В рецептах:
ServerEvents.recipes(event => {
    // Плавка в печи (стандартно 200 тиков = 10 секунд)
    event.smelting('minecraft:iron_ingot', 'minecraft:raw_iron')
        .cookingTime(global.time.seconds(10));  // 200 тиков
    
    // GTCEu рецепт с длительностью 5 минут
    event.recipes.gtceu.chemical_reactor('my_recipe')
        .itemInputs('4x gtceu:aluminium_dust')
        .itemOutputs('gtceu:aluminium_ingot')
        .duration(global.time.minutes(5))  // 6000 тиков
        .EUt(120);
    
    // Крафт в механическом крафтере Create с задержкой
    event.recipes.create.mechanical_crafting('result', [
        'ABA',
        'BCB',
        'ABA'
    ]).processingTime(global.time.seconds(15));  // 300 тиков
});
*/
