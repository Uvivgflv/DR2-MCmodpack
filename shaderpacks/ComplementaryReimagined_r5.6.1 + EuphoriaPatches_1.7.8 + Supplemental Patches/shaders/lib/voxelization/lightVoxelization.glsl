#include "/lib/shaderSettings/materials.glsl"

#ifdef IS_IRIS
#ifndef INCLUDE_VOXELIZATION
    #define INCLUDE_VOXELIZATION

    #if COLORED_LIGHTING_INTERNAL <= 512
        const ivec3 voxelVolumeSize = ivec3(COLORED_LIGHTING_INTERNAL, COLORED_LIGHTING_INTERNAL * 0.5, COLORED_LIGHTING_INTERNAL);
    #else
        const ivec3 voxelVolumeSize = ivec3(COLORED_LIGHTING_INTERNAL, 512 * 0.5, COLORED_LIGHTING_INTERNAL);
    #endif

    float effectiveACTdistance = min(float(COLORED_LIGHTING_INTERNAL), shadowDistance * 2.0);

    vec3 transform(mat4 m, vec3 pos) {
        return mat3(m) * pos + m[3].xyz;
    }

    vec3 SceneToVoxel(vec3 scenePos) {
        return scenePos + cameraPositionBestFract + (0.5 * vec3(voxelVolumeSize));
    }

    bool CheckInsideVoxelVolume(vec3 voxelPos) {
        #ifndef SHADOW
            voxelPos -= voxelVolumeSize / 2;
            voxelPos += sign(voxelPos) * 0.95;
            voxelPos += voxelVolumeSize / 2;
        #endif
        voxelPos /= vec3(voxelVolumeSize);
        return clamp01(voxelPos) == voxelPos;
    }

    uint GetVoxelVolume(ivec3 pos) {
        return texelFetch(voxel_sampler, pos, 0).x & 32767u;
    }

    uint GetVoxelVolumeRaw(ivec3 pos) {
        return texelFetch(voxel_sampler, pos, 0).x;
    }

    vec4 GetLightVolume(vec3 pos) {
        vec4 lightVolume;

        #if defined COMPOSITE1 || defined DEFERRED1
            #undef ACT_CORNER_LEAK_FIX
        #endif

        #ifdef ACT_CORNER_LEAK_FIX
            float minMult = 1.5;
            ivec3 posTX = ivec3(pos * voxelVolumeSize);

            ivec3[6] adjacentOffsets = ivec3[](
                ivec3( 1, 0, 0),
                ivec3(-1, 0, 0),
                ivec3( 0, 1, 0),
                ivec3( 0,-1, 0),
                ivec3( 0, 0, 1),
                ivec3( 0, 0,-1)
            );

            int adjacentCount = 0;
            for (int i = 0; i < 6; i++) {
                int voxel = int(GetVoxelVolume(posTX + adjacentOffsets[i]));
                if (voxel == 1 || voxel >= 30000) adjacentCount++;
            }

            if (int(GetVoxelVolume(posTX)) >= 30000) adjacentCount = 6;
        #endif

        if (int(framemod2) == 0) {
            lightVolume = texture(floodfill_sampler_copy, pos);
            #ifdef ACT_CORNER_LEAK_FIX
                if (adjacentCount >= 3) {
                    vec4 lightVolumeTX = texelFetch(floodfill_sampler_copy, posTX, 0);
                    if (dot(lightVolumeTX, lightVolumeTX) > 0.01)
                    lightVolume.rgb = min(lightVolume.rgb, lightVolumeTX.rgb * minMult);
                }
            #endif
        } else {
            lightVolume = texture(floodfill_sampler, pos);
            #ifdef ACT_CORNER_LEAK_FIX
                if (adjacentCount >= 3) {
                    vec4 lightVolumeTX = texelFetch(floodfill_sampler, posTX, 0);
                    if (dot(lightVolumeTX, lightVolumeTX) > 0.01)
                    lightVolume.rgb = min(lightVolume.rgb, lightVolumeTX.rgb * minMult);
                }
            #endif
        }

        return lightVolume;
    }

    int GetVoxelIDs(int mat) {
        /* These return IDs must be consistent across the following files:
        "lightVoxelization.glsl", "blocklightColors.glsl", "item.properties"
        The order of if-checks or block IDs don't matter. The returning IDs matter. */

        if (mat < 12599) {
            if (mat < 12451) {
                if (mat < 12382) {
                    if (mat < 12353) {
                        if (mat < 12307) {
                            if (mat < 12297) {
                                if (mat < 12291) {
                                    if (mat < 12289) {
                                        if (mat == 12288) return 249;
                                    } else { // mat >= 12289
                                        if (mat == 12290) return 248;
                                    }
                                } else { // mat >= 12291
                                    if (mat < 12293) {
                                        if (mat == 12292) return 252;
                                    } else { // mat >= 12293
                                        if (mat < 12295) {
                                            if (mat == 12294) return 246;
                                        } else { // mat >= 12295
                                            if (mat == 12296) return 245;
                                        }
                                    }
                                }
                            } else { // mat >= 12297
                                if (mat < 12301) {
                                    if (mat < 12299) {
                                        if (mat == 12298) return 247;
                                    } else { // mat >= 12299
                                        if (mat == 12300) return 250;
                                    }
                                } else { // mat >= 12301
                                    if (mat < 12303) {
                                        if (mat == 12302) return 244;
                                    } else { // mat >= 12303
                                        if (mat < 12305) {
                                            if (mat == 12304) return 167;
                                        } else { // mat >= 12305
                                            if (mat == 12306) return 169;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12307
                            if (mat < 12317) {
                                if (mat < 12311) {
                                    if (mat < 12309) {
                                        if (mat == 12308) return 165;
                                    } else { // mat >= 12309
                                        if (mat == 12310) return 162;
                                    }
                                } else { // mat >= 12311
                                    if (mat < 12313) {
                                        if (mat == 12312) return 167;
                                    } else { // mat >= 12313
                                        if (mat < 12315) {
                                            if (mat == 12314) return 169;
                                        } else { // mat >= 12315
                                            if (mat == 12316) return 165;
                                        }
                                    }
                                }
                            } else { // mat >= 12317
                                if (mat < 12323) {
                                    if (mat < 12319) {
                                        if (mat == 12318) return 162;
                                    } else { // mat >= 12319
                                        if (mat < 12321) {
                                            if (mat == 12320) return 167;
                                        } else { // mat >= 12321
                                            if (mat == 12322) return 169;
                                        }
                                    }
                                } else { // mat >= 12323
                                    if (mat < 12325) {
                                        if (mat == 12324) return 165;
                                    } else { // mat >= 12325
                                        if (mat < 12327) {
                                            if (mat == 12326) return 162;
                                        } else { // mat >= 12327
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12352) return 156;
                                            #endif
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12353
                        if (mat < 12368) {
                            if (mat < 12362) {
                                if (mat < 12355) {
                                    if (mat < 12354) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12353) return 156;
                                        #endif
                                    } else { // mat >= 12354
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12354) return 156;
                                        #endif
                                    }
                                } else { // mat >= 12355
                                    if (mat < 12356) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12355) return 156;
                                        #endif
                                    } else { // mat >= 12356
                                        if (mat < 12361) {
                                            if (mat == 12360) return 37;
                                        } else { // mat >= 12361
                                            if (mat == 12361) return 37;
                                        }
                                    }
                                }
                            } else { // mat >= 12362
                                if (mat < 12365) {
                                    if (mat < 12363) {
                                        if (mat == 12362) return 37;
                                    } else { // mat >= 12363
                                        if (mat < 12364) {
                                            if (mat == 12363) return 37;
                                        } else { // mat >= 12364
                                            if (mat == 12364) return 356;
                                        }
                                    }
                                } else { // mat >= 12365
                                    if (mat < 12366) {
                                        if (mat == 12365) return 356;
                                    } else { // mat >= 12366
                                        if (mat < 12367) {
                                            if (mat == 12366) return 356;
                                        } else { // mat >= 12367
                                            if (mat == 12367) return 356;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12368
                            if (mat < 12373) {
                                if (mat < 12370) {
                                    if (mat < 12369) {
                                        if (mat == 12368) return 157;
                                    } else { // mat >= 12369
                                        if (mat == 12369) return 157;
                                    }
                                } else { // mat >= 12370
                                    if (mat < 12371) {
                                        if (mat == 12370) return 157;
                                    } else { // mat >= 12371
                                        if (mat < 12372) {
                                            if (mat == 12371) return 157;
                                        } else { // mat >= 12372
                                            if (mat == 12372) return 158;
                                        }
                                    }
                                }
                            } else { // mat >= 12373
                                if (mat < 12376) {
                                    if (mat < 12374) {
                                        if (mat == 12373) return 158;
                                    } else { // mat >= 12374
                                        if (mat < 12375) {
                                            if (mat == 12374) return 158;
                                        } else { // mat >= 12375
                                            if (mat == 12375) return 158;
                                        }
                                    }
                                } else { // mat >= 12376
                                    if (mat < 12377) {
                                        if (mat == 12376) return 158;
                                    } else { // mat >= 12377
                                        if (mat < 12381) {
                                            if (mat == 12380) return 37;
                                        } else { // mat >= 12381
                                            if (mat == 12381) return 37;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else { // mat >= 12382
                    if (mat < 12404) {
                        if (mat < 12393) {
                            if (mat < 12387) {
                                if (mat < 12384) {
                                    if (mat < 12383) {
                                        if (mat == 12382) return 37;
                                    } else { // mat >= 12383
                                        if (mat == 12383) return 37;
                                    }
                                } else { // mat >= 12384
                                    if (mat < 12385) {
                                        if (mat == 12384) return 157;
                                    } else { // mat >= 12385
                                        if (mat < 12386) {
                                            if (mat == 12385) return 157;
                                        } else { // mat >= 12386
                                            if (mat == 12386) return 157;
                                        }
                                    }
                                }
                            } else { // mat >= 12387
                                if (mat < 12390) {
                                    if (mat < 12388) {
                                        if (mat == 12387) return 157;
                                    } else { // mat >= 12388
                                        if (mat < 12389) {
                                            if (mat == 12388) return 158;
                                        } else { // mat >= 12389
                                            if (mat == 12389) return 158;
                                        }
                                    }
                                } else { // mat >= 12390
                                    if (mat < 12391) {
                                        if (mat == 12390) return 158;
                                    } else { // mat >= 12391
                                        if (mat < 12392) {
                                            if (mat == 12391) return 158;
                                        } else { // mat >= 12392
                                            if (mat == 12392) return 159;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12393
                            if (mat < 12398) {
                                if (mat < 12395) {
                                    if (mat < 12394) {
                                        if (mat == 12393) return 159;
                                    } else { // mat >= 12394
                                        if (mat == 12394) return 159;
                                    }
                                } else { // mat >= 12395
                                    if (mat < 12396) {
                                        if (mat == 12395) return 159;
                                    } else { // mat >= 12396
                                        if (mat < 12397) {
                                            if (mat == 12396) return 159;
                                        } else { // mat >= 12397
                                            if (mat == 12397) return 159;
                                        }
                                    }
                                }
                            } else { // mat >= 12398
                                if (mat < 12401) {
                                    if (mat < 12399) {
                                        if (mat == 12398) return 159;
                                    } else { // mat >= 12399
                                        if (mat < 12400) {
                                            if (mat == 12399) return 159;
                                        } else { // mat >= 12400
                                            if (mat == 12400) return 160;
                                        }
                                    }
                                } else { // mat >= 12401
                                    if (mat < 12402) {
                                        if (mat == 12401) return 160;
                                    } else { // mat >= 12402
                                        if (mat < 12403) {
                                            if (mat == 12402) return 160;
                                        } else { // mat >= 12403
                                            if (mat == 12403) return 160;
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12404
                        if (mat < 12415) {
                            if (mat < 12409) {
                                if (mat < 12406) {
                                    if (mat < 12405) {
                                        if (mat == 12404) return 161;
                                    } else { // mat >= 12405
                                        if (mat == 12405) return 161;
                                    }
                                } else { // mat >= 12406
                                    if (mat < 12407) {
                                        if (mat == 12406) return 161;
                                    } else { // mat >= 12407
                                        if (mat < 12408) {
                                            if (mat == 12407) return 161;
                                        } else { // mat >= 12408
                                            if (mat == 12408) return 164;
                                        }
                                    }
                                }
                            } else { // mat >= 12409
                                if (mat < 12412) {
                                    if (mat < 12410) {
                                        if (mat == 12409) return 164;
                                    } else { // mat >= 12410
                                        if (mat < 12411) {
                                            if (mat == 12410) return 164;
                                        } else { // mat >= 12411
                                            if (mat == 12411) return 164;
                                        }
                                    }
                                } else { // mat >= 12412
                                    if (mat < 12413) {
                                        if (mat == 12412) return 168;
                                    } else { // mat >= 12413
                                        if (mat < 12414) {
                                            if (mat == 12413) return 168;
                                        } else { // mat >= 12414
                                            if (mat == 12414) return 168;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12415
                            if (mat < 12433) {
                                if (mat < 12423) {
                                    if (mat < 12416) {
                                        if (mat == 12415) return 168;
                                    } else { // mat >= 12416
                                        if (mat == 12422) return 29;
                                    }
                                } else { // mat >= 12423
                                    if (mat < 12425) {
                                        if (mat == 12424) return 166;
                                    } else { // mat >= 12425
                                        if (mat < 12427) {
                                            if (mat == 12426) return 163;
                                        } else { // mat >= 12427
                                            if (mat == 12432) return 164;
                                        }
                                    }
                                }
                            } else { // mat >= 12433
                                if (mat < 12436) {
                                    if (mat < 12434) {
                                        if (mat == 12433) return 164;
                                    } else { // mat >= 12434
                                        if (mat < 12435) {
                                            if (mat == 12434) return 164;
                                        } else { // mat >= 12435
                                            if (mat == 12435) return 164;
                                        }
                                    }
                                } else { // mat >= 12436
                                    if (mat < 12449) {
                                        if (mat == 12448) return 204;
                                    } else { // mat >= 12449
                                        if (mat < 12450) {
                                            if (mat == 12449) return 204;
                                        } else { // mat >= 12450
                                            if (mat == 12450) return 204;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else { // mat >= 12451
                if (mat < 12522) {
                    if (mat < 12484) {
                        if (mat < 12465) {
                            if (mat < 12456) {
                                if (mat < 12453) {
                                    if (mat < 12452) {
                                        if (mat == 12451) return 204;
                                    } else { // mat >= 12452
                                        if (mat == 12452) return 204;
                                    }
                                } else { // mat >= 12453
                                    if (mat < 12454) {
                                        if (mat == 12453) return 204;
                                    } else { // mat >= 12454
                                        if (mat < 12455) {
                                            if (mat == 12454) return 204;
                                        } else { // mat >= 12455
                                            if (mat == 12455) return 204;
                                        }
                                    }
                                }
                            } else { // mat >= 12456
                                if (mat < 12462) {
                                    if (mat < 12457) {
                                        if (mat == 12456) return 203;
                                    } else { // mat >= 12457
                                        if (mat < 12461) {
                                            if (mat == 12460) return 204;
                                        } else { // mat >= 12461
                                            if (mat == 12461) return 204;
                                        }
                                    }
                                } else { // mat >= 12462
                                    if (mat < 12463) {
                                        if (mat == 12462) return 204;
                                    } else { // mat >= 12463
                                        if (mat < 12464) {
                                            if (mat == 12463) return 204;
                                        } else { // mat >= 12464
                                            if (mat == 12464) return 204;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12465
                            if (mat < 12470) {
                                if (mat < 12467) {
                                    if (mat < 12466) {
                                        if (mat == 12465) return 204;
                                    } else { // mat >= 12466
                                        if (mat == 12466) return 204;
                                    }
                                } else { // mat >= 12467
                                    if (mat < 12468) {
                                        if (mat == 12467) return 204;
                                    } else { // mat >= 12468
                                        if (mat < 12469) {
                                            if (mat == 12468) return 204;
                                        } else { // mat >= 12469
                                            if (mat == 12469) return 204;
                                        }
                                    }
                                }
                            } else { // mat >= 12470
                                if (mat < 12481) {
                                    if (mat < 12471) {
                                        if (mat == 12470) return 204;
                                    } else { // mat >= 12471
                                        if (mat < 12472) {
                                            if (mat == 12471) return 204;
                                        } else { // mat >= 12472
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12480) return 53;
                                            #endif
                                        }
                                    }
                                } else { // mat >= 12481
                                    if (mat < 12482) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12481) return 53;
                                        #endif
                                    } else { // mat >= 12482
                                        if (mat < 12483) {
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12482) return 53;
                                            #endif
                                        } else { // mat >= 12483
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12483) return 53;
                                            #endif
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12484
                        if (mat < 12499) {
                            if (mat < 12493) {
                                if (mat < 12486) {
                                    if (mat < 12485) {
                                        #if defined DO_IPBR_LIGHTS && (!(defined NOT_GLOWING_CHORUS_FLOWER))
                                        if (mat == 12484) return 39;
                                        #endif
                                    } else { // mat >= 12485
                                        #if defined DO_IPBR_LIGHTS && (!(defined NOT_GLOWING_CHORUS_FLOWER))
                                        if (mat == 12485) return 39;
                                        #endif
                                    }
                                } else { // mat >= 12486
                                    if (mat < 12487) {
                                        #if defined DO_IPBR_LIGHTS && (!(defined NOT_GLOWING_CHORUS_FLOWER))
                                        if (mat == 12486) return 39;
                                        #endif
                                    } else { // mat >= 12487
                                        if (mat < 12488) {
                                            #if defined DO_IPBR_LIGHTS && (!(defined NOT_GLOWING_CHORUS_FLOWER))
                                            if (mat == 12487) return 39;
                                            #endif
                                        } else { // mat >= 12488
                                            if (mat == 12492) return 360;
                                        }
                                    }
                                }
                            } else { // mat >= 12493
                                if (mat < 12496) {
                                    if (mat < 12494) {
                                        if (mat == 12493) return 360;
                                    } else { // mat >= 12494
                                        if (mat < 12495) {
                                            if (mat == 12494) return 360;
                                        } else { // mat >= 12495
                                            if (mat == 12495) return 360;
                                        }
                                    }
                                } else { // mat >= 12496
                                    if (mat < 12497) {
                                        if (mat == 12496) return 21;
                                    } else { // mat >= 12497
                                        if (mat < 12498) {
                                            if (mat == 12497) return 21;
                                        } else { // mat >= 12498
                                            if (mat == 12498) return 21;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12499
                            if (mat < 12513) {
                                if (mat < 12505) {
                                    if (mat < 12500) {
                                        if (mat == 12499) return 21;
                                    } else { // mat >= 12500
                                        if (mat == 12504) return 21;
                                    }
                                } else { // mat >= 12505
                                    if (mat < 12507) {
                                        if (mat == 12506) return 29;
                                    } else { // mat >= 12507
                                        if (mat < 12511) {
                                            if (mat == 12510) return 37;
                                        } else { // mat >= 12511
                                            if (mat == 12512) return 37;
                                        }
                                    }
                                }
                            } else { // mat >= 12513
                                if (mat < 12516) {
                                    if (mat < 12514) {
                                        if (mat == 12513) return 37;
                                    } else { // mat >= 12514
                                        if (mat < 12515) {
                                            if (mat == 12514) return 37;
                                        } else { // mat >= 12515
                                            if (mat == 12515) return 37;
                                        }
                                    }
                                } else { // mat >= 12516
                                    if (mat < 12519) {
                                        if (mat == 12518) return 234;
                                    } else { // mat >= 12519
                                        if (mat < 12521) {
                                            if (mat == 12520) return 231;
                                        } else { // mat >= 12521
                                            if (mat == 12521) return 231;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else { // mat >= 12522
                    if (mat < 12544) {
                        if (mat < 12533) {
                            if (mat < 12527) {
                                if (mat < 12524) {
                                    if (mat < 12523) {
                                        if (mat == 12522) return 231;
                                    } else { // mat >= 12523
                                        if (mat == 12523) return 231;
                                    }
                                } else { // mat >= 12524
                                    if (mat < 12525) {
                                        if (mat == 12524) return 231;
                                    } else { // mat >= 12525
                                        if (mat < 12526) {
                                            if (mat == 12525) return 231;
                                        } else { // mat >= 12526
                                            if (mat == 12526) return 231;
                                        }
                                    }
                                }
                            } else { // mat >= 12527
                                if (mat < 12530) {
                                    if (mat < 12528) {
                                        if (mat == 12527) return 231;
                                    } else { // mat >= 12528
                                        if (mat < 12529) {
                                            if (mat == 12528) return 230;
                                        } else { // mat >= 12529
                                            if (mat == 12529) return 230;
                                        }
                                    }
                                } else { // mat >= 12530
                                    if (mat < 12531) {
                                        if (mat == 12530) return 230;
                                    } else { // mat >= 12531
                                        if (mat < 12532) {
                                            if (mat == 12531) return 230;
                                        } else { // mat >= 12532
                                            if (mat == 12532) return 231;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12533
                            if (mat < 12538) {
                                if (mat < 12535) {
                                    if (mat < 12534) {
                                        if (mat == 12533) return 231;
                                    } else { // mat >= 12534
                                        if (mat == 12534) return 231;
                                    }
                                } else { // mat >= 12535
                                    if (mat < 12536) {
                                        if (mat == 12535) return 231;
                                    } else { // mat >= 12536
                                        if (mat < 12537) {
                                            if (mat == 12536) return 231;
                                        } else { // mat >= 12537
                                            if (mat == 12537) return 231;
                                        }
                                    }
                                }
                            } else { // mat >= 12538
                                if (mat < 12541) {
                                    if (mat < 12539) {
                                        if (mat == 12538) return 231;
                                    } else { // mat >= 12539
                                        if (mat < 12540) {
                                            if (mat == 12539) return 231;
                                        } else { // mat >= 12540
                                            if (mat == 12540) return 231;
                                        }
                                    }
                                } else { // mat >= 12541
                                    if (mat < 12542) {
                                        if (mat == 12541) return 231;
                                    } else { // mat >= 12542
                                        if (mat < 12543) {
                                            if (mat == 12542) return 231;
                                        } else { // mat >= 12543
                                            if (mat == 12543) return 231;
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12544
                        if (mat < 12562) {
                            if (mat < 12549) {
                                if (mat < 12546) {
                                    if (mat < 12545) {
                                        if (mat == 12544) return 231;
                                    } else { // mat >= 12545
                                        if (mat == 12545) return 231;
                                    }
                                } else { // mat >= 12546
                                    if (mat < 12547) {
                                        if (mat == 12546) return 231;
                                    } else { // mat >= 12547
                                        if (mat < 12548) {
                                            if (mat == 12547) return 231;
                                        } else { // mat >= 12548
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12548) return 37;
                                            #endif
                                        }
                                    }
                                }
                            } else { // mat >= 12549
                                if (mat < 12552) {
                                    if (mat < 12550) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12549) return 37;
                                        #endif
                                    } else { // mat >= 12550
                                        if (mat < 12551) {
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12550) return 37;
                                            #endif
                                        } else { // mat >= 12551
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12551) return 37;
                                            #endif
                                        }
                                    }
                                } else { // mat >= 12552
                                    if (mat < 12557) {
                                        if (mat == 12556) return 231;
                                    } else { // mat >= 12557
                                        if (mat < 12561) {
                                            if (mat == 12560) return 15;
                                        } else { // mat >= 12561
                                            if (mat == 12561) return 15;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12562
                            if (mat < 12583) {
                                if (mat < 12564) {
                                    if (mat < 12563) {
                                        if (mat == 12562) return 15;
                                    } else { // mat >= 12563
                                        if (mat == 12563) return 15;
                                    }
                                } else { // mat >= 12564
                                    if (mat < 12581) {
                                        if (mat == 12580) return 234;
                                    } else { // mat >= 12581
                                        if (mat < 12582) {
                                            if (mat == 12581) return 234;
                                        } else { // mat >= 12582
                                            if (mat == 12582) return 234;
                                        }
                                    }
                                }
                            } else { // mat >= 12583
                                if (mat < 12586) {
                                    if (mat < 12584) {
                                        if (mat == 12583) return 234;
                                    } else { // mat >= 12584
                                        if (mat < 12585) {
                                            if (mat == 12584) return 232;
                                        } else { // mat >= 12585
                                            if (mat == 12585) return 232;
                                        }
                                    }
                                } else { // mat >= 12586
                                    if (mat < 12587) {
                                        if (mat == 12586) return 232;
                                    } else { // mat >= 12587
                                        if (mat < 12588) {
                                            if (mat == 12587) return 232;
                                        } else { // mat >= 12588
                                            if (mat == 12598) return 29;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else { // mat >= 12599
            if (mat < 12828) {
                if (mat < 12662) {
                    if (mat < 12631) {
                        if (mat < 12619) {
                            if (mat < 12611) {
                                if (mat < 12607) {
                                    if (mat < 12605) {
                                        if (mat == 12604) return 13;
                                    } else { // mat >= 12605
                                        if (mat == 12606) return 232;
                                    }
                                } else { // mat >= 12607
                                    if (mat < 12609) {
                                        if (mat == 12608) return 233;
                                    } else { // mat >= 12609
                                        if (mat < 12610) {
                                            if (mat == 12609) return 233;
                                        } else { // mat >= 12610
                                            if (mat == 12610) return 233;
                                        }
                                    }
                                }
                            } else { // mat >= 12611
                                if (mat < 12614) {
                                    if (mat < 12612) {
                                        if (mat == 12611) return 233;
                                    } else { // mat >= 12612
                                        if (mat < 12613) {
                                            if (mat == 12612) return 15;
                                        } else { // mat >= 12613
                                            if (mat == 12613) return 15;
                                        }
                                    }
                                } else { // mat >= 12614
                                    if (mat < 12615) {
                                        if (mat == 12614) return 15;
                                    } else { // mat >= 12615
                                        if (mat < 12616) {
                                            if (mat == 12615) return 15;
                                        } else { // mat >= 12616
                                            if (mat == 12618) return 30;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12619
                            if (mat < 12625) {
                                if (mat < 12622) {
                                    if (mat < 12621) {
                                        if (mat == 12620) return 30;
                                    } else { // mat >= 12621
                                        if (mat == 12621) return 30;
                                    }
                                } else { // mat >= 12622
                                    if (mat < 12623) {
                                        if (mat == 12622) return 30;
                                    } else { // mat >= 12623
                                        if (mat < 12624) {
                                            if (mat == 12623) return 30;
                                        } else { // mat >= 12624
                                            if (mat == 12624) return 174;
                                        }
                                    }
                                }
                            } else { // mat >= 12625
                                if (mat < 12628) {
                                    if (mat < 12626) {
                                        if (mat == 12625) return 174;
                                    } else { // mat >= 12626
                                        if (mat < 12627) {
                                            if (mat == 12626) return 174;
                                        } else { // mat >= 12627
                                            if (mat == 12627) return 174;
                                        }
                                    }
                                } else { // mat >= 12628
                                    if (mat < 12629) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12628) return 234;
                                        #endif
                                    } else { // mat >= 12629
                                        if (mat < 12630) {
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12629) return 234;
                                            #endif
                                        } else { // mat >= 12630
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12630) return 234;
                                            #endif
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12631
                        if (mat < 12645) {
                            if (mat < 12636) {
                                if (mat < 12633) {
                                    if (mat < 12632) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12631) return 234;
                                        #endif
                                    } else { // mat >= 12632
                                        if (mat == 12632) return 30;
                                    }
                                } else { // mat >= 12633
                                    if (mat < 12634) {
                                        if (mat == 12633) return 30;
                                    } else { // mat >= 12634
                                        if (mat < 12635) {
                                            if (mat == 12634) return 30;
                                        } else { // mat >= 12635
                                            if (mat == 12635) return 30;
                                        }
                                    }
                                }
                            } else { // mat >= 12636
                                if (mat < 12642) {
                                    if (mat < 12639) {
                                        if (mat == 12638) return 234;
                                    } else { // mat >= 12639
                                        if (mat < 12641) {
                                            if (mat == 12640) return 234;
                                        } else { // mat >= 12641
                                            if (mat == 12641) return 234;
                                        }
                                    }
                                } else { // mat >= 12642
                                    if (mat < 12643) {
                                        if (mat == 12642) return 234;
                                    } else { // mat >= 12643
                                        if (mat < 12644) {
                                            if (mat == 12643) return 234;
                                        } else { // mat >= 12644
                                            if (mat == 12644) return 231;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12645
                            if (mat < 12651) {
                                if (mat < 12647) {
                                    if (mat < 12646) {
                                        if (mat == 12645) return 231;
                                    } else { // mat >= 12646
                                        if (mat == 12646) return 231;
                                    }
                                } else { // mat >= 12647
                                    if (mat < 12648) {
                                        if (mat == 12647) return 231;
                                    } else { // mat >= 12648
                                        if (mat < 12649) {
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12648) return 235;
                                            #endif
                                        } else { // mat >= 12649
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12650) return 236;
                                            #endif
                                        }
                                    }
                                }
                            } else { // mat >= 12651
                                if (mat < 12655) {
                                    if (mat < 12653) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12652) return 236;
                                        #endif
                                    } else { // mat >= 12653
                                        if (mat < 12654) {
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12653) return 236;
                                            #endif
                                        } else { // mat >= 12654
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12654) return 236;
                                            #endif
                                        }
                                    }
                                } else { // mat >= 12655
                                    if (mat < 12656) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12655) return 236;
                                        #endif
                                    } else { // mat >= 12656
                                        if (mat < 12661) {
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12660) return 65;
                                            #endif
                                        } else { // mat >= 12661
                                            #if defined DO_IPBR_LIGHTS
                                            if (mat == 12661) return 65;
                                            #endif
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else { // mat >= 12662
                    if (mat < 12765) {
                        if (mat < 12711) {
                            if (mat < 12693) {
                                if (mat < 12664) {
                                    if (mat < 12663) {
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12662) return 65;
                                        #endif
                                    } else { // mat >= 12663
                                        #if defined DO_IPBR_LIGHTS
                                        if (mat == 12663) return 65;
                                        #endif
                                    }
                                } else { // mat >= 12664
                                    if (mat < 12689) {
                                        if (mat == 12688) return 21;
                                    } else { // mat >= 12689
                                        if (mat < 12691) {
                                            if (mat == 12690) return 29;
                                        } else { // mat >= 12691
                                            if (mat == 12692) return 243;
                                        }
                                    }
                                }
                            } else { // mat >= 12693
                                if (mat < 12696) {
                                    if (mat < 12694) {
                                        if (mat == 12693) return 243;
                                    } else { // mat >= 12694
                                        if (mat < 12695) {
                                            if (mat == 12694) return 243;
                                        } else { // mat >= 12695
                                            if (mat == 12695) return 243;
                                        }
                                    }
                                } else { // mat >= 12696
                                    if (mat < 12701) {
                                        if (mat == 12700) return 251;
                                    } else { // mat >= 12701
                                        if (mat < 12707) {
                                            if (mat == 12706) return 21;
                                        } else { // mat >= 12707
                                            if (mat == 12710) return 262;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12711
                            if (mat < 12724) {
                                if (mat < 12721) {
                                    if (mat < 12717) {
                                        if (mat == 12716) return 263;
                                    } else { // mat >= 12717
                                        if (mat == 12720) return 20;
                                    }
                                } else { // mat >= 12721
                                    if (mat < 12722) {
                                        if (mat == 12721) return 20;
                                    } else { // mat >= 12722
                                        if (mat < 12723) {
                                            if (mat == 12722) return 20;
                                        } else { // mat >= 12723
                                            if (mat == 12723) return 20;
                                        }
                                    }
                                }
                            } else { // mat >= 12724
                                if (mat < 12757) {
                                    if (mat < 12753) {
                                        if (mat == 12752) return 20;
                                    } else { // mat >= 12753
                                        if (mat < 12755) {
                                            if (mat == 12754) return 34;
                                        } else { // mat >= 12755
                                            if (mat == 12756) return 264;
                                        }
                                    }
                                } else { // mat >= 12757
                                    if (mat < 12759) {
                                        if (mat == 12758) return 65;
                                    } else { // mat >= 12759
                                        if (mat < 12761) {
                                            if (mat == 12760) return 263;
                                        } else { // mat >= 12761
                                            if (mat == 12764) return 2;
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 12765
                        if (mat < 12807) {
                            if (mat < 12801) {
                                if (mat < 12767) {
                                    if (mat < 12766) {
                                        if (mat == 12765) return 2;
                                    } else { // mat >= 12766
                                        if (mat == 12766) return 2;
                                    }
                                } else { // mat >= 12767
                                    if (mat < 12768) {
                                        if (mat == 12767) return 2;
                                    } else { // mat >= 12768
                                        if (mat < 12799) {
                                            if (mat == 12798) return 265;
                                        } else { // mat >= 12799
                                            if (mat == 12800) return 283;
                                        }
                                    }
                                }
                            } else { // mat >= 12801
                                if (mat < 12804) {
                                    if (mat < 12802) {
                                        if (mat == 12801) return 283;
                                    } else { // mat >= 12802
                                        if (mat < 12803) {
                                            if (mat == 12802) return 283;
                                        } else { // mat >= 12803
                                            if (mat == 12803) return 283;
                                        }
                                    }
                                } else { // mat >= 12804
                                    if (mat < 12805) {
                                        if (mat == 12804) return 40;
                                    } else { // mat >= 12805
                                        if (mat < 12806) {
                                            if (mat == 12805) return 40;
                                        } else { // mat >= 12806
                                            if (mat == 12806) return 40;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12807
                            if (mat < 12819) {
                                if (mat < 12813) {
                                    if (mat < 12808) {
                                        if (mat == 12807) return 40;
                                    } else { // mat >= 12808
                                        if (mat == 12812) return 12;
                                    }
                                } else { // mat >= 12813
                                    if (mat < 12817) {
                                        if (mat == 12816) return 284;
                                    } else { // mat >= 12817
                                        if (mat < 12818) {
                                            if (mat == 12817) return 284;
                                        } else { // mat >= 12818
                                            if (mat == 12818) return 284;
                                        }
                                    }
                                }
                            } else { // mat >= 12819
                                if (mat < 12825) {
                                    if (mat < 12820) {
                                        if (mat == 12819) return 284;
                                    } else { // mat >= 12820
                                        if (mat < 12821) {
                                            if (mat == 12820) return 36;
                                        } else { // mat >= 12821
                                            if (mat == 12824) return 285;
                                        }
                                    }
                                } else { // mat >= 12825
                                    if (mat < 12826) {
                                        if (mat == 12825) return 285;
                                    } else { // mat >= 12826
                                        if (mat < 12827) {
                                            if (mat == 12826) return 285;
                                        } else { // mat >= 12827
                                            if (mat == 12827) return 285;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else { // mat >= 12828
                if (mat < 32151) {
                    if (mat < 32129) {
                        if (mat < 12842) {
                            if (mat < 12833) {
                                if (mat < 12830) {
                                    if (mat < 12829) {
                                        if (mat == 12828) return 286;
                                    } else { // mat >= 12829
                                        if (mat == 12829) return 286;
                                    }
                                } else { // mat >= 12830
                                    if (mat < 12831) {
                                        if (mat == 12830) return 286;
                                    } else { // mat >= 12831
                                        if (mat < 12832) {
                                            if (mat == 12831) return 286;
                                        } else { // mat >= 12832
                                            if (mat == 12832) return 287;
                                        }
                                    }
                                }
                            } else { // mat >= 12833
                                if (mat < 12839) {
                                    if (mat < 12837) {
                                        if (mat == 12836) return 287;
                                    } else { // mat >= 12837
                                        if (mat < 12838) {
                                            if (mat == 12837) return 287;
                                        } else { // mat >= 12838
                                            if (mat == 12838) return 287;
                                        }
                                    }
                                } else { // mat >= 12839
                                    if (mat < 12840) {
                                        if (mat == 12839) return 287;
                                    } else { // mat >= 12840
                                        if (mat < 12841) {
                                            if (mat == 12840) return 16;
                                        } else { // mat >= 12841
                                            if (mat == 12841) return 16;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 12842
                            if (mat < 12855) {
                                if (mat < 12844) {
                                    if (mat < 12843) {
                                        if (mat == 12842) return 16;
                                    } else { // mat >= 12843
                                        if (mat == 12843) return 16;
                                    }
                                } else { // mat >= 12844
                                    if (mat < 12853) {
                                        if (mat == 12852) return 289;
                                    } else { // mat >= 12853
                                        if (mat < 12854) {
                                            if (mat == 12853) return 289;
                                        } else { // mat >= 12854
                                            if (mat == 12854) return 289;
                                        }
                                    }
                                }
                            } else { // mat >= 12855
                                if (mat < 12862) {
                                    if (mat < 12856) {
                                        if (mat == 12855) return 289;
                                    } else { // mat >= 12856
                                        if (mat < 12861) {
                                            if (mat == 12860) return 12;
                                        } else { // mat >= 12861
                                            if (mat == 12861) return 12;
                                        }
                                    }
                                } else { // mat >= 12862
                                    if (mat < 12863) {
                                        if (mat == 12862) return 12;
                                    } else { // mat >= 12863
                                        if (mat < 12864) {
                                            if (mat == 12863) return 12;
                                        } else { // mat >= 12864
                                            if (mat == 32128) return 30038;
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 32129
                        if (mat < 32140) {
                            if (mat < 32134) {
                                if (mat < 32131) {
                                    if (mat < 32130) {
                                        if (mat == 32129) return 30039;
                                    } else { // mat >= 32130
                                        if (mat == 32130) return 30041;
                                    }
                                } else { // mat >= 32131
                                    if (mat < 32132) {
                                        if (mat == 32131) return 30058;
                                    } else { // mat >= 32132
                                        if (mat < 32133) {
                                            if (mat == 32132) return 30059;
                                        } else { // mat >= 32133
                                            if (mat == 32133) return 30060;
                                        }
                                    }
                                }
                            } else { // mat >= 32134
                                if (mat < 32137) {
                                    if (mat < 32135) {
                                        if (mat == 32134) return 30061;
                                    } else { // mat >= 32135
                                        if (mat < 32136) {
                                            if (mat == 32135) return 30062;
                                        } else { // mat >= 32136
                                            if (mat == 32136) return 30063;
                                        }
                                    }
                                } else { // mat >= 32137
                                    if (mat < 32138) {
                                        if (mat == 32137) return 30064;
                                    } else { // mat >= 32138
                                        if (mat < 32139) {
                                            if (mat == 32138) return 30065;
                                        } else { // mat >= 32139
                                            if (mat == 32139) return 30066;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 32140
                            if (mat < 32145) {
                                if (mat < 32142) {
                                    if (mat < 32141) {
                                        if (mat == 32140) return 30067;
                                    } else { // mat >= 32141
                                        if (mat == 32141) return 30068;
                                    }
                                } else { // mat >= 32142
                                    if (mat < 32143) {
                                        if (mat == 32142) return 30069;
                                    } else { // mat >= 32143
                                        if (mat < 32144) {
                                            if (mat == 32143) return 30040;
                                        } else { // mat >= 32144
                                            if (mat == 32144) return 30042;
                                        }
                                    }
                                }
                            } else { // mat >= 32145
                                if (mat < 32148) {
                                    if (mat < 32146) {
                                        if (mat == 32145) return 30043;
                                    } else { // mat >= 32146
                                        if (mat < 32147) {
                                            if (mat == 32146) return 30044;
                                        } else { // mat >= 32147
                                            if (mat == 32147) return 30045;
                                        }
                                    }
                                } else { // mat >= 32148
                                    if (mat < 32149) {
                                        if (mat == 32148) return 30046;
                                    } else { // mat >= 32149
                                        if (mat < 32150) {
                                            if (mat == 32149) return 30047;
                                        } else { // mat >= 32150
                                            if (mat == 32150) return 30048;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else { // mat >= 32151
                    if (mat < 32181) {
                        if (mat < 32163) {
                            if (mat < 32156) {
                                if (mat < 32153) {
                                    if (mat < 32152) {
                                        if (mat == 32151) return 30049;
                                    } else { // mat >= 32152
                                        if (mat == 32152) return 30050;
                                    }
                                } else { // mat >= 32153
                                    if (mat < 32154) {
                                        if (mat == 32153) return 30051;
                                    } else { // mat >= 32154
                                        if (mat < 32155) {
                                            if (mat == 32154) return 30052;
                                        } else { // mat >= 32155
                                            if (mat == 32155) return 30053;
                                        }
                                    }
                                }
                            } else { // mat >= 32156
                                if (mat < 32159) {
                                    if (mat < 32157) {
                                        if (mat == 32156) return 30054;
                                    } else { // mat >= 32157
                                        if (mat < 32158) {
                                            if (mat == 32157) return 30055;
                                        } else { // mat >= 32158
                                            if (mat == 32158) return 30056;
                                        }
                                    }
                                } else { // mat >= 32159
                                    if (mat < 32160) {
                                        if (mat == 32159) return 30057;
                                    } else { // mat >= 32160
                                        if (mat < 32161) {
                                            if (mat == 32160) return 258;
                                        } else { // mat >= 32161
                                            if (mat == 32162) return 257;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 32163
                            if (mat < 32173) {
                                if (mat < 32167) {
                                    if (mat < 32165) {
                                        if (mat == 32164) return 261;
                                    } else { // mat >= 32165
                                        if (mat == 32166) return 255;
                                    }
                                } else { // mat >= 32167
                                    if (mat < 32169) {
                                        if (mat == 32168) return 254;
                                    } else { // mat >= 32169
                                        if (mat < 32171) {
                                            if (mat == 32170) return 256;
                                        } else { // mat >= 32171
                                            if (mat == 32172) return 259;
                                        }
                                    }
                                }
                            } else { // mat >= 32173
                                if (mat < 32178) {
                                    if (mat < 32175) {
                                        if (mat == 32174) return 253;
                                    } else { // mat >= 32175
                                        if (mat < 32177) {
                                            if (mat == 32176) return 249;
                                        } else { // mat >= 32177
                                            if (mat == 32177) return 248;
                                        }
                                    }
                                } else { // mat >= 32178
                                    if (mat < 32179) {
                                        if (mat == 32178) return 252;
                                    } else { // mat >= 32179
                                        if (mat < 32180) {
                                            if (mat == 32179) return 246;
                                        } else { // mat >= 32180
                                            if (mat == 32180) return 245;
                                        }
                                    }
                                }
                            }
                        }
                    } else { // mat >= 32181
                        if (mat < 32209) {
                            if (mat < 32201) {
                                if (mat < 32183) {
                                    if (mat < 32182) {
                                        if (mat == 32181) return 247;
                                    } else { // mat >= 32182
                                        if (mat == 32182) return 250;
                                    }
                                } else { // mat >= 32183
                                    if (mat < 32184) {
                                        if (mat == 32183) return 244;
                                    } else { // mat >= 32184
                                        if (mat < 32195) {
                                            if (mat == 32194) return 29;
                                        } else { // mat >= 32195
                                            if (mat == 32200) return 260;
                                        }
                                    }
                                }
                            } else { // mat >= 32201
                                if (mat < 32206) {
                                    if (mat < 32203) {
                                        if (mat == 32202) return 251;
                                    } else { // mat >= 32203
                                        if (mat < 32205) {
                                            if (mat == 32204) return 30073;
                                        } else { // mat >= 32205
                                            if (mat == 32205) return 30073;
                                        }
                                    }
                                } else { // mat >= 32206
                                    if (mat < 32207) {
                                        if (mat == 32206) return 30073;
                                    } else { // mat >= 32207
                                        if (mat < 32208) {
                                            if (mat == 32207) return 30073;
                                        } else { // mat >= 32208
                                            if (mat == 32208) return 30074;
                                        }
                                    }
                                }
                            }
                        } else { // mat >= 32209
                            if (mat < 32214) {
                                if (mat < 32211) {
                                    if (mat < 32210) {
                                        if (mat == 32209) return 30074;
                                    } else { // mat >= 32210
                                        if (mat == 32210) return 30074;
                                    }
                                } else { // mat >= 32211
                                    if (mat < 32212) {
                                        if (mat == 32211) return 30074;
                                    } else { // mat >= 32212
                                        if (mat < 32213) {
                                            if (mat == 32212) return 36;
                                        } else { // mat >= 32213
                                            if (mat == 32213) return 36;
                                        }
                                    }
                                }
                            } else { // mat >= 32214
                                if (mat < 32217) {
                                    if (mat < 32215) {
                                        if (mat == 32214) return 36;
                                    } else { // mat >= 32215
                                        if (mat < 32216) {
                                            if (mat == 32215) return 36;
                                        } else { // mat >= 32216
                                            if (mat == 32216) return 288;
                                        }
                                    }
                                } else { // mat >= 32217
                                    if (mat < 32218) {
                                        if (mat == 32217) return 288;
                                    } else { // mat >= 32218
                                        if (mat < 32219) {
                                            if (mat == 32218) return 288;
                                        } else { // mat >= 32219
                                            if (mat == 32219) return 288;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (mat < 10604) {
            if (mat < 10396) {
                if (mat < 10300) {
                    if (mat < 10228) {
                        if (mat < 10076) {
                            if (mat == 10056) return  14; // Lava Cauldron
                            if (mat == 10068 || mat == 10070) return  13; // Lava
                            if (mat == 10072) return   5; // Fire
                        } else {
                            if (mat == 10076) return  27; // Soul Fire
                            #if defined GLOWING_NETHER_TREES && defined DO_IPBR_LIGHTS
                            if (mat == 10216) return  62; // Crimson Stem, Crimson Hyphae
                            if (mat == 10224) return  63; // Warped Stem, Warped Hyphae
                            #endif
                        }
                    } else {
                        if (mat < 10276) {
                            if (mat == 10228) return 30055; // Bedrock
                            #if defined GLOWING_ORE_ANCIENTDEBRIS && defined DO_IPBR_LIGHTS
                            if (mat == 10252) return  52; // Ancient Debris
                            #endif
                            #if defined GLOWING_RAW_BLOCKS && defined DO_IPBR_LIGHTS
                            if (mat == 10268) return 43; // Raw Iron Block
                            #endif
                            #if defined GLOWING_ORE_IRON && defined DO_IPBR_LIGHTS
                            if (mat == 10272) return  43; // Iron Ore
                            #endif
                        } else {
                            #if defined GLOWING_ORE_IRON && defined DO_IPBR_LIGHTS
                            if (mat == 10276) return  43; // Deepslate Iron Ore
                            #endif
                            #if defined GLOWING_RAW_BLOCKS && defined DO_IPBR_LIGHTS
                            if (mat == 10280) return 45; // Raw Coper Block
                            #endif
                            #if defined GLOWING_ORE_COPPER && defined DO_IPBR_LIGHTS
                            if (mat == 10284) return  45; // Copper Ore
                            if (mat == 10288) return  45; // Deepslate Copper Ore
                            #endif
                            #if defined GLOWING_RAW_BLOCKS && defined DO_IPBR_LIGHTS
                            if (mat == 10296) return 44; // Raw Gold Block
                            #endif
                        }
                    }
                } else {
                    if (mat < 10340) {
                        if (mat < 10320) {
                            #if defined GLOWING_ORE_GOLD && defined DO_IPBR_LIGHTS
                            if (mat == 10300) return  44; // Gold Ore
                            if (mat == 10302) return  44; // Deepslate Gold Ore
                            #endif
                            #if defined GLOWING_ORE_MODDED && defined DO_IPBR_LIGHTS
                            if (mat == 10304) return  39; // Modded Pink Ore
                            if (mat == 10306) return  36; // Modded Purple Ore
                            #endif
                            #if defined GLOWING_ORE_NETHERGOLD && defined DO_IPBR_LIGHTS
                            if (mat == 10308) return  50; // Nether Gold Ore
                            #endif
                        } else {
                            #if defined GLOWING_ORE_DIAMOND && defined DO_IPBR_LIGHTS
                            if (mat == 10320) return  48; // Diamond Ore
                            if (mat == 10324) return  48; // Deepslate Diamond Ore
                            #endif
                            if (mat == 10332) return  36; // Amethyst Cluster, Amethyst Buds
                            #if defined GLOWING_EMERALD_BLOCK && defined DO_IPBR_LIGHTS
                            if (mat == 10336) return 47; // Emerald Block
                            #endif
                        }
                    } else {
                        if (mat < 10356) {
                            #if defined GLOWING_ORE_EMERALD && defined DO_IPBR_LIGHTS
                            if (mat == 10340) return  47; // Emerald Ore
                            if (mat == 10344) return  47; // Deepslate Emerald Ore
                            #endif
                            #if defined EMISSIVE_LAPIS_BLOCK && defined DO_IPBR_LIGHTS
                            if (mat == 10352) return  42; // Lapis Block
                            #endif
                        } else {
                            #if defined GLOWING_ORE_LAPIS && defined DO_IPBR_LIGHTS
                            if (mat == 10356) return  46; // Lapis Ore
                            if (mat == 10360) return  46; // Deepslate Lapis Ore
                            #endif
                            #if defined GLOWING_ORE_NETHERQUARTZ && defined DO_IPBR_LIGHTS
                            if (mat == 10368) return  49; // Nether Quartz Ore
                            #endif
                        }
                    }
                }
            } else {
                if (mat < 10516) {
                    if (mat < 10476) {
                        if (mat < 10448) {
                            if (mat == 10396) return  11; // Jack o'Lantern
                            if (mat == 10404) return   6; // Sea Pickle:Waterlogged
                            if (mat == 10412) return  10; // Glowstone
                        } else {
                            if (mat == 10448) return  18; // Sea Lantern
                            if (mat == 10452) return  37; // Magma Block
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10456) return  60; // Command Block
                            #endif
                        }
                    } else {
                        if (mat < 10500) {
                            if (mat == 10476) return  26; // Crying Obsidian
                            #if defined GLOWING_ORE_GILDEDBLACKSTONE && defined DO_IPBR_LIGHTS
                            if (mat == 10484) return  51; // Gilded Blackstone
                            #endif
                            if (mat == 10496) return   2; // Torch
                        } else {
                            if (mat == 10500) return   3; // End Rod
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10508) return  39; // Chorus Flower:Alive
                            if (mat == 10512) return  39; // Chorus Flower:Dead
                            #endif
                        }
                    }
                } else {
                    if (mat < 10564) {
                        if (mat < 10548) {
                            if (mat == 10516) return  21; // Furnace:Lit
                            if (mat == 10528) return  28; // Soul Torch
                            if (mat == 10544) return  34; // Glow Lichen
                        } else {
                            if (mat == 10548) return  33; // Enchanting Table
                            if (mat == 10556) return  58; // End Portal Frame:Active
                            if (mat == 10560 || mat == 10562) return  12; // Lantern
                        }
                    } else {
                        if (mat < 10580) {
                            if (mat == 10564) return  29; // Soul Lantern
                            #if defined EMISSIVE_DRAGON_EGG && defined DO_IPBR_LIGHTS
                            if (mat == 10572) return  38; // Dragon Egg
                            #endif
                            if (mat == 10576) return  22; // Smoker:Lit
                        } else {
                            if (mat == 10580) return  23; // Blast Furnace:Lit
                            if (mat == 10592) return  17; // Respawn Anchor:Lit
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10596) return  66; // Redstone Wire:Lit
                            #endif
                        }
                    }
                }
            }
        } else {
            if (mat < 10788) {
                if (mat < 10656) {
                    if (mat < 10632) {
                        if (mat < 10616) {
                            if (mat == 10604) return  35; // Redstone Torch
                            #if defined EMISSIVE_REDSTONE_BLOCK && defined DO_IPBR_LIGHTS
                            if (mat == 10608) return  41; // Redstone Block
                            #endif
                            #if defined GLOWING_ORE_REDSTONE && defined DO_IPBR_LIGHTS
                            if (mat == 10612) return  32; // Redstone Ore:Unlit
                            #endif
                        } else {
                            if (mat == 10616) return  31; // Redstone Ore:Lit
                            #if defined GLOWING_ORE_REDSTONE && defined DO_IPBR_LIGHTS
                            if (mat == 10620) return  32; // Deepslate Redstone Ore:Unlit
                            #endif
                            if (mat == 10624) return  31; // Deepslate Redstone Ore:Lit
                        }
                    } else {
                        if (mat < 10646) {
                            if (mat == 10632) return  20; // Cave Vines:With Glow Berries
                            if (mat == 10640) return  16; // Redstone Lamp:Lit
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10644) return  67; // Repeater:Lit, Comparator:Lit
                            #endif
                        } else {
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10646) return  66; // Comparator:Unlit:Subtract
                            #endif
                            if (mat == 10648) return  19; // Shroomlight
                            if (mat == 10652) return  15; // Campfire:Lit
                        }
                    }
                } else {
                    if (mat < 10704) {
                        if (mat < 10688) {
                            if (mat == 10656) return  30; // Soul Campfire:Lit
                            if (mat == 10680) return   7; // Ochre Froglight
                            if (mat == 10684) return   8; // Verdant Froglight
                        } else {
                            if (mat == 10688) return   9; // Pearlescent Froglight
                            if (mat == 10696) return  57; // Sculk, Sculk Catalyst
                            if (mat == 10698) return  57; // Sculk Vein, Sculk Sensor:Unlit
                            if (mat == 10700) return  57; // Sculk Shrieker
                        }
                    } else {
                        if (mat < 10776) {
                            if (mat == 10704) return  57; // Sculk Sensor:Lit
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10708) return  53; // Spawner
                            if (mat == 10736) return  64; // Structure Block, Jigsaw Block, Test Block, Test Instance Block
                            #endif
                        } else {
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10776) return  61; // Warped Fungus, Crimson Fungus
                            if (mat == 10780) return  61; // Potted Warped Fungus, Potted Crimson Fungus
                            #endif
                            if (mat == 10784) return  36; // Calibrated Sculk Sensor:Unlit
                        }
                    }
                }
            } else {
                if (mat < 10980) {
                    if (mat < 10876) {
                        if (mat < 10856) {
                            if (mat == 10788) return  36; // Calibrated Sculk Sensor:Lit
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10836) return  40; // Brewing Stand
                            #endif
                            if (mat == 10852) return  55; // Copper Bulb:BrighterOnes:Lit
                        } else {
                            if (mat == 10856) return  56; // Copper Bulb:DimmerOnes:Lit
                            if (mat == 10868) return  54; // Trial Spawner:NotOminous:Active, Vault:NotOminous:Active
                            if (mat == 10872) return  68; // Vault:Inactive
                        }
                    } else {
                        if (mat < 10948) {
                            if (mat == 10876) return  69; // Trial Spawner:Ominous:Active, Vault:Ominous:Active
                            #ifdef DO_IPBR_LIGHTS
                            if (mat == 10884) return  65; // Weeping Vines Plant
                            #endif
                            #ifndef COLORED_CANDLE_LIGHT
                            if (mat >= 10900 && mat <= 10922) return 24; // Standard Candles:Lit
                            #else
                            if (mat == 10900) return  24; // Standard Candles:Lit
                            if (mat == 10902) return  70; // Red Candles:Lit
                            if (mat == 10904) return  71; // Orange Candles:Lit
                            if (mat == 10906) return  72; // Yellow Candles:Lit
                            if (mat == 10908) return  73; // Lime Candles:Lit
                            if (mat == 10910) return  74; // Green Candles:Lit
                            if (mat == 10912) return  75; // Cyan Candles:Lit
                            if (mat == 10914) return  76; // Light Blue Candles:Lit
                            if (mat == 10916) return  77; // Blue Candles:Lit
                            if (mat == 10918) return  78; // Purple Candles:Lit
                            if (mat == 10920) return  79; // Magenta Candles:Lit
                            if (mat == 10922) return  80; // Pink Candles:Lit
                            #endif
                        } else {
                            if (mat == 10948) return  82; // Creaking Heart: Active
                            if (mat == 10972) return  83; // Firefly Bush
                            if (mat == 10976) return  81; // Open Eyeblossom
                        }
                    }
                } else {
                    if (mat < 31000) {
                        if (mat < 30012) {
                            if (mat < 21014) {
                                if (mat == 10980) return  81; // Potted Open Eyeblossom
                                if (abs(mat - 10986) <= 2) return 84; // Copper Torch, Copper Lantern
                                if (mat == 21000) return  97; // White Modded Blocks - Also used For Black / Gray
                                if (mat == 21002) return  43; // Brown Modded Blocks
                                if (mat == 21004) return  70; // Red Modded Blocks
                                if (mat == 21006) return  71; // Orange Modded Blocks
                                if (mat == 21008) return  72; // Yellow Modded Blocks
                                if (mat == 21010) return  73; // Lime Modded Blocks
                                if (mat == 21012) return  74; // Green Modded Blocks
                            } else {
                                if (mat == 21014) return  75; // Cyan Modded Blocks
                                if (mat == 21016) return  76; // Light Blue Modded Blocks
                                if (mat == 21018) return  77; // Blue Modded Blocks
                                if (mat == 21020) return  78; // Purple Modded Blocks
                                if (mat == 21022) return  79; // Magenta Modded Blocks
                                if (mat == 21024) return  80; // Pink Modded Blocks
                                if (mat == 30008) return 30054; // Tinted Glass
                            }
                        } else {
                            if (mat == 30012) return 30013; // Slime Block
                            if (mat == 30016) return 30001; // Honey Block
                            if (mat == 30020) return  25; // Nether Portal
                        }
                    } else {
                        if (mat < 32008) {
                            if (mat >= 31000 && mat < 32000) return 30000 + (mat - 31000) / 2; // Stained Glass+
                            if (mat == 32004) return 30016; // Ice
                        } else {
                            if (mat == 32008) return 30017; // Glass
                            if (mat == 32012) return 30018; // Glass Pane
                            if (mat == 32016) return   4; // Beacon
                        }
                    }
                }
            }
        }

        return 1; // Standard Block
    }

    #if defined SHADOW && defined VERTEX_SHADER
        void UpdateVoxelMap(int mat, vec3 normal) {
            if (mat == 32000 // Water
                || mat < 30000 && mat % 2 == 1 // Non-solid terrain
                || mat < 10000 // Block entities or unknown blocks that we treat as non-solid
            ) return;

            vec3 modelPos = gl_Vertex.xyz + at_midBlock.xyz / 64.0;
            vec3 viewPos = transform(gl_ModelViewMatrix, modelPos);
            vec3 scenePos = transform(shadowModelViewInverse, viewPos);
            #ifdef WORLD_CURVATURE
                scenePos.y += doWorldCurvature(scenePos.xz);
            #endif
            vec3 voxelPos = SceneToVoxel(scenePos);

            //#define OPTIMIZATION_ACT_HALF_RATE_VOXELS
            #ifdef OPTIMIZATION_ACT_HALF_RATE_VOXELS
                if (int(framemod2) == 0) {
                    if (scenePos.z > 0.0) return;
                } else {
                    if (scenePos.z < 0.0) return;
                }
            #endif

            #if defined GBUFFERS_COLORWHEEL || defined SHADOW_COLORWHEEL
                bool isEligible = true;
            #else
                bool isEligible = any(equal(ivec4(renderStage), ivec4(
                    MC_RENDER_STAGE_TERRAIN_SOLID,
                    MC_RENDER_STAGE_TERRAIN_TRANSLUCENT,
                    MC_RENDER_STAGE_TERRAIN_CUTOUT,
                    MC_RENDER_STAGE_TERRAIN_CUTOUT_MIPPED)));
            #endif

            if (isEligible && CheckInsideVoxelVolume(voxelPos)) {
                int voxelData = GetVoxelIDs(mat);

                #if defined GBUFFERS_COLORWHEEL || defined SHADOW_COLORWHEEL
                    voxelData = voxelData | 32768;
                #endif
                
                imageStore(voxel_img, ivec3(voxelPos), uvec4(voxelData, 0u, 0u, 0u));
            }
        }
    #endif

#endif //INCLUDE_VOXELIZATION
#endif
