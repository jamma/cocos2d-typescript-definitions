/// <reference path="cocos2d-lib.d.ts" />

declare namespace cc {

  ////////////////////////////////////////////////////////////////////////////////
  // File: cocos2d/render-texture/CCRenderTexture.js
  ////////////////////////////////////////////////////////////////////////////////
    
  /**
   * enum for jpg
   * @constant
   * @type Number
   */
  export const IMAGE_FORMAT_JPEG: number;

  /**
   * enum for png
   * @constant
   * @type Number
   */
  export const IMAGE_FORMAT_PNG: number;

  /**
   * enum for raw
   * @constant
   * @type Number
   */
  export const IMAGE_FORMAT_RAWDATA: number;

  /**
   * @param {Number} x
   * @return {Number}
   * Constructor
   */
  export function NextPOT(x: number): number;
  
  /**
   * cc.RenderTexture is a generic rendering target. To render things into it,<br/>
   * simply construct a render target, call begin on it, call visit on any cocos<br/>
   * scenes or objects to render them, and call end. For convenience, render texture<br/>
   * adds a sprite as it's display child with the results, so you can simply add<br/>
   * the render texture to your scene and treat it like any other CocosNode.<br/>
   * There are also functions for saving the render texture to disk in PNG or JPG format.
   * @class
   * @extends cc.Node
   *
  * @property {cc.Sprite}    sprite          - The sprite.
  * @property {cc.Sprite}    clearFlags      - Code for "auto" update.
  * @property {Number}       clearDepthVal   - Clear depth value.
  * @property {Boolean}      autoDraw        - Indicate auto draw mode activate or not.
  * @property {Number}       clearStencilVal - Clear stencil value.
  * @property {cc.Color}     clearColorVal   - Clear color value, valid only when "autoDraw" is true.
  */
  export class RenderTexture extends Node {
    public sprite: Sprite;
    public clearFlags: number;
    public clearDepthVal: number;
    public autoDraw: boolean;
    public clearStencilVal: number;
    public clearColorVal: Color;
    
    /**
     * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
     * Constructor of cc.RenderTexture for Canvas
     * @param {Number} width
     * @param {Number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} [format=cc.Texture2D.PIXEL_FORMAT_RGBA8888]
     * @param {Number} [depthStencilFormat=0]
     * @example
     * // Example
     * var rt = new cc.RenderTexture(width, height, format, depthStencilFormat)
     * @function
     */
    public constructor(width: number, height: number, format?: number, depthStencilFormat?: number);
    
    /**
     * Clear RenderTexture.
     * @function
     */
    public cleanup(): void;
    
    /**
     * Gets the sprite
     * @return {cc.Sprite}
     */
    public getSprite(): Sprite;
    
    /**
     * Set the sprite
     * @param {cc.Sprite} sprite
     */
    public setSprite(sprite: Sprite): void;

    /**
     * Used for grab part of screen to a texture.
     * @param {cc.Point} rtBegin
     * @param {cc.Rect} fullRect
     * @param {cc.Rect} fullViewport
     */
    public setVirtualViewport(rtBegin: Point, fullRect: Rect, fullViewport: Rect): void;

    /**
     * Initializes the instance of cc.RenderTexture
     * @function
     * @param {Number} width
     * @param {Number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} [format]
     * @param {Number} [depthStencilFormat]
     * @return {Boolean}
     */
    public initWithWidthAndHeight(width: number, height: number, format: number, depthStencilFormat: number): boolean;

    /**
     * starts grabbing
     * @function
     */
    public begin(): void;
    
    /**
     * starts rendering to the texture while clearing the texture first.<br/>
     * This is more efficient then calling -clear first and then -begin
     * @param {Number} r red 0-255
     * @param {Number} g green 0-255
     * @param {Number} b blue 0-255
     * @param {Number} a alpha 0-255 0 is transparent
     * @param {Number} [depthValue=]
     * @param {Number} [stencilValue=]
     */
    public beginWithClear(r: number, g: number, b: number, a: number, depthValue?: number, stencilValue?: number): void;

    /**
     * ends grabbing
     * @function
     */
    public end(): void;

    /**
     * clears the texture with a color
     * @param {Number} r red 0-1
     * @param {Number} g green 0-1
     * @param {Number} b blue 0-1
     * @param {Number} a alpha 0-1
     */
    public clear(r: number, g: number, b: number, a: number): void;

    /**
     * clears the texture with rect.
     * @function
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public clearRect(x: number, y: number, width: number, height: number): void;

    /**
     * clears the texture with a specified depth value
     * @function
     * @param {Number} depthValue
     */
    public clearDepth(depthValue: number): void;

    /**
     * clears the texture with a specified stencil value
     * @function
     * @param {Number} stencilValue
     */
    public clearStencil(stencilValue: number): void;

    /**
     * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, GL_STENCIL_BUFFER_BIT. They can be OR'ed. Valid when "autoDraw is YES.
     * @return {Number}
     */
    public getClearFlags(): number;

    /**
     * Set the clearFlags
     * @param {Number} clearFlags
     */
    public setClearFlags(clearFlags: number): void;

    /**
     * Clear color value. Valid only when "autoDraw" is true.
     * @function
     * @return {cc.Color}
     */
    public getClearColor(): Color;

    /**
     * Set the clear color value. Valid only when "autoDraw" is true.
     * @function
     * @param {cc.Color} clearColor The clear color
     */
    public setClearColor(clearColor: Color): void;

    /**
     * Value for clearDepth. Valid only when autoDraw is true.
     * @return {Number}
     */
    public getClearDepth(): number;

    /**
     * Set value for clearDepth. Valid only when autoDraw is true.
     * @param {Number} clearDepth
     */
    public setClearDepth(clearDepth: number): void;

    /**
     * Value for clear Stencil. Valid only when autoDraw is true
     * @return {Number}
     */
    public getClearStencil(): number;

    /**
     * Set value for clear Stencil. Valid only when autoDraw is true
     * @return {Number}
     */
    public setClearStencil(clearStencil: number): void;

    /**
     * When enabled, it will render its children into the texture automatically. Disabled by default for compatiblity reasons. <br/>
     * Will be enabled in the future.
     * @return {Boolean}
     */
    public isAutoDraw(): boolean;

    /**
     * When enabled, it will render its children into the texture automatically. Disabled by default for compatiblity reasons. <br/>
     * Will be enabled in the future.
     * @return {Boolean}
     */
    public setAutoDraw(autoDraw: boolean): void;

    /**
     * saves the texture into a file using JPEG format. The file will be saved in the Documents folder.
     * Returns YES if the operation is successful.
     * (doesn't support in HTML5)
     * @param {Number} filePath
     * @param {Number} format
     */
    public saveToFile(filePath: string, format: number): void;

    /**
     * creates a new CCImage from with the texture's data. Caller is responsible for releasing it by calling delete.
     * @return {*}
     */
    public newCCImage(flipImage: boolean): Image;

    /**
     * Listen "come to background" message, and save render texture. It only has effect on Android.
     * @param {cc.Class} obj
     */
    public listenToBackground(obj: Class): void;

    /**
     * Listen "come to foreground" message and restore the frame buffer object. It only has effect on Android.
     * @param {cc.Class} obj
     */
    public listenToForeground(obj: Class): void;
  }
}