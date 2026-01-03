#include "/lib/shaderSettings/entityMaterials.glsl"
if (entityId < 50064) {
    if (entityId < 50032) {
        if (entityId < 50016) {
            if (entityId < 50008) {
                if (entityId == 50000) { // End Crystal
                    lmCoordM.x *= 0.7;

                    if (color.g * 1.2 < color.r) {
                        emission = 12.0 * color.g;
                        color.r *= 1.1;
                    }
                    emission *= END_CRYSTAL_EMISSION;
                } else if (entityId == 50004) { // Lightning Bolt
                    #include "/lib/materials/specificMaterials/entities/lightningBolt.glsl"
                }
            } else {
                if (entityId == 50008) { // Item Frame, Glow Item Frame
                    noSmoothLighting = true;
                } else /*if (entityId == 50012)*/ { // Iron Golem
                    #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"

                    smoothnessD *= 0.4;
                }
            }
        } else {
            if (entityId < 50024) {
                if (entityId == 50016 || entityId == 50017) { // Player
                    if (entityColor.a < 0.001) {
                        #ifdef COATED_TEXTURES
                            noiseFactor = 0.5;
                        #endif

                        if (CheckForColor(texelFetch(tex, ivec2(0, 0), 0).rgb, vec3(23, 46, 92))) {
                            for (int i = 63; i >= 56; i--) {
                                vec3 dif = color.rgb - texelFetch(tex, ivec2(i, 0), 0).rgb;
                                if (dif == clamp(dif, vec3(-0.001), vec3(0.001))) {
                                    emission = 2.0 * texelFetch(tex, ivec2(i, 1), 0).r;
                                }
                            }
                        }
                        bool selfCheck = false;
                        #if IRIS_VERSION >= 10800
                            if (entityId == 50017) {
                                selfCheck = true;
                                entitySSBLMask = 0.0;
                            }
                        #else
                            if (length(playerPos) < 4.0) {
                                selfCheck = true;
                                entitySSBLMask = 0.0;
                            }
                        #endif
                    }
                } else /*if (entityId == 50020)*/ { // Blaze
                    lmCoordM = vec2(0.9, 0.0);
                    emission = min(color.r, 0.7) * 1.4;

                    float dotColor = dot(color.rgb, color.rgb);
                    if (abs(dotColor - 1.5) > 1.4) {
                        emission = 5.0;
                    } else {
                        #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                            color.rgb = changeColorFunction(color.rgb, 2.0, colorSoul, inSoulValley);
                        #endif
                        #ifdef PURPLE_END_FIRE_INTERNAL
                            color.rgb = changeColorFunction(color.rgb, 2.0, colorEndBreath, 1.0);
                        #endif
                    }
                }
            } else {
                if (entityId == 50024) { // Creeper
                    emission = max0(color.b - color.g - color.r) * 10.0;
                } else /*if (entityId == 50028)*/ { // Drowned
                    if (atlasSize.x < 900) {
                        if (CheckForColor(color.rgb, vec3(143, 241, 215)) ||
                            CheckForColor(color.rgb, vec3( 49, 173, 183)) ||
                            CheckForColor(color.rgb, vec3(101, 224, 221))) emission = 2.5;
                    }
                }
            }
        }
    } else {
        if (entityId < 50048) {
            if (entityId < 50040) {
                if (entityId == 50032) { // Guardian
                    vec3 absDif = abs(vec3(color.r - color.g, color.g - color.b, color.r - color.b));
                    float maxDif = max(absDif.r, max(absDif.g, absDif.b));
                    if (maxDif < 0.1 && color.b > 0.5 && color.b < 0.88) {
                        emission = pow2(pow1_5(color.b)) * 5.0;
                        color.rgb *= color.rgb;
                    }
                } else /*if (entityId == 50036)*/ { // Elder Guardian
                    if (CheckForColor(color.rgb, vec3(203, 177, 165)) ||
                        CheckForColor(color.rgb, vec3(214, 155, 126))) {
                        emission = pow2(pow1_5(color.b)) * 10.0;
                        color.r *= 1.2;
                    }
                }
            } else {
                if (entityId == 50040) { // Endermite
                    if (CheckForColor(color.rgb, vec3(87, 23, 50))) {
                        emission = 8.0;
                        color.rgb *= color.rgb;
                    }
                } else /*if (entityId == 50044)*/ { // Ghast
                    if (entityColor.a < 0.001)
                        emission = max0(color.r - color.g - color.b) * 6.0;
                        #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                            if (color.r > color.b * 2.0) color.rgb = changeColorFunction(color.rgb, 7.0, colorSoul, inSoulValley);
                        #endif
                        #ifdef PURPLE_END_FIRE_INTERNAL
                            if (color.r > color.b * 2.0) color.rgb = changeColorFunction(color.rgb, 7.0, colorEndBreath, 1.0);
                        #endif
                }
            }
        } else {
            if (entityId < 50056) {
                if (entityId == 50048) { // Glow Squid
                    lmCoordM.x = 0.0;
                    float dotColor = dot(color.rgb, color.rgb);
                    emission = pow2(pow2(min(dotColor * 0.65, 1.5))) + 0.45;
                } else /*if (entityId == 50052)*/ { // Magma Cube
                    emission = color.g * 6.0;
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                       color.rgb = changeColorFunction(color.rgb, 2.0, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 2.0, colorEndBreath, 1.0);
                    #endif
                }
            } else {
                if (entityId == 50056) { // Stray
                    if (CheckForColor(color.rgb, vec3(230, 242, 246)) && texCoord.y > 0.35)
                        emission = 2.5;
                } else /*if (entityId == 50060)*/ { // Vex
                    lmCoordM = vec2(0.0);
                    emission = pow2(pow2(color.r)) * 3.5 + 0.5;
                    color.a *= color.a;
                }
            }
        }
    }
} else if (entityId < 50128) {
    if (entityId < 50096) {
        if (entityId < 50080) {
            if (entityId < 50072) {
                if (entityId == 50064) { // Witch
                    emission = 2.0 * color.g * float(color.g * 1.5 > color.b + color.r);
                } else /*if (entityId == 50068)*/ { // Wither, Wither Skull
                    lmCoordM.x = 0.9;
                    emission = 3.0 * float(dot(color.rgb, color.rgb) > 1.0);
                }
            } else {
                if (entityId == 50072) { // Experience Orb
                    emission = 7.5;

                    color.rgb *= color.rgb;
                } else /*if (entityId == 50076)*/ { // Boats
                    playerPos.y += 0.38; // consistentBOAT2176: to avoid water shadow and the black inner shadow bug
                }
            }
        } else {
            if (entityId < 50088) {
                if (entityId == 50080) { // Allay
                    if (atlasSize.x < 900) {
                        lmCoordM = vec2(0.0);
                        emission = float(color.r > 0.9 && color.b > 0.9) * 5.0 + color.g;
                    } else {
                        lmCoordM.x = 0.8;
                    }
                } else /*if (entityId == 50084)*/ { // Slime, Chicken
                    //only code is in Vertex Shader for now
                }
            } else {
                if (entityId == 50088) { // Entity Flame (Iris Feature)
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 3.0, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 3.0, colorEndBreath, 1.0);
                    #endif
                    emission = 1.3;
                } else if (entityId == 50089) { // fireball, small fireball, dragon fireball
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 4.0, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 4.0, colorEndBreath, 1.0);
                    #endif
                } else /*if (entityId == 50092)*/ { // Trident Entity
                    #ifdef IS_IRIS
                        // Only on Iris, because otherwise it would be inconsistent with the Trident item
                        #include "/lib/materials/specificMaterials/others/trident.glsl"
                    #endif
                }
            }
        }
    } else {
        if (entityId < 50112) {
            if (entityId < 50104) {
                if (entityId == 50096) { // Minecart++
                    if (atlasSize.x < 900 && color.r * color.g * color.b + color.b > 0.3) {
                        #include "/lib/materials/specificMaterials/terrain/ironBlock.glsl"

                        smoothnessD *= 0.6;
                    }
                } else /*if (entityId == 50100)*/ { // Bogged
                    if (CheckForColor(color.rgb, vec3(239, 254, 194)))
                        emission = 2.5;
                }
            } else {
                if (entityId == 50104) { // Piglin++, Hoglin+
                    if (atlasSize.x < 900) {
                        if (CheckForColor(color.rgb, vec3(255)) || CheckForColor(color.rgb, vec3(255, 242, 246))) {
                            vec2 tSize = textureSize(tex, 0);
                            vec4 checkRightmostColor = texelFetch(tex, ivec2(texCoord * tSize) + ivec2(1, 0), 0);
                            if (
                                CheckForColor(checkRightmostColor.rgb, vec3(201, 130, 101)) ||
                                CheckForColor(checkRightmostColor.rgb, vec3(241, 158, 152)) ||
                                CheckForColor(checkRightmostColor.rgb, vec3(223, 127, 119)) ||
                                CheckForColor(checkRightmostColor.rgb, vec3(241, 158, 152)) ||
                                CheckForColor(checkRightmostColor.rgb, vec3(165, 99, 80)) ||
                                CheckForColor(checkRightmostColor.rgb, vec3(213, 149, 122)) ||
                                CheckForColor(checkRightmostColor.rgb, vec3(255))
                            ) {
                                emission = 1.0;
                            }
                        }
                    }
                } else /*if (entityId == 50108)*/ { // Creaking
                    if (color.r > 0.7 && color.r > color.g * 1.2 && color.g > color.b * 2.0) { // Eyes
                        lmCoordM.x = 0.5;
                        emission = 5.0 * color.g;
                        color.rgb *= color.rgb;
                        purkinjeOverwrite = 1.0;
                    }
                }
            }
        } else {
            if (entityId < 50120) {
                if (entityId == 50112) { // Name Tag
                    noDirectionalShading = true;
                    color.rgb *= 1.5;
                    if (color.a < 0.5) {
                        color.a = 0.12;
                        color.rgb *= 5.0;
                    }
                } else /*if (entityId == 50116)*/ { // Copper Golem
                    #include "/lib/materials/specificMaterials/terrain/copperBlock.glsl"

                    smoothnessD *= 0.5;
                }
            } else {
                if (entityId == 50120) { //

                } else /*if (entityId == 50124)*/ { //

                }
            }
        }
    }
} else if (entityId != 65535) {
    if (entityId < 51232) {
        if (entityId < 51216) {
            if (entityId < 51208) {
                if (entityId < 51204) {
                    // entity.51200 = crimson_forest_enderman
                    if (color.r > 0.91) {
                        emission = 3.0 * color.g;
                        color.r *= 1.2;
                
                        overlayNoiseIntensity = 0.5;
                    }
                
                    smoothnessG = color.r * 0.5;
                    smoothnessD = smoothnessG;
                
                    #ifdef COATED_TEXTURES
                        noiseFactor = 0.77;
                    #endif
                } else /*if (entityId < 51208)*/ {
                    // entity.51204 = crimson_forest_enderman
                    if (color.r > 0.91) {
                        emission = 3.0 * color.g;
                        color.r *= 1.2;
                
                        overlayNoiseIntensity = 0.5;
                    }
                
                    smoothnessG = color.r * 0.5;
                    smoothnessD = smoothnessG;
                
                    #ifdef COATED_TEXTURES
                        noiseFactor = 0.77;
                    #endif
                }
            } else /*if (entityId < 51216)*/ {
                if (entityId < 51212) {
                    // entity.51208 = ice_spikes_enderman
                    smoothnessG = pow2(color.g) * color.g;
                    smoothnessD = smoothnessG;
                } else /*if (entityId < 51216)*/ {
                    // entity.51212 = spirit
                    if (color.b > 1.3 * color.r || color.b > 0.9) {
                        emission = 1.5;
                        color.rgb = pow1_5(color.rgb);
                
                        overlayNoiseIntensity = 0.0;
                        color.a = pow1_5(color.b) - 0.05;
                    }
                }
            }
        } else /*if (entityId < 51232)*/ {
            if (entityId < 51224) {
                if (entityId < 51220) {
                    // entity.51216 = stone_enderman
                    #include "/lib/materials/specificMaterials/terrain/stone.glsl"
                } else /*if (entityId < 51224)*/ {
                    // entity.51220 = warped_forest_enderman
                    #ifdef MOD_NETHEREXP
                        if (color.r > 0.73) {
                            emission = 1.5 * color.b;
                
                            overlayNoiseIntensity = 0.5;
                        }
                    #else
                        if (color.r > 0.91) {
                            emission = 3.0 * color.g;
                            color.r *= 1.2;
                
                            overlayNoiseIntensity = 0.5;
                        }
                    #endif
                
                    smoothnessG = color.g * 0.5;
                    smoothnessD = smoothnessG;
                
                    #ifdef COATED_TEXTURES
                        noiseFactor = 0.77;
                    #endif
                }
            } else /*if (entityId < 51232)*/ {
                if (entityId < 51228) {
                    // entity.51224 = apparition
                    if (color.b - color.r > 0.1) {
                        emission = 0.3 * pow2(color.b);
                
                        if (CheckForColor(color.rgb, vec3(1.0)))
                            emission += 2.0;
                    }
                } else /*if (entityId < 51232)*/ {
                    // entity.51228 = banshee
                    emission = 2.5 * sqrt1(color.b);
                }
            }
        }
    } else /*if (entityId < 51260)*/ {
        if (entityId < 51248) {
            if (entityId < 51240) {
                if (entityId < 51236) {
                    // entity.51232 = ecto_slab
                    if (color.b > 0.65) {
                        emission = 3.0;
                        color.rgb *= sqrt1(GetLuminance(color.rgb));
                    }
                } else /*if (entityId < 51240)*/ {
                    // entity.51236 = vessel
                    if (color.b - color.r > 0.1) {
                        emission = 3.0;
                        color.rgb *= sqrt1(GetLuminance(color.rgb));
                    }
                }
            } else /*if (entityId < 51248)*/ {
                if (entityId < 51244) {
                    // entity.51240 = foxhound
                    if (color.r > 0.8 || color.b > 0.8) {
                        emission = 2.0;
                        color.rgb *= sqrt1(GetLuminance(color.rgb));
                
                        overlayNoiseIntensity = 0.0;
                    }
                } else /*if (entityId < 51248)*/ {
                    // entity.51244 = oretortoise
                    vec4 shellColour = texelFetch(tex, ivec2(26, 0), 0);
                    if (!CheckForColor(shellColour.rgb, vec3(56, 50, 55)) || shellColour.a < 0.1) {
                        if (CheckForColor(shellColour.rgb, vec3(55, 103, 146))) {  // Lapis Lazuli
                            #include "/lib/materials/specificMaterials/terrain/lapisBlock.glsl"
                            #ifdef GLOWING_ORETORTOISE
                            emission = dot(color.rgb, color.rgb) * 1.2;
                            #endif
                        } else {
                            vec4 oreColour = texelFetch(tex, ivec2(9, 44), 0);
                            if (shellColour.r > 10 * shellColour.b) {  // Redstone
                                #include "/lib/materials/specificMaterials/terrain/redstoneBlock.glsl"
                                #ifdef GLOWING_ORETORTOISE
                                emission = 0.75 + 3.0 * pow2(pow2(color.r));
                                color.gb *= 0.65;
                                #endif
                            } else if (shellColour.r > 2 * shellColour.b || shellColour.a < 0.1) {  // Copper
                                #include "/lib/materials/specificMaterials/terrain/rawCopperBlock.glsl"
                                #ifdef GLOWING_ORETORTOISE
                                emission = pow2(color.r) * 1.5 + color.g * 1.3 + 0.2;
                                #endif
                            } else if (shellColour.r > shellColour.b) {
                                if (shellColour.r > 2.5 * shellColour.g) {  // Spinel
                                    #include "/lib/materials/specificMaterials/terrain/spinelBlock.glsl"
                                    #ifdef GLOWING_ORETORTOISE
                                    emission = 0.45 * (1.6 * sqrt2(color.r) + 2.2 * pow2(color.r));
                                    #endif
                                } else {  // Iron
                                    #include "/lib/materials/specificMaterials/terrain/rawIronBlock.glsl"
                                    #ifdef GLOWING_ORETORTOISE
                                    emission = pow1_5(color.r) * 0.5;
                                    #endif
                                }
                            } else {  // Lead
                                #include "/lib/materials/specificMaterials/terrain/rawLeadBlock.glsl"
                                #ifdef GLOWING_ORETORTOISE
                                emission = 6.0 * sqrt2(max(color.r, color.b));
                                #endif
                            }
                        }
                    }
                
                    #ifdef GLOWING_ORETORTOISE
                        overlayNoiseIntensity = 0.6, overlayNoiseEmission = 0.5;
                        #ifdef SITUATIONAL_ORETORTOISE
                            emission *= skyLightCheck;
                            color.rgb = mix(color.rgb, color.rgb * pow(color.rgb, vec3(0.5 * min1(GLOWING_ORETORTOISE_MULT))), skyLightCheck);
                        #else
                            color.rgb *= pow(color.rgb, vec3(0.5 * min1(GLOWING_ORETORTOISE_MULT)));
                        #endif
                
                        emission *= GLOWING_ORETORTOISE_MULT * 1.5;
                    #endif
                }
            }
        } else /*if (entityId < 51260)*/ {
            if (entityId < 51256) {
                if (entityId < 51252) {
                    // entity.51248 = stoneling
                    #include "/lib/materials/specificMaterials/terrain/stone.glsl"
                
                    if (
                        CheckForColor(color.rgb, vec3(118, 148, 134)) ||
                        CheckForColor(color.rgb, vec3(106, 121, 120)) ||
                        CheckForColor(color.rgb, vec3(188, 188, 157)) ||
                        CheckForColor(color.rgb, vec3(92, 108, 96)) ||
                        CheckForColor(color.rgb, vec3(178, 178, 136))
                    ) {
                        float dotColor = dot(color.rgb, color.rgb);
                        emission = min(pow2(pow2(dotColor) * dotColor) * 1.4 + dotColor * 0.9, 6.0);
                        emission = mix(emission, dotColor * 1.5, min1(lViewPos / 96.0));
                    }
                } else /*if (entityId < 51256)*/ {
                    // entity.51252 = totem
                    smoothnessG = 2.0;
                    smoothnessD = smoothnessG;
                }
            } else /*if (entityId < 51260)*/ {
                // entity.51256 = wraith
                if (color.b > 0.7) {
                    emission = 0.2 + 1.5 * pow2(color.b - color.r);
                    color.rgb = pow1_5(color.rgb);
                }
            }
        }
    }
    
}
