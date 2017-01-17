/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/menus/CCMenu.js
    //+--------------------------------------------------------------------------------

    /**
     * @constant
     * @type Number
     */
    export const MENU_STATE_WAITING:number;

    /**
     * @constant
     * @type Number
     */
    export const MENU_STATE_TRACKING_TOUCH:number;

    /**
     * @constant
     * @type Number
     */
    export const MENU_HANDLER_PRIORITY:number;

    /**
     * @constant
     * @type Number
     */
    export const DEFAULT_PADDING:number;

    /**
     *<p> Features and Limitation:<br/>
     *  - You can add MenuItem objects in runtime using addChild:<br/>
     *  - But the only accepted children are MenuItem objects</p>
     * @class
     * @extends cc.Layer
     * @param {...cc.MenuItem|null} menuItems}
     * @example
     * var layer = new cc.Menu(menuitem1, menuitem2, menuitem3);
     */
    export class Menu extends Layer {
        public enabled:boolean;

        /**
         * Constructor of cc.Menu override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {...cc.MenuItem|null} menuItems
         */
        public constructor(...menuItems:MenuItem[]);

        /**
         * <p>
         *     Event callback that is invoked every time when CCMenu enters the 'stage'.                                   <br/>
         *     If the CCMenu enters the 'stage' with a transition, this event is called when the transition starts.        <br/>
         *     During onEnter you can't access a "sister/brother" node.                                                    <br/>
         *     If you override onEnter, you must call its parent's onEnter function with this._super().
         * </p>
         */
        public onEnter():void;

        /**
         * return whether or not the menu will receive events
         * @return {Boolean}
         */
        public isEnabled():boolean;

        /**
         * set whether or not the menu will receive events
         * @param {Boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * initializes a cc.Menu with it's items
         * @param {Array} args
         * @return {Boolean}
         */
        public initWithItems(...args:MenuItem[]):boolean;

        /**
         * initializes a cc.Menu with a Array of cc.MenuItem objects
         * @param {Array} arrayOfItems array Of cc.MenuItem Items
         * @return {Boolean}
         */
        public initWithArray(arrayOfItems:MenuItem[]):boolean;

        /**
         * add a child for  cc.Menu
         * @param {_ccsg.Node} child
         * @param {Number|Null} [zOrder=] zOrder for the child
         * @param {Number|Null} [tag=] tag for the child
         */
        public addChild(child:Node, zOrder?:number, tag?:number):void;

        /**
         * align items vertically with default padding
         */
        public alignItemsVertically():void;

        /**
         * align items vertically with specified padding
         * @param {Number} padding
         */
        public alignItemsVerticallyWithPadding(padding:number):void;

        /**
         * align items horizontally with default padding
         */
        public alignItemsHorizontally():void;

        /**
         * align items horizontally with specified padding
         * @param {Number} padding
         */
        public alignItemsHorizontallyWithPadding(padding:number):void;

        /**
         * align items in columns
         * @example
         * // Example
         * menu.alignItemsInColumns(3,2,3)// this will create 3 columns, with 3 items for first column, 2 items for second and 3 for third
         *
         * menu.alignItemsInColumns(3,3)//this creates 2 columns, each have 3 items
         */
        public alignItemsInColumns(...columnSizes:number[]):void;

        /**
         * align menu items in rows
         * @param {Number}
         * @example
         * // Example
         * menu.alignItemsInRows(5,3)//this will align items to 2 rows, first row with 5 items, second row with 3
         *
         * menu.alignItemsInRows(4,4,4,4)//this creates 4 rows each have 4 items
         */
        public alignItemsInRows(...rowSizes:number[]):void;

        /**
         * remove a child from cc.Menu
         * @param {_ccsg.Node} child the child you want to remove
         * @param {boolean} cleanup whether to cleanup
         */
        public removeChild(child:Node, cleanup?:boolean):void;

        /**
         * <p>
         * callback that is called every time the cc.Menu leaves the 'stage'.                                         <br/>
         * If the cc.Menu leaves the 'stage' with a transition, this callback is called when the transition finishes. <br/>
         * During onExit you can't access a sibling node.                                                             <br/>
         * If you override onExit, you shall call its parent's onExit with this._super().
         * </p>
         */
        public onExit():void;

        /**
         * only use for jsbinding
         * @param value
         */
        public setOpacityModifyRGB(value:boolean):void;

        /**
         * only use for jsbinding
          * @returns {boolean}
         */
        public isOpacityModifyRGB():boolean;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/menus/CCMenuItem.js
    //+--------------------------------------------------------------------------------

    export interface MenuItemCallback {
        (item?:MenuItem):void;
    }

    /**
     * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
     * @class
     * @extends _ccsg.Node
     * @param {function|String} callback
     * @param  {_ccsg.Node} target
     */
    export class MenuItem extends Node {

        /**
         * Constructor of cc.MenuItem
         * @param {function|String} callback
         * @param {_ccsg.Node} target
         */
        public constructor(callback?:MenuItemCallback, target?:Node):void;

        /**
         * return whether MenuItem is selected
         * @return {Boolean}
         */
        public isSelected():boolean;

        /**
         * only use for jsbinding
         * @param value
         */
        public setOpacityModifyRGB(value:boolean):void;

        /**
         * only use for jsbinding
         * @returns {boolean}
         */
        public isOpacityModifyRGB():boolean;

        /**
         * set the target/selector of the menu item
         * @param {function|String} selector
         * @param {_ccsg.Node} rec
         * @deprecated since v3.0
         */
        public setTarget(selector:MenuItemCallback, rec:Node):void;

        /**
         * return whether MenuItem is Enabled
         * @return {Boolean}
         */
        public isEnabled():boolean;

        /**
         * set enable value of MenuItem
         * @param {Boolean} enable
         */
        public setEnabled(enable:boolean):void;

        /**
         * initializes a cc.MenuItem with callback
         * @param {function|String} callback
         * @param {_ccsg.Node} target
         * @return {Boolean}
         */
        public initWithCallback(callback?:MenuItemCallback, target?:Node):boolean;

        /**
         * return rect value of cc.MenuItem
         * @return {cc.Rect}
         */
        public rect():Rect;

        /**
         * set the cc.MenuItem selected same as setIsSelected(true)
         */
        public selected():void;

        /**
         * set the cc.MenuItem unselected same as setIsSelected(false)
         */
        public unselected():void;

        /**
         * set the callback to the menu item
         * @param {function|String} callback
         * @param {_ccsg.Node} target
         */
        public setCallback(callback?:MenuItemCallback, target?:Node):void;

        /**
         * call the selector with target
         */
        public activate():void;
    }

    /**
     *  Any ccsg.Node that supports the cc.LabelProtocol protocol can be added.<br/>
     * Supported nodes:<br/>
     * - cc.BitmapFontAtlas<br/>
     * - cc.LabelAtlas<br/>
     * - cc.LabelTTF<br/>
     * @class
     * @extends cc.MenuItem
     * @param {_ccsg.Node} label
     * @param {function|String} selector
     * @param {_ccsg.Node} target
     * @example
     * var menuitemLabel = new cc.MenuItemLabel(label,selector,target);
     *
     * @property {String}   string          - Content string of label item
     * @property {_ccsg.Node}  label           - Label of label item
     * @property {cc.Color} disabledColor   - Color of label when it's disabled
     */
    export class MenuItemLabel extends MenuItem {
        public string:string;
        public disabledColor:Color;
        public label:Node;

        /**
         * Constructor of cc.MenuItemLabel
         * @param {_ccsg.Node} label
         * @param {function|String} selector
         * @param {_ccsg.Node} target
         */
        public constructor(label:Node, selector?:MenuItemCallback, target?:Node);

        /**
         * return the disable color for this cc.MenuItemLabel
         * @return {cc.Color}
         */
        public getDisabledColor():Color;

        /**
         * set the disable color for this cc.MenuItemLabel
         * @param {cc.Color} color
         */
        public setDisabledColor(color:Color):void;

        /**
         * return label of cc.MenuItemLabel
         * @return {_ccsg.Node}
         */
        public getLabel():Node;

        /**
         * set a label for cc.MenuItemLabel
         * @param {_ccsg.Node} label
         */
        public setLabel(label?:Node):void;

        /**
         * initializes a cc.MenuItemLabel with a label
         * @param {_ccsg.Node} label
         * @param {function|String} selector
         * @param {_ccsg.Node} target
         * @return {Boolean}
         */
        public initWithLabel(label?:Node, selector?:MenuItemCallback, target?:Node):boolean;

        /**
         * set the string for  cc.MenuItemLabel
         * @param {String} label
         */
        public setString(label:string):void;

        /**
         * return the string of cc.MenuItemLabel
         * @returns {*|string|_p.string|ret.string|q.string|String}
         */
        public getString():string;
    }


    /**
     * Helper class that creates a MenuItemLabel class with a LabelAtlas
     * @class
     * @extends cc.MenuItemLabel
     * @param {String} value
     * @param {String} charMapFile
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {String} startCharMap a single character
     * @param {function|String|Null} callback
     * @param {_ccsg.Node|Null} target
     * @example
     * var menuItem = new cc.MenuItemAtlasFont(param1,param2...);
     */
    export class MenuItemAtlasFont extends MenuItemLabel {

        /**
         * the contructor of cc.MenuItemAtlasFont
         * @param {String} value
         * @param {String} charMapFile
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {function|String|Null} callback
         * @param {_ccsg.Node|Null} target
         */
        public constructor(value?:string, charMapFile?:string, itemWidth?:number, itemHeight?:number, startCharMap?:number, callback?:MenuItemCallback, target?:Node);

        /**
         * initializes a cc.MenuItemAtlasFont with string
         * @param {String} value
         * @param {String} charMapFile
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {function|String|Null} callback
         * @param {_ccsg.Node|Null} target
         * @return {Boolean}
         */
        public initWithString(value?:string, charMapFile?:string, itemWidth?:number, itemHeight?:number, startCharMap?:number, callback?:MenuItemCallback, target?:Node):boolean;
    }

    /**
     * Helper class that creates a CCMenuItemLabel class with a Label
     * @class
     * @extends cc.MenuItemLabel
     * @param {String} value text for the menu item
     * @param {function|String} callback
     * @param {_ccsg.Node} target
     * @example
     * var menuItem = new cc.MenuItemFont(value, callback, target);
     *
     * @property {Number}   fontSize    - Font size of font item
     * @property {String}   fontName    - Font name of font item
     */
    export class MenuItemFont extends MenuItemLabel {
        ////////////////////////////////////////
        // Static methods
        ////////////////////////////////////////
        /**
         * a shared function to set the fontSize for menuitem font
         * @param {Number} fontSize
         */
        public static setFontSize(fontSize:number):void;

        /**
         * a shared function to get the font size for menuitem font
         * @return {Number}
         */
        public static fontSize():number;

        /**
         * a shared function to set the fontsize for menuitem font
         * @param name
         */
        public static setFontName(name:string):void;

        /**
         * a shared function to get the font name for menuitem font
         * @return {String}
         */
        public static fontName():string;

        ////////////////////////////////////////
        // Instance properties
        ////////////////////////////////////////
        public fontSize:number;
        public fontName:string;

        ////////////////////////////////////////
        // Instance methods
        ////////////////////////////////////////
        /**
         * Constructor of cc.MenuItemFont
         * @param {String} value text for the menu item
         * @param {function|String} callback
         * @param {_ccsg.Node} target
         */
        public constructor(value?:string, callback?:MenuItemCallback, target?:Node);

        /**
         * initializes cc.MenuItemFont with  string
         * @param {String} value text for the menu item
         * @param {function|String} callback
         * @param {_ccsg.Node} target
         * @return {Boolean}
         */
        public initWithString(value?:string, callback?:MenuItemCallback, target?:Node):boolean;

        /**
         * set the font size for cc.MenuItemFont
         * @param {Number} s
         */
        public setFontSize(s:number):void;

        /**
         *return the font size of cc.MenuItemFont
         * @return {Number}
         */
        public getFontSize():number;

        /**
         * set the font name for cc.MenuItemFont
         * @param {String} name
         */
        public setFontName(name:string):void;

        /**
         * return the font name for cc.MenuItemFont
         * @return {String}
         */
        public getFontName():string;
    }

    /**
     * CCMenuItemSprite accepts CCNode<CCRGBAProtocol> objects as items.<br/>
     * The images has 3 different states:<br/>
     *   - unselected image<br/>
     *   - selected image<br/>
     *   - disabled image<br/>
     * @class
     * @extends cc.MenuItem
     * @param {Image|Null} normalSprite normal state image
     * @param {Image|Null} selectedSprite selected state image
     * @param {Image|_ccsg.Node|Null} three disabled state image OR target node
     * @param {String|function|_ccsg.Node|Null} four callback function name in string or actual function, OR target Node
     * @param {String|function|Null} five callback function name in string or actual function
     *
     * @example
     * var item = new cc.MenuItemSprite(normalImage)//create a menu item from a sprite with no functionality
     * var item = new cc.MenuItemSprite(normalImage, selectedImage)//create a menu Item, nothing will happen when clicked
     * var item = new cc.MenuItemSprite(normalImage, SelectedImage, disabledImage)//same above, but with disabled state image
     * var item = new cc.MenuItemSprite(normalImage, SelectedImage, 'callback', targetNode)//create a menu item, when clicked runs targetNode.callback()
     * var item = new cc.MenuItemSprite(normalImage, SelectedImage, disabledImage, targetNode.callback, targetNode)
     * //same as above, but with disabled image, and passing in callback function
     *
     * @property {_ccsg.Sprite}    normalImage     - Sprite in normal state
     * @property {_ccsg.Sprite}    selectedImage     - Sprite in selected state
     * @property {_ccsg.Sprite}    disabledImage     - Sprite in disabled state
     */
    export class MenuItemSprite extends MenuItem {
        public normalImage:Sprite
        public selectedImage:Sprite
        public disabledImage:Sprite

        /**
         * Constructor of cc.MenuItemSprite
         * @param {Image|Null} normalSprite normal state image
         * @param {Image|Null} selectedSprite selected state image
         * @param {Image|_ccsg.Node|Null} three disabled state image OR target node
         * @param {String|function|_ccsg.Node|Null} four callback function name in string or actual function, OR target Node
         * @param {String|function|Null} five callback function name in string or actual function
         */
        public constructor(normalSprite?:Sprite, callback?:MenuItemCallback, target?:Node);
        public constructor(normalSprite:Sprite, selectedSprite:Sprite, callback?:MenuItemCallback, target?:Node);
        public constructor(normalSprite:Sprite, selectedSprite:Sprite, disabledSprite:Sprite, callback?:MenuItemCallback, target?:Node);

        /**
         * return the normal status image(_ccsg.Sprite)
         * @return {_ccsg.Sprite}
         */
        public getNormalImage():Sprite;

        /**
         * set the normal status image(_ccsg.Sprite)
         * @param {_ccsg.Sprite} normalImage
         */
        public setNormalImage(normalImage:Sprite):void;

        /**
         * return the selected status image(_ccsg.Sprite) of cc.MenuItemSprite
         * @return {_ccsg.Sprite}
         */
        public getSelectedImage():Sprite;

        /**
         * set the selected status image(_ccsg.Sprite)
         * @param {_ccsg.Sprite} selectedImage
         */
        public setSelectedImage(selectedImage:Sprite):void;

        /**
         * return the disabled status of cc.MenuItemSprite
         * @return {_ccsg.Sprite}
         */
        public getDisabledImage():Sprite;

        /**
         * set the disabled status image(_ccsg.Sprite)
         * @param {_ccsg.Sprite} disabledImage
         */
        public setDisabledImage(disabledImage:Sprite):void;

        /**
         * initializes cc.MenuItemSprite with a _ccsg.Sprite
         * @param {_ccsg.Node} normalSprite
         * @param {_ccsg.Node} selectedSprite
         * @param {_ccsg.Node} disabledSprite
         * @param {function|String} callback
         * @param {_ccsg.Node} target
         * @return {Boolean}
         */
        public initWithNormalSprite(normalSprite?:Sprite, callback?:MenuItemCallback, target?:Node):boolean;
        public initWithNormalSprite(normalSprite:Sprite, selectedSprite:Sprite, callback?:MenuItemCallback, target?:Node):boolean;
        public initWithNormalSprite(normalSprite:Sprite, selectedSprite:Sprite, disabledSprite:Sprite, callback?:MenuItemCallback, target?:Node):boolean;

        /**
         * menu item is selected (runs callback)
         */
        // selected: function () {
        public selected():void;

        /**
         * menu item goes back to unselected state
         */
        public unselected():void;

        /**
         * set cc.MenuItemSprite  enable to receive the touch event
         * @param {Boolean} bEnabled
         */
        public setEnabled(bEnabled:boolean):void;
    }

    /**
     * cc.MenuItemImage accepts images as items.<br/>
     * The images has 3 different states:<br/>
     * - unselected image<br/>
     * - selected image<br/>
     * - disabled image<br/>
     * <br/>
     * For best results try that all images are of the same size<br/>
     * @class
     * @extends cc.MenuItemSprite
     * @param {string|null} normalImage
     * @param {string|null} selectedImage
     * @param {string|null} disabledImage
     * @param {function|string|null} callback
     * @param {_ccsg.Node|null} target
     * @example
     * var menuItem = new cc.MenuItemImage(normalImage, selectedImage, three, four, five);
     */
    export class MenuItemImage extends MenuItemSprite {

        /**
         * Constructor of cc.MenuItemImage
         * @param {string|null} normalImage
         * @param {string|null} selectedImage
         * @param {string|null} disabledImage
         * @param {function|string|null} callback
         * @param {_ccsg.Node|null} target
         */
        // ctor: function (normalImage, selectedImage, three, four, five) {
        public constructor(normalSprite?:SpriteFrame, callback?:MenuItemCallback, target?:Node);
        public constructor(normalSprite:SpriteFrame, selectedSprite:SpriteFrame, callback?:MenuItemCallback, target?:Node);
        public constructor(normalSprite:SpriteFrame, selectedSprite:SpriteFrame, disabledSprite:SpriteFrame, callback?:MenuItemCallback, target?:Node);

        /**
         * sets the sprite frame for the normal image
         * @param {cc.SpriteFrame} frame
         */
        public setNormalSpriteFrame(frame:SpriteFrame):void;

        /**
         * sets the sprite frame for the selected image
         * @param {cc.SpriteFrame} frame
         */
        public setSelectedSpriteFrame(frame:SpriteFrame):void;

        /**
         * sets the sprite frame for the disabled image
         * @param {cc.SpriteFrame} frame
         */
        public setDisabledSpriteFrame(frame:SpriteFrame):void;

        /**
         * initializes a cc.MenuItemImage
         * @param {string|null} normalImage
         * @param {string|null} selectedImage
         * @param {string|null} disabledImage
         * @param {function|string|null} callback
         * @param {_ccsg.Node|null} target
         * @returns {boolean}
         */
        public initWithNormalImage(normalSprite?:SpriteFrame, callback?:MenuItemCallback, target?:Node):boolean;
        public initWithNormalImage(normalSprite:SpriteFrame, selectedSprite:SpriteFrame, callback?:MenuItemCallback, target?:Node):boolean;
        public initWithNormalImage(normalSprite:SpriteFrame, selectedSprite:SpriteFrame, disabledSprite:SpriteFrame, callback?:MenuItemCallback, target?:Node):boolean;
    }


    /**
     * A simple container class that "toggles" it's inner items<br/>
     * The inner items can be any MenuItem
     * @class
     * @extends cc.MenuItem
     *
     * @property {Array}    subItems        - Sub items
     * @property {Number}   selectedIndex   - Index of selected sub item
     *
     *@example
     * // Example
     * //create a toggle item with 2 menu items (which you can then toggle between them later)
     * var toggler = new cc.MenuItemToggle( new cc.MenuItemFont("On"), new cc.MenuItemFont("Off"), this.callback, this)
     * //Note: the first param is the target, the second is the callback function, afterwards, you can pass in any number of menuitems
     *
     * //if you pass only 1 variable, then it must be a cc.MenuItem
     * var notYetToggler = new cc.MenuItemToggle(cc.MenuItemFont("On"));//it is useless right now, until you add more stuff to it
     * notYetToggler.addSubItem(new cc.MenuItemFont("Off"));
     * //this is useful for constructing a toggler without a callback function (you wish to control the behavior from somewhere else)
     */
    // cc.MenuItemToggle = cc.MenuItem.extend(/** @lends cc.MenuItemToggle# */{
    export class MenuItemToggle extends MenuItem {
        public subItems:MenuItem[];
        public selectedIndex:number;

        /**
         * Constructor of cc.MenuItemToggle
        */
        public constructor(...items:any[]);

        /**
         * return the index of selected
         * @return {Number}
         */
        public getSelectedIndex():number;

        /**
         * set the seleceted index for cc.MenuItemToggle
         * @param {Number} SelectedIndex
         */
        public setSelectedIndex(selectedIndex:number):void;

        /**
         * similar to get children,return the sumItem array.
         * @return {Array}
         */
        public getSubItems():MenuItem[];

        /**
         * set the subitem for cc.MenuItemToggle
         * @param {cc.MenuItem} subItems
         */
        public setSubItems(subItems:MenuItem[]):void;

        /**
         * initializes a cc.MenuItemToggle with items
         * @param {cc.MenuItem} args[0...last-2] the rest in the array are cc.MenuItems
         * @param {function|String} args[last-1] the second item in the args array is the callback
         * @param {_ccsg.Node} args[last] the first item in the args array is a target
         * @return {Boolean}
         */
        public initWithItems(...items:any[]):boolean;

        /**
         * add the subitem for cc.MenuItemToggle
         * @param {cc.MenuItem} item
         */
        public addSubItem(item:MenuItem):void;

        /**
         * returns the selected item.
         * @return {cc.MenuItem}
         */
        public getSelectedItem():MenuItem;
    }
}
