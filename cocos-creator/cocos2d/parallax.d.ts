/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/parallax/CCParallaxNode.js
    //+--------------------------------------------------------------------------------
    /**
     * Parallax Object. <br />
     * Parallax required attributes are stored.
     * @class
     * @extends cc._Class
     */
    // var PointObject = cc._Class.extend(/** @lends PointObject# */{
    export class PointObject {
        // _ratio:null,
        // _offset:null,
        // _child:null,

        public consructor(ratio:Vec2, offset:Vec2);

        /**
         * initializes PointObject
         * @param  {cc.Vec2} ratio Not point, this is a ratio.
         * @param  {cc.Vec2} offset
         * @return {Boolean}
         */
        public initWithCCPoint(ratio:Vec2, offset:Vec2):boolean;

        /**
         * Gets the ratio.
         * @return  {cc.Vec2} Not point, this is ratio.
         */
        public getRatio():Vec2;

        /**
         * Set the ratio.
         * @param  {cc.Vec2} value
         */
        public setRatio(value:Vec2):void;

        /**
         * Gets the offset.
         * @return  {cc.Vec2}
         */
        public getOffset():Vec2;

        /**
         * Set the offset.
         * @param {cc.Vec2} value
         */
        public setOffset(value:Vec2):void;

        /**
         * Gets the child.
         * @return {_ccsg.Node}
         */
        public getChild():Node;

        /**
         * Set the child.
         * @param  {_ccsg.Node} value
         */
        public setChild(value:Node):void;

    }

    /**
     * <p>cc.ParallaxNode: A node that simulates a parallax scroller<br />
     * The children will be moved faster / slower than the parent according the the parallax ratio. </p>
     * @class
     * @extends _ccsg.Node
     *
     * @property {Array}    parallaxArray   - Parallax nodes array
     */
    export class ParallaxNode extends Node {
    	parallaxArray:PointObject[];

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        public constructor();

        /**
         * Gets the parallax array.
         * @return {Array}
         */
        public getParallaxArray():PointObject[];

        /**
         * Set parallax array.
         * @param {Array} value
         */
        public setParallaxArray(value:PointObject[]):void;

        /**
         * Adds a child to the container with a z-order, a parallax ratio and a position offset
         * It returns self, so you can chain several addChilds.
         * @param {_ccsg.Node} child
         * @param {Number} z
         * @param {cc.Vec2} ratio
         * @param {cc.Vec2} offset
         * @example
         * //example
         * voidNode.addChild(background, -1, cc.p(0.4, 0.5), cc.p(0,0));
         */
        public addChild(child:Node, z:number, ratio:Vec2, offset:Vec2):void;

        // I want to exclude this definition of addChild, but TypeScript requires it since this is a subclass of Node.
        // However, calling this method will result in a runtime error.
        public addChild(child:Node, z:number, tag:number):void;

        /**
         *  Remove Child
         * @param {_ccsg.Node} child
         * @param {Boolean} cleanup
         * @example
         * //example
         * voidNode.removeChild(background,true);
         */
        public removeChild(child:Node, cleanup?:boolean):void;

        /**
         *  Remove all children with cleanup
         * @param {Boolean} cleanup
         */
        public removeAllChildren(cleanup?:boolean):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/parallax/CCParallaxNodeRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
}
