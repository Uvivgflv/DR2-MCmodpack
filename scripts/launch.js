const { exec } = require('child_process');
const path = require('path');

const prismPath = 'C:\\Users\\Dimas\\AppData\\Local\\Programs\\PrismLauncher\\prismlauncher.exe';

// Вариант 1: Простой запуск
exec(`"${prismPath}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Ошибка: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log('PrismLauncher запущен!');
});

// Или вариант 2: С использованием spawn (лучше для GUI приложений)
const { spawn } = require('child_process');

const prismProcess = spawn(prismPath, [], {
    detached: true,
    stdio: 'ignore'
});

prismProcess.unref();
console.log('PrismLauncher запущен в фоновом режиме');