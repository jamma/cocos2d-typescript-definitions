/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/layers/CCLayer.js
    //+--------------------------------------------------------------------------------

    /** cc.Layer is a subclass of ccsg.Node that implements the TouchEventsDelegate protocol.<br/>
     * All features from ccsg.Node are valid, plus the bake feature: Baked layer can cache a static layer to improve performance
     * @class
     * @extends _ccsg.Node
     */
    // cc.Layer = _ccsg.Node.extend(/** @lends cc.Layer# */{
    export class Layer extends Node {
        // /**
        //  * <p>Constructor of cc.Layer, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.</p>
        //  */
        // public constructor();

        // /**
        //  * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
        //  */
        // public init():boolean;

        /**
         * Sets the layer to cache all of children to a bake sprite, and draw itself by bake sprite. recommend using it in UI.<br/>
         * This is useful only in html5 engine
         * @function
         * @see cc.Layer#unbake
         */
        public bake():void;

        /**
         * Cancel the layer to cache all of children to a bake sprite.<br/>
         * This is useful only in html5 engine
         * @function
         * @see cc.Layer#bake
         */
        public unbake():void;

        /**
         * Determines if the layer is baked.
         * @function
         * @returns {boolean}
         * @see cc.Layer#bake and cc.Layer#unbake
         */
        public isBaked():boolean;
    }

    /**
     * <p>
     * CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.       <br/>
     *  All features from CCLayer are valid, plus the following new features:                   <br/>
     * - opacity                                                                     <br/>
     * - RGB colors                                                                  </p>
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
        public width:number;
        public height:number;

        /**
         * Returns the blend function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        // public setOpacityModifyRGB(value:boolean):void;
        // public isOpacityModifyRGB():boolean;

        /**
         * Constructor of cc.LayerColor
         * @function
         * @param {cc.Color} [color=]
         * @param {Number} [width=]
         * @param {Number} [height=]
         */
        public constructor(color?:Color, width?:number, height?:number);

        /**
         * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
         * @param {cc.Color} [color=]
         * @param {Number} [width=]
         * @param {Number} [height=]
         * @return {Boolean}
         */
        public init(color?:Color, width?:number, height?:number):boolean;

        /**
         * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
         * @param {Number|cc.BlendFunc} src
         * @param {Number} [dst]
         */
        public setBlendFunc(src:BlendFunc|number, dst:number):void;
    }

    export interface ColorStop {
        p:number;
        color:Color;
    }

    /**
     * <p>
     * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.<br/>
     *<br/>
     * All features from cc.LayerColor are valid, plus the following new features:<br/>
     * <ul><li>direction</li>
     * <li>final color</li>
     * <li>interpolation mode</li></ul>
     * <br/>
     * Color is interpolated between the startColor and endColor along the given<br/>
     * vector (starting at the origin, ending at the terminus).  If no vector is<br/>
     * supplied, it defaults to (0, -1) -- a fade from top to bottom.<br/>
     * <br/>
     * If 'compressedInterpolation' is disabled, you will not see either the start or end color for<br/>
     * non-cardinal vectors; a smooth gradient implying both end points will be still<br/>
     * be drawn, however.<br/>
     *<br/>
     * If 'compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
     * </p>
     * @class
     * @extends cc.LayerColor
     *
     * @param {cc.Color} start Starting color
     * @param {cc.Color} end Ending color
     * @param {cc.Vec2} [v=cc.p(0, -1)] A vector defines the gradient direction, default direction is from top to bottom
     *
     * @property {cc.Color} startColor              - Start color of the color gradient
     * @property {cc.Color} endColor                - End color of the color gradient
     * @property {Number}   startOpacity            - Start opacity of the color gradient
     * @property {Number}   endOpacity              - End opacity of the color gradient
     * @property {Number}   vector                  - Direction vector of the color gradient
     * @property {Number}   compressedInterpolation  - Indicate whether or not the interpolation will be compressed
     */
    export class LayerGradient extends LayerColor {
        public startColor:Color;
        public endColor:Color;
        public startOpacity:number;
        public endOpacity:number;
        public vector:Vec2[];
        public colorStops:ColorStop[];

        /**
         * Constructor of cc.LayerGradient
         * @param {cc.Color} start
         * @param {cc.Color} end
         * @param {cc.Vec2} [v=cc.p(0, -1)]
         * @param {Array|Null} stops
         *
         * @example Using ColorStops argument:
         * //startColor & endColor are for default and backward compatibility
         * var layerGradient = new cc.LayerGradient(cc.Color.RED, new cc.Color(255,0,0,0), cc.p(0, -1),
         *                                          [{p:0, color: cc.Color.RED},
         *                                           {p:.5, color: new cc.Color(0,0,0,0)},
         *                                           {p:1, color: cc.Color.RED}]);
         * //where p = A value between 0.0 and 1.0 that represents the position between start and end in a gradient
         *
         */
        public constructor(start:Color, end:Color, v?:Vec2, stops:ColorStop[]);

        /**
         * Initialization of the layer, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer
         * @param {cc.Color} start starting color
         * @param {cc.Color} end
         * @param {cc.Vec2|Null} v
         * @param {Array|Null} stops
         * @return {Boolean}
         */
        public init(start:Color, end:Color, v?:Vec2, stops:ColorStop[]):boolean;

        /**
         * Sets the untransformed size of the LayerGradient.
         * @param {cc.Size|Number} size The untransformed size of the LayerGradient or The untransformed size's width of the LayerGradient.
         * @param {Number} [height] The untransformed size's height of the LayerGradient.
         */
        // public setContentSize(size:Size|number, height?:number):void;

        /**
         * Returns the starting color
         * @return {cc.Color}
         */
        public getStartColor():Color;

        /**
         * Sets the starting color
         * @param {cc.Color} color
         * @example
         * // Example
         * myGradientLayer.setStartColor(cc.color(255,0,0));
         * //set the starting gradient to red
         */
        public setStartColor(color:Color):void;

        /**
         * Sets the end gradient color
         * @param {cc.Color} color
         * @example
         * // Example
         * myGradientLayer.setEndColor(cc.color(255,0,0));
         * //set the ending gradient to red
         */
        public setEndColor(color:Color):void;

        /**
         * Returns the end color
         * @return {cc.Color}
         */
        public getEndColor():Color;

        /**
         * Sets starting gradient opacity
         * @param {Number} o from 0 to 255, 0 is transparent
         */
        public setStartOpacity(o:number):void;

        /**
         * Returns the starting gradient opacity
         * @return {Number}
         */
        public getStartOpacity():number;

        /**
         * Sets the end gradient opacity
         * @param {Number} o
         */
        public setEndOpacity(o:number):void;

        /**
         * Returns the end gradient opacity
         * @return {Number}
         */
        public getEndOpacity():number;

        /**
         * Sets the direction vector of the gradient
         * @param {cc.Vec2} Var
         */
        public setVector(Var:Vec2):void;

        /**
         * Returns the direction vector of the gradient
         * @return {cc.Vec2}
         */
        public getVector():Vec2;

        /**
         * Returns whether compressed interpolation is enabled
         * @return {Boolean}
         */
        public isCompressedInterpolation():boolean;

        /**
         * Sets whether compressed interpolation is enabled
         * @param {Boolean} compress
         */
        public setCompressedInterpolation(compress:boolean):void;

        /**
         * Return an array of Object representing a colorStop for the gradient, if no stops was specified
         * start & endColor will be provided as default values
         * @example
         * [{p: 0, color: cc.Color.RED},{p: 1, color: cc.Color.RED},...]
         * @returns {Array}
         */
        public getColorStops():ColorStop[];

        /**
         * Set the colorStops to create the gradient using multiple point & color
         *
         * @param colorStops
         *
         * @example
         * //startColor & endColor are for default and backward compatibility
         * var layerGradient = new cc.LayerGradient(cc.Color.RED, new cc.Color(255,0,0,0), cc.p(0, -1));
         * layerGradient.setColorStops([{p:0, color: cc.Color.RED},
         *                              {p:.5, color: new cc.Color(0,0,0,0)},
         *                              {p:1, color: cc.Color.RED}]);
         * //where p = A value between 0.0 and 1.0 that represents the position between start and end in a gradient
         *
         */
        public setColorStops(colorStops:ColorStop[]):void;
    }

    /**
     * CCMultipleLayer is a CCLayer with the ability to multiplex it's children.<br/>
     * Features:<br/>
     *  <ul><li>- It supports one or more children</li>
     *  <li>- Only one children will be active a time</li></ul>
     * @class
     * @extends cc.Layer
     * @param {Array} layers an array of cc.Layer
     * @example
     * // Example
     * var multiLayer = new cc.LayerMultiple(layer1, layer2, layer3);//any number of layers
     */
    export class LayerMultiplex extends Layer {
        /**
         * Constructor of cc.LayerMultiplex
         * @param {Array} layers an array of cc.Layer
         */
        public constructor(layers:Layer[]);

        /**
         * Initialization of the layer multiplex, please do not call this function by yourself, you should pass the parameters to constructor to initialize a layer multiplex
         * @param {Array} layers an array of cc.Layer
         * @return {Boolean}
         */
        public initWithLayers(layers:Layer[]):boolean;

        /**
         * Switches to a certain layer indexed by n.<br/>
         * The current (old) layer will be removed from it's parent with 'cleanup:YES'.
         * @param {Number} n the layer index to switch to
         */
        public switchTo(n:number):void;

        /**
         * Release the current layer and switches to another layer indexed by n.<br/>
         * The current (old) layer will be removed from it's parent with 'cleanup:YES'.
         * @param {Number} n the layer index to switch to
         */
        public switchToAndReleaseMe(n:number):void;

        /**
         * Add a layer to the multiplex layers list
         * @param {cc.Layer} layer
         */
        public addLayer(layer:Layer):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/layers/CCLayerCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/layers/CCLayerWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------
