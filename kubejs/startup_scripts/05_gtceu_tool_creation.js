const GTToolsCreation = (event) => {
    //#region consts
    //list deleted materials for tools
    Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
    Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');
    // const MaterialList = [
    //     GTMaterials.BlackSteel,
    //     GTMaterials.DamascusSteel,
    //     GTMaterials.Invar,
    //     GTMaterials.SterlingSilver,
    //     GTMaterials.RoseGold,
    //     GTMaterials.Aluminium,
    //     GTMaterials.StainlessSteel,
    //     GTMaterials.VanadiumSteel,
    //     GTMaterials.RedSteel,
    //     GTMaterials.TungstenSteel,
    //     GTMaterials.BlueSteel,
    //     GTMaterials.TungstenCarbide,
    //     GTMaterials.NaquadahAlloy,
    //     GTMaterials.HSSE,
    //     GTMaterials.Diamond,
    //     GTMaterials.Titanium,
    //     GTMaterials.Neutronium,
    //     GTMaterials.Duranium,
    //     GTMaterials.Netherite,
    //     GTMaterials.Ultimet
    // ]

    // MaterialList.forEach(element => {
    //     if(element.hasProperty(PropertyKey.TOOL)) {
    //         element.removeProperty(PropertyKey.TOOL);
    //     }
    // });
    //#endregion

    //#region FLINT
    if (GTMaterials.Flint.hasProperty(PropertyKey.TOOL)) {
        GTMaterials.Flint.removeProperty(PropertyKey.TOOL);
    }
    GTMaterials.Flint.setProperty(PropertyKey.TOOL, 
        ToolProperty.Builder.of(1, 4, 32, 1,  // float harvest speed, float attack damage, int durability, int harvest level
        [
            GTToolType.SAW,
            GTToolType.MORTAR,
            GTToolType.KNIFE
        ]
    ).build()
    );
    //#endregion

    //#region COPPER
    if (GTMaterials.Copper.hasProperty(PropertyKey.TOOL)) {
        GTMaterials.Copper.removeProperty(PropertyKey.TOOL);
    }
    GTMaterials.Copper.setProperty(PropertyKey.TOOL, 
        ToolProperty.Builder.of(1.3, 4, 128, 1,  // float harvest speed, float attack damage, int durability, int harvest level
        [
            GTToolType.SAW,
            GTToolType.MORTAR,
            GTToolType.KNIFE,
            GTToolType.HARD_HAMMER
        ]
    ).build()
    );
    //#endregion

    //#region BRONZE
    // if (GTMaterials.Bronze.hasProperty(PropertyKey.TOOL)) {
    //     GTMaterials.Bronze.removeProperty(PropertyKey.TOOL);
    // }
    // GTMaterials.Bronze.setProperty(PropertyKey.TOOL,
    //     ToolProperty.Builder.of(1.45, 5, 256, 2,
    //         [
    //             GTToolType.SAW,
    //             GTToolType.MORTAR,
    //             GTToolType.FILE,
    //             GTToolType.KNIFE,
    //             GTToolType.HARD_HAMMER,
    //             GTToolType.SCREWDRIVER,
    //             GTToolType.CROWBAR,
    //             GTToolType.SHEARS,
    //             GTToolType.WRENCH,
    //             GTToolType.WIRE_CUTTER
    //         ]
    //     ).build()
    // );
    // //#endregion

    // //#region BISMUTH BRONZE
    // if (GTMaterials.BismuthBronze.hasProperty(PropertyKey.TOOL)) {
    //     GTMaterials.BismuthBronze.removeProperty(PropertyKey.TOOL);
    // }
    // GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL,
    //     ToolProperty.Builder.of(1.67, 5, 256, 2,
    //         [
    //             GTToolType.SAW,
    //             GTToolType.MORTAR,
    //             GTToolType.FILE,
    //             GTToolType.KNIFE,
    //             GTToolType.HARD_HAMMER,
    //             GTToolType.SCREWDRIVER,
    //             GTToolType.CROWBAR,
    //             GTToolType.SHEARS,
    //             GTToolType.WRENCH,
    //             GTToolType.WIRE_CUTTER
    //         ]
    //     ).build()
    // );
    // //#region BLACK BRONZE
    // if (GTMaterials.BlackBronze.hasProperty(PropertyKey.TOOL)) {
    //     GTMaterials.BlackBronze.removeProperty(PropertyKey.TOOL);
    // }
    // GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL,
    //     ToolProperty.Builder.of(1.23, 5, 341, 2,
    //         [
    //             GTToolType.SAW,
    //             GTToolType.MORTAR,
    //             GTToolType.FILE,
    //             GTToolType.KNIFE,
    //             GTToolType.HARD_HAMMER,
    //             GTToolType.SCREWDRIVER,
    //             GTToolType.CROWBAR,
    //             GTToolType.SHEARS,
    //             GTToolType.WRENCH,
    //             GTToolType.WIRE_CUTTER
    //         ]
    //     ).build()
    // );
    // //#endregion 

    // //#region IRON
    // // if (GTMaterials.Iron.hasProperty(PropertyKey.TOOL)) {
    // //     GTMaterials.Iron.removeProperty(PropertyKey.TOOL);
    // // }
    // // GTMaterials.Iron.setProperty(PropertyKey.TOOL,
    // //     ToolProperty.Builder.of(2.33, 6, 512, 3,
    // //         [
    // //             GTToolType.SAW,
    // //             GTToolType.MORTAR,
    // //             GTToolType.FILE,
    // //             GTToolType.KNIFE,
    // //             GTToolType.HARD_HAMMER,
    // //             GTToolType.SCREWDRIVER,
    // //             GTToolType.CROWBAR,
    // //             GTToolType.SHEARS,
    // //             GTToolType.WRENCH,
    // //             GTToolType.WIRE_CUTTER
    // //         ]
    // //     ).build()
    // // );
    // //#endregion

    // //#region WROUGHT IRON
    // if (GTMaterials.WroughtIron.hasProperty(PropertyKey.TOOL)) {
    //     GTMaterials.WroughtIron.removeProperty(PropertyKey.TOOL);
    // }
    // GTMaterials.WroughtIron.setProperty(PropertyKey.TOOL,
    //     ToolProperty.Builder.of(3.16, 7, 830, 3,
    //         [
    //             GTToolType.SAW,
    //             GTToolType.MORTAR,
    //             GTToolType.FILE,
    //             GTToolType.KNIFE,
    //             GTToolType.HARD_HAMMER,
    //             GTToolType.SCREWDRIVER,
    //             GTToolType.CROWBAR,
    //             GTToolType.SHEARS,
    //             GTToolType.WRENCH,
    //             GTToolType.WIRE_CUTTER
    //         ]
    //     ).build()
    // );
    // //#endregion

    // //#region STEEL
    // if (GTMaterials.Steel.hasProperty(PropertyKey.TOOL)) {
    //     GTMaterials.Steel.removeProperty(PropertyKey.TOOL);
    // }
    // GTMaterials.Steel.setProperty(PropertyKey.TOOL,
    //     ToolProperty.Builder.of(3.16, 7, 830, 3,
    //         [
    //             GTToolType.SAW,
    //             GTToolType.MORTAR,
    //             GTToolType.FILE,
    //             GTToolType.KNIFE,
    //             GTToolType.HARD_HAMMER,
    //             GTToolType.SCREWDRIVER,
    //             GTToolType.CROWBAR,
    //             GTToolType.SHEARS,
    //             GTToolType.WRENCH,
    //             GTToolType.WIRE_CUTTER,
    //             GTToolType.CHAINSAW_LV,
    //             GTToolType.DRILL_LV,
    //             GTToolType.SCREWDRIVER_LV,
    //             GTToolType.WIRE_CUTTER_LV,
    //             GTToolType.BUZZSAW
    //         ]
    //     ).build()
    // );
    //#endregion
}