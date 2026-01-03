const fs = require('fs');
const path = require('path');

// Регулярные выражения для поиска нужных данных
const MATERIAL_REGEX = /(\w+)\s*=\s*new\s+Material\.Builder\([^)]+\)/;
// Обновлено: ищем .ore() как с параметрами, так и без
const ORE_REGEX = /\.ore\s*\([^)]*\)/;
const COLOR_REGEX = /\.color\s*\(\s*(0x[0-9a-fA-F]+)\s*\)/;
const NAME_REGEX = /GTCEu\.id\("([^"]+)"\)/;

/**
 * Парсит Java файл и извлекает информацию о материалах
 * @param {string} filePath - Путь к Java файлу
 * @returns {Array} Массив объектов с информацией о материалах
 */
function parseJavaFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        const results = [];
        
        let currentMaterial = null;
        let hasOreField = false;
        let materialName = null;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Поиск начала нового материала
            const materialMatch = line.match(MATERIAL_REGEX);
            if (materialMatch) {
                // Если нашли предыдущий материал с ore полем, сохраняем его
                if (currentMaterial && hasOreField && materialName) {
                    results.push({
                        name: materialName,
                        color: currentMaterial.color,
                        hexColor: currentMaterial.hexColor
                    });
                }
                
                // Сбрасываем состояние для нового материала
                currentMaterial = { name: materialMatch[1] };
                hasOreField = false;
                materialName = null;
                
                // Пытаемся найти имя материала из GTCEu.id()
                const nameMatch = line.match(NAME_REGEX);
                if (nameMatch) {
                    materialName = nameMatch[1];
                }
            }
            
            if (currentMaterial) {
                // Проверяем наличие поля .ore()
                if (ORE_REGEX.test(line)) {
                    hasOreField = true;
                }
                
                // Ищем цвет материала
                const colorMatch = line.match(COLOR_REGEX);
                if (colorMatch && !currentMaterial.color) {
                    const hexColor = colorMatch[1];
                    const decimalColor = parseInt(hexColor, 16);
                    currentMaterial.color = decimalColor;
                    currentMaterial.hexColor = hexColor;
                }
                
                // Если еще не нашли имя материала, проверяем эту строку
                if (!materialName) {
                    const nameMatch = line.match(NAME_REGEX);
                    if (nameMatch) {
                        materialName = nameMatch[1];
                    }
                }
                
                // Проверяем окончание блока материала
                if (line.includes('.buildAndRegister();') && materialName) {
                    // Если у материала есть поле ore, добавляем его в результаты
                    if (hasOreField && currentMaterial.color !== undefined) {
                        results.push({
                            name: materialName,
                            color: currentMaterial.color,
                            hexColor: currentMaterial.hexColor
                        });
                    }
                    
                    // Сбрасываем состояние
                    currentMaterial = null;
                    hasOreField = false;
                    materialName = null;
                }
            }
        }
        
        // Проверяем последний материал в файле
        if (currentMaterial && hasOreField && materialName && currentMaterial.color !== undefined) {
            results.push({
                name: materialName,
                color: currentMaterial.color,
                hexColor: currentMaterial.hexColor
            });
        }
        
        return results;
        
    } catch (error) {
        console.error(`Ошибка при чтении файла ${filePath}:`, error.message);
        return [];
    }
}

/**
 * Основная функция для обработки файлов
 */
function main() {
    // Укажите путь к вашему Java файлу
    const javaFilePath = './materials.java'; // Измените на путь к вашему файлу
    
    if (!fs.existsSync(javaFilePath)) {
        console.error(`Файл не найден: ${javaFilePath}`);
        console.log('Пожалуйста, укажите правильный путь к файлу.');
        return;
    }
    
    console.log(`Парсинг файла: ${javaFilePath}`);
    console.log('=' .repeat(50));
    
    const materials = parseJavaFile(javaFilePath);
    
    if (materials.length === 0) {
        console.log('Материалы с полем .ore() не найдены.');
        return;
    }
    
    console.log(`Найдено материалов с полем .ore(): ${materials.length}\n`);
    
    // Выводим результаты в формате CSV
    console.log('Имя материала, Цвет (десятичный), Цвет (hex)');
    console.log('-'.repeat(50));
    
    materials.forEach(material => {
        console.log(`${material.name}, ${material.color}, ${material.hexColor}`);
    });
    
    // Выводим результаты в формате JSON (опционально)
    console.log('\n\nРезультаты в формате JSON:');
    console.log(JSON.stringify(materials, null, 2));
}

/**
 * Функция для обработки всех Java файлов в директории
 * @param {string} directoryPath - Путь к директории
 */
function processDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);
        const allResults = [];
        
        files.forEach(file => {
            if (file.endsWith('.java')) {
                const filePath = path.join(directoryPath, file);
                console.log(`\nОбработка файла: ${file}`);
                
                const materials = parseJavaFile(filePath);
                allResults.push(...materials);
                
                if (materials.length > 0) {
                    console.log(`Найдено материалов: ${materials.length}`);
                }
            }
        });
        
        if (allResults.length > 0) {
            console.log('\n' + '=' .repeat(50));
            console.log(`Всего найдено материалов: ${allResults.length}\n`);
            
            // Сохраняем результаты в файл
            const outputPath = './materials_output.json';
            fs.writeFileSync(outputPath, JSON.stringify(allResults, null, 2));
            console.log(`Результаты сохранены в файл: ${outputPath}`);
            
            // Выводим сводную таблицу
            console.log('\nСводная таблица:');
            console.log('Имя материала, Цвет (hex)');
            console.log('-'.repeat(30));
            allResults.forEach(material => {
                console.log(`${material.name}, ${material.hexColor}`);
            });
        } else {
            console.log('\nМатериалы с полем .ore() не найдены.');
        }
        
    } catch (error) {
        console.error('Ошибка при обработке директории:', error.message);
    }
}
processDirectory('D:\\prismLauncher\\instances\\CCT04\\minecraft\\scripts\\parsing\\');