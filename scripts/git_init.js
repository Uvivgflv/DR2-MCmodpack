//created with AI
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_exec");
const chalk = require("chalk");

console.log(chalk.cyan("=== ИНИЦИАЛИЗАЦИЯ GIT РЕПОЗИТОРИЯ ==="));

// Проверяем установлен ли Git
try {
  execSync("git --version", { stdio: "pipe" });
  console.log(chalk.green("✓ Git установлен"));
} catch (error) {
  console.log(chalk.red("✗ Git не установлен!"));
  console.log(chalk.yellow("Установите Git: https://git-scm.com/"));
  process.exit(1);
}

// Инициализируем репозиторий
const gitPath = path.join(__dirname, "..", ".git");

if (fs.existsSync(gitPath)) {
  console.log(chalk.yellow("⚠ Git репозиторий уже существует"));
} else {
  try {
    execSync("git init", { stdio: "inherit" });
    console.log(chalk.green("✓ Git репозиторий инициализирован"));
  } catch (error) {
    console.log(chalk.red(`✗ Ошибка: ${error.message}`));
  }
}

// Настраиваем Git
try {
  execSync('git config --local user.name "Dark Realm Developer"', {
    stdio: "pipe",
  });
  execSync('git config --local user.email "dev@darkrealm.local"', {
    stdio: "pipe",
  });
  execSync("git config --local core.autocrlf input", { stdio: "pipe" });
  execSync("git config --local core.longpaths true", { stdio: "pipe" });

  console.log(chalk.green("✓ Настройки Git применены"));
} catch (error) {
  console.log(chalk.yellow("⚠ Не удалось настроить Git"));
}

console.log(chalk.cyan("\n=== ИНИЦИАЛИЗАЦИЯ ЗАВЕРШЕНА ==="));
console.log(chalk.yellow("\nСледующие шаги:"));
console.log("1. git add . - добавить файлы");
console.log('2. git commit -m "Initial commit" - первый коммит');
console.log("3. Создайте репозиторий на GitHub/GitLab");
console.log("4. git remote add origin <url> - добавить удалённый репозиторий");
console.log("5. git push -u origin main - отправить изменения");
