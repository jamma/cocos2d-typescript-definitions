/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/effects/CCGrabber.js
    //+--------------------------------------------------------------------------------

    /**
     * FBO class that grabs the the contents of the screen
     * @class
     * @extends cc._Class
     */
    export class Grabber {
        /**
         * constructor of cc.Grabber
         */
        public constructor();

        /**
         * grab
         * @param {cc.Texture2D} texture
         */
        // grab:function (texture) {
        public grab(texture:Texture2D):void;

        /**
         * should be invoked before drawing
         * @param {cc.Texture2D} texture
         */
        public beforeRender(texture:Texture2D):void;

        /**
         * should be invoked after drawing
         * @param {cc.Texture2D} texture
         */
        public afterRender(texture:Texture2D):void;

        /**
         * delete FBO
         */
        public destroy():void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/effects/CCGrid.js
    //+--------------------------------------------------------------------------------
    /*
     * @param {Number} x
     * @return {Number}
     * Constructor
     */
    export function NextPOT(x:number):number;

    /**
     * Base class for cc.Grid
     * @class
     * @extends cc._Class
     */
    // cc.GridBase = cc._Class.extend(/** @lends cc.GridBase# */{
    export class GridBase {
        // _active:false,
        // _reuseGrid:0,
        // _gridSize:null,
        // _gridRect:null,
        // _texture:null,
        // _step:null,
        // _grabber:null,
        // _isTextureFlipped:false,
        // _shaderProgram:null,
        // _directorProjection:0,

        // _dirty:false,

        /**
         * create one cc.GridBase Object
         * Constructor of cc.GridBase
         * @param {cc.Size} gridSize
         * @param {cc.Texture2D} [texture=]
         * @param {Boolean} [flipped=]
         * @param {cc.Rect} rect
         */
        // ctor:function (gridSize, texture, flipped, rect) {
        public constructor(gridSize:Size, texture?:Texture2D, flipped?:boolean, rect?:Rect);

        /**
         * whether or not the grid is active
         * @return {Boolean}
         */
        public isActive():boolean;

        /**
         * whether or not the grid is active
         * @param {Number} active
         */
        public setActive(active:number):void;

        /**
         * get number of times that the grid will be reused
         * @return {Number}
         */
        public getReuseGrid():number;

        /**
         * set number of times that the grid will be reused
         * @param reuseGrid
         */
        public setReuseGrid(reuseGrid:number):void;

        /**
         * get size of the grid
         * @return {cc.Size}
         */
        public getGridSize():Size;

        /**
         * set size of the grid
         * @param {cc.Size} gridSize
         */
        public setGridSize(gridSize:Size):void;

        /**
         * set rect of the grid
         * @param {cc.Rect} rect
         */
        public setGridRect(rect:Rect):void;

        /**
         * get rect of the grid
         * @return {cc.Rect} rect
         */
        public getGridRect():Rect;

        /**
         * get pixels between the grids
         * @return {cc.Vec2}
         */
        public getStep():Vec2;

        /**
         * set pixels between the grids
         * @param {cc.Vec2} step
         */
        public setStep(step:Vec2):void;

        /**
         * get whether or not the texture is flipped
         * @return {Boolean}
         */
        public isTextureFlipped():boolean;

        /**
         * set whether or not the texture is flipped
         * @param {Boolean} flipped
         */
        public setTextureFlipped(flipped:boolean):void;

        /**
         *
         * @param {cc.Size} gridSize
         * @param {cc.Texture2D} [texture=]
         * @param {Boolean} [flipped=false]
         * @param {cc.Rect} [rect=]
         * @returns {boolean}
         */
        public initWithSize(gridSize:Size, texture?:Texture2D, flipped?:boolean, rect?:Rect):boolean;

        public beforeDraw():void;

        public afterDraw(target:???):void;

        public beforeBlit():void;

        public afterBlit():void;

        public blit():void;

        public reuse():void;

        public calculateVertexPoints():void;

        public set2DProjection():void;
    }

    /**
     * cc.Grid3D is a 3D grid implementation. Each vertex has 3 dimensions: x,y,z
     * @class
     * @extends cc.GridBase
     */
    // cc.Grid3D = cc.GridBase.extend(/** @lends cc.Grid3D# */{
    export class Grid3D extends GridBase {
        // _texCoordinates:null,
        // _vertices:null,
        // _originalVertices:null,
        // _indices:null,

        // _texCoordinateBuffer:null,
        // _verticesBuffer:null,
        // _indicesBuffer:null,

        // _needDepthTestForBlit: false,
        // _oldDepthTestValue: false,
        // _oldDepthWriteValue: false,

        /**
         * create one Grid3D object
         * Constructor of cc.Grid3D
         * @param {cc.Size} gridSize
         * @param {cc.Texture2D} [texture=]
         * @param {Boolean} [flipped=]
         * @param {cc.Rect} [rect=]
         */
        // ctor:function (gridSize, texture, flipped, rect) {
        public constructor(gridSize:Size, texture?:Texture2D, flipped?:boolean, rect:Rect);

        /**
         * returns the vertex at a given position      <br/>
         * It will be deprecated in future, please use getVertex instead.
         * @param {cc.Vec2} pos
         * @return {cc.Vertex3F}
         */
        public vertex(pos:Vec2):Vertex3F;

        /**
         * returns the vertex at a given position
         * @param {cc.Vec2} pos
         * @return {cc.Vertex3F}
         */
        public getVertex(pos:Vec2):Vertex3F;

        /**
         * returns the original (non-transformed) vertex at a given position             <br/>
         * It will be deprecated in future, please use getOriginalVertex instead.
         * @param {cc.Vec2} pos
         * @return {cc.Vertex3F}
         */
        public originalVertex(pos:Vec2):Vertex3F;

        /**
         * returns the original (non-transformed) vertex at a given position
         * @param {cc.Vec2} pos
         * @return {cc.Vertex3F}
         */
        public getOriginalVertex(pos:Vec2):Vertex3F;

        /**
         * sets a new vertex at a given position
         * @param {cc.Vec2} pos
         * @param {cc.Vertex3F} vertex
         */
        public setVertex(pos:Vec2, vertex:Vertex3F):void;

        public beforeBlit():void;

        public afterBlit():void;

        public blit(target:???):void;

        public reuse():void;

        public calculateVertexPoints():void;

        public setNeedDepthTestForBlit(needDepthTest:boolean):void;

        public getNeedDepthTestForBlit():boolean;
    }

    /**
     * cc.TiledGrid3D is a 3D grid implementation. It differs from Grid3D in that   <br/>
     * the tiles can be separated from the grid.
     * @class
     * @extends cc.GridBase
     */
    // cc.TiledGrid3D = cc.GridBase.extend(/** @lends cc.TiledGrid3D# */{
    export class TiledGrid3D extends GridBase {
        // _texCoordinates:null,
        // _vertices:null,
        // _originalVertices:null,
        // _indices:null,

        // _texCoordinateBuffer:null,
        // _verticesBuffer:null,
        // _indicesBuffer:null,

        /**
         * create one TiledGrid3D object
         * Constructor of cc.TiledGrid3D
         * @param {cc.Size} gridSize
         * @param {cc.Texture2D} [texture=]
         * @param {Boolean} [flipped=]
         */
        // ctor:function (gridSize, texture, flipped, rect) {
        public constructor(gridSize:Size, texture?:Texture2D, flipped?:boolean, rect?:Rect);

        /**
         * returns the tile at the given position    <br/>
         * It will be deprecated in future, please use getTile instead.
         * @param {cc.Vec2} pos
         * @return {cc.Quad3}
         */
        public tile(pos:Vec2):Quad3;

        /**
         * returns the tile at the given position
         * @param {cc.Vec2} pos
         * @return {cc.Quad3}
         */
        public getTile(pos:Vec2):Quad3;

        /**
         * returns the original tile (untransformed) at the given position
         * @param {cc.Vec2} pos
         * @return {cc.Quad3}
         */
        public getOriginalTile(pos:Vec2):Quad3;

        /**
         * returns the original tile (untransformed) at the given position.      <br/>
         * It will be deprecated in future, please use getOriginalTile instead.
         * @param {cc.Vec2} pos
         * @return {cc.Quad3}
         */
        public originalTile(pos:Vec2):Quad3;

        /**
         * sets a new tile
         * @param {cc.Vec2} pos
         * @param {cc.Quad3} coords
         */
        public setTile(pos:Vec2, coords:Quad3):void;

        public blit(target:???):void;

        public reuse():void;

        public calculateVertexPoints():void;

    }
}
