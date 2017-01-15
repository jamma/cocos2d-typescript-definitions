/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    export function calculate_line_normal(p1:Vec2, p2:Vec2, normalOut:Vec2):void;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/ray2.js
    //+--------------------------------------------------------------------------------
    export class Ray2 {
        public constructor(start?:Vec2, dir?:Vec2);

        public fill(px:number, py:number, vx:number, vy:number):void;

        public intersectLineSegment(p1:Vec2, p2:Vec2, intersection:Vec2):boolean;

        public intersectTriangle(p1:Vec2, p2:Vec2, p3:Vec2, intersection:Vec2, normal_out:Vec2):boolean;
    }
}
