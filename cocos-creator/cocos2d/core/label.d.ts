/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCSGLabel.js
    //  NOTE: This file needs a lot of help, I'm not even sure if it should be included right now.
    //+--------------------------------------------------------------------------------
    export class FontLetterDefinition {
        public constructor();
    }

    export interface FontLetterDefinitionMap {
        [letter:number] : FontLetterDefinition;
    }

    export class FontAtlas {
        public constructor(fntConfig:??);
        // constructor: cc.FontAtlas,
        public setFontSize(fontSize:number);
        public getOriginalFontSize():number;
        public addLetterDefinitions(letter:number, letterDefinition:FontLetterDefinition):void;

        public cloneLetterDefinition():FontLetterDefinitionMap;

        public assignLetterDefinitions(letterDefinition:FontLetterDefinitionMap):void;

        public scaleFontLetterDefinition(scaleFactor:number):void;

        public getLetterDefinitionForChar(char:number):FontLetterDefinition;
    }

    export class LetterInfo {
        public constructor();
    }

    export class Label extends Node implements EventTarget {
        public width:number;
        public height:number;

        //fontHandle it is a system font name, ttf file path or bmfont file path.
        public constructor(string:string, fontHandle?:???, textureUrl?:???);

        public setHorizontalAlign(align:???):void;

        public getHorizontalAlign():???;

        public setVerticalAlign(align:???):void;

        public getVerticalAlign():???;

        public setString(string:string):void;

        public setMargin(value:number):void;

        public getString():string;
        public getStringLength():number;

        public enableWrapText(enabled:boolean):void;

        public isWrapTextEnabled():boolean;
        public getFontName():string;
        public setFontSize(fntSize:number):void;

        public getFontSize():number;

        public isOutlined():boolean;

        public setOutlined(value:boolean):void;

        public getOutlineColor():Color;

        public setOutlineColor(value:Color):void;

        public setOutlineWidth(value:number):void;

        public getOutlineWidth():number;

        public setOverflow(overflow:Label.Overflow):void;

        public getOverflow():Label.Overflow;

        public setSpacingX(spacing:number):void;

        public setLineHeight(lineHeight:number):void;

        public setLineBreakWithoutSpace(lineBreakFlag:boolean):void;

        public getSpacingX():number;

        public getLineHeight():number;

        public getBMFontLineHeight():number;

        public setFontFileOrFamily(fontHandle:???, textureUrl:???):void;

        // public cleanup():void;

        // public setContentSize(size:Size|number, height?:number):void;

        public setBlendFunc(src:number, dst:number):void;

        public getBlendFunc():BlendFunc;


        public getContentSize():Size;
    }

    export module Label {
        export enum Type {
            TTF,
            BMFont,
            SystemFont
        }

        export enum Overflow {
            NONE,
            CLAMP,
            SHRINK,
            RESIZE_HEIGHT
        }

    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCSGLabelCanvasRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/label/CCSGLabelWebGLRenderCmd.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
}
