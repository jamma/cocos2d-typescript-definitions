/// <reference path="cocos2d-lib.d.ts" />


declare namespace cc {
    // Interface, consolidate all properties/methods common across cc2d label types here.
    // TODO: Fill this out completely. I don't have time to scour through the code and do this,
    //       so the interface will have to grow on an as-needed basis.
    interface Label extends Node {
        // Properties
        string:string;

        // Methods
        getString():string;
        setString(string:string):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCLabelAtlas.js
    // +--------------------------------------------------------------------------------
    /**
     * using image file to print text label on the screen, might be a bit slower than cc.Label, similar to cc.LabelBMFont
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
    export class LabelAtlas extends AtlasNode implements Label {

        //public opacity:number;
        //public color:Color;
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
         * @param {Number} [startCharMap=""]
         */
        public constructor(strText:string,
                           charMapFile:string,
                           itemWidth?:number,
                           itemHeight?:number,
                           startCharMap?:number);
        //public ctor(strText?:string, charMapFile?:string, itemWidth?:number, itemHeight?:number, startCharMap?:number):void;


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
         * @param {Number} [startCharMap=""]
         * @return {Boolean} returns true on success
         */
        public initWithString(strText:string,
                              charMapFile:string|Texture2D,
                              itemWidth?:number,
                              itemHeight?:number,
                              startCharMap?:number):void;

        /**
         * Return  texture is loaded.
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * return the text of this label
         * @return {String}
         */
        public getString():string;

        /**
         * set the display string
         * @function
         * @param {String} label
         */
        public setString(label:string):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCLabelBMFont.js
    // +--------------------------------------------------------------------------------
    /**
     * @constant
     * @type Number
     */
    export const LABEL_AUTOMATIC_WIDTH:number;

    /**
     * <p>cc.LabelBMFont is a subclass of cc.SpriteBatchNode.</p>
     *
     * <p>Features:<br/>
     * <ul><li>- Treats each character like a cc.Sprite. This means that each individual character can be:</li>
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
     * <p>cc.LabelBMFont implements the protocol cc.LabelProtocol, like cc.Label and cc.LabelAtlas.<br/>
     * cc.LabelBMFont has the flexibility of cc.Label, the speed of cc.LabelAtlas and all the features of cc.Sprite.<br/>
     * If in doubt, use cc.LabelBMFont instead of cc.LabelAtlas / cc.Label.</p>
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
     * @property {Number}   textAlign       - Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
     * @property {Number}   boundingWidth   - Width of the bounding box of label, the real content width is limited by boundingWidth
     *
     * @param {String} str
     * @param {String} fntFile
     * @param {Number} [width=-1]
     * @param {Number} [alignment=cc.TEXT_ALIGNMENT_LEFT]
     * @param {cc.Point} [imageOffset=cc.p(0,0)]
     *
     * @example
     * // Example 01
     * var label1 = new cc.LabelBMFont("Test case", "test.fnt");
     *
     * // Example 02
     * var label2 = new cc.LabelBMFont("test case", "test.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);
     *
     * // Example 03
     * var label3 = new cc.LabelBMFont("This is a \n test case", "test.fnt", 200, cc.TEXT_ALIGNMENT_LEFT, cc.p(0,0));
     */
    export class LabelBMFont extends SpriteBatchNode implements Label {
        public string:string;
        public boundingWidth:number;
        public textAlign:number;

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates a bitmap font atlas with an initial string and the FNT file.
         * @param {String} str
         * @param {String} fntFile
         * @param {Number} [width=-1]
         * @param {Number} [alignment=cc.TEXT_ALIGNMENT_LEFT]
         * @param {cc.Point} [imageOffset=cc.p(0,0)]
         */
        //public ctor(fileImage?:string|Texture2D, capacity?:number);
        public constructor(str:string, fntFile:string, width?:number, alignment?:number, imageOffset?:Point);
        //public ctor(str?:string, fntFile?:string, width?:number, alignment?:number, imageOffset?:Point):void;

        /**
         * init a bitmap font atlas with an initial string and the FNT file
         * @param {String} str
         * @param {String} fntFile
         * @param {Number} [width=-1]
         * @param {Number} [alignment=cc.TEXT_ALIGNMENT_LEFT]
         * @param {cc.Point} [imageOffset=cc.p(0,0)]
         * @return {Boolean}
         */
        public initWithString(str:string, fntFile:string, width?:number, alignment?:number, imageOffset?:Point):void;

        /**
         * return  texture is loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;

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
        public setAlignment(alignment:number):void;

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

    }

    export namespace fnt {
        /**
         * Parse Fnt string.
         * @param fntStr
         * @param url
         * @returns {{}}
         */
        // TODO: I'm not exactly sure what this returns, it might be a FontDefinition. Maybe I should just mark the return property as "any" and be done with this ...?
        export function parseFnt(fntStr:string, url:string):FontDefinition;

        /**
         * load the fnt
         * @param realUrl
         * @param url
         * @param res
         * @param cb
         */
        // TODO: I have zero clue what actual types are for these arguments
        export function load(realUrl:string, url:string, res:string, cb:()=>void):void;
    }
}


