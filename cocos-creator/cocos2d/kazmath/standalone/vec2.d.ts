/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/vec2.js
    //+--------------------------------------------------------------------------------

    export class Vec2 {
        public static add(pOut:Vec2, pV1:Vec2, pV2:Vec2):Vec2;
        public static subtract(pOut:Vec2, pV1:Vec2, pV2:Vec2):Vec2;
        public static scale(pOut:Vec2, pIn:Vec2, s:number):Vec2;

        public constructor();
        public constructor(v:Vec2);
        public constructor(x:number, y:number);

        public fill():Vec2;
        public fill(v:Vec2):Vec2;
        public fill(x:number, y:number):Vec2;

        public length():number;

        public lengthSq():number;

        public normalize():Vec2;


        public add(vec:Vec2):Vec2;

        public dot(vec:Vec2):number;


        public subtract(vec:Vec2):Vec2;

        public transform(mat3:Matrix3):Vec2;


        public scale(s:number):Vec2;

        public equals(vec:Vec2):boolean;
    }
}
