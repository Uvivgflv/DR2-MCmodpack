//created with AI
const { execSync } = require("child_process");
const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.cyan("=== ПРОВЕРКА GIT НАСТРОЙКИ ==="));

try {
  // 1. Проверяем remote
  console.log(chalk.yellow("\n1. Проверяем remote репозитории..."));
  const remotes = execSync("git remote -v", { encoding: "utf8" });

  if (remotes.trim()) {
    console.log(chalk.green("✓ Remote настроены:"));
    console.log(remotes);

    // Проверяем URL
    const originUrl = execSync("git remote get-url origin", {
      encoding: "utf8",
    }).trim();
    console.log(chalk.yellow(`\nТекущий origin URL: ${originUrl}`));

    rl.question("Это правильный репозиторий GitHub? (y/n): ", (answer) => {
      if (answer.toLowerCase() !== "y") {
        fixRemote();
      } else {
        checkBranches();
      }
    });
  } else {
    console.log(chalk.red("✗ Remote не настроены"));
    fixRemote();
  }
} catch (error) {
  console.log(chalk.red("Git не инициализирован или ошибка:", error.message));
  rl.question("Инициализировать Git? (y/n): ", (answer) => {
    if (answer.toLowerCase() === "y") {
      initGit();
    } else {
      rl.close();
    }
  });
}

function fixRemote() {
  rl.question(
    chalk.yellow("\nВведите правильный URL GitHub репозитория:\n"),
    (url) => {
      try {
        // Удаляем старый origin если есть
        try {
          execSync("git remote remove origin", { stdio: "pipe" });
        } catch (e) {}

        // Добавляем новый
        execSync(`git remote add origin ${url}`);
        console.log(chalk.green(`✓ Remote настроен: ${url}`));

        // Проверяем подключение
        console.log(chalk.yellow("\nПроверяем подключение к GitHub..."));
        try {
          execSync("git ls-remote origin", { stdio: "pipe" });
          console.log(chalk.green("✓ Подключение успешно"));
          checkBranches();
        } catch (error) {
          console.log(chalk.red("✗ Не удалось подключиться к GitHub"));
          console.log(chalk.yellow("Проверьте:"));
          console.log("1. Правильность URL");
          console.log("2. Доступ в интернет");
          console.log("3. Доступ к репозиторию");
          rl.close();
        }
      } catch (error) {
        console.log(chalk.red("Ошибка:", error.message));
        rl.close();
      }
    },
  );
}

function checkBranches() {
  console.log(chalk.yellow("\n2. Проверяем ветки..."));

  try {
    // Получаем информацию с GitHub
    execSync("git fetch origin", { stdio: "pipe" });

    // Локальные ветки
    const localBranches = execSync("git branch", { encoding: "utf8" });
    console.log(chalk.cyan("Локальные ветки:"));
    console.log(localBranches);

    // Удалённые ветки
    const remoteBranches = execSync("git branch -r", { encoding: "utf8" });
    console.log(chalk.cyan("Удалённые ветки (GitHub):"));
    console.log(remoteBranches);

    // Текущая ветка
    const currentBranch = execSync("git branch --show-current", {
      encoding: "utf8",
    }).trim();
    console.log(chalk.yellow(`\nТекущая ветка: ${currentBranch}`));

    rl.question("\nСоздать новую ветку для разработки? (y/n): ", (answer) => {
      if (answer.toLowerCase() === "y") {
        createNewBranch();
      } else {
        rl.close();
      }
    });
  } catch (error) {
    console.log(chalk.red("Ошибка при проверке веток:", error.message));
    rl.close();
  }
}

function createNewBranch() {
  rl.question(
    chalk.yellow("\nИмя новой ветки (например: feature/kubejs): "),
    (branchName) => {
      try {
        // Создаём от main
        execSync("git checkout main", { stdio: "pipe" });
        execSync("git pull origin main", { stdio: "pipe" });
        execSync(`git checkout -b ${branchName}`);

        console.log(chalk.green(`\n✓ Создана ветка: ${branchName}`));
        console.log(chalk.cyan("Теперь можно:"));
        console.log("1. Работать с файлами");
        console.log("2. git add . - добавить изменения");
        console.log('3. git commit -m "сообщение" - закоммитить');
        console.log(
          `4. git push -u origin ${branchName} - отправить на GitHub`,
        );

        rl.close();
      } catch (error) {
        console.log(chalk.red("Ошибка:", error.message));
        rl.close();
      }
    },
  );
}

function initGit() {
  rl.question(chalk.yellow("URL вашего GitHub репозитория: "), (url) => {
    try {
      execSync("git init");
      execSync("git add .");
      execSync('git commit -m "Initial commit"');
      execSync(`git remote add origin ${url}`);

      console.log(chalk.green("\n✓ Git инициализирован и настроен!"));
      console.log(chalk.yellow("Далее: git push -u origin main"));

      rl.close();
    } catch (error) {
      console.log(chalk.red("Ошибка:", error.message));
      rl.close();
    }
  });
}
