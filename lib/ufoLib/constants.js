/**
 * Copyright (c) 2012, Lasse Fister lasse@graphicore.de, http://graphicore.de
 *
 * You should have received a copy of the MIT License along with this program.
 * If not, see http://www.opensource.org/licenses/mit-license.php
 *
 * This is a port of the constants of glifLib defined in robofab/branches/ufo3k/Lib/ufoLib/gliflib.py
 *
 */
define(
    [],
    function()
{
    "use strict";
    // -------------------------
    // Reading and Writing Modes
    // -------------------------

    // this is javascript ... do we need this?

    // if os.name == "mac":
    //     WRITE_MODE = "wb"  # use unix line endings, even with Classic MacPython
    //     READ_MODE = "rb"
    // else:
    //     WRITE_MODE = "w"
    //     READ_MODE = "r"

    // ---------
    // Constants
    //---------

    return {
        DEFAULT_GLYPHS_DIRNAME: "glyphs",
        DATA_DIRNAME: "data",
        IMAGES_DIRNAME: "images",
        METAINFO_FILENAME: "metainfo.plist",
        FONTINFO_FILENAME: "fontinfo.plist",
        LIB_FILENAME: "lib.plist",
        GROUPS_FILENAME: "groups.plist",
        KERNING_FILENAME: "kerning.plist",
        FEATURES_FILENAME: "features.fea",
        LAYERCONTENTS_FILENAME: "layercontents.plist",
        LAYERINFO_FILENAME: "layerinfo.plist",
        DEFAULT_LAYER_NAME: "public.default",
        supportedUFOFormatVersions: {1:true, 2:true, 3:true},
        supportedGLIFFormatVersions: {1:true, 2:true},
        transformationInfo: [
            // field name, default value
            ["xScale", 1],
            ["xyScale", 0],
            ["yxScale", 0],
            ["yScale", 1],
            ["xOffset", 0],
            ["yOffset", 0],
        ]
    };
});
