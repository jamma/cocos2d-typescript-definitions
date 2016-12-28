/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/asset-table.js
    //+--------------------------------------------------------------------------------
    export class Entry {
        public uuid:string;
        public type:Object;
    }

    /*
     * !#en AssetTable is used to find asset's uuid by url.
     * !#zh AssetTable 用于查找资源的 uuid 和 url。
     * @class AssetTable
     * @constructor
     */

    export class AssetTable {
        public getUuid(path:string, type:Object):string;

        public getUuidArray(path:string, type:Object):string[];

        /**
         * !#en Returns all asset paths in the table.
         * !#zh 返回表中的所有资源路径。
         * @method getAllPaths
         * @return {string[]}
         */
        public getAllPaths():string[];
        
        // /**
        //  * !#en TODO
        //  * !#zh 以路径为 key，uuid 为值添加到表中。
        //  * @method add
        //  * @param {String} path - the path to load, should NOT include filename extensions.
        //  * @param {String} uuid
        //  * @param {Function} type
        //  * @param {Boolean} isMainAsset
        //  * @private
        //  */
        // public add(path:string, uuid:string, type:Object, isMainAsset:boolean):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/audio-downloader.js
    //+--------------------------------------------------------------------------------
    // var Path = require('../utils/CCPath');
    // var Sys = require('../platform/CCSys');
    // var Pipeline = require('./pipeline');
    // require('../../audio/CCAudio');

    // var __audioSupport = Sys.__audioSupport;
    // var formatSupport = __audioSupport.format;
    // var context = __audioSupport.context;

    // function loadAudioFromExtList (url, typeList, audio, cb){
    //     if(typeList.length === 0){
    //         var ERRSTR = 'can not found the resource of audio! Last match url is : ';
    //         ERRSTR += url.replace(/\.(.*)?$/, '(');
    //         formatSupport.forEach(function(ext){
    //             ERRSTR += ext + '|';
    //         });
    //         ERRSTR = ERRSTR.replace(/\|$/, ')');
    //         return cb({status: 520, errorMessage: ERRSTR}, null);
    //     }

    //     if (__audioSupport.WEB_AUDIO && cc.Audio.useWebAudio) {
    //         loadWebAudio(url, typeList, audio, cb);
    //     } else {
    //         loadDomAudio(url, typeList, audio, cb);
    //     }
    // }

    // function loadDomAudio (url, typeList, audio, cb) {
    //     var num = __audioSupport.ONE_SOURCE ? 1 : typeList.length;

    //     // 加载统一使用dom
    //     var dom = document.createElement('audio');
    //     for (var i=0; i<num; i++) {
    //         var source = document.createElement('source');
    //         source.src = cc.path.changeExtname(url, typeList[i]);
    //         dom.appendChild(source);
    //     }

    //     audio.setElement(dom);

    //     var timer = setTimeout(function(){
    //         if (dom.readyState === 0) {
    //             failure();
    //         } else {
    //             success();
    //         }
    //     }, 8000);

    //     var success = function () {
    //         dom.removeEventListener("canplaythrough", success, false);
    //         dom.removeEventListener("error", failure, false);
    //         dom.removeEventListener("emptied", success, false);
    //         if (__audioSupport.USE_LOADER_EVENT)
    //             dom.removeEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
    //         clearTimeout(timer);
    //         cb(null, url);
    //     };
    //     var failure = function () {
    //         cc.log('load audio failure - ' + url);
    //         success();
    //     };
    //     dom.addEventListener("canplaythrough", success, false);
    //     dom.addEventListener("error", failure, false);
    //     if(__audioSupport.USE_LOADER_EVENT)
    //         dom.addEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
    // }

    // function loadWebAudio (url, typeList, audio, cb) {
    //     if (!context) return;

    //     var request = Pipeline.getXMLHttpRequest();
    //     request.open("GET", url, true);
    //     request.responseType = "arraybuffer";

    //     // Our asynchronous callback
    //     request.onload = function () {
    //         context["decodeAudioData"](request.response, function(buffer){
    //             //success
    //             audio.setBuffer(buffer);
    //             cb(null, url);
    //         }, function(){
    //             //error
    //             cb('decode error - ' + url, url);
    //         });
    //     };

    //     request.onerror = function(){
    //         cb('request error - ' + url, url);
    //     };

    //     request.send();
    // }

    // function downloadAudio (item, callback) {
    //     if (formatSupport.length === 0) {
    //         return callback( new Error('Audio Downloader: audio not supported on this browser!') );
    //     }

    //     var url = item.url,
    //         extname = Path.extname(url),
    //         typeList = [extname],
    //         i, audio;

    //     // Generate all types
    //     for (i = 0; i < formatSupport.length; i++) {
    //         if (extname !== formatSupport[i]) {
    //             typeList.push(formatSupport[i]);
    //         }
    //     }

    //     audio = new cc.Audio(url);

    //     // hack for audio to be found before loaded
    //     item.content = url;
    //     item.audio = audio;
    //     loadAudioFromExtList(url, typeList, audio, callback);
    // }


    // module.exports = downloadAudio;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/auto-release-utils.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/binary-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/CCLoader.js
    //+--------------------------------------------------------------------------------

    // var JS = require('../platform/js');
    // var Pipeline = require('./pipeline');
    // var Downloader = require('./downloader');
    // var Loader = require('./loader');
    // var AssetTable = require('./asset-table');
    // var callInNextTick = require('../platform/utils').callInNextTick;
    // var AutoReleaseUtils = require('./auto-release-utils');

    // var resources = new AssetTable();

    /**
     * Loader for resource loading process. It's a singleton object.
     * @class loader
     * @extends Pipeline
     * @static
     */
    // function CCLoader () {
    export class CCLoader {
        // var downloader = new Downloader();
        // var loader = new Loader();

        // Pipeline.call(this, [
        //     downloader,
        //     loader
        // ]);

        /**
         * The downloader in cc.loader's pipeline, it's by default the first pipe.
         * It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
         * You can add your own download function with addDownloadHandlers
         * @property downloader
         * @type {Object}
         */
        // this.downloader = downloader;
        public readonly downloader:Downloader;

        /**
         * The downloader in cc.loader's pipeline, it's by default the second pipe.
         * It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
         * You can add your own download function with addLoadHandlers
         * @property loader
         * @type {Object}
         */
        // this.loader = loader;
        public readonly loader:Loader;

    //     // assets to release automatically
    //     this._autoReleaseSetting = {};
    // }
    // JS.extend(CCLoader, Pipeline);
    // JS.mixin(CCLoader.prototype, {

        /**
         * Get XMLHttpRequest.
         * @returns {XMLHttpRequest}
         */
        public getXMLHttpRequest():XMLHttpRequest;

        /**
         * Add custom supported types handler or modify existing type handler for download process.
         * @example
         *  cc.loader.addDownloadHandlers({
         *      // This will match all url with `.scene` extension or all url with `scene` type
         *      'scene' : function (url, callback) {}
         *  });
         * @method addDownloadHandlers
         * @param {Object} extMap Custom supported types with corresponded handler
         */
        // addDownloadHandlers: function (extMap) {
        public addDownloadHandlers(extMap:????):void;

        /**
         * Add custom supported types handler or modify existing type handler for load process.
         * @example
         *  cc.loader.addLoadHandlers({
         *      // This will match all url with `.scene` extension or all url with `scene` type
         *      'scene' : function (url, callback) {}
         *  });
         * @method addLoadHandlers
         * @param {Object} extMap Custom supported types with corresponded handler
         */
        // public addLoadHandlers: function (extMap) {
        public addLoadHandlers(extMap?:::):void;

        /**
         * Load resources with a progression callback and a complete callback.
         * The progression callback is the same as Pipeline's {{#crossLink "Pipeline/onProgress:method"}}onProgress{{/crossLink}}
         * The complete callback is almost the same as Pipeline's {{#crossLink "Pipeline/onComplete:method"}}onComplete{{/crossLink}}
         * The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.
         * 
         * @example
         * cc.loader.load('a.png', function (err, tex) {
         *     cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
         * });
         *
         * cc.loader.load('http://example.com/a.png', function (err, tex) {
         *     cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
         * });
         *
         * cc.loader.load({id: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
         *     cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
         * });
         *  
         * cc.loader.load(['a.png', 'b.json'], function (errors, results) {
         *     if (errors) {
         *         for (var i = 0; i < errors.length; i++) {
         *             cc.log('Error url [' + errors[i] + ']: ' + results.getError(errors[i]));
         *         }
         *     }
         *     var aTex = results.getContent('a.png');
         *     var bJsonObj = results.getContent('b.json');
         * });
         *
         * @method load
         * @param {String|Array} resources - Url list in an array 
         * @param {Function} [progressCallback] - Callback invoked when progression change
         * @param {Function} completeCallback - Callback invoked when all resources loaded
         */
        // load: function(resources, progressCallback, completeCallback) {
        public load(resources:string|???[], progressCallback?:?????, completeCallback?:????):void;

        /**
         * Load resources from the "resources" folder inside the "assets" folder of your project.<br>
         * <br>
         * Note: All asset urls in Creator use forward slashes, urls using backslashes will not work.
         * 
         * @method loadRes
         * @param {String} url - Url of the target resource.
         *                       The url is relative to the "resources" folder, extensions must be omitted.
         * @param {Function} [type] - Only asset of type will be loaded if this argument is supplied.
         * @param {Function} completeCallback - Callback invoked when the resource loaded.
         * @param {Error} completeCallback.error - The error info or null if loaded successfully.
         * @param {Object} completeCallback.resource - The loaded resource if it can be found otherwise returns null.
         * 
         * @example
         * 
         * // load the prefab (project/assets/resources/misc/character/cocos) from resources folder
         * cc.loader.loadRes('misc/character/cocos', function (err, prefab) {
         *     if (err) {
         *         cc.error(err.message || err);
         *         return;
         *     }
         *     cc.log('Result should be a prefab: ' + (prefab instanceof cc.Prefab));
         * });
         *
         * // load the sprite frame of (project/assets/resources/imgs/cocos.png) from resources folder
         * cc.loader.loadRes('imgs/cocos', cc.SpriteFrame, function (err, spriteFrame) {
         *     if (err) {
         *         cc.error(err.message || err);
         *         return;
         *     }
         *     cc.log('Result should be a sprite frame: ' + (spriteFrame instanceof cc.SpriteFrame));
         * });
         */
        // loadRes: function (url, type, completeCallback) {
        public loadRes(url:string, type?:????, completeCallback?:???):void;

        /**
         * Load all assets in a folder inside the "assets/resources" folder of your project.<br>
         * <br>
         * Note: All asset urls in Creator use forward slashes, urls using backslashes will not work.
         *
         * @method loadResAll
         * @param {String} url - Url of the target folder.
         *                       The url is relative to the "resources" folder, extensions must be omitted.
         * @param {Function} [type] - Only asset of type will be loaded if this argument is supplied.
         * @param {Function} completeCallback - A callback which is called when all assets have been loaded, or an error occurs.
         * @param {Error} completeCallback.error - If one of the asset failed, the complete callback is immediately called with the error. If all assets are loaded successfully, error will be null.
         * @param {Object[]} completeCallback.assets - An array of all loaded assets. If nothing to load, assets will be an empty array. If error occurs, assets will be null.
         *
         * @example
         *
         * // load the texture (resources/imgs/cocos.png) and the corresponding sprite frame
         * cc.loader.loadResAll('imgs/cocos', function (err, assets) {
         *     if (err) {
         *         cc.error(err);
         *         return;
         *     }
         *     var texture = assets[0];
         *     var spriteFrame = assets[1];
         * });
         *
         * // load all textures in "resources/imgs/"
         * cc.loader.loadResAll('imgs', cc.Texture2D, function (err, textures) {
         *     if (err) {
         *         cc.error(err);
         *         return;
         *     }
         *     var texture1 = textures[0];
         *     var texture2 = textures[1];
         * });
         */
        // loadResAll: function (url, type, completeCallback) {
        public loadResAll(url:string, type:????, completeCallback?:????):void;

        /**
         * Get resource data by id. <br>
         * When you load resources with {{#crossLink "loader/load:method"}}{{/crossLink}} or {{#crossLink "loader/loadRes:method"}}{{/crossLink}},
         * the url will be the unique identity of the resource.
         * After loaded, you can acquire them by passing the url to this API.
         *
         * @method getRes
         * @param {String} url
         * @returns {*}
         */
        public getRes(url:string):any;

        /**
         * Get total resources count in loader.
         * @returns {Number}
         */
        public getResCount():number;

        /**
         * Returns an item in pipeline.
         * @method getItem
         * @return {Object}
         */
        public getItem(url:string):any;

        /**
         * Release the cache of resource by url.
         *
         * @method release
         * @param {String} url
         */
        public release(url:string):void;

        /**
         * Release the loaded cache of asset.
         *
         * @method releaseAsset
         * @param {Asset} asset
         */
        public releaseAsset(asset:Asset):void;

        /**
         * Release the cache of resource which loaded by {{#crossLink "loader/loadRes:method"}}{{/crossLink}}.
         *
         * @method releaseRes
         * @param {String} url
         */
        public releaseRes(url:string):void;

        /**
         * Resource cache of all resources.
         *
         * @method releaseAll
         */
        public releaseAll():void;

        // override
        public removeItem(key:string):any;

        /**
         * !#en
         * Indicates whether to release the asset when loading a new scene.<br>
         * By default, when loading a new scene, all assets in the previous scene will be released or preserved
         * according to whether the previous scene checked the "Auto Release Assets" option.
         * On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResAll`
         * will not be affected by that option, remain not released by default.<br>
         * Use this API to change the default behavior on a single asset, to force preserve or release specified asset when scene switching.<br>
         * <br>
         * See: {{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}, {{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         * !#zh
         * 设置当场景切换时是否自动释放资源。<br>
         * 默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。
         * 而使用 `cc.loader.loadRes` 或 `cc.loader.loadResAll` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
         * 使用这个 API 可以在单个资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
         * <br>
         * 参考：{{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}，{{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         *
         * @example
         * // auto release the texture event if "Auto Release Assets" disabled in current scene
         * cc.loader.setAutoRelease(texture2d, true);
         * // don't release the texture even if "Auto Release Assets" enabled in current scene
         * cc.loader.setAutoRelease(texture2d, false);
         * // first parameter can be url
         * cc.loader.setAutoRelease(audioUrl, false);
         *
         * @method setAutoRelease
         * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
         * @param {Boolean} autoRelease - indicates whether should release automatically
         */
        public setAutoRelease(assetOrUrl:Asset|string, autoRelease?:boolean):void;

        /**
         * !#en
         * Indicates whether to release the asset and its referenced other assets when loading a new scene.<br>
         * By default, when loading a new scene, all assets in the previous scene will be released or preserved
         * according to whether the previous scene checked the "Auto Release Assets" option.
         * On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResAll`
         * will not be affected by that option, remain not released by default.<br>
         * Use this API to change the default behavior on the specified asset and its recursively referenced assets, to force preserve or release specified asset when scene switching.<br>
         * <br>
         * See: {{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}, {{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         * !#zh
         * 设置当场景切换时是否自动释放资源及资源引用的其它资源。<br>
         * 默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。
         * 而使用 `cc.loader.loadRes` 或 `cc.loader.loadResAll` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
         * 使用这个 API 可以在指定资源及资源递归引用到的所有资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
         * <br>
         * 参考：{{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}，{{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         *
         * @example
         * // auto release the SpriteFrame and its Texture event if "Auto Release Assets" disabled in current scene
         * cc.loader.setAutoReleaseRecursively(spriteFrame, true);
         * // don't release the SpriteFrame and its Texture even if "Auto Release Assets" enabled in current scene
         * cc.loader.setAutoReleaseRecursively(spriteFrame, false);
         * // don't release the Prefab and all the referenced assets
         * cc.loader.setAutoReleaseRecursively(prefab, false);
         *
         * @method setAutoReleaseRecursively
         * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
         * @param {Boolean} autoRelease - indicates whether should release automatically
         */
        public setAutoReleaseRecursively(assetOrUrl:Asset|string, autoRelease?:boolean):void;

        /**
         * !#en
         * Returns whether the asset is configured as auto released, despite how "Auto Release Assets" property is set on scene asset.<br>
         * <br>
         * See: {{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}, {{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}
         *
         * !#zh
         * 返回指定的资源是否有被设置为自动释放，不论场景的“Auto Release Assets”如何设置。<br>
         * <br>
         * 参考：{{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}，{{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}
         * @method isAutoRelease
         * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
         * @returns {Boolean}
         */
        public isAutoRelease(assetOrUrl:Asset|string):boolean;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/downloaer.js
    //+--------------------------------------------------------------------------------
    // var JS = require('../platform/js');
    // var Path = require('../utils/CCPath');
    // var Pipeline = require('./pipeline');
    // var PackDownloader = require('./pack-downloader');
    // // var downloadBinary = require('./binary-downloader');
    // var downloadText = require('./text-downloader');

    // var urlAppendTimestamp = require('./utils').urlAppendTimestamp;

    // var downloadAudio;
    // if (!CC_EDITOR || !Editor.isMainProcess) {
    //     downloadAudio = require('./audio-downloader');
    // }
    // else {
    //     downloadAudio = null;
    // }

    // function downloadScript (item, callback, isAsync) {
    //     var url = item.url,
    //         d = document, 
    //         s = document.createElement('script');
    //     s.async = isAsync;
    //     s.src = urlAppendTimestamp(url);
    //     function loadHandler () {
    //         s.parentNode.removeChild(s);
    //         s.removeEventListener('load', loadHandler, false);
    //         s.removeEventListener('error', errorHandler, false);
    //         callback(null, url);
    //     }
    //     function errorHandler() {
    //         s.parentNode.removeChild(s);
    //         s.removeEventListener('load', loadHandler, false);
    //         s.removeEventListener('error', errorHandler, false);
    //         callback(new Error('Load ' + url + ' failed!'), url);
    //     }
    //     s.addEventListener('load', loadHandler, false);
    //     s.addEventListener('error', errorHandler, false);
    //     d.body.appendChild(s);
    // }

    // function downloadTextSync (item) {
    //     var url = item.url;
    //     var xhr = Pipeline.getXMLHttpRequest();
    //     xhr.open('GET', url, false);
    //     if (/msie/i.test(window.navigator.userAgent) && !/opera/i.test(window.navigator.userAgent)) {
    //         // IE-specific logic here
    //         xhr.setRequestHeader('Accept-Charset', 'utf-8');
    //     } else {
    //         if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    //     }
    //     xhr.send(null);
    //     if (xhr.readyState !== 4 || !(xhr.status === 200 || xhr.status === 0)) {
    //         return null;
    //     }
    //     return xhr.responseText;
    // }

    // function downloadImage (item, callback, isCrossOrigin) {
    //     if (isCrossOrigin === undefined) {
    //         isCrossOrigin = true;
    //     }

    //     var url = urlAppendTimestamp(item.url);
    //     var img = new Image();
    //     if (isCrossOrigin && window.location.origin !== 'file://') {
    //         img.crossOrigin = 'anonymous';
    //     }

    //     if (img.complete && img.naturalWidth > 0) {
    //         callback(null, img);
    //     }
    //     else {
    //         function loadCallback () {
    //             img.removeEventListener('load', loadCallback);
    //             img.removeEventListener('error', errorCallback);

    //             if (callback) {
    //                 callback(null, img);
    //             }
    //         }
    //         function errorCallback () {
    //             img.removeEventListener('load', loadCallback);
    //             img.removeEventListener('error', errorCallback);

    //             if (img.crossOrigin && img.crossOrigin.toLowerCase() === 'anonymous') {
    //                 downloadImage(item, callback, false);
    //             }
    //             else {
    //                 callback('Load image (' + url + ') failed');
    //             }
    //         }

    //         img.addEventListener('load', loadCallback);
    //         img.addEventListener('error', errorCallback);
    //     }
    //     img.src = url;
    // }

    // var FONT_TYPE = {
    //     '.eot' : 'embedded-opentype',
    //     '.ttf' : 'truetype',
    //     '.ttc' : 'truetype',
    //     '.woff' : 'woff',
    //     '.svg' : 'svg'
    // };
    // function _loadFont (name, srcs, type){
    //     var doc = document, 
    //         path = cc.path, 
    //         fontStyle = document.createElement('style');
    //     fontStyle.type = 'text/css';
    //     doc.body.appendChild(fontStyle);

    //     var fontStr = '';
    //     if (isNaN(name - 0)) {
    //         fontStr += '@font-face { font-family:' + name + '; src:';
    //     }
    //     else {
    //         fontStr += '@font-face { font-family:\'' + name + '\'; src:';
    //     }
    //     if (srcs instanceof Array) {
    //         for (var i = 0, li = srcs.length; i < li; i++) {
    //             var src = srcs[i];
    //             type = path.extname(src).toLowerCase();
    //             fontStr += 'url(\'' + srcs[i] + '\') format(\'' + FONT_TYPE[type] + '\')';
    //             fontStr += (i === li - 1) ? ';' : ',';
    //         }
    //     } else {
    //         type = type.toLowerCase();
    //         fontStr += 'url(\'' + srcs + '\') format(\'' + FONT_TYPE[type] + '\');';
    //     }
    //     fontStyle.textContent += fontStr + '}';

    //     //<div style="font-family: PressStart;">.</div>
    //     var preloadDiv = document.createElement('div');
    //     var _divStyle =  preloadDiv.style;
    //     _divStyle.fontFamily = name;
    //     preloadDiv.innerHTML = '.';
    //     _divStyle.position = 'absolute';
    //     _divStyle.left = '-100px';
    //     _divStyle.top = '-100px';
    //     doc.body.appendChild(preloadDiv);
    // }
    // function downloadFont (item, callback) {
    //     var url = item.url,
    //         type = item.type, 
    //         name = item.name, 
    //         srcs = item.srcs;
    //     if (name && srcs) {
    //         if (srcs.indexOf(url) === -1) {
    //             srcs.push(url);
    //         }
    //         _loadFont(name, srcs);
    //     } else {
    //         type = cc.path.extname(url);
    //         name = cc.path.basename(url, type);
    //         _loadFont(name, url, type);
    //     }
    //     if (document.fonts) {
    //         document.fonts.load('1em ' + name).then(function () {
    //             callback(null, null);
    //         }, function(err){
    //             callback(err);
    //         });
    //     } else {
    //         callback(null, null);
    //     }
    // }

    // function downloadUuid (item, callback) {
    //     var uuid = item.id;
    //     var self = this;
    //     cc.AssetLibrary.queryAssetInfo(uuid, function (error, url, isRawAsset) {
    //         if (error) {
    //             callback(error);
    //         }
    //         else {
    //             item.url = url;
    //             item.isRawAsset = isRawAsset;
    //             if (isRawAsset) {
    //                 var ext = Path.extname(url).toLowerCase();
    //                 if (!ext) {
    //                     callback(new Error('Download Uuid: can not find type of raw asset[' + uuid + ']: ' + url));
    //                     return;
    //                 }
    //                 ext = ext.substr(1);
    //                 self.pipeline._items.map[url] = {
    //                     id: url,
    //                     url: url,
    //                     type: ext,
    //                     error: null,
    //                     alias: item.id,
    //                     complete: true
    //                 };
    //                 // Dispatch to other raw type downloader
    //                 var downloadFunc = self.extMap[ext] || self.extMap['default'];
    //                 item.type = ext;
    //                 downloadFunc(item, callback);
    //             }
    //             else {
    //                 var loadByPack = PackDownloader.load(item, callback);
    //                 if (!loadByPack) {
    //                     self.extMap['json'](item, callback);
    //                 }
    //             }
    //         }
    //     });
    // }


    // var defaultMap = {
    //     // JS
    //     'js' : downloadScript,

    //     // Images
    //     'png' : downloadImage,
    //     'jpg' : downloadImage,
    //     'bmp' : downloadImage,
    //     'jpeg' : downloadImage,
    //     'gif' : downloadImage,
    //     'ico' : downloadImage,
    //     'tiff' : downloadImage,
    //     'webp' : downloadImage,
    //     'image' : downloadImage,

    //     // Audio
    //     'mp3' : downloadAudio,
    //     'ogg' : downloadAudio,
    //     'wav' : downloadAudio,
    //     'mp4' : downloadAudio,
    //     'm4a' : downloadAudio,

    //     // Txt
    //     'txt' : downloadText,
    //     'xml' : downloadText,
    //     'vsh' : downloadText,
    //     'fsh' : downloadText,
    //     'atlas' : downloadText,

    //     'tmx' : downloadText,
    //     'tsx' : downloadText,

    //     'json' : downloadText,
    //     'ExportJson' : downloadText,
    //     'plist' : downloadText,

    //     'fnt' : downloadText,

    //     // Font
    //     'font' : downloadFont,
    //     'eot' : downloadFont,
    //     'ttf' : downloadFont,
    //     'woff' : downloadFont,
    //     'svg' : downloadFont,
    //     'ttc' : downloadFont,

    //     // Deserializer
    //     'uuid' : downloadUuid,

    //     'default' : downloadText
    // };

    // var ID = 'Downloader';

    export module Pipeline {

        /**
         * The downloader pipe, it can download several types of files:
         * 1. Text
         * 2. Image
         * 3. Script
         * 4. Audio
         * All unknown type will be downloaded as plain text.
         * You can pass custom supported types in the constructor.
         * @class Pipeline.Downloader
         */
        /**
         * Constructor of Downloader, you can pass custom supported types.
         * @example
         *  var downloader = new Downloader({
         *      // This will match all url with `.scene` extension or all url with `scene` type
         *      'scene' : function (url, callback) {}
         *  });
         * 
         * @method Downloader
         * @param {Object} extMap Custom supported types with corresponded handler
         */
        // var Downloader = function (extMap) {
        export class Downloader {
            public constructor(extMap:Object);
        //     this.id = ID;
        //     this.async = true;
        //     this.pipeline = null;
        //     this.maxConcurrent = cc.sys.isMobile ? 2 : 512;
        //     this._curConcurrent = 0;
        //     this._loadQueue = [];

        //     this.extMap = JS.mixin(extMap, defaultMap);
        // };
        // Downloader.ID = ID;
        // JS.mixin(Downloader.prototype, {
            /**
             * Add custom supported types handler or modify existing type handler.
             * @method addHandlers
             * @param {Object} extMap Custom supported types with corresponded handler
             */
            public addHandlers(extMap:Object):void;
            //     JS.mixin(this.extMap, extMap);
            // },

            // handle: function (item, callback) {
            public handle(item:??, callback:Function):void;
        //         var self = this;
        //         var downloadFunc = this.extMap[item.type] || this.extMap['default'];
        //         if (this._curConcurrent < this.maxConcurrent) {
        //             this._curConcurrent++;
        //             downloadFunc.call(this, item, function (err, result) {
        //                 // Concurrent logic
        //                 self._curConcurrent = Math.max(0, self._curConcurrent - 1);
        //                 while (self._curConcurrent < self.maxConcurrent) {
        //                     var nextOne = self._loadQueue.shift();
        //                     if (!nextOne) {
        //                         break;
        //                     }
        //                     self.handle(nextOne.item, nextOne.callback);
        //                 }

        //                 callback && callback(err, result);
        //             });
        //         }
        //         else {
        //             this._loadQueue.push({
        //                 item: item,
        //                 callback: callback
        //             });
        //         }
        //     }
        // });
        }
    }

    // Pipeline.Downloader = module.exports = Downloader;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/json-unpacker.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    // function JsonUnpacker () {
    //     this.jsons = {};
    // }

    export class JsonUnpacker {
        /**
         * @param {String[]} indices
         * @param {String} data
         */
        public read(indices:string[], data:string):void;

        public retrieve(key:string):string;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/loader.js
    //+--------------------------------------------------------------------------------

    // var JS = require('../platform/js');
    // var Pipeline = require('./pipeline');
    // var Texture2D = require('../textures/CCTexture2D');
    // var loadUuid = require('./uuid-loader');

    // function loadNothing (item, callback) {
    //     callback(null, null);
    // }

    // function loadJSON (item, callback) {
    //     if (typeof item.content !== 'string') {
    //         callback( new Error('JSON Loader: Input item doesn\'t contain string content') );
    //     }

    //     try {
    //         var result = JSON.parse(item.content);
    //         callback(null, result);
    //     }
    //     catch (e) {
    //         callback( new Error('JSON Loader: Parse json [' + item.id + '] failed : ' + e) );
    //     }
    // }

    // function loadImage (item, callback) {
    //     if (!(item.content instanceof Image)) {
    //         callback( new Error('Image Loader: Input item doesn\'t contain Image content') );
    //     }
    //     var url = item.url;
    //     var tex = cc.textureCache.getTextureForKey(url) || new Texture2D();
    //     tex.url = url;
    //     tex.initWithElement(item.content);
    //     tex.handleLoadedTexture();
    //     cc.textureCache.cacheImage(url, tex);
    //     callback(null, tex);
    // }

    // function loadPlist (item, callback) {
    //     if (typeof item.content !== 'string') {
    //         callback( new Error('Plist Loader: Input item doesn\'t contain string content') );
    //     }
    //     var result = cc.plistParser.parse(item.content);
    //     if (result) {
    //         callback(null, result);
    //     }
    //     else {
    //         callback( new Error('Plist Loader: Parse [' + item.id + '] failed') );
    //     }
    // }

    // var fntRE = {
    //     INFO_EXP: /info [^\n]*(\n|$)/gi,
    //     COMMON_EXP: /common [^\n]*(\n|$)/gi,
    //     PAGE_EXP: /page [^\n]*(\n|$)/gi,
    //     CHAR_EXP: /char [^\n]*(\n|$)/gi,
    //     KERNING_EXP: /kerning [^\n]*(\n|$)/gi,
    //     ITEM_EXP: /\w+=[^ \r\n]+/gi,
    //     INT_EXP: /^[\-]?\d+$/,
    // };
    // function _parseFntStrToObj (str) {
    //     var arr = str.match(fntRE.ITEM_EXP);
    //     var obj = {};
    //     if (arr) {
    //         for (var i = 0, li = arr.length; i < li; i++) {
    //             var tempStr = arr[i];
    //             var index = tempStr.indexOf('=');
    //             var key = tempStr.substring(0, index);
    //             var value = tempStr.substring(index + 1);
    //             if (value.match(fntRE.INT_EXP)) value = parseInt(value);
    //             else if (value[0] === '"') value = value.substring(1, value.length - 1);
    //             obj[key] = value;
    //         }
    //     }
    //     return obj;
    // }
    // function loadFnt (item, callback) {
    //     var fntStr = item.content;
    //     var url = item.url;

    //     var fnt = {}, i, li;
    //     //padding
    //     var infoObj = _parseFntStrToObj(fntStr.match(fntRE.INFO_EXP)[0]);
    //     var paddingArr = infoObj['padding'].split(',');
    //     var padding = {
    //         left: parseInt(paddingArr[0]),
    //         top: parseInt(paddingArr[1]),
    //         right: parseInt(paddingArr[2]),
    //         bottom: parseInt(paddingArr[3])
    //     };

    //     //common
    //     var commonObj = _parseFntStrToObj(fntStr.match(fntRE.COMMON_EXP)[0]);
    //     fnt.commonHeight = commonObj['lineHeight'];
    //     //font size
    //     fnt.fontSize = infoObj['size'];
    //     if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
    //         var texSize = cc.configuration.getMaxTextureSize();
    //         if (commonObj['scaleW'] > texSize.width || commonObj['scaleH'] > texSize.height) {
    //             cc.log('cc.LabelBMFont._parseCommonArguments(): page can\'t be larger than supported');
    //         }
    //     }
    //     if (commonObj['pages'] !== 1) {
    //         cc.log('cc.LabelBMFont._parseCommonArguments(): only supports 1 page');
    //     }

    //     //page
    //     var pageObj = _parseFntStrToObj(fntStr.match(fntRE.PAGE_EXP)[0]);
    //     if (pageObj['id'] !== 0) {
    //         cc.log('cc.LabelBMFont._parseImageFileName() : file could not be found');
    //     }
    //     fnt.atlasName = cc.path.changeBasename(url, pageObj['file']);

    //     //char
    //     var charLines = fntStr.match(fntRE.CHAR_EXP);
    //     var fontDefDictionary = fnt.fontDefDictionary = {};
    //     for (i = 0, li = charLines.length; i < li; i++) {
    //         var charObj = _parseFntStrToObj(charLines[i]);
    //         var charId = charObj['id'];
    //         fontDefDictionary[charId] = {
    //             rect: {x: charObj['x'], y: charObj['y'], width: charObj['width'], height: charObj['height']},
    //             xOffset: charObj['xoffset'],
    //             yOffset: charObj['yoffset'],
    //             xAdvance: charObj['xadvance']
    //         };
    //     }

    //     //kerning
    //     var kerningDict = fnt.kerningDict = {};
    //     var kerningLines = fntStr.match(fntRE.KERNING_EXP);
    //     if (kerningLines) {
    //         for (i = 0, li = kerningLines.length; i < li; i++) {
    //             var kerningObj = _parseFntStrToObj(kerningLines[i]);
    //             kerningDict[(kerningObj['first'] << 16) | (kerningObj['second'] & 0xffff)] = kerningObj['amount'];
    //         }
    //     }
    //     callback(null, fnt);
    // }

    // var defaultMap = {
    //     // Images
    //     'png' : loadImage,
    //     'jpg' : loadImage,
    //     'bmp' : loadImage,
    //     'jpeg' : loadImage,
    //     'gif' : loadImage,
    //     'ico' : loadImage,
    //     'tiff' : loadImage,
    //     'webp' : loadImage,
    //     'image' : loadImage,

    //     'json' : loadJSON,
    //     'ExportJson' : loadJSON,

    //     'plist' : loadPlist,

    //     'fnt' : loadFnt,

    //     'uuid' : loadUuid,
    //     'prefab' : loadUuid,
    //     'fire' : loadUuid,
    //     'scene' : loadUuid,

    //     'default' : loadNothing
    // };

    // var ID = 'Loader';

    export module Pipeline {
        /**
         * The loader pipe, it can load several types of files:
         * 1. Images
         * 2. JSON
         * 3. Plist
         * 4. Audio
         * 5. Font
         * 6. Cocos Creator scene
         * It will not interfere with items of unknown type.
         * You can pass custom supported types in the constructor.
         * @class Pipeline.Loader
         */
        /**
         * Constructor of Loader, you can pass custom supported types.
         * @example
         *  var loader = new Loader({
         *      // This will match all url with `.scene` extension or all url with `scene` type
         *      'scene' : function (url, callback) {}
         *  });
         * 
         * @method Loader
         * @param {Object} extMap Custom supported types with corresponded handler
         */
        // var Loader = function (extMap) {
        export class Loader {
            public constructor(extMap:Object);

        // Loader.ID = ID;
        // JS.mixin(Loader.prototype, {
            /**
             * Add custom supported types handler or modify existing type handler.
             * @method addHandlers
             * @param {Object} extMap Custom supported types with corresponded handler
             */
            public addHandlers(extMap:Object):void;

            public handle(item:???, callback:???):void;
        }
    }

    // Pipeline.Loader = module.exports = Loader;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/loading-items.js
    //+--------------------------------------------------------------------------------
    // var CallbacksInvoker = require('../platform/callbacks-invoker');
    // var JS = require('../platform/js');

    /**
     * !#en
     * LoadingItems is the manager of items in pipeline.</br>
     * It hold a map of items, each entry in the map is a url to object key value pair.</br>
     * Each item always contains the following property:</br>
     * - id: The identification of the item, usually it's identical to url</br>
     * - url: The url </br>
     * - type: The type, it's the extension name of the url by default, could be specified manually too.</br>
     * - error: The error happened in pipeline will be stored in this property.</br>
     * - content: The content processed by the pipeline, the final result will also be stored in this property.</br>
     * - complete: The flag indicate whether the item is completed by the pipeline.</br>
     * - states: An object stores the states of each pipe the item go through, the state can be: Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE</br>
     * </br>
     * Item can hold other custom properties.
     * !#zh
     * LoadingItems 负责管理 pipeline 中的对象</br>
     * 它有一个 map 属性用来存放加载项，在 map 对象中已 url 为 key 值。</br>
     * 每个对象都会包含下列属性：</br>
     * - id：该对象的标识，通常与 url 相同。</br>
     * - url：路径 </br>
     * - type: 类型，它这是默认的 URL 的扩展名，可以手动指定赋值。</br>
     * - error：pipeline 中发生的错误将被保存在这个属性中。</br>
     * - content: pipeline 中处理的内容时，最终的结果也将被存储在这个属性中。</br>
     * - complete：该标志表明该对象是否通过 pipeline 完成。</br>
     * - states：该对象存储每个管道中对象经历的状态，状态可以是 Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE</br>
     * </br>
     * 对象可容纳其他自定义属性。
     *
     * @class LoadingItems
     * @extends CallbacksInvoker
     */
    // var LoadingItems = function () {
    export class LoadingItems {
        /**
         * !#en The map of all items.
         * !#zh 存储所有加载项的对象。
         * @property map
         * @type {Object}
         */
        // this.map = {};
        public map:Object;

        /**
         * !#en The map of completed items.
         * !#zh 存储已经完成的加载项。
         * @property completed
         * @type {Object}
         */
        // this.completed = {};
        public completed:Object;

        /**
         * !#en Total count of all items.
         * !#zh 所有加载项的总数。
         * @property totalCount
         * @type {Number}
         */
        // this.totalCount = 0;
        public totalCount:number;

        /**
         * !#en Total count of completed items.
         * !#zh 所有完成加载项的总数。
         * @property completedCount
         * @type {Number}
         */
        public completedCount:number;

    // JS.mixin(LoadingItems.prototype, CallbacksInvoker.prototype, {
        public append(items:???[]):???[];

        /**
         * !#en Check whether all items are completed.
         * !#zh 检查是否所有加载项都已经完成。
         * @method isCompleted
         * @return {Boolean}
         */
        public isCompleted():boolean;

        /**
         * !#en Check whether an item is completed.
         * !#zh 通过 id 检查指定加载项是否已经加载完成。
         * @method isItemCompleted
         * @param {String} id The item's id.
         * @return {Boolean}
         */
        public isItemCompleted(id:string):boolean;

        /**
         * !#en Check whether an item exists.
         * !#zh 通过 id 检查加载项是否存在。
         * @method exists
         * @param {String} id The item's id.
         * @return {Boolean}
         */
        public exists(id:string):boolean;

        /**
         * !#en Returns the content of an internal item.
         * !#zh 通过 id 获取指定对象的内容。
         * @method getContent
         * @param {String} id The item's id.
         * @return {Object}
         */
        public getContent(id:string):Object;

        /**
         * !#en Returns the error of an internal item.
         * !#zh 通过 id 获取指定对象的错误信息。
         * @method getError
         * @param {String} id The item's id.
         * @return {Object}
         */
        public getError(id:string):Object;

        /**
         * !#en Add a listener for an item, the callback will be invoked when the item is completed.
         * !#zh 监听加载项（通过 key 指定）的完成事件。
         * @method addListener
         * @param {String} key
         * @param {Function} callback - can be null
         * @param {Object} target - can be null
         * @return {Boolean} whether the key is new
         */
        // addListener: CallbacksInvoker.prototype.add,

        /**
         * !#en
         * Check if the specified key has any registered callback. </br>
         * If a callback is also specified, it will only return true if the callback is registered.
         * !#zh
         * 检查指定的加载项是否有完成事件监听器。</br>
         * 如果同时还指定了一个回调方法，并且回调有注册，它只会返回 true。
         * @method hasListener
         * @param {String} key
         * @param {Function} [callback]
         * @param {Object} [target]
         * @return {Boolean}
         */
        // hasListener: CallbacksInvoker.prototype.has,

        /**
         * !#en
         * Removes a listener. </br>
         * It will only remove when key, callback, target all match correctly.
         * !#zh
         * 移除指定加载项已经注册的完成事件监听器。</br>
         * 只会删除 key, callback, target 均匹配的监听器。
         * @method remove
         * @param {String} key
         * @param {Function} callback
         * @param {Object} target
         * @return {Boolean} removed
         */
        // removeListener: CallbacksInvoker.prototype.remove,

        /**
         * !#en
         * Removes all callbacks registered in a certain event
         * type or all callbacks registered with a certain target.
         * !#zh 删除指定目标的所有完成事件监听器。
         * @method removeAllListeners
         * @param {String|Object} key - The event key to be removed or the target to be removed
         */
        // removeAllListeners: CallbacksInvoker.prototype.removeAll,

        /**
         * !#en Remove an item, can only remove completed item, ongoing item can not be removed.
         * !#zh 移除加载项，这里只会移除已经完成的加载项，正在进行的加载项将不能被删除。
         * @param {String} url
         */
        public removeItem(url:string):void;

        public complete(url:string):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/pack-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/pipeline.js
    //+--------------------------------------------------------------------------------
    // var JS = require('../platform/js');
    // var Path = require('../utils/CCPath');
    // var LoadingItems = require('./loading-items');

    // var ItemState = {
    //     WORKING: 1,
    //     COMPLETE: 2,
    //     ERROR: 3
    // };
    export module Pipeline {
        export enum ItemState {
            WORKING,
            COMPLETE,
            ERROR
        }
    }

    // function asyncFlow (item) {
    //     var pipeId = this.id;
    //     var itemState = item.states[pipeId];
    //     var next = this.next;

    //     if (item.error || itemState === ItemState.WORKING || itemState === ItemState.ERROR) {
    //         return;
    //     }
    //     else if (itemState === ItemState.COMPLETE) {
    //         if (next) {
    //             next.flowIn(item);
    //         }
    //         else {
    //             this.pipeline.flowOut(item);
    //         }
    //     }
    //     else {
    //         item.states[pipeId] = ItemState.WORKING;
    //         var pipe = this;
    //         this.handle(item, function (err, result) {
    //             if (err) {
    //                 item.error = err;
    //                 item.states[pipeId] = ItemState.ERROR;
    //                 pipe.pipeline.flowOut(item);
    //             }
    //             else {
    //                 // Result can be null, then it means no result for this pipe
    //                 if (result) {
    //                     item.content = result;
    //                 }
    //                 item.states[pipeId] = ItemState.COMPLETE;
    //                 if (next) {
    //                     next.flowIn(item);
    //                 }
    //                 else {
    //                     pipe.pipeline.flowOut(item);
    //                 }
    //             }
    //         });
    //     }
    // }
    // function syncFlow (item) {
    //     var pipeId = this.id;
    //     var itemState = item.states[pipeId];
    //     var next = this.next;
        
    //     if (item.error || itemState === ItemState.WORKING || itemState === ItemState.ERROR) {
    //         return;
    //     }
    //     else if (itemState === ItemState.COMPLETE) {
    //         if (next) {
    //             next.flowIn(item);
    //         }
    //         else {
    //             this.pipeline.flowOut(item);
    //         }
    //     }
    //     else {
    //         item.states[pipeId] = ItemState.WORKING;
    //         var result = this.handle(item);
    //         if (result instanceof Error) {
    //             item.error = result;
    //             item.states[pipeId] = ItemState.ERROR;
    //             this.pipeline.flowOut(item);
    //         }
    //         else {
    //             // Result can be null, then it means no result for this pipe
    //             if (result) {
    //                 item.content = result;
    //             }
    //             item.states[pipeId] = ItemState.COMPLETE;
    //             if (next) {
    //                 next.flowIn(item);
    //             }
    //             else {
    //                 this.pipeline.flowOut(item);
    //             }
    //         }
    //     }
    // }

    // function isIdValid (id) {
    //     var realId = id.id || id;
    //     return (typeof realId === 'string');
    // }
    // function createItem (id) {
    //     var result;
    //     if (typeof id === 'object' && id.id) {
    //         if (!id.type) {
    //             id.type = Path.extname(id.id).toLowerCase().substr(1);
    //         }
    //         result = {
    //             url: id.url || id.id,
    //             error: null,
    //             content: null,
    //             complete: false,
    //             states: {}
    //         };
    //         JS.mixin(result, id);
    //     }
    //     else if (typeof id === 'string') {
    //         result = {
    //             id: id,
    //             url: id,
    //             type: Path.extname(id).toLowerCase().substr(1),
    //             error: null,
    //             content: null,
    //             complete: false,
    //             states: {}
    //         };
    //     }

    //     if (result.skips) {
    //         for (var i = 0, l = result.skips.length; i < l; i++) {
    //             var skip = result.skips[i];
    //             result.states[skip] = ItemState.COMPLETE;
    //         }
    //     }

    //     return result;
    // }

    // function getXMLHttpRequest () {
    //     return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
    // }

    export interface Pipe {
        id:string;
        handle(item:???, callback:???);
        async?:boolean;
    }

    /**
     * !#en
     * A pipeline describes a sequence of manipulations, each manipulation is called a pipe.</br>
     * It's designed for loading process. so items should be urls, and the url will be the identity of each item during the process.</br>
     * A list of items can flow in the pipeline and it will output the results of all pipes.</br>
     * They flow in the pipeline like water in tubes, they go through pipe by pipe separately.</br>
     * Finally all items will flow out the pipeline and the process is finished.
     *
     * !#zh
     * pipeline 描述了一系列的操作，每个操作都被称为 pipe。</br>
     * 它被设计来做加载过程的流程管理。所以 item 应该是 url，并且该 url 将是在处理中的每个 item 的身份标识。</br>
     * 一个 item 列表可以在 pipeline 中流动，它将输出加载项经过所有 pipe 之后的结果。</br>
     * 它们穿过 pipeline 就像水在管子里流动，将会按顺序流过每个 pipe。</br>
     * 最后当所有加载项都流出 pipeline 时，整个加载流程就结束了。
     * @class Pipeline
     */
    /**
     * !#en
     * Constructor, pass an array of pipes to construct a new Pipeline,
     * the pipes will be chained in the given order.</br>
     * A pipe is an object which must contain an `id` in string and a `handle` function,
     * the id must be unique in the pipeline.</br>
     * It can also include `async` property to identify whether it's an asynchronous process.
     * !#zh
     * 构造函数，通过一系列的 pipe 来构造一个新的 pipeline，pipes 将会在给定的顺序中被锁定。</br>
     * 一个 pipe 就是一个对象，它包含了字符串类型的 ‘id’ 和 ‘handle’ 函数，在 pipeline 中 id 必须是唯一的。</br>
     * 它还可以包括 ‘async’ 属性以确定它是否是一个异步过程。
     *
     * @method Pipeline
     * @param {Array} pipes
     * @example
     *  var pipeline = new Pipeline([
     *      {
     *          id: 'Downloader',
     *          handle: function (item, callback) {},
     *          async: true
     *      },
     *      {id: 'Parser', handle: function (item) {}, async: false}
     *  ]);
     */
    // var Pipeline = function (pipes) {
    export class Pipeline {
        public constructor(pipes:Pipe[]);

    // Pipeline.ItemState = new cc.Enum(ItemState);
    // Pipeline.getXMLHttpRequest = getXMLHttpRequest;
        public static getXMLHttpRequest():XMLHttpRequest;

    // JS.mixin(Pipeline.prototype, {
        /**
         * !#en
         * Insert a new pipe at the given index of the pipeline. </br>
         * A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
         * !#zh
         * 在给定的索引位置插入一个新的 pipe。</br>
         * 一个 pipe 必须包含一个字符串类型的 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。
         * @method insertPipe
         * @param {Object} pipe The pipe to be inserted
         * @param {Number} index The index to insert
         */
        public insertPipe(pipe:Pipe, index:number):void;

        /**
         * !#en
         * Add a new pipe at the end of the pipeline. </br>
         * A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
         * !#zh
         * 添加一个新的 pipe 到 pipeline 尾部。 </br>
         * 该 pipe 必须包含一个字符串类型 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。
         * @method appendPipe
         * @param {Object} pipe The pipe to be appended
         */
        public appendPipe(pipe:Pipe):void;

        /**
         * !#en
         * Let new items flow into the pipeline. </br>
         * Each item can be a simple url string or an object,
         * if it's an object, it must contain `id` property. </br>
         * You can specify its type by `type` property, by default, the type is the extension name in url. </br>
         * By adding a `skips` property including pipe ids, you can skip these pipe. </br>
         * The object can contain any supplementary property as you want. </br>
         * !#zh
         * 让新的 item 流入 pipeline 中。</br>
         * 这里的每个 item 可以是一个简单字符串类型的 url 或者是一个对象,
         * 如果它是一个对象的话，他必须要包含 ‘id’ 属性。</br>
         * 你也可以指定它的 ‘type’ 属性类型，默认情况下，该类型是 ‘url’ 的后缀名。</br>
         * 也通过添加一个 包含 ‘skips’ 属性的 item 对象，你就可以跳过 skips 中包含的 pipe。</br>
         * 该对象可以包含任何附加属性。
         * @method flowIn
         * @param {Array} urlList
         * @return {Array} Items accepted by the pipeline
         * @example
         *  pipeline.flowIn([
         *      'res/Background.png',
         *      {
         *          id: 'res/scene.json',
         *          type: 'scene',
         *          name: 'scene',
         *          skips: ['Downloader']
         *      }
         *  ]);
         */
        public flowIn(urlList:string[]):???[];

        /**
         * !#en
         * Let new items flow into the pipeline and give a callback when the list of items are all completed. </br>
         * This is for loading dependencies for an existing item in flow, usually used in a pipe logic. </br>
         * For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded  </br>
         * after all its dependencies are loaded, then you will need to use function to flow in all dependencies  </br>
         * found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback).
         * !#zh
         * 让新 items 流入 pipeline 并且当 item 列表完成时进行回调函数。</br>
         * 这个 API 的使用通常是为了加载依赖项。</br>
         * 例如：</br>
         * 我们需要加载一个场景配置的 JSON 文件，该场景会将所有的依赖项全部都加载完毕以后，进行回调表示加载完毕。
         * @method flowInDeps
         * @param {Array} urlList
         * @param {Function} callback
         * @return {Array} Items accepted by the pipeline
         */
        public flowInDeps(urlList:string[], callback:Function):???[];

        public complete():void;

        public flowOut(item:???):void;

        /**
         * !#en
         * Copy the item states from one source item to all destination items. </br>
         * It's quite useful when a pipe generate new items from one source item,</br>
         * then you should flowIn these generated items into pipeline, </br>
         * but you probably want them to skip all pipes the source item already go through,</br>
         * you can achieve it with this API. </br>
         * </br>
         * For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.
         * !#zh
         * 从一个源 item 向所有目标 item 复制它的 pipe 状态，用于避免重复通过部分 pipe。</br>
         * 当一个源 item 生成了一系列新的 items 时很有用，</br>
         * 你希望让这些新的依赖项进入 pipeline，但是又不希望它们通过源 item 已经经过的 pipe，</br>
         * 但是你可能希望他们源 item 已经通过并跳过所有 pipes，</br>
         * 这个时候就可以使用这个 API。
         * @method copyItemStates
         * @param {Object} srcItem The source item
         * @param {Array|Object} dstItems A single destination item or an array of destination items
         */
        public copyItemStates(srcItem:Object, dstItems:Object|Object[]):void;

        /**
         * !#en Returns whether the pipeline is flowing (contains item) currently.
         * !#zh 获取 pipeline 当前是否正在处理中。
         * @method isFlowing
         * @return {Boolean}
         */
        public isFlowing():boolean;

        /**
         * !#en Returns all items in pipeline.
         * !#zh 获取 pipeline 中的所有 items。
         * @method getItems
         * @return {LoadingItems}
         */
        public getItems():LoadingItems[];

        /**
         * !#en Returns an item in pipeline.
         * !#zh 获取指定 item。
         * @method getItem
         * @return {LoadingItems}
         */
        public getItem(url:string):LoadingItem;

        /**
         * !#en Removes an item in pipeline, no matter it's in progress or completed.
         * !#zh 移除指定 item，无论是进行时还是已完成。
         * @method removeItem
         * @return {Boolean} succeed or not
         */
        public removeItem(url:string):boolean;

        /**
         * !#en Clear the current pipeline, this function will clean up the items.
         * !#zh 清空当前 pipeline，该函数将清理 items。
         * @method clear
         */
        public clear():void;

        /**
         * !#en This is a callback which will be invoked while an item flow out the pipeline, you should overwrite this function.
         * !#zh 这个回调函数将在 item 流出 pipeline 时被调用，你应该重写该函数。
         * @method onProgress
         * @param {Number} completedCount The number of the items that are already completed.
         * @param {Number} totalCount The total number of the items.
         * @param {Object} item The latest item which flow out the pipeline.
         * @example
         *  pipeline.onProgress = function (completedCount, totalCount, item) {
         *      var progress = (100 * completedCount / totalCount).toFixed(2);
         *      cc.log(progress + '%');
         *  }
         */
        // onProgress: null,
        public onProgress(completedCount:number, totalCount:number, item:???):void;

        /**
         * !#en This is a callback which will be invoked while all items flow out the pipeline,
         * you should overwirte this function.
         * !#zh 该函数将在所有 item 流出 pipeline 时被调用，你应该重写该函数。
         * @method onComplete
         * @param {Array} error All errored urls will be stored in this array, if no error happened, then it will be null
         * @param {LoadingItems} items All items.
         * @example
         *  pipeline.onComplete = function (error, items) {
         *      if (error)
         *          cc.log('Completed with ' + error.length + ' errors');
         *      else
         *          cc.log('Completed ' + items.totalCount + ' items');
         *  }
         */
        // onComplete: null
        public onComplete(error:string[], items:LoadingItems[]):void;
    // });
    }

    // cc.Pipeline = module.exports = Pipeline;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/text-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/utils.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/uuid-loader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
}
