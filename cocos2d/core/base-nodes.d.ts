/// <reference path="../cocos2d-lib.d.ts" />

declare module cc {
// +--------------------------------------------------------------------------------
// + File: cocos2d/core/base-nodes/CCNode.js
// +--------------------------------------------------------------------------------

// Class Definitions
    /**
     * cc.Node is the root class of all node. Anything that gets drawn or contains things that get drawn is a cc.Node.
     * The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu.
     *
     * The main features of a cc.Node are:
     * - They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc)
     * - They can schedule periodic callback (schedule, unschedule, etc)
     * - They can execute actions (runAction, stopAction, etc)
     *
     * Some cc.Node nodes provide extra functionality for them or their children.
     *
     * Subclassing a cc.Node usually means (one/all) of:
     * - overriding constructor function "ctor" to initialize resources and schedule callbacks
     * - create callbacks to handle the advancement of time
     *
     * Features of cc.Node:
     * - position
     * - scale (x, y)
     * - rotation (in degrees, clockwise)
     * - anchor point
     * - size
     * - color
     * - opacity
     * - visible
     * - z-order
     * - WebGL z position
     *
     *  Default values:
     * - rotation: 0
     * - position: (x=0,y=0)
     * - scale: (x=1,y=1)
     * - contentSize: (x=0,y=0)
     * - anchorPoint: (x=0,y=0)
     * - color: (r=255,g=255,b=255)
     * - opacity: 255
     *
     *  Limitations:
     * - A cc.Node is a "void" object. It doesn't have a texture
     *
     * Order in transformations with grid disabled
     * -# The node will be translated (position)
     * -# The node will be rotated (rotation)
     * -# The node will be scaled (scale)
     *
     * Order in transformations with grid enabled
     * -# The node will be translated (position)
     * -# The node will be rotated (rotation)
     * -# The node will be scaled (scale)
     * -# The grid will capture the screen
     * -# The node will be moved according to the camera values (camera)
     * -# The grid will render the captured screen
     *
     * @class
     * @extends cc.Class
     *
     * @property {Number}               x                   - x axis position of node
     * @property {Number}               y                   - y axis position of node
     * @property {Number}               width               - Width of node
     * @property {Number}               height              - Height of node
     * @property {Number}               anchorX             - Anchor point's position on x axis
     * @property {Number}               anchorY             - Anchor point's position on y axis
     * @property {Boolean}              ignoreAnchor        - Indicate whether ignore the anchor point property for positioning
     * @property {Number}               skewX               - Skew x
     * @property {Number}               skewY               - Skew y
     * @property {Number}               zIndex              - Z order in depth which stands for the drawing order
     * @property {Number}               vertexZ             - WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex
     * @property {Number}               rotation            - Rotation of node
     * @property {Number}               rotationX           - Rotation on x axis
     * @property {Number}               rotationY           - Rotation on y axis
     * @property {Number}               scale               - Scale of node
     * @property {Number}               scaleX              - Scale on x axis
     * @property {Number}               scaleY              - Scale on y axis
     * @property {Boolean}              visible             - Indicate whether node is visible or not
     * @property {cc.Color}             color               - Color of node, default value is white: (255, 255, 255)
     * @property {Boolean}              cascadeColor        - Indicate whether node's color value affect its child nodes, default value is false
     * @property {Number}               opacity             - Opacity of node, default value is 255
     * @property {Boolean}              opacityModifyRGB    - Indicate whether opacity affect the color value, default value is false
     * @property {Boolean}              cascadeOpacity      - Indicate whether node's opacity value affect its child nodes, default value is false
     * @property {Array}                children            - <@readonly> All children nodes
     * @property {Number}               childrenCount       - <@readonly> Number of children
     * @property {cc.Node}              parent              - Parent node
     * @property {Boolean}              running             - <@readonly> Indicate whether node is running or not
     * @property {Number}               tag                 - Tag of node
     * @property {Object}               userData            - Custom user data
     * @property {Object}               userObject          - User assigned CCObject, similar to userData, but instead of holding a void* it holds an id
     * @property {Number}               arrivalOrder        - The arrival order, indicates which children is added previously
     * @property {cc.ActionManager}     actionManager       - The CCActionManager object that is used by all actions.
     * @property {cc.Scheduler}         scheduler           - cc.Scheduler used to schedule all "updates" and timers.
     * @property {cc.GridBase}          grid                - grid object that is used when applying effects
     * @property {cc.GLProgram}         shaderProgram       - The shader program currently used for this node
     * @property {Number}               glServerState       - The state of OpenGL server side
     */
    export class Node extends Class {
        // TODO: Properly declare these things below, they are unknown or as-yet undeclared types:
        //public grid:GridBase;
        //public shaderProgram:GLProgram;

        public actionManager:ActionManager;
        public anchorX:number;
        public anchorY:number;
        public arrivalOrder:number;

        public cascadeColor:boolean;
        public cascadeOpacity:boolean;
        public children:Node[];
        public childrenCount:number;
        public color:Color;
        public glServerState:number;
        public height:number;
        public ignoreAnchor:boolean;
        public opacity:number;
        public opacityModifyRGB:boolean;
        public parent:Node;
        public rotation:number;
        public rotationX:number;
        public rotationY:number;
        public running:boolean;
        public scale:number;
        public scaleX:number;
        public scaleY:number;
        public scheduler:Scheduler;
        public skewX:number;
        public skewY:number;
        public tag:number;
        public userData:any;
        public userObject:Class; // <-- is this return type of cc.Class correct?!? Not sure ...
        public vertexZ:number;
        public width:number;
        public x:number;
        public y:number;
        public visible:boolean;
        public zIndex:number;

        public constructor();

        /**
         * Initializes the instance of cc.Node
         * @function
         * @returns {boolean} Whether the initialization was successful.
         */
        public init():boolean;

        /** "add" logic MUST only be in this method
         *
         * If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.
         * @function
         * @param {cc.Node} child  A child node
         * @param {number} [localZOrder]  Z order for drawing priority. Please refer to setZOrder(int)
         * @param {number|string} [tag]  An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)
         */
        public addChild(child:Node, localZOrder?:number, tag?:number|string):void;

        /**
         * Adds a component to the node's component container.
         * @function
         * @param {cc.Component} component
         *
         * TODO: Uncomment once Component is defined.
         */
        //addComponent(component:Component):void;

        /**
         * Returns a "local" axis aligned bounding box of the node.
         * @deprecated since v3.0, please use getBoundingBox instead
         * @return {cc.Rect}
         */
        public boundingBox():Rect;

        /**
         * Stops all running actions and schedulers
         * @function
         */
        public cleanup():void;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * @function
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        public convertToNodeSpace(worldPoint:Point):Point;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * treating the returned/received node point as anchor relative.
         * @function
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        public convertToNodeSpaceAR(worldPoint:Point):Point;

        /** convenience methods which take a cc.Touch instead of cc.Point
         * @function
         * @param {cc.Touch} touch The touch object
         * @return {cc.Point}
         */
        public convertTouchToNodeSpace(touch:Touch):Point;

        /**
         * converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
         * @function
         * @param {cc.Touch} touch The touch object
         * @return {cc.Point}
         */
        public convertTouchToNodeSpaceAR(touch:Touch):Point;

        /**
         * Converts a Point to world space coordinates. The result is in Points.
         * @function
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        public convertToWorldSpace(nodePoint:Point):Point;

        /**
         * Converts a local Point to world space coordinates.The result is in Points.
         * treating the returned/received node point as anchor relative.
         * @function
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        public convertToWorldSpaceAR(nodePoint:Point):Point;

        public doEnumerate(name:string, callback:(arg:Node) => boolean):void;

        /**
         * TODO: Fill this out with an explanation of this method's purpose/functionality.
         *
         * @function
         * @param {cc.Node} node ???
         * @param {string} name ???
         * @param {function} callback ???
         */
        public doEnumerateRecursive(node:Node, name:string, callback:(arg:Node) => boolean):void;

        /**
         * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function
         * @function
         * @param {CanvasRenderingContext2D} ctx The render context
         */
        public draw(ctx:CanvasRenderingContext2D):void;

        /**
         * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function
         * @function
         * @param {WebGLRenderingContext} ctx The render context
         */
        public draw(ctx:WebGLRenderingContext):void;

        /** Search the children of the receiving node to perform processing for nodes which share a name.
         *
         * @param name The name to search for, supports c++11 regular expression.
         * Search syntax options:
         * `//`: Can only be placed at the begin of the search string. This indicates that it will search recursively.
         * `..`: The search should move up to the node's parent. Can only be placed at the end of string.
         * `/` : When placed anywhere but the start of the search string, this indicates that the search should move to the node's children.
         *
         * @code
         * enumerateChildren("//MyName", ...): This searches the children recursively and matches any node with the name `MyName`.
         * enumerateChildren("[[:alnum:]]+", ...): This search string matches every node of its children.
         * enumerateChildren("A[[:digit:]]", ...): This searches the node's children and returns any child named `A0`, `A1`, ..., `A9`.
         * enumerateChildren("Abby/Normal", ...): This searches the node's grandchildren and returns any node whose name is `Normal`
         * and whose parent is named `Abby`.
         * enumerateChildren("//Abby/Normal", ...): This searches recursively and returns any node whose name is `Normal` and whose
         * parent is named `Abby`.
         * @endcode
         *
         * @warning Only support alpha or number for name, and not support unicode.
         *
         * @param callback A callback function to execute on nodes that match the `name` parameter. The function takes the following arguments:
         *  `node`
         *      A node that matches the name
         *  And returns a boolean result. Your callback can return `true` to terminate the enumeration.
         *
         */
        public enumerateChildren(name:string, callback:(arg:Node) => boolean):void;

        ///**
        // * Properties configuration function
        // * All properties in attrs will be set to the node,
        // * when the setter of the node is available,
        // * the property will be set via setter function.
        // *
        // * @function
        // * @param {Object} attrs Properties to be set to node
        // */
        //attr(attrs);

        /**
         * Returns an action from the running action list by its tag.
         * @function
         * @see cc.Node#getTag and cc.Node#setTag
         * @param {Number} tag
         * @return {cc.Action} The action object with the given tag.
         */
        public getActionByTag(tag:number):Action;

        /**
         * Returns the CCActionManager object that is used by all actions.
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)
         * @function
         * @see cc.Node#setActionManager
         * @return {cc.ActionManager} A CCActionManager object.
         */
        public getActionManager():ActionManager;

        /**
         *  Returns a copy of the anchor point.
         *  Anchor point is the point around which all transformations and positioning manipulations take place.
         *  It's like a pin in the node where it is "attached" to its parent.
         *  The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
         *  But you can use values higher than (1,1) and lower than (0,0) too.
         *  The default anchor point is (0.5,0.5), so it starts at the center of the node.
         * @function
         * @return {cc.Point}  The anchor point of node.
         */
        public getAnchorPoint():Point;

        /**
         * Returns a copy of the anchor point in absolute pixels.
         * you can only read it. If you wish to modify it, use setAnchorPoint
         * @see cc.Node#getAnchorPoint
         * @function
         * @return {cc.Point} The anchor point in absolute pixels.
         */
        public getAnchorPointInPoints():Point;

        /**
         * Returns a "local" axis aligned bounding box of the node.
         * The returned box is relative only to its parent.
         * @function
         * @return {cc.Rect} The calculated bounding box of the node
         */
        public getBoundingBox():Rect;

        /**
         * Returns a "world" axis aligned bounding box of the node.
         * @function
         * @return {cc.Rect}
         */
        public getBoundingBoxToWorld():Rect;

        /**
         * Returns a camera object that lets you move the node using a gluLookAt
         * @function
         * @return {cc.Camera} A CCCamera object that lets you move the node using a gluLookAt
         * @deprecated since v3.0, no alternative function
         * @example
         * var camera = node.getCamera();
         * camera.setEye(0, 0, 415/2);
         * camera.setCenter(0, 0, 0);
         *
         * TODO: Uncomment once Camera is defined.
         */
        //getCamera():Camera;

        /**
         * Returns a child from the container given its name
         * @function
         * @param {String} name A name to find the child node.
         * @return {cc.Node} a CCNode object whose name equals to the input parameter
         */
        public getChildByName(name:string):Node;

        /**
         * Returns a child from the container given its tag
         * @function
         * @param {Number} tag An identifier to find the child node.
         * @return {cc.Node} a CCNode object whose tag equals to the input parameter
         */
        public getChildByTag(tag:number):Node;

        /**
         * Returns an array of all children
         * Composing a "tree" structure is a very important feature of CCNode
         * @function
         * @return {Array} An array of children
         * @example
         *  //This sample code traverses all children nodes, and set their position to (0,0)
         *  var allChildren = parent.getChildren();
         *  for(var i = 0; i < allChildren.length; i++) {
         *      allChildren[i].setPosition(0, 0);
         *  }
         */
        public getChildren():Node[];

        /**
         * Returns the amount of children.
         * @function
         * @return {Number} The amount of children.
         */
        public getChildrenCount():number;

        /**
         * Returns the color of Node
         * @function
         * @returns {cc.Color}
         */
        public getColor():Color;

        /**
         * Returns a component identified by the name given.
         * @function
         * @param {String} name The name to search for
         * @return {cc.Component} The component found
         *
         * TODO: Uncomment once Component is defined.
         */
        //getComponent(name:string):Component;

        /**
         * Returns a copy the untransformed size of the node.
         * The contentSize remains the same no matter the node is scaled or rotated.
         * All nodes has a size. Layer and Scene has the same size of the screen by default.
         * @function
         * @return {cc.Size} The untransformed size of the node.
         */
        public getContentSize():Size;

        /**
         * Returns the displayed color of Node,
         * the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.
         * @function
         * @returns {cc.Color}
         */
        public getDisplayedColor():Color;

        /**
         * Returns the displayed opacity of Node,
         * the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.
         * @function
         * @returns {number} displayed opacity
         */
        public getDisplayedOpacity():number;

        /**
         * Return the Node's Global Z Order.
         * @function
         * @returns {number} The node's global Z order
         */
        public getGlobalZOrder():number;

        /**
         * Returns the state of OpenGL server side.
         * @function
         * @return {Number} The state of OpenGL server side.
         * @deprecated since v3.0, no need anymore
         */
        public getGLServerState():number;

        /**
         * Returns the local Z order of this node.
         * @function
         * @returns {Number} The local (relative to its siblings) Z order.
         */
        public getLocalZOrder():number;

        /**
         * Returns a string that is used to identify the node.
         * @function
         * @returns {string} A string that identifies the node.
         */
        public getName():string;

        /**
         * TODO: Fill this out with an explanation of the method's purpose/function.
         * @function
         * @param {cc.Node} ancester An ancestor of the target node
         * @return {cc.AffineTransform} The affine transform object
         */
        public getNodeToParentAffineTransform(ancestor:Node):AffineTransform;

        /**
         * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
         * The matrix is in Pixels.
         * @function
         * @param {cc.Node} ancester An ancestor of the target node
         * @return {cc.AffineTransform} The affine transform object
         */
        public getNodeToParentTransform(ancestor:Node):AffineTransform;

        /**
         * Returns the world affine transform matrix. The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         */
        public getNodeToWorldTransform():AffineTransform;

        /**
         * returns the normalized position
         * @returns {cc.Point}
         */
        public getNormalizedPosition():Point;

        /** Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).
         *    Composable actions are counted as 1 action. Example:
         *    If you are running 1 Sequence of 7 actions, it will return 1.
         *    If you are running 7 Sequences of 2 actions, it will return 7.
         * @function
         * @return {Number} The number of actions that are running plus the ones that are schedule to run
         */
        public getNumberOfRunningActions():number;

        /**
         * Returns the opacity of Node
         * @function
         * @returns {number} opacity
         */
        public getOpacity():number;

        /**
         * Returns the arrival order, indicates which children should be added previously.
         * @function
         * @return {Number} The arrival order.
         */
        public getOrderOfArrival():number;

        /**
         * Returns a reference to the parent node
         * @function
         * @return {cc.Node} A reference to the parent node
         */
        public getParent():Node;

        /**
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.
         * The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         */
        public getParentToNodeTransform():AffineTransform;

        /**
         * Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.
         * @function
         * @return {cc.Point} The position (x,y) of the node in OpenGL coordinates
         */
        public getPosition():Point;

        /**
         * Returns the x axis position of the node in cocos2d coordinates.
         * @function
         * @return {Number}
         */
        public getPositionX():number;

        /**
         * Returns the y axis position of the node in cocos2d coordinates.
         * @function
         * @return {Number}
         */
        public getPositionY():number;

        /**
         * Returns the rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node clockwise.
         * @function
         * @return {Number} The rotation of the node in degrees.
         */
        public getRotation():number;

        /**
         * Returns the X axis rotation (angle) which represent a horizontal rotational skew of the node in degrees.
         * 0 is the default rotation angle. Positive values rotate node clockwise
         * (support only in WebGL rendering mode)
         * @function
         * @return {Number} The X rotation in degrees.
         */
        public getRotationX():number;

        /**
         * Returns the Y axis rotation (angle) which represent a vertical rotational skew of the node in degrees.
         * 0 is the default rotation angle. Positive values rotate node clockwise
         * (support only in WebGL rendering mode)
         * @function
         * @return {Number} The Y rotation in degrees.
         */
        public getRotationY():number;

        /**
         * Returns the scale factor of the node.
         * @warning: Assertion will fail when _scaleX != _scaleY.
         * @function
         * @return {Number} The scale factor
         */
        public getScale():number;

        /**
         * Returns the scale factor on X axis of this node
         * @function
         * @return {Number} The scale factor on X axis.
         */
        public getScaleX():number;

        /**
         * Returns the scale factor on Y axis of this node
         * @function
         * @return {Number} The scale factor on Y axis.
         */
        public getScaleY():number;

        /**
         *
         *   Returns the cc.Scheduler object used to schedule all "updates" and timers.
         *
         * @function
         * @return {cc.Scheduler} A CCScheduler object.
         */
        public getScheduler():Scheduler;

        /**
         * Return the shader program currently used for this node
         * @function
         * @return {cc.GLProgram} The shader program currently used for this node
         *
         * TODO: Uncomment once GLProgram is defined.
         */
        //getShaderProgram():GLProgram;

        /**
         * Returns the skew degrees in X
         * The X skew angle of the node in degrees.
         * This angle describes the shear distortion in the X direction.
         * Thus, it is the angle between the Y axis and the left edge of the shape
         * The default skewX angle is 0. Positive values distort the node in a CW direction.
         *
         * @function
         * @return {Number} The X skew angle of the node in degrees.
         */
        public getSkewX():number;

        /**
         * Returns the skew degrees in Y
         * The Y skew angle of the node in degrees.
         * This angle describes the shear distortion in the Y direction.
         * Thus, it is the angle between the X axis and the bottom edge of the shape
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.
         *
         * @function
         * @return {Number} The Y skew angle of the node in degrees.
         */
        public getSkewY():number;

        /**
         * Returns a tag that is used to identify the node easily.
         * @function
         * @return {Number} An integer that identifies the node.
         * @example
         *  //You can set tags to node then identify them easily.
         * // set tags
         * node1.setTag(TAG_PLAYER);
         * node2.setTag(TAG_MONSTER);
         * node3.setTag(TAG_BOSS);
         * parent.addChild(node1);
         * parent.addChild(node2);
         * parent.addChild(node3);
         * // identify by tags
         * var allChildren = parent.getChildren();
         * for(var i = 0; i < allChildren.length; i++){
         *     switch(node.getTag()) {
         *         case TAG_PLAYER:
         *             break;
         *         case TAG_MONSTER:
         *             break;
         *         case TAG_BOSS:
         *             break;
         *     }
         * }
         */
        public getTag():number;

        /**
         *
         *     Returns a custom user data pointer
         *     You can set everything in UserData pointer, a data block, a structure or an object.
         *
         * @function
         * @return {object}  A custom user data pointer
         */
        public getUserData():any;

        /**
         * Returns a user assigned cocos2d object.
         * Similar to userData, but instead of holding all kinds of data it can only hold a cocos2d object
         * @function
         * @return {object} A user assigned CCObject
         */
        public getUserObject():any;

        /**
         * Returns WebGL Z vertex of this node.
         * @function
         * @return {Number} WebGL Z vertex of this node
         */
        public getVertexZ():number;

        /**
         * Returns the inverse world affine transform matrix. The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         */
        public getWorldToNodeTransform():AffineTransform;

        /**
         * Returns z order of this node
         * @function
         * @return {Number}
         * @deprecated since 3.0, please use getLocalZOrder instead
         */
        public getZOrder():number;

        /**
         *
         *     Sets whether the anchor point will be ignored when you position this node.
         *     When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
         *     This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.
         *     The default value is false, while in CCLayer and CCScene are true
         *
         * @function
         * @param {Boolean} newValue true if anchor point will be ignored when you position this node
         */
        public ignoreAnchorPointForPosition(newValue:boolean):boolean;

        /**
         * Returns whether node's color value affect its child nodes.
         * @function
         * @returns {boolean}
         */
        public isCascadeColorEnabled():boolean;

        /**
         * Returns whether node's opacity value affect its child nodes.
         * @function
         * @returns {boolean}
         */
        public isCascadeOpacityEnabled():boolean;

        /**
         * Returns whether the anchor point will be ignored when you position this node.
         * When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
         * @function
         * @see cc.Node#ignoreAnchorPointForPosition
         * @return {Boolean} true if the anchor point will be ignored when you position this node.
         */
        public isIgnoreAnchorPointForPosition():boolean;

        /**
         * Get whether color should be changed with the opacity value
         * @function
         * @return {Boolean}
         */
        public isOpacityModifyRGB():boolean;

        /**
         *
         *     Returns whether or not the node accepts event callbacks.
         *     Running means the node accept event callbacks like onEnter(), onExit(), update()
         *
         * @function
         * @return {Boolean} Whether or not the node is running.
         */
        public isRunning():boolean;

        /**
         * Returns if the node is visible
         * @function
         * @see cc.Node#setVisible
         * @return {Boolean} true if the node is visible, false if the node is hidden.
         */
        public isVisible():boolean;

        /**
         * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
         * The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         * @deprecated since v3.0, please use getNodeToParentTransform instead
         */
        public nodeToParentTransform():AffineTransform;

        /**
         * @function
         * @deprecated since v3.0, please use getNodeToWorldTransform instead
         */
        public nodeToWorldTransform():AffineTransform;

        /**
         *
         *     Event callback that is invoked every time when CCNode enters the 'stage'.
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.
         *     During onEnter you can't access a "sister/brother" node.
         *     If you override onEnter, you must call its parent's onEnter function with this._super().
         *
         * @function
         */
        public onEnter():void;

        /**
         *
         *     Event callback that is invoked when the CCNode enters in the 'stage'.
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition finishes.
         *     If you override onEnterTransitionDidFinish, you shall call its parent's onEnterTransitionDidFinish with this._super()
         *
         * @function
         */
        public onEnterTransitionDidFinish():void;

        /**
         *
         * callback that is called every time the cc.Node leaves the 'stage'.
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes.
         * During onExit you can't access a sibling node.
         * If you override onExit, you shall call its parent's onExit with this._super().
         *
         * @function
         */
        public onExit():void;

        /**
         * callback that is called every time the cc.Node leaves the 'stage'.
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts.
         * If you override onExitTransitionDidStart, you shall call its parent's onExitTransitionDidStart with this._super()
         * @function
         */
        public onExitTransitionDidStart():void;

        /**
         * @function
         * @deprecated since v3.0, please use getParentToNodeTransform instead
         */
        public parentToNodeTransform():AffineTransform;

        /**
         * Pauses all scheduled selectors and actions.
         * This method is called internally by onExit
         * @function
         */
        public pause():void;

        /**
         * Pauses all scheduled selectors and actions.
         * This method is called internally by onExit
         * @deprecated since v3.0, please use pause instead
         * @function
         */
        public pauseSchedulerAndActions():void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.Node#retain
         */
        public release():void;

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup.
         * @function
         * @param {Boolean} [cleanup=true] true if all running actions on all children nodes should be cleanup, false otherwise.
         */
        public removeAllChildren(cleanup?:boolean):void;

        /**
         * TODO: This method makes no sense. How is it any different than just calling Node::removeAllChildren()?
         *       I'm guessing this is a bug, and that this method should take no params,
         *       and call Node::removeAllChildren(true).
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * @param {Boolean} [cleanup=true]
         */
        public removeAllChildrenWithCleanup(cleanup?:boolean):void;

        /**
         * Removes all components of cc.Node, it called when cc.Node is exiting from stage.
         * @function
         */
        public removeAllComponents():void;

        /** Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup.
         *  "remove" logic MUST only be on this method
         * If a class wants to extend the 'removeChild' behavior it only needs
         * to override this method
         * @function
         * @param {cc.Node} child  The child node which will be removed.
         * @param {Boolean} [cleanup=true]  true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         */
        public removeChild(child:Node, cleanup?:boolean):void;

        /**
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup.
         * @function
         * @param {Number} tag An integer number that identifies a child node
         * @param {Boolean} [cleanup=true] true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         * @see cc.Node#removeChildByTag
         */
        public removeChildByTag(tag:number, cleanup?:boolean):void;

        /**
         * Removes a component identified by the given name or removes the component object given
         * @function
         * @param {cc.Component} component
         *
         * TODO: Uncomment once Component is defined.
         */
        //removeComponent(component:Component):void;

        /**
         * Removes a component identified by the given name or removes the component object given
         * @function
         * @param {String} name
         */
        public removeComponent(name:string):void;

        /**
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks.
         * If the cleanup parameter is not passed, it will force a cleanup.
         * If the node orphan, then nothing happens.
         * @function
         * @param {Boolean} [cleanup=true] true if all actions and callbacks on this node should be removed, false otherwise.
         * @see cc.Node#removeFromParentAndCleanup
         */
        public removeFromParent(cleanup?:boolean):void;

        /**
         * Removes this node itself from its parent node.
         * If the node orphan, then nothing happens.
         * @deprecated since v3.0, please use removeFromParent() instead
         * @param {Boolean} [cleanup=true] true if all actions and callbacks on this node should be removed, false otherwise.
         */
        public removeFromParentAndCleanup(cleanup:boolean):void;

        /** Reorders a child according to a new z value.
         * The child MUST be already added.
         * @function
         * @param {cc.Node} child An already added child node. It MUST be already added.
         * @param {Number} zOrder Z order for drawing priority. Please refer to setZOrder(int)
         */
        public reorderChild(child:Node, zOrder:number):void;

        /**
         * Resumes all scheduled selectors and actions.
         * This method is called internally by onEnter
         */
        public resume():void;

        /**
         * Resumes all scheduled selectors and actions.
         * This method is called internally by onEnter
         * @function
         * @deprecated since v3.0, please use resume() instead
         */
        public resumeSchedulerAndActions():void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.Node#release
         */
        public retain():void;

        /**
         * Executes an action, and returns the action that is executed.
         * The node becomes the action's target. Refer to cc.Action's getTarget()
         * @function
         * @warning Starting from v0.8 actions don't retain their target anymore.
         * @param {cc.Action} action
         * @return {cc.Action} An Action pointer
         */
        public runAction(action:Action):Action;

        /**
         *Sets the additional transform.
         *  The additional transform will be concatenated at the end of getNodeToParentTransform.
         *  It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).
         *
         *  @function
         *  @param {cc.AffineTransform} xform  The additional transform
         *  @example
         * // create a batchNode
         * var batch = new cc.SpriteBatchNode("Icon-114.png");
         * this.addChild(batch);
         *
         * // create two sprites, spriteA will be added to batchNode, they are using different textures.
         * var spriteA = new cc.Sprite(batch->getTexture());
         * var spriteB = new cc.Sprite("Icon-72.png");
         *
         * batch.addChild(spriteA);
         *
         * // We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.
         * // But we want to simulate `parent-child` relationship for these two node.
         * this.addChild(spriteB);
         *
         * //position
         * spriteA.setPosition(ccp(200, 200));
         *
         * // Gets the spriteA's transform.
         * var t = spriteA.getNodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's position will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         *
         * //scale
         * spriteA.setScale(2);
         *
         * // Gets the spriteA's transform.
         * t = spriteA.getNodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         *
         * //rotation
         * spriteA.setRotation(20);
         *
         * // Gets the spriteA's transform.
         * t = spriteA.getNodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         */
        public setAdditionalTransform(xform:AffineTransform):void;

        /**
         * Schedules a custom selector.
         * If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
         * @function
         * @param {function} callback A function wrapped as a selector
         * @param {Number} interval  Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
         * @param {Number} repeat    The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
         * @param {Number} delay     The amount of time that the first tick will wait before execution.
         * @param {String} key The only string identifying the callback
         */
        public schedule(callback:(arg?:any) => void, interval:number, repeat:boolean, delay:number, key:String):void;

        /**
         * Schedules a callback function that runs only once, with a delay of 0 or larger
         * @function
         * @see cc.Node#schedule
         * @param {function} callback  A function wrapped as a selector
         * @param {Number} delay  The amount of time that the first tick will wait before execution.
         * @param {String} key The only string identifying the callback
         */
        public scheduleOnce(callback:(arg?:any) => void, delay:number, key?:string):void;

        /**
         * schedules the "update" method.
         * It will use the order number 0. This method will be called every frame.
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.
         * Only one "update" method could be scheduled per node.
         * @function
         */
        public scheduleUpdate():void;

        /**
         *
         * schedules the "update" callback function with a custom priority.
         * This callback function will be called every frame.
         * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.
         * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).
         *
         * @function
         * @param {Number} priority
         */
        public scheduleUpdateWithPriority(priority:number):void;

        /**
         * Sets the cc.ActionManager object that is used by all actions.
         * @function
         * @warning If you set a new CCActionManager, then previously created actions will be removed.
         * @param {cc.ActionManager} actionManager A CCActionManager object that is used by all actions.
         */
        public setActionManager(actionManager:ActionManager):void;

        /**
         *
         *     Sets the anchor point in percent.
         *
         *     anchor point is the point around which all transformations and positioning manipulations take place.
         *     It's like a pin in the node where it is "attached" to its parent.
         *     The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
         *     But you can use values higher than (1,1) and lower than (0,0) too.
         *     The default anchor point is (0.5,0.5), so it starts at the center of the node.
         *
         * @function
         * @param {cc.Point} point The anchor point of node or The x axis anchor of node.
         * @param {Number} [y] The y axis anchor of node.
         */
        public setAnchorPoint(point:Point|number, y?:number):void;


        /**
         * Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color.
         * @param {boolean} cascadeColorEnabled
         */
        public setCascadeColorEnabled(cascadeColorEnabled:boolean):void;

        /**
         * Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.
         * @function
         * @param {boolean} cascadeOpacityEnabled
         */
        public setCascadeOpacityEnabled(cascadeOpacityEnabled:boolean):void;

        /**
         * Sets the color of Node.
         * When color doesn't include opacity value like cc.color(128,128,128), this function only change the color.
         * When color include opacity like cc.color(128,128,128,100), then this function will change the color and the opacity.
         * @function
         * @param {cc.Color} color The new color given
         */
        public setColor(color:Color):void;

        /**
         *
         *     Sets the untransformed size of the node.
         *
         *     The contentSize remains the same no matter the node is scaled or rotated.
         *     All nodes has a size. Layer and Scene has the same size of the screen.
         *
         * @function
         * @param {Number} size The untransformed size's width of the node.
         * @param {Number} [height] The untransformed size's height of the node.
         */
        public setContentSize(size:Size|number, height?:number):void;

        /**
         * Defines the oder in which the nodes are renderer.
         * Nodes that have a Global Z Order lower, are renderer first.
         *
         * In case two or more nodes have the same Global Z Order, the oder is not guaranteed.
         * The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.
         *
         * By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.
         *
         * Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.
         *
         * Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.
         * And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.
         * @function
         * @param {Number} globalZOrder
         */
        public setGlobalZOrder(globalZOrder:number):void;

        /**
         * Sets the state of OpenGL server side.
         * @function
         * @param {Number} state The state of OpenGL server side.
         * @deprecated since v3.0, no need anymore
         */
        public setGLServerState(state:number):void;

        /**
         *  LocalZOrder is the 'key' used to sort the node relative to its siblings.
         *
         * The Node's parent will sort all its children based ont the LocalZOrder value.
         * If two nodes have the same LocalZOrder, then the node that was added first to the children's array
         * will be in front of the other node in the array.
         *
         * Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )
         *
         * And Nodes that have LocalZOder values < 0 are the "left" subtree
         * While Nodes with LocalZOder >=0 are the "right" subtree.
         * @function
         * @param {Number} localZOrder
         */
        public setLocalZOrder(localZOrder:number):void;

        /**
         * Changes the name that is used to identify the node easily.
         * @function
         * @param {String} name
         */
        public setName(name:string):void;

        /**
         * TODO: Update this with an explanation of this method's purpose/functionality.
         */
        public setNodeDirty():void;

        /**
         *
         * Sets the position (x,y) using values between 0 and 1.
         * The positions in pixels is calculated like the following:
         *   _position = _normalizedPosition * parent.getContentSize()
         *
         * @param {cc.Point} pos
         */
        public setNormalizedPosition(pos:Point):void;

        /**
         *
         * Sets the position (x,y) using values between 0 and 1.
         * The positions in pixels is calculated like the following:
         *   _position = _normalizedPosition * parent.getContentSize()
         *
         * @param {Number} x
         * @param {Number} y
         */
        public setNormalizedPosition(x:number, y:number):void;

        /**
         * Sets the opacity of Node
         * @function
         * @param {Number} opacity
         */
        public setOpacity(opacity:number):void;

        /**
         * Set whether color should be changed with the opacity value,
         * useless in cc.Node, but this function is override in some class to have such behavior.
         * @function
         * @param {Boolean} opacityValue
         */
        public setOpacityModifyRGB(opacityValue:boolean):void;

        /**
         *
         *     Sets the arrival order when this node has a same ZOrder with other children.
         *
         *     A node which called addChild subsequently will take a larger arrival order,
         *     If two children have the same Z order, the child with larger arrival order will be drawn later.
         *
         * @function
         * @warning This method is used internally for zOrder sorting, don't change this manually
         * @param {Number} order  The arrival order.
         */
        public setOrderOfArrival(order:number):void;

        /**
         * Sets the parent node
         * @param {cc.Node} parent A reference to the parent node
         */
        public setParent(parent:Node):void;

        /**
         *
         *     Changes the position (x,y) of the node in cocos2d coordinates.
         *     The original point (0,0) is at the left-bottom corner of screen.
         *     Usually we use cc.p(x,y) to compose CCPoint object.
         *     and Passing two numbers (x,y) is more efficient than passing CCPoint object.
         *
         * @function
         * @param {cc.Point} point The position (x,y) of the node in coordinates or the X coordinate for position
         * @param {Number} [y] The Y coordinate for position
         * @example
         *    var size = cc.winSize;
         *    node.setPosition(size.width/2, size.height/2);
         */
        public setPosition(point:Point|number, y?:number):void;

        /**
         * Sets the x axis position of the node in cocos2d coordinates.
         * @function
         * @param {Number} x The new position in x axis
         */
        public setPositionX(x:number):void;

        /**
         * Sets the y axis position of the node in cocos2d coordinates.
         * @function
         * @param {Number} y The new position in y axis
         */
        public setPositionY(y:number):void;

        /**
         *
         *     Sets the rotation (angle) of the node in degrees.
         *
         *      0 is the default rotation angle.
         *      Positive values rotate node clockwise, and negative values for anti-clockwise.
         *
         * @function
         * @param {Number} degrees The rotation of the node in degrees.
         */
        public setRotation(degrees:number):void;

        /**
         *
         *     Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.
         *     (support only in WebGL rendering mode)
         *     0 is the default rotation angle.
         *     Positive values rotate node clockwise, and negative values for anti-clockwise.
         *
         * @param {Number} degrees The X rotation in degrees which performs a horizontal rotational skew.
         */
        public setRotationX(degrees:number):void;

        /**
         *
         *    Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.
         *    (support only in WebGL rendering mode)
         *    0 is the default rotation angle.
         *    Positive values rotate node clockwise, and negative values for anti-clockwise.
         *
         * @param degrees The Y rotation in degrees.
         */
        public setRotationY(degrees:number):void;

        /**
         * Uniformly modifies both the X and Y scale values. 1.0 is the default scale factor.
         * @function
         * @param {Number} scale
         */
        public setScale(scale:number):void;

        /**
         * Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
         * @function
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
        public setScale(scaleX:number, scaleY:number):void;

        /**
         *
         *     Changes the scale factor on X axis of this node
         *     The default value is 1.0 if you haven't changed it before
         *
         * @function
         * @param {Number} scale The scale factor on X axis.
         */
        public setScaleX(scale:number):void;

        /**
         *
         *     Changes the scale factor on Y axis of this node
         *     The Default value is 1.0 if you haven't changed it before.
         *
         * @function
         * @param {Number} scale The scale factor on Y axis.
         */
        public setScaleY(scale:number):void;

        /**
         *
         *   Sets a CCScheduler object that is used to schedule all "updates" and timers.
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         *
         * @function
         * @warning If you set a new CCScheduler, then previously created timers/update are going to be removed.
         * @param scheduler A cc.Scheduler object that is used to schedule all "update" and timers.
         */
        public setScheduler(scheduler:Scheduler):void;

        /**
         *
         *     Sets the shader program for this node
         *
         *     Since v2.0, each rendering node must set its shader program.
         *     It should be set in initialize phase.
         *
         * @function
         * @param {cc.GLProgram} newShaderProgram The shader program which fetches from CCShaderCache.
         * @example
         * node.setGLProgram(cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR));
         *
         * TODO: Uncomment once GLProgram is defined.
         */
        //setShaderProgram(newShaderProgram:GLProgram):void;

        /**
         *
         * Changes the X skew angle of the node in degrees.
         *
         * This angle describes the shear distortion in the X direction.
         * Thus, it is the angle between the Y axis and the left edge of the shape
         * The default skewX angle is 0. Positive values distort the node in a CW direction.
         *
         * @function
         * @param {Number} angle The X skew angle of the node in degrees.
         */
        public setSkewX(angle:number):void;

        /**
         *
         * Changes the Y skew angle of the node in degrees.
         *
         * This angle describes the shear distortion in the Y direction.
         * Thus, it is the angle between the X axis and the bottom edge of the shape
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.
         *
         * @function
         * @param {Number} angle The Y skew angle of the node in degrees.
         */
        public setSkewY(angle:number):void;

        /**
         * Changes the tag that is used to identify the node easily.
         * Please refer to getTag for the sample code.
         * @function
         * @see cc.Node#getTag
         * @param {Number} tag A integer that identifies the node.
         */
        public setTag(tag:number):void;

        /**
         *
         *    Sets a custom user data reference
         *    You can set everything in UserData reference, a data block, a structure or an object, etc.
         *
         * @function
         * @warning Don't forget to release the memory manually in JSB, especially before you change this data pointer, and before this node is autoreleased.
         * @param {object} data A custom user data
         */
        public setUserData(data:any):void;

        /**
         *
         *      Sets a user assigned cocos2d object
         *      Similar to UserData, but instead of holding all kinds of data it can only hold a cocos2d object
         *      In JSB, the UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.
         *      The UserObject will be released in CCNode's destruction.
         *
         * @param {object} obj A user cocos2d object
         */
        public setUserObject(obj:any):void;

        /**
         *
         *     Sets the real WebGL Z vertex.
         *
         *      Differences between openGL Z vertex and cocos2d Z order:
         *      - WebGL Z modifies the Z vertex, and not the Z order in the relation between parent-children
         *      - WebGL Z might require to set 2D projection
         *      - cocos2d Z order works OK if all the nodes uses the same WebGL Z vertex. eg: vertexZ = 0
         *
         *      @warning Use it at your own risk since it might break the cocos2d parent-children z order
         *
         * @function
         * @param {Number} angle
         */
        public setVertexZ(angle:number):void;

        /**
         * Sets whether the node is visible
         * The default value is true
         * @function
         * @param {Boolean} visible Pass true to make the node visible, false to hide the node.
         */
        public setVisible(visible:boolean):void;

        /**
         *
         *     Sets the Z order which stands for the drawing order, and reorder this node in its parent's children array.
         *
         *      The Z order of node is relative to its "brothers": children of the same parent.
         *      It's nothing to do with OpenGL's z vertex. This one only affects the draw order of nodes in cocos2d.
         *      The larger number it is, the later this node will be drawn in each message loop.
         *      Please refer to setVertexZ(float) for the difference.
         *
         * @function
         * @param {Number} z Z order of this node.
         * @deprecated since 3.0, please use setLocalZOrder instead
         */
        public setZOrder(z:number):void;

        /**
         *
         *     Sorts the children array once before drawing, instead of every time when a child is added or reordered.
         *     This approach can improves the performance massively.
         *
         * @function
         * @note Don't call this manually unless a child added needs to be removed in the same frame
         */
        public sortAllChildren():void;

        /**
         * Stops and removes an action from the running action list.
         * @function
         * @param {cc.Action} action An action object to be removed.
         */
        public stopAction(action:Action):void;

        /**
         * Removes an action from the running action list by its tag.
         * @function
         * @param {Number} tag A tag that indicates the action to be removed.
         */
        public stopActionByTag(tag:number):void;

        /**
         * Stops and removes all actions from the running action list .
         * @function
         */
        public stopAllActions():void;

        /**
         * Performs view-matrix transformation based on position, scale, rotation and other attributes.
         * @function
         * @param {cc.Node.RenderCmd} parentCmd parent's render command
         * @param {boolean} recursive whether call its children's transform
         */
        public transform(parentCmd:Node.RenderCmd, recursive:boolean):void;

        // TODO: The comments say to never call this externally, but it's not marked as private (no '_' prefix).
        //       Determine whether or not this should be exposed, and if not, remove it.
        //       For now though, leave it commented out.
        // Internal use only, do not call it by yourself,
        //transformAncestors():void;

        /**
         * unschedules a custom callback function.
         * @function
         * @see cc.Node#schedule
         * @param {function} callback_fn  A function wrapped as a selector
         */
        public unschedule(callback_fn:(arg?:any) => void):void;

        /**
         * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.
         * Actions are not affected by this method.
         * @function
         */
        public unscheduleAllCallbacks():void;

        /**
         * Unschedules the "update" method.
         * @function
         * @see cc.Node#scheduleUpdate
         */
        public unscheduleUpdate():void;

        /**
         * Update will be called automatically every frame if "scheduleUpdate" is called when the node is "live".
         * The default behavior is to invoke the visit function of node's componentContainer.
         * Override me to implement your own update logic.
         * @function
         * @param {Number} dt Delta time since last update
         */
        public update(dt:number):void;

        /**
         * Update the displayed color of Node
         * @function
         * @param {cc.Color} parentColor
         */
        public updateDisplayedColor(parentColor:Color):void;

        /**
         * Update displayed opacity
         * @function
         * @param {Number} parentOpacity
         */
        public updateDisplayedOpacity(parentOpacity:number):void;

        /**
         *
         * Calls children's updateTransform() method recursively.
         *
         * This method is moved from CCSprite, so it's no longer specific to CCSprite.
         * As the result, you apply CCSpriteBatchNode's optimization on your customed CCNode.
         * e.g., batchNode->addChild(myCustomNode), while you can only addChild(sprite) before.
         *
         * @function
         */
        public updateTransform():void;

        /**
         * Recursive method that visit its children and draw them
         * @function
         * @param {cc.Node.RenderCmd} parentCmd
         */
        public visit(parentCmd:Node.RenderCmd):void;

        /**
         * @function
         * @deprecated since v3.0, please use getWorldToNodeTransform instead
         */
        public worldToNodeTransform():AffineTransform;
    }


    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCAtlasNode.js
    // +--------------------------------------------------------------------------------
    /**
     * <p>cc.AtlasNode is a subclass of cc.Node, it knows how to render a TextureAtlas object. </p>
     *
     * <p>If you are going to render a TextureAtlas consider subclassing cc.AtlasNode (or a subclass of cc.AtlasNode)</p>
     *
     * <p>All features from cc.Node are valid</p>
     *
     * <p>You can create a cc.AtlasNode with an Atlas file, the width, the height of each item and the quantity of items to render</p>
     *
     * @class
     * @extends cc.Node
     *
     * @param {String} tile
     * @param {Number} tileWidth
     * @param {Number} tileHeight
     * @param {Number} itemsToRender
     * @example
     * var node = new cc.AtlasNode("pathOfTile", 16, 16, 1);
     *
     * @property {cc.Texture2D}     texture         - Current used texture
     * @property {cc.TextureAtlas}  textureAtlas    - Texture atlas for cc.AtlasNode
     * @property {Number}           quadsToDraw     - Number of quads to draw
     */
    export class AtlasNode extends Node {
        public texture:Texture2D;
        public textureAtlas:TextureAtlas;
        public quadsToDraw:number;

        /**
         * <p>Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.</p>
         * @param {String} tile
         * @param {Number} tileWidth
         * @param {Number} tileHeight
         * @param {Number} itemsToRender
         */
        public constructor(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number);
        //public ctor(tile?:string, tileWidth?:number, tileHeight?:number, itemsToRender?:number):void;

        /**
         * Updates the Atlas (indexed vertex array).
         * Empty implementation, shall be overridden in subclasses
         * @function
         */
        public updateAtlasValues():void;

        /**
         * Get node's blend function
         * @function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Set node's blend function
         * This function accept either cc.BlendFunc object or source value and destination value
         * @function
         * @param {Number | cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         * Set the atlas texture
         * @function
         * @param {cc.TextureAtlas} value The texture
         */
        public setTextureAtlas(value:TextureAtlas):void;

        /**
         * Get the atlas texture
         * @function
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * Get the number of quads to be rendered
         * @function
         * @return {Number}
         */
        public getQuadsToDraw():number;

        /**
         * Set the number of quads to be rendered
         * @function
         * @param {Number} quadsToDraw
         */
        public setQuadsToDraw(quadsToDraw:number):void;

        /**
         * Initializes an cc.AtlasNode object with an atlas texture file name, the width, the height of each tile and the quantity of tiles to render
         * @function
         * @param {String} tile             The atlas texture file name
         * @param {Number} tileWidth        The width of each tile
         * @param {Number} tileHeight       The height of each tile
         * @param {Number} itemsToRender    The quantity of tiles to be rendered
         * @return {Boolean}
         */
        public initWithTileFile(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number):boolean;

        /**
         * Initializes an CCAtlasNode with an atlas texture, the width, the height of each tile and the quantity of tiles to render
         * @function
         * @param {cc.Texture2D} texture    The atlas texture
         * @param {Number} tileWidth        The width of each tile
         * @param {Number} tileHeight       The height of each tile
         * @param {Number} itemsToRender    The quantity of tiles to be rendered
         * @return {Boolean}
         */
        public initWithTexture(texture:Texture2D, tileWidth:number, tileHeight:number, itemsToRender:number):boolean;

        /**
         * Get the current texture
         * @function
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Replace the current texture with a new one
         * @function
         * @param {cc.Texture2D} texture    The new texture
         */
        public setTexture(texture:Texture2D):void;
    }
}