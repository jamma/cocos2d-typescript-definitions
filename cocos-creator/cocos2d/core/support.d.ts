/// <reference path="../../cocos-creator-lib.d.ts" />

// NOTE: Still not sure what the CCSG classes are for, it looks like maybe they're Cococs Creator specific.
//       Need to find out more before writing out these type definitions.

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/support/CCVertex.js
    //+--------------------------------------------------------------------------------
    /**
     * converts a line to a polygon
     * @param {Float32Array} points
     * @param {Number} stroke
     * @param {Float32Array} vertices
     * @param {Number} offset
     * @param {Number} nuPoints
     */
    export function vertexLineToPolygon(points:number[], stroke:number, vertices:number[], offset:number, nuPoints:number):void;

    /**
     * returns whether or not the line intersects
     * @param {Number} Ax
     * @param {Number} Ay
     * @param {Number} Bx
     * @param {Number} By
     * @param {Number} Cx
     * @param {Number} Cy
     * @param {Number} Dx
     * @param {Number} Dy
     * @return {Object}
     */
    // function vertexLineIntersect (Ax, Ay, Bx, By, Cx, Cy, Dx, Dy) {
    export interface VertexLineIntersectValue {
        isSuccess:boolean;
        value:number;
    }

    export function vertexLineIntersect(Ax:number, Ay:number, Bx:number, By:number, Cx:number, Cy:number, Dx:number, Dy:number):VertexLineIntersectValue;

    /**
     * returns wheter or not polygon defined by vertex list is clockwise
     * @param {Array} verts
     * @return {Boolean}
     */
    // function vertexListIsClockwise (verts) {
    export function vertexListIsClockwise(verts:Vec2[]):boolean;

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/support/TransformUtils.js
    //+--------------------------------------------------------------------------------
    /**
     * convert an affine transform object to a kmMat4 object
     * @method CGAffineToGL
     * @param {AffineTransform} trans
     * @param {cc.kmMat4} mat
     */
    export function CGAffineToGL(trans:AffineTransform, mat:kmMat4):void;

    /**
     * Convert a kmMat4 object to an affine transform object
     * @method GLToCGAffine
     * @param {cc.kmMat4} mat
     * @param {AffineTransform} trans
     */
    export function GLToCGAffine(mat:kmMat4, trans:AffineTransform):void;

}
