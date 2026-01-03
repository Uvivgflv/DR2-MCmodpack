#if COLORED_LIGHTING < 512
    const ivec3 sceneVoxelVolumeSize = ivec3(COLORED_LIGHTING_INTERNAL, 64, COLORED_LIGHTING_INTERNAL);
#else
    const ivec3 sceneVoxelVolumeSize = ivec3(512, 64, 512);
#endif

vec3 playerToSceneVoxel(vec3 playerPos) {
    return playerPos + cameraPositionBestFract + 0.5 * vec3(sceneVoxelVolumeSize);
}

vec3 playerToPreviousSceneVoxel(vec3 previousPlayerPos) {
    return previousPlayerPos + previousCameraPositionBestFract + 0.5 * vec3(sceneVoxelVolumeSize);
}

#include "/lib/voxelization/reflectionVoxelData.glsl"

bool CheckInsideSceneVoxelVolume(vec3 voxelPos) {
    #ifndef SHADOW
        voxelPos -= 0.5 * sceneVoxelVolumeSize;
        voxelPos += sign(voxelPos) * 0.95;
        voxelPos += 0.5 * sceneVoxelVolumeSize;
    #endif
    voxelPos /= vec3(sceneVoxelVolumeSize);
    return clamp01(voxelPos) == voxelPos;
}

#if defined SHADOW && defined VERTEX_SHADER
    void UpdateSceneVoxelMap(int mat, vec3 normal, vec3 position) {
        ivec3 eligibleStages = ivec3(
            MC_RENDER_STAGE_TERRAIN_SOLID,
            MC_RENDER_STAGE_TERRAIN_CUTOUT,
            MC_RENDER_STAGE_TERRAIN_CUTOUT_MIPPED
        );

        if (!any(equal(ivec3(renderStage), eligibleStages))) return;

        vec3 viewPos  = mat3(gl_ModelViewMatrix) * (gl_Vertex.xyz + at_midBlock.xyz / 64.0) + gl_ModelViewMatrix[3].xyz;
        vec3 scenePos = mat3(shadowModelViewInverse) * viewPos + shadowModelViewInverse[3].xyz;
        vec3 voxelPos = playerToSceneVoxel(scenePos);

        if (CheckInsideSceneVoxelVolume(voxelPos)) {
            bool doSolidBlockCheck = true;
            bool storeToAllFaces = false;
            bool storeToAllFacesExceptTop = false;
            uint matM = mat > 10 ? uint(mat) : 1u;
            vec2 textureRad = abs(texCoord - mc_midTexCoord.xy);
            vec2 origin = mc_midTexCoord.xy - textureRad;
            if (mat < 12534) {
                if (mat < 12384) {
                    if (mat < 12317) {
                        if (mat < 12302) {
                            if (mat < 12295) {
                                if (mat < 12291) {
                                    if (mat < 12289) {
                                        if (mat == 12288) {
                                            return;
                                        }
                                    } else { // mat >= 12289
                                        if (mat < 12290) {
                                            if (mat == 12289) {
                                                return;
                                            }
                                        } else { // mat >= 12290
                                            if (mat == 12290) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12291
                                    if (mat < 12293) {
                                        if (mat < 12292) {
                                            if (mat == 12291) {
                                                return;
                                            }
                                        } else { // mat >= 12292
                                            if (mat == 12292) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12293
                                        if (mat < 12294) {
                                            if (mat == 12293) {
                                                return;
                                            }
                                        } else { // mat >= 12294
                                            if (mat == 12294) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12295
                                if (mat < 12298) {
                                    if (mat < 12296) {
                                        if (mat == 12295) {
                                            return;
                                        }
                                    } else { // mat >= 12296
                                        if (mat < 12297) {
                                            if (mat == 12296) {
                                                return;
                                            }
                                        } else { // mat >= 12297
                                            if (mat == 12297) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12298
                                    if (mat < 12300) {
                                        if (mat < 12299) {
                                            if (mat == 12298) {
                                                return;
                                            }
                                        } else { // mat >= 12299
                                            if (mat == 12299) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12300
                                        if (mat < 12301) {
                                            if (mat == 12300) {
                                                return;
                                            }
                                        } else { // mat >= 12301
                                            if (mat == 12301) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12302
                            if (mat < 12309) {
                                if (mat < 12305) {
                                    if (mat < 12303) {
                                        if (mat == 12302) {
                                            return;
                                        }
                                    } else { // mat >= 12303
                                        if (mat < 12304) {
                                            if (mat == 12303) {
                                                return;
                                            }
                                        } else { // mat >= 12304
                                            if (mat == 12304) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12305
                                    if (mat < 12307) {
                                        if (mat < 12306) {
                                            if (mat == 12305) {
                                                return;
                                            }
                                        } else { // mat >= 12306
                                            if (mat == 12306) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12307
                                        if (mat < 12308) {
                                            if (mat == 12307) {
                                                return;
                                            }
                                        } else { // mat >= 12308
                                            if (mat == 12308) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12309
                                if (mat < 12313) {
                                    if (mat < 12311) {
                                        if (mat < 12310) {
                                            if (mat == 12309) {
                                                return;
                                            }
                                        } else { // mat >= 12310
                                            if (mat == 12310) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12311
                                        if (mat < 12312) {
                                            if (mat == 12311) {
                                                return;
                                            }
                                        } else { // mat >= 12312
                                            if (mat == 12312) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12313
                                    if (mat < 12315) {
                                        if (mat < 12314) {
                                            if (mat == 12313) {
                                                return;
                                            }
                                        } else { // mat >= 12314
                                            if (mat == 12314) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12315
                                        if (mat < 12316) {
                                            if (mat == 12315) {
                                                return;
                                            }
                                        } else { // mat >= 12316
                                            if (mat == 12316) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12317
                        if (mat < 12355) {
                            if (mat < 12324) {
                                if (mat < 12320) {
                                    if (mat < 12318) {
                                        if (mat == 12317) {
                                            return;
                                        }
                                    } else { // mat >= 12318
                                        if (mat < 12319) {
                                            if (mat == 12318) {
                                                return;
                                            }
                                        } else { // mat >= 12319
                                            if (mat == 12319) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12320
                                    if (mat < 12322) {
                                        if (mat < 12321) {
                                            if (mat == 12320) {
                                                return;
                                            }
                                        } else { // mat >= 12321
                                            if (mat == 12321) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12322
                                        if (mat < 12323) {
                                            if (mat == 12322) {
                                                return;
                                            }
                                        } else { // mat >= 12323
                                            if (mat == 12323) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12324
                                if (mat < 12328) {
                                    if (mat < 12326) {
                                        if (mat < 12325) {
                                            if (mat == 12324) {
                                                return;
                                            }
                                        } else { // mat >= 12325
                                            if (mat == 12325) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12326
                                        if (mat < 12327) {
                                            if (mat == 12326) {
                                                return;
                                            }
                                        } else { // mat >= 12327
                                            if (mat == 12327) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12328
                                    if (mat < 12353) {
                                        if (mat < 12349) {
                                            if (mat == 12348) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12349
                                            if (mat == 12352) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12353
                                        if (mat < 12354) {
                                            if (mat == 12353) {
                                                return;
                                            }
                                        } else { // mat >= 12354
                                            if (mat == 12354) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12355
                            if (mat < 12369) {
                                if (mat < 12361) {
                                    if (mat < 12356) {
                                        if (mat == 12355) {
                                            return;
                                        }
                                    } else { // mat >= 12356
                                        if (mat < 12357) {
                                            if (mat == 12356) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12357
                                            if (mat == 12360) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12361
                                    if (mat < 12363) {
                                        if (mat < 12362) {
                                            if (mat == 12361) {
                                                return;
                                            }
                                        } else { // mat >= 12362
                                            if (mat == 12362) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12363
                                        if (mat < 12364) {
                                            if (mat == 12363) {
                                                return;
                                            }
                                        } else { // mat >= 12364
                                            if (mat == 12368) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12369
                                if (mat < 12377) {
                                    if (mat < 12371) {
                                        if (mat < 12370) {
                                            if (mat == 12369) {
                                                return;
                                            }
                                        } else { // mat >= 12370
                                            if (mat == 12370) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12371
                                        if (mat < 12372) {
                                            if (mat == 12371) {
                                                return;
                                            }
                                        } else { // mat >= 12372
                                            if (mat == 12376) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12377
                                    if (mat < 12382) {
                                        if (mat < 12381) {
                                            if (mat == 12380) {
                                                return;
                                            }
                                        } else { // mat >= 12381
                                            if (mat == 12381) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12382
                                        if (mat < 12383) {
                                            if (mat == 12382) {
                                                return;
                                            }
                                        } else { // mat >= 12383
                                            if (mat == 12383) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else { // mat >= 12384
                    if (mat < 12455) {
                        if (mat < 12402) {
                            if (mat < 12391) {
                                if (mat < 12387) {
                                    if (mat < 12385) {
                                        if (mat == 12384) {
                                            return;
                                        }
                                    } else { // mat >= 12385
                                        if (mat < 12386) {
                                            if (mat == 12385) {
                                                return;
                                            }
                                        } else { // mat >= 12386
                                            if (mat == 12386) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12387
                                    if (mat < 12389) {
                                        if (mat < 12388) {
                                            if (mat == 12387) {
                                                return;
                                            }
                                        } else { // mat >= 12388
                                            if (mat == 12388) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12389
                                        if (mat < 12390) {
                                            if (mat == 12389) {
                                                return;
                                            }
                                        } else { // mat >= 12390
                                            if (mat == 12390) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12391
                                if (mat < 12398) {
                                    if (mat < 12392) {
                                        if (mat == 12391) {
                                            return;
                                        }
                                    } else { // mat >= 12392
                                        if (mat < 12397) {
                                            if (mat == 12396) {
                                                return;
                                            }
                                        } else { // mat >= 12397
                                            if (mat == 12397) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12398
                                    if (mat < 12400) {
                                        if (mat < 12399) {
                                            if (mat == 12398) {
                                                return;
                                            }
                                        } else { // mat >= 12399
                                            if (mat == 12399) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12400
                                        if (mat < 12401) {
                                            if (mat == 12400) {
                                                return;
                                            }
                                        } else { // mat >= 12401
                                            if (mat == 12401) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12402
                            if (mat < 12425) {
                                if (mat < 12409) {
                                    if (mat < 12403) {
                                        if (mat == 12402) {
                                            return;
                                        }
                                    } else { // mat >= 12403
                                        if (mat < 12404) {
                                            if (mat == 12403) {
                                                return;
                                            }
                                        } else { // mat >= 12404
                                            if (mat == 12408) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12409
                                    if (mat < 12411) {
                                        if (mat < 12410) {
                                            if (mat == 12409) {
                                                return;
                                            }
                                        } else { // mat >= 12410
                                            if (mat == 12410) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12411
                                        if (mat < 12412) {
                                            if (mat == 12411) {
                                                return;
                                            }
                                        } else { // mat >= 12412
                                            if (mat == 12424) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12425
                                if (mat < 12429) {
                                    if (mat < 12427) {
                                        if (mat < 12426) {
                                            if (mat == 12425) {
                                                return;
                                            }
                                        } else { // mat >= 12426
                                            if (mat == 12426) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12427
                                        if (mat < 12428) {
                                            if (mat == 12427) {
                                                return;
                                            }
                                        } else { // mat >= 12428
                                            if (mat == 12428) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                } else { // mat >= 12429
                                    if (mat < 12453) {
                                        if (mat < 12437) {
                                            if (mat == 12436) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12437
                                            if (mat == 12452) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        }
                                    } else { // mat >= 12453
                                        if (mat < 12454) {
                                            if (mat == 12453) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        } else { // mat >= 12454
                                            if (mat == 12454) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12455
                        if (mat < 12481) {
                            if (mat < 12469) {
                                if (mat < 12458) {
                                    if (mat < 12456) {
                                        if (mat == 12455) {
                                            if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            } else return;
                                        }
                                    } else { // mat >= 12456
                                        if (mat < 12457) {
                                            if (mat == 12456) {
                                                return;
                                            }
                                        } else { // mat >= 12457
                                            if (mat == 12457) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12458
                                    if (mat < 12460) {
                                        if (mat < 12459) {
                                            if (mat == 12458) {
                                                return;
                                            }
                                        } else { // mat >= 12459
                                            if (mat == 12459) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12460
                                        if (mat < 12465) {
                                            if (mat == 12464) {
                                                return;
                                            }
                                        } else { // mat >= 12465
                                            if (mat == 12468) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12469
                                if (mat < 12473) {
                                    if (mat < 12471) {
                                        if (mat < 12470) {
                                            if (mat == 12469) {
                                                return;
                                            }
                                        } else { // mat >= 12470
                                            if (mat == 12470) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12471
                                        if (mat < 12472) {
                                            if (mat == 12471) {
                                                return;
                                            }
                                        } else { // mat >= 12472
                                            if (mat == 12472) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12473
                                    if (mat < 12475) {
                                        if (mat < 12474) {
                                            if (mat == 12473) {
                                                return;
                                            }
                                        } else { // mat >= 12474
                                            if (mat == 12474) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12475
                                        if (mat < 12476) {
                                            if (mat == 12475) {
                                                return;
                                            }
                                        } else { // mat >= 12476
                                            if (mat == 12480) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12481
                            if (mat < 12526) {
                                if (mat < 12486) {
                                    if (mat < 12482) {
                                        if (mat == 12481) {
                                            doSolidBlockCheck = false;
                                        }
                                    } else { // mat >= 12482
                                        if (mat < 12485) {
                                            if (mat == 12484) {
                                                return;
                                            }
                                        } else { // mat >= 12485
                                            if (mat == 12485) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12486
                                    if (mat < 12488) {
                                        if (mat < 12487) {
                                            if (mat == 12486) {
                                                return;
                                            }
                                        } else { // mat >= 12487
                                            if (mat == 12487) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12488
                                        if (mat < 12525) {
                                            if (mat == 12524) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        } else { // mat >= 12525
                                            if (mat == 12525) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12526
                                if (mat < 12530) {
                                    if (mat < 12528) {
                                        if (mat < 12527) {
                                            if (mat == 12526) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        } else { // mat >= 12527
                                            if (mat == 12527) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        }
                                    } else { // mat >= 12528
                                        if (mat < 12529) {
                                            if (mat == 12528) {
                                                return;
                                            }
                                        } else { // mat >= 12529
                                            if (mat == 12529) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12530
                                    if (mat < 12532) {
                                        if (mat < 12531) {
                                            if (mat == 12530) {
                                                return;
                                            }
                                        } else { // mat >= 12531
                                            if (mat == 12531) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12532
                                        if (mat < 12533) {
                                            if (mat == 12532) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        } else { // mat >= 12533
                                            if (mat == 12533) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else { // mat >= 12534
                if (mat < 12680) {
                    if (mat < 12643) {
                        if (mat < 12572) {
                            if (mat < 12565) {
                                if (mat < 12537) {
                                    if (mat < 12535) {
                                        if (mat == 12534) {
                                            doSolidBlockCheck = false;
                                            storeToAllFaces = true;
                                        }
                                    } else { // mat >= 12535
                                        if (mat < 12536) {
                                            if (mat == 12535) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        } else { // mat >= 12536
                                            if (mat == 12536) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12537
                                    if (mat < 12539) {
                                        if (mat < 12538) {
                                            if (mat == 12537) {
                                                return;
                                            }
                                        } else { // mat >= 12538
                                            if (mat == 12538) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12539
                                        if (mat < 12540) {
                                            if (mat == 12539) {
                                                return;
                                            }
                                        } else { // mat >= 12540
                                            if (mat == 12564) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12565
                                if (mat < 12568) {
                                    if (mat < 12566) {
                                        if (mat == 12565) {
                                            return;
                                        }
                                    } else { // mat >= 12566
                                        if (mat < 12567) {
                                            if (mat == 12566) {
                                                return;
                                            }
                                        } else { // mat >= 12567
                                            if (mat == 12567) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12568
                                    if (mat < 12570) {
                                        if (mat < 12569) {
                                            if (mat == 12568) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12569
                                            if (mat == 12569) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    } else { // mat >= 12570
                                        if (mat < 12571) {
                                            if (mat == 12570) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12571
                                            if (mat == 12571) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12572
                            if (mat < 12601) {
                                if (mat < 12590) {
                                    if (mat < 12577) {
                                        if (mat == 12576) {
                                            doSolidBlockCheck = false;
                                        }
                                    } else { // mat >= 12577
                                        if (mat < 12589) {
                                            if (mat == 12588) {
                                                return;
                                            }
                                        } else { // mat >= 12589
                                            if (mat == 12589) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12590
                                    if (mat < 12592) {
                                        if (mat < 12591) {
                                            if (mat == 12590) {
                                                return;
                                            }
                                        } else { // mat >= 12591
                                            if (mat == 12591) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12592
                                        if (mat < 12597) {
                                            if (mat == 12596) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12597
                                            if (mat == 12600) {
                                                doSolidBlockCheck = false;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12601
                                if (mat < 12628) {
                                    if (mat < 12626) {
                                        if (mat < 12625) {
                                            if (mat == 12624) {
                                                return;
                                            }
                                        } else { // mat >= 12625
                                            if (mat == 12625) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12626
                                        if (mat < 12627) {
                                            if (mat == 12626) {
                                                return;
                                            }
                                        } else { // mat >= 12627
                                            if (mat == 12627) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12628
                                    if (mat < 12641) {
                                        if (mat < 12637) {
                                            if (mat == 12636) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12637
                                            if (mat == 12640) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12641
                                        if (mat < 12642) {
                                            if (mat == 12641) {
                                                return;
                                            }
                                        } else { // mat >= 12642
                                            if (mat == 12642) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12643
                        if (mat < 12658) {
                            if (mat < 12650) {
                                if (mat < 12646) {
                                    if (mat < 12644) {
                                        if (mat == 12643) {
                                            return;
                                        }
                                    } else { // mat >= 12644
                                        if (mat < 12645) {
                                            if (mat == 12644) {
                                                return;
                                            }
                                        } else { // mat >= 12645
                                            if (mat == 12645) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12646
                                    if (mat < 12648) {
                                        if (mat < 12647) {
                                            if (mat == 12646) {
                                                return;
                                            }
                                        } else { // mat >= 12647
                                            if (mat == 12647) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12648
                                        if (mat < 12649) {
                                            if (mat == 12648) {
                                                return;
                                            }
                                        } else { // mat >= 12649
                                            if (mat == 12649) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12650
                                if (mat < 12654) {
                                    if (mat < 12652) {
                                        if (mat < 12651) {
                                            if (mat == 12650) {
                                                return;
                                            }
                                        } else { // mat >= 12651
                                            if (mat == 12651) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12652
                                        if (mat < 12653) {
                                            if (mat == 12652) {
                                                return;
                                            }
                                        } else { // mat >= 12653
                                            if (mat == 12653) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12654
                                    if (mat < 12656) {
                                        if (mat < 12655) {
                                            if (mat == 12654) {
                                                return;
                                            }
                                        } else { // mat >= 12655
                                            if (mat == 12655) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12656
                                        if (mat < 12657) {
                                            if (mat == 12656) {
                                                return;
                                            }
                                        } else { // mat >= 12657
                                            if (mat == 12657) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12658
                            if (mat < 12665) {
                                if (mat < 12661) {
                                    if (mat < 12659) {
                                        if (mat == 12658) {
                                            return;
                                        }
                                    } else { // mat >= 12659
                                        if (mat < 12660) {
                                            if (mat == 12659) {
                                                return;
                                            }
                                        } else { // mat >= 12660
                                            if (mat == 12660) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12661
                                    if (mat < 12663) {
                                        if (mat < 12662) {
                                            if (mat == 12661) {
                                                return;
                                            }
                                        } else { // mat >= 12662
                                            if (mat == 12662) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12663
                                        if (mat < 12664) {
                                            if (mat == 12663) {
                                                return;
                                            }
                                        } else { // mat >= 12664
                                            if (mat == 12664) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12665
                                if (mat < 12673) {
                                    if (mat < 12667) {
                                        if (mat < 12666) {
                                            if (mat == 12665) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12666
                                            if (mat == 12666) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    } else { // mat >= 12667
                                        if (mat < 12668) {
                                            if (mat == 12667) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12668
                                            if (mat == 12672) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                } else { // mat >= 12673
                                    if (mat < 12678) {
                                        if (mat < 12677) {
                                            if (mat == 12676) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12677
                                            if (mat == 12677) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    } else { // mat >= 12678
                                        if (mat < 12679) {
                                            if (mat == 12678) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12679
                                            if (mat == 12679) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else { // mat >= 12680
                    if (mat < 12789) {
                        if (mat < 12755) {
                            if (mat < 12729) {
                                if (mat < 12701) {
                                    if (mat < 12685) {
                                        if (mat == 12684) {
                                            if (textureRad.y < 5.0 / atlasSize.y) {
                                                // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                if (textureRad.x < 5.0 / atlasSize.x) return;
                                            
                                                // Half textureRad for stairs and slabs to not overshoot their textures
                                                textureRad *= 0.5;
                                            
                                                // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                            }
                                            
                                            doSolidBlockCheck = false;
                                            if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                        }
                                    } else { // mat >= 12685
                                        if (mat < 12697) {
                                            if (mat == 12696) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12697
                                            if (mat == 12700) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12701
                                    if (mat < 12703) {
                                        if (mat < 12702) {
                                            if (mat == 12701) {
                                                return;
                                            }
                                        } else { // mat >= 12702
                                            if (mat == 12702) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12703
                                        if (mat < 12704) {
                                            if (mat == 12703) {
                                                return;
                                            }
                                        } else { // mat >= 12704
                                            if (mat == 12728) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12729
                                if (mat < 12745) {
                                    if (mat < 12737) {
                                        if (mat == 12736) {
                                            if (textureRad.y < 5.0 / atlasSize.y) {
                                                // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                if (textureRad.x < 5.0 / atlasSize.x) return;
                                            
                                                // Half textureRad for stairs and slabs to not overshoot their textures
                                                textureRad *= 0.5;
                                            
                                                // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                            }
                                            
                                            doSolidBlockCheck = false;
                                            if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                        }
                                    } else { // mat >= 12737
                                        if (mat < 12741) {
                                            if (mat == 12740) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12741
                                            if (mat == 12744) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                } else { // mat >= 12745
                                    if (mat < 12753) {
                                        if (mat < 12749) {
                                            if (mat == 12748) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12749
                                            if (mat == 12752) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12753
                                        if (mat < 12754) {
                                            if (mat == 12753) {
                                                return;
                                            }
                                        } else { // mat >= 12754
                                            if (mat == 12754) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12755
                            if (mat < 12762) {
                                if (mat < 12758) {
                                    if (mat < 12756) {
                                        if (mat == 12755) {
                                            return;
                                        }
                                    } else { // mat >= 12756
                                        if (mat < 12757) {
                                            if (mat == 12756) {
                                                return;
                                            }
                                        } else { // mat >= 12757
                                            if (mat == 12757) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12758
                                    if (mat < 12760) {
                                        if (mat < 12759) {
                                            if (mat == 12758) {
                                                return;
                                            }
                                        } else { // mat >= 12759
                                            if (mat == 12759) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12760
                                        if (mat < 12761) {
                                            if (mat == 12760) {
                                                return;
                                            }
                                        } else { // mat >= 12761
                                            if (mat == 12761) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12762
                                if (mat < 12781) {
                                    if (mat < 12764) {
                                        if (mat < 12763) {
                                            if (mat == 12762) {
                                                return;
                                            }
                                        } else { // mat >= 12763
                                            if (mat == 12763) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12764
                                        if (mat < 12773) {
                                            if (mat == 12772) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12773
                                            if (mat == 12780) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                } else { // mat >= 12781
                                    if (mat < 12783) {
                                        if (mat < 12782) {
                                            if (mat == 12781) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12782
                                            if (mat == 12782) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    } else { // mat >= 12783
                                        if (mat < 12784) {
                                            if (mat == 12783) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12784
                                            if (mat == 12788) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12789
                        if (mat < 12823) {
                            if (mat < 12815) {
                                if (mat < 12807) {
                                    if (mat < 12805) {
                                        if (mat == 12804) {
                                            return;
                                        }
                                    } else { // mat >= 12805
                                        if (mat < 12806) {
                                            if (mat == 12805) {
                                                return;
                                            }
                                        } else { // mat >= 12806
                                            if (mat == 12806) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12807
                                    if (mat < 12813) {
                                        if (mat < 12808) {
                                            if (mat == 12807) {
                                                return;
                                            }
                                        } else { // mat >= 12808
                                            if (mat == 12812) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12813
                                        if (mat < 12814) {
                                            if (mat == 12813) {
                                                return;
                                            }
                                        } else { // mat >= 12814
                                            if (mat == 12814) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12815
                                if (mat < 12819) {
                                    if (mat < 12817) {
                                        if (mat < 12816) {
                                            if (mat == 12815) {
                                                return;
                                            }
                                        } else { // mat >= 12816
                                            if (mat == 12816) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12817
                                        if (mat < 12818) {
                                            if (mat == 12817) {
                                                return;
                                            }
                                        } else { // mat >= 12818
                                            if (mat == 12818) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12819
                                    if (mat < 12821) {
                                        if (mat < 12820) {
                                            if (mat == 12819) {
                                                return;
                                            }
                                        } else { // mat >= 12820
                                            if (mat == 12820) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12821
                                        if (mat < 12822) {
                                            if (mat == 12821) {
                                                return;
                                            }
                                        } else { // mat >= 12822
                                            if (mat == 12822) {
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12823
                            if (mat < 12838) {
                                if (mat < 12834) {
                                    if (mat < 12824) {
                                        if (mat == 12823) {
                                            return;
                                        }
                                    } else { // mat >= 12824
                                        if (mat < 12833) {
                                            if (mat == 12832) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        } else { // mat >= 12833
                                            if (mat == 12833) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12834
                                    if (mat < 12836) {
                                        if (mat < 12835) {
                                            if (mat == 12834) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        } else { // mat >= 12835
                                            if (mat == 12835) {
                                                if (abs(abs(normal.x) - 0.5) < 0.25) {
                                                    doSolidBlockCheck = false;
                                                    storeToAllFaces = true;
                                                } else return;
                                            }
                                        }
                                    } else { // mat >= 12836
                                        if (mat < 12837) {
                                            if (mat == 12836) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        } else { // mat >= 12837
                                            if (mat == 12837) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        }
                                    }
                                }
                            } else { // mat >= 12838
                                if (mat < 12862) {
                                    if (mat < 12840) {
                                        if (mat < 12839) {
                                            if (mat == 12838) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        } else { // mat >= 12839
                                            if (mat == 12839) {
                                                doSolidBlockCheck = false;
                                                storeToAllFaces = true;
                                            }
                                        }
                                    } else { // mat >= 12840
                                        if (mat < 12861) {
                                            if (mat == 12860) {
                                                return;
                                            }
                                        } else { // mat >= 12861
                                            if (mat == 12861) {
                                                return;
                                            }
                                        }
                                    }
                                } else { // mat >= 12862
                                    if (mat < 12864) {
                                        if (mat < 12863) {
                                            if (mat == 12862) {
                                                return;
                                            }
                                        } else { // mat >= 12863
                                            if (mat == 12863) {
                                                return;
                                            }
                                        }
                                    } else { // mat >= 12864
                                        if (mat < 12865) {
                                            if (mat == 12864) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        } else { // mat >= 12865
                                            if (mat == 12868) {
                                                if (textureRad.y < 5.0 / atlasSize.y) {
                                                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                                                    if (textureRad.x < 5.0 / atlasSize.x) return;
                                                
                                                    // Half textureRad for stairs and slabs to not overshoot their textures
                                                    textureRad *= 0.5;
                                                
                                                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                                                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                                                }
                                                
                                                doSolidBlockCheck = false;
                                                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (mat == 10132) { // Grass Block Regular
                if (texture2D(tex, mc_midTexCoord.xy).a < 0.5) return; // Grass Block Side Overlay
            }

            if (abs(mat - 10009) <= 2) { // Leaves (10007, 10009, 10011)
                doSolidBlockCheck = false;
            }

            if (mat == 10129 // Farmland:Dry
                || mat == 10137 // Farmland:Wet
                || mat == 10493 // Dirt Path
            ) { 
                doSolidBlockCheck = false;
                textureRad *= 0.5;
                origin.y += 2.0 / atlasSize.y;
            } 

            if (mat == 10544 // Glow Lichen
                || abs(mat - 10069) <= 1 // Lava (10068, 10070)
            ) { 
                if (abs(dot(textureRad, vec2(atlasSize.x, -atlasSize.y))) < 4.5)
                    storeToAllFaces = true;
                else return;
            }
            
            // Half blocks that we want to display as full blocks in reflections
            if (mat == 10035 // Stone Bricks, Mossy Stone Bricks
                || abs(mat - 10095) <= 12 && mat % 4 == 3 // Stone, Smooth Stone, Granite, Diorite, Andesite, Bricks, Mud Bricks
                || mat == 10155 // Cobblestone, Mossy Cobblestone
                || abs(mat - 10191) <= 32 && mat % 8 == 7 // Oak, Spruce, Birch, Jungle, Acacia, DarkOak, Mangrove, Crimson, Warped
                || mat == 10111 // Cobbled Deepslate
                || mat == 10115 // Polished Deepslate, Deepslate Bricks, Deepslate Tiles
                || mat == 10243 // Sandstone
                || mat == 10247 // Red Sandstone
                || mat == 10295 // Copper
                || mat == 10367 // Quartz
                || mat == 10379 // Purpur
                || mat == 10381 // Powder Snow
                || mat == 10419 // Nether Bricks
                || mat == 10423 // Red Nether Bricks
                || mat == 10431 // End Stone Bricks
                || mat == 10443 // Prismarine, Prismarine Bricks
                || mat == 10447 // Dark Prismarine
                || mat == 10483 // Blackstone
                || mat == 10715 // Tuff
                || mat == 10759 // Bamboo, Bamboo Mosaic
                || mat == 10763 // Cherry
                || mat == 10931 // Pale Oak
                
            ) {
                if (textureRad.y < 5.0 / atlasSize.y) {
                    // Discarding if textureRad is too small to fix (somewhat rare) flickering on stairs
                    if (textureRad.x < 5.0 / atlasSize.x) return;

                    // Half textureRad for stairs and slabs to not overshoot their textures
                    textureRad *= 0.5;

                    // P.S: Don't ask me how any of these checks make sense because I have absolutely no idea either
                    // P.P.S: It seems like these checks only work well with default 16x textures but I don't have a better solution
                }

                doSolidBlockCheck = false;
                if (normal.y < 0.5) storeToAllFacesExceptTop = true; // Not overriding top face or else carpets look broken on top of slabs
            }

            if (mat == 10669 || mat == 10925 || mat == 10953) { // Wool Carpets, Moss Carpet, Snow Layers < 8
                if (normal.y > 0.5) {
                    voxelPos.y -= 1.0;
                    doSolidBlockCheck = false;
                } else return;
            }

            if (mat == 10072 || mat == 10076) { // Fire, Soul Fire
                doSolidBlockCheck = false;
                storeToAllFaces = true;
            }

            if (mat == 10652 || mat == 10656) { // Campfire:Lit, Soul Campfire:Lit
                if (abs(abs(normal.x) - 0.5) < 0.25) {
                    doSolidBlockCheck = false;
                    storeToAllFaces = true;
                } else return;
            }

            // Blocks to remove from reflections
            if (mat == 10056 // Lava Cauldron
                || mat == 10332 // Amethyst Clusters
                || mat == 10500 // End Rod
                || mat == 10508 // Chorus Flower:Alive
                || mat == 10512 // Chorus Flower:Dead
                || mat == 10556 // End Portal Frame:Active
                || mat == 10572 // Dragon Egg
                || mat == 10632 // Cave Vines
                || mat == 10776 // Crimson Fungus, Warped Fungus
                || mat == 10780 // Potted Crimson Fungus, Potted Warped Fungus
                || mat == 10836 // Brewing Stand
                || mat == 10884 // Weeping Vines
                || mat == 10972 // Firefly Bush
                || mat == 10976 // Open Eyeblossom
                || mat == 10980 // Potted Open Eyeblossom
                || abs(mat - 10562) <= 2 // Lantern & Soul Lantern
                || abs(mat - 10599) <= 3 // Redstone Wire
                || abs(mat - 10701) <= 3 // Non-Solid Sculk Stuff
                || abs(mat - 10786) <= 2 // Calibrated Sculk Sensor
                || abs(mat - 10911) <= 11 // Lit Candle Cakes
                || mat == 10988 // Copper Lantern
            ) {
                return;
            }

            if (doSolidBlockCheck) {
                if (
                    mat % 2 == 1 // Non-solids
                    || abs(mat - 5000) <= 4999 // Block entities that we treat as non-solid
                )
                return;
            }

            imageStore(wsr_img, ivec3(voxelPos), uvec4(matM, 0u, 0u, 0u));
            storeFaceData(ivec3(voxelPos), round(normal), origin, textureRad.x, storeToAllFaces, storeToAllFacesExceptTop, scenePos);

            float lodScale = 4.0;
            imageStore(wsr_img_lod, ivec3(voxelPos / lodScale), uvec4(1u, 0u, 0u, 0u));
        }
    }
#endif