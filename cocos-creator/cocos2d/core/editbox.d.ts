/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/editbox/CCSGEditBox.js
    //+--------------------------------------------------------------------------------
    export module EditBox {
        /**
         * Enum for keyboard return types
         * @readonly
         * @enum cc.EditBox.KeyboardReturnType
         */
        // var KeyboardReturnType = cc.Enum({
        enum KeyboardReturnType {
            /**
             * @property {Number} DEFAULT
             */
            DEFAULT,
            /**
             * @property {Number} DONE
             */
            DONE,
            /**
             * @property {Number} SEND
             */
            SEND,
            /**
             * @property {Number} SEARCH
             */
            SEARCH,
            /**
             * @property {Number} GO
             */
            GO
        }
        

        /**
         * The EditBox's InputMode defines the type of text that the user is allowed to enter
         * @readonly
         * @enum {number}
         * @memberof cc.EditBox.InputMode
         */
        // var InputMode = cc.Enum({
        enum InputMode {
            /**
             * @property {Number} ANY
             */
            ANY,

            /**
             * The user is allowed to enter an e-mail address.
             * @property {Number} EMAIL_ADDR
             */
            EMAIL_ADDR,

            /**
             * The user is allowed to enter an integer value.
             * @property {Number} NUMERIC
             */
            NUMERIC,

            /**
             * The user is allowed to enter a phone number.
             * @property {Number} PHONE_NUMBER
             */
            PHONE_NUMBER,

            /**
             * The user is allowed to enter a URL.
             * @property {Number} URL
             */
            URL,

            /**
             * The user is allowed to enter a real number value.
             * This extends kEditBoxInputModeNumeric by allowing a decimal point.
             * @property {Number} DECIMAL
             */
            DECIMAL,

            /**
             * The user is allowed to enter any text, except for line breaks.
             * @property {Number} SINGLE_LINE
             */
            SINGLE_LINE
        }

        /**
         * Enum for the EditBox's input flags
         * @readonly
         * @enum cc.EditBox.InputFlag
         */
        enum InputFlag {
            /**
             * Indicates that the text entered is confidential data that should be
             * obscured whenever possible. This implies EDIT_BOX_INPUT_FLAG_SENSITIVE.
             * 
             * @property {Number} PASSWORD
             */
            PASSWORD,

            /**
             * Indicates that the text entered is sensitive data that the
             * implementation must never store into a dictionary or table for use
             * in predictive, auto-completing, or other accelerated input schemes.
             * A credit card number is an example of sensitive data.
             *
             * @property {Number} SENSITIVE
             */
            SENSITIVE,

            /**
             * This flag is a hint to the implementation that during text editing,
             * the initial letter of each word should be capitalized.
             *
             * @property {Number} INITIAL_CAPS_WORD
             */
            INITIAL_CAPS_WORD,

            /**
             * This flag is a hint to the implementation that during text editing,
             * the initial letter of each sentence should be capitalized.
             *
             * @property {Number} INITIAL_CAPS_SENTENCE
             */
            INITIAL_CAPS_SENTENCE,

            /**
             * Capitalize all characters automatically.
             *
             * @property {Number} INITIAL_CAPS_ALL_CHARACTERS
             */
            INITIAL_CAPS_ALL_CHARACTERS
        }
    }
    /**
     * @class
     * @extends cc._Class
     */
    export class EditBoxDelegate {
        /**
         * This method is called when an edit box gains focus after keyboard is shown.
         * @param {cc.EditBox} sender
         */
        public editBoxEditingDidBegan(sender:EditBox):void;

        /**
         * This method is called when an edit box loses focus after keyboard is hidden.
         * @param {cc.EditBox} sender
         */
        public editBoxEditingDidEnded(sender:EditBox):void;

        /**
         * This method is called when the edit box text was changed.
         * @param {cc.EditBox} sender
         * @param {String} text
         */
        public editBoxTextChanged(sender:EditBox, text:string):void;

        /**
         * This method is called when the return button was pressed.
         * @param {cc.EditBox} sender
         */
        public editBoxEditingReturn(sender:EditBox):void;
    }

    /**
     * <p>cc.EditBox is a brief Class for edit box.<br/>
     * You can use this widget to gather small amounts of text from the user.</p>
     *
     */
    // NOTE: The EditBox's actual implementation's prototype is modified at runtime, but I've left those methods out.
    //       Add them later if needed.
    export class EditBox extends Node {
        public font:Font;
        public fontName:string;
        public fontSize:number;
        public fontColor:Color;
        public string:string;
        public maxLength:number;
        public placeholder:string;
        public placeholderFont:Font;
        public placeholderFontName:string;
        public placeholderFontSize:number;
        public placeholderFontColor:Color;
        public inputFlag:EditBox.InputFlag;
        public delegate:EditBoxDelegate;
        public inputMode:EditBox.InputMode;
        public returnType:EditBox.KeyboardReturnType;

        public constructor(size:Size, normal9SpriteBg:Sprite);

        public createDomElementIfNeeded():void;

        // public setContentSize(width:Size|number, height?:number);
        // public setVisible(visible:boolean):void;
        // public cleanup():void;

        public setLineHeight(lineHeight:number):void;

        public setFont(fontName:string, fontSize:number):void;

        public getBackgroundSprite():Sprite;

        public setFontName(fontName:string):void;

        public setFontSize(fontSize:number):void;

        public setString(text:string):void;

        public setFontColor(color:Color):void;

        public setMaxLength(maxLength:number):void;

        public getMaxLength():number;

        public setPlaceHolder(text:string):void;

        public setPlaceholderFont(fontName:string, fontSize:number):void;

        public setPlaceholderFontName(fontName:string):void;

        public setPlaceholderFontSize(fontSize:number):void;

        public setPlaceholderFontColor(color:Color):void;

        public setInputFlag(inputFlag:boolean):void;

        public getString():string;

        public initWithSizeAndBackgroundSprite(size:Size, normal9SpriteBg:Sprite):boolean;

        public setDelegate(delegate:EditBoxDelegate):void;

        public getPlaceHolder():string;

        public setInputMode(inputMode:EditBox.InputMode):void;

        public setReturnType(returnType:EditBox.KeyboardReturnType):void;

        public initWithBackgroundColor(size:Size, bgColor:Color):void;
    }
}
