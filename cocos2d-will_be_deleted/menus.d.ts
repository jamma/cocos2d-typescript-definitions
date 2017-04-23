/// <reference path="cocos2d-lib.d.ts" />


declare type ccMenuItemCallback = (mi:cc.Node)=>void;

declare namespace cc {

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/menus/CCMenu.js
    ////////////////////////////////////////////////////////////////////////////////
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
     * Features and Limitation:
     *  - You can add MenuItem objects in runtime using addChild:
     *  - But the only accepted children are MenuItem objects
     * @class
     * @extends cc.Layer
     * @param {...cc.MenuItem|null} menuItems}
     * @example
     * var layer = new cc.Menu(menuitem1, menuitem2, menuitem3);
     */
    export class Menu extends Layer {
        /**
         * Constructor of cc.Menu override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {...cc.MenuItem|null} menuItems
         */
        public constructor(...menuItems:MenuItem[]);

        /**
         * initializes a cc.Menu with it's items
         * @param {Array} menuItems
         * @return {Boolean}
         */
        public initWithItems(...menuItems:MenuItem[]):boolean;
        public initWithArray(menuItems:MenuItem[]):boolean;

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
         * add a child for  cc.Menu
         * @param {cc.Node} child
         * @param {Number|Null} [zOrder=] zOrder for the child
         * @param {Number|Null} [tag=] tag for the child
         */
        public addChild(child:MenuItem, zOrder?:number, tag?:number):void;

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
        public alignItemsInColumns(...args:Number[]):void;

        /**
         * align menu items in rows
         * @param {Number} args Arguments
         * @example
         * // Example
         * menu.alignItemsInRows(5,3)//this will align items to 2 rows, first row with 5 items, second row with 3
         *
         * menu.alignItemsInRows(4,4,4,4)//this creates 4 rows each have 4 items
         */
        public alignItemsInRows(...args:Number[]):void;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/menus/CCMenuItem.js
    ////////////////////////////////////////////////////////////////////////////////

    /**
     * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
     * @class
     * @extends cc.Node
     * @param {function|String} callback
     * @param  {cc.Node} target
     */
    export class MenuItem extends Node {
        public enabled:boolean;

        /**
         * Constructor of cc.MenuItem
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public constructor(callback:string|ccMenuItemCallback, target:Node);
        public ctor(callback?:string|ccMenuItemCallback, target?:Node);

        /**
         * return whether MenuItem is selected
         * @return {Boolean}
         */
        public isSelected():boolean;

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
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithCallback(callback:ccMenuItemCallback, target:Node):boolean;

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
         * @param {cc.Node} target
         */
        public setCallback(callback:ccMenuItemCallback, target:Node):void;

        /**
         * call the selector with target
         */
        public activate():void;
    }

    /**
     *  Any cc.Node that supports the cc.LabelProtocol protocol can be added.
     * Supported nodes:
     * - cc.BitmapFontAtlas
     * - cc.LabelAtlas
     * - cc.LabelTTF
     * @class
     * @extends cc.MenuItem
     * @param {cc.Node} label
     * @param {function|String} selector
     * @param {cc.Node} target
     * @example
     * var menuitemLabel = new cc.MenuItemLabel(label,selector,target);
     *
     * @property {String}   string          - Content string of label item
     * @property {cc.Node}  label           - Label of label item
     * @property {cc.Color} disabledColor   - Color of label when it's disabled
     */
    export class MenuItemLabel extends MenuItem {
        public string:string;
        public disabledColor:Color;
        public label:Node;

        /**
         * Constructor of cc.MenuItemLabel
         * @param {cc.Node} label
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public constructor(label:Node, callback?:string|ccMenuItemCallback, target?:Node);

        /**
         * initializes a cc.MenuItemLabel with a label
         * @param {cc.Node} label
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithLabel(label:Node, callback:string|ccMenuItemCallback, target:Node):boolean;

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
         * @return {cc.Node}
         */
        public getLabel():Node;

        /**
         * set a label for cc.MenuItemLabel
         * @param {cc.Node} label
         */
        public setLabel(label:Node):void;

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
     * @param {cc.Node|Null} target
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
         * @param {cc.Node|Null} target
         */
        public constructor(value:string,
                           charMapFile:string,
                           itemWidth:number,
                           itemHeight:number,
                           startCharMap:string,
                           callback?:string|ccMenuItemCallback,
                           target?:Node);

        /**
         * initializes a cc.MenuItemAtlasFont with string
         * @param {String} value
         * @param {String} charMapFile
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {function|String|Null} callback
         * @param {cc.Node|Null} target
         * @return {Boolean}
         */
        public initWithString(value:string,
                              charMapFile:string,
                              itemWidth:number,
                              itemHeight:number,
                              startCharMap:string,
                              callback?:string|ccMenuItemCallback,
                              target?:Node):boolean;
    }

    /**
     * Helper class that creates a CCMenuItemLabel class with a Label
     * @class
     * @extends cc.MenuItemLabel
     * @param {String} value text for the menu item
     * @param {function|String} callback
     * @param {cc.Node} target
     * @example
     * var menuItem = new cc.MenuItemFont(value, callback, target);
     *
     * @property {Number}   fontSize    - Font size of font item
     * @property {String}   fontName    - Font name of font item
     */
    export class MenuItemFont extends MenuItemLabel {
        public fontName:string;
        public fontSize:number;

        /**
         * Constructor of cc.MenuItemFont
         * @param {String} value text for the menu item
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public constructor(value:string, callback?:string|ccMenuItemCallback, target?:Node);

        /**
         * initializes cc.MenuItemFont with  string
         * @param {String} value text for the menu item
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithString(value:string, callback?:string|ccMenuItemCallback, target?:Node):boolean;

        /**
         * set the font size for cc.MenuItemFont
         * @param {Number} size
         */
        public setFontSize(size:number):void;

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
     * CCMenuItemSprite accepts CCNode<CCRGBAProtocol> objects as items.
     * The images has 3 different states:
     *   - unselected image
     *   - selected image
     *   - disabled image
     * @class
     * @extends cc.MenuItem
     * @param {Image|Null} normalSprite normal state image
     * @param {Image|Null} selectedSprite selected state image
     * @param {Image|cc.Node|Null} three disabled state image OR target node
     * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
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
     * @property {cc.Sprite}    normalImage     - Sprite in normal state
     * @property {cc.Sprite}    selectedImage     - Sprite in selected state
     * @property {cc.Sprite}    disabledImage     - Sprite in disabled state
     */
    export class MenuItemSprite extends MenuItem {
        public normalImage:Sprite;
        public selectedImage:Sprite;
        public disabledImage:Sprite;

        /**
         * Constructor of cc.MenuItemSprite
         * @param {Image|Null} normalSprite normal state image
         * @param {Image|Null} selectedSprite selected state image
         * @param {Image|cc.Node|Null} three disabled state image OR target node
         * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
         * @param {String|function|Null} five callback function name in string or actual function
         */
        public constructor(normalSprite:Sprite,
                           selectedSprite:Sprite,
                           three?:Node|ccMenuItemCallback,
                           four?:string|ccMenuItemCallback|Node,
                           five?:Node);

        /**
         * initializes cc.MenuItemSprite with a cc.Sprite
         * @param {cc.Node} normalSprite
         * @param {cc.Node} selectedSprite
         * @param {cc.Node} disabledSprite
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithNormalSprite(normalSprite:Sprite,
                                    selectedSprite:Sprite,
                                    disabledSprite:Sprite,
                                    callback:string|ccMenuItemCallback,
                                    target:Node):boolean;

        /**
         * return the normal status image(cc.Sprite)
         * @return {cc.Sprite}
         */
        public getNormalImage():Sprite;

        /**
         * set the normal status image(cc.Sprite)
         * @param {cc.Sprite} normalImage
         */
        public setNormalImage(normalImage:Sprite):void;

        /**
         * return the selected status image(cc.Sprite) of cc.MenuItemSprite
         * @return {cc.Sprite}
         */
        public getSelectedImage():Sprite;

        /**
         * set the selected status image(cc.Sprite)
         * @param {cc.Sprite} selectedImage
         */
        public setSelectedImage(selectedImage:Sprite):void;

        /**
         * return the disabled status of cc.MenuItemSprite
         * @return {cc.Sprite}
         */
        public getDisabledImage():Sprite;

        /**
         * set the disabled status image(cc.Sprite)
         * @param {cc.Sprite} disabledImage
         */
        public setDisabledImage(disabledImage:Sprite):void;
    }

    /**
     * cc.MenuItemImage accepts images as items.
     * The images has 3 different states:
     * - unselected image
     * - selected image
     * - disabled image
     * 
     * For best results try that all images are of the same size
     * @class
     * @extends cc.MenuItemSprite
     * @param {string|null} normalImage
     * @param {string|null} selectedImage
     * @param {string|null} disabledImage
     * @param {function|string|null} callback
     * @param {cc.Node|null} target
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
         * @param {cc.Node|null} target
         */
        public constructor(normalImage?:string,
                           selectedImage?:string,
                           disabledImage?:string,
                           callback?:string|ccMenuItemCallback,
                           target?:Node);

        /**
         * initializes a cc.MenuItemImage
         * @param {string|null} normalImage
         * @param {string|null} selectedImage
         * @param {string|null} disabledImage
         * @param {function|string|null} callback
         * @param {cc.Node|null} target
         * @returns {boolean}
         */
        public initWithNormalImage(normalImage?:string,
                                   selectedImage?:string,
                                   disabledImage?:string,
                                   callback?:string|ccMenuItemCallback,
                                   target?:Node):boolean;

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

    }

    /**
     * A simple container class that "toggles" it's inner items
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
    export class MenuItemToggle extends MenuItem {
        public selectedIndex:number;
        public subItems:MenuItem[];

        /**
         * Constructor of cc.MenuItemToggle
         */
        //public constructor(...args:MenuItem[]);
        public constructor();
        public ctor(...args:MenuItem[]);
        public ctor();

        /**
         * initializes a cc.MenuItemToggle with items
         * @param {cc.MenuItem} args[0...last-2] the rest in the array are cc.MenuItems
         * @param {function|String} args[last-1] the second item in the args array is the callback
         * @param {cc.Node} args[last] the first item in the args array is a target
         * @return {Boolean}
         */
        public initWithItems(...args:MenuItem[]):boolean;

        /**
         * return the index of selected
         * @return {Number}
         */
        public getSelectedIndex():number;

        /**
         * set the seleceted index for cc.MenuItemToggle
         * @param {Number} selectedIndex
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
        public setSubItems(...subItems:MenuItem[]):void;

        /**
         * add the subitem for cc.MenuItemToggle
         * @param {cc.MenuItem} item
         */
        public addSubItem(item:MenuItem):void;

        /**
         * returns the selected item   (deprecated in -x, please use getSelectedItem instead.)
         * @return {cc.MenuItem}
         */
        public selectedItem():MenuItem;

        /**
         * returns the selected item.
         * @return {cc.MenuItem}
         */
        public getSelectedItem():MenuItem;
    }
}
