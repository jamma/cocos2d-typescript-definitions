/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace _ccsg {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCNode.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en The event type supported by Node
     * !#zh Node 支持的事件类型
     * @enum Node.EventType
     * @static
     * @namespace Node
     */
    export class EventType extends Enum {
        /**
         * !#en The event type for touch start event, you can use its value directly: 'touchstart'
         * !#zh 当手指触摸到屏幕时。
         * @property TOUCH_START
         * @type {String}
         * @static
         */
        public TOUCH_START:string;

        /**
         * !#en The event type for touch move event, you can use its value directly: 'touchmove'
         * !#zh 当手指在屏幕上目标节点区域内移动时。
         * @property TOUCH_MOVE
         * @type {String}
         * @value 1
         * @static
         */
        public TOUCH_MOVE:string;

        /**
         * !#en The event type for touch end event, you can use its value directly: 'touchend'
         * !#zh 当手指在目标节点区域内离开屏幕时。
         * @property TOUCH_END
         * @type {String}
         * @static
         */
        public TOUCH_END:string;

        /**
         * !#en The event type for touch end event, you can use its value directly: 'touchcancel'
         * !#zh 当手指在目标节点区域外离开屏幕时。
         * @property TOUCH_CANCEL
         * @type {String}
         * @static
         */
        public TOUCH_CANCEL:string;

        /**
         * !#en The event type for mouse down events, you can use its value directly: 'mousedown'
         * !#zh 当鼠标按下时触发一次。
         * @property MOUSE_DOWN
         * @type {String}
         * @static
         */
        public MOUSE_DOWN:string;
        /**
         * !#en The event type for mouse move events, you can use its value directly: 'mousemove'
         * !#zh 当鼠标在目标节点在目标节点区域中移动时，不论是否按下。
         * @property MOUSE_MOVE
         * @type {String}
         * @static
         */
        public MOUSE_MOVE:string;
        /**
         * !#en The event type for mouse enter target events, you can use its value directly: 'mouseenter'
         * !#zh 当鼠标移入目标节点区域时，不论是否按下。
         * @property MOUSE_ENTER
         * @type {String}
         * @static
         */
        public MOUSE_ENTER:string;
        /**
         * !#en The event type for mouse leave target events, you can use its value directly: 'mouseleave'
         * !#zh 当鼠标移出目标节点区域时，不论是否按下。
         * @property MOUSE_LEAVE
         * @type {String}
         * @static
         */
        public MOUSE_LEAVE:string;
        /**
         * !#en The event type for mouse up events, you can use its value directly: 'mouseup'
         * !#zh 当鼠标从按下状态松开时触发一次。
         * @property MOUSE_UP
         * @type {String}
         * @static
         */
        public MOUSE_UP:string;
        /**
         * !#en The event type for mouse wheel events, you can use its value directly: 'mousewheel'
         * !#zh 当鼠标滚轮滚动时。
         * @property MOUSE_WHEEL
         * @type {String}
         * @static
         */
        public MOUSE_WHEEL:string;
    }

    export function getConstructor(typeOrClassName:string):any;

    export function findComponent(node:Node, constructor:Function):Component;

    export function findComponents(node:Node, constructor:any, components:Component[]):void;

    export function findChildComponent(children:Node[], constructor:any):Component;

    export function findChildComponents(children:Node[], constructor:any, components:Component[]):void;

    /**
     * !#en
     * Class of all entities in Cocos Creator scenes.<br/>
     * Node also inherits from {{#crossLink "EventTarget"}}Event Target{{/crossLink}}, it permits Node to dispatch events.
     * For events supported by Node, please refer to {{#crossLink "Node.EventType"}}{{/crossLink}}
     * !#zh
     * Cocos Creator 场景中的所有节点类。节点也继承了 {{#crossLink "EventTarget"}}EventTarget{{/crossLink}}，它允许节点发送事件。<br/>
     * 支持的节点事件，请参阅 {{#crossLink "Node.EventType"}}{{/crossLink}}。
     * @class Node
     * @extends _BaseNode
     */
    export class Node extends BaseNode implements EventTarget {
        /**
         * !#en
         * The local active state of this node.<br/>
         * Note that a Node may be inactive because a parent is not active, even if this returns true.<br/>
         * Use {{#crossLink "Node/activeInHierarchy:property"}}{{/crossLink}} if you want to check if the Node is actually treated as active in the scene.
         * !#zh
         * 当前节点的自身激活状态。<br/>
         * 值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。<br/>
         * 如果你想检查节点在场景中实际的激活状态可以使用 {{#crossLink "Node/activeInHierarchy:property"}}{{/crossLink}}。
         * @property active
         * @type {Boolean}
         * @default true
         * @example
         * node.active = false;
         */
        public active:boolean;

        /**
         * !#en Indicates whether this node is active in the scene.
         * !#zh 表示此节点是否在场景中激活。
         * @property activeInHierarchy
         * @type {Boolean}
         * @example
         * cc.log("activeInHierarchy: " + node.activeInHierarchy);
         */
        public readonly activeInHierarchy:boolean;


        /**
         * !#en
         * Group index of node.<br/>
         * Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>
         * !#zh
         * 节点的分组索引。<br/>
         * 节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>
         * @property groupIndex
         * @type {Integer}
         * @default 0
         */
        // public groupIndex:Integer;
        public groupIndex:number;

        /**
         * !#en
         * Group of node.<br/>
         * Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>
         * !#zh
         * 节点的分组。<br/>
         * 节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>
         * @property group
         * @type {String}
         */
        public group:string;


        // Properties taken from base-nodes/BaseNodesPropertyDefine.js
        public x:number;
        public y:number;
        public width:number;
        public height:number;
        public anchorX:number;
        public anchorY:number;
        public skewX:number;
        public skewY:number;
        public zIndex:number;
        public vertexZ:number;
        public rotation:number;
        public rotationX:number;
        public rotationY:number;
        public scale:number;
        public scaleX:number;
        public scaleY:number;
        public children:Node[];
        public childrenCount:number;
        public parent:Node;
        public visible:boolean;
        public running:boolean;
        public ignoreAnchor:boolean;
        public actionManager:ActionManager;
        public scheduler:Scheduler;
        public boundingBox:Rect;
        public shaderProgram:ShaderProgram;
        public opacity:number;
        public opacityModifyRGB:boolean;
        public cascadeOpacity:boolean;
        public color:Color;
        public cascadeColor:boolean;


        // Methods
        public constructor();

        public destroy():void;

        /**
         * !#en
         * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
         * You can also get component in the node by passing in the name of the script.
         * !#zh
         * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
         * 传入参数也可以是脚本的名称。
         * @method getComponent
         * @param {Function|String} typeOrClassName
         * @return {Component}
         * @example
         * // get sprite component.
         * var sprite = node.getComponent(cc.Sprite);
         * // get custom test calss.
         * var test = node.getComponent("Test");
         */
        public getComponent(typeOrClassName:Function|string):Component;

        /**
         * !#en Returns all components of supplied type in the node.
         * !#zh 返回节点上指定类型的所有组件。
         * @method getComponents
         * @param {Function|String} typeOrClassName
         * @return {Component[]}
         * @example
         * var sprites = node.getComponents(cc.Sprite);
         * var tests = node.getComponents("Test");
         */
        public getComponents(typeOrClassName:Function|string):Component[];

        /**
         * !#en Returns the component of supplied type in any of its children using depth first search.
         * !#zh 递归查找所有子节点中第一个匹配指定类型的组件。
         * @method getComponentInChildren
         * @param {Function|String} typeOrClassName
         * @return {Component}
         * @example
         * var sprite = node.getComponentInChildren(cc.Sprite);
         * var Test = node.getComponentInChildren("Test");
         */
        public getComponentInChildren(typeOrClassName:Function|string):Component;

        /**
         * !#en Returns all components of supplied type in self or any of its children.
         * !#zh 递归查找自身或所有子节点中指定类型的组件
         * @method getComponentsInChildren
         * @param {Function|String} typeOrClassName
         * @return {Component[]}
         * @example
         * var sprites = node.getComponentsInChildren(cc.Sprite);
         * var tests = node.getComponentsInChildren("Test");
         */
        public getComponentsInChildren(typeOrClassName:Function|string):Component;

        /**
         * !#en Adds a component class to the node. You can also add component to node by passing in the name of the script.
         * !#zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
         * @method addComponent
         * @param {Function|String} typeOrClassName - The constructor or the class name of the component to add
         * @return {Component} - The newly added component
         * @example
         * var sprite = node.addComponent(cc.Sprite);
         * var test = node.addComponent("Test");
         */
        public addComponent(typeOrClassName:Function|string):Component;


        /**
         * !#en
         * Register a callback of a specific event type on Node.<br/>
         * Use this method to register touch or mouse event permit propagation based on scene graph,
         * you can propagate the event to the parents or swallow it by calling stopPropagation on the event.<br/>
         * It's the recommended way to register touch/mouse event for Node,
         * please do not use cc.eventManager directly for Node.
         * !#zh
         * 在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的调用者。<br/>
         * 同时您可以将事件派发到父节点或者通过调用 stopPropagation 拦截它。<br/>
         * 推荐使用这种方式来监听节点上的触摸或鼠标事件，请不要在节点上直接使用 cc.eventManager。
         * @method on
         * @param {String} type - A string representing the event type to listen for.
         * @param {Function} callback - The callback that will be invoked when the event is dispatched.
         *                              The callback is ignored if it is a duplicate (the callbacks are unique).
         * @param {Event} callback.param event
         * @param {Object} [target] - The target to invoke the callback, can be null
         * @param {Boolean} useCapture - When set to true, the capture argument prevents callback
         *                              from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
         *                              When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
         *                              Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.
         * @return {Function} - Just returns the incoming callback so you can save the anonymous function easier.
         * @example
         * // add Node Touch Event
         * node.on(cc.Node.EventType.TOUCH_START, callback, this.node);
         * node.on(cc.Node.EventType.TOUCH_MOVE, callback, this.node);
         * node.on(cc.Node.EventType.TOUCH_END, callback, this.node);
         * node.on(cc.Node.EventType.TOUCH_CANCEL, callback, this.node);
         */
        public on(type:string, callback:Function, target:Object, useCapture:boolean):Function;

        /**
         * !#en
         * Removes the callback previously registered with the same type, callback, target and or useCapture.
         * This method is merely an alias to removeEventListener.
         * !#zh 删除之前与同类型，回调，目标或 useCapture 注册的回调。
         * @method off
         * @param {String} type - A string representing the event type being removed.
         * @param {Function} callback - The callback to remove.
         * @param {Object} [target] - The target to invoke the callback, if it's not given, only callback without target will be removed
         * @param {Boolean} useCapture - Specifies whether the callback being removed was registered as a capturing callback or not.
         *                              If not specified, useCapture defaults to false. If a callback was registered twice,
         *                              one with capture and one without, each must be removed separately. Removal of a capturing callback
         *                              does not affect a non-capturing version of the same listener, and vice versa.
         * @example
         * // remove Node TOUCH_START Event.
         * node.on(cc.Node.EventType.TOUCH_START, callback, this.node);
         * node.off(cc.Node.EventType.TOUCH_START, callback, this.node);
         */
        public off(type:string, callback:Function, target:Object, useCapture:boolean):void;

        /**
         * !#en Removes all callbacks previously registered with the same target.
         * !#zh 移除目标上的所有注册事件。
         * @method targetOff
         * @param {Object} target - The target to be searched for all related callbacks
         * @example
         * node.targetOff(target);
         */
        public targetOff(target:Object):void;

        public isRunning():boolean;

    // ACTIONS
        /**
         * !#en
         * Executes an action, and returns the action that is executed.<br/>
         * The node becomes the action's target. Refer to cc.Action's getTarget() <br/>
         * Calling runAction while the node is not active won't have any effect. <br/>
         * Note：You shouldn't modify the action after runAction, that won't take any effect.<br/>
         * if you want to modify, when you define action plus.
         * !#zh
         * 执行并返回该执行的动作。该节点将会变成动作的目标。<br/>
         * 调用 runAction 时，节点自身处于不激活状态将不会有任何效果。<br/>
         * 注意：你不应该修改 runAction 后的动作，将无法发挥作用，如果想进行修改，请在定义 action 时加入。
         * @method runAction
         * @param {Action} action
         * @return {Action} An Action pointer
         * @example
         * var action = cc.scaleTo(0.2, 1, 0.6);
         * node.runAction(action);
         * node.runAction(action).repeatForever(); // fail
         * node.runAction(action.repeatForever()); // right
         */
        public runAction(action:Action):Action;

        /**
         * !#en Stops and removes all actions from the running action list .
         * !#zh 停止并且移除所有正在运行的动作列表。
         * @method stopAllActions
         * @example
         * node.stopAllActions();
         */
        public stopAllActions():void;

        /**
         * !#en Stops and removes an action from the running action list.
         * !#zh 停止并移除指定的动作。
         * @method stopAction
         * @param {Action} action An action object to be removed.
         * @example
         * var action = cc.scaleTo(0.2, 1, 0.6);
         * node.stopAction(action);
         */
        public stopAction(action:Action):void;

        /**
         * !#en Removes an action from the running action list by its tag.
         * !#zh 停止并且移除指定标签的动作。
         * @method stopActionByTag
         * @param {Number} tag A tag that indicates the action to be removed.
         * @example
         * node.stopAction(1);
         */
        public stopActionByTag(tag:number):void;

        /**
         * !#en Returns an action from the running action list by its tag.
         * !#zh 通过标签获取指定动作。
         * @method getActionByTag
         * @see cc.Action#getTag and cc.Action#setTag
         * @param {Number} tag
         * @return {Action} The action object with the given tag.
         * @example
         * var action = node.getActionByTag(1);
         */
        public getActionByTag(tag:number):Action;

        /**
         * !#en
         * Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
         *    Composable actions are counted as 1 action. Example:<br/>
         *    If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         *    If you are running 7 Sequences of 2 actions, it will return 7.</p>
         * !#zh
         * 获取运行着的动作加上正在调度运行的动作的总数。<br/>
         * 例如：<br/>
         * - 如果你正在运行 7 个动作中的 1 个 Sequence，它将返回 1。<br/>
         * - 如果你正在运行 2 个动作中的 7 个 Sequence，它将返回 7。<br/>
         *
         * @method getNumberOfRunningActions
         * @return {Number} The number of actions that are running plus the ones that are schedule to run
         * @example
         * var count = node.getNumberOfRunningActions();
         * cc.log("Running Action Count: " + count);
         */
        public getNumberOfRunningActions():number;
    }

}
