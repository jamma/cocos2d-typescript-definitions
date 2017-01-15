/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/quaternion.js
    //+--------------------------------------------------------------------------------

    /**
     * The Quaternion class
     * @param {Number|cc.math.Quaternion} [x=0]
     * @param {Number} [y=0]
     * @param {Number} [z=0]
     * @param {Number} [w=0]
     * @constructor
     */
    export class Quaternion {
        public constructor(x?:Quaternion|number, y?:number, z?:number, w?:number);
    // var proto = cc.math.Quaternion.prototype;

        /**
         * Sets the conjugate of quaternion to self
         * @param {cc.math.Quaternion} quaternion
         */
        public conjugate(quaternion:Quaternion):Quaternion;

        /**
         * Returns the dot product of the current quaternion and parameter quaternion
         * @param quaternion
         * @returns {number}
         */
        public dot(quaternion:Quaternion):number;

        /**
         * Returns the exponential of the quaternion, this function doesn't implemented.
         * @returns {cc.math.Quaternion}
         */
        public exponential():Quaternion;

        /**
         * Makes the current quaternion an identity quaternion
         */
        public identity():Quaternion;

        /**
         * Inverses the value of current Quaternion
         */
        public inverse():Quaternion;

        /**
         * Returns true if the quaternion is an identity quaternion
         * @returns {boolean}
         */
        public isIdentity():boolean;

        /**
         * Returns the length of the quaternion
         * @returns {number}
         */
        public length():number;

        /**
         * Returns the length of the quaternion squared (prevents a sqrt)
         * @returns {number}
         */
        public lengthSq():number;

        /**
         * Uses current quaternion multiplies other quaternion.
         * @param {cc.math.Quaternion} quaternion
         * @returns {cc.math.Quaternion}
         */
        public multiply(quaternion:Quaternion):Quaternion;

        /**
         * Normalizes a quaternion
         * @returns {cc.math.Quaternion}
         */
        public normalize():Quaternion;

        /**
         * Rotates a quaternion around an axis and an angle
         * @param {cc.math.Vec3} axis
         * @param {Number} angle
         */
        public rotationAxis(axis:Vec3, angle:number):Quaternion;

        /**
         *  Creates a quaternion from a rotation matrix
         * @param mat3
         * @returns {*}
         */
        public static rotationMatrix(mat3:Matrix3):Quaternion;

        /**
         * Create a quaternion from yaw, pitch and roll
         * @param yaw
         * @param pitch
         * @param roll
         * @returns {cc.math.Quaternion}
         */
        public static rotationYawPitchRoll(yaw:number, pitch:number, roll:number):Quaternion;

        /**
         * Interpolate with other quaternions
         * @param {cc.math.Quaternion} quaternion
         * @param {Number} t
         * @returns {cc.math.Quaternion}
         */
        public slerp(quaternion:Quaternion, t:Number):Quaternion;

        /**
         * Get the axis and angle of rotation from a quaternion
         * @returns {{axis: cc.math.Vec3, angle: number}}
         */
        public toAxisAndAngle():???;

        /**
         * Scale a quaternion
         * @param {Number} scale
         */
        public scale(scale:number):Quaternion;

        /**
         * Assign current quaternion value from a quaternion.
         * @param {cc.math.Quaternion} quaternion
         * @returns {cc.math.Quaternion}  current quaternion
         */
        public assignFrom(quaternion:Quaternion):Quaternion;

        /**
         * Adds other quaternion
         * @param {cc.math.Quaternion} quaternion
         * @returns {cc.math.Quaternion}
         */
        public add(quaternion:Quaternion):Quaternion;

        /**
         * <p>
         *     Adapted from the OGRE engine!                                                            <br/>
         *     Gets the shortest arc quaternion to rotate this vector to the destination vector.        <br/>
         *     @remarks                                                                                <br/>
         *     If you call this with a destination vector that is close to the inverse                  <br/>
         *     of this vector, we will rotate 180 degrees around the 'fallbackAxis'                     <br/>
         *     (if specified, or a generated axis if not) since in this case ANY axis of rotation is valid.
         * </p>
         * @param {cc.math.Vec3} vec1
         * @param {cc.math.Vec3} vec2
         * @param {cc.math.Vec3} fallback
         * @returns {cc.math.Quaternion}
         */
        public static rotationBetweenVec3(vec1:Vec3, vec2:Vec3, fallback:Vec3):Quaternion;

        /**
         * Current quaternion multiplies a vec3
         * @param {cc.math.Vec3} vec
         * @returns {cc.math.Vec3}
         */
        public multiplyVec3(vec:Vec3):Vec3;
    }
}
