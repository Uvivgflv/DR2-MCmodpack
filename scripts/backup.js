//made with AI
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const chalk = require("chalk");

console.log(chalk.cyan("=== СОЗДАНИЕ БЭКАПА ==="));

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const backupName = `backup-${timestamp}`;
const backupPath = path.join(__dirname, "..", "..", "backups", backupName);

// Что бэкапим
const backupItems = [
  "kubejs",
  "config",
  "scripts",
  "package.json",
  ".prettierrc",
  ".eslintrc.json",
  ".gitignore",
].filter((item) => fs.existsSync(path.join(__dirname, "..", item)));

try {
  // Создаём папку для бэкапа
  fs.mkdirSync(backupPath, { recursive: true });

  console.log(chalk.yellow(`Бэкап: ${backupPath}`));

  // Копируем файлы
  backupItems.forEach((item) => {
    const source = path.join(__dirname, "..", item);
    const dest = path.join(backupPath, item);

    fs.copySync(source, dest);
    console.log(chalk.green(`  ✓ ${item}`));
  });

  // Добавляем информацию о Git
  try {
    const gitInfo = {
      timestamp: new Date().toISOString(),
      branch: execSync("git branch --show-current", {
        encoding: "utf8",
      }).trim(),
      commit: execSync("git rev-parse --short HEAD", {
        encoding: "utf8",
      }).trim(),
      status: execSync("git status --porcelain", { encoding: "utf8" }).trim(),
    };

    fs.writeFileSync(
      path.join(backupPath, "git-info.json"),
      JSON.stringify(gitInfo, null, 2),
    );
  } catch (error) {
    // Git не инициализирован - это нормально
  }

  console.log(chalk.green(`\n✅ Бэкап создан: ${backupPath}`));
} catch (error) {
  console.log(chalk.red(`❌ Ошибка при создании бэкапа: ${error.message}`));
}
