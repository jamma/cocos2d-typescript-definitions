/// <reference path="cocos2d-lib.d.ts" />

declare namespace cc {

  ////////////////////////////////////////////////////////////////////////////////
  // File: cocos2d/render-texture/CCRenderTexture.js
  ////////////////////////////////////////////////////////////////////////////////
    
  /**
   * enum for jpg
   * @const {number} IMAGE_FORMAT_JPEG
   */
  export const IMAGE_FORMAT_JPEG: number

  /**
   * enum for png
   * @const {number} IMAGE_FORMAT_PNG
   */
  export const IMAGE_FORMAT_PNG: number

  /**
   * enum for raw
   * @const {number} IMAGE_FORMAT_RAWDATA
   */
  export const IMAGE_FORMAT_RAWDATA: number

  /**
   * @param {number} x
   * @return {number}
   * Constructor
   */
  export function NextPOT(x: number): number
  
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
  * @property {number}       clearDepthVal   - Clear depth value.
  * @property {boolean}      autoDraw        - Indicate auto draw mode activate or not.
  * @property {number}       clearStencilVal - Clear stencil value.
  * @property {cc.Color}     clearColorVal   - Clear color value, valid only when "autoDraw" is true.
  */
  export class RenderTexture extends Node {
    /**
     * The sprite
     * @member {cc.Sprite} sprite
     */
    public sprite: Sprite

    /**
     * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, GL_STENCIL_BUFFER_BIT. They can be OR'ed. Valid when "autoDraw is YES.
     * @member {number} clearFlags
     */
    public clearFlags: number
    
    /**
     * Value for clearDepth. Valid only when autoDraw is true.
     * @member {number} clearDepthVal
     */
    public clearDepthVal: number
    
    /**
     * When enabled, it will render its children into the texture automatically. Disabled by default for compatiblity reasons. <br/>
     * Will be enabled in the future.
     * @member {boolean} autoDraw
     */
    public autoDraw: boolean
    
    /**
     * Value for clear Stencil. Valid only when autoDraw is true
     * @member {number} clearStencilVal
     */
    public clearStencilVal: number
    
    /**
     * Clear color value. Valid only when "autoDraw" is true.
     * @member {cc.Color} clearColorVal
     */
    public clearColorVal: Color
    
    /**
     * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
     * Constructor of cc.RenderTexture for Canvas
     * @param {number} width
     * @param {number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} [format=cc.Texture2D.PIXEL_FORMAT_RGBA8888]
     * @param {number} [depthStencilFormat=0]
     * @example
     * // Example
     * var rt = new cc.RenderTexture(width, height, format, depthStencilFormat)
     * @function
     */
    public constructor(width: number, height: number, format?: number, depthStencilFormat?: number)
    
    /**
     * Clear RenderTexture.
     * @function
     */
    public cleanup(): void
    
    /**
     * Used for grab part of screen to a texture.
     * @param {cc.Point} rtBegin
     * @param {cc.Rect} fullRect
     * @param {cc.Rect} fullViewport
     */
    public setVirtualViewport(rtBegin: Point, fullRect: Rect, fullViewport: Rect): void

    /**
     * Initializes the instance of cc.RenderTexture
     * @function
     * @param {number} width
     * @param {number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} [format]
     * @param {number} [depthStencilFormat]
     * @return {boolean}
     */
    public initWithWidthAndHeight(width: number, height: number, format: number, depthStencilFormat: number): boolean

    /**
     * starts grabbing
     * @function
     */
    public begin(): void
    
    /**
     * starts rendering to the texture while clearing the texture first.<br/>
     * This is more efficient then calling -clear first and then -begin
     * @param {number} r red 0-255
     * @param {number} g green 0-255
     * @param {number} b blue 0-255
     * @param {number} a alpha 0-255 0 is transparent
     * @param {number} [depthValue=]
     * @param {number} [stencilValue=]
     */
    public beginWithClear(r: number, g: number, b: number, a: number, depthValue?: number, stencilValue?: number): void

    /**
     * ends grabbing
     * @function
     */
    public end(): void

    /**
     * clears the texture with a color
     * @param {number} r red 0-1
     * @param {number} g green 0-1
     * @param {number} b blue 0-1
     * @param {number} a alpha 0-1
     */
    public clear(r: number, g: number, b: number, a: number): void

    /**
     * clears the texture with rect.
     * @function
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public clearRect(x: number, y: number, width: number, height: number): void

    /**
     * clears the texture with a specified depth value
     * @function
     * @param {number} depthValue
     */
    public clearDepth(depthValue: number): void

    /**
     * clears the texture with a specified stencil value
     * @function
     * @param {number} stencilValue
     */
    public clearStencil(stencilValue: number): void

    /**
     * saves the texture into a file using JPEG format. The file will be saved in the Documents folder.
     * Returns YES if the operation is successful.
     * (doesn't support in HTML5)
     * @param {number} filePath
     * @param {number} format
     */
    public saveToFile(filePath: string, format: number): void

    /**
     * creates a new CCImage from with the texture's data. Caller is responsible for releasing it by calling delete.
     * @return {Image}
     */
    public newCCImage(flipImage: boolean): Image

    /**
     * Listen "come to background" message, and save render texture. It only has effect on Android.
     * @param {cc.Class} obj
     */
    public listenToBackground(obj: Class): void

    /**
     * Listen "come to foreground" message and restore the frame buffer object. It only has effect on Android.
     * @param {cc.Class} obj
     */
    public listenToForeground(obj: Class): void
  }
}