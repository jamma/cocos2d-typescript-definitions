/// <reference path="cocos2d-lib.d.ts" />


declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCDrawNode.js
    // +--------------------------------------------------------------------------------
    /**
     * Code copied & pasted from SpacePatrol game https://github.com/slembcke/SpacePatrol
     *
     * Renamed and added some changes for cocos2d
     *
     */
    export function v2fzero():Point;

    export function v2f(x:number, y:number):Point;

    export function v2fadd(v0:number, v1:number):Point;

    export function v2fsub(v0:number, v1:number):Point;

    export function v2fmult(v:number, s:number):Point;

    export function v2fperp(p0:number):Point;

    export function v2fneg(p0:number):Point;

    export function v2fdot(p0:number, p1:number):Point;

    export function v2fforangle(a:number):Point;

    export function v2fnormalize(p:Point):Point;

    //export function __v2f(v:Point):Point;
    //
    //export function __t(v:Point):Point;

    /**
     * CCDrawNode                                                
     * Node that draws dots, segments and polygons.                        
     * Faster than the "drawing primitives" since they it draws everything in one single batch.
     * @class
     * @name cc.DrawNode
     * @extends cc.Node
     */
    export class DrawNode extends Node {
        public static TYPE_DOT:number;
        public static TYPE_SEGMENT:number;
        public static TYPE_POLY:number;

        /**
         * Gets the blend func
         * @returns {Object}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Set the blend func
         * @param blendFunc
         * @param dst
         */
        public setBlendFunc(blendFunc:BlendFunc|number, dst?:number):void;

        /**
         * line width setter
         * @param {Number} width
         */
        public setLineWidth(width:number):void;

        /**
         * line width getter
         * @returns {Number}
         */
        public getLineWidth():number;

        /**
         * draw color setter
         * @param {cc.Color} color
         */
        public setDrawColor(color:Color):void;

        /**
         * draw color getter
         * @returns {cc.Color}
         */
        public getDrawColor():Color;

        /**
         * draws a rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         * @param {cc.Color} fillColor
         * @param {Number} lineWidth
         * @param {cc.Color} lineColor
         */
        public drawRect(origin:Point, destination:Point, fillColor?:Color, lineWidth?:number, lineColor?:Color):void;

        /**
         * draws a circle given the center, radius and number of segments.
         * @override
         * @param {cc.Point} center center of circle
         * @param {Number} radius
         * @param {Number} angle angle in radians
         * @param {Number} segments
         * @param {Boolean} drawLineToCenter
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCircle(center:Point, radius:number, angle:number, segments:number,
                          drawLineToCenter?:boolean, lineWidth?:number, color?:Color):void;

        /**
         * draws a quad bezier path
         * @override
         * @param {cc.Point} origin
         * @param {cc.Point} control
         * @param {cc.Point} destination
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawQuadBezier(origin:Point, control:Point, destination:Point, segments:number,
                              lineWidth?:number, color?:Color):void;

        /**
         * draws a cubic bezier path
         * @override
         * @param {cc.Point} origin
         * @param {cc.Point} control1
         * @param {cc.Point} control2
         * @param {cc.Point} destination
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCubicBezier(origin:Point, control1:Point, control2:Point, destination:Point,
                               segments:number, lineWidth?:number, color?:Color):void;

        /**
         * draw a CatmullRom curve
         * @override
         * @param {Array} points
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCatmullRom(points:Point[], segments:number, lineWidth?:number, color?:Color):void;

        /**
         * draw a cardinal spline path
         * @override
         * @param {Array} config
         * @param {Number} tension
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCardinalSpline(config:Point[], tension:number, segments:number,
                                  lineWidth?:number, color?:Color):void;

        /**
         * draw a dot at a position, with a given radius and color
         * @param {cc.Point} pos
         * @param {Number} radius
         * @param {cc.Color} color
         */
        public drawDot(pos:Point, radius:number, color?:Color):void;

        /**
         * draws an array of points.
         * @override
         * @param {Array} points point of array
         * @param {Number} radius
         * @param {cc.Color} color
         */
        public drawDots(points:Point[], radius:number, color?:Color):void;

        /**
         * draw a segment with a radius and color
         * @param {cc.Point} from
         * @param {cc.Point} to
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawSegment(from:Point, to:Point, lineWidth?:number, color?:Color):void;

        /**
         * draw a polygon with a fill color and line color, copying the vertex list
         * @param {Array} verts
         * @param {cc.Color} fillColor
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawPoly(verts:Point[], fillColor?:Color, lineWidth?:number, color?:Color):void;

        /**
         * Clear the geometry in the node's buffer.
         */
        public clear():void;
    }
}
