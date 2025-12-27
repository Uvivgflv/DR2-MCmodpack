//created with AI
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.blue("=== DEPLOY KUBEJS SCRIPTS ==="));

const CONFIG = {
  // Исходные файлы (что копируем)
  sourceDirs: ["kubejs", "config"],

  // Файлы (не папки)
  sourceFiles: ["pack.png", "manifest.json"],

  targets: [
    // Основной инстанс
    "D:/PrismLauncher/instances/CCT4",

    // Тестовый инстанс (опционально)
    // 'D:/PrismLauncher/instances/MyModpack_Test'
  ].filter((target) => fs.existsSync(target)),
};

function copyWithLog(source, target) {
  try {
    if (fs.existsSync(source)) {
      fs.copySync(source, target, { overwrite: true });
      console.log(chalk.green(`✓ ${source} → ${target}`));
      return true;
    } else {
      console.log(chalk.yellow(`⚠ Не найден: ${source}`));
      return false;
    }
  } catch (error) {
    console.log(chalk.red(`✗ Ошибка копирования ${source}: ${error.message}`));
    return false;
  }
}

async function deploy() {
  console.log(chalk.cyan(`Найдено целей: ${CONFIG.targets.length}`));

  let totalCopied = 0;
  let totalErrors = 0;

  CONFIG.targets.forEach((target) => {
    console.log(chalk.cyan(`\nДеплой в: ${target}`));

    // Копируем папки
    CONFIG.sourceDirs.forEach((dir) => {
      const source = path.join(__dirname, "..", dir);
      const dest = path.join(target, dir);

      if (copyWithLog(source, dest)) totalCopied++;
      else totalErrors++;
    });

    // Копируем файлы
    CONFIG.sourceFiles.forEach((file) => {
      const source = path.join(__dirname, "..", file);
      const dest = path.join(target, file);

      if (copyWithLog(source, dest)) totalCopied++;
      else totalErrors++;
    });
  });

  console.log(chalk.blue("\n=== ИТОГ ==="));
  console.log(chalk.green(`Успешно скопировано: ${totalCopied}`));
  if (totalErrors > 0) {
    console.log(chalk.yellow(`С ошибками: ${totalErrors}`));
  }

  // Запускаем проверку Git
  console.log(chalk.cyan("\nПроверка Git статуса..."));
  const { execSync } = require("child_process");
  try {
    const gitStatus = execSync("git status --porcelain", { encoding: "utf8" });
    if (gitStatus.trim()) {
      console.log(chalk.yellow("Есть несохранённые изменения в Git!"));
      console.log(gitStatus);
    } else {
      console.log(chalk.green("Git репозиторий чист"));
    }
  } catch (error) {
    console.log(chalk.yellow("Не удалось проверить Git статус"));
  }
}

deploy().catch(console.error);
