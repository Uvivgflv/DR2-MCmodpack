//priority 0
const GTToolsCreation = (event) => {

    Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
    Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');

    if (GTMaterials.Flint.hasProperty(PropertyKey.TOOL)) {
        GTMaterials.Flint.removeProperty(PropertyKey.TOOL);
    }
    GTMaterials.Flint.setProperty(PropertyKey.TOOL,
        ToolProperty.Builder.of(1, 4, 32, 1, 
            [
                GTToolType.SAW,
                GTToolType.MORTAR
            ]
        ).build()
    );

    if (GTMaterials.Copper.hasProperty(PropertyKey.TOOL)) {
        GTMaterials.Copper.removeProperty(PropertyKey.TOOL);
    }
    GTMaterials.Copper.setProperty(PropertyKey.TOOL,
        ToolProperty.Builder.of(1, 4, 64, 2,
            [
                GTToolType.SAW,
                GTToolType.PICKAXE,
                GTToolType.HARD_HAMMER
            ]
        ).build()
    );

};

