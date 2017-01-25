/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCParticleAsset.js
    //+--------------------------------------------------------------------------------
	/**
	 * Class for particle asset handling.
	 * @class ParticleAsset
	 * @extends RawAsset
	 * @constructor
	 */
	export class ParticleAsset extends RawAsset {
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCParticleBatchNode.js
    //+--------------------------------------------------------------------------------
    /**
     * <p>
     *    cc.ParticleBatchNode is like a batch node: if it contains children, it will draw them in 1 single OpenGL call  <br/>
     *    (often known as "batch draw").  </br>
     *
     *    A cc.ParticleBatchNode can reference one and only one texture (one image file, one texture atlas).<br/>
     *    Only the cc.ParticleSystems that are contained in that texture can be added to the cc.SpriteBatchNode.<br/>
     *    All cc.ParticleSystems added to a cc.SpriteBatchNode are drawn in one OpenGL ES draw call.<br/>
     *    If the cc.ParticleSystems are not added to a cc.ParticleBatchNode then an OpenGL ES draw call will be needed for each one, which is less efficient.</br>
     *
     *    Limitations:<br/>
     *    - At the moment only ccsg.ParticleSystem is supported<br/>
     *    - All systems need to be drawn with the same parameters, blend function, aliasing, texture<br/>
     *
     *    Most efficient usage<br/>
     *    - Initialize the ParticleBatchNode with the texture and enough capacity for all the particle systems<br/>
     *    - Initialize all particle systems and add them as child to the batch node<br/>
     * </p>
     * @class
     * @extends ccsg.ParticleSystem
     * @param {String|cc.Texture2D} fileImage
     * @param {Number} capacity
     *
     * @property {cc.Texture2D|HTMLImageElement|HTMLCanvasElement}  texture         - The used texture
     * @property {cc.TextureAtlas}                                  textureAtlas    - The texture atlas used for drawing the quads
     *
     * @example
     * 1.
     * //Create a cc.ParticleBatchNode with image path  and capacity
     * var particleBatchNode = new cc.ParticleBatchNode("res/grossini_dance.png",30);
     *
     * 2.
     * //Create a cc.ParticleBatchNode with a texture and capacity
     * var texture = cc.TextureCache.getInstance().addImage("res/grossini_dance.png");
     * var particleBatchNode = new cc.ParticleBatchNode(texture, 30);
     */
    export class ParticleBatchNode extends Node {
        public texture:Texture2D;

        /**
         * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
         * Constructor of cc.ParticleBatchNode
         * @param {String|cc.Texture2D} fileImage
         * @param {Number} capacity
         * @example
         * 1.
         * //Create a cc.ParticleBatchNode with image path  and capacity
         * var particleBatchNode = new cc.ParticleBatchNode("res/grossini_dance.png",30);
         *
         * 2.
         * //Create a cc.ParticleBatchNode with a texture and capacity
         * var texture = cc.TextureCache.getInstance().addImage("res/grossini_dance.png");
         * var particleBatchNode = new cc.ParticleBatchNode(texture, 30);
         */
        public constructor(fileImage:string|Texture2D, capacity:number);

        /**
         * initializes the particle system with cc.Texture2D, a capacity of particles
         * @param {cc.Texture2D|HTMLImageElement|HTMLCanvasElement} texture
         * @param {Number} capacity
         * @return {Boolean}
         */
        public initWithTexture(fileImage:Texture2D|HTMLImageElement|HTMLCanvasElement, capacity:number):boolean;

        /**
         * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
         * @param {String} fileImage
         * @param {Number} capacity
         * @return {Boolean}
         */
        public initWithTexture(fileImage:string, capacity:number):boolean;

        /**
         * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
         * @param {String} fileImage
         * @param {Number} capacity
         * @return {Boolean}
         */
        public init(fileImage:string, capacity:number):boolean;
        public init():boolean;

        /**
         * Add a child into the cc.ParticleBatchNode
         * @param {ccsg.ParticleSystem} child
         * @param {Number} zOrder
         * @param {Number} tag
         */
        public addChild(child:ParticleSystem, zOrder:number, tag:number):void;

        /**
         * Inserts a child into the cc.ParticleBatchNode
         * @param {ccsg.ParticleSystem} pSystem
         * @param {Number} index
         */
        public insertChild(pSystem:ParticleSystem, index:number):void;

        /**
         * @param {ccsg.ParticleSystem} child
         * @param {Boolean} cleanup
         */
        public removeChild(child:ParticleSystem, cleanup?:boolean):void;

        /**
         * Reorder will be done in this function, no "lazy" reorder to particles
         * @param {ccsg.ParticleSystem} child
         * @param {Number} zOrder
         */
        public reorderChild(child:ParticleSystem, zOrder:number):void;

        /**
         * @param {Number} index
         * @param {Boolean} doCleanup
         */
        public removeChildAtIndex(index:number, doCleanup?:boolean):void;

        /**
         * @param {Boolean} doCleanup
         */
        public removeAllChildren(doCleanup?:boolean):void;

        /**
         * disables a particle by inserting a 0'd quad into the texture atlas
         * @param {Number} particleIndex
         */
        public disableParticle(particleIndex:number):void;

        /**
         * returns the used texture
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * sets a new texture. it will be retained
         * @param {cc.Texture2D} texture
         */
        public setTexture(texture:Texture2D):void;

        /**
         * set the blending function used for the texture
         * @param {Number|Object} src
         * @param {Number} dst
         */
        public setBlendFunc(func:BlendFunc):void;
        public setBlendFunc(src:number, dst:number):void;

        /**
         * returns the blending function used for the texture
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * return the texture atlas used for drawing the quads
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * set the texture atlas used for drawing the quads
         * @param {cc.TextureAtlas} textureAtlas
         */
        public setTextureAtlas(textureAtlas:TextureAtlas):void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCParticleBatchNodeCanvasRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCParticleBatchNodeWebGLRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCParticleSystem.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCPNGReader.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCSGParticleExamples.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCSGParticleSystem.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCSGParticleSystemCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCSGParticleSystemWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/particle/CCTIFFReader.js
    //+--------------------------------------------------------------------------------
}
