#include "/lib/shaderSettings/entityMaterials.glsl"
int mat = currentRenderedItemId;

#ifdef GBUFFERS_HAND
    float lViewPos = 0.0;
#endif

#if defined GBUFFERS_ENTITIES || defined GBUFFERS_HAND
    int subsurfaceMode;
#endif

#if defined GBUFFERS_BLOCK
    float skyLightCheck = 0.0;
    float overlayNoiseEmission;
    vec3 maRecolor;
    bool noGeneratedNormals;
    bool noVanillaAO;
#endif

bool centerShadowBias;
float noPuddles;

if (currentRenderedItemId < 45000) {
    #ifdef DISTANT_LIGHT_BOKEH
        #undef DISTANT_LIGHT_BOKEH
        #include "/lib/materials/materialHandling/terrainIPBR.glsl"
        #define DISTANT_LIGHT_BOKEH
    #else
        #include "/lib/materials/materialHandling/terrainIPBR.glsl"
    #endif
} else

if (currentRenderedItemId < 45064) {
    if (currentRenderedItemId < 45032) {
        if (currentRenderedItemId < 45016) {
            if (currentRenderedItemId < 45008) {
                if (currentRenderedItemId == 45000) { // Armor Trims
                    smoothnessG = 0.5;
                    highlightMult = 2.0;
                    smoothnessD = 0.5;

                    #ifdef GLOWING_ARMOR_TRIM
                        emission = 1.0;
                    #endif
                    #ifdef SITUATIONAL_GLOWING_TRIMS
                        emission *= skyLightCheck;
                    #endif
                } else if (currentRenderedItemId == 45004) { // Wooden Tools, Bow, Fishing Rod
                    #include "/lib/materials/specificMaterials/planks/sprucePlanks.glsl"
                    smoothnessG = min(smoothnessG, 0.4);
                    smoothnessD = smoothnessG;
                }
            } else {
                if (currentRenderedItemId == 45008) { // Stone Tools
                    if (CheckForStick(color.rgb)) {
                        #include "/lib/materials/specificMaterials/planks/sprucePlanks.glsl"
                    } else {
                        #include "/lib/materials/specificMaterials/terrain/stone.glsl"
                    }
                } else /*if (currentRenderedItemId == 45012)*/ { // Iron Tools, Iron Armor, Iron Ingot, Iron Nugget, Iron Horse Armor, Flint and Steel, Flint, Spyglass, Shears, Chainmail Armor
                    if (CheckForStick(color.rgb)) {
                        #include "/lib/materials/specificMaterials/planks/sprucePlanks.glsl"
                    } else {
                        #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                    }
                }
            }
        } else {
            if (currentRenderedItemId < 45024) {
                if (currentRenderedItemId == 45016) { // Golden Tools, Golden Armor, Gold Ingot, Gold Nugget, Golden Apple, Enchanted Golden Apple, Golden Carrot, Golden Horse Armor
                    if (CheckForStick(color.rgb)) {
                        #include "/lib/materials/specificMaterials/planks/sprucePlanks.glsl"
                    } else {
                        #include "/lib/materials/specificMaterials/terrain/goldBlock.glsl"
                    }
                } else /*if (currentRenderedItemId == 45020)*/ { // Diamond Tools, Diamond Armor, Diamond, Diamond Horse Armor, Emerald
                    if (CheckForStick(color.rgb)) {
                        #include "/lib/materials/specificMaterials/planks/sprucePlanks.glsl"
                    } else {
                        #include "/lib/materials/specificMaterials/terrain/diamondBlock.glsl"
                    }
                }
            } else {
                if (currentRenderedItemId == 45024) { // Netherite Tools, Netherite Armor, Netherite Ingot
                    materialMask = OSIEBCA; // Intense Fresnel
                    smoothnessG = color.r * 1.5;
                    smoothnessG = min1(smoothnessG);
                    highlightMult = smoothnessG * 2.0;
                    smoothnessD = smoothnessG * smoothnessG * 0.5;

                    #ifdef COATED_TEXTURES
                        noiseFactor = 0.33;
                    #endif
                } else /*if (currentRenderedItemId == 45028)*/ { // Trident Item
                    #include "/lib/materials/specificMaterials/others/trident.glsl"
                }
            }
        }
    } else {
        if (currentRenderedItemId < 45048) {
            if (currentRenderedItemId < 45040) {
                if (currentRenderedItemId == 45032) { // Lava Bucket
                    if (color.r + color.g > color.b * 2.0) {
                        emission = color.r + color.g - color.b * 1.5;
                        emission *= 1.8;
                        color.rg += color.b * vec2(0.4, 0.15);
                        color.b *= 0.8;
                        if (LAVA_TEMPERATURE != 0.0) maRecolor += LAVA_TEMPERATURE * 0.1;
                        emission *= LAVA_EMISSION;
                        #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                            color.rgb = changeColorFunction(color.rgb, 2.0, colorSoul, inSoulValley);
                        #endif
                        #ifdef PURPLE_END_FIRE_INTERNAL
                            color.rgb = changeColorFunction(color.rgb, 2.0, colorEndBreath, 1.0);
                        #endif
                } else {
                        #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                    }
                } else /*if (currentRenderedItemId == 45036)*/ { // Bucket++
                    if (GetMaxColorDif(color.rgb) < 0.01) {
                        #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                    } else {
                        float factor = color.b;
                        smoothnessG = factor;
                        highlightMult = factor * 2.0;
                        smoothnessD = factor;
                    }
                }
            } else {
                if (currentRenderedItemId == 45040) { // Blaze Rod, Blaze Powder
                    noSmoothLighting = false;
                    lmCoordM.x = 0.85;
                    emission = color.g;
                    color.rgb = sqrt1(color.rgb);
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 2.0, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 2.0, colorEndBreath, 1.0);
                    #endif
            } else /*if (currentRenderedItemId == 45044)*/ { // Bottle o' Enchanting, Glow Inc Sac
                    emission = color.b * 2.0;
                }
            }
        } else {
            if (currentRenderedItemId < 45056) {
                if (currentRenderedItemId == 45048) { // Fire Charge
                    emission = max0(color.r + color.g - color.b * 0.5);
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 5.0, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 5.0, colorEndBreath, 1.0);
                    #endif
            } else /*if (currentRenderedItemId == 45052)*/ { // Chorus Fruit
                    emission = max0(color.b * 2.0 - color.r) * 1.5;
                }
            } else {
                if (currentRenderedItemId == 45056) { // Amethyst Shard
                    materialMask = OSIEBCA; // Intense Fresnel
                    float factor = pow2(color.r);
                    smoothnessG = 0.8 - factor * 0.3;
                    highlightMult = factor * 3.0;
                    smoothnessD = factor;
                } else /*if (currentRenderedItemId == 45060)*/ { // Shield
                    float factor = min(color.r * color.g * color.b * 4.0, 0.7) * 0.7;
                    smoothnessG = factor;
                    highlightMult = factor * 3.0;
                    smoothnessD = factor;
                }
            }
        }
    }
} else if (currentRenderedItemId < 45128) {
    if (currentRenderedItemId < 45096) {
        if (currentRenderedItemId < 45080) {
            if (currentRenderedItemId < 45072) {
                if (currentRenderedItemId == 45064) { // Turtle Shell
                    float factor = color.g * 0.7;
                    smoothnessG = factor;
                    highlightMult = factor * 3.0;
                    smoothnessD = factor;
                } else /*if (currentRenderedItemId == 45068)*/ { // Ender Pearl
                    smoothnessG = 1.0;
                    highlightMult = 2.0;
                    smoothnessD = 1.0;
                }
            } else {
                if (currentRenderedItemId == 45072) { // Eye of Ender
                    smoothnessG = 1.0;
                    highlightMult = 2.0;
                    smoothnessD = 1.0;
                    emission = max0(color.g - color.b * 0.25);
                    color.rgb = pow(color.rgb, vec3(1.0 - 0.75 * emission));
                } else /*if (currentRenderedItemId == 45076)*/ { // Clock
                    if (
                        CheckForColor(color.rgb, vec3(255, 255, 0)) ||
                        CheckForColor(color.rgb, vec3(204, 204, 0)) ||
                        CheckForColor(color.rgb, vec3(73, 104, 216)) ||
                        CheckForColor(color.rgb, vec3(58, 83, 172)) ||
                        CheckForColor(color.rgb, vec3(108, 108, 137)) ||
                        CheckForColor(color.rgb, vec3(86, 86, 109))
                    ) {
                        emission = 1.0;
                        color.rgb += vec3(0.1);
                    }

                    #include "/lib/materials/specificMaterials/terrain/goldBlock.glsl"
                }
            }
        } else {
            if (currentRenderedItemId < 45088) {
                if (currentRenderedItemId == 45080) { // Compass
                    if (color.r - 0.1 > color.b + color.g) {
                        emission = color.r * 1.5;
                    }

                    #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                } else /*if (currentRenderedItemId == 45084)*/ { // Echo Shard, Recovery Compass, Music Disc 5
                    emission = max0(color.b + color.g - color.r * 2.0);

                    #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                }
            } else {
                if (currentRenderedItemId == 45088) { // Nether Star
                    emission = pow2(color.r + color.g) * 0.5;
                } else /*if (currentRenderedItemId == 45092)*/ { // End Crystal
                    if (color.g < color.r) {
                        emission = 3.0;
                        color.r *= 1.1;
                    }
                    emission *= END_CRYSTAL_EMISSION;
                }
            }
        }
    } else {
        if (currentRenderedItemId < 45112) {
            if (currentRenderedItemId < 45104) {
                if (currentRenderedItemId == 45096) { // Glow Berries
                    // iris needs to add support
                } else /*if (currentRenderedItemId == 45100)*/ { // Glowstone Dust
                    emission = dot(color.rgb, color.rgb) * 0.5 + 1.0;
                }
            } else {
                if (currentRenderedItemId == 45104) { // Prismarine Crystals
                    emission = pow1_5(color.r) * 2.5 + 0.2;
                } else /*if (currentRenderedItemId == 45108)*/ { // Totem of Undying
                    #include "/lib/materials/specificMaterials/terrain/goldBlock.glsl"
                }
            }
        } else {
            if (currentRenderedItemId < 45120) {
                if (currentRenderedItemId == 45112) { // Trial Key, Ominous Trial Key
                    emission = abs(color.r - color.b) * 3.0;
                    color.rgb = pow(color.rgb, vec3(1.0 + 0.5 * sqrt(emission)));
                } else /*if (currentRenderedItemId == 45116)*/ { // Copper Tools, Copper Armor, Copper Ingot, Copper Horse Armor
                    #include "/lib/materials/specificMaterials/terrain/copperBlock.glsl"

                    smoothnessD *= 0.5;
                }
            } else {
                if (currentRenderedItemId == 45120) { //

                } else /*if (currentRenderedItemId == 45124)*/ { //

                }
            }
        }
    }
} else if (currentRenderedItemId != 65535) {
    if (currentRenderedItemId < 46144) {
        if (currentRenderedItemId < 46112) {
            if (currentRenderedItemId < 46096) {
                if (currentRenderedItemId < 46088) {
                    if (currentRenderedItemId < 46084) {
                        // item.46080 = dragon_charge
                        emission = max0(color.r + color.b - color.g * 0.5);
                    } else /*if (currentRenderedItemId < 46088)*/ {
                        // item.46084 = rancid_reduction
                        if (color.r > 0.95) {
                            emission = 1.5;
                            color.gb = pow1_5(color.gb);
                        }
                    }
                } else /*if (currentRenderedItemId < 46096)*/ {
                    if (currentRenderedItemId < 46092) {
                        // item.46088 = sculk_items
                        float boneFactor = max0(color.r * 1.25 - color.b);
                        if (boneFactor < 0.0001) emission = pow2(max0(color.g - color.r));
                    
                        smoothnessG = min1(boneFactor * 1.7);
                        smoothnessD = smoothnessG;
                    } else /*if (currentRenderedItemId < 46096)*/ {
                        // item.46092 = spider_extract
                        if (color.r > color.g * 2 && color.r > color.b * 2) {
                            emission = 1.5;
                            color.gb = pow1_5(color.gb);
                        }
                    }
                }
            } else /*if (currentRenderedItemId < 46112)*/ {
                if (currentRenderedItemId < 46104) {
                    if (currentRenderedItemId < 46100) {
                        // item.46096 = stained_scrap
                        #include "/lib/materials/specificMaterials/terrain/stainedScrap.glsl"
                    } else /*if (currentRenderedItemId < 46104)*/ {
                        // item.46100 = ancient_pearl
                        smoothnessG = 1.0;
                        highlightMult = 2.0;
                        smoothnessD = 1.0;
                    
                        emission = pow2(color.b);
                    }
                } else /*if (currentRenderedItemId < 46112)*/ {
                    if (currentRenderedItemId < 46108) {
                        // item.46104 = bubble_pearl
                        smoothnessG = 1.2;
                        highlightMult = 2.0;
                        smoothnessD = 1.0;
                    
                        vec2 tSize = textureSize(tex, 0);
                        ivec2 texCoordScaled = ivec2(texCoord * tSize);
                    
                        if (texCoordScaled.x > 5 && texCoordScaled.y > 5 && texCoordScaled.x < 11 && texCoordScaled.y < 11) {
                            emission = 2.0;
                            color.rgb = pow1_5(color.rgb);
                        }
                    
                        emission = texCoordScaled.x * 0.02;
                    } else /*if (currentRenderedItemId < 46112)*/ {
                        // item.46108 = corrupted_pearl
                        emission = pow2(color.b - color.g) * 10.0 + 3.0 * (color.b - color.g);
                    
                        smoothnessG = 1.0;
                        highlightMult = 2.0;
                        smoothnessD = 1.0;
                    }
                }
            }
        } else /*if (currentRenderedItemId < 46144)*/ {
            if (currentRenderedItemId < 46128) {
                if (currentRenderedItemId < 46120) {
                    if (currentRenderedItemId < 46116) {
                        // item.46112 = crimson_pearl
                        if (color.r > 0.9) {
                            emission = 3.0 * color.g;
                            color.r *= 1.2;
                    
                            overlayNoiseIntensity = 0.5;
                        }
                    
                        smoothnessG = color.r * 0.5;
                        smoothnessD = smoothnessG;
                        highlightMult = 2.0;
                    } else /*if (currentRenderedItemId < 46120)*/ {
                        // item.46116 = icy_pearl
                        smoothnessG = pow2(color.g) * color.g;
                        smoothnessD = smoothnessG;
                        highlightMult = 2.0;
                    
                        color.a = 0.9;
                    }
                } else /*if (currentRenderedItemId < 46128)*/ {
                    if (currentRenderedItemId < 46124) {
                        // item.46120 = soul_pearl
                        smoothnessG = 1.0;
                        highlightMult = 2.0;
                        smoothnessD = 1.0;
                    
                        if (color.b > 0.6) {
                            emission = 1.5;
                            color.rgb = pow1_5(color.rgb);
                        }
                    } else /*if (currentRenderedItemId < 46128)*/ {
                        // item.46124 = summoner_pearl
                        emission = 4.0 * pow2(color.b) - 1.5 * color.g;
                    
                        smoothnessG = 1.0;
                        highlightMult = 2.0;
                        smoothnessD = 1.0;
                    }
                }
            } else /*if (currentRenderedItemId < 46144)*/ {
                if (currentRenderedItemId < 46136) {
                    if (currentRenderedItemId < 46132) {
                        // item.46128 = chorus_fruit
                        #ifndef NOT_GLOWING_CHORUS_FLOWER
                            if (abs(color.r - color.b) < 0.05) {
                                emission = max0(color.b * 2.0 - color.r) * 1.5;
                            }
                        #endif
                    } else /*if (currentRenderedItemId < 46136)*/ {
                        // item.46132 = glow_berry_custard
                        lmCoordM.x *= 0.875;
                        if (color.g > 0.5 && color.r < 0.4) {
                            emission = 0.5;
                        } else {
                            emission = color.r < 0.75 ? 1.0 : 3.0;
                            color.rgb = color.rgb * vec3(1.0, 0.8, 0.6);
                        }
                    }
                } else /*if (currentRenderedItemId < 46144)*/ {
                    if (currentRenderedItemId < 46140) {
                        // item.46136 = bullet_pepper
                        smoothnessG = max0(1.2 * pow2(color.b) - GetMaxColorDif(color.rgb));
                        smoothnessD = smoothnessG;
                    
                        emission = 1.5 * pow2(2.5 * max0(color.r - 0.6));
                        color.rgb = pow1_5(color.rgb);
                    } else /*if (currentRenderedItemId < 46144)*/ {
                        // item.46140 = magma_cake
                        lmCoordM = vec2(0.75, 0.0);
                    
                        if (color.g > 0.22) { // Emissive Part
                            emission = pow2(pow2(color.r)) * 4.0;
                            color.gb *= max(2.0 - 11.0 * pow2(color.g), 0.5);
                            maRecolor = vec3(emission * 0.075);
                    
                            overlayNoiseIntensity = 0.0;
                        }
                    }
                }
            }
        }
    } else /*if (currentRenderedItemId < 46184)*/ {
        if (currentRenderedItemId < 46176) {
            if (currentRenderedItemId < 46160) {
                if (currentRenderedItemId < 46152) {
                    if (currentRenderedItemId < 46148) {
                        // item.46144 = banshee_powder
                        if (color.b - color.r > 0.1 || CheckForColor(color.rgb, vec3(255))) {
                            emission = 2.0 * sqrt1(color.b) + 1.5 * pow2(pow2(5 * max0(color.b - 0.9)));
                            color.rgb *= pow(color.rgb, vec3(pow2(emission / 3.5)));
                        }
                    } else /*if (currentRenderedItemId < 46152)*/ {
                        // item.46148 = ectoplasm_bucket
                        if (GetMaxColorDif(color.rgb) < 0.01) {
                            #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                        } else {
                            lmCoordM = vec2(0.0);
                    
                            emission = smoothstep1(sqrt1(color.b)) + 0.2;
                            emission *= 2.0;
                    
                            color.rgb *= pow(color.rgb, vec3(0.5 + 0.3 * emission));
                        }
                    }
                } else /*if (currentRenderedItemId < 46160)*/ {
                    if (currentRenderedItemId < 46156) {
                        // item.46152 = glowcheese
                        if (color.r > 0.77 && color.r < color.g * 2.0) {
                            emission = pow2(color.r) + pow2(color.g);
                        }
                    } else /*if (currentRenderedItemId < 46160)*/ {
                        // item.46156 = sanctum_compass
                        if (color.b - color.r > 0.1) {
                            emission = 2.5 * color.b;
                        }
                    }
                }
            } else /*if (currentRenderedItemId < 46176)*/ {
                if (currentRenderedItemId < 46168) {
                    if (currentRenderedItemId < 46164) {
                        // item.46160 = spores
                        float dotColor = dot(color.rgb, color.rgb);
                        emission = min(pow2(pow2(pow2(dotColor * 0.6))), 6.0) * 0.8 + 0.5;
                    } else /*if (currentRenderedItemId < 46168)*/ {
                        // item.46164 = treacherous_flame
                        emission = 4.00 * pow2(pow2(color.r)) + 1.50;
                        color.rgb *= color.rgb;
                    
                        overlayNoiseIntensity = 0.0;
                    }
                } else /*if (currentRenderedItemId < 46176)*/ {
                    if (currentRenderedItemId < 46172) {
                        // item.46168 = heart_of_diamond
                        if (color.g > 0.6 || color.b > 0.6) {
                            #include "/lib/materials/specificMaterials/terrain/diamondBlock.glsl"
                            emission = pow2(max(color.b, color.g)) + 1.5;
                        }
                    } else /*if (currentRenderedItemId < 46176)*/ {
                        // item.46172 = blast_proof_plating
                        #include "/lib/materials/specificMaterials/terrain/blastProofPlates.glsl"
                    }
                }
            }
        } else /*if (currentRenderedItemId < 46184)*/ {
            if (currentRenderedItemId < 46180) {
                // item.46176 = lumisene_bottle
                smoothnessG = 1.0;
                smoothnessD = smoothnessG;
                color.rgb *= pow2(color.rgb);
                emission = 1.0 / (0.7 + pow3(color.r - 1.0) + pow3(color.b) + pow3(color.g)) +
                           1.0 / (0.7 + pow3(color.g - 1.0) + pow3(color.b) + pow3(color.r)) +
                           1.0 / (0.7 + pow3(color.b - 1.0) + pow3(color.r) + pow3(color.g));
            } else /*if (currentRenderedItemId < 46184)*/ {
                // item.46180 = lumisene_bucket
                if (GetMaxColorDif(color.rgb) < 0.01) {
                    #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"
                } else {
                    color.rgb *= pow2(color.rgb);
                    emission = 1.0 / (0.9 + pow3(color.r - 1.0) + pow3(color.b) + pow3(color.g)) +
                            1.0 / (0.9 + pow3(color.g - 1.0) + pow3(color.b) + pow3(color.r)) +
                            1.0 / (0.9 + pow3(color.b - 1.0) + pow3(color.r) + pow3(color.g));
                }
            }
        }
    }
    
}
