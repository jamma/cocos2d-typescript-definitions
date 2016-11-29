/// <reference path="../../cocos-creator-lib.d.ts" />


declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionGrid.js
    //+--------------------------------------------------------------------------------

    /**
     * Base class for Grid actions
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration
     * @param {cc.Size} gridSize
     */
    // cc.GridAction = cc.ActionInterval.extend(/** @lends cc.GridAction# */{
    export class GridAction extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         */
        // ctor:function(duration, gridSize){
        public constructor(duration:number, gridSize:Size);

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.Action}
         */
        // clone:function(){
        public clone():GridAction;

        /**
         * called before the action start. It will also set the target.
         *
         * @param {_ccsg.Node} target
         */
        public startWithTarget(target:Node):void;

        /**
         * Create a cc.ReverseTime action. Opposite with the original motion trajectory.
         * @return {cc.ReverseTime}
         */
        public reverse():ReverseTime;

        /**
         * Initializes the action with size and duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * Returns the grid.
         * @return {cc.GridBase}
         */
        public getGrid():GridBase;
    }

    /**
     * creates the action with size and duration
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @return {cc.GridAction}
     */
    // cc.gridAction = function (duration, gridSize) {
    export function gridAction(duration:number, gridSize:Size):GridAction;

    /**
     * Base class for cc.Grid3D actions. <br/>
     * Grid3D actions can modify a non-tiled grid.
     * @class
     * @extends cc.GridAction
     */
    export class Grid3DAction extends GridAction {
        /**
         * returns the grid
         * @return {cc.Grid3D}
         */
        public getGrid():Grid3D;

        /**
         * get rect of the grid
         * @return {cc.Rect} rect
         */
        public getGridRect():Rect;

        // /**
        //  * returns the vertex than belongs to certain position in the grid.                           <br/>
        //  * It will be deprecated in future, please use getVertex instead.
        //  * @param {cc.Vec2} position
        //  * @return {cc.Vertex3F}
        //  */
        // public vertex(position:Vec2):Vertex3F;

        /**
         * returns the vertex than belongs to certain position in the grid
         * @param {cc.Vec2} position
         * @return {cc.Vertex3F}
         */
        public getVertex(position:Vec2):Vertex3F;

        // /**
        //  * returns the non-transformed vertex than belongs to certain position in the grid          <br/>
        //  * It will be deprecated in future, please use getVertex instead.
        //  * @param {cc.Vec2} position
        //  * @return {cc.Vertex3F}
        //  */
        // public originalVertex(position:Vec2):Vertex3F;

        /**
         * returns the non-transformed vertex that belongs to certain position in the grid
         * @param {cc.Vec2} position
         * @return {cc.Vertex3F}
         */
        public getOriginalVertex(position:Vec2):Vertex3F;

        /**
         * sets a new vertex to a certain position of the grid
         * @param {cc.Vec2} position
         * @param {cc.Vertex3F} vertex
         */
        public setVertex(position:Vec2, vertex:Vertex3F):void;
    }

    /**
     * creates the action with size and duration
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @return {cc.Grid3DAction}
     */
    export function grid3DAction(duration:number, gridSize:Size):Grid3DAction;


    /**
     * Base class for cc.TiledGrid3D actions.
     * @class
     * @extends cc.GridAction
     */
    export class TiledGrid3DAction extends GridAction {

        // /**
        //  * returns the tile that belongs to a certain position of the grid        <br/>
        //  * It will be deprecated in future, please use getTile instead.
        //  * @param {cc.Vec2} position
        //  * @return {cc.Quad3}
        //  */
        // public tile(position:Vec2):Quad3;

        /**
         * returns the tile that belongs to a certain position of the grid
         * @param {cc.Vec2} position
         * @return {cc.Quad3}
         */
        public getTile(position:Vec2):Quad3;

        // /**
        //  * returns the non-transformed tile that belongs to a certain position of the grid               <br/>
        //  * It will be deprecated in future, please use getOriginalTile instead.
        //  * @param {cc.Vec2} position
        //  * @return {cc.Quad3}
        //  */
        // public originalTile(position:Vec2):Quad3;

        /**
         * returns the non-transformed tile that belongs to a certain position of the grid
         * @param {cc.Vec2} position
         * @return {cc.Quad3}
         */
        public getOriginalTile(position:Vec2):Quad3;

        /**
         * sets a new tile to a certain position of the grid
         * @param {cc.Vec2} position
         * @param {cc.Quad3} coords
         */
        public setTile(position:Vec2, coords:Quad3):void;

        /**
         * returns the grid
         * @return {cc.TiledGrid3D}
         */
        public getGrid():TiledGrid3D;
    }

    /**
     * Creates the action with duration and grid size
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @return {cc.TiledGrid3DAction}
     */
    export function tiledGrid3DAction(duration:number, gridSize:Size):TiledGrid3DAction;

    /**
     * <p>
     * cc.StopGrid action.                                               <br/>
     * @warning Don't call this action if another grid action is active.                 <br/>
     * Call if you want to remove the the grid effect. Example:                          <br/>
     * cc.sequence(Lens.action(...), cc.stopGrid(...), null);              <br/>
     * </p>
     * @class
     * @extends cc.ActionInstant
     */
    export class StopGrid extends ActionInstant {

        /**
         * called before the action start. It will also set the target.
         *
         * @param {_ccsg.Node} target
         */
        public startWithTarget(target:Node):void;
    }

    /**
     * Allocates and initializes the action
     * @function
     * @return {cc.StopGrid}
     */
    export function stopGrid():StopGrid;


    /**
     * cc.ReuseGrid action
     * @class
     * @extends cc.ActionInstant
     * @param {Number} times
     */
    export class ReuseGrid extends ActionInstant { 
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} times
         */
        public constructor(times:number);

        /**
         * initializes an action with the number of times that the current grid will be reused
         * @param {Number} times
         * @return {Boolean}
         */
        public initWithTimes(times:number):boolean;

        /**
         * called before the action start. It will also set the target.
         *
         * @param {_ccsg.Node} target
         */
        public startWithTarget(target:Node):void;
    }

    /**
     * creates an action with the number of times that the current grid will be reused
     * @function
     * @param {Number} times
     * @return {cc.ReuseGrid}
     */
    export function reuseGrid(times:number):ReuseGrid;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionGrid3D.js
    //+--------------------------------------------------------------------------------
    /**
     * cc.Waves3D action. <br />
     * Reference the test cases (Effects Advanced Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     */
    export class Waves3D extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a wave 3d action with duration, grid size, waves and amplitude.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         */
        public constructor(duration:number, gridSize:Size, waves:number, amplitude:number);

        /**
         * get Amplitude
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set Amplitude
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get Amplitude Rate
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * set Amplitude Rate
         * @param {Number} amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /**
         * initializes an action with duration, grid size, waves and amplitude
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, waves:number, amplitude:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * Create a wave 3d action with duration, grid size, waves and amplitude.
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @return {Waves3D}
     */
    export function waves3D(duration:number, gridSize:Size, waves:number, amplitude:number):Waves3D;

    /**
     * cc.FlipX3D action. <br />
     * Flip around. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     */
    export class FlipX3D extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a Flip X 3D action with duration.
         * @param {Number} duration
         */
        public constructor(duration:number);

        // /**
        //  * initializes the action with duration
        //  * @param {Number} duration
        //  * @return {Boolean}
        //  */
        // public initWithDuration(duration:number):boolean;

        /**
         * initializes the action with gridSize and duration
         * @param {cc.Size} gridSize
         * @param {Number} duration
         * @return {Boolean}
         */
        public initWithSize(gridSize:Size, duration:number):boolean;
    }

    /**
     * Create a Flip X 3D action with duration. <br />
     * Flip around.
     * @function
     * @param {Number} duration
     * @return {cc.FlipX3D}
     */
    export function flipX3D(duration:number):FlipX3D;

    /**
     * cc.FlipY3D action. <br />
     * Upside down. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.FlipX3D
     * @param {Number} duration
     */
    export class FlipY3D extends FlipX3D {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a flip Y 3d action with duration.
         * @param {Number} duration
         */
        public constructor(duration:number);
    }

    /**
     * Create a flip Y 3d action with duration. <br />
     * Upside down.
     * @function
     * @param {Number} duration
     * @return {cc.FlipY3D}
     */
    export function flipY3D(duration:number):FlipY3D;

    /**
     * cc.Lens3D action. <br />
     * Upside down. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Vec2} position
     * @param {Number} radius
     */
    export class Lens3D extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates a lens 3d action with center position, radius.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {cc.Vec2} position
         * @param {Number} radius
         */
        public constructor(duration:number, gridSize:Size, position:Vec2, radius:number);

        /**
         * Get lens center position
         * @return {Number}
         */
        public getLensEffect():number

        /**
         * Set lens center position
         * @param {Number} lensEffect
         */
        public setLensEffect(lensEffect:number):void;

        /**
         * Set whether lens is concave
         * @param {Boolean} concave
         */
        public setConcave(concave:boolean):void;

        /**
         * get Position
         * @return {cc.Vec2}
         */
        public getPosition():Vec2;

        /**
         * set Position
         * @param {cc.Vec2} position
         */
        public setPosition(position:Vec2):void;

        /**
         * initializes the action with center position, radius, a grid size and duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {cc.Vec2} position
         * @param {Number} radius
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, position:Vec2, radius:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates a lens 3d action with center position, radius
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Vec2} position
     * @param {Number} radius
     * @return {cc.Lens3D}
     */
    export function lens3D(duration:number, gridSize:Size, position:Vec2, radius:number):Lens3D;

    /**
     * cc.Ripple3D action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Vec2} position
     * @param {Number} radius
     * @param {Number} waves
     * @param {Number} amplitude
     */
    export class Ripple3D extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates a ripple 3d action with radius, number of waves, amplitude.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {cc.Vec2} position
         * @param {Number} radius
         * @param {Number} waves
         * @param {Number} amplitude
         */
        public constructor(duration:number, gridSize:Size, position:Vec2, radius:number, waves:number, amplitude:number);

        /**
         * get center position
         * @return {cc.Vec2}
         */
        public getPosition():Vec2;

        /**
         * set center position
         * @param {cc.Vec2} position
         */
        public setPosition(position:Vec2):void;

        /**
         * get Amplitude
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set Amplitude
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get Amplitude rate
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * get amplitude rate
         * @param {Number} amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /**
         * initializes the action with radius, number of waves, amplitude, a grid size and duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {cc.Vec2} position
         * @param {Number} radius
         * @param {Number} waves
         * @param {Number} amplitude
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, position:Vec2, radius:number, waves:number, amplitude:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates a ripple 3d action with radius, number of waves, amplitude
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Vec2} position
     * @param {Number} radius
     * @param {Number} waves
     * @param {Number} amplitude
     * @return {cc.Ripple3D}
     */
    export function ripple3D(duration:number, gridSize:Size, position:Vec2, radius:number, waves:number, amplitude:number):Ripple3D;

    /**
     * cc.Shaky3D action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     */
    export class Shaky3D extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a shaky3d action with a range, shake Z vertices.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} range
         * @param {Boolean} shakeZ
         */
        public constructor(duration:number, gridSize:Size, range:number, shakeZ:boolean);

        /**
         * initializes the action with a range, shake Z vertices, a grid and duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} range
         * @param {Boolean} shakeZ
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, range:number, shakeZ:boolean):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates the action with a range, shake Z vertices, a grid and duration
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     * @return {cc.Shaky3D}
     */
    export function shaky3D(duration:number, gridSize:Size, range:number, shakeZ:boolean):Shaky3D;

    /**
     * cc.Liquid action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     */
    export class Liquid extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a liquid action with amplitude, a grid and duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         */
        public constructor(duration:number, gridSize:Size, waves:number, amplitude:number);

        /**
         * get amplitude
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set amplitude
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get amplitude rate
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * set amplitude rate
         * @param {Number} amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /**
         * initializes the action with amplitude, a grid and duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, waves:number, amplitude:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates the action with amplitude, a grid and duration
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @return {cc.Liquid}
     */
    export function liquid(duration:number, gridSize:Size, waves:number, amplitude:number):Liquid;


    /**
     * cc.Waves action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @param {Boolean} horizontal
     * @param {Boolean} vertical
     */
    export class Waves extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a wave action with amplitude, horizontal sin, vertical sin, a grid and duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         * @param {Boolean} horizontal
         * @param {Boolean} vertical
         */
        public constructor(duration:number, gridSize:Size, waves:number, amplitude:number, horizontal:boolean, vertical:boolean);

        /**
         * get amplitude
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set amplitude
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get amplitude rate
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * set amplitude rate
         * @param {Number} amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /**
         * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         * @param {Boolean} horizontal
         * @param {Boolean} vertical
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, waves:number, amplitude:number, horizontal:boolean, vertical:boolean):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * initializes the action with amplitude, horizontal sin, vertical sin, a grid and duration
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @param {Boolean} horizontal
     * @param {Boolean} vertical
     * @return {cc.Waves}
     */
    export function waves(duration:number, gridSize:Size, waves:number, amplitude:number, horizontal:boolean, vertical:boolean):Waves;

    /** @brief  */
    /**
     * cc.Twirl action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.Grid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Vec2} position
     * @param {Number} twirls
     * @param {Number} amplitude
     */
    export class Twirl extends Grid3DAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a grid 3d action with center position, number of twirls, amplitude, a grid size and duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {cc.Vec2} position
         * @param {Number} twirls
         * @param {Number} amplitude
         */
        public constructor(duration:number, gridSize:Size, position:Vec2, twirls:number, amplitude:number);

        /**
         * get twirl center
         * @return {cc.Vec2}
         */
        public getPosition():Vec2;

        /**
         * set twirl center
         * @param {cc.Vec2} position
         */
        public setPosition(position:Vec2):void;

        /**
         * get amplitude
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set amplitude
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get amplitude rate
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * set amplitude rate
         * @param {Number} amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /** initializes the action with center position, number of twirls, amplitude, a grid size and duration */
        public initWithDuration(duration:number, gridSize:Size, position:Vec2, twirls:number, amplitude:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates the action with center position, number of twirls, amplitude, a grid size and duration
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {cc.Vec2} position
     * @param {Number} twirls
     * @param {Number} amplitude
     * @return {cc.Twirl}
     */
    export function twirl(duration:number, gridSize:Size, position:Vec2, twirls:number, amplitude:number):Twirl;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionPageTurn3D.js
    //+--------------------------------------------------------------------------------
    /**
     * <p>
     *     This action simulates a page turn from the bottom right hand corner of the screen.     <br/>
     *     It's not much use by itself but is used by the PageTurnTransition.                     <br/>
     *                                                                                            <br/>
     *     Based on an original paper by L Hong et al.                                            <br/>
     *     http://www.parc.com/publication/1638/turning-pages-of-3d-electronic-books.html
     * </p>
     * @class
     * @extends cc.Grid3DAction
     */
    export class PageTurn3D extends Grid3DAction {
        public consructor(duration:number, gridSize:Size);
        public getGrid():Grid3D;

        public clone():PageTurn3D;
    }

    /**
     * create PageTurn3D action
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @return {cc.PageTurn3D}
     */
    export function pageTurn3D(duration:number, gridSize:Size):PageTurn3D;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionTiledGrid.js
    //+--------------------------------------------------------------------------------

    /**
     * cc.ShakyTiles3D action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     */
    export class ShakyTiles3D extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * Creates the action with a range, whether or not to shake Z vertices, a grid size, and duration.
    	 * @param {Number} duration
    	 * @param {cc.Size} gridSize
    	 * @param {Number} range
    	 * @param {Boolean} shakeZ
    	 */
        public constructor(duration:number, gridSize:Size, range:number, shakeZ:boolean);

        /**
         * Initializes the action with a range, whether or not to shake Z vertices, a grid size, and duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} range
         * @param {Boolean} shakeZ
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, range:number, shakeZ:boolean):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * Creates the action with a range, whether or not to shake Z vertices, a grid size, and duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shakeZ
     * @return {cc.ShakyTiles3D}
     */
    export function shakyTiles3D(duration:number, gridSize:Size, range:number, shakeZ:boolean):ShakyTiles3D;

    /**
     * cc.ShatteredTiles3D action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shatterZ
     */
    export class ShatteredTiles3D extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * Creates the action with a range, whether of not to shatter Z vertices, a grid size and duration.
    	 * @param {Number} duration
    	 * @param {cc.Size} gridSize
    	 * @param {Number} range
    	 * @param {Boolean} shatterZ
    	 */
        public constructor(duration:number, gridSize:Size, range:number, shatterZ:boolean);

        /**
         * Initializes the action with a range, whether or not to shatter Z vertices, a grid size and duration. <br />
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} range
         * @param {Boolean} shatterZ
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, range:number, shatterZ:boolean):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * Creates the action with a range, whether of not to shatter Z vertices, a grid size and duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} range
     * @param {Boolean} shatterZ
     * @return {cc.ShatteredTiles3D}
     */
    export function shatteredTiles3D(duration:number, gridSize:Size, range:number, shatterZ:boolean):ShatteredTiles3D;

    /**
     * A Tile composed of position, startPosition and delta.
     * @Class
     * @constructor
     * @param {cc.Vec2} [position=cc.p(0,0)]
     * @param {cc.Vec2} [startPosition=cc.p(0,0)]
     * @param {cc.Size} [delta=cc.p(0,0)]
     */
    export class Tile {
        public position:Vec2;
        public startPosition:Vec2;
        public delta:Size;

        public constructor(position:Vec2, startPosition:Vec2, delta:Size);
    }

    /**
     * cc.ShuffleTiles action, Shuffle the tiles in random order. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} seed
     */
    // cc.ShuffleTiles = cc.TiledGrid3DAction.extend(/** @lends cc.ShuffleTiles# */{
    export class ShuffleTiles extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * Creates the action with a random seed, the grid size and the duration.
    	 * @param {Number} duration
    	 * @param {cc.Size} gridSize
    	 * @param {Number} seed
    	 */
        public constructor(duration:number, gridSize:Size, seed:number);

        /**
         * Initializes the action with a random seed, the grid size and the duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} seed
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, seed:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * Shuffle
         * @param {Array} array
         * @param {Number} len
         */
        public shuffle(array:Tile[], len:number):void;

        /**
         * Get Delta
         * @param {cc.Size} pos
         */
        public getDelta(pos:Size):Size;

        /**
         * Place Tile
         * @param {cc.Vec2} pos
         * @param {cc.Tile} tile
         */
        public placeTile(pos:Vec2, tile:Tile):void;
    }

    /**
     * Creates the action with a random seed, the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} seed
     * @return {cc.ShuffleTiles}
     */
    export function shuffleTiles(duration:number, gridSize:Size, seed:number):ShuffleTiles;

    /**
     * cc.FadeOutTRTiles action. Fades out the tiles in a Top-Right direction. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     */
    export class FadeOutTRTiles extends TiledGrid3DAction {
        /**
         * Test function
         * @param {cc.Vec2} pos
         * @param {Number} time
         */
        public testFunc(pos:Vec2, time:number):number;

        /**
         * Turn on Tile
         * @param {cc.Vec2} pos
         */
        public turnOnTile(pos:Vec2):void;

        /**
         * Turn Off Tile
         * @param {cc.Vec2} pos
         */
        public turnOffTile(pos:Vec2):void;

        /**
         * Transform tile
         * @param {cc.Vec2} pos
         * @param {Number} distance
         */
        public transformTile(pos:Vec2, distance:number):void;

    }

    /**
     * Creates the action with the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param duration
     * @param gridSize
     * @return {cc.FadeOutTRTiles}
     */
    export function fadeOutTRTiles(duration:number, gridSize:Size):FadeOutTRTiles;

    /**
     * cc.FadeOutBLTiles action. Fades out the tiles in a Bottom-Left direction. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.FadeOutTRTiles
     */
    export class FadeOutBLTiles extends FadeOutTRTiles {
        /**
         * Test function
         * @param {cc.Vec2} pos
         * @param {Number} time
         */
        public testFunc(pos:Vec2, time:number):number;
    }

    /**
     * Creates the action with the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param duration
     * @param gridSize
     * @return {cc.FadeOutBLTiles}
     */
    export function fadeOutBLTiles(duration:number, gridSize:Size):FadeOutBLTiles;

    /**
     * cc.FadeOutUpTiles action. Fades out the tiles in upwards direction. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.FadeOutTRTiles
     */
    export class FadeOutUpTiles extends FadeOutTRTiles {
        /**
         * Test function
         * @param {cc.Vec2} pos
         * @param {Number} time
         */
        public testFunc(pos:Vec2, time:number):number;

        public transformTile(pos:Vec2, distance:number):void;
    }

    /**
     * Creates the action with the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @return {cc.FadeOutUpTiles}
     */
    export function fadeOutUpTiles(duration:number, gridSize:Size):FadeOutUpTiles;


    /**
     * cc.FadeOutDownTiles action. Fades out the tiles in downwards direction. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.FadeOutUpTiles
     */
    export class FadeOutDownTiles extends FadeOutUpTiles {
        /**
         * Test function
         * @param {cc.Vec2} pos
         * @param {Number} time
         */
        public testFunc(pos:Vec2, time:number):number;
    }

    /**
     * Creates the action with the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @return {cc.FadeOutDownTiles}
     */
    export function fadeOutDownTiles(duration:number, gridSize:Size):FadeOutDownTiles;

    /**
     * cc.TurnOffTiles action.<br/>
     * Turn off the files in random order. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number|Null} [seed=0]
     * @example
     * // turnOffTiles without seed
     * var toff = new cc.TurnOffTiles(this._duration, cc.size(x, y));
     *
     * // turnOffTiles with seed
     * var toff = new cc.TurnOffTiles(this._duration, cc.size(x, y), 0);
     */
    export class TurnOffTiles extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * Creates the action with a random seed, the grid size and the duration.
    	 * @param {Number} duration
    	 * @param {cc.Size} gridSize
    	 * @param {Number|Null} [seed=0]
    	 */
        public constructor(duration:number, gridSize:Size, seed?:number);

        /**
         * Initializes the action with a random seed, the grid size and the duration.
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number|Null} [seed=0]
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, seed?:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * Shuffle
         * @param {Array} array
         * @param {Number} len
         */
        public shuffle(array:Tile[], len:number):void;

        /**
         * Turn on tile.
         * @param {cc.Vec2} pos
         */
        public turnOnTile(pos:Vec2):void;

        /**
         * Turn off title.
         * @param {cc.Vec2} pos
         */
        public turnOffTile(pos:Vec2):void;
    }

    /**
     * Creates the action with a random seed, the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number|Null} [seed=0]
     * @return {cc.TurnOffTiles}
     * @example
     * // example
     * // turnOffTiles without seed
     * var toff = cc.turnOffTiles(this._duration, cc.size(x, y));
     *
     * // turnOffTiles with seed
     * var toff = cc.turnOffTiles(this._duration, cc.size(x, y), 0);
     */
    export function turnOffTiles(duration:number, gridSize:Size, seed?:number):TurnOffTiles;

    /**
     * cc.WavesTiles3D action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     */
    export class WavesTiles3D extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * creates the action with a number of waves, the waves amplitude, the grid size and the duration.
    	 * @param {Number} duration
    	 * @param {cc.Size} gridSize
    	 * @param {Number} waves
    	 * @param {Number} amplitude
    	 */
        public constructor(duration:number, gridSize:Size, waves:number, amplitude:number);

        /**
         * get amplitude of waves
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set amplitude of waves
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get amplitude rate of waves
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * set amplitude rate of waves
         * @param {Number} amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /**
         * initializes the action with a number of waves, the waves amplitude, the grid size and the duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} waves
         * @param {Number} amplitude
         * @return {Boolean}
         */
        public initWithDuration(duration:number, gridSize:Size, waves:number, amplitude:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates the action with a number of waves, the waves amplitude, the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} waves
     * @param {Number} amplitude
     * @return {cc.WavesTiles3D}
     */
    export function wavesTiles3D(duration:number, gridSize:Size, waves:number, amplitude:number):WavesTiles3D;

    /**
     * cc.JumpTiles3D action.  A sin function is executed to move the tiles across the Z axis. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} numberOfJumps
     * @param {Number} amplitude
     */
    export class JumpTiles3D extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * creates the action with the number of jumps, the sin amplitude, the grid size and the duration.
    	 * @param {Number} duration
    	 * @param {cc.Size} gridSize
    	 * @param {Number} numberOfJumps
    	 * @param {Number} amplitude
    	 */
        public constructor(duration:number, gridSize:Size, numberOfJumps:number, amplitude:number);

        /**
         * get amplitude of the sin
         * @return {Number}
         */
        public getAmplitude():number;

        /**
         * set amplitude of the sin
         * @param {Number} amplitude
         */
        public setAmplitude(amplitude:number):void;

        /**
         * get amplitude rate
         * @return {Number}
         */
        public getAmplitudeRate():number;

        /**
         * set amplitude rate
         * @param amplitudeRate
         */
        public setAmplitudeRate(amplitudeRate:number):void;

        /**
         * initializes the action with the number of jumps, the sin amplitude, the grid size and the duration
         * @param {Number} duration
         * @param {cc.Size} gridSize
         * @param {Number} numberOfJumps
         * @param {Number} amplitude
         */
        public initWithDuration(duration:number, gridSize:Size, numberOfJumps:number, amplitude:number):boolean;
        public initWithDuration(duration:number, gridSize:Size):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates the action with the number of jumps, the sin amplitude, the grid size and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {cc.Size} gridSize
     * @param {Number} numberOfJumps
     * @param {Number} amplitude
     * @return {cc.JumpTiles3D}
     */
    export function jumpTiles3D(duration:number, gridSize:Size, numberOfJumps:number, amplitude:number):JumpTiles3D;

    /**
     * cc.SplitRows action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {Number} rows
     */
    export class SplitRows extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * creates the action with the number of rows to split and the duration.
    	 * @param {Number} duration
    	 * @param {Number} rows
    	 */
        public constructor(duration:number, rows:number);

        /**
         * initializes the action with the number of rows to split and the duration
         * @param {Number} duration
         * @param {Number} rows
         * @return {Boolean}
         */
        public initWithDuration(duration:number, rows:number):boolean;
        public initWithDuration(duration:number):boolean;
    }

    /**
     * creates the action with the number of rows to split and the duration. <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {Number} rows
     * @return {cc.SplitRows}
     */
    export function splitRows(duration:number, rows:number):SplitRows;

    /**
     * cc.SplitCols action. <br />
     * Reference the test cases (Effects Test)
     * @class
     * @extends cc.TiledGrid3DAction
     * @param {Number} duration
     * @param {Number} cols
     */
    export class SplitCols extends TiledGrid3DAction {
    	/**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
    	 * Creates the action with the number of columns to split and the duration.
    	 * @param {Number} duration
    	 * @param {Number} cols
    	 */
        public constructor(duration:number, cols:number);

        /**
         * initializes the action with the number of columns to split and the duration
         * @param {Number} duration
         * @param {Number} cols
         * @return {Boolean}
         */
        public initWithDuration(duration:number, cols:number):boolean;
    }

    /**
     * creates the action with the number of columns to split and the duration.  <br />
     * Reference the test cases (Effects Test)
     * @function
     * @param {Number} duration
     * @param {Number} cols
     * @return {cc.SplitCols}
     */
    export function splitCols(duration:number, cols:number):SplitCols;
}

