

//   ___                _                   _        _   ___      _      _
//  / __|_  _ _ __ _ __| |___ _ __  ___ _ _| |_ __ _| | | _ \__ _| |_ __| |_  ___ ___
//  \__ \ || | '_ \ '_ \ / -_) '  \/ -_) ' \  _/ _` | | |  _/ _` |  _/ _| ' \/ -_|_-<
//  |___/\_,_| .__/ .__/_\___|_|_|_\___|_||_\__\__,_|_| |_| \__,_|\__\__|_||_\___/__/
//           |_|  |_|
// Settings added by Supplemental Patches

#ifndef COMPOSITE_SETTINGS_FILE
#define COMPOSITE_SETTINGS_FILE

#include "/lib/shaderSettings/worldMotionBlur.glsl"

#define RAINBOWS 1 //[0 1 3]


// Euphoria Patches Settings


#define DARKER_DEPTH_OCEANS 0 //[0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19]

#define EP_END_FLASH 0 //[0 1 2]
#ifdef EP_END_FLASH
#endif

#define SCORCHFUL_SANDSTORM_HEIGHT 30 //[10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200]

#define SCORCHFUL_SANDSTORM_LOWER_ALT 64 //[0 4 8 16 24 32 40 48 56 64 72 80]

#define SCORCHFUL_SANDSTORM_OPACITY 0.80 //[0.10 0.20 0.30 0.40 0.50 0.60 0.70 0.80 0.90 1.00 1.10 1.20 1.30 1.40 1.50]

#define VOLUMETRIC_SCORCHFUL_SANDSTORM 0 //[0 1 2]

#endif