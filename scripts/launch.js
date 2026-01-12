const { exec } = require('child_process');
const path = require('path');

const prismPath = 'C:\\Users\\Dimas\\AppData\\Local\\Programs\\PrismLauncher\\prismlauncher.exe';

const { spawn } = require('child_process');

const prismProcess = spawn(prismPath, ['--launch', 'CCT04'], {
    detached: true,
    stdio: 'ignore'
});

prismProcess.unref();
console.log('Модпак запущен через Prism Launcher.');