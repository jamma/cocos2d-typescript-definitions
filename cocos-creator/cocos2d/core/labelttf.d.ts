/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCLabelTTF.js
    //+--------------------------------------------------------------------------------
    /**
     * <p>cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file<br/>
     * All features from _ccsg.Sprite are valid in cc.LabelTTF<br/>
     * cc.LabelTTF objects are slow for js-binding on mobile devices.<br/>
     * Consider using cc.LabelAtlas or cc.LabelBMFont instead.<br/>
     * You can create a cc.LabelTTF from a font name, alignment, dimension and font size or a cc.FontDefinition object.</p>
     * @class
     * @extends _ccsg.Sprite
     *
     * @param {String} text
     * @param {String|cc.FontDefinition} [fontName="Arial"]
     * @param {Number} [fontSize=16]
     * @param {cc.Size} [dimensions=cc.size(0,0)]
     * @param {cc.TextAlignment} [hAlignment=cc.TextAlignment.LEFT]
     * @param {cc.VerticalTextAlignment} [vAlignment=cc.VerticalTextAlignment.TOP]
     * @example
     * var myLabel = new cc.LabelTTF('label text',  'Times New Roman', 32, cc.size(320,32), cc.TextAlignment.LEFT);
     *
     * var fontDef = new cc.FontDefinition();
     * fontDef.fontName = "Arial";
     * fontDef.fontSize = "32";
     * var myLabel = new cc.LabelTTF('label text',  fontDef);
     *
     * @property {String}       string          - Content string of label
     * @property {cc.TextAlignment} textAlign   - Horizontal Alignment of label: cc.TextAlignment.LEFT|cc.TextAlignment.CENTER|cc.TextAlignment.RIGHT
     * @property {cc.VerticalTextAlignment} verticalAlign - Vertical Alignment of label: cc.VerticalTextAlignment.TOP|cc.VerticalTextAlignment.CENTER|cc.VerticalTextAlignment.BOTTOM
     * @property {Number}       fontSize        - Font size of label
     * @property {String}       fontName        - Font name of label
     * @property {String}       font            - The label font with a style string: e.g. "18px Verdana"
     * @property {Number}       boundingWidth   - Width of the bounding box of label, the real content width is limited by boundingWidth
     * @property {Number}       boundingHeight  - Height of the bounding box of label, the real content height is limited by boundingHeight
     * @property {cc.Color}     fillStyle       - The fill color
     * @property {cc.Color}     strokeStyle     - The stroke color
     * @property {Number}       lineWidth       - The line width for stroke
     * @property {Number}       shadowOffsetX   - The x axis offset of shadow
     * @property {Number}       shadowOffsetY   - The y axis offset of shadow
     * @property {Number}       shadowOpacity   - The opacity of shadow
     * @property {Number}       shadowBlur      - The blur size of shadow
     */
    export class LabelTTF extends Sprite {
        public width:number;
        public height:number;
        public color:Color;
        public opacity:number;
        public string:string;
        public textAlign:TextAlignment;
        public verticalAlign:VerticalTextAlignment;
        public fontSize:number;
        public fontName:string;
        public font:FontDefinition;
        public boundingWidth:number;
        public boundingHeight:number;
        public fillStyle:Color;
        public strokeStyle:Color;
        public lineWidth:number;
        public shadowOffsetX:number;
        public shadowOffsetY:number;
        public shadowOpacity:number;
        public shadowBlur:number;

        /**
         * creates a cc.LabelTTF from a font name, alignment, dimension and font size
         * @deprecated since v3.0, please use the new construction instead
         * @see cc.LabelTTF
         * @static
         * @param {String} text
         * @param {String|cc.FontDefinition} [fontName="Arial"]
         * @param {Number} [fontSize=16]
         * @param {cc.Size} [dimensions=cc.size(0,0)]
         * @param {cc.TextAlignment} [hAlignment=cc.TextAlignment.LEFT]
         * @param {cc.VerticalTextAlignment} [vAlignment=cc.VerticalTextAlignment.TOP]
         * @return {cc.LabelTTF|Null}
         */
        public static create(text:string, fontName?:FontDefinition|string, fontSize?:number, dimensions?:Size, hAlignment?:TextAlignment, vAlignment?:VerticalTextAlignment):LabelTTF;

        public constructor(label:string, fontName:string, fontSize:number, dimensions?:Size, hAlignment?:TextAlignment, vAlignment?:TextAlignment);

        /**
         * Initializes the cc.LabelTTF with a font name, alignment, dimension and font size, do not call it by yourself,
         * you should pass the correct arguments in constructor to initialize the label.
         * @param {String} label string
         * @param {String} fontName
         * @param {Number} fontSize
         * @param {cc.Size} [dimensions=]
         * @param {Number} [hAlignment=]
         * @param {Number} [vAlignment=]
         * @return {Boolean} return false on error
         */
        public initWithString(label:string, fontName:string, fontSize:number, dimensions?:Size, hAlignment?:TextAlignment, vAlignment?:TextAlignment):boolean;

        public init():boolean;

        public description():string;

        public getLineHeight():number;

        public setLineHeight(lineHeight:number):void;

        /**
         * Returns the text of the label
         * @return {String}
         */
        public getString():string;

        /**
         * Returns Horizontal Alignment of cc.LabelTTF
         * @return {cc.TextAlignment}
         */
        public getHorizontalAlignment():TextAlignment;

        /**
         * Returns Vertical Alignment of cc.LabelTTF
         * @return {cc.VerticalTextAlignment}
         */
        public getVerticalAlignment():VerticalTextAlignment;

        /**
         * Returns the dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
         * @see cc.LabelTTF#setDimensions, cc.LabelTTF#boundingWidth and cc.LabelTTF#boundingHeight
         * @return {cc.Size}
         */
        public getDimensions():Size;

        /**
         * Returns font size of cc.LabelTTF
         * @return {Number}
         */
        public getFontSize():number;

        /**
         * Returns font name of cc.LabelTTF
         * @return {String}
         */
        public getFontName():string;

        /**
         * Initializes the CCLabelTTF with a font name, alignment, dimension and font size, do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
         * @param {String} text
         * @param {cc.FontDefinition} textDefinition
         * @return {Boolean}
         */
        public initWithStringAndTextDefinition(text:string, textDefinition:FontDefinition):boolean;

        /**
         * Sets the text definition used by this label
         * @param {cc.FontDefinition} theDefinition
         */
        public setTextDefinition(theDefinition:FontDefinition):void;

        /**
         * Extract the text definition used by this label
         * @return {cc.FontDefinition}
         */
        public getTextDefinition():FontDefinition;

        /**
         * Enable or disable shadow for the label
         * @param {cc.Color | Number} a Color or The x axis offset of the shadow
         * @param {cc.Size | Number} b Size or The y axis offset of the shadow
         * @param {Number} c The blur size of the shadow or The opacity of the shadow (0 to 1)
         * @param {null | Number} d Null or The blur size of the shadow
         * @example
         *   old:
         *     labelttf.enableShadow(shadowOffsetX, shadowOffsetY, shadowOpacity, shadowBlur);
         *   new:
         *     labelttf.enableShadow(shadowColor, offset, blurRadius);
         */
        public enableShadow(a:Color|number, b:Size|number, c:number, d?:number):void;

        /**
         * Disable shadow rendering
         */
        public disableShadow():void;

        /**
         * Enable label stroke with stroke parameters
         * @param {cc.Color} strokeColor The color of stroke
         * @param {Number} strokeSize The size of stroke
         */
        public enableStroke(strokeColor:Color, strokeSize:number):void;

        /**
         * Disable label stroke
         */
        public disableStroke():void;

        /**
         * Sets the text fill color
         * @function
         * @param {cc.Color} fillColor The fill color of the label
         */
        public setFontFillColor(fillColor:Color):void;

        /*
         * BEGIN SCALE METHODS
         *
         * In order to make the value of scaleX and scaleY consistent across
         * screens, we provide patched versions that return the same values as if
         * the screen was not HiDPI.
         */

        /**
         * Returns the scale factor of the node.
         * @warning: Assertion will fail when _scaleX != _scaleY.
         * @function
         * @return {Number} The scale factor
         */
        public getScale():number;

        /**
         * Sets the scale factor of the node. 1.0 is the default scale factor.
         * This function can modify the X and Y scale at the same time.
         * @function
         * @param {Number} scale or scaleX value
         * @param {Number} [scaleY=]
         */
        public setScale(scale:number, scaleY?:number):void;

        /**
         * Returns the scale factor on X axis of this node
         * @function
         * @return {Number} The scale factor on X axis.
         */
        public getScaleX():number; 

        /**
         * <p>
         *     Changes the scale factor on X axis of this node <br/>
         *     The default value is 1.0 if you haven't changed it before
         * </p>
         * @function
         * @param {Number} newScaleX The scale factor on X axis.
         */
        public setScaleX(newScaleX:number):void;

        /**
         * Returns the scale factor on Y axis of this node
         * @function
         * @return {Number} The scale factor on Y axis.
         */
        public getScaleY():number;

        /**
         * <p>
         *     Changes the scale factor on Y axis of this node  <br/>
         *     The Default value is 1.0 if you haven't changed it before.
         * </p>
         * @function
         * @param {Number} newScaleY The scale factor on Y axis.
         */
        public setScaleY(newScaleY:number):void;

        /*
         * END SCALE METHODS
         */

        /**
         * Changes the text content of the label
         * @warning Changing the string is as expensive as creating a new cc.LabelTTF. To obtain better performance use cc.LabelAtlas
         * @param {String} text Text content for the label
         */
        public setString(text:string):void;

        /**
         * Sets Horizontal Alignment of cc.LabelTTF
         * @param {cc.TextAlignment} alignment Horizontal Alignment
         */
        public setHorizontalAlignment(alignment:TextAlignment):void;

        /**
         * Sets Vertical Alignment of cc.LabelTTF
         * @param {cc.VerticalTextAlignment} verticalAlignment
         */
        public setVerticalAlignment(verticalAlignment:VerticalTextAlignment):void;

        /**
         * Set Dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
         * @param {cc.Size|Number} dim dimensions or width of dimensions
         * @param {Number} [height] height of dimensions
         */
        public setDimensions(dim:Size|number, height?:number):void;

        /**
         * Sets font size of cc.LabelTTF
         * @param {Number} fontSize
         */
        public setFontSize(fontSize:number):void;

        /**
         * Sets font name of cc.LabelTTF
         * @param {String} fontName
         */
        public setFontName(fontName:string):void;

        /**
         * Returns the actual content size of the label, the content size is the real size that the label occupied while dimension is the outer bounding box of the label.
         * @returns {cc.Size} The content size
         */
        public getContentSize():Size;

        public setTextureRect(rect:Rect, rotated:boolean, untrimmedSize:Size):void;

        /**
         * set Target to draw on
         * @param boolean onCanvas
         */
        public setDrawMode(onCacheMode:boolean):void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCLabelTTFCanvasRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCLabelTTFWebGLRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCLabelTTFPropertyDefine.js
    //  NOTE: Properties have been added to CCLabelTTF class.
    //+--------------------------------------------------------------------------------
}
