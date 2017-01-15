/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/mat3.js
    //+--------------------------------------------------------------------------------
    export class Matrix3 {
        public mat:number[];

        public static rotationAxisAngle(axis:Vec3, radians:number):Matrix3;

        public static createByRotationX(radians:number):Matrix3;

        public static createByRotationY(radians:number):Matrix3;

        public static createByRotationZ(radians:number):Matrix3;

        public static createByRotation(radians:number):Matrix3;

        public static createByScale(x:number, y:number):Matrix3;

        public static createByTranslation(x:number, y:number):Matrix3;

        public static createByQuaternion(quaternion?:Vec3):Matrix3;

        public constructor(mat3?:Matrix3);

        public fill(mat3:Matrix3):Matrix3;

        public adjugate():Matrix3;

        public identity():Matrix3;

        public inverse(determinate:number):Matrix3;

        public isIdentity():boolean;

        public transpose():Matrix3;

        public determinant():number;

        public multiply(mat3:Matrix3):Matrix3;

        public multiplyScalar(factor:number):Matrix3;

        public assignFrom(matIn:Matrix3):Matrix3;

        public equals(mat3:Matrix3):boolean;

        public rotationToAxisAngle():number;
    }
}
