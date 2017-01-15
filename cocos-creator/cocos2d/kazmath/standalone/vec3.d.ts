/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    export function vec3(x?:Vec3|number, y?:number, z?:number):Vec3;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/vec3.js
    //+--------------------------------------------------------------------------------
    export class Vec3 {
        public static zero(vec:Vec3):Vec3;

        public constructor();
        public constructor(x:Vec3);
        public constructor(x:number, y:number, z:number);

        public fill():Vec3;
        public fill(x:Vec3):Vec3;
        public fill(x:number, y:number, z:number):Vec3;

        public length():number;

        public lengthSq():number;

        public normalize():Vec3;

        public cross(vec3:Vec3):Vec3;

        public dot(vec:Vec3):number;

        public add(vec:Vec3):Vec3;

        public subtract(vec:Vec3):Vec3;

        public transform(mat4:Matrix4):Vec3;

        public transformNormal(mat4:Matrix4):Vec3;

        public transformCoord(mat4:Matrix4):Vec3;

        public scale(scale:number):Vec3;

        public equals(vec:Vec3):boolean;

        public inverseTransform(mat4:Matrix4):Vec3;

        public inverseTransformNormal(mat4:Matrix4):Vec3;

        public assignFrom(vec:Vec3):Vec3;

        public toTypeArray():Float32Array;

        // SIMD definitions
        public transformCoordSIMD(mat4:Matrix4):Vec3;
    }
}
