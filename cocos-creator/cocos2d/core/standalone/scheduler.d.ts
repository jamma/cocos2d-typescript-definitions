/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/CCScheduler.js
    //+--------------------------------------------------------------------------------

    /**
     * @module cc
     */

    //data structures

    /*
     * A list double-linked list used for "updates with priority"
     * @class ListEntry
     * @param {ListEntry} prev
     * @param {ListEntry} next
     * @param {function} callback
     * @param {Object} target not retained (retained by hashUpdateEntry)
     * @param {Number} priority
     * @param {Boolean} paused
     * @param {Boolean} markedForDeletion selector will no longer be called and entry will be removed at end of the next tick
     */
    export type ListEntryCallback = (target:Object, dt:number)=>void;
    export class ListEntry {
        public constructor(prev:ListEntry, next:ListEntry, callback:ListEntryCallback, target:Object, priority:number, paused:boolean, markedForDeletion:boolean);
        public trigger(dt:number):void;
    }

    /*
     * A update entry list
     * @class HashUpdateEntry
     * @param {Array} list Which list does it belong to ?
     * @param {ListEntry} entry entry in the list
     * @param {Object} target hash key (retained)
     * @param {function} callback
     * @param {Array} hh
     */
    export class HashUpdateEntry {
        public constructor (list:any[], entry:ListEntry, target:Object, callback:Function, hh:any[]);

    }

    //
    /*
     * Hash Element used for "selectors with interval"
     * @class HashTimerEntry
     * @param {Array} timers
     * @param {Object} target  hash key (retained)
     * @param {Number} timerIndex
     * @param {Timer} currentTimer
     * @param {Boolean} currentTimerSalvaged
     * @param {Boolean} paused
     * @param {Array} hh
     */
    export class HashTimerEntry {
        public constructor(timers:any[], target:Object, timerIndex:number, currentTimer:Timer, currentTimerSalvaged:boolean, paused:boolean, hh:any[]);
    }

    /*
     * Light weight timer.
     * @class Timer
     */
    export class Timer extends Class {
        public constructor();

        public getInterval():number;
        public setInterval(interval:number):void;

        public setupTimerWithInterval(seconds:number, repeat:number, delay:number):void;

        // Both trigger and cancel return 0, but that makes no sense to me. Just mark their return values as void.
        public trigger():void;
        public cancel():void;

        public update(dt:number):void;
    }

    // var TimerTargetSelector = Timer.extend({
    export type TimerSelector = (target:Object, dt:number) => void;

    export class TimerTargetSelector extends Timer {
        public constructor();

        public initWithSelector(scheduler:Scheduler, target:Object, selector:TimerSelector, seconds:number, repeat:number, delay:number):boolean;

        public getSelector():TimerSelector;

        public trigger():void;

        public cancel():void;
    }

    // var getTargetId = function (target) {
    //     return target.__instanceId || target.uuid;
    // };

    /**
     * !#en
     * Scheduler is responsible of triggering the scheduled callbacks.<br/>
     * You should not use NSTimer. Instead use this class.<br/>
     * <br/>
     * There are 2 different types of callbacks (selectors):<br/>
     *     - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
     *     - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
     * <br/>
     * The 'custom selectors' should be avoided when possible. It is faster,
     * and consumes less memory to use the 'update callback'. *
     * !#zh
     * Scheduler 是负责触发回调函数的类。<br/>
     * 通常情况下，建议使用 cc.director.getScheduler() 来获取系统定时器。<br/>
     * 有两种不同类型的定时器：<br/>
     *     - update 定时器：每一帧都会触发。您可以自定义优先级。<br/>
     *     - 自定义定时器：自定义定时器可以每一帧或者自定义的时间间隔触发。<br/>
     * 如果希望每帧都触发，应该使用 update 定时器，使用 update 定时器更快，而且消耗更少的内存。
     *
     * @class Scheduler
     */
    // cc.Scheduler = cc._Class.extend({
    export class Scheduler extends Class {
        // Static constants
        /**
         * !#en Priority level reserved for system services.
         * !#zh 系统服务的优先级。
         * @property PRIORITY_SYSTEM
         * @type {Number}
         * @static
         */
        public static readonly PRIORITY_SYSTEM:number;

        /**
         * !#en Minimum priority level for user scheduling.
         * !#zh 用户调度最低优先级。
         * @property PRIORITY_NON_SYSTEM
         * @type {Number}
         * @static
         */
        public static readonly PRIORITY_NON_SYSTEM:number;

        // Instance methods
        public constructor();

        //-----------------------public method-------------------------
        /**
         * !#en
         * Modifies the time of all scheduled callbacks.<br/>
         * You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
         * Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
         * To create a 'fast forward' effect, use values higher than 1.0.<br/>
         * Note：It will affect EVERY scheduled selector / action.
         * !#zh
         * 设置时间间隔的缩放比例。<br/>
         * 您可以使用这个方法来创建一个 “slow motion（慢动作）” 或 “fast forward（快进）” 的效果。<br/>
         * 默认是 1.0。要创建一个 “slow motion（慢动作）” 效果,使用值低于 1.0。<br/>
         * 要使用 “fast forward（快进）” 效果，使用值大于 1.0。<br/>
         * 注意：它影响该 Scheduler 下管理的所有定时器。
         * @method setTimeScale
         * @param {Number} timeScale
         */
        public setTimeScale(timeScale:number):void;

        /**
         * !#en Returns time scale of scheduler.
         * !#zh 获取时间间隔的缩放比例。
         * @method getTimeScale
         * @return {Number}
         */
        public getTimeScale():number;

        /**
         * !#en 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
         * !#zh update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)
         * @method update
         * @param {Number} dt delta time
         */
        public update(dt:number):void;

        /**
         * !#en
         * <p>
         *   The scheduled method will be called every 'interval' seconds.</br>
         *   If paused is YES, then it won't be called until it is resumed.<br/>
         *   If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
         *   If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
         *   repeat let the action be repeated repeat + 1 times, use cc.macro.REPEAT_FOREVER to let the action run continuously<br/>
         *   delay is the amount of time the action will wait before it'll start<br/>
         * </p>
         * !#zh
         * 指定回调函数，调用对象等信息来添加一个新的定时器。</br>
         * 当时间间隔达到指定值时，设置的回调函数将会被调用。</br>
         * 如果 paused 值为 true，那么直到 resume 被调用才开始计时。</br>
         * 如果 interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样，
         * 建议使用 scheduleUpdateForTarget 代替。</br>
         * 如果回调函数已经被定时器使用，那么只会更新之前定时器的时间间隔参数，不会设置新的定时器。<br/>
         * repeat 值可以让定时器触发 repeat + 1 次，使用 cc.macro.REPEAT_FOREVER
         * 可以让定时器一直循环触发。<br/>
         * delay 值指定延迟时间，定时器会在延迟指定的时间之后开始计时。
         * @method scheduleCallbackForTarget
         * @deprecated since v3.4 please use .schedule
         * @param {Object} target
         * @param {Function} callback_fn
         * @param {Number} interval
         * @param {Number} repeat
         * @param {Number} delay
         * @param {Boolean} paused
         * @example {@link utils/api/engine/docs/cocos2d/core/CCScheduler/scheduleCallbackForTarget.js}
         */
        public scheduleCallbackForTarget(target:Object, callback_fn:Function, interval:number, repeat:number, delay:number, paused:boolean):void;
        // scheduleCallbackForTarget: function(target, callback_fn, interval, repeat, delay, paused){
        //     //cc.log("scheduleCallbackForTarget is deprecated. Please use schedule.");
        //     this.schedule(callback_fn, target, interval, repeat, delay, paused);
        // },

        /**
         * !#en The schedule
         * !#zh 定时器
         * @method schedule
         * @param {Function} callback
         * @param {Object} target
         * @param {Number} interval
         * @param {Number} repeat
         * @param {Number} delay
         * @param {Boolean} paused
         * @example {@link utils/api/engine/docs/cocos2d/core/CCScheduler/schedule.js}
         */
        public schedule(target:Object, callback_fn:Function, interval:number, repeat:number, delay:number, paused:boolean):void;

        /**
         * !#en
         * Schedules the update callback for a given target,
         * the callback will be invoked every frame after schedule started.
         * !#zh
         * 使用指定的优先级为指定的对象设置 update 定时器。
         * update 定时器每一帧都会被触发。优先级的值越低，定时器被触发的越早。
         * @method scheduleUpdate
         * @param {Object} target
         * @param {Number} priority
         * @param {Boolean} paused
         * @param {Function} updateFunc
         */
        public scheduleUpdate(target:Object, priority:number, paused:boolean, updateFunc:Function):void;

        /**
         * !#en
         * Unschedules a callback for a callback and a given target.
         * If you want to unschedule the "update", use `unscheduleUpdate()`
         * !#zh
         * 根据指定的回调函数和调用对象。
         * 如果需要取消 update 定时器，请使用 unscheduleUpdate()。
         * @method unschedule
         * @param {Function} callback The callback to be unscheduled
         * @param {Object} target The target bound to the callback.
         */
        public unschedule(callback:Function, target:Object):void;

        /** 
         * !#en Unschedules the update callback for a given target.
         * !#zh 取消指定对象的 update 定时器。
         * @method unscheduleUpdate
         * @param {Object} target The target to be unscheduled.
         */
        public unscheduleUpdate(target:Object):void;

        /** 
         * !#en
         * Unschedules all scheduled callbacks for a given target.
         * This also includes the "update" callback.
         * !#zh 取消指定对象的所有定时器，包括 update 定时器。
         * @method unscheduleAllForTarget
         * @param {Object} target The target to be unscheduled.
         */
        public unscheduleAllForTarget(target:Object):void;

        /**
         * !#en
         * Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
         * You should NEVER call this method, unless you know what you are doing.
         * !#zh
         * 取消所有对象的所有定时器，包括系统定时器。<br/>
         * 不用调用此函数，除非你确定你在做什么。
         * @method unscheduleAll
         */
        public unscheduleAll():void;

        /**
         * !#en
         * Unschedules all callbacks from all targets with a minimum priority.<br/>
         * You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.
         * !#zh
         * 取消所有优先级的值大于指定优先级的定时器。<br/>
         * 你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
         * @method unscheduleAllWithMinPriority
         * @param {Number} minPriority The minimum priority of selector to be unscheduled. Which means, all selectors which
         *        priority is higher than minPriority will be unscheduled.
         */
        public unscheduleAllWithMinPriority(minPriority:number):void;

        /** 
         * !#en Checks whether a callback for a given target is scheduled.
         * !#zh 检查指定的回调函数和回调对象组合是否存在定时器。
         * @method isScheduled
         * @param {Function} callback The callback to check.
         * @param {Object} target The target of the callback.
         * @return {Boolean} True if the specified callback is invoked, false if not.
         */
        public isScheduled(callback:Function, target:Object):boolean;

        /**
         * !#en
         * Pause all selectors from all targets.<br/>
         * You should NEVER call this method, unless you know what you are doing.
         * !#zh
         * 暂停所有对象的所有定时器。<br/>
         * 不要调用这个方法，除非你知道你正在做什么。
         * @method pauseAllTargets
         */
        public pauseAllTargets():void;

        /**
         * !#en
         * Pause all selectors from all targets with a minimum priority. <br/>
         * You should only call this with kCCPriorityNonSystemMin or higher.
         * !#zh
         * 暂停所有优先级的值大于指定优先级的定时器。<br/>
         * 你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
         * @method pauseAllTargetsWithMinPriority
         * @param {Number} minPriority
         */
        public pauseAllTargetsWithMinPriority(minPriority:number):void;

        /**
         * !#en
         * Resume selectors on a set of targets.<br/>
         * This can be useful for undoing a call to pauseAllCallbacks.
         * !#zh
         * 恢复指定数组中所有对象的定时器。<br/>
         * 这个函数是 pauseAllCallbacks 的逆操作。
         * @method resumeTargets
         * @param {Array} targetsToResume
         */
        public resumeTargets(targetsToResume:Object[]):void;

        /**
         * !#en
         * Pauses the target.<br/>
         * All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
         * If the target is not present, nothing happens.
         * !#zh
         * 暂停指定对象的定时器。<br/>
         * 指定对象的所有定时器都会被暂停。<br/>
         * 如果指定的对象没有定时器，什么也不会发生。
         * @method pauseTarget
         * @param {Object} target
         */
        public pauseTarget(target:Object):void;

        /**
         * !#en
         * Resumes the target.<br/>
         * The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
         * If the target is not present, nothing happens.
         * !#zh
         * 恢复指定对象的所有定时器。<br/>
         * 指定对象的所有定时器将继续工作。<br/>
         * 如果指定的对象没有定时器，什么也不会发生。
         * @method resumeTarget
         * @param {Object} target
         */
        public resumeTarget(target:Object):void;

        /**
         * !#en Returns whether or not the target is paused.
         * !#zh 返回指定对象的定时器是否暂停了。
         * @method isTargetPaused
         * @param {Object} target
         * @return {Boolean}
         */
        public isTargetPaused(target:Object):boolean;
    }
}