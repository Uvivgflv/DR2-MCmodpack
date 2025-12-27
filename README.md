# Minecraft Modpack - KubeJS Development

## Структура проекта

modpack/
├── .vscode/ # Настройки VS Code
├── kubejs/ # KubeJS скрипты
│ ├── server_scripts/ # Серверные скрипты
│ └── startup_scripts/ # Стартовые скрипты
├── config/ # Конфиги модов
├── scripts/ # Утилиты разработки
├── docs/ # Документация
└── .gitignore # Git игнорирование

## Команды разработки

```bash
# Форматирование кода
npm run format

# Проверка качества кода
npm run lint

# Деплой в игровой инстанс
npm run deploy

# Бекап проекта
npm run backup

# Работа с Git
npm run git:status
npm run git:commit -- "сообщение"
```
