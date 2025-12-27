//created with AI
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.cyan("=== ИНИЦИАЛИЗАЦИЯ DARK REALM MODPACK ==="));

// Основные папки
const folders = [
  "kubejs/server_scripts/modules",
  "kubejs/server_scripts/loot_tables",
  "kubejs/server_scripts/worldgen",
  "kubejs/startup_scripts",
  "kubejs/client_scripts",
  "scripts",
  "docs",
];

// Создаём папки
folders.forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(chalk.green(`✓ Создана папка: ${folder}`));
  }
});

// Базовые модули KubeJS
const modules = {
  // Константы
  "kubejs/server_scripts/00_constants.js": `// Глобальные константы
globalThis.MODS = {
  MC: 'minecraft',
  GT: 'gtceu',
  BOT: 'botania',
  CR: 'create',
  IE: 'immersiveengineering',
  TH: 'thermal'
};

globalThis.ORES = [
  'iron', 'gold', 'copper', 'tin', 'lead',
  'silver', 'nickel', 'aluminum', 'uranium'
];

console.log('Константы загружены');`,

  // Утилиты
  "kubejs/server_scripts/01_utils.js": `// Утилитарные функции
globalThis.Utils = {
  formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  },
  
  log(message, type = 'info') {
    const colors = { info: '§a', warn: '§e', error: '§c' };
    console.log(\`\${colors[type]}[DarkRealm] \${message}§r\`);
  },
  
  getOreItem(oreName, variant = 'normal') {
    return \`kubejs:\${variant}_crushed_\${oreName}_ore\`;
  }
};`,

  // Главный файл
  "kubejs/server_scripts/main.js": `// ============================================
// ГЛАВНЫЙ ФАЙЛ DARK REALM MODPACK
// ============================================

console.log('§6=== DARK REALM MODPACK ===§r');

// Загружаем модули в правильном порядке
require('./00_constants.js');
require('./01_utils.js');

// Загружаем остальные модули
const moduleFiles = [
  // Добавьте здесь свои модули
  // './modules/ores.js',
  // './modules/recipes.js',
];

moduleFiles.forEach(module => {
  try {
    require(module);
    Utils.log(\`Загружен модуль: \${module}\`, 'info');
  } catch (error) {
    Utils.log(\`Ошибка загрузки \${module}: \${error.message}\`, 'error');
  }
});

// Обработчики событий
ServerEvents.recipes(event => {
  Utils.log('Система рецептов инициализирована', 'info');
});

ServerEvents.loaded(() => {
  Utils.log('Модпак полностью загружен!', 'info');
});`,

  // Документация
  "docs/README.md": `# Dark Realm Modpack - KubeJS Development

## Структура проекта

\`\`\`
kubejs/
├── server_scripts/     # Серверные скрипты
│   ├── modules/        # Модули
│   ├── loot_tables/    # Лут-таблицы
│   └── worldgen/       # Генерация мира
├── startup_scripts/    # Регистрация предметов/блоков
└── client_scripts/     # Клиентские скрипты

scripts/               # Утилиты разработки
docs/                  # Документация
\`\`\`

## Команды разработки

\`\`\`bash
# Форматирование кода
npm run format

# Проверка качества кода
npm run lint

# Создание бэкапа
npm run backup

# Инициализация Git
npm run git:init
\`\`\`
`,
};

// Создаём файлы
Object.entries(modules).forEach(([filePath, content]) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✓ Создан файл: ${filePath}`));
});

console.log(chalk.cyan("\n=== ИНИЦИАЛИЗАЦИЯ ЗАВЕРШЕНА ==="));
console.log(chalk.yellow("\nСледующие шаги:"));
console.log("1. npm run format - отформатировать код");
console.log("2. npm run lint - проверить качество кода");
console.log("3. npm run git:init - инициализировать Git");
