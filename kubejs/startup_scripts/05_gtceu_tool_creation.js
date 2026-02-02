const GTToolsCreation = (event) => {
    if (GTMaterials.Flint.hasProperty(PropertyKey.TOOL)) {
        GTMaterials.Flint.removeProperty(PropertyKey.TOOL);
    }
    GTMaterials.Flint.setProperty(PropertyKey.TOOL, 
        ToolProperty.Builder.of(1, 4, 32, 1,
        [
            GTToolType.SAW,
            GTToolType.MORTAR,
            GTToolType.SWORD
        ]
    ).build());
}