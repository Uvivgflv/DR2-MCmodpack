#include "/lib/shaderSettings/water.glsl"
if (mat < 32008) {
    if (mat < 30016) {
        if (mat < 30008) {
            if (mat == 30000) { //

            } else if (mat == 30004) { //

            }
        } else {
            if (mat == 30008) { // Tinted Glass
                #ifdef CONNECTED_GLASS_EFFECT
                    uint voxelID = uint(30054);
                    bool isPane = false;
                    DoConnectedGlass(colorP, color, noGeneratedNormals, playerPos, worldGeoNormal, voxelID, isPane);
                #endif
                color.a = pow(color.a, 1.0 - fresnel * 0.65);
                reflectMult = 0.75;
                overlayNoiseAlpha = 0.95;
                sandNoiseIntensity = 0.5;
                mossNoiseIntensity = 0.5;
            } else /*if (mat == 30012)*/ { // Slime Block
                translucentMultCalculated = true;
                reflectMult = 0.7;
                translucentMult.rgb = pow2(color.rgb) * 0.2;

                smoothnessG = color.g * 0.7;
                highlightMult = 2.5;
                overlayNoiseAlpha = 0.6;
                sandNoiseIntensity = 0.5;
                mossNoiseIntensity = 0.5;
            }
        }
    } else {
        if (mat < 32000) {
            if (mat < 31000) {
                if (mat == 30016) { // Honey Block
                    translucentMultCalculated = true;
                    reflectMult = 1.0;
                    translucentMult.rgb = pow2(color.rgb) * 0.2;

                    smoothnessG = color.r * 0.7;
                    highlightMult = 2.5;
                    overlayNoiseAlpha = 0.4;
                    sandNoiseIntensity = 0.5;
                    mossNoiseIntensity = 0.5;
                } else /*if (mat == 30020)*/ { // Nether Portal
                    #ifdef SPECIAL_PORTAL_EFFECTS
                        #include "/lib/materials/specificMaterials/translucents/netherPortal.glsl"
                    #endif
                    overlayNoiseIntensity = 0.0;
                }
            } else { // (31XXX)
                if (mat % 2 == 0) { // Stained Glass
                    #ifdef CONNECTED_GLASS_EFFECT
                        uint voxelID = uint(30000 + (mat - 31000) / 2);
                        bool isPane = false;
                        DoConnectedGlass(colorP, color, noGeneratedNormals, playerPos, worldGeoNormal, voxelID, isPane);
                    #endif
                    #include "/lib/materials/specificMaterials/translucents/stainedGlass.glsl"
                    overlayNoiseAlpha = 1.05;
                    mossNoiseIntensity = 0.8;
                } else /*if (mat % 2 == 1)*/ { // Stained Glass Pane
                    #ifdef CONNECTED_GLASS_EFFECT
                        uint voxelID = uint(30000 + (mat - 31000) / 2);
                        bool isPane = true;
                        DoConnectedGlass(colorP, color, noGeneratedNormals, playerPos, worldGeoNormal, voxelID, isPane);
                    #endif
                    #include "/lib/materials/specificMaterials/translucents/stainedGlass.glsl"
                    noSmoothLighting = true;
                    overlayNoiseAlpha = 1.05;
                    sandNoiseIntensity = 0.8;
                    mossNoiseIntensity = 0.8;
                }
            }
        } else {
            if (mat == 32000) { // Water
                #ifdef SHADER_WATER
                    #include "/lib/materials/specificMaterials/translucents/water.glsl"
                #endif
                overlayNoiseIntensity = 0.0;
                overlayNoiseFresnelMult = 0.0;
                IPBRMult = 0.0;
                overlayNoiseAlpha = 0.0;
            } else /*if (mat == 32004)*/ { // Ice
                smoothnessG = pow2(color.g) * color.g;
                highlightMult = pow2(min1(pow2(color.g) * 1.5)) * 3.5;

                reflectMult = 0.7;
                overlayNoiseAlpha = 0.6;
                sandNoiseIntensity = 0.7;
                mossNoiseIntensity = 0.7;
            }
        }
    }
} else if (mat < 32064) {
    if (mat < 32024) {
        if (mat < 32016) {
            if (mat < 32012) { // Glass
                if (mat == 32008){
                    #ifdef CONNECTED_GLASS_EFFECT
                        uint voxelID = uint(30017);
                        bool isPane = false;
                        DoConnectedGlass(colorP, color, noGeneratedNormals, playerPos, worldGeoNormal, voxelID, isPane);
                    #endif
                }
                #include "/lib/materials/specificMaterials/translucents/glass.glsl"
                overlayNoiseAlpha = 0.8;
                sandNoiseIntensity = 0.8;
                mossNoiseIntensity = 0.8;
            } else /*if (mat == 32012)*/ { // Glass Pane
                if (mat == 32012) {
                    #ifdef CONNECTED_GLASS_EFFECT
                        uint voxelID = uint(30018);
                        bool isPane = true;
                        DoConnectedGlass(colorP, color, noGeneratedNormals, playerPos, worldGeoNormal, voxelID, isPane);
                    #endif
                }
                if (color.a < 0.001 && abs(NdotU) > 0.95) discard; // Fixing artifacts on CTM/Opti connected glass panes
                #include "/lib/materials/specificMaterials/translucents/glass.glsl"
                noSmoothLighting = true;
                overlayNoiseAlpha = 0.8;
                sandNoiseIntensity = 0.8;
                mossNoiseIntensity = 0.8;
            }
        } else {
            if (mat == 32016) { // Beacon
                lmCoordM.x = 0.88;

                translucentMultCalculated = true;
                translucentMult = vec4(0.0, 0.0, 0.0, 1.0);

                if (color.b > 0.5) {
                    if (color.g - color.b < 0.01 && color.g < 0.99) {
                        #include "/lib/materials/specificMaterials/translucents/glass.glsl"
                    } else { // Beacon:Center
                        lmCoordM = vec2(0.0);
                        noDirectionalShading = true;

                        float lColor = length(color.rgb);
                        vec3 baseColor = vec3(0.1, 1.0, 0.92);
                        if (lColor > 1.65)      color.rgb = baseColor + 0.2;
                        else if (lColor > 1.5)  color.rgb = baseColor + 0.15;
                        else if (lColor > 1.3)  color.rgb = baseColor + 0.08;
                        else if (lColor > 1.15) color.rgb = baseColor + 0.035;
                        else                    color.rgb = baseColor;
                        emission = 3.5;
                    }
                } else { // Beacon:Obsidian
                    float factor = color.r * 1.5;

                    smoothnessG = factor;
                    highlightMult = 2.0 + min1(smoothnessG * 2.0) * 1.5;
                    smoothnessG = min1(smoothnessG);
                }
                overlayNoiseAlpha = 0.8;
                sandNoiseIntensity = 0.5;
                mossNoiseIntensity = 0.5;
            } else /*if (mat == 32020)*/ { //

            }
        }
    } else {
        if (mat < 32032) {
            if (mat == 32024) { //

            } else /*if (mat == 32028)*/ { //

            }
        } else {
            if (mat == 32032) { //

            } else /*if (mat == 32036)*/ { //

            }
        }
    }
} else if (mat != 65535) {
    if (mat < 32192) {
        if (mat < 32160) {
            // block.32128 = stained_framed_glass
            if (color.a > 0.8) {
                smoothnessG = color.r;
                reflectMult = 1.0;
                highlightMult = 1.0;
            } else {
                #include "/lib/materials/specificMaterials/translucents/stainedGlass.glsl"
                overlayNoiseAlpha = 1.05;
                sandNoiseIntensity = 0.8;
                mossNoiseIntensity = 0.8;
            }
        } else /*if (mat < 32192)*/ {
            if (mat < 32176) {
                // block.32160 = crystal_lamps
                float factor;
                if (mat % 16 < 8) {
                    factor = color.b;
                } else if (mat % 8 < 4) {
                    factor = 0.8 * color.g + 0.2 * color.r;
                } else if (mat % 2 == 0) {
                    factor = color.g;
                } else {
                    factor = (color.r + color.b + color.g) / 3;
                }
            
                bool lit = mat % 2 == 0;
                #include "/lib/materials/specificMaterials/terrain/corundumCrystalLamps.glsl"
            } else /*if (mat < 32192)*/ {
                if (mat < 32184) {
                    // block.32176 = corundum_block
                    float factor;
                    if (mat % 8 < 4) {
                        factor = color.b;
                    } else if (mat % 4 < 2) {
                        factor = 0.8 * color.g + 0.2 * color.r;
                    } else if (mat % 4 == 2) {
                        factor = color.g;
                    } else {
                        factor = (color.r + color.b + color.g) / 3;
                    }
                
                    #include "/lib/materials/specificMaterials/terrain/corundumBlock.glsl"
                } else /*if (mat < 32192)*/ {
                    if (mat < 32188) {
                        // block.32184 = blood
                        smoothnessG = color.r;
                    
                        translucentMultCalculated = true;
                        reflectMult = 0.6 * color.r;
                        translucentMult.rgb = pow2(color.rgb);
                    } else /*if (mat < 32192)*/ {
                        // block.32188 = discernment_glass
                        if (color.b > color.r) {
                            #include "/lib/materials/specificMaterials/translucents/glass.glsl"
                            color.a = pow(color.a, 1.0 - fresnel * 0.8);
                    
                            overlayNoiseAlpha = 0.8;
                            sandNoiseIntensity = 0.8;
                            mossNoiseIntensity = 0.8;
                        } else {
                            float factor = pow2(color.g) * 0.6;
                    
                            smoothnessG = factor;
                            highlightMult = 1.0 + 2.5 * factor;
                        }
                    }
                }
            }
        }
    } else /*if (mat < 32220)*/ {
        if (mat < 32208) {
            if (mat < 32200) {
                if (mat < 32196) {
                    // block.32192 = soul_glass
                    if (color.b > color.r) {
                        #include "/lib/materials/specificMaterials/translucents/glass.glsl"
                        color.a = pow(color.a, 1.0 - fresnel * 0.8);
                
                        overlayNoiseAlpha = 0.8;
                        sandNoiseIntensity = 0.8;
                        mossNoiseIntensity = 0.8;
                
                        if (mat % 4 == 2) {
                            emission = pow1_5(color.b);
                        }
                    } else {
                        smoothnessG = 1.2 * smoothstep1(min1(1.3 * max0(color.r - 0.18)));
                    }
                } else /*if (mat < 32200)*/ {
                    // block.32196 = thin_black_ice
                    smoothnessG = pow3(4.5 * color.g);
                    highlightMult = pow2(min1(pow2(color.g) * 1.5)) * 3.5;
                
                    reflectMult = 0.7;
                    overlayNoiseAlpha = 0.6;
                    sandNoiseIntensity = 0.7;
                    mossNoiseIntensity = 0.7;
                }
            } else /*if (mat < 32208)*/ {
                if (mat < 32204) {
                    // block.32200 = white_corundum
                    bool lit = mat % 2 == 0;
                    float factor = (color.r + color.b + color.g) / 2.3;
                
                    if (mat % 4 == 2) {
                        #include "/lib/materials/specificMaterials/terrain/corundumBlock.glsl"
                    } else {
                        #include "/lib/materials/specificMaterials/terrain/corundumCrystalLamps.glsl"
                    }
                } else /*if (mat < 32208)*/ {
                    // block.32204 = dirty_glass
                    const uint voxelNumbers[4] = uint[](30073u, 30073u, 30073u, 30073u);
                    uint voxelNumber = voxelNumbers[mat % 4];
                    bool isPane = mat % 4 == 2;
                    #ifdef CONNECTED_GLASS_EFFECT
                        DoConnectedGlass(colorP, color, noGeneratedNormals, playerPos, worldGeoNormal, voxelNumber, isPane);
                    #endif
                
                    smoothnessG = 0.3 * pow2(color.r);
                    highlightMult = smoothnessG + 0.1;
                    reflectMult = 0.1;
                
                    overlayNoiseAlpha = 1.25;
                    sandNoiseIntensity = 0.8;
                    mossNoiseIntensity = 0.8;
                
                    noSmoothLighting = isPane;
    
                }
            }
        } else /*if (mat < 32220)*/ {
            if (mat < 32216) {
                if (mat < 32212) {
                    // block.32208 = framed_glass
                    if (
                        CheckForColor(color.rgb, vec3(57, 54, 52)) ||
                        CheckForColor(color.rgb, vec3(65, 68, 69)) ||
                        CheckForColor(color.rgb, vec3(71, 79, 82)) ||
                        CheckForColor(color.rgb, vec3(44, 40, 37)) ||
                        CheckForColor(color.rgb, vec3(64, 67, 68)) ||
                        CheckForColor(color.rgb, vec3(43, 40, 37)) ||
                        CheckForColor(color.rgb, vec3(33, 35, 31)) ||
                        CheckForColor(color.rgb, vec3(55, 55, 55))
                    ) {
                        smoothnessG = color.r;
                    } else {
                        #include "/lib/materials/specificMaterials/translucents/glass.glsl"
                
                        overlayNoiseAlpha = 0.8;
                        sandNoiseIntensity = 0.8;
                        mossNoiseIntensity = 0.8;
                    }
                } else /*if (mat < 32216)*/ {
                    // block.32212 = myalite_crystal
                    smoothnessG = 2.5 * color.b;
                    highlightMult = 3.0 * pow2(pow2(color.r)) * smoothnessG;
                
                    translucentMultCalculated = true;
                    reflectMult = 0.8;
                    translucentMult.rgb = pow2(color.rgb);
                
                    overlayNoiseAlpha = 0.4;
                }
            } else /*if (mat < 32220)*/ {
                // block.32216 = lumisene
                #include "/lib/materials/specificMaterials/terrain/lumisene.glsl"
            }
        }
    }
    
}
