/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event-manager/CCEventListeners.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en
     * <p>
     *     The base class of event listener.                                                                        <br/>
     *     If you need custom listener which with different callback, you need to inherit this class.               <br/>
     *     For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>
     *      EventListenerTouchOneByOne, EventListenerCustom.
     * </p>
     *
     * !#zh
     * 封装用户的事件处理逻辑。
     * 注意：这是一个抽象类，开发者不应该直接实例化这个类，请参考 {{#crossLink "EventListener/create:method"}}cc.EventListener.create{{/crossLink}}。
     *
     * @class EventListener
     */

    /**
     * Constructor
     * @method EventListener
     * @param {Number} type
     * @param {Number} listenerID
     * @param {Number} callback
     * @return {EventListener}
     */
    export class EventListener {
        /**
         * !#en The type code of unknown event listener.
         * !#zh 未知的事件监听器类型
         * @property UNKNOWN
         * @type {Number}
         * @static
         */
        public static readonly UNKNOWN:number;

        /*
        * !#en The type code of one by one touch event listener.
        * !#zh 触摸事件监听器类型，触点会一个一个得分开被派发
        * @property TOUCH_ONE_BY_ONE
        * @type {Number}
        * @static
        */
        public static readonly TOUCH_ONE_BY_ONE:number;

        /*
        * !#en The type code of all at once touch event listener.
        * !#zh 触摸事件监听器类型，触点会被一次性全部派发
        * @property TOUCH_ALL_AT_ONCE
        * @type {Number}
        * @static
        */
        public static readonly TOUCH_ALL_AT_ONCE:number;

        /**
         * !#en The type code of keyboard event listener.
         * !#zh 键盘事件监听器类型
         * @property KEYBOARD
         * @type {Number}
         * @static
         */
        public static readonly KEYBOARD:number;

        /*
        * !#en The type code of mouse event listener.
        * !#zh 鼠标事件监听器类型
        * @property MOUSE
        * @type {Number}
        * @static
        */
        public static readonly MOUSE:number;

        /**
         * !#en The type code of focus event listener.
         * !#zh 加速器事件监听器类型
         * @property ACCELERATION
         * @type {Number}
         * @static
         */
        public static readonly ACCELERATION:number;

        /*
        * !#en The type code of Focus change event listener.
        * !#zh 焦点事件监听器类型
        * @property FOCUS
        * @type {Number}
        * @static
        */
        public static readonly FOCUS:number;

        /*
        * !#en The type code of custom event listener.
        * !#zh 自定义事件监听器类型
        * @property CUSTOM
        * @type {Number}
        * @static
        */
        public static readonly CUSTOM:number;

        /**
         * !#en
         * Create a EventListener object with configuration including the event type, handlers and other parameters.
         * In handlers, this refer to the event listener object itself.
         * You can also pass custom parameters in the configuration object,
         * all custom parameters will be polyfilled into the event listener object and can be accessed in handlers.
         * !#zh 通过指定不同的 Event 对象来设置想要创建的事件监听器。
         * @method create
         * @param {Object} argObj a json object
         * @returns {EventListener}
         * @static
         * @example {@link utils/api/engine/docs/cocos2d/core/event-manager-manager/CCEventListener/create.js}
         */
        public static create(listener:EventListenerInterface):EventListener;

        /*
         * Initializes event with type and callback function.
         * @param {Number} type
         * @param {String} listenerID
         * @param {Function} callback
         */
        public constructor(type:number, listenerID:string, callback:Function);

        /**
         * !#en Checks whether the listener is available.
         * !#zh 检测监听器是否有效
         * @method checkAvailable
         * @returns {Boolean}
         */
        public checkAvailable():boolean;

        /**
         * !#en Clones the listener, its subclasses have to override this method.
         * !#zh 克隆监听器,它的子类必须重写此方法。
         * @method clone
         * @returns {EventListener}
         */
        public clone():EventListener;

        /**
         *  !#en Enables or disables the listener
         *  !#zh 启用或禁用监听器。
         *  @method setEnabled
         *  @param {Boolean} enabled
         *  @note Only listeners with `enabled` state will be able to receive events.
         *          When an listener was initialized, it's enabled by default.
         *          An event listener can receive events when it is enabled and is not paused.
         *          paused state is always false when it is a fixed priority listener.
         */
        public setEnabled(enabled:boolean):void;

        /**
         * !#en Checks whether the listener is enabled
         * !#zh 检查监听器是否可用。
         * @method isEnabled
         * @returns {Boolean}
         */
        public isEnabled():boolean;

        /*
         * <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
         * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.<br/>
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
         * when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
         * The retain function can increase a reference count for the native object to avoid it being released,<br/>
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
         * retain and release function call should be paired in developer's game code.</p>
         *
         * @method retain
         * @see cc.EventListener#release
         */
        public retain():void;

        /*
         * <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
         * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.<br/>
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
         * when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
         * The retain function can increase a reference count for the native object to avoid it being released,<br/>
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
         * retain and release function call should be paired in developer's game code.</p>
         *
         * @method release
         * @see cc.EventListener#retain
         */
        public release():void;
    }

    // NOTE: These interfaces help guide the user on how to set up the different event listener objects,
    //       but they will still have to specify everything, including explicitly setting the event property.
    export interface EventListenerInterface {
        event:number;
    }

    export interface CustomEventListenerInterface extends EventListenerInterface {
        eventName:number; // maps to listenerId parameter of cc._EventListenerCustom ctor
        callback?:(event:Event)=>void;
    }

    export interface MouseEventListenerInterface extends EventListenerInterface {
        onMouseDown?:(event:EventMouse) => void;
        onMouseUp?:(event:EventMouse) => void;
        onMouseMove?:(event:EventMouse) => void;
        onMouseScroll?:(event:EventMouse) => void;
    }

    export interface TouchOneByOneEventListenerInterface extends EventListenerInterface {
        swallowTouches:boolean;
        onTouchBegan?:(event:EventTouch) => boolean;
        onTouchMoved?:(event:EventTouch) => void;
        onTouchEnded?:(event:EventTouch) => void;
        onTouchCancelled?:(event:EventTouch) => void;
    }

    export interface TouchAllAtOnceEventListenerInterface extends EventListenerInterface {
        swallowTouches:boolean;
        onTouchesBegan?:(event:EventTouch) => boolean;
        onTouchesMoved?:(event:EventTouch) => void;
        onTouchesEnded?:(event:EventTouch) => void;
        onTouchesCancelled?:(event:EventTouch) => void;
    }

    export interface FocusEventListenerInterface extends EventListenerInterface {
        // TODO: I have no clue whether or not this is the proper set of arguments
        onFocusChanged?:(lostFocus:boolean, gainedFocus:boolean)=>void;
    }

    export interface AccelerationEventListenerInterface extends EventListenerInterface {
        // TODO: I have no clue whether or not this is the proper set of arguments
        onAccelerationEvent?:(acceleration:number, event:EventAcceleration)=>void;
    }

    export interface KeyboardEventListenerInterface extends EventListenerInterface {
        onKeyPressed?:(keyCode:number, event:EventKeyboard)=>void;
        onKeyReleased?:(keyCode:number, event:EventKeyboard)=>void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event-manager/CCEventManager.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en
     * <p>
     *  cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. <br/>
     *                                                                                                              <br/>
     *  The EventListener list is managed in such way so that event listeners can be added and removed          <br/>
     *  while events are being dispatched.
     * </p>
     * !#zh
     * 事件管理器，它主要管理事件监听器注册和派发系统事件。
     * 原始设计中，它支持鼠标，触摸，键盘，陀螺仪和自定义事件。
     * 在 Creator 的设计中，鼠标，触摸和自定义事件的监听和派发请参考 http://cocos.com/docs/creator/scripting/events.html。
     *
     * @class eventManager
     * @example {@link utils/api/engine/docs/cocos2d/core/event-manager-manager/CCEventManager/addListener.js}
     */
    export class EventManager {
        /**
         * !#en Pauses all listeners which are associated the specified target.
         * !#zh 暂停传入的 node 相关的所有监听器的事件响应。
         * @method pauseTarget
         * @param {Node} node
         * @param {Boolean} recursive
         */
        // pauseTarget: function (node, recursive) {
        public pauseTarget(node:Node, recursive:boolean):void;

        /**
         * !#en Resumes all listeners which are associated the specified target.
         * !#zh 恢复传入的 node 相关的所有监听器的事件响应。
         * @method resumeTarget
         * @param {Node} node
         * @param {Boolean} recursive
         */
        public resumeTarget(node:Node, recursive:boolean):void;

        /**
         * !#en
         * <p>
         * Adds a event listener for a specified event.<br/>
         * if the parameter "nodeOrPriority" is a node,
         * it means to add a event listener for a specified event with the priority of scene graph.<br/>
         * if the parameter "nodeOrPriority" is a Number,
         * it means to add a event listener for a specified event with the fixed priority.<br/>
         * </p>
         * !#zh
         * 将事件监听器添加到事件管理器中。<br/>
         * 如果参数 “nodeOrPriority” 是节点，优先级由 node 的渲染顺序决定，显示在上层的节点将优先收到事件。<br/>
         * 如果参数 “nodeOrPriority” 是数字，优先级则固定为该参数的数值，数字越小，优先级越高。<br/>
         *
         * @method addListener
         * @param {EventListener|Object} listener - The listener of a specified event or a object of some event parameters.
         * @param {Node|Number} nodeOrPriority - The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.
         * @note  The priority of scene graph will be fixed value 0. So the order of listener item in the vector will be ' <0, scene graph (0 priority), >0'.
         *         A lower priority will be called before the ones that have a higher value. 0 priority is forbidden for fixed priority since it's used for scene graph based priority.
         *         The listener must be a cc.EventListener object when adding a fixed priority listener, because we can't remove a fixed priority listener without the listener handler,
         *         except calls removeAllListeners().
         * @return {EventListener} Return the listener. Needed in order to remove the event from the dispatcher.
         */
        public addListener(listener:EventListener, nodeOrPriority:Node|number):EventListener;

        /*
         * !#en Adds a Custom event listener. It will use a fixed priority of 1.
         * !#zh 向事件管理器添加一个自定义事件监听器。
         * @method addCustomListener
         * @param {String} eventName
         * @param {Function} callback
         * @return {EventListener} the generated event. Needed in order to remove the event from the dispatcher
         */
        public addCustomListener(eventName:string, callback:Function):EventListener;

        /**
         * !#en Remove a listener.
         * !#zh 移除一个已添加的监听器。
         * @method removeListener
         * @param {EventListener} listener - an event listener or a registered node target
         * @example {@link utils/api/engine/docs/cocos2d/core/event-manager-manager/CCEventManager/removeListener.js}
         */
        public removeListener(listener:EventListener):void;

        /**
         * !#en Removes all listeners with the same event listener type or removes all listeners of a node.
         * !#zh
         * 移除注册到 eventManager 中指定类型的所有事件监听器。<br/>
         * 1. 如果传入的第一个参数类型是 Node，那么事件管理器将移除与该对象相关的所有事件监听器。
         * （如果第二参数 recursive 是 true 的话，就会连同该对象的子控件上所有的事件监听器也一并移除）<br/>
         * 2. 如果传入的第一个参数类型是 Number（该类型 EventListener 中定义的事件类型），
         * 那么事件管理器将移除该类型的所有事件监听器。<br/>
         *
         * 下列是目前存在监听器类型：       <br/>
         * cc.EventListener.UNKNOWN       <br/>
         * cc.EventListener.KEYBOARD      <br/>
         * cc.EventListener.ACCELERATION，<br/>
         *
         * @method removeListeners
         * @param {Number|Node} listenerType - listenerType or a node
         * @param {Boolean} recursive
         */
        public removeListeners(listenerType:Node|number, recursive:boolean):void;

        /*
         * !#en Removes all custom listeners with the same event name.
         * !#zh 移除同一事件名的自定义事件监听器。
         * @method removeCustomListeners
         * @param {String} customEventName
         */
        public removeCustomListeners(customEventName:string):void;

        /**
         * !#en Removes all listeners
         * !#zh 移除所有事件监听器。
         * @method removeAllListeners
         */
        public removeAllListeners():void;

        /**
         * !#en Sets listener's priority with fixed value.
         * !#zh 设置 FixedPriority 类型监听器的优先级。
         * @method setPriority
         * @param {EventListener} listener
         * @param {Number} fixedPriority
         */
        public setPriority(listener:EventListener, fixedPriority:number):void;

        /**
         * !#en Whether to enable dispatching events
         * !#zh 启用或禁用事件管理器，禁用后不会分发任何事件。
         * @method setEnabled
         * @param {Boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * !#en Checks whether dispatching events is enabled
         * !#zh 检测事件管理器是否启用。
         * @method isEnabled
         * @returns {Boolean}
         */
        public isEnabled():boolean;

        /*
         * !#en Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
         * !#zh 分发事件。
         * @method dispatchEvent
         * @param {Event} event
         */
        public dispatchEvent(event:Event):void;

        /*
         * !#en Dispatches a Custom Event with a event name an optional user data
         * !#zh 分发自定义事件。
         * @method dispatchCustomEvent
         * @param {String} eventName
         * @param {*} optionalUserData
         */
        public dispatchCustomEvent(eventName:string, optionalUserData:any):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event-manager/CCSystemEvent.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en The mouse event
     * !#zh 鼠标事件类型
     * @class Event.EventMouse
     * @constructor
     * @extends Event
     * @param {Number} eventType - The mouse event type, UP, DOWN, MOVE, CANCELED
     * @param {Boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the tree or not
     */
    export class EventMouse extends Event {
        //Inner event types of MouseEvent
        /**
         * !#en The none event code of mouse event.
         * !#zh 无。
         * @constant
         * @type {Number}
         */
        public static readonly NONE:number;

        /**
         * !#en The event type code of mouse down event.
         * !#zh 鼠标按下事件。
         * @constant
         * @type {Number}
         */
        public static readonly DOWN:number;

        /**
         * !#en The event type code of mouse up event.
         * !#zh 鼠标按下后释放事件。
         * @constant
         * @type {Number}
         */
        public static readonly UP:number;

        /**
         * !#en The event type code of mouse move event.
         * !#zh 鼠标移动事件。
         * @constant
         * @type {Number}
         */
        public static readonly MOVE:number;

        /**
         * !#en The event type code of mouse scroll event.
         * !#zh 鼠标滚轮事件。
         * @constant
         * @type {Number}
         */
        public static readonly SCROLL:number;

        /**
         * !#en The tag of Mouse left button.
         * !#zh 鼠标左键的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_LEFT:number;

        /**
         * !#en The tag of Mouse right button  (The right button number is 2 on browser).
         * !#zh 鼠标右键的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_RIGHT:number;

        /**
         * !#en The tag of Mouse middle button  (The right button number is 1 on browser).
         * !#zh 鼠标中键的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_MIDDLE:number;

        /**
         * !#en The tag of Mouse button 4.
         * !#zh 鼠标按键 4 的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_4:number;

        /**
         * !#en The tag of Mouse button 5.
         * !#zh 鼠标按键 5 的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_5:number;

        /**
         * !#en The tag of Mouse button 6.
         * !#zh 鼠标按键 6 的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_6:number;

        /**
         * !#en The tag of Mouse button 7.
         * !#zh 鼠标按键 7 的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_7:number;

        /**
         * !#en The tag of Mouse button 8.
         * !#zh 鼠标按键 8 的标签。
         * @constant
         * @type {Number}
         */
        public static readonly BUTTON_8:number;

        public constructor(eventType:number, bubbles?:boolean);

        /**
         * !#en Sets scroll data.
         * !#zh 设置鼠标的滚动数据。
         * @method setScrollData
         * @param {Number} scrollX
         * @param {Number} scrollY
         */
        public setScrollData(scrollX:number, scrollY:number):void;

        /**
         * !#en Returns the x axis scroll value.
         * !#zh 获取鼠标滚动的X轴距离，只有滚动时才有效。
         * @method getScrollX
         * @returns {Number}
         */
        public getScrollX():number;

        /**
         * !#en Returns the y axis scroll value.
         * !#zh 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。
         * @method getScrollY
         * @returns {Number}
         */
        public getScrollY():number;

        /**
         * !#en Sets cursor location.
         * !#zh 设置当前鼠标位置。
         * @method setLocation
         * @param {Number} x
         * @param {Number} y
         */
        public setLocation(x:number, y:number):void;

        /**
         * !#en Returns cursor location.
         * !#zh 获取鼠标位置对象，对象包含 x 和 y 属性。
         * @method getLocation
         * @return {Vec2} location
         */
        public getLocation():Vec2;

        /**
         * !#en Returns the current cursor location in screen coordinates.
         * !#zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
         * @method getLocationInView
         * @return {Vec2}
         */
        public getLocationInView():Vec2;

        /**
         * !#en Returns the previous touch location.
         * !#zh 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
         * @method getPreviousLocation
         * @return {Vec2}
         */
        public getPreviousLocation():Vec2;

        /**
         * !#en Returns the delta distance from the previous location to current location.
         * !#zh 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
         * @method getDelta
         * @return {Vec2}
         */
        public getDelta():Vec2;

        /**
         * !#en Returns the X axis delta distance from the previous location to current location.
         * !#zh 获取鼠标距离上一次事件移动的 X 轴距离。
         * @method getDeltaX
         * @return {Number}
         */
        public getDeltaX():number;

        /**
         * !#en Returns the Y axis delta distance from the previous location to current location.
         * !#zh 获取鼠标距离上一次事件移动的 Y 轴距离。
         * @method getDeltaY
         * @return {Number}
         */
        public getDeltaY():number;

        /**
         * !#en Sets mouse button.
         * !#zh 设置鼠标按键。
         * @method setButton
         * @param {Number} button
         */
        public setButton(button:number):void;

        /**
         * !#en Returns mouse button.
         * !#zh 获取鼠标按键。
         * @method getButton
         * @returns {Number}
         */
        public getButton():number;

        /**
         * !#en Returns location X axis data.
         * !#zh 获取鼠标当前位置 X 轴。
         * @method getLocationX
         * @returns {Number}
         */
        public getLocationX():number;

        /**
         * !#en Returns location Y axis data.
         * !#zh 获取鼠标当前位置 Y 轴。
         * @method getLocationY
         * @returns {Number}
         */
        public getLocationY():number;
    }

    /**
     * !#en The touch event
     * !#zh 触摸事件
     * @class Event.EventTouch
     * @constructor
     * @extends Event
     * @param {Array} touchArr - The array of the touches
     * @param {Boolean} bubbles - A boolean indicating whether the event bubbles up through the tree or not
     */
    export class EventTouch extends Event {
        /**
         * !#en The maximum touch numbers
         * !#zh 最大触摸数量。
         * @constant
         * @type {Number}
         */
        public static readonly MAX_TOUCHES:number;

        /**
         * !#en The event type code of touch began event.
         * !#zh 开始触摸事件
         * @constant
         * @type {Number}
         */
        public static readonly BEGAN:number;

        /**
         * !#en The event type code of touch moved event.
         * !#zh 触摸后移动事件
         * @constant
         * @type {Number}
         */
        public static readonly MOVED:number;

        /**
         * !#en The event type code of touch ended event.
         * !#zh 结束触摸事件
         * @constant
         * @type {Number}
         */
        public static readonly ENDED:number;

        /**
         * !#en The event type code of touch cancelled event.
         * !#zh 取消触摸事件
         * @constant
         * @type {Number}
         */
        public static readonly CANCELED:number;

        public constructor(touchArr:Touch[], bubbles:boolean);

        /**
         * !#en Returns event code.
         * !#zh 获取事件类型。
         * @method getEventCode
         * @returns {Number}
         */
        public getEventCode():number;

        /**
         * !#en Returns touches of event.
         * !#zh 获取触摸点的列表。
         * @method getTouches
         * @returns {Array}
         */
        public getTouches():Touch[];

        /**
         * !#en Sets touch location.
         * !#zh 设置当前触点位置
         * @method setLocation
         * @param {Number} x
         * @param {Number} y
         */
        public setLocation(x:number, y:number):void;

        /**
         * !#en Returns touch location.
         * !#zh 获取触点位置。
         * @method getLocation
         * @return {Vec2} location
         */
        public getLocation():Vec2;

        /**
         * !#en Returns the current touch location in screen coordinates.
         * !#zh 获取当前触点在游戏窗口中的位置。
         * @method getLocationInView
         * @return {Vec2}
         */
        public getLocationInView():Vec2;

        /**
         * !#en Returns the previous touch location.
         * !#zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
         * @method getPreviousLocation
         * @return {Vec2}
         */
        public getPreviousLocation():Vec2;

        /**
         * !#en Returns the start touch location.
         * !#zh 获获取触点落下时的位置对象，对象包含 x 和 y 属性。
         * @method getStartLocation
         * @returns {Vec2}
         */
        public getStartLocation():Vec2;

        /**
         * !#en Returns the id of cc.Touch.
         * !#zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。
         * @method getID
         * @return {Number}
         */
        public getID():number;

        /**
         * !#en Returns the delta distance from the previous location to current location.
         * !#zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
         * @method getDelta
         * @return {Vec2}
         */
        public getDelta():Vec2;

        /**
         * !#en Returns the X axis delta distance from the previous location to current location.
         * !#zh 获取触点距离上一次事件移动的 x 轴距离。
         * @method getDeltaX
         * @return {Number}
         */
        public getDeltaX():number;

        /**
         * !#en Returns the Y axis delta distance from the previous location to current location.
         * !#zh 获取触点距离上一次事件移动的 y 轴距离。
         * @method getDeltaY
         * @return {Number}
         */
        public getDeltaY():number;

        /**
         * !#en Returns location X axis data.
         * !#zh 获取当前触点 X 轴位置。
         * @method getLocationX
         * @returns {Number}
         */
        public getLocationX():number;

        /**
         * !#en Returns location Y axis data.
         * !#zh 获取当前触点 Y 轴位置。
         * @method getLocationY
         * @returns {Number}
         */
        public getLocationY():number;
    }


    /**
     * !#en The acceleration event
     * !#zh 加速度事件
     * @class Event.EventAcceleration
     * @extends Event
     * @constructor
     * @param {Object} acc - The acceleration
     * @param {Boolean} bubbles - A boolean indicating whether the event bubbles up through the tree or not
     */
    export class EventAcceleration extends Event {
        public constructor(acc:Object, bubbles:boolean);
    }

    /**
     * !#en The keyboard event
     * !#zh 键盘事件
     * @class Event.EventKeyboard
     * @extends Event
     * @constructor
     * @param {Number} keyCode - The key code of which triggered this event
     * @param {Boolean} isPressed - A boolean indicating whether the key have been pressed
     * @param {Boolean} bubbles - A boolean indicating whether the event bubbles up through the tree or not
     */
    export class EventKeyboard extends Event {
        public constructor(keyCode:number, isPressed:boolean, bubbles:boolean);
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/event-manager/CCTouch.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en The touch event class
     * !#zh 封装了触摸相关的信息。
     * @class Touch
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} id
     */
    export class Touch {
        public constructor(x:number, y:number, id:number);

        /**
         * !#en Returns the current touch location in OpenGL coordinates.、
         * !#zh 获取当前触点位置。
         * @method getLocation
         * @return {Vec2}
         */
        public getLocation():Vec2;

    	/**
    	 * !#en Returns X axis location value.
         * !#zh 获取当前触点 X 轴位置。
         * @method getLocationX
    	 * @returns {Number}
    	 */
    	public getLocationX():number;

    	/**
         * !#en Returns Y axis location value.
         * !#zh 获取当前触点 Y 轴位置。
         * @method getLocationY
    	 * @returns {Number}
    	 */
    	public getLocationY():number;

        /**
         * !#en Returns the previous touch location in OpenGL coordinates.
         * !#zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
         * @method getPreviousLocation
         * @return {Vec2}
         */
        public getPreviousLocation():Vec2;

        /**
         * !#en Returns the start touch location in OpenGL coordinates.
         * !#zh 获获取触点落下时的位置对象，对象包含 x 和 y 属性。
         * @method getStartLocation
         * @returns {Vec2}
         */
        public getStartLocation():Vec2;

        /**
         * !#en Returns the delta distance from the previous touche to the current one in screen coordinates.
         * !#zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
         * @method getDelta
         * @return {Vec2}
         */
        public getDelta():Vec2;

        /**
         * !#en Returns the current touch location in screen coordinates.
         * !#zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
         * @method getLocationInView
         * @return {Vec2}
         */
        public getLocationInView():Vec2;

        /**
         * !#en Returns the previous touch location in screen coordinates.
         * !#zh 获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
         * @method getPreviousLocationInView
         * @return {Vec2}
         */
        public getPreviousLocationInView():Vec2;

        /**
         * !#en Returns the start touch location in screen coordinates.
         * !#zh 获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
         * @method getStartLocationInView
         * @return {Vec2}
         */
        public getStartLocationInView():Vec2;

        /**
         * !#en Returns the id of cc.Touch.
         * !#zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。
         * @method getID
         * @return {Number}
         */
        public getID():number;

        /**
         * !#en Sets information to touch.
         * !#zh 设置触摸相关的信息。用于监控触摸事件。
         * @method setTouchInfo
         * @param {Number} id
         * @param  {Number} x
         * @param  {Number} y
         */
        public setTouchInfo(id:number, x:number, y:number):void;
    }
}
