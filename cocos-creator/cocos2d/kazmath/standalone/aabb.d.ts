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
        public assign(pOut:Matrix4, pIn:Matrix4):Matrix4;
    }

}

