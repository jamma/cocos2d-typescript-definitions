/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/base-node/base-node.js
    //  NOTE: Added all properties directly to cocos2d/core/ccnode.d.ts
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCAtlasNode.js
    //+--------------------------------------------------------------------------------
    /**
     * <p>cc.AtlasNode is a subclass of ccsg.Node, it knows how to render a TextureAtlas object. </p>
     *
     * <p>If you are going to render a TextureAtlas consider subclassing cc.AtlasNode (or a subclass of cc.AtlasNode)</p>
     *
     * <p>All features from ccsg.Node are valid</p>
     *
     * <p>You can create a cc.AtlasNode with an Atlas file, the width, the height of each item and the quantity of items to render</p>
     *
     * @class
     * @extends _ccsg.Node
     *
     * @param {String} tile
     * @param {Number} tileWidth
     * @param {Number} tileHeight
     * @param {Number} itemsToRender
     * @example
     * var node = new cc.AtlasNode("pathOfTile", 16, 16, 1);
     *
     * @property {Texture2D}     texture         - Current used texture
     * @property {TextureAtlas}  textureAtlas    - Texture atlas for cc.AtlasNode
     * @property {Number}           quadsToDraw     - Number of quads to draw
     */
    // cc.AtlasNode = _ccsg.Node.extend(/** @lends cc.AtlasNode# */{
    export class AtlasNode extends Node {
        // TODO: Figure out if these are public properties or not
        // public textureAtlas:TextureAtlas;
        // public quadsToDraw:number;

        /**
         * Creates a cc.AtlasNode with an Atlas file the width and height of each item and the quantity of items to render
         * @deprecated since v3.0, please use new construction instead
         * @method create
         * @static
         * @param {String} tile
         * @param {Number} tileWidth
         * @param {Number} tileHeight
         * @param {Number} itemsToRender
         * @return {cc.AtlasNode}
         */
        public static create(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number):AtlasNode;

        /**
         * <p>Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.</p>
         * @param {String} tile
         * @param {Number} tileWidth
         * @param {Number} tileHeight
         * @param {Number} itemsToRender
         */
        public constructor(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number);

        /**
         * Updates the Atlas (indexed vertex array).
         * Empty implementation, shall be overridden in subclasses
         * @function
         */
        public updateAtlasValues():void;

        // /**
        //  * Get color value of the atlas node
        //  * @function
        //  * @return {cc.Color}
        //  */
        // public getColor():Color;

        // /**
        //  * Set whether color should be changed with the opacity value,
        //  * if true, node color will change while opacity changes.
        //  * @function
        //  * @param {Boolean} value
        //  */
        // public setOpacityModifyRGB(value:flag):void;

        // /**
        //  * Get whether color should be changed with the opacity value
        //  * @function
        //  * @return {Boolean}
        //  */
        // isOpacityModifyRGB: function () {
        //     return this._opacityModifyRGB;
        // },

        /**
         * Get node's blend function
         * @function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Set node's blend function
         * This function accept either cc.BlendFunc object or source value and destination value
         * @function
         * @param {Number | cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         * Set the atlas texture
         * @function
         * @param {cc.TextureAtlas} value The texture
         */
        public setTextureAtlas(value:TextureAtlas):void;

        /**
         * Get the atlas texture
         * @function
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * Get the number of quads to be rendered
         * @function
         * @return {Number}
         */
        public getQuadsToDraw():number;

        /**
         * Set the number of quads to be rendered
         * @function
         * @param {Number} quadsToDraw
         */
        public setQuadsToDraw(quadsToDraw:number):void;

        /**
         * Initializes an cc.AtlasNode object with an atlas texture file name, the width, the height of each tile and the quantity of tiles to render
         * @function
         * @param {String} tile             The atlas texture file name
         * @param {Number} tileWidth        The width of each tile
         * @param {Number} tileHeight       The height of each tile
         * @param {Number} itemsToRender    The quantity of tiles to be rendered
         * @return {Boolean}
         */
        public initWithTileFile(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number):boolean;

        /**
         * Initializes an CCAtlasNode with an atlas texture, the width, the height of each tile and the quantity of tiles to render
         * @function
         * @param {Texture2D} texture    The atlas texture
         * @param {Number} tileWidth        The width of each tile
         * @param {Number} tileHeight       The height of each tile
         * @param {Number} itemsToRender    The quantity of tiles to be rendered
         * @return {Boolean}
         */
        public initWithTexture(texture:Texture2D, tileWidth:number, tileHeight:number, itemsToRender:number):boolean;

        // /**
        //  * Set node's color
        //  * @function
        //  * @param {Color} color Color object created with cc.color(r, g, b).
        //  */
        // setColor: function(color){
        //     this._renderCmd.setColor(color);
        // },

        // /**
        //  * Set node's opacity
        //  * @function
        //  * @param {Number} opacity The opacity value
        //  */
        // setOpacity: function (opacity) {
        //     this._renderCmd.setOpacity(opacity);
        // },

        /**
         * Get the current texture
         * @function
         * @return {Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Replace the current texture with a new one
         * @function
         * @param {Texture2D} texture    The new texture
         */
        public setTexture(texture:Texture2D):void;

    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCAtlasNodeCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCAtlasNodeWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCSGNode.js
    //  NOTE: Not quite sure how this class fits in the whole hierarchy.
    //        Neither cc.BaseNode nor cc.Node seem to inherit from it,
    //        and their interfaces seem very similar (cc.Node and ccsg.Node).
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCSGNodeCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCSGNodeWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------


}

