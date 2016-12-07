/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/CCScene.js
    //+--------------------------------------------------------------------------------

    /**
     * !#en
     * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.<br/>
     * cc.Scene and cc.Node are almost identical with the difference that users can not modify cc.Scene manually.
     * !#zh
     * cc.Scene 是 cc.Node 的子类，仅作为一个抽象的概念。<br/>
     * cc.Scene 和 cc.Node 有点不同，用户不应直接修改 cc.Scene。
     * @class Scene
     * @extends _BaseNode
     */
    // cc.Scene = cc.Class({
    export class Scene extends BaseNode {
        // name: 'cc.Scene',
        // extends: require('./utils/base-node'),

        /**
         * !#en Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.
         * !#zh 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。
         * @property {Boolean} autoReleaseAssets
         * @default false
         */
        public autoReleaseAssets:boolean;


        public constructor();

        public destroy():void;
    }
}
