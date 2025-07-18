// //priority 10
// ServerEvents.loaded(event => {
//         const player = event.player;
//         const currentLevel = player.getXpLevel();

//         if (currentLevel <= 15) {
//             event.requiredXp = 8 * currentLevel + 15; // Увеличиваем базовый опыт
//         } else if (currentLevel <= 30) {
//             event.requiredXp = 15 * currentLevel - 20; // Меняем коэффициенты
//         } else {
//             event.requiredXp = 20 * currentLevel - 100; // Изменяем для высоких уровней
//         }
//     }
// )

// server.registerFunction('modify_xp_requirements', (event) => {
//     event.onExperienceLevelUp((player, currentLevel, nextLevel) => {
//         // Получаем текущие требования для уровня
//         const baseXp = player.getNextLevelExperience();
//         // Увеличиваем требуемый опыт в 4 раза
//         return baseXp * 4;
//     });
// });

// server.on('serverLoad', () => {
//     server.callFunction('modify_xp_requirements');
// });

// ServerEvents.loaded(event => {
//     event.periodic(() => {
//         server.executeForPlayer((player) => {
//             const currentXp = player.getExperience();
//             const currentLevel = player.getLevel();
            
//             // Модифицируем требуемый опыт
//             player.setNextLevelExperience(currentLevel * 20); // Пример формулы
//         });
//     }, 20); // Обновление каждые 1 секунда
// });