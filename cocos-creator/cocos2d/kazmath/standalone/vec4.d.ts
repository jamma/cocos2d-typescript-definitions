/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/vec4.js
    //+--------------------------------------------------------------------------------

    export class Vec4 {
        public static transformArray(vecArray:number[], mat4:Matrix4):Vec3;

        public constructor();
        public constructor(v:Vec4);
        public constructor(x:number, y:number, z:number, w:number);

        public fill():Vec4;
        public fill(v:Vec4):Vec4;
        public fill(x:number, y:number, z:number, w:number):Vec4;


        public add(vec:Vec4):Vec4;

        public dot(vec:Vec4):number;

        public length():number;

        public lengthSq():number;

        // public lerp(vec:Vec4, t:??):Vec4;

        public normalize():Vec4;

        public scale(scale:number):Vec4;

        public subtract(vec:Vec4):Vec4;

        public transform(mat4:Matrix4):Vec4;

        public equals(vec:Vec4):boolean;

        public assignFrom(vec:Vec4):Vec4;

        public toTypeArray():Float32Array;
    }
}
