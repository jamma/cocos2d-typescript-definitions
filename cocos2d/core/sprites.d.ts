/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    // NOTE:
    //  I ignored the following files in the sprites directory, I do not believe they alter cc.Sprite's interface:
    //      - CCSpriteBatchNodeCanvas
    //      - CCSpriteBatchNodeWebGl
    //      - CCSpriteBatchNodeRenderCmd

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCAnimation.js
    // +--------------------------------------------------------------------------------
    /**
     * <p>
     *    cc.AnimationFrame
     *    A frame of the animation. It contains information like:
     *       - sprite frame name
     *       - # of delay units.
     *       - offset
     * </p>
     * @class
     * @extends cc.Class
     * @param spriteFrame
     * @param delayUnits
     * @param userInfo
     * @returns {AnimationFrame}
     */
    export class AnimationFrame extends Class {
        public ctor():void;
        public ctor(spriteFrame:SpriteFrame, delayUnits:number, userInfo:any):void;

        /**
         * Create a new animation frame and copy all contents into it
         * @returns {AnimationFrame}
         */
        public clone():AnimationFrame;

        ///**
        // * Create a new animation frame and copy all contents into it
        // * @returns {AnimationFrame}
        // */
        //public copyWithZone(pZone:string):AnimationFrame;

        /**
         * Create a new animation frame and copy all contents into it
         * @returns {AnimationFrame}
         */
        public copy():AnimationFrame;

        /**
         * initializes the animation frame with a spriteframe, number of delay units and a notification user info
         * @param {cc.SpriteFrame} spriteFrame
         * @param {Number} delayUnits
         * @param {object} userInfo
         */
        public initWithSpriteFrame(spriteFrame:SpriteFrame, delayUnits:number, userInfo:any):boolean;

        /**
         * Returns sprite frame to be used
         * @return {cc.SpriteFrame}
         */
        public getSpriteFrame():SpriteFrame;

        /**
         * Sets sprite frame to be used
         * @param {cc.SpriteFrame} spriteFrame
         */
        public setSpriteFrame(spriteFrame:SpriteFrame):void;

        /**
         * Returns how many units of time the frame takes getter
         * @return {Number}
         */
        public getDelayUnits():number;

        /**
         * Sets how many units of time the frame takes setter
         * @param delayUnits
         */
        public setDelayUnits(delayUnits:number):void;

        /**
         * Returns the user custom information
         * @return {object}
         */
        public getUserInfo():any;

        /**
         * Sets the user custom information
         * @param {object} userInfo
         */
        public setUserInfo(userInfo:any):void;
    }

    /**
     * <p>
     *     A cc.Animation object is used to perform animations on the cc.Sprite objects.<br/>
     *     <br/>
     *      The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. <br/>
     *      You can animate a cc.Animation object by using the cc.Animate action.
     * </p>
     * @class
     * @extends cc.Class
     * @param {Array} frames
     * @param {Number} delay
     * @param {Number} [loops=1]
     *
     * @example
     * // 1. Creates an empty animation
     * var animation1 = new cc.Animation();
     *
     * // 2. Create an animation with sprite frames, delay and loops.
     * var spriteFrames = [];
     * var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
     * spriteFrames.push(frame);
     * var animation1 = new cc.Animation(spriteFrames);
     * var animation2 = new cc.Animation(spriteFrames, 0.2);
     * var animation2 = new cc.Animation(spriteFrames, 0.2, 2);
     *
     * // 3. Create an animation with animation frames, delay and loops.
     * var animationFrames = [];
     * var frame =  new cc.AnimationFrame();
     * animationFrames.push(frame);
     * var animation1 = new cc.Animation(animationFrames);
     * var animation2 = new cc.Animation(animationFrames, 0.2);
     * var animation3 = new cc.Animation(animationFrames, 0.2, 2);
     *
     * //create an animate with this animation
     * var action = cc.animate(animation1);
     *
     * //run animate
     * sprite.runAction(action);
     */
    export class Animation extends Class {
        public ctor():void;
        public ctor(frames:SpriteFrame[], delay:number, loops:number):void;

        /**
         * Returns the array of animation frames
         * @return {Array}
         */
        public getFrames():SpriteFrame[];

        /**
         * Sets array of animation frames
         * @param {Array} frames
         */
        public setFrames(frames:SpriteFrame[]):void;

        /**
         * Adds a frame to a cc.Animation, the frame will be added with one "delay unit".
         * @param {cc.SpriteFrame} frame
         */
        public addSpriteFrame(frame:SpriteFrame):void;

        /**
         * Adds a frame with an image filename. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
         * @param {String} fileName
         */
        public addSpriteFrameWithFile(fileName:string):void;

        /**
         * Adds a frame with a texture and a rect. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
         * @param {cc.Texture2D} texture
         * @param {cc.Rect} rect
         */
        public addSpriteFrameWithTexture(texture:Texture2D, rect:Rect):void;

        /**
         * Initializes a cc.Animation with cc.AnimationFrame, do not call this method yourself, please pass parameters to constructor to initialize.
         * @param {Array} arrayOfAnimationFrames
         * @param {Number} delayPerUnit
         * @param {Number} [loops=1]
         */
        public initWithAnimationFrames(arrayOfAnimationFrames:AnimationFrame[], delayPerUnit:number, loops?:number):boolean;

        /**
         * Clone the current animation
         * @return {cc.Animation}
         */
        public clone():Animation;

        ///**
        // * Clone the current animation
        // * @return {cc.Animation}
        // */
        //copyWithZone:function (pZone) {
        //    var pCopy = new cc.Animation();
        //    pCopy.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
        //    pCopy.setRestoreOriginalFrame(this._restoreOriginalFrame);
        //    return pCopy;
        //},

        /**
         * Clone the current animation
         * @returns {cc.Animation}
         */
        public copy():Animation;

        /**
         * Returns how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
         * @return {Number}
         */
        public getLoops():number;

        /**
         * Sets how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
         * @param {Number} value
         */
        public setLoops(value:number):void;

        /**
         * Sets whether or not it shall restore the original frame when the animation finishes
         * @param {Boolean} restOrigFrame
         */
        public setRestoreOriginalFrame(restOrigFrame:boolean):void;

        /**
         * Returns whether or not it shall restore the original frame when the animation finishes
         * @return {Boolean}
         */
        public getRestoreOriginalFrame():boolean;

        /**
         * Returns duration in seconds of the whole animation. It is the result of totalDelayUnits * delayPerUnit
         * @return {Number}
         */
        public getDuration():number;

        /**
         * Returns delay in seconds of the "delay unit"
         * @return {Number}
         */
        public getDelayPerUnit():number;

        /**
         * Sets delay in seconds of the "delay unit"
         * @param {Number} delayPerUnit
         */
        public setDelayPerUnit(delayPerUnit:number):void;

        /**
         * Returns total delay units of the cc.Animation.
         * @return {Number}
         */
        public getTotalDelayUnits():number;

        /**
         * Initializes a cc.Animation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize.
         * @param {Array} frames
         * @param {Number} delay
         * @param {Number} [loops=1]
         */
        public initWithSpriteFrames(frames:SpriteFrame[], delay:number, loops?:number):boolean;

        /**
         * <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.<br/>
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
         * when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
         * The retain function can increase a reference count for the native object to avoid it being released,<br/>
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
         * retain and release function call should be paired in developer's game code.</p>
         * @function
         * @see cc.Animation#release
         */
        public retain():void;

        /**
         * <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.<br/>
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
         * when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
         * The retain function can increase a reference count for the native object to avoid it being released,<br/>
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
         * retain and release function call should be paired in developer's game code.</p>
         * @function
         * @see cc.Animation#retain
         */
        public release():void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCAnimationCache.js
    // +--------------------------------------------------------------------------------
    /**
     * <p>
     *     cc.animationCache is a singleton object that manages the Animations.<br/>
     *     It saves in a cache the animations. You should use this class if you want to save your animations in a cache.<br/>
     * <br/>
     * example<br/>
     * cc.animationCache.addAnimation(animation,"animation1");<br/>
     * </p>
     * @class
     * @name cc.animationCache
     */
    export namespace animationCache {
        /**
         * Adds a cc.Animation with a name.
         * @param {cc.Animation} animation
         * @param {String} name
         */
        export function addAnimation(animation:Animation, name:string):void;

        /**
         * Deletes a cc.Animation from the cache.
         * @param {String} name
         */
        export function removeAnimation(name:string):void;

        /**
         * <p>
         *     Returns a cc.Animation that was previously added.<br/>
         *      If the name is not found it will return nil.<br/>
         *      You should retain the returned copy if you are going to use it.</br>
         * </p>
         * @param {String} name
         * @return {cc.Animation}
         */
        export function getAnimation(name:string):Animation;

        /**
         * <p>
         *    Adds an animations from a plist file.<br/>
         *    Make sure that the frames were previously loaded in the cc.SpriteFrameCache.
         * </p>
         * @param {String} plist
         */
        export function addAnimations(plist:string):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCBakeSprite.js
    // +--------------------------------------------------------------------------------
    /****************************************************************************
     Copyright (c) 2013-2014 Chukong Technologies Inc.

     http://www.cocos2d-x.org

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of _t software and associated documentation files (the "Software"), to deal
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
     * cc.BakeSprite is a type of sprite that will be cached.
     * @class
     * @extend cc.Sprite
     */
    export class BakeSprite extends Sprite {
        public ctor():void;


        // TODO: Figure out (and define if necessary) the proper return types for these methods
        //public getCacheContext():CanvasContextWrapper;
        //public getCacheCanvas():???;

        /**
         * reset the cache canvas size
         * @param {cc.Size|Number} sizeOrWidth  size or width
         * @param {Number} [height]
         */
        public resetCanvasSize(sizeOrWidth:cc.Size|number, height?:number):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSprite.js
    // +--------------------------------------------------------------------------------

    /**
     * cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )
     *
     * cc.Sprite can be created with an image, or with a sub-rectangle of an image.
     *
     * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid
     *    - Features when the parent is a cc.BatchNode:
     *        - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.
     *
     *    - Limitations
     *        - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)
     *        - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl)
     *        - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.
     *        - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property.
     *        - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.
     *
     *  If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:
     *    - It supports blending functions
     *    - It supports aliasing / antialiasing
     *    - But the rendering will be slower: 1 draw per children.
     *
     * The default anchorPoint in cc.Sprite is (0.5, 0.5).
     * @class
     * @extends cc.Node
     *
     * @param {String|cc.SpriteFrame|HTMLImageElement|cc.Texture2D} fileName  The string which indicates a path to image file, e.g., "scene1/monster.png".
     * @param {cc.Rect} rect  Only the contents inside rect of pszFileName's texture will be applied for this sprite.
     * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
     * @example
     *
     * 1.Create a sprite with image path and rect
     * var sprite1 = new cc.Sprite("res/HelloHTML5World.png");
     * var sprite2 = new cc.Sprite("res/HelloHTML5World.png",cc.rect(0,0,480,320));
     *
     * 2.Create a sprite with a sprite frame name. Must add "#" before frame name.
     * var sprite = new cc.Sprite('#grossini_dance_01.png');
     *
     * 3.Create a sprite with a sprite frame
     * var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
     * var sprite = new cc.Sprite(spriteFrame);
     *
     * 4.Create a sprite with an existing texture contained in a CCTexture2D object
     *      After creation, the rect will be the size of the texture, and the offset will be (0,0).
     * var texture = cc.textureCache.addImage("HelloHTML5World.png");
     * var sprite1 = new cc.Sprite(texture);
     * var sprite2 = new cc.Sprite(texture, cc.rect(0,0,480,320));
     *
     * @property {Boolean}              dirty               - Indicates whether the sprite needs to be updated.
     * @property {Boolean}              flippedX            - Indicates whether or not the sprite is flipped on x axis.
     * @property {Boolean}              flippedY            - Indicates whether or not the sprite is flipped on y axis.
     * @property {Number}               offsetX             - <@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
     * @property {Number}               offsetY             - <@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
     * @property {Number}               atlasIndex          - The index used on the TextureAtlas.
     * @property {cc.Texture2D}         texture             - Texture used to render the sprite.
     * @property {Boolean}              textureRectRotated  - <@readonly> Indicate whether the texture rectangle is rotated.
     * @property {cc.TextureAtlas}      textureAtlas        - The weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
     * @property {cc.SpriteBatchNode}   batchNode           - The batch node object if this sprite is rendered by cc.SpriteBatchNode.
     * @property {cc.V3F_C4B_T2F_Quad}  quad                - <@readonly> The quad (tex coords, vertex coords and color) information.
     */
    export class Sprite extends Node {
        public dirty:boolean;
        public flippedX:boolean;
        public flippedY:boolean;
        public offsetX:number;
        public offsetY:number;
        public atlasIndex:number;
        public texture:Texture2D;
        public textureRectRotated:boolean;
        public textureAtlas:TextureAtlas;
        public batchNode:SpriteBatchNode;
        public quad:V3F_C4B_T2F_Quad;

        /**
         * cc.Sprite invalid index on the cc.SpriteBatchNode
         * @constant
         * @type {Number}
         */
        public static INDEX_NOT_INITIALIZED:number;

        public constructor(fileName:string, rect?:Rect, rotated?:boolean);

        /**
         * Returns whether the texture have been loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * Add a event listener for texture loaded event.
         * @param {Function} callback
         * @param {Object} target
         * @deprecated since 3.1, please use addEventListener instead
         */

        /**
         * Returns whether or not the Sprite needs to be updated in the Atlas
         * @return {Boolean} True if the sprite needs to be updated in the Atlas, false otherwise.
         */
        public isDirty():boolean;

        /**
         * Makes the sprite to be updated in the Atlas.
         * @param {Boolean} bDirty
         */
        public setDirty(bDirty:boolean):void;

        /**
         * Returns whether or not the texture rectangle is rotated.
         * @return {Boolean}
         */
        public isTextureRectRotated():boolean;

        /**
         * Returns the index used on the TextureAtlas.
         * @return {Number}
         */
        public getAtlasIndex():number;

        /**
         * Sets the index used on the TextureAtlas.
         * @warning Don't modify this value unless you know what you are doing
         * @param {Number} atlasIndex
         */
        public setAtlasIndex(atlasIndex:number):void;

        /**
         * Returns the rect of the cc.Sprite in points
         * @return {cc.Rect}
         */
        public getTextureRect():Rect;

        /**
         * Returns the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
         * @param {cc.TextureAtlas} textureAtlas
         */
        public setTextureAtlas(textureAtlas:TextureAtlas):void;

        /**
         * Returns the offset position of the sprite. Calculated automatically by editors like Zwoptex.
         * @return {cc.Point}
         */
        public getOffsetPosition():Point;

        /**
         * Returns the blend function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Initializes a sprite with a SpriteFrame. The texture and rect in SpriteFrame will be applied on this sprite.
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself,
         * @param {cc.SpriteFrame} spriteFrame A CCSpriteFrame object. It should includes a valid texture and a rect
         * @return {Boolean}  true if the sprite is initialized properly, false otherwise.
         */
        public initWithSpriteFrame(spriteFrame:SpriteFrame):boolean;

        /**
         * Initializes a sprite with a sprite frame name.
         * A cc.SpriteFrame will be fetched from the cc.SpriteFrameCache by name.
         * If the cc.SpriteFrame doesn't exist it will raise an exception.
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         * @param {String} spriteFrameName A key string that can fected a valid cc.SpriteFrame from cc.SpriteFrameCache
         * @return {Boolean} true if the sprite is initialized properly, false otherwise.
         * @example
         * var sprite = new cc.Sprite();
         * sprite.initWithSpriteFrameName("grossini_dance_01.png");
         */
        public initWithSpriteFrameName(spriteFrameName:string):boolean;

        /**
         * Tell the sprite to use batch node render.
         * @param {cc.SpriteBatchNode} batchNode
         */
        public useBatchNode(batchNode:SpriteBatchNode):boolean;

        /**
         *
         *    set the vertex rect.
         *    It will be called internally by setTextureRect.
         *    Useful if you want to create 2x images from SD images in Retina Display.
         *    Do not call it manually. Use setTextureRect instead.
         *    (override this method to generate "double scale" sprites)
         *
         * @param {cc.Rect} rect
         */
        public setVertexRect(rect:Rect):void;

        /**
         * Sets whether the sprite should be flipped horizontally or not.
         * @param {Boolean} flippedX true if the sprite should be flipped horizontally, false otherwise.
         */
        public setFlippedX(flippedX:boolean):void;

        /**
         * Sets whether the sprite should be flipped vertically or not.
         * @param {Boolean} flippedY true if the sprite should be flipped vertically, false otherwise.
         */
        public setFlippedY(flippedY:boolean):void;

        /**
         *
         * Returns the flag which indicates whether the sprite is flipped horizontally or not.
         *
         * It only flips the texture of the sprite, and not the texture of the sprite's children.
         * Also, flipping the texture doesn't alter the anchorPoint.
         * If you want to flip the anchorPoint too, and/or to flip the children too use:
         *      sprite.setScaleX(sprite.getScaleX() * -1);
         * @return {Boolean} true if the sprite is flipped horizontally, false otherwise.
         */
        public isFlippedX():boolean;

        /**
         *
         *     Return the flag which indicates whether the sprite is flipped vertically or not.
         *
         *      It only flips the texture of the sprite, and not the texture of the sprite's children.
         *      Also, flipping the texture doesn't alter the anchorPoint.
         *      If you want to flip the anchorPoint too, and/or to flip the children too use:
         *         sprite.setScaleY(sprite.getScaleY() * -1);
         * @return {Boolean} true if the sprite is flipped vertically, false otherwise.
         */
        public isFlippedY():boolean;

        // Animation

        /**
         * Changes the display frame with animation name and index.
         * The animation name will be get from the CCAnimationCache
         * @param {String} animationName
         * @param {Number} frameIndex
         */
        public setDisplayFrameWithAnimationName(animationName:string, frameIndex:number):void;

        /**
         * Returns the batch node object if this sprite is rendered by cc.SpriteBatchNode
         * @returns {cc.SpriteBatchNode|null} The cc.SpriteBatchNode object if this sprite is rendered by cc.SpriteBatchNode, null if the sprite isn't used batch node.
         */
        public getBatchNode():SpriteBatchNode;

        // CCTextureProtocol
        /**
         * Returns the texture of the sprite node
         * @returns {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Returns the quad (tex coords, vertex coords and color) information.
         * @return {cc.V3F_C4B_T2F_Quad|null} Returns a cc.V3F_C4B_T2F_Quad object when render mode is WebGL, returns null when render mode is Canvas.
         */
        public getQuad():V3F_C4B_T2F_Quad;

        /**
         * conforms to cc.TextureProtocol protocol
         * @function
         * @param {Number|cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         *
         *     Initializes a sprite with an image filename.
         *
         *     This method will find pszFilename from local file system, load its content to CCTexture2D,
         *     then use CCTexture2D to create a sprite.
         *     After initialization, the rect used will be the size of the image. The offset will be (0,0).
         *     Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         *
         * @param {String} filename The path to an image file in local file system
         * @param {cc.Rect} rect The rectangle assigned the content area from texture.
         * @return {Boolean} true if the sprite is initialized properly, false otherwise.
         */
        public initWithFile(filename:string, rect:Rect):boolean;

        /**
         * Initializes a sprite with a texture and a rect in points, optionally rotated.
         * After initialization, the rect used will be the size of the texture, and the offset will be (0,0).
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         * @function
         * @param {cc.Texture2D|HTMLImageElement|HTMLCanvasElement} texture A pointer to an existing CCTexture2D object. You can use a CCTexture2D object for many sprites.
         * @param {cc.Rect} [rect] Only the contents inside rect of this texture will be applied for this sprite.
         * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
         * @param {Boolean} [counterclockwise=true] Whether or not the texture rectangle rotation is counterclockwise (texture package is counterclockwise, spine is clockwise).
         * @return {Boolean} true if the sprite is initialized properly, false otherwise.
         */
        public initWithTexture(texture:HTMLCanvasElement, rect?:Rect, rotated?:boolean, counterclockwise?:boolean):boolean;
        public initWithTexture(texture:HTMLImageElement, rect?:Rect, rotated?:boolean, counterclockwise?:boolean):boolean;
        public initWithTexture(texture:Texture2D, rect?:Rect, rotated?:boolean, counterclockwise?:boolean):boolean;

        /**
         * Updates the texture rect of the CCSprite in points.
         * @function
         * @param {cc.Rect} rect a rect of texture
         * @param {Boolean} [rotated] Whether or not the texture is rotated
         * @param {cc.Size} [untrimmedSize] The original pixels size of the texture
         * @param {Boolean} [needConvert] contentScaleFactor switch
         */
        public setTextureRect(rect:Rect, rotated?:boolean, untrimmedSize?:Size, needConvert?:boolean):boolean;

        // Frames
        /**
         * Sets a new sprite frame to the sprite.
         * @function
         * @param {cc.SpriteFrame|String} newFrame
         */
        public setSpriteFrame(newFrame:string|SpriteFrame):void;

        /**
         * Sets a new display frame to the sprite.
         * @param {cc.SpriteFrame|String} newFrame
         * @deprecated
         */
        public setDisplayFrame(newFrame:string|SpriteFrame):SpriteFrame;

        /**
         * Returns whether or not a cc.SpriteFrame is being displayed
         * @function
         * @param {cc.SpriteFrame} frame
         * @return {Boolean}
         */
        public isFrameDisplayed(frame:SpriteFrame):boolean;

        /**
         * Returns the current displayed frame.
         * @return {cc.SpriteFrame}
         */
        public getSpriteFrame():SpriteFrame;

        /**
         * Sets the batch node to sprite
         * @function
         * @param {cc.SpriteBatchNode|null} spriteBatchNode
         * @example
         *  var batch = new cc.SpriteBatchNode("Images/grossini_dance_atlas.png", 15);
         *  var sprite = new cc.Sprite(batch.texture, cc.rect(0, 0, 57, 57));
         *  batch.addChild(sprite);
         *  layer.addChild(batch);
         */
        public setBatchNode(spriteBatchNode?:SpriteBatchNode):void;

        // CCTextureProtocol
        /**
         * Sets the texture of sprite
         * @function
         * @param {cc.Texture2D|String} texture
         */
        public setTexture(texture:string|Texture2D):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSpriteBatchNode.js
    // +--------------------------------------------------------------------------------

    /**
     *
     *     A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
     *     Only the cc.Sprites that are contained in that texture can be added to the cc.SpriteBatchNode.
     *     All cc.Sprites added to a cc.SpriteBatchNode are drawn in one WebGL draw call.
     *     If the cc.Sprites are not added to a cc.SpriteBatchNode then an WebGL draw call will be needed for each one, which is less efficient.
     *
     *     Limitations:
     *       - The only object that is accepted as child (or grandchild, grand-grandchild, etc...) is cc.Sprite or any subclass of cc.Sprite.
     *          eg: particles, labels and layer can't be added to a cc.SpriteBatchNode.
     *       - Either all its children are Aliased or Antialiased. It can't be a mix.
     *          This is because "alias" is a property of the texture, and all the sprites share the same texture.
     *
     * @class
     * @extends cc.Node
     *
     * @param {String|cc.Texture2D} fileImage
     * @param {Number} capacity
     * @example
     *
     * // 1. create a SpriteBatchNode with image path
     * var spriteBatchNode = new cc.SpriteBatchNode("res/animations/grossini.png", 50);
     *
     * // 2. create a SpriteBatchNode with texture
     * var texture = cc.textureCache.addImage("res/animations/grossini.png");
     * var spriteBatchNode = new cc.SpriteBatchNode(texture,50);
     *
     * @property {cc.TextureAtlas}  textureAtlas    - The texture atlas
     * @property {Array}            descendants     - <@readonly> Descendants of sprite batch node
     */
    export class SpriteBatchNode extends Node {
        /**
         * @constant
         * @type Number
         */
        public static DEFAULT_CAPACITY:number;
        public texture:Texture2D;
        public textureAtlas:TextureAtlas;

        public ctor(fileImage?:string|Texture2D, capacity?:number);

        /**
         *
         *    This is the opposite of "addQuadFromSprite.
         *    It add the sprite to the children and descendants array, but it doesn't update add it to the texture atlas
         *
         * @param {cc.Sprite} child
         * @param {Number} z zOrder
         * @param {Number} aTag
         * @return {cc.SpriteBatchNode}
         */
        public addSpriteWithoutQuad(child:Sprite, z:number, aTag:number);

        // property
        /**
         * Return TextureAtlas of cc.SpriteBatchNode
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * TextureAtlas of cc.SpriteBatchNode setter
         * @param {cc.TextureAtlas} textureAtlas
         */
        public setTextureAtlas(textureAtlas:TextureAtlas):void;

        /**
         * Return Descendants of cc.SpriteBatchNode
         * @return {Array}
         */
        public getDescendants():Sprite[];

        /**
         *
         *    Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
         *    The capacity will be increased in 33% in runtime if it run out of space.
         *    The file will be loaded using the TextureMgr.
         *    Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         * @param {String} fileImage
         * @param {Number} capacity
         * @return {Boolean}
         */
        public initWithFile(fileImage:string, capacity:number):boolean;

        /**
         *
         *    initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
         *    The capacity will be increased in 33% in runtime if it run out of space.
         *    The file will be loaded using the TextureMgr.
         *    Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         *    NOTE: Parameters are optional so that Node::init() can be properly overridden.
         *
         * @param {String} [fileImage]
         * @param {Number} [capacity]
         * @return {Boolean}
         */
        init(fileImage?:string, capacity?:number):boolean;

        /**
         * Increase Atlas Capacity
         */
        public increaseAtlasCapacity():void;

        /**
         * Removes a child given a certain index. It will also cleanup the running actions depending on the cleanup parameter.
         * @warning Removing a child from a cc.SpriteBatchNode is very slow
         * @param {Number} index
         * @param {Boolean} doCleanup
         */
        public removeChildAtIndex(index:number, doCleanup?:boolean):void;

        /**
         * Rebuild index in order for child
         * @param {cc.Sprite} pobParent
         * @param {Number} index
         * @return {Number}
         */
        public rebuildIndexInOrder(pobParent:Sprite, index:number):number;

        /**
         * Returns highest atlas index in child
         * @param {cc.Sprite} sprite
         * @return {Number}
         */
        public highestAtlasIndexInChild(sprite:Sprite):number;

        /**
         * Returns lowest atlas index in child
         * @param {cc.Sprite} sprite
         * @return {Number}
         */
        public lowestAtlasIndexInChild(sprite:Sprite):number;

        /**
         * Returns atlas index for child
         * @param {cc.Sprite} sprite
         * @param {Number} nZ
         * @return {Number}
         */
        public atlasIndexForChild(sprite:Sprite, nZ:number):number;

        /**
         * Sprites use this to start sortChildren, don't call this manually
         * @param {Boolean} reorder
         */
        public reorderBatch(reorder:boolean):void;

        /**
         * Sets the source and destination blending function for the texture
         * @param {Number | cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         * Returns the blending function used for the texture
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        ///**
        // * Reorder children (override reorderChild of cc.Node)
        // * @override
        // * @param {cc.Sprite} child
        // * @param {Number} zOrder
        // */
        //public reorderChild(child:Node, zOrder:number):void;
        //
        ///**
        // * Removes a child from cc.SpriteBatchNode (override removeChild of cc.Node)
        // * @param {cc.Sprite} child
        // * @param {Boolean} cleanup
        // */
        //public removeChild(child:Node, cleanup?:boolean):void;
        ////public removeChild(child:Sprite, cleanup?:boolean):void;

        /**
         *
         *   Updates a quad at a certain index into the texture atlas. The CCSprite won't be added into the children array.
         *   This method should be called only when you are dealing with very big AtlasSrite and when most of the cc.Sprite won't be updated.
         *   For example: a tile map (cc.TMXMap) or a label with lots of characters (BitmapFontAtlas)
         *
         * @function
         * @param {cc.Sprite} sprite
         * @param {Number} index
         */
        public updateQuadFromSprite(sprite:Sprite, index:number):void;

        /**
         *
         *    Inserts a quad at a certain index into the texture atlas. The cc.Sprite won't be added into the children array.
         *    This method should be called only when you are dealing with very big AtlasSprite and when most of the cc.Sprite won't be updated.
         *    For example: a tile map (cc.TMXMap) or a label with lots of characters (cc.LabelBMFont)
         *
         * @function
         * @param {cc.Sprite} sprite
         * @param {Number} index
         */
        public insertQuadFromSprite(sprite:Sprite, index:number):void;

        /**
         *
         *    Initializes a cc.SpriteBatchNode with a texture2d and capacity of children.
         *    The capacity will be increased in 33% in runtime if it run out of space.
         *    Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         * @function
         * @param {cc.Texture2D} tex
         * @param {Number} [capacity]
         * @return {Boolean}
         */
        public initWithTexture(tex:Texture2D, capacity?:number):boolean;

        /**
         * Insert a child
         * @param {cc.Sprite} sprite The child sprite
         * @param {Number} index The insert index
         */
        public insertChild(sprite:Sprite, index:number):void;

        /**
         * Add child at the end, faster than insert child
         * @function
         * @param {cc.Sprite} sprite
         */
        public appendChild(sprite:Sprite):void;

        /**
         * Removes sprite from TextureAtlas
         * @function
         * @param {cc.Sprite} sprite
         */
        public removeSpriteFromAtlas(sprite:Sprite):void;

        // CCTextureProtocol
        /**
         * Returns texture of the sprite batch node
         * @function
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Sets the texture of the sprite batch node.
         * @function
         * @param {cc.Texture2D} texture
         */
        public setTexture(texture:Texture2D):void;

    }


    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSpriteFrame.js
    // +--------------------------------------------------------------------------------
    /**
     *
     *    A cc.SpriteFrame has:
     *      - texture: A cc.Texture2D that will be used by the cc.Sprite
     *      - rectangle: A rectangle of the texture
     *
     *    You can modify the frame of a cc.Sprite by doing:
     *
     * @class
     * @extends cc.Class
     *
     * @param {String|cc.Texture2D} filename
     * @param {cc.Rect} rect If parameters' length equal 2, rect in points, else rect in pixels
     * @param {Boolean} [rotated] Whether the frame is rotated in the texture
     * @param {cc.Point} [offset] The offset of the frame in the texture
     * @param {cc.Size} [originalSize] The size of the frame in the texture
     *
     * @example
     * // 1. Create a cc.SpriteFrame with image path
     * var frame1 = new cc.SpriteFrame("res/grossini_dance.png",cc.rect(0,0,90,128));
     * var frame2 = new cc.SpriteFrame("res/grossini_dance.png",cc.rect(0,0,90,128),false,0,cc.size(90,128));
     *
     * // 2. Create a cc.SpriteFrame with a texture, rect, rotated, offset and originalSize in pixels.
     * var texture = cc.textureCache.addImage("res/grossini_dance.png");
     * var frame1 = new cc.SpriteFrame(texture, cc.rect(0,0,90,128));
     * var frame2 = new cc.SpriteFrame(texture, cc.rect(0,0,90,128),false,0,cc.size(90,128));
     */
    export class SpriteFrame {
        public constructor(filename:string|Texture2D, rect:Rect, rotated:boolean, offset:Point, originalSize:Size);

        /**
         * Returns whether the texture have been loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;


        /**
         * Gets the rect of the frame in the texture
         * @return {cc.Rect}
         */
        public getRectInPixels():Rect;

        /**
         * Sets the rect of the frame in the texture
         * @param {cc.Rect} rectInPixels
         */
        public setRectInPixels(rectInPixels:Rect):void;

        /**
         * Returns whether the sprite frame is rotated in the texture.
         * @return {Boolean}
         */
        public isRotated():boolean;

        /**
         * Set whether the sprite frame is rotated in the texture.
         * @param {Boolean} bRotated
         */
        public setRotated(bRotated:boolean):void;

        /**
         * Returns the rect of the sprite frame in the texture
         * @return {cc.Rect}
         */
        public getRect():Rect;

        /**
         * Sets the rect of the sprite frame in the texture
         * @param {cc.Rect} rect
         */
        public setRect(rect:Rect):void;

        /**
         * Returns the offset of the sprite frame in the texture in pixel
         * @return {cc.Point}
         */
        public getOffsetInPixels():Point;

        /**
         * Sets the offset of the sprite frame in the texture in pixel
         * @param {cc.Point} offsetInPixels
         */
        public setOffsetInPixels(offsetInPixels:Point):void;

        /**
         * Returns the original size of the trimmed image
         * @return {cc.Size}
         */
        public getOriginalSizeInPixels():Size;

        /**
         * Sets the original size of the trimmed image
         * @param {cc.Size} sizeInPixels
         */
        public setOriginalSizeInPixels(sizeInPixels:Size):void;

        /**
         * Returns the original size of the trimmed image
         * @return {cc.Size}
         */
        public getOriginalSize():Size;

        /**
         * Sets the original size of the trimmed image
         * @param {cc.Size} sizeInPixels
         */
        public setOriginalSize(sizeInPixels:Size):void;

        /**
         * Returns the texture of the frame
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Sets the texture of the frame, the texture is retained automatically
         * @param {cc.Texture2D} texture
         */
        public setTexture(texture:Texture2D):void;

        /**
         * Returns the offset of the frame in the texture
         * @return {cc.Point}
         */
        public getOffset():Point;

        /**
         * Sets the offset of the frame in the texture
         * @param {cc.Point} offset
         */
        public setOffset(offset:Point):void;

        /**
         * Clone the sprite frame
         * @returns {SpriteFrame}
         */
        public clone:SpriteFrame;

        ///**
        // * TODO: Figure out if this is even needed, it seems like some strange Obj-C artifact that shouldn't exist
        // *       in the cocos2d-js codebase (or cocos2d-x C++ either, for that matter).
        // * Copy the sprite frame
        // * @return {cc.SpriteFrame}
        // */
        //public copyWithZone():SpriteFrame;
        //
        ///**
        // * Copy the sprite frame
        // * @returns {cc.SpriteFrame}
        // */
        //public copy():SpriteFrame;

        /**
         * Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         * @param {String|cc.Texture2D} texture
         * @param {cc.Rect} rect if parameters' length equal 2, rect in points, else rect in pixels
         * @param {Boolean} [rotated=false]
         * @param {cc.Point} [offset=cc.p(0,0)]
         * @param {cc.Size} [originalSize=rect.size]
         * @return {Boolean}
         */
        //initWithTexture:function (texture, rect, rotated, offset, originalSize) {
        public initWithTexture(texture:string|Texture2D,
                               rect:Rect,
                               rotated:boolean,
                               offset:Point,
                               originalSize:Size):boolean;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSpriteFrameCache.js
    // +--------------------------------------------------------------------------------
    /**
     *
     * cc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.
     *
     * example
     * // add SpriteFrames to spriteFrameCache With File
     * cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
     *
     * @class
     * @name cc.spriteFrameCache
     */
        //export namespace spriteFrameCache = /** @lends cc.spriteFrameCache# */{
    export namespace spriteFrameCache {
        /**
         *
         *   Adds multiple Sprite Frames from a plist or json file.
         *   A texture will be loaded automatically. The texture name will composed by replacing the .plist or .json suffix with .png
         *   If you want to use another texture, you should use the addSpriteFrames:texture method.
         *
         * @param {String} url file path
         * @param {HTMLImageElement|cc.Texture2D|string} texture
         * @example
         * // add SpriteFrames to SpriteFrameCache With File
         * cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
         * cc.spriteFrameCache.addSpriteFrames(s_grossiniJson);
         */
        export function addSpriteFrames(url:string, texture:HTMLImageElement|Texture2D|string):void;

        /**
         *
         *  Adds an sprite frame with a given name.
         *  If the name already exists, then the contents of the old name will be replaced with the new one.
         *
         * @param {cc.SpriteFrame} frame
         * @param {String} frameName
         */
        export function addSpriteFrame(frame:SpriteFrame, frameName:string):void;

        /**
         *
         *   Purges the dictionary of loaded sprite frames.
         *   Call this method if you receive the "Memory Warning".
         *   In the short term: it will free some resources preventing your app from being killed.
         *   In the medium term: it will allocate more resources.
         *   In the long term: it will be the same.
         *
         */
        export function removeSpriteFrames():void;

        /**
         * Deletes an sprite frame from the sprite frame cache.
         * @param {String} name
         */
        export function removeSpriteFrameByName(name:string):void;

        /**
         *
         *     Removes multiple Sprite Frames from a plist file.
         *     Sprite Frames stored in this file will be removed.
         *     It is convinient to call this method when a specific texture needs to be removed.
         *
         * @param {String} url Plist filename
         */
        export function removeSpriteFramesFromFile(url:string):void;

        /**
         *
         *    Removes all Sprite Frames associated with the specified textures.
         *    It is convenient to call this method when a specific texture needs to be removed.
         *
         * @param {HTMLImageElement|HTMLCanvasElement|cc.Texture2D} texture
         */
        export function removeSpriteFramesFromTexture(texture:HTMLImageElement|HTMLCanvasElement|Texture2D):void;

        /**
         *
         *   Returns an Sprite Frame that was previously added.
         *   If the name is not found it will return nil.
         *   You should retain the returned copy if you are going to use it.
         *
         * @param {String} name name of SpriteFrame
         * @return {cc.SpriteFrame}
         * @example
         * //get a SpriteFrame by name
         * var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
         */
        export function getSpriteFrame(name:string):SpriteFrame;
    }
}
