/// <reference path="../../../cocos-creator-lib.d.ts" />


declare namespace cc {
    export type ConfigurationValueType = string|boolean|number|Object;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/actions/CCConfiguration.js
    //+--------------------------------------------------------------------------------
    /**
     * cc.configuration is a singleton object which contains some openGL variables
     * @class
     * @name cc.configuration
     * @example
     * var textureSize = cc.configuration.getMaxTextureSize();
     */
    export class Configuration {
    	// Type constants
    	/*
    	 * ERROR type
    	 * @public
    	 * @const
    	 * @type {Number}
    	 */
    	// ERROR:0,
        public readonly ERROR:number;

    	/*
    	 * STRING type
    	 * @public
    	 * @const
    	 * @type {Number}
    	 */
    	// STRING:1,
        public readonly STRING:number;

    	/*
    	 * INT type
    	 * @public
    	 * @const
    	 * @type {Number}
    	 */
    	// INT:2,
        public readonly INT:number;

    	/*
    	 * DOUBLE type
    	 * @public
    	 * @const
    	 * @type {Number}
    	 */
    	// DOUBLE:3,
        public readonly DOUBLE:number;

    	/*
    	 * BOOLEAN type
    	 * @public
    	 * @const
    	 * @type {Number}
    	 */
    	// BOOLEAN:4,
        public readonly BOOLEAN:number;

        /**
         * OpenGL Max texture size.
         * @return {Number}
         */
        public getMaxTextureSize():number;

        /**
         * OpenGL Max Modelview Stack Depth.
         * @return {Number}
         */
        public getMaxModelviewStackDepth():number;

        /**
         * returns the maximum texture units
         * @return {Number}
         */
        public getMaxTextureUnits():number;

        /**
         * Whether or not the GPU supports NPOT (Non Power Of Two) textures.
         * OpenGL ES 2.0 already supports NPOT (iOS).
         * @return {Boolean}
         */
        public supportsNPOT():boolean;

        /**
         * Whether or not PVR Texture Compressed is supported
         * @return {Boolean}
         */
        public supportsPVRTC():boolean;

    	/**
    	 * Whether or not ETC Texture Compressed is supported
    	 * @return {Boolean}
    	 */
    	public supportsETC():boolean;

    	/**
    	 * Whether or not S3TC Texture Compressed is supported
    	 * @return {Boolean}
    	 */
    	public supportsS3TC():boolean;

    	/**
    	 * Whether or not ATITC Texture Compressed is supported
    	 * @return {Boolean}
    	 */
    	public supportsATITC():boolean;

        /**
         * Whether or not BGRA8888 textures are supported.
         * @return {Boolean}
         */
        public supportsBGRA8888():boolean;

        /**
         * Whether or not glDiscardFramebufferEXT is supported
         * @return {Boolean}
         */
        public supportsDiscardFramebuffer():boolean;

        /**
         * Whether or not shareable VAOs are supported.
         * @return {Boolean}
         */
        public supportsShareableVAO():boolean;

        /**
         * returns whether or not an OpenGL is supported
         * @param {String} searchName
         */
        public checkForGLExtension(searchName:string):boolean;

        /**
         * Returns the value of a given key.  If the key is not found, it will return the default value
         * @param {String} key
         * @param {String|Bool|Number|Object} [default_value=null]
         * @returns {String|Bool|Number|Object}
         */
        public getValue(key:string, default_value:ConfigurationValueType):ConfigurationValueType;

        /**
         * Sets a new key/value pair  in the configuration dictionary
         * @param {string} key
         * @param {String|Bool|Number|Object} value
         */
        public setValue(key:string, value:ConfigurationValueType):void;

        /**
         * gathers OpenGL / GPU information
         */
        public gatherGPUInfo():void;

        /**
         * Loads a config file. If the keys are already present, then they are going to be replaced. Otherwise the new keys are added.
         * @param {string} url
         */
        public loadConfigFile(url:string):void;
    }

    export const configuration:Configuration;
}
