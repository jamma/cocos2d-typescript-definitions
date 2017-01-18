/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/motion-streak/CCMotionStreak.js
    //  NOTE: This is commented out until I can figure out the purpose of the CCSG
    //        classes, and how to properly scope them.
    //+--------------------------------------------------------------------------------
    // export class MotionStreak extends Component {
    //     // name: 'cc.MotionStreak',

    //     // // To avoid conflict with other render component, we haven't use ComponentUnderSG,
    //     // // its implementation also requires some different approach:
    //     // //   1.Needed a parent node to make motion streak's position global related.
    //     // //   2.Need to update the position in each frame by itself because we don't know
    //     // //     whether the global position have changed
    //     // extends: cc.Component,

    //     // editor: CC_EDITOR && {
    //     //     menu: 'i18n:MAIN_MENU.component.others/MotionStreak',
    //     //     help: 'i18n:COMPONENT.help_url.motionStreak',
    //     //     playOnFocus: true,
    //     //     executeInEditMode: true
    //     // },

    //     public constructor();

    //     /**
    //      * !#en
    //      * !#zh 在编辑器模式下预览拖尾效果。
    //      * @property {Boolean} preview
    //      * @default false
    //      */
    //     public preview:boolean;

    //     /**
    //      * !#en The fade time to fade.
    //      * !#zh 拖尾的渐隐时间，以秒为单位。
    //      * @property fadeTime
    //      * @type {Number}
    //      * @example
    //      * motionStreak.fadeTime = 3;
    //      */
    //     public fadeTime:number;

    //     /**
    //      * !#en The minimum segment size.
    //      * !#zh 拖尾之间最小距离。
    //      * @property minSeg
    //      * @type {Number}
    //      * @example
    //      * motionStreak.minSeg = 3;
    //      */
    //     public minSeg:number;

    //     /**
    //      * !#en The stroke's width.
    //      * !#zh 拖尾的宽度。
    //      * @property stroke
    //      * @type {Number}
    //      * @example
    //      * motionStreak.stroke = 64;
    //      */
    //     public stroke:number;

    //     /**
    //      * !#en The texture of the MotionStreak.
    //      * !#zh 拖尾的贴图。
    //      * @property texture
    //      * @type {Texture2D}
    //      * @example
    //      * motionStreak.texture = newTexture;
    //      */
    //     public texture:Texture2D;

    //     /**
    //      * !#en The color of the MotionStreak.
    //      * !#zh 拖尾的颜色
    //      * @property color
    //      * @type {Color}
    //      * @default cc.Color.WHITE
    //      * @example
    //      * motionStreak.color = new cc.Color(255, 255, 255);
    //      */
    //     public color:Color;

    //     /**
    //      * !#en The fast Mode.
    //      * !#zh 是否启用了快速模式。当启用快速模式，新的点会被更快地添加，但精度较低。
    //      * @property fastMode
    //      * @type {Boolean}
    //      * @default false
    //      * @example
    //      * motionStreak.fastMode = true;
    //      */
    //     public fastMode:boolean;

    //     // onFocusInEditor: CC_EDITOR && function () {
    //     //     if (this.preview) {
    //     //         this._motionStreak.reset();
    //     //     }
    //     // },

    //     // onLostFocusInEditor: CC_EDITOR && function () {
    //     //     if (this.preview) {
    //     //         this._motionStreak.reset();
    //     //         this._motionStreak.update();
    //     //         cc.engine.repaintInEditMode();
    //     //     }
    //     // },

    //     /**
    //      * !#en Remove all living segments of the ribbon.
    //      * !#zh 删除当前所有的拖尾片段。
    //      * @method reset
    //      * @example
    //      * // stop particle system.
    //      * myParticleSystem.stopSystem();
    //      */
    //     public reset():void;

    //     public lateUpdate(delta:number):void;
    // }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/motion-streak/CCSGMotionStreak.js
    //+--------------------------------------------------------------------------------
    /**
     * converts a line to a polygon
     * @param {Float32Array} points
     * @param {Number} stroke
     * @param {Float32Array} vertices
     * @param {Number} offset
     * @param {Number} nuPoints
     */
    function vertexLineToPolygon (points:Float32Array, stroke:number, vertices:Float32Array, offset:number, nuPoints:number):void;

    export interface VertexLineIntersectResult {
        isSuccess:boolean;
        value:number;
    }

    /**
     * returns whether or not the line intersects
     * @param {Number} Ax
     * @param {Number} Ay
     * @param {Number} Bx
     * @param {Number} By
     * @param {Number} Cx
     * @param {Number} Cy
     * @param {Number} Dx
     * @param {Number} Dy
     * @return {Object}
     */
    // function vertexLineIntersect (Ax:number, Ay:number, Bx:number, By:number, Cx:number, Cy:number, Dx:number, Dy:number):VertexLineIntersectResult;
    function vertexLineIntersect (Ax:number, Ay:number, Bx:number, By:number, Cx:number, Cy:number, Dx:number, Dy:number):{isSuccess:boolean, value:number};

    /**
     * returns wheter or not polygon defined by vertex list is clockwise
     * @param {Array} verts
     * @return {Boolean}
     */
    function vertexListIsClockwise (verts:Vec2[]):boolean;

    /**
     * cc.MotionStreak manages a Ribbon based on it's motion in absolute space.                 <br/>
     * You construct it with a fadeTime, minimum segment size, texture path, texture            <br/>
     * length and color. The fadeTime controls how long it takes each vertex in                 <br/>
     * the streak to fade out, the minimum segment size it how many pixels the                  <br/>
     * streak will move before adding a new ribbon segment, and the texture                     <br/>
     * length is the how many pixels the texture is stretched across. The texture               <br/>
     * is vertically aligned along the streak segment.
     * @class
     * @extends _ccsg.Node
     *
     * @property {cc.Texture2D} texture                         - Texture used for the motion streak.
     * @property {Boolean}      fastMode                        - Indicate whether use fast mode.
     * @property {Boolean}      startingPositionInitialized     - Indicate whether starting position initialized.
     * @example
     * //example
     * new _ccsg.MotionStreak(2, 3, 32, cc.Color.GREEN, s_streak);
     */
    export class MotionStreak extends Node {
        // texture: null,
        // fastMode: false,
        // startingPositionInitialized: false,

        // _blendFunc: null,

        // _stroke: 0,
        // _fadeDelta: 0,
        // _minSeg: 0,

        // _maxPoints: 0,
        // _nuPoints: 0,
        // _previousNuPoints: 0,

        // /* Pointers */
        // _pointVertexes: null,
        // _pointState: null,

        // // webgl
        // _vertices: null,
        // _colorPointer: null,
        // _texCoords: null,

        // _verticesBuffer: null,
        // _colorPointerBuffer: null,
        // _texCoordsBuffer: null,
        // _className: "MotionStreak",

        public x:number;
        public y:number;

        /**
         * creates and initializes a motion streak with fade in seconds, minimum segments, stroke's width, color, texture filename or texture   <br/>
         * Constructor of cc.MotionStreak
         * @param {Number} fade time to fade
         * @param {Number} minSeg minimum segment size
         * @param {Number} stroke stroke's width
         * @param {Number} color
         * @param {string|cc.Texture2D} texture texture filename or texture
         */
        // ctor: function (fade, minSeg, stroke, color, texture) {
        public constructor(fade:number, minSeg:number, stroke:number, color:Color, texture:string|Texture2D);

        /**
         * initializes a motion streak with fade in seconds, minimum segments, stroke's width, color and texture filename or texture
         * @param {Number} fade time to fade
         * @param {Number} minSeg minimum segment size
         * @param {Number} stroke stroke's width
         * @param {Number} color
         * @param {string|cc.Texture2D} texture texture filename or texture
         * @return {Boolean}
         */
        public initWithFade(fade:number, minSeg:number, stroke:number, color:Color, texture:string|Texture2D):boolean;

        /**
         * Gets the texture.
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Set the texture.
         * @param {cc.Texture2D} texture
         */
        public setTexture(texture:Texture2D):void;

        /**
         * Gets the blend func.
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Set the blend func.
         * @param {Number} src
         * @param {Number} dst
         */
        public setBlendFunc(func:BlendFunc);
        public setBlendFunc(src:number, dst:number);

        /**
         * Gets opacity.
         * @warning cc.MotionStreak.getOpacity has not been supported.
         * @returns {number}
         */
        public getOpacity():number;

        /**
         * Set opacity.
         * @warning cc.MotionStreak.setOpacity has not been supported.
         * @param opacity
         */
        public setOpacity(opacity:number):void;

        /**
         * Set opacity modify RGB.
         * @warning cc.MotionStreak.setOpacityModifyRGB has not been supported.
         * @param value
         */
        public setOpacityModifyRGB(value:boolean):void;

        /**
         * Checking OpacityModifyRGB.
         * @returns {boolean}
         */
        public isOpacityModifyRGB():boolean;

        /**
         * Get Fade Time.
         * @returns {Number}
         */
        public getFadeTime():number;

        /**
         * Set Fade Time.
         * @param {Number} fade
         */
        public setFadeTime(fade:number):void;

        /**
         * Get Minimum Segment Size.
         * @return {Number}
         */
        public getMinSeg():number;

        /**
         * Set Minimum Segment Size.
         * @param {Number} minSeg
         */
        public setMinSeg(minSeg:number):void;

        /**
         * Checking fast mode.
         * @returns {boolean}
         */
        public isFastMode():boolean;

        /**
         * set fast mode
         * @param {Boolean} fastMode
         */
        public setFastMode(fastMode:boolean):void;

        /**
         * Checking starting position initialized.
         * @returns {boolean}
         */
        public isStartingPositionInitialized():boolean;

        /**
         * Set Starting Position Initialized.
         * @param {Boolean} startingPositionInitialized
         */
        public setStartingPositionInitialized(startingPositionInitialized:boolean):void;

        /**
         * Get stroke.
         * @returns {Number} stroke
         */
        public getStroke():number;

        /**
         * Set stroke.
         * @param {Number} stroke
         */
        public setStroke(stroke:number):void;

        /**
         * color used for the tint
         * @param {cc.Color} color
         */
        public tintWithColor(color:Color):void;

        /**
         * Remove all living segments of the ribbon
         */
        public reset():void;

        /**
         * Set the position. <br />
         *
         * @param {cc.Point|Number} position
         * @param {Number} [yValue=undefined] If not exists, the first parameter must be cc.Point.
         */
        public setPosition(pos:Vec2):void;
        public setPosition(x:number, y:number):void;

        /**
         * Gets the position.x
         * @return {Number}
         */
        public getPositionX():number;

        /**
         * Set the position.x
         * @param {Number} x
         */
        public setPositionX(x:number):void;

        /**
         * Gets the position.y
         * @return {Number}
         */
        public getPositionY():number;

        /**
         * Set the position.y
         * @param {Number} y
         */
        public setPositionY(y:number):void;

        /**
         * <p>schedules the "update" method.                                                                           <br/>
         * It will use the order number 0. This method will be called every frame.                                  <br/>
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.<br/>
         * Only one "update" method could be scheduled per node.</p>
         * @param {Number} delta
         */
        public update(delta:number):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/motion-streak/CCSGMotionStreakWebGLRenderCmd.js
    //  NOTE: This file is ignored.
    //+--------------------------------------------------------------------------------
}
