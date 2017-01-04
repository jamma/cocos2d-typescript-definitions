/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/textures/CCTexture2D.js
    //+--------------------------------------------------------------------------------
    export module Texture2D {
        export interface Parameters {
            minFilter:number,
            magFilter:number,
            wrapS:WrapMode,
            wrapT:WrapMode
        }

        /**
         * The texture wrap mode
         * @enum Texture2D.WrapMode
         */
        // var WrapMode = cc.Enum({
        export enum WrapMode {
            /**
             * The constant variable equals gl.REPEAT for texture
             * @property REPEAT
             * @type {Number}
             * @readonly
             */
            REPEAT,

            /**
             * The constant variable equals gl.CLAMP_TO_EDGE for texture
             * @property CLAMP_TO_EDGE
             * @type {Number}
             * @readonly
             */
            CLAMP_TO_EDGE,

            /**
             * The constant variable equals gl.MIRRORED_REPEAT for texture
             * @property MIRRORED_REPEAT
             * @type {Number}
             * @readonly
             */
            MIRRORED_REPEAT
        }
    }

    /**
     * <p>
     * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>
     * The created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>
     * Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
     *  i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>
     * Be aware that the content of the generated textures will be upside-down! </p>

     * @class Texture2D
     * @extends RawAsset
     */
    export class Texture2D extends RawAsset implements EventTarget {

        /**
         * 32-bit texture: RGBA8888
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_RGBA8888
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_RGBA8888:number;

        /**
         * 24-bit texture: RGBA888
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_RGB888
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_RGB888:number;

        /**
         * 16-bit texture without Alpha channel
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_RGB565
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_RGB565:number;

        /**
         * 8-bit textures used as masks
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_A8
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_A8:number;

        /**
         * 8-bit intensity texture
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_I8
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_I8:number;

        /**
         * 16-bit textures used as masks
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_AI88
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_AI88:number;

        /**
         * 16-bit textures: RGBA4444
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_RGBA4444
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_RGBA4444:number;

        /**
         * 16-bit textures: RGB5A1
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_RGB5A1
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_RGB5A1:number;

        /**
         * 4-bit PVRTC-compressed texture: PVRTC4
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_PVRTC4
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_PVRTC4:number;

        /**
         * 2-bit PVRTC-compressed texture: PVRTC2
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_PVRTC2
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_PVRTC2:number;

        /**
         * Default texture format: RGBA8888
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_DEFAULT
         * @static
         * @constant
         * @type {Number}
         */
        public static readonly PIXEL_FORMAT_DEFAULT:number;

        /**
         * The default pixel format
         * @memberOf cc.Texture2D
         * @name PIXEL_FORMAT_PVRTC2
         * @static
         * @type {Number}
         */
        public static readonly defaultPixelFormat:number;

        /**
         * WebGLTexture Object.
         * @property name
         * @type {WebGLTexture}
         * @readonly
         */
        public name:string;

        /**
         * Pixel format of the texture.
         * @property pixelFormat
         * @type {Number}
         * @readonly
         */
        public pixelFormat:number;

        /**
         * Width in pixels.
         * @property pixelWidth
         * @type {Number}
         * @readonly
         */
        public pixelWidth:number;

        /**
         * Height in pixels.
         * @property pixelHeight
         * @type {Number}
         * @readonly
         */
        public pixelHeight:number;

        /**
         * Content width in points.
         * @property width
         * @type {Number}
         */
        public width:number;

        /**
         * Content height in points.
         * @property height
         * @type {Number}
         */
        public height:number;

        public constructor();

        /**
         * Get width in pixels.
         * @method getPixelWidth
         * @return {Number}
         */
        public getPixelWidth():number;

        /**
         * Get height of in pixels.
         * @method getPixelHeight
         * @return {Number}
         */
        public getPixelHeight():number;

        /**
         * Get content size.
         * @method getContentSize
         * @returns {Size}
         */
        public getContentSize():Size;

        /**
         * Get content size in pixels.
         * @method getContentSizeInPixels
         * @returns {Size}
         */
        public getContentSizeInPixels():Size;

        /**
         * Init with HTML element.
         * @method initWithElement
         * @param {HTMLImageElement|HTMLCanvasElement} element
         * @example
         * var img = new Image();
         * img.src = dataURL;
         * texture.initWithElement(img);
         * texture.handleLoadedTexture();
         */
        public initWithElement(element:HTMLImageElement|HTMLCanvasElement):void;

        /**
         * Intializes with a texture2d with data.
         * @method initWithData
         * @param {Array} data
         * @param {Number} pixelFormat
         * @param {Number} pixelsWide
         * @param {Number} pixelsHigh
         * @param {Size} contentSize
         * @return {Boolean}
         */
        public initWithData(data:???[], pixelFormat:number, pixelsWide:number, pixelsHigh:number, contentSize:size):boolean;

        /**
         * Initializes a texture from a UIImage object.
         * Extensions to make it easy to create a CCTexture2D object from an image file.
         * Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA).
         * @method initWithImage
         * @param {HTMLImageElement} uiImage
         * @return {Boolean}
         */
        public initWithImage(uiImage:HTMLImageElement):boolean;

        /**
         * HTMLElement Object getter.
         * @method getHtmlElementObj
         * @return {HTMLImageElement|HTMLCanvasElement}
         */
        public getHtmlElementObj():HTMLImageElement|HTMLCanvasElement;

        /**
         * Check whether texture is loaded.
         * @method isLoaded
         * @returns {Boolean}
         */
        public isLoaded():boolean;

        /**
         * Handler of texture loaded event.
         * @method handleLoadedTexture
         * @param {Boolean} [premultiplied]
         */
        public handleLoadedTexture(premultiplied?:boolean):void;

        /**
         * Description of cc.Texture2D.
         * @method description
         * @returns {String}
         */
        public description():string;

        /**
         * Release texture.
         * @method releaseTexture
         */
        public releaseTexture():void;

        public getName():string;

        /**
         * Pixel format of the texture.
         * @method getPixelFormat
         * @return {Number}
         */
        public getPixelFormat():number;

        /**
         * Whether or not the texture has their Alpha premultiplied,
         * support only in WebGl rendering mode.
         * @method hasPremultipliedAlpha
         * @return {Boolean}
         */
        public hasPremultipliedAlpha():boolean;

        /**
         * Whether or not use mipmap, support only in WebGl rendering mode.
         * @method hasMipmaps
         * @return {Boolean}
         */
        public hasMipmaps():boolean;

        /**
         * Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
         * If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.
         * @method setTexParameters
         * @param {Object|Number} texParams texParams object or minFilter
         * @param {Number} [magFilter]
         * @param {Texture2D.WrapMode} [wrapS]
         * @param {Texture2D.WrapMode} [wrapT]
         */
        public setTexParameters(texParams:Texture2D.Parameters):void;
        public setTexParameters(texParams:number, magFilter?:number, wrapS?:WrapMode, wrapT?:WrapMode):void;

        /**
         * sets antialias texture parameters:              <br/>
         *  - GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
         *  - GL_TEXTURE_MAG_FILTER = GL_NEAREST
         */
        public setAntiAliasTexParameters():void;

        /**
         * Sets alias texture parameters:
         *   GL_TEXTURE_MIN_FILTER = GL_NEAREST
         *   GL_TEXTURE_MAG_FILTER = GL_NEAREST
         */
        public setAliasTexParameters():void;

        /**
         *  Generates mipmap images for the texture.<br/>
         *  It only works if the texture size is POT (power of 2).
         */
        public generateMipmap():void;

        /**
         * returns the pixel format.
         * @return {String}
         */
        public stringForFormat():string;

        /**
         * returns the bits-per-pixel of the in-memory OpenGL texture
         * @return {Number}
         */
        public bitsPerPixelForFormat(format:number):number;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/textures/CCTextureAtlas.js
    //+--------------------------------------------------------------------------------
    // var Class = require('../platform/_CCClass');
    // var JS = require('../platform/js');
    // var game = require('../CCGame');

    /**
     * <p>A class that implements a Texture Atlas. <br />
     * Supported features: <br />
     * The atlas file can be a PNG, JPG. <br />
     * Quads can be updated in runtime <br />
     * Quads can be added in runtime <br />
     * Quads can be removed in runtime <br />
     * Quads can be re-ordered in runtime <br />
     * The TextureAtlas capacity can be increased or decreased in runtime.</p>
     * @class TextureAtlas
     * @constructor
     */

    // var TextureAtlas = Class.extend(/** @lends cc.TextureAtlas# */{  //WebGL only
    export class TextureAtlas {
        /**
         * Indicates whether or not the array buffer of the VBO needs to be updated.
         * @property dirty
         * @type {Boolean}
         */
        public dirty:boolean;

        /**
         * Image texture for cc.TextureAtlas.
         * @property texture
         * @type {Image}
         */
        public texture:Image;

        /**
         * Quantity of quads that can be stored with the current texture atlas size.
         * @property capacity
         * @type {Number}
         * @readonly
         */
        public capacity:number;

        /**
         * Quantity of quads that are going to be drawn.
         * @property totalQuads
         * @type {Number}
         * @readonly
         */
        public totalQuads:number;

        /**
         * Quads that are going to be rendered.
         * @property quads
         * @type {Array}
         * @readonly
         */
        public quads:V3F_C4B_T2F_Quad[];

        /**
         * <p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
         * The TextureAtlas capacity can be increased in runtime. </p>
         * Constructor of cc.TextureAtlas
         * @method TextureAtlas
         * @param {String|Texture2D} fileName
         * @param {Number} capacity
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/TextureAtlas.js}
         */
        public constructor(fileName:string|Texture2D, capacity:number);

        /**
         * Quantity of quads that are going to be drawn.
         * @method getTotalQuads
         * @return {Number}
         */
        public getTotalQuads():number;

        /**
         * Quantity of quads that can be stored with the current texture atlas size.
         * @method getCapacity
         * @return {Number}
         */
        public getCapacity():number;

        /**
         * Texture of the texture atlas.
         * @method getTexture
         * @return {Image}
         */
        public getTexture():Image;

        /**
         * Set texture for texture atlas.
         * @method setTexture
         * @param {Image} texture
         */
        public setTexture(texture:Image):void;

        /**
         * specify if the array buffer of the VBO needs to be updated.
         * @method setDirty
         * @param {Boolean} dirty
         */
        public setDirty(dirty:boolean):void;

        /**
         * whether or not the array buffer of the VBO needs to be updated.
         * @method isDirty
         * @returns {Boolean}
         */
        public isDirty():boolean;

        /**
         * Quads that are going to be rendered.
         * @method getQuads
         * @return {Array}
         */
        public getQuads:V3F_C4B_T2F_Quad[];

        /**
         * @method setQuads
         * @param {Array} quads
         */
        public setQuads(quads:V3F_C4B_T2F_Quad[]):void;

        /**
         * Description
         * @return {String}
         */
        public description():string;

        /**
         * <p>Initializes a TextureAtlas with a filename and with a certain capacity for Quads.<br />
         * The TextureAtlas capacity can be increased in runtime.<br />
         * WARNING: Do not reinitialize the TextureAtlas because it will leak memory. </p>
         * @method initWithFile
         * @param {String} file
         * @param {Number} capacity
         * @return {Boolean}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/initWithFile.js}
         */
        public initWithFile(file:string, capacity:number):boolean;

        /**
         * <p>Initializes a TextureAtlas with a previously initialized Texture2D object, and<br />
         * with an initial capacity for Quads.<br />
         * The TextureAtlas capacity can be increased in runtime.<br />
         * WARNING: Do not reinitialize the TextureAtlas because it will leak memory</p>
         * @method initWithTexture
         * @param {Image} texture
         * @param {Number} capacity
         * @return {Boolean}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/initWithTexture.js}
         */
        public initWithTexture(texture:Image, capacity:number):boolean;

        /**
         * <p>Updates a Quad (texture, vertex and color) at a certain index <br />
         * index must be between 0 and the atlas capacity - 1 </p>
         * @method updateQuad
         * @param {V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        public updateQuad(quad:V3F_C4B_T2F_Quad, index:number):void;

        /**
         * <p>Inserts a Quad (texture, vertex and color) at a certain index<br />
         * index must be between 0 and the atlas capacity - 1 </p>
         * @method insertQuad
         * @param {V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        public insertQuad(quad:V3F_C4B_T2F_Quad, index:number):void;

        /**
         * <p>
         *      Inserts a c array of quads at a given index                                           <br />
         *      index must be between 0 and the atlas capacity - 1                                    <br />
         *      this method doesn't enlarge the array when amount + index > totalQuads                <br />
         * </p>
         *
         * @method insertQuads
         * @param {Array} quads
         * @param {Number} index
         * @param {Number} amount
         */
        public insertQuads(quads:V3F_C4B_T2F_Quad[], index:number, amount:number):void;

        /**
         * <p>Removes the quad that is located at a certain index and inserts it at a new index <br />
         * This operation is faster than removing and inserting in a quad in 2 different steps</p>
         * @method insertQuadFromIndex
         * @param {Number} fromIndex
         * @param {Number} newIndex
         */
        public insertQuadFromIndex(fromIndex:number, newIndex:number):void;

        /**
         * <p>Removes a quad at a given index number.<br />
         * The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p>
         * @method removeQuadAtIndex
         * @param {Number} index
         */
        public removeQuadAtIndex(index:number):void;

        /**
         * Removes a given number of quads at a given index.
         * @method removeQuadsAtIndex
         * @param {Number} index
         * @param {Number} amount
         */
        public removeQuadsAtIndex(index:number, amount:number):void;

        /**
         * <p>Removes all Quads. <br />
         * The TextureAtlas capacity remains untouched. No memory is freed.<br />
         * The total number of quads to be drawn will be 0</p>
         * @method removeAllQuads
         */
        public removeAllQuads():void;

        /**
         * <p>Resize the capacity of the CCTextureAtlas.<br />
         * The new capacity can be lower or higher than the current one<br />
         * It returns YES if the resize was successful. <br />
         * If it fails to resize the capacity it will return NO with a new capacity of 0. <br />
         * no used for js</p>
         * @method resizeCapacity
         * @param {Number} newCapacity
         * @return {Boolean}
         */
        public resizeCapacity(newCapacity:number):boolean;

        /**
         * Used internally by CCParticleBatchNode                                    <br/>
         * don't use this unless you know what you're doing.
         * @method increaseTotalQuadsWith
         * @param {Number} amount
         */
        public increaseTotalQuadsWith(amount:number):void;

        /**
         * Moves an amount of quads from oldIndex at newIndex.
         * @method moveQuadsFromIndex
         * @param {Number} oldIndex
         * @param {Number} amount
         * @param {Number} newIndex
         */
        public moveQuadsFromIndex(oldIndex:number, amount:number, newIndex:number):void;

        /**
         * Ensures that after a realloc quads are still empty                                <br/>
         * Used internally by CCParticleBatchNode.
         * @method fillWithEmptyQuadsFromIndex
         * @param {Number} index
         * @param {Number} amount
         */
        public fillWithEmptyQuadsFromIndex(index:number, amount:number):void;

        // TextureAtlas - Drawing

        /**
         * Draws all the Atlas's Quads
         */
        public drawQuads():void;

        /**
         * <p>Draws n quads from an index (offset). <br />
         * n + start can't be greater than the capacity of the atlas</p>
         *
         * @method drawNumberOfQuads
         * @param {Number} n
         * @param {Number} start
         */
        public drawNumberOfQuads(n:number, start:number):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/textures/CCTextureCache.js
    //+--------------------------------------------------------------------------------
    // var JS = require('../platform/js');
    // var game = require('../CCGame');
    // var Texture2D = require('./CCTexture2D');

    /**
     * cc.textureCache is a singleton object, it's the global cache for cc.Texture2D
     * @class textureCache
     */
    // var textureCache = /** @lends cc.textureCache# */{
    export class TextureCache {
        // _textures: {},
        // _textureColorsCache: {},
        // _textureKeySeq: (0 | Math.random() * 1000),

        // _loadedTexturesBefore: {},

        // handleLoadedTexture: null,

        // _initializingRenderer: function () {
        //     var selPath;
        //     //init texture from _loadedTexturesBefore
        //     var locLoadedTexturesBefore = this._loadedTexturesBefore, locTextures = this._textures;
        //     for (selPath in locLoadedTexturesBefore) {
        //         var tex2d = locLoadedTexturesBefore[selPath];
        //         tex2d.handleLoadedTexture();
        //         locTextures[selPath] = tex2d;
        //     }
        //     this._loadedTexturesBefore = {};
        // },

        /**
         * Description
         * @method description
         * @return {String}
         */
        public description():string;

        /**
         * Returns an already created texture. Returns null if the texture doesn't exist.
         * @method textureForKey
         * @param {String} textureKeyName
         * @return {Texture2D|Null}
         * @deprecated
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/textureForKey.js}
         */
        public textureForKey(textureKeyName:string):Texture2D;

        /**
         * Returns an already created texture. Returns null if the texture doesn't exist.
         * @method getTextureForKey
         * @param {String} textureKeyName
         * @return {Texture2D|Null}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/getTextureForKey.js}
         */
        public getTextureForKey(textureKeyName:string):Texture2D;

        /*
         * @method getKeyByTexture
         * @param {Image} texture
         * @return {String|Null}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/getKeyByTexture.js}
         */
        public getKeyByTexture(texture:Image):string;

        /**
         * @method getTextureColors
         * @param {Image} texture
         * @return {Array}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/getTextureColors.js}
         */
        public getTextureColors(texture:Image):???[];

        /**
         * #en get all textures
         * #zh 获取所有贴图
         * @method getAllTextures
         * @return {Texture2D[]}
         */
        public getAllTextures():Texture2D[];

        /**
         * <p>Purges the dictionary of loaded textures. <br />
         * Call this method if you receive the "Memory Warning"  <br />
         * In the short term: it will free some resources preventing your app from being killed  <br />
         * In the medium term: it will allocate more resources <br />
         * In the long term: it will be the same</p>
         * @method removeAllTextures
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/removeAllTextures.js}
         */
        public removeAllTextures():void;

        /**
         * Deletes a texture from the cache given a texture.
         * @method removeTexture
         * @param {Image} texture
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/removeTexture.js}
         */
        public removeTexture(texture:Image):void;

        /**
         * Deletes a texture from the cache given a its key name.
         * @method removeTextureForKey
         * @param {String} textureKeyName
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/removeTextureForKey.js}
         */
        public removeTextureForKey(textureKeyName:string):void;
        
        /**
         * <p>Returns a Texture2D object given an file image <br />
         * If the file image was not previously loaded, it will create a new Texture2D <br />
         *  object and it will return it. It will use the filename as a key.<br />
         * Otherwise it will return a reference of a previously loaded image. <br />
         * Supported image extensions: .png, .jpg, .gif</p>
         * @method addImage
         * @param {String} url
         * @param {Function} cb
         * @param {Object} target
         * @return {Texture2D}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/addImage.js}
         */
        // addImage: null,
        // addImageAsync: null,
        public addImage(url:string, cb:Function, target:Object):Texture2D;
        public addImageAsync(url:string, cb:Function, target:Object):Texture2D;

        /**
         * Cache the image data.
         * @method cacheImage
         * @param {String} path
         * @param {Image|HTMLImageElement|HTMLCanvasElement} texture
         */
        public cacheImage(path:string, texture:Image|HTMLImageElement|HTMLCanvasElement):void;

        /**
         * <p>Returns a Texture2D object given an UIImage image<br />
         * If the image was not previously loaded, it will create a new Texture2D object and it will return it.<br />
         * Otherwise it will return a reference of a previously loaded image<br />
         * The "key" parameter will be used as the "key" for the cache.<br />
         * If "key" is null, then a new texture will be created each time.</p>
         * @method addUIImage
         * @param {HTMLImageElement|HTMLCanvasElement} image
         * @param {String} key
         * @return {Texture2D}
         */
        public addUIImage(image:HTMLImageElement|HTMLCanvasElement, key:string):Texture2D;

        /**
         * <p>Output to cc.log the current contents of this TextureCache <br />
         * This will attempt to calculate the size of each texture, and the total texture memory in use. </p>
         */
        public dumpCachedTextureInfo():void;
    }
}
