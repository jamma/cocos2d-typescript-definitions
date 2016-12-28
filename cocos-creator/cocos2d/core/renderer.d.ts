/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/renderer/DirtyRegion.js
    //+--------------------------------------------------------------------------------

    export class Region {

    // var regionProto = Region.prototype;

    // var regionPool = [];

    // function regionCreate() {
    //     var region = regionPool.pop();
    //     if (!region) {
    //         region = new Region();
    //     }
    //     return region;
    // }

    // function regionRelease(region) {
    //     regionPool.push(region);
    // }

        public setTo(minX:number, minY:number, maxX:number, maxY:number):Region;

        //convert region to int values which is fast for clipping
        public intValues():void;

        //update the area of region
        public updateArea():void;

        //merge two region into one
        public union(target:Region):void;

        //set region to empty
        public setEmpty():void;

        public isEmpty():boolean;

        //check whether two region is intersects or not
        public intersects(target:Region):boolean

        //update region by a rotated bounds
        public updateRegion(bounds:Rect, matrix:AffineTransform):void;

    // //get the area of the unioned region of r1 and r2
    // function unionArea(r1, r2) {
    //     var minX = r1._minX < r2._minX ? r1._minX : r2._minX;
    //     var minY = r1._minY < r2._minY ? r1._minY : r2._minY;
    //     var maxX = r1._maxX > r2._maxX ? r1._maxX : r2._maxX;
    //     var maxY = r1._maxY > r2._maxY ? r1._maxY : r2._maxY;
    //     return (maxX - minX) * (maxY - minY);
    // }
    }

    //DirtyRegion is used to collect the dirty area which need to be rerendered in canvas
    //there may be many small regions which is dirty, the dirty region will merge it into several big one to optimise performance
    // var DirtyRegion = function() {
    export class DirtyRegion {
        public dirtyList:Region[];
        public hasClipRect:boolean;
        public clipWidth:number;
        public clipHeight:number;
        public clipArea:number;
        public clipRectChanged:boolean;

        //clip rect, regions will not be considered if it is outside
        public setClipRect(width:number, height:number):void;

        //add a new region which is dirty (need to be rendered)
        public addRegion(target:Region):boolean;

        //clear all the dirty regions
        public clear():void;

        //get the merged dirty regions
        public getDirtyRegions():Region[];

        //merge the small dirty regions into bigger region, to improve the performance of dirty regions
        public mergeDirtyList(dirtyList:Region[]):boolean;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/renderer/RenderCanvas.js
    // NOTE: Ignoring this file.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/renderer/RenderWebGL.js
    // NOTE: Ignoring this file.
    //+--------------------------------------------------------------------------------
}
