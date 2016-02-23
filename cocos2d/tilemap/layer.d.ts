/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXLayer.js
  // +--------------------------------------------------------------------------------

  /**
   * <p>cc.TMXLayer represents the TMX layer. </p>
   *
   * <p>It is a subclass of cc.SpriteBatchNode. By default the tiles are rendered using a cc.TextureAtlas. <br />
   * If you modify a tile on runtime, then, that tile will become a cc.Sprite, otherwise no cc.Sprite objects are created. <br />
   * The benefits of using cc.Sprite objects as tiles are: <br />
   * - tiles (cc.Sprite) can be rotated/scaled/moved with a nice API </p>
   *
   * <p>If the layer contains a property named "cc.vertexz" with an integer (in can be positive or negative), <br />
   * then all the tiles belonging to the layer will use that value as their OpenGL vertex Z for depth. </p>
   *
   * <p>On the other hand, if the "cc.vertexz" property has the "automatic" value, then the tiles will use an automatic vertex Z value. <br />
   * Also before drawing the tiles, GL_ALPHA_TEST will be enabled, and disabled after drawing them. The used alpha func will be:  </p>
   *
   * glAlphaFunc( GL_GREATER, value ) <br />
   *
   * <p>"value" by default is 0, but you can change it from Tiled by adding the "cc_alpha_func" property to the layer. <br />
   * The value 0 should work for most cases, but if you have tiles that are semi-transparent, then you might want to use a different value, like 0.5.</p>
   * @class
   * @extends cc.SpriteBatchNode
   *
   * @property {cc.Sprite[]}          tiles               - Tiles for layer
   * @property {cc.TMXTilesetInfo}    tileset             - Tileset for layer
   * @property {number}               layerOrientation    - Layer orientation
   * @property {any[]}                properties          - Properties from the layer. They can be added using tilemap editors
   * @property {string}               layerName           - Name of the layer
   * @property {number}               layerWidth          - Width of the layer
   * @property {number}               layerHeight         - Height of the layer
   * @property {number}               tileWidth           - Width of a tile
   * @property {number}               tileHeight          - Height of a tile
   */
  export class TMXLayer extends SpriteBatchNode {
    /**
     * Pointer to the map of tiles
     * @member {cc.Sprite[]} tiles
     */
    tiles: Sprite[];

    /**
     * Tile set information for the layer
     * @member {cc.TMXTilesetInfo} tileset
     */
    tileset: TMXTilesetInfo;
        
    /**
     * Layer orientation, which is the same as the map orientation
     * @member {number} layerOrientation
     */
    layerOrientation: number;
    
    /**
     * properties from the layer. They can be added using Tiled
     * @member {any[]} properties
     */
    properties: any[];

    /**
     * The layer name
     * @member {string} layerName
     */
    layerName: string;
    
    /**
     * Texture of cc.SpriteBatchNode
     * @member {cc.Texture2D} texture
     */
    texture: Texture2D;

    /**
     * Width of the layer
     * @member {number} layerWidth
     */
    layerWidth: number;

    /**
     * Height of the layer
     * @member {number} layerHeight
     */
    layerHeight: number;

    /**
     * Width of a tile
     * @member {number} tileWidth
     */
    tileWidth: number;

    /**
     * Height of a tile
     * @member {number} tileHeight
     */
    tileHeight: number;

    /**
     * Creates a cc.TMXLayer with an tile set info, a layer info and a map info   <br/>
     * Constructor of cc.TMXLayer
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     */
    constructor(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo);
    
    /**
     * Sets the untransformed size of the TMXLayer.
     * @override
     * @param {cc.Size|number} size The untransformed size of the TMXLayer or The untransformed size's width of the TMXLayer.
     * @param {number} [height] The untransformed size's height of the TMXLayer.
     */
    setContentSize(size: Size|number, height: number): void;

    /**
     * Gets layer size.
     * @return {cc.Size}
     */
    getLayerSize(): Size;

    /**
     * Set layer size
     * @param {cc.Size} Var
     */
    setLayerSize(Var: Size): void;

    /**
     * Size of the map's tile (could be different from the tile's size)
     * @return {cc.Size}
     */
    getMapTileSize(): Size;

    /**
     * Set the map tile size.
     * @param {cc.Size} Var
     */
    setMapTileSize(Var: Size): void;

    /**
     * Initializes a cc.TMXLayer with a tileset info, a layer info and a map info
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     * @return {boolean}
     */
    initWithTilesetInfo(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo): boolean;

    /**
     * <p>Dealloc the map that contains the tile position from memory. <br />
     * Unless you want to know at runtime the tiles positions, you can safely call this method. <br />
     * If you are going to call layer.getTileGIDAt() then, don't release the map</p>
     */
    releaseMap(): void;

    /**
     * <p>Returns the tile (cc.Sprite) at a given a tile coordinate. <br/>
     * The returned cc.Sprite will be already added to the cc.TMXLayer. Don't add it again.<br/>
     * The cc.Sprite can be treated like any other cc.Sprite: rotated, scaled, translated, opacity, color, etc. <br/>
     * You can remove either by calling: <br/>
     * - layer.removeChild(sprite, cleanup); <br/>
     * - or layer.removeTileAt(ccp(x,y)); </p>
     * @param {cc.Point|number} pos or x
     * @param {number} [y]
     * @return {cc.Sprite}
     */
    getTileAt(pos: Point|number, y: number): Sprite;

    /**
     * Returns the tile gid at a given tile coordinate. <br />
     * if it returns 0, it means that the tile is empty. <br />
     * This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())<br />
     * @param {cc.Point|number} pos or x
     * @param {number} [y]
     * @return {number}
     */
    getTileGIDAt(pos: Point|number, y: number): number;

    /**
     *  lipped tiles can be changed dynamically
     * @param {cc.Point|number} pos or x
     * @param {number} [y]
     * @return {number}
     */
    getTileFlagsAt(pos: Point|number, y: number): number;

    /**
     * <p>Sets the tile gid (gid = tile global id) at a given tile coordinate.<br />
     * The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.<br />
     * If a tile is already placed at that position, then it will be removed.</p>
     * @param {number} gid
     * @param {cc.Point|number} posOrX position or x
     * @param {number} flagsOrY flags or y
     * @param {number} [flags]
     */
    setTileGID(gid: number, posOrX: Point|number, flagsOrY: number, flags: number): void;

    /**
     * Removes a tile at given tile coordinate
     * @param {cc.Point|number} pos position or x
     * @param {number} [y]
     */
    removeTileAt(pos: Point|number, y: number): void;

    /**
     * Returns the position in pixels of a given tile coordinate
     * @param {cc.Point|number} pos position or x
     * @param {number} [y]
     * @return {cc.Point}
     */
    getPositionAt(pos: Point|number, y: number): Point;

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {any}
     */
    getProperty(propertyName: string): any;

    /**
     * Creates the tiles
     */
    setupTiles(): void;
    
    /**
     * Remove child
     * @param  {cc.Sprite} sprite
     * @param  {boolean} cleanup
     */
    removeChild(sprite: Sprite, cleanup: boolean): void;
  }
}