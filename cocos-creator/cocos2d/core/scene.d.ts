/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/scene/CCLoaderScene.js
    //+--------------------------------------------------------------------------------
    /**
     * <p>cc.LoaderScene is a scene that you can load it when you loading files</p>
     * <p>cc.LoaderScene can present thedownload progress </p>
     * @class
     * @extends _ccsg.Scene
     * @example
     * var lc = new cc.LoaderScene();
     */
    // cc.LoaderScene = _ccsg.Scene.extend({
    export class LoaderScene extends Scene {
        public cb:Function;
        public target:Object;

        /**
         * Contructor of cc.LoaderScene
         * @returns {boolean}
         */
        public init():boolean;

        /**
         * custom onEnter
         */
        public onEnter():void;

        /**
         * custom onExit
         */
        public onExit():void;

        /**
         * init with resources
         * @param {Array} resources
         * @param {Function|String} cb
         * @param {Object} target
         */
        public initWithResources(resources:any[], cb:string|Function, target:Object):void;

        /**
         * <p>cc.LoaderScene.preload can present a loaderScene with download progress.</p>
         * <p>when all the resource are downloaded it will invoke call function</p>
         * @param resources
         * @param cb
         * @param target
         * @returns {cc.LoaderScene|*}
         * @example
         * //Example
         * cc.LoaderScene.preload(g_resources, function () {
                cc.director.runScene(new HelloWorldScene());
            }, this);
        */
        public static preload(resources:any[], cb:Function, target:Object):LoaderScene;
    }

    // //+--------------------------------------------------------------------------------
    // // File: cocos2d/core/scene/CCSGScene.js
    // //+--------------------------------------------------------------------------------
    // /**
    //  * <p>ccsg.Scene is a subclass of ccsg.Node that is used only as an abstract concept.</p>
    //  *  <p>ccsg.Scene and ccsg.Node are almost identical with the difference that ccsg.Scene has it's
    //  * anchor point (by default) at the center of the screen.</p>
    //  *
    //  * <p>For the moment ccsg.Scene has no other logic than that, but in future releases it might have
    //  * additional logic.</p>
    //  *
    //  * <p>It is a good practice to use and ccsg.Scene as the parent of all your nodes.</p>
    //  * @class
    //  * @extends _ccsg.Node
    //  * @example
    //  * var scene = new _ccsg.Scene();
    //  */
    // export class Scene extends Node {
    // }
}
