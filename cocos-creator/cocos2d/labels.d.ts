/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/labels/CCLabelAtlas.js
    //+--------------------------------------------------------------------------------

    /**
     * using image file to print text label on the screen, might be a bit slower than _ccsg.Label, similar to cc.LabelBMFont
     * @class
     * @extends cc.AtlasNode
     *
     * @property {String}   string  - Content string of label
     *
     * @param {String} strText
     * @param {String} charMapFile  charMapFile or fntFile
     * @param {Number} [itemWidth=0]
     * @param {Number} [itemHeight=0]
     * @param {Number} [startCharMap=""]
     * @example
     * //creates the cc.LabelAtlas with a string, a char map file(the atlas), the width and height of each element and the starting char of the atlas
     * var myLabel = new cc.LabelAtlas('Text to display', 'CharMapfile.png', 12, 20, ' ')
     *
     * //creates the cc.LabelAtlas with a string, a fnt file
     * var myLabel = new cc.LabelAtlas('Text to display', 'CharMapFile.plist‘);
     */
    export class LabelAtlas extends AtlasNode {
        // //property String is Getter and Setter
        // // string to render
        // _string: null,
        // // the first char in the charmap
        // _mapStartChar: null,

        // _textureLoaded: false,
        // _className: "LabelAtlas",
        // cc.defineGetterSetter(proto, "opacity", proto.getOpacity, proto.setOpacity);
        // cc.defineGetterSetter(proto, "color", proto.getColor, proto.setColor);

        // // Extended properties
        // /** @expose */
        // proto.string;
        // cc.defineGetterSetter(proto, "string", proto.getString, proto.setString);

        public opacity:number;
        public color:Color;
        public string:string;

        /**
         * <p>
         *  Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         *  Create a label atlas. <br />
         *  It accepts two groups of parameters: <br/>
         * a) string, fntFile <br/>
         * b) label, textureFilename, width, height, startChar <br/>
         * </p>
         * @param {String} strText
         * @param {String} charMapFile  charMapFile or fntFile
         * @param {Number} [itemWidth=0]
         * @param {Number} [itemHeight=0]
         * @param {String} [startCharMap=""]
         */
        public constructor(strText:string, charMapFile:string, itemWidth?:number, itemHeight?:number, startCharMap?:string);

        /**
         * Return  texture is loaded.
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * Add texture loaded event listener.
         * @param {Function} callback
         * @param {_ccsg.Node} target
         * @deprecated since 3.1, please use EventTarget API instead
         */
        public addLoadedEventListener(callback:???, target:Node):void;

        /**
         * <p>
         *  initializes the cc.LabelAtlas with a string, a char map file(the atlas), <br/>
         *  the width and height of each element and the starting char of the atlas <br/>
         *  It accepts two groups of parameters: <br/>
         * a) string, fntFile <br/>
         * b) label, textureFilename, width, height, startChar <br/>
         * </p>
         * @param {String} strText
         * @param {String|cc.Texture2D} charMapFile  charMapFile or fntFile or texture file
         * @param {Number} [itemWidth=0]
         * @param {Number} [itemHeight=0]
         * @param {String} [startCharMap=""]
         * @return {Boolean} returns true on success
         */
        public initWithString(strText:string, charMapFile:string, itemWidth?:number, itemHeight?:number, startCharMap?:string):boolean;

        /**
         * Set the color.
         * @param {cc.Color} color3
         */
        public setColor(color3:Color):void;

        /**
         * return the text of this label
         * @return {String}
         */
        public getString():string;

        public addChild(child:Node, localZOrder:number, tag:number):void;
        //     this._renderCmd._addChild(child);
        //     _ccsg.Node.prototype.addChild.call(this, child, localZOrder, tag);
        // },

        /**
         * Atlas generation
         * @function
         */
        public updateAtlasValues():void;

        /**
         * set the display string
         * @function
         * @param {String} label
         */
        public setString(label:string):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/labels/CCLabelAtlasCanvasRenderCmd.js
    //  NOTE: This file is ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js
    //  NOTE: This file is ignored.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/labels/CCLabelBMFont.js
    //+--------------------------------------------------------------------------------

    // /**
    //  * @constant
    //  * @type Number
    //  */
    // cc.LABEL_AUTOMATIC_WIDTH = -1;

    /**
     * <p>cc.LabelBMFont is a subclass of cc.SpriteBatchNode.</p>
     *
     * <p>Features:<br/>
     * <ul><li>- Treats each character like a _ccsg.Sprite. This means that each individual character can be:</li>
     * <li>- rotated</li>
     * <li>- scaled</li>
     * <li>- translated</li>
     * <li>- tinted</li>
     * <li>- change the opacity</li>
     * <li>- It can be used as part of a menu item.</li>
     * <li>- anchorPoint can be used to align the "label"</li>
     * <li>- Supports AngelCode text format</li></ul></p>
     *
     * <p>Limitations:<br/>
     * - All inner characters are using an anchorPoint of (0.5, 0.5) and it is not recommend to change it
     * because it might affect the rendering</p>
     *
     * <p>cc.LabelBMFont implements the protocol cc.LabelProtocol, like _ccsg.Label and cc.LabelAtlas.<br/>
     * cc.LabelBMFont has the flexibility of _ccsg.Label, the speed of cc.LabelAtlas and all the features of _ccsg.Sprite.<br/>
     * If in doubt, use cc.LabelBMFont instead of cc.LabelAtlas / _ccsg.Label.</p>
     *
     * <p>Supported editors:<br/>
     * http://glyphdesigner.71squared.com/ (Commercial, Mac OS X)<br/>
     * http://www.n4te.com/hiero/hiero.jnlp (Free, Java)<br/>
     * http://slick.cokeandcode.com/demos/hiero.jnlp (Free, Java)<br/>
     * http://www.angelcode.com/products/bmfont/ (Free, Windows only)</p>
     * @class
     * @extends cc.SpriteBatchNode
     *
     * @property {String}   string          - Content string of label
     * @property {cc.TextAlignment} textAlign - Horizontal Alignment of label
     * @property {Number}   boundingWidth   - Width of the bounding box of label, the real content width is limited by boundingWidth
     *
     * @param {String} str
     * @param {String} fntFile
     * @param {Number} [width=-1]
     * @param {cc.TextAlignment} [alignment=cc.TextAlignment.LEFT]
     * @param {cc.Vec2} [imageOffset=cc.p(0,0)]
     *
     * @example
     * // Example 01
     * var label1 = new cc.LabelBMFont("Test case", "test.fnt");
     *
     * // Example 02
     * var label2 = new cc.LabelBMFont("test case", "test.fnt", 200, cc.TextAlignment.LEFT);
     *
     * // Example 03
     * var label3 = new cc.LabelBMFont("This is a \n test case", "test.fnt", 200, cc.TextAlignment.LEFT, cc.p(0,0));
     */
    // cc.LabelBMFont = cc.SpriteBatchNode.extend(/** @lends cc.LabelBMFont# */{
    export class LabelBMFont extends SpriteBatchNode implements EventTarget {
        public string:string;
        public boundingWidth:number;
        public textAlign:TextAlignment;
        public texture:Texture2D;

        public anchorX:number;
        public anchorY:number;
        public scale:number;
        public scaleX:number;
        public scaleY:number;

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates a bitmap font atlas with an initial string and the FNT file.
         * @param {String} str
         * @param {String} fntFile
         * @param {Number} [width=-1]
         * @param {cc.TextAlignment} [alignment=cc.TextAlignment.LEFT]
         * @param {cc.Vec2} [imageOffset=cc.p(0,0)]
         */
        public constructor(str:string, fntFile:string, width?:number, alignment?:TextAlignment, imageOffset?:Vec2);

        /**
         * return  texture is loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * add texture loaded event listener. <br />
         * Will execute the callback in the loaded.
         * @param {Function} callback
         * @param {Object} target
         * @deprecated since 3.1, please use EventTarget API instead
         */
        public addLoadedEventListener(callback:???, target:Object):void;

        /**
         * Conforms to cc.RGBAProtocol protocol.
         * @return {Boolean}
         */
        public isOpacityModifyRGB():boolean;

        /**
         * Set whether to support cc.RGBAProtocol protocol
         * @param {Boolean} opacityModifyRGB
         */
        public setOpacityModifyRGB(opacityModifyRGB:boolean):void;

        /**
         * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
         */
        public init():boolean;

        /**
         * init a bitmap font atlas with an initial string and the FNT file
         * @param {String} str
         * @param {String} fntFile
         * @param {Number} [width=-1]
         * @param {cc.TextAlignment} [alignment=cc.TextAlignment.LEFT]
         * @param {cc.Vec2} [imageOffset=cc.p(0,0)]
         * @return {Boolean}
         */
        public initWithString(str:string, fntFile:string, width?:number, alignment?:TextAlignment, imageOffset?:Vec2):boolean;

        /**
         * updates the font chars based on the string to render
         */
        public createFontChars():void;

        /**
         * Update String. <br />
         * Only update this label display string.
         * @param {Boolean} fromUpdate
         */
        public updateString(fromUpdate:boolean):void;

        /**
         * Gets the text of this label
         * @return {String}
         */
        public getString():string;

        /**
         * Set the text
         * @param {String} newString
         * @param {Boolean|null} needUpdateLabel
         */
        public setString(newString:string, needUpdateLabel?:boolean):void;

        /**
         * Update Label. <br />
         * Update this Label display string and more...
         */
        public updateLabel():void;

        /**
         * Set text alignment.
         * @param {Number} alignment
         */
        public setAlignment(alignment:TextAlignment):void;

        /**
         * Set the bounding width. <br />
         * max with display width. The exceeding string will be wrapping.
         * @param {Number} width
         */
        public setBoundingWidth(width:number):void;

        /**
         * Set the param to change English word warp according to whether the space. <br />
         * default is false.
         * @param {Boolean}  breakWithoutSpace
         */
        public setLineBreakWithoutSpace(breakWithoutSpace:boolean):void;

        /**
         * Set scale. <br />
         * Input a number, will be decrease or increase the font size. <br />
         * @param {Number} scale
         * @param {Number} [scaleY=null] default is scale
         */
        public setScale(scale:number, scaleY?:number):void;

        /**
         * Set scale of x. <br />
         * Input a number, will be decrease or increase the font size. <br />
         * Horizontal scale.
         * @param {Number} scaleX
         */
        public setScaleX(scaleX:number):void;

        /**
         * Set scale of x. <br />
         * Input a number, will be decrease or increase the font size. <br />
         * Longitudinal scale.
         * @param {Number} scaleY
         */
        public setScaleY(scaleY:number):void;

        /**
         * set fnt file path. <br />
         * Change the fnt file path.
         * @param {String} fntFile
         */
        public setFntFile(fntFile:string):void;

        /**
         * Return the fnt file path.
         * @return {String}
         */
        public getFntFile():string;

        public setTexture(texture:Texture2D):void;

        /**
         * Set the AnchorPoint of the labelBMFont. <br />
         * In order to change the location of label.
         * @override
         * @param {cc.Vec2|Number} point The anchor point of labelBMFont or The anchor point.x of labelBMFont.
         * @param {Number} [y] The anchor point.y of labelBMFont.
         */
        public setAnchorPoint(point:Vec2|number, y?:number):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/labels/CCLabelBMFontCanvasRenderCmd.js
    //  NOTE: This file is ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/labels/CCLabelBMFontWebGLRenderCmd.js
    //  NOTE: This file is ignored.
    //+--------------------------------------------------------------------------------


}
