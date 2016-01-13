/// <reference path="../cocos2d-lib.d.ts" />

declare module cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/scenes/CCLoaderScene.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * cc.LoaderScene is a scene that you can load it when you loading files
     * cc.LoaderScene can present thedownload progress
     * @class
     * @extends cc.Scene
     * @example
     * var lc = new cc.LoaderScene();
     */
    export class LoaderScene extends Scene {
        // static constructor
        /**
         * cc.LoaderScene.preload can present a loaderScene with download progress.
         * when all the resource are downloaded it will invoke call function
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
        static preload(resources:any[], cb:(target:Class) => void, target:Class):LoaderScene;

        /**
         * init with resources
         * @param {Array} resources
         * @param {Function|String} cb
         * @param {Object} target
         */
        initWithResources(resources:any[], cb:(target:Class) => void|string, target:Class):boolean;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/scenes/CCScene.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
     *  cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it's
     * anchor point (by default) at the center of the screen.
     *
     * For the moment cc.Scene has no other logic than that, but in future releases it might have
     * additional logic.
     *
     * It is a good practice to use and cc.Scene as the parent of all your nodes.
     * @class
     * @extends cc.Node
     * @example
     * var scene = new cc.Scene();
     */
    export class Scene extends Node {}
}

