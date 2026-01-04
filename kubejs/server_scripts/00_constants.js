//#region global custom recipes patterns&constants
/**
 * @typedef {Object} RawOreVariant
 * @property {string} name - The name of the ore variant (e.g., "iron", "gold")
 * @property {string} type - The type of the ore variant (e.g., "metal", "gem")
 * @property {string} namespace - The namespace associated with the ore variant (e.g., mod ID)
 * @property {number} quality - Коэффициент качества руды от 3 до 6
 * @property {string} element - Результат переработки руды (например, "iron", "gold")
 */
global.RawOreVariants = [
    {name: 'iron', type: 'metal', namespace: 'minecraft', quality: 3},
    {name: 'gold', type: 'metal', namespace: 'minecraft', quality: 4},
];
//#endregion