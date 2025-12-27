# Dark Realm Modpack - KubeJS Development

## Структура проекта

```
kubejs/
├── server_scripts/     # Серверные скрипты
│   ├── modules/        # Модули
│   ├── loot_tables/    # Лут-таблицы
│   └── worldgen/       # Генерация мира
├── startup_scripts/    # Регистрация предметов/блоков
└── client_scripts/     # Клиентские скрипты

scripts/               # Утилиты разработки
docs/                  # Документация
```

## Команды разработки

```bash
# Форматирование кода
npm run format

# Проверка качества кода
npm run lint

# Создание бэкапа
npm run backup

# Инициализация Git
npm run git:init
```
