/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCAsset.js
    //+--------------------------------------------------------------------------------

    // TODO: Figure out signature for this callback
    export interface CreateNodeCallback {
        ():void;
    }


    // var RawAsset = require('./CCRawAsset');
    /**
     * !#en
     * Base class for handling assets used in Fireball. This class can be instantiate.
     *
     * You may want to override:<br/>
     * - createNode<br/>
     * - cc.Object._serialize<br/>
     * - cc.Object._deserialize<br/>
     * !#zh
     * 资源基类，该类可以被实例化。<br/>
     *
     * 您可能需要重写：<br/>
     * - createNode <br/>
     * - cc.Object._serialize<br/>
     * - cc.Object._deserialize<br/>
     *
     * @class Asset
     * @extends RawAsset
     * @constructor
     */
    // cc.Asset = cc.Class({
    export class Asset extends RawAsset {


        /**
         * !#en
         * Returns the url of this asset's first raw file, if none of rawFile exists,
         * it will returns an empty string.
         * !#zh 返回该资源的原始文件的 URL，如果不支持 RAW 文件，它将返回一个空字符串。
         * @property rawUrl
         * @type {String}
         * @readOnly
         */
        public readonly rawUrl:string;

        /**
         * !#en
         * Returns the url of this asset's raw files, if none of rawFile exists,
         * it will returns an empty array.
         * !#zh 返回该资源的原文件的 URL 数组，如果不支持 RAW 文件，它将返回一个空数组。
         * @property rawUrls
         * @type {String[]}
         * @readOnly
         */
        public readonly rawUrls:string[];


        /**
         * 应 AssetDB 要求提供这个方法
         *
         * @method deserialize
         * @param {String} data
         * @return {Asset}
         * @static
         * @private
         */
        public static deserialize(data:string):Asset;

        /**
         * !#en Indicates whether its dependent raw assets can support deferred load if the owner scene is marked as `asyncLoadAssets`.
         * !#zh 当场景被标记为 `asyncLoadAssets`，禁止延迟加载该资源所依赖的其它 RawAsset。
         *
         * @property {Boolean} preventDeferredLoadDependents
         * @default false
         * @static
         */
        public static preventDeferredLoadDependents:boolean;

        /**
         * 应 AssetDB 要求提供这个方法
         *
         * @method serialize
         * @return {String}
         * @private
         */
        public serialize():string;

        /**
         * !#en
         * Create a new node using this asset in the scene.<br/>
         * If this type of asset dont have its corresponding node type, this method should be null.
         * !#zh
         * 使用该资产在场景中创建一个新节点。<br/>
         * 如果这类资产没有相应的节点类型，该方法应该是空的。
         * @method createNode
         * @param {Function} callback
         * @param {String} callback.error - null or the error info
         * @param {Object} callback.node - the created node or null
         */
        public createNode(fn:CreateNodeCallback, error?:string):Node;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCAudioClip.js
    //+--------------------------------------------------------------------------------

	/**
	 * !#en Class for audio data handling.
	 * !#zh 音频资源类。
	 * @class AudioClip
	 * @extends RawAsset
	 * @constructor
	 */
    export class AudioClip extends RawAsset {
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCBitmapFont.js
    //+--------------------------------------------------------------------------------
    /**
     * @module cc
     */
    /**
     * !#en Class for BitmapFont handling.
     * !#zh 位图字体资源类。
     * @class BitmapFont
     * @extends RawAsset
     * @constructor
     */
    export class BitmapFont extends Font {
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCFont.js
    //+--------------------------------------------------------------------------------
	/**
	 * @module cc
	 */
	/**
	 * !#en Class for Font handling.
	 * !#zh 字体资源类。
	 * @class Font
	 * @extends RawAsset
	 * @constructor
	 */
    export class Font extends Asset {
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCPrefab.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en Class for prefab handling.
     * !#zh 预制资源类。
     * @class Prefab
     * @extends Asset
     * @constructor
     */
    export class Prefab extends Asset {
        // TODO: Figure out what type data is supposed to be
        public data:any;

    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCRawAsset.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en
     * The base class for registering asset types.
     *
     * You may want to override:
     * - createNode (static)
     * !#zh
     * 注册用的资源基类。<br/>
     * 你可能要重写：<br/>
     * - createNode (static)
     *
     * @class RawAsset
     * @extends CCObject
     * @static
     */
    export class RawAsset extends Object {
        /**
         * !#en
         * Create a new node in the scene.<br/>
         * If this type of asset dont have its corresponding node type, this method should be null.
         * !#zh
         * 在场景中创建一个新节点。<br/>
         * 如果这类资源没有相应的节点类型，该方法应该是空的。
         * @method createNodeByInfo
         * @param {Object} Info
         * @param {Function} callback
         * @param {String} callback.error - null or the error info
         * @param {Object} callback.node - the created node or null
         * @static
         */
        // TODO: There's no way in hell this method signature is correct, look for an example to figure this out
        public static createNodeByInfo(info:Object, cb:CreateNodeCallback, error?:string, node?:Node):Node;

        public constructor();

    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCSceneAsset.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en Class for scene handling.
     * !#zh 场景资源类。
     * @class SceneAsset
     * @extends Asset
     * @constructor
     */
    export class SceneAsset extends Asset {
        /**
         * @property {cc.Scene} scene
         * @default null
         */
        public scene:Scene;

        /**
         * !#en Indicates the raw assets of this scene can be load after scene launched.
         * !#zh 指示该场景依赖的资源可否在场景切换后再延迟加载。
         * @property {Boolean} asyncLoadAssets
         * @default false
         */
        public asyncLoadAssets:boolean;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCScripts.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Class for script handling.
     * !#zh Script 资源类。
     * @class _Script
     * @extends Asset
     * @constructor
     * @private
     */
    export class Script extends Asset {
    }

    /**
     * !#en Class for JavaScript handling.
     * !#zh JavaScript 资源类。
     * @class _JavaScript
     * @extends Asset
     * @private
     * @constructor
     */
    export class JavaScript extends Script {
    }

    /**
     * !#en Class for coffee script handling.
     * !#zh CoffeeScript 资源类。
     * @class CoffeeScript
     * @extends Asset
     * @constructor
     */
    export class CoffeeScript extends Script {
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCSpriteAtlas.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Class for sprite atlas handling.
     * !#zh 精灵图集资源类。
     * @class SpriteAtlas
     * @extends RawAsset
     * @constructor
     */
    // var SpriteAtlas = cc.Class({
    export class SpriteAtlas extends Asset {
        /**
         * Returns the texture of the sprite atlas
         * @method getTexture
         * @returns {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Returns the sprite frame correspond to the given key in sprite atlas.
         * @method getSpriteFrame
         * @param {String} key
         * @returns {SpriteFrame}
         */
        // getSpriteFrame: function (key) {
        public getSpriteFrame(key:string):SpriteFrame;

        /**
         * Returns the sprite frames in sprite atlas.
         * @method getSpriteFrames
         * @returns {[SpriteFrame]}
         */
        public getSpriteFrames():SpriteFrame[];
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCTextAsset.js
    //+--------------------------------------------------------------------------------
	/**
	 * !#en Class for text file.
	 * !#zh 文本资源类。
	 * @class TextAsset
	 * @extends Asset
	 * @constructor
	 */
	export class TextAsset extends Asset {
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/assets/CCTTFFont.js
    //+--------------------------------------------------------------------------------
	/**
	 * !#en Class for TTFFont handling.
	 * !#zh TTF 字体资源类。
	 * @class TTFFont
	 * @extends Asset
	 * @constructor
	 */
	export class TTFFont extends Font {
    }
}

