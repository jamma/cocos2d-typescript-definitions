/// <reference path="../../../cocos-creator-lib.d.ts" />


declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/aabb.js
    //+--------------------------------------------------------------------------------

    /**
     * A structure that represents an axis-aligned bounding box.
     * cc.kmAABB => cc.math.AABB
     */
    export class AABB {
        public min:Vec3;
        public max:Vec3;

        public constructor(min:Vec3, max:Vec3);

        /**
         * Returns true if point is in the specified AABB, returns false otherwise.
         * @param {cc.math.Vec3} point
         * @returns {boolean}
         */
        public containsPoint(point:Vec3):boolean;

        /**
         * Returns true if point is in the specified AABB, returns
         * false otherwise.
         */
        public containsPoint(pPoint:Vec3, pBox:??):boolean;

        /**
         * Assigns aabb to current AABB object
         * @param {cc.math.AABB} aabb
         */
        public assignFrom(aabb:AABB):void;

        /**
         * Assigns pIn to pOut, returns pOut.
         */
        public assign(pOut:??, pIn:??):??;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/mat.js
    //+--------------------------------------------------------------------------------
    export class Matrix3 {
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

