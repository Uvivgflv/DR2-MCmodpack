// ============================================
// ГЛАВНЫЙ ФАЙЛ DARK REALM MODPACK
// ============================================

console.log("§6=== DARK REALM MODPACK ===§r");

// Загружаем модули в правильном порядке
require("./00_constants.js");
require("./01_utils.js");

// Загружаем остальные модули
const moduleFiles = [
  // Добавьте здесь свои модули
  // './modules/ores.js',
  // './modules/recipes.js',
];

moduleFiles.forEach((module) => {
  try {
    require(module);
    Utils.log(`Загружен модуль: ${module}`, "info");
  } catch (error) {
    Utils.log(`Ошибка загрузки ${module}: ${error.message}`, "error");
  }
});

// Обработчики событий
ServerEvents.recipes((event) => {
  Utils.log("Система рецептов инициализирована", "info");
});

ServerEvents.loaded(() => {
  Utils.log("Модпак полностью загружен!", "info");
});
