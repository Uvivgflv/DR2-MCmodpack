#ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
    vec3 fireSpecialLightColorGradient = mix(vec3(2.0, 0.87, 0.27) * 3.8, mix(vec3(2.5, 0.87, 0.27), vec3(0.5, 1.9, 2.1) * 3.8, 0.3), inSoulValley);
    vec3 torchBlockSpecialLightColor = mix(vec3(2.0, 0.87, 0.27) * 3.8, mix(vec3(2.5, 0.87, 0.27), vec3(0.5, 1.9, 2.1) * 3.8, 0.5), inSoulValley);
    vec3 lanternBlockSpecialLightColor = mix(vec3(2.0, 0.87, 0.27) * 3.8, mix(vec3(2.5, 0.87, 0.27), vec3(0.5, 1.9, 2.1) * 3.8, 0.4), inSoulValley);
	vec3 fireSpecialLightColor = mix(vec3(2.25, 0.83, 0.27) * 3.7, vec3(0.5, 1.9, 2.1) * 3.8, inSoulValley);
	vec4 lavaSpecialLightColor = vec4(mix(vec3(3.25, 0.9, 0.2) * 3.9, vec3(0.5, 1.9, 2.1) * 4.0, inSoulValley), 0.8);
	vec4 brewingStandSpecialLightColor = vec4(mix(vec3(2.5, 1.2, 0.4) * 0.1, vec3(0.5, 1.9, 2.1) * 0.1, inSoulValley), 0.1);
#elif defined PURPLE_END_FIRE_INTERNAL
    vec3 fireSpecialLightColor = vec3(0.6, 0.3, 2.4) * 3.8;
	vec3 fireSpecialLightColorGradient = mix(vec3(2.0, 0.77, 0.17) * 3.8, fireSpecialLightColor, clamp01(0.7 + max(0.0, clamp01(sin(pow2(texture2DLod(noisetex, vec2(frameTimeCounter * 0.01), 0.0).r))))));
	vec3 torchBlockSpecialLightColor = mix(vec3(2.0, 0.87, 0.27), fireSpecialLightColor, clamp01(0.75)); // Super odd intel nan fix
	vec3 lanternBlockSpecialLightColor = fireSpecialLightColor;
	vec4 lavaSpecialLightColor = vec4(vec3(1.0, 0.5, 4.0) * 4.0, 0.8);
	vec4 brewingStandSpecialLightColor = vec4(vec3(0.10, 0.05, 0.4) * 0.4, 0.1);
#else
	vec3 fireSpecialLightColor = vec3(2.25, 0.83, 0.27) * 3.7;
	vec3 fireSpecialLightColorGradient = fireSpecialLightColor;
	vec3 torchBlockSpecialLightColor = fireSpecialLightColor;
	vec3 lanternBlockSpecialLightColor = fireSpecialLightColor;
	vec4 lavaSpecialLightColor = vec4(vec3(3.25, 0.9, 0.2) * 3.9, 0.8);
	vec4 brewingStandSpecialLightColor = vec4(vec3(2.5, 1.2, 0.4) * 0.1, 0.1);
#endif
#if defined NETHER && defined BIOME_COLORED_NETHER_PORTALS
	vec3 netherPortalSpecialLightColor = normalize(netherColor) * 2.0;
	vec3 respawnAnchorSpecialLightColor = normalize(netherColor) * 2.0;
#else
	vec3 netherPortalSpecialLightColor = vec3(1.8, 0.4, 2.2) * 0.8;
	vec3 respawnAnchorSpecialLightColor = vec3(1.7, 0.9, 0.4) * 2.0;
#endif
vec3 redstoneSpecialLightColor = vec3(4.0, 0.1, 0.1);
vec4 soulFireSpecialColor = vec4(vec3(0.3, 2.0, 2.2) * 1.0, 0.3);
float candleColorMult = 2.0;
float candleExtraLight = 0.004;
#if END_ROD_COLOR_PROFILE == 1
	vec3 endRodSpacialColor = vec3(END_ROD_R, END_ROD_G, END_ROD_B) / 255 * END_ROD_I;
#elif (END_ROD_COLOR_PROFILE == 2 || (END_ROD_COLOR_PROFILE == 3 && defined OVERWORLD)) && COLORED_LIGHTING_INTERNAL > 0
	vec3 endRodSpacialColor = vec3(pow2(getRainbowColor(vec2(0.0), float(END_ROD_RAINBOW_ANIMATE))));
#else
	#ifdef END
		vec3 endRodSpacialColor = vec3(1.25, 0.5, 1.25); // End Rod in the End dimension
	#else
		vec3 endRodSpacialColor = vec3(1.0, 1.0, 1.0);
	#endif
#endif
#ifdef EMISSIVE_ENCHANTING_TABLE
	vec3 enchantingTableSpecialLightColor = vec3(0.5, 2.0, 2.0) * 0.4;
#else
	vec3 enchantingTableSpecialLightColor = vec3(1.4, 1.1, 0.5);
#endif


vec4 ariaMushroomBlocklightColor = vec4(vec3(0.7, 0.5, 1.0), 0.0);

//vec3 bloodcapColor = vec3(1.0, 0.25, 0.55) * 1.2;
//#if GLOWING_BLOODCAP_MUSHROOM == 0
//    vec4 bloodcapLightColor = vec4(bloodcapColor, 0.0);
//#elif GLOWING_BLOODCAP_MUSHROOM == 1
//    vec4 bloodcapLightColor = vec4(bloodcapColor, 0.05);
//#elif GLOWING_BLOODCAP_MUSHROOM == 2
//    vec4 bloodcapLightColor = vec4(bloodcapColor, 0.1);
//#elif GLOWING_BLOODCAP_MUSHROOM == 3
//    vec4 bloodcapLightColor = vec4(bloodcapColor, 0.2);
//#endif

// TODO fix this and allow brightness of bloodcap mushroom to be varied

float glowlightColorMult = 2.0;
float glowlightExtraLight = GLOW_LIGHT_EXTRA_LIGHT;

vec3 speclightColor = vec3(SPECLIGHT_R, SPECLIGHT_G, SPECLIGHT_B) / 255;

#ifdef MOD_NETHEREXP
    vec3 warpedFungusColor = vec3(1.0, 0.5, 2.0);
#else
    vec3 warpedFungusColor = vec3(3.0, 0.9, 0.2);
#endif

void AddSpecialLightDetail(inout vec3 light, vec3 albedo, float emission) {
	vec3 lightM = max(light, vec3(0.0));
	lightM /= (0.2 + 0.8 * GetLuminance(lightM));
	lightM *= (1.0 / (1.0 + emission)) * 0.22;
	light *= 0.9;
	light += pow2(lightM / (albedo + 0.1));
}
vec4 GetSpecialBlocklightColor(int mat) {
	/* Please note that these colors do not determine the intensity of the
	final light. Instead; higher values of color change how long the color
	will travel, and also how dominant it will be next to other colors.*/
	/* Additional feature: An alpha value bigger than 0 will make that
	block cast extra light regardless of the vanilla lightmap. Use this
	with caution though because our floodfill isn't as accurate as vanilla.*/

    if (mat >= 100 && mat < 356) {
        if (mat < 228) {
            if (mat < 164) {
                if (mat < 132) {
                    if (mat < 116) {
                        if (mat < 108) {
                            if (mat < 104) {
                                if (mat < 102) {
                                    if (mat < 101) {
        
                                    } else /*if (mat < 102)*/ {
        
                                    }
                                } else /*if (mat < 104)*/ {
                                    if (mat < 103) {
        
                                    } else /*if (mat < 104)*/ {
        
                                    }
                                }
                            } else /*if (mat < 108)*/ {
                                if (mat < 106) {
                                    if (mat < 105) {
        
                                    } else /*if (mat < 106)*/ {
        
                                    }
                                } else /*if (mat < 108)*/ {
                                    if (mat < 107) {
        
                                    } else /*if (mat < 108)*/ {
        
                                    }
                                }
                            }
                        } else /*if (mat < 116)*/ {
                            if (mat < 112) {
                                if (mat < 110) {
                                    if (mat < 109) {
        
                                    } else /*if (mat < 110)*/ {
        
                                    }
                                } else /*if (mat < 112)*/ {
                                    if (mat < 111) {
        
                                    } else /*if (mat < 112)*/ {
        
                                    }
                                }
                            } else /*if (mat < 116)*/ {
                                if (mat < 114) {
                                    if (mat < 113) {
        
                                    } else /*if (mat < 114)*/ {
        
                                    }
                                } else /*if (mat < 116)*/ {
                                    if (mat < 115) {
        
                                    } else /*if (mat < 116)*/ {
        
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 132)*/ {
                        if (mat < 124) {
                            if (mat < 120) {
                                if (mat < 118) {
                                    if (mat < 117) {
        
                                    } else /*if (mat < 118)*/ {
        
                                    }
                                } else /*if (mat < 120)*/ {
                                    if (mat < 119) {
        
                                    } else /*if (mat < 120)*/ {
        
                                    }
                                }
                            } else /*if (mat < 124)*/ {
                                if (mat < 122) {
                                    if (mat < 121) {
        
                                    } else /*if (mat < 122)*/ {
        
                                    }
                                } else /*if (mat < 124)*/ {
                                    if (mat < 123) {
        
                                    } else /*if (mat < 124)*/ {
        
                                    }
                                }
                            }
                        } else /*if (mat < 132)*/ {
                            if (mat < 128) {
                                if (mat < 126) {
                                    if (mat < 125) {
        
                                    } else /*if (mat < 126)*/ {
        
                                    }
                                } else /*if (mat < 128)*/ {
                                    if (mat < 127) {
        
                                    } else /*if (mat < 128)*/ {
        
                                    }
                                }
                            } else /*if (mat < 132)*/ {
                                if (mat < 130) {
                                    if (mat < 129) {
        
                                    } else /*if (mat < 130)*/ {
        
                                    }
                                } else /*if (mat < 132)*/ {
                                    if (mat < 131) {
        
                                    } else /*if (mat < 132)*/ {
        
                                    }
                                }
                            }
                        }
                    }
                } else /*if (mat < 164)*/ {
                    if (mat < 148) {
                        if (mat < 140) {
                            if (mat < 136) {
                                if (mat < 134) {
                                    if (mat < 133) {
        
                                    } else /*if (mat < 134)*/ {
        
                                    }
                                } else /*if (mat < 136)*/ {
                                    if (mat < 135) {
        
                                    } else /*if (mat < 136)*/ {
        
                                    }
                                }
                            } else /*if (mat < 140)*/ {
                                if (mat < 138) {
                                    if (mat < 137) {
        
                                    } else /*if (mat < 138)*/ {
        
                                    }
                                } else /*if (mat < 140)*/ {
                                    if (mat < 139) {
        
                                    } else /*if (mat < 140)*/ {
        
                                    }
                                }
                            }
                        } else /*if (mat < 148)*/ {
                            if (mat < 144) {
                                if (mat < 142) {
                                    if (mat < 141) {
        
                                    } else /*if (mat < 142)*/ {
        
                                    }
                                } else /*if (mat < 144)*/ {
                                    if (mat < 143) {
        
                                    } else /*if (mat < 144)*/ {
        
                                    }
                                }
                            } else /*if (mat < 148)*/ {
                                if (mat < 146) {
                                    if (mat < 145) {
        
                                    } else /*if (mat < 146)*/ {
        
                                    }
                                } else /*if (mat < 148)*/ {
                                    if (mat < 147) {
        
                                    } else /*if (mat < 148)*/ {
        
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 164)*/ {
                        if (mat < 156) {
                            if (mat < 152) {
                                if (mat < 150) {
                                    if (mat < 149) {
        
                                    } else /*if (mat < 150)*/ {
        
                                    }
                                } else /*if (mat < 152)*/ {
                                    if (mat < 151) {
        
                                    } else /*if (mat < 152)*/ {
        
                                    }
                                }
                            } else /*if (mat < 156)*/ {
                                if (mat < 154) {
                                    if (mat < 153) {
        
                                    } else /*if (mat < 154)*/ {
        
                                    }
                                } else /*if (mat < 156)*/ {
                                    if (mat < 155) {
        
                                    } else /*if (mat < 156)*/ {
                                        return vec4(vec3(2.5, 1.1, 1.6) * 0.3, 0.1);
                                    }
                                }
                            }
                        } else /*if (mat < 164)*/ {
                            if (mat < 160) {
                                if (mat < 158) {
                                    if (mat < 157) {
                                        return vec4(vec3(1.8, 0.4, 2.2) * 0.4, 0.025);
                                    } else /*if (mat < 158)*/ {
                                        return vec4(vec3(0.3), 0.05);
                                    }
                                } else /*if (mat < 160)*/ {
                                    if (mat < 159) {
                                        return vec4(vec3(0.3, 0.75, 1.0) * 0.8, 0.15);
                                    } else /*if (mat < 160)*/ {
                                        return vec4(1.00, 0.27, 0.46, 0.05);
                                    }
                                }
                            } else /*if (mat < 164)*/ {
                                if (mat < 162) {
                                    if (mat < 161) {
                                        return vec4(vec3(0.5, 0.0, 0.0), 0.01);
                                    } else /*if (mat < 162)*/ {
                                        return vec4(vec3(1.0, 1.0, 0.6) * 0.4, 0.0);
                                    }
                                } else /*if (mat < 164)*/ {
                                    if (mat < 163) {
                                        return vec4(vec3(0.0, 0.0, 1.0) * 0.5, 0.0);
                                    } else /*if (mat < 164)*/ {
                                        return vec4(vec3(0.5, 1.2, 1.0) * 0.7, 0.1);
                                    }
                                }
                            }
                        }
                    }
                }
            } else /*if (mat < 228)*/ {
                if (mat < 196) {
                    if (mat < 180) {
                        if (mat < 172) {
                            if (mat < 168) {
                                if (mat < 166) {
                                    if (mat < 165) {
                                        return vec4(vec3(1.0, 0.44, 0.88) * 0.4, 0.05);
                                    } else /*if (mat < 166)*/ {
                                        return vec4(vec3(0.0, 1.0, 0.0) * 0.5, 0.0);
                                    }
                                } else /*if (mat < 168)*/ {
                                    if (mat < 167) {
                                        return vec4(vec3(0.75, 0.55, 1.0) * 0.7, 0.1);
                                    } else /*if (mat < 168)*/ {
                                        return vec4(vec3(1.0, 0.0, 0.0) * 0.5, 0.0);
                                    }
                                }
                            } else /*if (mat < 172)*/ {
                                if (mat < 170) {
                                    if (mat < 169) {
                                        return vec4(vec3(0.75, 0.75, 1.2) * 0.6, 0.1);
                                    } else /*if (mat < 170)*/ {
                                        return vec4(vec3(1.0, 1.0, 0.0) * 0.5, 0.0);
                                    }
                                } else /*if (mat < 172)*/ {
                                    if (mat < 171) {
                                        return vec4(vec3(1.0, 0.76, 0.63) * 1.3, 0.2);
                                    } else /*if (mat < 172)*/ {
                                        return vec4(vec3(0.72, 2.0, 0.56) * 0.5 * candleColorMult, candleExtraLight);
                                    }
                                }
                            }
                        } else /*if (mat < 180)*/ {
                            if (mat < 176) {
                                if (mat < 174) {
                                    if (mat < 173) {
                                        return vec4(vec3(1.7, 1.06, 2.0) * 0.95 * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 174)*/ {
                                        return vec4(vec3(1.0, 0.6, 0.1) * 4.0, 0.0);
                                    }
                                } else /*if (mat < 176)*/ {
                                    if (mat < 175) {
                                        return vec4(soulFireSpecialColor.rgb * 0.5 * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 176)*/ {
                                        return vec4(vec3(0.72, 2.0, 0.56) * 1.3, 0.2);
                                    }
                                }
                            } else /*if (mat < 180)*/ {
                                if (mat < 178) {
                                    if (mat < 177) {
                                        return vec4(vec3(0.22, 0.52, 1.0) * 4.5, 0.0);
                                    } else /*if (mat < 178)*/ {
                                        return vec4(vec3(1.0, 0.43, 0.60) * 4.5, 0.0);
                                    }
                                } else /*if (mat < 180)*/ {
                                    if (mat < 179) {
                                        return vec4(vec3(1.0, 0.43, 0.60) * 0.9, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    } else /*if (mat < 180)*/ {
                                        return vec4(vec3(1.0, 0.65, 0.45) * 1.5, 0.0);
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 196)*/ {
                        if (mat < 188) {
                            if (mat < 184) {
                                if (mat < 182) {
                                    if (mat < 181) {
                                        return vec4(vec3(1.0, 0.6, 0.65) * 0.9, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    } else /*if (mat < 182)*/ {
                                        return vec4(vec3(1.0, 0.45, 0.2) * 0.9, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    }
                                } else /*if (mat < 184)*/ {
                                    if (mat < 183) {
                                        return vec4(vec3(1.0, 1.0, 0.35) * 0.9, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    } else /*if (mat < 184)*/ {
                                        return vec4(vec3(0.85, 1.0, 0.45) * 0.9, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    }
                                }
                            } else /*if (mat < 188)*/ {
                                if (mat < 186) {
                                    if (mat < 185) {
                                        return vec4(vec3(0.85, 1.0, 0.95) * 2.4, 0.0);
                                    } else /*if (mat < 186)*/ {
                                        return vec4(vec3(0.75, 0.5, 1.0) * 1.1, 0.0);
                                    }
                                } else /*if (mat < 188)*/ {
                                    if (mat < 187) {
                                        return vec4(vec3(0.85, 1.0, 0.95) * 0.3, 0.05);
                                    } else /*if (mat < 188)*/ {
                                        return vec4(vec3(1.0, 0.8, 0.0) * candleColorMult, candleExtraLight);
                                    }
                                }
                            }
                        } else /*if (mat < 196)*/ {
                            if (mat < 192) {
                                if (mat < 190) {
                                    if (mat < 189) {
                                        return vec4(vec3(0.3, 1.0, 0.9) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 190)*/ {
                                        return vec4(vec3(1.0, 0.8, 0.5) * candleColorMult, candleExtraLight);
                                    }
                                } else /*if (mat < 192)*/ {
                                    if (mat < 191) {
                                        return vec4(vec3(1.0, 0.35, 0.25) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 192)*/ {
                                        return vec4(vec3(0.5, 1.0, 0.2) * candleColorMult, candleExtraLight);
                                    }
                                }
                            } else /*if (mat < 196)*/ {
                                if (mat < 194) {
                                    if (mat < 193) {
                                        return vec4(vec3(1.0, 0.35, 0.0) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 194)*/ {
                                        return vec4(vec3(0.62, 0.33, 1.0) * candleColorMult, candleExtraLight);
                                    }
                                } else /*if (mat < 196)*/ {
                                    if (mat < 195) {
                                        return vec4(vec3(1.0, 0.15, 0.0) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 196)*/ {
                                        return vec4(vec3(0.2, 1.0, 0.6) * candleColorMult, candleExtraLight);
                                    }
                                }
                            }
                        }
                    }
                } else /*if (mat < 228)*/ {
                    if (mat < 212) {
                        if (mat < 204) {
                            if (mat < 200) {
                                if (mat < 198) {
                                    if (mat < 197) {
                                        return vec4(vec3(0.2, 0.4, 1.0) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 198)*/ {
                                        return vec4(vec3(1.0, 0.85, 0.25) * candleColorMult, candleExtraLight);
                                    }
                                } else /*if (mat < 200)*/ {
                                    if (mat < 199) {
                                        return vec4(vec3(1.0, 0.2, 0.3) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 200)*/ {
                                        return vec4(vec3(0.45, 0.6, 1.0) * candleColorMult, candleExtraLight);
                                    }
                                }
                            } else /*if (mat < 204)*/ {
                                if (mat < 202) {
                                    if (mat < 201) {
                                        return vec4(vec3(1.0, 0.6, 0.3) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 202)*/ {
                                        return vec4(vec3(0.2, 1.0, 0.85) * candleColorMult, candleExtraLight);
                                    }
                                } else /*if (mat < 204)*/ {
                                    if (mat < 203) {
                                        return vec4(vec3(0.3, 1.0, 0.5) * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 204)*/ {
                                        return vec4(vec3(0.84, 2.0, 0.52) * 0.5 * candleColorMult, candleExtraLight);
                                    }
                                }
                            }
                        } else /*if (mat < 212)*/ {
                            if (mat < 208) {
                                if (mat < 206) {
                                    if (mat < 205) {
                                        return vec4(vec3(0.84, 2.0, 0.52) * 1.3, 0.2);
                                    } else /*if (mat < 206)*/ {
                                        return vec4(vec3(1.4, 0.8, 2.0) * 3.8, 0.2);
                                    }
                                } else /*if (mat < 208)*/ {
                                    if (mat < 207) {
                                        return vec4(vec3(1.0, 0.4, 0.88), 0.0);
                                    } else /*if (mat < 208)*/ {
                                        return vec4(vec3(0.66, 0.75, 1.0), 0.0);
                                    }
                                }
                            } else /*if (mat < 212)*/ {
                                if (mat < 210) {
                                    if (mat < 209) {
                                        return vec4(vec3(0.68, 0.57, 1.5) * 4.0, 0.0);
                                    } else /*if (mat < 210)*/ {
                                        return vec4(vec3(0.68, 0.57, 1.5) * 2.0, 0.0);
                                    }
                                } else /*if (mat < 212)*/ {
                                    if (mat < 211) {
                                        return vec4(vec3(1.0, 0.77, 0.1) * 0.6, 0.002);
                                    } else /*if (mat < 212)*/ {
                                        return vec4(vec3(2.0, 1.0, 1.5) * 0.05, 0.0125);
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 228)*/ {
                        if (mat < 220) {
                            if (mat < 216) {
                                if (mat < 214) {
                                    if (mat < 213) {
                                        return vec4(vec3(0.9, 0.35, 1.0) * 2.4, 0.1);
                                    } else /*if (mat < 214)*/ {
                                        return vec4(vec3(0.75, 0.15, 1.0) * 0.9, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    }
                                } else /*if (mat < 216)*/ {
                                    if (mat < 215) {
                                        return vec4(vec3(1.0, 0.6, 0.75), 0.0);
                                    } else /*if (mat < 216)*/ {
                                        return vec4(vec3(0.75, 0.66, 1.0), 0.05);
                                    }
                                }
                            } else /*if (mat < 220)*/ {
                                if (mat < 218) {
                                    if (mat < 217) {
                                        return vec4(0.90, 1.80, 0.35, 0.2);
                                    } else /*if (mat < 218)*/ {
                                        return vec4(vec3(1.0, 0.15, 0.5) * 2.4, 0.1);
                                    }
                                } else /*if (mat < 220)*/ {
                                    if (mat < 219) {
                                        return vec4(vec3(0.35, 0.68, 1.0) * 2.4, 0.1);
                                    } else /*if (mat < 220)*/ {
                                        return vec4(vec3(1.0, 0.5, 0.15) * 0.35, 0.05);
                                    }
                                }
                            }
                        } else /*if (mat < 228)*/ {
                            if (mat < 224) {
                                if (mat < 222) {
                                    if (mat < 221) {
                                        return vec4(0.15, 1.05, 1.35, 0.05);
                                    } else /*if (mat < 222)*/ {
                                        return vec4(vec3(0.15, 1.05, 1.35) * 4, 0.0);
                                    }
                                } else /*if (mat < 224)*/ {
                                    if (mat < 223) {
                                        return vec4(vec3(0.325, 0.15, 0.425) * 8, 0.0);
                                    } else /*if (mat < 224)*/ {
                                        return vec4(1.00, 0.60, 0.125, 0.05);
                                    }
                                }
                            } else /*if (mat < 228)*/ {
                                if (mat < 226) {
                                    if (mat < 225) {
                                        return vec4(vec3(1.00, 0.60, 0.125) * 4, 0.0);
                                    } else /*if (mat < 226)*/ {
                                        return vec4(1.80, 0.87, 0.75, 0.2);
                                    }
                                } else /*if (mat < 228)*/ {
                                    if (mat < 227) {
                                        return vec4(3.80, 2.50, 2.10, 0.0);
                                    } else /*if (mat < 228)*/ {
                                        return vec4(vec3(0.60, 0.80, 0.90), 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else /*if (mat < 356)*/ {
            if (mat < 292) {
                if (mat < 260) {
                    if (mat < 244) {
                        if (mat < 236) {
                            if (mat < 232) {
                                if (mat < 230) {
                                    if (mat < 229) {
                                        return vec4(vec3(1.84, 1.66, 1.28) * 2.5, 0.0);
                                    } else /*if (mat < 230)*/ {
                                        return vec4(vec3(0.3, 2.0, 2.2) * 0.4, 0.05);
                                    }
                                } else /*if (mat < 232)*/ {
                                    if (mat < 231) {
                                        return vec4(vec3(2.0, 0.24, 0.15) * 0.5 * candleColorMult, candleExtraLight);
                                    } else /*if (mat < 232)*/ {
                                        return vec4(vec3(2.0, 0.24, 0.15) * 1.3, 0.2);
                                    }
                                }
                            } else /*if (mat < 236)*/ {
                                if (mat < 234) {
                                    if (mat < 233) {
                                        return vec4(soulFireSpecialColor.rgb * 4.0, 0.10);
                                    } else /*if (mat < 234)*/ {
                                        return vec4(vec3(1.0, 0.5, 2.0) * 3.0, 0.0);
                                    }
                                } else /*if (mat < 236)*/ {
                                    if (mat < 235) {
                                        return vec4(soulFireSpecialColor.rgb * 0.4, 0.15);
                                    } else /*if (mat < 236)*/ {
                                        return vec4(vec3(0.5, 2.0, 0.75) * 0.125, 0.0125);
                                    }
                                }
                            }
                        } else /*if (mat < 244)*/ {
                            if (mat < 240) {
                                if (mat < 238) {
                                    if (mat < 237) {
                                        return vec4(warpedFungusColor * 0.125, 0.0125);
                                    } else /*if (mat < 238)*/ {
                                        return vec4(vec3(0.48, 0.48, 1.0) * 1.5, 0.0);
                                    }
                                } else /*if (mat < 240)*/ {
                                    if (mat < 239) {
                                        return vec4(vec3(0.48, 0.48, 1.0) * 0.85, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    } else /*if (mat < 240)*/ {
                                        return vec4(vec3(0.48, 0.48, 1.0) * 2.5, 0.0);
                                    }
                                }
                            } else /*if (mat < 244)*/ {
                                if (mat < 242) {
                                    if (mat < 241) {
                                        return vec4(0.76, 0.94, 1.0, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    } else /*if (mat < 242)*/ {
                                        return vec4(vec3(1.0, 0.8, 0.4) * 4.0, 0.1);
                                    }
                                } else /*if (mat < 244)*/ {
                                    if (mat < 243) {
                                        return vec4(vec3(1.0, 0.5, 0.88) * 0.85, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT;
                                    } else /*if (mat < 244)*/ {
                                        return vec4(vec3(2.5, 1.2, 0.4) * 1.7, 0.0);
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 260)*/ {
                        if (mat < 252) {
                            if (mat < 248) {
                                if (mat < 246) {
                                    if (mat < 245) {
                                        return vec4(vec3(0.3, 0.3, 0.3) * 1.5, 0.05);
                                    } else /*if (mat < 246)*/ {
                                        return vec4(vec3(0.24, 0.76, 0.93) * 1.9, 0.05);
                                    }
                                } else /*if (mat < 248)*/ {
                                    if (mat < 247) {
                                        return vec4(vec3(0.32, 0.91, 0.18) * 1.9, 0.05);
                                    } else /*if (mat < 248)*/ {
                                        return vec4(vec3(0.23, 0.29, 0.86) * 1.9, 0.05);
                                    }
                                }
                            } else /*if (mat < 252)*/ {
                                if (mat < 250) {
                                    if (mat < 249) {
                                        return vec4(vec3(0.94, 0.54, 0.0) * 1.7, 0.05);
                                    } else /*if (mat < 250)*/ {
                                        return vec4(vec3(1.0, 0.33, 0.42) * 1.5, 0.05);
                                    }
                                } else /*if (mat < 252)*/ {
                                    if (mat < 251) {
                                        return vec4(vec3(1.0, 0.0, 0.77) * 1.4, 0.05);
                                    } else /*if (mat < 252)*/ {
                                        return vec4(vec3(1.0, 1.0, 1.0) * 1.5, 0.05);
                                    }
                                }
                            }
                        } else /*if (mat < 260)*/ {
                            if (mat < 256) {
                                if (mat < 254) {
                                    if (mat < 253) {
                                        return vec4(vec3(0.94, 0.90, 0.0) * 1.7, 0.05);
                                    } else /*if (mat < 254)*/ {
                                        return vec4(vec3(0.3, 0.3, 0.3) * 3.0, 0.0);
                                    }
                                } else /*if (mat < 256)*/ {
                                    if (mat < 255) {
                                        return vec4(vec3(0.24, 0.76, 0.93) * 3.8, 0.0);
                                    } else /*if (mat < 256)*/ {
                                        return vec4(vec3(0.32, 0.91, 0.18) * 3.8, 0.0);
                                    }
                                }
                            } else /*if (mat < 260)*/ {
                                if (mat < 258) {
                                    if (mat < 257) {
                                        return vec4(vec3(0.23, 0.29, 0.86) * 3.8, 0.05);
                                    } else /*if (mat < 258)*/ {
                                        return vec4(vec3(0.94, 0.54, 0.0) * 3.7, 0.05);
                                    }
                                } else /*if (mat < 260)*/ {
                                    if (mat < 259) {
                                        return vec4(vec3(1.0, 0.33, 0.42) * 3.0, 0.05);
                                    } else /*if (mat < 260)*/ {
                                        return vec4(vec3(1.0, 0.0, 0.77) * 2.8, 0.05);
                                    }
                                }
                            }
                        }
                    }
                } else /*if (mat < 292)*/ {
                    if (mat < 276) {
                        if (mat < 268) {
                            if (mat < 264) {
                                if (mat < 262) {
                                    if (mat < 261) {
                                        return vec4(vec3(1.0, 1.0, 1.0) * 3.0, 0.05);
                                    } else /*if (mat < 262)*/ {
                                        return vec4(vec3(0.94, 0.90, 0.0) * 3.5, 0.05);
                                    }
                                } else /*if (mat < 264)*/ {
                                    if (mat < 263) {
                                        return vec4(0.2, 2.5, 2.4, 0.0);
                                    } else /*if (mat < 264)*/ {
                                        return vec4(vec3(0.5, 0.88, 0.75) * 1.0, 0.0);
                                    }
                                }
                            } else /*if (mat < 268)*/ {
                                if (mat < 266) {
                                    if (mat < 265) {
                                        return vec4(vec3(0.7, 1.5, 1.5) * 1.7, 0.1);
                                    } else /*if (mat < 266)*/ {
                                        return vec4(vec3(0.75, 0.75, 1.0), 0.1);
                                    }
                                } else /*if (mat < 268)*/ {
                                    if (mat < 267) {
                                        return vec4(vec3(0.1, 0.15, 1.0) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 268)*/ {
                                        return vec4(vec3(1.0, 0.75, 0.5) * glowlightColorMult, glowlightExtraLight);
                                    }
                                }
                            }
                        } else /*if (mat < 276)*/ {
                            if (mat < 272) {
                                if (mat < 270) {
                                    if (mat < 269) {
                                        return vec4(vec3(0.3, 0.8, 1.0) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 270)*/ {
                                        return vec4(vec3(0.3, 1.0, 0.3) * glowlightColorMult, glowlightExtraLight);
                                    }
                                } else /*if (mat < 272)*/ {
                                    if (mat < 271) {
                                        return vec4(vec3(0.5, 0.65, 1.0) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 272)*/ {
                                        return vec4(vec3(0.1, 1.0, 0.1) * glowlightColorMult, glowlightExtraLight);
                                    }
                                }
                            } else /*if (mat < 276)*/ {
                                if (mat < 274) {
                                    if (mat < 273) {
                                        return vec4(vec3(1.0, 0.1, 1.0) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 274)*/ {
                                        return vec4(vec3(1.0, 0.4, 0.1) * glowlightColorMult, glowlightExtraLight);
                                    }
                                } else /*if (mat < 276)*/ {
                                    if (mat < 275) {
                                        return vec4(vec3(1.0, 0.4, 1.0) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 276)*/ {
                                        return vec4(vec3(0.7, 0.3, 1.0) * glowlightColorMult, glowlightExtraLight);
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 292)*/ {
                        if (mat < 284) {
                            if (mat < 280) {
                                if (mat < 278) {
                                    if (mat < 277) {
                                        return vec4(vec3(1.0, 0.1, 0.1) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 278)*/ {
                                        return vec4(vec3(1.0) * glowlightColorMult, glowlightExtraLight);
                                    }
                                } else /*if (mat < 280)*/ {
                                    if (mat < 279) {
                                        return vec4(vec3(1.0, 1.0, 0.1) * glowlightColorMult, glowlightExtraLight);
                                    } else /*if (mat < 280)*/ {
                                        return vec4(vec3(0.55, 0.6, 2.0) * 0.125, 0.0125);
                                    }
                                }
                            } else /*if (mat < 284)*/ {
                                if (mat < 282) {
                                    if (mat < 281) {
                                        return vec4(vec3(1.0, 1.0, 0.35) * 1.7, 0.1);
                                    } else /*if (mat < 282)*/ {
                                        return vec4(vec3(0.7, 0.85, 1.0) * 2.0, 0.1);
                                    }
                                } else /*if (mat < 284)*/ {
                                    if (mat < 283) {
                                        return vec4(speclightColor * 0.8, 0.1);
                                    } else /*if (mat < 284)*/ {
                                        return vec4(3.8, 0.6, 0.6, 0.0);
                                    }
                                }
                            }
                        } else /*if (mat < 292)*/ {
                            if (mat < 288) {
                                if (mat < 286) {
                                    if (mat < 285) {
                                        return vec4(4.20, 0.60, 0.20, 0.0);
                                    } else /*if (mat < 286)*/ {
                                        return vec4(3.4, 1.2, 0.5, 0.0);
                                    }
                                } else /*if (mat < 288)*/ {
                                    if (mat < 287) {
                                        return vec4(2.6, 0.65, 3.0, 0.0);
                                    } else /*if (mat < 288)*/ {
                                        return vec4(7.40, 3.50, 2.60, 0.0);
                                    }
                                }
                            } else /*if (mat < 292)*/ {
                                if (mat < 290) {
                                    if (mat < 289) {
                                        return vec4(vec3(7.40, 3.50, 2.60) * 0.1, 0.1);
                                    } else /*if (mat < 290)*/ {
                                        return vec4(2.9, 2.0, 0.5, 0.0);
                                    }
                                } else /*if (mat < 292)*/ {
                                    if (mat < 291) {
                                        return vec4(vec3(0.6, 1.0, 0.8) * 3.0, 0.0);
                                    } else /*if (mat < 292)*/ {
                                        return vec4(vec3(0.6, 1.0, 0.8) * 0.3, 0.0);
                                    }
                                }
                            }
                        }
                    }
                }
            } else /*if (mat < 356)*/ {
                if (mat < 324) {
                    if (mat < 308) {
                        if (mat < 300) {
                            if (mat < 296) {
                                if (mat < 294) {
                                    if (mat < 293) {
                                        return vec4(vec3(0.35, 0.6, 1.0) * 4.0, 0.0);
                                    } else /*if (mat < 294)*/ {
                                        return vec4(mix(vec3(0.07, 1.0, 0.9) * 2.7, vec3(0.82, 1.0, 0.35) * 2.7, sin(0.3 * frameTimeCounter)), 0.2);
                                    }
                                } else /*if (mat < 296)*/ {
                                    if (mat < 295) {
                                        return vec4(ariaMushroomBlocklightColor.rgb * 1.7, 0.0);
                                    } else /*if (mat < 296)*/ {
                                        return vec4(vec3(1.0, 0.25, 0.55) * 0.6, 0.02);
                                    }
                                }
                            } else /*if (mat < 300)*/ {
                                if (mat < 298) {
                                    if (mat < 297) {
                                        return vec4(ariaMushroomBlocklightColor.rgb * 0.6, 0.02);
                                    } else /*if (mat < 298)*/ {
                                        return vec4(vec3(0.5, 0.65, 2.0) * 1.3, 0.1);
                                    }
                                } else /*if (mat < 300)*/ {
                                    if (mat < 299) {
                                        return vec4(vec3(0.45, 0.55, 1.5) * 1.3, 0.1);
                                    } else /*if (mat < 300)*/ {
                                        return vec4(vec3(0.76, 0.95, 1.0), 0.0);
                                    }
                                }
                            }
                        } else /*if (mat < 308)*/ {
                            if (mat < 304) {
                                if (mat < 302) {
                                    if (mat < 301) {
        
                                    } else /*if (mat < 302)*/ {
        
                                    }
                                } else /*if (mat < 304)*/ {
                                    if (mat < 303) {
        
                                    } else /*if (mat < 304)*/ {
        
                                    }
                                }
                            } else /*if (mat < 308)*/ {
                                if (mat < 306) {
                                    if (mat < 305) {
        
                                    } else /*if (mat < 306)*/ {
        
                                    }
                                } else /*if (mat < 308)*/ {
                                    if (mat < 307) {
        
                                    } else /*if (mat < 308)*/ {
        
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 324)*/ {
                        if (mat < 316) {
                            if (mat < 312) {
                                if (mat < 310) {
                                    if (mat < 309) {
        
                                    } else /*if (mat < 310)*/ {
        
                                    }
                                } else /*if (mat < 312)*/ {
                                    if (mat < 311) {
        
                                    } else /*if (mat < 312)*/ {
        
                                    }
                                }
                            } else /*if (mat < 316)*/ {
                                if (mat < 314) {
                                    if (mat < 313) {
        
                                    } else /*if (mat < 314)*/ {
        
                                    }
                                } else /*if (mat < 316)*/ {
                                    if (mat < 315) {
        
                                    } else /*if (mat < 316)*/ {
        
                                    }
                                }
                            }
                        } else /*if (mat < 324)*/ {
                            if (mat < 320) {
                                if (mat < 318) {
                                    if (mat < 317) {
        
                                    } else /*if (mat < 318)*/ {
        
                                    }
                                } else /*if (mat < 320)*/ {
                                    if (mat < 319) {
        
                                    } else /*if (mat < 320)*/ {
        
                                    }
                                }
                            } else /*if (mat < 324)*/ {
                                if (mat < 322) {
                                    if (mat < 321) {
        
                                    } else /*if (mat < 322)*/ {
        
                                    }
                                } else /*if (mat < 324)*/ {
                                    if (mat < 323) {
        
                                    } else /*if (mat < 324)*/ {
        
                                    }
                                }
                            }
                        }
                    }
                } else /*if (mat < 356)*/ {
                    if (mat < 340) {
                        if (mat < 332) {
                            if (mat < 328) {
                                if (mat < 326) {
                                    if (mat < 325) {
        
                                    } else /*if (mat < 326)*/ {
        
                                    }
                                } else /*if (mat < 328)*/ {
                                    if (mat < 327) {
        
                                    } else /*if (mat < 328)*/ {
        
                                    }
                                }
                            } else /*if (mat < 332)*/ {
                                if (mat < 330) {
                                    if (mat < 329) {
        
                                    } else /*if (mat < 330)*/ {
        
                                    }
                                } else /*if (mat < 332)*/ {
                                    if (mat < 331) {
        
                                    } else /*if (mat < 332)*/ {
        
                                    }
                                }
                            }
                        } else /*if (mat < 340)*/ {
                            if (mat < 336) {
                                if (mat < 334) {
                                    if (mat < 333) {
        
                                    } else /*if (mat < 334)*/ {
        
                                    }
                                } else /*if (mat < 336)*/ {
                                    if (mat < 335) {
        
                                    } else /*if (mat < 336)*/ {
        
                                    }
                                }
                            } else /*if (mat < 340)*/ {
                                if (mat < 338) {
                                    if (mat < 337) {
        
                                    } else /*if (mat < 338)*/ {
        
                                    }
                                } else /*if (mat < 340)*/ {
                                    if (mat < 339) {
        
                                    } else /*if (mat < 340)*/ {
        
                                    }
                                }
                            }
                        }
                    } else /*if (mat < 356)*/ {
                        if (mat < 348) {
                            if (mat < 344) {
                                if (mat < 342) {
                                    if (mat < 341) {
        
                                    } else /*if (mat < 342)*/ {
        
                                    }
                                } else /*if (mat < 344)*/ {
                                    if (mat < 343) {
        
                                    } else /*if (mat < 344)*/ {
        
                                    }
                                }
                            } else /*if (mat < 348)*/ {
                                if (mat < 346) {
                                    if (mat < 345) {
        
                                    } else /*if (mat < 346)*/ {
        
                                    }
                                } else /*if (mat < 348)*/ {
                                    if (mat < 347) {
        
                                    } else /*if (mat < 348)*/ {
        
                                    }
                                }
                            }
                        } else /*if (mat < 356)*/ {
                            if (mat < 352) {
                                if (mat < 350) {
                                    if (mat < 349) {
        
                                    } else /*if (mat < 350)*/ {
        
                                    }
                                } else /*if (mat < 352)*/ {
                                    if (mat < 351) {
        
                                    } else /*if (mat < 352)*/ {
        
                                    }
                                }
                            } else /*if (mat < 356)*/ {
                                if (mat < 354) {
                                    if (mat < 353) {
        
                                    } else /*if (mat < 354)*/ {
        
                                    }
                                } else /*if (mat < 356)*/ {
                                    if (mat < 355) {
        
                                    } else /*if (mat < 356)*/ {
        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        } else if (mat < 50) {
		if (mat < 26) {
			if (mat < 14) {
				if (mat < 8) {
					if (mat < 5) {
						if (mat == 2) return vec4(torchBlockSpecialLightColor, 0.0); // Torch
						if (mat == 3) return vec4(endRodSpacialColor * 4.0, 0.0); // End Rod - This is the base for all lights. Total value 12. vec3(1.0, 1.0, 1.0) * 4.0
						if (mat == 4) return vec4(vec3(0.7, 1.5, 2.0) * 3.0, 0.0); // Beacon
					} else {
						if (mat == 5) return vec4(fireSpecialLightColorGradient, 0.0); // Fire
						if (mat == 6) return vec4(vec3(0.7, 1.5, 1.5) * 1.7, 0.0); // Sea Pickle:Waterlogged
						if (mat == 7) return vec4(pow(vec3(1.1, 0.85, 0.35), vec3(FROGLIGHT_SATURATION * 0.5 + 0.5)) * 5.0, 0.0); // Ochre Froglight
					}
				} else {
					if (mat < 11) {
						if (mat == 8) return vec4(pow(vec3(0.6, 1.3, 0.6), vec3(FROGLIGHT_SATURATION * 0.5 + 0.5)) * 4.5, 0.0); // Verdant Froglight
						if (mat == 9) return vec4(pow(vec3(1.1, 0.5, 0.9), vec3(FROGLIGHT_SATURATION * 0.5 + 0.5)) * 4.5, 0.0); // Pearlescent Froglight
						if (mat == 10) return vec4(vec3(1.7, 0.9, 0.4) * 4.0, 0.0); // Glowstone
					} else {
						if (mat == 11) return vec4(fireSpecialLightColor, 0.0); // Jack o'Lantern
						if (mat == 12) return vec4(lanternBlockSpecialLightColor, 0.0); // Lantern
						if (mat == 13) return lavaSpecialLightColor; // Lava
					}
				}
			} else {
				if (mat < 20) {
					if (mat < 17) {
						if (mat == 14) return vec4(lavaSpecialLightColor.rgb, 0.0); // Lava Cauldron
						if (mat == 15) return vec4(fireSpecialLightColorGradient, 0.0); // Campfire:Lit
						if (mat == 16) return vec4(vec3(1.7, 0.9, 0.4) * 4.0, 0.0); // Redstone Lamp:Lit
					} else {
						if (mat == 17) return vec4(respawnAnchorSpecialLightColor, 0.0); // Respawn Anchor:Lit
						if (mat == 18) return vec4(vec3(1.0, 1.25, 1.5) * 3.4, 0.0); // Sea Lantern
						if (mat == 19) return vec4(vec3(3.0, 0.9, 0.2) * 3.0, 0.0); // Shroomlight
					}
				} else {
					if (mat < 23) {
						if (mat == 20) return vec4(vec3(2.3, 0.9, 0.2) * 3.4, 0.0); // Cave Vines:With Glow Berries
						if (mat == 21) return vec4(fireSpecialLightColor * 0.7, 0.0); // Furnace:Lit
						if (mat == 22) return vec4(fireSpecialLightColor * 0.7, 0.0); // Smoker:Lit
					} else {
						if (mat == 23) return vec4(fireSpecialLightColor * 0.7, 0.0); // Blast Furnace:Lit
						if (mat == 24) return vec4(fireSpecialLightColor * 0.25 * candleColorMult, candleExtraLight); // Standard Candles:Lit
						if (mat == 25) return vec4(netherPortalSpecialLightColor * 2.0, 0.4); // Nether Portal
					}
				}
			}
		} else {
			if (mat < 38) {
				if (mat < 32) {
					if (mat < 29) {
						if (mat == 26) return vec4(netherPortalSpecialLightColor, 0.0); // Crying Obsidian
						if (mat == 27) return soulFireSpecialColor; // Soul Fire
						if (mat == 28) return soulFireSpecialColor; // Soul Torch
					} else {
						if (mat == 29) return soulFireSpecialColor; // Soul Lantern
						if (mat == 30) return soulFireSpecialColor; // Soul Campfire:Lit
						if (mat == 31) return vec4(redstoneSpecialLightColor * 0.5, 0.1 * ACT_ORE_INTENSITY); // Redstone Ores:Lit
					}
				} else {
					if (mat < 35) {
						if (mat == 32) return vec4(redstoneSpecialLightColor * 0.3, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Redstone Ores:Unlit
						if (mat == 33) return vec4(enchantingTableSpecialLightColor, 0.0); // Enchanting Table
						#if GLOWING_LICHEN > 0
							if (mat == 34) return vec4(vec3(0.8, 1.1, 1.1), 0.05); // Glow Lichen with IntegratedPBR
						#else
							if (mat == 34) return vec4(vec3(0.4, 0.55, 0.55), 0.0); // Glow Lichen vanilla
						#endif
					} else {
						if (mat == 35) return vec4(redstoneSpecialLightColor * 0.25, 0.0); // Redstone Torch
						if (mat == 36) return vec4(vec3(0.325, 0.15, 0.425) * 2.0, 0.05); // Amethyst Cluster, Amethyst Buds, Calibrated Sculk Sensor
						if (mat == 37) return vec4(lavaSpecialLightColor.rgb * 0.1, 0.1); // Magma Block
					}
				}
			} else {
				if (mat < 44) {
					if (mat < 41) {
						#ifdef EMISSIVE_DRAGON_EGG
						if (mat == 38) return vec4(vec3(2.0, 0.5, 1.5) * 0.3, 0.1); // Dragon Egg
						#endif
						if (mat == 39) return vec4(vec3(2.0, 1.0, 1.5) * 0.25, 0.1); // Chorus Flower
						if (mat == 40) return brewingStandSpecialLightColor; // Brewing Stand
					} else {
						if (mat == 41) return vec4(redstoneSpecialLightColor * 0.4, 0.15); // Redstone Block
						if (mat == 42) return vec4(vec3(0.75, 0.75, 3.0) * 0.277, 0.15); // Lapis Block
						if (mat == 43) return vec4(vec3(1.7, 0.9, 0.4) * 0.45, 0.05 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Iron Ores
					}
				} else {
					if (mat < 47) {
						if (mat == 44) return vec4(vec3(1.7, 1.1, 0.2) * 0.45, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Gold Ores
						if (mat == 45) return vec4(vec3(1.7, 0.8, 0.4) * 0.45, 0.05 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Copper Ores
						if (mat == 46) return vec4(vec3(0.75, 0.75, 3.0) * 0.2, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Lapis Ores
					} else {
						if (mat == 47) return vec4(vec3(0.5, 3.5, 0.5) * 0.3, 0.1 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Emerald Ores
						if (mat == 48) return vec4(vec3(0.5, 2.0, 2.0) * 0.4, 0.15 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Diamond Ores
						if (mat == 49) return vec4(vec3(1.5, 1.5, 1.5) * 0.3, 0.05 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Nether Quartz Ore
					}
				}
			}
		}
	} else {
		if (mat < 74) {
			if (mat < 62) {
				if (mat < 56) {
					if (mat < 53) {
						if (mat == 50) return vec4(vec3(1.7, 1.1, 0.2) * 0.45, 0.05 * ACT_ORE_INTENSITY) * GLOWING_ORE_MULT; // Nether Gold Ore
						if (mat == 51) return vec4(vec3(1.7, 1.1, 0.2) * 0.45, 0.05); // Gilded Blackstone
						if (mat == 52) return vec4(vec3(1.8, 0.8, 0.4) * 0.6, 0.15); // Ancient Debris
					} else {
						if (mat == 53) return vec4(vec3(1.4, 0.2, 1.4) * 0.3, 0.05); // Spawner
						if (mat == 54) return vec4(vec3(3.1, 1.1, 0.3) * 1.0, 0.1); // Trial Spawner:NotOminous:Active, Vault:NotOminous:Active
						if (mat == 55) return vec4(vec3(1.7, 0.9, 0.4) * 4.0, 0.0); // Copper Bulb:BrighterOnes:Lit
					}
				} else {
					if (mat < 59) {
						if (mat == 56) return vec4(vec3(1.7, 0.9, 0.4) * 2.0, 0.0); // Copper Bulb:DimmerOnes:Lit
						if (mat == 57) return vec4(vec3(0.1, 0.3, 0.4) * 0.5, 0.0005); // Sculk++
						if (mat == 58) return vec4(vec3(0.0, 1.4, 1.4) * 4.0, 0.15); // End Portal Frame:Active
					} else {
						if (mat == 59) return vec4(0.0); // Bedrock
						if (mat == 60) return vec4(vec3(3.1, 1.1, 0.3) * 0.125, 0.0125); // Command Block
						if (mat == 61) return vec4(vec3(3.0, 0.9, 0.2) * 0.125, 0.0125); // Warped Fungus, Crimson Fungus
					}
				}
			} else {
				if (mat < 68) {
					if (mat < 65) {
						if (mat == 62) return vec4(vec3(3.5, 0.6, 0.4) * 0.3, 0.05); // Crimson Stem, Crimson Hyphae
						if (mat == 63) return vec4(vec3(0.3, 1.9, 1.5) * 0.3, 0.05); // Warped Stem, Warped Hyphae
						if (mat == 64) return vec4(vec3(1.0, 1.0, 1.0) * 0.45, 0.1); // Structure Block, Jigsaw Block, Test Block, Test Instance Block
					} else {
						if (mat == 65) return vec4(vec3(3.0, 0.9, 0.2) * 0.125, 0.0125); // Weeping Vines Plant
						if (mat == 66) return vec4(redstoneSpecialLightColor * 0.05, 0.002); // Redstone Wire:Lit, Comparator:Unlit:Subtract
						if (mat == 67) return vec4(redstoneSpecialLightColor * 0.125, 0.0125); // Repeater:Lit, Comparator:Lit
					}
				} else {
					if (mat < 71) {
						if (mat == 68) return vec4(vec3(0.75), 0.0); // Vault:Inactive
						if (mat == 69) return vec4(vec3(1.3, 1.6, 1.6) * 1.0, 0.1); // Trial Spawner:Ominous:Active, Vault:Ominous:Active
						if (mat == 70) return vec4(vec3(1.0, 0.1, 0.1) * candleColorMult, candleExtraLight); // Red Candles:Lit
					} else {
						if (mat == 71) return vec4(vec3(1.0, 0.4, 0.1) * candleColorMult, candleExtraLight); // Orange Candles:Lit
						if (mat == 72) return vec4(vec3(1.0, 1.0, 0.1) * candleColorMult, candleExtraLight); // Yellow Candles:Lit
						if (mat == 73) return vec4(vec3(0.1, 1.0, 0.1) * candleColorMult, candleExtraLight); // Lime Candles:Lit
					}
				}
			}
		} else {
			if (mat < 86) {
				if (mat < 80) {
					if (mat < 77) {
						if (mat == 74) return vec4(vec3(0.3, 1.0, 0.3) * candleColorMult, candleExtraLight); // Green Candles:Lit
						if (mat == 75) return vec4(vec3(0.3, 0.8, 1.0) * candleColorMult, candleExtraLight); // Cyan Candles:Lit
						if (mat == 76) return vec4(vec3(0.5, 0.65, 1.0) * candleColorMult, candleExtraLight); // Light Blue Candles:Lit
					} else {
						if (mat == 77) return vec4(vec3(0.1, 0.15, 1.0) * candleColorMult, candleExtraLight); // Blue Candles:Lit
						if (mat == 78) return vec4(vec3(0.7, 0.3, 1.0) * candleColorMult, candleExtraLight); // Purple Candles:Lit
						if (mat == 79) return vec4(vec3(1.0, 0.1, 1.0) * candleColorMult, candleExtraLight); // Magenta Candles:Lit
					}
				} else {
					if (mat < 83) {
						if (mat == 80) return vec4(vec3(1.0, 0.4, 1.0) * candleColorMult, candleExtraLight); // Pink Candles:Lit
						if (mat == 81) return vec4(vec3(2.8, 1.1, 0.2) * 0.125, 0.0125); // Open Eyeblossom
						if (mat == 82) return vec4(vec3(2.8, 1.1, 0.2) * 0.3, 0.05); // Creaking Heart: Active
					} else {
						if (mat == 83) return vec4(vec3(1.6, 1.6, 0.7) * 0.3, 0.05); // Firefly Bush
						if (mat == 84) return vec4(vec3(0.85, 1.3, 1.0) * 3.9, 0.0); // Copper Torch, Copper Lantern
						if (mat == 85) return vec4(0.0);
					}
				}
			} else {
				if (mat < 92) {
					if (mat < 89) {
						if (mat == 86) return vec4(0.0);
						if (mat == 87) return vec4(0.0);
						if (mat == 88) return vec4(0.0);
					} else {
						if (mat == 89) return vec4(0.0);
						if (mat == 90) return vec4(0.0);
						if (mat == 91) return vec4(0.0);
					}
				} else {
					if (mat < 95) {
						if (mat == 92) return vec4(0.0);
						if (mat == 93) return vec4(0.0);
						if (mat == 94) return vec4(0.0);
					} else {
						if (mat == 95) return vec4(0.0);
						if (mat == 96) return vec4(0.0);
						if (mat == 97) return vec4(vec3(1.0, 1.0, 1.0) * 4.0, candleExtraLight); // Modded White Light Source
					}
				}
			}
		}
	}

	return vec4(blocklightCol * 20.0, 0.0);
}

vec3[] specialTintColor = vec3[](
	// 30000: White
	vec3(1.0),
	// 30001: Orange
	vec3(1.0, 0.3, 0.1),
	// 30002: Magenta
	vec3(1.0, 0.1, 1.0),
	// 30003: Light Blue
	vec3(0.5, 0.65, 1.0),
	// 30004: Yellow
	vec3(1.0, 1.0, 0.1),
	// 30005: Lime
	vec3(0.1, 1.0, 0.1),
	// 30006: Pink
	vec3(1.0, 0.4, 1.0),
	// 30007: Gray
	vec3(1.0),
	// 30008: Light Gray
	vec3(1.0),
	// 30009: Cyan
	vec3(0.3, 0.8, 1.0),
	// 30010: Purple
	vec3(0.7, 0.3, 1.0),
	// 30011: Blue
	vec3(0.1, 0.15, 1.0),
	// 30012: Brown
	vec3(1.0, 0.75, 0.5),
	// 30013: Green
	vec3(0.3, 1.0, 0.3),
	// 30014: Red
	vec3(1.0, 0.1, 0.1),
	// 30015: Black
	vec3(1.0),
	// 30016: Ice
	vec3(0.5, 0.65, 1.0),
	// 30017: Glass
	vec3(1.0),
	// 30018: Glass Pane
	vec3(1.0),
	// 30019++
	vec3(0.0)
);

vec3 GetSpecialTintColor(uint mat) {
    if (mat < 30019u) return specialTintColor[mat - 30000u];
    else {
    if (mat < 30148u) {
        if (mat < 30084u) {
            if (mat < 30052u) {
                if (mat < 30036u) {
                    if (mat < 30028u) {
                        if (mat < 30024u) {
                            if (mat < 30022u) {
                                if (mat < 30021u) {
                                    return vec3(1.0, 0.8, 0.5);
                                } else /*if (mat < 30022u)*/ {
                                    return vec3(0.75, 0.5, 1.0);
                                }
                            } else /*if (mat < 30024u)*/ {
                                if (mat < 30023u) {
                                    return vec3(1.0, 0.8, 0.0);
                                } else /*if (mat < 30024u)*/ {
                                    return vec3(0.3, 1.0, 0.9);
                                }
                            }
                        } else /*if (mat < 30028u)*/ {
                            if (mat < 30026u) {
                                if (mat < 30025u) {
                                    return vec3(1.0, 0.8, 0.5);
                                } else /*if (mat < 30026u)*/ {
                                    return vec3(1.0, 0.35, 0.25);
                                }
                            } else /*if (mat < 30028u)*/ {
                                if (mat < 30027u) {
                                    return vec3(0.5, 1.0, 0.2);
                                } else /*if (mat < 30028u)*/ {
                                    return vec3(1.0, 0.35, 0.0);
                                }
                            }
                        }
                    } else /*if (mat < 30036u)*/ {
                        if (mat < 30032u) {
                            if (mat < 30030u) {
                                if (mat < 30029u) {
                                    return vec3(0.62, 0.33, 1.0);
                                } else /*if (mat < 30030u)*/ {
                                    return vec3(1.0, 0.2, 0.0);
                                }
                            } else /*if (mat < 30032u)*/ {
                                if (mat < 30031u) {
                                    return vec3(0.2, 1.0, 0.6);
                                } else /*if (mat < 30032u)*/ {
                                    return vec3(0.2, 0.4, 1.0);
                                }
                            }
                        } else /*if (mat < 30036u)*/ {
                            if (mat < 30034u) {
                                if (mat < 30033u) {
                                    return vec3(1.0, 0.9, 0.2);
                                } else /*if (mat < 30034u)*/ {
                                    return vec3(1.0, 0.2, 0.35);
                                }
                            } else /*if (mat < 30036u)*/ {
                                if (mat < 30035u) {
                                    return vec3(0.45, 0.6, 1.0);
                                } else /*if (mat < 30036u)*/ {
                                    return vec3(1.0, 0.6, 0.3);
                                }
                            }
                        }
                    }
                } else /*if (mat < 30052u)*/ {
                    if (mat < 30044u) {
                        if (mat < 30040u) {
                            if (mat < 30038u) {
                                if (mat < 30037u) {
                                    return vec3(0.2, 1.0, 0.85);
                                } else /*if (mat < 30038u)*/ {
                                    return vec3(0.3, 1.0, 0.5);
                                }
                            } else /*if (mat < 30040u)*/ {
                                if (mat < 30039u) {
                                    return vec3(1.0);
                                } else /*if (mat < 30040u)*/ {
                                    return vec3(0.1, 0.15, 1.0);
                                }
                            }
                        } else /*if (mat < 30044u)*/ {
                            if (mat < 30042u) {
                                if (mat < 30041u) {
                                    return vec3(1.0, 0.75, 0.5);
                                } else /*if (mat < 30042u)*/ {
                                    return vec3(0.3, 0.8, 1.0);
                                }
                            } else /*if (mat < 30044u)*/ {
                                if (mat < 30043u) {
                                    return vec3(1.0, 0.8, 0.0);
                                } else /*if (mat < 30044u)*/ {
                                    return vec3(0.3, 1.0, 0.9);
                                }
                            }
                        }
                    } else /*if (mat < 30052u)*/ {
                        if (mat < 30048u) {
                            if (mat < 30046u) {
                                if (mat < 30045u) {
                                    return vec3(1.0, 0.8, 0.5);
                                } else /*if (mat < 30046u)*/ {
                                    return vec3(1.0, 0.35, 0.25);
                                }
                            } else /*if (mat < 30048u)*/ {
                                if (mat < 30047u) {
                                    return vec3(0.5, 1.0, 0.2);
                                } else /*if (mat < 30048u)*/ {
                                    return vec3(1.0, 0.35, 0.0);
                                }
                            }
                        } else /*if (mat < 30052u)*/ {
                            if (mat < 30050u) {
                                if (mat < 30049u) {
                                    return vec3(0.62, 0.33, 1.0);
                                } else /*if (mat < 30050u)*/ {
                                    return vec3(1.0, 0.2, 0.0);
                                }
                            } else /*if (mat < 30052u)*/ {
                                if (mat < 30051u) {
                                    return vec3(0.2, 1.0, 0.6);
                                } else /*if (mat < 30052u)*/ {
                                    return vec3(0.2, 0.4, 1.0);
                                }
                            }
                        }
                    }
                }
            } else /*if (mat < 30084u)*/ {
                if (mat < 30068u) {
                    if (mat < 30060u) {
                        if (mat < 30056u) {
                            if (mat < 30054u) {
                                if (mat < 30053u) {
                                    return vec3(1.0, 0.9, 0.2);
                                } else /*if (mat < 30054u)*/ {
                                    return vec3(1.0, 0.2, 0.35);
                                }
                            } else /*if (mat < 30056u)*/ {
                                if (mat < 30055u) {
                                    return vec3(0.45, 0.6, 1.0);
                                } else /*if (mat < 30056u)*/ {
                                    return vec3(1.0, 0.6, 0.3);
                                }
                            }
                        } else /*if (mat < 30060u)*/ {
                            if (mat < 30058u) {
                                if (mat < 30057u) {
                                    return vec3(0.2, 1.0, 0.85);
                                } else /*if (mat < 30058u)*/ {
                                    return vec3(0.3, 1.0, 0.5);
                                }
                            } else /*if (mat < 30060u)*/ {
                                if (mat < 30059u) {
                                    return vec3(1.0);
                                } else /*if (mat < 30060u)*/ {
                                    return vec3(0.3, 1.0, 0.3);
                                }
                            }
                        }
                    } else /*if (mat < 30068u)*/ {
                        if (mat < 30064u) {
                            if (mat < 30062u) {
                                if (mat < 30061u) {
                                    return vec3(0.5, 0.65, 1.0);
                                } else /*if (mat < 30062u)*/ {
                                    return vec3(1.0);
                                }
                            } else /*if (mat < 30064u)*/ {
                                if (mat < 30063u) {
                                    return vec3(0.1, 1.0, 0.1);
                                } else /*if (mat < 30064u)*/ {
                                    return vec3(1.0, 0.1, 1.0);
                                }
                            }
                        } else /*if (mat < 30068u)*/ {
                            if (mat < 30066u) {
                                if (mat < 30065u) {
                                    return vec3(1.0, 0.3, 0.1);
                                } else /*if (mat < 30066u)*/ {
                                    return vec3(1.0, 0.4, 1.0);
                                }
                            } else /*if (mat < 30068u)*/ {
                                if (mat < 30067u) {
                                    return vec3(0.7, 0.3, 1.0);
                                } else /*if (mat < 30068u)*/ {
                                    return vec3(1.0, 0.1, 0.1);
                                }
                            }
                        }
                    }
                } else /*if (mat < 30084u)*/ {
                    if (mat < 30076u) {
                        if (mat < 30072u) {
                            if (mat < 30070u) {
                                if (mat < 30069u) {
                                    return vec3(1.0);
                                } else /*if (mat < 30070u)*/ {
                                    return vec3(1.0, 1.0, 0.1);
                                }
                            } else /*if (mat < 30072u)*/ {
                                if (mat < 30071u) {
                                    return vec3(1.0, 0.685, 1.0);
                                } else /*if (mat < 30072u)*/ {
                                    return vec3(0.6, 1.0, 0.9);
                                }
                            }
                        } else /*if (mat < 30076u)*/ {
                            if (mat < 30074u) {
                                if (mat < 30073u) {
                                    return vec3(0.3, 1.0, 0.9);
                                } else /*if (mat < 30074u)*/ {
                                    return vec3(1.0, 0.65, 0.55);
                                }
                            } else /*if (mat < 30076u)*/ {
                                if (mat < 30075u) {
                                    return vec3(1.0);
                                } else /*if (mat < 30076u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30084u)*/ {
                        if (mat < 30080u) {
                            if (mat < 30078u) {
                                if (mat < 30077u) {
    
                                } else /*if (mat < 30078u)*/ {
    
                                }
                            } else /*if (mat < 30080u)*/ {
                                if (mat < 30079u) {
    
                                } else /*if (mat < 30080u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30084u)*/ {
                            if (mat < 30082u) {
                                if (mat < 30081u) {
    
                                } else /*if (mat < 30082u)*/ {
    
                                }
                            } else /*if (mat < 30084u)*/ {
                                if (mat < 30083u) {
    
                                } else /*if (mat < 30084u)*/ {
    
                                }
                            }
                        }
                    }
                }
            }
        } else /*if (mat < 30148u)*/ {
            if (mat < 30116u) {
                if (mat < 30100u) {
                    if (mat < 30092u) {
                        if (mat < 30088u) {
                            if (mat < 30086u) {
                                if (mat < 30085u) {
    
                                } else /*if (mat < 30086u)*/ {
    
                                }
                            } else /*if (mat < 30088u)*/ {
                                if (mat < 30087u) {
    
                                } else /*if (mat < 30088u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30092u)*/ {
                            if (mat < 30090u) {
                                if (mat < 30089u) {
    
                                } else /*if (mat < 30090u)*/ {
    
                                }
                            } else /*if (mat < 30092u)*/ {
                                if (mat < 30091u) {
    
                                } else /*if (mat < 30092u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30100u)*/ {
                        if (mat < 30096u) {
                            if (mat < 30094u) {
                                if (mat < 30093u) {
    
                                } else /*if (mat < 30094u)*/ {
    
                                }
                            } else /*if (mat < 30096u)*/ {
                                if (mat < 30095u) {
    
                                } else /*if (mat < 30096u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30100u)*/ {
                            if (mat < 30098u) {
                                if (mat < 30097u) {
    
                                } else /*if (mat < 30098u)*/ {
    
                                }
                            } else /*if (mat < 30100u)*/ {
                                if (mat < 30099u) {
    
                                } else /*if (mat < 30100u)*/ {
    
                                }
                            }
                        }
                    }
                } else /*if (mat < 30116u)*/ {
                    if (mat < 30108u) {
                        if (mat < 30104u) {
                            if (mat < 30102u) {
                                if (mat < 30101u) {
    
                                } else /*if (mat < 30102u)*/ {
    
                                }
                            } else /*if (mat < 30104u)*/ {
                                if (mat < 30103u) {
    
                                } else /*if (mat < 30104u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30108u)*/ {
                            if (mat < 30106u) {
                                if (mat < 30105u) {
    
                                } else /*if (mat < 30106u)*/ {
    
                                }
                            } else /*if (mat < 30108u)*/ {
                                if (mat < 30107u) {
    
                                } else /*if (mat < 30108u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30116u)*/ {
                        if (mat < 30112u) {
                            if (mat < 30110u) {
                                if (mat < 30109u) {
    
                                } else /*if (mat < 30110u)*/ {
    
                                }
                            } else /*if (mat < 30112u)*/ {
                                if (mat < 30111u) {
    
                                } else /*if (mat < 30112u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30116u)*/ {
                            if (mat < 30114u) {
                                if (mat < 30113u) {
    
                                } else /*if (mat < 30114u)*/ {
    
                                }
                            } else /*if (mat < 30116u)*/ {
                                if (mat < 30115u) {
    
                                } else /*if (mat < 30116u)*/ {
    
                                }
                            }
                        }
                    }
                }
            } else /*if (mat < 30148u)*/ {
                if (mat < 30132u) {
                    if (mat < 30124u) {
                        if (mat < 30120u) {
                            if (mat < 30118u) {
                                if (mat < 30117u) {
    
                                } else /*if (mat < 30118u)*/ {
    
                                }
                            } else /*if (mat < 30120u)*/ {
                                if (mat < 30119u) {
    
                                } else /*if (mat < 30120u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30124u)*/ {
                            if (mat < 30122u) {
                                if (mat < 30121u) {
    
                                } else /*if (mat < 30122u)*/ {
    
                                }
                            } else /*if (mat < 30124u)*/ {
                                if (mat < 30123u) {
    
                                } else /*if (mat < 30124u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30132u)*/ {
                        if (mat < 30128u) {
                            if (mat < 30126u) {
                                if (mat < 30125u) {
    
                                } else /*if (mat < 30126u)*/ {
    
                                }
                            } else /*if (mat < 30128u)*/ {
                                if (mat < 30127u) {
    
                                } else /*if (mat < 30128u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30132u)*/ {
                            if (mat < 30130u) {
                                if (mat < 30129u) {
    
                                } else /*if (mat < 30130u)*/ {
    
                                }
                            } else /*if (mat < 30132u)*/ {
                                if (mat < 30131u) {
    
                                } else /*if (mat < 30132u)*/ {
    
                                }
                            }
                        }
                    }
                } else /*if (mat < 30148u)*/ {
                    if (mat < 30140u) {
                        if (mat < 30136u) {
                            if (mat < 30134u) {
                                if (mat < 30133u) {
    
                                } else /*if (mat < 30134u)*/ {
    
                                }
                            } else /*if (mat < 30136u)*/ {
                                if (mat < 30135u) {
    
                                } else /*if (mat < 30136u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30140u)*/ {
                            if (mat < 30138u) {
                                if (mat < 30137u) {
    
                                } else /*if (mat < 30138u)*/ {
    
                                }
                            } else /*if (mat < 30140u)*/ {
                                if (mat < 30139u) {
    
                                } else /*if (mat < 30140u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30148u)*/ {
                        if (mat < 30144u) {
                            if (mat < 30142u) {
                                if (mat < 30141u) {
    
                                } else /*if (mat < 30142u)*/ {
    
                                }
                            } else /*if (mat < 30144u)*/ {
                                if (mat < 30143u) {
    
                                } else /*if (mat < 30144u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30148u)*/ {
                            if (mat < 30146u) {
                                if (mat < 30145u) {
    
                                } else /*if (mat < 30146u)*/ {
    
                                }
                            } else /*if (mat < 30148u)*/ {
                                if (mat < 30147u) {
    
                                } else /*if (mat < 30148u)*/ {
    
                                }
                            }
                        }
                    }
                }
            }
        }
    } else /*if (mat < 30276u)*/ {
        if (mat < 30212u) {
            if (mat < 30180u) {
                if (mat < 30164u) {
                    if (mat < 30156u) {
                        if (mat < 30152u) {
                            if (mat < 30150u) {
                                if (mat < 30149u) {
    
                                } else /*if (mat < 30150u)*/ {
    
                                }
                            } else /*if (mat < 30152u)*/ {
                                if (mat < 30151u) {
    
                                } else /*if (mat < 30152u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30156u)*/ {
                            if (mat < 30154u) {
                                if (mat < 30153u) {
    
                                } else /*if (mat < 30154u)*/ {
    
                                }
                            } else /*if (mat < 30156u)*/ {
                                if (mat < 30155u) {
    
                                } else /*if (mat < 30156u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30164u)*/ {
                        if (mat < 30160u) {
                            if (mat < 30158u) {
                                if (mat < 30157u) {
    
                                } else /*if (mat < 30158u)*/ {
    
                                }
                            } else /*if (mat < 30160u)*/ {
                                if (mat < 30159u) {
    
                                } else /*if (mat < 30160u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30164u)*/ {
                            if (mat < 30162u) {
                                if (mat < 30161u) {
    
                                } else /*if (mat < 30162u)*/ {
    
                                }
                            } else /*if (mat < 30164u)*/ {
                                if (mat < 30163u) {
    
                                } else /*if (mat < 30164u)*/ {
    
                                }
                            }
                        }
                    }
                } else /*if (mat < 30180u)*/ {
                    if (mat < 30172u) {
                        if (mat < 30168u) {
                            if (mat < 30166u) {
                                if (mat < 30165u) {
    
                                } else /*if (mat < 30166u)*/ {
    
                                }
                            } else /*if (mat < 30168u)*/ {
                                if (mat < 30167u) {
    
                                } else /*if (mat < 30168u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30172u)*/ {
                            if (mat < 30170u) {
                                if (mat < 30169u) {
    
                                } else /*if (mat < 30170u)*/ {
    
                                }
                            } else /*if (mat < 30172u)*/ {
                                if (mat < 30171u) {
    
                                } else /*if (mat < 30172u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30180u)*/ {
                        if (mat < 30176u) {
                            if (mat < 30174u) {
                                if (mat < 30173u) {
    
                                } else /*if (mat < 30174u)*/ {
    
                                }
                            } else /*if (mat < 30176u)*/ {
                                if (mat < 30175u) {
    
                                } else /*if (mat < 30176u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30180u)*/ {
                            if (mat < 30178u) {
                                if (mat < 30177u) {
    
                                } else /*if (mat < 30178u)*/ {
    
                                }
                            } else /*if (mat < 30180u)*/ {
                                if (mat < 30179u) {
    
                                } else /*if (mat < 30180u)*/ {
    
                                }
                            }
                        }
                    }
                }
            } else /*if (mat < 30212u)*/ {
                if (mat < 30196u) {
                    if (mat < 30188u) {
                        if (mat < 30184u) {
                            if (mat < 30182u) {
                                if (mat < 30181u) {
    
                                } else /*if (mat < 30182u)*/ {
    
                                }
                            } else /*if (mat < 30184u)*/ {
                                if (mat < 30183u) {
    
                                } else /*if (mat < 30184u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30188u)*/ {
                            if (mat < 30186u) {
                                if (mat < 30185u) {
    
                                } else /*if (mat < 30186u)*/ {
    
                                }
                            } else /*if (mat < 30188u)*/ {
                                if (mat < 30187u) {
    
                                } else /*if (mat < 30188u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30196u)*/ {
                        if (mat < 30192u) {
                            if (mat < 30190u) {
                                if (mat < 30189u) {
    
                                } else /*if (mat < 30190u)*/ {
    
                                }
                            } else /*if (mat < 30192u)*/ {
                                if (mat < 30191u) {
    
                                } else /*if (mat < 30192u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30196u)*/ {
                            if (mat < 30194u) {
                                if (mat < 30193u) {
    
                                } else /*if (mat < 30194u)*/ {
    
                                }
                            } else /*if (mat < 30196u)*/ {
                                if (mat < 30195u) {
    
                                } else /*if (mat < 30196u)*/ {
    
                                }
                            }
                        }
                    }
                } else /*if (mat < 30212u)*/ {
                    if (mat < 30204u) {
                        if (mat < 30200u) {
                            if (mat < 30198u) {
                                if (mat < 30197u) {
    
                                } else /*if (mat < 30198u)*/ {
    
                                }
                            } else /*if (mat < 30200u)*/ {
                                if (mat < 30199u) {
    
                                } else /*if (mat < 30200u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30204u)*/ {
                            if (mat < 30202u) {
                                if (mat < 30201u) {
    
                                } else /*if (mat < 30202u)*/ {
    
                                }
                            } else /*if (mat < 30204u)*/ {
                                if (mat < 30203u) {
    
                                } else /*if (mat < 30204u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30212u)*/ {
                        if (mat < 30208u) {
                            if (mat < 30206u) {
                                if (mat < 30205u) {
    
                                } else /*if (mat < 30206u)*/ {
    
                                }
                            } else /*if (mat < 30208u)*/ {
                                if (mat < 30207u) {
    
                                } else /*if (mat < 30208u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30212u)*/ {
                            if (mat < 30210u) {
                                if (mat < 30209u) {
    
                                } else /*if (mat < 30210u)*/ {
    
                                }
                            } else /*if (mat < 30212u)*/ {
                                if (mat < 30211u) {
    
                                } else /*if (mat < 30212u)*/ {
    
                                }
                            }
                        }
                    }
                }
            }
        } else /*if (mat < 30276u)*/ {
            if (mat < 30244u) {
                if (mat < 30228u) {
                    if (mat < 30220u) {
                        if (mat < 30216u) {
                            if (mat < 30214u) {
                                if (mat < 30213u) {
    
                                } else /*if (mat < 30214u)*/ {
    
                                }
                            } else /*if (mat < 30216u)*/ {
                                if (mat < 30215u) {
    
                                } else /*if (mat < 30216u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30220u)*/ {
                            if (mat < 30218u) {
                                if (mat < 30217u) {
    
                                } else /*if (mat < 30218u)*/ {
    
                                }
                            } else /*if (mat < 30220u)*/ {
                                if (mat < 30219u) {
    
                                } else /*if (mat < 30220u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30228u)*/ {
                        if (mat < 30224u) {
                            if (mat < 30222u) {
                                if (mat < 30221u) {
    
                                } else /*if (mat < 30222u)*/ {
    
                                }
                            } else /*if (mat < 30224u)*/ {
                                if (mat < 30223u) {
    
                                } else /*if (mat < 30224u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30228u)*/ {
                            if (mat < 30226u) {
                                if (mat < 30225u) {
    
                                } else /*if (mat < 30226u)*/ {
    
                                }
                            } else /*if (mat < 30228u)*/ {
                                if (mat < 30227u) {
    
                                } else /*if (mat < 30228u)*/ {
    
                                }
                            }
                        }
                    }
                } else /*if (mat < 30244u)*/ {
                    if (mat < 30236u) {
                        if (mat < 30232u) {
                            if (mat < 30230u) {
                                if (mat < 30229u) {
    
                                } else /*if (mat < 30230u)*/ {
    
                                }
                            } else /*if (mat < 30232u)*/ {
                                if (mat < 30231u) {
    
                                } else /*if (mat < 30232u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30236u)*/ {
                            if (mat < 30234u) {
                                if (mat < 30233u) {
    
                                } else /*if (mat < 30234u)*/ {
    
                                }
                            } else /*if (mat < 30236u)*/ {
                                if (mat < 30235u) {
    
                                } else /*if (mat < 30236u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30244u)*/ {
                        if (mat < 30240u) {
                            if (mat < 30238u) {
                                if (mat < 30237u) {
    
                                } else /*if (mat < 30238u)*/ {
    
                                }
                            } else /*if (mat < 30240u)*/ {
                                if (mat < 30239u) {
    
                                } else /*if (mat < 30240u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30244u)*/ {
                            if (mat < 30242u) {
                                if (mat < 30241u) {
    
                                } else /*if (mat < 30242u)*/ {
    
                                }
                            } else /*if (mat < 30244u)*/ {
                                if (mat < 30243u) {
    
                                } else /*if (mat < 30244u)*/ {
    
                                }
                            }
                        }
                    }
                }
            } else /*if (mat < 30276u)*/ {
                if (mat < 30260u) {
                    if (mat < 30252u) {
                        if (mat < 30248u) {
                            if (mat < 30246u) {
                                if (mat < 30245u) {
    
                                } else /*if (mat < 30246u)*/ {
    
                                }
                            } else /*if (mat < 30248u)*/ {
                                if (mat < 30247u) {
    
                                } else /*if (mat < 30248u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30252u)*/ {
                            if (mat < 30250u) {
                                if (mat < 30249u) {
    
                                } else /*if (mat < 30250u)*/ {
    
                                }
                            } else /*if (mat < 30252u)*/ {
                                if (mat < 30251u) {
    
                                } else /*if (mat < 30252u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30260u)*/ {
                        if (mat < 30256u) {
                            if (mat < 30254u) {
                                if (mat < 30253u) {
    
                                } else /*if (mat < 30254u)*/ {
    
                                }
                            } else /*if (mat < 30256u)*/ {
                                if (mat < 30255u) {
    
                                } else /*if (mat < 30256u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30260u)*/ {
                            if (mat < 30258u) {
                                if (mat < 30257u) {
    
                                } else /*if (mat < 30258u)*/ {
    
                                }
                            } else /*if (mat < 30260u)*/ {
                                if (mat < 30259u) {
    
                                } else /*if (mat < 30260u)*/ {
    
                                }
                            }
                        }
                    }
                } else /*if (mat < 30276u)*/ {
                    if (mat < 30268u) {
                        if (mat < 30264u) {
                            if (mat < 30262u) {
                                if (mat < 30261u) {
    
                                } else /*if (mat < 30262u)*/ {
    
                                }
                            } else /*if (mat < 30264u)*/ {
                                if (mat < 30263u) {
    
                                } else /*if (mat < 30264u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30268u)*/ {
                            if (mat < 30266u) {
                                if (mat < 30265u) {
    
                                } else /*if (mat < 30266u)*/ {
    
                                }
                            } else /*if (mat < 30268u)*/ {
                                if (mat < 30267u) {
    
                                } else /*if (mat < 30268u)*/ {
    
                                }
                            }
                        }
                    } else /*if (mat < 30276u)*/ {
                        if (mat < 30272u) {
                            if (mat < 30270u) {
                                if (mat < 30269u) {
    
                                } else /*if (mat < 30270u)*/ {
    
                                }
                            } else /*if (mat < 30272u)*/ {
                                if (mat < 30271u) {
    
                                } else /*if (mat < 30272u)*/ {
    
                                }
                            }
                        } else /*if (mat < 30276u)*/ {
                            if (mat < 30274u) {
                                if (mat < 30273u) {
    
                                } else /*if (mat < 30274u)*/ {
    
                                }
                            } else /*if (mat < 30276u)*/ {
                                if (mat < 30275u) {
    
                                } else /*if (mat < 30276u)*/ {
    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    }

    return vec3(0.0);
}
