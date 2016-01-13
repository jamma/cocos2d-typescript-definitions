
declare module cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/cocoa/CCAffineTransform.js
    ////////////////////////////////////////////////////////////////////////////////

    // Function Definitions

    /**
     * Concatenate a transform matrix to another and return the result:
     * t' = t1 * t2
     * @function
     * @param {cc.AffineTransform} lhs The first transform object
     * @param {cc.AffineTransform} rhs The transform object to concatenate
     * @return {cc.AffineTransform} The result of concatenation
     */
    export function affineTransformConcat(lhs, rhs):AffineTransform;

    /**
     * Concatenate a transform matrix to another
     * The results are reflected in the first matrix.
     * t' = t1 * t2
     * @function
     * @param {cc.AffineTransform} lhs The first transform object
     * @param {cc.AffineTransform} rhs The transform object to concatenate
     * @return {cc.AffineTransform} The result of concatenation
     */
    export function affineTransformConcatIn(lhs, rhs):AffineTransform;

    /**
     * Return true if an affine transform equals to another, false otherwise.
     * @function
     * @param {cc.AffineTransform} lhs The first transform to compare
     * @param {cc.AffineTransform} rhs The second transform to compare
     * @return {Boolean}
     */
    export function affineTransformEqualToTransform(lhs:AffineTransform, rhs:AffineTransform):boolean;

    /**
     * Create a identity transformation matrix:
     * [ 1, 0, 0,
     *   0, 1, 0 ]
     * @function
     *
     * @return {cc.AffineTransform}
     * @deprecated since v3.0, please use cc.affineTransformMakeIdentity() instead
     * @see cc.affineTransformMakeIdentity
     */
    export function affineTransformIdentity():AffineTransform;

    /**
     * Get the invert transform of an AffineTransform object
     * @function
     * @param {cc.AffineTransform} xform The source transform
     * @return {cc.AffineTransform} The inverted transform object
     */
    export function affineTransformInvert(xform:AffineTransform):AffineTransform;

    /**
     * Create a cc.AffineTransform object with all contents in the matrix
     * @function
     *
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @return {cc.AffineTransform}
     */
    export function affineTransformMake(a:number, b:number, c:number, d:number,
                                        tx:number, ty:number):AffineTransform;

    /**
     * Create a identity transformation matrix:
     * [ 1, 0, 0,
     *   0, 1, 0 ]
     * @function
     *
     * @return {cc.AffineTransform}
     */
    export function affineTransformMakeIdentity():AffineTransform;

    /**
     * Create a new affine transformation with a base transformation matrix and a rotation based on it.
     * @function
     * @param {cc.AffineTransform} xform The base affine transform object
     * @param {number} angle The angle to rotate
     * @return {cc.AffineTransform}
     */
    export function affineTransformRotate(xform:AffineTransform, angle:number):AffineTransform;

    /**
     * Create a new affine transformation with a base transformation matrix and a scale based on it.
     * @function
     * @param {cc.AffineTransform} xform The base affine transform object
     * @param {number} sx The scale on x axis
     * @param {number} sy The scale on y axis
     * @return {cc.AffineTransform}
     */
    export function affineTransformScale(xform:AffineTransform, sx:number, sy:number):AffineTransform;

    /**
     * Create a new affine transformation with a base transformation matrix and a translation based on it.
     * @function
     *
     * @param {cc.AffineTransform} xform The base affine transform object
     * @param {number} tx The translation on x axis
     * @param {number} ty The translation on y axis
     * @return {cc.AffineTransform}
     */
    export function affineTransformTranslate(xform:AffineTransform, tx:number, ty:number):AffineTransform;

    /**
     * Apply the affine transformation on a point.
     * @function
     *
     * @param {cc.Point|number} point
     * @param {cc.AffineTransform|number} xform transform matrix
     * @return {cc.Point}
     */
    export function pointApplyAffineTransform(point:Point, xform:AffineTransform):Point;

    /**
     * Apply the affine transformation on a point.
     * @function
     *
     * @param {cc.Point|number} x
     * @param {cc.AffineTransform|number} y
     * @param {cc.AffineTransform} xform
     * @return {cc.Point}
     */
    export function pointApplyAffineTransform(x:number, y:number, xform:AffineTransform):Point;

    /**
     * Apply the affine transformation on a rect.
     * @function
     *
     * @param {cc.Rect} rect
     * @param {cc.AffineTransform} xform
     * @return {cc.Rect}
     */
    export function rectApplyAffineTransform(rect:Rect, xform:AffineTransform):Rect;

    /**
     * Apply the affine transformation on a size.
     * @function
     *
     * @param {cc.Size} size
     * @param {cc.AffineTransform} xform
     * @return {cc.Size}
     */
    export function sizeApplyAffineTransformfunction(size:Size, xform:AffineTransform):Size;

    //+---------- Class Definitions ----------+//

    /**
     * cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
     * Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
     *
     * @class cc.AffineTransform
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @see cc.affineTransformMake
     */
    export class AffineTransform {
        constructor(a:number, b:number, c:number, d:number, tx:number, ty:number);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/cocoa/CCGeometry.js
    ////////////////////////////////////////////////////////////////////////////////

    // Function Definitions
    /**
     * Helper function that creates a cc.Point.
     * @function
     * @param {number|cc.Point} x a number or a point object
     * @param {number} y
     * @return {cc.Point}
     * @example
     * var point1 = cc.p();
     * var point2 = cc.p(100, 100);
     * var point3 = cc.p(point2);
     * var point4 = cc.p({x: 100, y: 100});
     */
    export function p(x:number, y:number):Point;

    /**
     * Check whether a point's value equals to another
     * @function
     * @param {cc.Point} lhs The first Point to compare
     * @param {cc.Point} rhs The second Point to compare
     * @return {Boolean}
     */
    export function pointEqualToPoint(lhs:Point, rhs:Point):boolean;

    /**
     * Helper function that creates a cc.Rect.
     * @function
     * @param {number|cc.Rect} x a number or a rect object
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @returns {cc.Rect}
     * @example
     * var rect1 = cc.rect();
     * var rect2 = cc.rect(100,100,100,100);
     * var rect3 = cc.rect(rect2);
     * var rect4 = cc.rect({x: 100, y: 100, width: 100, height: 100});
     */
    export function rect(x:Rect):Rect;
    export function rect(number, y:number, width:number, height:number):Rect;

    /**
     * Check whether a rect contains a point
     * @function
     * @param {cc.Rect} rect The source rect
     * @param {cc.Point} point The point to check
     * @return {Boolean}
     */
    export function rectContainsPoint(rect:Rect, point:Point):boolean;

    /**
     * Check whether the rect1 contains rect2
     * @function
     * @param {cc.Rect} outer The outer rect to compare
     * @param {cc.Rect} inner The inner rect to compare
     * @return {Boolean}
     */
    export function rectContainsRect(outer:Rect, inner:Rect):boolean;

    /**
     * Returns the rightmost x-value of a rect
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The rightmost x value
     */
    export function rectGetMaxX(rect:Rect):boolean;

    /**
     * Return the topmost y-value of a rect
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The topmost y value
     */
    export function rectGetMaxY(rect:Rect):boolean;

    /**
     * Return the midpoint x-value of a rect
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The midpoint x value
     */
    export function rectGetMidX(rect:Rect):boolean;

    /**
     * Return the midpoint y-value of `rect'
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The midpoint y value
     */
    export function rectGetMidY(rect:Rect):boolean;

    /**
     * Returns the leftmost x-value of a rect
     * @function
     * @param {cc.Rect} rect
     * @return {number} The leftmost x value
     */
    export function rectGetMinX(rect:Rect):boolean;

    /**
     * Return the bottommost y-value of a rect
     * @function
     * @param {cc.Rect} rect
     * @return {number} The bottommost y value
     */
    export function rectGetMinY(rect:Rect):boolean;

    /**
     * Check whether a rect's value equals to another
     * @function
     * @param {cc.Rect} lhs First rectangle to compare
     * @param {cc.Rect} rhs Second rectangle to compare
     * @return {Boolean}
     */
    export function rectEqualToRect(lhs:Rect, rhs:Rect):boolean;

    /**
     * Returns the overlapping portion of 2 rectangles
     * @function
     * @param {cc.Rect} lhs The first Rect to intersect
     * @param {cc.Rect} rhs The second Rect to intersect
     * @return {cc.Rect}
     */
    export function rectIntersection(lhs:Rect, rhs:Rect):Rect;

    /**
     * Check whether a rect intersect with another
     * @function
     * @param {cc.Rect} lhs
     * @param {cc.Rect} rhs
     * @return {Boolean}
     */
    export function rectIntersectsRect(lhs:Rect, rhs:Rect):boolean;

    /**
     * Check whether a rect overlaps another
     * @function
     * @param {cc.Rect} lhs The first Rect to compare
     * @param {cc.Rect} rhs The second Rect to compare
     * @return {Boolean}
     */
    export function rectOverlapsRect(lhs:Rect, rhs:Rect):boolean;

    /**
     * Returns the smallest rectangle that contains the two source rectangles.
     * @function
     * @param {cc.Rect} lhs The first Rect to union
     * @param {cc.Rect} rhs The second Rect to union
     * @return {cc.Rect}
     */
    export function rectUnion(lhs:Rect, rhs:Rect):Rect;

///**
// * Check whether all fields of a rect are 0
// * @function
// * @param {cc.Rect} rect Rectangle to compare
// * @return {Boolean}
// */
//export function _rectEqualToZero(rect: Rect): boolean;

    /**
     * Helper function that creates a cc.Size.
     * @function
     * @param {number|cc.Size} width width or a size object
     * @param {number} height height
     * @return {cc.Size}
     * @example
     * var size1 = cc.size();
     * var size2 = cc.size(100,100);
     * var size3 = cc.size(size2);
     * var size4 = cc.size({width: 100, height: 100});
     */
    export function size(width:number, height:number):Size;

    /**
     * Check whether a Size's value equals to another
     * @function
     * @param {cc.Size} lhs First size to compare
     * @param {cc.Size} rhs Second size to compare
     * @return {Boolean}
     */
    export function sizeEqualToSize(lhs:Size, rhs:Size):boolean;

// Class Definitions
    /**
     * cc.Point is the class for point object, please do not use its constructor to create points, use cc.p() alias function instead.
     * @class cc.Point
     * @param {number} x
     * @param {number} y
     * @see cc.p
     */
    export class Point {
        public x:number;
        public y:number;

        constructor(x:number, y:number);
    }

    /**
     * cc.Rect is the class for rect object, please do not use its constructor to create rects, use cc.rect() alias function instead.
     * @class cc.Rect
     * @param {number} width
     * @param {number} height
     * @see cc.rect
     */
    export class Rect {
        public x:number;
        public y:number;
        public width:number;
        public height:number;

        constructor(x:number, y:number, width:number, height:number);
    }

    /**
     * cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
     * @class cc.Size
     * @param {number} width
     * @param {number} height
     * @see cc.size
     */
    export class Size {
        public width:number;
        public height:number;

        constructor(width:number, height:number);
    }
}
