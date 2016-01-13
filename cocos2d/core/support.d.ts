/// <reference path="../cocos2d-lib.d.ts" />

// +--------------------  CCPointExtension.js  --------------------+
/**
 * cc.Point extensions based on Chipmunk's cpVect file.
 * These extensions work both with cc.Point
 *
 * The "ccp" prefix means: "CoCos2d Point"
 *
 *  //Examples:
 * - cc.pAdd( cc.p(1,1), cc.p(2,2) ); // preferred cocos2d way
 * - cc.pAdd( cc.p(1,1), cc.p(2,2) ); // also ok but more verbose
 * - cc.pAdd( cc.cpv(1,1), cc.cpv(2,2) ); // mixing chipmunk and cocos2d (avoid)
 */

declare namespace cc {
    /**
     * smallest such that 1.0+FLT_EPSILON != 1.0
     * @constant
     * @type Number
     */
    const POINT_EPSILON:number;

    /**
     * Returns opposite of point.
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    export function pNeg(point:Point): Point;

    /**
     * Calculates sum of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    export function pAdd(v1:Point, v2:Point): Point;

    /**
     * Calculates difference of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pSub = function (v1, v2) {
    //    return cc.p(v1.x - v2.x, v1.y - v2.y);
    //};
    export function pSub(v1:Point, v2:Point): Point;

    /**
     * Returns point multiplied by given factor.
     * @param {cc.Point} point
     * @param {Number} factor
     * @return {cc.Point}
     */
    //cc.pMult = function (point, floatVar) {
    //    return cc.p(point.x * floatVar, point.y * floatVar);
    //};
    export function pMult(point:Point, factor:number): Point;

    /**
     * Calculates midpoint between two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pMidpoint = function (v1, v2) {
    //    return cc.pMult(cc.pAdd(v1, v2), 0.5);
    //};
    export function pMidpoint(v1:Point, v2:Point): Point;

    /**
     * Calculates dot product of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {Number}
     */
    //cc.pDot = function (v1, v2) {
    //    return v1.x * v2.x + v1.y * v2.y;
    //};
    export function pDot(v1:Point, v2:Point): number;

    /**
     * Calculates cross product of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {Number}
     */
    //cc.pCross = function (v1, v2) {
    //    return v1.x * v2.y - v1.y * v2.x;
    //};
    export function pCross(v1:Point, v2:Point): number;

    /**
     * Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) >= 0
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    //cc.pPerp = function (point) {
    //    return cc.p(-point.y, point.x);
    //};
    export function pPerp(point:Point): Point;

    /**
     * Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) <= 0
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    //cc.pRPerp = function (point) {
    //    return cc.p(point.y, -point.x);
    //};
    export function pRPerp(point:Point): Point;

    /**
     * Calculates the projection of v1 over v2.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.pMult}
     */
    //cc.pProject = function (v1, v2) {
    //    return cc.pMult(v2, cc.pDot(v1, v2) / cc.pDot(v2, v2));
    //};
    export function pProject(v1:Point, v2:Point): Point;

    /**
     * Rotates two points.
     * @param  {cc.Point} v1
     * @param  {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pRotate = function (v1, v2) {
    //    return cc.p(v1.x * v2.x - v1.y * v2.y, v1.x * v2.y + v1.y * v2.x);
    //};
    export function pRotate(v1:Point, v2:Point): Point;

    /**
     * Unrotates two points.
     * @param  {cc.Point} v1
     * @param  {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pUnrotate = function (v1, v2) {
    //    return cc.p(v1.x * v2.x + v1.y * v2.y, v1.y * v2.x - v1.x * v2.y);
    //};
    export function pUnrotate(v1:Point, v2:Point): Point;

    /**
     * Calculates the square length of a cc.Point (not calling sqrt() )
     * @param  {cc.Point} point
     *@return {number}
     */
    //cc.pLengthSQ = function (v) {
    //    return cc.pDot(v, v);
    //};
    export function pLengthSQ(point:Point): number;

    /**
     * Calculates the square distance between two points (not calling sqrt() )
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {number}
     */
    //cc.pDistanceSQ = function (point1, point2) {
    //    return cc.pLengthSQ(cc.pSub(point1, point2));
    //};
    export function pDistanceSQ(point1:Point, point2:Point): number;

    /**
     * Calculates distance between point an origin
     * @param  {cc.Point} point
     * @return {number}
     */
    //cc.pLength = function (v) {
    //    return Math.sqrt(cc.pLengthSQ(v));
    //};
    export function pLength(point:Point): number;

    /**
     * Calculates the distance between two points
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {Number}
     */
    //cc.pDistance = function (v1, v2) {
    //    return cc.pLength(cc.pSub(v1, v2));
    //};
    export function pDistance(point1:Point, point2:Point): number;

    /**
     * Returns point multiplied to a length of 1.
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    //cc.pNormalize = function (v) {
    //    var n = cc.pLength(v);
    //    return n === 0 ? cc.p(v) : cc.pMult(v, 1.0 / n);
    //};
    export function pNormalize(point:Point): Point;

    /**
     * Converts radians to a normalized vector.
     * @param {Number} radians
     * @return {cc.Point}
     */
    //cc.pForAngle = function (a) {
    //    return cc.p(Math.cos(a), Math.sin(a));
    //};
    export function pForAngle(radians:number): Point;

    /**
     * Converts a vector to radians.
     * @param {cc.Point} point
     * @return {number}
     */
    //cc.pToAngle = function (v) {
    //    return Math.atan2(v.y, v.x);
    //};
    export function pToAngle(point:Point): number;

    /**
     * Clamp a value between from and to.
     * @param {number} value
     * @param {number} min_inclusive
     * @param {number} max_inclusive
     * @return {number}
     */
    //cc.clampf = function (value, min_inclusive, max_inclusive) {
    //    if (min_inclusive > max_inclusive) {
    //        var temp = min_inclusive;
    //        min_inclusive = max_inclusive;
    //        max_inclusive = temp;
    //    }
    //    return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
    //};
    export function clampf(value:number, min_inclusive:number, max_inclusive:number): number;

    /**
     * Clamp a point between from and to.
     * @param {Point} point
     * @param {Point} min_inclusive
     * @param {Point} max_inclusive
     * @return {cc.Point}
     */
    //cc.pClamp = function (p, min_inclusive, max_inclusive) {
    //    return cc.p(cc.clampf(p.x, min_inclusive.x, max_inclusive.x), cc.clampf(p.y, min_inclusive.y, max_inclusive.y));
    //};
    export function pClamp(point:Point, min_inclusive:Point, max_inclusive:Point): Point;

    /**
     * Quickly convert cc.Size to a cc.Point
     * @param {cc.Size} size
     * @return {cc.Point}
     */
    //cc.pFromSize = function (s) {
    //    return cc.p(s.width, s.height);
    //};
    export function pFromSize(size:Size): Point;

    /**
     * Run a math operation function on each point component
     * Math.abs, Math.floor, Math.ceil, Math.round.
     * @param {cc.Point} point
     * @param {Function} opFunc
     * @return {cc.Point}
     * @example
     * //For example: let's try to take the floor of x,y
     * var p = cc.pCompOp(cc.p(10,10),Math.abs);
     */
    //cc.pCompOp = function (p, opFunc) {
    //    return cc.p(opFunc(p.x), opFunc(p.y));
    //};
    export function pCompOp(point:Point, opFunc:(arg:number) => number): Point;

    /**
     * Linear Interpolation between two points a and b
     * alpha == 0 ? a
     * alpha == 1 ? b
     * otherwise a value between a..b
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @param {number} alpha
     * @return {cc.Point}
     */
    //cc.pLerp = function (a, b, alpha) {
    //    return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha));
    //};
    export function pLerp(point1:Point, point2:Point, alpha:number): Point;

    /**
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @param {number} variance
     * @return {boolean} if points have fuzzy equality which means equal with some degree of variance.
     */
    //cc.pFuzzyEqual = function (a, b, variance) {
    //    if (a.x - variance <= b.x && b.x <= a.x + variance) {
    //        if (a.y - variance <= b.y && b.y <= a.y + variance)
    //            return true;
    //    }
    //    return false;
    //};
    export function pFuzzyEqual(point1:Point, point2:Point, variance:number): boolean;

    /**
     * Multiplies a and b components, a.x*b.x, a.y*b.y
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {cc.Point}
     */
    //cc.pCompMult = function (a, b) {
    //    return cc.p(a.x * b.x, a.y * b.y);
    //};
    export function pCompMult(point1:Point, point2:Point): Point;

    /**
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {number} the signed angle in radians between two vector directions
     */
    //cc.pAngleSigned = function (a, b) {
    //    var a2 = cc.pNormalize(a);
    //    var b2 = cc.pNormalize(b);
    //    var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
    //    if (Math.abs(angle) < cc.POINT_EPSILON)
    //        return 0.0;
    //    return angle;
    //};
    export function pAngleSigned(point1:Point, point2:Point): number;

    /**
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {Number} the angle in radians between two vector directions
     */
    //cc.pAngle = function (a, b) {
    //    var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    //    if (Math.abs(angle) < cc.POINT_EPSILON) return 0.0;
    //    return angle;
    //};
    export function pAngle(point1:Point, point2:Point): number;

    /**
     * Rotates a point counter clockwise by the angle around a pivot
     * @param {cc.Point} point point is the point to rotate
     * @param {cc.Point} pivot pivot is the pivot, naturally
     * @param {number} radians angle is the angle of rotation cw in radians
     * @return {cc.Point} the rotated point
     */
    //cc.pRotateByAngle = function (v, pivot, angle) {
    //    var r = cc.pSub(v, pivot);
    //    var cosa = Math.cos(angle), sina = Math.sin(angle);
    //    var t = r.x;
    //    r.x = t * cosa - r.y * sina + pivot.x;
    //    r.y = t * sina + r.y * cosa + pivot.y;
    //    return r;
    //};
    export function pRotateByAngle(point:Point, pivot:Point, radians:number): Point;

    /**
     * A general line-line intersection test
     * indicating successful intersection of a line
     * note that to truly test intersection for segments we have to make
     * sure that s & t lie within [0..1] and for rays, make sure s & t > 0
     * the hit point is        p3 + t * (p4 - p3);
     * the hit point also is    p1 + s * (p2 - p1);
     * @param {cc.Point} a a is the startpoint for the first line P1 = (p1 - p2).
     * @param {cc.Point} b b is the endpoint for the first line P1 = (p1 - p2).
     * @param {cc.Point} c c is the startpoint for the second line P2 = (p3 - p4).
     * @param {cc.Point} d d is the endpoint for the second line P2 = (p3 - p4).
     * @param {cc.Point} retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), 
     * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
     * @return {boolean}
     */
    //cc.pLineIntersect = function (A, B, C, D, retP) {
    //    if ((A.x === B.x && A.y === B.y) || (C.x === D.x && C.y === D.y)) {
    //        return false;
    //    }
    //    var BAx = B.x - A.x;
    //    var BAy = B.y - A.y;
    //    var DCx = D.x - C.x;
    //    var DCy = D.y - C.y;
    //    var ACx = A.x - C.x;
    //    var ACy = A.y - C.y;
    //
    //    var denom = DCy * BAx - DCx * BAy;
    //
    //    retP.x = DCx * ACy - DCy * ACx;
    //    retP.y = BAx * ACy - BAy * ACx;
    //
    //    if (denom === 0) {
    //        if (retP.x === 0 || retP.y === 0) {
    //            // Lines incident
    //            return true;
    //        }
    //        // Lines parallel and not incident
    //        return false;
    //    }
    //
    //    retP.x = retP.x / denom;
    //    retP.y = retP.y / denom;
    //
    //    return true;
    //};
    export function pLineIntersect(a:Point, b:Point, c:Point, d:Point, retP:Point): boolean;

    /**
     * ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @param {cc.Point} c
     * @param {cc.Point} d
     * @return {Boolean}
     */
    //cc.pSegmentIntersect = function (A, B, C, D) {
    //    var retP = cc.p(0, 0);
    //    if (cc.pLineIntersect(A, B, C, D, retP))
    //        if (retP.x >= 0.0 && retP.x <= 1.0 && retP.y >= 0.0 && retP.y <= 1.0)
    //            return true;
    //    return false;
    //};
    export function pSegmentIntersect(a:Point, b:Point, c:Point, d:Point): boolean;

    /**
     * ccpIntersectPoint return the intersection point of line A-B, C-D
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @param {cc.Point} c
     * @param {cc.Point} d
     * @return {cc.Point}
     */
    //cc.pIntersectPoint = function (A, B, C, D) {
    //    var retP = cc.p(0, 0);
    //
    //    if (cc.pLineIntersect(A, B, C, D, retP)) {
    //        // Point of intersection
    //        var P = cc.p(0, 0);
    //        P.x = A.x + retP.x * (B.x - A.x);
    //        P.y = A.y + retP.x * (B.y - A.y);
    //        return P;
    //    }
    //
    //    return cc.p(0, 0);
    //};
    export function pIntersectPoint(a:Point, b:Point, c:Point, d:Point): Point;

    /**
     * check to see if both points are equal
     * @param {cc.Point} a a ccp a
     * @param {cc.Point} b b ccp b to be compared
     * @return {boolean} the true if both ccp are same
     */
    //cc.pSameAs = function (A, B) {
    //    if ((A != null) && (B != null)) {
    //        return (A.x === B.x && A.y === B.y);
    //    }
    //    return false;
    //};
    export function pIntersectPoint(a:Point, b:Point): boolean;


    // High Perfomance In Place Operationrs ---------------------------------------

    /**
     * sets the position of the point to 0
     * @param {cc.Point} point
     */
    //cc.pZeroIn = function (v) {
    //    v.x = 0;
    //    v.y = 0;
    //};
    export function pZeroIn(point:Point): void;

    /**
     * copies the position of one point to another
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     */
    //cc.pIn = function (v1, v2) {
    //    v1.x = v2.x;
    //    v1.y = v2.y;
    //};
    export function pIn(point1:Point, point2:Point): void;

    /**
     * multiplies the point with the given factor (inplace)
     * @param {cc.Point} point
     * @param {Number} factor
     */
    //cc.pMultIn = function (point, floatVar) {
    //    point.x *= floatVar;
    //    point.y *= floatVar;
    //};
    export function pMultIn(point:Point, factor:number): void;

    /**
     * subtracts one point from another (inplace)
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     */
    //cc.pSubIn = function (v1, v2) {
    //    v1.x -= v2.x;
    //    v1.y -= v2.y;
    //};
    export function pSubIn(point1:Point, point2:Point): void;

    /**
     * adds one point to another (inplace)
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     */
    //cc.pAddIn = function (v1, v2) {
    //    v1.x += v2.x;
    //    v1.y += v2.y;
    //};
    export function pAddIn(point1:Point, point2:Point): void;

    /**
     * normalizes the point (inplace)
     * @param {cc.Point} point
     */
    //cc.pNormalizeIn = function (v) {
    //    cc.pMultIn(v, 1.0 / Math.sqrt(v.x * v.x + v.y * v.y));
    //};
    export function pNormalizeIn(point:Point): void;

}
