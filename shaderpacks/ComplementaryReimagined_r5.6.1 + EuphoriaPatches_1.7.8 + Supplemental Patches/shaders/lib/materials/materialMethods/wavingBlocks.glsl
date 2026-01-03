#include "/lib/shaderSettings/wavingBlocks.glsl"

#if COLORED_LIGHTING_INTERNAL > 0
    #include "/lib/voxelization/lightVoxelization.glsl"
#endif

vec3 GetRawWave(in vec3 pos, float wind) {
    float magnitude = sin(wind * 0.0027 + pos.z + pos.y) * 0.04 + 0.04;
    float d0 = sin(wind * 0.0127);
    float d1 = sin(wind * 0.0089);
    float d2 = sin(wind * 0.0114);
    vec3 wave;
    wave.x = sin(wind*0.0063 + d0 + d1 - pos.x + pos.z + pos.y) * magnitude;
    wave.z = sin(wind*0.0224 + d1 + d2 + pos.x - pos.z + pos.y) * magnitude;
    wave.y = sin(wind*0.0015 + d2 + d0 + pos.z + pos.y - pos.y) * magnitude;

    return wave;
}

vec3 GetWave(in vec3 pos, float waveSpeed) {
    float wind = frameTimeCounter * waveSpeed * WAVING_SPEED;
    vec3 wave = GetRawWave(pos, wind);

    #define WAVING_I_RAIN_MULT_M WAVING_I_RAIN_MULT * 0.01

    #if WAVING_I_RAIN_MULT > 100
        float windRain = frameTimeCounter * waveSpeed * WAVING_I_RAIN_MULT_M * WAVING_SPEED;
        vec3 waveRain = GetRawWave(pos, windRain);
        wave = mix(wave, waveRain, rainFactor);
    #endif

    float wavingIntensity = WAVING_I * mix(1.0, WAVING_I_RAIN_MULT_M, rainFactor);

    return wave * wavingIntensity;
}

void DoWave_Foliage(inout vec3 playerPos, vec3 worldPos, float waveMult) {
    worldPos.y *= 0.5;

    vec3 wave = GetWave(worldPos, 170.0);
    wave.x = wave.x * 8.0 + wave.y * 4.0;
    wave.y = 0.0;
    wave.z = wave.z * 3.0;
    #ifdef MOD_YUNGSCAVEBIOMES
        wave.xz += YUNGS_SANDSTORM_WAVING_INTENSITY * 0.66 * yungSandstormWindDirection.xz * yungSandstormFactor;
    #endif
    #ifdef MOD_SCORCHFUL
        wave *= mix(1.0, SCORCHFUL_SANDSTORM_FOLIAGE_WAVING_INTENSITY, rainFactor * hasSandstorm);
        wave.x -= pow1_5(SCORCHFUL_SANDSTORM_LEAVES_WAVING_INTENSITY * (1 + 2 * wave.x)) * rainFactor * hasSandstorm;
    #endif

    #ifdef NO_WAVING_INDOORS
        #ifndef WAVE_EVERYTHING
            #ifdef MOD_YUNGSCAVEBIOMES
                wave *= mix(clamp(lmCoord.y - 0.87, 0.0, 0.1), YUNGS_SANDSTORM_WAVING_INTENSITY, yungSandstormFactor);
            #else
                wave *= clamp(lmCoord.y - 0.87, 0.0, 0.1);
            #endif
        #else
            wave *= 0.1;
        #endif
    #else
        wave *= 0.1;
    #endif

    playerPos.xyz += wave * waveMult;
}

void DoWave_Leaves(inout vec3 playerPos, vec3 worldPos, float waveMult) {
    worldPos *= vec3(0.75, 0.375, 0.75);

    vec3 wave = GetWave(worldPos, 170.0);
    wave *= vec3(8.0, 3.0, 4.0);
    #ifdef MOD_SCORCHFUL
        wave.x -= pow1_5(SCORCHFUL_SANDSTORM_LEAVES_WAVING_INTENSITY * (0.3 + 2 * wave.x)) * rainFactor * hasSandstorm;
    #endif

    wave *= 1.0 - inSnowy; // Leaves with snow on top look wrong

    #if defined NO_WAVING_INDOORS && !defined WAVE_EVERYTHING
        wave *= clamp(lmCoord.y - 0.87, 0.0, 0.1);
    #else
        wave *= 0.1;
    #endif

    playerPos.xyz += wave * waveMult;
}

void DoWave_Water(inout vec3 playerPos, vec3 worldPos) {
    float waterWaveTime = frameTimeCounter * 6.0 * WAVING_SPEED;
    worldPos.xz *= 14.0;

    float wave  = sin(waterWaveTime * 0.7 + worldPos.x * 0.14 + worldPos.z * 0.07);
          wave += sin(waterWaveTime * 0.5 + worldPos.x * 0.10 + worldPos.z * 0.05);

    #if defined NO_WAVING_INDOORS && !defined WAVE_EVERYTHING
        wave *= clamp(lmCoord.y - 0.87, 0.0, 0.1);
    #else
        wave *= 0.1;
    #endif

    playerPos.y += wave * 0.125 - 0.05;

    #if defined GBUFFERS_WATER && WATER_STYLE == 1
        normal = mix(normal, tangent, wave * 0.01);
    #endif
}

void DoWave_Lava(inout vec3 playerPos, vec3 worldPos) {
    if (fract(worldPos.y + 0.005) > 0.06) {
        float lavaWaveTime = frameTimeCounter * 3.0 * WAVING_SPEED;
        worldPos.xz *= 14.0;

        float wave  = sin(lavaWaveTime * 0.7 + worldPos.x * 0.14 + worldPos.z * 0.07);
              wave += sin(lavaWaveTime * 0.5 + worldPos.x * 0.05 + worldPos.z * 0.10);

        #if defined NETHER && defined WAVIER_LAVA
            if (worldPos.y > 30 && worldPos.y < 32) wave *= 4.5;
            else wave *= 2.0;
        #endif

        playerPos.y += wave * 0.0125;
    }
}

void DoWave_Curtain(inout vec3 playerPos, vec3 worldPos, float waveMult, float angle) {
    worldPos.y *= 0.5;

    vec3 wave = GetWave(worldPos, 170.0);
    wave.x = wave.x * 10.0 * sin(angle) + wave.y * 4.0;
    wave.y = 0.0;
    wave.z = wave.z * 10.0 * cos(angle);

    playerPos.xyz += wave * waveMult;
}
void DoWave_Flesh(inout vec3 playerPos, vec3 worldPos, float waveMult) {
    worldPos *= 0.75;

    vec3 wave = GetWave(worldPos, 100.0 * FLESH_WAVING_SPEED);
    wave *= vec3(8.0, 16.0, 8.0);

    playerPos.xyz += wave * waveMult;
}
void DoWave_TallFoliage(inout vec3 playerPos, vec3 worldPos, float _waveMult, int voxelNumber) {
    float waveMult = _waveMult;

    #if COLORED_LIGHTING_INTERNAL > 0
        vec3 voxelPos = SceneToVoxel(playerPos);
        if (CheckInsideVoxelVolume(voxelPos)) {
            vec3 posBottom = SceneToVoxel(playerPos - vec3(0.0, 0.1, 0.0));
            vec3 posTop = SceneToVoxel(playerPos + vec3(0.0, 0.1, 0.0));

            int voxelBottom = int(texelFetch(voxel_sampler, ivec3(posBottom), 0).r);
            int voxelTop = int(texelFetch(voxel_sampler, ivec3(posTop), 0).r);

            if (
                (voxelBottom != voxelNumber && voxelBottom != 0) ||
                (voxelTop != voxelNumber && voxelTop != 0)
            ) {
                waveMult = 0.0;
            }
        }
    #endif

    DoWave_Foliage(playerPos, worldPos, waveMult);
}

void DoWave_Block(inout vec3 playerPos, int mat) {
    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;
    #if defined GBUFFERS_TERRAIN || defined SHADOW
        if (mat < 12416) {
            if (mat < 12368) {
                if (mat < 12324) {
                    #if defined WAVING_SUGAR_CANE
                    if (mat >= 12320 && mat < 12328) {
                        const int voxelNumber = 167;
                        float waveMult = 0.75;
                        #if COLORED_LIGHTING_INTERNAL > 0
                        vec3 voxelPosP = SceneToVoxel(playerPos - vec3(0.0, 0.1, 0.0));
                        
                        if (CheckInsideVoxelVolume(voxelPosP)) {
                            int voxelP = int(texelFetch(voxel_sampler, ivec3(voxelPosP), 0).r);
                            if (voxelP != 0) // not air
                            waveMult = 0.0;
                        }
                        #endif
                        DoWave_Foliage(playerPos.xyz, worldPos, waveMult);
                    }
                    #endif
                } else { // mat >= 12324
                    if (mat < 12364) {
                        #if defined WAVING_FOLIAGE
                        if (mat >= 12360 && mat < 12364) {
                            const int voxelNumber = 37;
                            if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
                        }
                        #endif
                    } else { // mat >= 12364
                        #if (defined NETHER || defined FLESH_WAVING_ANYWHERE) && defined FLESH_WAVING && defined MOD_BIOMESOPLENTY
                        if (mat >= 12364 && mat < 12368) {
                            const int voxelNumber = 356;
                            #if FLESH_WAVING_ANYWHERE
                                float waveMult = FLESH_WAVING_STRENGTH;
                            #else
                                float waveMult = FLESH_WAVING_STRENGTH * inVisceralHeap;
                            #endif
                            
                            #if COLORED_LIGHTING_INTERNAL > 0
                            vec3 voxelPos = SceneToVoxel(playerPos);
                            if (CheckInsideVoxelVolume(voxelPos)) {
                                vec3 posBottom = SceneToVoxel(playerPos - vec3(0.0, 0.7, 0.0));
                                vec3 posTop = SceneToVoxel(playerPos + vec3(0.0, 0.7, 0.0));
                                vec3 posNorth = SceneToVoxel(playerPos - vec3(0.0, 0.0, 0.7));
                                vec3 posSouth = SceneToVoxel(playerPos + vec3(0.0, 0.0, 0.7));
                                vec3 posEast = SceneToVoxel(playerPos - vec3(0.7, 0.0, 0.0));
                                vec3 posWest = SceneToVoxel(playerPos + vec3(0.7, 0.0, 0.0));
                            
                                int voxelBottom = int(texelFetch(voxel_sampler, ivec3(posBottom), 0).r);
                                int voxelTop = int(texelFetch(voxel_sampler, ivec3(posTop), 0).r);
                                int voxelNorth = int(texelFetch(voxel_sampler, ivec3(posNorth), 0).r);
                                int voxelSouth = int(texelFetch(voxel_sampler, ivec3(posSouth), 0).r);
                                int voxelEast = int(texelFetch(voxel_sampler, ivec3(posEast), 0).r);
                                int voxelWest = int(texelFetch(voxel_sampler, ivec3(posWest), 0).r);
                            
                                vec3 fractPos = fract(worldPos);
                                if (voxelEast != voxelNumber && voxelEast != 0)
                                waveMult *= pow2(min1(fractPos.x / 0.5));
                            
                                if (voxelWest != voxelNumber && voxelWest != 0)
                                waveMult *= pow2(min1((1 - fractPos.x) / 0.5));
                            
                                if (voxelBottom != voxelNumber && voxelBottom != 0)
                                waveMult *= pow2(min1(fractPos.y / 0.5));
                            
                                if (voxelTop != voxelNumber && voxelTop != 0)
                                waveMult *= pow2(min1((1 - fractPos.y) / 0.5));
                            
                                if (voxelNorth != voxelNumber && voxelNorth != 0)
                                waveMult *= pow2(min1(fractPos.z / 0.5));
                            
                                if (voxelSouth != voxelNumber && voxelSouth != 0)
                                waveMult *= pow2(min1((1 - fractPos.z) / 0.5));
                            }
                            #endif
                            
                            DoWave_Flesh(playerPos, worldPos, waveMult);
                        }
                        #endif
                    }
                }
            } else { // mat >= 12368
                if (mat < 12408) {
                    if (mat < 12372) {
                        #if defined WAVING_FOLIAGE
                        if (mat >= 12368 && mat < 12372) {
                            const int voxelNumber = 157;
                            if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
                        }
                        #endif
                    } else { // mat >= 12372
                        #if defined WAVING_LEAVES_ENABLED
                        if (mat >= 12404 && mat < 12408) {
                            const int voxelNumber = 161;
                            DoWave_Leaves(playerPos.xyz, worldPos, 1.0);
                        }
                        #endif
                    }
                } else { // mat >= 12408
                    if (mat < 12412) {
                        #if defined WAVING_FOLIAGE
                        if (mat >= 12408 && mat < 12412) {
                            const int voxelNumber = 164;
                            if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
                        }
                        #endif
                    } else { // mat >= 12412
                        #if defined WAVING_LEAVES_ENABLED
                        if (mat >= 12412 && mat < 12416) {
                            const int voxelNumber = 168;
                            DoWave_Leaves(playerPos.xyz, worldPos, 1.0);
                        }
                        #endif
                    }
                }
            }
        } else { // mat >= 12416
            if (mat < 12596) {
                if (mat < 12496) {
                    #if defined WAVING_ROPE
                    if (mat >= 12492 && mat < 12496) {
                        const int voxelNumber = 360;
                        float waveMult = 1.0;
                        
                        #if COLORED_LIGHTING_INTERNAL > 0
                            vec3 voxelPos = SceneToVoxel(playerPos);
                            if (CheckInsideVoxelVolume(voxelPos)) {
                                vec3 posBottom = SceneToVoxel(playerPos - vec3(0.0, 0.1, 0.0));
                                vec3 posTop = SceneToVoxel(playerPos + vec3(0.0, 0.1, 0.0));
                        
                                int voxelBottom = int(texelFetch(voxel_sampler, ivec3(posBottom), 0).r);
                                int voxelTop = int(texelFetch(voxel_sampler, ivec3(posTop), 0).r);
                        
                                if (mat % 4 == 1) {
                                    vec3 posNorth = SceneToVoxel(playerPos - vec3(0.0, 0.0, 0.1));
                                    vec3 posSouth = SceneToVoxel(playerPos + vec3(0.0, 0.0, 0.1));
                                    vec3 posEast = SceneToVoxel(playerPos - vec3(0.1, 0.0, 0.0));
                                    vec3 posWest = SceneToVoxel(playerPos + vec3(0.1, 0.0, 0.0));
                        
                                    int voxelNorth = int(texelFetch(voxel_sampler, ivec3(posNorth), 0).r);
                                    int voxelSouth = int(texelFetch(voxel_sampler, ivec3(posSouth), 0).r);
                                    int voxelEast = int(texelFetch(voxel_sampler, ivec3(posEast), 0).r);
                                    int voxelWest = int(texelFetch(voxel_sampler, ivec3(posWest), 0).r);
                        
                                    if (
                                        (voxelBottom != voxelNumber && voxelBottom != 0) ||
                                        (voxelTop != voxelNumber && voxelTop != 0) ||
                                        (voxelNorth != voxelNumber && voxelNorth != 0) ||
                                        (voxelSouth != voxelNumber && voxelSouth != 0) ||
                                        (voxelEast != voxelNumber && voxelEast != 0) ||
                                        (voxelWest != voxelNumber && voxelWest != 0)
                                    ) {
                                        waveMult = 0.0;
                                    }
                                } else {
                                    if (
                                        (voxelBottom != voxelNumber && voxelBottom != 0) ||
                                        (voxelTop != voxelNumber && voxelTop != 0)
                                    ) {
                                        waveMult = 0.0;
                                    }
                                }
                            }
                        #endif
                        
                        DoWave_Foliage(playerPos, worldPos, waveMult);
                    }
                    #endif
                } else { // mat >= 12496
                    if (mat < 12588) {
                        if (mat >= 12584 && mat < 12588) {
                            const int voxelNumber = 232;
                            if (fract(worldPos.y + 0.005) > 0.06) {
                                float ectoplasmWaveTime = frameTimeCounter * 3.5 * WAVING_SPEED;
                                worldPos.xz /= 12.0;
                            
                                float noise = 2 * (Noise3D(worldPos) - 0.5);
                                float noise2 = Noise3D(worldPos + vec3(0.2, 1.0, 0.9));
                            
                                float wave = noise * sin(ectoplasmWaveTime * 0.5 + noise2 * 6.28);
                                playerPos.y += wave * 0.05;
                            }
                        }
                    } else { // mat >= 12588
                        #if defined WAVING_FOLIAGE
                        if (mat >= 12592 && mat < 12596) {
                            const int voxelNumber = -1;
                            if (gl_MultiTexCoord0.t > mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
                            
                        }
                        #endif
                    }
                }
            } else { // mat >= 12596
                if (mat < 12652) {
                    if (mat < 12644) {
                        #if defined WAVING_FOLIAGE
                        if (mat >= 12640 && mat < 12644) {
                            const int voxelNumber = 234;
                            if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
                        }
                        #endif
                    } else { // mat >= 12644
                        #if defined WAVING_FOLIAGE && (defined NETHER || defined DO_NETHER_VINE_WAVING_OUTSIDE_NETHER)
                        if (mat >= 12648 && mat < 12652) {
                            const int voxelNumber = 235;
                            DoWave_TallFoliage(playerPos.xyz, worldPos, 1.0, voxelNumber);
                        }
                        #endif
                    }
                } else { // mat >= 12652
                    if (mat < 12660) {
                        #if defined WAVING_FOLIAGE
                        if (mat >= 12656 && mat < 12660) {
                            const int voxelNumber = -1;
                            if (gl_MultiTexCoord0.t > mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
                            
                        }
                        #endif
                    } else { // mat >= 12660
                        #if defined WAVING_FOLIAGE && (defined NETHER || defined DO_NETHER_VINE_WAVING_OUTSIDE_NETHER)
                        if (mat >= 12660 && mat < 12664) {
                            const int voxelNumber = 65;
                            DoWave_TallFoliage(playerPos.xyz, worldPos, 1.0, voxelNumber);
                        }
                        #endif
                    }
                }
            }
        }
    #endif
}

void DoWave(inout vec3 playerPos, int mat) {
    DoWave_Block(playerPos, mat);

    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;

    #if defined GBUFFERS_TERRAIN || defined SHADOW
        #ifdef WAVING_FOLIAGE
            if (mat == 10003 || mat == 10005 || mat == 10029 || mat == 10025 // Grounded Foliage
                #ifdef DO_MORE_FOLIAGE_WAVING
                    || mat == 10769 // Torchflower
                    || mat == 10976 // Open Eye Blossom
                #endif
            ) {
                if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
            }
            
            else if (mat == 10021 || mat == 10023 || mat == 10027) { // Upper Layer Foliage
                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
            }

            #ifdef DO_MORE_FOLIAGE_WAVING
                else if (mat == 10972) { // Firefly Bush
                    if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26) {
                        vec3 wave = GetWave(worldPos, 170.0);
                        wave.x = wave.x * 8.0 + wave.y * 4.0;
                        wave.y = 0.0;
        wave.z = wave.z * 3.0;
        #ifdef MOD_YUNGSCAVEBIOMES
            wave.xz += YUNGS_SANDSTORM_WAVING_INTENSITY * 0.66 * yungSandstormWindDirection.xz * yungSandstormFactor;
        #endif
                        #ifdef MOD_SCORCHFUL
                            wave *= mix(1.0, SCORCHFUL_SANDSTORM_FOLIAGE_WAVING_INTENSITY, rainFactor * hasSandstorm);
                            wave.x -= pow1_5(SCORCHFUL_SANDSTORM_LEAVES_WAVING_INTENSITY * (1 + 2 * wave.x)) * rainFactor * hasSandstorm;
                        #endif

                        playerPos.xyz += wave * 0.1 * eyeBrightnessM; // lmCoord.y is unreliable for firefly bushes
                    }
                }
            #endif

            #if defined WAVING_LEAVES_ENABLED || defined WAVING_LAVA || defined WAVING_LILY_PAD
                else
            #endif
        #endif

        #ifdef WAVING_LEAVES_ENABLED
            if (mat == 10007 || mat == 10009 || mat == 10011) { // Leaves
                DoWave_Leaves(playerPos.xyz, worldPos, 1.0);
            } else if (mat == 10013 || mat == 10923) { // Vine
                // Reduced waving on vines to prevent clipping through blocks
                DoWave_Leaves(playerPos.xyz, worldPos, 0.75);
            }
            #if defined NETHER || defined DO_NETHER_VINE_WAVING_OUTSIDE_NETHER
                else if (mat == 10884 || mat == 10885) { // Weeping Vines, Twisting Vines
                    float waveMult = 1.0;
                    #if COLORED_LIGHTING_INTERNAL > 0
                        vec3 playerPosP = playerPos + vec3(0.0, 0.1, 0.0);
                        vec3 voxelPosP = SceneToVoxel(playerPosP);
                        vec3 playerPosN = playerPos - vec3(0.0, 0.1, 0.0);
                        vec3 voxelPosN = SceneToVoxel(playerPosN);

                        if (CheckInsideVoxelVolume(voxelPosP)) {
                            int voxelP = int(GetVoxelVolume(ivec3(voxelPosP)));
                            int voxelN = int(GetVoxelVolume(ivec3(voxelPosN)));
                            if (voxelP != 0 && voxelP != 65 || voxelN != 0 && voxelN != 65) // not air, not weeping vines
                                waveMult = 0.0;
                        }
                    #endif
                    DoWave_Foliage(playerPos.xyz, worldPos, waveMult);
                }
            #endif
            #ifdef WAVING_SUGAR_CANE
                if (mat == 10039) { // Sugar Cane
                    float waveMult = 0.75;
                    #if COLORED_LIGHTING_INTERNAL > 0
                        vec3 voxelPosP = SceneToVoxel(playerPos - vec3(0.0, 0.1, 0.0));

                        if (CheckInsideVoxelVolume(voxelPosP)) {
                            int voxelP = int(texelFetch(voxel_sampler, ivec3(voxelPosP), 0).r);
                            if (voxelP != 0) // not air
                                waveMult = 0.0;
                        }
                    #endif
                    DoWave_Foliage(playerPos.xyz, worldPos, waveMult);
                }
            #endif

            #if defined WAVING_LAVA || defined WAVING_LILY_PAD
                else
            #endif
        #endif

        #ifdef WAVING_LAVA
            if (mat == 10068 || mat == 10070) { // Lava
                DoWave_Lava(playerPos.xyz, worldPos);

                #ifdef GBUFFERS_TERRAIN
                    // G8FL735 Fixes Optifine-Iris parity. Optifine has 0.9 gl_Color.rgb on a lot of versions
                    glColorRaw.rgb = min(glColorRaw.rgb, vec3(0.9));
                #endif
            }

            #ifdef WAVING_LILY_PAD
                else
            #endif
        #endif

        #ifdef WAVING_LILY_PAD
            if (mat == 10489) { // Lily Pad
                DoWave_Water(playerPos.xyz, worldPos);
            }
        #endif
    #endif

    #if defined GBUFFERS_WATER || defined SHADOW || defined GBUFFERS_TERRAIN
        #ifdef WAVING_WATER_VERTEX
            #if defined WAVING_ANYTHING_TERRAIN && defined SHADOW
                else
            #endif

            if (mat == 32000) { // Water
                if (fract(worldPos.y + 0.005) > 0.06)
                DoWave_Water(playerPos.xyz, worldPos);
            }
        #endif
    #endif
}
void DoInteractiveWave(inout vec3 playerPos, int mat) {
    float strength = 2.0;
    if (mat == 10003 || mat == 10023 || mat == 10015) { // Flowers
        strength = 1.0;
    }
    if (length(playerPos) < 2.0) playerPos.xz += playerPos.xz * max(5.0 / max(length(playerPos * vec3(8.0, 2.0, 8.0) - vec3(0.0, 2.0, 0.0)), 2.0) -0.625, 0.0) * clamp(2.0 / length(playerPos) - 1.0, 0.0, 1.0) * strength; // Emin's code from v4 + smooth transition by me
}

void DoWaveEverything(inout vec3 playerPos) {
    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;
    DoWave_Leaves(playerPos.xyz, worldPos, 1.0);
    DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
}


void DoWave_BlockEntity(inout vec3 playerPos, int blockEntityId) {
    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;
    #if defined GBUFFERS_BLOCK || defined SHADOW
    #endif
}
                                    