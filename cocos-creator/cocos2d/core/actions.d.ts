/// <reference path="../../cocos-creator-lib.d.ts" />


declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCAction.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en Base class cc.Action for action classes.
     * !#zh Action 类是所有动作类型的基类。
     * @class Action
     */
    export class Action {
        /**
         * !#en Default Action tag.
         * !#zh 默认动作标签。
         * @property TAG_INVALID
         * @constant
         * @static
         * @type {Number}
         * @default -1
         */
        public static readonly TAG_INVALID:number;

        // //**************Public Functions***********

        // ctor:function () {
        //     this.originalTarget = null;
        //     this.target = null;
        //     this.tag = cc.Action.TAG_INVALID;
        // },
        public constructor();

        /**
         * !#en
         * to copy object with deep copy.
         * returns a clone of action.
         * !#zh 返回一个克隆的动作。
         * @method clone
         * @return {Action}
         */
        // clone:function () {
        public clone():Action;

        /**
         * !#en
         * return true if the action has finished.
         * !#zh 如果动作已完成就返回 true。
         * @method isDone
         * @return {Boolean}
         */
        public isDone():boolean;

        // called before the action start. It will also set the target.
        public startWithTarget(target:Node):void;

        // called after the action has finished. It will set the 'target' to nil.
        public stop():void;

        // called every frame with it's delta time. <br />
        public step(dt:number):void;

        // Called once per frame. Time is the number of seconds of a frame interval.
        public update(dt:number):void;

        /**
         * !#en get the target.
         * !#zh 获取当前目标节点。
         * @method getTarget
         * @return {Node}
         */
        public getTarget():Node;

        /**
         * !#en The action will modify the target properties.
         * !#zh 设置目标节点。
         * @method setTarget
         * @param {Node} target
         */
        public setTarget(target:Node):void;

        /**
         * !#en get the original target.
         * !#zh 获取原始目标节点。
         * @method getOriginalTarget
         * @return {Node}
         */
        public getOriginalTarget():Node;

        // Set the original target, since target can be nil.
        // Is the target that were used to run the action.
        // Unless you are doing something complex, like cc.ActionManager, you should NOT call this method.
        public setOriginalTarget(originalTarget:Node):void;

        /**
         * !#en get tag number.
         * !#zh 获取用于识别动作的标签。
         * @method getTag
         * @return {Number}
         */
        public getTag():number; 

        /**
         * !#en set tag number.
         * !#zh 设置标签，用于识别动作。
         * @method setTag
         * @param {Number} tag
         */
        public setTag(tag:number):void;

        // Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
        // and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
        // This is a hack, and should be removed once JSB fixes the retain/release bug.
        public retain():void;

        // Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
        // and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
        // This is a hack, and should be removed once JSB fixes the retain/release bug.
        public release():void;
    }


    /**
     * !#en
     * Base class actions that do have a finite time duration. <br/>
     * Possible actions: <br/>
     * - An action with a duration of 0 seconds. <br/>
     * - An action with a duration of 35.5 seconds.
     *
     * Infinite time actions are valid
     * !#zh 有限时间动作，这种动作拥有时长 duration 属性。
     * @class FiniteTimeAction
     * @extends Action
     */
    // cc.FiniteTimeAction = cc.Action.extend({
    export class FiniteTimeAction extends Action {
        public constructor();

        /**
         * !#en get duration of the action. (seconds).
         * !#zh 获取动作以秒为单位的持续时间。
         * @method getDuration
         * @return {Number}
         */
        public getDuration():number;

        /**
         * !#en set duration of the action. (seconds).
         * !#zh 设置动作以秒为单位的持续时间。
         * @method setDuration
         * @param {Number} duration
         */
        // setDuration:function (duration) {
        public setDuration(duration:number):void;

        /**
         * !#en
         * Returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * !#zh 返回一个新的动作，执行与原动作完全相反的动作。
         * @method reverse
         * @return {Null}
         */
        public reverse():FiniteTimeAction;

        /**
         * !#en
         * to copy object with deep copy.
         * returns a clone of action.
         * !#zh 返回一个克隆的动作。
         * @method clone
         * @return {FiniteTimeAction}
         */
        public clone():FiniteTimeAction;
    }

    /**
     * @module cc
     */

    /*
    * Changes the speed of an action, making it take longer (speed > 1)
    * or less (speed < 1) time. <br/>
    * Useful to simulate 'slow motion' or 'fast forward' effect.
    *
    * @warning This action can't be Sequenceable because it is not an cc.IntervalAction
    * @class Speed
    * @extends Action
    * @constructor
    * @param {ActionInterval} action
    * @param {Number} speed
    */
    export class Speed extends Action {
        public constructor(action:ActionInterval, speed:number);

        /*
        * Gets the current running speed. <br />
        * Will get a percentage number, compared to the original speed.
        *
        * @method getSpeed
        * @return {Number}
        */
        public getSpeed():number;

        /*
        * alter the speed of the inner function in runtime.
        * @method setSpeed
        * @param {Number} speed
        */
        public setSpeed(speed:number):void;

        /*
        * initializes the action.
        * @method initWithAction
        * @param {ActionInterval} action
        * @param {Number} speed
        * @return {Boolean}
        */
        public initWithAction(action:ActionInterval, speed:number):boolean;

        public clone():Speed;

        public startWithTarget(target:Node):void;

        public stop():void;

        public step(dt:number):void;

        public isDone():boolean;

        public reverse():Speed;

        /*
        * Set inner Action.
        * @method setInnerAction
        * @param {ActionInterval} action
        */
        public setInnerAction(action:ActionInterval):void;

        /*
        * Get inner Action.
        * @method getInnerAction
        * @return {ActionInterval}
        */
        public getInnerAction():ActionInterval;
    }

    /**
     * @module cc
     */

    /**
     * !#en
     * Creates the speed action which changes the speed of an action, making it take longer (speed > 1)
     * or less (speed < 1) time. <br/>
     * Useful to simulate 'slow motion' or 'fast forward' effect.
     * !#zh 修改目标动作的速率。
     * @warning This action can't be Sequenceable because it is not an cc.IntervalAction
     *
     * @method speed
     * @param {ActionInterval} action
     * @param {Number} speed
     * @return {Action}
     * @example
     * // change the target action speed;
     * var action = cc.scaleTo(0.2, 1, 0.6);
     * var newAction = cc.speed(action, 0.5);
     */
    export function speed(action:ActionInterval, speed:number):Speed;

    /*
    * cc.Follow is a follow action which makes its target follows another node.
    *
    * @example
    * //example
    * //Instead of using cc.Camera as a "follower", use this action instead.
    * layer.runAction(cc.follow(hero));
    *
    * @property {Number}  leftBoundary - world leftBoundary.
    * @property {Number}  rightBoundary - world rightBoundary.
    * @property {Number}  topBoundary - world topBoundary.
    * @property {Number}  bottomBoundary - world bottomBoundary.
    *
    * @param {_ccsg.Node} followedNode
    * @param {Rect} rect
    * @example
    * // creates the action with a set boundary
    * var sprite = new _ccsg.Sprite("spriteFileName");
    * var followAction = new cc.Follow(sprite, cc.rect(0, 0, s.width * 2 - 100, s.height));
    * this.runAction(followAction);
    *
    * // creates the action with no boundary set
    * var sprite = new _ccsg.Sprite("spriteFileName");
    * var followAction = new cc.Follow(sprite);
    * this.runAction(followAction);
    *
    * @class
    * @extends Action
    */
    export class Follow extends Action {

        // TODO: I'm not sure if these are supposed to be public or not, so comment out for now.
        // public leftBoundary:number;
        // public rightBoundary:number;
        // public topBoundary:number;
        // public bottomBoundary:number;

        /*
        * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
        * creates the action with a set boundary. <br/>
        * creates the action with no boundary set.
        * @param {_ccsg.Node} followedNode
        * @param {Rect} rect
        */
        public constructor(followedNode:Node, rect:Rect);

        public clone():Follow;

        /*
        * Get whether camera should be limited to certain area.
        *
        * @return {Boolean}
        */
        public isBoundarySet():boolean;

        /*
        * alter behavior - turn on/off boundary.
        *
        * @param {Boolean} value
        */
        public setBoudarySet(value:boolean):void;

        /*
        * initializes the action with a set boundary.
        *
        * @param {_ccsg.Node} followedNode
        * @param {Rect} [rect=]
        * @return {Boolean}
        */
        public initWithTarget(followedNode:Node, rect:Rect):boolean;

        public step(dt:number):void;

        public isDone():boolean;

        public stop():void;
    }

    /**
     * !#en Create a follow action which makes its target follows another node.
     * !#zh 追踪目标节点的位置。
     * @method follow
     * @param {Node} followedNode
     * @param {Rect} rect
     * @return {Action|Null} returns the cc.Follow object on success
     * @example
     * // example
     * // creates the action with a set boundary
     * var followAction = cc.follow(targetNode, cc.rect(0, 0, screenWidth * 2 - 100, screenHeight));
     * node.runAction(followAction);
     *
     * // creates the action with no boundary set
     * var followAction = cc.follow(targetNode);
     * node.runAction(followAction);
     */
    export function follow(followedNode:Node, rect:Rect):Follow;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionCatmullRom.js
    //+--------------------------------------------------------------------------------
    /*
    * Returns the Cardinal Spline position for a given set of control points, tension and time. <br />
    * CatmullRom Spline formula. <br />
    * s(-ttt + 2tt - t)P1 + s(-ttt + tt)P2 + (2ttt - 3tt + 1)P2 + s(ttt - 2tt + t)P3 + (-2ttt + 3tt)P3 + s(ttt - tt)P4
    *
    * @method cardinalSplineAt
    * @param {Vec2} p0
    * @param {Vec2} p1
    * @param {Vec2} p2
    * @param {Vec2} p3
    * @param {Number} tension
    * @param {Number} t
    * @return {Vec2}
    */
    // cc.cardinalSplineAt = function (p0, p1, p2, p3, tension, t) {
    export function cardinalSplineAt(p0:Vec2, p1:Vec2, p2:Vec2, p3:Vec2, tension:number, t:number):Vec2;

    /*
    * returns a point from the array
    * @method getControlPointAt
    * @param {Array} controlPoints
    * @param {Number} pos
    * @return Vec2
    */
    export function getControlPointAt(controlPoints:Vec2[], pos:number):Vec2[];

    export function reverseControlPoints(controlPoints:Vec2[]):Vec2[];

    export function cloneControlPoints(controlPoints:Vec2[]):Vec2[];


    /*
    * Cardinal Spline path. http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline
    * Absolute coordinates.
    *
    * @class CardinalSplineTo
    * @extends ActionInterval
    * @constructor
    * @param {Number} duration
    * @param {Array} points array of control points
    * @param {Number} tension
    *
    * @example
    * //create a cc.CardinalSplineTo
    * var action1 = cc.cardinalSplineTo(3, array, 0);
    */
    export class CardinalSplineTo extends ActionInterval {
        public constructor(duration:number, points:Vec2[], tension:number);

        public initWithDuration(duration:number, points:Vec2[], tension:number):boolean;

        public clone():CardinalSplineTo;

        public startWithTarget(target:Node):void;

        public update(dt:number):void;

        public reverse():CardinalSplineTo;

        /*
        * update position of target
        * @method updatePosition
        * @param {Vec2} newPos
        */
        public updatePosition(newPos:Vec2):void;

        /*
        * Points getter
        * @method getPoints
        * @return {Array}
        */
        public getPoints():Vec2[];

        /**
         * Points setter
         * @method setPoints
         * @param {Array} points
         */
        public setPoints(points:Vec2[]):void;
    }

    /**
     * !#en Creates an action with a Cardinal Spline array of points and tension.
     * !#zh 按基数样条曲线轨迹移动到目标位置。
     * @method cardinalSplineTo
     * @param {Number} duration
     * @param {Array} points array of control points
     * @param {Number} tension
     * @return {ActionInterval}
     *
     * @example
     * //create a cc.CardinalSplineTo
     * var action1 = cc.cardinalSplineTo(3, array, 0);
     */
    export function cardinalSplineTo(duration:number, points:Vec2[], tension:number):CardinalSplineTo;

    /*
    * Cardinal Spline path. http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline
    * Relative coordinates.
    *
    * @class CardinalSplineBy
    * @extends CardinalSplineTo
    * @constructor
    * @param {Number} duration
    * @param {Array} points
    * @param {Number} tension
    *
    * @example
    * //create a cc.CardinalSplineBy
    * var action1 = cc.cardinalSplineBy(3, array, 0);
    */
    export class CardinalSplineBy extends CardinalSplineTo {
        public constructor(duration:number, points:Vec2[], tension:number);

        public startWithTarget(target:Node):void;

        public reverse():CardinalSplineBy;

        /**
         * update position of target
         * @method updatePosition
         * @param {Vec2} newPos
         */
        public updatePosition(newPos:Vec2):void;

        public clone():CardinalSplineBy;
    }

    /**
     * !#en Creates an action with a Cardinal Spline array of points and tension.
     * !#zh 按基数样条曲线轨迹移动指定的距离。
     * @method cardinalSplineBy
     * @param {Number} duration
     * @param {Array} points
     * @param {Number} tension
     *
     * @return {ActionInterval}
     */
    export function cardinalSplineBy(duration:number, points:Vec2[], tension:number):CardinalSplineBy;

    /*
    * An action that moves the target with a CatmullRom curve to a destination point.<br/>
    * A Catmull Rom is a Cardinal Spline with a tension of 0.5.  <br/>
    * http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
    * Absolute coordinates.
    *
    * @class CatmullRomTo
    * @extends CardinalSplineTo
    * @constructor
    * @param {Number} dt
    * @param {Array} points
    *
    * @example
    * var action1 = cc.catmullRomTo(3, array);
    */
    export class CatmullRomTo extends CardinalSplineTo {

        public consructor(dt:number, points:Vec2[]);

        public initWithDuration(dt:number, points:Vec2[]):boolean;

        public clone():CatmullRomTo;
    }

    /**
     * !#en Creates an action with a Cardinal Spline array of points and tension.
     * !#zh 按 Catmull Rom 样条曲线轨迹移动到目标位置。
     * @method catmullRomTo
     * @param {Number} dt
     * @param {Array} points
     * @return {ActionInterval}
     *
     * @example
     * var action1 = cc.catmullRomTo(3, array);
     */
    export function catmullRomTo(dt:number, points:Vec2[]):CatmullRomTo;

    /*
    * An action that moves the target with a CatmullRom curve by a certain distance.  <br/>
    * A Catmull Rom is a Cardinal Spline with a tension of 0.5.<br/>
    * http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
    * Relative coordinates.
    *
    * @class CatmullRomBy
    * @extends CardinalSplineBy
    * @constructor
    * @param {Number} dt
    * @param {Array} points
    *
    * @example
    * var action1 = cc.catmullRomBy(3, array);
    */
    export class CatmullRomBy extends CardinalSplineBy {
        public consructor(dt:number, points:Vec2[]);
        public initWithDuration(dt:number, points:Vec2[]):boolean;
        public clone():CatmullRomBy;
    }

    /**
     * !#en Creates an action with a Cardinal Spline array of points and tension.
     * !#zh 按 Catmull Rom 样条曲线轨迹移动指定的距离。
     * @method catmullRomBy
     * @param {Number} dt
     * @param {Array} points
     * @return {ActionInterval}
     * @example
     * var action1 = cc.catmullRomBy(3, array);
     */
    export function catmullRomBy(dt:number, points:Vec2[]):CatmullRomTo;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/ActionEase.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Base class for Easing actions.
     * !#zh 所有缓动动作基类，用于修饰 ActionInterval。
     * @class ActionEase
     * @extends ActionInterval
     * @param {ActionInterval} action
     */
    // cc.ActionEase = cc.ActionInterval.extend({
    export class ActionEase extends ActionInterval {
        public constructor(action:ActionInterval);

        /**
         * initializes the action
         *
         * @param {ActionInterval} action
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval):boolean;

        public clone():ActionEase;

        public startWithTarget(target:Node):void;

        public stop():void;

        public update(dt:number):void;

        public reverse():ActionEase;

        /**
         * Get inner Action.
         *
         * @return {ActionInterval}
         */
        public getInnerAction():ActionInterval;
    }

    export function actionEase(action:ActionInterval):ActionEase;

    /**
     * !#en Base class for Easing actions with rate parameters
     * !#zh 拥有速率属性的缓动动作基类。
     * @class EaseRateAction
     * @extends ActionEase
     * @param {ActionInterval} action
     * @param {Number} rate
     */
    export class EaseRateAction extends ActionEase {
        public constructor(action:ActionInterval, rate:number);

        /**
         * set rate value for the actions
         * @param {Number} rate
         */
        public setRate(rate:number):void;

        /** get rate value for the actions
         * @return {Number}
         */
        public getRate():number;

        /**
         * Initializes the action with the inner action and the rate parameter
         * @param {ActionInterval} action
         * @param {Number} rate
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval, rate:number):boolean;

        // NOTE: Satisfies the parent class' (ActionEase) method 
        public initWithAction(action:ActionInterval):boolean;

        public clone():EaseRateAction;
        public reverse():EaseRateAction;
    }

    export function easeRateAction(action:ActionInterval, rate:number):EaseRateAction;

    /**
     * @module cc
     */

    /*
    * cc.EaseIn action with a rate. From slow to fast.
    *
    * @class EaseIn
    * @extends EaseRateAction
    *
    * @deprecated since v3.0 please use action.easing(cc.easeIn(3));
    *
    * @example
    * action.easing(cc.easeIn(3.0));
    */
    export class EaseIn extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates the action easing object with the rate parameter. <br />
     * From slow to fast.
     * !#zh 创建 easeIn 缓动对象，由慢到快。
     * @method easeIn
     * @param {Number} rate
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeIn(3.0));
     */
    export function easeIn(dt:number):EaseIn;

    /*
    * cc.EaseOut action with a rate. From fast to slow.
    *
    * @class EaseOut
    * @extends EaseRateAction
    *
    * @deprecated since v3.0 please use action.easing(cc.easeOut(3))
    *
    * @example
    * action.easing(cc.easeOut(3.0));
    */
    export class EaseOut extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates the action easing object with the rate parameter. <br />
     * From fast to slow.
     * !#zh 创建 easeOut 缓动对象，由快到慢。
     * @method easeOut
     * @param {Number} rate
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeOut(3.0));
     */
    export function easeOut(dt:number):EaseIn;

    /*
    * cc.EaseInOut action with a rate. <br />
    * Slow to fast then to slow.
    * @class EaseInOut
    * @extends EaseRateAction
    *
    * @deprecated since v3.0 please use action.easing(cc.easeInOut(3.0))
    *
    * @example
    * action.easing(cc.easeInOut(3.0));
    */
    export class EaseInOut extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates the action easing object with the rate parameter. <br />
     * Slow to fast then to slow.
     * !#zh 创建 easeInOut 缓动对象，慢到快，然后慢。
     * @method easeInOut
     * @param {Number} rate
     * @return {Object}
     *
     * @example
     * //The new usage
     * action.easing(cc.easeInOut(3.0));
     */
    export function easeInOut(dt:number):EaseIn;

    /*
    * cc.Ease Exponential In. Slow to Fast. <br />
    * Reference easeInExpo: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseExponentialIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 please action.easing(cc.easeExponentialIn())
    *
    * @example
    * action.easing(cc.easeExponentialIn());
    */
    export class EaseExponentialIn extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates the action easing object with the rate parameter. <br />
     * Reference easeInExpo: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeExponentialIn 缓动对象。<br />
     * EaseExponentialIn 是按指数函数缓动进入的动作。<br />
     * 参考 easeInExpo：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeExponentialIn
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeExponentialIn());
     */
    export function easeExponentialIn(dt:number):EaseExponentialIn;

    /*
    * Ease Exponential Out. <br />
    * Reference easeOutExpo: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseExponentialOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeExponentialOut())
    *
    * @example
    * action.easing(cc.easeExponentialOut());
    */
    export class EaseExponentialOut extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeOutExpo: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeExponentialOut 缓动对象。<br />
     * EaseExponentialOut 是按指数函数缓动退出的动作。<br />
     * 参考 easeOutExpo：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeExponentialOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeExponentialOut());
     */
    export function easeExponentialOut(dt:number):EaseExponentialOut;

    /*
    * Ease Exponential InOut. <br />
    * Reference easeInOutExpo: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    *
    * @class EaseExponentialInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeExponentialInOut)
    *
    * @example
    * action.easing(cc.easeExponentialInOut());
    */
    export class EaseExponentialInOut extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates an EaseExponentialInOut action easing object. <br />
     * Reference easeInOutExpo: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeExponentialInOut 缓动对象。<br />
     * EaseExponentialInOut 是按指数函数缓动进入并退出的动作。<br />
     * 参考 easeInOutExpo：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeExponentialInOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeExponentialInOut());
     */
    export function easeExponentialInOut(dt:number):EaseExponentialInOut;

    /*
    * Ease Sine In. <br />
    * Reference easeInSine: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseSineIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeSineIn())
    *
    * @example
    * action.easing(cc.easeSineIn());
    */
    export class EaseSineIn extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates an EaseSineIn action. <br />
     * Reference easeInSine: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 EaseSineIn 缓动对象。<br />
     * EaseSineIn 是按正弦函数缓动进入的动作。<br />
     * 参考 easeInSine：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeSineIn
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeSineIn());
     */
    export function easeSineIn(dt:number):EaseSineIn;

    /*
    * Ease Sine Out. <br />
    * Reference easeOutSine: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseSineOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeSineOut())
    *
    * @example
    * action.easing(cc.easeSineOut());
    */
    export class EaseSineOut extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates an EaseSineOut action easing object. <br />
     * Reference easeOutSine: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 EaseSineOut 缓动对象。<br />
     * EaseSineIn 是按正弦函数缓动退出的动作。<br />
     * 参考 easeOutSine：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeSineOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeSineOut());
     */
    export function easeSineOut(dt:number):EaseSineOut;

    /*
    * Ease Sine InOut. <br />
    * Reference easeInOutSine: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class cc.EaseSineInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeSineInOut())
    *
    * @example
    * action.easing(cc.easeSineInOut());
    */
    export class EaseSineInOut extends EaseRateAction {
        public update(dt:number):void;

        public reverse():EaseIn;

        public clone():EaseIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInOutSine: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeSineInOut 缓动对象。<br />
     * EaseSineIn 是按正弦函数缓动进入并退出的动作。<br />
     * 参考 easeInOutSine：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeSineInOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeSineInOut());
     */
    export function easeSineInOut(dt:number):EaseSineInOut;

    /**
     * !#en Ease Elastic abstract class.
     * !#zh 弹性缓动动作基类。
     * @class EaseElastic
     * @extends ActionEase
     * @param {ActionInterval} action
     * @param {Number} period
     */
    // cc.EaseElastic = cc.ActionEase.extend({
    export class EaseElastic extends ActionEase {
        public constructor(action:ActionInterval, period:number);

        /**
         * get period of the wave in radians. default is 0.3
         * @return {Number}
         */
        public getPeriod():number;

        /**
         * set period of the wave in radians.
         * @param {Number} period
         */
        public setPeriod(period:number):void;

        /**
         * Initializes the action with the inner action and the period in radians (default is 0.3)
         * @param {ActionInterval} action
         * @param {Number} [period=0.3]
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval, period:number):boolean;

        public reverse():EaseElastic;

        public clone():EaseElastic;
    }

    /**
     * @module cc
     */

    /*
    * Ease Elastic In action. <br />
    * Reference easeInElastic: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseElasticIn
    * @extends EaseElastic
    *
    * @deprecated since v3.0 please use action.easing(cc.easeElasticIn())
    *
    * @example
    * action.easing(cc.easeElasticIn(period));
    */
    // cc.EaseElasticIn = cc.EaseElastic.extend({
    export class EaseElasticIn extends EaseElastic {
        public update(dt:number):void;

        public reverse():EaseElasticIn;

        public clone():EaseElasticIn;
    }

    /**
     * !#en
     * Creates the action easing obejct with the period in radians (default is 0.3). <br />
     * Reference easeInElastic: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeElasticIn 缓动对象。<br />
     * EaseElasticIn 是按弹性曲线缓动进入的动作。<br />
     * 参数 easeInElastic：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeElasticIn
     * @param {Number} period
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeElasticIn(3.0));
     */
    export function easeElasticIn(period:number):EaseElasticIn;

    /*
    * Ease Elastic Out action. <br />
    * Reference easeOutElastic: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseElasticOut
    * @extends EaseElastic
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeElasticOut(period))
    *
    * @example
    * action.easing(cc.easeElasticOut(period));
    */
    export class EaseElasticOut extends EaseElasticIn {
        public update(dt:number):void;

        public reverse():EaseElasticOut;

        public clone():EaseElasticOut;
    }

    /**
     * !#en
     * Creates the action easing object with the period in radians (default is 0.3). <br />
     * Reference easeOutElastic: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeElasticOut 缓动对象。<br />
     * EaseElasticOut 是按弹性曲线缓动退出的动作。<br />
     * 参考 easeOutElastic：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeElasticOut
     * @param {Number} period
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeElasticOut(3.0));
     */
    export function easeElasticOut(period:number):EaseElasticOut;

    /*
    * Ease Elastic InOut action. <br />
    * Reference easeInOutElastic: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseElasticInOut
    * @extends EaseElastic
    *
    * @deprecated since v3.0 please use action.easing(cc.easeElasticInOut())
    *
    * @example
    * action.easing(cc.easeElasticInOut(period));
    */
    export class EaseElasticInOut extends EaseElastic {
        public update(dt:number):void;

        public reverse():EaseElasticInOut;

        public clone():EaseElasticInOut;
    }

    /**
     * !#en
     * Creates the action easing object with the period in radians (default is 0.3). <br />
     * Reference easeInOutElastic: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeElasticInOut 缓动对象。<br />
     * EaseElasticInOut 是按弹性曲线缓动进入并退出的动作。<br />
     * 参考 easeInOutElastic：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeElasticInOut
     * @param {Number} period
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeElasticInOut(3.0));
     */
    export function easeElasticInOut(period:number):EaseElasticInOut;

    /**
     * !#en cc.EaseBounce abstract class.
     * !#zh 反弹缓动动作基类。
     * @class EaseBounce
     * @extends ActionEase
     */
    // cc.EaseBounce = cc.ActionEase.extend({
    export class EaseBounce extends ActionEase {
        /**
         * @param {Number} time
         * @return {Number}
         */
        public bounceTime(time:number):number;

        public reverse():EaseBounce;

        public clone():EaseBounce;
    }


    /**
     * @module cc
     */

    /*
    * cc.EaseBounceIn action. <br />
    * Eased bounce effect at the beginning.
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseBounceIn
    * @extends EaseBounce
    *
    * @deprecated since v3.0 please use action.easing(cc.easeBounceIn())
    *
    * @example
    * action.easing(cc.easeBounceIn());
    */
    export class EaseBounceIn extends EaseBounce {
        public update(dt:number):void;

        public reverse():EaseBounceIn;

        public clone():EaseBounceIn;
    }


    /**
     * !#en
     * Creates the action easing object. <br />
     * Eased bounce effect at the beginning.
     * !#zh
     * 创建 easeBounceIn 缓动对象。<br />
     * EaseBounceIn 是按弹跳动作缓动进入的动作。
     * @method easeBounceIn
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBounceIn());
     */
    export function easeBounceIn():EaseBounceIn;

    /*
    * cc.EaseBounceOut action. <br />
    * Eased bounce effect at the ending.
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseBounceOut
    * @extends EaseBounce
    *
    * @deprecated since v3.0 please use action.easing(cc.easeBounceOut())
    *
    * @example
    * action.easing(cc.easeBounceOut());
    */
    export class EaseBounceOut extends EaseBounce {
        public update(dt:number):void;

        public reverse():EaseBounceOut;

        public clone():EaseBounceOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Eased bounce effect at the ending.
     * !#zh
     * 创建 easeBounceOut 缓动对象。<br />
     * EaseBounceOut 是按弹跳动作缓动退出的动作。
     * @method easeBounceOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBounceOut());
     */
    export function easeBounceOut():EaseBounceOut;

    /*
    * cc.EaseBounceInOut action. <br />
    * Eased bounce effect at the begining and ending.
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseBounceInOut
    * @extends EaseBounce
    *
    * @deprecated since v3.0 <br /> Please use acton.easing(cc.easeBounceInOut())
    *
    * @example
    * action.easing(cc.easeBounceInOut());
    */
    export class EaseBounceInOut extends EaseBounce {
        public update(dt:number):void;

        public reverse():EaseBounceInOut;

        public clone():EaseBounceInOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Eased bounce effect at the begining and ending.
     * !#zh
     * 创建 easeBounceInOut 缓动对象。<br />
     * EaseBounceInOut 是按弹跳动作缓动进入并退出的动作。
     * @method easeBounceInOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBounceInOut());
     */
    export function easeBounceInOut():EaseBounceInOut;

    /*
    * cc.EaseBackIn action. <br />
    * In the opposite direction to move slowly, and then accelerated to the right direction.
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseBackIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeBackIn())
    *
    * @example
    * action.easing(cc.easeBackIn());
    */
    export class EaseBackIn extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseBackIn;

        public clone():EaseBackIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * In the opposite direction to move slowly, and then accelerated to the right direction.
     * !#zh
     * 创建 easeBackIn 缓动对象。<br />
     * easeBackIn 是在相反的方向缓慢移动，然后加速到正确的方向。<br />
     * @method easeBackIn
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBackIn());
     */
    export function easeBackIn():EaseBackIn;

    /*
    * cc.EaseBackOut action. <br />
    * Fast moving more than the finish, and then slowly back to the finish.
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseBackOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 please use action.easing(cc.easeBackOut());
    *
    * @example
    * action.easing(cc.easeBackOut());
    */
    export class EaseBackOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseBackOut;

        public clone():EaseBackOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Fast moving more than the finish, and then slowly back to the finish.
     * !#zh
     * 创建 easeBackOut 缓动对象。<br />
     * easeBackOut 快速移动超出目标，然后慢慢回到目标点。
     * @method easeBackOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBackOut());
     */
    export function easeBackOut():EaseBackOut;

    /*
    * cc.EaseBackInOut action. <br />
    * Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
    * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
    * @class EaseBackInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeBackInOut())
    *
    * @example
    * action.easing(cc.easeBackInOut());
    */
    export class EaseBackInOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseBackInOut;

        public clone():EaseBackInOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
     * !#zh
     * 创建 easeBackInOut 缓动对象。<br />
     * @method easeBackInOut
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBackInOut());
     */
    export function easeBackInOut():EaseBackInOut;

    /*
    * cc.EaseBezierAction action. <br />
    * Manually set a 4 order Bessel curve. <br />
    * According to the set point, calculate the trajectory.
    * @class EaseBezierAction
    * @extends ActionEase
    * @param {Action} action
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeBezierAction())
    *
    * @example
    * action.easing(cc.easeBezierAction(0.5, 0.5, 1.0, 1.0));
    */
    export class EaseBezierAction extends ActionEase {
        // /**
        //  * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
        //  * Initialization requires the application of Bessel curve of action.
        //  * @param {Action} action
        //  */
        // public constructor(action:Action);

        public update(dt:number):void;

        public reverse():EaseBezierAction;

        public clone():EaseBezierAction;

        /**
         * Set of 4 reference point
         * @param p0
         * @param p1
         * @param p2
         * @param p3
         */
        public setBezierParamer(p0:Vec2, p1:Vec2, p2:Vec2, p3:Vec2):void;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Into the 4 reference point. <br />
     * To calculate the motion curve.
     * !#zh
     * 创建 easeBezierAction 缓动对象。<br />
     * EaseBezierAction 是按贝塞尔曲线缓动的动作。
     * @method easeBezierAction
     * @param {Number} p0 The first bezier parameter
     * @param {Number} p1 The second bezier parameter
     * @param {Number} p2 The third bezier parameter
     * @param {Number} p3 The fourth bezier parameter
     * @returns {Object}
     * @example
     * // example
     * action.easing(cc.easeBezierAction(0.5, 0.5, 1.0, 1.0));
     */
    export function easeBezierAction(p0:Vec2, p1:Vec2, p2:Vec2, p3:Vec2):EaseBezierAction;

    /*
    * cc.EaseQuadraticActionIn action. <br />
    * Reference easeInQuad: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuadraticActionIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticAction())
    *
    * @example
    * action.easing(cc.easeQuadraticActionIn());
    */
    export class EaseQuadraticActionIn extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuadraticActionIn;

        public clone():EaseQuadraticActionIn;

        /**
         * Set of 4 reference point
         * @param p0
         * @param p1
         * @param p2
         * @param p3
         */
        public setBezierParamer(p0:Vec2, p1:Vec2, p2:Vec2, p3:Vec2):void;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInQuad: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuadraticActionIn 缓动对象。<br />
     * EaseQuadraticIn是按二次函数缓动进入的动作。<br />
     * 参考 easeInQuad：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuadraticActionIn
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionIn());
     */
    export function easeQuadraticActionIn():EaseQuadraticActionIn;

    /*
    * cc.EaseQuadraticActionOut action. <br />
    * Reference easeOutQuad: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuadraticActionOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticActionOut())
    *
    * @example
    * action.easing(cc.easeQuadraticActionOut());
    */
    export class EaseQuadraticActionOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuadraticActionOut;

        public clone():EaseQuadraticActionOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeOutQuad: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuadraticActionOut 缓动对象。<br />
     * EaseQuadraticOut 是按二次函数缓动退出的动作。<br />
     * 参考 easeOutQuad：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuadraticActionOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionOut());
     */
    export function easeQuadraticActionOut():EaseQuadraticActionOut;

    /*
    * cc.EaseQuadraticActionInOut action. <br />
    * Reference easeInOutQuad: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuadraticActionInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticActionInOut())
    *
    * @example
    * action.easing(cc.easeQuadraticActionInOut());
    */
    export class EaseQuadraticActionInOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuadraticActionInOut;

        public clone():EaseQuadraticActionInOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInOutQuad: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuadraticActionInOut 缓动对象。<br />
     * EaseQuadraticInOut 是按二次函数缓动进入并退出的动作。<br />
     * 参考 easeInOutQuad：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuadraticActionInOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionInOut());
     */
    export function easeQuadraticActionInOut():EaseQuadraticActionInOut;

    /*
    * cc.EaseQuarticActionIn action. <br />
    * Reference easeInQuart: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuarticActionIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuarticActionIn());
    *
    * @example
    * action.easing(cc.easeQuarticActionIn());
    */
    export class EaseQuarticActionIn extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuarticActionIn;

        public clone():EaseQuarticActionIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeIntQuart: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuarticActionIn 缓动对象。<br />
     * EaseQuarticIn 是按四次函数缓动进入的动作。<br />
     * 参考 easeIntQuart：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuarticActionIn
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuarticActionIn());
     */
    export function easeQuarticActionIn():EaseQuarticActionIn;

    /*
    * cc.EaseQuarticActionOut action. <br />
    * Reference easeOutQuart: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuarticActionOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.QuarticActionOut());
    *
    * @example
    * action.easing(cc.EaseQuarticActionOut());
    */
    export class EaseQuarticActionOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuarticActionOut;

        public clone():EaseQuarticActionOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeOutQuart: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuarticActionOut 缓动对象。<br />
     * EaseQuarticOut 是按四次函数缓动退出的动作。<br />
     * 参考 easeOutQuart：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuarticActionOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.QuarticActionOut());
     */
    export function easeQuarticActionOut():EaseQuarticActionOut;

    /*
    * cc.EaseQuarticActionInOut action. <br />
    * Reference easeInOutQuart: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuarticActionInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuarticActionInOut());
    *
    * @example
    * action.easing(cc.easeQuarticActionInOut());
    */
    export class EaseQuarticActionInOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuarticActionInOut;

        public clone():EaseQuarticActionInOut;
    }

    /**
     * !#en
     * Creates the action easing object.  <br />
     * Reference easeInOutQuart: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuarticActionInOut 缓动对象。<br />
     * EaseQuarticInOut 是按四次函数缓动进入并退出的动作。<br />
     * 参考 easeInOutQuart：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuarticActionInOut
     * @returns {Object}
     */
    export function easeQuarticActionInOut():EaseQuarticActionInOut;

    /*
    * cc.EaseQuinticActionIn action. <br />
    * Reference easeInQuint: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuinticActionIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuinticActionIn());
    *
    * @example
    * action.easing(cc.easeQuinticActionIn());
    */
    export class EaseQuinticActionIn extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuinticActionIn;

        public clone():EaseQuinticActionIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInQuint: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuinticActionIn 缓动对象。<br />
     * EaseQuinticIn 是按五次函数缓动进的动作。<br />
     * 参考 easeInQuint：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuinticActionIn
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuinticActionIn());
     */
    export function easeQuinticActionIn():EaseQuinticActionIn;

    /*
    * cc.EaseQuinticActionOut action. <br />
    * Reference easeQuint: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuinticActionOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticActionOut());
    *
    * @example
    * action.easing(cc.easeQuadraticActionOut());
    */
    export class EaseQuinticActionOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuinticActionOut;

        public clone():EaseQuinticActionOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeOutQuint: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuinticActionOut 缓动对象。<br />
     * EaseQuinticOut 是按五次函数缓动退出的动作
     * 参考 easeOutQuint：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuinticActionOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionOut());
     */
    export function easeQuinticActionOut():EaseQuinticActionOut;

    /*
    * cc.EaseQuinticActionInOut action. <br />
    * Reference easeInOutQuint: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseQuinticActionInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuinticActionInOut());
    *
    * @example
    * action.easing(cc.easeQuinticActionInOut());
    */
    export class EaseQuinticActionInOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseQuinticActionInOut;

        public clone():EaseQuinticActionInOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInOutQuint: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeQuinticActionInOut 缓动对象。<br />
     * EaseQuinticInOut是按五次函数缓动进入并退出的动作。<br />
     * 参考 easeInOutQuint：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeQuinticActionInOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuinticActionInOut());
     */
    export function easeQuinticActionInOut():EaseQuinticActionInOut;

    /*
    * cc.EaseCircleActionIn action. <br />
    * Reference easeInCirc: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseCircleActionIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCircleActionIn());
    *
    * @example
    * action.easing(cc.easeCircleActionIn());
    */
    export class EaseCircleActionIn extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseCircleActionIn;

        public clone():EaseCircleActionIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInCirc: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeCircleActionIn 缓动对象。<br />
     * EaseCircleIn是按圆形曲线缓动进入的动作。<br />
     * 参考 easeInCirc：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeCircleActionIn
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCircleActionIn());
     */
    export function easeCircleActionIn():EaseCircleActionIn;

    /*
    * cc.EaseCircleActionOut action. <br />
    * Reference easeOutCirc: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseCircleActionOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCircleActionOut());
    *
    * @example
    * action.easing(cc.easeCircleActionOut());
    */
    export class EaseCircleActionOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseCircleActionIn;

        public clone():EaseCircleActionIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeOutCirc: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeCircleActionOut 缓动对象。<br />
     * EaseCircleOut是按圆形曲线缓动退出的动作。<br />
     * 参考 easeOutCirc：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeCircleActionOut
     * @returns {Object}
     * @exampple
     * //example
     * actioneasing(cc.easeCircleActionOut());
     */
    export function easeCircleActionOut():EaseCircleActionIn;

    /*
    * cc.EaseCircleActionInOut action. <br />
    * Reference easeInOutCirc: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseCircleActionInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCircleActionInOut());
    *
    * @example
    * action.easing(cc.easeCircleActionInOut());
    */
    export class EaseCircleActionInOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseCircleActionInOut;

        public clone():EaseCircleActionInOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInOutCirc: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeCircleActionInOut 缓动对象。<br />
     * EaseCircleInOut 是按圆形曲线缓动进入并退出的动作。<br />
     * 参考 easeInOutCirc：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeCircleActionInOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCircleActionInOut());
     */
    export function easeCircleActionInOut():EaseCircleActionInOut;

    /*
    * cc.EaseCubicActionIn action. <br />
    * Reference easeInCubic: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseCubicActionIn
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> action.easing(cc.easeCubicActionIn());
    *
    * @example
    * action.easing(cc.easeCubicActionIn());
    */
    export class EaseCubicActionIn extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseCubicActionIn;

        public clone():EaseCubicActionIn;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInCubic: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeCubicActionIn 缓动对象。<br />
     * EaseCubicIn 是按三次函数缓动进入的动作。<br />
     * 参考 easeInCubic：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeCubicActionIn
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCubicActionIn());
     */
    export function easeCubicActionIn():EaseCubicActionIn;

    /*
    * cc.EaseCubicActionOut action. <br />
    * Reference easeOutCubic: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseCubicActionOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCubicActionOut());
    *
    * @example
    * action.easing(cc.easeCubicActionOut());
    */
    export class EaseCubicActionOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseCubicActionOut;

        public clone():EaseCubicActionOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeOutCubic: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeCubicActionOut 缓动对象。<br />
     * EaseCubicOut 是按三次函数缓动退出的动作。<br />
     * 参考 easeOutCubic：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeCubicActionOut
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCubicActionOut());
     */
    export function easeCubicActionOut():EaseCubicActionOut;

    /*
    * cc.EaseCubicActionInOut action. <br />
    * Reference easeInOutCubic: <br />
    * http://www.zhihu.com/question/21981571/answer/19925418
    * @class EaseCubicActionInOut
    * @extends ActionEase
    *
    * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCubicActionInOut());
    *
    * @example
    * action.easing(cc.easeCubicActionInOut());
    */
    export class EaseCubicActionInOut extends ActionEase {
        public update(dt:number):void;

        public reverse():EaseCubicActionInOut;

        public clone():EaseCubicActionInOut;
    }

    /**
     * !#en
     * Creates the action easing object. <br />
     * Reference easeInOutCubic: <br />
     * http://www.zhihu.com/question/21981571/answer/19925418
     * !#zh
     * 创建 easeCubicActionInOut 缓动对象。<br />
     * EaseCubicInOut是按三次函数缓动进入并退出的动作。<br />
     * 参考 easeInOutCubic：http://www.zhihu.com/question/21981571/answer/19925418
     * @method easeCubicActionInOut
     * @returns {Object}
     */
    export function easeCubicActionInOut():EaseCubicActionInOut;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionInstant.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en Instant actions are immediate actions. They don't have a duration like the ActionInterval actions.
     * !#zh 即时动作，这种动作立即就会执行，继承自 FiniteTimeAction。
     * @class ActionInstant
     * @extends FiniteTimeAction
     */
    export class ActionInstant extends FiniteTimeAction {
        public isDone():boolean;

        public step(dt:number):void;

        public update(dt:number):void;

        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action is x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * @returns {Action}
         */
        public reverse():ActionInstant;
        public clone():ActionInstant;
    }

    /*
    * Show the node.
    * @class Show
    * @extends ActionInstant
    */
    export class Show extends ActionInstant {

        public update(dt:number):void;

        public reverse():Hide;
        public clone():Show;
    }

    /**
     * !#en Show the Node.
     * !#zh 立即显示。
     * @method show
     * @return {ActionInstant}
     * @example
     * // example
     * var showAction = cc.show();
     */
    export function show():Show;

    /*
    * Hide the node.
    * @class Hide
    * @extends ActionInstant
    */
    export class Hide extends ActionInstant {

        public update(dt:number):void;

        public reverse():Show;
        public clone():Hide;
    }

    /**
     * !#en Hide the node.
     * !#zh 立即隐藏。
     * @method hide
     * @return {ActionInstant}
     * @example
     * // example
     * var hideAction = cc.hide();
     */
    export function hide():Hide;

    /*
    * Toggles the visibility of a node.
    * @class ToggleVisibility
    * @extends ActionInstant
    */
    export class ToggleVisibility extends ActionInstant {

        public update(dt:number):void;

        public reverse():ToggleVisibility;
        public clone():ToggleVisibility;
    }

    /**
     * !#en Toggles the visibility of a node.
     * !#zh 显隐状态切换。
     * @method toggleVisibility
     * @return {ActionInstant}
     * @example
     * // example
     * var toggleVisibilityAction = cc.toggleVisibility();
     */
    export function toggleVisibility():ToggleVisibility;

    /*
    * Delete self in the next frame.
    * @class RemoveSelf
    * @extends ActionInstant
    * @param {Boolean} isNeedCleanUp
    *
    * @example
    * // example
    * var removeSelfAction = new cc.RemoveSelf(false);
    */
    export class RemoveSelf extends ActionInstant {
        public constructor(isNeedCleanUp?:boolean);
        public init(isNeedCleanUp?:boolean):boolean;

        public update(dt:number):void;

        public reverse():RemoveSelf;
        public clone():RemoveSelf;
    }

    /**
     * !#en Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
     * !#zh 从父节点移除自身。
     * @method removeSelf
     * @param {Boolean} isNeedCleanUp
     * @return {ActionInstant}
     *
     * @example
     * // example
     * var removeSelfAction = cc.removeSelf();
     */
    export function removeSelf(isNeedCleanUp?:boolean):RemoveSelf;

    /*
    * Flips the sprite horizontally.
    * @class FlipX
    * @extends ActionInstant
    * @param {Boolean} flip Indicate whether the target should be flipped or not
    *
    * @example
    * var flipXAction = new cc.FlipX(true);
    */
    export class FlipX extends ActionInstant {
        public constructor(flip:boolean);
        public initWithFlipX(flip:boolean):boolean;

        public update(dt:number):void;

        public reverse():FlipX;
        public clone():FlipX;
    }

    /**
     * !#en Create a FlipX action to flip or unflip the target.
     * !#zh X轴翻转。
     * @method flipX
     * @param {Boolean} flip Indicate whether the target should be flipped or not
     * @return {ActionInstant}
     * @example
     * var flipXAction = cc.flipX(true);
     */
    export function flipX(flip:boolean):FlipX;

    /*
    * Flips the sprite vertically
    * @class FlipY
    * @extends ActionInstant
    * @param {Boolean} flip
    * @example
    * var flipYAction = new cc.FlipY(true);
    */
    export class FlipY extends ActionInstant {
        public constructor(flip:boolean);
        /*
         * initializes the action with a set flipY.
         * @param {Boolean} flip
         * @return {Boolean}
         */
        public initWithFlipY(flip:boolean):boolean;

        public update(dt:number):void;

        public reverse():FlipY;
        public clone():FlipY;
    }

    /**
     * !#en Create a FlipY action to flip or unflip the target.
     * !#zh Y轴翻转。
     * @method flipY
     * @param {Boolean} flip
     * @return {ActionInstant}
     * @example
     * var flipYAction = cc.flipY(true);
     */
    export function flipY(flip:boolean):FlipY;

    /*
    * Places the node in a certain position
    * @class Place
    * @extends ActionInstant
    * @param {Vec2|Number} pos
    * @param {Number} [y]
    * @example
    * var placeAction = new cc.Place(cc.p(200, 200));
    * var placeAction = new cc.Place(200, 200);
    */
    export class Place extends ActionInstant {
        public constructor(pos:Vec2|number, y?:number);

        /*
        * Initializes a Place action with a position
        * @param {number} x
        * @param {number} y
        * @return {Boolean}
        */
        public initWithPosition(x:Vec2|number, y?:number):boolean;

        public update(dt:number):void;

        public reverse():Place;
        public clone():Place;
    }

    /**
     * !#en Creates a Place action with a position.
     * !#zh 放置在目标位置。
     * @method place
     * @param {Vec2|Number} pos
     * @param {Number} [y]
     * @return {ActionInstant}
     * @example
     * // example
     * var placeAction = cc.place(cc.p(200, 200));
     * var placeAction = cc.place(200, 200);
     */
    export function place(pos:Vec2|number, y?:number):Place;

    export interface CallFuncSelector { (target?:Node, data?:any):void; }

    /*
    * Calls a 'callback'.
    * @class CallFunc
    * @extends ActionInstant
    * @param {function} selector
    * @param {object|null} [selectorTarget]
    * @param {*|null} [data] data for function, it accepts all data types.
    * @example
    * // example
    * // CallFunc without data
    * var finish = new cc.CallFunc(this.removeSprite, this);
    *
    * // CallFunc with data
    * var finish = new cc.CallFunc(this.removeFromParentAndCleanup, this,  true);
    */
    export class CallFunc extends ActionInstant {
        /*
        * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
        * Creates a CallFunc action with the callback.
        * @param {function} selector
        * @param {object|null} [selectorTarget]
        * @param {*|null} [data] data for function, it accepts all data types.
        */
        public constructor(selector:CallFuncSelector, selectorTarget?:any, data?:any);

        /*
        * Initializes the action with a function or function and its target
        * @param {function} selector
        * @param {object|Null} selectorTarget
        * @param {*|Null} [data] data for function, it accepts all data types.
        * @return {Boolean}
        */
        public initWithFunction(selector:CallFuncSelector, selectorTarget?:any, data?:any):boolean;

        /*
        * execute the function.
        */
        public execute():void;

        public update(dt:number):void;

        /*
        * Get selectorTarget.
        * @return {object}
        */
        public getTargetCallback():any;

        /*
        * Set selectorTarget.
        * @param {object} sel
        */
        public setTargetCallback(sel:CallFuncSelector):void;

        public clone():CallFunc;
    }

    /**
     * !#en Creates the action with the callback.
     * !#zh 执行回调函数。
     * @method callFunc
     * @param {function} selector
     * @param {object|null} [selectorTarget]
     * @param {*|null} [data] data for function, it accepts all data types.
     * @return {ActionInstant}
     * @example
     * // example
     * // CallFunc without data
     * var finish = cc.callFunc(this.removeSprite, this);
     *
     * // CallFunc with data
     * var finish = cc.callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
     */
    export function callFunc(selector:CallFuncSelector, selectorTarget?:any, data?:any):CallFunc;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionInterval.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en
     * <p> An interval action is an action that takes place within a certain period of time. <br/>
     * It has an start time, and a finish time. The finish time is the parameter<br/>
     * duration plus the start time.</p>
     *
     * <p>These CCActionInterval actions have some interesting properties, like:<br/>
     * - They can run normally (default)  <br/>
     * - They can run reversed with the reverse method   <br/>
     * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
     *
     * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
     * then running it again in Reverse mode. </p>
     * !#zh 时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。
     * @class ActionInterval
     * @extends FiniteTimeAction
     * @param {Number} d duration in seconds
     */
    export class ActionInterval extends FiniteTimeAction {

        public constructor(duration:number);

        /*
        * How many seconds had elapsed since the actions started to run.
        * @return {Number}
        */
        public getElapsed():number;

        /*
        * Initializes the action.
        * @param {Number} d duration in seconds
        * @return {Boolean}
        */
        public initWithDuration(duration:number):boolean;

        // public isDone():boolean;

        public clone():ActionInterval;

        /**
         * !#en Implementation of ease motion.
         * !#zh 缓动运动。
         * @example
         * @method easing
         * @param {Object} easeObj
         * @returns {ActionInterval}
         * @example
         * action.easeing(cc.easeIn(3.0));
         */
        public easing(easeObj:Object):ActionInterval;

        public reverse():ActionInterval;

        /*
        * Set amplitude rate.
        * @warning It should be overridden in subclass.
        * @param {Number} amp
        */
        public setAmplitudeRate(amp:number):void;

        /*
        * Get amplitude rate.
        * @warning It should be overridden in subclass.
        * @return {Number} 0
        */
        public getAmplitudeRate():number;

        /**
         * !#en
         * Changes the speed of an action, making it take longer (speed>1)
         * or less (speed<1) time. <br/>
         * Useful to simulate 'slow motion' or 'fast forward' effect.
         * !#zh
         * 改变一个动作的速度，使它的执行使用更长的时间（speed > 1）<br/>
         * 或更少（speed < 1）可以有效得模拟“慢动作”或“快进”的效果。
         * @param speed
         * @returns {Action}
         */
        public speed(speed:number):Action;

        /**
         * Get this action speed.
         * @return {Number}
         */
        public getSpeed():number;

        /**
         * Set this action speed.
         * @param {Number} speed
         * @returns {ActionInterval}
         */
        public setSpeed(speed:number):ActionInterval;

        /**
         * !#en
         * Repeats an action a number of times.
         * To repeat an action forever use the CCRepeatForever action.
         * !#zh 重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。
         * @method repeat
         * @param times
         * @returns {ActionInterval}
         */
        public repeat(times:number):ActionInterval;

        /**
         * !#en
         * Repeats an action for ever.  <br/>
         * To repeat the an action for a limited number of times use the Repeat action. <br/>
         * !#zh 永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。
         * @method repeatForever
         * @returns {ActionInterval}
         */
        public repeatForever():ActionInterval;
    }

    export function actionInterval(duration:number):ActionInterval;

    /**
     * @module cc
     */

    /*
    * Runs actions sequentially, one after another.
    * @class Sequence
    * @extends ActionInterval
    * @param {Array|FiniteTimeAction} tempArray
    * @example
    * // create sequence with actions
    * var seq = new cc.Sequence(act1, act2);
    *
    * // create sequence with array
    * var seq = new cc.Sequence(actArray);
    */
    // cc.Sequence = cc.ActionInterval.extend({
    export class Sequence extends ActionInterval {
        public constructor(tempArray:FiniteTimeAction[]);
        public constructor(...args:FiniteTimeAction[]);

        /*
        * Initializes the action <br/>
        * @param {FiniteTimeAction} actionOne
        * @param {FiniteTimeAction} actionTwo
        * @return {Boolean}
        */
        // initWithTwoActions:function (actionOne, actionTwo) {
        public initWithTwoActions(actionOne:FiniteTimeAction, actionTwo:FiniteTimeAction):boolean;

        public clone():Sequence;

        // public startWithTarget(target:Node):void;

        // public stop():void;

        public update(dt:number):void;

        public reverse():Sequence;
    }

    /**
     * !#en
     * Helper constructor to create an array of sequenceable actions
     * The created action will run actions sequentially, one after another.
     * !#zh 顺序执行动作，创建的动作将按顺序依次运行。
     * @method sequence
     * @param {Array|FiniteTimeAction} tempArray
     * @return {ActionInterval}
     * @example
     * // example
     * // create sequence with actions
     * var seq = cc.sequence(act1, act2);
     *
     * // create sequence with array
     * var seq = cc.sequence(actArray);
     */
    // todo: It should be use new
    export function sequence(tempArray:FiniteTimeAction[]):Sequence;
    export function sequence(...args:FiniteTimeAction[]):Sequence;

    /*
    * Repeats an action a number of times.
    * To repeat an action forever use the CCRepeatForever action.
    * @class Repeat
    * @extends ActionInterval
    * @param {FiniteTimeAction} action
    * @param {Number} times
    * @example
    * var rep = new cc.Repeat(cc.sequence(jump2, jump1), 5);
    */
    export class Repeat extends ActionInterval {
        public constructor(action:FiniteTimeAction, times:number);

        /*
        * @param {FiniteTimeAction} action
        * @param {Number} times
        * @return {Boolean}
        */
        public initWithAction(action:FiniteTimeAction, times:number):boolean;

        public clone():Repeat;

        // public startWithTarget(target:Node):void;

        // public stop():void;

        // public update(dt:number):void;

        // public isDone():boolean;

        public reverse():Repeat;

        /*
        * Set inner Action.
        * @param {FiniteTimeAction} action
        */
        public setInnerAction(action:FiniteTimeAction):void;

        /*
        * Get inner Action.
        * @return {FiniteTimeAction}
        */
        public getInnerAction():FiniteTimeAction;
    }

    /**
     * !#en Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
     * !#zh 重复动作，可以按一定次数重复一个动，如果想永远重复一个动作请使用 repeatForever 动作来完成。
     * @method repeat
     * @param {FiniteTimeAction} action
     * @param {Number} times
     * @return {ActionInterval}
     * @example
     * // example
     * var rep = cc.repeat(cc.sequence(jump2, jump1), 5);
     */
    export function repeat(action:FiniteTimeAction, times:number):Repeat;

    /*
    * Repeats an action for ever.  <br/>
    * To repeat the an action for a limited number of times use the Repeat action. <br/>
    * @warning This action can't be Sequenceable because it is not an IntervalAction
    * @class RepeatForever
    * @extends ActionInterval
    * @param {FiniteTimeAction} action
    * @example
    * var rep = new cc.RepeatForever(cc.sequence(jump2, jump1), 5);
    */
    export class RepeatForever extends ActionInterval {
        public constructor(action:ActionInterval);

        /*
        * @param {ActionInterval} action
        * @return {Boolean}
        */
        public initWithAction(action:ActionInterval):boolean;

        public clone():RepeatForever;

        // public startWithTarget(target:Node):void;

        // public step(dt:number):void;

        // public isDone():boolean;

        public reverse():RepeatForever;

        /*
        * Set inner action.
        * @param {ActionInterval} action
        */
        public setInnerAction(action:ActionInterval):void;

        /*
        * Get inner action.
        * @return {ActionInterval}
        */
        public getInnerAction():ActionInterval;
    }

    /**
     * !#en Create a acton which repeat forever, as it runs forever, it can't be added into cc.sequence and cc.spawn.
     * !#zh 永远地重复一个动作，有限次数内重复一个动作请使用 repeat 动作，由于这个动作不会停止，所以不能被添加到 cc.sequence 或 cc.spawn 中。
     * @method repeatForever
     * @param {FiniteTimeAction} action
     * @return {ActionInterval}
     * @example
     * // example
     * var repeat = cc.repeatForever(cc.rotateBy(1.0, 360));
     */
    export function repeatForever(action:ActionInterval):RepeatForever;


    /* 
    * Spawn a new action immediately
    * @class Spawn
    * @extends ActionInterval
    */
    export class Spawn extends FiniteTimeAction {
        public constructor(actions:FiniteTimeAction[]);
        public constructor(...actions:FiniteTimeAction[]);

        /* initializes the Spawn action with the 2 actions to spawn
        * @param {FiniteTimeAction} action1
        * @param {FiniteTimeAction} action2
        * @return {Boolean}
        */
        // initWithTwoActions:function (action1, action2) {
        public initWithTwoActions(action1:FiniteTimeAction, action2:FiniteTimeAction);

        public clone():Spawn;

        // public startWithTarget(target:Node):void;

        // public stop():void;

        // public update(dt:number):void;

        public reverse():Spawn;
    }

    /**
     * !#en Create a spawn action which runs several actions in parallel.
     * !#zh 同步执行动作，同步执行一组动作。
     * @method spawn
     * @param {Array|FiniteTimeAction}tempArray
     * @return {FiniteTimeAction}
     * @example
     * // example
     * var action = cc.spawn(cc.jumpBy(2, cc.p(300, 0), 50, 4), cc.rotateBy(2, 720));
     * todo:It should be the direct use new
     */
    export function spawn(actions:FiniteTimeAction[]);
    export function spawn(action1:FiniteTimeAction, action2:FiniteTimeAction);
    export function spawn(...actions:FiniteTimeAction[]);

    /*
    * Rotates a Node object to a certain angle by modifying its rotation property. <br/>
    * The direction will be decided by the shortest angle.
    * @class RotateTo
    * @extends ActionInterval
    * @param {Number} duration duration in seconds
    * @param {Number} deltaAngleX deltaAngleX in degrees.
    * @param {Number} [deltaAngleY] deltaAngleY in degrees.
    * @example
    * var rotateTo = new cc.RotateTo(2, 61.0);
    */
    export class RotateTo extends ActionInterval {
        public constructor(duration:number, deltaAngleX:number, deltaAngleY?:number);

        /*
        * Initializes the action.
        * @param {Number} duration
        * @param {Number} deltaAngleX
        * @param {Number} deltaAngleY
        * @return {Boolean}
        */
        public initWithDuration(duration:number, deltaAngleX:number, deltaAngleY?:number);
        public initWithDuration(duration:number);

        public clone():RotateTo;

        // public startWithTarget(target:Node):void;

        public reverse():RotateTo;

        // public update(dt:number):void;
    }

    /**
     * !#en
     * Rotates a Node object to a certain angle by modifying its rotation property. <br/>
     * The direction will be decided by the shortest angle.
     * !#zh 旋转到目标角度，通过逐帧修改它的 rotation 属性，旋转方向将由最短的角度决定。
     * @method rotateTo
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees.
     * @param {Number} [deltaAngleY] deltaAngleY in degrees.
     * @return {ActionInterval}
     * @example
     * // example
     * var rotateTo = cc.rotateTo(2, 61.0);
     */
    export function rotateTo(duration:number, deltaAngleX:number, deltaAngleY?:number):RotateTo;

    /*
    * Rotates a Node object clockwise a number of degrees by modifying its rotation property.
    * Relative to its properties to modify.
    * @class RotateBy
    * @extends ActionInterval
    * @param {Number} duration duration in seconds
    * @param {Number} deltaAngleX deltaAngleX in degrees
    * @param {Number} [deltaAngleY] deltaAngleY in degrees
    * @example
    * var actionBy = new cc.RotateBy(2, 360);
    */
    export class RotateBy extends ActionInterval {
        public constructor(duration:number, deltaAngleX:number, deltaAngleY?:number);

        /*
        * Initializes the action.
        * @param {Number} duration duration in seconds
        * @param {Number} deltaAngleX deltaAngleX in degrees
        * @param {Number} [deltaAngleY=] deltaAngleY in degrees
        * @return {Boolean}
        */
        public initWithDuration(duration:number, deltaAngleX?:number, deltaAngleY?:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():RotateBy;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():RotateBy;
    }

    /**
     * !#en
     * Rotates a Node object clockwise a number of degrees by modifying its rotation property.
     * Relative to its properties to modify.
     * !#zh 旋转指定的角度。
     * @method rotateBy
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees
     * @param {Number} [deltaAngleY] deltaAngleY in degrees
     * @return {ActionInterval}
     * @example
     * // example
     * var actionBy = cc.rotateBy(2, 360);
     */
    export function rotateBy(duration:number, deltaAngleX:number, deltaAngleY?:number):RotateTo;


    /*
    * <p>
    * Moves a Node object x,y pixels by modifying its position property.                                  <br/>
    * x and y are relative to the position of the object.                                                     <br/>
    * Several MoveBy actions can be concurrently called, and the resulting                                  <br/>
    * movement will be the sum of individual movements.
    * </p>
    * @class MoveBy
    * @extends ActionInterval
    * @param {Number} duration duration in seconds
    * @param {Vec2|Number} deltaPos
    * @param {Number} [deltaY]
    * @example
    * var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
    */
    // cc.MoveBy = cc.ActionInterval.extend({
    export class MoveBy extends ActionInterval {
        public constructor(duration:number, deltaPos:Vec2|number, deltaY?:number);

        /*
        * Initializes the action.
        * @param {Number} duration duration in seconds
        * @param {Vec2} position
        * @param {Number} [y]
        * @return {Boolean}
        */
        public initWithDuration(duration:number, position:Vec2|number, y?:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():MoveBy;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():MoveBy;
    }

    /**
     * !#en
     * Moves a Node object x,y pixels by modifying its position property.                                  <br/>
     * x and y are relative to the position of the object.                                                     <br/>
     * Several MoveBy actions can be concurrently called, and the resulting                                  <br/>
     * movement will be the sum of individual movements.
     * !#zh 移动指定的距离。
     * @method moveBy
     * @param {Number} duration duration in seconds
     * @param {Vec2|Number} deltaPos
     * @param {Number} deltaY
     * @return {ActionInterval}
     * @example
     * // example
     * var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
     */
    export function moveBy(duration:number, deltaAngleX:number, deltaAngleY?:number):MoveBy;


    /*
    * Moves a Node object to the position x,y. x and y are absolute coordinates by modifying its position property. <br/>
    * Several MoveTo actions can be concurrently called, and the resulting                                            <br/>
    * movement will be the sum of individual movements.
    * @class MoveTo
    * @extends MoveBy
    * @param {Number} duration duration in seconds
    * @param {Vec2|Number} position
    * @param {Number} y
    * @example
    * var actionBy = new cc.MoveTo(2, cc.p(80, 80));
    */
    // cc.MoveTo = cc.MoveBy.extend({
    export class MoveTo extends MoveBy {
        public constructor(duration:number, position:Vec2|number, y?:number);

        /*
        * Initializes the action.
        * @param {Number} duration  duration in seconds
        * @param {Vec2} position
        * @param {Number} y
        * @return {Boolean}
        */
        public initWithDuration(duration:number, position:Vec2|number, y?:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():MoveTo;

        // public startWithTarget(target:Node):void;
    }

    /**
     * !#en
     * Moves a Node object to the position x,y. x and y are absolute coordinates by modifying its position property. <br/>
     * Several MoveTo actions can be concurrently called, and the resulting                                            <br/>
     * movement will be the sum of individual movements.
     * !#zh 移动到目标位置。
     * @method moveTo
     * @param {Number} duration duration in seconds
     * @param {Vec2} position
     * @param {Number} y
     * @return {ActionInterval}
     * @example
     * // example
     * var actionBy = cc.moveTo(2, cc.p(80, 80));
     */
    export function moveTo(duration:number, deltaAngleX:number, deltaAngleY?:number):MoveTo;

    /*
    * Skews a Node object to given angles by modifying its skewX and skewY properties
    * @class SkewTo
    * @extends ActionInterval
    * @param {Number} t time in seconds
    * @param {Number} sx
    * @param {Number} sy
    * @example
    * var actionTo = new cc.SkewTo(2, 37.2, -37.2);
    */
    // cc.SkewTo = cc.ActionInterval.extend({
    export class SkewTo extends ActionInterval {
        public constructor(t:number, sx:number, sy:number);

        /*
        * Initializes the action.
        * @param {Number} t time in seconds
        * @param {Number} sx
        * @param {Number} sy
        * @return {Boolean}
        */
        public initWithDuration(t:number, sx:number, sy:number):boolean;
        public initWithDuration(t:number):boolean;

        public clone():SkewTo;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;
        public reverse():SkewTo;
    }

    /**
     * !#en
     * Create a action which skews a Node object to given angles by modifying its skewX and skewY properties.
     * Changes to the specified value.
     * !#zh 偏斜到目标角度。
     * @method skewTo
     * @param {Number} t time in seconds
     * @param {Number} sx
     * @param {Number} sy
     * @return {ActionInterval}
     * @example
     * // example
     * var actionTo = cc.skewTo(2, 37.2, -37.2);
     */
    export function skewTo(t:number, sx:number, sy:number):SkewTo;

    /*
    * Skews a Node object by skewX and skewY degrees.
    * Relative to its property modification.
    * @class SkewBy
    * @extends SkewTo
    * @param {Number} t time in seconds
    * @param {Number} sx  skew in degrees for X axis
    * @param {Number} sy  skew in degrees for Y axis
    */
    export class SkewBy extends SkewTo {
        public constructor(t:number, sx:number, sy:number);

        /*
        * Initializes the action.
        * @param {Number} t time in seconds
        * @param {Number} deltaSkewX  skew in degrees for X axis
        * @param {Number} deltaSkewY  skew in degrees for Y axis
        * @return {Boolean}
        */
        public initWithDuration(t:number, sx:number, sy:number):boolean;
        public initWithDuration(t:number):boolean;

        public clone():SkewBy;

        // public startWithTarget(target:Node):void;
        public reverse():SkewBy;
    }

    /**
     * !#en
     * Skews a Node object by skewX and skewY degrees. <br />
     * Relative to its property modification.
     * !#zh 偏斜指定的角度。
     * @method skewBy
     * @param {Number} t time in seconds
     * @param {Number} sx sx skew in degrees for X axis
     * @param {Number} sy sy skew in degrees for Y axis
     * @return {ActionInterval}
     * @example
     * // example
     * var actionBy = cc.skewBy(2, 0, -90);
     */
    export function skewBy(t:number, sx:number, sy:number):SkewBy;

    /*
    * Moves a Node object simulating a parabolic jump movement by modifying its position property.
    * Relative to its movement.
    * @class JumpBy
    * @extends ActionInterval
    * @param {Number} duration
    * @param {Vec2|Number} position
    * @param {Number} [y]
    * @param {Number} height
    * @param {Number} jumps
    * @example
    * var actionBy = new cc.JumpBy(2, cc.p(300, 0), 50, 4);
    * var actionBy = new cc.JumpBy(2, 300, 0, 50, 4);
    */
    export class JumpBy extends ActionInterval {

        public constructor(duration:number, position:Vec2|number, y?:number, height?:number, jumps?:number);

        /*
        * Initializes the action.
        * @param {Number} duration
        * @param {Vec2|Number} position
        * @param {Number} [y]
        * @param {Number} height
        * @param {Number} jumps
        * @return {Boolean}
        * @example
        * actionBy.initWithDuration(2, cc.p(300, 0), 50, 4);
        * actionBy.initWithDuration(2, 300, 0, 50, 4);
        */
        public initWithDuration(duration:number, position:Vec2|number, y?:number, height?:number, jumps?:number);
        public initWithDuration(duration:number);

        public clone():JumpBy;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():JumpBy;
    }

    /**
     * !#en
     * Moves a Node object simulating a parabolic jump movement by modifying it's position property.
     * Relative to its movement.
     * !#zh 用跳跃的方式移动指定的距离。
     * @method jumpBy
     * @param {Number} duration
     * @param {Vec2|Number} position
     * @param {Number} [y]
     * @param {Number} height
     * @param {Number} jumps
     * @return {ActionInterval}
     * @example
     * // example
     * var actionBy = cc.jumpBy(2, cc.p(300, 0), 50, 4);
     * var actionBy = cc.jumpBy(2, 300, 0, 50, 4);
     */
    export function jumpBy(duration:number, position:Vec2|number, y?:number, height?:number, jumps?:number):JumpBy;

    /*
    * Moves a Node object to a parabolic position simulating a jump movement by modifying it's position property. <br />
    * Jump to the specified location.
    * @class JumpTo
    * @extends JumpBy
    * @param {Number} duration
    * @param {Vec2|Number} position
    * @param {Number} [y]
    * @param {Number} height
    * @param {Number} jumps
    * @example
    * var actionTo = new cc.JumpTo(2, cc.p(300, 0), 50, 4);
    * var actionTo = new cc.JumpTo(2, 300, 0, 50, 4);
    */
    // cc.JumpTo = cc.JumpBy.extend({
    export class JumpTo extends JumpBy {
        public constructor(duration:number, position:Vec2|number, y?:number, height?:number, jumps?:number);

        /*
        * Initializes the action.
        * @param {Number} duration
        * @param {Vec2|Number} position
        * @param {Number} [y]
        * @param {Number} height
        * @param {Number} jumps
        * @return {Boolean}
        * @example
        * actionTo.initWithDuration(2, cc.p(300, 0), 50, 4);
        * actionTo.initWithDuration(2, 300, 0, 50, 4);
        */
        public initWithDuration(duration:number, position:Vec2|number, y?:number, height?:number, jumps?:number):boolean;
        public initWithDuration(duration:number):boolean;

        // public startWithTarget(target:Node):void;

        public clone():JumpTo;
    }

    /**
     * !#en
     * Moves a Node object to a parabolic position simulating a jump movement by modifying its position property. <br />
     * Jump to the specified location.
     * !#zh 用跳跃的方式移动到目标位置。
     * @method jumpTo
     * @param {Number} duration
     * @param {Vec2|Number} position
     * @param {Number} [y]
     * @param {Number} height
     * @param {Number} jumps
     * @return {ActionInterval}
     * @example
     * // example
     * var actionTo = cc.jumpTo(2, cc.p(300, 300), 50, 4);
     * var actionTo = cc.jumpTo(2, 300, 300, 50, 4);
     */
    export function jumpTo(duration:number, position:Vec2|number, y?:number, height?:number, jumps?:number):JumpTo;

    /*
    * @method bezierAt
    * @param {Number} a
    * @param {Number} b
    * @param {Number} c
    * @param {Number} d
    * @param {Number} t
    * @return {Number}
    */
    export function bezierAt(a:number, b:number, c:number, d:number, t:number):number;

    /* An action that moves the target with a cubic Bezier curve by a certain distance.
    * Relative to its movement.
    * @class BezierBy
    * @extends ActionInterval
    * @param {Number} t time in seconds
    * @param {Array} c Array of points
    * @example
    * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
    * var bezierForward = new cc.BezierBy(3, bezier);
    */
    export class BezierBy extends ActionInterval {
        public constructor(t:number, c:Vec2[]);

        /*
        * Initializes the action.
        * @param {Number} t time in seconds
        * @param {Array} c Array of points
        * @return {Boolean}
        */
        public initWithDuration(t:number, c:Vec2[]):boolean;
        public initWithDuration(t:number):boolean;

        public clone():BezierBy;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():BezierBy;
    }

    /**
     * !#en
     * An action that moves the target with a cubic Bezier curve by a certain distance.
     * Relative to its movement.
     * !#zh 按贝赛尔曲线轨迹移动指定的距离。
     * @method bezierBy
     * @param {Number} t time in seconds
     * @param {Array} c Array of points
     * @return {ActionInterval}
     * @example
     * // example
     * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
     * var bezierForward = cc.bezierBy(3, bezier);
     */
    export function bezierBy(t:number, c:Vec2[]):BezierBy;


    /* An action that moves the target with a cubic Bezier curve to a destination point.
    * @class BezierTo
    * @extends BezierBy
    * @param {Number} t
    * @param {Array} c array of points
    * @example
    * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
    * var bezierTo = new cc.BezierTo(2, bezier);
    */
    export class BezierTo extends BezierBy {
        public constructor(t:number, c:Vec2[]);

        /*
        * Initializes the action.
        * @param {Number} t time in seconds
        * @param {Array} c Array of points
        * @return {Boolean}
        */
        public initWithDuration(t:number, c:Vec2[]):boolean;
        public initWithDuration(t:number):boolean;

        public clone():BezierTo;

        public startWithTarget(target:Node):void;
    }

    /**
     * !#en An action that moves the target with a cubic Bezier curve to a destination point.
     * !#zh 按贝赛尔曲线轨迹移动到目标位置。
     * @method bezierTo
     * @param {Number} t
     * @param {Array} c array of points
     * @return {ActionInterval}
     * @example
     * // example
     * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
     * var bezierTo = cc.bezierTo(2, bezier);
     */
    export function bezierTo(t:number, c:Vec2[]):BezierTo;


    /* Scales a Node object to a zoom factor by modifying it's scale property.
    * @warning This action doesn't support "reverse"
    * @class ScaleTo
    * @extends ActionInterval
    * @param {Number} duration
    * @param {Number} sx  scale parameter in X
    * @param {Number} [sy] scale parameter in Y, if Null equal to sx
    * @example
    * // It scales to 0.5 in both X and Y.
    * var actionTo = new cc.ScaleTo(2, 0.5);
    *
    * // It scales to 0.5 in x and 2 in Y
    * var actionTo = new cc.ScaleTo(2, 0.5, 2);
    */
    export class ScaleTo extends ActionInterval {
        public constructor(duration:number, sx:number, sy?:number);

        /*
        * Initializes the action.
        * @param {Number} duration
        * @param {Number} sx
        * @param {Number} [sy=]
        * @return {Boolean}
        */
        public initWithDuration(duration:number, sx:number, sy?:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():ScaleTo;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;
    }

    /**
     * !#en Scales a Node object to a zoom factor by modifying it's scale property.
     * !#zh 将节点大小缩放到指定的倍数。
     * @method scaleTo
     * @param {Number} duration
     * @param {Number} sx  scale parameter in X
     * @param {Number} [sy] scale parameter in Y, if Null equal to sx
     * @return {ActionInterval}
     * @example
     * // example
     * // It scales to 0.5 in both X and Y.
     * var actionTo = cc.scaleTo(2, 0.5);
     *
     * // It scales to 0.5 in x and 2 in Y
     * var actionTo = cc.scaleTo(2, 0.5, 2);
     */
    export function scaleTo(duration:number, sx:number, sy?:number):ScaleTo;


    /* Scales a Node object a zoom factor by modifying it's scale property.
    * Relative to its changes.
    * @class ScaleBy
    * @extends ScaleTo
    */
    export class ScaleBy extends ScaleTo {
        // public startWithTarget(target:Node):void;

        public reverse():ScaleBy;

        public clone():ScaleBy;
    }

    /**
     * !#en
     * Scales a Node object a zoom factor by modifying it's scale property.
     * Relative to its changes.
     * !#zh 按指定的倍数缩放节点大小。
     * @method scaleBy
     * @param {Number} duration duration in seconds
     * @param {Number} sx sx  scale parameter in X
     * @param {Number|Null} [sy=] sy scale parameter in Y, if Null equal to sx
     * @return {ActionInterval}
     * @example
     * // example without sy, it scales by 2 both in X and Y
     * var actionBy = cc.scaleBy(2, 2);
     *
     * //example with sy, it scales by 0.25 in X and 4.5 in Y
     * var actionBy2 = cc.scaleBy(2, 0.25, 4.5);
     */
    export function scaleBy(duration:number, sx:number, sy?:number):ScaleBy;

    /* Blinks a Node object by modifying it's visible property
    * @class Blink
    * @extends ActionInterval
    * @param {Number} duration  duration in seconds
    * @param {Number} blinks  blinks in times
    * @example
    * var action = new cc.Blink(2, 10);
    */
    export class Blink extends ActionInterval {
        public constructor(duration:number, blinks:number);

        /*
        * Initializes the action.
        * @param {Number} duration duration in seconds
        * @param {Number} blinks blinks in times
        * @return {Boolean}
        */
        public initWithDuration(duration:number, blinks:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():Blink;

        // public update(dt:number):void;

        // public startWithTarget(target:Node):void;

        // public stop():void;

        public reverse():Blink;
    }

    /**
     * !#en Blinks a Node object by modifying it's visible property.
     * !#zh 闪烁（基于透明度）。
     * @method blink
     * @param {Number} duration  duration in seconds
     * @param {Number} blinks blinks in times
     * @return {ActionInterval}
     * @example
     * // example
     * var action = cc.blink(2, 10);
     */
    export function blink(duration:number, blinks:number):Blink;

    /* Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
    * @warning This action doesn't support "reverse"
    * @class FadeTo
    * @extends ActionInterval
    * @param {Number} duration
    * @param {Number} opacity 0-255, 0 is transparent
    * @example
    * var action = new cc.FadeTo(1.0, 0);
    */
    export class FadeTo extends ActionInterval {
        public constructor(duration:number, opacity:number);

        /*
        * Initializes the action.
        * @param {Number} duration  duration in seconds
        * @param {Number} opacity
        * @return {Boolean}
        */
        public initWithDuration(duration:number, opacity:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():FadeTo;

        // public update(time:number):void;

        // public startWithTarget(target:Node):void;
    }

    /**
     * !#en
     * Fades an object that implements the cc.RGBAProtocol protocol.
     * It modifies the opacity from the current value to a custom one.
     * !#zh 修改透明度到指定值。
     * @method fadeTo
     * @param {Number} duration
     * @param {Number} opacity 0-255, 0 is transparent
     * @return {ActionInterval}
     * @example
     * // example
     * var action = cc.fadeTo(1.0, 0);
     */
    // cc.fadeTo = function (duration, opacity) {
    export function fadeTo(duration:number, opacity:number):FadeTo;

    /* Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.<br/>
    * The "reverse" of this action is FadeOut
    * @class FadeIn
    * @extends FadeTo
    * @param {Number} duration duration in seconds
    */
    export class FadeIn extends FadeTo {
        public constructor(duration:number);

        public reverse():FadeIn;

        public clone():FadeIn;

        // public startWithTarget(target:Node):void;
    }

    /**
     * !#en Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
     * !#zh 渐显效果。
     * @method fadeIn
     * @param {Number} duration duration in seconds
     * @return {ActionInterval}
     * @example
     * //example
     * var action = cc.fadeIn(1.0);
     */
    export function fadeIn(duration:number):FadeIn;


    /* Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
    * The "reverse" of this action is FadeIn
    * @class FadeOut
    * @extends FadeTo
    * @param {Number} duration duration in seconds
    */
    export class FadeOut extends FadeTo {
        public constructor(duration:number);

        public reverse():FadeOut;
        public clone():FadeOut;
    }

    /**
     * !#en Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     * !#zh 渐隐效果。
     * @method fadeOut
     * @param {Number} d  duration in seconds
     * @return {ActionInterval}
     * @example
     * // example
     * var action = cc.fadeOut(1.0);
     */
    export function fadeOut(duration:number):FadeOut;

    /* Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
    * @warning This action doesn't support "reverse"
    * @class TintTo
    * @extends ActionInterval
    * @param {Number} duration
    * @param {Number} red 0-255
    * @param {Number} green  0-255
    * @param {Number} blue 0-255
    * @example
    * var action = new cc.TintTo(2, 255, 0, 255);
    */
    // cc.TintTo = cc.ActionInterval.extend({
    export class TintTo extends ActionInterval {

        public constructor(duration:number, red:number, green:number, blue:number);

        /*
        * Initializes the action.
        * @param {Number} duration
        * @param {Number} red 0-255
        * @param {Number} green 0-255
        * @param {Number} blue 0-255
        * @return {Boolean}
        */
        public initWithDuration(duration:number, red:number, green:number, blue:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():TintTo;

        // public startWithTarget(target:Node):void;

        public update(dt:number):void;
    }

    /**
     * !#en Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * !#zh 修改颜色到指定值。
     * @method tintTo
     * @param {Number} duration
     * @param {Number} red 0-255
     * @param {Number} green  0-255
     * @param {Number} blue 0-255
     * @return {ActionInterval}
     * @example
     * // example
     * var action = cc.tintTo(2, 255, 0, 255);
     */
    export function tintTo(duration:number, red:number, green:number, blue:number):TintTo;


    /* Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
    * Relative to their own color change.
    * @class TintBy
    * @extends ActionInterval
    * @param {Number} duration  duration in seconds
    * @param {Number} deltaRed
    * @param {Number} deltaGreen
    * @param {Number} deltaBlue
    * @example
    * var action = new cc.TintBy(2, -127, -255, -127);
    */
    export class TintBy extends ActionInterval {
        public constructor(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number);

        /*
        * Initializes the action.
        * @param {Number} duration
        * @param {Number} deltaRed 0-255
        * @param {Number} deltaGreen 0-255
        * @param {Number} deltaBlue 0-255
        * @return {Boolean}
        */
        public initWithDuration(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):boolean;
        public initWithDuration(duration:number):boolean;

        public clone():TintBy;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():TintBy;
    }

    /**
     * !#en
     * Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * Relative to their own color change.
     * !#zh 按照指定的增量修改颜色。
     * @method tintBy
     * @param {Number} duration  duration in seconds
     * @param {Number} deltaRed
     * @param {Number} deltaGreen
     * @param {Number} deltaBlue
     * @return {ActionInterval}
     * @example
     * // example
     * var action = cc.tintBy(2, -127, -255, -127);
     */
    export function tintBy(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):TintBy;

    /* Delays the action a certain amount of seconds
    * @class DelayTime
    * @extends ActionInterval
    */
    export class DelayTime extends ActionInterval {
        // public update(dt:number):void;

        public reverse():DelayTime;

        public clone():DelayTime;
    }

    /**
     * !#en Delays the action a certain amount of seconds.
     * !#en 延迟指定的时间量。
     * @method delayTime
     * @param {Number} d duration in seconds
     * @return {ActionInterval}
     * @example
     * // example
     * var delay = cc.delayTime(1);
     */
    export function delayTime(duration:number):DelayTime;

    /*
    * <p>
    * Executes an action in reverse order, from time=duration to time=0                                     <br/>
    * @warning Use this action carefully. This action is not sequenceable.                                 <br/>
    * Use it as the default "reversed" method of your own actions, but using it outside the "reversed"      <br/>
    * scope is not recommended.
    * </p>
    * @class ReverseTime
    * @extends ActionInterval
    * @param {FiniteTimeAction} action
    * @example
    *  var reverse = new cc.ReverseTime(this);
    */
    export class ReverseTime extends ActionInterval {
        public constructor(action:FiniteTimeAction);

        /*
        * @param {FiniteTimeAction} action
        * @return {Boolean}
        */
        public initWithAction(action:FiniteTimeAction):boolean;

        public clone():ReverseTime;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():ReverseTime;

        public stop():void;
    }

    /**
     * !#en Executes an action in reverse order, from time=duration to time=0.
     * !#zh 反转目标动作的时间轴。
     * @method reverseTime
     * @param {FiniteTimeAction} action
     * @return {ActionInterval}
     * @example
     * // example
     *  var reverse = cc.reverseTime(this);
     */
    export function reverseTime(action:FiniteTimeAction):ReverseTime;

    /*
    * This API is deprecated, will be replaced by new API from {{#crossLink "Animation"}}cc.Animation{{/crossLink}}
    * Animates a sprite given the name of an Animation
    * @class Animate
    * @extends ActionInterval
    * @param {SpriteFrameAnimation} animation
    * @example
    * // create the animation with animation
    * var anim = new cc.Animate(dance_grey);
    */
    export class Animate extends ActionInterval {
        public constructor(animation:SpriteFrameAnimation);

        /*
        * @return {SpriteFrameAnimation}
        */
        public getAnimation():SpriteFrameAnimation;

        /*
        * @param {SpriteFrameAnimation} animation
        */
        public setAnimation(animation:SpriteFrameAnimation):void;

        /*
        * Gets the index of sprite frame currently displayed.
        * @return {Number}
        */
        public getCurrentFrameIndex():number;

        /*
        * @param {SpriteFrameAnimation} animation
        * @return {Boolean}
        */
        public initWithAnimation(animation:SpriteFrameAnimation):boolean;

        public clone():Animate;

        // public startWithTarget(target:Node):void;

        // public update(dt:number):void;

        public reverse():Animate;

        // public stop():void;
    }

    /*
    * create the animate with animation
    * @method animate
    * @param {SpriteFrameAnimation} animation
    * @return {ActionInterval}
    * @example
    * // example
    * // create the animation with animation
    * var anim = cc.animate(dance_grey);
    */
    export function animate(animation:SpriteFrameAnimation):Animate;

    /*
    * <p>
    * Overrides the target of an action so that it always runs on the target<br/>
    * specified at action creation rather than the one specified by runAction.
    * </p>
    * @class TargetedAction
    * @extends ActionInterval
    * @param {Node} target
    * @param {FiniteTimeAction} action
    */
    export class TargetedAction extends ActionInterval {
        public constructor(target:Node, action:FiniteTimeAction);

        /*
        * Init an action with the specified action and forced target
        * @param {Node} target
        * @param {FiniteTimeAction} action
        * @return {Boolean}
        */
        public initWithTarget(target:Node, action:FiniteTimeAction):boolean;

        public clone():TargetedAction;

        // public startWithTarget(target:Node):void;

        // public stop():void;

        // public update(dt:number):void;

        /*
        * return the target that the action will be forced to run with
        * @return {Node}
        */
        public getForcedTarget():Node;

        /*
        * set the target that the action will be forced to run with
        * @param {Node} forcedTarget
        */
        public setForcedTarget(forcedTarget:Node):void;
    }

    /**
     * !#en Create an action with the specified action and forced target.
     * !#zh 用已有动作和一个新的目标节点创建动作。
     * @method targetedAction
     * @param {Node} target
     * @param {FiniteTimeAction} action
     * @return {ActionInterval}
     */
    export function targetedAction(target:Node, action:FiniteTimeAction):TargetedAction;
}
