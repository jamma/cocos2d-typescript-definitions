/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCAnimation.js
    // NOTE: Ignored because this functionality has been deprecated in favor of
    //       cc.Animation.
    //+--------------------------------------------------------------------------------


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCAnimationCache.js
    // NOTE: Ignored because this functionality has been deprecated in favor of
    //       cc.Animation.
    //+--------------------------------------------------------------------------------


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCBakeSprite.js
    //+--------------------------------------------------------------------------------
    /**
     * cc.BakeSprite is a type of sprite that will be cached.
     * @class
     * @extends _ccsg.Sprite
     */
    // cc.BakeSprite = _ccsg.Sprite.extend(/** @lends cc.BakeSprite# */{
    export class BakeSprite extends Sprite {
        // _cacheCanvas: null,
        // _cacheContext: null,

        // ctor: function(){
        public constructor();

        public getCacheContext():CacheContext;

        public getCacheCanvas():CacheCanvas;

        /**
         * reset the cache canvas size
         * @param {cc.Size|Number} sizeOrWidth  size or width
         * @param {Number} [height]
         */
        public resetCanvasSize(sizeOrWidth:Size|number, height?:number):void;
    }

    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCScale9Sprite.js
    //+--------------------------------------------------------------------------------
    // var EventTarget = require("../cocos2d/core/event/event-target");

    // var dataPool = {
    //     _pool: {},
    //     _lengths: [],
    //     put: function (data) {
    //         var length = data.length;
    //         if (!this._pool[length]) {
    //             this._pool[length] = [data];
    //             this._lengths.push(length);
    //             this._lengths.sort();
    //         }
    //         else {
    //             this._pool[length].push(data);
    //         }
    //     },
    //     get: function (length) {
    //         var id;
    //         for (var i = 0; i < this._lengths.length; i++) {
    //             if (this._lengths[i] >= length) {
    //                 id = this._lengths[i];
    //                 break;
    //             }
    //         }
    //         if (id) {
    //             return this._pool[id].pop();
    //         }
    //         else {
    //             return undefined;
    //         }
    //     }
    // };

    // var FIX_ARTIFACTS_BY_STRECHING_TEXEL = cc.macro.FIX_ARTIFACTS_BY_STRECHING_TEXEL,
    //     webgl, 
    //     vl, vb, vt, vr, 
    //     cornerId = [];

    /*
     * <p>
     * A 9-slice sprite for cocos2d UI.                                                                    <br/>
     *                                                                                                     <br/>
     * 9-slice scaling allows you to specify how scaling is applied                                        <br/>
     * to specific areas of a sprite. With 9-slice scaling (3x3 grid),                                     <br/>
     * you can ensure that the sprite does not become distorted when                                       <br/>
     * scaled.                                                                                             <br/>
     * @note: it will refactor in v3.1                                                                    <br/>
     * @see http://yannickloriot.com/library/ios/cccontrolextension/Classes/CCScale9Sprite.html            <br/>
     * </p>
     * @class
     * @extends _ccsg.Node
     *
     * @property {cc.Size}  preferredSize   - The preferred size of the 9-slice sprite
     * @property {cc.Rect}  capInsets       - The cap insets of the 9-slice sprite
     * @property {Number}   insetLeft       - The left inset of the 9-slice sprite
     * @property {Number}   insetTop        - The top inset of the 9-slice sprite
     * @property {Number}   insetRight      - The right inset of the 9-slice sprite
     * @property {Number}   insetBottom     - The bottom inset of the 9-slice sprite
     */
    // var simpleQuadGenerator = {
    //     _rebuildQuads_base: function (sprite, spriteFrame, contentSize, isTrimmedContentSize) {
    //         //build vertices
    //         var vertices = sprite._vertices,
    //             wt = sprite._renderCmd._worldTransform,
    //             l, b, r, t;
    //         if (isTrimmedContentSize) {
    //             l = 0;
    //             b = 0;
    //             r = contentSize.width;
    //             t = contentSize.height;
    //         } else {
    //             var originalSize = spriteFrame._originalSize;
    //             var rect = spriteFrame._rect;
    //             var offset = spriteFrame._offset;
    //             var scaleX = contentSize.width / originalSize.width;
    //             var scaleY = contentSize.height / originalSize.height;
    //             var trimmLeft = offset.x + (originalSize.width - rect.width) / 2;
    //             var trimmRight = offset.x - (originalSize.width - rect.width) / 2;
    //             var trimmedBottom = offset.y + (originalSize.height - rect.height) / 2;
    //             var trimmedTop = offset.y - (originalSize.height - rect.height) / 2;

    //             l = trimmLeft * scaleX;
    //             b = trimmedBottom * scaleY;
    //             r = contentSize.width + trimmRight * scaleX;
    //             t = contentSize.height + trimmedTop * scaleY;
    //         }

    //         if (vertices.length < 8) {
    //             dataPool.put(vertices);
    //             vertices = dataPool.get(8) || new Float32Array(8);
    //             sprite._vertices = vertices;
    //         }
    //         // bl, br, tl, tr
    //         if (webgl) {
    //             vertices[0] = l * wt.a + b * wt.c + wt.tx;
    //             vertices[1] = l * wt.b + b * wt.d + wt.ty;
    //             vertices[2] = r * wt.a + b * wt.c + wt.tx;
    //             vertices[3] = r * wt.b + b * wt.d + wt.ty;
    //             vertices[4] = l * wt.a + t * wt.c + wt.tx;
    //             vertices[5] = l * wt.b + t * wt.d + wt.ty;
    //             vertices[6] = r * wt.a + t * wt.c + wt.tx;
    //             vertices[7] = r * wt.b + t * wt.d + wt.ty;
    //         }
    //         else {
    //             vertices[0] = l;
    //             vertices[1] = b;
    //             vertices[2] = r;
    //             vertices[3] = b;
    //             vertices[4] = l;
    //             vertices[5] = t;
    //             vertices[6] = r;
    //             vertices[7] = t;
    //         }

    //         cornerId[0] = 0;
    //         cornerId[1] = 2;
    //         cornerId[2] = 4;
    //         cornerId[3] = 6;

    //         //build uvs
    //         if (sprite._uvsDirty) {
    //             this._calculateUVs(sprite, spriteFrame);
    //         }

    //         sprite._vertCount = 4;
    //     },

    //     _calculateUVs: function (sprite, spriteFrame) {
    //         var uvs = sprite._uvs;
    //         var atlasWidth = spriteFrame._texture._pixelWidth;
    //         var atlasHeight = spriteFrame._texture._pixelHeight;
    //         var textureRect = spriteFrame._rect;

    //         if (uvs.length < 8) {
    //             dataPool.put(uvs);
    //             uvs = dataPool.get(8) || new Float32Array(8);
    //             sprite._uvs = uvs;
    //         }

    //         //uv computation should take spritesheet into account.
    //         var l, b, r, t;
    //         var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? 0.5 : 0;

    //         if (spriteFrame._rotated) {
    //             l = (textureRect.x + texelCorrect) / atlasWidth;
    //             b = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
    //             r = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;
    //             t = (textureRect.y + texelCorrect) / atlasHeight;
    //             uvs[0] = l; uvs[1] = t;
    //             uvs[2] = l; uvs[3] = b;
    //             uvs[4] = r; uvs[5] = t;
    //             uvs[6] = r; uvs[7] = b;
    //         }
    //         else {
    //             l = (textureRect.x + texelCorrect) / atlasWidth;
    //             b = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;
    //             r = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;
    //             t = (textureRect.y + texelCorrect) / atlasHeight;
    //             uvs[0] = l; uvs[1] = b;
    //             uvs[2] = r; uvs[3] = b;
    //             uvs[4] = l; uvs[5] = t;
    //             uvs[6] = r; uvs[7] = t;
    //         }
    //     }
    // };

    // var scale9QuadGenerator = {
    //     x: new Array(4),
    //     y: new Array(4),
    //     _rebuildQuads_base: function (sprite, spriteFrame, contentSize, insetLeft, insetRight, insetTop, insetBottom) {
    //         //build vertices
    //         var vertices = sprite._vertices;
    //         var wt = sprite._renderCmd._worldTransform;
    //         var leftWidth, centerWidth, rightWidth;
    //         var topHeight, centerHeight, bottomHeight;
    //         var rect = spriteFrame._rect;

    //         leftWidth = insetLeft;
    //         rightWidth = insetRight;
    //         centerWidth = rect.width - leftWidth - rightWidth;
    //         topHeight = insetTop;
    //         bottomHeight = insetBottom;
    //         centerHeight = rect.height - topHeight - bottomHeight;

    //         var preferSize = contentSize;
    //         var sizableWidth = preferSize.width - leftWidth - rightWidth;
    //         var sizableHeight = preferSize.height - topHeight - bottomHeight;
    //         var xScale = preferSize.width / (leftWidth + rightWidth);
    //         var yScale = preferSize.height / (topHeight + bottomHeight);
    //         xScale = xScale > 1 ? 1 : xScale;
    //         yScale = yScale > 1 ? 1 : yScale;
    //         sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
    //         sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
    //         var x = this.x;
    //         var y = this.y;
    //         x[0] = 0;
    //         x[1] = leftWidth * xScale;
    //         x[2] = x[1] + sizableWidth;
    //         x[3] = preferSize.width;
    //         y[0] = 0;
    //         y[1] = bottomHeight * yScale;
    //         y[2] = y[1] + sizableHeight;
    //         y[3] = preferSize.height;

    //         if (vertices.length < 32) {
    //             dataPool.put(vertices);
    //             vertices = dataPool.get(32) || new Float32Array(32);
    //             sprite._vertices = vertices;
    //         }
    //         var offset = 0, row, col;
    //         if (webgl) {
    //             for (row = 0; row < 4; row++) {
    //                 for (col = 0; col < 4; col++) {
    //                     vertices[offset] = x[col] * wt.a + y[row] * wt.c + wt.tx;
    //                     vertices[offset+1] = x[col] * wt.b + y[row] * wt.d + wt.ty;
    //                     offset += 2;
    //                 }
    //             }
    //         }
    //         else {
    //             for (row = 0; row < 4; row++) {
    //                 for (col = 0; col < 4; col++) {
    //                     vertices[offset] = x[col];
    //                     vertices[offset+1] = y[row];
    //                     offset += 2;
    //                 }
    //             }
    //         }

    //         cornerId[0] = 0;
    //         cornerId[1] = 6;
    //         cornerId[2] = 24;
    //         cornerId[3] = 30;

    //         //build uvs
    //         if (sprite._uvsDirty) {
    //             this._calculateUVs(sprite, spriteFrame, insetLeft, insetRight, insetTop, insetBottom);
    //         }
    //     },

    //     _calculateUVs: function (sprite, spriteFrame, insetLeft, insetRight, insetTop, insetBottom) {
    //         var uvs = sprite._uvs;
    //         var rect = spriteFrame._rect;
    //         var atlasWidth = spriteFrame._texture._pixelWidth;
    //         var atlasHeight = spriteFrame._texture._pixelHeight;

    //         //caculate texture coordinate
    //         var leftWidth, centerWidth, rightWidth;
    //         var topHeight, centerHeight, bottomHeight;
    //         var textureRect = spriteFrame._rect;

    //         leftWidth = insetLeft;
    //         rightWidth = insetRight;
    //         centerWidth = rect.width - leftWidth - rightWidth;
    //         topHeight = insetTop;
    //         bottomHeight = insetBottom;
    //         centerHeight = rect.height - topHeight - bottomHeight;

    //         if (uvs.length < 32) {
    //             dataPool.put(uvs);
    //             uvs = dataPool.get(32) || new Float32Array(32);
    //             sprite._uvs = uvs;
    //         }

    //         //uv computation should take spritesheet into account.
    //         var u = this.x;
    //         var v = this.y;
    //         var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? 0.5 : 0;
    //         var offset = 0, row, col;

    //         if (spriteFrame._rotated) {
    //             u[0] = (textureRect.x + texelCorrect) / atlasWidth;
    //             u[1] = (bottomHeight + textureRect.x) / atlasWidth;
    //             u[2] = (bottomHeight + centerHeight + textureRect.x) / atlasWidth;
    //             u[3] = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;

    //             v[3] = (textureRect.y + texelCorrect) / atlasHeight;
    //             v[2] = (leftWidth + textureRect.y) / atlasHeight;
    //             v[1] = (leftWidth + centerWidth + textureRect.y) / atlasHeight;
    //             v[0] = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
                
    //             for (row = 0; row < 4; row++) {
    //                 for (col = 0; col < 4; col++) {
    //                     uvs[offset] = u[row];
    //                     uvs[offset+1] = v[3-col];
    //                     offset += 2;
    //                 }
    //             }
    //         }
    //         else {
    //             u[0] = (textureRect.x + texelCorrect) / atlasWidth;
    //             u[1] = (leftWidth + textureRect.x) / atlasWidth;
    //             u[2] = (leftWidth + centerWidth + textureRect.x) / atlasWidth;
    //             u[3] = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;

    //             v[3] = (textureRect.y + texelCorrect) / atlasHeight;
    //             v[2] = (topHeight + textureRect.y) / atlasHeight;
    //             v[1] = (topHeight + centerHeight + textureRect.y) / atlasHeight;
    //             v[0] = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;

    //             for (row = 0; row < 4; row++) {
    //                 for (col = 0; col < 4; col++) {
    //                     uvs[offset] = u[col];
    //                     uvs[offset+1] = v[row];
    //                     offset += 2;
    //                 }
    //             }
    //         }
    //     }
    // };

    // var tiledQuadGenerator = {
    //     _rebuildQuads_base: function (sprite, spriteFrame, contentSize) {
    //         var vertices = sprite._vertices,
    //             wt = sprite._renderCmd._worldTransform,
    //             uvs = sprite._uvs;
    //         //build uvs
    //         var atlasWidth = spriteFrame._texture._pixelWidth;
    //         var atlasHeight = spriteFrame._texture._pixelHeight;
    //         var textureRect = spriteFrame._rect;

    //         //uv computation should take spritesheet into account.
    //         var u0, v0, u1, v1;
    //         var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? 0.5 : 0;
    //         if (spriteFrame._rotated) {
    //             u0 = (textureRect.x + texelCorrect) / atlasWidth;
    //             u1 = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;
    //             v0 = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
    //             v1 = (textureRect.y + texelCorrect) / atlasHeight;
    //         }
    //         else {
    //             u0 = (textureRect.x + texelCorrect) / atlasWidth;
    //             u1 = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;
    //             v0 = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;
    //             v1 = (textureRect.y + texelCorrect) / atlasHeight;
    //         }
            
    //         //build quads
    //         var rectWidth = textureRect.width;
    //         var rectHeight = textureRect.height;
    //         var hRepeat = contentSize.width / rectWidth;
    //         var vRepeat = contentSize.height / rectHeight;
    //         var row = Math.ceil(vRepeat), col = Math.ceil(hRepeat);

    //         if (row * col > (65536 / 4)) {
    //             cc.error('too many tiles, only 16384 tiles will be show');
    //         }
    //         var dataLength = row * col * 4 * 2;
    //         if (vertices.length < dataLength) {
    //             dataPool.put(vertices);
    //             vertices = dataPool.get(dataLength) || new Float32Array(dataLength);
    //             sprite._vertices = vertices;
    //         }
    //         if (uvs.length < dataLength) {
    //             dataPool.put(uvs);
    //             uvs = dataPool.get(dataLength) || new Float32Array(dataLength);
    //             sprite._uvs = uvs;
    //         }

    //         var offset = 0, l, b, r, t;
    //         sprite._vertCount = 0;
    //         for (var vindex = 0; vindex < row; ++vindex) {
    //             for (var hindex = 0; hindex < col; ++hindex) {
    //                 l = rectWidth * hindex;
    //                 b = rectHeight * vindex;
    //                 r = rectWidth * Math.min(hindex + 1, hRepeat);
    //                 t = rectHeight * Math.min(vindex + 1, vRepeat);
    //                 // bl.x, bl.y, br.x, br.y, tl.x, tl.y, tr.x, tr.y
    //                 if (webgl) {
    //                     vertices[offset] = l * wt.a + b * wt.c + wt.tx;
    //                     vertices[offset + 1] = l * wt.b + b * wt.d + wt.ty;
    //                     vertices[offset + 2] = r * wt.a + b * wt.c + wt.tx;
    //                     vertices[offset + 3] = r * wt.b + b * wt.d + wt.ty;
    //                     vertices[offset + 4] = l * wt.a + t * wt.c + wt.tx;
    //                     vertices[offset + 5] = l * wt.b + t * wt.d + wt.ty;
    //                     vertices[offset + 6] = r * wt.a + t * wt.c + wt.tx;
    //                     vertices[offset + 7] = r * wt.b + t * wt.d + wt.ty;
    //                 }
    //                 else {
    //                     vertices[offset] = l;
    //                     vertices[offset + 1] = b;
    //                     vertices[offset + 2] = r;
    //                     vertices[offset + 3] = b;
    //                     vertices[offset + 4] = l;
    //                     vertices[offset + 5] = t;
    //                     vertices[offset + 6] = r;
    //                     vertices[offset + 7] = t;
    //                 }

    //                 if (!spriteFrame._rotated) {
    //                     uvs[offset] = u0;
    //                     uvs[offset + 1] = v0;
    //                     uvs[offset + 2] = r = u0 + (u1 - u0) * Math.min(1, hRepeat - hindex);
    //                     uvs[offset + 3] = v0;
    //                     uvs[offset + 4] = u0;
    //                     uvs[offset + 5] = t = v0 + (v1 - v0) * Math.min(1, vRepeat - vindex);
    //                     uvs[offset + 6] = r;
    //                     uvs[offset + 7] = t;
    //                 } else {
    //                     uvs[offset] = u0;
    //                     uvs[offset + 1] = v1;
    //                     uvs[offset + 2] = u0;
    //                     uvs[offset + 3] = t = v1 + (v0 - v1) * Math.min(1, hRepeat - hindex);
    //                     uvs[offset + 4] = r = u0 + (u1 - u0) * Math.min(1, vRepeat - vindex);
    //                     uvs[offset + 5] = v1;
    //                     uvs[offset + 6] = r;
    //                     uvs[offset + 7] = t;
    //                 }
    //                 offset += 8;
    //                 sprite._vertCount += 4;
    //                 if (offset > dataLength) return;
    //             }
    //         }

    //         cornerId[0] = 0;
    //         cornerId[1] = col * 8 + 2;
    //         cornerId[2] = dataLength - col * 8 + 4;
    //         cornerId[3] = dataLength - 2;
    //     }
    // };

    // var fillQuadGeneratorBar = {
    //     //percentage from 0 to 1;
    //     _rebuildQuads_base : function (sprite, spriteFrame, contentSize, fillType, fillStart, fillRange) {
    //         var vertices = sprite._vertices,
    //             wt = sprite._renderCmd._worldTransform,
    //             uvs = sprite._uvs;
    //         var fillEnd;
    //         //build vertices
    //         var l = 0, b = 0, 
    //             r = contentSize.width, t = contentSize.height;
    //         //build uvs
    //         var atlasWidth = spriteFrame._texture._pixelWidth;
    //         var atlasHeight = spriteFrame._texture._pixelHeight;
    //         var textureRect = spriteFrame._rect;
    //         //uv computation should take spritesheet into account.
    //         var ul, vb, ur, vt;
    //         var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? 0.5 : 0;
    //         if (spriteFrame._rotated) {
    //             ul = (textureRect.x + texelCorrect) / atlasWidth;
    //             vb = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
    //             ur = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;
    //             vt = (textureRect.y + texelCorrect) / atlasHeight;
    //         }
    //         else {
    //             ul = (textureRect.x + texelCorrect) / atlasWidth;
    //             vb = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;
    //             ur = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;
    //             vt = (textureRect.y + texelCorrect) / atlasHeight;
    //         }

    //         if (vertices.length < 8) {
    //             dataPool.put(vertices);
    //             vertices = dataPool.get(8) || new Float32Array(8);
    //             sprite._vertices = vertices;
    //         }
    //         if (uvs.length < 8) {
    //             dataPool.put(uvs);
    //             uvs = dataPool.get(8) || new Float32Array(8);
    //             sprite._uvs = uvs;
    //         }

    //         var quadUV = new Array(8);
    //         if (!spriteFrame._rotated) {
    //             quadUV[0] = quadUV[4] = ul;
    //             quadUV[2] = quadUV[6] = ur;
    //             quadUV[1] = quadUV[3] = vb;
    //             quadUV[5] = quadUV[7] = vt;
    //         } else {
    //             quadUV[0] = quadUV[2] = ul;
    //             quadUV[4] = quadUV[6] = ur;
    //             quadUV[3] = quadUV[7] = vb;
    //             quadUV[1] = quadUV[5] = vt;
    //         }

    //         //do clamp
    //         fillStart = fillStart > 1 ? 1 : fillStart;
    //         fillStart = fillStart < 0 ? 0 : fillStart;
    //         fillRange = fillRange < 0 ? 0 : fillRange;
    //         fillEnd = fillStart + fillRange;
    //         fillEnd = fillEnd > 1 ? 1 : fillEnd;

    //         // bl : 0, 1
    //         // br : 2, 3
    //         // tl : 4, 5
    //         // tr : 6, 7
    //         var progressStart, progressEnd;
    //         switch (fillType) {
    //             case FillType.HORIZONTAL:
    //                 progressStart = l + (r - l) * fillStart;
    //                 progressEnd = l + (r - l) * fillEnd;

    //                 l = progressStart;
    //                 r = progressEnd;

    //                 uvs[0] = quadUV[0] + (quadUV[2] - quadUV[0]) * fillStart;
    //                 uvs[1] = quadUV[1];
    //                 uvs[2] = quadUV[0] + (quadUV[2] - quadUV[0]) * fillEnd;
    //                 uvs[3] = quadUV[3];
    //                 uvs[4] = quadUV[4] + (quadUV[6] - quadUV[4]) * fillStart;
    //                 uvs[5] = quadUV[5];
    //                 uvs[6] = quadUV[4] + (quadUV[6] - quadUV[4]) * fillEnd;
    //                 uvs[7] = quadUV[7];
    //                 break;
    //             case FillType.VERTICAL:
    //                 progressStart = b + (t - b) * fillStart;
    //                 progressEnd = b + (t - b) * fillEnd;

    //                 b = progressStart;
    //                 t = progressEnd;

    //                 uvs[0] = quadUV[0];
    //                 uvs[1] = quadUV[1] + (quadUV[5] - quadUV[1]) * fillStart;
    //                 uvs[2] = quadUV[2];
    //                 uvs[3] = quadUV[3] + (quadUV[7] - quadUV[3]) * fillStart;
    //                 uvs[4] = quadUV[4];
    //                 uvs[5] = quadUV[1] + (quadUV[5] - quadUV[1]) * fillEnd;
    //                 uvs[6] = quadUV[6];
    //                 uvs[7] = quadUV[3] + (quadUV[7] - quadUV[3]) * fillEnd;
    //                 break;
    //             default:
    //                 cc.error('Unrecognized fill type in bar fill');
    //                 break;
    //         }

    //         //build vertices
    //         if (webgl) {
    //             vertices[0] = l * wt.a + b * wt.c + wt.tx;
    //             vertices[1] = l * wt.b + b * wt.d + wt.ty;
    //             vertices[2] = r * wt.a + b * wt.c + wt.tx;
    //             vertices[3] = r * wt.b + b * wt.d + wt.ty;
    //             vertices[4] = l * wt.a + t * wt.c + wt.tx;
    //             vertices[5] = l * wt.b + t * wt.d + wt.ty;
    //             vertices[6] = r * wt.a + t * wt.c + wt.tx;
    //             vertices[7] = r * wt.b + t * wt.d + wt.ty;
    //         } else{
    //             vertices[0] = l;
    //             vertices[1] = b;
    //             vertices[2] = r;
    //             vertices[3] = b;
    //             vertices[4] = l;
    //             vertices[5] = t;
    //             vertices[6] = r;
    //             vertices[7] = t;
    //         }

    //         sprite._vertCount = 4;

    //         cornerId[0] = 0;
    //         cornerId[1] = 2;
    //         cornerId[2] = 4;
    //         cornerId[3] = 6;
    //     }
    // };

    // var fillQuadGeneratorRadial = {
    //     _vertPos: [cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0)],
    //     _vertices: [cc.v2(0,0),cc.v2(0,0)],
    //     _uvs: [cc.v2(0,0),cc.v2(0,0)],
    //     _intersectPoint_1: [cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0)],
    //     _intersectPoint_2: [cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0)],
    //     outVerts: null,
    //     outUvs: null,
    //     rawVerts: null,
    //     rawUvs: null,

    //     _rebuildQuads_base : function (sprite, spriteFrame, contentSize, fillCenter, fillStart, fillRange) {
    //         var vertices = sprite._vertices,
    //             uvs = sprite._uvs,
    //             rawVerts = sprite._rawVerts,
    //             rawUvs = sprite._rawUvs,
    //             wt = sprite._renderCmd._worldTransform;
    //         //do round fill start [0,1), include 0, exclude 1
    //         while (fillStart >= 1.0) fillStart -= 1.0;
    //         while (fillStart < 0.0) fillStart += 1.0;
    //         var cx = fillCenter.x * contentSize.width,
    //             cy = fillCenter.y * contentSize.height;
    //         var center = cc.v2( cx, cy);

    //         fillStart *= Math.PI * 2;
    //         fillRange *= Math.PI * 2;
    //         var fillEnd = fillStart + fillRange;

    //         this.outVerts = vertices;
    //         this.outUvs = uvs;
    //         this.rawVerts = rawVerts;
    //         this.rawUvs = rawUvs;

    //         //build vertices
    //         this._calculateVertices(wt, spriteFrame, contentSize);
    //         //build uvs
    //         this._calculateUVs(spriteFrame);

    //         var _vertPos = this._vertPos,
    //             _vertices = this._vertices;

    //         _vertPos[0].x = _vertPos[3].x = _vertices[0].x;
    //         _vertPos[1].x = _vertPos[2].x = _vertices[1].x;
    //         _vertPos[0].y = _vertPos[1].y = _vertices[0].y;
    //         _vertPos[2].y = _vertPos[3].y = _vertices[1].y;

    //         //fallback
    //         //todo remove it if outside is implemented
    //         if(center.x > _vertices[1].x) {
    //             center.x = _vertices[1].x;
    //         }
    //         if(center.x < _vertices[0].x) {
    //             center.x = _vertices[0].x;
    //         }
    //         if(center.y < _vertices[0].y) {
    //             center.y = _vertices[0].y;
    //         }
    //         if(center.y > _vertices[1].y) {
    //             center.y = _vertices[1].y;
    //         }
            
    //         rawVerts[0] = rawVerts[4] = this._vertices[0].x;
    //         rawVerts[2] = rawVerts[6] = this._vertices[1].x;
    //         rawVerts[1] = rawVerts[3] = this._vertices[0].y;
    //         rawVerts[5] = rawVerts[7] = this._vertices[1].y;

    //         if (!spriteFrame._rotated) {
    //             rawUvs[0] = rawUvs[4] = this._uvs[0].x;
    //             rawUvs[2] = rawUvs[6] = this._uvs[1].x;
    //             rawUvs[1] = rawUvs[3] = this._uvs[0].y;
    //             rawUvs[5] = rawUvs[7] = this._uvs[1].y;
    //         } else {
    //             rawUvs[0] = rawUvs[2] = this._uvs[0].x;
    //             rawUvs[4] = rawUvs[6] = this._uvs[1].x;
    //             rawUvs[3] = rawUvs[7] = this._uvs[0].y;
    //             rawUvs[1] = rawUvs[5] = this._uvs[1].y;
    //         }

    //         var triangles = [null, null, null, null];
    //         if(center.x !== this._vertices[0].x) {
    //             triangles[0] = [3, 0];
    //         }
    //         if(center.x !== this._vertices[1].x) {
    //             triangles[2] = [1, 2];
    //         }
    //         if(center.y !== this._vertices[0].y) {
    //             triangles[1] = [0, 1];
    //         }
    //         if(center.y !== this._vertices[1].y) {
    //             triangles[3] = [2, 3];
    //         }

    //         this._getInsectedPoints(this._vertices[0].x, this._vertices[1].x, this._vertices[0].y, this._vertices[1].y, center, fillStart, this._intersectPoint_1);
    //         this._getInsectedPoints(this._vertices[0].x, this._vertices[1].x, this._vertices[0].y, this._vertices[1].y, center, fillStart + fillRange, this._intersectPoint_2);

    //         var dataLength = 3 * 5 * 2;
    //         if (vertices.length < dataLength) {
    //             dataPool.put(vertices);
    //             vertices = dataPool.get(dataLength) || new Float32Array(dataLength);
    //             this.outVerts = sprite._vertices = vertices;
    //         }
    //         if (uvs.length < dataLength) {
    //             dataPool.put(uvs);
    //             uvs = dataPool.get(dataLength) || new Float32Array(dataLength);
    //             this.outUvs = sprite._uvs = uvs;
    //         }

    //         var offset = 0, count = 0;
    //         for(var triangleIndex = 0; triangleIndex < 4; ++triangleIndex) {
    //             var triangle = triangles[triangleIndex];
    //             if(triangle === null) {
    //                 continue;
    //             }
    //             //all in
    //             if(fillRange >= Math.PI * 2) {
    //                 this._generateTriangle(wt, offset, center, this._vertPos[triangle[0]], this._vertPos[triangle[1]]);
    //                 offset += 6;
    //                 count += 3;
    //                 continue;
    //             }
    //             //test against
    //             var startAngle = this._getVertAngle(center, this._vertPos[triangle[0]]);
    //             var endAngle = this._getVertAngle(center, this._vertPos[triangle[1]]);
    //             if(endAngle < startAngle) endAngle += Math.PI * 2;
    //             startAngle -= Math.PI * 2;
    //             endAngle -= Math.PI * 2;
    //             //testing
    //             for(var testIndex = 0; testIndex < 3; ++testIndex) {
    //                 if(startAngle >= fillEnd) {
    //                     //all out
    //                 } else if (startAngle >= fillStart) {
    //                     if(endAngle >= fillEnd) {
    //                         //startAngle to fillEnd
    //                         this._generateTriangle(wt, offset, center, this._vertPos[triangle[0]], this._intersectPoint_2[triangleIndex]);
    //                     } else {
    //                         //startAngle to endAngle
    //                         this._generateTriangle(wt, offset, center, this._vertPos[triangle[0]], this._vertPos[triangle[1]]);
    //                     }
    //                     offset += 6;
    //                     count += 3;
    //                 } else {
    //                     //startAngle < fillStart
    //                     if(endAngle <= fillStart) {
    //                         //all out
    //                     } else if(endAngle <= fillEnd) {
    //                         //fillStart to endAngle
    //                         this._generateTriangle(wt, offset, center, this._intersectPoint_1[triangleIndex], this._vertPos[triangle[1]]);
    //                         offset += 6;
    //                         count += 3;
    //                     } else {
    //                         //fillStart to fillEnd
    //                         this._generateTriangle(wt, offset, center, this._intersectPoint_1[triangleIndex], this._intersectPoint_2[triangleIndex]);
    //                         offset += 6;
    //                         count += 3;
    //                     }
    //                 }
    //                 //add 2 * PI
    //                 startAngle += Math.PI * 2;
    //                 endAngle += Math.PI * 2;
    //             }
    //         }
    //         sprite._vertCount = count;

    //         cornerId[0] = 0;
    //         cornerId[1] = 2;
    //         cornerId[2] = 4;
    //         cornerId[3] = 6;
    //     },

    //     _generateTriangle: function(wt, offset, vert0, vert1, vert2) {
    //         var rawVerts = this.rawVerts;
    //         var rawUvs = this.rawUvs;
    //         var vertices = this.outVerts;
    //         var v0x = rawVerts[0];
    //         var v0y = rawVerts[1];
    //         var v1x = rawVerts[6];
    //         var v1y = rawVerts[7];
    //         var progressX, progressY;
    //         // tl: 0, 1
    //         // bl: 2, 3
    //         // tr: 4, 5
    //         if(webgl) {
    //             vertices[offset]  = vert0.x * wt.a + vert0.y * wt.c + wt.tx;
    //             vertices[offset+1]  = vert0.x * wt.b + vert0.y * wt.d + wt.ty;
    //             vertices[offset+2]  = vert1.x * wt.a + vert1.y * wt.c + wt.tx;
    //             vertices[offset+3]  = vert1.x * wt.b + vert1.y * wt.d + wt.ty;
    //             vertices[offset+4]  = vert2.x * wt.a + vert2.y * wt.c + wt.tx;
    //             vertices[offset+5]  = vert2.x * wt.b + vert2.y * wt.d + wt.ty;

    //         } else {
    //             vertices[offset]  = vert0.x;
    //             vertices[offset+1]  = vert0.y;
    //             vertices[offset+2]  = vert1.x;
    //             vertices[offset+3]  = vert1.y;
    //             vertices[offset+4]  = vert2.x;
    //             vertices[offset+5]  = vert2.y;
    //         }

    //         progressX = (vert0.x - v0x) / (v1x - v0x);
    //         progressY = (vert0.y - v0y) / (v1y - v0y);
    //         this._generateUV(progressX, progressY, rawUvs, offset);

    //         progressX = (vert1.x - v0x) / (v1x - v0x);
    //         progressY = (vert1.y - v0y) / (v1y - v0y);
    //         this._generateUV(progressX, progressY, rawUvs, offset + 2);

    //         progressX = (vert2.x - v0x) / (v1x - v0x);
    //         progressY = (vert2.y - v0y) / (v1y - v0y);
    //         this._generateUV(progressX, progressY, rawUvs, offset + 4);
    //     },

    //     _generateUV : function(progressX, progressY, uvs, offset) {
    //         var out = this.outUvs;
    //         var px1 = uvs[0] + (uvs[2] - uvs[0]) * progressX;
    //         var px2 = uvs[4] + (uvs[6] - uvs[4]) * progressX;
    //         var py1 = uvs[1] + (uvs[3] - uvs[1]) * progressX;
    //         var py2 = uvs[5] + (uvs[7] - uvs[5]) * progressX;
    //         out[offset] = px1 + (px2 - px1) * progressY;
    //         out[offset+1] = py1 + (py2 - py1) * progressY;
    //     },

    //     _isAngleIn : function(angle, start, rangeAngle) {
    //         var pi_2 = Math.PI * 2;
    //         while(angle < start || angle >= start + pi_2) {
    //             if(angle < start) {
    //                 angle += pi_2;
    //             }
    //             if(angle >= start + pi_2) {
    //                 angle -= pi_2;
    //             }
    //         }

    //         return angle <= start + rangeAngle;
    //     },

    //     //[0,PI * 2)
    //     _getVertAngle: function(start, end) {
    //         var placementX, placementY;
    //         placementX = end.x - start.x;
    //         placementY = end.y - start.y;

    //         if(placementX === 0 && placementY === 0) {
    //             return undefined;
    //         } else if(placementX === 0) {
    //             if(placementY > 0) {
    //                 return Math.PI * 0.5;
    //             } else {
    //                 return Math.PI * 1.5;
    //             }
    //         } else {
    //             var angle = Math.atan(placementY / placementX);
    //             if(placementX < 0) {
    //                 angle += Math.PI;
    //             }

    //             return angle;
    //         }
    //     },

    //     _getInsectedPoints: function(left, right, bottom, top, center, angle, intersectPoints) {
    //         //left bottom, right, top
    //         var result = [null, null, null, null];
    //         var sinAngle = Math.sin(angle);
    //         var cosAngle = Math.cos(angle);
    //         var tanAngle,cotAngle;
    //         if(Math.cos(angle) !== 0) {
    //             tanAngle = sinAngle / cosAngle;
    //             //calculate right and left
    //             if((left - center.x) * cosAngle > 0) {
    //                 var yleft = center.y + tanAngle * (left - center.x);
    //                 intersectPoints[0].x = left;
    //                 intersectPoints[0].y = yleft;
    //             }
    //             if((right - center.x) * cosAngle > 0) {
    //                 var yright = center.y + tanAngle * (right - center.x);

    //                 intersectPoints[2].x = right;
    //                 intersectPoints[2].y = yright;
    //             }

    //         }

    //         if(Math.sin(angle) !== 0) {
    //             cotAngle = cosAngle / sinAngle;
    //             //calculate  top and bottom
    //             if((top - center.y) * sinAngle > 0) {
    //                 var xtop = center.x  + cotAngle * (top-center.y);
    //                 intersectPoints[3].x = xtop;
    //                 intersectPoints[3].y = top;
    //             }
    //             if((bottom - center.y) * sinAngle > 0) {
    //                 var xbottom = center.x  + cotAngle * (bottom-center.y);
    //                 intersectPoints[1].x = xbottom;
    //                 intersectPoints[1].y = bottom;
    //             }

    //         }
    //         return result;
    //     },

    //     _calculateVertices : function (wt, spriteFrame, contentSize) {
    //         var x0, x3, y0, y3;
    //         x0 = 0;
    //         y0 = 0;
    //         x3 = contentSize.width;
    //         y3 = contentSize.height;

    //         this._vertices[0].x = x0;
    //         this._vertices[0].y = y0;
    //         this._vertices[1].x = x3;
    //         this._vertices[1].y = y3;
    //     },

    //     _calculateUVs : function (spriteFrame) {
    //         var atlasWidth = spriteFrame._texture._pixelWidth;
    //         var atlasHeight = spriteFrame._texture._pixelHeight;
    //         var textureRect = spriteFrame._rect;

    //         //uv computation should take spritesheet into account.
    //         var u0, u3, v0, v3;
    //         var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? 0.5 : 0;

    //         if (spriteFrame._rotated) {
    //             u0 = (textureRect.x + texelCorrect) / atlasWidth;
    //             u3 = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;

    //             v0 = (textureRect.y + texelCorrect) / atlasHeight;
    //             v3 = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
    //         }
    //         else {
    //             u0 = (textureRect.x + texelCorrect) / atlasWidth;
    //             u3 = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;

    //             v0 = (textureRect.y + texelCorrect) / atlasHeight;
    //             v3 = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;
    //         }

    //         this._uvs[0].x = u0;
    //         this._uvs[0].y = v3;
    //         this._uvs[1].x = u3;
    //         this._uvs[1].y = v0;
    //     }
    // };

    export class Scale9Sprite extends Node {
        public insetLeft:number;
        public insetTop:number;
        public insetRight:number;
        public insetBottom:number;

        public constructor(textureOrSpriteFrame:Texture2D|SpriteFrame|string);

        public loaded():boolean;

        /**
         * Initializes a 9-slice sprite with a texture file
         *
         * @param textureOrTextureFile The name of the texture file.
         */
        public initWithTexture(textureOrTextureFile:Texture2D|string):boolean;

        /**
         * Initializes a 9-slice sprite with an sprite frame
         * @param spriteFrameOrSFName The sprite frame object.
         */
        public initWithSpriteFrame(spriteFrameOrSFName:SpriteFrame|string):boolean;

        /**
         * Change the texture file of 9 slice sprite
         *
         * @param textureOrTextureFile The name of the texture file.
         */
        public setTexture(textureOrTextureFile:Texture2D|string):void;

        /**
         * Change the sprite frame of 9 slice sprite
         *
         * @param spriteFrameOrSFFileName The name of the texture file.
         */
        public setSpriteFrame(spriteFrameOrSFName:SpriteFrame|string):void;

        /**
         * Sets the source blending function.
         *
         * @param blendFunc A structure with source and destination factor to specify pixel arithmetic. e.g. {GL_ONE, GL_ONE}, {GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA}.
         */
        public setBlendFunc(blendFunc:BlendFunc|number, dst?:number):void;

        /**
         * Returns the blending function that is currently being used.
         *
         * @return A BlendFunc structure with source and destination factor which specified pixel arithmetic.
         */
        public getBlendFunc():BlendFunc;

        // overrides
        public setContentSize(width?:Size|number, height:number):void;

        //
        public enableTrimmedContentSize(isTrimmed:boolean):void;

        public isTrimmedContentSizeEnabled():boolean;

        /**
         * Change the state of 9-slice sprite.
         * @see `State`
         * @param state A enum value in State.
         */
        public setState(state:Scale9Sprite.state):void;

        /**
         * Query the current bright state.
         * @return @see `State`
         */
        public getState():Scale9Sprite.state;

        /**
         * change the rendering type, could be simple or slice
         * @return @see `RenderingType`
         */
        public setRenderingType(type:Scale9Sprite.RenderingType):void;

        /**
         * get the rendering type, could be simple or slice
         * @return @see `RenderingType`
         */
        public getRenderingType():Scale9Sprite.RenderingType;

        /**
         * change the left border of 9 slice sprite, it should be specified before trimmed.
         * @param insetLeft left border.
         */
        public setInsetLeft(insetLeft:number):void;

        /**
         * get the left border of 9 slice sprite, the result is specified before trimmed.
         * @return left border.
         */
        public getInsetLeft():number;

        /**
         * change the top border of 9 slice sprite, it should be specified before trimmed.
         * @param insetTop top border.
         */
        public setInsetTop(insetTop:number):void;

        /**
         * get the top border of 9 slice sprite, the result is specified before trimmed.
         * @return top border.
         */
        public getInsetTop():void;

        /**
         * change the right border of 9 slice sprite, it should be specified before trimmed.
         * @param insetRight right border.
         */
        public setInsetRight(insetRight:number):void;

        /**
         * get the right border of 9 slice sprite, the result is specified before trimmed.
         * @return right border.
         */
        public getInsetRight():number;

        /**
         * change the bottom border of 9 slice sprite, it should be specified before trimmed.
         * @param insetBottom bottom border.
         */
        public setInsetBottom(insetBottom:number):void;

        /**
         * get the bottom border of 9 slice sprite, the result is specified before trimmed.
         * @return bottom border.
         */
        public getInsetBottom():number;

        public setFillType(value:Scale9Sprite.FillType):void;

        public getFillType():Scale9Sprite.FillType;

        public setFillCenter(value:Vec2|number, y?:number):void;

        public setDistortionTiling(valueOrX:Vec2|number, y?:number):void;

        public setDistortionOffset(valueOrX:Vec2|number, y?:number):void;

        public getFillCenter():Vec2;

        public setFillStart(value:???):void;

        public getFillStart():???;

        public setFillRange(value:???):void;

        public getFillRange():???;
    }

    // var _p = cc.Scale9Sprite.prototype;
    // cc.js.addon(_p, EventTarget.prototype);
    // // Extended properties
    // cc.defineGetterSetter(_p, 'insetLeft', _p.getInsetLeft, _p.setInsetLeft);
    // cc.defineGetterSetter(_p, 'insetTop', _p.getInsetTop, _p.setInsetTop);
    // cc.defineGetterSetter(_p, 'insetRight', _p.getInsetRight, _p.setInsetRight);
    // cc.defineGetterSetter(_p, 'insetBottom', _p.getInsetBottom, _p.setInsetBottom);

    // cc.Scale9Sprite.state = {NORMAL: 0, GRAY: 1, DISTORTION: 2};

    export module Scale9Sprite {
        public enum state {
            NORMAL,
            GRAY,
            DISTORTION
        }

        /**
         * Enum for sprite type
         * @enum SpriteType
         */
        public enum RenderingType {
            /**
             * @property {Number} SIMPLE
             */
            SIMPLE,
            /**
             * @property {Number} SLICED
             */
            SLICED,
            /*
            * @property {Number} TILED
            */
            TILED,
            /*
            * @property {Number} FILLED
            */
            FILLED
        }

        public enum FillType {
            HORIZONTAL,
            VERTICAL,
            RADIAL
        }
    }


    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCScale9SpriteCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCScale9SpriteWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCSGSprite.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCSGSpriteCanvasRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCSGSpriteWebGLRenderCmd.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCSpriteBatchNode.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCSpriteFrame.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/CCSpriteFrameCache.js
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/sprites/SpritesPropertyDefine.js
    //+--------------------------------------------------------------------------------

}
