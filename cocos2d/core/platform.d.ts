/// <reference path="../cocos2d-lib.d.ts" />

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
    // NOTE: Skipping this file.
    //+--------------------------------------------------------------------------------
    // var Asset = require('../assets/CCAsset');
    // var callInNextTick = require('./utils').callInNextTick;
    // var Loader = require('../load-pipeline/CCLoader');
    // var PackDownloader = require('../load-pipeline/pack-downloader');
    // var AutoReleaseUtils = require('../load-pipeline/auto-release-utils');

    /**
     * The asset library which managing loading/unloading assets in project.
     *
     * @class AssetLibrary
     * @static
     */

    // configs

    // var _libraryBase = '';
    // var _rawAssetsBase = '';     // The base dir for raw assets in runtime
    // var _uuidToRawAsset = {};

    // function isScene (asset) {
    //     return asset && (asset.constructor === cc.SceneAsset || asset instanceof cc.Scene);
    // }
    export function isScene(asset:Asset):boolean;
    export interface LoadAssetCallback { (error:Error, asset:Asset):void; }
    export interface LoadAssetOptions {
        readMainCache:boolean;
        writeMainCache:boolean;
        existingAsset:Asset;
        deserializeInfo:Details;
    }

    export interface QueryAssetCallback { (error:Error, url:string, raw:boolean):void; }
    export interface LoadJsonCallback { (error:Error, asset:Asset):void; }

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
     * @callback loadCallback
     * @param {String} error - null or the error info
     * @param {Asset} data - the loaded asset or null
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
    declare namespace macro {
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
}

