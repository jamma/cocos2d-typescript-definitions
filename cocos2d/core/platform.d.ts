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
}
