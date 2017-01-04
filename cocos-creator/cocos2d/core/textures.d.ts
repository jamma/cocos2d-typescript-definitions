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
/****************************************************************************
     Copyright (c) 2013-2016 Chukong Technologies Inc.

     http://www.cocos.com

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated engine source code (the "Software"), a limited,
      worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
     to use Cocos Creator solely to develop games on your target platforms. You shall
      not use Cocos Creator software for developing other software or tools that's
      used for developing games. You are not granted to publish, distribute,
      sublicense, and/or sell copies of Cocos Creator.

     The software or tools in this License Agreement are licensed, not sold.
     Chukong Aipu reserves all rights not expressly granted to you.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    var Class = require('../platform/_CCClass');
    var JS = require('../platform/js');
    var game = require('../CCGame');

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

    var TextureAtlas = Class.extend(/** @lends cc.TextureAtlas# */{  //WebGL only
        dirty: false,
        texture: null,

        _indices: null,
        //0: vertex  1: indices
        _buffersVBO: null,
        _capacity: 0,

        _quads: null,
        _quadsArrayBuffer: null,
        _quadsWebBuffer: null,
        _quadsReader: null,

        /**
         * <p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
         * The TextureAtlas capacity can be increased in runtime. </p>
         * Constructor of cc.TextureAtlas
         * @method TextureAtlas
         * @param {String|Texture2D} fileName
         * @param {Number} capacity
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/TextureAtlas.js}
         */
        ctor: function (fileName, capacity) {
            this._buffersVBO = [];

            if (cc.js.isString(fileName)) {
                this.initWithFile(fileName, capacity);
            } else if (fileName instanceof cc.Texture2D) {
                this.initWithTexture(fileName, capacity);
            }
        },

        /**
         * Quantity of quads that are going to be drawn.
         * @method getTotalQuads
         * @return {Number}
         */
        getTotalQuads: function () {
            //return this._quads.length;
            return this._totalQuads;
        },

        /**
         * Quantity of quads that can be stored with the current texture atlas size.
         * @method getCapacity
         * @return {Number}
         */
        getCapacity: function () {
            return this._capacity;
        },

        /**
         * Texture of the texture atlas.
         * @method getTexture
         * @return {Image}
         */
        getTexture: function () {
            return this.texture;
        },

        /**
         * Set texture for texture atlas.
         * @method setTexture
         * @param {Image} texture
         */
        setTexture: function (texture) {
            this.texture = texture;
        },

        /**
         * specify if the array buffer of the VBO needs to be updated.
         * @method setDirty
         * @param {Boolean} dirty
         */
        setDirty: function (dirty) {
            this.dirty = dirty;
        },

        /**
         * whether or not the array buffer of the VBO needs to be updated.
         * @method isDirty
         * @returns {Boolean}
         */
        isDirty: function () {
            return this.dirty;
        },

        /**
         * Quads that are going to be rendered.
         * @method getQuads
         * @return {Array}
         */
        getQuads: function () {
            return this._quads;
        },

        /**
         * @method setQuads
         * @param {Array} quads
         */
        setQuads: function (quads) {
            //TODO need re-binding
            this._quads = quads;
        },

        _copyQuadsToTextureAtlas: function (quads, index) {
            if (!quads)
                return;

            for (var i = 0; i < quads.length; i++)
                this._setQuadToArray(quads[i], index + i);
        },

        _setQuadToArray: function (quad, index) {
            var locQuads = this._quads;
            if (!locQuads[index]) {
                locQuads[index] = new cc.V3F_C4B_T2F_Quad(quad.tl, quad.bl, quad.tr, quad.br, this._quadsArrayBuffer, index * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT);
                return;
            }
            locQuads[index].bl = quad.bl;
            locQuads[index].br = quad.br;
            locQuads[index].tl = quad.tl;
            locQuads[index].tr = quad.tr;
        },

        /**
         * Description
         * @return {String}
         */
        description: function () {
            return '<cc.TextureAtlas | totalQuads =' + this._totalQuads + '>';
        },

        _setupIndices: function () {
            if (this._capacity === 0)
                return;
            var locIndices = this._indices, locCapacity = this._capacity;
            for (var i = 0; i < locCapacity; i++) {
                if (cc.macro.TEXTURE_ATLAS_USE_TRIANGLE_STRIP) {
                    locIndices[i * 6 + 0] = i * 4 + 0;
                    locIndices[i * 6 + 1] = i * 4 + 0;
                    locIndices[i * 6 + 2] = i * 4 + 2;
                    locIndices[i * 6 + 3] = i * 4 + 1;
                    locIndices[i * 6 + 4] = i * 4 + 3;
                    locIndices[i * 6 + 5] = i * 4 + 3;
                } else {
                    locIndices[i * 6 + 0] = i * 4 + 0;
                    locIndices[i * 6 + 1] = i * 4 + 1;
                    locIndices[i * 6 + 2] = i * 4 + 2;

                    // inverted index. issue #179
                    locIndices[i * 6 + 3] = i * 4 + 3;
                    locIndices[i * 6 + 4] = i * 4 + 2;
                    locIndices[i * 6 + 5] = i * 4 + 1;
                }
            }
        },

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
        initWithFile: function (file, capacity) {
            // retained in property
            var texture = cc.textureCache.addImage(file);
            if (texture)
                return this.initWithTexture(texture, capacity);
            else {
                cc.log(cc._LogInfos.TextureAtlas.initWithFile, file);
                return false;
            }
        },

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
        initWithTexture: function (texture, capacity) {
            cc.assert(texture, cc._LogInfos.TextureAtlas.initWithTexture);

            capacity = 0 | (capacity);
            this._capacity = capacity;
            this._totalQuads = 0;

            // retained in property
            this.texture = texture;

            // Re-initialization is not allowed
            this._quads = [];
            this._indices = new Uint16Array(capacity * 6);
            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            this._quadsArrayBuffer = new ArrayBuffer(quadSize * capacity);
            this._quadsReader = new Uint8Array(this._quadsArrayBuffer);

            if (!( this._quads && this._indices) && capacity > 0)
                return false;

            var locQuads = this._quads;
            for (var i = 0; i < capacity; i++)
                locQuads[i] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, i * quadSize);

            this._setupIndices();
            this._setupVBO();
            this.dirty = true;
            return true;
        },

        /**
         * <p>Updates a Quad (texture, vertex and color) at a certain index <br />
         * index must be between 0 and the atlas capacity - 1 </p>
         * @method updateQuad
         * @param {V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        updateQuad: function (quad, index) {
            cc.assert(quad, cc._LogInfos.TextureAtlas.updateQuad);
            cc.assert(index >= 0 && index < this._capacity, cc._LogInfos.TextureAtlas.updateQuad_2);

            this._totalQuads = Math.max(index + 1, this._totalQuads);
            this._setQuadToArray(quad, index);
            this.dirty = true;
        },

        /**
         * <p>Inserts a Quad (texture, vertex and color) at a certain index<br />
         * index must be between 0 and the atlas capacity - 1 </p>
         * @method insertQuad
         * @param {V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        insertQuad: function (quad, index) {
            cc.assert(index < this._capacity, cc._LogInfos.TextureAtlas.insertQuad_2);

            this._totalQuads++;
            if (this._totalQuads > this._capacity) {
                cc.log(cc._LogInfos.TextureAtlas.insertQuad);
                return;
            }
            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            // issue #575. index can be > totalQuads
            var remaining = (this._totalQuads - 1) - index;
            var startOffset = index * quadSize;
            var moveLength = remaining * quadSize;
            this._quads[this._totalQuads - 1] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * quadSize);
            this._quadsReader.set(this._quadsReader.subarray(startOffset, startOffset + moveLength), startOffset + quadSize);

            this._setQuadToArray(quad, index);
            this.dirty = true;
        },

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
        insertQuads: function (quads, index, amount) {
            amount = amount || quads.length;

            cc.assert((index + amount) <= this._capacity, cc._LogInfos.TextureAtlas.insertQuads);

            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            this._totalQuads += amount;
            if (this._totalQuads > this._capacity) {
                cc.log(cc._LogInfos.TextureAtlas.insertQuad);
                return;
            }

            // issue #575. index can be > totalQuads
            var remaining = (this._totalQuads - 1) - index - amount;
            var startOffset = index * quadSize;
            var moveLength = remaining * quadSize;
            var lastIndex = (this._totalQuads - 1) - amount;

            var i;
            for (i = 0; i < amount; i++)
                this._quads[lastIndex + i] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * quadSize);
            this._quadsReader.set(this._quadsReader.subarray(startOffset, startOffset + moveLength), startOffset + quadSize * amount);
            for (i = 0; i < amount; i++)
                this._setQuadToArray(quads[i], index + i);

            this.dirty = true;
        },

        /**
         * <p>Removes the quad that is located at a certain index and inserts it at a new index <br />
         * This operation is faster than removing and inserting in a quad in 2 different steps</p>
         * @method insertQuadFromIndex
         * @param {Number} fromIndex
         * @param {Number} newIndex
         */
        insertQuadFromIndex: function (fromIndex, newIndex) {
            if (fromIndex === newIndex)
                return;

            cc.assert(newIndex >= 0 || newIndex < this._totalQuads, cc._LogInfos.TextureAtlas.insertQuadFromIndex);

            cc.assert(fromIndex >= 0 || fromIndex < this._totalQuads, cc._LogInfos.TextureAtlas.insertQuadFromIndex_2);

            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            var locQuadsReader = this._quadsReader;
            var sourceArr = locQuadsReader.subarray(fromIndex * quadSize, quadSize);
            var startOffset, moveLength;
            if (fromIndex > newIndex) {
                startOffset = newIndex * quadSize;
                moveLength = (fromIndex - newIndex) * quadSize;
                locQuadsReader.set(locQuadsReader.subarray(startOffset, startOffset + moveLength), startOffset + quadSize);
                locQuadsReader.set(sourceArr, startOffset);
            } else {
                startOffset = (fromIndex + 1) * quadSize;
                moveLength = (newIndex - fromIndex) * quadSize;
                locQuadsReader.set(locQuadsReader.subarray(startOffset, startOffset + moveLength), startOffset - quadSize);
                locQuadsReader.set(sourceArr, newIndex * quadSize);
            }
            this.dirty = true;
        },

        /**
         * <p>Removes a quad at a given index number.<br />
         * The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p>
         * @method removeQuadAtIndex
         * @param {Number} index
         */
        removeQuadAtIndex: function (index) {
            cc.assert(index < this._totalQuads, cc._LogInfos.TextureAtlas.removeQuadAtIndex);

            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            this._totalQuads--;
            this._quads.length = this._totalQuads;
            if (index !== this._totalQuads) {
                //move data
                var startOffset = (index + 1) * quadSize;
                var moveLength = (this._totalQuads - index) * quadSize;
                this._quadsReader.set(this._quadsReader.subarray(startOffset, startOffset + moveLength), startOffset - quadSize);
            }
            this.dirty = true;
        },

        /**
         * Removes a given number of quads at a given index.
         * @method removeQuadsAtIndex
         * @param {Number} index
         * @param {Number} amount
         */
        removeQuadsAtIndex: function (index, amount) {
            cc.assert(index + amount <= this._totalQuads, cc._LogInfos.TextureAtlas.removeQuadsAtIndex);

            this._totalQuads -= amount;

            if (index !== this._totalQuads) {
                //move data
                var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
                var srcOffset = (index + amount) * quadSize;
                var moveLength = (this._totalQuads - index) * quadSize;
                var dstOffset = index * quadSize;
                this._quadsReader.set(this._quadsReader.subarray(srcOffset, srcOffset + moveLength), dstOffset);
            }
            this.dirty = true;
        },

        /**
         * <p>Removes all Quads. <br />
         * The TextureAtlas capacity remains untouched. No memory is freed.<br />
         * The total number of quads to be drawn will be 0</p>
         * @method removeAllQuads
         */
        removeAllQuads: function () {
            this._quads.length = 0;
            this._totalQuads = 0;
        },

        _setDirty: function (dirty) {
            this.dirty = dirty;
        },

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
        resizeCapacity: function (newCapacity) {
            if (newCapacity === this._capacity)
                return true;

            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            var oldCapacity = this._capacity;
            // update capacity and totolQuads
            this._totalQuads = Math.min(this._totalQuads, newCapacity);
            this._capacity = 0 | newCapacity;
            var i, capacity = this._capacity, locTotalQuads = this._totalQuads;

            if (this._quads === null) {
                this._quads = [];
                this._quadsArrayBuffer = new ArrayBuffer(quadSize * capacity);
                this._quadsReader = new Uint8Array(this._quadsArrayBuffer);
                for (i = 0; i < capacity; i++)
                    this._quads = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, i * quadSize);
            } else {
                var newQuads, newArrayBuffer, quads = this._quads;
                if (capacity > oldCapacity) {
                    newQuads = [];
                    newArrayBuffer = new ArrayBuffer(quadSize * capacity);
                    for (i = 0; i < locTotalQuads; i++) {
                        newQuads[i] = new cc.V3F_C4B_T2F_Quad(quads[i].tl, quads[i].bl, quads[i].tr, quads[i].br,
                            newArrayBuffer, i * quadSize);
                    }
                    for (; i < capacity; i++)
                        newQuads[i] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, newArrayBuffer, i * quadSize);

                    this._quadsReader = new Uint8Array(newArrayBuffer);
                    this._quads = newQuads;
                    this._quadsArrayBuffer = newArrayBuffer;
                } else {
                    var count = Math.max(locTotalQuads, capacity);
                    newQuads = [];
                    newArrayBuffer = new ArrayBuffer(quadSize * capacity);
                    for (i = 0; i < count; i++) {
                        newQuads[i] = new cc.V3F_C4B_T2F_Quad(quads[i].tl, quads[i].bl, quads[i].tr, quads[i].br,
                            newArrayBuffer, i * quadSize);
                    }
                    this._quadsReader = new Uint8Array(newArrayBuffer);
                    this._quads = newQuads;
                    this._quadsArrayBuffer = newArrayBuffer;
                }
            }

            if (this._indices === null) {
                this._indices = new Uint16Array(capacity * 6);
            } else {
                if (capacity > oldCapacity) {
                    var tempIndices = new Uint16Array(capacity * 6);
                    tempIndices.set(this._indices, 0);
                    this._indices = tempIndices;
                } else {
                    this._indices = this._indices.subarray(0, capacity * 6);
                }
            }

            this._setupIndices();
            this._mapBuffers();
            this.dirty = true;
            return true;
        },

        /**
         * Used internally by CCParticleBatchNode                                    <br/>
         * don't use this unless you know what you're doing.
         * @method increaseTotalQuadsWith
         * @param {Number} amount
         */
        increaseTotalQuadsWith: function (amount) {
            this._totalQuads += amount;
        },

        /**
         * Moves an amount of quads from oldIndex at newIndex.
         * @method moveQuadsFromIndex
         * @param {Number} oldIndex
         * @param {Number} amount
         * @param {Number} newIndex
         */
        moveQuadsFromIndex: function (oldIndex, amount, newIndex) {
            if (newIndex === undefined) {
                newIndex = amount;
                amount = this._totalQuads - oldIndex;

                cc.assert((newIndex + (this._totalQuads - oldIndex)) <= this._capacity, cc._LogInfos.TextureAtlas.moveQuadsFromIndex);

                if (amount === 0)
                    return;
            } else {
                cc.assert((newIndex + amount) <= this._totalQuads, cc._LogInfos.TextureAtlas.moveQuadsFromIndex_2);
                cc.assert(oldIndex < this._totalQuads, cc._LogInfos.TextureAtlas.moveQuadsFromIndex_3);

                if (oldIndex === newIndex)
                    return;
            }

            var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            var srcOffset = oldIndex * quadSize;
            var srcLength = amount * quadSize;
            var locQuadsReader = this._quadsReader;
            var sourceArr = locQuadsReader.subarray(srcOffset, srcOffset + srcLength);
            var dstOffset = newIndex * quadSize;
            var moveLength, moveStart;
            if (newIndex < oldIndex) {
                moveLength = (oldIndex - newIndex) * quadSize;
                moveStart = newIndex * quadSize;
                locQuadsReader.set(locQuadsReader.subarray(moveStart, moveStart + moveLength), moveStart + srcLength)
            } else {
                moveLength = (newIndex - oldIndex) * quadSize;
                moveStart = (oldIndex + amount) * quadSize;
                locQuadsReader.set(locQuadsReader.subarray(moveStart, moveStart + moveLength), srcOffset);
            }
            locQuadsReader.set(sourceArr, dstOffset);
            this.dirty = true;
        },

        /**
         * Ensures that after a realloc quads are still empty                                <br/>
         * Used internally by CCParticleBatchNode.
         * @method fillWithEmptyQuadsFromIndex
         * @param {Number} index
         * @param {Number} amount
         */
        fillWithEmptyQuadsFromIndex: function (index, amount) {
            var count = amount * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
            var clearReader = new Uint8Array(this._quadsArrayBuffer, index * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, count);
            for (var i = 0; i < count; i++)
                clearReader[i] = 0;
        },

        _setupVBO: function () {},
        _mapBuffers: function () {},

        // TextureAtlas - Drawing

        /**
         * Draws all the Atlas's Quads
         */
        drawQuads: function () {},

        /**
         * <p>Draws n quads from an index (offset). <br />
         * n + start can't be greater than the capacity of the atlas</p>
         *
         * @method drawNumberOfQuads
         * @param {Number} n
         * @param {Number} start
         */
        drawNumberOfQuads: null,

        _releaseBuffer: function () {
            var gl = cc._renderContext;
            if (this._buffersVBO) {
                if (this._buffersVBO[0])
                    gl.deleteBuffer(this._buffersVBO[0]);
                if (this._buffersVBO[1])
                    gl.deleteBuffer(this._buffersVBO[1])
            }
            if (this._quadsWebBuffer)
                gl.deleteBuffer(this._quadsWebBuffer);
        }
    });

    var _p = TextureAtlas.prototype;

    // Extended properties
    /** @expose */
    _p.totalQuads;
    cc.defineGetterSetter(_p, "totalQuads", _p.getTotalQuads);
    /** @expose */
    _p.capacity;
    cc.defineGetterSetter(_p, "capacity", _p.getCapacity);
    /** @expose */
    _p.quads;
    cc.defineGetterSetter(_p, "quads", _p.getQuads, _p.setQuads);

    game.once(game.EVENT_RENDERER_INITED, function () {
    if (cc._renderType === game.RENDER_TYPE_WEBGL) {
        JS.mixin(TextureAtlas.prototype, {
            _setupVBO: function () {
                var _t = this;
                var gl = cc._renderContext;
                //create WebGLBuffer
                _t._buffersVBO[0] = gl.createBuffer();
                _t._buffersVBO[1] = gl.createBuffer();

                _t._quadsWebBuffer = gl.createBuffer();
                _t._mapBuffers();
            },

            _mapBuffers: function () {
                var _t = this;
                var gl = cc._renderContext;

                gl.bindBuffer(gl.ARRAY_BUFFER, _t._quadsWebBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, _t._quadsArrayBuffer, gl.DYNAMIC_DRAW);

                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _t._buffersVBO[1]);
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, _t._indices, gl.STATIC_DRAW);

                //cc.checkGLErrorDebug();
            },

            drawQuads: function () {
                this.drawNumberOfQuads(this._totalQuads, 0);
            },

            drawNumberOfQuads: function (n, start) {
                var _t = this;
                start = start || 0;
                if (0 === n || !_t.texture || !_t.texture.isLoaded())
                    return;

                var gl = cc._renderContext;
                cc.gl.bindTexture2D(_t.texture);

                //
                // Using VBO without VAO
                //
                //vertices
                //gl.bindBuffer(gl.ARRAY_BUFFER, _t._buffersVBO[0]);
                // XXX: update is done in draw... perhaps it should be done in a timer
                gl.bindBuffer(gl.ARRAY_BUFFER, _t._quadsWebBuffer);
                gl.enableVertexAttribArray(cc.macro.VERTEX_ATTRIB_POSITION);
                gl.enableVertexAttribArray(cc.macro.VERTEX_ATTRIB_COLOR);
                gl.enableVertexAttribArray(cc.macro.VERTEX_ATTRIB_TEX_COORDS);
                if (_t.dirty){
                    gl.bufferData(gl.ARRAY_BUFFER, _t._quadsArrayBuffer, gl.DYNAMIC_DRAW);
                    _t.dirty = false;
                }

                gl.vertexAttribPointer(cc.macro.VERTEX_ATTRIB_POSITION, 3, gl.FLOAT, false, 24, 0);               // vertices
                gl.vertexAttribPointer(cc.macro.VERTEX_ATTRIB_COLOR, 4, gl.UNSIGNED_BYTE, true, 24, 12);          // colors
                gl.vertexAttribPointer(cc.macro.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, 24, 16);            // tex coords

                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _t._buffersVBO[1]);

                if (cc.macro.TEXTURE_ATLAS_USE_TRIANGLE_STRIP)
                    gl.drawElements(gl.TRIANGLE_STRIP, n * 6, gl.UNSIGNED_SHORT, start * 6 * _t._indices.BYTES_PER_ELEMENT);
                else
                    gl.drawElements(gl.TRIANGLES, n * 6, gl.UNSIGNED_SHORT, start * 6 * _t._indices.BYTES_PER_ELEMENT);

                cc.g_NumberOfDraws++;
                //cc.checkGLErrorDebug();
            }
        });
    }
    });

    /**
     * Indicates whether or not the array buffer of the VBO needs to be updated.
     * @property dirty
     * @type {Boolean}
     */

    /**
     * Image texture for cc.TextureAtlas.
     * @property texture
     * @type {Image}
     */

    /**
     * Quantity of quads that can be stored with the current texture atlas size.
     * @property capacity
     * @type {Number}
     * @readonly
     */

    /**
     * Quantity of quads that are going to be drawn.
     * @property totalQuads
     * @type {Number}
     * @readonly
     */

    /**
     * Quads that are going to be rendered.
     * @property quads
     * @type {Array}
     * @readonly
     */

    cc.TextureAtlas = module.exports = TextureAtlas;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/textures/CCTextureCache.js
    //+--------------------------------------------------------------------------------
/****************************************************************************
     Copyright (c) 2013-2016 Chukong Technologies Inc.

     http://www.cocos.com

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated engine source code (the "Software"), a limited,
      worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
     to use Cocos Creator solely to develop games on your target platforms. You shall
      not use Cocos Creator software for developing other software or tools that's
      used for developing games. You are not granted to publish, distribute,
      sublicense, and/or sell copies of Cocos Creator.

     The software or tools in this License Agreement are licensed, not sold.
     Chukong Aipu reserves all rights not expressly granted to you.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    var JS = require('../platform/js');
    var game = require('../CCGame');
    var Texture2D = require('./CCTexture2D');

    /**
     * cc.textureCache is a singleton object, it's the global cache for cc.Texture2D
     * @class textureCache
     */
    var textureCache = /** @lends cc.textureCache# */{
        _textures: {},
        _textureColorsCache: {},
        _textureKeySeq: (0 | Math.random() * 1000),

        _loadedTexturesBefore: {},

        handleLoadedTexture: null,

        _initializingRenderer: function () {
            var selPath;
            //init texture from _loadedTexturesBefore
            var locLoadedTexturesBefore = this._loadedTexturesBefore, locTextures = this._textures;
            for (selPath in locLoadedTexturesBefore) {
                var tex2d = locLoadedTexturesBefore[selPath];
                tex2d.handleLoadedTexture();
                locTextures[selPath] = tex2d;
            }
            this._loadedTexturesBefore = {};
        },

        /**
         * Description
         * @method description
         * @return {String}
         */
        description: function () {
            return "<TextureCache | Number of textures = " + this._textures.length + ">";
        },

        /**
         * Returns an already created texture. Returns null if the texture doesn't exist.
         * @method textureForKey
         * @param {String} textureKeyName
         * @return {Texture2D|Null}
         * @deprecated
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/textureForKey.js}
         */
        textureForKey: function (textureKeyName) {
            cc.log(cc._LogInfos.textureCache.textureForKey);
            return this.getTextureForKey(textureKeyName);
        },

        /**
         * Returns an already created texture. Returns null if the texture doesn't exist.
         * @method getTextureForKey
         * @param {String} textureKeyName
         * @return {Texture2D|Null}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/getTextureForKey.js}
         */
        getTextureForKey: function(textureKeyName){
            return this._textures[textureKeyName];
        },

        /*
         * @method getKeyByTexture
         * @param {Image} texture
         * @return {String|Null}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/getKeyByTexture.js}
         */
        getKeyByTexture: function (texture) {
            for (var key in this._textures) {
                if (this._textures[key] === texture) {
                    return key;
                }
            }
            return null;
        },

        _generalTextureKey: function (id) {
            return "_textureKey_" + id;
        },

        /**
         * @method getTextureColors
         * @param {Image} texture
         * @return {Array}
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/getTextureColors.js}
         */
        getTextureColors: function (texture) {
            var image = texture._htmlElementObj;
            var key = this.getKeyByTexture(image);
            if (!key) {
                if (image instanceof HTMLImageElement)
                    key = image.src;
                else
                    key = this._generalTextureKey(texture.__instanceId);
            }

            if (!this._textureColorsCache[key])
                this._textureColorsCache[key] = texture._generateTextureCacheForColor();
            return this._textureColorsCache[key];
        },

        /**
         * #en get all textures
         * #zh 获取所有贴图
         * @method getAllTextures
         * @return {Texture2D[]}
         */
        getAllTextures: function () {
            var texs = [];
            for (var key in this._textures) {
                var item = this._textures[key];
                texs.push(item);
            }
            return texs;
        },

        /**
         * <p>Purges the dictionary of loaded textures. <br />
         * Call this method if you receive the "Memory Warning"  <br />
         * In the short term: it will free some resources preventing your app from being killed  <br />
         * In the medium term: it will allocate more resources <br />
         * In the long term: it will be the same</p>
         * @method removeAllTextures
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/removeAllTextures.js}
         */
        removeAllTextures: function () {
            var locTextures = this._textures;
            for (var selKey in locTextures) {
                if (locTextures[selKey])
                    locTextures[selKey].releaseTexture();
            }
            this._textures = {};
        },

        /**
         * Deletes a texture from the cache given a texture.
         * @method removeTexture
         * @param {Image} texture
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/removeTexture.js}
         */
        removeTexture: function (texture) {
            if (!texture)
                return;

            var locTextures = this._textures;
            for (var selKey in locTextures) {
                if (locTextures[selKey] === texture) {
                    locTextures[selKey].releaseTexture();
                    delete(locTextures[selKey]);
                }
            }
        },

        /**
         * Deletes a texture from the cache given a its key name.
         * @method removeTextureForKey
         * @param {String} textureKeyName
         * @example {@link utils/api/engine/docs/cocos2d/core/textures/removeTextureForKey.js}
         */
        removeTextureForKey: function (textureKeyName) {
            if (typeof textureKeyName !== 'string')
                return;
            var locTextures = this._textures;
            if (locTextures[textureKeyName]) {
                locTextures[textureKeyName].releaseTexture();
                delete(locTextures[textureKeyName]);
            }
        },
        
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
        addImage: null,
        addImageAsync: null,

        /**
         * Cache the image data.
         * @method cacheImage
         * @param {String} path
         * @param {Image|HTMLImageElement|HTMLCanvasElement} texture
         */
        cacheImage: function (path, texture) {
            cc.assert(path, cc._LogInfos.textureCache.invalidKey);

            if (texture instanceof Texture2D) {
                this._textures[path] = texture;
                return;
            }
            var texture2d = new Texture2D();
            texture2d.initWithElement(texture);
            texture2d.handleLoadedTexture();
            this._textures[path] = texture2d;
        },

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
        addUIImage: function (image, key) {
            cc.assert(image, cc._LogInfos.textureCache.addUIImage_2);

            if (key && this._textures[key]) {
                return this._textures[key];
            }

            // prevents overloading the autorelease pool
            var texture = new Texture2D();
            texture.initWithImage(image);
            if (key != null)
                this._textures[key] = texture;
            else
                cc.log(cc._LogInfos.textureCache.addUIImage);
            return texture;
        },

        /**
         * <p>Output to cc.log the current contents of this TextureCache <br />
         * This will attempt to calculate the size of each texture, and the total texture memory in use. </p>
         */
        dumpCachedTextureInfo: function () {
            var count = 0;
            var totalBytes = 0, locTextures = this._textures;

            for (var key in locTextures) {
                var selTexture = locTextures[key];
                count++;
                if (selTexture.getHtmlElementObj() instanceof  HTMLImageElement)
                    cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo, key, selTexture.getHtmlElementObj().src, selTexture.getPixelWidth(), selTexture.getPixelHeight());
                else {
                    cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo_2, key, selTexture.getPixelWidth(), selTexture.getPixelHeight());
                }
                totalBytes += selTexture.getPixelWidth() * selTexture.getPixelHeight() * 4;
            }

            var locTextureColorsCache = this._textureColorsCache;
            for (key in locTextureColorsCache) {
                var selCanvasColorsArr = locTextureColorsCache[key];
                for (var selCanvasKey in selCanvasColorsArr) {
                    var selCanvas = selCanvasColorsArr[selCanvasKey];
                    count++;
                    cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo_2, key, selCanvas.width, selCanvas.height);
                    totalBytes += selCanvas.width * selCanvas.height * 4;
                }

            }
            cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo_3, count, totalBytes / 1024, (totalBytes / (1024.0 * 1024.0)).toFixed(2));
        },

        _clear: function () {
            this._textures = {};
            this._textureColorsCache = {};
            this._textureKeySeq = (0 | Math.random() * 1000);
            this._loadedTexturesBefore = {};
        }
    };

    game.once(game.EVENT_RENDERER_INITED, function () {
        var _p = textureCache;
        if (cc._renderType === game.RENDER_TYPE_CANVAS) {
            _p.handleLoadedTexture = function (url) {
                var locTexs = this._textures;
                //remove judge
                var tex = locTexs[url];
                if (!tex) {
                    cc.assert(url, cc._LogInfos.textureCache.invalidKey);
                    tex = locTexs[url] = new Texture2D();
                    tex.url = url;
                }
                tex.handleLoadedTexture();
            };

            _p.addImage = function (url, cb, target) {

                cc.assert(url, cc._LogInfos.Texture2D.addImage);

                var locTexs = this._textures;
                //remove judge
                var tex = locTexs[url];
                if (tex) {
                    if(tex.isLoaded()) {
                        cb && cb.call(target, tex);
                        return tex;
                    }
                    else
                    {
                        tex.once("load", function(){
                            cb && cb.call(target, tex);
                        }, target);
                        return tex;
                    }
                }

                tex = locTexs[url] = new Texture2D();
                tex.url = url;
                cc.loader.load(url, function (err, texture) {
                    if (err) {
                        return cb && cb.call(target, err || new Error('Unknown error'));
                    }

                    textureCache.handleLoadedTexture(url);

                    cb && cb.call(target, tex);
                });

                return tex;
            };

            _p.addImageAsync = _p.addImage;

        } else if (cc._renderType === game.RENDER_TYPE_WEBGL) {
            
            _p.handleLoadedTexture = function (url) {
                var locTexs = this._textures, tex, premultiplied;
                //remove judge(webgl)
                if (!cc.game._rendererInitialized) {
                    locTexs = this._loadedTexturesBefore;
                }
                tex = locTexs[url];
                if (!tex) {
                    cc.assert(url, cc._LogInfos.textureCache.invalidKey);
                    tex = locTexs[url] = new Texture2D();
                    tex.url = url;
                }
                premultiplied = cc.macro.AUTO_PREMULTIPLIED_ALPHA_FOR_PNG && (cc.path.extname(url) === ".png");
                tex.handleLoadedTexture(premultiplied);
            };

            _p.addImage = function (url, cb, target) {
                cc.assert(url, cc._LogInfos.Texture2D.addImage_2);

                var locTexs = this._textures;
                //remove judge(webgl)
                if (!cc.game._rendererInitialized) {
                    locTexs = this._loadedTexturesBefore;
                }
                var tex = locTexs[url];
                if (tex) {
                    if(tex.isLoaded()) {
                        cb && cb.call(target, tex);
                        return tex;
                    }
                    else
                    {
                        tex.once("load", function(){
                           cb && cb.call(target, tex);
                        }, target);
                        return tex;
                    }
                }

                tex = locTexs[url] = new Texture2D();
                tex.url = url;
                cc.loader.load(url, function (err, texture) {
                    if (err) {
                        return cb && cb.call(target, err || new Error('Unknown error'));
                    }

                    textureCache.handleLoadedTexture(url);

                    cb && cb.call(target, tex);
                });

                return tex;
            };

            _p.addImageAsync = _p.addImage;
        }
    });

    cc.textureCache = module.exports = textureCache;
}
