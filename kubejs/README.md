# Structure info
- assets *integrated assets for custom content*
- client_scripts *some client things*
- config *unchanged*
- data *datapack custom content*
- server_scripts *base of gameplay*
    - libs
        - recipes
            - recipes_remove.js *remove recipes by id/outputs*
    - mods
        - ae2 *add recipes for ae2*
        - minecraft *add recipes for vanilla*
    - 00_constants.js *constants init, arrays, inner tags, helpers, pressets*
    - 999_main.js *main file for scripts*
- startup_scripts *register new content*
    - 00_register.js *add new registries*
    - 999_main.js *main file for startup scripts*
## This scripts not finished yet 