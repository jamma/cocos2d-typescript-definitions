/// <reference path="cocos2d-lib.d.ts" />


declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCClippingNode.js
    // +--------------------------------------------------------------------------------
    /**
     * the value of stencil bits.
     * @type Number
     */
    export const stencilBits:number;

    /**
     *
     *     cc.ClippingNode is a subclass of cc.Node.
     *     It draws its content (children) clipped using a stencil.
     *     The stencil is an other cc.Node that will not be drawn.
     *     The clipping is done using the alpha part of the stencil (adjusted with an alphaThreshold).
     *
     * @class
     * @extends cc.Node
     * @param {cc.Node} [stencil=null]
     *
     * @property {Number}   alphaThreshold  - Threshold for alpha value.
     * @property {Boolean}  inverted        - Indicate whether in inverted mode.
     * @property {cc.Node}  stencil         - he cc.Node to use as a stencil to do the clipping.
     */
    export class ClippingNode extends Node {
        //alphaThreshold: 0,
        //inverted: false,
        public alphaThreshold:number;
        public inverted:boolean;
        public stencil:Node;

        public constructor(stencil?:Node);
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {cc.Node} [stencil=null]
         */
        public ctor(stencil?:Node):void;

        /**
         * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
         * @function
         * @param {cc.Node} [stencil=null]
         */
        public init(stencil?:Node):boolean;

        /**
         *
         * The alpha threshold.
         * The content is drawn only where the stencil have pixel with alpha greater than the alphaThreshold.
         * Should be a float between 0 and 1.
         * This default to 1 (so alpha test is disabled).
         * </P>
         * @return {Number}
         */
        public getAlphaThreshold():number;

        /**
         * set alpha threshold.
         * @param {Number} alphaThreshold
         */
        public setAlphaThreshold(alphaThreshold:number):void;

        /**
         *
         *     Inverted. If this is set to YES,
         *     the stencil is inverted, so the content is drawn where the stencil is NOT drawn.
         *     This default to NO.
         *
         * @return {Boolean}
         */
        public isInverted():boolean;

        /**
         * set whether or not invert of stencil
         * @param {Boolean} inverted
         */
        public setInverted(inverted:boolean):void;

        /**
         * The cc.Node to use as a stencil to do the clipping.
         * The stencil node will be retained. This default to nil.
         * @return {cc.Node}
         */
        public getStencil():Node;

        /**
         * Set stencil.
         * @function
         * @param {cc.Node} stencil
         */
        public setStencil(stencil:Node):void;
    }
}


