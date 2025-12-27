// Утилитарные функции
globalThis.Utils = {
  formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  },

  log(message, type = "info") {
    const colors = { info: "§a", warn: "§e", error: "§c" };
    console.log(`${colors[type]}[DarkRealm] ${message}§r`);
  },

  getOreItem(oreName, variant = "normal") {
    return `kubejs:${variant}_crushed_${oreName}_ore`;
  },
};
