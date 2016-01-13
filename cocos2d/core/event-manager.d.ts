/// <reference path="../cocos2d-lib.d.ts" />


declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEvent.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Base class of all kinds of events.
     * @class
     * @extends cc.Class
     */
    export class Event extends Class {
        /**
         * The type code of Touch event.
         * @constant
         * @type {number}
         */
        public static TOUCH:number;

        /**
         * The type code of Keyboard event.
         * @constant
         * @type {number}
         */
        public static KEYBOARD:number;

        /**
         * The type code of Acceleration event.
         * @constant
         * @type {number}
         */
        public static ACCELERATION:number;

        /**
         * The type code of Mouse event.
         * @constant
         * @type {number}
         */
        public static MOUSE:number;

        /**
         * The type code of UI focus event.
         * @constant
         * @type {number}
         */
        public static FOCUS:number;

        /**
         * The type code of Custom event.
         * @constant
         * @type {number}
         */
        public static CUSTOM:number;

        public constructor(type:number);

        /**
         * Gets the event type
         * @function
         * @returns {Number}
         */
        public getType():number;

        /**
         * Stops propagation for current event
         * @function
         */
        public stopPropagation();

        /**
         * Checks whether the event has been stopped
         * @function
         * @returns {boolean}
         */
        public isStopped():boolean;

        /**
         * 
         *     Gets current target of the event                                                            
         *     note: It only be available when the event listener is associated with node.                
         *          It returns 0 when the listener is associated with fixed priority.
         * 
         * @function
         * @returns {cc.Node}  The target with which the event associates.
         */
        public getCurrentTarget():Node;
    }


    /**
     * The Custom event
     * @class
     * @extends cc.Event
     */
    //cc.EventCustom = cc.Event.extend(/** @lends cc.EventCustom# */{
    export class EventCustom extends Event {
        public constructor(eventName:string);

        /**
         * Sets user data
         * @param {*} data
         */
        public setUserData(data:any):void;

        /**
         * Gets user data
         * @returns {*}
         */
        public getUserData():any;

        /**
         * Gets event name
         * @returns {String}
         */
        public getEventName():string;
    }

    /**
     * The mouse event
     * @class
     * @extends cc.Event
     */
    export class EventMouse extends Event {
        /**
         * The none event code of  mouse event.
         * @constant
         * @type {number}
         */
        public static NONE:number;
        /**
         * The event type code of mouse down event.
         * @constant
         * @type {number}
         */
        public static DOWN:number;
        /**
         * The event type code of mouse up event.
         * @constant
         * @type {number}
         */
        public static UP:number;
        /**
         * The event type code of mouse move event.
         * @constant
         * @type {number}
         */
        public static MOVE:number;
        /**
         * The event type code of mouse scroll event.
         * @constant
         * @type {number}
         */
        public static SCROLL:number;

        /**
         * The tag of Mouse left button
         * @constant
         * @type {Number}
         */
        public static BUTTON_LEFT:number;

        /**
         * The tag of Mouse right button  (The right button number is 2 on browser)
         * @constant
         * @type {Number}
         */
        public static BUTTON_RIGHT:number;

        /**
         * The tag of Mouse middle button  (The right button number is 1 on browser)
         * @constant
         * @type {Number}
         */
        public static BUTTON_MIDDLE:number;

        /**
         * The tag of Mouse button 4
         * @constant
         * @type {Number}
         */
        public static BUTTON_4:number;

        /**
         * The tag of Mouse button 5
         * @constant
         * @type {Number}
         */
        public static BUTTON_5:number;

        /**
         * The tag of Mouse button 6
         * @constant
         * @type {Number}
         */
        public static BUTTON_6:number;

        /**
         * The tag of Mouse button 7
         * @constant
         * @type {Number}
         */
        public static BUTTON_7:number;

        /**
         * The tag of Mouse button 8
         * @constant
         * @type {Number}
         */
        public static BUTTON_8:number;


        public constructor(eventType:number);

        /**
         * Sets scroll data
         * @param {number} scrollX
         * @param {number} scrollY
         */
        public setScrollData(scrollX:number, scrollY:number):void;

        /**
         * Returns the x axis scroll value
         * @returns {number}
         */
        public getScrollX():number;

        /**
         * Returns the y axis scroll value
         * @returns {number}
         */
        public getScrollY():number;

        /**
         * Sets cursor location
         * @param {number} x
         * @param {number} y
         */
        public setLocation(x:number, y:number):void;

        /**
         * Returns cursor location
         * @return {cc.Point} location
         */
        public getLocation():Point;

        /**
         * Returns the current cursor location in screen coordinates
         * @return {cc.Point}
         */
        public getLocationInView():Point;

        /**
         * Returns the delta distance from the previous location to current location
         * @return {cc.Point}
         */
        public getDelta():Point;

        /**
         * Returns the X axis delta distance from the previous location to current location
         * @return {Number}
         */
        public getDeltaX():number;

        /**
         * Returns the Y axis delta distance from the previous location to current location
         * @return {Number}
         */
        public getDeltaY():number;

        /**
         * Sets mouse button
         * @param {number} button
         */
        public setButton(button:number):void;

        /**
         * Returns mouse button
         * @returns {number}
         */
        public getButton():number;

        /**
         * Returns location X axis data
         * @returns {number}
         */
        public getLocationX():number;

        /**
         * Returns location Y axis data
         * @returns {number}
         */
        public getLocationY():number;
    }

    /**
     * The touch event
     * @class
     * @extends cc.Event
     */
    //cc.EventTouch = cc.Event.extend(/** @lends cc.EventTouch# */{
    //enum EventCode {
    //    BEGAN = 0,
    //    MOVED = 1,
    //    ENDED = 2,
    //    CANCELLED = 3
    //}
        export interface EventCodeMap {
            BEGAN:number;
        MOVED:number;
        ENDED:number;
        CANCELLED:number
    }

    export class EventTouch extends Event {
        /**
         * The maximum touch numbers
         * @constant
         * @type {Number}
         */
        public static MAX_TOUCHES:number;

        public static EventCode:EventCodeMap;

        public constructor(arr:Touch[]);

        /**
         * Returns event code
         * @returns {number}
         */
        public getEventCode():number;

        /**
         * Returns touches of event
         * @returns {Array}
         */
        public getTouches():Touch[];
    }

    // TODO: Uncomment this class when ccui.Widget is defined.
    ///**
    // * Focus change event for UI widget
    // * @class
    // * @extends cc.Event
    // */
    //export class EventFocus extends Event {
    //    /**
    //     * Constructor function.
    //     * @param {ccui.Widget} widgetLoseFocus
    //     * @param {ccui.Widget} widgetGetFocus
    //     */
    //    public constructor(widgetLoseFocus:ccui.Widget, widgetGetFocus:ccui.Widget);
    //}

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventExtension.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * The acceleration event
     * @class
     * @extends cc.Event
     */
    //cc.EventAcceleration = cc.Event.extend(/** @lends cc.EventAcceleration# */{
    export class EventAcceleration extends Event {
        public constructor(acc:number);
    }

    /**
     * The keyboard event
     * @class
     * @extends cc.Event
     */
    //cc.EventKeyboard = cc.Event.extend(/** @lends cc.EventKeyboard# */{
    export class EventKeyboard extends Event {
        public constructor(keyCode:number, isPressed:boolean);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventHelper.js
    ////////////////////////////////////////////////////////////////////////////////
// The event helper
    export class EventHelper extends Class {
        public apply(object:any):void;

        //public addEventListener(type:string, listener:EventListener, target:Node):void;
        public addEventListener(type:string, listener:EventListener, target:Node):void;

        public hasEventListener(type:string, listener:EventListener, target:Node):boolean;

        //    if ( this._listeners === undefined )
        //        return false;
        //
        //    var listeners = this._listeners;
        //    if ( listeners[ type ] !== undefined ) {
        //        for(var i = 0, len = listeners.length; i < len ; i++){
        //            var selListener = listeners[i];
        //            if(selListener.callback === listener && selListener.eventTarget === target)
        //                return true;
        //        }
        //    }
        //    return false;
        //},

        public removeEventListener(type:string, target:Node):void;

        //    if ( this._listeners === undefined )
        //        return;
        //
        //    var listeners = this._listeners;
        //    var listenerArray = listeners[ type ];
        //
        //    if ( listenerArray !== undefined ) {
        //        for(var i = 0; i < listenerArray.length ; ){
        //            var selListener = listenerArray[i];
        //            if(selListener.eventTarget === target)
        //                listenerArray.splice( i, 1 );
        //            else
        //                i++
        //        }
        //    }
        //},

        public dispatchEvent(event:Event, clearAfterDispatch:boolean):void;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventListener.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * 
     *     The base class of event listener.                                                                        
     *     If you need custom listener which with different callback, you need to inherit this class.               
     *     For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       
     *      EventListenerTouchOneByOne, EventListenerCustom.
     * 
     * @class
     * @extends cc.Class
     */
    export class EventListener extends Class {
        // event listener type
        /**
         * The type code of unknown event listener.
         * @constant
         * @type {number}
         */
        public static UNKNOWN:number;

        /**
         * The type code of one by one touch event listener.
         * @constant
         * @type {number}
         */
        public static TOUCH_ONE_BY_ONE:number;

        /**
         * The type code of all at once touch event listener.
         * @constant
         * @type {number}
         */
        public static TOUCH_ALL_AT_ONCE:number;

        /**
         * The type code of keyboard event listener.
         * @constant
         * @type {number}
         */
        public static KEYBOARD:number;

        /**
         * The type code of mouse event listener.
         * @constant
         * @type {number}
         */
        public static MOUSE:number;

        /**
         * The type code of acceleration event listener.
         * @constant
         * @type {number}
         */
        public static ACCELERATION:number;

        ///**
        // * The type code of focus event listener.
        // * @constant
        // * @type {number}
        // */
        //public static ACCELERATION:number;

        /**
         * The type code of custom event listener.
         * @constant
         * @type {number}
         */
        public static CUSTOM:number;

        /**
         * The type code of Focus change event listener.
         * @constant
         * @type {number}
         */
        public static FOCUS:number;

        /**
         * Initializes event with type and callback function
         * @param {number} type
         * @param {string} listenerID
         * @param {function} callback
         */
        public constructor(type:number, listenerID:string, callback:()=>void);

        /**
         * Checks whether the listener is available.
         * @returns {boolean}
         */
        public checkAvailable():boolean;

        /**
         * Clones the listener, its subclasses have to override this method.
         * @returns {cc.EventListener}
         */
        public clone():EventListener;

        /**
         *  Enables or disables the listener
         *  @note Only listeners with `enabled` state will be able to receive events.
         *          When an listener was initialized, it's enabled by default.
         *          An event listener can receive events when it is enabled and is not paused.
         *          paused state is always false when it is a fixed priority listener.
         * @param {boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * Checks whether the listener is enabled
         * @returns {boolean}
         */
        public isEnabled():boolean;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.EventListener#release
         */
        retain():void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.EventListener#retain
         */
        public release():void;

        /**
         * Create a EventListener object by json object
         * @function
         * @static
         * @param {object} obj a json object
         * @returns {cc.EventListener}
         * todo: It should be the direct use new
         * @example
         * cc.EventListener.create({
         *       event: cc.EventListener.TOUCH_ONE_BY_ONE,
         *       swallowTouches: true,
         *       onTouchBegan: function (touch, event) {
         *           //do something
         *           return true;
         *       }
         *    });
         */
        public static create(obj:any):EventListener;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventManager.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * 
     *  cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. 
     *                                                                                                              
     *  The EventListener list is managed in such way so that event listeners can be added and removed          
     *  while events are being dispatched.
     * 
     * @class
     * @name cc.eventManager
     */
    export class EventManager extends Class {
        //Priority dirty flag
        public static DIRTY_NONE:number;
        public static DIRTY_FIXED_PRIORITY:number;
        public static DIRTY_SCENE_GRAPH_PRIORITY:number;
        public static DIRTY_ALL:number;

        /**
         * Pauses all listeners which are associated the specified target.
         * @param {cc.Node} node
         * @param {Boolean} [recursive=false]
         */
        public pauseTarget(node:Node, recursive:boolean):void;

        /**
         * Resumes all listeners which are associated the specified target.
         * @param {cc.Node} node
         * @param {Boolean} [recursive=false]
         */
        public resumeTarget(node:Node, recursive:boolean):void;

        /**
         * 
         * Adds a event listener for a specified event.                                                                                                            
         * if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.                   
         * if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.                          
         * 
         * @param {cc.EventListener|Object} listener The listener of a specified event or a object of some event parameters.
         * @param {cc.Node|Number} nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.
         * @note  The priority of scene graph will be fixed value 0. So the order of listener item in the vector will be ' <0, scene graph (0 priority), >0'.
         *         A lower priority will be called before the ones that have a higher value. 0 priority is forbidden for fixed priority since it's used for scene graph based priority.
         *         The listener must be a cc.EventListener object when adding a fixed priority listener, because we can't remove a fixed priority listener without the listener handler,
         *         except calls removeAllListeners().
         * @return {cc.EventListener} Return the listener. Needed in order to remove the event from the dispatcher.
         */
        public addListener(listener:EventListener, nodeOrPriority:Node|number):EventListener;

        /**
         * Adds a Custom event listener. It will use a fixed priority of 1.
         * @param {string} eventName
         * @param {function} callback
         * @return {cc.EventListener} the generated event. Needed in order to remove the event from the dispatcher
         */
        public addCustomListener(eventName:string, callback:()=>void);

        /**
         * Remove a listener
         * @param {cc.EventListener} listener an event listener or a registered node target
         */
        public removeListener(listener:EventListener):void;

        /**
         * Removes all listeners with the same event listener type or removes all listeners of a node
         * @param {Number|cc.Node} listenerType listenerType or a node
         * @param {Boolean} [recursive=false]
         */
        public removeListeners(listenerType:Node|number, recursive?:boolean);

        /**
         * Removes all custom listeners with the same event name
         * @param {string} customEventName
         */
        public removeCustomListeners(customEventName:string):void;

        /**
         * Removes all listeners
         */
        public removeAllListeners():void;

        /**
         * Sets listener's priority with fixed value.
         * @param {cc.EventListener} listener
         * @param {Number} fixedPriority
         */
        public setPriority(listener:EventListener, fixedPriority:number):void;

        /**
         * Whether to enable dispatching events
         * @param {boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * Checks whether dispatching events is enabled
         * @returns {boolean}
         */
        public isEnabled():boolean;

        /**
         * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
         * @param {cc.Event} event
         */
        public dispatchEvent(event:Event):void;

        /**
         * Dispatches a Custom Event with a event name an optional user data
         * @param {string} eventName
         * @param {*} optionalUserData
         */
        public dispatchCustomEvent(eventName:string, optionalUserData:any):void;
    }

    export const eventManager:EventManager;

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCTouch.js
    ////////////////////////////////////////////////////////////////////////////////

    /**
     * The touch event class
     * @class
     * @extends cc.Class
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} id
     */
    export class Touch extends Class {
        public constructor(x:number, y:number, id:number);

        /**
         * Returns the current touch location in OpenGL coordinates
         * @return {cc.Point}
         */
        public getLocation():Point;

        /**
         * Returns X axis location value
         * @returns {number}
         */
        public getLocationX():number;

        /**
         * Returns Y axis location value
         * @returns {number}
         */
        public getLocationY():number;

        /**
         * Returns the previous touch location in OpenGL coordinates
         * @return {cc.Point}
         */
        public getPreviousLocation():Point;

        /**
         * Returns the start touch location in OpenGL coordinates
         * @returns {cc.Point}
         */
        public getStartLocation():Point;

        /**
         * Returns the delta distance from the previous touche to the current one in screen coordinates
         * @return {cc.Point}
         */
        public getDelta():Point;

        /**
         * Returns the current touch location in screen coordinates
         * @return {cc.Point}
         */
        public getLocationInView():Point;

        /**
         * Returns the previous touch location in screen coordinates
         * @return {cc.Point}
         */
        public getPreviousLocationInView():Point;

        /**
         * Returns the start touch location in screen coordinates
         * @return {cc.Point}
         */
        public getStartLocationInView():Point;

        /**
         * Returns the id of cc.Touch
         * @return {Number}
         */
        public getID():number;

        /**
         * Sets information to touch
         * @param {Number} id
         * @param  {Number} x
         * @param  {Number} y
         */
        public setTouchInfo(id:number, x:number, y:number):void;
    }
}
