/// <reference path="../cocos-creator-lib.d.ts" />


declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/animation-animator.js
    //+--------------------------------------------------------------------------------

    export class AnimationAnimator extends Animator {
        public constructor(target:Node, animation:Animation);
        public playState(state:AnimationState, startTime:number):void;
        public addAnimation(anim:Animation):void;
        public removeAnimation(anim:Animation):void;
        public sample():void;
        public stopState(state:AnimationState):void;
        public pauseState(state:AnimationState):void;
        public resumeState(state:AnimationState):void;
        public setStateTime(state:AnimationState, time:number):void;
        // public onStop():void;
        // public onPause():void;
        // public onResume():void;

    }

    // 这个方法应该是 SampledAnimCurve 才能用
    // export function createBatchedProperty (propPath:string, firstDotIndex:number, mainValue:????, animValue:????):????;
    // export function splitPropPath(propPath:string):string[];
    // export function initClipData (root:???, state:AnimationState):void;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/animation-clip.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en Class for animation data handling.
     * !#zh 动画剪辑，用于存储动画数据。
     * @class AnimationClip
     * @extends Asset
     * @constructor
     */
    // var AnimationClip = cc.Class({
    export class AnimationClip extends Asset {
        // name: 'cc.AnimationClip',
        // extends: cc.Asset,

        /**
         * !#en Duration of this animation.
         * !#zh 动画的持续时间。
         * @property duration
         * @type {Number}
         */
        public readonly duration:number;

        /**
         * !#en FrameRate of this animation.
         * !#zh 动画的帧速率。
         * @property sample
         * @type {Number}
         */
        public readonly sample:number;

        /**
         * !#en Speed of this animation.
         * !#zh 动画的播放速度。
         * @property speed
         * @type {Number}
         */
        public readonly speed:number;

        /**
         * !#en WrapMode of this animation.
         * !#zh 动画的循环模式。
         * @property wrapMode
         * @type {WrapMode}
         */
        public readonly wrapMode:WrapMode;

        /**
         * !#en Curve data.
         * !#zh 曲线数据。
         * @property curveData
         * @type {Object}
         * @example {@link utils/api/engine/docs/cocos2d/core/animation-clip/curve-data.js}
         */
        public readonly curveData:AnimCurve;

        /**
         * !#en Event data.
         * !#zh 事件数据。
         * @property events
         * @type {Array}
         * @example {@link utils/api/engine/docs/cocos2d/core/animation-clip/event-data.js}
         */
        public readonly events:Event[];
        public readonly speed:number;
        public readonly speed:number;
        public readonly speed:number;

        /**
         * !#en Crate clip with a set of sprite frames
         * !#zh 使用一组序列帧图片来创建动画剪辑
         * @method createWithSpriteFrames
         * @param {[SpriteFrame]} spriteFrames
         * @param {Number} sample
         * @return {AnimationClip}
         * @example
         *
         * var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
         * 
         */
        public static createWithSpriteFrames(spriteFrames:SpriteFrame[], sample:number):AnimationClip;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/animation-curves.js
    //+--------------------------------------------------------------------------------

    // var bezierByTime = require('./bezier').bezierByTime;

    // var binarySearch = require('./binary-search');
    // var WrapModeMask = require('./types').WrapModeMask;

    /**
     * Compute a new ratio by curve type
     * @param {Number} ratio - The origin ratio
     * @param {Array|String} type - If it's Array, then ratio will be computed with bezierByTime. If it's string, then ratio will be computed with cc.Easing function
     */
    export function computeRatioByType (ratio:number, type:number[]|string):number;

    //
    // 动画数据类，相当于 AnimationClip。
    // 虽然叫做 AnimCurve，但除了曲线，可以保存任何类型的值。
    //
    // @class AnimCurve
    // @constructor
    //
    // var AnimCurve = cc.Class({
    export class AnimCurve {
        //
        // @method sample
        // @param {number} time
        // @param {number} ratio - The normalized time specified as a number between 0.0 and 1.0 inclusive.
        // @param {AnimationNode} animationNode
        //
        public sample(time:number, ratio:number, animationNode:AnimationNode):void;

        public onTimeChangedManually():void;
    }

    //
    // 区别于 SampledAnimCurve。
    //
    // @class DynamicAnimCurve
    // @constructor
    // @extends AnimCurve
    //
    // var DynamicAnimCurve = cc.Class({
    export class DynamicAnimCurve extends AnimCurve {
        // The object being animated.
        // @property target
        // @type {object}
        public target:Node;

        // The name of the property being animated.
        // @property prop
        // @type {string}
        public prop:string;

        // The values of the keyframes. (y)
        // @property values
        // @type {any[]}
        public values:any[];

        // The keyframe ratio of the keyframe specified as a number between 0.0 and 1.0 inclusive. (x)
        // @property ratios
        // @type {number[]}
        public ratios:number[];

        // @property types
        // @param {object[]}
        // Each array item maybe type:
        // - [x, x, x, x]: Four control points for bezier
        // - null: linear
        public types:any[];

        // @property {string[]} subProps - The path of sub property being animated.
        public subProps:string[];

        // public static Linear();
        public static Bezier(controlPoints:number[]):number[];
    }


    /**
     * SampledAnimCurve, 这里面的数值需要是已经都预先sample好了的,
     * 所以 SampledAnimCurve 中查找 frame index 的速度会非常快
     *
     * @class SampledAnimCurve
     * @private
     * @constructor
     * @extends DynamicAnimCurve
     */
    export class SampledAnimCurve extends DynamicAnimCurve {
    }


    /**
     * Event information,
     * @class EventInfo
     * @constructor
     */
    // TODO: Figure out the proper signature for this, not quite sure what it is yet ...
    export class EventInfo {
        public events:Event[];

        /**
         * @param {Function} [func] event function
         * @param {Object[]} [params] event params
         */
        public add(func:any, params:any[]);
    }


    /**
     *
     * @class EventAnimCurve
     * @constructor
     * @extends AnimCurve
     */
    export class EventAnimCurve extends AnimCurve {
        /**
         * The object being animated.
         * @property target
         * @type {object}
         */
        public target:Node;

        /** The keyframe ratio of the keyframe specified as a number between 0.0 and 1.0 inclusive. (x)
         * @property ratios
         * @type {number[]}
         */
        public ratios:number[];

        /**
         * @property events
         * @type {EventInfo[]}
         */
        public events:EventInfo[];

        public onTimeChangedManually():void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/animation-manager.js
    //+--------------------------------------------------------------------------------
    export class AnimationManager {
        public constructor();
        public update(dt:number):void;
        public destruct():void;

        /**
         * @param {Animator} animator
         */
        public addAnimator(animator:Animator):void;

        /**
         * @param {Animator} animator
         */
        public removeAnimator(animator:Animator):void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/animation-state.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en
     * The AnimationState gives full control over animation playback process.
     * In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.
     * !#zh
     * AnimationState 完全控制动画播放过程。<br/>
     * 大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。
     * @class AnimationState
     * @extends AnimationNode
     * @constructor
     */
    export class AnimationState extends AnimationNode {
        /**
         * !#en The clip that is being played by this animation state.
         * !#zh 此动画状态正在播放的剪辑。
         * @property clip
         * @type {AnimationClip}
         * @final
         */
        public readonly state:AnimationClip;

        /**
         * !#en The name of the playing animation.
         * !#zh 动画的名字
         * @property name
         * @type {String}
         * @readOnly
         */
        public readonly name:string;

        public curveLoaded:boolean;

        /**
         * @method AnimationState
         * @param {AnimationClip} clip
         * @param {String} [name]
         * @return {AnimationState}
         */
        public constructor(clip:AnimationClip, name?:string);

        // public onPlay():void;
        // public onStop():void;
        // public setTime(time:number):void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/animators.js
    //+--------------------------------------------------------------------------------
    // var JS = cc.js;
    // var Playable = require('./playable');
    // var AnimationNode = require('./types').AnimationNode;
    // var DynamicAnimCurve = require('./animation-curves').DynamicAnimCurve;

    // The base of animators
    // function Animator (target) {
    //     this.target = target;
    //     // {AnimationNodeBase}
    //     this.playingAnims = [];

    //     this._updating = false;
    //     this._removeList = [];
    // }

    // JS.extend(Animator, Playable);

    // var animProto = Animator.prototype;
    export class Animator extends Playable {
        // // 由 AnimationManager 调用，只有在该 animator 处于播放状态时才会被调用
        // public update(dt:number):void;
        public onPlay():void;
        public onStop():void;
        public addAnimation(anim:Animation):void;
        public removeAnimation(anim:Animation):void;
        
    }


    // The actual animator for Entity
    // function EntityAnimator (target) {
    //     Animator.call(this, target);
    // }
    // JS.extend(EntityAnimator, Animator);

    // var entProto = EntityAnimator.prototype;
    export class EntityAnimator extends Animator {
        /**
        * @param {object[]} keyFrames
        * @param {object} [timingInput] - This dictionary is used as a convenience for specifying the timing properties of an Animation in bulk.
        * @return {AnimationNode}
        */
        // TODO: Figure out proper interfaces for KeyFrame and timing input parameters
        public animate(keyFrames:KeyFrame[], timingInput?:{}):AnimationNode;
    }

    // 通用逻辑

    // export function computeNullRatios(keyFrames:KeyFrame[]):void;


    // 具体逻辑

    // export function findCurve (curves:???, target:Node, propName:string):AnimCurve;
    // export function createPropCurve(curves:???, target:Node, propName:string, value:number, ratio:number):void;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/bezier.js
    //+--------------------------------------------------------------------------------
    // export function bezier (C1:number, C2:number, C3:number, C4:number, t:number):number;

    // export function crt (v:number):number;

    // Modified from http://jsbin.com/yibipofeqi/1/edit, optimized for animations.
    // The origin Cardano's algorithm is based on http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
    // function cardano (curve, x) {
    // export function cardano (curve:number[], x:number):number;
    // export function bezierByTime(controlPoints:number[], x:number):number;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/binary-search.js
    //+--------------------------------------------------------------------------------
    export const EPSILON:number;

    //
    // Searches the entire sorted Array for an element and returns the zero-based index of the element.
    // @method binarySearch
    // @param {number[]} array
    // @param {number} value
    // @return {number} The zero-based index of item in the sorted Array, if item is found; otherwise, a negative number that is the bitwise complement of the index of the next element that is larger than item or, if there is no larger element, the bitwise complement of array's length.
    //
    export function binarySearch(array:number[], value:number):number;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/easing.js
    //+--------------------------------------------------------------------------------
    export class Easing {
    // var Easing = {
        public constant():number;
        public linear(k:number):number;

        // quad
        //  Easing equation function for a quadratic (t^2)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.

        public quadIn(k):number;
        public quadOut(k):number;
        public quadInOut(k):number;
        public quadOutIn(k):number;

        // cubic
        //  Easing equation function for a cubic (t^3)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        public cubicIn(k):number;
        public cubicOut(k):number;
        public cubicInOut(k):number;
        public cubicOutIn(k):number;

        // quart
        //  Easing equation function for a quartic (t^4)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        public quartIn(k):number;
        public quartOut(k):number;
        public quartInOut(k):number;
        public quartOutIn(k):number;

        // quint
        //  Easing equation function for a quintic (t^5)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        public quintIn(k):number;
        public quintOut(k):number;
        public quintInOut(k):number;
        public quintOutIn(k):number;

        // sine
        //  Easing equation function for a sinusoidal (sin(t))
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        public sineIn(k):number;
        public sineOut(k):number;
        public sineInOut(k):number;
        public sineOutIn(k):number;

        // expo
        //  Easing equation function for an exponential (2^t)
        //  param t: Current time (in frames or seconds).
        //  return: The correct value.
        public expoIn(k):number;
        public expoOut(k):number;
        public expoInOut(k):number;
        public expoOutIn(k):number;

        // circ
        //  Easing equation function for a circular (sqrt(1-t^2))
        //  @param t: Current time (in frames or seconds).
        //  @return:	The correct value.
        public circIn(k):number;
        public circOut(k):number;
        public circInOut(k):number;
        public circOutIn(k):number;

        // elastic
        //  Easing equation function for an elastic (exponentially decaying sine wave)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        //  recommand value: elastic (t)
        public elasticIn(k):number;
        public elasticOut(k):number;
        public elasticInOut(k):number;


        // back
        //  Easing equation function for a back (overshooting cubic easing: (s+1)*t^3 - s*t^2)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        public backIn(k):number;
        public backOut(k):number;
        public backInOut(k):number;
        public backOutIn(k):number;

        // bounce
        //  Easing equation function for a bounce (exponentially decaying parabolic bounce)
        //  @param t: Current time (in frames or seconds).
        //  @return: The correct value.
        public bounceOut(k):number;
        public bounceIn(k):number;
        public bounceInOut(k):number;
        public bounceOutIn(k):number;

        // smooth
        // t<=0: 0 | 0<t<1: 3*t^2 - 2*t^3 | t>=1: 1
        public smooth(t):number;

        // fade
        // t<=0: 0 | 0<t<1: 6*t^5 - 15*t^4 + 10*t^3 | t>=1: 1
        public fade(t):number;

    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/motion-path-helper.js
    //+--------------------------------------------------------------------------------
    // var DynamicAnimCurve = require('./animation-curves').DynamicAnimCurve;
    // var computeRatioByType = require('./animation-curves').computeRatioByType;

    // var bezier = require('./bezier').bezier;
    // var binarySearch = require('./binary-search');

    // var v2 = cc.v2;

    // function Curve (points) {
    export class Curve {
        public constructor(points:Vec2[]);
        // this.points = points || [];
        // this.beziers = [];
        // this.ratios = [];
        // this.progresses = [];

        // this.length = 0;

        // this.computeBeziers();

    // Curve.prototype.computeBeziers = function () {
        public computeBeziers():Bezier[];
    }

    // function Bezier () {
    export class Bezier {
        public start:Vec2;
        public end:Vec2;
        public startCtrlPoint:Vec2;
        public endCtrlPoint:Vec2;

        public getPointAt(u:number):Vec2;
        public getPoint(t:number):Vec2;
        public getLength():number;
        public getLengths(divisions:number):number[];
        public getUtoTmapping(u:number, distance:number):number;
    }


    // export function sampleMotionPaths(motionPaths:???, data:???, duration:number, fps:number):void;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/playable.js
    //+--------------------------------------------------------------------------------

    /**
     * @class Playable
     * @constructor
     */
    // function Playable () {
    //     this._isPlaying = false;
    //     this._isPaused = false;
    //     this._stepOnce = false;
    // }

    // var prototype = Playable.prototype;
    export class Playable {

        /**
         * !#en Is playing or paused in play mode?
         * !#zh 当前是否正在播放。
         * @property isPlaying
         * @type {boolean}
         * @default false
         * @readOnly
         */
        public readonly isPlaying:boolean;

        /**
         * !#en Is currently paused? This can be true even if in edit mode(isPlaying == false).
         * !#zh 当前是否正在暂停
         * @property isPaused
         * @type {boolean}
         * @default false
         * @readOnly
         */
        public readonly isPaused:boolean;

        // virtual

        // var virtual = function () {};
        /**
         * @method onPlay
         * @private
         */
        // public readonly isPaused:boolean;
        // prototype.onPlay = virtual;
        public onPlay():void;

        /**
         * @method onPause
         * @private
         */
        // prototype.onPause = virtual;
        public onPause():void;

        /**
         * @method onResume
         * @private
         */
        // prototype.onResume = virtual;
        public onResume():void;

        /**
         * @method onStop
         * @private
         */
        // prototype.onStop = virtual;
        public onStop():void;

        /**
         * @method onError
         * @param {string} errorCode
         * @private
         */
        // prototype.onError = virtual;
        public onError():void;

        // public

        /**
         * !#en Play this animation.
         * !#zh 播放动画。
         * @method play
         */
        public play():void;

        /**
         * !#en Stop this animation.
         * !#zh 停止动画播放。
         * @method stop
         */
        public stop():void;

        /**
         * !#en Pause this animation.
         * !#zh 暂停动画。
         * @method pause
         */
        public pause():void;

        /**
         * !#en Resume this animation.
         * !#zh 重新播放动画。
         * @method resume
         */
        public resume():void;

        /**
         * !#en Perform a single frame step.
         * !#zh 执行一帧动画。
         * @method step
         */
        public step():void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/animation/types.js
    //+--------------------------------------------------------------------------------

    // var WrapModeMask = {
    //     Loop: 1 << 1,
    //     ShouldWrap: 1 << 2,
    //     // Reserved: 1 << 3,
    //     PingPong: 1 << 4 | 1 << 1 | 1 << 2,  // Loop, ShouldWrap
    //     Reverse: 1 << 5 | 1 << 2,      // ShouldWrap
    // };
    export enum WrapModeMask {
        Loop,
        ShouldWrap,
        PingPong,
        Reverse
    }

    /**
     * !#en Specifies how time is treated when it is outside of the keyframe range of an Animation.
     * !#zh 动画使用的循环模式。
     * @enum WrapMode
     * @memberof cc
     */
    // var WrapMode = cc.Enum({
    // export class WrapMode extends Enum {
    export enum WrapMode {

        /**
         * !#en Reads the default wrap mode set higher up.
         * !#zh 向 Animation Component 或者 AnimationClip 查找 wrapMode
         * @property {Number} Default
         */
        Default,

        /**
         * !#en All iterations are played as specified.
         * !#zh 动画只播放一遍
         * @property {Number} Normal
         */
        Normal,

        /**
         * !#en All iterations are played in the reverse direction from the way they are specified.
         * !#zh 从最后一帧或结束位置开始反向播放，到第一帧或开始位置停止
         * @property {Number} Reverse
         */
        Reverse,

        /**
         * !#en When time reaches the end of the animation, time will continue at the beginning.
         * !#zh 循环播放
         * @property {Number} Loop
         */
        Loop,

        /**
         * !#en All iterations are played in the reverse direction from the way they are specified.
         * And when time reaches the start of the animation, time will continue at the ending.
         * !#zh 反向循环播放
         * @property {Number} LoopReverse
         */
        LoopReverse,

        /**
         * !#en Even iterations are played as specified, odd iterations are played in the reverse direction from the way they
         * are specified.
         * !#zh 从第一帧播放到最后一帧，然后反向播放回第一帧，到第一帧后再正向播放，如此循环
         * @property {Number} PingPong
         */
        PingPong,

        /**
         * !#en Even iterations are played in the reverse direction from the way they are specified, odd iterations are played
         * as specified.
         * !#zh 从最后一帧开始反向播放，其他同 PingPong
         * @property {Number} PingPongReverse
         */
        PingPongReverse,
    }

    /**
     * !#en The abstract interface for all playing animation.
     * !#zh 所有播放动画的抽象接口。
     * @class AnimationNodeBase
     * @constructor
     * @extends Playable
     */
    // var AnimationNodeBase = function () {
    //     Playable.call(this);
    // };
    // JS.extend(AnimationNodeBase, Playable);
    export class AnimationNodeBase extends Playable {
        /**
         * @method update
         * @param {Number} deltaTime
         * @private
         */
        // public update(deltaTime:number):void;

    }

    export interface WrappedInfo {
        ratio:number;
        time:number;
        direction:number;
        stopped:boolean;
        iterations:number;
    }

    export class AnimationNode extends AnimationNodeBase implements EventTarget {
        public readonly animator:Animator;

        /**
         * !#en The curves list.
         * !#zh 曲线列表。
         * @property curves
         * @type {AnimCurve[]}
         */
        public curves:AnimCurve[];

        // http://www.w3.org/TR/web-animations/#idl-def-AnimationTiming

        /**
         * !#en The start delay which represents the number of seconds from an animation's start time to the start of
         * the active interval.
         * !#zh 延迟多少秒播放。
         *
         * @property delay
         * @type {Number}
         * @default 0
         */
        public delay:number;

        /**
         * !#en The animation's iteration count property.
         *
         * A real number greater than or equal to zero (including positive infinity) representing the number of times
         * to repeat the animation node.
         *
         * Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
         * calculations.
         *
         * !#zh 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）
         *
         * @property repeatCount
         * @type {Number}
         * @default 1
         */
        public repeatCount:number;

        /**
         * !#en The iteration duration of this animation in seconds. (length)
         * !#zh 单次动画的持续时间，秒。
         *
         * @property duration
         * @type {Number}
         * @readOnly
         */
        public duration:number;

        /**
         * !#en The animation's playback speed. 1 is normal playback speed.
         * !#zh 播放速率。
         * @property speed
         * @type {Number}
         * @default: 1.0
         */
        public speed:number;

        /**
         * !#en 
         * Wrapping mode of the playing animation.
         * Notice : dynamic change wrapMode will reset time and repeatCount property
         * !#zh 
         * 动画循环方式。
         * 需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount
         *
         * @property wrapMode
         * @type {WrapMode}
         * @default: WrapMode.Normal
         */
        public wrapMode:WrapMode;

        /**
         * !#en The current time of this animation in seconds.
         * !#zh 动画当前的时间，秒。
         * @property time
         * @type {Number}
         * @default 0
         */
        public time:number;

        /**
         * !#en The collection and instance of playing animations.
         * !#zh 动画曲线的集合，根据当前时间计算出每条曲线的状态。
         * @class AnimationNode
         * @extends AnimationNodeBase
         * @constructor
         * @param {Animator} animator
         * @param {AnimCurve[]} [curves]
         * @param {Object} [timingInput] - This dictionary is used as a convenience for specifying the timing properties of an Animation in bulk.
         */
        // TODO: Figure out interface for timingInput paramter
        public AnimationNode (animator:Animator, curves?:AnimCurve[], timingInput?:{});

        // public update(dt:number):void;

        public getWrappedInfo(time:number):WrappedInfo;
        public sample():void;
        public onStop():void;
        public onPlay():void;
        public onPause():void;
        public onResume():void;
        public getWrapMode():WrapMode;
        public setWrapMode(wrapMode:WrapMode):void;
    }

}

