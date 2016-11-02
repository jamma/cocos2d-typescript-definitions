/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCAffineTransformation.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en
     * cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
     * Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
     * !#zh
     * cc.AffineTransform 类代表一个仿射变换矩阵。它基本上是由平移旋转，缩放转变所组成。<br/>
     * 请不要直接使用它的构造，请使用 cc.affineTransformMake 函数代替。
     * @class AffineTransform
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} tx
     * @param {Number} ty
     * @see cc.affineTransformMake
     */
    export class AffineTransform {
        public a:number;
        public b:number;
        public c:number;
        public d:number;
        public tx:number;
        public ty:number;

        public constructor(a:number, b:number, c:number, d:number, tx:number, ty:number);
    }

    /**
     * !#en Create a cc.AffineTransform object with all contents in the matrix.
     * !#zh 用在矩阵中的所有内容创建一个 cc.AffineTransform 对象。
     * @method affineTransformMake
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} tx
     * @param {Number} ty
     * @return {AffineTransform}
     */
    export function affineTransformMake(a:number, b:number, c:number, d:number, tx:number, ty:number):AffineTransform;

    /**
     * !#en Clone a cc.AffineTransform object from the specified transform.
     * !#zh 克隆指定的 cc.AffineTransform 对象。
     * @method affineTransformClone
     * @param {AffineTransform} t
     * @return {AffineTransform}
     */
    export function affineTransformClone(t:AffineTransform):AffineTransform;

    /**
     * !#en Apply the affine transformation on a point.
     * !#zh 对一个点应用矩阵变换。
     * @method pointApplyAffineTransform
     * @param {Vec2|Number} point - or x.
     * @param {AffineTransform|Number} transOrY - transform matrix or y.
     * @param {AffineTransform} t - transform matrix or y.
     * @return {Vec2}
     */
    export function pointApplyAffineTransform(point:number|Vec2, transOrY:AffineTransform|number, t:AffineTransform):Vec2;


    /**
     * !#en Apply the affine transformation on a size.
     * !#zh 应用 Size 到仿射变换矩阵上。
     * @method sizeApplyAffineTransform
     * @param {Size} size
     * @param {AffineTransform} t
     * @return {Size}
     */
    export function sizeApplyAffineTransform(size:Size, t:AffineTransform):Size;

    /**
     * !#en
     * Create a identity transformation matrix: <br/>
     * [ 1, 0, 0, <br/>
     *   0, 1, 0 ]
     * !#zh
     * 单位矩阵：<br/>
     * [ 1, 0, 0, <br/>
     *   0, 1, 0 ]
     *
     * @method affineTransformMakeIdentity
     * @return {AffineTransform}
     */
    export function affineTransformMakeIdentity():AffineTransform;

   /*
    * Create a identity transformation matrix: <br/>
    * [ 1, 0, 0, <br/>
    *   0, 1, 0 ]
    *
    *
    * @method affineTransformIdentity
    * @return {AffineTransform}
    * @deprecated since v3.0, please use cc.affineTransformMakeIdentity() instead
    * @see cc.affineTransformMakeIdentity
    */
    export function affineTransformIdentity():AffineTransform;

    /**
     * !#en Apply the affine transformation on a rect.
     * !#zh 应用 Rect 到仿射变换矩阵上。
     * @method rectApplyAffineTransform
     * @param {Rect} rect
     * @param {AffineTransform} anAffineTransform
     * @return {Rect}
     */
    export function rectApplyAffineTransform(rect:Rect, t:AffineTransform):Rect;

    /**
     * !#en Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.
     * !#zh 应用 Rect 到仿射变换矩阵上, 并转换为有向包围盒
     * @method obbApplyAffineTransform
     * @param {Rect} rect
     * @param {AffineTransform} anAffineTransform
     * @param {Vec2} out_bl
     * @param {Vec2} out_tl
     * @param {Vec2} out_tr
     * @param {Vec2} out_br
     */
    export function rectApplyAffineTransform(rect:Rect, anAffineTransform:AffineTransform, out_bl:Vec2, out_tl:Vec2, out_tr:Vec2, out_br:Vec2);

    /**
     * !#en Create a new affine transformation with a base transformation matrix and a translation based on it.
     * !#zh 基于一个基础矩阵加上一个平移操作来创建一个新的矩阵。
     * @method affineTransformTranslate
     * @param {AffineTransform} t - The base affine transform object.
     * @param {Number} tx - The translation on x axis.
     * @param {Number} ty - The translation on y axis.
     * @return {AffineTransform}
     */
    export function affineTransformTranslate(t:AffineTransform, tx:number, ty:number):AffineTransform;
    
    /**
     * !#en Create a new affine transformation with a base transformation matrix and a scale based on it.
     * !#zh 创建一个基础变换矩阵，并在此基础上进行了 Scale 仿射变换。
     * @method affineTransformScale
     * @param {AffineTransform} t - The base affine transform object.
     * @param {Number} sx - The scale on x axis.
     * @param {Number} sy - The scale on y axis.
     * @return {AffineTransform}
     */
    export function affineTransformScale(t:AffineTransform, sx:number, sy:number):AffineTransform;

    /**
     * !#en Create a new affine transformation with a base transformation matrix and a rotation based on it.
     * !#zh 创建一个基础变换矩阵，并在此基础上进行了 Rotation 仿射变换。
     * @method affineTransformRotate
     * @param {AffineTransform} aTransform - The base affine transform object.
     * @param {Number} anAngle - The angle to rotate.
     * @return {AffineTransform}
     */
    export function affineTransformRotate(t:AffineTransform, angle:number):AffineTransform;

    /**
     * !#en
     * Concatenate a transform matrix to another and return the result:<br/>
     * t' = t1 * t2
     * !#zh 拼接两个矩阵，并返回结果：<br/>
     * t' = t1 * t2
     *
     * @method affineTransformConcat
     * @param {AffineTransform} t1 - The first transform object.
     * @param {AffineTransform} t2 - The transform object to concatenate.
     * @return {AffineTransform} The result of concatenation.
     */
    export function affineTransformConcat(t1:AffineTransform, t2:AffineTransform):AffineTransform;

    /**
     * !#en
     * Concatenate a transform matrix to another<br/>
     * The results are reflected in the first matrix.<br/>
     * t' = t1 * t2
     * !#zh
     * 拼接两个矩阵，将结果保存到第一个矩阵。<br/>
     * t' = t1 * t2
     * @method affineTransformConcatIn
     * @param {AffineTransform} t1 - The first transform object.
     * @param {AffineTransform} t2 - The transform object to concatenate.
     * @return {AffineTransform} The result of concatenation.
     */
    export function affineTransformConcatIn(t1:AffineTransform, t2:AffineTransform):AffineTransform;

    /**
     * !#en Return true if an affine transform equals to another, false otherwise.
     * !#zh 判断两个矩阵是否相等。
     * @method affineTransformEqualToTransform
     * @param {AffineTransform} t1
     * @param {AffineTransform} t2
     * @return {Boolean}
     */
    export function affineTransformEqualToTransform(t1:AffineTransform, t2:AffineTransform):boolean;


    /**
     * !#en Get the invert transform of an AffineTransform object.
     * !#zh 求逆矩阵。
     * @method affineTransformInvert
     * @param {AffineTransform} t
     * @return {AffineTransform} The inverted transform object.
     */
    export function affineTransformInvert(t:AffineTransform):AffineTransform;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCColor.js
    //+--------------------------------------------------------------------------------
    export interface HsvColor {
        h:number;
        s:number;
        v:number;
    }

    /**
     * !#en
     * Representation of RGBA colors.
     *
     * Each color component is a floating point value with a range from 0 to 255.
     *
     * You can also use the convenience method {{#crossLink "cc/color:method"}}cc.color{{/crossLink}} to create a new Color.
     *
     * !#zh
     * cc.Color 用于表示颜色。
     *
     * 它包含 RGBA 四个以浮点数保存的颜色分量，每个的值都在 0 到 255 之间。
     *
     * 您也可以通过使用 {{#crossLink "cc/color:method"}}cc.color{{/crossLink}} 的便捷方法来创建一个新的 Color。
     *
     * @class Color
     * @extends ValueType
     */
    export class Color implements ValueType<Color> {
        ////////////////////////////////////////////////////////////
        // Static Properties
        ////////////////////////////////////////////////////////////

        /**
         * !#en Solid white, RGBA is [255, 255, 255, 255].
         * !#zh 纯白色，RGBA 是 [255, 255, 255, 255]。
         * @property WHITE
         * @type {Color}
         * @static
         */
        public static WHITE:Color;

        /**
         * !#en Solid black, RGBA is [0, 0, 0, 255].
         * !#zh 纯黑色，RGBA 是 [0, 0, 0, 255]。
         * @property BLACK
         * @type {Color}
         * @static
         */
        public static BLACK:Color;

        /**
         * !#en Transparent, RGBA is [0, 0, 0, 0].
         * !#zh 透明，RGBA 是 [0, 0, 0, 0]。
         * @property TRANSPARENT
         * @type {Color}
         * @static
         */
        public static TRANSPARENT:Color;

        /**
         * !#en Grey, RGBA is [127.5, 127.5, 127.5].
         * !#zh 灰色，RGBA 是 [127.5, 127.5, 127.5]。
         * @property GRAY
         * @type {Color}
         * @static
         */
        public static GRAY:Color;

        /**
         * !#en Solid red, RGBA is [255, 0, 0].
         * !#zh 纯红色，RGBA 是 [255, 0, 0]。
         * @property RED
         * @type {Color}
         * @static
         */
        public static RED:Color;

        /**
         * !#en Solid green, RGBA is [0, 255, 0].
         * !#zh 纯绿色，RGBA 是 [0, 255, 0]。
         * @property GREEN
         * @type {Color}
         * @static
         */
        public static GREEN:Color;

        /**
         * !#en Solid blue, RGBA is [0, 0, 255].
         * !#zh 纯蓝色，RGBA 是 [0, 0, 255]。
         * @property BLUE
         * @type {Color}
         * @static
         */
        public static BLUE:Color;

        /**
         * !#en Yellow, RGBA is [255, 235, 4].
         * !#zh 黄色，RGBA 是 [255, 235, 4]。
         * @property YELLOW
         * @type {Color}
         * @static
         */
        public static YELLOW:Color;

        /**
         * !#en Orange, RGBA is [255, 127, 0].
         * !#zh 橙色，RGBA 是 [255, 127, 0]。
         * @property ORANGE
         * @type {Color}
         * @static
         */
        public static ORANGE:Color;

        /**
         * !#en Cyan, RGBA is [0, 255, 255].
         * !#zh 青色，RGBA 是 [0, 255, 255]。
         * @property CYAN
         * @type {Color}
         * @static
         */
        public static CYAN:Color;

        /**
         * !#en Magenta, RGBA is [255, 0, 255].
         * !#zh 洋红色（品红色），RGBA 是 [255, 0, 255]。
         * @property MAGENTA
         * @type {Color}
         * @static
         */
        public static MAGENTA:Color;

        ////////////////////////////////////////////////////////////
        // Instance Properties
        ////////////////////////////////////////////////////////////
        public r:number;
        public g:number;
        public b:number;
        public a:number;

        ////////////////////////////////////////////////////////////
        // Static Methods
        ////////////////////////////////////////////////////////////
        /**
         * !#en TODO
         * !#zh RGB 转换为 HSV。
         * @method rgb2hsv
         * @param {Number} r - red, must be [0, 255].
         * @param {Number} g - red, must be [0, 255].
         * @param {Number} b - red, must be [0, 255].
         * @return {Object} - {h: number, s: number, v: number}.
         * @static
         * @example
         * cc.Color.rgb2hsv(255, 255, 255); // Object {h: 0, s: 0, v: 1};
         */
        public static rgb2hsv(r:number, g:number, b:number):HsvColor;

        /**
         * !#en TODO
         * !#zh HSV 转换为 RGB。
         * @method hsv2rgb
         * @param {Number} h
         * @param {Number} s
         * @param {Number} v
         * @return {Object} - {r: number, g: number, b: number}}, rgb will be in [0, 255].
         * @static
         * @example
         * cc.Color.hsv2rgb(0, 0, 1); // Object {r: 255, g: 255, b: 255};
         */
        public static hsv2rgb(h:number, s:number, v:number):Color;

        ////////////////////////////////////////////////////////////
        // Instance Methods
        ////////////////////////////////////////////////////////////
        /**
         * @method Color
         * @param {Number} [r=0] - red component of the color, default value is 0.
         * @param {Number} [g=0] - green component of the color, defualt value is 0.
         * @param {Number} [b=0] - blue component of the color, default value is 0.
         * @param {Number} [a=255] - alpha component of the color, default value is 255.
         * @return {Color}
         */
        public constructor(r:number, g:number, b:number, a:number);

        /**
         * !#en Clone a new color from the current color.
         * !#zh 克隆当前颜色。
         * @method clone
         * @return {Color} Newly created color.
         * @example
         * var color = new cc.Color();
         * var newColor = color.clone();// Color {r: 0, g: 0, b: 0, a: 255}
         */
        public clone():Color;

        /**
         * !#en TODO
         * !#zh 判断两个颜色是否相等。
         * @method equals
         * @param {Color} other
         * @return {Boolean}
         * @example
         * var color1 = cc.Color.WHITE;
         * var color2 = new cc.Color(255, 255, 255);
         * cc.log(color1.equals(color2)); // true;
         * color2 = cc.Color.RED;
         * cc.log(color2.equals(color1)); // false;
         */
        public equals(other:Color):boolean;

        /**
         * !#en TODO
         * !#zh 线性插值
         * @method lerp
         * @param {Color} to
         * @param {number} ratio - the interpolation coefficient.
         * @param {Color} [out] - optional, the receiving vector.
         * @return {Color}
         * @example {@link utils/api/engine/docs/cocos2d/core/value-types/CCColor/lerp.js}
         */
        public lerp(to:Color, ratio:number, out?:Color):Color;

        /**
         * !#en TODO
         * !#zh 转换为方便阅读的字符串。
         * @method toString
         * @return {String}
         * @example
         * var color = cc.Color.WHITE;
         * color.toString(); // "rgba(255, 255, 255, 255)"
         */
        public toString():string;

        /**
         * !#en TODO
         * !#zh 设置当前的红色值，并返回当前对象。
         * @method setR
         * @param {Number} red - the new Red component.
         * @return {Color} this color.
         * @example
         * var color = new cc.Color();
         * color.setR(255); // Color {r: 255, g: 0, b: 0, a: 255}
         */
        public setR(red:number):Color;

        /**
         * !#en TODO
         * !#zh 设置当前的绿色值，并返回当前对象。
         * @method setG
         * @param {Number} green - the new Green component.
         * @return {Color} this color.
         * @example
         * var color = new cc.Color();
         * color.setG(255); // Color {r: 0, g: 255, b: 0, a: 255}
         */
        public setG(green:number):Color;

        /**
         * !#en TODO
         * !#zh 设置当前的蓝色值，并返回当前对象。
         * @method setB
         * @param {Number} blue - the new Blue component.
         * @return {Color} this color.
         * @example
         * var color = new cc.Color();
         * color.setB(255); // Color {r: 0, g: 0, b: 255, a: 255}
         */
        public setB(blue:number):Color;

        /**
         * !#en TODO
         * !#zh 设置当前的透明度，并返回当前对象。
         * @method setA
         * @param {Number} alpha - the new Alpha component.
         * @return {Color} this color.
         * @example
         * var color = new cc.Color();
         * color.setA(0); // Color {r: 0, g: 0, b: 0, a: 0}
         */
        public setA(alpha:number):Color;

        /**
         * !#en TODO
         * !#zh 转换为 CSS 格式。
         * @method toCSS
         * @param {String} opt - "rgba", "rgb", "#rgb" or "#rrggbb".
         * @return {String}
         * @example {@link utils/api/engine/docs/cocos2d/core/value-types/CCColor/toCSS.js}
         */
        public toCSS(opt:string):string;

        /**
         * !#en Clamp this color to make all components between 0 to 255。
         * !#zh 限制颜色数值，在 0 到 255 之间。
         * @method clamp
         * @example
         * var color = new cc.Color(1000, 0, 0, 255);
         * color.clamp();
         * cc.log(color); // (255, 0, 0, 255)
         */
        public clamp():void;

        /**
         * !#en TODO
         * !#zh 读取 16 进制。
         * @method fromHEX
         * @param {String} hexString
         * @return {Color}
         * @chainable
         * @example
         * var color = cc.Color.BLACK;
         * color.fromHEX("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
         */
        public fromHEX(hexString:string):Color;

        /**
         * !#en TODO
         * !#zh 转换为 16 进制。
         * @method toHEX
         * @param {String} fmt - "#rgb" or "#rrggbb".
         * @return {String}
         * @example
         * var color = cc.Color.BLACK;
         * color.toHEX("#rgb");     // "000";
         * color.toHEX("#rrggbb");  // "000000";
         */
        public toHEX(fmt:string):string;

        /**
         * !#en Convert to 24bit rgb value.
         * !#zh 转换为 24bit 的 RGB 值。
         * @method toRGBValue
         * @return {Number}
         * @example
         * var color = cc.Color.YELLOW;
         * color.toRGBValue(); // 16771844;
         */
        public toRGBValue():number;

        /**
         * !#en TODO
         * !#zh 读取 HSV（色彩模型）格式。
         * @method fromHSV
         * @param {Number} h
         * @param {Number} s
         * @param {Number} v
         * @return {Color}
         * @chainable
         * @example
         * var color = cc.Color.YELLOW;
         * color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
         */
        public fromHSV(h:number, s:number, v:number):Color;

        /**
         * !#en TODO
         * !#zh 转换为 HSV（色彩模型）格式。
         * @method toHSV
         * @return {Object} - {h: number, s: number, v: number}.
         * @example
         * var color = cc.Color.YELLOW;
         * color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
         */
        public toHSV():HsvColor;

    }

    /**
     * !#en
     * The convenience method to create a new {{#crossLink "Color/Color:method"}}cc.Color{{/crossLink}}
     * Alpha channel is optional. Default value is 255.
     *
     * !#zh
     * 通过该方法来创建一个新的 {{#crossLink "Color/Color:method"}}cc.Color{{/crossLink}} 对象。
     * Alpha 通道是可选的。默认值是 255。
     *
     * @method color
     * @param {Number} [r=0]
     * @param {Number} [g=0]
     * @param {Number} [b=0]
     * @param {Number} [a=255]
     * @return {Color}
     * @example {@link utils/api/engine/docs/cocos2d/core/value-types/CCColor/color.js}
     */
    export function color(r:number, g:number, b:number, a:number):Color;

    /**
     * !#en returns true if both ccColor3B are equal. Otherwise it returns false.
     * !#zh 判断两个颜色对象的 RGB 部分是否相等，不比较透明度。
     * @method colorEqual
     * @param {Color} color1
     * @param {Color} color2
     * @return {Boolean} true if both ccColor3B are equal. Otherwise it returns false.
     * @example
     * cc.log(cc.colorEqual(cc.Color.RED, new cc.Color(255, 0, 0))); // true
     */
    export function colorEqual(color1:Color, color2:Color):boolean;

    /**
     * !#en
     * convert a string of color for style to Color.
     * e.g. "#ff06ff"  to : cc.color(255,6,255)。
     * !#zh 16 进制转换为 Color
     * @method hexToColor
     * @param {String} hex
     * @return {Color}
     * @example
     * cc.hexToColor("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
     */
    export function hexToColor(hex:string):Color;

    /**
     * !#en
     * convert Color to a string of color for style.
     * e.g.  cc.color(255,6,255)  to : "#ff06ff"
     * !#zh Color 转换为 16进制。
     * @method colorToHex
     * @param {Color} color
     * @return {String}
     * @example
     * var color = new cc.Color(255, 6, 255)
     * cc.colorToHex(color); // #ff06ff;
     */
    export function colorToHex(color:Color):string;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCEnum.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en
     * Define an enum type. <br/>
     * If a enum item has a value of -1, it will be given an Integer number according to it's order in the list.<br/>
     * Otherwise it will use the value specified by user who writes the enum definition.
     *
     * !#zh
     * 定义一个枚举类型。<br/>
     * 用户可以把枚举值设为任意的整数，如果设为 -1，系统将会分配为上一个枚举值 + 1。
     *
     * @method Enum
     * @param {object} obj - a JavaScript literal object containing enum names and values
     * @return {object} the defined enum type
     * @example {@link utils/api/engine/docs/cocos2d/core/value-types/CCEnum/Enum.js}
     */
    export class Enum {
        public static isEnum(arg:any):boolean;

        public constructor();

        /**
         * TODO: Need to define an interface for the return type
         * @method getList
         * @param {Object} enumDef - the enum type defined from cc.Enum
         * @return {Object[]}
         * @private
         */
        public getList(enumDef:Enum):{}[];
    }



    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCPointExtension.js
    //+--------------------------------------------------------------------------------
    /**
     * <p>cc.Vec2 extensions based on Chipmunk's cpVect file.<br />
     * These extensions work both with cc.Vec2</p>
     *
     * <p>The "ccp" prefix means: "CoCos2d Point"</p>
     */

    /*
    * !#en smallest such that 1.0+FLT_EPSILON != 1.0.
    * !#zh 它是满足 1.0+FLT_EPSILON != 1.0 的最小的正数。
    * @property POINT_EPSILON
    * @type {Number}
    * @static
    */
    export const POINT_EPSILON:number;

    /**
     * !#en Returns opposite of Vec2.
     * !#zh 返回相反的向量。
     * @method pNeg
     * @param {Vec2} point
     * @return {Vec2}
     * @example
     * cc.pNeg(cc.v2(10, 10));// Vec2 {x: -10, y: -10};
     */
    export function pNeg(point:Vec2):Vec2;

    /**
     * !#en Calculates sum of two points.
     * !#zh 返回两个向量的和。
     * @method pAdd
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Vec2}
     * @example
     * cc.pAdd(cc.v2(1, 1), cc.v2(2, 2));// Vec2 {x: 3, y: 3};
     */
    export function pAdd(v1:Vec2, v2:Vec2):Vec2;

    /**
     * !#en Calculates difference of two points.
     * !#zh 返回两个向量的差。
     * @method pSub
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Vec2}
     * @example
     * cc.pSub(cc.v2(20, 20), cc.v2(5, 5)); // Vec2 {x: 15, y: 15};
     */
    export function pSub(v1:Vec2, v2:Vec2):Vec2;

    /**
     * !#en Returns point multiplied by given factor.
     * !#zh 向量缩放。
     * @method pMult
     * @param {Vec2} point
     * @param {Number} floatVar
     * @return {Vec2}
     * @example
     * cc.pMult(cc.v2(5, 5), 4); // Vec2 {x: 20, y: 20};
     */
    export function pMult(point:Vec2, floatVar:number):Vec2;

    /**
     * !#en Calculates midpoint between two points.
     * !#zh 两个向量之间的中心点。
     * @method pMidpoint
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Vec2}
     * @example
     * cc.pMidpoint(cc.v2(10, 10), cc.v2(5, 5)); // Vec2 {x: 7.5, y: 7.5};
     */
    export function pMidpoint(v1:Vec2, v2:Vec2):Vec2;

    /**
     * !#en Calculates dot product of two points.
     * !#zh 两个向量之间进行点乘。
     * @method pDot
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Number}
     * @example
     * cc.pDot(cc.v2(20, 20), cc.v2(5, 5)); // 200;
     */
    export function pDot(v1:Vec2, v2:Vec2):number;

    /**
     * !#en Calculates cross product of two points.
     * !#zh 两个向量之间进行叉乘。
     * @method pCross
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Number}
     * @example
     * cc.pCross(cc.v2(20, 20), cc.v2(5, 5)); // 0;
     */
    export function pCross(v1:Vec2, v2:Vec2):number;

    /**
     * !#en Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) greater than 0.
     * !#zh 返回逆时针旋转 90 度后的新向量。
     * @method pPerp
     * @param {Vec2} point
     * @return {Vec2}
     * @example
     * cc.pPerp(cc.v2(20, 20)); // Vec2 {x: -20, y: 20};
     */
    export function pPerp(point:Vec2):Vec2;

    /**
     * !#en Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) smaller than 0.
     * !#zh 将指定向量顺时针旋转 90 度并返回。
     * @method pRPerp
     * @param {Vec2} point
     * @return {Vec2}
     * @example
     * cc.pRPerp(cc.v2(20, 20)); // Vec2 {x: 20, y: -20};
     */
    export function pRPerp(point:Vec2):Vec2;

    /**
     * !#en Calculates the projection of v1 over v2.
     * !#zh 返回 v1 在 v2 上的投影向量。
     * @method pProject
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Vec2}
     * @example
     * var v1 = cc.v2(20, 20);
     * var v2 = cc.v2(5, 5);
     * cc.pProject(v1, v2); // Vec2 {x: 20, y: 20};
     */
    export function pProject(v1:Vec2, v2:Vec2):Vec2;

    /**
     * !#en Calculates the square length of a cc.Vec2 (not calling sqrt() ).
     * !#zh 返回指定向量长度的平方。
     * @method pLengthSQ
     * @param  {Vec2} v
     * @return {Number}
     * @example
     * cc.pLengthSQ(cc.v2(20, 20)); // 800;
     */
    export function pLengthSQ(v:Vec2):number;

    /**
     * !#en Calculates the square distance between two points (not calling sqrt() ).
     * !#zh 返回两个点之间距离的平方。
     * @method pDistanceSQ
     * @param {Vec2} point1
     * @param {Vec2} point2
     * @return {Number}
     * @example
     * var point1 = cc.v2(20, 20);
     * var point2 = cc.v2(5, 5);
     * cc.pDistanceSQ(point1, point2); // 450;
     */
    export function pDistanceSQ(point1:Vec2, point2:Vec2):number;

    /**
     * !#en Calculates distance between point an origin.
     * !#zh 返回指定向量的长度.
     * @method pLength
     * @param  {Vec2} v
     * @return {Number}
     * @example
     * cc.pLength(cc.v2(20, 20)); // 28.284271247461902;
     */
    export function pLength(v:Vec2):number;

    /**
     * !#en Calculates the distance between two points.
     * !#zh 返回指定 2 个向量之间的距离。
     * @method pDistance
     * @param {Vec2} v1
     * @param {Vec2} v2
     * @return {Number}
     * @example
     * var v1 = cc.v2(20, 20);
     * var v2 = cc.v2(5, 5);
     * cc.pDistance(v1, v2); // 21.213203435596427;
     */
    export function pDistance(v1:Vec2, v2:Vec2):number;

    /**
     * !#en Returns this vector with a magnitude of 1.
     * !#zh 返回一个长度为 1 的标准化过后的向量。
     * @method pNormalize
     * @param {Vec2} v
     * @return {Vec2}
     * @example
     * cc.pNormalize(cc.v2(20, 20)); // Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
     */
    export function pNormalize(v:Vec2):Vec2;

    /**
     * !#en Converts radians to a normalized vector.
     * !#zh 将弧度转换为一个标准化后的向量，返回坐标 x = cos(a) , y = sin(a)。
     * @method pForAngle
     * @param {Number} a
     * @return {Vec2}
     * @example
     * cc.pForAngle(20); // Vec2 {x: 0.40808206181339196, y: 0.9129452507276277};
     */
    export function pForAngle(a:number):Vec2;

    /**
     * !#en Converts a vector to radians.
     * !#zh 返回指定向量的弧度。
     * @method pToAngle
     * @param {Vec2} v
     * @return {Number}
     * @example
     * cc.pToAngle(cc.v2(20, 20)); // 0.7853981633974483;
     */
    export function pToAngle(v:Vec2):number;

    /**
     * !#en Clamp a value between from and to.
     * !#zh
     * 限定浮点数的最大最小值。<br/>
     * 数值大于 max_inclusive 则返回 max_inclusive。<br/>
     * 数值小于 min_inclusive 则返回 min_inclusive。<br/>
     * 否则返回自身。
     * @method clampf
     * @param {Number} value
     * @param {Number} min_inclusive
     * @param {Number} max_inclusive
     * @return {Number}
     * @example
     * var v1 = cc.clampf(20, 0, 20); // 20;
     * var v2 = cc.clampf(-1, 0, 20); //  0;
     * var v3 = cc.clampf(10, 0, 20); // 10;
     */
    export function clampf(value:number, min_inclusive:number, max_inclusive:number):number;

    /**
     * !#en Clamp a value between 0 and 1.
     * !#zh 限定浮点数的取值范围为 0 ~ 1 之间。
     * @method clamp01
     * @param {Number} value
     * @return {Number}
     * @example
     * var v1 = cc.clampf(20);  // 1;
     * var v2 = cc.clampf(-1);  // 0;
     * var v3 = cc.clampf(0.5); // 0.5;
     */
    export function clamp01(value:number):number;

    /**
     * !#en Clamp a point between from and to.
     * !#zh
     * 返回指定限制区域后的向量。<br/>
     * 向量大于 max_inclusive 则返回 max_inclusive。<br/>
     * 向量小于 min_inclusive 则返回 min_inclusive。<br/>
     * 否则返回自身。
     * @method pClamp
     * @param {Vec2} p
     * @param {Vec2} min_inclusive
     * @param {Vec2} max_inclusive
     * @return {Vec2}
     * @example
     * var min_inclusive = cc.v2(0, 0);
     * var max_inclusive = cc.v2(20, 20);
     * var v1 = cc.pClamp(cc.v2(20, 20), min_inclusive, max_inclusive); // Vec2 {x: 20, y: 20};
     * var v2 = cc.pClamp(cc.v2(0, 0), min_inclusive, max_inclusive);   // Vec2 {x: 0, y: 0};
     * var v3 = cc.pClamp(cc.v2(10, 10), min_inclusive, max_inclusive); // Vec2 {x: 10, y: 10};
     */
    export function pClamp(p:Vec2, min_inclusive:Vec2, max_inclusive:Vec2):Vec2;

    /**
     * !#en Quickly convert cc.Size to a cc.Vec2.
     * !#zh 快速转换 cc.Size 为 cc.Vec2。
     * @method pFromSize
     * @param {Size} s
     * @return {Vec2}
     * @example
     * cc.pFromSize(new cc.size(20, 20)); // Vec2 {x: 20, y: 20};
     */
    export function pFromSize(s:Size):Vec2;

    /**
     * !#en
     * Run a math operation function on each point component <br />
     * Math.abs, Math.fllor, Math.ceil, Math.round.
     * !#zh 通过运行指定的数学运算函数来计算指定的向量。
     * @method pCompOp
     * @param {Vec2} p
     * @param {Function} opFunc
     * @return {Vec2}
     * @example
     * cc.pCompOp(cc.p(-10, -10), Math.abs); // Vec2 {x: 10, y: 10};
     */
    export function pCompOp(p:Vec2, opFunc:function):Vec2;

    /**
     * !#en
     * Linear Interpolation between two points a and b.<br />
     * alpha == 0 ? a <br />
     * alpha == 1 ? b <br />
     * otherwise a value between a..b.
     * !#zh
     * 两个点 A 和 B 之间的线性插值。 <br />
     * alpha == 0 ? a <br />
     * alpha == 1 ? b <br />
     * 否则这个数值在 a ~ b 之间。
     * @method pLerp
     * @param {Vec2} a
     * @param {Vec2} b
     * @param {Number} alpha
     * @return {Vec2}
     * @example
     * cc.pLerp(cc.v2(20, 20), cc.v2(5, 5), 0.5); // Vec2 {x: 12.5, y: 12.5};
     */
    export function pLerp(a:Vec2, b:Vec2, alpha:number):Vec2;

    /**
     * !#en TODO
     * !#zh
     * 近似判断两个点是否相等。<br/>
     * 判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。
     * @method pFuzzyEqual
     * @param {Vec2} a
     * @param {Vec2} b
     * @param {Number} variance
     * @return {Boolean} if points have fuzzy equality which means equal with some degree of variance.
     * @example
     * var a = cc.v2(20, 20);
     * var b = cc.v2(5, 5);
     * var b1 = cc.pFuzzyEqual(a, b, 10); // false;
     * var b2 = cc.pFuzzyEqual(a, b, 18); // true;
     */
    export function pFuzzyEqual(a:Vec2, b:Vec2, variance:number):boolean;

    /**
     * !#en Multiplies a nd b components, a.x*b.x, a.y*b.y.
     * !#zh 计算两个向量的每个分量的乘积， a.x * b.x, a.y * b.y。
     * @method pCompMult
     * @param {Vec2} a
     * @param {Vec2} b
     * @return {Vec2}
     * @example
     * cc.pCompMult(acc.v2(20, 20), cc.v2(5, 5)); // Vec2 {x: 100, y: 100};
     */
    export function pCompMult(a:Vec2, b:Vec2):Vec2;

    /**
     * !#en TODO
     * !#zh 返回两个向量之间带正负号的弧度。
     * @method pAngleSigned
     * @param {Vec2} a
     * @param {Vec2} b
     * @return {Number} the signed angle in radians between two vector directions
     */
    export function pAngleSigned(a:Vec2, b:Vec2):number;

    /**
     * !#en TODO
     * !#zh 获取当前向量与指定向量之间的弧度角。
     * @method pAngle
     * @param {Vec2} a
     * @param {Vec2} b
     * @return {Number} the angle in radians between two vector directions
     */
    export function pAngle(a:Vec2, b:Vec2):number;

    /**
     * !#en Rotates a point counter clockwise by the angle around a pivot.
     * !#zh 返回给定向量围绕指定轴心顺时针旋转一定弧度后的结果。
     * @method pRotateByAngle
     * @param {Vec2} v - v is the point to rotate
     * @param {Vec2} pivot - pivot is the pivot, naturally
     * @param {Number} angle - angle is the angle of rotation cw in radians
     * @return {Vec2} the rotated point
     */
    export function pRotateByAngle(v:Vec2, pivot:Vec2, angle:number):Vec2;

    /**
     * !#en
     * A general line-line intersection test
     * indicating successful intersection of a line<br />
     * note that to truly test intersection for segments we have to make<br />
     * sure that s & t lie within [0..1] and for rays, make sure s & t > 0<br />
     * the hit point is        p3 + t * (p4 - p3);<br />
     * the hit point also is    p1 + s * (p2 - p1);
     * !#zh
     * 返回 A 为起点 B 为终点线段 1 所在直线和 C 为起点 D 为终点线段 2 所在的直线是否相交，<br />
     * 如果相交返回 true，反之则为 false，参数 retP 是返回交点在线段 1、线段 2 上的比例。
     * @method pLineIntersect
     * @param {Vec2} A - A is the startpoint for the first line P1 = (p1 - p2).
     * @param {Vec2} B - B is the endpoint for the first line P1 = (p1 - p2).
     * @param {Vec2} C - C is the startpoint for the second line P2 = (p3 - p4).
     * @param {Vec2} D - D is the endpoint for the second line P2 = (p3 - p4).
     * @param {Vec2} retP - retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), <br />
     * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
     * @return {Boolean}
     */
    export function pLineIntersect(A:Vec2, B:Vec2, C:Vec2, D:Vec2, retP:Vec2):boolean;

    /**
     * !#en ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
     * !#zh 返回线段 A - B 和线段 C - D 是否相交。
     * @method pSegmentIntersect
     * @param {Vec2} A
     * @param {Vec2} B
     * @param {Vec2} C
     * @param {Vec2} D
     * @return {Boolean}
     */
    export function pSegmentIntersect(A:Vec2, B:Vec2, C:Vec2, D:Vec2):boolean;

    /**
     * !#en ccpIntersectPoint return the intersection point of line A-B, C-D.
     * !#zh 返回线段 A - B 和线段 C - D 的交点。
     * @method pIntersectPoint
     * @param {Vec2} A
     * @param {Vec2} B
     * @param {Vec2} C
     * @param {Vec2} D
     * @return {Vec2}
     */
    export function pIntersectPoint(A:Vec2, B:Vec2, C:Vec2, D:Vec2):Vec2;

    /**
     * !#en check to see if both points are equal.
     * !#zh 检查指定的 2 个向量是否相等。
     * @method pSameAs
     * @param {Vec2} A - A ccp a
     * @param {Vec2} B - B ccp b to be compared
     * @return {Boolean} the true if both ccp are same
     */
    export function pSameAs(A:Vec2, B:Vec2):boolean;

    // High Perfomance In Place Operationrs ---------------------------------------

    /**
     * !#en sets the position of the point to 0.
     * !#zh 设置指定向量归 0。
     * @method pZeroIn
     * @param {Vec2} v
     */
    export function pZeroIn(v:Vec2):void;

    /**
     * !#en copies the position of one point to another.
     * !#zh 令 v1 向量等同于 v2。
     * @method pIn
     * @param {Vec2} v1
     * @param {Vec2} v2
     */
    export function pIn(v1:Vec2, v2:Vec2):void;

    /**
     * !#en multiplies the point with the given factor (inplace).
     * !#zh 向量缩放，结果保存到第一个向量。
     * @method pMultIn
     * @param {Vec2} point
     * @param {Number} floatVar
     */
    export function pMultIn(point:Vec2, floatVar:number):void;

    /**
     * !#en subtracts one point from another (inplace).
     * !#zh 向量减法，结果保存到第一个向量。
     * @method pSubIn
     * @param {Vec2} v1
     * @param {Vec2} v2
     */
    export function pSubIn(v1:Vec2, v2:Vec2):void;

    /**
     * !#en adds one point to another (inplace).
     * !#zh 向量加法，结果保存到第一个向量。
     * @method pAddIn
     * @param {Vec2} v1
     * @param {Vec2} v2
     */
    export function pAddIn(v1:Vec2, v2:Vec2):void;

    /**
     * !#en normalizes the point (inplace).
     * !#zh 规范化 v 向量，设置 v 向量长度为 1。
     * @method pNormalizeIn
     * @param {Vec2} v
     */
    export function pNormalizeIn(v:Vec2):void;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCRect.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en A 2D rectangle defined by x, y position and width, height.
     * !#zh 通过位置和宽高定义的 2D 矩形。
     * @class Rect
     * @extends ValueType
     */
    export class Rect implements ValueType<Rect> {
        /**
         * !#en TODO
         * !#zh 矩形 x 轴上的最小值。
         * @property xMin
         * @type {Number}
         */
        public xMin:number;

        /**
         * !#en TODO
         * !#zh 矩形 y 轴上的最小值。
         * @property yMin
         * @type {Number}
         */
        public yMin:number;

        /**
         * !#en TODO
         * !#zh 矩形 x 轴上的最大值。
         * @property xMax
         * @type {Number}
         */
        public xMax:number;

        /**
         * !#en TODO
         * !#zh 矩形 y 轴上的最大值。
         * @property yMax
         * @type {Number}
         */
        public yMax:number;

        /**
         * !#en TODO
         * !#zh 矩形的中心点。
         * @property center
         * @type {Vec2}
         */
        public center:Vec2;

        /**
         * !#en TODO
         * !#zh 矩形的大小。
         * @property {Size} size
         */
        public size:Size;

        /**
         * !#en
         * Constructor of cc.Rect class.
         * see {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} for convenience method.
         * !#zh
         * cc.Rect类的构造函数。可以通过 {{#crossLink "cc/rect:method"}} cc.rect {{/crossLink}} 简便方法进行创建。
         *
         * @method Rect
         * @param {Number} [x=0]
         * @param {Number} [y=0]
         * @param {Number} [w=0]
         * @param {Number} [h=0]
         * @return {Rect}
         */
        public constructor(x:number, y:number, w:number, h:number);

        /**
         * !#en Creates a rectangle from two coordinate values.
         * !#zh 根据指定 2 个坐标创建出一个矩形区域。
         * @static
         * @method fromMinMax
         * @param {Vec2} v1
         * @param {Vec2} v2
         * @return {Rect}
         * @example
         * cc.Rect.fromMinMax(cc.v2(10, 10), cc.v2(20, 20)); // Rect {x: 10, y: 10, width: 10, height: 10};
         */
        public fromMinMax(v1:Vec2, v2:Vec2):Rect;

        /**
         * !#en Checks if rect contains.
         * !#zh
         * 判断 2 个矩形是否有包含。<br/>
         * 返回 1 为 a 包含 b，如果 -1 为 b 包含 a,
         * 0 这则都不包含。
         * @static
         * @method contain
         * @param a {Rect} Rect a
         * @param b {Rect} Rect b
         * @return {Number} The contains result, 1 is a contains b, -1 is b contains a, 0 is no contains.
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * var b = new cc.rect(5, 5, 5, 5);
         * var c = new cc.rect(20, 20, 10, 10);
         * cc.Rect.contain(a, b); //  1;
         * cc.Rect.contain(b, a); // -1;
         * cc.Rect.contain(a, c); //  0;
         */
        public contain(a:Rect, b:Rect):number;

        /**
         * !#en TODO
         * !#zh 克隆一个新的 Rect。
         * @method clone
         * @return {Rect}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * a.clone();// Rect {x: 0, y: 0, width: 10, height: 10}
         */
        public clone():Rect;

        /**
         * !#en TODO
         * !#zh 是否等于指定的矩形。
         * @method equals
         * @param {Rect} other
         * @return {Boolean}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * var b = new cc.rect(0, 0, 10, 10);
         * a.equals(b);// true;
         */
        public equals(other:Rect):boolean;

        /**
         * !#en TODO
         * !#zh 线性插值
         * @method lerp
         * @param {Rect} to
         * @param {Number} ratio - the interpolation coefficient.
         * @param {Rect} [out] - optional, the receiving vector.
         * @return {Rect}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * var b = new cc.rect(50, 50, 100, 100);
         * update (dt) {
         *    // method 1;
         *    var c = a.lerp(b, dt * 0.1);
         *    // method 2;
         *    a.lerp(b, dt * 0.1, c);
         * }
         */
        public lerp(to:Rect, ratio:number, out?:Rect):Rect;

        /**
         * !#en TODO
         * !#zh 转换为方便阅读的字符串
         * @method toString
         * @return {String}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * a.toString();// "(0.00, 0.00, 10.00, 10.00)";
         */
        public toString():string;

        /**
         * !#en TODO
         * !#zh 当前矩形与指定矩形是否相交。
         * @method intersects
         * @param {Rect} rect
         * @type {Boolean}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * var b = new cc.rect(0, 0, 20, 20);
         * a.intersects(b);// true
         */
        public intersects(rect:Rect):boolean;

        /**
         * !#en TODO
         * !#zh 当前矩形是否包含指定坐标点。
         * Returns true if the point inside this rectangle.
         * @method contains
         * @param {Vec2} point
         * @type {Boolean}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * var b = new cc.v2(0, 5);
         * a.contains(b);// true
         */
        public contains(point:Vec2):boolean;

        /**
         * !#en Returns true if the other rect totally inside this rectangle.
         * !#zh 当前矩形是否包含指定矩形。
         * @method containsRect
         * @param {Rect} rect
         * @type {Boolean}
         * @example
         * var a = new cc.rect(0, 0, 10, 10);
         * var b = new cc.rect(0, 0, 20, 20);
         * a.containsRect(b);// true
         */
        public containsRect(rect:Rect):boolean;
    }

    /**
     * !#en
     * The convenience method to create a new Rect.
     * see {{#crossLink "Rect/Rect:method"}}cc.Rect{{/crossLink}}
     * !#zh
     * 该方法用来快速创建一个新的矩形。{{#crossLink "Rect/Rect:method"}}cc.Rect{{/crossLink}}
     * @method rect
     * @param {Number[]|Number} [x=0]
     * @param {Number} [y=0]
     * @param {Number} [w=0]
     * @param {Number} [h=0]
     * @return {Rect}
     * @example
     * var a = new cc.rect(0 , 0, 10, 0);
     */
    export function rect(x:number, y:number, w:number, h:number):Rect;


    // Functional style API, for backward compatibility

    /**
     * !#en Check whether a rect's value equals to another.
     * !#zh 判断两个矩形是否相等。
     * @method rectEqualToRect
     * @param {Rect} rect1
     * @param {Rect} rect2
     * @return {Boolean}
     * @example
     * var a = new cc.rect(0, 0, 10, 10);
     * var b = new cc.rect(0, 0, 5, 5);
     * cc.rectEqualToRect(a, b); // false;
     * var c = new cc.rect(0, 0, 5, 5);
     * cc.rectEqualToRect(b, c); // true;
     */
    export function rectEqualToRect(rect1:Rect, rect2:Rect):boolean;

    /**
     * !#en Check whether the rect1 contains rect2.
     * !#zh
     * 检查 rect1 矩形是否包含 rect2 矩形。 <br/>
     * 注意：如果要允许 rect1 和 rect2 的边界重合，应该用 cc.rectOverlapsRect
     * @method rectContainsRect
     * @param {Rect} rect1
     * @param {Rect} rect2
     * @return {Boolean}
     * @example
     * var a = new cc.rect(0, 0, 20, 20);
     * var b = new cc.rect(10, 10, 20, 20);
     * cc.rectContainsRect(a, b); // true;
     */
    export function rectContainsRect(rect1:Rect, rect2:Rect):boolean;

    /**
     * !#en Returns the rightmost x-value of a rect.
     * !#zh 返回矩形在 x 轴上的最大值
     * @method rectGetMaxX
     * @param {Rect} rect
     * @return {Number} The rightmost x value.
     * @example
     * var a = new cc.rect(10, 0, 20, 20);
     * cc.rectGetMaxX(a); // 30;
     */
    export function rectGetMaxX(rect:Rect):number;

    /**
     * !#en Return the midpoint x-value of a rect.
     * !#zh 返回矩形在 x 轴上的中点。
     * @method rectGetMidX
     * @param {Rect} rect
     * @return {Number} The midpoint x value.
     * @example
     * var a = new cc.rect(10, 0, 20, 20);
     * cc.rectGetMidX(a); // 20;
     */
    export function rectGetMidX(rect:Rect):number;

    /**
     * !#en Returns the leftmost x-value of a rect.
     * !#zh 返回矩形在 x 轴上的最小值。
     * @method rectGetMinX
     * @param {Rect} rect
     * @return {Number} The leftmost x value.
     * @example
     * var a = new cc.rect(10, 0, 20, 20);
     * cc.rectGetMinX(a); // 10;
     */
    export function rectGetMinX(rect:Rect):number;

    /**
     * !#en Return the topmost y-value of a rect.
     * !#zh 返回矩形在 y 轴上的最大值。
     * @method rectGetMaxY
     * @param {Rect} rect
     * @return {Number} The topmost y value.
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * cc.rectGetMaxY(a); // 30;
     */
    export function rectGetMaxY(rect:Rect):number;

    /**
     * !#en Return the midpoint y-value of `rect'.
     * !#zh 返回矩形在 y 轴上的中点。
     * @method rectGetMidY
     * @param {Rect} rect
     * @return {Number} The midpoint y value.
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * cc.rectGetMidY(a); // 20;
     */
    export function rectGetMidY(rect:Rect):number;

    /**
     * !#en Return the bottommost y-value of a rect.
     * !#zh 返回矩形在 y 轴上的最小值。
     * @method rectGetMinY
     * @param {Rect} rect
     * @return {Number} The bottommost y value.
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * cc.rectGetMinY(a); // 10;
     */
    export function rectGetMinY(rect:Rect):number;

    /**
     * !#en Check whether a rect contains a point.
     * !#zh 检查一个矩形是否包含某个坐标点。
     * @method rectContainsPoint
     * @param {Rect} rect
     * @param {Vec2} point
     * @return {Boolean}
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * var b = cc.v2(0, 10, 10, 10);
     * cc.rectContainsPoint(a, b); // true;
     */
    export function rectContainsPoint(rect:Rect, point:Vec2):boolean;

    /**
     * !#en Check whether a rect intersect with another.
     * !#zh 检查一个矩形是否与另一个相交。
     * @method rectIntersectsRect
     * @param {Rect} rectA
     * @param {Rect} rectB
     * @return {Boolean}
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * var b = new cc.rect(0, 10, 10, 10);
     * cc.rectIntersectsRect(a, b); // true;
     */
    export function rectIntersectsRect(ra:Rect, rb:Rect):boolean;

    /**
     * !#en Check whether a rect overlaps another.
     * !#zh 检查一个矩形是否重叠另一个。
     * @method rectOverlapsRect
     * @param {Rect} rectA
     * @param {Rect} rectB
     * @return {Boolean}
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * var b = new cc.rect(0, 10, 10, 10);
     * cc.rectOverlapsRect(a, b); // true;
     */
    export function rectOverlapsRect(rectA:Rect, rectB:Rect):boolean;

    /**
     * !#en Returns the smallest rectangle that contains the two source rectangles.
     * !#zh 返回一个包含两个指定矩形的最小矩形。
     * @method rectUnion
     * @param {Rect} rectA
     * @param {Rect} rectB
     * @return {Rect}
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * var b = new cc.rect(0, 10, 10, 10);
     * cc.rectUnion(a, b); // Rect {x: 0, y: 10, width: 20, height: 20};
     */
    export function rectUnion(rectA:Rect, rectB:Rect):Rect;

    /**
     * !#en Returns the overlapping portion of 2 rectangles.
     * !#zh 返回 2 个矩形重叠的部分。
     * @method rectIntersection
     * @param {Rect} rectA
     * @param {Rect} rectB
     * @return {Rect}
     * @example
     * var a = new cc.rect(0, 10, 20, 20);
     * var b = new cc.rect(0, 10, 10, 10);
     * cc.rectIntersection(a, b); // Rect {x: 0, y: 10, width: 10, height: 10};
     */
    export function rectIntersection(rectA:Rect, rectB:Rect):Rect;


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCRect.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en
     * cc.Size is the class for size object,<br/>
     * please do not use its constructor to create sizes,<br/>
     * use {{#crossLink "cc/size:method"}}{{/crossLink}} alias function instead.<br/>
     * It will be deprecated soon, please use cc.Vec2 instead.
     *
     * !#zh
     * cc.Size 是 size 对象的类。<br/>
     * 请不要使用它的构造函数创建的 size，<br/>
     * 使用 {{#crossLink "cc/size:method"}}{{/crossLink}} 别名函数。<br/>
     * 它不久将被取消，请使用cc.Vec2代替。
     *
     * @class Size
     */
    export class Size {
        public const ZERO:Size;

        /**
         * @method Size
         * @param {Number} width
         * @param {Number} height
         * @return {Size}
         */
        public constructor(width:number, height:number);


        /**
         * !#en TODO
         * !#zh 克隆 size 对象。
         * @method clone
         * @return {Size}
         * @example
         * var a = new cc.size(10, 10);
         * a.clone();// return Size {width: 0, height: 0};
         */
        public clone():Size;

        /**
         * !#en TODO
         * !#zh 当前 Size 对象是否等于指定 Size 对象。
         * @method equals
         * @param {Size} other
         * @return {Boolean}
         * @example
         * var a = new cc.size(10, 10);
         * a.equals(new cc.size(10, 10));// return true;
         */
        public equals(other:Size):boolean;

        /**
         * !#en TODO
         * !#zh 线性插值。
         * @method lerp
         * @param {Rect} to
         * @param {Number} ratio - the interpolation coefficient.
         * @param {Size} [out] - optional, the receiving vector.
         * @return {Size}
         * @example
         * var a = new cc.size(10, 10);
         * var b = new cc.rect(50, 50, 100, 100);
         * update (dt) {
         *    // method 1;
         *    var c = a.lerp(b, dt * 0.1);
         *    // method 2;
         *    a.lerp(b, dt * 0.1, c);
         * }
         */
//        public lerp(to:Size|Rect, ratio:number, out?:Size):Size;
        public lerp(to:Size, ratio:number, out?:Size):Size;

        /**
         * !#en TODO
         * !#zh 转换为方便阅读的字符串。
         * @method toString
         * @return {String}
         * @example
         * var a = new cc.size(10, 10);
         * a.toString();// return "(10.00, 10.00)";
         */
        public toString():string;
    }

    /**
     * !#en
     * Helper function that creates a cc.Size.<br/>
     * Please use cc.p or cc.v2 instead, it will soon replace cc.Size.
     * !#zh
     * 创建一个 cc.Size 对象的帮助函数。<br/>
     * 注意：可以使用 cc.p 或者是 cc.v2 代替，它们将很快取代 cc.Size。
     * @method size
     * @param {Number|Size} w - width or a size object
     * @param {Number} h - height
     * @return {Size}
     * @example {@link utils/api/engine/docs/cocos2d/core/value-types/CCSize/size.js}
     */
    export function size(w:number, h:number):Size;

    /**
     * !#en Check whether a point's value equals to another.
     * !#zh 检查 Size 对象是否等于另一个。
     * @method sizeEqualToSize
     * @param {Size} size1
     * @param {Size} size2
     * @return {Boolean}
     * @example
     * var a = new cc.size(10, 10);
     * var b = new cc.size(10, 10);
     * cc.sizeEqualToSize(a, b);// return true;
     * var b = new cc.size(5, 10);
     * cc.sizeEqualToSize(a, b);// return false;
     */
    export function sizeEqualToSize(size1:Size, size2:Size):boolean;

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCTypes.js
    //+--------------------------------------------------------------------------------
    /**
     * !#en the device accelerometer reports values for each axis in units of g-force.
     * !#zh 设备重力传感器传递的各个轴的数据。
     * @class Acceleration
     * @constructor
     */
    export class Acceleration {
        public x:number;
        public y:number;
        public z:number;
        public timestamp:number;

        /**
         * @method Acceleration 
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         * @param {Number} timestamp
         * @return {Acceleration}
         */
        public constructor(x:number, y:number, z:number, timestamp:number);
    }

    /**
     * !#en Blend Function used for textures.
     * !#zh 图像的混合方式。
     * @class BlendFunc
     * @Constructor
     */
    export class BlendFunc {
        public const DISABLE:BlendFunc;
        public const ALPHA_PREMULTIPLIED:BlendFunc;
        public const ALPHA_NON_PREMULTIPLIED:BlendFunc;
        public const ADDITIVE:BlendFunc;

        public src:number;
        public dst:number;

        /**
         * @method BlendFunc 
         * @param {Number} src source blend function
         * @param {Number} dst destination blend function
         * @return {BlendFunc}
         */
        public constructor(src:number, dst:number);
    }

    /**
     * This is really an inner class of BlendFunc, this is how to define one in TypeScript;
     */
    module BlendFunc {

        /**
         * !#en
         * Enum for blend factor
         * Refer to: http://www.andersriggelsen.dk/glblendfunc.php
         * !#zh
         * 混合因子
         * 可参考: http://www.andersriggelsen.dk/glblendfunc.php
         * @enum BlendFactor
         */
        export class BlendFactor extends Enum {
            /**
             * !#en All use
             * !#zh 全部使用
             * @property {Number} ONE
             */
            public const ONE:number;

            /**
             * !#en Not all
             * !#zh 全部不用
             * @property {Number} ZERO
             */
            public const ZERO:number;

            /**
             * !#en Using the source alpha
             * !#zh 使用源颜色的透明度
             * @property {Number} SRC_ALPHA
             */
            public const SRC_ALPHA:number;

            /**
             * !#en Using the source color
             * !#zh 使用源颜色
             * @property {Number} SRC_COLOR
             */
            public const SRC_COLOR:number;

            /**
             * !#en Using the target alpha
             * !#zh 使用目标颜色的透明度
             * @property {Number} DST_ALPHA
             */
            public const DST_ALPHA:number;

            /**
             * !#en Using the target color
             * !#zh 使用目标颜色
             * @property {Number} DST_COLOR
             */
            public const DST_COLOR:number;

            /**
             * !#en Minus the source alpha
             * !#zh 减去源颜色的透明度
             * @property {Number} ONE_MINUS_SRC_ALPHA
             */
            public const ONE_MINUS_SRC_ALPHA:number;

            /**
             * !#en Minus the source color
             * !#zh 减去源颜色
             * @property {Number} ONE_MINUS_SRC_COLOR
             */
            public const ONE_MINUS_SRC_COLOR:number;

            /**
             * !#en Minus the target alpha
             * !#zh 减去目标颜色的透明度
             * @property {Number} ONE_MINUS_DST_ALPHA
             */
            public const ONE_MINUS_DST_ALPHA:number;

            /**
             * !#en Minus the target color
             * !#zh 减去目标颜色
             * @property {Number} ONE_MINUS_DST_COLOR
             */
            public const ONE_MINUS_DST_COLOR:number;
        }
    }

    /*
    * !#en
    * Common usage:</br>
    *
    * var fontDef = new cc.FontDefinition();</br>
    * fontDef.fontName = "Arial";</br>
    * fontDef.fontSize = 12;</br>
    * ...</br>
    *
    * OR using inline definition usefull for constructor injection</br>
    *
    * var fontDef = new cc.FontDefinition({ </br>
    *  fontName: "Arial", </br>
    *  fontSize: 12 </br>
    * });</br>
    *
    * !#zh
    * 常见用法：</br>
    * var fontDef = new cc.FontDefinition();</br>
    * fontDef.fontName = "Arial"; </br>
    * fontDef.fontSize = 12; </br>
    * ... </br>
    *
    * 或使用定义构造函数：</br>
    *
    * var fontDef = new cc.FontDefinition({ </br>
    *  fontName: "Arial", </br>
    *  fontSize: 12 </br>
    * });
    *
    * @class FontDefinition
    * @constructor
    */
    export class FontDefinition {
        /*
        * TODO: Create some type of interface for the properties argument.
        * !#en TODO
        * !#zh 定义字体基本属性的结构体。
        * @method FontDefinition
        * @param {Object} properties - (OPTIONAL) Allow inline FontDefinition
        * @return {FontDefinition}
        */
        public constructor (properties?:any);
    }

    export class TextAlignment extends Enum {
        public const LEFT:number;
        public const CENTER:number;
        public const RIGHT:number;
    }

    export class VerticalTextAlignment extends Enum {
        public const TOP:number;
        public const CENTER:number;
        public const BOTTOM:number;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCTypesWebGL.js
    //  TODO: These definitions are probably off, so come back later and make sure they're propertly done.
    //+--------------------------------------------------------------------------------
    // define some types with ArrayBuffer for WebGL
    /**
     * @class WebGLColor
     * @constructor
     */
    export class WebGLColor {
        public const BYTES_PER_ELEMENT:number;
        public r:number;
        public g:number;
        public b:number;
        public a:number;

        /**
         * @method WebGLColor
         * @param {Number} r
         * @param {Number} g
         * @param {Number} b
         * @param {Number} a
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {WebGLColor}
         */
        public constructor(r:number, g:number, b:number, a:number, arrayBuffer:ArrayBuffer, offset:number);
    }

    /**
     * @class Vertex2F
     * @contructor
     */
    export class Vertex2F {
        /**
         * @property BYTES_PER_ELEMENT
         * @final
         * @type {Number}
         */
        public const BYTES_PER_ELEMENT:number;
        public x:number;
        public y:number;

        /**
         * @method Vertex2F 
         * @param {Number} x
         * @param {Number}y
         * @param {Array} arrayBuffer
         * @param {Number}offset
         * @return {Vertex2F}
         */
        public constructor(x:number, y:number, arrayBuffer:ArrayBuffer, offset:number);
    }


    // redefine cc.Vertex3F
    /**
     * @class Vertex3F
     * @constructor
     */
    export class Vertex3F {
        /**
         * @property BYTES_PER_ELEMENT
         * @final
         * @type {Number}
         */
        public const BYTES_PER_ELEMENT;

        public x:number;
        public y:number;
        public z:number;

        /** 
         * @method Vertex3F
         * @param {Number} x
         * @param {Number} y
         * @param {Number}z
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {Vertex3F}
         */
        public constructor(x:number, y:number, z:number, arrayBuffer:ArrayBuffer, offset:number);
    }


    // redefine cc.Tex2F
    /**
     * @class Tex2F
     * @constructor
     */
    export class Tex2F {
        /**
         * @property BYTES_PER_ELEMENT 
         * @final
         * @type {Number}
         */
        public const BYTES_PER_ELEMENT:number;

        public u:number;
        public v:number;

        /** 
         * @method Tex2F
         * @param {Number} u
         * @param {Number} v
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {Tex2F}
         */
        public constructor(u:number, v:number, arrayBuffer:ArrayBuffer, offset:number);
    }


    //redefine cc.Quad2
    /**
     * @class Quad2
     * @constructor
     */
    export class Quad2 {
        /**
         * @property BYTES_PER_ELEMENT
         * @final
         * @type {number}
         */
        public const BYTES_PER_ELEMENT:number;
        public tl:Vertex2F;
        public tr:Vertex2F;
        public bl:Vertex2F;
        public br:Vertex2F;

        /** 
         * @method Quad2
         * @param {Vertex2F} tl
         * @param {Vertex2F} tr
         * @param {Vertex2F} bl
         * @param {Vertex2F} br
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {Quad2}
         */
        public constructor(tl:Vertex2F, tr:Vertex2F, bl:Vertex2F, br:Vertex2F, arrayBuffer:ArrayBuffer, offset:number);
    }

    /**
     * A 3D Quad. 4 * 3 floats
     * @Class Quad3
     * @Construct
     */
    export class Quad3 {

        /**
         * @constant
         * @type {number}
         */
        public const BYTES_PER_ELEMENT:number;

        /**
         * @method Quad3 
         * @param {Vertex3F} bl1
         * @param {Vertex3F} br1
         * @param {Vertex3F} tl1
         * @param {Vertex3F} tr1
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {Quad3}
         */
        public constructor(bl1:Vertex3F, br1:Vertex3F, tl1:Vertex3F, tr1:Vertex3F, arrayBuffer:ArrayBuffer, offset:number);
    }

    //redefine cc.V3F_C4B_T2F
    /**
     * @class V3F_C4B_T2F
     * @constructor
     */
    export class V3F_C4B_T2F {
        /**
         * @method BYTES_PER_ELEMENT
         * @final
         * @type {Number}
         */
        public const BYTES_PER_ELEMENT:number;

        public vertices:Vertex3F;
        public colors:Color;
        public texCoords:Tex2F;

        /** 
         * @method V3F_C4B_T2F
         * @param {Vertex3F} vertices
         * @param {Color} colors
         * @param {Tex2F} texCoords
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {V3F_C4B_T2F}
         */
        public constructor(vertices:Vertex3F, colors:Color, texCoords:Tex2F, arrayBuffer:ArrayBuffer, offset:number);
    }

    //redefine cc.V3F_C4B_T2F_Quad
    /**
     * @class V3F_C4B_T2F_Quad
     * @constructor
     */
    export class V3F_C4B_T2F_Quad {
        /**
         * @property BYTES_PER_ELEMENT
         * @final
         * @type {Number}
         */
        public BYTES_PER_ELEMENT:number;

        public tl:V3F_C4B_T2F;
        public tr:V3F_C4B_T2F;
        public bl:V3F_C4B_T2F;
        public br:V3F_C4B_T2F;
        public arrayBuffer:ArrayBuffer;
        /**
         * @method V3F_C4B_T2F_Quad 
         * @param {V3F_C4B_T2F} tl
         * @param {V3F_C4B_T2F} bl
         * @param {V3F_C4B_T2F} tr
         * @param {V3F_C4B_T2F} br
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {V3F_C4B_T2F_Quad}
         */
        public constructor(tl:V3F_C4B_T2F, bl:V3F_C4B_T2F, tr:V3F_C4B_T2F, br:V3F_C4B_T2F, arrayBuffer:ArrayBuffer, offset:number);
    }

    /**
     * @method V3F_C4B_T2F_QuadZero
     * @returns {V3F_C4B_T2F_Quad}
     */
    export function V3F_C4B_T2F_QuadZero():V3F_C4B_T2F_Quad;

    /**
     * @method V3F_C4B_T2F_QuadCopy
     * @param {V3F_C4B_T2F_Quad} sourceQuad
     * @return {V3F_C4B_T2F_Quad}
     */
    export function V3F_C4B_T2F_QuadCopy(sourceQuad:V3F_C4B_T2F_Quad):V3F_C4B_T2F_Quad;

    /**
     * @method V3F_C4B_T2F_QuadsCopy
     * @param {Array} sourceQuads
     * @returns {Array}
     */
    export function V3F_C4B_T2F_QuadsCopy(sourceQuads:V3F_C4B_T2F_Quad[]):V3F_C4B_T2F_Quad[];

    //redefine cc.V2F_C4B_T2F
    /**
     * @class V2F_C4B_T2F
     * @constructor
     */
    export class V2F_C4B_T2F {
        /**
         * @property BYTES_PER_ELEMENT
         * @final
         * @type {Number}
         */
        public const BYTES_PER_ELEMENT:number;

        public vertices:Vertex2F;
        public colors:Color;
        public texCoords:Tex2F;

        /** 
         * @method V2F_C4B_T2F
         * @param {Vertex2F} vertices
         * @param {Color} colors
         * @param {Tex2F} texCoords
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {V2F_C4B_T2F}
         */
        public constructor(vertices:Vertex2F, colors:Color, texCoords:Tex2F, arrayBuffer:ArrayBuffer, offset:number);
    }


    //redefine cc.V2F_C4B_T2F_Triangle
    /**
     * @class V2F_C4B_T2F_Triangle
     * @constructor
     */
    export class V2F_C4B_T2F_Triangle {
        /**
         * property BYTES_PER_ELEMENT
         * @final
         * @type {Number}
         */
        public const BYTES_PER_ELEMENT:number;

        public a:V2F_C4B_T2F;
        public b:V2F_C4B_T2F;
        public c:V2F_C4B_T2F;

        /**
         * @method V2F_C4B_T2F_Triangle
         * @param {V2F_C4B_T2F} a
         * @param {V2F_C4B_T2F} b
         * @param {V2F_C4B_T2F} c
         * @param {Array} arrayBuffer
         * @param {Number} offset
         * @return {V2F_C4B_T2F_Triangle}
         */
        public constructor(a:V2F_C4B_T2F, b:V2F_C4B_T2F, c:V2F_C4B_T2F, arrayBuffer:ArrayBuffer, offset:number);
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCValueTypes.js
    //  TODO: These definitions are probably off, so come back later and make sure they're propertly done.
    //+--------------------------------------------------------------------------------
    /**
     * !#en The base class of all value types.
     * !#zh 所有值类型的基类。
     * @class ValueType
     * @constructor
     */
    export interface ValueType<T> {
        public clone():T;

        /**
         * !#en This method returns an exact copy of current value.
         * !#zh 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。
         * @method clone
         * @return {ValueType}
         */
        public equals(other:T):boolean;

        /**
         * !#en TODO
         * !#zh 转换为方便阅读的字符串。
         * @method toString
         * @return {string}
         */
        public toString():string;

        /**
         * !#en
         * Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
         * When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.
         * !#zh
         * 线性插值。<br/>
         * 当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。
         * @method lerp
         * @param {ValueType} to - the to value
         * @param {number} ratio - the interpolation coefficient
         * @return {ValueType}
         */
        public lerp(to:T, ratio:number):T;
    }


    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/value-types/CCValueTypes.js
    //  TODO: These definitions are probably off, so come back later and make sure they're propertly done.
    //+--------------------------------------------------------------------------------
    /**
     * !#en Representation of 2D vectors and points.
     * !#zh 表示 2D 向量和坐标
     *
     * @class Vec2
     * @extends ValueType
     * @constructor
     */
    export class Vec2 implements ValueType<Vec2> {
        /**
         * !#en return a Vec2 object with x = 1 and y = 1.
         * !#zh 新 Vec2 对象。
         * @property ONE
         * @type Vec2
         * @static
         */
        public const ONE:Vec2;

        /**
         * !#en return a Vec2 object with x = 0 and y = 0.
         * !#zh 返回 x = 0 和 y = 0 的 Vec2 对象。
         * @property ZERO
         * @type Vec2
         * @static
         */
        public const ZERO:Vec2;

        /**
         * !#en return a Vec2 object with x = 0 and y = 1.
         * !#zh 返回 x = 0 和 y = 1 的 Vec2 对象。
         * @property up
         * @type Vec2
         * @static
         */
        public const UP:Vec2;

        /**
         * !#en return a Vec2 object with x = 1 and y = 0.
         * !#zh 返回 x = 1 和 y = 0 的 Vec2 对象。
         * @property RIGHT
         * @type Vec2
         * @static
         */
        public const RIGHT:Vec2;

        /**
         * !#en
         * Constructor
         * see {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} or {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
         * !#zh
         * 构造函数，可查看 {{#crossLink "cc/vec2:method"}}cc.v2{{/crossLink}} 或者 {{#crossLink "cc/p:method"}}cc.p{{/crossLink}}
         * @method Vec2
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @return {Vec2}
         */
        public constructor(x:Vec2|number, y?:number);

        /**
         * !#en clone a Vec2 value
         * !#zh 克隆一个 Vec2 值
         * @method clone
         * @return {Vec2}
         */
        public clone():Vec2;

        /**
         * !#en TODO
         * !#zh 设置向量值。
         * @method set
         * @param {Vec2} newValue - !#en new value to set. !#zh 要设置的新值
         * @return {Vec2} returns this
         * @chainable
         */
        public set(newValue:Vec2):Vec2;

        /**
         * !#en TODO
         * !#zh 当前的向量是否与指定的向量相等。
         * @method equals
         * @param {Vec2} other
         * @return {Boolean}
         */
        public equals(other:Vec2):boolean;

        /**
         * !#en TODO
         * !#zh 转换为方便阅读的字符串。
         * @method toString
         * @return {string}
         */
        public toString():string;

        /**
         * !#en TODO
         * !#zh 线性插值。
         * @method lerp
         * @param {Vec2} to
         * @param {number} ratio - the interpolation coefficient
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2}
         */
        public lerp(to:Vec2, ratio:number, out?:Vec2):Vec2;

        /**
         * !#en Adds this vector. If you want to save result to another vector, use add() instead.
         * !#zh 向量加法。如果你想保存结果到另一个向量，使用 add() 代替。
         * @method addSelf
         * @param {Vec2} vector
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.addSelf(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
         */
        public addSelf(vector:Vec2):Vec2;

        /**
         * !#en Adds two vectors, and returns the new result.
         * !#zh 向量加法，并返回新结果。
         * @method add
         * @param {Vec2} vector
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.add(cc.v2(5, 5));      // return Vec2 {x: 15, y: 15};
         * var v1;
         * v.add(cc.v2(5, 5), v1);  // return Vec2 {x: 15, y: 15};
         */
        public add(vector:Vec2, out:Vec2):Vec2;

        /**
         * !#en Subtracts one vector from this. If you want to save result to another vector, use sub() instead.
         * !#zh 向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。
         * @method subSelf
         * @param {Vec2} vector
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
         */
        public subSelf(vector:Vec2):Vec2;

        /**
         * !#en Subtracts one vector from this, and returns the new result.
         * !#zh 向量减法，并返回新结果。
         * @method sub
         * @param {Vec2} vector
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.sub(cc.v2(5, 5));      // return Vec2 {x: 5, y: 5};
         * var v1;
         * v.sub(cc.v2(5, 5), v1);  // return Vec2 {x: 5, y: 5};
         */
        public sub(vector:Vec2, out?:Vec2):Vec2;

        /**
         * !#en Multiplies this by a number. If you want to save result to another vector, use mul() instead.
         * !#zh 缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。
         * @method mulSelf
         * @param {number} num
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.mulSelf(5);// return Vec2 {x: 50, y: 50};
         */
        public mulSelf(num:number):Vec2;

        /**
         * !#en Multiplies by a number, and returns the new result.
         * !#zh 缩放当前向量，并返回新结果。
         * @method mul
         * @param {number} num
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.mul(5);      // return Vec2 {x: 50, y: 50};
         * var v1;
         * v.mul(5, v1);  // return Vec2 {x: 50, y: 50};
         */
        public mul(num:number, out?:Vec2):Vec2;

        /**
         * !#en Multiplies two vectors.
         * !#zh 分量相乘。
         * @method scaleSelf
         * @param {Vec2} vector
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.scaleSelf(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
         */
        public scaleSelf(vector:Vec2):Vec2;

        /**
         * !#en Multiplies two vectors, and returns the new result.
         * !#zh 分量相乘，并返回新的结果。
         * @method scale
         * @param {Vec2} vector
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.scale(cc.v2(5, 5));      // return Vec2 {x: 50, y: 50};
         * var v1;
         * v.scale(cc.v2(5, 5), v1);  // return Vec2 {x: 50, y: 50};
         */
        public scale(vector:Vec2, out?:Vec2):Vec2;

        /**
         * !#en Divides by a number. If you want to save result to another vector, use div() instead.
         * !#zh 向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。
         * @method divSelf
         * @param {number} num
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.divSelf(5); // return Vec2 {x: 2, y: 2};
         */
        public divSelf(num:number):Vec2;

        /**
         * !#en Divides by a number, and returns the new result.
         * !#zh 向量除法，并返回新的结果。
         * @method div
         * @param {number} num
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.div(5);      // return Vec2 {x: 2, y: 2};
         * var v1;
         * v.div(5, v1);  // return Vec2 {x: 2, y: 2};
         */
        public div(num:number, out?:Vec2):Vec2;

        /**
         * !#en Negates the components. If you want to save result to another vector, use neg() instead.
         * !#zh 向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。
         * @method negSelf
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.negSelf(); // return Vec2 {x: -10, y: -10};
         */
        public negSelf():Vec2;

        /**
         * !#en Negates the components, and returns the new result.
         * !#zh 返回取反后的新向量。
         * @method neg
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         * @example
         * var v = cc.v2(10, 10);
         * var v1;
         * v.neg(v1);  // return Vec2 {x: -10, y: -10};
         */
        public neg(out?:Vec2):Vec2;

        /**
         * !#en Dot product
         * !#zh 当前向量与指定向量进行点乘。
         * @method dot
         * @param {Vec2} vector
         * @return {number} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.dot(cc.v2(5, 5)); // return 100;
         */
        public dot(vector:Vec2):number;

        /**
         * !#en Cross product
         * !#zh 当前向量与指定向量进行叉乘。
         * @method cross
         * @param {Vec2} vector
         * @return {number} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.cross(cc.v2(5, 5)); // return 0;
         */
        public cross(vector:Vec2):number;

        /**
         * !#en Returns the length of this vector.
         * !#zh 返回该向量的长度。
         * @method mag
         * @return {number} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.mag(); // return 14.142135623730951;
         */
        public mag():number;

        /**
         * !#en Returns the squared length of this vector.
         * !#zh 返回该向量的长度平方。
         * @method magSqr
         * @return {number} the result
         * @example
         * var v = cc.v2(10, 10);
         * v.magSqr(); // return 200;
         */
        public magSqr():number;

        /**
         * !#en Make the length of this vector to 1.
         * !#zh 向量归一化，让这个向量的长度为 1。
         * @method normalizeSelf
         * @return {Vec2} returns this
         * @chainable
         * @example
         * var v = cc.v2(10, 10);
         * v.normalizeSelf(); // return Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
         */
        public normalizeSelf():Vec2;

        /**
         * !#en
         * Returns this vector with a magnitude of 1.<br/>
         * <br/>
         * Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.
         * !#zh
         * 返回归一化后的向量。<br/>
         * <br/>
         * 注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。
         * @method normalize
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} result
         * var v = cc.v2(10, 10);
         * v.normalize();   // return Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
         */
        public normalize(out?:Vec2):Vec2;

        /**
         * !#en Get angle in radian between this and vector.
         * !#zh 夹角的弧度。
         * @method angle
         * @param {Vec2} vector
         * @return {number} from 0 to Math.PI
         */
        public angle(vector:Vec2):number;

        /**
         * !#en Get angle in radian between this and vector with direction.
         * !#zh 带方向的夹角的弧度。
         * @method signAngle
         * @param {Vec2} vector
         * @return {number} from -MathPI to Math.PI
         */
        public signAngle(vector:Vec2):number;

        /**
         * !#en rotate
         * !#zh 返回旋转给定弧度后的新向量。
         * @method rotate
         * @param {number} radians
         * @param {Vec2} [out] - optional, the receiving vector
         * @return {Vec2} the result
         */
        public rotate(radians:number, out:Vec2):Vec2;

        /**
         * !#en rotate self
         * !#zh 按指定弧度旋转向量。
         * @method rotateSelf
         * @param {number} radians
         * @return {Vec2} returns this
         * @chainable
         */
        public rotateSelf(radians:number):Vec2;
    }

    /**
     * !#en The convenience method to create a new {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}}.
     * !#zh 通过该简便的函数进行创建 {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}} 对象。
     * @method v2
     * @param {Number|Object} [x=0]
     * @param {Number} [y=0]
     * @return {Vec2}
     * @example
     * var v1 = cc.v2();
     * var v2 = cc.v2(0, 0);
     * var v3 = cc.v2(v2);
     * var v4 = cc.v2({x: 100, y: 100});
     */
    export function v2(x:Vec2|number, y?:number):Vec2;

    /**
     * !#en The convenience method to creates a new {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}}.
     * !#zh 通过该简便的函数进行创建 {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}} 对象。
     * @method p
     * @param {Number|Object} [x=0] a Number or a size object
     * @param {Number} [y=0]
     * @return {Vec2}
     * @example
     * var point1 = cc.p();
     * var point2 = cc.p(100, 100);
     * var point3 = cc.p(point2);
     * var point4 = cc.p({x: 100, y: 100});
     */
    export function p(x:Vec2|number, y?:number):Vec2;


    // Functional style API, for backward compatibility

    /**
     * !#en Check whether a point's value equals to another.
     * !#zh 判断两个向量是否相等。
     * @method pointEqualToPoint
     * @param {Vec2} point1
     * @param {Vec2} point2
     * @return {Boolean}
     */
    export function pointEqualToPoint(x:Vec2, y:Vec2):boolean;
}
