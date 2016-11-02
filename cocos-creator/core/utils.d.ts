/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/base-node.js
    //+--------------------------------------------------------------------------------
    /**
     * A base node for CCNode and CCEScene, it will:
     * - provide the same api with origin cocos2d rendering node (SGNode)
     * - maintains properties of the internal SGNode
     * - retain and release the SGNode
     * - serialize datas for SGNode (but SGNode itself will not being serialized)
     * - notifications if some properties changed
     * - define some interfaces shares between CCNode and CCEScene
     *
     *
     * @class _BaseNode
     * @extends Object
     * @private
     */
    export class BaseNode extends Object implements EventTarget {
        ////////////////////////////////////////////////////////////
        // Instance properties
        ////////////////////////////////////////////////////////////

        // Properties with no doc comments
        public readonly running:boolean;
        public readonly scheduler:Scheduler;
        // public readonly actionManager:ActionManager;
        // public shaderProgram:ShaderProgram;
        public opacityModifyRGB:boolean;

        /**
         * !#en Name of node.
         * !#zh 该节点名称。
         * @property name
         * @type {String}
         * @example
         * node.name = "New Node";
         * cc.log("Node Name: " + node.name);
         */
        public name:string;

        /**
         * !#en The parent of the node.
         * !#zh 该节点的父节点。
         * @property parent
         * @type {Node}
         * @default null
         * @example
         * node.parent = newNode;
         */
        public parent:Node;

        /**
         * !#en The uuid for editor, will be stripped before building project.
         * !#zh 用于编辑器使用的 uuid，在构建项目之前将会被剔除。
         * @property uuid
         * @type {String}
         * @readOnly
         * @example
         * cc.log("Node Uuid: " + node.uuid);
         */
        public readonly uuid:string;

        /**
         * !#en Skew x
         * !#zh 该节点 Y 轴倾斜角度。
         * @property skewX
         * @type {Number}
         * @example
         * node.skewX = 0;
         * cc.log("Node SkewX: " + node.skewX);
         */
        public skewX:number;

        /**
         * !#en Skew y
         * !#zh 该节点 X 轴倾斜角度。
         * @property skewY
         * @type {Number}
         * @example
         * node.skewY = 0;
         * cc.log("Node SkewY: " + node.skewY);
         */
        public skewY:number;

        /**
         * !#en Z order in depth which stands for the drawing order.
         * !#zh 该节点渲染排序的 Z 轴深度。
         * @property zIndex
         * @type {Number}
         * @example
         * node.zIndex = 1;
         * cc.log("Node zIndex: " + node.zIndex);
         */
        public zIndex:number;

        /**
         * !#en Rotation of node.
         * !#zh 该节点旋转角度。
         * @property rotation
         * @type {Number}
         * @example
         * node.rotation = 90;
         * cc.log("Node Rotation: " + node.rotation);
         */
        public rotation:number;

        /**
         * !#en Rotation on x axis.
         * !#zh 该节点 X 轴旋转角度。
         * @property rotationX
         * @type {Number}
         * @example
         * node.rotationX = 45;
         * cc.log("Node Rotation X: " + node.rotationX);
         */
        public rotationX:number;

        /**
         * !#en Rotation on y axis.
         * !#zh 该节点 Y 轴旋转角度。
         * @property rotationY
         * @type {Number}
         * @example
         * node.rotationY = 45;
         * cc.log("Node Rotation Y: " + node.rotationY);
         */
        public rotationY:number;

        /**
         * !#en Scale on x axis.
         * !#zh 节点 X 轴缩放。
         * @property scaleX
         * @type {Number}
         * @example
         * node.scaleX = 0.5;
         * cc.log("Node Scale X: " + node.scaleX);
         */
        public scaleX:number;

        /**
         * !#en Scale on y axis.
         * !#zh 节点 Y 轴缩放。
         * @property scaleY
         * @type {Number}
         * @example
         * node.scaleY = 0.5;
         * cc.log("Node Scale Y: " + node.scaleY);
         */
        public scaleY:number;

        /**
         * !#en x axis position of node.
         * !#zh 节点 X 轴坐标。
         * @property x
         * @type {Number}
         * @example
         * node.x = 100;
         * cc.log("Node Position X: " + node.x);
         */
        public x:number;

        /**
         * !#en y axis position of node.
         * !#zh 节点 Y 轴坐标。
         * @property y
         * @type {Number}
         * @example
         * node.y = 100;
         * cc.log("Node Position Y: " + node.y);
         */
        public y:number;

        /**
         * !#en Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.
         * !#zh 获取在父节点坐标系中节点的位置（ x , y ）。
         * @property position
         * @type {Vec2}
         * @example
         * node.convertToWorldSpace(node.position);
         */
        public position:Vec2;

        /**
         * !#en All children nodes.
         * !#zh 节点的所有子节点。
         * @property children
         * @type {Node[]}
         * @readOnly
         * @example
         * var children = node.children;
         * for (var i = 0; i < children.lenght; ++i) {
         *     cc.log("Node: " + children[i]);
         * }
         */
        public readonly children:Node[];

        /**
         * !#en All children nodes.
         * !#zh 节点的子节点数量。
         * @property childrenCount
         * @type {Number}
         * @readOnly
         * @example
         * var count = node.childrenCount;
         * cc.log("Node Children Count: " + count);
         */
        public readonly childrenCount:number;

        /**
         * !#en Anchor point's position on x axis.
         * !#zh 节点 X 轴锚点位置。
         * @property anchorX
         * @type {Number}
         * @example
         * node.anchorX = 0;
         */
        public anchorX:number;

        /**
         * !#en Anchor point's position on y axis.
         * !#zh 节点 Y 轴锚点位置。
         * @property anchorY
         * @type {Number}
         * @example
         * node.anchorY = 0;
         */
        public anchorY:number;

        /**
         * !#en Width of node.
         * !#zh 节点宽度。
         * @property width
         * @type {Number}
         * @example
         * node.width = 100;
         */
        public width:number;

        /**
         * !#en Height of node.
         * !#zh 节点高度。
         * @property height
         * @type {Number}
         * @example
         * node.height = 100;
         */
        public height:number;

        /**
         * !#en Tag of node.
         * !#zh 节点标签。
         * @property tag
         * @type {Number}
         * @example
         * node.tag = 1001;
         */
        public tag:number;

        /**
         * !#en Opacity of node, default value is 255.
         * !#zh 节点透明度，默认值为 255。
         * @property opacity
         * @type {Number}
         * @example
         * node.opacity = 255;
         */
        public opacity:number;

        /**
         * !#en Indicate whether node's opacity value affect its child nodes, default value is true.
         * !#zh 节点的不透明度值是否影响其子节点，默认值为 true。
         * @property cascadeOpacity
         * @type {Boolean}
         * @example
         * cc.log("CascadeOpacity: " + node.cascadeOpacity);
         */
        public cascadeOpacity:boolean;

        /**
         * !#en Indicate whether node's color value affect its child nodes, default value is true.
         * !#zh TODO: Edit this later, I don't know Chinese，默认值为 true。
         * @property cascadeColor
         * @type {Boolean}
         * @example
         * cc.log("CascadeColor: " + node.cascadeColor);
         */
        public cascadeColor:boolean;

        /**
         * !#en Color of node, default value is white: (255, 255, 255).
         * !#zh 节点颜色。默认为白色，数值为：（255，255，255）。
         * @property color
         * @type {Color}
         * @example
         * node.color = new cc.Color(255, 255, 255);
         */
        public color:Color;

        public constructor();

        /*
        * Initializes the instance of cc.Node
        * @method init
        * @returns {Boolean} Whether the initialization was successful.
        * @deprecated, no need anymore
        */
        public init:boolean;

        /**
         * !#en The local scale relative to the parent.
         * !#zh 节点相对父节点的缩放。
         * @property scale
         * @type {Number}
         * @example
         * node.scale = 1;
         */
        public scale:number;


        ////////////////////////////////////////////////////////////
        // Instance methods
        ////////////////////////////////////////////////////////////

        /**
         * !#en
         * Properties configuration function </br>
         * All properties in attrs will be set to the node, </br>
         * when the setter of the node is available, </br>
         * the property will be set via setter function.</br>
         * !#zh 属性配置函数。在 attrs 的所有属性将被设置为节点属性。
         * @method attr
         * @param {Object} attrs - Properties to be set to node
         * @example
         * var attrs = { key: 0, num: 100 };
         * node.attr(attrs);
         */
        public attr(attrs:{[name:string]:any}):void;

        /*
        * !#en
        * Defines the oder in which the nodes are renderer.
        * Nodes that have a Global Z Order lower, are renderer first.
        * <br/>
        * In case two or more nodes have the same Global Z Order, the oder is not guaranteed.
        * The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.
        * <br/>
        * By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.
        * <br/>
        * Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.
        * <br/>
        * Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.
        * And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.
        * !#zh
        * 定义节点的渲染顺序。
        * 节点具有全局 Z 顺序，顺序越小的节点，最先渲染。
        * </br>
        * 假设两个或者更多的节点拥有相同的全局 Z 顺序，那么渲染顺序无法保证。
        * 唯一的例外是如果节点的全局 Z 顺序为零，那么场景中的顺序是可以使用默认的。
        * </br>
        * 所有的节点全局 Z 顺序都是零。这就是说，默认使用场景中的顺序来渲染节点。
        * </br>
        * 全局 Z 顺序是非常有用的当你需要渲染节点按照不同的顺序而不是场景顺序。
        * </br>
        * 局限性: 全局 Z 顺序不能够被拥有继承 “SpriteBatchNode” 的节点使用。
        * 并且如果 “ClippingNode” 是其中之一的上代，那么 “global Z order” 将会和 “ClippingNode” 有关。
        * @method setGlobalZOrder
        * @param {Number} globalZOrder
        * @example
        * node.setGlobalZOrder(0);
        */
        public setGlobalZOrder(globalZOrder:number):void;

        /*
        * !#en Return the Node's Global Z Order.
        * !#zh 获取节点的全局 Z 顺序。
        * @method getGlobalZOrder
        * @returns {number} The node's global Z order
        * @example
        * cc.log("Global Z Order: " + node.getGlobalZOrder());
        */
        public getGlobalZOrder():number;

        /**
         * !#en Returns the local Z order of this node.
         * !#zh 获取节点局部 Z 轴顺序。
         * @method getLocalZOrder
         * @returns {Number} The local (relative to its siblings) Z order.
         * @example
         * var localZorder = node.getLocalZOrder();
         */
        public getLocalZOrder():number;

        /**
         * !#en
         * LocalZOrder is the 'key' used to sort the node relative to its siblings.                                        <br/>
         *                                                                                                                 <br/>
         * The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
         * If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
         * will be in front of the other node in the array.                                                                <br/>
         * Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) <br/>
         * And Nodes that have LocalZOder values smaller than 0 are the "left" subtree <br/>
         * While Nodes with LocalZOder greater than 0 are the "right" subtree.
         * !#zh
         * LocalZOrder 是 “key” (关键)来分辨节点和它兄弟节点的相关性。
         * 父节点将会通过 LocalZOrder 的值来分辨所有的子节点。
         * 如果两个节点有同样的 LocalZOrder，那么先加入子节点数组的节点将会显示在后加入的节点的前面。
         * 同样的，场景图使用 “In-Order（按顺序）” 遍历数算法来遍历
         * ( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) 并且拥有小于 0 的 LocalZOrder 的值的节点是 “ left ” 子树（左子树）
         * 所以拥有大于 0 的 LocalZOrder 的值得节点是 “ right ”子树（右子树）。
         * @method setLocalZOrder
         * @param {Number} localZOrder
         * @example
         * node.setLocalZOrder(1);
         */
        public setLocalZOrder(z:number):void;

        /**
         * !#en
         * Returns the scale factor of the node.
         * Assertion will fail when _scaleX != _scaleY.
         * !#zh 获取节点的缩放。当 X 轴和 Y 轴有相同的缩放数值时。
         * @method getScale
         * @return {Number} The scale factor
         * @example
         * cc.log("Node Scale: " + node.getScale());
         */
        public getScale():number;

        /**
         * !#en Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
         * !#zh 设置节点的缩放比例，默认值为 1.0。这个函数可以在同一时间修改 X 和 Y 缩放。
         * @method setScale
         * @param {Number|Vec2} scaleX - scaleX or scale
         * @param {Number} [scaleY=scale]
         * @example
         * node.setScale(cc.v2(1, 1));
         * node.setScale(1, 1);
         */
        public setScale(scaleX:Vec2|number, scaleY?:number):void;

        /**
         * !#en Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.
         * !#zh 获取在父节点坐标系中节点的位置（ x , y ）。
         * @method getPosition
         * @return {Vec2} The position (x,y) of the node in OpenGL coordinates
         * @example
         * cc.log("Node Position: " + node.getPosition());
         */
        public getPosition():Vec2;

        /**
         * !#en
         * Changes the position (x,y) of the node in cocos2d coordinates.<br/>
         * The original point (0,0) is at the left-bottom corner of screen.<br/>
         * Usually we use cc.v2(x,y) to compose CCVec2 object.<br/>
         * and Passing two numbers (x,y) is more efficient than passing CCPoint object.
         * !#zh
         * 设置节点在父坐标系中的位置。<br/>
         * 可以通过 2 种方式设置坐标点：<br/>
         * 1.传入 cc.v2(x, y) 类型为 cc.Vec2 的对象。<br/>
         * 2.传入 2 个数值 x 和 y。
         * @method setPosition
         * @param {Vec2|Number} newPosOrxValue - The position (x,y) of the node in coordinates or the X coordinate for position
         * @param {Number} [yValue] - Y coordinate for position
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/base-node/setPosition.js}
         */
        public setPosition(newPosOrxValue:Vec2|number, yValue?:number):void;

        /**
         * !#en Returns the x axis position of the node in cocos2d coordinates.
         * !#zh 获取节点 X 轴坐标。
         * @method getPositionX
         * @return {Number} x - The new position in x axis
         * @example
         * var posX = node.getPositionX();
         */
        public getPositionX():number;

        /**
         * !#en Sets the x axis position of the node in cocos2d coordinates.
         * !#zh 设置节点 X 轴坐标。
         * @method setPositionX
         * @param {Number} x
         * @example
         * node.setPositionX(1);
         */
        public setPositionX(x:number):void;

        /**
         * !#en Returns the y axis position of the node in cocos2d coordinates.
         * !#zh 获取节点 Y 轴坐标。
         * @method getPositionY
         * @return {Number}
         * @example
         * var posY = node.getPositionY();
         */
        public getPositionY():number;

        /**
         * !#en Sets the y axis position of the node in cocos2d coordinates.
         * !#zh 设置节点 Y 轴坐标。
         * @method setPositionY
         * @param {Number} y - The new position in y axis
         * @example
         * node.setPositionY(100);
         */
        public setPositionY(y:number):void;

        /**
         * !#en
         * Returns a copy of the anchor point.<br/>
         * Anchor point is the point around which all transformations and positioning manipulations take place.<br/>
         * It's like a pin in the node where it is "attached" to its parent. <br/>
         * The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
         * But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
         * The default anchor point is (0.5,0.5), so it starts at the center of the node.
         * !#zh
         * 获取节点锚点，用百分比表示。<br/>
         * 锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
         * 锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
         * 但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
         * 默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
         * 注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
         * @method getAnchorPoint
         * @return {Vec2} The anchor point of node.
         * @example
         * cc.log("Node AnchorPoint: " + node.getAnchorPoint());
         */
        public getAnchorPoint():Vec2; 

        /**
         * !#en
         * Sets the anchor point in percent. <br/>
         * anchor point is the point around which all transformations and positioning manipulations take place. <br/>
         * It's like a pin in the node where it is "attached" to its parent. <br/>
         * The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.<br/>
         * But you can use values higher than (1,1) and lower than (0,0) too.<br/>
         * The default anchor point is (0.5,0.5), so it starts at the center of the node.
         * !#zh
         * 设置锚点的百分比。<br/>
         * 锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
         * 锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
         * 但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
         * 默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
         * 注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
         * @method setAnchorPoint
         * @param {Vec2|Number} point - The anchor point of node or The x axis anchor of node.
         * @param {Number} [y] - The y axis anchor of node.
         * @example
         * node.setAnchorPoint(cc.v2(1, 1));
         * node.setAnchorPoint(1, 1);
         */
        public setAnchorPoint(point:Vec2|number, y?:number):void;

        /**
         * !#en
         * Returns a copy of the anchor point in absolute pixels.  <br/>
         * you can only read it. If you wish to modify it, use setAnchorPoint.
         * !#zh
         * 返回锚点的绝对像素位置。<br/>
         * 你只能读它。如果您要修改它，使用 setAnchorPoint。
         * @see cc.Node#getAnchorPoint
         * @method getAnchorPointInPoints
         * @return {Vec2} The anchor point in absolute pixels.
         * @example
         * cc.log("AnchorPointInPoints: " + node.getAnchorPointInPoints());
         */
        public getAnchorPointInPoints():Vec2;

        /**
         * !#en
         * Returns a copy the untransformed size of the node. <br/>
         * The contentSize remains the same no matter the node is scaled or rotated.<br/>
         * All nodes has a size. Layer and Scene has the same size of the screen by default. <br/>
         * !#zh 获取节点自身大小，不受该节点是否被缩放或者旋转的影响。
         * @method getContentSize
         * @param {Boolean} [ignoreSizeProvider=false] - true if you need to get the original size of the node
         * @return {Size} The untransformed size of the node.
         * @example
         * cc.log("Content Size: " + node.getContentSize());
         */
        public getContentSize(ignoreSizeProvider?:boolean):Size;

        /**
         * !#en
         * Sets the untransformed size of the node.<br/>
         * The contentSize remains the same no matter the node is scaled or rotated.<br/>
         * All nodes has a size. Layer and Scene has the same size of the screen.
         * !#zh 设置节点原始大小，不受该节点是否被缩放或者旋转的影响。
         * @method setContentSize
         * @param {Size|Number} size - The untransformed size of the node or The untransformed size's width of the node.
         * @param {Number} [height] - The untransformed size's height of the node.
         * @example
         * node.setContentSize(cc.size(100, 100));
         * node.setContentSize(100, 100);
         */
        public setContentSize(size:Size|number, height?:number):void;

        /**
         * !#en
         * Returns a "local" axis aligned bounding box of the node. <br/>
         * The returned box is relative only to its parent.
         * !#zh 返回父节坐标系下的轴向对齐的包围盒。
         * @method getBoundingBox
         * @return {Rect} The calculated bounding box of the node
         * @example
         * var boundingBox = node.getBoundingBox();
         */
        public getBoundingBox():Rect;

        /**
         * !#en Stops all running actions and schedulers.
         * !#zh 停止所有正在播放的动作和计时器。
         * @method cleanup
         * @example
         * node.cleanup();
         */
        public cleanup():void;

        /**
         * !#en Returns a child from the container given its tag.
         * !#zh 通过标签获取节点的子节点。
         * @method getChildByTag
         * @param {Number} aTag - An identifier to find the child node.
         * @return {Node} a CCNode object whose tag equals to the input parameter
         * @example
         * var child = node.getChildByTag(1001);
         */
        public getChildByTag(tag:number):Node;

        /**
         * !#en Returns a child from the container given its uuid.
         * !#zh 通过 uuid 获取节点的子节点。
         * @method getChildByUuid
         * @param {String} uuid - The uuid to find the child node.
         * @return {Node} a Node whose uuid equals to the input parameter
         * @example
         * var child = node.getChildByUuid(uuid);
         */
        public getChildByUuid(uuid:string):Node;

        /**
         * !#en Returns a child from the container given its name.
         * !#zh 通过名称获取节点的子节点。
         * @method getChildByName
         * @param {String} name - A name to find the child node.
         * @return {Node} a CCNode object whose name equals to the input parameter
         * @example
         * var child = node.getChildByName("Test Node");
         */
        public getChildByName(name:string):Node;

        /**
         * !#en
         * "add" logic MUST only be in this method <br/>
         * !#zh
         * 添加子节点，并且可以修改该节点的 局部 Z 顺序和标签。
         * @method addChild
         * @param {Node} child - A child node
         * @param {Number} [localZOrder] - Z order for drawing priority. Please refer to setZOrder(int)
         * @param {Number|String} [tag] - An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)
         * @example
         * node.addChild(newNode, 1, 1001);
         */
        public addChild(child:Node, localZOrder?:number, tag?:number):void;

        /**
         * !#en
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * If the node orphan, then nothing happens.
         * !#zh
         * 从父节点中删除一个节点。cleanup 参数为 true，那么在这个节点上所有的动作和回调都会被删除，反之则不会。<br/>
         * 如果不传入 cleanup 参数，默认是 true 的。<br/>
         * 如果这个节点是一个孤节点，那么什么都不会发生。
         * @method removeFromParent
         * @param {Boolean} [cleanup=true] - true if all actions and callbacks on this node should be removed, false otherwise.
         * @see cc.Node#removeFromParentAndCleanup
         * @example
         * node.removeFromParent();
         * node.removeFromParent(false);
         */
        public removeFromParent(cleanup?:boolean):void;

        /**
         * !#en
         * Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * "remove" logic MUST only be on this method  <br/>
         * If a class wants to extend the 'removeChild' behavior it only needs <br/>
         * to override this method.
         * !#zh
         * 移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
         * 如果 cleanup 参数不传入，默认为 true 表示清理。<br/>
         * @method removeChild
         * @param {Node} child - The child node which will be removed.
         * @param {Boolean} [cleanup=true] - true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         * @example
         * node.removeChild(newNode);
         * node.removeChild(newNode, false);
         */
        public removeChild(child:Node, cleanup?:boolean):void;

        /**
         * !#en
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * !#zh
         * 通过标签移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
         * 如果 cleanup 参数不传入，默认为 true 表示清理。
         * @method removeChildByTag
         * @param {Number} tag - An integer number that identifies a child node
         * @param {Boolean} [cleanup=true] - true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         * @see cc.Node#removeChildByTag
         * @example
         * node.removeChildByTag(1001);
         * node.removeChildByTag(1001, false);
         */
        public removeChildByTag(tag:number, cleanup?:boolean):void;

        /**
         * !#en
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup.
         * !#zh
         * 移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
         * 如果 cleanup 参数不传入，默认为 true 表示清理。
         * @method removeAllChildren
         * @param {Boolean} [cleanup=true] - true if all running actions on all children nodes should be cleanup, false otherwise.
         * @example
         * node.removeAllChildren();
         * node.removeAllChildren(false);
         */
        public removeAllChildren(cleanup?:boolean):void;

        public setNodeDirty():void;

        /**
         * !#en
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
         * The matrix is in Pixels. The returned transform is readonly and cannot be changed.
         * !#zh
         * 返回将父节点的坐标系转换成节点（局部）的空间坐标系的矩阵。<br/>
         * 该矩阵以像素为单位。返回的矩阵是只读的，不能更改。
         * @method getParentToNodeTransform
         * @return {AffineTransform}
         * @example
         * var affineTransform = node.getParentToNodeTransform();
         */
        public getParentToNodeTransform():AffineTransform;

        /**
         * !#en Returns the world affine transform matrix. The matrix is in Pixels.
         * !#zh 返回节点到世界坐标系的仿射变换矩阵。矩阵单位是像素。
         * @method getNodeToWorldTransform
         * @return {AffineTransform}
         * @example
         * var affineTransform = node.getNodeToWorldTransform();
         */
        public getNodeToWorldTransform():AffineTransform;

        /**
         * !#en
         * Returns the world affine transform matrix. The matrix is in Pixels.<br/>
         * This method is AR (Anchor Relative).
         * !#zh
         * 返回节点到世界坐标仿射变换矩阵。矩阵单位是像素。<br/>
         * 该方法基于节点坐标。
         * @method getNodeToWorldTransformAR
         * @return {AffineTransform}
         * @example
         * var mat = node.getNodeToWorldTransformAR();
         */
        public getNodeToWorldTransformAR():AffineTransform;

        /**
         * !#en Returns the inverse world affine transform matrix. The matrix is in Pixels.
         * !#en 返回世界坐标系到节点坐标系的逆矩阵。
         * @method getWorldToNodeTransform
         * @return {AffineTransform}
         * @example
         * var affineTransform = node.getWorldToNodeTransform();
         */
        public getWorldToNodeTransform():AffineTransform;

        /**
         * !#en Converts a Point to node (local) space coordinates. The result is in Vec2.
         * !#zh 将一个点转换到节点 (局部) 坐标系。结果以 Vec2 为单位。
         * @method convertToNodeSpace
         * @param {Vec2} worldPoint
         * @return {Vec2}
         * @example
         * var newVec2 = node.convertToNodeSpace(cc.v2(100, 100));
         */
        public convertToNodeSpace(worldPoint:Vec2):Vec2;

        /**
         * !#en Converts a Point to world space coordinates. The result is in Points.
         * !#zh 将一个点转换到世界空间坐标系。结果以 Vec2 为单位。
         * @method convertToWorldSpace
         * @param {Vec2} nodePoint
         * @return {Vec2}
         * @example
         * var newVec2 = node.convertToWorldSpace(cc.v2(100, 100));
         */
        public convertToWorldSpace(nodePoint:Vec2):Vec2; 

        /**
         * !#en
         * Converts a Point to node (local) space coordinates. The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * !#zh
         * 将一个点转换到节点 (局部) 空间坐标系。结果以 Vec2 为单位。<br/>
         * 返回值将基于节点坐标。
         * @method convertToNodeSpaceAR
         * @param {Vec2} worldPoint
         * @return {Vec2}
         * @example
         * var newVec2 = node.convertToNodeSpaceAR(cc.v2(100, 100));
         */
        public convertToNodeSpaceAR(worldPoint:Vec2):Vec2;

        /**
         * !#en
         * Converts a local Point to world space coordinates.The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * !#zh
         * 将一个点转换到世界空间坐标系。结果以 Vec2 为单位。<br/>
         * 返回值将基于世界坐标。
         * @method convertToWorldSpaceAR
         * @param {Vec2} nodePoint
         * @return {Vec2}
         * @example
         * var newVec2 = node.convertToWorldSpaceAR(cc.v2(100, 100));
         */
        public convertToWorldSpaceAR(nodePoint:Vec2):Vec2;

        /**
         * !#en convenience methods which take a cc.Touch instead of cc.Vec2.
         * !#zh 将触摸点转换成本地坐标系中位置。
         * @method convertTouchToNodeSpace
         * @param {Touch} touch - The touch object
         * @return {Vec2}
         * @example
         * var newVec2 = node.convertTouchToNodeSpace(touch);
         */
        public convertTouchToNodeSpace(touch:Touch):Vec2;

        /**
         * !#en converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
         * !#zh 转换一个 cc.Touch（世界坐标）到一个局部坐标，该方法基于节点坐标。
         * @method convertTouchToNodeSpaceAR
         * @param {Touch} touch - The touch object
         * @return {Vec2}
         * @example
         * var newVec2 = node.convertTouchToNodeSpaceAR(touch);
         */
        public convertTouchToNodeSpaceAR(touch:Touch):Vec2;

        /**
         * !#en
         * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
         * The matrix is in Pixels.
         * !#zh 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。这个矩阵以像素为单位。
         * @method getNodeToParentTransform
         * @return {AffineTransform} The affine transform object
         * @example
         * var affineTransform = node.getNodeToParentTransform();
         */
        public getNodeToParentTransform():AffineTransform;

        /**
         * !#en
         * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
         * The matrix is in Pixels.<br/>
         * This method is AR (Anchor Relative).
         * !#zh
         * 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。<br/>
         * 这个矩阵以像素为单位。<br/>
         * 该方法基于节点坐标。
         * @method getNodeToParentTransformAR
         * @return {AffineTransform} The affine transform object
         * @example
         * var affineTransform = node.getNodeToParentTransformAR();
         */
        public getNodeToParentTransformAR():AffineTransform;

        /**
         * !#en
         * Returns a "world" axis aligned bounding box of the node.<br/>
         * The bounding box contains self and active children's world bounding box.
         * !#zh
         * 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。<br/>
         * 该边框包含自身和已激活的子节点的世界边框。
         * @method getBoundingBoxToWorld
         * @return {Rect}
         * @example
         * var newRect = node.getBoundingBoxToWorld();
         */
        public getBoundingBoxToWorld():Rect;

        /**
         * !#en
         * Returns the displayed opacity of Node,
         * the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.
         * !#zh
         * 获取节点显示透明度，
         * 显示透明度和透明度之间的不同之处在于当启用级连透明度时，
         * 显示透明度是基于自身透明度和父节点透明度计算的。
         *
         * @method getDisplayedOpacity
         * @returns {number} displayed opacity
         * @example
         * var displayOpacity = node.getDisplayedOpacity();
         */
        public getDisplayedOpacity():number;

        /*
        * !#en Update displayed opacity.
        * !#zh 更新显示透明度。
        * @method _updateDisplayedOpacity
        * @param {Number} parentOpacity
        * @example
        * node._updateDisplayedOpacity(255);
        */
    //    public _updateDisplayedOpacity(parentOpacity:number):number;  <-- looks like this should be private, so commenting it out

        /**
         * !#en
         * Returns the displayed color of Node,
         * the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.
         * !#zh
         * 获取节点的显示透明度，
         * 显示透明度和透明度之间的不同之处在于显示透明度是基于透明度和父节点透明度启用级连透明度时计算的。
         * @method getDisplayedColor
         * @returns {Color}
         * @example
         * var displayColor = node.getDisplayedColor();
         */
        public getDisplayedColor():Color;

        /**
         * !#en
         * Set whether color should be changed with the opacity value,
         * useless in ccsg.Node, but this function is override in some class to have such behavior.
         * !#zh 设置更改透明度时是否修改RGB值，
         * @method setOpacityModifyRGB
         * @param {Boolean} opacityValue
         * @example
         * node.setOpacityModifyRGB(true);
         */
        public setOpacityModifyRGB(opacityValue:boolean):void;

        /**
         * !#en Get whether color should be changed with the opacity value.
         * !#zh 更改透明度时是否修改RGB值。
         * @method isOpacityModifyRGB
         * @return {Boolean}
         * @example
         * var hasChange = node.isOpacityModifyRGB();
         */
        public isOpacityModifyRGB():boolean;

        /**
         * !#en Returns whether node's opacity value affect its child nodes.
         * !#zh 返回节点的不透明度值是否影响其子节点。
         * @method isCascadeOpacityEnabled
         * @returns {Boolean}
         * @example
         * cc.log(node.isCascadeOpacityEnabled());
         */
        public isCascadeOpacityEnabled():boolean;

        /**
         * !#en Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.
         * !#zh 启用或禁用级连不透明度，如果级连启用，子节点的不透明度将是父不透明度乘上它自己的不透明度。
         * @method setCascadeOpacityEnabled
         * @param {Boolean} cascadeOpacityEnabled
         * @example
         * node.setCascadeOpacityEnabled(true);
         */
        public setCascadeOpacityEnabled(flag:boolean):void;

        /*
        * !#en Returns whether node's color value affect its child nodes.
        * !#zh 返回节点的颜色值是否影响其子节点。
        * @method isCascadeColorEnabled
        * @returns {Boolean}
        * @example
        * cc.log(node.isCascadeColorEnabled());
        */
        public isCascadeColorEnabled():boolean;

        /**
         * !#en Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color.
         * !#zh 启用或禁用级连颜色，如果级连启用，子节点的颜色将是父颜色和它自己的颜色的级连值。
         * @method setCascadeColorEnabled
         * @param {Boolean} cascadeColorEnabled
         * @example
         * node.setCascadeColorEnabled(true);
         */
        public setCascadeColorEnabled(flag:boolean):void;

        // HIERARCHY METHODS

        /**
         * !#en Get the sibling index.
         * !#zh 获取同级索引。
         * @method getSiblingIndex
         * @return {number}
         * @example
         * var index = node.getSiblingIndex();
         */
        public getSiblingIndex():number;

        /**
         * !#en Set the sibling index of this node.
         * !#zh 设置节点同级索引。
         * @method setSiblingIndex
         * @param {Number} index
         * @example
         * node.setSiblingIndex(1);
         */
        public setSiblingIndex(index:number):void;

        /**
         * !#en Is this node a child of the given node?
         * !#zh 是否是指定节点的子节点？
         * @method isChildOf
         * @param {Node} parent
         * @return {Boolean} - Returns true if this node is a child, deep child or identical to the given node.
         * @example
         * node.isChildOf(newNode);
         */
        public isChildOf(parent:Node):boolean;

        /**
         * !#en Sorts the children array depends on children's zIndex and arrivalOrder,
         * normally you won't need to invoke this function.
         * !#zh 根据子节点的 zIndex 和 arrivalOrder 进行排序，正常情况下开发者不需要手动调用这个函数。
         *
         * @method sortAllChildren
         */
        public sortAllChildren():void;

        // public onRestore():void <-- Doesn't look like this should be exposed, so leave it commented out for now
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/CCPath.js
    //+--------------------------------------------------------------------------------
    export const EXTNAME_RE:RegExp;
    export const NORMALIZE_RE:RegExp;

    /**
     * @class path
     * @static
     */
    // cc.path = /** @lends cc.path# */{
    export module path {
        /**
         * Join strings to be a path.
         * @method join
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/CCPath/join.js}
         * @returns {String}
         */
        export function join(...strings:string[]):string;

        /**
         * Get the ext name of a path including '.', like '.png'.
         * @method extname
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/CCPath/extname.js}
         * @param {String} path
         * @returns {string}
         */
        export function extname(path:string):string;

        /**
         * Get the main name of a file name
         * @method mainFileName
         * @param {String} fileName
         * @returns {String}
         */
        export function mainFileName(fileName:string):string;

        /**
         * Get the file name of a file path.
         * @method basename
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/CCPath/basename.js}
         * @param {String} path
         * @param {String} [extname]
         * @returns {string}
         */
        export function basename(path:string, extname?:string):string;

        /**
         * Get dirname of a file path.
         * @method dirname
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/CCPath/dirname.js}
         * @param {String} path
         * @returns {String}
         */
        export function dirname(path:string):string;

        /**
         * Change extname of a file path.
         * @method changeExtname
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/CCPath/changeExtname.js}
         * @param {String} path
         * @param {String} [extname]
         * @returns {String}
         */
        export function changeExtname(path:string, extname:string):string;

        /**
         * Change file name of a file path.
         * @example {@link utils/api/engine/docs/cocos2d/core/utils/CCPath/changeBasename.js}
         * @param {String} path
         * @param {String} basename
         * @param {Boolean} [isSameExt]
         * @returns {String}
         */
        export function changeBasename(path:string, basename:string, isSameExt?:boolean):string;

        // The platform-specific file separator. '\\' or '/'.
        export const sep:string;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/CCPath.js
    //+--------------------------------------------------------------------------------

    /**
     * @class profiler
     */
    export module profiler {
    // cc.profiler = (function () {
        export function analyzeFPS(fps:number);
        export function afterVisit():void;
        export static const profiler:Profiler;

        // TODO: Need to figure out how this method (onFrameRateChange) should be exposed, it looks like it should be writable and what args/return?
        export interface FrameRateChangeFunc { ():void; }

        export class Profiler {
            public onFrameRateChange:FrameRateChangeFunc;
            public getSecondsPerFrame():number;
            public getFrameRate():number;
            public setProfileDuration(duration:number):void;
            public resumeProfiling():void;
            public stopProfiling():void;
            public isShowingStats():boolean;
            public showStats():void;
            public hideStats():void;
            public init():void;
        }
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/find.js
    // NOTE: Skipping this file, I don't notice anything worth including.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/misc.js
    // NOTE: Skipping this file, I don't notice anything worth including.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/misc.js
    // NOTE: Skipping this file, I don't notice anything worth including.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/prefab-helper.js
    // NOTE: Skipping this file, looks like stuff to help with serialization?
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/util/scene-graph-helper.js
    // NOTE: Skipping this file, looks like stuff to help with entity component maintenance?
    //+--------------------------------------------------------------------------------
}
