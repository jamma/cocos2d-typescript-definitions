/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/node-grid/CCNodeGrid.js
    //+--------------------------------------------------------------------------------

    /**
     * <p>NodeGrid class is a class serves as a decorator of ccsg.Node,<br/>
     * Grid node can run grid actions over all its children   (WebGL only)
     * </p>
     * @type {Class}
     *
     * @property {cc.GridBase}  grid    - Grid object that is used when applying effects
     * @property {_ccsg.Node}      target  - <@writeonly>Target
     */
    export class NodeGrid extends Node {
        public grid:GridBase;
        public target:Node;

        // ctor: function (rect) {
        public constructor(rect:Rect);

        /**
         * Gets the grid object.
         * @returns {cc.GridBase}
         */
        public getGrid():GridBase;

        /**
         * Set the grid object.
         * @param {cc.GridBase} grid
         */
        public setGrid(grid:GridBase):void;

        /**
         * @brief Set the effect grid rect.
         * @param {cc.rect} rect.
         */
        public setGridRect(rect:Rect):void;

        /**
         * @brief Get the effect grid rect.
         * @return {cc.rect} rect.
        */
        public getGridRect():Rect;

        /**
         * Set the target
         * @param {_ccsg.Node} target
         */
        public setTarget(target:Node):void;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/node-grid/CCNodeGridWebGLRenderCmd.js
    //  NOTE: This file is ignored.
    //+--------------------------------------------------------------------------------
}
