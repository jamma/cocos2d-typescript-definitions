/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCClass.js
    ////////////////////////////////////////////////////////////////////////////////

    //+---------- Function definitions ----------+//

    /**
     * Common getter setter configuration function
     * @function
     * @param {Object}   proto      A class prototype or an object to config
     * @param {String}   prop       Property name
     * @param {function} getter     Getter function for the property
     * @param {function} setter     Setter function for the property
     * @param {String}   getterName Name of getter function for the property
     * @param {String}   setterName Name of setter function for the property
     */
    export function defineGetterSetter(proto, prop, getter, setter, getterName, setterName): void;

    // TODO: Can restrict clone() to overloaded declarations that take a cc.Class and and Array, instead of an Any?
    /**
     * Create a new object and copy all properties in an exist object to the new object
     * @function
     * @param {object|Array} obj The source object
     * @return {Array|object} The created object
     */
    export function clone(obj: any): any;

    // TODO: Can restrict inject() to overloaded declarations that take a cc.Class and and Array, instead of an Any?
    // TODO: Fill these comments in with a descrition of what the function does
    /**
     * Fill in this description later, I believe the methods just injects the prototype of the source object into the
     * destination object (all properties in src => dest).
     *
     * @function
     * @param {object|Array} srcPrototype The source object
     * @param {object|Array} destPrototype The destination object
     * @return {Array|object} The modified object
     */
    export function inject(srcPrototype: any, destPrototype: any): any;

    //+---------- Class definitions ----------+//

    /* Managed JavaScript Inheritance
     * Based on John Resig's Simple JavaScript Inheritance http://ejohn.org/blog/simple-javascript-inheritance/
     * MIT Licensed.
     */
    export class Class {
        public ctor():void;
        public description():string;
    }

    // +---------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCMacro.js
    // +---------------------------------------------------------------------------

    // Variables / Constants
    /**
     * @constant
     * @type Number
     */
    export const INVALID_INDEX:number;

    /**
     * PI is the ratio of a circle's circumference to its diameter.
     * @constant
     * @type Number
     */
    export const PI:number;

    /**
     * @constant
     * @type Number
     */
    export const FLT_MAX:number;

    /**
     * @constant
     * @type Number
     */
    export const FLT_MIN:number;

    /**
     * @constant
     * @type Number
     */
    export const RAD:number;

    /**
     * @constant
     * @type Number
     */
    export const DEG:number;

    /**
     * maximum unsigned int value
     * @constant
     * @type Number
     */
    export const UINT_MAX:number;

    /**
     * 
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * 
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @function
     * @example
     * cc.lerp(2,10,0.5)//returns 6
     * cc.lerp(2,10,0.2)//returns 3.6
     */
    export function lerp(a:number, b:number, r:number):number;

    /**
     * get a random number from 0 to 0xffffff
     * @function
     * @returns {number}
     */
    export function rand():number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @function
     */
    export function randomMinus1To1():number;

    /**
     * returns a random float between 0 and 1
     * @return {Number}
     * @function
     */
    export function random0To1():number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function degreesToRadians(angle:number):number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function radiansToDegrees(angle:number):number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function radiansToDegress(angle:number):number;

    /**
     * @constant
     * @type Number
     */
    export const REPEAT_FOREVER:number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {cc.Node} node setup node
     * @function
     */
    export function nodeDrawSetup(node:Node):void;

    /**
     * 
     *     GL states that are enabled:
     *       - GL_TEXTURE_2D
     *       - GL_VERTEX_ARRAY
     *       - GL_TEXTURE_COORD_ARRAY
     *       - GL_COLOR_ARRAY
     * 
     * @function
     */
    export function enableDefaultGLStates():void;

    /**
     * 
     *   Disable default GL states:
     *     - GL_TEXTURE_2D
     *     - GL_TEXTURE_COORD_ARRAY
     *     - GL_COLOR_ARRAY
     * 
     * @function
     */
    export function disableDefaultGLStates();

    /**
     * 
     *  Increments the GL Draws counts by one.
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.
     * 
     * @param {Number} addNumber
     * @function
     */
    export function incrementGLDraws(addNumber:number):void;

    /**
     * @constant
     * @type Number
     */
    export const FLT_EPSILON:number;

    /**
     * 
     *     On Mac it returns 1;
     *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
     * 
     * @return {Number}
     * @function
     */
    export function contentScaleFactor():number;

    /**
     * Converts a Point in points to pixels
     * @param {cc.Point} points
     * @return {cc.Point}
     * @function
     */
    export function pointPointsToPixels(points:Point):Point;

    /**
     * Converts a Point in pixels to points
     * @param {cc.Rect} pixels
     * @return {cc.Point}
     * @function
     */
    export function pointPixelsToPoints(pixels:Rect):Point;

    /**
     * Converts a Size in points to pixels
     * @param {cc.Size} sizeInPoints
     * @return {cc.Size}
     * @function
     */
    export function sizePointsToPixels(sizeInPoints:Size):Size;

    /**
     * Converts a size in pixels to points
     * @param {cc.Size} sizeInPixels
     * @return {cc.Size}
     * @function
     */
    export function sizePixelsToPoints(sizeInPixels:Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Rect} pixel
     * @return {cc.Rect}
     * @function
     */
    export function rectPixelsToPoints(pixels:Rect):Rect;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Rect} point
     * @return {cc.Rect}
     * @function
     */
    export function rectPointsToPixels(point:Rect):Rect;

//some gl constant variable
    /**
     * @constant
     * @type Number
     */
    export const ONE:number;

    /**
     * @constant
     * @type Number
     */
    export const ZERO:number;

    /**
     * @constant
     * @type Number
     */
    export const SRC_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const SRC_ALPHA_SATURATE:number;

    /**
     * @constant
     * @type Number
     */
    export const SRC_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const DST_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const DST_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_SRC_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_SRC_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_DST_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_DST_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_CONSTANT_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_CONSTANT_COLOR:number;

    /**
     * the constant variable equals gl.LINEAR for texture
     * @constant
     * @type Number
     */
    export const LINEAR:number;

    /**
     * the constant variable equals gl.REPEAT for texture
     * @constant
     * @type Number
     */
    export const REPEAT:number;

    /**
     * the constant variable equals gl.CLAMP_TO_EDGE for texture
     * @constant
     * @type Number
     */
    export const CLAMP_TO_EDGE:number;

    /**
     * the constant variable equals gl.MIRRORED_REPEAT for texture
     * @constant
     * @type Number
     */
    export const MIRRORED_REPEAT:number;

    /**
     * default gl blend src function. Compatible with premultiplied alpha images.
     * @constant
     * @name export const BLEND_SRC
     * @type Number
     */
    export const BLEND_SRC:number;

    /**
     * default gl blend dst function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    export const BLEND_DST:number;

    /**
     * Check webgl error.Error will be shown in console if exists.
     * @function
     */
    export function checkGLErrorDebug();

//Possible device orientations
    /**
     * Device oriented vertically, home button on the bottom (UIDeviceOrientationPortrait)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_PORTRAIT:number;

    /**
     * Device oriented horizontally, home button on the right (UIDeviceOrientationLandscapeLeft)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_LANDSCAPE_LEFT:number;

    /**
     * Device oriented vertically, home button on the top (UIDeviceOrientationPortraitUpsideDown)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

    /**
     * Device oriented horizontally, home button on the left (UIDeviceOrientationLandscapeRight)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_LANDSCAPE_RIGHT:number;

    /**
     * In browsers, we only support 2 orientations by change window size.
     * @constant
     * @type Number
     */
    export const DEVICE_MAX_ORIENTATIONS:number;


// ------------------- vertex attrib flags -----------------------------
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_NONE:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_POSITION:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_COLOR:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_TEX_COORDS:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_POS_COLOR_TEX:number;

    /**
     * GL server side states
     * @constant
     * @type {Number}
     */
    export const GL_ALL:number;

//-------------Vertex Attributes-----------
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_POSITION:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_COLOR:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_TEX_COORDS:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_MAX:number;

//------------Uniforms------------------
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_PMATRIX:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_MVMATRIX:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_MVPMATRIX:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_TIME:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_SINTIME:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_COSTIME:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_RANDOM01:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_SAMPLER:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_MAX:number;

//------------Shader Name---------------
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURECOLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURECOLORALPHATEST:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_COLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURE:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURE_UCOLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTUREA8COLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_UCOLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_LENGTHTEXTURECOLOR:string;

//------------uniform names----------------
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_PMATRIX_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_MVMATRIX_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_MVPMATRIX_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_TIME_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_SINTIME_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_COSTIME_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_RANDOM01_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_SAMPLER_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_ALPHA_TEST_VALUE_S:string;

//------------Attribute names--------------
    /**
     * @constant
     * @type {String}
     */
    export const ATTRIBUTE_NAME_COLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const ATTRIBUTE_NAME_POSITION:string;
    /**
     * @constant
     * @type {String}
     */
    export const ATTRIBUTE_NAME_TEX_COORD:string;


    /**
     * default size for font size
     * @constant
     * @type Number
     */
    export const ITEM_SIZE:number;

    /**
     * default tag for current item
     * @constant
     * @type Number
     */
    export const CURRENT_ITEM:number;
    /**
     * default tag for zoom action tag
     * @constant
     * @type Number
     */
    export const ZOOM_ACTION_TAG:number;
    /**
     * default tag for normal
     * @constant
     * @type Number
     */
    export const NORMAL_TAG:number;

    /**
     * default selected tag
     * @constant
     * @type Number
     */
    export const SELECTED_TAG:number;

    /**
     * default disabled tag
     * @constant
     * @type Number
     */
    export const DISABLE_TAG:number;


// Array utils

    /**
     * Verify Array's Type
     * @param {Array} arr
     * @param {function} type
     * @return {Boolean}
     * @function
     */
    export function arrayVerifyType(arr:any[], type:any):boolean;

    /**
     * Searches for the first occurance of object and removes it. If object is not found the function has no effect.
     * @function
     * @param {Array} arr Source Array
     * @param {*} delObj  remove object
     */
    export function arrayRemoveObject(arr:any[], delObj:any):void;

    /**
     * Removes from arr all values in minusArr. For each Value in minusArr, the first matching instance in arr will be removed.
     * @function
     * @param {Array} arr Source Array
     * @param {Array} minusArr minus Array
     */
    export function arrayRemoveArray(arr:any[], minusArr:any[]):void;

    /**
     * Inserts some objects at index
     * @function
     * @param {Array} arr
     * @param {Array} addObjs
     * @param {Number} index
     * @return {Array}
     */
    export function arrayAppendObjectsToIndex(arr:any[], addObjs:any[], index:number):any[];

    /**
     * Copy an array's item to a new array (its performance is better than Array.slice)
     * @param {Array} arr
     * @return {Array}
     */
    export function copyArray(arr:any[]):any[];


    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCTypes.js
    ////////////////////////////////////////////////////////////////////////////////

    //+---------- Variable definitions ----------+//
    /**
     * text alignment : left
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_LEFT;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_CENTER;

    /**
     * text alignment : right
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_RIGHT;

    /**
     * text alignment : top
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_TOP;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_CENTER;

    /**
     * text alignment : bottom
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_BOTTOM;

    //+---------- Function definitions ----------+//
    /**
     * @function
     * @returns {cc.BlendFunc}
     */
    export function blendFuncDisable():BlendFunc;

    /**
     * Generate a color object based on multiple forms of parameters
     * @example
     *
     * // 1. All channels seperately as parameters
     * var color1 = cc.color(255, 255, 255, 255);
     *
     * // 2. Convert a hex string to a color
     * var color2 = cc.color("#000000");
     *
     * // 3. An color object as parameter
     * var color3 = cc.color({r: 255, g: 255, b: 255, a: 255});
     *
     * Alpha channel is optional. Default value is 255
     *
     * @param {String|cc.Color} color
     * @return {cc.Color}
     */
    export function color(color:Color|string):Color;

    /**
     * Generate a color object based on multiple forms of parameters
     * @example
     *
     * // 1. All channels seperately as parameters
     * var color1 = cc.color(255, 255, 255, 255);
     *
     * // 2. Convert a hex string to a color
     * var color2 = cc.color("#000000");
     *
     * // 3. An color object as parameter
     * var color3 = cc.color({r: 255, g: 255, b: 255, a: 255});
     *
     * Alpha channel is optional. Default value is 255
     *
     * @param {Number} red
     * @param {Number} green
     * @param {Number} blue
     * @param {Number} [alpha=255]
     * @return {cc.Color}
     */
    export function color(red:number, green:number, blue:number, alpha?:number):Color;

    /**
     * returns true if both ccColor3B are equal. Otherwise it returns false.
     * @function
     * @param {cc.Color} color1
     * @param {cc.Color} color2
     * @return {Boolean}  true if both ccColor3B are equal. Otherwise it returns false.
     */
    export function colorEqual(color1:Color, color2:Color);

    /**
     * convert Color to a string of color for style.
     * e.g.  cc.color(255,6,255)  to : "#ff06ff"
     * @function
     * @param {cc.Color} color
     * @return {String}
     */
    export function colorToHex(color:Color):string;

    /**
     * convert a string of color for style to Color.
     * e.g. "#ff06ff"  to : cc.color(255,6,255)
     * @function
     * @param {String} hex
     * @return {cc.Color}
     */
    export function hexToColor(hex:string):Color;

    /**
     * Helper macro that creates an Tex2F type: A texcoord composed of 2 floats: u, y
     * @function
     * @param {Number} u
     * @param {Number} v
     * @return {cc.Tex2F}
     */
    export function tex2(u:number, v:number):Tex2F;

    /**
     * Helper macro that creates an Vertex2F type composed of 2 floats: x, y
     * @function
     * @param {Number} x
     * @param {Number} y
     * @return {cc.Vertex2F}
     */
    export function vertex2(x:number, y:number):Vertex2F;

    /**
     * Helper macro that creates an Vertex3F type composed of 3 floats: x, y, z
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {cc.Vertex3F}
     */
    export function vertex3(x:number, y:number, z:number):Vertex3F;

    //+---------- Class definitions ----------+//
    /**
     * the device accelerometer reports values for each axis in units of g-force
     * @class cc.Acceleration
     */
    export class Acceleration {
        /**
         * the device accelerometer reports values for each axis in units of g-force
         * @constructor
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         * @param {Number} timestamp
         */
        constructor (x:number, y:number, z:number, timestamp:number);
    }

    /**
     * Blend Function used for textures
     * @Class cc.BlendFunc
     */
    export class BlendFunc {
        /**
         * Blend Function used for textures
         * @Constructor
         * @param {Number} src source blend function
         * @param {Number} dst destination blend function
         */
        constructor(src:number, dst:number);
    }

    /**
     * Color class, please use cc.color() to construct a color
     * @class cc.Color
     * @see cc.color
     */
    export class Color {
        public r:number;
        public g:number;
        public b:number;
        public a:number;

        /**
         * Color class, please use cc.color() to construct a color
         * @class cc.Color
         * @param {Number} red
         * @param {Number} green
         * @param {Number} blue
         * @param {Number} alpha
         * @see cc.color
         */
        constructor(red:number, green:number, blue:number, alpha:number);
    }

    /**
     * TODO: Define type for properties arg in c'tor. Figure out what the structure for props is and make a class.
     * Common usage:
     *
     * var fontDef = new cc.FontDefinition();
     * fontDef.fontName = "Arial";
     * fontDef.fontSize = 12;
     * ...
     *
     * OR using inline definition usefull for constructor injection
     *
     * var fontDef = new cc.FontDefinition({
     *  fontName: "Arial",
     *  fontSize: 12
     * });
     *
     *
     *
     * @class cc.FontDefinition
     */
    export class FontDefinition {
        public fontName;
        public fontSize;
        public textAlign;
        public verticalAlign;
        public fillStyle;
        public boundingWidth;
        public boundingHeight;

        public strokeEnabled;
        public strokeStyle;
        public lineWidth;
        public lineHeight;
        public fontStyle;
        public fontWeight;

        public shadowEnabled;
        public shadowOffsetX;
        public shadowOffsetY;
        public shadowBlur;
        public shadowOpacity;

        /**
         * TODO: Define type for properties arg in c'tor. Figure out what the structure for props is and make a class (or more likely, an interface).
         * @param {Object} properties - (OPTIONAL) Allow inline FontDefinition
         * @constructor
         */
        constructor(properties:any);
    }

    /**
     * @class cc.Tex2F
     */
    export class Tex2F {
        /**
         * @constructor
         * @param {Number} u
         * @param {Number} v
         */
        constructor(u:number, v:number);
    }

    /**
     * @class cc.Vertex2F
     */
    export class Vertex2F {
        /**
         * @constructor
         * @param {Number} x
         * @param {Number} y
         */
        constructor(x:number, y:number);
    }

    /**
     * @class cc.Vertex3F
     */
    export class Vertex3F {
        /**
         * @constructor
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        constructor (x:number, y:number, z:number);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCTypesWebGL.js
    ////////////////////////////////////////////////////////////////////////////////
    //    //redefine cc.Vertex2F
    //    /**
    //     * @class cc.Vertex2F
    //     * @param {Number} x
    //     * @param {Number}y
    //     * @param {Array} arrayBuffer
    //     * @param {Number}offset
    //     * @constructor
    //     */
    //    cc.Vertex2F = function (x, y, arrayBuffer, offset) {
    //        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT);
    //        this._offset = offset || 0;
    //
    //        this._xF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
    //        this._yF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
    //        this._xF32[0] = x || 0;
    //        this._yF32[0] = y || 0;
    //    };
    //    /**
    //     * @constant
    //     * @type {number}
    //     */
    //    cc.Vertex2F.BYTES_PER_ELEMENT = 8;
    //
    //    _p = cc.Vertex2F.prototype;
    //    _p._getX = function () {
    //        return this._xF32[0];
    //    };
    //    _p._setX = function (xValue) {
    //        this._xF32[0] = xValue;
    //    };
    //    _p._getY = function () {
    //        return this._yF32[0];
    //    };
    //    _p._setY = function (yValue) {
    //        this._yF32[0] = yValue;
    //    };
    //    /** @expose */
    //    _p.x;
    //    cc.defineGetterSetter(_p, "x", _p._getX, _p._setX);
    //    /** @expose */
    //    _p.y;
    //    cc.defineGetterSetter(_p, "y", _p._getY, _p._setY);
    //
    //    // redefine cc.Vertex3F
    //    /**
    //     * @class cc.Vertex3F
    //     * @param {Number} x
    //     * @param {Number} y
    //     * @param {Number}z
    //     * @param {Array} arrayBuffer
    //     * @param {Number} offset
    //     * @constructor
    //     */
    //    cc.Vertex3F = function (x, y, z, arrayBuffer, offset) {
    //        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT);
    //        this._offset = offset || 0;
    //
    //        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
    //        this._xF32 = new Float32Array(locArrayBuffer, locOffset, 1);
    //        this._xF32[0] = x || 0;
    //        this._yF32 = new Float32Array(locArrayBuffer, locOffset + Float32Array.BYTES_PER_ELEMENT, 1);
    //        this._yF32[0] = y || 0;
    //        this._zF32 = new Float32Array(locArrayBuffer, locOffset + Float32Array.BYTES_PER_ELEMENT * 2, 1);
    //        this._zF32[0] = z || 0;
    //    };
    //    /**
    //     * @constant
    //     * @type {number}
    //     */
    //    cc.Vertex3F.BYTES_PER_ELEMENT = 12;
    //
    //    _p = cc.Vertex3F.prototype;
    //    _p._getX = function () {
    //        return this._xF32[0];
    //    };
    //    _p._setX = function (xValue) {
    //        this._xF32[0] = xValue;
    //    };
    //    _p._getY = function () {
    //        return this._yF32[0];
    //    };
    //    _p._setY = function (yValue) {
    //        this._yF32[0] = yValue;
    //    };
    //    _p._getZ = function () {
    //        return this._zF32[0];
    //    };
    //    _p._setZ = function (zValue) {
    //        this._zF32[0] = zValue;
    //    };
    //    /** @expose */
    //    _p.x;
    //    cc.defineGetterSetter(_p, "x", _p._getX, _p._setX);
    //    /** @expose */
    //    _p.y;
    //    cc.defineGetterSetter(_p, "y", _p._getY, _p._setY);
    //    /** @expose */
    //    _p.z;
    //    cc.defineGetterSetter(_p, "z", _p._getZ, _p._setZ);
    //
    //    // redefine cc.Tex2F
    //    /**
    //     * @class cc.Tex2F
    //     * @param {Number} u
    //     * @param {Number} v
    //     * @param {Array} arrayBuffer
    //     * @param {Number} offset
    //     * @constructor
    //     */
    //    cc.Tex2F = function (u, v, arrayBuffer, offset) {
    //        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT);
    //        this._offset = offset || 0;
    //
    //        this._uF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
    //        this._vF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
    //        this._uF32[0] = u || 0;
    //        this._vF32[0] = v || 0;
    //    };
    //    /**
    //     * @constants
    //     * @type {number}
    //     */
    //    cc.Tex2F.BYTES_PER_ELEMENT = 8;
    //
    //    _p = cc.Tex2F.prototype;
    //    _p._getU = function () {
    //        return this._uF32[0];
    //    };
    //    _p._setU = function (xValue) {
    //        this._uF32[0] = xValue;
    //    };
    //    _p._getV = function () {
    //        return this._vF32[0];
    //    };
    //    _p._setV = function (yValue) {
    //        this._vF32[0] = yValue;
    //    };
    //    /** @expose */
    //    _p.u;
    //    cc.defineGetterSetter(_p, "u", _p._getU, _p._setU);
    //    /** @expose */
    //    _p.v;
    //    cc.defineGetterSetter(_p, "v", _p._getV, _p._setV);

    //redefine cc.Quad2
    /**
     * @class cc.Quad2
     * @param {cc.Vertex2F} tl
     * @param {cc.Vertex2F} tr
     * @param {cc.Vertex2F} bl
     * @param {cc.Vertex2F} br
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class Quad2 {
        public static BYTES_PER_ELEMENT:number;
        public constructor(tl:Vertex2F, tr:Vertex2F, bl:Vertex2F, br:Vertex2F, arrayBuffer:Quad2[], offset:number);
    }


    /**
     * A 3D Quad. 4 * 3 floats
     * @Class cc.Quad3
     * @Construct
     * @param {cc.Vertex3F} bl1
     * @param {cc.Vertex3F} br1
     * @param {cc.Vertex3F} tl1
     * @param {cc.Vertex3F} tr1
     */
    export class Quad3 {
        public constructor(bl1:Vertex3F, br1:Vertex3F, tl1:Vertex3F, tr1:Vertex3F);
    }

    //redefine cc.V3F_C4B_T2F
    /**
     * @class cc.V3F_C4B_T2F
     * @param {cc.Vertex3F} vertices
     * @param { cc.color} colors
     * @param {cc.Tex2F} texCoords
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class V3F_C4B_T2F {
        public static BYTES_PER_ELEMENT:number;
        public constructor (vertices:Vertex3F, colors:Color, texCoords:Tex2F, arrayBuffer:V3F_C4B_T2F[], offset:number);
    }

    //redefine cc.V3F_C4B_T2F_Quad
    /**
     * @cc.class cc.V3F_C4B_T2F_Quad
     * @param {cc.V3F_C4B_T2F} tl
     * @param {cc.V3F_C4B_T2F} bl
     * @param {cc.V3F_C4B_T2F} tr
     * @param {cc.V3F_C4B_T2F} br
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class V3F_C4B_T2F_Quad {
        public static BYTES_PER_ELEMENT:number;

        public constructor(tl:V3F_C4B_T2F, bl:V3F_C4B_T2F, tr:V3F_C4B_T2F, br:V3F_C4B_T2F, arrayBuffer:V3F_C4B_T2F[], offset:number);
    }

    /**
     * @function
     * @returns {cc.V3F_C4B_T2F_Quad}
     */
    export function V3F_C4B_T2F_QuadZero(): V3F_C4B_T2F_Quad;

    /**
     * @function
     * @param {cc.V3F_C4B_T2F_Quad} sourceQuad
     * @return {cc.V3F_C4B_T2F_Quad}
     */
    export function V3F_C4B_T2F_QuadCopy(sourceQuad:V3F_C4B_T2F_Quad): V3F_C4B_T2F_Quad;

    /**
     * @function
     * @param {Array} sourceQuads
     * @returns {Array}
     */
    export function V3F_C4B_T2F_QuadsCopy(sourceQuads:V3F_C4B_T2F_Quad[]): V3F_C4B_T2F_Quad[];

    //redefine cc.V2F_C4B_T2F
    /**
     * @class cc.V2F_C4B_T2F
     * @param {cc.Vertex2F} vertices
     * @param {cc.color} colors
     * @param {cc.Tex2F} texCoords
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
        //cc.V2F_C4B_T2F = function (vertices, colors, texCoords, arrayBuffer, offset) {
    export class V2F_C4B_T2F {
        public static BYTES_PER_ELEMENT:number;
        public constructor(vertices:Vertex2F, colors:Color, texCoords:Tex2F, arrayBuffer:V2F_C4B_T2F[], offset:number);
    }

    //redefine cc.V2F_C4B_T2F_Triangle
    /**
     * @class cc.V2F_C4B_T2F_Triangle
     * @param {cc.V2F_C4B_T2F} a
     * @param {cc.V2F_C4B_T2F} b
     * @param {cc.V2F_C4B_T2F} c
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class V2F_C4B_T2F_Triangle {
        public static BYTES_PER_ELEMENT:number;
        public constructor(a:V2F_C4B_T2F, b:V2F_C4B_T2F, c:V2F_C4B_T2F, arrayBuffer:V2F_C4B_T2F_Triangle[], offset:number);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCEGLView.js
    ////////////////////////////////////////////////////////////////////////////////
    // TODO: Figure out where the fuck the cc.View class is defined
    export interface View extends Class {}

    /**
     * @ignore
     */
    //cc.Touches = [];
    //cc.TouchesIntergerDict = {};

    export const DENSITYDPI_DEVICE:string;
    export const DENSITYDPI_HIGH:string;
    export const DENSITYDPI_MEDIUM:string;
    export const DENSITYDPI_LOW:string;

    /**
     * cc.view is the singleton object which represents the game window.
     * It's main task include: 
     *  - Apply the design resolution policy
     *  - Provide interaction with the window, like resize event on web, retina display support, etc...
     *  - Manage the game view port which can be different with the window
     *  - Manage the content scale and translation
     * 
     * Since the cc.view is a singleton, you don't need to call any constructor or create functions,
     * the standard way to use it is by calling:
     *  - cc.view.methodName(); 
     * @class
     * @name cc.view
     * @extend cc.Class
     */
    export class EGLView extends Class implements View {
        /**
         * Constructor of cc.EGLView
         */
        //ctor: function () {
        //public constructor();

        /**
         * 
         * Sets view's target-densitydpi for android mobile browser. it can be set to:           
         *   1. cc.DENSITYDPI_DEVICE, value is "device-dpi"                                      
         *   2. cc.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         
         *   3. cc.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            
         *   4. cc.DENSITYDPI_LOW, value is "low-dpi"                                            
         *   5. Custom value, e.g: "480"                                                         
         * 
         * @param {String} densityDPI
         */
        public setTargetDensityDPI(densityDPI:string):void;

        /**
         * Returns the current target-densitydpi value of cc.view.
         * @returns {String}
         */
        public getTargetDensityDPI():string;

        /**
         * Sets whether resize canvas automatically when browser's size changed.
         * Useful only on web.
         * @param {Boolean} enabled Whether enable automatic resize with browser's resize event
         */
        public resizeWithBrowserSize(enabled:boolean):void;

        /**
         * Sets the callback function for cc.view's resize action,
         * this callback will be invoked before applying resolution policy, 
         * so you can do any additional modifications within the callback.
         * Useful only on web.
         * @param {Function|null} callback The callback function
         */
        public setResizeCallback(callback?:()=>void):void;

        // TODO: Shouldn't this return a boolean?!?
        public initialize():void;

        /**
         * Sets whether the engine modify the "viewport" meta in your web page.
         * It's enabled by default, we strongly suggest you not to disable it.
         * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden
         * Only useful on web
         * @param {Boolean} enabled Enable automatic modification to "viewport" meta
         */
        public adjustViewPort(enabled:boolean):void;

        /**
         * Retina support is enabled by default for Apple device but disabled for other devices,
         * it takes effect only when you called setDesignResolutionPolicy
         * Only useful on web
         * @param {Boolean} enabled  Enable or disable retina display
         */
        public enableRetina(enabled:boolean):void;

        /**
         * Check whether retina display is enabled.
         * Only useful on web
         * @return {Boolean}
         */
        public isRetinaEnabled():boolean;

        /**
         * If enabled, the application will try automatically to enter full screen mode on mobile devices
         * You can pass true as parameter to enable it and disable it by passing false.
         * Only useful on web
         * @param {Boolean} enabled  Enable or disable auto full screen on mobile devices
         */
        public enableAutoFullScreen(enabled:boolean):void;

        /**
         * Check whether auto full screen is enabled.
         * Only useful on web
         * @return {Boolean} Auto full screen enabled or not
         */
        public isAutoFullScreenEnabled():boolean;

        /**
         * Force destroying EGL view, subclass must implement this method.
         */
        public end();

        /**
         * Get whether render system is ready(no matter opengl or canvas),
         * this name is for the compatibility with cocos2d-x, subclass must implement this method.
         * @return {Boolean}
         */
        public isOpenGLReady():boolean;

        /*
         * Set zoom factor for frame. This method is for debugging big resolution (e.g.new ipad) app on desktop.
         * @param {Number} zoomFactor
         */
        public setFrameZoomFactor(zoomFactor:number):void;

        /**
         * Exchanges the front and back buffers, subclass must implement this method.
         */
        public swapBuffers():void;

        /**
         * Open or close IME keyboard , subclass must implement this method.
         * @param {Boolean} isOpen
         */
        public setIMEKeyboardState(isOpen:boolean):void;

        /**
         * Sets the resolution translate on EGLView
         * @param {Number} offsetLeft
         * @param {Number} offsetTop
         */
        public setContentTranslateLeftTop(offsetLeft:number, offsetTop:number):void;

        /**
         * Returns the resolution translate on EGLView
         * @return {cc.Size|Object}
         */
        //public getContentTranslateLeftTop():any
        public getContentTranslateLeftTop():Size;

        /**
         * Returns the canvas size of the view.
         * On native platforms, it returns the screen size since the view is a fullscreen view.
         * On web, it returns the size of the canvas element.
         * @return {cc.Size}
         */
        public getCanvasSize():Size;

        /**
         * Returns the frame size of the view.
         * On native platforms, it returns the screen size since the view is a fullscreen view.
         * On web, it returns the size of the canvas's outer DOM element.
         * @return {cc.Size}
         */
        public getFrameSize():Size;

        /**
         * On native, it sets the frame size of view.
         * On web, it sets the size of the canvas's outer DOM element.
         * @param {Number} width
         * @param {Number} height
         */
        public setFrameSize(width:number, height:number):void;

        /**
         * Empty function
         */
        public centerWindow();

        /**
         * Returns the visible area size of the view port.
         * @return {cc.Size}
         */
        public getVisibleSize():Size;

        /**
         * Returns the visible area size of the view port.
         * @return {cc.Size}
         */
        public getVisibleSizeInPixel():Size;

        /**
         * Returns the visible origin of the view port.
         * @return {cc.Point}
         */
        public getVisibleOrigin():Point;

        /**
         * Returns the visible origin of the view port.
         * @return {cc.Point}
         */
        public getVisibleOriginInPixel():Point;

        /**
         * Returns whether developer can set content's scale factor.
         * @return {Boolean}
         */
        public canSetContentScaleFactor():boolean;

        /**
         * Returns the current resolution policy
         * @see cc.ResolutionPolicy
         * @return {cc.ResolutionPolicy}
         */
        public getResolutionPolicy():ResolutionPolicy;

        /**
         * Sets the current resolution policy
         * @see cc.ResolutionPolicy
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy
         */
        public setResolutionPolicy(resolutionPolicy:number|ResolutionPolicy):void;

        /**
         * Sets the resolution policy with designed view size in points.
         * The resolution policy include: 
         * [1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.
         * [2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.
         * [3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.
         * [4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width
         * [5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height
         * [cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
         */
        public setDesignResolutionSize(width:number, height:number, resolutionPolicy:number|ResolutionPolicy):void;

        /**
         * Returns the designed size for the view.
         * Default resolution size is the same as 'getFrameSize'.
         * @return {cc.Size}
         */
        public getDesignResolutionSize():Size;

        /**
         * Sets the document body to desired pixel resolution and fit the game content to it.
         * This function is very useful for adaptation in mobile browsers.
         * In some HD android devices, the resolution is very high, but its browser performance may not be very good.
         * In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
         * But this API can be helpful to set a desired pixel resolution which is in between.
         * This API will do the following:
         *     1. Set viewport's width to the desired width in pixel
         *     2. Set body width to the exact pixel resolution
         *     3. The resolution policy will be reset with designed view size in points.
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
         */
        public setRealPixelResolution(width:number, height:number, resolutionPolicy:number|ResolutionPolicy):void;

        /**
         * Sets view port rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w width
         * @param {Number} h height
         */
        public setViewPortInPoints(x:number, y:number, w:number, h:number):void;

        /**
         * Sets Scissor rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w
         * @param {Number} h
         */
        public setScissorInPoints(x:number, y:number, w:number, h:number):void;

        /**
         * Returns whether GL_SCISSOR_TEST is enable
         * @return {Boolean}
         */
        public isScissorEnabled():boolean;

        /**
         * Returns the current scissor rectangle
         * @return {cc.Rect}
         */
        public getScissorRect():Rect;

        /**
         * Sets the name of the view
         * @param {String} viewName
         */
        public setViewName(viewName:string):void;

        /**
         * Returns the name of the view
         * @return {String}
         */
        public getViewName():string;

        /**
         * Returns the view port rectangle.
         * @return {cc.Rect}
         */
        public getViewPortRect(rect:Rect);

        /**
         * Returns scale factor of the horizontal direction (X axis).
         * @return {Number}
         */
        public getScaleX():number;

        /**
         * Returns scale factor of the vertical direction (Y axis).
         * @return {Number}
         */
        public getScaleY():number;

        /**
         * Returns device pixel ratio for retina display.
         * @return {Number}
         */
        public getDevicePixelRatio():number;

        /**
         * Returns the real location in view for a translation based on a related position
         * @param {Number} tx The X axis translation
         * @param {Number} ty The Y axis translation
         * @param {Object} relatedPos The related position object including "left", "top", "width", "height" informations
         * @return {cc.Point}
         */
        // TODO: Figure out wtf this relatedPos object is
        public convertToLocationInView(tx:number, ty:number, relatedPos:any):Point;
    }

    /**
     * cc.ContainerStrategy class is the root strategy class of container's scale strategy,
     * it controls the behavior of how to scale the cc.container and cc._canvas object
     *
     * @class
     * @extends cc.Class
     */
    export class ContainerStrategy extends Class {
        /**
         * Manipulation before appling the strategy
         * @param {cc.view} view The target view
         */
        public preApply(view:View):void;

        /**
         * Function to apply this strategy
         * @param {cc.view} view
         * @param {cc.Size} designedResolution
         */
        public apply(view:View, designedResolution:Size):void;

        /**
         * Manipulation after applying the strategy
         * @param {cc.view} view  The target view
         */
        public postApply(view:View):void;
    }

    /**
     * cc.ContentStrategy class is the root strategy class of content's scale strategy,
     * it controls the behavior of how to scale the scene and setup the viewport for the game
     *
     * @class
     * @extends cc.Class
     */
    export class ContentStrategy extends Class {
        /**
         * Manipulation before applying the strategy
         * @param {cc.view} view The target view
         */
        public preApply(view:View);

        /**
         * Function to apply this strategy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view
         * @param {cc.Size} designedResolution
         * @return {object} scaleAndViewportRect
         */
        // TODO: Figure out what return value is
        public apply(view:View, designedResolution:Size):any;

        /**
         * Manipulation after applying the strategy
         * @param {cc.view} view The target view
         */
        public postApply(view:View):void;
    }

// Container scale strategies
    /**
     * @class
     * @extends cc.ContainerStrategy
     */
    export class EqualToFrame extends ContainerStrategy {
        public apply(view:View, designedResolution?:Size):void;
    }

    /**
     * @class
     * @extends cc.ContainerStrategy
     */
    export class ProportionalToFrame extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):void;
    }

    /**
     * @class
     * @extends EqualToFrame
     */
    export class EqualToWindow extends EqualToFrame {
        public preApply(view:View);
        public apply(view:View, designedResolution:Size):any;
    }

    /**
     * @class
     * @extends ProportionalToFrame
     */
    export class ProportionalToWindow extends ProportionalToFrame {
        public preApply(view:View);

        public apply(view:View, designedResolution:Size):any;
    }

    /**
     * @class
     * @extends cc.ContainerStrategy
     */
    export class OriginalContainer extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }


//// #NOT STABLE on Android# Alias: Strategy that makes the container's size equals to the window's size
////    cc.ContainerStrategy.EQUAL_TO_WINDOW = new EqualToWindow();
//// #NOT STABLE on Android# Alias: Strategy that scale proportionally the container's size to window's size
////    cc.ContainerStrategy.PROPORTION_TO_WINDOW = new ProportionalToWindow();
//// Alias: Strategy that makes the container's size equals to the frame's size
//        cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
//// Alias: Strategy that scale proportionally the container's size to frame's size
//        cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();
//// Alias: Strategy that keeps the original container's size
//        cc.ContainerStrategy.ORIGINAL_CONTAINER = new OriginalContainer();
//

// Content scale strategies
    export class ExactFit extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }

    export class ShowAll extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }

    export class NoBorder extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }

    export class FixedHeight extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
        public postApply(view:View):void;
    }

    export class FixedWidth extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
        public postApply(view:View):void;
    }

//// Alias: Strategy to scale the content's size to container's size, non proportional
//        cc.ContentStrategy.EXACT_FIT = new ExactFit();
//// Alias: Strategy to scale the content's size proportionally to maximum size and keeps the whole content area to be visible
//        cc.ContentStrategy.SHOW_ALL = new ShowAll();
//// Alias: Strategy to scale the content's size proportionally to fill the whole container area
//        cc.ContentStrategy.NO_BORDER = new NoBorder();
//// Alias: Strategy to scale the content's height to container's height and proportionally scale its width
//        cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight();
//// Alias: Strategy to scale the content's width to container's width and proportionally scale its height
//        cc.ContentStrategy.FIXED_WIDTH = new FixedWidth();
//
//    })();
//
    /**
     * cc.ResolutionPolicy class is the root strategy class of scale strategy,
     * its main task is to maintain the compatibility with Cocos2d-x
     *
     * @class
     * @extends cc.Class
     * @param {cc.ContainerStrategy} containerStg The container strategy
     * @param {cc.ContentStrategy} contentStg The content strategy
     */
    export class ResolutionPolicy extends Class {
        /**
         * @memberOf cc.ResolutionPolicy#
         * @name EXACT_FIT
         * @constant
         * @type Number
         * @static
         * The entire application is visible in the specified area without trying to preserve the original aspect ratio.
         * Distortion can occur, and the application may appear stretched or compressed.
         */
        public static EXACT_FIT:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name NO_BORDER
         * @constant
         * @type Number
         * @static
         * The entire application fills the specified area, without distortion but possibly with some cropping,
         * while maintaining the original aspect ratio of the application.
         */
        public static NO_BORDER:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name SHOW_ALL
         * @constant
         * @type Number
         * @static
         * The entire application is visible in the specified area without distortion while maintaining the original
         * aspect ratio of the application. Borders can appear on two sides of the application.
         */
        public static SHOW_ALL:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name FIXED_HEIGHT
         * @constant
         * @type Number
         * @static
         * The application takes the height of the design resolution size and modifies the width of the internal
         * canvas so that it fits the aspect ratio of the device
         * no distortion will occur however you must make sure your application works on different
         * aspect ratios
         */
        public static FIXED_HEIGHT:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name FIXED_WIDTH
         * @constant
         * @type Number
         * @static
         * The application takes the width of the design resolution size and modifies the height of the internal
         * canvas so that it fits the aspect ratio of the device
         * no distortion will occur however you must make sure your application works on different
         * aspect ratios
         */
        public static FIXED_WIDTH:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name UNKNOWN
         * @constant
         * @type Number
         * @static
         * Unknow policy
         */
        public static UNKNOWN:number;

        /**
         * Constructor of cc.ResolutionPolicy
         * @param {cc.ContainerStrategy} containerStg
         * @param {cc.ContentStrategy} contentStg
         */
        public constructor(containerStg:ContainerStrategy, contentStg:ContainerStrategy);

        /**
         * Manipulation before applying the resolution policy
         * @param {cc.view} view The target view
         */
        public preApply(view:View);

        /**
         * Function to apply this resolution policy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view The target view
         * @param {cc.Size} designedResolution The user defined design resolution
         * @return {object} An object contains the scale X/Y values and the viewport rect
         */
        public apply(view:View, designedResolution:Size):any;

        /**
         * Manipulation after appyling the strategy
         * @param {cc.view} view The target view
         */
        public postApply(view:View):void;

        /**
         * Setup the container's scale strategy
         * @param {cc.ContainerStrategy} containerStg
         */
        public setContainerStrategy(containerStg:ContainerStrategy):void;

        /**
         * Setup the content's scale strategy
         * @param {cc.ContentStrategy} contentStg
         */
        public setContentStrategy(contentStg:ContainerStrategy):void;
    }
}
