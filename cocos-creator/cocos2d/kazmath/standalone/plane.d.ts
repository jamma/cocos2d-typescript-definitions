/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/plane.js
    //+--------------------------------------------------------------------------------

    export class Plane {
        public static readonly LEFT:number;
        public static readonly RIGHT:number;
        public static readonly BOTTOM:number;
        public static readonly TOP:number;
        public static readonly NEAR:number;
        public static readonly FAR:number;
        public static readonly POINT_INFRONT_OF_PLANE:number;
        public static readonly POINT_BEHIND_PLANE:number;
        public static readonly POINT_ON_PLANE:number;

        // TODO: A is a union, but what's the 2nd type? What type is a? Looks like a transformation matrix, but it's a/b/c/d are not in either Matrix3 or Matrix4
        public constructor(a?:/*xform matrix|*/number, b?:number, c?:number, d?:number);


        public dot(vec4:Vec4):number;

        public dotCoord(vec3:Vec3):number;

        public dotNormal(vec3:Vec3):number;

        public static fromPointNormal(vec3:Vec3, normal:Vec3):Plane;

        public static fromPoints(vec1:Vec3, vec2:Vec3, vec3:Vec3):Plane;

        public normalize():Plane;

        public classifyPoint(vec3:Vec3):number;
    }
}
