/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCBoxCollider.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Box Collider.
     * !#zh 包围盒碰撞组件
     * @class BoxCollider
     * @extends Component
     */
    export class BoxCollider extends Collider {
        /**
         * !#en Position offset
         * !#zh 位置偏移量
         * @property offset
         * @type {Vec2}
         */
        public offset:Vec2;

        /**
         * !#en Box size
         * !#zh 包围盒大小
         * @property size
         * @type {Size}
         */
        public size:Size;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCCircleCollider.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Circle Collider.
     * !#zh 圆形碰撞组件
     * @class CircleCollider
     * @extends Component
     */
    // var CircleCollider = cc.Class({
    export class CircleCollider extends Collider {
        /**
         * !#en Position offset
         * !#zh 位置偏移量
         * @property offset
         * @type {Vec2}
         */
        public offset:Vec2;

        /**
         * !#en Circle radius
         * !#zh 圆形半径
         * @property radius
         * @type {Number}
         */
        public radius:number;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCCollider.js
    //+--------------------------------------------------------------------------------
/****************************************************************************
     Copyright (c) 2013-2016 Chukong Technologies Inc.

     http://www.cocos.com

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated engine source code (the "Software"), a limited,
      worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
     to use Cocos Creator solely to develop games on your target platforms. You shall
      not use Cocos Creator software for developing other software or tools that's
      used for developing games. You are not granted to publish, distribute,
      sublicense, and/or sell copies of Cocos Creator.

     The software or tools in this License Agreement are licensed, not sold.
     Chukong Aipu reserves all rights not expressly granted to you.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    /**
     * !#en Collider component base class.
     * !#zh 碰撞组件基类
     * @class Collider
     * @extends Component
     */
    export class  Collider extends Component {
        // editing: {
        //     default: false,
        //     serializable: false,
        //     tooltip: 'i18n:COMPONENT.collider.editing'
        // },

        /**
         * !#en Tag. If a node has several collider components, you can judge which type of collider is collided according to the tag.
         * !#zh 标签。当一个节点上有多个碰撞组件时，在发生碰撞后，可以使用此标签来判断是节点上的哪个碰撞组件被碰撞了。
         * @property tag
         * @type {Integer}
         * @default 0
         */
        public tag:number;

        public onDisable():void;

        public onEnable():void;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCCollisionManager.js
    //  NOTE: There is a LOT of undefined stuff in here
    //+--------------------------------------------------------------------------------
    /**
     * !#en
     * A simple collision manager class. 
     * It will calculate whether the collider collides other colliders, if collides then call the callbacks.
     * !#zh
     * 一个简单的碰撞组件管理类，用于处理节点之间的碰撞组件是否产生了碰撞，并调用相应回调函数。
     *
     * @class CollisionManager
     * @example
     *
     * // Get the collision manager.
     * var manager = cc.director.getCollisionManager();
     *
     * // Enabled the colider manager.
     * manager.enabled = true;
     *
     * // Enabled draw collider
     * manager.enabledDebugDraw = true;
     *
     * // Enabled draw collider bounding box
     * manager.enabledDrawBoundingBox = true;
     *
     * 
     * // Collision callback
     * onCollisionEnter: function (other, self) {
     *     this.node.color = cc.Color.RED;
     *     this.touchingNumber ++;
     *
     *     // var world = self.world;
     *     // var aabb = world.aabb;
     *     // var preAabb = world.preAabb;
     *     // var t = world.transform;
     *
     *     // for circle collider
     *     // var r = world.radius;
     *     // var p = world.position;
     *
     *     // for box collider and polygon collider
     *     // var ps = world.points;
     * },
     *   
     * onCollisionStay: function (other, self) {
     *     console.log('on collision stay');
     * },
     *   
     * onCollisionExit: function (other, self) {
     *     this.touchingNumber --;
     *     if (this.touchingNumber === 0) {
     *         this.node.color = cc.Color.WHITE;
     *     }
     * }
    });

     * 
     */
    export class CollisionManager implements EventTarget {
        /**
         * !#en
         * !#zh
         * 是否开启碰撞管理，默认为不开启
         * @property {Boolean} enabled
         * @default false
         */
        public enabled:boolean;

        /**
         * !#en
         * !#zh
         * 是否绘制碰撞组件的包围盒，默认为不绘制
         * @property {Boolean} enabledDrawBoundingBox
         * @default false
         */
        public enabledDrawBoundingBox:boolean;

        /**
         * !#en
         * !#zh
         * 是否绘制碰撞组件的形状，默认为不绘制
         * @property {Boolean} enabledDebugDraw
         * @default false
         */
        public enabledDebugDraw:boolean;

        public constructor();

        public update(dt:number):void;

        public collide(contact:Contact):void;

        // I _think_ the type for these to args is Component, but not completely sure
        public shouldCollide(c1:Component, c2:Component):boolean;

        public initCollider(collider:Collider):void;

        public updateCollider(collider:Collider):void;

        public addCollider(collider:Collider):void;

        public removeCollider(collider:Collider):void;

        public onNodeGroupChanged(event:Event):void;

        public drawColliders():void;

        public onSceneLaunched():void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCContact.js
    //+--------------------------------------------------------------------------------

    export class Contact {
        public constructor(collider1:Collider, collider2:Collider);

        public test():boolean;

        public updateState():Contact.CollisionType;
    }

    export module Contact {
        export enum CollisionType {
            None,
            CollisionEnter,
            CollisionStay,
            CollisionExit,
        }
        
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCIntersection.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en Intersection helper class
     * !#zh 辅助类，用于测试形状与形状是否相交
     * @class Intersection
     * @static
     */
    // var Intersection = {};
    export module Intersection {
        interface Circle {
            position:Vec2;
            radius:Vec2;
        }
    }

    export class Intersection {
        /**
         * !#en Test line and line
         * !#zh 测试线段与线段是否相交
         * @method lineLine
         * @param {Vec2} a1 - The start point of the first line
         * @param {Vec2} a2 - The end point of the first line
         * @param {Vec2} b1 - The start point of the second line
         * @param {Vec2} b2 - The end point of the second line
         * @return {boolean}
         */
        public static lineLine(a1:Vec2, a2:Vec2, b1:Vec2, b2:Vec2):boolean;

        /**
         * !#en Test line and rect
         * !#zh 测试线段与矩形是否相交
         * @method lineRect
         * @param {Vec2} a1 - The start point of the line
         * @param {Vec2} a2 - The end point of the line
         * @param {Rect} b - The rect
         * @return {boolean}
         */
        public static lineRect(a1:Vec2, a2:Vec2, b:Rect):boolean;

        /**
         * !#en Test line and polygon
         * !#zh 测试线段与多边形是否相交
         * @method linePolygon
         * @param {Vec2} a1 - The start point of the line
         * @param {Vec2} a2 - The end point of the line
         * @param {[Vec2]} b - The polygon, a set of points
         * @return {boolean}
         */
        public static linePolygon(a1:Vec2, a2:Vec2, b:Vec2[]):boolean;

        /**
         * !#en Test rect and rect
         * !#zh 测试矩形与矩形是否相交
         * @method rectRect
         * @param {Rect} a - The first rect
         * @param {Rect} b - The second rect
         * @return {boolean}
         */
        public static rectRect(a:Rect, b:Rect):boolean;

        /**
         * !#en Test rect and polygon
         * !#zh 测试矩形与多边形是否相交
         * @method rectPolygon
         * @param {Rect} a - The rect
         * @param {[Vec2]} b - The polygon, a set of points
         * @return {boolean}
         */
        public static rectPolygon(a:Rect, b:Vec2[]):boolean;

        /**
         * !#en Test polygon and polygon
         * !#zh 测试多边形与多边形是否相交
         * @method polygonPolygon
         * @param {[Vec2]} a - The first polygon, a set of points
         * @param {[Vec2]} b - The second polygon, a set of points
         * @return {boolean}
         */
        public static polygonPolygon(a:Vec2[], b:Vec2[]):boolean;

        /**
         * !#en Test circle and circle
         * !#zh 测试圆形与圆形是否相交
         * @method circleCircle
         * @param {Object} a - Object contains position and radius
         * @param {Object} b - Object contains position and radius
         * @return {boolean}
         */
        public static circleCircle(a:Intersection.Circle, b:Intersection.Circle):boolean

        /**
         * !#en Test polygon and circle
         * !#zh 测试矩形与圆形是否相交
         * @method polygonCircle
         * @param {[Vec2]} polygon - The Polygon, a set of points
         * @param {Object} circle - Object contains position and radius
         * @return {boolean}
         */
        public static polygonCircle(polygon:Vec2[], circle:Intersection.Circle):boolean;

        /**
         * !#en Test whether the point is in the polygon
         * !#zh 测试一个点是否在一个多边形中
         * @method pointInPolygon
         * @param {Vec2} point - The point
         * @param {[Vec2]} polygon - The polygon, a set of points
         * @return {boolean}
         */
        public static pointInPolygon(point:Vec2, polygon:Vec2[]):boolean;

        /**
         * !#en Calculate the distance of point to line.
         * !#zh 计算点到直线的距离。如果这是一条线段并且垂足不在线段内，则会计算点到线段端点的距离。
         * @method pointLineDistance
         * @param {Vec2} point - The point
         * @param {Vec2} start - The start point of line
         * @param {Vec2} end - The end point of line
         * @param {boolean} isSegment - whether this line is a segment
         * @return {boolean}
         */
        public static pointLineDistance(point:Vec2, start:Vec2, end:Vec2, isSegment:boolean):boolean;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/collider/CCPolygonCollider.js
    //+--------------------------------------------------------------------------------
/****************************************************************************
     Copyright (c) 2013-2016 Chukong Technologies Inc.

     http://www.cocos.com

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated engine source code (the "Software"), a limited,
      worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
     to use Cocos Creator solely to develop games on your target platforms. You shall
      not use Cocos Creator software for developing other software or tools that's
      used for developing games. You are not granted to publish, distribute,
      sublicense, and/or sell copies of Cocos Creator.

     The software or tools in this License Agreement are licensed, not sold.
     Chukong Aipu reserves all rights not expressly granted to you.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    /**
     * !#en Polygon Collider.
     * !#zh 多边形碰撞组件
     * @class PolygonCollider
     * @extends Component
     */
    // var PolygonCollider = cc.Class({
    export class PolygonCollider extends Collider {
        /**
         * !#en Position offset
         * !#zh 位置偏移量
         * @property offset
         * @type {Vec2}
         */
        public offset:Vec2;

        /**
         * !#en Polygon points
         * !#zh 多边形顶点数组
         * @property points
         * @type {[Vec2]}
         */
        // points: {
        //     default: function () {
        //             return [cc.v2(-50, -50), cc.v2(-50, 50), cc.v2(50, 50), cc.v2(50, -50)]; 
        //     },
        //     type: [cc.Vec2]
        // }
        public points:Vec2[];
    }
}
