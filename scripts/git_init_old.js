//created with AI
const fs = require("fs-extra");
const path = require("path");

console.log("INITIALIZATION");

try {
  execSync("git --version", { stdio: "ingerit" });
  console.log("GIT INSTALLED");
} catch (error) {
  console.error("GIT NOT INSTALL ");
  process.exit(1);
}

const gitignoreContent = `#======MINECRAFT======
logs/
crash-reports/
debug/
saves/
*.json_old
usercache.json
usernamecache.json
options.txt
optionsshaders.txt
launcher_accounts.json
launcher_profiles.json

#=========ASSETS&LIBS=======
assets/
libraries/
versions/
resourcepacks/.cache/
shaderpacks/.cache/

#========MODS===============
mods/

#========KUBEJS=============
kubejs/exported/
kubejs/temp/
kubejs/client_scripts/cache
kubejs/server_scripts/cache
kubejs/*.log

#========CONFIGS============
config/**/*.cfg.cache
config/**/*.json.tmp
config/**/*.bak
config/jei/
config/enchdesc/
config/entity_model_features/

#=======TEMP&SCREENS========
screenshots/
*.tmp
*.temp
cache/
tmp/
panoramas/
patchouil_books/
modernfix/
local/
ldlib/
datapacks/
cosmetics/
automodpack/
aoutomessage_data/
coremods/
data/
fancymenu_data/
global_packs/
gtceu/
schematics/
server-resource-packs/
xaero/
XaeroWaypoints_*/
*.nl_password
*.qmenu_opened.marker
*.dat
*.nbt

#======SYSTEM===============
.DS_Store
Thumbs.db
desktop.ini
*.log
*.7z
*.dat_old

#========VSCODE=============
.vscode/workspaceStorage/
!.vscode/settings.js
!.vscode/extensions.js
!.vscode/tasks.json

#=========NODE==============
node_modules/
package-lock.json
`;

fs.writeFileSync(".gitignore", gitignoreContent);
console.log("GITIGNORE CREATED");

const gitattributesContent = `# Text files
*.js text eol=lf
*.json text eol=lf
*.md text eol=lf
*.txt text eol=lf
*.cfg text eol=lf
*.properties text eol=lf
*.toml text eol=lf
*.yml text eol=lf
*.yaml text eol=lf

#Binary
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.jar binary
*.zip binary
*.rar binary

#For Config
*.json diff=json
*.cfg diff=cfg
`;

fs.writeFileSync(".gitattributes", gitattributesContent);
console.log("GITATTRIBS CREATED");

try {
  if (fs.existSync(".git")) {
    console.log("REPO ALREADY EXISIST");
  } else {
    execSync("git init", { stdio: "inherit" });
    console.log("REPO INIT DONE");
  }
} catch (error) {
  console.log("INIT ERROR", error.message);
}

try {
  execSync('git config --local user.name "UVIV"', { stdio: "pipe" });
  execSync('git config --local user.email "dev@modpack.local"', {
    stdio: "pipe",
  });
  execSync("git config --local core.autocrlf input", { stdio: "pipe" });
  execSync("git config --local core.longpaths true", { stdio: "pipe" });

  console.log("CONFIG DONE");
} catch (error) {
  console.warn("GONFIG ERROR:", error.message);
}

console.log("INIT DONE");
console.log("\nNEXT STEPS:");
console.log("1 ADD files: git add .");
console.log('2 CREATE FIRST COMMIT: git commit -m "initial commit"');
console.log("3 SEND: git push -u origin main");
