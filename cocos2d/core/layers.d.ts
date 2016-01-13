/// <reference path="../cocos2d-lib.d.ts" />

declare module cc {

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/layers/CCLayer.js
    ////////////////////////////////////////////////////////////////////////////////

    //+-------------------- Variable Definitions --------------------+//
    //+-------------------- Function Definitions --------------------+//
    //+-------------------- Class Definitions --------------------+//

    /** cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.
     * All features from cc.Node are valid, plus the bake feature: Baked layer can cache a static layer to improve performance
     * @class
     * @extends cc.Node
     */
    export class Layer extends Node {
        /**
         * Constructor of cc.Layer, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        constructor();

        /**
         * Sets the layer to cache all of children to a bake sprite, and draw itself by bake sprite. recommend using it in UI.
         * This is useful only in html5 engine
         * @function
         * @see cc.Layer#unbake
         */
        public bake():void;

        /**
         * Cancel the layer to cache all of children to a bake sprite.
         * This is useful only in html5 engine
         * @function
         * @see cc.Layer#bake
         */
        public unbake():void;
    }

    /**
     *
     * CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.
     *  All features from CCLayer are valid, plus the following new features:
     * - opacity
     * - RGB colors
     * @class
     * @extends cc.Layer
     *
     * @param {cc.Color} [color=] The color of the layer
     * @param {Number} [width=] The width of the layer
     * @param {Number} [height=] The height of the layer
     *
     * @example
     * // Example
     * //Create a yellow color layer as background
     * var yellowBackground = new cc.LayerColor(cc.color(255,255,0,255));
     * //If you didn't pass in width and height, it defaults to the same size as the canvas
     *
     * //create a yellow box, 200 by 200 in size
     * var yellowBox = new cc.LayerColor(cc.color(255,255,0,255), 200, 200);
     */
    export class LayerColor extends Layer {
        /**
         * Constructor of cc.LayerColor
         * @function
         * @param {cc.Color} [color=]
         * @param {Number} [width=]
         * @param {Number} [height=]
         */
        constructor(color:Color, width?:number, height?:number);
        ctor(color?:Color, width?:number, height?:number);

        /**
         * Returns the blend function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
         * @param {cc.BlendFunc} func
         */
        public setBlendFunc(func:BlendFunc):void;

        /**
         * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
         * @param {Number} src
         * @param {Number} [dst]
         */
        public setBlendFunc(src:number, dst:number):void;
    }

    /**
     *
     * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.
     *
     * All features from cc.LayerColor are valid, plus the following new features:
     *      * direction
     *      * final color
     *      * interpolation mode
     *
     * Color is interpolated between the startColor and endColor along the given
     * vector (starting at the origin, ending at the terminus).  If no vector is
     * supplied, it defaults to (0, -1) -- a fade from top to bottom.
     *
     * If 'compressedInterpolation' is disabled, you will not see either the start or end color for
     * non-cardinal vectors; a smooth gradient implying both end points will be still
     * be drawn, however.
     *
     * If 'compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
     *
     * @class
     * @extends cc.LayerColor
     *
     * @param {cc.Color} start Starting color
     * @param {cc.Color} end Ending color
     * @param {cc.Point} [v=cc.p(0, -1)] A vector defines the gradient direction, default direction is from top to bottom
     *
     * @property {cc.Color} startColor              - Start color of the color gradient
     * @property {cc.Color} endColor                - End color of the color gradient
     * @property {Number}   startOpacity            - Start opacity of the color gradient
     * @property {Number}   endOpacity              - End opacity of the color gradient
     * @property {Number}   vector                  - Direction vector of the color gradient
     * @property {Number}   compressedInterpolation  - Indicate whether or not the interpolation will be compressed
     */
    export class LayerGradient extends LayerColor {
        /**
         * TODO: Make some kind of type for the "stops" array, I believe the fields are: {p:number, color:Color}
         * Constructor of cc.LayerGradient
         * @param {cc.Color} start
         * @param {cc.Color} end
         * @param {cc.Point} [v=cc.p(0, -1)]
         * @param {Array|Null} stops
         *
         * @example Using ColorStops argument:
         * //startColor & endColor are for default and backward compatibility
         * var layerGradient = new cc.LayerGradient(cc.color.RED, new cc.Color(255,0,0,0), cc.p(0, -1),
         *                                          [{p:0, color: cc.color.RED},
         *                                           {p:.5, color: new cc.Color(0,0,0,0)},
         *                                           {p:1, color: cc.color.RED}]);
         * //where p = A value between 0.0 and 1.0 that represents the position between start and end in a gradient
         *
         */
        constructor(start:Color, end:Color, v:Point, stops?:any[]);
        ctor(start?:Color, end?:Color|number, v?:Point|number, stops?:any[]);
    }
}
