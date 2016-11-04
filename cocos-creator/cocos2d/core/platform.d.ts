/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/_CCClass.js
    // NOTE: Skipping this file.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/attribute.js
    // NOTE: Skipping this file.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/callbacks-invoker.js
    // NOTE: Skipping this file.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCAssetLibrary.js
    //+--------------------------------------------------------------------------------

    export function isScene(asset:Asset):boolean;

    /**
     * @callback loadCallback
     * @param {String} error - null or the error info
     * @param {Asset} data - the loaded asset or null
     */
    export interface LoadAssetCallback { (error:string, asset:Asset):void; }
    export interface LoadAssetOptions {
        readMainCache:boolean;
        writeMainCache:boolean;
        existingAsset:Asset;
        deserializeInfo:Details;
    }

    export interface QueryAssetCallback { (error:string, url:string, raw:boolean):void; }
    export interface LoadJsonCallback { (error:string, asset:Asset):void; }

    export interface MountPaths {
        assets:string;
        internal:string;
    }

    export interface RawAssets {
        [key:string]:string;
    }

    export interface InitOptions {
        libraryPath:string;
        mountPaths:MountPaths;
        rawAssets?:RawAssets;
        rawAssetsBase?:string;
        packedAssets?:string;
    }

    /**
     * The asset library which managing loading/unloading assets in project.
     *
     * @class AssetLibrary
     * @static
     */
    export class AssetLibrary {
        /**
         * @method loadAsset
         * @param {String} uuid
         * @param {loadCallback} [callback] - the callback function once load finished
         * @param {Object} [options]
         * @param {Boolean} options.readMainCache - Default is true. If false, the asset and all its depends assets will reload and create new instances from library.
         * @param {Boolean} options.writeMainCache - Default is true. If true, the result will cache to AssetLibrary, and MUST be unload by user manually.
         * @param {Asset} options.existingAsset - load to existing asset, this argument is only available in editor
         * @param {deserialize.Details} options.deserializeInfo - specified a DeserializeInfo object if you want,
         *                                                        this parameter is only available in editor.
         * @private
         */
        public loadAsset(uuid:string, callback?:LoadAssetCallback, options?:LoadAssetOptions);

        public getImportedDir(uuid:string):string;


        /**
         * @method queryAssetInfo
         * @param {String} uuid
         * @param {Function} callback
         * @param {Error} callback.error
         * @param {String} callback.url - the url of raw asset or imported asset
         * @param {Boolean} callback.raw - indicates whether the asset is raw asset
         * @param {Function} callback.ctorInEditor - the actual type of asset, used in editor only
         */
        public queryAssetInfo(uuid:string, callback:QueryAssetCallback):void;

        // parse uuid out of url
        public parseUuidInEditor(url:string):string;

        /**
         * @method loadJson
         * @param {String} json
         * @param {loadCallback} callback
         * @return {LoadingHandle}
         * @private
         */
        public loadJson(json:string, callback?:LoadJsonCallback):LoadingHandle;

        /**
         * Get the exists asset by uuid.
         *
         * @method getAssetByUuid
         * @param {String} uuid
         * @return {Asset} - the existing asset, if not loaded, just returns null.
         * @private
         */
        public getAssetByUuid(uuid:string):Asset;

        /**
         * init the asset library
         *
         * @method init
         * @param {Object} options
         * @param {String} options.libraryPath - 能接收的任意类型的路径，通常在编辑器里使用绝对的，在网页里使用相对的。
         * @param {Object} options.mountPaths - mount point of actual urls for raw assets (only used in editor)
         * @param {Object} [options.rawAssets] - uuid to raw asset's urls (only used in runtime)
         * @param {String} [options.rawAssetsBase] - base of raw asset's urls (only used in runtime)
         * @param {String} [options.packedAssets] - packed assets (only used in runtime)
         */
        public init(options:InitOptions):void;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCClass.js
    // NOTE: Most of the functionality in this file is to add typical object-oriented
    //       behavior on top of JS objects. I've purposely kept those details out of
    //       this public interface, they shouldn't be added unless absolutely necessary
    //       and widely useful.
    //       If people need some of this functionality in their specific projects,
    //       they can add it themselves.
    //+--------------------------------------------------------------------------------
    export class Class {}

    //+--------------------------------------------------------------------------------
    // Files: cocos2d/core/platform/CCInputManager.js and CCInputExtension.js
    //+--------------------------------------------------------------------------------
    export const inputManager:InputManager;

    export interface HTMLElementPosition {
        left: number;
        top: number;
        width: number;
        height: number;
    }

    /**
     * <p>
     *  This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>
     * </p>
     * @class inputManager
     */
    export class InputManager {
        /**
         * @method handleTouchesBegin
         * @param {Array} touches
         */
        public handleTouchesBegin(touches:Touch[]):void;

        /**
         * @method handleTouchesMove
         * @param {Array} touches
         */
        public handleTouchesMove(touches:Touch[]):void;

        /**
         * @method handleTouchesEnd
         * @param {Array} touches
         */
        public handleTouchesEnd(touches:Touch[]):void;

        /**
         * @method handleTouchesCancel
         * @param {Array} touches
         */
        public handleTouchesCancel(touches:Touch[]):void;

        /**
         * @method getSetOfTouchesEndOrCancel
         * @param {Array} touches
         * @returns {Array}
         */
        public getSetOfTouchesEndOrCancel(touches:Touch[]):Touch[];

        /**
         * @method getHTMLElementPosition
         * @param {HTMLElement} element
         * @return {Object}
         */
        public getHTMLElementPosition(element:HTMLElement):HTMLElementPosition;

        /**
         * @method getPreTouch
         * @param {Touch} touch
         * @return {Touch}
         */
        public getPreTouch(touch:Touch):Touch;

        /**
         * @method setPreTouch
         * @param {Touch} touch
         */
        public setPreTouch(touch:Touch):void;

        /**
         * @method getTouchByXY
         * @param {Number} tx
         * @param {Number} ty
         * @param {Vec2} pos
         * @return {Touch}
         */
        public getTouchByXY(tx:number, ty:number, pos:Vec2):Touch;

        /**
         * @method getTouchByXY
         * @param {Vec2} location
         * @param {Vec2} pos
         * @param {Number} eventType
         * @returns {Event.EventMouse}
         */
        public getMouseEvent(location:Vec2, pos:Vec2, eventType:number):EventMouse;

        /**
         * @method getPointByEvent
         * @param {Touch} event
         * @param {Vec2} pos
         * @return {Vec2}
         */
        public getPointByEvent(event:Touch, pos:Vec2):Vec2;

        /**
         * @method getTouchesByEvent
         * @param {Touch} event
         * @param {Vec2} pos
         * @returns {Array}
         */
        public getTouchesByEvent(event:Touch, pos:Vec2):Touch[];

        /**
         * @method registerSystemEvent
         * @param {HTMLElement} element
         */
        public registerSystemEvent(element:HTMLElement):void;

        /**
         * @method update
         * @param {Number} dt
         */
        public update(dt:number):void;


        ////////////////////////////////////////////////////////////////////////////////
        // CCInputManager class extensions from CCInputExtension.js below
        ////////////////////////////////////////////////////////////////////////////////

        /**
         * whether enable accelerometer event
         * @method setAccelerometerEnabled
         * @param {Boolean} isEnable
         */
        public setAccelerometerEnabled(isEnable:boolean):void;

        /**
         * set accelerometer interval value
         * @method setAccelerometerInterval
         * @param {Number} interval
         */
        public setAccelerometerInterval(interval:number):void;

        // I'm not entirely sure this should be made public, but whatever ...
        public didAccelerate(eventData:EventData):void;
    }


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCMacro.js
    //+--------------------------------------------------------------------------------

    /**
     * Key map for keyboard event
     * @enum KEY
     * @readonly
     * @type {Object}
     * @example {@link utils/api/engine/docs/cocos2d/core/platform/CCCommon/KEY.js}
     */
    export class Key extends Enum {
        /**
         * @property none
         * @type {Number}
         * @readonly
         */
        public static readonly none:Key;

        // android
        /**
         * @property back
         * @type {Number}
         * @readonly
         */
        public static readonly back:Key;

        /**
         * @property menu
         * @type {Number}
         * @readonly
         */
        public static readonly menu:Key;

        /**
         * @property backspace
         * @type {Number}
         * @readonly
         */
        public static readonly backspace:Key;

        /**
         * @property tab
         * @type {Number}
         * @readonly
         */
        public static readonly tab:Key;

        /**
         * @property enter
         * @type {Number}
         * @readonly
         */
        public static readonly enter:Key;

        /**
         * NOTE: should use shiftkey instead
         * @property shift
         * @type {Number}
         * @readonly
         */
        public static readonly shift:Key;

        /**
         * NOTE: should use ctrlkey instead
         * @property ctrl
         * @type {Number}
         * @readonly
         */
        public static readonly ctrl:Key;

        /**
         * NOTE: should use altkey instead
         * @property alt
         * @type {Number}
         * @readonly
         */
        public static readonly alt:Key;

        /**
         * @property pause
         * @type {Number}
         * @readonly
         */
        public static readonly pause:Key;

        /**
         * @property capslock
         * @type {Number}
         * @readonly
         */
        public static readonly capslock:Key;

        /**
         * @property escape
         * @type {Number}
         * @readonly
         */
        public static readonly escape:Key;

        /**
         * @property space
         * @type {Number}
         * @readonly
         */
        public static readonly space:Key;

        /**
         * @property pageup
         * @type {Number}
         * @readonly
         */
        public static readonly pageup:Key;

        /**
         * @property pagedown
         * @type {Number}
         * @readonly
         */
        public static readonly pagedown:Key;

        /**
         * @property end
         * @type {Number}
         * @readonly
         */
        public static readonly end:Key;

        /**
         * @property home
         * @type {Number}
         * @readonly
         */
        public static readonly home:Key;

        /**
         * @property left
         * @type {Number}
         * @readonly
         */
        public static readonly left:Key;

        /**
         * @property up
         * @type {Number}
         * @readonly
         */
        public static readonly up:Key;

        /**
         * @property right
         * @type {Number}
         * @readonly
         */
        public static readonly right:Key;

        /**
         * @property down
         * @type {Number}
         * @readonly
         */
        public static readonly down:Key;

        /**
         * @property select
         * @type {Number}
         * @readonly
         */
        public static readonly select:Key;

        /**
         * @property insert
         * @type {Number}
         * @readonly
         */
        public static readonly insert:Key;

        /**
         * @property Delete
         * @type {Number}
         * @readonly
         */
        public static readonly Delete:Key;

        /**
         * @property 0
         * @type {Number}
         * @readonly
         */
        public static readonly 0:Key;

        /**
         * @property 1
         * @type {Number}
         * @readonly
         */
        public static readonly 1:Key;

        /**
         * @property 2
         * @type {Number}
         * @readonly
         */
        public static readonly 2:Key;

        /**
         * @property 3
         * @type {Number}
         * @readonly
         */
        public static readonly 3:Key;

        /**
         * @property 4
         * @type {Number}
         * @readonly
         */
        public static readonly 4:Key;

        /**
         * @property 5
         * @type {Number}
         * @readonly
         */
        public static readonly 5:Key;

        /**
         * @property 6
         * @type {Number}
         * @readonly
         */
        public static readonly 6:Key;

        /**
         * @property 7
         * @type {Number}
         * @readonly
         */
        public static readonly 7:Key;

        /**
         * @property 8
         * @type {Number}
         * @readonly
         */
        public static readonly 8:Key;

        /**
         * @property 9
         * @type {Number}
         * @readonly
         */
        public static readonly 9:Key;

        /**
         * @property a
         * @type {Number}
         * @readonly
         */
        public static readonly a:Key;

        /**
         * @property b
         * @type {Number}
         * @readonly
         */
        public static readonly b:Key;
        /**
         * @property c
         * @type {Number}
         * @readonly
         */
        public static readonly c:Key;

        /**
         * @property d
         * @type {Number}
         * @readonly
         */
        public static readonly d:Key;

        /**
         * @property e
         * @type {Number}
         * @readonly
         */
        public static readonly e:Key;

        /**
         * @property f
         * @type {Number}
         * @readonly
         */
        public static readonly f:Key;

        /**
         * @property g
         * @type {Number}
         * @readonly
         */
        public static readonly g:Key;

        /**
         * @property h
         * @type {Number}
         * @readonly
         */
        public static readonly h:Key;

        /**
         * @property i
         * @type {Number}
         * @readonly
         */
        public static readonly i:Key;

        /**
         * @property j
         * @type {Number}
         * @readonly
         */
        public static readonly j:Key;

        /**
         * @property k
         * @type {Number}
         * @readonly
         */
        public static readonly k:Key;

        /**
         * @property l
         * @type {Number}
         * @readonly
         */
        public static readonly l:Key;

        /**
         * @property m
         * @type {Number}
         * @readonly
         */
        public static readonly m:Key;

        /**
         * @property n
         * @type {Number}
         * @readonly
         */
        public static readonly n:Key;

        /**
         * @property o
         * @type {Number}
         * @readonly
         */
        public static readonly o:Key;

        /**
         * @property p
         * @type {Number}
         * @readonly
         */
        public static readonly p:Key;

        /**
         * @property q
         * @type {Number}
         * @readonly
         */
        public static readonly q:Key;

        /**
         * @property r
         * @type {Number}
         * @readonly
         */
        public static readonly r:Key;

        /**
         * @property s
         * @type {Number}
         * @readonly
         */
        public static readonly s:Key;

        /**
         * @property t
         * @type {Number}
         * @readonly
         */
        public static readonly t:Key;

        /**
         * @property u
         * @type {Number}
         * @readonly
         */
        public static readonly u:Key;

        /**
         * @property v
         * @type {Number}
         * @readonly
         */
        public static readonly v:Key;

        /**
         * @property w
         * @type {Number}
         * @readonly
         */
        public static readonly w:Key;

        /**
         * @property x
         * @type {Number}
         * @readonly
         */
        public static readonly x:Key;

        /**
         * @property y
         * @type {Number}
         * @readonly
         */
        public static readonly y:Key;

        /**
         * @property z
         * @type {Number}
         * @readonly
         */
        public static readonly z:Key;

        /**
         * @property num0
         * @type {Number}
         * @readonly
         */
        public static readonly num0:Key;

        /**
         * @property num1
         * @type {Number}
         * @readonly
         */
        public static readonly num1:Key;

        /**
         * @property num2
         * @type {Number}
         * @readonly
         */
        public static readonly num2:Key;

        /**
         * @property num3
         * @type {Number}
         * @readonly
         */
        public static readonly num3:Key;

        /**
         * @property num4
         * @type {Number}
         * @readonly
         */
        public static readonly num4:Key;

        /**
         * @property num5
         * @type {Number}
         * @readonly
         */
        public static readonly num5:Key;

        /**
         * @property num6
         * @type {Number}
         * @readonly
         */
        public static readonly num6:Key;

        /**
         * @property num7
         * @type {Number}
         * @readonly
         */
        public static readonly num7:Key;

        /**
         * @property num8
         * @type {Number}
         * @readonly
         */
        public static readonly num8:Key;

        /**
         * @property num9
         * @type {Number}
         * @readonly
         */
        public static readonly num9:Key;

        /**
         * @property {Number} *
         * @readonly
         */
        public static readonly '*':Key;

        /**
         * @property {Number} +
         * @readonly
         */
        public static readonly '+':Key;

        /**
         * @property {Number} -
         * @readonly
         */
        public static readonly '-':Key;

        /**
         * @property numdel
         * @type {Number}
         * @readonly
         */
        public static readonly 'numdel':Key;

        /**
         * @property {Number} /
         * @readonly
         */
        public static readonly '/':Key;

        /**
         * NOTE: F1-F12 don't work on IE
         * @property f1
         * @type {Number}
         * @readonly
         */
        public static readonly f1:Key;

        /**
         * @property f2
         * @type {Number}
         * @readonly
         */
        public static readonly f2:Key;

        /**
         * @property f3
         * @type {Number}
         * @readonly
         */
        public static readonly f3:Key;

        /**
         * @property f4
         * @type {Number}
         * @readonly
         */
        public static readonly f4:Key;

        /**
         * @property f5
         * @type {Number}
         * @readonly
         */
        public static readonly f5:Key;

        /**
         * @property f6
         * @type {Number}
         * @readonly
         */
        public static readonly f6:Key;

        /**
         * @property f7
         * @type {Number}
         * @readonly
         */
        public static readonly f7:Key;

        /**
         * @property f8
         * @type {Number}
         * @readonly
         */
        public static readonly f8:Key;

        /**
         * @property f9
         * @type {Number}
         * @readonly
         */
        public static readonly f9:Key;

        /**
         * @property f10
         * @type {Number}
         * @readonly
         */
        public static readonly f10:Key;

        /**
         * @property f11
         * @type {Number}
         * @readonly
         */
        public static readonly f11:Key;

        /**
         * @property f12
         * @type {Number}
         * @readonly
         */
        public static readonly f12:Key;

        /**
         * @property numlock
         * @type {Number}
         * @readonly
         */
        public static readonly numlock:Key;
        /**
         * @property scrolllock
         * @type {Number}
         * @readonly
         */
        public static readonly scrolllock:Key;

        /**
         * @property {Number} ;
         * @readonly
         */
        public static readonly ';':Key;

        /**
         * @property semicolon
         * @type {Number}
         * @readonly
         */
        public static readonly semicolon:Key;

        /**
         * @property equal
         * @type {Number}
         * @readonly
         */
        public static readonly equal:Key;

        /**
         * @property {Number} =
         * @readonly
         */
        public static readonly '=':Key;

        /**
         * @property {Number} ,
         * @readonly
         */
        public static readonly ',':Key;

        /**
         * @property comma
         * @type {Number}
         * @readonly
         */
        public static readonly comma:Key;

        /**
         * @property dash
         * @type {Number}
         * @readonly
         */
        public static readonly dash:Key;

        /**
         * @property {Number} .
         * @readonly
         */
        public static readonly '.':Key;

        /**
         * @property period
         * @type {Number}
         * @readonly
         */
        public static readonly period:Key;

        /**
         * @property forwardslash
         * @type {Number}
         * @readonly
         */
        public static readonly forwardslash:Key;

        /**
         * @property grave
         * @type {Number}
         * @readonly
         */
        public static readonly grave:Key;

        /**
         * @property {Number} [
         * @readonly
         */
        public static readonly '[':Key;

        /**
         * @property openbracket
         * @type {Number}
         * @readonly
         */
        public static readonly openbracket:Key;

        /**
         * @property backslash
         * @type {Number}
         * @readonly
         */
        public static readonly backslash:Key;

        /**
         * @property {Number} ]
         * @readonly
         */
        public static readonly ']':Key;

        /**
         * @property closebracket
         * @type {Number}
         * @readonly
         */
        public static readonly closebracket:Key;

        /**
         * @property quote
         * @type {Number}
         * @readonly
         */
        public static readonly quote:Key;

        // gamepad controll
        /**
         * @property dpadLeft
         * @type {Number}
         * @readonly
         */
        public static readonly dpadLeft:Key;

        /**
         * @property dpadRight
         * @type {Number}
         * @readonly
         */
        public static readonly dpadRight:Key;

        /**
         * @property dpadUp
         * @type {Number}
         * @readonly
         */
        public static readonly dpadUp:Key;

        /**
         * @property dpadDown
         * @type {Number}
         * @readonly
         */
        public static readonly dpadDown:Key;

        /**
         * @property dpadCenter
         * @type {Number}
         * @readonly
         */
        public static readonly dpadCenter:Key;
    }

    /**
     * @module cc
     */

    /**
     * Image formats
     * @enum ImageFormat
     * @static
     * @namespace cc
     */
    export class ImageFormat extends Enum {
        /**
         * Image Format:JPG
         * @property JPG
         * @type {Number}
         * @static
         */
        public static readonly JPG:ImageFormat;

        /**
         * Image Format:PNG
         * @property PNG
         * @type {Number}
         * @static
         */
        public static readonly PNG:ImageFormat;

        /**
         * Image Format:TIFF
         * @property TIFF
         * @type {Number}
         * @static
         */
        public static readonly TIFF:ImageFormat;

        /**
         * Image Format:WEBP
         * @property WEBP
         * @type {Number}
         * @static
         */
        public static readonly WEBP:ImageFormat;

        /**
         * Image Format:PVR
         * @property PVR
         * @type {Number}
         * @static
         */
        public static readonly PVR:ImageFormat;

        /**
         * Image Format:ETC
         * @property ETC
         * @type {Number}
         * @static
         */
        public static readonly ETC:ImageFormat;

        /**
         * Image Format:S3TC
         * @property S3TC
         * @type {Number}
         * @static
         */
        public static readonly S3TC:ImageFormat;

        /**
         * Image Format:ATITC
         * @property ATITC
         * @type {Number}
         * @static
         */
        public static readonly ATITC:ImageFormat;

        /**
         * Image Format:TGA
         * @property TGA
         * @type {Number}
         * @static
         */
        public static readonly TGA:ImageFormat;

        /**
         * Image Format:RAWDATA
         * @property RAWDATA
         * @type {Number}
         * @static
         */
        public static readonly RAWDATA:ImageFormat;

        /**
         * Image Format:UNKNOWN
         * @property UNKNOWN
         * @type {Number}
         * @static
         */
        public static readonly UNKNOWN:ImageFormat;
    }

    /**
     * get image format by image data
     * @method getImageFormatByData
     * @param {Array} imgData
     * @returns {ImageFormat}
     */
    export function getImageFormatByData(imgData:GLByte[]):ImageFormat;

    /**
     * Predefined constants
     * @enum Macro
     * @static
     * @type {Object}
     * @namespace cc
     */
    // cc.macro = {
    export namespace macro {
        /**
         * @property INVALID_INDEX
         * @type {Number}
         * @readonly
         */
        // INVALID_INDEX: -1,
        export const INVALID_INDEX:number;

        /**
         * Default Node tag
         * @property NODE_TAG_INVALID
         * @type {Number}
         * @readonly
         */
        export const NODE_TAG_INVALID:number;

        /**
         * PI is the ratio of a circle's circumference to its diameter.
         * @property PI
         * @type {Number}
         * @readonly
         */
        export const PI:number;

        /**
         * PI * 2
         * @property PI2
         * @type {Number}
         * @readonly
         */
        export const PI2:number;

        /**
         * Maximum float value
         * @property FLT_MAX
         * @type {Number}
         * @readonly
         */
        export const FLT_MAX:number;

        /**
         * Minimum float value
         * @property FLT_MIN
         * @type {Number}
         * @readonly
         */
        export const FLT_MIN:number;

        /**
         * PI / 180
         * @property RAD
         * @type {Number}
         * @readonly
         */
        export const RAD:number;

        /**
         * One degree
         * @property DEG
         * @type {Number}
         * @readonly
         */
        export const DEG:number;

        /**
         * Maximum unsigned int value
         * @property UINT_MAX
         * @type {Number}
         * @readonly
         */
        export const UINT_MAX:number;

        /**
         * @property REPEAT_FOREVER
         * @type {Number}
         * @readonly
         */
        export const REPEAT_FOREVER:number;

        /**
         * @property FLT_EPSILON
         * @type {Number}
         * @readonly
         */
        export const FLT_EPSILON:number;

        //some gl constant variable
        /**
         * @property ONE
         * @type {Number}
         * @readonly
         */
        export const ONE:number;

        /**
         * @property ZERO
         * @type {Number}
         * @readonly
         */
        export const ZERO:number;

        /**
         * @property SRC_ALPHA
         * @type {Number}
         * @readonly
         */
        export const SRC_ALPHA:number;

        /**
         * @property SRC_ALPHA_SATURATE
         * @type {Number}
         * @readonly
         */
        export const SRC_ALPHA_SATURATE:number;

        /**
         * @property SRC_COLOR
         * @type {Number}
         * @readonly
         */
        export const SRC_COLOR:number;

        /**
         * @property DST_ALPHA
         * @type {Number}
         * @readonly
         */
        export const DST_ALPHA:number;

        /**
         * @property DST_COLOR
         * @type {Number}
         * @readonly
         */
        export const DST_COLOR:number;

        /**
         * @property ONE_MINUS_SRC_ALPHA
         * @type {Number}
         * @readonly
         */
        export const ONE_MINUS_SRC_ALPHA:number;

        /**
         * @property ONE_MINUS_SRC_COLOR
         * @type {Number}
         * @readonly
         */
        export const ONE_MINUS_SRC_COLOR:number;

        /**
         * @property ONE_MINUS_DST_ALPHA
         * @type {Number}
         * @readonly
         */
        export const ONE_MINUS_DST_ALPHA:number;

        /**
         * @property ONE_MINUS_DST_COLOR
         * @type {Number}
         * @readonly
         */
        export const ONE_MINUS_DST_COLOR:number;

        /**
         * @property ONE_MINUS_CONSTANT_ALPHA
         * @type {Number}
         * @readonly
         */
        export const ONE_MINUS_CONSTANT_ALPHA:number;

        /**
         * @property ONE_MINUS_CONSTANT_COLOR
         * @type {Number}
         * @readonly
         */
        export const ONE_MINUS_CONSTANT_COLOR:number;

        /**
         * the constant variable equals gl.LINEAR for texture
         * @property LINEAR
         * @type {Number}
         * @readonly
         */
        export const LINEAR:number;

        /**
         * default gl blend dst function. Compatible with premultiplied alpha images.
         * @property BLEND_DST
         * @type {Number}
         * @readonly
         */
        export const BLEND_DST:number;


        //Possible device orientations

        /**
         * Device oriented vertically, home button on the bottom (UIDeviceOrientationPortrait)
         * @property WEB_ORIENTATION_PORTRAIT
         * @type {Number}
         * @readonly
         */
        export const WEB_ORIENTATION_PORTRAIT:number;

        /**
         * Device oriented horizontally, home button on the right (UIDeviceOrientationLandscapeLeft)
         * @property WEB_ORIENTATION_LANDSCAPE_LEFT
         * @type {Number}
         * @readonly
         */
        export const WEB_ORIENTATION_LANDSCAPE_LEFT:number;

        /**
         * Device oriented vertically, home button on the top (UIDeviceOrientationPortraitUpsideDown)
         * @property WEB_ORIENTATION_PORTRAIT_UPSIDE_DOWN
         * @type {Number}
         * @readonly
         */
        export const WEB_ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

        /**
         * Device oriented horizontally, home button on the left (UIDeviceOrientationLandscapeRight)
         * @property WEB_ORIENTATION_LANDSCAPE_RIGHT
         * @type {Number}
         * @readonly
         */
        export const WEB_ORIENTATION_LANDSCAPE_RIGHT:number;

        /**
         * Oriented vertically
         * @property ORIENTATION_PORTRAIT
         * @type {Number}
         * @readonly
         */
        export const ORIENTATION_PORTRAIT:number;

        /**
         * Oriented horizontally
         * @property ORIENTATION_LANDSCAPE
         * @type {Number}
         * @readonly
         */
        export const ORIENTATION_LANDSCAPE:number;

        /**
         * Oriented automatically
         * @property ORIENTATION_AUTO
         * @type {Number}
         * @readonly
         */
        export const ORIENTATION_AUTO:number;


        export const DENSITYDPI_DEVICE:string;
        export const DENSITYDPI_HIGH:string;
        export const DENSITYDPI_MEDIUM:string;
        export const DENSITYDPI_LOW:string;


        // ------------------- vertex attrib flags -----------------------------
        /**
         * @property VERTEX_ATTRIB_FLAG_NONE
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_FLAG_NONE:number;
        /**
         * @property VERTEX_ATTRIB_FLAG_POSITION
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_FLAG_POSITION:number;
        /**
         * @property VERTEX_ATTRIB_FLAG_COLOR
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_FLAG_COLOR:number;
        /**
         * @property VERTEX_ATTRIB_FLAG_TEX_COORDS
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_FLAG_TEX_COORDS:number;
        /**
         * @property VERTEX_ATTRIB_FLAG_POS_COLOR_TEX
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_FLAG_POS_COLOR_TEX:number;

        /**
         * GL server side states
         * @property GL_ALL
         * @type {Number}
         * @readonly
         */
        export const GL_ALL:number;

        //-------------Vertex Attributes-----------
        /**
         * @property VERTEX_ATTRIB_POSITION
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_POSITION:number;
        /**
         * @property VERTEX_ATTRIB_COLOR
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_COLOR:number;
        /**
         * @property VERTEX_ATTRIB_TEX_COORDS
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_TEX_COORDS:number;
        /**
         * @property VERTEX_ATTRIB_MAX
         * @type {Number}
         * @readonly
         */
        export const VERTEX_ATTRIB_MAX:number;

        //------------Uniforms------------------
        /**
         * @property UNIFORM_PMATRIX
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_PMATRIX:number;
        /**
         * @property UNIFORM_MVMATRIX
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_MVMATRIX:number;
        /**
         * @property UNIFORM_MVPMATRIX
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_MVPMATRIX:number;
        /**
         * @property UNIFORM_TIME
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_TIME:number;
        /**
         * @property UNIFORM_SINTIME
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_SINTIME:number;
        /**
         * @property UNIFORM_COSTIME
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_COSTIME:number;
        /**
         * @property UNIFORM_RANDOM01
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_RANDOM01:number;
        /**
         * @property UNIFORM_SAMPLER
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_SAMPLER:number;
        /**
         * @property UNIFORM_MAX
         * @type {Number}
         * @readonly
         */
        export const UNIFORM_MAX:number;

        //------------Shader Name---------------
        /**
         * @property SHADER_POSITION_TEXTURECOLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_TEXTURECOLOR:string;
        /**
         * @property SHADER_SPRITE_POSITION_TEXTURECOLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_SPRITE_POSITION_TEXTURECOLOR:string;
        /**
         * @property SHADER_POSITION_TEXTURECOLORALPHATEST
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_TEXTURECOLORALPHATEST:string;
        /**
         * @property SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST
         * @type {String}
         * @readonly
         */
        export const SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST:string;
        /**
         * @property SHADER_POSITION_COLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_COLOR:string;
        /**
         * @property SHADER_SPRITE_POSITION_COLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_SPRITE_POSITION_COLOR:string;
        /**
         * @property SHADER_POSITION_TEXTURE
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_TEXTURE:string;
        /**
         * @property SHADER_POSITION_TEXTURE_UCOLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_TEXTURE_UCOLOR:string;
        /**
         * @property SHADER_POSITION_TEXTUREA8COLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_TEXTUREA8COLOR:string;
        /**
         * @property SHADER_POSITION_UCOLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_UCOLOR:string;
        /**
         * @property SHADER_POSITION_LENGTHTEXTURECOLOR
         * @type {String}
         * @readonly
         */
        export const SHADER_POSITION_LENGTHTEXTURECOLOR:string;

        //------------uniform names----------------
        /**
         * @property UNIFORM_PMATRIX_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_PMATRIX_S:string;
        /**
         * @property UNIFORM_MVMATRIX_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_MVMATRIX_S:string;
        /**
         * @property UNIFORM_MVPMATRIX_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_MVPMATRIX_S:string;
        /**
         * @property UNIFORM_TIME_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_TIME_S:string;
        /**
         * @property UNIFORM_SINTIME_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_SINTIME_S:string;
        /**
         * @property UNIFORM_COSTIME_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_COSTIME_S:string;
        /**
         * @property UNIFORM_RANDOM01_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_RANDOM01_S:string;
        /**
         * @property UNIFORM_SAMPLER_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_SAMPLER_S:string;
        /**
         * @property UNIFORM_ALPHA_TEST_VALUE_S
         * @type {String}
         * @readonly
         */
        export const UNIFORM_ALPHA_TEST_VALUE_S:string;

        //------------Attribute names--------------
        /**
         * @property ATTRIBUTE_NAME_COLOR
         * @type {String}
         * @readonly
         */
        export const ATTRIBUTE_NAME_COLOR:string;
        /**
         * @property ATTRIBUTE_NAME_POSITION
         * @type {String}
         * @readonly
         */
        export const ATTRIBUTE_NAME_POSITION:string;
        /**
         * @property ATTRIBUTE_NAME_TEX_COORD
         * @type {String}
         * @readonly
         */
        export const ATTRIBUTE_NAME_TEX_COORD:string;


        /**
         * default size for font size
         * @property ITEM_SIZE
         * @type {Number}
         * @readonly
         */
        export const ITEM_SIZE:number;

        /**
         * default tag for current item
         * @property CURRENT_ITEM
         * @type {Number}
         * @readonly
         */
        export const CURRENT_ITEM:number;
        /**
         * default tag for zoom action tag
         * @property ZOOM_ACTION_TAG
         * @type {Number}
         * @readonly
         */
        export const ZOOM_ACTION_TAG:number;
        /**
         * default tag for normal
         * @property NORMAL_TAG
         * @type {Number}
         * @readonly
         */
        export const NORMAL_TAG:number;

        /**
         * default selected tag
         * @property SELECTED_TAG
         * @type {Number}
         * @readonly
         */
        export const SELECTED_TAG:number;

        /**
         * default disabled tag
         * @property DISABLE_TAG
         * @type {Number}
         * @readonly
         */
        export const DISABLE_TAG:number;

        // General configurations
        /**
         * <p>
         *   If enabled, the texture coordinates will be calculated by using this formula: <br/>
         *      - texCoord.left = (rect.x*2+1) / (texture.wide*2);                  <br/>
         *      - texCoord.right = texCoord.left + (rect.width*2-2)/(texture.wide*2); <br/>
         *                                                                                 <br/>
         *  The same for bottom and top.                                                   <br/>
         *                                                                                 <br/>
         *  This formula prevents artifacts by using 99% of the texture.                   <br/>
         *  The "correct" way to prevent artifacts is by using the spritesheet-artifact-fixer.py or a similar tool.<br/>
         *                                                                                  <br/>
         *  Affected nodes:                                                                 <br/>
         *      - _ccsg.Sprite / cc.SpriteBatchNode and subclasses: cc.LabelBMFont, _ccsg.TMXTiledMap <br/>
         *      - cc.LabelAtlas                                                              <br/>
         *      - cc.QuadParticleSystem                                                      <br/>
         *      - cc.TileMap                                                                 <br/>
         *                                                                                  <br/>
         *  To enabled set it to 1. Disabled by default.<br/>
         *  To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         *
         * @property {Number} FIX_ARTIFACTS_BY_STRECHING_TEXEL
         * @readonly
         */
        export const FIX_ARTIFACTS_BY_STRECHING_TEXEL:number;

        /**
         * Position of the FPS (Default: 0,0 (bottom-left corner))<br/>
         * To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * @property {Vec2} DIRECTOR_STATS_POSITION
         * @readonly
         */
        export const DIRECTOR_STATS_POSITION:Vec2;

        /**
         * <p>
         *   Seconds between FPS updates.<br/>
         *   0.5 seconds, means that the FPS number will be updated every 0.5 seconds.<br/>
         *   Having a bigger number means a more reliable FPS<br/>
         *   <br/>
         *   Default value: 0.1f<br/>
         *   To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @property {Number} DIRECTOR_FPS_INTERVAL
         * @readonly
         */
        export const DIRECTOR_FPS_INTERVAL:number;

        /**
         * <p>
         *    If enabled, the ccsg.Node objects (_ccsg.Sprite, _ccsg.Label,etc) will be able to render in subpixels.<br/>
         *    If disabled, integer pixels will be used.<br/>
         *    <br/>
         *    To enable set it to 1. Enabled by default.<br/>
         *    To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @property {Number} COCOSNODE_RENDER_SUBPIXEL
         * @readonly
         */
        export const COCOSNODE_RENDER_SUBPIXEL:number;

        /**
         * <p>
         *   If enabled, the _ccsg.Sprite objects rendered with cc.SpriteBatchNode will be able to render in subpixels.<br/>
         *   If disabled, integer pixels will be used.<br/>
         *   <br/>
         *   To enable set it to 1. Enabled by default.<br/>
         *   To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @property {Number} SPRITEBATCHNODE_RENDER_SUBPIXEL
         * @readonly
         */
        export const SPRITEBATCHNODE_RENDER_SUBPIXEL:number;

        /**
         * <p>
         *     Automatically premultiply alpha for PNG resources
         * </p>
         * @property {Number} AUTO_PREMULTIPLIED_ALPHA_FOR_PNG
         * @readonly
         */
        export const AUTO_PREMULTIPLIED_ALPHA_FOR_PNG:number;

        /**
         * <p>
         *     If most of your images have pre-multiplied alpha, set it to 1 (if you are going to use .PNG/.JPG file images).<br/>
         *     Only set to 0 if ALL your images by-pass Apple UIImage loading system (eg: if you use libpng or PVR images)<br/>
         *     <br/>
         *     To enable set it to a value different than 0. Enabled by default.<br/>
         *     To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @property {Number} OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA
         * @readonly
         */
        export const OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA:number;

        /**
         * <p>
         *   Use GL_TRIANGLE_STRIP instead of GL_TRIANGLES when rendering the texture atlas.<br/>
         *   It seems it is the recommend way, but it is much slower, so, enable it at your own risk<br/>
         *   <br/>
         *   To enable set it to a value different than 0. Disabled by default.<br/>
         *   To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @property {Number} TEXTURE_ATLAS_USE_TRIANGLE_STRIP
         * @readonly
         */
        export const TEXTURE_ATLAS_USE_TRIANGLE_STRIP:number;

        /**
         * <p>
         *    By default, cc.TextureAtlas (used by many cocos2d classes) will use VAO (Vertex Array Objects).<br/>
         *    Apple recommends its usage but they might consume a lot of memory, specially if you use many of them.<br/>
         *    So for certain cases, where you might need hundreds of VAO objects, it might be a good idea to disable it.<br/>
         *    <br/>
         *    To disable it set it to 0. disable by default.(Not Supported on WebGL)<br/>
         *    To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @property {Number} TEXTURE_ATLAS_USE_VAO
         * @readonly
         */
        export const TEXTURE_ATLAS_USE_VAO:number;

        /**
         * <p>
         *  If enabled, NPOT textures will be used where available. Only 3rd gen (and newer) devices support NPOT textures.<br/>
         *  NPOT textures have the following limitations:<br/>
         *     - They can't have mipmaps<br/>
         *     - They only accept GL_CLAMP_TO_EDGE in GL_TEXTURE_WRAP_{S,T}<br/>
         *  <br/>
         *  To enable set it to a value different than 0. Disabled by default. <br/>
         *  <br/>
         *  This value governs only the PNG, GIF, BMP, images.<br/>
         *  This value DOES NOT govern the PVR (PVR.GZ, PVR.CCZ) files. If NPOT PVR is loaded, then it will create an NPOT texture ignoring this value.<br/>
         *  To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
         * </p>
         * @readonly
         * @type {Number}
         * @deprecated This value will be removed in 1.1 and NPOT textures will be loaded by default if the device supports it.
         */
        export const TEXTURE_NPOT_SUPPORT:number;

        /**
         * <p>
         *     If enabled, it will use LA88 (Luminance Alpha 16-bit textures) for CCLabelTTF objects. <br/>
         *     If it is disabled, it will use A8 (Alpha 8-bit textures).                              <br/>
         *     LA88 textures are 6% faster than A8 textures, but they will consume 2x memory.         <br/>
         *                                                                                            <br/>
         *     This feature is enabled by default.
         * </p>
         * @property {Number} USE_LA88_LABELS
         * @readonly
         */
        export const USE_LA88_LABELS:number;

        /**
         * <p>
         *   If enabled, all subclasses of _ccsg.Sprite will draw a bounding box<br/>
         *   Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
         *   <br/>
         *   To enable set it to a value different than 0. Disabled by default:<br/>
         *      0 -- disabled<br/>
         *      1 -- draw bounding box<br/>
         *      2 -- draw texture box
         * </p>
         * @property {Number} SPRITE_DEBUG_DRAW
         * @readonly
         */
        export const SPRITE_DEBUG_DRAW:number;

        /**
         * <p>
         *   If enabled, all subclasses of cc.LabelBMFont will draw a bounding box <br/>
         *   Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
         *   <br/>
         *   To enable set it to a value different than 0. Disabled by default.<br/>
         * </p>
         * @property {Number} LABELBMFONT_DEBUG_DRAW
         * @readonly
         */
        export const LABELBMFONT_DEBUG_DRAW:number;

        /**
         * <p>
         *    If enabled, all subclasses of cc.LabelAtlas will draw a bounding box<br/>
         *    Useful for debugging purposes only. It is recommend to leave it disabled.<br/>
         *    <br/>
         *    To enable set it to a value different than 0. Disabled by default.
         * </p>
         * @property {Number} LABELATLAS_DEBUG_DRAW
         * @readonly
         */
        export const LABELATLAS_DEBUG_DRAW:number;

        /**
         * <p>
         *    If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.                  <br/>
         *    If you run 2 or more 'position' actions at the same time on a node, then end position will be the sum of all the positions.        <br/>
         *    If disabled, only the last run action will take effect.
         * </p>
         * @property {Number} ENABLE_STACKABLE_ACTIONS
         * @readonly
         */
        export const ENABLE_STACKABLE_ACTIONS:number;

        /**
         * <p>
         *      If enabled, cocos2d will maintain an OpenGL state cache internally to avoid unnecessary switches.                                     <br/>
         *      In order to use them, you have to use the following functions, instead of the the GL ones:                                             <br/>
         *          - cc.gl.useProgram() instead of glUseProgram()                                                                                      <br/>
         *          - cc.gl.deleteProgram() instead of glDeleteProgram()                                                                                <br/>
         *          - cc.gl.blendFunc() instead of glBlendFunc()                                                                                        <br/>
         *                                                                                                                                            <br/>
         *      If this functionality is disabled, then cc.gl.useProgram(), cc.gl.deleteProgram(), cc.gl.blendFunc() will call the GL ones, without using the cache.              <br/>
         *      It is recommend to enable whenever possible to improve speed.                                                                        <br/>
         *      If you are migrating your code from GL ES 1.1, then keep it disabled. Once all your code works as expected, turn it on.
         * </p>
         * @property {Number} ENABLE_GL_STATE_CACHE
         * @readonly
         */
        // Editors do not need to cache fix bug for https://github.com/cocos-creator/fireball/issues/3079
        export const ENABLE_GL_STATE_CACHE:number;
    }

    // /**
    //  * default gl blend src function. Compatible with premultiplied alpha images.
    //  * @property BLEND_SRC
    //  * @type {Number}
    //  * @readonly
    //  */
    // cc.defineGetterSetter(cc.macro, "BLEND_SRC", function (){
    //     if (cc._renderType === cc.game.RENDER_TYPE_WEBGL
    //          && cc.macro.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA) {
    //         return cc.macro.ONE;
    //     }
    //     else {
    //         return cc.macro.SRC_ALPHA;
    //     }
    // });

    /**
     * <p>
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * </p>
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @method lerp
     * @example {@link utils/api/engine/docs/cocos2d/core/platform/CCMacro/lerp.js}
     */
    export function lerp(a:number, b:number, r:number):number;

    /**
     * get a random number from 0 to 0xffffff
     * @method rand
     * @returns {Number}
     */
    export function rand():number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @method randomMinus1To1
     */
    export function randomMinus1To1():number;

    /**
     * returns a random float between 0 and 1, use Math.random directly
     * @return {Number}
     * @method random0To1
     */
    export function random0To1():number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @method degreesToRadians
     */
    export function degreesToRadians(angle:number):number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @method radiansToDegrees
     */
    export function radiansToDegrees(angle:number):number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {Node} node setup node
     * @method nodeDrawSetup
     */
    export function nodeDrawSetup(node:Node):void;

    /*
     * <p>
     *     GL states that are enabled:<br/>
     *       - GL_TEXTURE_2D<br/>
     *       - GL_VERTEX_ARRAY<br/>
     *       - GL_TEXTURE_COORD_ARRAY<br/>
     *       - GL_COLOR_ARRAY<br/>
     * </p>
     * @method enableDefaultGLStates
     */
    // cc.enableDefaultGLStates = function () {
        //TODO OPENGL STUFF
        /*
         glEnableClientState(GL_VERTEX_ARRAY);
         glEnableClientState(GL_COLOR_ARRAY);
         glEnableClientState(GL_TEXTURE_COORD_ARRAY);
         glEnable(GL_TEXTURE_2D);*/
    // };

    /*
     * <p>
     *   Disable default GL states:<br/>
     *     - GL_TEXTURE_2D<br/>
     *     - GL_TEXTURE_COORD_ARRAY<br/>
     *     - GL_COLOR_ARRAY<br/>
     * </p>
     * @method disableDefaultGLStates
     */
    // cc.disableDefaultGLStates = function () {
        //TODO OPENGL
        /*
         glDisable(GL_TEXTURE_2D);
         glDisableClientState(GL_COLOR_ARRAY);
         glDisableClientState(GL_TEXTURE_COORD_ARRAY);
         glDisableClientState(GL_VERTEX_ARRAY);
         */
    // };

    /**
     * <p>
     *  Increments the GL Draws counts by one.<br/>
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
     * </p>
     * @param {Number} addNumber
     * @method incrementGLDraws
     */
    export function incrementGLDraws(addNumber:number):void;

    /**
     * Check webgl error.Error will be shown in console if exists.
     * @method checkGLErrorDebug
     */
    export function checkGLErrorDebug():void;

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCObject.js
    //+--------------------------------------------------------------------------------
    /**
     * Bit mask that controls object states.
     * @class Flags
     * @static
     * @private
     */
    // export class Flags extends Enum {
    export class Flags {
        public static readonly Destroyed:Flags;

        /**
         * !#en The object will not be saved.
         * !#zh 该对象将不会被保存。
         * @property {Number} DontSave
         */
        public static readonly DontSave:Flags;

        /**
         * !#en The object will not be saved when building a player.
         * !#zh 构建项目时，该对象将不会被保存。
         * @property {Number} EditorOnly
         */
        public static readonly EditorOnly:Flags;

        public static readonly Dirty:Flags;

        /**
         * !#en Dont destroy automatically when loading a new scene.
         * !#zh 加载一个新场景时，不自动删除该对象
         * @property DontDestroy
         * @private
         */
        public static readonly DontDestroy:Flags;

        public static readonly PersistentMask:Flags;

        // FLAGS FOR ENGINE
        public static readonly Destroying:Flags;
        public static readonly Activating:Flags;

        // FLAGS FOR COMPONENT
        public static readonly IsPreloadCalled:Flags;
        public static readonly IsOnLoadCalled:Flags;
        public static readonly IsOnLoadStarted:Flags;
        public static readonly IsOnEnableCalled:Flags;
        public static readonly IsStartCalled:Flags;
        public static readonly IsEditorOnEnableCalled:Flags;

        public static readonly IsPositionLocked:Flags;
        public static readonly IsRotationLocked:Flags;
        public static readonly IsScaleLocked:Flags;
        public static readonly IsAnchorLocked:Flags;
        public static readonly IsSizeLocked:Flags;
    }

    /**
     * The base class of most of all the objects in Fireball.
     * @class Object
     * @constructor
     * @main
     * @private
     */
    export class Object {
        public static readonly Flags:Flags;

        /**
         * !#en The name of the object.
         * !#zh 该对象的名称。
         * @property {String} name
         * @default ""
         * @example
         * obj.name = "New Obj";
         */
        public name:string;

        /**
         * !#en Indicates whether the object is not yet destroyed.
         * !#zh 表示该对象是否可用（被销毁后将不可用）。
         * @property {Boolean} isValid
         * @default true
         * @readOnly
         * @example
         * cc.log(obj.isValid);
         */
        public isValid:boolean;

        /**
         * !#en
         * Destroy this Object, and release all its own references to other objects.<br/>
         * Actual object destruction will delayed until before rendering.
         * <br/>
         * After destroy, this CCObject is not usable any more.
         * You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.
         * !#zh
         * 销毁该对象，并释放所有它对其它对象的引用。<br/>
         * 销毁后，CCObject 不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。
         * 实际销毁操作会延迟到当前帧渲染前执行。
         * @method destroy
         * @return {Boolean} whether it is the first time the destroy being called
         * @example
         * obj.destroy();
         */
        public destroy();
    }

    /**
     * !#en Checks whether the object is non-nil and not yet destroyed.
     * !#zh 检查该对象是否不为 null 并且尚未销毁。
     * @method isValid
     * @param {any} value
     * @return {Boolean} whether is valid
     * @example
     * cc.log(cc.isValid(target));
     */
    export function isValid(value:any):boolean;

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCSaxParser.js
    //+--------------------------------------------------------------------------------
    /**
     * A SAX Parser
     * @class saxParser
     */
    // cc.SAXParser = cc._Class.extend(/** @lends cc.saxParser# */{
    export class SAXParser {
        /**
         * Constructor of cc.SAXParser
         */
        public constructor();

        /**
         * @method parse
         * @param {String} xmlTxt
         * @return {Document}
         */
        public parse(xmlTxt:string):Document;
    }

    export interface PlistObject {
        [key:string]: any;
    }

    /**
     * NOTE: PListParser will not extend SAXParser in these TF definitions, because it conflicts with the return value of the parse() method.
     * cc.plistParser is a singleton object for parsing plist files
     * @class plistParser
     */
    export class PlistParser {
        /**
         * parse a xml string as plist object.
         * @param {String} xmlTxt - plist xml contents
         * @return {*} plist object
         */
        public parse(xmlTxt:string):PlistObject;
    }

    /**
     * @type {SAXParser}
     * @name saxParser
     * A SAX Parser
     */
    export const saxParser:SAXParser;

    /**
     * @type {PlistParser}
     * @name plistParser
     * A Plist Parser
     */
    export const plistParser:PlistParser;


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCScreen.js
    //+--------------------------------------------------------------------------------

    export interface FullScreenChangeCallback { ():void; }

    /**
     * The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
     * It's invalid on safari, QQbrowser and android browser
     * @class screen
     */
    export class Screen {
        /**
         * initialize
         * @method init
         */
        public init():void;
        
        /**
         * return true if it's full now.
         * @method fullScreen
         * @returns {Boolean}
         */
        public fullScreen():boolean;
        
        /**
         * change the screen to full mode.
         * @method requestFullScreen
         * @param {Element} element
         * @param {Function} onFullScreenChange
         */
        public requestFullScreen(element:Element, onFullScreenChange:FullScreenChangeCallback):void;
        
        /**
         * exit the full mode.
         * @method exitFullScreen
         * @return {Boolean}
         */
        public exitFullScreen():boolean;
        
        /**
         * Automatically request full screen with a touch/click event
         * @method autoFullScreen
         * @param {Element} element
         * @param {Function} onFullScreenChange
         */
        public autoFullScreen(element:Element, onFullScreenChange:FullScreenChangeCallback):void;
    }

    export const screen:Screen;

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCSys.js
    //+--------------------------------------------------------------------------------
    export namespace Sys {
        export class Capabilities {
            public canvas:boolean;
            public opengl:boolean;
            public touches:boolean;
            public mouse:boolean;
            public keyboard:boolean;
            public accelerometer:boolean;
        }
    }

    /**
     * System variables
     * @class sys
     * @static
     */
    export class Sys {

        /**
         * English language code
         * @property {String} LANGUAGE_ENGLISH
         * @readOnly
         */
        public readonly LANGUAGE_ENGLISH:string;

        /**
         * Chinese language code
         * @property {String} LANGUAGE_CHINESE
         * @readOnly
         */
        public readonly LANGUAGE_CHINESE:string;

        /**
         * French language code
         * @property {String} LANGUAGE_FRENCH
         * @readOnly
         */
        public readonly LANGUAGE_FRENCH:string;

        /**
         * Italian language code
         * @property {String} LANGUAGE_ITALIAN
         * @readOnly
         */
        public readonly LANGUAGE_ITALIAN:string;

        /**
         * German language code
         * @property {String} LANGUAGE_GERMAN
         * @readOnly
         */
        public readonly LANGUAGE_GERMAN:string;

        /**
         * Spanish language code
         * @property {String} LANGUAGE_SPANISH
         * @readOnly
         */
        public readonly LANGUAGE_SPANISH:string;

        /**
         * Spanish language code
         * @property {String} LANGUAGE_DUTCH
         * @readOnly
         */
        public readonly LANGUAGE_DUTCH:string;

        /**
         * Russian language code
         * @property {String} LANGUAGE_RUSSIAN
         * @readOnly
         */
        public readonly LANGUAGE_RUSSIAN:string;

        /**
         * Korean language code
         * @property {String} LANGUAGE_KOREAN
         * @readOnly
         */
        public readonly LANGUAGE_KOREAN:string;

        /**
         * Japanese language code
         * @property {String} LANGUAGE_JAPANESE
         * @readOnly
         */
        public readonly LANGUAGE_JAPANESE:string;

        /**
         * Hungarian language code
         * @property {String} LANGUAGE_HUNGARIAN
         * @readonly
         */
        public readonly LANGUAGE_HUNGARIAN:string;

        /**
         * Portuguese language code
         * @property {String} LANGUAGE_PORTUGUESE
         * @readOnly
         */
        public readonly LANGUAGE_PORTUGUESE:string;

        /**
         * Arabic language code
         * @property {String} LANGUAGE_ARABIC
         * @readOnly
         */
        public readonly LANGUAGE_ARABIC:string;

        /**
         * Norwegian language code
         * @property {String} LANGUAGE_NORWEGIAN
         * @readOnly
         */
        public readonly LANGUAGE_NORWEGIAN:string;

        /**
         * Polish language code
         * @property {String} LANGUAGE_POLISH
         * @readOnly
         */
        public readonly LANGUAGE_POLISH:string;

        /**
         * Unknown language code
         * @property {String} LANGUAGE_UNKNOWN
         * @readOnly
         */
        public readonly LANGUAGE_UNKNOWN:string;

        /**
         * @property {String} OS_IOS
         * @readOnly
         */
        public readonly OS_IOS:string;

        /**
         * @property {String} OS_ANDROID
         * @readOnly
         */
        public readonly OS_ANDROID:string;

        /**
         * @property {String} OS_WINDOWS
         * @readOnly
         */
        public readonly OS_WINDOWS:string;

        /**
         * @property {String} OS_MARMALADE
         * @readOnly
         */
        public readonly OS_MARMALADE:string;

        /**
         * @property {String} OS_LINUX
         * @readOnly
         */
        public readonly OS_LINUX:string;

        /**
         * @property {String} OS_BADA
         * @readOnly
         */
        public readonly OS_BADA:string;

        /**
         * @property {String} OS_BLACKBERRY
         * @readOnly
         */
        public readonly OS_BLACKBERRY:string;

        /**
         * @property {String} OS_OSX
         * @readOnly
         */
        public readonly OS_OSX:string;

        /**
         * @property {String} OS_WP8
         * @readOnly
         */
        public readonly OS_WP8:string;

        /**
         * @property {String} OS_WINRT
         * @readOnly
         */
        public readonly OS_WINRT:string;

        /**
         * @property {String} OS_UNKNOWN
         * @readOnly
         */
        public readonly OS_UNKNOWN:string;

        /**
         * @property {Number} UNKNOWN
         * @readOnly
         * @default -1
         */
        public readonly UNKNOWN:number;

        /**
         * @property {Number} WIN32
         * @readOnly
         * @default 0
         */
        public readonly WIN32:number;

        /**
         * @property {Number} LINUX
         * @readOnly
         * @default 1
         */
        public readonly LINUX:number;

        /**
         * @property {Number} MACOS
         * @readOnly
         * @default 2
         */
        public readonly MACOS:number;

        /**
         * @property {Number} ANDROID
         * @readOnly
         * @default 3
         */
        public readonly ANDROID:number;

        /**
         * @property {Number} IPHONE
         * @readOnly
         * @default 4
         */
        public readonly IPHONE:number;

        /**
         * @property {Number} IPAD
         * @readOnly
         * @default 5
         */
        public readonly IPAD:number;

        /**
         * @property {Number} BLACKBERRY
         * @readOnly
         * @default 6
         */
        public readonly BLACKBERRY:number;

        /**
         * @property {Number} NACL
         * @readOnly
         * @default 7
         */
        public readonly NACL:number;

        /**
         * @property {Number} EMSCRIPTEN
         * @readOnly
         * @default 8
         */
        public readonly EMSCRIPTEN:number;

        /**
         * @property {Number} TIZEN
         * @readOnly
         * @default 9
         */
        public readonly TIZEN:number;

        /**
         * @property {Number} WINRT
         * @readOnly
         * @default 10
         */
        public readonly WINRT:number;

        /**
         * @property {Number} WP8
         * @readOnly
         * @default 11
         */
        public readonly WP8:number;

        /**
         * @property {Number} MOBILE_BROWSER
         * @readOnly
         * @default 100
         */
        public readonly MOBILE_BROWSER:number;

        /**
         * @property {Number} DESKTOP_BROWSER
         * @readOnly
         * @default 101
         */
        public readonly DESKTOP_BROWSER:number;

        /**
         * Indicates whether executes in editor's window process (Electron's renderer context)
         * @property {Number} EDITOR_PAGE
         * @readOnly
         * @default 102
         */
        public readonly EDITOR_PAGE:number;

        /**
         * Indicates whether executes in editor's main process (Electron's browser context)
         * @property {Number} EDITOR_CORE
         * @readOnly
         * @default 103
         */
        public readonly EDITOR_CORE:number;

        /**
         * BROWSER_TYPE_WECHAT
         * @property {String} BROWSER_TYPE_WECHAT
         * @readOnly
         * @default "wechat"
         */
        public readonly BROWSER_TYPE_WECHAT:string;

        /**
         *
         * @property {String} BROWSER_TYPE_ANDROID
         * @readOnly
         * @default "androidbrowser"
         */
        public readonly BROWSER_TYPE_ANDROID:string;

        /**
         *
         * @property {String} BROWSER_TYPE_IE
         * @readOnly
         * @default "ie"
         */
        public readonly BROWSER_TYPE_IE:string;

        /**
         *
         * @property {String} BROWSER_TYPE_QQ
         * @readOnly
         * @default "qqbrowser"
         */
        public readonly BROWSER_TYPE_QQ:string;

        /**
         *
         * @property {String} BROWSER_TYPE_MOBILE_QQ
         * @readOnly
         * @default "mqqbrowser"
         */
        public readonly BROWSER_TYPE_MOBILE_QQ:string;

        /**
         *
         * @property {String} BROWSER_TYPE_UC
         * @readOnly
         * @default "ucbrowser"
         */
        public readonly BROWSER_TYPE_UC:string;

        /**
         *
         * @property {String} BROWSER_TYPE_360
         * @readOnly
         * @default "360browser"
         */
        public readonly BROWSER_TYPE_360:string;

        /**
         *
         * @property {String} BROWSER_TYPE_BAIDU_APP
         * @readOnly
         * @default "baiduboxapp"
         */
        public readonly BROWSER_TYPE_BAIDU_APP:string;

        /**
         *
         * @property {String} BROWSER_TYPE_BAIDU
         * @readOnly
         * @default "baidubrowser"
         */
        public readonly BROWSER_TYPE_BAIDU:string;

        /**
         *
         * @property {String} BROWSER_TYPE_MAXTHON
         * @readOnly
         * @default "maxthon"
         */
        public readonly BROWSER_TYPE_MAXTHON:string;

        /**
         *
         * @property {String} BROWSER_TYPE_OPERA
         * @readOnly
         * @default "opera"
         */
        public readonly BROWSER_TYPE_OPERA:string;

        /**
         *
         * @property {String} BROWSER_TYPE_OUPENG
         * @readOnly
         * @default "oupeng"
         */
        public readonly BROWSER_TYPE_OUPENG:string;

        /**
         *
         * @property {String} BROWSER_TYPE_MIUI
         * @readOnly
         * @default "miuibrowser"
         */
        public readonly BROWSER_TYPE_MIUI:string;

        /**
         *
         * @property {String} BROWSER_TYPE_FIREFOX
         * @readOnly
         * @default "firefox"
         */
        public readonly BROWSER_TYPE_FIREFOX:string;

        /**
         *
         * @property {String} BROWSER_TYPE_SAFARI
         * @readOnly
         * @default "safari"
         */
        public readonly BROWSER_TYPE_SAFARI:string;

        /**
         *
         * @property {String} BROWSER_TYPE_CHROME
         * @readOnly
         * @default "chrome"
         */
        public readonly BROWSER_TYPE_CHROME:string;

        /**
         *
         * @property {String} BROWSER_TYPE_LIEBAO
         * @readOnly
         * @default "liebao"
         */
        public readonly BROWSER_TYPE_LIEBAO:string;

        /**
         *
         * @property {String} BROWSER_TYPE_QZONE
         * @readOnly
         * @default "qzone"
         */
        public readonly BROWSER_TYPE_QZONE:string;

        /**
         *
         * @property {String} BROWSER_TYPE_SOUGOU
         * @readOnly
         * @default "sogou"
         */
        public readonly BROWSER_TYPE_SOUGOU:string;

        /**
         *
         * @property {String} BROWSER_TYPE_UNKNOWN
         * @readOnly
         * @default "unknown"
         */
        public readonly BROWSER_TYPE_UNKNOWN:string;

        /**
         * Is native ? This is set to be true in jsb auto.
         * @property {Boolean} isNative
         */
        public readonly isNative:boolean;

        /**
         * Is web browser ?
         * @property {Boolean} isBrowser
         */
        public readonly isBrowser:boolean;

        public readonly isMobile:boolean;
        public readonly platform:number;

        /**
         * Indicate the current language of the running system
         * @property {String} language
         */
        public readonly language:string;

        /**
         * Indicate the running os name
         * @property {String} os
         */
        public readonly os:string;

        /**
         * Indicate the running browser type
         * @property {String} browserType
         */
        public readonly browserType:string;

        /**
         * Indicate the running browser version
         * @property {Number} browserVersion
         */
        public readonly browserVersion:string;

        /**
         * Indicate the real pixel resolution of the whole game window
         * @property {Size} windowPixelResolution
         */
        public readonly windowPixelResolution:Size;

        /**
         * Indicate the running os version
         * @property {String} osVersion
         */
        public readonly osVersion:string;

        /**
         * Indicate the running os main version
         * @property {Number} osMainVersion
         */
        public readonly osMainVersion:string;

        /**
         * cc.sys.localStorage is a local storage component.
         * @property {Object} localStorage
         */
        public readonly localStorage:LocalStorage;

        /**
         * The capabilities of the current platform
         * @property {SysCapabilities} capabilities
         */
        public readonly capabilities:Sys.Capabilities;

        /**
         * Forces the garbage collection, only available in JSB
         * @method garbageCollect
         */
        public garbageCollect():void;

        /**
         * Dumps rooted objects, only available in JSB
         * @method dumpRoot
         */
        public dumpRoot():void;

        /**
         * Restart the JS VM, only available in JSB
         * @method restartVM
         */
        public restartVM():void;

        /**
         * Clean a script in the JS VM, only available in JSB
         * @method cleanScript
         * @param {String} jsfile
         */
        public cleanScript(jsfile:string):void;

        /**
         * Check whether an object is valid,
         * In web engine, it will return true if the object exist
         * In native engine, it will return true if the JS object and the correspond native object are both valid
         * @method isObjectValid
         * @param {Object} obj
         * @return {Boolean} Validity of the object
         */
        public isObjectValid(obj:Object):boolean;

        /**
         * Dump system informations
         * @method dump
         */
        public dump():void;

        /**
         * Open a url in browser
         * @method openURL
         * @param {String} url
         */
        public openURL(url:string):void;
    }

    export const sys:Sys;

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCView.js
    //+--------------------------------------------------------------------------------
    export namespace View {
        export interface ResizeCallback { ():void }
    }

    /**
     * cc.view is the singleton object which represents the game window.<br/>
     * It's main task include: <br/>
     *  - Apply the design resolution policy<br/>
     *  - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
     *  - Manage the game view port which can be different with the window<br/>
     *  - Manage the content scale and translation<br/>
     * <br/>
     * Since the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>
     * the standard way to use it is by calling:<br/>
     *  - cc.view.methodName(); <br/>
     *
     * @class View
     */
    export class View extends Class {
        /**
         * Constructor of View
         */
        public constructor();

        /**
         * <p>
         * Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
         *   1. cc.macro.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
         *   2. cc.macro.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
         *   3. cc.macro.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
         *   4. cc.macro.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
         *   5. Custom value, e.g: "480"                                                         <br/>
         * </p>
         *
         * @method setTargetDensityDPI
         * @param {String} densityDPI
         */
        public setTargetDensityDPI(densityDPI:string):void;

        /**
         * Returns the current target-densitydpi value of cc.view.
         * @method getTargetDensityDPI
         * @returns {String}
         */
        public getTargetDensityDPI():string;

        /**
         * Sets whether resize canvas automatically when browser's size changed.<br/>
         * Useful only on web.
         * @method resizeWithBrowserSize
         * @param {Boolean} enabled - Whether enable automatic resize with browser's resize event
         */
        public resizeWithBrowserSize(enabled:boolean):void;

        /**
         * Sets the callback function for cc.view's resize action,<br/>
         * this callback will be invoked before applying resolution policy, <br/>
         * so you can do any additional modifications within the callback.<br/>
         * Useful only on web.
         * @method setResizeCallback
         * @param {Function|Null} callback - The callback function
         */
        public setResizeCallback(callback:View.ResizeCallback):void;

        /**
         * Sets the orientation of the game, it can be landscape, portrait or auto.
         * When set it to landscape or portrait, and screen w/h ratio doesn't fit, 
         * cc.view will automatically rotate the game canvas using CSS.
         * Note that this function doesn't have any effect in native, 
         * in native, you need to set the application orientation in native project settings
         * @method setOrientation
         * @param {Number} orientation - Possible values: cc.macro.ORIENTATION_LANDSCAPE | cc.macro.ORIENTATION_PORTRAIT | cc.macro.ORIENTATION_AUTO
         */
        public setOrientation(orientation:number):void;

        public initialize():void;

        /**
         * Sets whether the engine modify the "viewport" meta in your web page.<br/>
         * It's enabled by default, we strongly suggest you not to disable it.<br/>
         * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
         * Only useful on web
         * @method adjustViewPort
         * @param {Boolean} enabled - Enable automatic modification to "viewport" meta
         */
        public adjustViewPort(enabled:boolean):void;

        /**
         * Retina support is enabled by default for Apple device but disabled for other devices,<br/>
         * it takes effect only when you called setDesignResolutionPolicy<br/>
         * Only useful on web
         * @method enableRetina
         * @param {Boolean} enabled - Enable or disable retina display
         */
        public enableRetina(enabled:boolean):void;

        /**
         * Check whether retina display is enabled.<br/>
         * Only useful on web
         * @method isRetinaEnabled
         * @return {Boolean}
         */
        public isRetinaEnabled():boolean;

        /**
         * !#en Whether to Enable on anti-alias
         * !#zh 控制抗锯齿是否开启
         * @method enableAntiAlias
         * @param {Boolean} enabled - Enable or not anti-alias
         */
        public enableAntiAlias(enabled:boolean):void;

        /**
         * !#en Returns whether the current enable on anti-alias
         * !#zh 返回当前是否抗锯齿
         * @method isAntiAliasEnabled
         * @return {Boolean}
         */
        public isAntiAliasEnabled():boolean;

        /**
         * If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
         * You can pass true as parameter to enable it and disable it by passing false.<br/>
         * Only useful on web
         * @method enableAutoFullScreen
         * @param {Boolean} enabled - Enable or disable auto full screen on mobile devices
         */
        public enableAutoFullScreen(enabled:boolean):void;

        /**
         * Check whether auto full screen is enabled.<br/>
         * Only useful on web
         * @method isAutoFullScreenEnabled
         * @return {Boolean} Auto full screen enabled or not
         */
        public isAutoFullScreenEnabled():boolean;

        /**
         * Get whether render system is ready(no matter opengl or canvas),<br/>
         * this name is for the compatibility with cocos2d-x, subclass must implement this method.
         * @method isViewReady
         * @return {Boolean}
         */
        public isViewReady():boolean;

        /*
         * Set zoom factor for frame. This method is for debugging big resolution (e.g.new ipad) app on desktop.
         * @method setFrameZoomFactor
         * @param {Number} zoomFactor
         */
        public setFrameZoomFactor(zoomFactor:number):void;

        /**
         * Sets the resolution translate on View.
         * @method setContentTranslateLeftTop
         * @param {Number} offsetLeft
         * @param {Number} offsetTop
         */
        public setContentTranslateLeftTop(offsetLeft:number, offsetTop:number):void;

        /**
         * Returns the resolution translate on View
         * @method getContentTranslateLeftTop
         * @return {Size|Object}
         */
        public getContentTranslateLeftTop():Size;

        /*
         * Not support on native.<br/>
         * On web, it sets the size of the canvas.
         * @method setCanvasSize
         * @param {Number} width
         * @param {Number} height
         */
        public setCanvasSize(width:number, height:number):void;

        /*
         * Returns the canvas size of the view.<br/>
         * On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
         * On web, it returns the size of the canvas element.
         * @method getCanvasSize
         * @return {Size}
         */
        public getCanvasSize():Size;

        /**
         * Returns the frame size of the view.<br/>
         * On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
         * On web, it returns the size of the canvas's outer DOM element.
         * @method getFrameSize
         * @return {Size}
         */
        public getFrameSize():Size;

        /**
         * On native, it sets the frame size of view.<br/>
         * On web, it sets the size of the canvas's outer DOM element.
         * @method setFrameSize
         * @param {Number} width
         * @param {Number} height
         */
        public setFrameSize(width:number, height:number):void;

        /**
         * Returns the visible area size of the view port.
         * @method getVisibleSize
         * @return {Size}
         */
        public getVisibleSize():Size;

        /**
         * Returns the visible area size of the view port.
         * @method getVisibleSizeInPixel
         * @return {Size}
         */
        public getVisibleSizeInPixel():Size;

        /**
         * Returns the visible origin of the view port.
         * @method getVisibleOrigin
         * @return {Vec2}
         */
        public getVisibleOrigin():Vec2;

        /**
         * Returns the visible origin of the view port.
         * @method getVisibleOriginInPixel
         * @return {Vec2}
         */
        public getVisibleOriginInPixel():Vec2;

        /**
         * Returns whether developer can set content's scale factor.
         * @method canSetContentScaleFactor
         * @return {Boolean}
         */
        public canSetContentScaleFactor():boolean; 

        /**
         * Returns the current resolution policy
         * @see cc.ResolutionPolicy
         * @method getResolutionPolicy
         * @return {ResolutionPolicy}
         */
        public getResolutionPolicy():ResolutionPolicy;

        /**
         * Sets the current resolution policy
         * @see cc.ResolutionPolicy
         * @method setResolutionPolicy
         * @param {ResolutionPolicy} resolutionPolicy
         */
        public setResolutionPolicy(resolutionPolicy:ResolutionPolicy):void;

        /**
         * Sets the resolution policy with designed view size in points.<br/>
         * The resolution policy include: <br/>
         * [1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
         * [2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
         * [3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
         * [4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
         * [5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
         * [cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/>
         * @method setDesignResolutionSize
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {ResolutionPolicy} resolutionPolicy The resolution policy desired
         */
        public setDesignResolutionSize(width:number, height:number, resolutionPolicy:ResolutionPolicy):void;

        /**
         * Returns the designed size for the view.
         * Default resolution size is the same as 'getFrameSize'.
         * @method getDesignResolutionSize
         * @return {Size}
         */
        public getDesignResolutionSize():Size;

        /**
         * Sets the container to desired pixel resolution and fit the game content to it.
         * This function is very useful for adaptation in mobile browsers.
         * In some HD android devices, the resolution is very high, but its browser performance may not be very good.
         * In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
         * But this API can be helpful to set a desired pixel resolution which is in between.
         * This API will do the following:
         *     1. Set viewport's width to the desired width in pixel
         *     2. Set body width to the exact pixel resolution
         *     3. The resolution policy will be reset with designed view size in points.
         * @method setRealPixelResolution
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {ResolutionPolicy} resolutionPolicy The resolution policy desired
         */
        public setRealPixelResolution(width:number, height:number, resolutionPolicy:ResolutionPolicy):void;

        /**
         * Sets view port rectangle with points.
         * @method setViewPortInPoints
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w width
         * @param {Number} h height
         */
        public setViewPortInPoints(x:number, y:number, w:number, h:number):void;

        /**
         * Sets Scissor rectangle with points.
         * @method setScissorInPoints
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w
         * @param {Number} h
         */
        public setScissorInPoints(x:number, y:number, w:number, h:number):void;

        /**
         * Returns whether GL_SCISSOR_TEST is enable
         * @method isScissorEnabled
         * @return {Boolean}
         */
        public isScissorEnabled():boolean;

        /**
         * Returns the current scissor rectangle
         * @method getScissorRect
         * @return {Rect}
         */
        public getScissorRect():Rect;

        /**
         * Sets the name of the view
         * @method setViewName
         * @param {String} viewName
         */
        public setViewName(viewName:string):void;

        /**
         * Returns the name of the view
         * @method getViewName
         * @return {String}
         */
        public getViewName():string;

        /**
         * Returns the view port rectangle.
         * @method getViewPortRect
         * @return {Rect}
         */
        public getViewPortRect():Rect;

        /**
         * Returns scale factor of the horizontal direction (X axis).
         * @method getScaleX
         * @return {Number}
         */
        public getScaleX():number;

        /**
         * Returns scale factor of the vertical direction (Y axis).
         * @method getScaleY
         * @return {Number}
         */
        public getScaleY():number;

        /**
         * Returns device pixel ratio for retina display.
         * @method getDevicePixelRatio
         * @return {Number}
         */
        public getDevicePixelRatio():number;

        /**
         * Returns the real location in view for a translation based on a related position
         * @method convertToLocationInView
         * @param {Number} tx - The X axis translation
         * @param {Number} ty - The Y axis translation
         * @param {Object} relatedPos - The related position object including "left", "top", "width", "height" informations
         * @return {Vec2}
         */
        public convertToLocationInView(tx:number, ty:number, relatedPos:HTMLElementPosition):Vec2;
    }

    /**
     * <p>cc.ContainerStrategy class is the root strategy class of container's scale strategy,
     * it controls the behavior of how to scale the cc.container and cc.game.canvas object</p>
     *
     * @class ContainerStrategy
     */
    export class ContainerStrategy extends Class {
        /**
         * Manipulation before appling the strategy
         * @method preApply
         * @param {View} view - The target view
         */
        public preApply(view:View):void;

        /**
         * Function to apply this strategy
         * @method apply
         * @param {View} view
         * @param {Size} designedResolution
         */
        public apply(view:View, designedResolution:Size):void;

        /**
         * Manipulation after applying the strategy
         * @method postApply
         * @param {View} view  The target view
         */
        public postApply(view:View):void;
    }

    export namespace ContentStrategy {
        export interface ScaleAndViewportRect {
            scale?:number[];
            viewport?:Rect;
        }
    }

    /**
     * <p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
     * it controls the behavior of how to scale the scene and setup the viewport for the game</p>
     *
     * @class ContentStrategy
     */
    export class ContentStrategy extends Class {
        // #NOT STABLE on Android# Alias: Strategy that makes the container's size equals to the window's size
        // public static readonly EQUAL_TO_WINDOW:ContainerStrategy;

        // #NOT STABLE on Android# Alias: Strategy that scale proportionally the container's size to window's size
        // public static readonly PROPORTION_TO_WINDOW:ContainerStrategy;

        // Alias: Strategy that makes the container's size equals to the frame's size
        public static readonly EQUAL_TO_FRAME:ContainerStrategy;

        // Alias: Strategy that scale proportionally the container's size to frame's size
        public static readonly PROPORTION_TO_FRAME:ContainerStrategy;

        // Alias: Strategy that keeps the original container's size
        public static readonly ORIGINAL_CONTAINER:ContainerStrategy;

        // Alias: Strategy to scale the content's size to container's size, non proportional
        public static readonly EXACT_FIT:ContainerStrategy;

        // Alias: Strategy to scale the content's size proportionally to maximum size and keeps the whole content area to be visible
        public static readonly SHOW_ALL:ContainerStrategy;

        // Alias: Strategy to scale the content's size proportionally to fill the whole container area
        public static readonly NO_BORDER:ContainerStrategy;

        // Alias: Strategy to scale the content's height to container's height and proportionally scale its width
        public static readonly FIXED_HEIGHT:ContainerStrategy;

        // Alias: Strategy to scale the content's width to container's width and proportionally scale its height
        public static readonly FIXED_WIDTH:ContainerStrategy;


        /**
         * Manipulation before applying the strategy
         * @method preApply
         * @param {View} view - The target view
         */
        public preApply(view:View):void;

        /**
         * Function to apply this strategy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @method apply
         * @param {View} view
         * @param {Size} designedResolution
         * @return {Object} scaleAndViewportRect
         */
        public apply(view:View, designedResolution:Size):ContentStrategy.ScaleAndViewportRect;

        /**
         * Manipulation after applying the strategy
         * @method postApply
         * @param {View} view - The target view
         */
        public postApply(view:View):void;
    }

    /**
     * <p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
     * its main task is to maintain the compatibility with Cocos2d-x</p>
     *
     * @class ResolutionPolicy
     */
    export class ResolutionPolicy extends Class {
        /**
         * The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
         * Distortion can occur, and the application may appear stretched or compressed.
         * @property {Number} EXACT_FIT
         * @readonly
         * @static
         */
        public static readonly EXACT_FIT:ResolutionPolicy;

        /**
         * The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
         * while maintaining the original aspect ratio of the application.
         * @property {Number} NO_BORDER
         * @readonly
         * @static
         */
        // cc.ResolutionPolicy.NO_BORDER = 1;
        public static readonly NO_BORDER:ResolutionPolicy;

        /**
         * The entire application is visible in the specified area without distortion while maintaining the original<br/>
         * aspect ratio of the application. Borders can appear on two sides of the application.
         * @property {Number} SHOW_ALL
         * @readonly
         * @static
         */
        // cc.ResolutionPolicy.SHOW_ALL = 2;
        public static readonly SHOW_ALL:ResolutionPolicy;

        /**
         * The application takes the height of the design resolution size and modifies the width of the internal<br/>
         * canvas so that it fits the aspect ratio of the device<br/>
         * no distortion will occur however you must make sure your application works on different<br/>
         * aspect ratios
         * @property {Number} FIXED_HEIGHT
         * @readonly
         * @static
         */
        // cc.ResolutionPolicy.FIXED_HEIGHT = 3;
        public static readonly FIXED_HEIGHT:ResolutionPolicy;

        /**
         * The application takes the width of the design resolution size and modifies the height of the internal<br/>
         * canvas so that it fits the aspect ratio of the device<br/>
         * no distortion will occur however you must make sure your application works on different<br/>
         * aspect ratios
         * @property {Number} FIXED_WIDTH
         * @readonly
         * @static
         */
        // cc.ResolutionPolicy.FIXED_WIDTH = 4;
        public static readonly FIXED_WIDTH:ResolutionPolicy;

        /**
         * Unknow policy
         * @property {Number} UNKNOWN
         * @readonly
         * @static
         */
        // cc.ResolutionPolicy.UNKNOWN = 5;
        public static readonly UNKNOWN:ResolutionPolicy;

        public readonly canvasSize:Vec2;

        /**
         * Constructor of cc.ResolutionPolicy
         * @param {ContainerStrategy} containerStg
         * @param {ContentStrategy} contentStg
         */
        public constructor(containerStg:ContainerStrategy, contentStg:ContentStrategy);

        /**
         * Manipulation before applying the resolution policy
         * @method preApply
         * @param {View} view The target view
         */
        public preApply(view:View):void;

        /**
         * Function to apply this resolution policy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @method apply
         * @param {View} view - The target view
         * @param {Size} designedResolution - The user defined design resolution
         * @return {Object} An object contains the scale X/Y values and the viewport rect
         */
        public apply(view:View, designedResolution:Size):ContentStrategy.ScaleAndViewportRect;

        /**
         * Manipulation after appyling the strategy
         * @method postApply
         * @param {View} view - The target view
         */
        public postApply(view:View):void;

        /**
         * Setup the container's scale strategy
         * @method setContainerStrategy
         * @param {ContainerStrategy} containerStg
         */
        public setContainerStrategy(containerStg:ContainerStrategy):void;

        /**
         * Setup the content's scale strategy
         * @method setContentStrategy
         * @param {ContentStrategy} contentStg
         */
        public setContentStrategy(contentStg:ContentStrategy):void;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCVisibleRect.js
    //+--------------------------------------------------------------------------------

    /**
     * cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
     * it should represent the same rect as cc.view.getViewportRect()
     *
     * @class visibleRect
     */
    export class VisibleRect {
        /**
         * Top left coordinate of the screen related to the game scene.
         * @property {Vec2} topLeft
         */
        public topLeft:Vec2;

        /**
         * Top right coordinate of the screen related to the game scene.
         * @property {Vec2} topRight
         */
        public topRight:Vec2;

        /**
         * Top center coordinate of the screen related to the game scene.
         * @property {Vec2} top
         */
        public top:Vec2;

        /**
         * Bottom left coordinate of the screen related to the game scene.
         * @property {Vec2} bottomLeft
         */
        public bottomLeft:Vec2;

        /**
         * Bottom right coordinate of the screen related to the game scene.
         * @property {Vec2} bottomRight
         */
        public bottomRight:Vec2;

        /**
         * Bottom center coordinate of the screen related to the game scene.
         * @property {Vec2} bottom
         */
        public bottom:Vec2;

        /**
         * Center coordinate of the screen related to the game scene.
         * @property {Vec2} center
         */
        public center:Vec2;

        /**
         * Left center coordinate of the screen related to the game scene.
         * @property {Vec2} left
         */
        public left:Vec2;

        /**
         * Right center coordinate of the screen related to the game scene.
         * @property {Vec2} right
         */
        public right:Vec2;

        /**
         * Width of the screen.
         * @property {Number} width
         */
        public width:number;

        /**
         * Height of the screen.
         * @property {Number} height
         */
        public height:number;

        /**
         * initialize
         * @method init
         * @param {Rect} visibleRect
         */
        public init(visibleRect:Rect):void;
    }

    export const visibleRect:VisibleRect;


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/deserialize.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Contains information collected during deserialization
     * !#zh 包含反序列化时的一些信息
     * @class Details
     * @constructor
     */
    export class Details {
        /**
         * list of the depends assets' uuid
         * @property {String[]} uuidList
         */
        public uuidList:string[];

        /**
         * the obj list whose field needs to load asset by uuid
         * @property {Object[]} uuidObjList
         */
        public uuidObjList:Object[];

        /**
         * the corresponding field name which referenced to the asset
         * @property {String[]} uuidPropList
         */
        public uuidPropList:string[];

        /**
         * the corresponding field name which referenced to the raw object
         * @property {String} rawProp
         */
        public rawProp:string;

        /**
         * 用户可以指定一个在反序列化过程中会被触发的回调，该回调会在反序列化之前调用，并且传回反序列化时解析到的字段。
         * NOTE:
         * - only available in editor
         * - 会被传回的字段仅限于非 Asset 类型，并且如果字段值为 null 或 undefined，则可能不会被传回。
         * @callback visit
         * @param {Object} obj
         * @param {String} propName
         * @private
         */
        public visit:boolean;

        /**
         * @method reset
         */
        public reset():void;

        // TODO: If this needs to be exposed, figure out proper signature (not sure the proper signature for getter)
        // public assignAssetsBy(getter):void;

        /**
         * @method getUuidOf
         * @param {Object} obj
         * @param {String} propName
         * @return {String}
         */
        public getUuidOf(obj:Object, propName:string):string;

        /**
         * @method push
         * @param {Object} obj
         * @param {String} propName
         * @param {String} uuid
         */
        public push(obj:Object, propName:string, uuid:string):void;
    }

    /**
     * @module cc
     */

    /**
     * !#en Deserialize json to cc.Asset
     * !#zh 将 JSON 反序列化为对象实例。
     *
     * 当指定了 target 选项时，如果 target 引用的其它 asset 的 uuid 不变，则不会改变 target 对 asset 的引用，
     * 也不会将 uuid 保存到 result 对象中。
     *
     * @method deserialize
     * @param {String|Object} data - the serialized cc.Asset json string or json object.
     * @param {Details} [result] - additional loading result
     * @param {Object} [options]
     * @return {object} the main data(asset)
     */
    export function deserialize(data:string|Object, result?:Details, options?:Object):Object;

    export namespace deserialize {
        export const Details:Details;
        export function reportMissingClass(id:string):void;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/id-generator.js
    //+--------------------------------------------------------------------------------

    // This is a really crappy way to define this, but I'm not sure the original JS design makes a ton of sense.
    // Here are some notes:
    //  1. I'm not even sure if this needs to be exposed, if not get rid of it.
    //  2. The JS IdGenerater is a function, but also behaves like a class because it has methods (getNewId) and properties (global)
    //  3. I cannot figure out why it wasn't designed with a more standard OOP interface.
    //  4. I'm carrying over the typo in the name when declaring these TS interfaces, that only makes sense.
    export interface IdGeneraterGlobalInterface {
        /*
        * @param {string} [category] - You can specify a unique category to avoid id collision with other instance of IdGenerater
        */
        (category?:string):void;

        /*
        * @method getNewId
        * @return {string}
        */
        getNewId():string;
    }

    export interface IdGeneraterInterface {
        /*
        * The global id generater might have a conflict problem once every 365 days,
        * if the game runs at 60 FPS and each frame 4760273 counts of new id are requested.
        */
        global:IdGeneraterGlobalInterface;
    }

    export const IdGenerater:IdGeneraterInterface;

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/instantiate.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Clones the object original and returns the clone.
     *
     * See [Clone exists Entity](/en/scripting/create-destroy-entities/#instantiate)
     *
     * !#zh 复制给定的对象
     *
     * 详细用法可参考[复制已有Entity](/zh/scripting/create-destroy-entities/#instantiate)
     *
     * Instantiate 时，function 和 dom 等非可序列化对象会直接保留原有引用，Asset 会直接进行浅拷贝，可序列化类型会进行深拷贝。
     * <del>对于 Entity / Component 等 Scene Object，如果对方也会被一起 Instantiate，则重定向到新的引用，否则保留为原来的引用。</del>
     *
     * @method instantiate
     * @param {Object} original - An existing object that you want to make a copy of.
     * @return {Object} the newly instantiated object
     */
    export function instantiate(original:Object):Object;


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/js.js
    //+--------------------------------------------------------------------------------

    /**
     * This module provides some JavaScript utilities.
     * All members can be accessed with cc.js
     * @module js
     * @namespace cc.js
     */
    export namespace js {

        /**
         * Check the obj whether is number or not
         * If a number is created by using 'new Number(10086)', the typeof it will be "object"...
         * Then you can use this function if you care about this case.
         * @method isNumber
         * @param {*} obj
         * @returns {Boolean}
         */
        export function isNumber(obj:any):boolean;

        /**
         * Check the obj whether is string or not.
         * If a string is created by using 'new String("blabla")', the typeof it will be "object"...
         * Then you can use this function if you care about this case.
         * @method isString
         * @param {*} obj
         * @returns {Boolean}
         */
        export function isString(obj:any):boolean;


        /**
         * copy all properties from arguments[1...n] to obj
         * @method mixin
         * @param {Object} obj
         * @param {Object} ...sourceObj
         * @return {Object} the result obj
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface 
        // export function mixin(...obj:Object[]):Object;

        /**
         * Derive the class from the supplied base class.
         * Both classes are just native javascript constructors, not created by cc.Class, so
         * usually you will want to inherit using {{#crossLink "cc/Class:method"}}cc.Class {{/crossLink}} instead.
         *
         * @method extend
         * @param {Function} cls
         * @param {Function} base - the baseclass to inherit
         * @return {Function} the result class
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface 
        // export function extend(cls:???, base:???):???;

        /**
         * Removes all enumerable properties from object
         * @method clear
         * @param {any} obj
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface
        // export function clear(obj:any):void;

        /**
         * Get property descriptor in object and all its ancestors
         * @method getPropertyDescriptor
         * @param {Object} obj
         * @param {String} name
         * @return {Object}
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface
        // export function getPropertyDescriptor(obj:Object, name:string):Object;

        /**
         * Get class name of the object, if object is just a {} (and which class named 'Object'), it will return null.
         * (modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
         * @method getClassName
         * @param {Object|Function} obj - instance or constructor
         * @return {String}
         */
        export function getClassName(obj:Object|Function):string;

        /**
         * Register the class by specified name manually
         * @method setClassName
         * @param {String} className
         * @param {Function} constructor
         */
        export function setClassName(className:string, constructor:Function):void;

        /**
         * Unregister a class from fireball.
         *
         * If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
         * Please note that its still your responsibility to free other references to the class.
         *
         * @method unregisterClass
         * @param {Function} ...constructor - the class you will want to unregister, any number of classes can be added
         */
        export function unregisterClass(constructor:Function):void;

        /**
         * Get the registered class by name
         * @method getClassByName
         * @param {String} classname
         * @return {Function} constructor
         */
        export function getClassByName(classname:string):Function;

        /**
         * Define get set accessor, just help to call Object.defineProperty(...)
         * @method getset
         * @param {any} obj
         * @param {String} prop
         * @param {Function} getter
         * @param {Function} setter
         * @param {Boolean} [enumerable=false]
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface
        // export function getset(obj:any, prop:string, getter:Function, setter:Function, enumerable?:boolean):void;

        /**
         * Define get accessor, just help to call Object.defineProperty(...)
         * @method get
         * @param {any} obj
         * @param {String} prop
         * @param {Function} getter
         * @param {Boolean} [enumerable=false]
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface
        // export function get(obj:any, prop:string, getter:Function, enumerable?:boolean):void;

        /**
         * Define set accessor, just help to call Object.defineProperty(...)
         * @method set
         * @param {any} obj
         * @param {String} prop
         * @param {Function} setter
         * @param {Boolean} [enumerable=false]
         */
        // NOTE: Purposely hiding this, it probably shouldn't be exposed in the TS interface
        // export function set(obj:any, prop:string, setter:Function, enumerable?:boolean):void;

        /**
         * Defines a polyfill field for obsoleted codes.
         * @method obsolete
         * @param {any} obj - YourObject or YourClass.prototype
         * @param {String} obsoleted - "OldParam" or "YourClass.OldParam"
         * @param {String} newPropName - "NewParam"
         * @param {Boolean} [writable=false]
         */
        export function obsolete(obj:any, obsoleted:string, newPropName:string, writable?:boolean):void;

        /**
         * Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
         * @method obsoletes
         * @param {any} obj - YourObject or YourClass.prototype
         * @param {any} objName - "YourObject" or "YourClass"
         * @param {Object} props
         * @param {Boolean} [writable=false]
         */
        export function obsoletes(obj:any, objName:string, props:Object, writable?:boolean):void;

        /**
         * A string tool to construct a string with format string.
         * for example:
         *      cc.js.formatStr("a: %s, b: %s", a, b);
         *      cc.js.formatStr(a, b, c);
         * @method formatStr
         * @returns {String}
         */
        export function formatStr(format:string, ...args:any[]):string;

        /**
         * @class array
         * @static
         */
        // js.array = {
        export class Array {
            /**
             * Removes the first occurrence of a specific object from the array.
             * @method remove
             * @param {any[]} array
             * @param {any} value
             * @return {Boolean}
             */
            public remove(array:any[], value:any):boolean;

            /**
             * Removes the array item at the specified index.
             * @method removeAt
             * @param {any[]} array
             * @param {Number} index
             */
            public removeAt(array:any[], index:number):void;

            /**
             * Determines whether the array contains a specific value.
             * @method contains
             * @param {any[]} array
             * @param {any} value
             * @return {Boolean}
             */
            public contains(array:any[], value:any):boolean;

            /**
             * Verify array's Type
             * @method verifyType
             * @param {array} array
             * @param {Function} type
             * @return {Boolean}
             */
            public verifyType(array:any[], type:Function):boolean;

            /**
             * Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.
             * @method removeArray
             * @param {Array} array Source Array
             * @param {Array} minusArr minus Array
             */
            public removeArray(array:any[], minusArr:any[]):void;

            /**
             * Inserts some objects at index
             * @method appendObjectsAt
             * @param {Array} array
             * @param {Array} addObjs
             * @param {Number} index
             * @return {Array}
             */
            public appendObjectsAt(array:any[], addObjs:any[], index:number):any[];

            /**
             * Copy an array's item to a new array (its performance is better than Array.slice)
             * @method copy
             * @param {Array} array
             * @return {Array}
             */
            public copy(array:any[]):any[];

            /**
             * Exact same function as Array.prototype.indexOf.
             * HACK: ugliy hack for Baidu mobile browser compatibility,
             * stupid Baidu guys modify Array.prototype.indexOf for all pages loaded,
             * their version changes strict comparison to non-strict comparison, 
             * it also ignores the second parameter of the original API, 
             * and this will cause event handler enter infinite loop.
             * Baidu developers, if you ever see this documentation, 
             * here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
             * Seriously !
             * 
             * @method indexOf
             * @param {any} searchElement Element to locate in the array.
             * @param {Number} [fromIndex=0] The index to start the search at
             * @return {Number} returns the first index at which a given element can be found in the array, or -1 if it is not present.
             */
            public indexOf(searchElement:any, fromIndex?:number):number;
        }

        export const array:cc.js.Array;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/miniFramework.js
    // NOTE: Purposely ignoring this file for now
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/preprocess-attrs.js
    // NOTE: Purposely ignoring this file for now
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/requiring-frame.js
    // NOTE: Purposely ignoring this file for now
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/url.js
    //+--------------------------------------------------------------------------------
    /**
     * @class url
     * @static
     */
    export const url:Url;

    export class Url {
        
        public normalize(url:string):string;

        /**
         * Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.
         * 
         * @method raw
         * @param {String} url
         * @return {String}
         * @example {@link utils/api/engine/docs/cocos2d/core/platform/url/raw.js}
         */
        public raw(url:string):string;

        /**
         * Returns the url of builtin raw assets. This method can only used in editor.
         * @method builtinRaw
         * @param {String} url
         * @return {String}
         * @example {@link utils/api/engine/docs/cocos2d/core/platform/url/builtinRaw.js}
         */
        public builtinRaw(url:string):string;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/platform/utils.js
    // NOTE: Purposely ignoring this file for now
    //+--------------------------------------------------------------------------------
}


