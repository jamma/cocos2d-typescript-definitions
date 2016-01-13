/// <reference path="../cocos2d-lib.d.ts" />

// TODO: Figure out what's going on here. In lib.d.ts, this declaration exists:
//          declare var Image: {new(width?: number, height?: number): HTMLImageElement; };
//       What exactly does the declare var mean, and why it is not resolved below by TextureAtlas::get/setTexture?
//       Does that mean the DefinitelyTyped file is set up improperly? Or am I somehow using it incorrectly?

interface Image extends HTMLImageElement {}

declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/sprites/CCTexture2D.js
    ////////////////////////////////////////////////////////////////////////////////
//CONSTANTS:

    /**
     * Horizontal center and vertical center.
     * @constant
     * @type Number
     */
    const ALIGN_CENTER:number;

    /**
     * Horizontal center and vertical top.
     * @constant
     * @type Number
     */
    const ALIGN_TOP:number;

    /**
     * Horizontal right and vertical top.
     * @constant
     * @type Number
     */
    const ALIGN_TOP_RIGHT:number;

    /**
     * Horizontal right and vertical center.
     * @constant
     * @type Number
     */
    const ALIGN_RIGHT:number;

    /**
     * Horizontal right and vertical bottom.
     * @constant
     * @type Number
     */
    const ALIGN_BOTTOM_RIGHT:number;

    /**
     * Horizontal center and vertical bottom.
     * @constant
     * @type Number
     */
    const ALIGN_BOTTOM:number;

    /**
     * Horizontal left and vertical bottom.
     * @constant
     * @type Number
     */
    const ALIGN_BOTTOM_LEFT:number;

    /**
     * Horizontal left and vertical center.
     * @constant
     * @type Number
     */
    const ALIGN_LEFT:number;

    /**
     * Horizontal left and vertical top.
     * @constant
     * @type Number
     */
    const ALIGN_TOP_LEFT:number;
//----------------------Possible texture pixel formats----------------------------


// By default PVR images are treated as if they don't have the alpha channel premultiplied
    const PVRHaveAlphaPremultiplied_: boolean;

//cc.Texture2DWebGL move to TextureWebGL.js

    //cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    //
    //    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
    //
    //        var proto = {
    //            _contentSize: null,
    //            _textureLoaded: false,
    //            _htmlElementObj: null,
    //            url: null,
    //            _pattern: null,
    //
    //            ctor: function () {
    //                this._contentSize = cc.size(0, 0);
    //                this._textureLoaded = false;
    //                this._htmlElementObj = null;
    //                this._pattern = "";
    //            },
    //
    //            /**
    //             * get width in pixels
    //             * @return {Number}
    //             */
    //            getPixelsWide: function () {
    //                return this._contentSize.width;
    //            },
    //
    //            /**
    //             * get height of in pixels
    //             * @return {Number}
    //             */
    //            getPixelsHigh: function () {
    //                return this._contentSize.height;
    //            },
    //
    //            /**
    //             * get content size
    //             * @returns {cc.Size}
    //             */
    //            getContentSize: function () {
    //                var locScaleFactor = cc.contentScaleFactor();
    //                return cc.size(this._contentSize.width / locScaleFactor, this._contentSize.height / locScaleFactor);
    //            },
    //
    //            _getWidth: function () {
    //                return this._contentSize.width / cc.contentScaleFactor();
    //            },
    //            _getHeight: function () {
    //                return this._contentSize.height / cc.contentScaleFactor();
    //            },
    //
    //            /**
    //             * get content size in pixels
    //             * @returns {cc.Size}
    //             */
    //            getContentSizeInPixels: function () {
    //                return this._contentSize;
    //            },
    //
    //            /**
    //             * init with HTML element
    //             * @param {HTMLImageElement|HTMLCanvasElement} element
    //             */
    //            initWithElement: function (element) {
    //                if (!element)
    //                    return;
    //                this._htmlElementObj = element;
    //                this._contentSize.width = element.width;
    //                this._contentSize.height = element.height;
    //                this._textureLoaded = true;
    //            },
    //
    //            /**
    //             * HTMLElement Object getter
    //             * @return {HTMLImageElement|HTMLCanvasElement}
    //             */
    //            getHtmlElementObj: function () {
    //                return this._htmlElementObj;
    //            },
    //
    //            /**
    //             * check whether texture is loaded
    //             * @returns {boolean}
    //             */
    //            isLoaded: function () {
    //                return this._textureLoaded;
    //            },
    //
    //            /**
    //             * handle loaded texture
    //             */
    //            handleLoadedTexture: function () {
    //                var self = this;
    //                if (self._textureLoaded) return;
    //                if (!self._htmlElementObj) {
    //                    var img = cc.loader.getRes(self.url);
    //                    if (!img) return;
    //                    self.initWithElement(img);
    //                }
    //
    //                var locElement = self._htmlElementObj;
    //                self._contentSize.width = locElement.width;
    //                self._contentSize.height = locElement.height;
    //
    //                //dispatch load event to listener.
    //                self.dispatchEvent("load");
    //            },
    //
    //            /**
    //             * description of cc.Texture2D
    //             * @returns {string}
    //             */
    //            description: function () {
    //                return "<cc.Texture2D | width = " + this._contentSize.width + " height " + this._contentSize.height + ">";
    //            },
    //
    //            initWithData: function (data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            initWithImage: function (uiImage) {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            initWithString: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            releaseTexture: function () {
    //                cc.loader.release(this.url);
    //            },
    //
    //            getName: function () {
    //                //support only in WebGl rendering mode
    //                return null;
    //            },
    //
    //            getMaxS: function () {
    //                //support only in WebGl rendering mode
    //                return 1;
    //            },
    //
    //            setMaxS: function (maxS) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            getMaxT: function () {
    //                return 1;
    //            },
    //
    //            setMaxT: function (maxT) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            getPixelFormat: function () {
    //                //support only in WebGl rendering mode
    //                return null;
    //            },
    //
    //            getShaderProgram: function () {
    //                //support only in WebGl rendering mode
    //                return null;
    //            },
    //
    //            setShaderProgram: function (shaderProgram) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            hasPremultipliedAlpha: function () {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            hasMipmaps: function () {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            releaseData: function (data) {
    //                //support only in WebGl rendering mode
    //                data = null;
    //            },
    //
    //            keepData: function (data, length) {
    //                //support only in WebGl rendering mode
    //                return data;
    //            },
    //
    //            drawAtPoint: function (point) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            drawInRect: function (rect) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            /**
    //             * init with ETC file
    //             * @warning does not support on HTML5
    //             */
    //            initWithETCFile: function (file) {
    //                cc.log(cc._LogInfos.Texture2D_initWithETCFile);
    //                return false;
    //            },
    //
    //            /**
    //             * init with PVR file
    //             * @warning does not support on HTML5
    //             */
    //            initWithPVRFile: function (file) {
    //                cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
    //                return false;
    //            },
    //
    //            /**
    //             * init with PVRTC data
    //             * @warning does not support on HTML5
    //             */
    //            initWithPVRTCData: function (data, level, bpp, hasAlpha, length, pixelFormat) {
    //                cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
    //                return false;
    //            },
    //
    //            setTexParameters: function (texParams, magFilter, wrapS, wrapT) {
    //                if (magFilter !== undefined)
    //                    texParams = {minFilter: texParams, magFilter: magFilter, wrapS: wrapS, wrapT: wrapT};
    //
    //                if (texParams.wrapS === cc.REPEAT && texParams.wrapT === cc.REPEAT) {
    //                    this._pattern = "repeat";
    //                    return;
    //                }
    //
    //                if (texParams.wrapS === cc.REPEAT) {
    //                    this._pattern = "repeat-x";
    //                    return;
    //                }
    //
    //                if (texParams.wrapT === cc.REPEAT) {
    //                    this._pattern = "repeat-y";
    //                    return;
    //                }
    //
    //                this._pattern = "";
    //            },
    //
    //            setAntiAliasTexParameters: function () {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            setAliasTexParameters: function () {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            generateMipmap: function () {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            stringForFormat: function () {
    //                //support only in WebGl rendering mode
    //                return "";
    //            },
    //
    //            bitsPerPixelForFormat: function (format) {
    //                //support only in WebGl rendering mode
    //                return -1;
    //            },
    //
    //            /**
    //             * add listener for loaded event
    //             * @param {Function} callback
    //             * @param {cc.Node} target
    //             * @deprecated since 3.1, please use addEventListener instead
    //             */
    //            addLoadedEventListener: function (callback, target) {
    //                this.addEventListener("load", callback, target);
    //            },
    //
    //            /**
    //             * remove listener from listeners by target
    //             * @param {cc.Node} target
    //             */
    //            removeLoadedEventListener: function (target) {
    //                this.removeEventListener("load", target);
    //            },
    //
    //            _generateColorTexture: function () {/*overide*/
    //            },
    //            _generateTextureCacheForColor: function () {
    //                if (this.channelCache)
    //                    return this.channelCache;
    //
    //                var textureCache = [
    //                    document.createElement("canvas"),
    //                    document.createElement("canvas"),
    //                    document.createElement("canvas"),
    //                    document.createElement("canvas")
    //                ];
    //                renderToCache(this._htmlElementObj, textureCache);
    //                return this.channelCache = textureCache;
    //            },
    //
    //            //hack for gray effect
    //            _grayElementObj: null,
    //            _backupElement: null,
    //            _isGray: false,
    //            _switchToGray: function (toGray) {
    //                if (!this._textureLoaded || this._isGray === toGray)
    //                    return;
    //                this._isGray = toGray;
    //                if (this._isGray) {
    //                    this._backupElement = this._htmlElementObj;
    //                    if (!this._grayElementObj)
    //                        this._grayElementObj = cc.Texture2D._generateGrayTexture(this._htmlElementObj);
    //                    this._htmlElementObj = this._grayElementObj;
    //                } else {
    //                    if (this._backupElement !== null)
    //                        this._htmlElementObj = this._backupElement;
    //                }
    //            }
    //        };
    //
    //        var renderToCache = function (image, cache) {
    //            var w = image.width;
    //            var h = image.height;
    //
    //            cache[0].width = w;
    //            cache[0].height = h;
    //            cache[1].width = w;
    //            cache[1].height = h;
    //            cache[2].width = w;
    //            cache[2].height = h;
    //            cache[3].width = w;
    //            cache[3].height = h;
    //
    //            var cacheCtx = cache[3].getContext("2d");
    //            cacheCtx.drawImage(image, 0, 0);
    //            var pixels = cacheCtx.getImageData(0, 0, w, h).data;
    //
    //            var ctx;
    //            for (var rgbI = 0; rgbI < 4; rgbI++) {
    //                ctx = cache[rgbI].getContext("2d");
    //
    //                var to = ctx.getImageData(0, 0, w, h);
    //                var data = to.data;
    //                for (var i = 0; i < pixels.length; i += 4) {
    //                    data[i] = (rgbI === 0) ? pixels[i] : 0;
    //                    data[i + 1] = (rgbI === 1) ? pixels[i + 1] : 0;
    //                    data[i + 2] = (rgbI === 2) ? pixels[i + 2] : 0;
    //                    data[i + 3] = pixels[i + 3];
    //                }
    //                ctx.putImageData(to, 0, 0);
    //            }
    //            image.onload = null;
    //        };
    //
    //        //change color function
    //        if (cc.sys._supportCanvasNewBlendModes) {
    //            //multiply mode
    //            //Primary afferent, Draw a new texture based on rect
    //            proto._generateColorTexture = function (r, g, b, rect, canvas) {
    //                var onlyCanvas = false;
    //                if (canvas)
    //                    onlyCanvas = true;
    //                else
    //                    canvas = document.createElement("canvas");
    //                var textureImage = this._htmlElementObj;
    //                if (!rect)
    //                    rect = cc.rect(0, 0, textureImage.width, textureImage.height);
    //
    //                canvas.width = rect.width;
    //                canvas.height = rect.height;
    //
    //                var context = canvas.getContext("2d");
    //                context.globalCompositeOperation = "source-over";
    //                context.fillStyle = "rgb(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + ")";
    //                context.fillRect(0, 0, rect.width, rect.height);
    //                context.globalCompositeOperation = "multiply";
    //                context.drawImage(
    //                    textureImage,
    //                    rect.x, rect.y, rect.width, rect.height,
    //                    0, 0, rect.width, rect.height
    //                );
    //                context.globalCompositeOperation = "destination-atop";
    //                context.drawImage(
    //                    textureImage,
    //                    rect.x, rect.y, rect.width, rect.height,
    //                    0, 0, rect.width, rect.height
    //                );
    //                if (onlyCanvas)
    //                    return canvas;
    //                var newTexture = new cc.Texture2D();
    //                newTexture.initWithElement(canvas);
    //                newTexture.handleLoadedTexture();
    //                return newTexture;
    //            };
    //        } else {
    //            //Four color map overlay
    //            proto._generateColorTexture = function (r, g, b, rect, canvas) {
    //                var onlyCanvas = false;
    //                if (canvas)
    //                    onlyCanvas = true;
    //                else
    //                    canvas = document.createElement("canvas");
    //
    //                var textureImage = this._htmlElementObj;
    //                if (!rect)
    //                    rect = cc.rect(0, 0, textureImage.width, textureImage.height);
    //                var x, y, w, h;
    //                x = rect.x;
    //                y = rect.y;
    //                w = rect.width;
    //                h = rect.height;
    //                if (!w || !h)
    //                    return;
    //
    //                canvas.width = w;
    //                canvas.height = h;
    //
    //                var context = canvas.getContext("2d");
    //                var tintedImgCache = cc.textureCache.getTextureColors(this);
    //                context.globalCompositeOperation = 'lighter';
    //                context.drawImage(
    //                    tintedImgCache[3],
    //                    x, y, w, h,
    //                    0, 0, w, h
    //                );
    //                if (r > 0) {
    //                    context.globalAlpha = r / 255;
    //                    context.drawImage(
    //                        tintedImgCache[0],
    //                        x, y, w, h,
    //                        0, 0, w, h
    //                    );
    //                }
    //                if (g > 0) {
    //                    context.globalAlpha = g / 255;
    //                    context.drawImage(
    //                        tintedImgCache[1],
    //                        x, y, w, h,
    //                        0, 0, w, h
    //                    );
    //                }
    //                if (b > 0) {
    //                    context.globalAlpha = b / 255;
    //                    context.drawImage(
    //                        tintedImgCache[2],
    //                        x, y, w, h,
    //                        0, 0, w, h
    //                    );
    //                }
    //                if (onlyCanvas)
    //                    return canvas;
    //
    //                var newTexture = new cc.Texture2D();
    //                newTexture.initWithElement(canvas);
    //                newTexture.handleLoadedTexture();
    //                return newTexture;
    //            };
    //        }
    //
    //        /**
    //         * 
    //         * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    
    //         * The created cc.Texture2D object will always have power-of-two dimensions.                                                
    //         * Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions 
    //         *  i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           
    //         * Be aware that the content of the generated textures will be upside-down! 
    //         * @name cc.Texture2D
    //         * @class
    //         * @extends cc.Class
    //         *
    //         * @property {WebGLTexture}     name            - <@readonly> WebGLTexture Object
    //         * @property {Number}           pixelFormat     - <@readonly> Pixel format of the texture
    //         * @property {Number}           pixelsWidth     - <@readonly> Width in pixels
    //         * @property {Number}           pixelsHeight    - <@readonly> Height in pixels
    //         * @property {Number}           width           - Content width in points
    //         * @property {Number}           height          - Content height in points
    //         * @property {cc.GLProgram}     shaderProgram   - The shader program used by drawAtPoint and drawInRect
    //         * @property {Number}           maxS            - Texture max S
    //         * @property {Number}           maxT            - Texture max T
    //         */
    //        cc.Texture2D = cc.Class.extend(/** @lends cc.Texture2D# */proto);
    //
    //        cc.Texture2D._generateGrayTexture = function (texture, rect, renderCanvas) {
    //            if (texture === null)
    //                return null;
    //            renderCanvas = renderCanvas || document.createElement("canvas");
    //            rect = rect || cc.rect(0, 0, texture.width, texture.height);
    //            renderCanvas.width = rect.width;
    //            renderCanvas.height = rect.height;
    //
    //            var context = renderCanvas.getContext("2d");
    //            context.drawImage(texture, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
    //            var imgData = context.getImageData(0, 0, rect.width, rect.height);
    //            var data = imgData.data;
    //            for (var i = 0, len = data.length; i < len; i += 4) {
    //                data[i] = data[i + 1] = data[i + 2] = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    //            }
    //            context.putImageData(imgData, 0, 0);
    //            return renderCanvas;
    //        };
    //
    //    } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
    //        cc.assert(cc.isFunction(cc._tmp.WebGLTexture2D), cc._LogInfos.MissingFile, "TexturesWebGL.js");
    //        cc._tmp.WebGLTexture2D();
    //        delete cc._tmp.WebGLTexture2D;
    //    }
    //
    //    cc.EventHelper.prototype.apply(cc.Texture2D.prototype);
    //
    //    cc.assert(cc.isFunction(cc._tmp.PrototypeTexture2D), cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
    //    cc._tmp.PrototypeTexture2D();
    //    delete cc._tmp.PrototypeTexture2D;
    //});

    export class Texture2D extends Class {
        public isLoaded(): boolean;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/textures/CCTextureAtlas.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * A class that implements a Texture Atlas. 
     * Supported features: 
     * The atlas file can be a PNG, JPG. 
     * Quads can be updated in runtime 
     * Quads can be added in runtime 
     * Quads can be removed in runtime 
     * Quads can be re-ordered in runtime 
     * The TextureAtlas capacity can be increased or decreased in runtime.
     * @class
     * @extends cc.Class
     *
     * @property {Boolean}  dirty           - Indicates whether or not the array buffer of the VBO needs to be updated.
     * @property {Image}    texture         - Image texture for cc.TextureAtlas.
     * @property {Number}   capacity        - <@readonly> Quantity of quads that can be stored with the current texture atlas size.
     * @property {Number}   totalQuads      - <@readonly> Quantity of quads that are going to be drawn.
     * @property {Array}    quads           - <@readonly> Quads that are going to be rendered
     */
    //cc.TextureAtlas = cc.Class.extend(/** @lends cc.TextureAtlas# */{  //WebGL only
    export class TextureAtlas extends Class {
        //public get totalQuads(): number;
        //public get capacity(): number;
        //public get quads(): V3F_C4B_T2F_Quad[];
        //public set quads(quads:V3F_C4B_T2F_Quad[]);
        public totalQuads:number;
        public capacity:number;
        public quads:V3F_C4B_T2F_Quad[];
        //public quads(quads:V3F_C4B_T2F_Quad[]);

        /**
         * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
         * The TextureAtlas capacity can be increased in runtime.
         * Constructor of cc.TextureAtlas
         * @param {String|cc.Texture2D} fileName
         * @param {Number} capacity
         * @example
         * 1.
         * //creates a TextureAtlas with  filename
         * var textureAtlas = new cc.TextureAtlas("res/hello.png", 3);
         * 2.
         * //creates a TextureAtlas with texture
         * var texture = cc.textureCache.addImage("hello.png");
         * var textureAtlas = new cc.TextureAtlas(texture, 3);
         */
        public constructor(fileName:string, capacity:number);
        public constructor(fileName:Texture2D, capacity:number);

        /**
         * Quantity of quads that are going to be drawn.
         * @return {Number}
         */
        public getTotalQuads():number;

        /**
         * Quantity of quads that can be stored with the current texture atlas size
         * @return {Number}
         */
        public getCapacity():number;

        /**
         * Texture of the texture atlas
         * @return {Image}
         */
        public getTexture():Image;

        /**
         * @param {Image} texture
         */
        public setTexture(texture:Image):void;

        /**
         * specify if the array buffer of the VBO needs to be updated
         * @param {Boolean} dirty
         */
        public setDirty(dirty:boolean):void;

        /**
         * whether or not the array buffer of the VBO needs to be updated
         * @returns {boolean}
         */
        public isDirty():boolean;

        /**
         * Quads that are going to be rendered
         * @return {Array}
         */
        public getQuads():V3F_C4B_T2F_Quad[];

        /**
         * @param {Array} quads
         */
        public setQuads(quads:V3F_C4B_T2F_Quad[]):void;

        /**
         * Description
         * @return {String}
         */
        description():string;

        /**
         * Initializes a TextureAtlas with a filename and with a certain capacity for Quads.
         * The TextureAtlas capacity can be increased in runtime.
         * WARNING: Do not reinitialize the TextureAtlas because it will leak memory.
         * @param {String} file
         * @param {Number} capacity
         * @return {Boolean}
         * @example
         * //example
         * var textureAtlas = new cc.TextureAtlas();
         * textureAtlas.initWithTexture("hello.png", 3);
         */
        public initWithFile(file:string, capacity:number):boolean;

        /**
         * Initializes a TextureAtlas with a previously initialized Texture2D object, and
         * with an initial capacity for Quads.
         * The TextureAtlas capacity can be increased in runtime.
         * WARNING: Do not reinitialize the TextureAtlas because it will leak memory
         * @param {Image} texture
         * @param {Number} capacity
         * @return {Boolean}
         * @example
         * //example
         * var texture = cc.textureCache.addImage("hello.png");
         * var textureAtlas = new cc.TextureAtlas();
         * textureAtlas.initWithTexture(texture, 3);
         */
        public initWithTexture(texture:Image, capacity:number):boolean;

        /**
         * Updates a Quad (texture, vertex and color) at a certain index
         * index must be between 0 and the atlas capacity - 1
         * @param {cc.V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        public updateQuad(quad:V3F_C4B_T2F_Quad, index:number):void;

        /**
         * Inserts a Quad (texture, vertex and color) at a certain index
         * index must be between 0 and the atlas capacity - 1
         * @param {cc.V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        public insertQuad(quad:V3F_C4B_T2F_Quad, index:number):void;

        /**
         *
         *      Inserts a c array of quads at a given index
         *      index must be between 0 and the atlas capacity - 1
         *      this method doesn't enlarge the array when amount + index > totalQuads
         *
         * @param {Array} quads
         * @param {Number} index
         * @param {Number} amount
         */
        public insertQuads(quads:V3F_C4B_T2F_Quad[], index:number, amount:number):void;

        /**
         * Removes the quad that is located at a certain index and inserts it at a new index
         * This operation is faster than removing and inserting in a quad in 2 different steps
         * @param {Number} fromIndex
         * @param {Number} newIndex
         */
        public insertQuadFromIndex(fromIndex:number, newIndex:number):void;

        /**
         * Removes a quad at a given index number.
         * The capacity remains the same, but the total number of quads to be drawn is reduced in 1
         * @param {Number} index
         */
        public removeQuadAtIndex(index:number):void;

        /**
         * Removes a given number of quads at a given index
         * @param {Number} index
         * @param {Number} amount
         */
        public removeQuadsAtIndex(index:number, amount:number):void;

        /**
         * Removes all Quads.
         * The TextureAtlas capacity remains untouched. No memory is freed.
         * The total number of quads to be drawn will be 0
         */
        removeAllQuads():void;

        /**
         * Resize the capacity of the CCTextureAtlas.
         * The new capacity can be lower or higher than the current one
         * It returns YES if the resize was successful.
         * If it fails to resize the capacity it will return NO with a new capacity of 0.
         * no used for js
         * @param {Number} newCapacity
         * @return {Boolean}
         */
        public resizeCapacity(newCapacity:number):boolean;

        /**
         * Used internally by CCParticleBatchNode                                    
         * don't use this unless you know what you're doing
         * @param {Number} amount
         */
        public increaseTotalQuadsWith(amount:number):void;

        /**
         * Moves an amount of quads from oldIndex at newIndex
         * @param {Number} oldIndex
         * @param {Number} amount
         * @param {Number} newIndex
         */
        public moveQuadsFromIndex(oldIndex:number, amount:number, newIndex:number):void;

        /**
         * Ensures that after a realloc quads are still empty                                
         * Used internally by CCParticleBatchNode
         * @param {Number} index
         * @param {Number} amount
         */
        public fillWithEmptyQuadsFromIndex(index:number, amount:number):void;

        // TextureAtlas - Drawing

        /**
         * Draws all the Atlas's Quads
         */
        public drawQuads():void;
    }
}
