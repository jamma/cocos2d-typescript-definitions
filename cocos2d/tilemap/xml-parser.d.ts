/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXXMLParser.js
  // +--------------------------------------------------------------------------------

  /**
   * @const {number} TMX_PROPERTY_NONE
   */
  export const TMX_PROPERTY_NONE: number

  /**
   * @const {number} TMX_PROPERTY_MAP
   */
  export const TMX_PROPERTY_MAP: number

  /**
   * @const {number} TMX_PROPERTY_LAYER
   */
  export const TMX_PROPERTY_LAYER: number

  /**
   * @const {number} TMX_PROPERTY_OBJECTGROUP
   */
  export const TMX_PROPERTY_OBJECTGROUP: number

  /**
   * @const {number} TMX_PROPERTY_OBJECT
   */
  export const TMX_PROPERTY_OBJECT: number

  /**
   * @const {number} TMX_PROPERTY_TILE
   */
  export const TMX_PROPERTY_TILE: number

  /**
   * @const {number} TMX_TILE_HORIZONTAL_FLAG
   */
  export const TMX_TILE_HORIZONTAL_FLAG: number

  /**
   * @const {number} TMX_TILE_VERTICAL_FLAG
   */
  export const TMX_TILE_VERTICAL_FLAG: number

  /**
   * @const {number} TMX_TILE_DIAGONAL_FLAG
   */
  export const TMX_TILE_DIAGONAL_FLAG: number

  /**
   * @const {number} TMX_TILE_FLIPPED_ALL
   */
  export const TMX_TILE_FLIPPED_ALL: number

  /**
   * @const {number} TMX_TILE_FLIPPED_MASK
   */
  export const TMX_TILE_FLIPPED_MASK: number

  /**
   * <p>cc.TMXLayerInfo contains the information about the layers like: <br />
   * - Layer name<br />
   * - Layer size <br />
   * - Layer opacity at creation time (it can be modified at runtime)  <br />
   * - Whether the layer is visible (if it's not visible, then the CocosNode won't be created) <br />
   *  <br />
   * This information is obtained from the TMX file.</p>
   * @class
   * @extends cc.Class
   *
   * @property {any[]}    properties  - Properties of the layer info.
   */
  export class TMXLayerInfo extends cc.Class {
    /**
     * The Properties.
     * @member {any[]} properties
     */
    properties: any[]

    /**
     * @member {boolean} visible
     */
    visible: boolean     
     
    /**
     * @member {boolean} ownTiles
     */
    ownTiles: boolean
    
    /**
     * @member {number} offset
     */
    offset: number

    constructor()
    
    /**
     * @const {number} ATTRIB_NONE
     */
    static ATTRIB_NONE: number
    
    /**
     * @const {number} ATTRIB_BASE64
     */
    static ATTRIB_BASE64: number

    /**
     * @const {number} ATTRIB_GZIP 
     */
    static ATTRIB_GZIP: number
    /**
     * @const {number} ATTRIB_ZLIB 
     */
    static ATTRIB_ZLIB: number    
  }

  /**
   * <p>cc.TMXTilesetInfo contains the information about the tilesets like: <br />
   * - Tileset name<br />
   * - Tileset spacing<br />
   * - Tileset margin<br />
   * - size of the tiles<br />
   * - Image used for the tiles<br />
   * - Image size<br />
   *
   * This information is obtained from the TMX file. </p>
   * @class
   * @extends cc.Class
   *
   * @property {string} name - Tileset name
   * @property {number} firstGid - First gid
   * @property {number} spacing - Spacing
   * @property {number} margin - Margin
   * @property {string} sourceImage - Filename containing the tiles (should be sprite sheet / texture atlas)
   * @property {cc.Size|null} imageSize - Size in pixels of the image
   */
  export class TMXTilesetInfo extends Class {
    /**
     * Tileset name
     * @member {string} name
     */
    name: string

    /**
     * First gid
     * @member {number} firstGid
     */
    firstGid: number

    /**
     * Spacing
     * @member {number} spacing
     */
    spacing: number

    /**
     * Margin
     * @member {number} margin
     */
    margin: number

    /**
     * Filename containing the tiles (should be sprite sheet / texture atlas)
     * @member {string} sourceImage
     */
    sourceImage: string

    /**
     * Size in pixels of the image
     * @member {cc.Size|null} imageSize
     */
    imageSize: Size

    constructor()

    /**
     * Return rect
     * @param {number} gid
     * @return {cc.Rect}
     */
    rectForGID(gid: number): Rect
  }

  class SAXParser {}
  
  /**
   * <p>cc.TMXMapInfo contains the information about the map like: <br/>
   *- Map orientation (hexagonal, isometric or orthogonal)<br/>
  *- Tile size<br/>
  *- Map size</p>
  *
  * <p>And it also contains: <br/>
  * - Layers (an array of TMXLayerInfo objects)<br/>
  * - Tilesets (an array of TMXTilesetInfo objects) <br/>
  * - ObjectGroups (an array of TMXObjectGroupInfo objects) </p>
  *
  * <p>This information is obtained from the TMX file. </p>
  * @class
  * @extends cc.saxParser
  *
  * @property {any[]}    properties          - Properties of the map info.
  * @property {number}   orientation         - Map orientation.
  * @property {any}      parentElement       - Parent element.
  * @property {number}   parentGID           - Parent GID.
  * @property {any}      layerAttrs          - Layer attributes.
  * @property {boolean}  storingCharacters   - Is reading storing characters stream.
  * @property {string}   tmxFileName         - TMX file name.
  * @property {string}   currentString       - Current string stored from characters stream.
  * @property {number}   mapWidth            - Width of the map
  * @property {number}   mapHeight           - Height of the map
  * @property {number}   tileWidth           - Width of a tile
  * @property {number}   tileHeight          - Height of a tile
  *
  * @param {string} tmxFile fileName or content string
  * @param {string} resourcePath  If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
  * @example
  * 1.
  * //create a TMXMapInfo with file name
  * var tmxMapInfo = new cc.TMXMapInfo("res/orthogonal-test1.tmx");
  * 2.
  * //create a TMXMapInfo with content string and resource path
  * var resources = "res/TileMaps";
  * var filePath = "res/TileMaps/orthogonal-test1.tmx";
  * var xmlStr = cc.loader.getRes(filePath);
  * var tmxMapInfo = new cc.TMXMapInfo(xmlStr, resources);
  */
  export class TMXMapInfo extends cc.SAXParser {
    /**
     * Properties of the map info.
     * @member {any[]} properties
     */
    properties: any[]

    /**
     * Map orientation.
     * @member {number} orientation
     */
    orientation: number
    
    /**
     * Parent element
     * @member {any} parentElement
     */
    parentElement: any
    
    /**
     * Parent GID
     * @member {number} parentGID
     */
    parentGID: number
    
    /**
     * Layer attributes.
     * @member {any} layerAttrs
     */
    layerAttrs: any
    
    /**
     * Is reading storing characters stream.
     * @member {boolean} storingCharacters
     */
    storingCharacters: boolean
    
    /**
     * TMX file name.
     * @member {string} tmxFileName
     */
    tmxFileName: string

    /**
     * Current string stored from characters stream.
     * @member {string} currentString
     */
    currentString: string

    /**
     * Creates a TMX Format with a tmx file or content string                           <br/>
     * Constructor of cc.TMXMapInfo
     * @param {string} tmxFile fileName or content string
     * @param {string} resourcePath  If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     */
    constructor(tmxFile: string, resourcePath: string)
    
    /**
     * Map width & height
     * @return {cc.Size}
     */
    getMapSize(): Size

    /**
     * Map width & height
     * @param {cc.Size} value
     */
    setMapSize(value: Size): void

    /**
     * Tiles width & height
     * @return {cc.Size}
     */
    getTileSize(): Size

    /**
     * Tiles width & height
     * @param {cc.Size} value
     */
    setTileSize(value: Size): void

    /**
     * Layers
     * @return {cc.TMXLayerInfo[]}
     */
    getLayers(): TMXLayerInfo[]

    /**
     * Layers
     * @param {cc.TMXLayerInfo} value
     */
    setLayers(value: TMXLayerInfo): void

    /**
     * tilesets
     * @return {cc.TMXTilesetInfo[]}
     */
    getTilesets(): TMXTilesetInfo[]

    /**
     * tilesets
     * @param {cc.TMXTilesetInfo} value
     */
    setTilesets(value: TMXTilesetInfo): void

    /**
     * ObjectGroups
     * @return {cc.TMXObjectGroup[]}
     */
    getObjectGroups(): TMXObjectGroup[]

    /**
     * ObjectGroups
     * @param {cc.TMXObjectGroup} value
     */
    setObjectGroups(value: TMXObjectGroup): void

    /**
     * Initializes a TMX format with a  tmx file
     * @param {string} tmxFile
     * @return {Element}
     */
    initWithTMXFile(tmxFile: string): Element

    /**
     * initializes a TMX format with an XML string and a TMX resource path
     * @param {string} tmxString
     * @param {string} resourcePath
     * @return {boolean}
     */
    initWithXML(tmxString: string, resourcePath: string): boolean

    /** Initalises parsing of an XML file, either a tmx (Map) file or tsx (Tileset) file
     * @param {string} tmxFile
     * @param {boolean} [isXmlString=false]
     * @return {Element}
     */
    parseXMLFile(tmxFile: string, isXmlString: boolean): Element

    /**
     * initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
     * @param {string} xmlString
     * @return {boolean}
     */
    parseXMLString(xmlString: string): boolean

    /**
     * Gets the tile properties.
     * @return {any[]}
     */
    getTileProperties(): any[]

    /**
     * Set the tile properties.
     * @param {any} tileProperties
     */
    setTileProperties(tileProperties: any): void

    /**
     * Width of the map
     * @member {number} mapWidth
     */
    mapWidth: number             

    /**
     * Height of the map
     * @member {number} mapHeight
     */
    mapHeight: number             

    /**
     * Width of a tile
     * @member {number} tileWidth
     */
    tileWidth: number             

    /**
     * Height of a tile
     * @member {number} tileHeight
     */
    tileHeight: number             
  }
}