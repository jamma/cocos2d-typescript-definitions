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
    cc.EaseElastic = cc.ActionEase.extend({
        _period: 0.3,

        ctor:function(action, period){
            cc.ActionEase.prototype.ctor.call(this);

            action && this.initWithAction(action, period);
        },

        /**
         * get period of the wave in radians. default is 0.3
         * @return {Number}
         */
        getPeriod:function () {
            return this._period;
        },

        /**
         * set period of the wave in radians.
         * @param {Number} period
         */
        setPeriod:function (period) {
            this._period = period;
        },

        /**
         * Initializes the action with the inner action and the period in radians (default is 0.3)
         * @param {ActionInterval} action
         * @param {Number} [period=0.3]
         * @return {Boolean}
         */
        initWithAction:function (action, period) {
            cc.ActionEase.prototype.initWithAction.call(this, action);
            this._period = (period == null) ? 0.3 : period;
            return true;
        },

        reverse:function () {
            cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
            return null;
        },

        clone:function(){
            var action = new cc.EaseElastic();
            action.initWithAction(this._inner.clone(), this._period);
            return action;
        }
    });

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
    cc.EaseElasticIn = cc.EaseElastic.extend({
        update:function (dt) {
            var newT = 0;
            if (dt === 0 || dt === 1) {
                newT = dt;
            } else {
                var s = this._period / 4;
                dt = dt - 1;
                newT = -Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / this._period);
            }
            this._inner.update(newT);
        },

        reverse:function () {
            return new cc.EaseElasticOut(this._inner.reverse(), this._period);
        },

        clone:function(){
            var action = new cc.EaseElasticIn();
            action.initWithAction(this._inner.clone(), this._period);
            return action;
        }
    });

    //default ease elastic in object (period = 0.3)
    cc._easeElasticInObj = {
    easing:function(dt){
        if (dt === 0 || dt === 1)
            return dt;
        dt = dt - 1;
        return -Math.pow(2, 10 * dt) * Math.sin((dt - (0.3 / 4)) * Math.PI * 2 / 0.3);
    },
        reverse:function(){
            return cc._easeElasticOutObj;
        }
    };

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
    cc.easeElasticIn = function (period) {
        if(period && period !== 0.3){
            return {
                _period: period,
                easing: function (dt) {
                    if (dt === 0 || dt === 1)
                        return dt;
                    dt = dt - 1;
                    return -Math.pow(2, 10 * dt) * Math.sin((dt - (this._period / 4)) * Math.PI * 2 / this._period);
                },
                reverse:function () {
                    return cc.easeElasticOut(this._period);
                }
            };
        }
        return cc._easeElasticInObj;
    };

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
    cc.EaseElasticOut = cc.EaseElastic.extend({
        update:function (dt) {
            var newT = 0;
            if (dt === 0 || dt === 1) {
                newT = dt;
            } else {
                var s = this._period / 4;
                newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / this._period) + 1;
            }

            this._inner.update(newT);
        },

        reverse:function () {
            return new cc.EaseElasticIn(this._inner.reverse(), this._period);
        },

        clone:function(){
            var action = new cc.EaseElasticOut();
            action.initWithAction(this._inner.clone(), this._period);
            return action;
        }
    });

    //default ease elastic out object (period = 0.3)
    cc._easeElasticOutObj = {
        easing: function (dt) {
            return (dt === 0 || dt === 1) ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - (0.3 / 4)) * Math.PI * 2 / 0.3) + 1;
        },
        reverse:function(){
            return cc._easeElasticInObj;
        }
    };
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
    cc.easeElasticOut = function (period) {
        if(period && period !== 0.3){
            return {
                _period: period,
                easing: function (dt) {
                    return (dt === 0 || dt === 1) ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - (this._period / 4)) * Math.PI * 2 / this._period) + 1;
                },
                reverse:function(){
                    return cc.easeElasticIn(this._period);
                }
            };
        }
        return cc._easeElasticOutObj;
    };

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
    cc.EaseElasticInOut = cc.EaseElastic.extend({
        update:function (dt) {
            var newT = 0;
            var locPeriod = this._period;
            if (dt === 0 || dt === 1) {
                newT = dt;
            } else {
                dt = dt * 2;
                if (!locPeriod)
                    locPeriod = this._period = 0.3 * 1.5;

                var s = locPeriod / 4;
                dt = dt - 1;
                if (dt < 0)
                    newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod);
                else
                    newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1;
            }
            this._inner.update(newT);
        },

        reverse:function () {
            return new cc.EaseElasticInOut(this._inner.reverse(), this._period);
        },

        clone:function(){
            var action = new cc.EaseElasticInOut();
            action.initWithAction(this._inner.clone(), this._period);
            return action;
        }
    });

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
    cc.easeElasticInOut = function (period) {
        period = period || 0.3;
        return {
            _period: period,
            easing: function (dt) {
                var newT = 0;
                var locPeriod = this._period;
                if (dt === 0 || dt === 1) {
                    newT = dt;
                } else {
                    dt = dt * 2;
                    if (!locPeriod)
                        locPeriod = this._period = 0.3 * 1.5;
                    var s = locPeriod / 4;
                    dt = dt - 1;
                    if (dt < 0)
                        newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod);
                    else
                        newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1;
                }
                return newT;
            },
            reverse: function(){
                return cc.easeElasticInOut(this._period);
            }
        };
    };

    /**
     * !#en cc.EaseBounce abstract class.
     * !#zh 反弹缓动动作基类。
     * @class EaseBounce
     * @extends ActionEase
     */
    cc.EaseBounce = cc.ActionEase.extend({
        /**
         * @param {Number} time1
         * @return {Number}
         */
        bounceTime:function (time1) {
            if (time1 < 1 / 2.75) {
                return 7.5625 * time1 * time1;
            } else if (time1 < 2 / 2.75) {
                time1 -= 1.5 / 2.75;
                return 7.5625 * time1 * time1 + 0.75;
            } else if (time1 < 2.5 / 2.75) {
                time1 -= 2.25 / 2.75;
                return 7.5625 * time1 * time1 + 0.9375;
            }

            time1 -= 2.625 / 2.75;
            return 7.5625 * time1 * time1 + 0.984375;
        },

        clone:function(){
            var action = new cc.EaseBounce();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse:function () {
            return new cc.EaseBounce(this._inner.reverse());
        }
    });

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
    cc.EaseBounceIn = cc.EaseBounce.extend({
        update:function (dt) {
            var newT = 1 - this.bounceTime(1 - dt);
            this._inner.update(newT);
        },

        reverse:function () {
            return new cc.EaseBounceOut(this._inner.reverse());
        },

        clone:function(){
            var action = new cc.EaseBounceIn();
            action.initWithAction(this._inner.clone());
            return action;
        }
    });

    cc._bounceTime = function (time1) {
        if (time1 < 1 / 2.75) {
            return 7.5625 * time1 * time1;
        } else if (time1 < 2 / 2.75) {
            time1 -= 1.5 / 2.75;
            return 7.5625 * time1 * time1 + 0.75;
        } else if (time1 < 2.5 / 2.75) {
            time1 -= 2.25 / 2.75;
            return 7.5625 * time1 * time1 + 0.9375;
        }

        time1 -= 2.625 / 2.75;
        return 7.5625 * time1 * time1 + 0.984375;
    };

    cc._easeBounceInObj = {
        easing: function(dt){
            return 1 - cc._bounceTime(1 - dt);
        },
        reverse: function(){
            return cc._easeBounceOutObj;
        }
    };

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
    cc.easeBounceIn = function(){
        return cc._easeBounceInObj;
    };

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
    cc.EaseBounceOut = cc.EaseBounce.extend({
        update:function (dt) {
            var newT = this.bounceTime(dt);
            this._inner.update(newT);
        },

        reverse:function () {
            return new cc.EaseBounceIn(this._inner.reverse());
        },

        clone:function(){
            var action = new cc.EaseBounceOut();
            action.initWithAction(this._inner.clone());
            return action;
        }
    });

    cc._easeBounceOutObj = {
        easing: function(dt){
            return cc._bounceTime(dt);
        },
        reverse:function () {
            return cc._easeBounceInObj;
        }
    };

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
    cc.easeBounceOut = function(){
        return cc._easeBounceOutObj;
    };

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
    cc.EaseBounceInOut = cc.EaseBounce.extend({
        update:function (dt) {
            var newT = 0;
            if (dt < 0.5) {
                dt = dt * 2;
                newT = (1 - this.bounceTime(1 - dt)) * 0.5;
            } else {
                newT = this.bounceTime(dt * 2 - 1) * 0.5 + 0.5;
            }
            this._inner.update(newT);
        },

        clone:function(){
            var action = new cc.EaseBounceInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse:function () {
            return new cc.EaseBounceInOut(this._inner.reverse());
        }
    });

    cc._easeBounceInOutObj = {
        easing: function (time1) {
            var newT;
            if (time1 < 0.5) {
                time1 = time1 * 2;
                newT = (1 - cc._bounceTime(1 - time1)) * 0.5;
            } else {
                newT = cc._bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
            }
            return newT;
        },
        reverse: function(){
            return cc._easeBounceInOutObj;
        }
    };

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
    cc.easeBounceInOut = function(){
        return cc._easeBounceInOutObj;
    };

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
    cc.EaseBackIn = cc.ActionEase.extend({
        update:function (dt) {
            var overshoot = 1.70158;
            dt = dt===0 || dt===1 ? dt : dt * dt * ((overshoot + 1) * dt - overshoot);
            this._inner.update(dt);
        },

        reverse:function () {
            return new cc.EaseBackOut(this._inner.reverse());
        },

        clone:function(){
            var action = new cc.EaseBackIn();
            action.initWithAction(this._inner.clone());
            return action;
        }
    });

    cc._easeBackInObj = {
        easing: function (time1) {
            var overshoot = 1.70158;
            return (time1===0 || time1===1) ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot);
        },
        reverse: function(){
            return cc._easeBackOutObj;
        }
    };

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
    cc.easeBackIn = function(){
        return cc._easeBackInObj;
    };

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
    cc.EaseBackOut = cc.ActionEase.extend({
        update:function (dt) {
            var overshoot = 1.70158;
            dt = dt - 1;
            this._inner.update(dt * dt * ((overshoot + 1) * dt + overshoot) + 1);
        },

        reverse:function () {
            return new cc.EaseBackIn(this._inner.reverse());
        },

        clone:function(){
            var action = new cc.EaseBackOut();
            action.initWithAction(this._inner.clone());
            return action;
        }
    });

    cc._easeBackOutObj = {
        easing: function (time1) {
            var overshoot = 1.70158;
            time1 = time1 - 1;
            return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1;
        },
        reverse: function(){
            return cc._easeBackInObj;
        }
    };

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
    cc.easeBackOut = function(){
        return cc._easeBackOutObj;
    };

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
    cc.EaseBackInOut = cc.ActionEase.extend({
        update:function (dt) {
            var overshoot = 1.70158 * 1.525;
            dt = dt * 2;
            if (dt < 1) {
                this._inner.update((dt * dt * ((overshoot + 1) * dt - overshoot)) / 2);
            } else {
                dt = dt - 2;
                this._inner.update((dt * dt * ((overshoot + 1) * dt + overshoot)) / 2 + 1);
            }
        },

        clone:function(){
            var action = new cc.EaseBackInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse:function () {
            return new cc.EaseBackInOut(this._inner.reverse());
        }
    });

    cc._easeBackInOutObj = {
        easing: function (time1) {
            var overshoot = 1.70158 * 1.525;
            time1 = time1 * 2;
            if (time1 < 1) {
                return (time1 * time1 * ((overshoot + 1) * time1 - overshoot)) / 2;
            } else {
                time1 = time1 - 2;
                return (time1 * time1 * ((overshoot + 1) * time1 + overshoot)) / 2 + 1;
            }
        },
        reverse: function(){
            return cc._easeBackInOutObj;
        }
    };

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
    cc.easeBackInOut = function(){
        return cc._easeBackInOutObj;
    };

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
    cc.EaseBezierAction = cc.ActionEase.extend({

        _p0: null,
        _p1: null,
        _p2: null,
        _p3: null,

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Initialization requires the application of Bessel curve of action.
         * @param {Action} action
         */
        ctor: function(action){
            cc.ActionEase.prototype.ctor.call(this, action);
        },

        _updateTime: function(a, b, c, d, t){
            return (Math.pow(1-t,3) * a + 3*t*(Math.pow(1-t,2))*b + 3*Math.pow(t,2)*(1-t)*c + Math.pow(t,3)*d );
        },

        update: function(dt){
            var t = this._updateTime(this._p0, this._p1, this._p2, this._p3, dt);
            this._inner.update(t);
        },

        clone: function(){
            var action = new cc.EaseBezierAction();
            action.initWithAction(this._inner.clone());
            action.setBezierParamer(this._p0, this._p1, this._p2, this._p3);
            return action;
        },

        reverse: function(){
            var action = new cc.EaseBezierAction(this._inner.reverse());
            action.setBezierParamer(this._p3, this._p2, this._p1, this._p0);
            return action;
        },

        /**
         * Set of 4 reference point
         * @param p0
         * @param p1
         * @param p2
         * @param p3
         */
        setBezierParamer: function(p0, p1, p2, p3){
            this._p0 = p0 || 0;
            this._p1 = p1 || 0;
            this._p2 = p2 || 0;
            this._p3 = p3 || 0;
        }
    });

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
    cc.easeBezierAction = function(p0, p1, p2, p3){
        return {
            easing: function(time){
                return cc.EaseBezierAction.prototype._updateTime(p0, p1, p2, p3, time);
            },
            reverse: function(){
                return cc.easeBezierAction(p3, p2, p1, p0);
            }
        };
    };

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
    cc.EaseQuadraticActionIn = cc.ActionEase.extend({

        _updateTime: function(time){
            return Math.pow(time, 2);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuadraticActionIn();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuadraticActionIn(this._inner.reverse());
        }

    });

    cc._easeQuadraticActionIn = {
        easing: cc.EaseQuadraticActionIn.prototype._updateTime,
        reverse: function(){
            return cc._easeQuadraticActionIn;
        }
    };

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
    cc.easeQuadraticActionIn = function(){
        return cc._easeQuadraticActionIn;
    };

    /*
    * cc.EaseQuadraticActionIn action. <br />
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
    cc.EaseQuadraticActionOut = cc.ActionEase.extend({

        _updateTime: function(time){
            return -time*(time-2);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuadraticActionOut();
            action.initWithAction();
            return action;
        },

        reverse: function(){
            return new cc.EaseQuadraticActionOut(this._inner.reverse());
        }
    });

    cc._easeQuadraticActionOut = {
        easing: cc.EaseQuadraticActionOut.prototype._updateTime,
        reverse: function(){
            return cc._easeQuadraticActionOut;
        }
    };
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
    cc.easeQuadraticActionOut = function(){
        return cc._easeQuadraticActionOut;
    };

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
    cc.EaseQuadraticActionInOut = cc.ActionEase.extend({
        _updateTime: function(time){
            var resultTime = time;
            time *= 2;
            if(time < 1){
                resultTime = time * time * 0.5;
            }else{
                --time;
                resultTime = -0.5 * ( time * ( time - 2 ) - 1)
            }
            return resultTime;
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuadraticActionInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuadraticActionInOut(this._inner.reverse());
        }
    });

    cc._easeQuadraticActionInOut = {
        easing: cc.EaseQuadraticActionInOut.prototype._updateTime,
        reverse: function(){
            return cc._easeQuadraticActionInOut;
        }
    };

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
    cc.easeQuadraticActionInOut = function(){
        return cc._easeQuadraticActionInOut;
    };

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
    cc.EaseQuarticActionIn = cc.ActionEase.extend({
        _updateTime: function(time){
            return time * time * time * time;
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuarticActionIn();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuarticActionIn(this._inner.reverse());
        }
    });

    cc._easeQuarticActionIn = {
        easing: cc.EaseQuarticActionIn.prototype._updateTime,
        reverse: function(){
            return cc._easeQuarticActionIn;
        }
    };
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
    cc.easeQuarticActionIn = function(){
        return cc._easeQuarticActionIn;
    };

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
    cc.EaseQuarticActionOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time -= 1;
            return -(time * time * time * time - 1);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuarticActionOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuarticActionOut(this._inner.reverse());
        }
    });

    cc._easeQuarticActionOut = {
        easing: cc.EaseQuarticActionOut.prototype._updateTime,
        reverse: function(){
            return cc._easeQuarticActionOut;
        }
    };

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
    cc.easeQuarticActionOut = function(){
        return cc._easeQuarticActionOut;
    };

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
    cc.EaseQuarticActionInOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time = time*2;
            if (time < 1)
                return 0.5 * time * time * time * time;
            time -= 2;
            return -0.5 * (time * time * time * time - 2);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuarticActionInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuarticActionInOut(this._inner.reverse());
        }
    });

    cc._easeQuarticActionInOut = {
        easing: cc.EaseQuarticActionInOut.prototype._updateTime,
        reverse: function(){
            return cc._easeQuarticActionInOut;
        }
    };
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
    cc.easeQuarticActionInOut = function(){
        return cc._easeQuarticActionInOut;
    };

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
    cc.EaseQuinticActionIn = cc.ActionEase.extend({
        _updateTime: function(time){
            return time * time * time * time * time;
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuinticActionIn();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuinticActionIn(this._inner.reverse());
        }
    });

    cc._easeQuinticActionIn = {
        easing: cc.EaseQuinticActionIn.prototype._updateTime,
        reverse: function(){
            return cc._easeQuinticActionIn;
        }
    };

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
    cc.easeQuinticActionIn = function(){
        return cc._easeQuinticActionIn;
    };

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
    cc.EaseQuinticActionOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time -=1;
            return (time * time * time * time * time + 1);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuinticActionOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuinticActionOut(this._inner.reverse());
        }
    });

    cc._easeQuinticActionOut = {
        easing: cc.EaseQuinticActionOut.prototype._updateTime,
        reverse: function(){
            return cc._easeQuinticActionOut;
        }
    };

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
    cc.easeQuinticActionOut = function(){
        return cc._easeQuinticActionOut;
    };

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
    cc.EaseQuinticActionInOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time = time*2;
            if (time < 1)
                return 0.5 * time * time * time * time * time;
            time -= 2;
            return 0.5 * (time * time * time * time * time + 2);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseQuinticActionInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseQuinticActionInOut(this._inner.reverse());
        }
    });

    cc._easeQuinticActionInOut = {
        easing: cc.EaseQuinticActionInOut.prototype._updateTime,
        reverse: function(){
            return cc._easeQuinticActionInOut;
        }
    };

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
    cc.easeQuinticActionInOut = function(){
        return cc._easeQuinticActionInOut;
    };

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
    cc.EaseCircleActionIn = cc.ActionEase.extend({
        _updateTime: function(time){
            return -1 * (Math.sqrt(1 - time * time) - 1);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseCircleActionIn();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseCircleActionIn(this._inner.reverse());
        }
    });

    cc._easeCircleActionIn = {
        easing: cc.EaseCircleActionIn.prototype._updateTime,
        reverse: function(){
            return cc._easeCircleActionIn;
        }
    };

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
    cc.easeCircleActionIn = function(){
        return cc._easeCircleActionIn;
    };

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
    cc.EaseCircleActionOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time = time - 1;
            return Math.sqrt(1 - time * time);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseCircleActionOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseCircleActionOut(this._inner.reverse());
        }
    });

    cc._easeCircleActionOut = {
        easing: cc.EaseCircleActionOut.prototype._updateTime,
        reverse: function(){
            return cc._easeCircleActionOut;
        }
    };

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
    cc.easeCircleActionOut = function(){
        return cc._easeCircleActionOut;
    };

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
    cc.EaseCircleActionInOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time = time * 2;
            if (time < 1)
                return -0.5 * (Math.sqrt(1 - time * time) - 1);
            time -= 2;
            return 0.5 * (Math.sqrt(1 - time * time) + 1);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseCircleActionInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseCircleActionInOut(this._inner.reverse());
        }
    });

    cc._easeCircleActionInOut = {
        easing: cc.EaseCircleActionInOut.prototype._updateTime,
        reverse: function(){
            return cc._easeCircleActionInOut;
        }
    };

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
    cc.easeCircleActionInOut = function(){
        return cc._easeCircleActionInOut;
    };

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
    cc.EaseCubicActionIn = cc.ActionEase.extend({
        _updateTime: function(time){
            return time * time * time;
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseCubicActionIn();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseCubicActionIn(this._inner.reverse());
        }
    });

    cc._easeCubicActionIn = {
        easing: cc.EaseCubicActionIn.prototype._updateTime,
        reverse: function(){
            return cc._easeCubicActionIn;
        }
    };

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
    cc.easeCubicActionIn = function(){
        return cc._easeCubicActionIn;
    };

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
    cc.EaseCubicActionOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time -= 1;
            return (time * time * time + 1);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseCubicActionOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseCubicActionOut(this._inner.reverse());
        }
    });

    cc._easeCubicActionOut = {
        easing: cc.EaseCubicActionOut.prototype._updateTime,
        reverse: function(){
            return cc._easeCubicActionOut;
        }
    };

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
    cc.easeCubicActionOut = function(){
        return cc._easeCubicActionOut;
    };

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
    cc.EaseCubicActionInOut = cc.ActionEase.extend({
        _updateTime: function(time){
            time = time*2;
            if (time < 1)
                return 0.5 * time * time * time;
            time -= 2;
            return 0.5 * (time * time * time + 2);
        },

        update: function(dt){
            this._inner.update(this._updateTime(dt));
        },

        clone: function(){
            var action = new cc.EaseCubicActionInOut();
            action.initWithAction(this._inner.clone());
            return action;
        },

        reverse: function(){
            return new cc.EaseCubicActionInOut(this._inner.reverse());
        }
    });

    cc._easeCubicActionInOut = {
        easing: cc.EaseCubicActionInOut.prototype._updateTime,
        reverse: function(){
            return cc._easeCubicActionInOut;
        }
    };

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
    cc.easeCubicActionInOut = function(){
        return cc._easeCubicActionInOut;
    };

}
