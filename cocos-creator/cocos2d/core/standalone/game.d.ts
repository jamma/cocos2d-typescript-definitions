/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/CCGame.js
    //+--------------------------------------------------------------------------------
    // var EventTarget = require('./event/event-target');
    // var View;
    // if (!(CC_EDITOR && Editor.isMainProcess)) {
    //     View = require('./platform/CCView');
    // }

    // var _isMusicPlaying = false;

    export interface ConfigKey {
        readonly width:string;
        readonly height:string;
        readonly engineDir:string;
        readonly modules:string;
        readonly debugMode:string;
        readonly showFPS:string;
        readonly frameRate:string;
        readonly id:string;
        readonly renderMode:string;
        readonly registerSystemEvent:string;
        readonly jsList:string;
        readonly scenes:string;

    }

    /**
     * !#en An object to boot the game.
     * !#zh 包含游戏主体信息并负责驱动游戏的游戏对象。
     * @class Game
     */
    // var game = {
    export class Game implements EventTarget {

        /**
         * Event triggered when game hide to background.
         * Please note that this event is not 100% guaranteed to be fired.
         * @property EVENT_HIDE
         * @type {String}
         * @example
         * cc.game.on(cc.game.EVENT_HIDE, function () {
         *     cc.audioEngine.pauseMusic();
         *     cc.audioEngine.pauseAllEffects();
         * });
         */
        // EVENT_HIDE: "game_on_hide",
        public readonly EVENT_HIDE:string;

        /**
         * Event triggered when game back to foreground
         * Please note that this event is not 100% guaranteed to be fired.
         * @property EVENT_SHOW
         * @type {String}
         */
        // EVENT_SHOW: "game_on_show",
        public readonly EVENT_SHOW:string;

        /**
         * Event triggered after game inited, at this point all engine objects and game scripts are loaded
         * @property EVENT_GAME_INITED
         * @type {String}
         */
        // EVENT_GAME_INITED: "game_inited",
        public readonly EVENT_GAME_INITED:string;

        /**
         * Event triggered after renderer inited, at this point you will be able to use the render context
         * @property EVENT_RENDERER_INITED
         * @type {String}
         */
        // EVENT_RENDERER_INITED: "renderer_inited",
        public readonly EVENT_RENDERER_INITED:string;

        public readonly RENDER_TYPE_CANVAS:number;
        public readonly RENDER_TYPE_WEBGL:number;
        public readonly RENDER_TYPE_OPENGL:number;

        /**
         * Key of config
         * @property CONFIG_KEY
         * @type {Object}
         */
        public readonly CONFIG_KEY:ConfigKey;

        /**
         * !#en The outer frame of the game canvas, parent of cc.container.
         * !#zh 游戏画布的外框，cc.container 的父类。
         * @property frame
         * @type {Object}
         */
        // frame: null,
        public frame:Object;

        /**
         * !#en The container of game canvas, equals to cc.container.
         * !#zh 游戏画布的容器。
         * @property container
         * @type {Object}
         */
        public container:Object;

        /**
         * !#en The canvas of the game, equals to cc._canvas.
         * !#zh 游戏的画布。
         * @property canvas
         * @type {Object}
         */
        public canvas:Object;

        /**
         * !#en
         * The current game configuration, including:<br/>
         * 1. debugMode<br/>
         *      "debugMode" possible values :<br/>
         *      0 - No message will be printed.                                                      <br/>
         *      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.                      <br/>
         *      2 - cc.error, cc.assert, cc.warn will print in console.                              <br/>
         *      3 - cc.error, cc.assert will print in console.                                       <br/>
         *      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.<br/>
         *      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.        <br/>
         *      6 - cc.error, cc.assert will print on canvas, available only on web.                 <br/>
         * 2. showFPS<br/>
         *      Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.<br/>
         * 3. frameRate<br/>
         *      "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.<br/>
         * 4. id<br/>
         *      "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.<br/>
         * 5. renderMode<br/>
         *      "renderMode" sets the renderer type, only useful on web :<br/>
         *      0 - Automatically chosen by engine<br/>
         *      1 - Forced to use canvas renderer<br/>
         *      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers<br/>
         * 6. scenes<br/>
         *      "scenes" include available scenes in the current bundle.<br/>
         *<br/>
         * Please DO NOT modify this object directly, it won't have any effect.<br/>
         * !#zh
         * 当前的游戏配置，包括：                                                                  <br/>
         * 1. debugMode（debug 模式，但是在浏览器中这个选项会被忽略）                                <br/>
         *      "debugMode" 各种设置选项的意义。                                                   <br/>
         *          0 - 没有消息被打印出来。                                                       <br/>
         *          1 - cc.error，cc.assert，cc.warn，cc.log 将打印在 console 中。                  <br/>
         *          2 - cc.error，cc.assert，cc.warn 将打印在 console 中。                          <br/>
         *          3 - cc.error，cc.assert 将打印在 console 中。                                   <br/>
         *          4 - cc.error，cc.assert，cc.warn，cc.log 将打印在 canvas 中（仅适用于 web 端）。 <br/>
         *          5 - cc.error，cc.assert，cc.warn 将打印在 canvas 中（仅适用于 web 端）。         <br/>
         *          6 - cc.error，cc.assert 将打印在 canvas 中（仅适用于 web 端）。                  <br/>
         * 2. showFPS（显示 FPS）                                                            <br/>
         *      当 showFPS 为 true 的时候界面的左下角将显示 fps 的信息，否则被隐藏。              <br/>
         * 3. frameRate (帧率)                                                              <br/>
         *      “frameRate” 设置想要的帧率你的游戏，但真正的FPS取决于你的游戏实现和运行环境。      <br/>
         * 4. id                                                                            <br/>
         *      "gameCanvas" Web 页面上的 Canvas Element ID，仅适用于 web 端。                         <br/>
         * 5. renderMode（渲染模式）                                                         <br/>
         *      “renderMode” 设置渲染器类型，仅适用于 web 端：                              <br/>
         *          0 - 通过引擎自动选择。                                                     <br/>
         *          1 - 强制使用 canvas 渲染。
         *          2 - 强制使用 WebGL 渲染，但是在部分 Android 浏览器中这个选项会被忽略。     <br/>
         * 6. scenes                                                                         <br/>
         *      “scenes” 当前包中可用场景。                                                   <br/>
         * <br/>
         * 注意：请不要直接修改这个对象，它不会有任何效果。
         * @property config
         * @type {Object}
         */
        public config:Object;

        /**
         * !#en Callback when the scripts of engine have been load.
         * !#zh 当引擎完成启动后的回调函数。
         * @method onStart
         * @type {Function}
         */
        public onStart:Function;

        /**
         * !#en Callback when game exits.
         * !#zh 当游戏结束后的回调函数。
         * @method onStop
         * @type {Function}
         */
        public onStop:Function;

    //@Public Methods

    //  @Game play control
        /**
         * !#en Set frameRate of game.
         * !#zh 设置游戏帧率。
         * @method setFrameRate
         * @param {Number} frameRate
         */
        public setFrameRate(frameRate:number):void;

        /**
         * !#en Run the game frame by frame.
         * !#zh 执行一帧游戏循环。
         * @method step
         */
        public step():void;

        /**
         * !#en Pause the game main loop. This will pause: 
         * game logic execution, rendering process, event manager, background music and all audio effects.
         * This is different with cc.director.pause which only pause the game logic execution.
         * !#zh 暂停游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。这点和只暂停游戏逻辑的 cc.director.pause 不同。
         * @method pause
         */
        public pause():void;

        /**
         * !#en Resume the game from pause. This will resume: 
         * game logic execution, rendering process, event manager, background music and all audio effects.
         * !#zh 恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。
         * @method resume
         */
        public resume():void;

        /**
         * !#en Check whether the game is paused.
         * !#zh 判断游戏是否暂停。
         * @method isPaused
         * @return {Boolean}
         */
        public isPaused():boolean;

        /**
         * !#en Restart game.
         * !#zh 重新开始游戏
         * @method restart
         */
        public restart():void;

        /**
         * End game, it will close the game window
         */
        public end():void;

    //  @Game loading
        /**
         * !#en Prepare game.
         * !#zh 准备引擎，请不要直接调用这个函数。
         * @param {Function} cb
         * @method prepare
         */
        // public prepare(cb:()=>void):void;
        public prepare(cb:Function):void;

        /**
         * !#en cc.game is the singleton object for game related functions.
         * !#zh cc.game 是 Game 的实例，用来驱动整个游戏。
         * @class Game
         */

        /**
         * !#en Run game with configuration object and onStart function.
         * !#zh 运行游戏，并且指定引擎配置和 onStart 的回调。
         * @method run
         * @param {Object|Function} [config] - Pass configuration object or onStart function
         * @param {Function} [onStart] - function to be executed after game initialized
         */
        public run(config?:Object|Function, onStart?:Function):void;

    //  @ Persist root node section
        /**
         * !#en
         * Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br/>
         * The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.
         * !#zh
         * 声明常驻根节点，该节点不会被在场景切换中被销毁。<br/>
         * 目标节点必须位于为层级的根节点，否则无效。
         * @method addPersistRootNode
         * @param {Node} node - The node to be made persistent
         */
        public addPersistRootNode(node:Node):void;

        /**
         * !#en Remove a persistent root node.
         * !#zh 取消常驻根节点。
         * @method removePersistRootNode
         * @param {Node} node - The node to be removed from persistent node list
         */
        public removePersistRootNode(node:Node):void;

        /**
         * !#en Check whether the node is a persistent root node.
         * !#zh 检查节点是否是常驻根节点。
         * @method isPersistRootNode
         * @param {Node} node - The node to be checked
         * @return {Boolean}
         */
        public isPersistRootNode(node:Node):boolean;
    }

    /**
     * @property game
     * @type Game
     */
    export const game:Game;
}

