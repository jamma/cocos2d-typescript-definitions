/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event/event-listeners.js
    //  NOTE: Nothing from this file defined here
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event/event-target.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en
     * EventTarget is an object to which an event is dispatched when something has occurred.
     * Entity are the most common event targets, but other objects can be event targets too.
     *
     * Event targets are an important part of the Fireball event model.
     * The event target serves as the focal point for how events flow through the scene graph.
     * When an event such as a mouse click or a keypress occurs, Fireball dispatches an event object
     * into the event flow from the root of the hierarchy. The event object then makes its way through
     * the scene graph until it reaches the event target, at which point it begins its return trip through
     * the scene graph. This round-trip journey to the event target is conceptually divided into three phases:
     * - The capture phase comprises the journey from the root to the last node before the event target's node
     * - The target phase comprises only the event target node
     * - The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree
     * See also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
     *
     * Event targets can implement the following methods:
     *  - _getCapturingTargets
     *  - _getBubblingTargets
     *
     * !#zh
     * 事件目标是事件触发时，分派的事件对象，Node 是最常见的事件目标，
     * 但是其他对象也可以是事件目标。<br/>
     *
     * @class EventTarget
     */
    export class EventTarget {
        /**
         * !#en Checks whether the EventTarget object has any callback registered for a specific type of event.
         * !#zh 检查事件目标对象是否为不特定类型的事件注册的回调。
         * @param {String} type - The type of event.
         * @param {Boolean} checkCapture - Check for capturing or bubbling phase, check bubbling phase by default.
         * @return {Boolean} True if a callback of the specified type is registered in specified phase; false otherwise.
         */
        public hasEventListener(type:string, checkCapture:boolean):boolean;

        /**
         * !#en
         * Register an callback of a specific event type on the EventTarget.
         * This method is merely an alias to addEventListener.
         * !#zh
         * 注册事件目标的特定事件类型回调，仅仅是 addEventListener 的别名。
         *
         * @method on
         * @param {String} type - A string representing the event type to listen for.
         * @param {Function} callback - The callback that will be invoked when the event is dispatched.
         *                              The callback is ignored if it is a duplicate (the callbacks are unique).
         * @param {Event} callback.param event
         * @param {Object} target - The target to invoke the callback, can be null
         * @param {Boolean} useCapture - When set to true, the capture argument prevents callback
         *                              from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
         *                              When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
         *                              Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.
         * @return {Function} - Just returns the incoming callback so you can save the anonymous function easier.
         * @example
         * node.on(cc.Node.EventType.TOUCH_END, function (event) {
         *     cc.log("this is callback");
         * }, node);
         */
        public on(type:string, callback:Function, target:Object, useCapture:boolean):Function;

        /**
         * !#en
         * Removes the callback previously registered with the same type, callback, target and or useCapture.
         * This method is merely an alias to removeEventListener.
         * !#zh
         * 删除之前与同类型，回调，目标或 useCapture 注册的回调，仅仅是 removeEventListener 的别名。
         *
         * @method off
         * @param {String} type - A string representing the event type being removed.
         * @param {Function} callback - The callback to remove.
         * @param {Object} target - The target to invoke the callback, if it's not given, only callback without target will be removed
         * @param {Boolean} useCapture - Specifies whether the callback being removed was registered as a capturing callback or not.
         *                              If not specified, useCapture defaults to false. If a callback was registered twice,
         *                              one with capture and one without, each must be removed separately. Removal of a capturing callback
         *                              does not affect a non-capturing version of the same listener, and vice versa.
         * @example
         * // register touchEnd eventListener
         * var touchEnd = node.on(cc.Node.EventType.TOUCH_END, function (event) {
         *     cc.log("this is callback");
         * }, node);
         * // remove touchEnd eventListener
         * node.off(cc.Node.EventType.TOUCH_END, touchEnd, node);
         */
        public off(type:string, callback:Function, target:Object, useCapture:boolean):Function;

        /**
         * !#en Removes all callbacks previously registered with the same target.
         * !#zh 删除指定目标上的所有注册回调。
         * @method targetOff
         * @param {Object} target - The target to be searched for all related callbacks
         */
        public targetOff(target:Object):void;

        /**
         * !#en
         * Register an callback of a specific event type on the EventTarget,
         * the callback will remove itself after the first time it is triggered.
         * !#zh
         * 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
         *
         * @method once
         * @param {String} type - A string representing the event type to listen for.
         * @param {Function} callback - The callback that will be invoked when the event is dispatched.
         *                              The callback is ignored if it is a duplicate (the callbacks are unique).
         * @param {Event} callback.param event
         * @param {Object} target - The target to invoke the callback, can be null
         * @param {Boolean} useCapture - When set to true, the capture argument prevents callback
         *                              from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
         *                              When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
         *                              Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.
         * @example
         * node.once(cc.Node.EventType.TOUCH_END, function (event) {
         *     cc.log("this is callback");
         * }, node);
         */
        public once(type:string, callback:Function, target:Object, useCapture:boolean):Function;

        /**
         * !#en
         * Dispatches an event into the event flow.
         * The event target is the EventTarget object upon which the dispatchEvent() method is called.
         * !#zh 分发事件到事件流中。
         *
         * @method dispatchEvent
         * @param {Event} event - The Event object that is dispatched into the event flow
         */
        public dispatchEvent(event:Event):void;

        /**
         * !#en
         * Send an event to this object directly, this method will not propagate the event to any other objects.
         * The event will be created from the supplied message, you can get the "detail" argument from event.detail.
         * !#zh
         * 该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。
         *
         * @method emit
         * @param {String} message - the message to send
         * @param {*} [detail] - whatever argument the message needs
         */
        public emit(message:string, detail?:any):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event/event.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Base class of all kinds of events.
     * !#zh 包含事件相关信息的对象。
     * @class Event
     * @constructor
     */

    export class Event {
        //event type
        /**
         * !#en Code for event without type.
         * !#zh 没有类型的事件
         * @property NO_TYPE
         * @final
         * @type {string}
         */
        public static readonly NO_TYPE:string;

        //event phase
        /**
         * !#en Events not currently dispatched are in this phase
         * !#zh 尚未派发事件阶段
         * @property NONE
         * @type {Number}
         * @final
         */
        public static readonly NONE:number;

        /**
         * !#en
         * The capturing phase comprises the journey from the root to the last node before the event target's node
         * see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
         * !#zh 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。
         * @property CAPTURING_PHASE
         * @type {Number}
         * @final
         */
        public static readonly CAPTURING_PHASE:number;

        /**
         * !#en
         * The target phase comprises only the event target node
         * see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
         * !#zh 目标阶段仅包括事件目标节点。
         * @property AT_TARGET
         * @type {Number}
         * @final
         */
        public static readonly AT_TARGET:number;

        /**
         * !#en
         * The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
         * see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
         * !#zh 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。
         * @property BUBBLING_PHASE
         * @type {Number}
         * @final
         */
        public static readonly BUBBLING_PHASE:number;


        // Static members defined in file: core/event-manager/CCSystemEvent.js
        /**
         * !#en The type code of Touch event.
         * !#zh 触摸事件类型
         * @constant
         * @type {String}
         */
        public static readonly TOUCH:number;

        /**
         * !#en The type code of Mouse event.
         * !#zh 鼠标事件类型
         * @constant
         * @type {String}
         */
        public static readonly MOUSE:number;

        /**
         * !#en The type code of Keyboard event.
         * !#zh 键盘事件类型
         * @constant
         * @memberof cc.Event
         * @type {String}
         */
        public static readonly KEYBOARD:number;

        /**
         * !#en The type code of Acceleration event.
         * !#zh 加速器事件类型
         * @constant
         * @memberof cc.Event
         * @type {String}
         */
        public static readonly ACCELERATION:number;

        /**
         * !#en The name of the event (case-sensitive), e.g. "click", "fire", or "submit".
         * !#zh 事件类型。
         * @property type
         * @type {String}
         */
        public readonly type:string;

        /**
         * !#en Indicate whether the event bubbles up through the tree or not.
         * !#zh 表示该事件是否进行冒泡。
         * @property bubbles
         * @type {Boolean}
         */
        public readonly bubbles:boolean;

        /**
         * !#en A reference to the target to which the event was originally dispatched.
         * !#zh 最初事件触发的目标
         * @property target
         * @type {Object}
         */
        public target:Object;

        /**
         * !#en A reference to the currently registered target for the event.
         * !#zh 当前目标
         * @property currentTarget
         * @type {Object}
         */
        public currentTarget:Object;

        /**
         * !#en
         * Indicates which phase of the event flow is currently being evaluated.
         * Returns an integer value represented by 4 constants:
         *  - Event.NONE = 0
         *  - Event.CAPTURING_PHASE = 1
         *  - Event.AT_TARGET = 2
         *  - Event.BUBBLING_PHASE = 3
         * The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
         * (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.
         * !#zh 事件阶段
         * @property eventPhase
         * @type {Number}
         */
        public eventPhase:number;

        /**
         * @constructor
         * @param {String} type - The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
         * @param {Boolean} bubbles - A boolean indicating whether the event bubbles up through the tree or not
         * @return {Event}
         */
        public constructor(type:string, bubbles:boolean);

        /**
         * !#en Reset the event for being stored in the object pool.
         * !#zh 重置对象池中存储的事件。
         * @method unuse
         * @returns {String}
         */
        public unuse():string;

        /**
         * !#en Reuse the event for being used again by the object pool.
         * !#zh 用于对象池再次使用的事件。
         * @method reuse
         * @returns {String}
         */
        public reuse(type:string, bubbles?:boolean):void;

        /**
         * !#en Stops propagation for current event.
         * !#zh 停止传递当前事件。
         * @method stopPropagation
         */
        public stopPropagation():void;

        /**
         * !#en Stops propagation for current event immediately,
         * the event won't even be dispatched to the listeners attached in the current target.
         * !#zh 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
         * @method stopPropagationImmediate
         */
        public stopPropagationImmediate():void;

        /**
         * !#en Checks whether the event has been stopped.
         * !#zh 检查该事件是否已经停止传递.
         * @method isStopped
         * @returns {Boolean}
         */
        public isStopped():boolean;

        /**
         * !#en
         * <p>
         *     Gets current target of the event                                                            <br/>
         *     note: It only be available when the event listener is associated with node.                <br/>
         *          It returns 0 when the listener is associated with fixed priority.
         * </p>
         * !#zh 获取当前目标节点
         * @method getCurrentTarget
         * @returns {Node}  The target with which the event associates.
         */
        public getCurrentTarget():Node;

        /**
         * !#en Gets the event type.
         * !#zh 获取事件类型
         * @method getType
         * @returns {String}
         */
        public getType():string;
    }

    /**
     * !#en The Custom event
     * !#zh 自定义事件
     * @class Event.EventCustom
     * @constructor
     * @extends Event
     */
    export class EventCustom extends Event {
        /**
         * !#en A reference to the detailed data of the event
         * !#zh 事件的详细数据
         * @property detail
         * @type {Object}
         */
        public detail:Object;

        /**
         * !#en Sets user data
         * !#zh 设置用户数据
         * @method setUserData
         * @param {*} data
         */
        public setUserData(data:any):void;

        /**
         * !#en Gets user data
         * !#zh 获取用户数据
         * @method getUserData
         * @returns {*}
         */
        public getUserData():any;

        /**
         * !#en Gets event name
         * !#zh 获取事件名称
         * @method getEventName
         * @returns {String}
         */
        public getEventName():string;
    }
}