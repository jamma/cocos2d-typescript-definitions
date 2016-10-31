
/// <reference path="../../cocos2d-lib.d.ts" />


declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: CCScrollView.js
    // +--------------------------------------------------------------------------------

    /**
     * @ignore
     */
    export const SCROLLVIEW_DIRECTION_NONE:number;
    export const SCROLLVIEW_DIRECTION_HORIZONTAL:number;
    export const SCROLLVIEW_DIRECTION_VERTICAL:number;
    export const SCROLLVIEW_DIRECTION_BOTH:number;
    export const SCROLL_DEACCEL_RATE:number;
    export const SCROLL_DEACCEL_DIST:number;
    export const BOUNCE_DURATION:number;
    export const INSET_RATIO:number;
    export const MOVE_INCH:number;
    export const BOUNCE_BACK_FACTOR:number;

    export function convertDistanceFromPointToInch(pointDis:number):number;

    export interface ScrollViewDelegate extends Class {
        scrollViewDidScroll(view:ScrollView):void;
        scrollViewDidZoom(view:ScrollView):void;
    }

    /**
     * ScrollView support for cocos2d -x.
     * It provides scroll view functionalities to cocos2d projects natively.
     * @class
     * @extends cc.Layer
     *
     * @property {cc.Point}                 minOffset   - <@readonly> The current container's minimum offset
     * @property {cc.Point}                 maxOffset   - <@readonly> The current container's maximum offset
     * @property {Boolean}                  bounceable  - Indicate whether the scroll view is bounceable
     * @property {cc.Size}                  viewSize    - The size of the scroll view
     * @property {cc.Layer}                 container   - The inside container of the scroll view
     * @property {Number}                   direction   - The direction allowed to scroll: cc.SCROLLVIEW_DIRECTION_BOTH by default, or cc.SCROLLVIEW_DIRECTION_NONE | cc.SCROLLVIEW_DIRECTION_HORIZONTAL | cc.SCROLLVIEW_DIRECTION_VERTICAL
     * @property {cc.ScrollViewDelegate}    delegate    - The inside container of the scroll view
     * @property {Boolean}                  clippingToBounds   - Indicate whether the scroll view clips its children
     */
    export class ScrollView extends Layer {
        public minOffset:Point;
        public maxOffset:Point;
        public bounceable:boolean;
        public viewSize:Size;
        public container:Node;
        public direction:number;
        public delegate:ScrollViewDelegate;
        public clippingToBounds:boolean;

        /**
         * @contructor
         * @param size
         * @param container
         * @returns {ScrollView}
         */
        public constructor(size:Size, container?:Node);

        public ctor(size?:Size, container?:Node);

        public init():boolean;

        /**
         * initialized whether success or fail
         * @param {cc.Size} size
         * @param {cc.Node} container
         * @return {Boolean}
         */
        public initWithViewSize(size:Size, container?:Node):boolean;

        /**
         * Sets a new content offset. It ignores max/min offset. It just sets what's given. (just like UIKit's UIScrollView)
         *
         * @param {cc.Point} offset new offset
         * @param {Number} [animated=] If true, the view will scroll to the new offset
         */
        public setContentOffset(offset:Point, animated?:number):void;

        public getContentOffset():Point;

        /**
         * Sets a new content offset. It ignores max/min offset. It just sets what's given. (just like UIKit's UIScrollView) 
         * You can override the animation duration with this method.
         * 
         * @param {cc.Point} offset new offset
         * @param {Number} dt animation duration
         */
        public setContentOffsetInDuration(offset:Point, dt:number):void;

        /**
         * Sets a new scale and does that for a predefined duration.
         *
         * @param {Number} scale a new scale vale
         * @param {Boolean} [animated=null] if YES, scaling is animated
         */
        public setZoomScale(scale:number, animated?:boolean):void;

        public getZoomScale():Point;

        /**
         * Sets a new scale for container in a given duration.
         *
         * @param {Number} s a new scale value
         * @param {Number} dt animation duration
         */
        public setZoomScaleInDuration(s:number, dt:number):void;

        /**
         * Returns the current container's minimum offset. You may want this while you animate scrolling by yourself
         * @return {cc.Point} Returns the current container's minimum offset.
         */
        public minContainerOffset():Point;

        /**
         * Returns the current container's maximum offset. You may want this while you animate scrolling by yourself
         * @return {cc.Point} Returns the current container's maximum offset.
         */
        public maxContainerOffset():Point;

        /**
         * Determines if a given node's bounding box is in visible bounds
         * @param {cc.Node} node
         * @return {Boolean} YES if it is in visible bounds
         */
        public isNodeVisible(node:Node):boolean;

        /**
         * Provided to make scroll view compatible with SWLayer's pause method
         */
        //public pause(sender?:Class):void;

        /**
         * Provided to make scroll view compatible with SWLayer's resume method
         */
        //public resume(sender?:Class):void;

        public isDragging():boolean;

        public isTouchMoved():boolean;

        public isBounceable():boolean;

        public setBounceable(bounceable:boolean):void;

        /**
         * 
         * size to clip. CCNode boundingBox uses contentSize directly.                   
         * It's semantically different what it actually means to common scroll views.    
         * Hence, this scroll view will use a separate size property.
         * 
         */
        public getViewSize():Size;

        public setViewSize(size:Size):void;

        public getContainer():Node;

        public setContainer(container:Node):void;

        /**
         * direction allowed to scroll. CCScrollViewDirectionBoth by default.
         */
        public getDirection():number;

        public setDirection(direction:number):void;

        public getDelegate():ScrollViewDelegate;

        public setDelegate(delegate:ScrollViewDelegate):void;

        /** override functions */
        // optional
        public onTouchBegan(touch:Touch, event:Event):boolean;

        public onTouchMoved(touch:Touch, event:Event):void;

        public onTouchEnded(touch:Touch, event:Event):void;

        public onTouchCancelled(touch:Touch, event:Event):void;

        public updateInset():void;

        /**
         * Determines whether it clips its children or not.
         */
        public isClippingToBounds():boolean;

        public setClippingToBounds(clippingToBounds:Size):void;

        public isTouchEnabled():boolean;

        public setTouchEnabled(enabled:boolean):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: CCSorting.js
    // +--------------------------------------------------------------------------------
    /**
     * The sortable object interface
     * @class
     * @extends cc.Class
     */
    export class SortableObject extends Class {
        setObjectID(objectId:number):void;
        getObjectID():number;
    }

    /**
     * The SortedObject class
     * @class
     * @extends cc.SortableObject
     */
    export class SortedObject extends SortableObject {
        public constructor();
        public ctor();
        public getObjectID():number;
        public setObjectID(objectID:number):void;
    }

    /**
     * Array for object sorting utils
     * @class
     * @extend cc.Class
     */
    export class ArrayForObjectSorting extends Class {
        public ctor();

        public constructor();

        /**
         * Inserts a given object into array.
         *
         * Inserts a given object into array with key and value that are used in
         * sorting. "value" must respond to message, compare:, which returns
         * (NSComparisonResult). If it does not respond to the message, it is appended.
         * If the compare message does not result NSComparisonResult, sorting behavior
         * is not defined. It ignores duplicate entries and inserts next to it.
         *
         * @function
         * @param {Object} addObject    Object to insert
         */
        public insertSortedObject(addObject:{}):void;

        /*!
         * Removes an object in array.
         *
         * Removes an object with given key and value. If no object is found in array
         * with the key and value, no action is taken.
         *
         * @function
         * @param {Object} delObject    Object to remove
         */
        public removeSortedObject(delObject:{}):void;

        /*!
         * Sets a new value of the key for the given object.
         *
         * In case where sorting value must be changed, this message must be sent to
         * keep consistency of being sorted. If it is changed externally, it must be
         * sorted completely again.
         *
         * @function
         * @param {Number} tag          Tag to set
         * @param {Object} setObject    The object which would be set
         */
        public setObjectID_ofSortedObject(tag:number, setObject:{}):void;

        public objectWithObjectID(tag:number):{};

        /*!
         * Returns an object with given key and value.
         *
         * Returns an object with given key and value. If no object is found,
         * it returns nil.
         *
         * @function
         * @param {Number} tag  Tag to locate object
         * @return {Object|null}
         */
        public getObjectWithObjectID(tag:number):{};

        /*!
         * Returns an index of the object with given key and value.
         *
         * Returns the index of an object with given key and value.
         * If no object is found, it returns an index at which the given object value
         * would have been located. If object must be located at the end of array,
         * it returns the length of the array, which is out of bound.
         *
         * @function
         * @param {Number} idxObj   Id to locate object
         * @return {Number} index of an object found
         */
        public indexOfSortedObject(idxObj:number):number;

        //implement array method
        public count():number;

        public lastObject():{};

        public objectAtIndex(idx:number):{};

        public addObject(addObj:{}):void;

        public removeObjectAtIndex(idx:number):void;

        public insertObject(addObj:{}, idx:number):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: CCTableView.js
    // +--------------------------------------------------------------------------------

    /****************************************************************************
     Copyright (c) 2008-2010 Ricardo Quesada
     Copyright (c) 2011-2012 cocos2d-x.org
     Copyright (c) 2013-2014 Chukong Technologies Inc.
     Copyright (c) 2010 Sangwoo Im

     http://www.cocos2d-x.org

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    /**
     * The constant value of the fill style from top to bottom for cc.TableView
     * @constant
     * @type {number}
     */
    export const TABLEVIEW_FILL_TOPDOWN:number;

    /**
     * The constant value of the fill style from bottom to top for cc.TableView
     * @constant
     * @type {number}
     */
    export const TABLEVIEW_FILL_BOTTOMUP:number;

    /**
     * Abstract class for SWTableView cell node
     * @class
     * @abstract
     * @extends cc.Node
     *
     * @property {Number}   objectId    - The index used internally by SWTableView and its subclasses
     */
    export class TableViewCell extends Node {
        public objectId:number;

        /**
         * The index used internally by SWTableView and its subclasses
         */
        public getIdx():number;

        public setIdx(idx:number):void;

        /**
         * Cleans up any resources linked to this cell and resets <code>idx</code> property.
         */
        public reset():void;

        public setObjectID(idx:number):void;

        public getObjectID():number;
    }

    /**
     * Sole purpose of this delegate is to single touch event in this version.
     */
    export interface TableViewDelegate extends ScrollViewDelegate {
        /**
         * Delegate to respond touch event
         *
         * @param {cc.TableView} table table contains the given cell
         * @param {cc.TableViewCell} cell  cell that is touched
         */
        tableCellTouched(table:TableView, cell:TableViewCell):void;

        /**
         * Delegate to respond a table cell press event.
         *
         * @param {cc.TableView} table table contains the given cell
         * @param {cc.TableViewCell} cell  cell that is pressed
         */
        tableCellHighlight(table:TableView, cell:TableViewCell):void;

        /**
         * Delegate to respond a table cell release event
         *
         * @param {cc.TableView} table table contains the given cell
         * @param {cc.TableViewCell} cell  cell that is pressed
         */
        tableCellUnhighlight(table:TableView, cell:TableViewCell):void;

        /**
         * <p>
         * Delegate called when the cell is about to be recycled. Immediately                     <br/>
         * after this call the cell will be removed from the scene graph and                      <br/>
         * recycled.
         * </p>
         * @param table table contains the given cell
         * @param cell  cell that is pressed
         */
        tableCellWillRecycle(table:TableView, cell:TableViewCell):void;
    }

    /**
     * Data source that governs table backend data.
     */
    export class TableViewDataSource extends Class {
        /**
         * cell size for a given index
         * @param {cc.TableView} table table to hold the instances of Class
         * @param {Number} idx the index of a cell to get a size
         * @return {cc.Size} size of a cell at given index
         */
        public tableCellSizeForIndex(table:TableView, idx:number):Size;

        /**
         * cell height for a given table.
         *
         * @param {cc.TableView} table table to hold the instances of Class
         * @return {cc.Size} cell size
         */
        public cellSizeForTable(table:TableView):Size;

        /**
         * a cell instance at a given index
         * @param {cc.TableView} table table to hold the instances of Class
         * @param idx index to search for a cell
         * @return {cc.TableViewCell} cell found at idx
         */
        public tableCellAtIndex(table:TableView, idx:number):TableViewCell;

        /**
         * Returns number of cells in a given table view.
         * @param {cc.TableView} table table to hold the instances of Class
         * @return {Number} number of cells
         */
        public numberOfCellsInTableView(table:TableView):number;
    }

    /**
     * UITableView counterpart for cocos2d for iphone.
     * this is a very basic, minimal implementation to bring UITableView-like component into cocos2d world.
     *
     * @class
     * @extends cc.ScrollView
     *
     * @property {cc.TableViewDataSource}   dataSource          - The data source of the table view
     * @property {cc.TableViewDelegate}     delegate            - The event delegate of the table view
     * @property {Number}                   verticalFillOrder   - The index to determine how cell is ordered and filled in the view
     *
     */
    export class TableView extends ScrollView {
        public dataSource:TableViewDataSource;
        public delegate:TableViewDelegate;
        public verticalFillOrder:number;

        /**
         * The
         * @param dataSource
         * @param size
         * @param container
         */
        public ctor(dataSource:TableViewDataSource, size:Size, container:Node):void;
        public ctor():void;

        /**
         * data source
         */
        public getDataSource():TableViewDataSource;

        public setDataSource(source:TableViewDataSource):void;

        /**
         * delegate
         */
        public getDelegate():TableViewDelegate;

        public setDelegate(delegate:TableViewDelegate):void;

        /**
         * determines how cell is ordered and filled in the view.
         */
        public setVerticalFillOrder(fillOrder:number):void;

        public getVerticalFillOrder():number;

        //public initWithViewSize(size:Size, container:Node):boolean;

        /**
         * Updates the content of the cell at a given index.
         *
         * @param idx index to find a cell
         */
        public updateCellAtIndex(idx:number):void;

        /**
         * Inserts a new cell at a given index
         *
         * @param idx location to insert
         */
        public insertCellAtIndex(idx:number):void;

        /**
         * Removes a cell at a given index
         *
         * @param idx index to find a cell
         */
        public removeCellAtIndex(idx:number):void;

        /**
         * reloads data from data source.  the view will be refreshed.
         */
        public reloadData():void;

        /**
         * Dequeues a free cell if available. nil if not.
         *
         * @return {TableViewCell} free cell
         */
        public dequeueCell():TableViewCell;

        /**
         * Returns an existing cell at a given index. Returns nil if a cell is nonexistent at the moment of query.
         *
         * @param idx index
         * @return {cc.TableViewCell} a cell at a given index
         */
        public cellAtIndex(idx:number):TableViewCell;

        public scrollViewDidScroll(view:Node):void;

        public scrollViewDidZoom(view:Node):void;

        //onTouchBegan(touch:Touch, event:Event):boolean;
        //
        //onTouchMoved(touch:Touch, event:Event):void;
        //
        //onTouchCancelled(touch:Touch, event:Event):void;
        //
        //onTouchEnded(touch:Touch, event:Event):void;
    }
}
