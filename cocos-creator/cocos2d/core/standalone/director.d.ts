/// <reference path="../../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    // File: cocos2d/core/CCDirector.js
    //+--------------------------------------------------------------------------------
    // var EventTarget = require('./event/event-target');
    // var Class = require('./platform/_CCClass');
    // var AutoReleaseUtils = require('./load-pipeline/auto-release-utils');

    // cc.g_NumberOfDraws = 0;

    //----------------------------------------------------------------------------------------------------------------------

    /**
     * !#en
     * <p>
     *    ATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>
     *    cc.director is a singleton object which manage your game's logic flow.<br/>
     *    Since the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>
     *    the standard way to use it is by calling:<br/>
     *      - cc.director.methodName(); <br/>
     *
     *    It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
     *    <br/>
     *    The cc.director is also responsible for:<br/>
     *      - initializing the OpenGL context<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL buffer depth (default on is 0-bit)<br/>
     *      - setting the color for clear screen (default one is BLACK)<br/>
     *      - setting the projection (default one is 3D)<br/>
     *      - setting the orientation (default one is Portrait)<br/>
     *      <br/>
     *    <br/>
     *    The cc.director also sets the default OpenGL context:<br/>
     *      - GL_TEXTURE_2D is enabled<br/>
     *      - GL_VERTEX_ARRAY is enabled<br/>
     *      - GL_COLOR_ARRAY is enabled<br/>
     *      - GL_TEXTURE_COORD_ARRAY is enabled<br/>
     * </p>
     * <p>
     *   cc.director also synchronizes timers with the refresh rate of the display.<br/>
     *   Features and Limitations:<br/>
     *      - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
     *      - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
     * </p>
     *
     * !#zh
     * <p>
     *     注意：用 cc.director 代替 cc.Director。<br/>
     *     cc.director 一个管理你的游戏的逻辑流程的单例对象。<br/>
     *     由于 cc.director 是一个单例，你不需要调用任何构造函数或创建函数，<br/>
     *     使用它的标准方法是通过调用：<br/>
     *       - cc.director.methodName();
     *     <br/>
     *     它创建和处理主窗口并且管理什么时候执行场景。<br/>
     *     <br/>
     *     cc.director 还负责：<br/>
     *      - 初始化 OpenGL 环境。<br/>
     *      - 设置OpenGL像素格式。(默认是 RGB565)<br/>
     *      - 设置OpenGL缓冲区深度 (默认是 0-bit)<br/>
     *      - 设置空白场景的颜色 (默认是 黑色)<br/>
     *      - 设置投影 (默认是 3D)<br/>
     *      - 设置方向 (默认是 Portrait)<br/>
     *    <br/>
     *    cc.director 设置了 OpenGL 默认环境 <br/>
     *      - GL_TEXTURE_2D   启用。<br/>
     *      - GL_VERTEX_ARRAY 启用。<br/>
     *      - GL_COLOR_ARRAY  启用。<br/>
     *      - GL_TEXTURE_COORD_ARRAY 启用。<br/>
     * </p>
     * <p>
     *   cc.director 也同步定时器与显示器的刷新速率。
     *   <br/>
     *   特点和局限性: <br/>
     *      - 将计时器 & 渲染与显示器的刷新频率同步。<br/>
     *      - 只支持动画的间隔 1/60 1/30 & 1/15。<br/>
     * </p>
     *
     * @class Director
     */
    // cc.Director = Class.extend(/** @lends cc.Director# */{
    export class Director extends Class implements EventTarget {
        // static constants
        /**
         * !#en The event projection changed of cc.Director.
         * !#zh cc.Director 投影变化的事件。
         * @event cc.Director.EVENT_PROJECTION_CHANGED
         * @param {Event} event
         * @example
         *   cc.director.on(cc.Director.EVENT_PROJECTION_CHANGED, function(event) {
         *      cc.log("Projection changed.");
         *   });
         */
        public static readonly EVENT_PROJECTION_CHANGED:string;

        /**
         * !#en The event which will be triggered before loading a new scene.
         * !#zh 加载新场景之前所触发的事件。
         * @event cc.Director.EVENT_BEFORE_SCENE_LOADING
         * @param {Event} event
         * @param {Vec2} event.detail - The loading scene name
         */
        public static readonly EVENT_BEFORE_SCENE_LOADING:string;

        /*
        * !#en The event which will be triggered before launching a new scene.
        * !#zh 运行新场景之前所触发的事件。
        * @event cc.Director.EVENT_BEFORE_SCENE_LAUNCH
        * @param {Event} event
        * @param {Vec2} event.detail - New scene which will be launched
        */
        public static readonly EVENT_BEFORE_SCENE_LAUNCH:string;

        /**
         * !#en The event which will be triggered after launching a new scene.
         * !#zh 运行新场景之后所触发的事件。
         * @event cc.Director.EVENT_AFTER_SCENE_LAUNCH
         * @param {Event} event
         * @param {Vec2} event.detail - New scene which is launched
         */
        public static readonly EVENT_AFTER_SCENE_LAUNCH:string;

        /**
         * !#en The event which will be triggered at the beginning of every frame.
         * !#zh 每个帧的开始时所触发的事件。
         * @event cc.Director.EVENT_BEFORE_UPDATE
         * @param {Event} event
         */
        public static readonly EVENT_BEFORE_UPDATE:string;

        /**
         * !#en The event which will be triggered after components update.
         * !#zh 组件 “update” 时所触发的事件。
         * @event cc.Director.EVENT_COMPONENT_UPDATE
         * @param {Event} event
         * @param {Vec2} event.detail - The delta time from last frame
         */
        public static readonly EVENT_COMPONENT_UPDATE:string;

        /**
         * !#en The event which will be triggered after components late update.
         * !#zh 组件 “late update” 时所触发的事件。
         * @event cc.Director.EVENT_COMPONENT_LATE_UPDATE
         * @param {Event} event
         * @param {Vec2} event.detail - The delta time from last frame
         */
        public static readonly EVENT_COMPONENT_LATE_UPDATE:string;

        /**
         * !#en The event which will be triggered after engine and components update logic.
         * !#zh 将在引擎和组件 “update” 逻辑之后所触发的事件。
         * @event cc.Director.EVENT_AFTER_UPDATE
         * @param {Event} event
         */
        public static readonly EVENT_AFTER_UPDATE:string;

        /**
         * !#en The event which will be triggered before visiting the rendering scene graph.
         * !#zh 访问渲染场景树之前所触发的事件。
         * @event cc.Director.EVENT_BEFORE_VISIT
         * @param {Event} event
         */
        public static readonly EVENT_BEFORE_VISIT:string;

        /**
         * !#en
         * The event which will be triggered after visiting the rendering scene graph,
         * the render queue is ready but not rendered at this point.
         * !#zh 访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。
         * @event cc.Director.EVENT_AFTER_VISIT
         * @param {Event} event
         */
        public static readonly EVENT_AFTER_VISIT:string;

        /**
         * !#en The event which will be triggered after the rendering process.
         * !#zh 渲染过程之后所触发的事件。
         * @event cc.Director.EVENT_AFTER_DRAW
         * @param {Event} event
         */
        public static readonly EVENT_AFTER_DRAW:string;

        // instance properties

        //Possible OpenGL projections used by director
        /**
         * Constant for 2D projection (orthogonal projection)
         * @constant
         * @type {Number}
         */
        public readonly PROJECTION_2D:number;

        /**
         * Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
         * @constant
         * @type {Number}
         */
        public readonly PROJECTION_3D:number;

        /**
         * Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
         * @constant
         * @type {Number}
         */
        public readonly PROJECTION_CUSTOM:number;

        /**
         * Constant for default projection of cc.Director, default projection is 3D projection
         * @constant
         * @type {Number}
         */
        public readonly PROJECTION_DEFAULT:number;

        public readonly firstUseDirector:boolean;
        public readonly sharedDirector:DisplayLinkDirector;


        // constructor and instance methods
        public constructor();

        public init():boolean;

        /**
         * Manage all init process shared between the web engine and jsb engine.
         * All platform independent init process should be occupied here.
         */
        public sharedInit():void;

        /**
         * calculates delta time since last time it was called
         */
        public calculateDeltaTime():void;

        /*
         * !#en
         * Converts a view coordinate to an WebGL coordinate<br/>
         * Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
         * Implementation can be found in CCDirectorWebGL.
         * !#zh 将触摸点的屏幕坐标转换为 WebGL View 下的坐标。
         * @method convertToGL
         * @param {Vec2} uiPoint
         * @return {Vec2}
         */
        // convertToGL: null,
        public convertToGL(uiPoint:Vec2):Vec2;

        /**
         * !#en
         * Converts an OpenGL coordinate to a view coordinate<br/>
         * Useful to convert node points to window points for calls such as glScissor<br/>
         * Implementation can be found in CCDirectorWebGL.
         * !#zh 将触摸点的 WebGL View 坐标转换为屏幕坐标。
         * @method convertToUI
         * @param {Vec2} glPoint
         * @return {Vec2}
         */
        // convertToUI: null,
        public convertToUI(uiPoint:Vec2):Vec2;

        public engineUpdate(deltaTime:number):void;

        public visit(deltaTime:number):void;

        /**
         * End the life of director in the next frame
         */
        public end():void;

        /*
         * !#en
         * Returns the size in pixels of the surface. It could be different than the screen size.<br/>
         * High-res devices might have a higher surface size than the screen size.
         * !#zh 获取内容缩放比例。
         * @method getContentScaleFactor
         * @return {Number}
         */
        public getContentScaleFactor():number;

        /*
         * !#en
         * This object will be visited after the main scene is visited.<br/>
         * This object MUST implement the "visit" selector.<br/>
         * Useful to hook a notification object.
         * !#zh
         * 这个对象将会在主场景渲染完后渲染。 <br/>
         * 这个对象必须实现 “visit” 功能。 <br/>
         * 对于 hook 一个通知节点很有用。
         * @method getNotificationNode
         * @return {Node}
         */
        public getNotificationNode():Node;

        /**
         * !#en
         * Returns the size of the WebGL view in points.<br/>
         * It takes into account any possible rotation (device orientation) of the window.
         * !#zh 获取视图的大小，以点为单位。
         * @method getWinSize
         * @return {Size}
         */
        public getWinSize():Size;

        /**
         * !#en
         * Returns the size of the OpenGL view in pixels.<br/>
         * It takes into account any possible rotation (device orientation) of the window.<br/>
         * On Mac winSize and winSizeInPixels return the same value.
         * !#zh 获取视图大小，以像素为单位。
         * @method getWinSizeInPixels
         * @return {Size}
         */
        public getWinSizeInPixels():Size;

        /**
         * getVisibleSize/getVisibleOrigin move to CCDirectorWebGL/CCDirectorCanvas
         * getZEye move to CCDirectorWebGL
         * setGLDefaultValues move to CCDirectorWebGL
         * public getZEye():number;
         * public setGLDefaultValues():void;
         */

        /**
         * !#en Returns the visible size of the running scene.
         * !#zh 获取运行场景的可见大小。
         * @method getVisibleSize
         * @return {Size}
         */
        public getVisibleSize():Size;
        

        /**
         * !#en Returns the visible origin of the running scene.
         * !#zh 获取视图在游戏内容中的坐标原点。
         * @method getVisibleOrigin
         * @return {Vec2}
         */
        public getVisibleOrigin():Vec2;

        /*
         * !#en Returns the z eye, only available in WebGL mode.
         * !#zh 获取 Z eye，只有在WebGL的模式下可用。
         * @method getZEye
         * @return {Number}
         */
        public getZEye():number;

        /**
         * !#en Pause the director's ticker, only involve the game logic execution.
         * It won't pause the rendering process nor the event manager.
         * If you want to pause the entier game including rendering, audio and event, 
         * please use {{#crossLink "Game.pause"}}cc.game.pause{{/crossLink}}
         * !#zh 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。
         * 如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 {{#crossLink "Game.pause"}}cc.game.pause{{/crossLink}}。
         * @method pause
         */
        public pause():void;

        /*
         * Pops out a scene from the queue.<br/>
         * This scene will replace the running one.<br/>
         * The running scene will be deleted. If there are no more scenes in the stack the execution is terminated.<br/>
         * ONLY call it if there is a running scene.
         */
        public popScene():void;

        /**
         * Removes cached all cocos2d cached data. It will purge the cc.textureCache, cc.spriteFrameCache, cc.spriteFrameAnimationCache
         */
        public purgeCachedData():void;

        /**
         * Purge the cc.director itself, including unschedule all schedule, remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.
         */
        public purgeDirector():void;

        /**
         * Reset the cc.director, can be used to restart the director after purge
         */
        public reset():void;

        /*
         * !#en
         * Suspends the execution of the running scene, pushing it on the stack of suspended scenes.<br/>
         * The new scene will be executed.<br/>
         * Try to avoid big stacks of pushed scenes to reduce memory allocation.<br/>
         * ONLY call it if there is a running scene.
         * !#zh
         * 暂停当前运行的场景，压入到暂停的场景栈中。<br/>
         * 新场景将被执行。 <br/>
         * 尽量避免压入大场景，以减少内存分配。 <br/>
         * 只能在有运行场景时调用它。
         * @method pushScene
         * @param {Scene} scene
         */
        public pushScene(scene:Scene):void;

        /**
         * !#en
         * Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
         * The new scene will be launched immediately.
         * !#zh 立刻切换指定场景。
         * @method runSceneImmediate
         * @param {Scene} scene - The need run scene.
         * @param {Function} [onBeforeLoadScene] - The function invoked at the scene before loading.
         * @param {Function} [onLaunched] - The function invoked at the scene after launch.
         */
        public runSceneImmediate(scene:Scene, onBeforeLoadScene?:Function, onLaunched?:Function):void;

        /**
         * !#en
         * Run a scene. Replaces the running scene with a new one or enter the first scene.
         * The new scene will be launched at the end of the current frame.
         * !#zh 运行指定场景。
         * @method runScene
         * @param {Scene} scene - The need run scene.
         * @param {Function} [onBeforeLoadScene] - The function invoked at the scene before loading.
         * @param {Function} [onLaunched] - The function invoked at the scene after launch.
         */
        public runScene(scene:Scene, onBeforeLoadScene?:Function, onLaunched?:Function):void;

        //  @Scene loading section

        /**
         * !#en Loads the scene by its name.
         * !#zh 通过场景名称进行加载场景。
         *
         * @method loadScene
         * @param {String} sceneName - The name of the scene to load.
         * @param {Function} [onLaunched] - callback, will be called after scene launched.
         * @return {Boolean} if error, return false
         */
        public loadScene(sceneName:name, onLaunched?:Function, _onUnloaded?:Function):boolean;

        /**
         * !#en
         * Preloads the scene to reduces loading time. You can call this method at any time you want.
         * After calling this method, you still need to launch the scene by `cc.director.loadScene`.
         * It will be totally fine to call `cc.director.loadScene` at any time even if the preloading is not
         * yet finished, the scene will be launched after loaded automatically.
         * !#zh 预加载场景，你可以在任何时候调用这个方法。
         * 调用完后，你仍然需要通过 `cc.director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。
         * 就算预加载还没完成，你也可以直接调用 `cc.director.loadScene`，加载完成后场景就会启动。
         *
         * @method preloadScene
         * @param {String} sceneName - The name of the scene to preload.
         * @param {Function} [onLoaded] - callback, will be called after scene loaded.
         * @param {Error} onLoaded.error - null or the error object.
         */
        public preloadScene(sceneName:string, onLoaded?:Function):void;

        /**
         * !#en Resume game logic execution after pause, if the current scene is not paused, nothing will happen.
         * !#zh 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。
         * @method resume
         */
        public resume():void;

        /**
         * The size in pixels of the surface. It could be different than the screen size.<br/>
         * High-res devices might have a higher surface size than the screen size.
         * @param {Number} scaleFactor
         */
        public setContentScaleFactor(scaleFactor:number):void;

        /**
         * !#en
         * Enables or disables WebGL depth test.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
         * !#zh 启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。
         * @method setDepthTest
         * @param {Boolean} on
         */
        public setDepthTest(on:boolean):void;

        /**
         * !#en
         * set color for clear screen.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
         * !#zh 设置场景的默认擦除颜色（支持白色全透明，但不支持透明度为中间值）。
         * @method setClearColor
         * @param {Color} clearColor
         */
        public setClearColor(clearColor:Color):void;

        /**
         * Sets the default values based on the CCConfiguration info
         */
        public setDefaultValues():void;

        /**
         * Sets whether next delta time equals to zero
         * @param {Boolean} nextDeltaTimeZero
         */
        public setNextDeltaTimeZero(nextDeltaTimeZero:boolean):void;

        /**
         * Starts the registered next scene
         */
        public setNextScene():void;

        /**
         * Sets Notification Node
         * @param {Node} node
         */
        public setNotificationNode(node:Node):void;

        /**
         * Returns the cc.director delegate.
         * @return {cc.DirectorDelegate}
         */
        public getDelegate():DirectorDelegate;

        /**
         * Sets the cc.director delegate. It shall implement the CCDirectorDelegate protocol
         * @return {cc.DirectorDelegate}
         */
        public setDelegate(delegate:DirectorDelegate):void;

        /*
         * !#en
         * Sets the view, where everything is rendered, do not call this function.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * !#zh 设置 GLView。
         * @method setOpenGLView
         * @param {View} openGLView
         */
        public setOpenGLView(openGLView:View):void;

        /**
         * !#en
         * Sets an OpenGL projection.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * !#zh 设置 OpenGL 投影。
         * @method setProjection
         * @param {Number} projection
         */
        public setProjection(projection:number):void;

        /**
         * !#en
         * Update the view port.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * !#zh 设置视窗（请不要主动调用这个接口，除非你知道你在做什么）。
         * @method setViewport
         */
        // public setViewport(viewPort:ViewPort):void;
        public setViewport():void;

        /*
         * !#en
         * Get the View, where everything is rendered.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * !#zh
         * 获取 GLView。
         * @method getOpenGLView
         * @return {View}
         */
        public getOpenGLView():View;

        /**
         * !#en
         * Sets an OpenGL projection.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * !#zh 获取 OpenGL 投影。
         * @method getProjection
         * @return {Number}
         */
        public getProjection():number;

        /**
         * !#en
         * Enables/disables OpenGL alpha blending.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * !#zh 启用/禁用 透明度融合。
         * @method setAlphaBlending
         * @param {Boolean} on
         */
        public setAlphaBlending(on:boolean):void;

        /**
         * !#en
         * Returns whether or not the replaced scene will receive the cleanup message.<br/>
         * If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
         * If the new scene replaces the old one, the it will receive the "cleanup" message.
         * !#zh
         * 更换场景时是否接收清理消息。<br>
         * 如果新场景是采用 push 方式进入的，那么旧的场景将不会接收到 “cleanup” 消息。<br/>
         * 如果新场景取代旧的场景，它将会接收到 “cleanup” 消息。</br>
         * @method isSendCleanupToScene
         * @return {Boolean}
         */
        public isSendCleanupToScene():boolean;

        /**
         * !#en
         * Returns current render Scene, normally you will never need to use this API.
         * In most case, you probably want to use `getScene` instead.
         * !#zh 获取当前运行的渲染场景，一般情况下，你不会需要用到这个接口，请使用 getScene。
         * @method getRunningScene
         * @private
         * @return {Scene}
         */
        public getRunningScene():Scene;

        /**
         * !#en Returns current logic Scene.
         * !#zh 获取当前逻辑场景。
         * @method getScene
         * @return {Scene}
         * @example
         *  // This will help you to get the Canvas node in scene
         *  cc.director.getScene().getChildByName('Canvas');
         */
        public getScene():Scene;

        /**
         * !#en Returns the FPS value.
         * !#zh 获取单位帧执行时间。
         * @method getAnimationInterval
         * @return {Number}
         */
        public getAnimationInterval():number;

        /**
         * !#en Returns whether or not to display the FPS informations.
         * !#zh 获取是否显示 FPS 信息。
         * @method isDisplayStats
         * @return {Boolean}
         */
        public isDisplayStats():boolean;

        /**
         * !#en Sets whether display the FPS on the bottom-left corner.
         * !#zh 设置是否在左下角显示 FPS。
         * @method setDisplayStats
         * @param {Boolean} displayStats
         */
        public setDisplayStats(displayStats:boolean):void;

        /**
         * !#en Returns seconds per frame.
         * !#zh 获取实际记录的上一帧执行时间，可能与单位帧执行时间（AnimationInterval）有出入。
         * @method getSecondsPerFrame
         * @return {Number}
         */
        public getSecondsPerFrame():number;

        /**
         * !#en Returns whether next delta time equals to zero.
         * !#zh 返回下一个 “delta time” 是否等于零。
         * @method isNextDeltaTimeZero
         * @return {Boolean}
         */
        public isNextDeltaTimeZero():boolean;

        /**
         * !#en Returns whether or not the Director is paused.
         * !#zh 是否处于暂停状态。
         * @method isPaused
         * @return {Boolean}
         */
        public isPaused():boolean;

        /**
         * !#en Returns how many frames were called since the director started.
         * !#zh 获取 director 启动以来游戏运行的总帧数。
         * @method getTotalFrames
         * @return {Number}
         */
        public getTotalFrames():number;

        /**
         * Pops out all scenes from the queue until the root scene in the queue. <br/>
         * This scene will replace the running one.  <br/>
         * Internally it will call "popToSceneStackLevel(1)".
         */
        public popToRootScene():void;

        /**
         * Pops out all scenes from the queue until it reaches "level".                             <br/>
         * If level is 0, it will end the director.                                                 <br/>
         * If level is 1, it will pop all scenes until it reaches to root scene.                    <br/>
         * If level is <= than the current stack level, it won't do anything.
         * @param {Number} level
         */
        public popToSceneStackLevel(level:number):void;

        /**
         * !#en Returns the cc.Scheduler associated with this director.
         * !#zh 获取和 director 相关联的 cc.Scheduler。
         * @method getScheduler
         * @return {Scheduler}
         */
        public getScheduler():Scheduler;

        /**
         * !#en Sets the cc.Scheduler associated with this director.
         * !#zh 设置和 director 相关联的 cc.Scheduler。
         * @method setScheduler
         * @param {Scheduler} scheduler
         */
        public setScheduler(scheduler:Scheduler):void;

        /**
         * !#en Returns the cc.ActionManager associated with this director.
         * !#zh 获取和 director 相关联的 cc.ActionManager（动作管理器）。
         * @method getActionManager
         * @return {ActionManager}
         */
        public getActionManager():ActionManager;

        /**
         * !#en Sets the cc.ActionManager associated with this director.
         * !#zh 设置和 director 相关联的 cc.ActionManager（动作管理器）。
         * @method setActionManager
         * @param {ActionManager} actionManager
         */
        public setActionManager(actionManager:ActionManager):void;

        /*
         * !#en Returns the cc.AnimationManager associated with this director.
         * !#zh 获取和 director 相关联的 cc.AnimationManager（动画管理器）。
         * @method getAnimationManager
         * @return {AnimationManager}
         */
        public getAnimationManager():AnimationManager;

        /**
         * Returns the cc.CollisionManager associated with this director.
         * @method getCollisionManager
         * @return {CollisionManager}
         */
        public getCollisionManager():CollisionManager;

        /**
         * !#en Returns the delta time since last frame.
         * !#zh 获取上一帧的 “delta time”。
         * @method getDeltaTime
         * @return {Number}
         */
        public getDeltaTime():number;
    }


    /***************************************************
     * implementation of DisplayLinkDirector
     **************************************************/
    // cc.DisplayLinkDirector = cc.Director.extend(/** @lends cc.Director# */{
    export class DisplayLinkDirector extends Director {
        // invalid: false,
        public invalid:boolean;

        /**
         * Starts Animation
         */
        public startAnimation():void;

        /**
         * Run main loop of director
         */
        public mainLoop(deltaTime:number, updateAnimate:boolean):void;

        /**
         * Stops animation
         */
        public stopAnimation():void;

        /**
         * Sets animation interval
         * @param {Number} value - The animation interval desired.
         */
        public setAnimationInterval(value:number):void;
    }

    /**
     * Default fps is 60
     * @type {Number}
     */
    export const defaultFPS:number;
}