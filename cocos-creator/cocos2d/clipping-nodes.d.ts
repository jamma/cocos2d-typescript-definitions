/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/clipping-nodes/CCClippingNode.js
    //+--------------------------------------------------------------------------------


    /**
     * <p>
     *     cc.ClippingNode is a subclass of ccsg.Node.                                                            <br/>
     *     It draws its content (children) clipped using a stencil.                                               <br/>
     *     The stencil is an other ccsg.Node that will not be drawn.                                               <br/>
     *     The clipping is done using the alpha part of the stencil (adjusted with an alphaThreshold).
     * </p>
     * @class
     * @extends _ccsg.Node
     * @param {_ccsg.Node} [stencil=null]
     *
     * @property {Number}   alphaThreshold  - Threshold for alpha value.
     * @property {Boolean}  inverted        - Indicate whether in inverted mode.
     * @property {_ccsg.Node}  stencil         - he ccsg.Node to use as a stencil to do the clipping.
     */
    // cc.ClippingNode = _ccsg.Node.extend(/** @lends cc.ClippingNode# */{
    export class ClippingNode extends Node {
        public static stencilBits:number;
        public alphaThreshold:number;
        public inverted:boolean;
        public stencil:Node;

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {_ccsg.Node} [stencil=null]
         */
        // ctor: function (stencil) {
        public constructor(stencil:Node);

        /**
         * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
         * @function
         * @param {_ccsg.Node} [stencil=null]
         */
        public init(stencil:Node):boolean;

        /**
         * <p>
         *     Event callback that is invoked every time when node enters the 'stage'.                                   <br/>
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.        <br/>
         *     During onEnter you can't access a "sister/brother" node.                                                    <br/>
         *     If you override onEnter, you must call its parent's onEnter function with this._super().
         * </p>
         * @function
         */
        // public onEnter():void;

        /**
         * <p>
         *     Event callback that is invoked when the node enters in the 'stage'.                                                        <br/>
         *     If the node enters the 'stage' with a transition, this event is called when the transition finishes.                       <br/>
         *     If you override onEnterTransitionDidFinish, you shall call its parent's onEnterTransitionDidFinish with this._super()
         * </p>
         * @function
         */
        // public onEnterTransitionDidFinish():void;

        /**
         * <p>
         *     callback that is called every time the node leaves the 'stage'.  <br/>
         *     If the node leaves the 'stage' with a transition, this callback is called when the transition starts. <br/>
         *     If you override onExitTransitionDidStart, you shall call its parent's onExitTransitionDidStart with this._super()
         * </p>
         * @function
         */
        // public onExitTransitionDidStart():void;

        /**
         * <p>
         * callback that is called every time the node leaves the 'stage'. <br/>
         * If the node leaves the 'stage' with a transition, this callback is called when the transition finishes. <br/>
         * During onExit you can't access a sibling node.                                                             <br/>
         * If you override onExit, you shall call its parent's onExit with this._super().
         * </p>
         * @function
         */
        // public onExit():void;

        /**
         * <p>
         * The alpha threshold.                                                                                   <br/>
         * The content is drawn only where the stencil have pixel with alpha greater than the alphaThreshold.     <br/>
         * Should be a float between 0 and 1.                                                                     <br/>
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
         * <p>
         *     Inverted. If this is set to YES,                                                                 <br/>
         *     the stencil is inverted, so the content is drawn where the stencil is NOT drawn.                 <br/>
         *     This default to NO.
         * </p>
         * @return {Boolean}
         */
        public isInverted():boolean;

        /**
         * set whether or not invert of stencil
         * @param {Boolean} inverted
         */
        public setInverted(inverted:boolean):void;

        /**
         * The ccsg.Node to use as a stencil to do the clipping.                                   <br/>
         * The stencil node will be retained. This default to nil.
         * @return {_ccsg.Node}
         */
        public getStencil():Node;

        /**
         * Set stencil.
         * @function
         * @param {_ccsg.Node} stencil
         */
        public setStencil(stencil:Node):void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/clipping-nodes/CCClippingNodeCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------

    //-------------------------- ClippingNode's canvas render cmd --------------------------------
    export module ClippingNode { 
        export class CanvasRenderCmd {
            // public constructor(renderable:???);
            // public initStencilBits();
            // public setStencil(stencil:Node):void;
            // public visit(parentCmd:???);
        }
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/clipping-nodes/CCClippingNodeWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------

    // ------------------------------- ClippingNode's WebGL render cmd ------------------------------
    export function setProgram(node:Node, program:ShaderProgram):void;

    // cc.ClippingNode.WebGLRenderCmd = function(renderable){
    export module ClippingNode {
        export class WebGLRenderCmd {
            // _ccsg.Node.WebGLRenderCmd.call(this, renderable);
            // public constructor(renderable:???);
            // public initStencilBits();
            // public transform(parentCmd:???, recursive:boolean):void;
            // public setStencil(stencil:Node):void;
            // public visit(parentCmd:???);
        }
    }
}
