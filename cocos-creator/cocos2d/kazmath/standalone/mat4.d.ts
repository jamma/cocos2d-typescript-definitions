/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc.math {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/kazmath/standalone/mat4.js
    //+--------------------------------------------------------------------------------
    /**
     * Sets pOut to an identity matrix returns pOut
     * @Params pOut - A pointer to the matrix to set to identity
     * @Return Returns pOut so that the call can be nested
     */
    export function mat4Identity(pOut:Matrix4):Matrix4;

    /**
     * Calculates the inverse of pM and stores the result in pOut.
     * Please use matrix4's inverse function instead.
     * @Return Returns NULL if there is no inverse, else pOut
     */
    export function mat4Inverse(pOut:Matrix4, pM:Matrix4):Matrix4;

    /**
     * Multiplies pM1 with pM2, stores the result in pOut, returns pOut
     */
    export function mat4Multiply(pOut:Matrix4, pM1:Matrix4, pM2:Matrix4):Matrix4;

    export function getMat4MultiplyValue(pM1:Matrix4, pM2:Matrix4):number[];

    /**
     * Assigns the value of pIn to pOut
     */
    export function mat4Assign(pOut:Matrix4, pIn:Matrix4):Matrix4;

    /**
     * Builds a translation matrix. All other elements in the matrix
     * will be set to zero except for the diagonal which is set to 1.0
     */
    export function mat4Translation(pOut:Matrix4, x:number, y:number, z:number):Matrix4;

    /**
     * Creates a perspective projection matrix in the
     * same way as gluPerspective
     */
    export function mat4PerspectiveProjection(pOut?:Matrix4, fovY:number, aspect:number, zNear:number, zFar:number):Matrix4;

    /** Creates an orthographic projection matrix like glOrtho */
    export function mat4OrthographicProjection(pOut:Matrix4, left:number, right:number, bottom:number, top:number, nearVal:number, farVal:number):Matrix4;

    /**
     * Builds a translation matrix in the same way as gluLookAt()
     * the resulting matrix is stored in pOut. pOut is returned.
     */
    export function mat4LookAt(pOut:Matrix4, pEye:Vec3, pCenter:Vec3, pUp:Vec3):Matrix4;

    /**
     * <p>
     * A 4x4 matrix                         </br>
     * </br>
     * mat =                                 </br>
     * | 0   4   8  12 |                     </br>
     * | 1   5   9  13 |                     </br>
     * | 2   6  10  14 |                     </br>
     * | 3   7  11  15 |
     * </p>
     * @param {cc.math.Matrix4} [mat4]
     */
    export class Matrix4 {
        public mat:number[];

        public constructor(mat4?:Matrix4);

        /**
         * Fills a cc.math.Matrix4 structure with the values from a 16 element array of floats
         * @param {Array} scalarArr
         */
        public fill(scalarArr:number[]):Matrix4;

        /**
         * Sets matrix to identity value.
         * @returns {cc.math.Matrix4}
         */
        public static identity():Matrix4;

        public get(row:number, col:number):number;

        public set(row:number, col:number, value:number):void;

        public swap(row1:number, col1:number, row2:number, col2:number):void;

        /**
         * Calculates the inverse of current matrix.
         * @returns {cc.math.Matrix4} Returns null if there is no inverse, else returns a new inverse matrix object
         */
        public inverse():Matrix4;

        /**
         * Returns true if current matrix is an identity matrix, false otherwise
         */
        public isIdentity():Matrix4;

        /**
         *  transpose the current matrix
         */
        public transpose():Matrix4;

        /**
         * current matrix multiplies with other matrix mat4
         * @param {cc.math.Matrix4} mat4
         * @returns {cc.math.Matrix4}
         */
        public multiply(mat4:Matrix4):Matrix4;

        /**
         * Assigns the value of current matrix from mat4
         * @param {cc.math.Matrix4} mat4
         * @returns {cc.math.Matrix4}
         */
        public assignFrom(mat4:Matrix4):Matrix4;

        /**
         * Returns true if current matrix equal mat4 (approximately)
         * @param {cc.math.Matrix4} mat4
         * @returns {boolean}
         */
        public equals(mat4:Matrix4):boolean;

        /**
         * Builds an X-axis rotation matrix and stores it in matrix, returns matrix, if matrix is null, create a new matrix
         * @param {Number} radians
         * @param {cc.math.Matrix4} [matrix]
         * @returns {cc.math.Matrix4}
         */
        public static createByRotationX(radians:number, matrix?:Matrix4):Matrix4;

        /**
         * Builds a rotation matrix using the rotation around the Y-axis, The result is stored in matrix, matrix is returned.
         * @param {Number} radians
         * @param {cc.math.Matrix4} [matrix]
         * @returns {*}
         */
        public static createByRotationY(radians:number, matrix?:Matrix4):Matrix4;

        /**
         * Builds a rotation matrix around the Z-axis. The resulting matrix is stored in matrix. matrix is returned.
         * @param {Number} radians
         * @param {cc.math.Matrix4} matrix
         * @return {cc.math.Matrix4}
         */
        public static createByRotationZ(radians:number, matrix?:Matrix4):Matrix4;

        /**
         * Builds a rotation matrix from pitch, yaw and roll. The resulting matrix is stored in parameter matrix and returns.
         * @param {Number} pitch
         * @param {Number} yaw
         * @param {Number} roll
         * @param {cc.math.Matrix4} [matrix] if matrix is undefined, creates a new matrix.
         * @returns {cc.math.Matrix4}
         */
        public static createByPitchYawRoll(pitch:number, yaw:number, roll:number, matrix?:Matrix4):Matrix4;

        /**
         * Builds a matrix by a quaternion.
         * @param {cc.math.Quaternion} quaternion
         * @param {cc.math.Matrix4} [matrix] if matrix is undefined, creates a new matrix.
         * @returns {cc.math.Matrix4}
         */
        public static createByQuaternion(quaternion:Quaternion, matrix?:Matrix4):Matrix4;

        /**
         * Build a 4x4 OpenGL transformation matrix using a 3x3 rotation matrix, and a 3d vector representing a translation.
         * @param {cc.math.Matrix3} rotation
         * @param {cc.math.Vec3} translation
         * @param {cc.math.Matrix4} [matrix] if matrix is undefined, creates a new matrix.
         * @returns {cc.math.Matrix4}
         */
        public static createByRotationTranslation(rotation:Matrix3, translation:Vec3, matrix?:Matrix4):Matrix4;

        /**
         * Builds a scaling matrix
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         * @param {cc.math.Matrix4} [matrix] if matrix is undefined, creates a new matrix.
         * @returns {cc.math.Matrix4}
         */
        public static createByScale(x:number, y:number, z:number, matrix?:Matrix4):Matrix4;

        /**
         *  Builds a translation matrix.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         * @param {cc.math.Matrix4} [matrix] if matrix is undefined, creates a new matrix.
         * @returns {cc.math.Matrix4}
         */
        public static createByTranslation(x:number, y:number, z:number, matrix?:Matrix4):Matrix4;

        /**
         *  Get the up vector from a matrix.
         *  @returns {cc.math.Vec3}
         */
        public getUpVec3():Vec3;

        /**
         * Extract the right vector from a 4x4 matrix.
         * @returns {cc.math.Vec3}
         */
        public getRightVec3():Vec3;

        /**
         * Extract the forward vector from a 4x4 matrix.
         * @returns {cc.math.Vec3}
         */
        public getForwardVec3():Vec3;

        /**
         * Creates a perspective projection matrix in the same way as gluPerspective
         * @param {Number} fovY
         * @param {Number} aspect
         * @param {Number} zNear
         * @param {Number} zFar
         * @returns {cc.math.Matrix4|Null}
         */
        public static createPerspectiveProjection(fovY:number, aspect:number, zNear:number, zFar:number):Matrix4;

        /**
         * Creates an orthographic projection matrix like glOrtho
         * @param {Number} left
         * @param {Number} right
         * @param {Number} bottom
         * @param {Number} top
         * @param {Number} nearVal
         * @param {Number} farVal
         * @returns {cc.math.Matrix4}
         */
        public static createOrthographicProjection(left:number, right:number, bottom:number, top:number, nearVal:number, farVal:number):Matrix4;

        // var tempMatrix = new cc.math.Matrix4();         // an internal matrix
        public lookAt(eyeVec:Vec3, centerVec:Vec3, upVec:Vec3):Matrix4;

        /**
         * Build a rotation matrix from an axis and an angle. Result is stored in pOut.
         * pOut is returned.
         */
        public static mat4RotationAxisAngle(pOut:Matrix4, axis:Vec3, radians:number):Matrix4;

        /**
         * Build a rotation matrix from an axis and an angle.
         * @param {cc.math.Vec3} axis
         * @param {Number} radians
         * @param {cc.math.Matrix4} [matrix]
         * @returns {cc.math.Matrix4}
         */
        public static createByAxisAndAngle(axis:Vec3, radians:number, matrix?:Matrix4):Matrix4;

        /**
         * Extract a 3x3 rotation matrix from the input 4x4 transformation.
         * @returns {cc.math.Matrix3}
         */
        public extractRotation():Matrix3;

        public extractPlane(planeType:plane.PlaneType):Plane;

        /**
         * Take the rotation from a 4x4 transformation matrix, and return it as an axis and an angle (in radians)
         * @returns {*|{axis: cc.math.Vec3, angle: number}}
         */
        public toAxisAndAngle():???;
    }
}
