//created with AI
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.cyan("=== СИНХРОНИЗАЦИЯ ФАЙЛОВ РАЗРАБОТКИ ==="));

// Что синхронизируем из корня в minecraft/
const syncItems = [
  ".vscode",
  "scripts",
  "docs",
  ".gitignore",
  ".prettierrc",
  ".eslintrc.json",
];

syncItems.forEach((item) => {
  const source = path.join(__dirname, "..", item);
  const dest = path.join(__dirname, "..", "minecraft", item);

  if (fs.existsSync(source)) {
    fs.copySync(source, dest, { overwrite: true });
    console.log(chalk.green(`✓ ${item} → minecraft/${item}`));
  }
});

console.log(chalk.cyan("\n=== СИНХРОНИЗАЦИЯ ЗАВЕРШЕНА ==="));
