/// <reference path="../cocos2d-lib.d.ts" />

/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


/**
 * The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace
 * @namespace
 * @name cc
 */
declare namespace cc {

    type LoadJsonCallback = (error:Error, json:{}) => void;

    export interface ConfigKey {
        engineDir:string;
        dependencies:string;
        debugMode:string;
        showFPS:string;
        frameRate:string;
        id:string;
        renderMode:string;
        jsList:string;
        classReleaseMode:string;
    }

    // +-------------------- Variable Definitions --------------------+ //
    //export const director:Director;

    // +-------------------- Function Definitions --------------------+ //

    /**
     * A string tool to construct a string with format string.
     * for example:
     *      cc.formatStr("a: %d, b: %b", a, b);
     *      cc.formatStr(a, b, c);
     * @returns {String}
     */
    export function formatStr(...args:any[]):string;

    export function log(...args:any[]):void;

    export function warn(...args:any[]):void;

    export function error(...args:any[]):void;

    export function assert(test:boolean, msg:string):void;

    export function newElement(x);

    // export function _addEventListener(element, type, listener, useCapture);

    /**
     * Iterate over an object or an array, executing a function for each matched element.
     * @param {object|array} obj
     * @param {function} iterator
     * @param {object} [context]
     */
    export function each(obj:any, iterator:(ctx:any, prop:any, index:number) => boolean, context:any):void;

    /**
     * Copy all of the properties in source objects to target object and return the target object.
     * @param {object} target
     * @param {object|Array} sources
     * @returns {object}
     */
    export function extend(target:any):any;

    /**
     * Check the obj whether is function or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isFunction(obj:any):boolean;

    /**
     * Check the obj whether is number or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isNumber(obj:any):boolean;

    /**
     * Check the obj whether is string or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isString(obj:any):boolean;

    /**
     * Check the obj whether is array or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isArray(obj:any):boolean;

    /**
     * Check the obj whether is undefined or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isUndefined(obj:any):boolean

    /**
     * Check the obj whether is object or not
     * @param {*} obj
     * @returns {boolean}
     */
    export function isObject(obj:any):boolean;

    /**
     * Check the url whether cross origin
     * @param {String} url
     * @returns {boolean}
     */
    export function isCrossOrigin(url:string):boolean;

    // +-------------------- Class Definitions --------------------+ //

    /**
     * Async Pool class, a helper of cc.async
     * @param {Object|Array} srcObj
     * @param {Number} limit the limit of parallel number
     * @param {function} iterator
     * @param {function} onEnd
     * @param {object} target
     * @constructor
     */
    export class AsyncPool {
        constructor(srcObj:any, limit:number, iterator:() => void, onEnd:() => void, target:any);

        onIterator(iterator:any, target:any):void;

        onEnd(endCb:any, endCbTarget:any):void;

        flow():void;
    }

    /**
     * @class
     */
    export namespace async {
        /**
         * Do tasks series.
         * @param {Array|Object} tasks
         * @param {function} [cb] callback
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function series(tasks:any, cb:any, target:any):AsyncPool;

        /**
         * Do tasks parallel.
         * @param {Array|Object} tasks
         * @param {function} cb callback
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function parallel(tasks:any, cb:any, target:any):AsyncPool;

        /**
         * Do tasks waterfall.
         * @param {Array|Object} tasks
         * @param {function} cb callback
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function waterfall(tasks:any, cb:any, target:any):AsyncPool;

        /**
         * Do tasks by iterator.
         * @param {Array|Object} tasks
         * @param {function|Object} iterator
         * @param {function} [callback]
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function map(tasks:any, iterator:any, callback:any, target:any):AsyncPool;

        /**
         * Do tasks by iterator limit.
         * @param {Array|Object} tasks
         * @param {Number} limit
         * @param {function} iterator
         * @param {function} cb callback
         * @param {AsyncPool} [target]
         */
        export function mapLimit(tasks:any, limit:any, iterator:any, cb:any, target:any):AsyncPool;
    }

    /**
     * @class
     */
    export namespace path {

        // Is there a built-in RegEx type in TypeScript
        //normalizeRE: /[^\.\/]+\/\.\.\//,


        /**
         * Join strings to be a path.
         * @example
         cc.path.join("a", "b.png");//-->"a/b.png"
         cc.path.join("a", "b", "c.png");//-->"a/b/c.png"
         cc.path.join("a", "b");//-->"a/b"
         cc.path.join("a", "b", "/");//-->"a/b/"
         cc.path.join("a", "b/", "/");//-->"a/b/"
         * @returns {string}
         */
        export function join():string;

        /**
         * Get the ext name of a path.
         * @example
         cc.path.extname("a/b.png");//-->".png"
         cc.path.extname("a/b.png?a=1&b=2");//-->".png"
         cc.path.extname("a/b");//-->null
         cc.path.extname("a/b?a=1&b=2");//-->null
         * @param {string} pathStr
         * @returns {*}
         */
        export function extname(pathStr:string):string;

        /**
         * Get the main name of a file name
         * @param {string} fileName
         * @returns {string}
         */
        export function mainFileName(fileName:string):string;

        /**
         * Get the file name of a file path.
         * @example
         cc.path.basename("a/b.png");//-->"b.png"
         cc.path.basename("a/b.png?a=1&b=2");//-->"b.png"
         cc.path.basename("a/b.png", ".png");//-->"b"
         cc.path.basename("a/b.png?a=1&b=2", ".png");//-->"b"
         cc.path.basename("a/b.png", ".txt");//-->"b.png"
         * @param {string} pathStr
         * @param {string} [extname]
         * @returns {*}
         */
        export function basename(pathStr:string, extname:string):string;

        /**
         * Get dirname of a file path.
         * @example
         * unix
         cc.path.driname("a/b/c.png");//-->"a/b"
         cc.path.driname("a/b/c.png?a=1&b=2");//-->"a/b"
         cc.path.dirname("a/b/");//-->"a/b"
         cc.path.dirname("c.png");//-->""
         * windows
         cc.path.driname("a\\b\\c.png");//-->"a\b"
         cc.path.driname("a\\b\\c.png?a=1&b=2");//-->"a\b"
         * @param {string} pathStr
         * @returns {*}
         */
        export function dirname(pathStr:string):string;

        /**
         * Change extname of a file path.
         * @example
         cc.path.changeExtname("a/b.png", ".plist");//-->"a/b.plist"
         cc.path.changeExtname("a/b.png?a=1&b=2", ".plist");//-->"a/b.plist?a=1&b=2"
         * @param {string} pathStr
         * @param {string} [extname]
         * @returns {string}
         */
        export function changeExtname(pathStr:string, extname:string):string;

        /**
         * Change file name of a file path.
         * @example
         cc.path.changeBasename("a/b/c.plist", "b.plist");//-->"a/b/b.plist"
         cc.path.changeBasename("a/b/c.plist?a=1&b=2", "b.plist");//-->"a/b/b.plist?a=1&b=2"
         cc.path.changeBasename("a/b/c.plist", ".png");//-->"a/b/c.png"
         cc.path.changeBasename("a/b/c.plist", "b");//-->"a/b/b"
         cc.path.changeBasename("a/b/c.plist", "b", true);//-->"a/b/b.plist"
         * @param {String} pathStr
         * @param {String} basename
         * @param {Boolean} [isSameExt]
         * @returns {string}
         */
        export function changeBasename(pathStr:string, basename:string, isSameExt:boolean):string;
    }

    /**
     * Loader for resource loading process. It's a singleton object.
     * @class
     */
        //export class loader {
    export namespace loader {
        //_jsCache: {},//cache for js
        //_register: {},//register of loaders
        //_langPathCache: {},//cache for lang path
        //_aliases: {},//aliases for res url
        //
        //resPath: "",//root path of resource
        //audioPath: "",//root path of audio
        //cache: {},//cache for data loaded

        /**
         * Get XMLHttpRequest.
         * @returns {XMLHttpRequest}
         */
        export function getXMLHttpRequest():XMLHttpRequest;

        //@MODE_BEGIN DEV

        /**
         * Load js files.
         * If the third parameter doesn't exist, then the baseDir turns to be "".
         *
         * @param {string} [baseDir]   The pre path for jsList or the list of js path.
         * @param {array} jsList    List of js path.
         * @param {function} [cb]  Callback function
         * @returns {*}
         */
        export function loadJs(baseDir:string, jsList:string[], cb:any):void;

        /**
         * Load js width loading image.
         *
         * @param {string} [baseDir]
         * @param {array} jsList
         * @param {function} [cb]
         */
        export function loadJsWithImg(baseDir:string, jsList:string[], cb:any):void;

        /**
         * Load a single resource as txt.
         * @param {string} url
         * @param {function} [cb] arguments are : err, txt
         */
        export function loadTxt(url:string, cb:any):void;

        export function loadCsb(url:string, cb:any):void;

        /**
         * Load a single resource as json.
         * @param {string} url
         * @param {LoadJsonCallback} [cb] arguments are : err, json
         */
        export function loadJson(url:string, cb?:LoadJsonCallback):void;

        /**
         * TODO: Uncomment this when Image is defined
         * Load a single image.
         * @param {!string} url
         * @param {object} [option]
         * @param {function} callback
         * @returns {Image}
         */
        //loadImg(url:string, option:any, callback:any):Image;

        /**
         * Get url with basePath.
         * @param {string} basePath
         * @param {string} [url]
         * @returns {*}
         */
        export function getUrl(basePath:string, url:string):string;

        /**
         * Load resources then call the callback.
         * @param {string} resources
         * @param {function} [option] callback or trigger
         * @param {function|Object} [loadCallback]
         * @return {cc.AsyncPool}
         */
        export function load(resources:string, option:any, loadCallback:any):AsyncPool;

        /**
         * <p>
         *     Loads alias map from the contents of a filename.                                        <br/>
         *                                                                                                                 <br/>
         *     @note The plist file name should follow the format below:                                                   <br/>
         *     <?xml version="1.0" encoding="UTF-8"?>                                                                      <br/>
         *         <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">  <br/>
         *             <plist version="1.0">                                                                               <br/>
         *                 <dict>                                                                                          <br/>
         *                     <key>filenames</key>                                                                        <br/>
         *                     <dict>                                                                                      <br/>
         *                         <key>sounds/click.wav</key>                                                             <br/>
         *                         <string>sounds/click.caf</string>                                                       <br/>
         *                         <key>sounds/endgame.wav</key>                                                           <br/>
         *                         <string>sounds/endgame.caf</string>                                                     <br/>
         *                         <key>sounds/gem-0.wav</key>                                                             <br/>
         *                         <string>sounds/gem-0.caf</string>                                                       <br/>
         *                     </dict>                                                                                     <br/>
         *                     <key>metadata</key>                                                                         <br/>
         *                     <dict>                                                                                      <br/>
         *                         <key>version</key>                                                                      <br/>
         *                         <integer>1</integer>                                                                    <br/>
         *                     </dict>                                                                                     <br/>
         *                 </dict>                                                                                         <br/>
         *              </plist>                                                                                           <br/>
         * </p>
         * @param {String} url  The plist file name.
         * @param {Function} [callback]
         */
        export function loadAliases(url:string, callback:any):void;

        /**
         * Register a resource loader into loader.
         * @param {string} extNames
         * @param {function} loader
         */
        export function register(extNames:string, loader:any):void;

        /**
         * Get resource data by url.
         * @param url
         * @returns {*}
         */
        export function getRes(url:string):any;

        /**
         * Release the cache of resource by url.
         * @param url
         */
        export function release(url:string):void;

        /**
         * Resource cache of all resources.
         */
        export function releaseAll():void;
    }


    /**
     * create a webgl context
     * @param {HTMLCanvasElement} canvas
     * @param {Object} opt_attribs
     * @return {WebGLRenderingContext}
     */
    export function create3DContext(canvas:HTMLCanvasElement, opt_attribs:any):WebGLRenderingContext;

    /**
     * System variables
     * @namespace
     * @name cc.sys
     */
    export namespace sys {
        /**
         * English language code
         * @memberof cc.sys
         * @name LANGUAGE_ENGLISH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_ENGLISH:string;

        /**
         * Chinese language code
         * @memberof cc.sys
         * @name LANGUAGE_CHINESE
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_CHINESE:string;

        /**
         * French language code
         * @memberof cc.sys
         * @name LANGUAGE_FRENCH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_FRENCH:string;

        /**
         * Italian language code
         * @memberof cc.sys
         * @name LANGUAGE_ITALIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_ITALIAN:string;

        /**
         * German language code
         * @memberof cc.sys
         * @name LANGUAGE_GERMAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_GERMAN:string;

        /**
         * Spanish language code
         * @memberof cc.sys
         * @name LANGUAGE_SPANISH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_SPANISH:string;

        /**
         * Spanish language code
         * @memberof cc.sys
         * @name LANGUAGE_DUTCH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_DUTCH:string;

        /**
         * Russian language code
         * @memberof cc.sys
         * @name LANGUAGE_RUSSIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_RUSSIAN:string;

        /**
         * Korean language code
         * @memberof cc.sys
         * @name LANGUAGE_KOREAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_KOREAN:string;

        /**
         * Japanese language code
         * @memberof cc.sys
         * @name LANGUAGE_JAPANESE
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_JAPANESE:string;

        /**
         * Hungarian language code
         * @memberof cc.sys
         * @name LANGUAGE_HUNGARIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_HUNGARIAN:string;

        /**
         * Portuguese language code
         * @memberof cc.sys
         * @name LANGUAGE_PORTUGUESE
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_PORTUGUESE:string;

        /**
         * Arabic language code
         * @memberof cc.sys
         * @name LANGUAGE_ARABIC
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_ARABIC:string;

        /**
         * Norwegian language code
         * @memberof cc.sys
         * @name LANGUAGE_NORWEGIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_NORWEGIAN:string;

        /**
         * Polish language code
         * @memberof cc.sys
         * @name LANGUAGE_POLISH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_POLISH:string;

        /**
         * @memberof cc.sys
         * @name OS_IOS
         * @constant
         * @type {string}
         */
        export const OS_IOS:string;

        /**
         * @memberof cc.sys
         * @name OS_ANDROID
         * @constant
         * @type {string}
         */
        export const OS_ANDROID:string;

        /**
         * @memberof cc.sys
         * @name OS_WINDOWS
         * @constant
         * @type {string}
         */
        export const OS_WINDOWS:string;

        /**
         * @memberof cc.sys
         * @name OS_MARMALADE
         * @constant
         * @type {string}
         */
        export const OS_MARMALADE:string;

        /**
         * @memberof cc.sys
         * @name OS_LINUX
         * @constant
         * @type {string}
         */
        export const OS_LINUX:string;

        /**
         * @memberof cc.sys
         * @name OS_BADA
         * @constant
         * @type {string}
         */
        export const OS_BADA:string;

        /**
         * @memberof cc.sys
         * @name OS_BLACKBERRY
         * @constant
         * @type {string}
         */
        export const OS_BLACKBERRY:string;

        /**
         * @memberof cc.sys
         * @name OS_OSX
         * @constant
         * @type {string}
         */
        export const OS_OSX:string;

        /**
         * @memberof cc.sys
         * @name OS_WP8
         * @constant
         * @type {string}
         */
        export const OS_WP8:string;

        /**
         * @memberof cc.sys
         * @name OS_WINRT
         * @constant
         * @type {string}
         */
        export const OS_WINRT:string;

        /**
         * @memberof cc.sys
         * @name OS_UNKNOWN
         * @constant
         * @type {string}
         */
        export const OS_UNKNOWN:string;

        /**
         * @memberof cc.sys
         * @name UNKNOWN
         * @constant
         * @default
         * @type {Number}
         */
        export const UNKNOWN:number;

        /**
         * @memberof cc.sys
         * @name WIN32
         * @constant
         * @default
         * @type {Number}
         */
        export const WIN32:number;

        /**
         * @memberof cc.sys
         * @name LINUX
         * @constant
         * @default
         * @type {Number}
         */
        export const LINUX:number;

        /**
         * @memberof cc.sys
         * @name MACOS
         * @constant
         * @default
         * @type {Number}
         */
        export const MACOS:number;

        /**
         * @memberof cc.sys
         * @name ANDROID
         * @constant
         * @default
         * @type {Number}
         */
        export const ANDROID:number;

        /**
         * @memberof cc.sys
         * @name IOS
         * @constant
         * @default
         * @type {Number}
         */
        export const IPHONE:number;

        /**
         * @memberof cc.sys
         * @name IOS
         * @constant
         * @default
         * @type {Number}
         */
        export const IPAD:number;

        /**
         * @memberof cc.sys
         * @name BLACKBERRY
         * @constant
         * @default
         * @type {Number}
         */
        export const BLACKBERRY:number;

        /**
         * @memberof cc.sys
         * @name NACL
         * @constant
         * @default
         * @type {Number}
         */
        export const NACL:number;

        /**
         * @memberof cc.sys
         * @name EMSCRIPTEN
         * @constant
         * @default
         * @type {Number}
         */
        export const EMSCRIPTEN:number;

        /**
         * @memberof cc.sys
         * @name TIZEN
         * @constant
         * @default
         * @type {Number}
         */
        export const TIZEN:number;

        /**
         * @memberof cc.sys
         * @name WINRT
         * @constant
         * @default
         * @type {Number}
         */
        export const WINRT:number;

        /**
         * @memberof cc.sys
         * @name WP8
         * @constant
         * @default
         * @type {Number}
         */
        export const WP8:number;

        /**
         * @memberof cc.sys
         * @name MOBILE_BROWSER
         * @constant
         * @default
         * @type {Number}
         */
        export const MOBILE_BROWSER:number;

        /**
         * @memberof cc.sys
         * @name DESKTOP_BROWSER
         * @constant
         * @default
         * @type {Number}
         */
        export const DESKTOP_BROWSER:number;

        export const BROWSER_TYPE_WECHAT:string;
        export const BROWSER_TYPE_ANDROID:string;
        export const BROWSER_TYPE_IE:string;
        export const BROWSER_TYPE_QQ:string;
        export const BROWSER_TYPE_MOBILE_QQ:string;
        export const BROWSER_TYPE_UC:string;
        export const BROWSER_TYPE_360:string;
        export const BROWSER_TYPE_BAIDU_APP:string;
        export const BROWSER_TYPE_BAIDU:string;
        export const BROWSER_TYPE_MAXTHON:string;
        export const BROWSER_TYPE_OPERA:string;
        export const BROWSER_TYPE_OUPENG:string;
        export const BROWSER_TYPE_MIUI:string;
        export const BROWSER_TYPE_FIREFOX:string;
        export const BROWSER_TYPE_SAFARI:string;
        export const BROWSER_TYPE_CHROME:string;
        export const BROWSER_TYPE_LIEBAO:string;
        export const BROWSER_TYPE_QZONE:string;
        export const BROWSER_TYPE_SOUGOU:string;
        export const BROWSER_TYPE_UNKNOWN:string;

        /**
         * Is native ? This is set to be true in jsb auto.
         * @memberof cc.sys
         * @name isNative
         * @type {Boolean}
         */
        export const isNative:boolean;

        /**
         * Indicate whether system is mobile system
         * @memberof cc.sys
         * @name isMobile
         * @type {Boolean}
         */
        export const isMobile:boolean;

        /**
         * Indicate the running platform
         * @memberof cc.sys
         * @name platform
         * @type {Number}
         */
        export const platform:number;

        /**
         * Indicate the current language of the running system
         * @memberof cc.sys
         * @name language
         * @type {String}
         */
        export const language:string;

        /**
         * Indicate the running os name
         * @memberof cc.sys
         * @name os
         * @type {String}
         */
        export const os:string;

        /**
         * Indicate the running browser type
         * @memberof cc.sys
         * @name browserType
         * @type {String}
         */
        export const browserType:string;

        /**
         * Indicate the running browser version
         * @memberof cc.sys
         * @name browserVersion
         * @type {Number}
         */
        export const browserVersion:number;

        /**
         * Indicate the real pixel resolution of the whole game window
         * @memberof cc.sys
         * @name windowPixelResolution
         * @type {Number}
         */
        export const windowPixelResolution:number;

        export namespace localStorage {
            export function getItem(name:string):string;
            export function setItem(name:string, value:string):void;
            export function removeItem(name:string):void;
            export function clear():void;

            ///**
            // * cc.sys.localStorage is a local storage component.
            // * @memberof cc.sys
            // * @name localStorage
            // * @type {Object}
            // */
            //try {
            //    var localStorage = sys.localStorage = win.localStorage;
            //    localStorage.setItem("storage", "");
            //    localStorage.removeItem("storage");
            //    localStorage = null;
            //} catch (e) {
            //    var warn = function () {
            //        cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option");
            //    }
            //    sys.localStorage = {
            //        getItem: warn,
            //        setItem: warn,
            //        removeItem: warn,
            //        clear: warn
            //    };
        }

        export namespace capabilities {
            //var capabilities = sys.capabilities = {"canvas": true};
            //if (cc._renderType === cc._RENDER_TYPE_WEBGL)
            //    capabilities["opengl"] = true;
            //if (docEle['ontouchstart'] !== undefined || doc['ontouchstart'] !== undefined || nav.msPointerEnabled)
            //    capabilities["touches"] = true;
            //if (docEle['onmouseup'] !== undefined)
            //    capabilities["mouse"] = true;
            //if (docEle['onkeyup'] !== undefined)
            //    capabilities["keyboard"] = true;
            //if (win.DeviceMotionEvent || win.DeviceOrientationEvent)
            //    capabilities["accelerometer"] = true;
        }

        /**
         * Forces the garbage collection, only available in JSB
         * @memberof cc.sys
         * @name garbageCollect
         * @function
         */
        export function garbageCollect():void;

        /**
         * Dumps rooted objects, only available in JSB
         * @memberof cc.sys
         * @name dumpRoot
         * @function
         */
        export function dumpRoot():void;

        /**
         * Restart the JS VM, only available in JSB
         * @memberof cc.sys
         * @name restartVM
         * @function
         */
        export function restartVM():void;

        /**
         * Clean a script in the JS VM, only available in JSB
         * @memberof cc.sys
         * @name cleanScript
         * @param {String} jsfile
         * @function
         */
        export function cleanScript(jsfile:string):void;

        /**
         * Check whether an object is valid,
         * In web engine, it will return true if the object exist
         * In native engine, it will return true if the JS object and the correspond native object are both valid
         * @memberof cc.sys
         * @name isObjectValid
         * @param {Object} obj
         * @return {boolean} Validity of the object
         * @function
         */
        export function isObjectValid(obj:any):boolean;

        /**
         * Dump system informations
         * @memberof cc.sys
         * @name dump
         * @function
         */
        export function dump():void;

        /**
         * Open a url in browser
         * @memberof cc.sys
         * @name openURL
         * @param {String} url
         */
        export function openURL(url:string):void;
    }

// +++++++++++++++++++++++++something about sys end+++++++++++++++++++++++++++++

// +++++++++++++++++++++++++something about CCGame begin+++++++++++++++++++++++++++

    /**
     * Device oriented vertically, home button on the bottom
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_PORTRAIT:number;

    /**
     * Device oriented vertically, home button on the top
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

    /**
     * Device oriented horizontally, home button on the right
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_LANDSCAPE_LEFT:number;

    /**
     * Device oriented horizontally, home button on the left
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_LANDSCAPE_RIGHT:number;

    /**
     * @type {cc.EGLView}
     * @name cc.view
     * cc.view is the shared view object.
     */
    export const view:EGLView;

    /**
     * @type {cc.Director}
     * @name cc.director
     */
    export const director:Director;
    /**
     * @type {cc.Size}
     * @name cc.winSize
     * cc.winSize is the alias object for the size of the current game window.
     */
    export const winSize:Size;

    // Parsers
    export const saxParser:SAXParser;

    /**
     * @type {cc.PlistParser}
     * @name cc.plistParser
     * A Plist Parser
     */
    export const plistParser:PlistParser;

    /**
     * An object to boot the game.
     * @class
     * @name cc.game
     */
    //cc.game = /** @lends cc.game# */{
    export namespace game {
        export const DEBUG_MODE_NONE:number;
        export const DEBUG_MODE_INFO:number;
        export const DEBUG_MODE_WARN:number;
        export const DEBUG_MODE_ERROR:number;
        export const DEBUG_MODE_INFO_FOR_WEB_PAGE:number;
        export const DEBUG_MODE_WARN_FOR_WEB_PAGE:number;
        export const DEBUG_MODE_ERROR_FOR_WEB_PAGE:number;

        export const EVENT_HIDE:string;
        export const EVENT_SHOW:string;
        export const EVENT_RESIZE:string;

        ///**
        // * Key of config
        // * @constant
        // * @type {Object}
        // */
        export const CONFIG_KEY:ConfigKey;

        ///**
        // * Config of game
        // * @type {Object}
        // */
        //config: null,

        /**
         * Callback when the scripts of engine have been load.
         * @type {Function}
         */
        export function onStart();

        /**
         * Callback when game exits.
         * @type {Function}
         */
        export function onStop();

        /**
         * Set frameRate of game.
         * @param frameRate
         */
        export function setFrameRate(frameRate:number):void;

        /**
         * Restart game.
         */
        export function restart():void;

        /**
         * Run game.
         */
        export function run(id?:number):void;

        /**
         * Prepare game.
         * @param cb
         */
        export function prepare(cb?:() => void):void;
    }
}
