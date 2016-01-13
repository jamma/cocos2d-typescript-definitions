/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/CCActionManager.js
    ////////////////////////////////////////////////////////////////////////////////

    // Class Definitions
    /**
     * cc.ActionManager is a class that can manage actions.<br/>
     * Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
     * which uses this class's singleton object.
     * But there are some cases where you might need to use this class. <br/>
     * Examples:<br/>
     * - When you want to run an action where the target is different from a CCNode.<br/>
     * - When you want to pause / resume the actions<br/>
     * @class
     * @extends cc.Class
     * @example
     * var mgr = new cc.ActionManager();
     */
    export class ActionManager extends Class {
        constructor();

        /** Adds an action with a target.
         * If the target is already present, then the action will be added to the existing target.
         * If the target is not present, a new instance of this target will be created either paused or not,
         * and the action will be added to the newly created target.
         * When the target is paused, the queued actions won't be 'ticked'.
         *
         * @param {cc.Action} action
         * @param {cc.Node} target
         * @param {Boolean} paused
         */
        addAction(action: Action, target: Node, paused: boolean): void;

        /** Gets an action given its tag an a target
         * @param {Number} tag
         * @param {object} target
         * @return {cc.Action|Null}  return the Action with the given tag on success
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        getActionByTag(tag: number, target: Node): Action;

        /** Returns the numbers of actions that are running in a certain target. <br/>
         * Composable actions are counted as 1 action. <br/>
         * Example: <br/>
         * - If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         * - If you are running 7 Sequences of 2 actions, it will return 7.
         * @param {object} target
         * @return {Number}
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        numberOfRunningActionsInTarget(target: Node): number;

        /**
         * Pauses all running actions, returning a list of targets whose actions were paused.
         * @return {Array}  a list of targets whose actions were paused.
         */
        pauseAllRunningActions(): void;

        /** Pauses the target: all running actions and newly added actions will be paused.
         * @param {object} target
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        pauseTarget(target: Node): void;

        /** purges the shared action manager. It releases the retained instance. <br/>
         * because it uses this, so it can not be static
         */
        purgeSharedManager(): void;

        /** Resumes the target. All queued actions will be resumed.
         * @param {object} target
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        resumeTarget(target: Node): void;

        /**
         * Resume a set of targets (convenience function to reverse a pauseAllRunningActions call)
         * @param {Array} targetsToResume
         *
         * TODO: Restricting the targets to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        resumeTargets(targetsToResume: Node[]): void;

        /** Removes an action given an action reference.
         * @param {cc.Action} action The action to be removed.
         */
        removeAction(action: Action): void;

        /** Removes an action given its tag and the target
         * @param {Number} tag
         * @param {object} target
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        removeActionByTag(tag: number, target: Node);

        /**
         * Removes all actions from all the targets.
         */
        removeAllActions(): void;

        /** Removes all actions from a certain target. <br/>
         * All the actions that belongs to the target will be removed.
         * @param {object} target
         * @param {boolean} forceDelete
         *
         * TODO: I believe that actions can be run on objects other than cc.Node. How should this be handled?
         *       Is there some type of interface I can use so that this method doesn't have to take "any"?
         *       For now, I'm restricting this to only allowing cc.Node.
         */
        removeAllActionsFromTarget(target: Node, forceDelete: boolean): void;

        /**
         * @param {Number} dt delta time in seconds
         */
        update(dt: number): void;
    }

    /**
     * @class
     * @extends cc.Class
     * @example
     * var element = new cc.HashElement();
     */
    export class HashElement extends Class {}

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/CCDirector.js
    ////////////////////////////////////////////////////////////////////////////////

    // Variable Definitions
    var g_NumberOfDraws: number;
    var defaultFPS: number;

    // Function Definitions
    /**
     * TODO: Fill in this description later
     *
     * @function
     * @param {AffineTransform} xform The transformation matrix.
     */
    export function GLToClipTransform(xform: AffineTransform): void;

    // Class Definitions
    /**
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
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL buffer depth (default one is 0-bit)<br/>
     - setting the color for clear screen (default one is BLACK)<br/>
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
     * @class
     * @name cc.Director
     */
    export class Director extends Class {
        /**
         * The event after draw of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_DRAW, function(event) {
         *           cc.log("after draw event.");
         *       });
         */
        public static EVENT_AFTER_DRAW: string;

        /**
         * The event after update of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_UPDATE, function(event) {
         *           cc.log("after update event.");
         *       });
         */
        public static EVENT_AFTER_UPDATE: string;

        /**
         * The event after visit of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_VISIT, function(event) {
         *           cc.log("after visit event.");
         *       });
         */
        public static EVENT_AFTER_VISIT: string;

        /**
         * The event projection changed of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_PROJECTION_CHANGED, function(event) {
         *           cc.log("Projection changed.");
         *       });
         */
        public static EVENT_PROJECTION_CHANGED: string;

        //Possible OpenGL projections used by director
        /**
         * Constant for 2D projection (orthogonal projection)
         * @constant
         * @type {Number}
         */
        public static PROJECTION_2D: number;

        /**
         * Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
         * @constant
         * @type {Number}
         */
        public static PROJECTION_3D: number;

        /**
         * Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
         * @constant
         * @type {Number}
         */
        public static PROJECTION_CUSTOM: number;

        /**
         * Constant for default projection of cc.Director, default projection is 3D projection
         * @constant
         * @type {Number}
         */
        public static PROJECTION_DEFAULT: number;

        public sharedDirector: Director;
        public firstUseDirector: boolean;

        //pubic static _getInstance = function () {

        constructor();
        init(): boolean;

        /**
         * calculates delta time since last time it was called
         */
        calculateDeltaTime(): number;

        /**
         * Converts a view coordinate to an WebGL coordinate<br/>
         * Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
         * Implementation can be found in CCDirectorWebGL
         * @function
         * @param {cc.Point} uiPoint
         * @return {cc.Point}
         */
        convertToGL(uiPoint: Point): Point;

        /**
         * Converts an WebGL coordinate to a view coordinate<br/>
         * Useful to convert node points to window points for calls such as glScissor<br/>
         * Implementation can be found in CCDirectorWebGL
         * @function
         * @param {cc.Point} glPoint
         * @return {cc.Point}
         */
        convertToUI(glPoint: Point): Point;

        /**
         *  Draw the scene. This method is called every frame. Don't call it manually.
         */
        drawScene(): void;

        /**
         * End the life of director in the next frame
         */
        end(): void;

        /**
         * Returns the cc.ActionManager associated with this director
         * @return {cc.ActionManager}
         */
        getActionManager(): ActionManager;

        /**
         * Returns the FPS value
         * @return {Number}
         */
        getAnimationInterval(): number;

        /**
         * Returns the size in pixels of the surface. It could be different than the screen size.<br/>
         * High-res devices might have a higher surface size than the screen size.
         * @return {Number}
         */
        getContentScaleFactor(): number;

        /**
         * Returns the cc.director delegate.
         * @return {cc.DirectorDelegate}
         */
        getDelegate(): DirectorDelegate;

        /**
         * Returns the delta time since last frame
         * @return {Number}
         */
        getDeltaTime(): number;

        /**
         * This object will be visited after the main scene is visited.<br/>
         * This object MUST implement the "visit" selector.<br/>
         * Useful to hook a notification object
         * @return {cc.Node}
         */
        getNotificationNode(): Node;

        /**
         * Get the CCEGLView, where everything is rendered.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @return {cc.view}
         */
        getOpenGLView(): View;

        /**
         * Sets an OpenGL projection.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @return {Number}
         */
        getProjection(): number;

        /**
         * Returns current running Scene. Director can only run one Scene at the time
         * @return {cc.Scene}
         */
        getRunningScene(): Scene;

        /**
         * Returns the cc.Scheduler associated with this director
         * @return {cc.Scheduler}
         */
        getScheduler(): Scheduler;

        /**
         * Returns seconds per frame
         * @return {Number}
         */
        getSecondsPerFrame(): number;

        /**
         * Returns how many frames were called since the director started
         * @return {Number}
         */
        getTotalFrames(): number;

        /**
         * Returns the size of the WebGL view in points.<br/>
         * It takes into account any possible rotation (device orientation) of the window
         * @return {cc.Size}
         */
        getWinSize(): Size;

        /**
         * Returns the size of the OpenGL view in pixels.<br/>
         * It takes into account any possible rotation (device orientation) of the window.<br/>
         * On Mac winSize and winSizeInPixels return the same value.
         * @return {cc.Size}
         */
        getWinSizeInPixels(): Size;

        /**
         * Returns the visible size of the running scene
         * @function
         * @return {cc.Size}
         */
        getVisibleSize(): Size;

        /**
         * Returns the visible origin of the running scene
         * @function
         * @return {cc.Point}
         */
        getVisibleOrigin(): Point;

        /**
         * Returns the z eye, only available in WebGL mode
         * @function
         * @return {Number}
         */
        getZEye(): number;

        /**
         * Returns whether or not to display the FPS informations
         * @return {Boolean}
         */
        isDisplayStats(): boolean;

        /**
         * Returns whether next delta time equals to zero
         * @return {Boolean}
         */
        isNextDeltaTimeZero(): boolean;

        /**
         * Returns whether or not the Director is paused
         * @return {Boolean}
         */
        isPaused(): boolean;

        /**
         * Returns whether or not the replaced scene will receive the cleanup message.<br>
         * If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
         * If the new scene replaces the old one, the it will receive the "cleanup" message.
         * @return {Boolean}
         */
        isSendCleanupToScene(): boolean;

        /**
         * Pause the director's ticker
         */
        pause(): void;

        /**
         * Pops out a scene from the queue.<br/>
         * This scene will replace the running one.<br/>
         * The running scene will be deleted. If there are no more scenes in the stack the execution is terminated.<br/>
         * ONLY call it if there is a running scene.
         * @function
         */
        popScene(): void;

        /**
         * Pops out all scenes from the queue until it reaches "level".                             <br/>
         * If level is 0, it will end the director.                                                 <br/>
         * If level is 1, it will pop all scenes until it reaches to root scene.                    <br/>
         * If level is <= than the current stack level, it won't do anything.
         * @param {Number} level
         */
        popToSceneStackLevel(level: number): void;

        /**
         * Pops out all scenes from the queue until the root scene in the queue. <br/>
         * This scene will replace the running one.  <br/>
         * Internally it will call "popToSceneStackLevel(1)"
         */
        popToRootScene(): void;

        /**
         * Removes cached all cocos2d cached data. It will purge the cc.textureCache, cc.spriteFrameCache, cc.animationCache
         */
        purgeCachedData(): void;

        /**
         * Purge the cc.director itself, including unschedule all schedule, remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.
         */
        purgeDirector(): void;

        /**
         * Suspends the execution of the running scene, pushing it on the stack of suspended scenes.<br/>
         * The new scene will be executed.<br/>
         * Try to avoid big stacks of pushed scenes to reduce memory allocation.<br/>
         * ONLY call it if there is a running scene.
         * @param {cc.Scene} scene
         */
        pushScene(scene: Scene): void;

        /**
         * Resume director after pause, if the current scene is not paused, nothing will happen.
         */
        resume(): void;

        /**
         * Run a scene. Replaces the running scene with a new one or enter the first scene.
         * @param {cc.Scene} scene
         */
        runScene(scene: Scene): void;

        /**
         * Sets the cc.ActionManager associated with this director
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager: ActionManager): void;

        /**
         * Enables/disables OpenGL alpha blending.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @param {Boolean} on
         */
        setAlphaBlending(newValue: boolean): void;

        /**
         * set color for clear screen.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
         * @function
         * @param {cc.color} newValue
         */
        setClearColor(newValue: Color): void;

        /**
         * The size in pixels of the surface. It could be different than the screen size.<br/>
         * High-res devices might have a higher surface size than the screen size.
         * @param {Number} newValue
         */
        setContentScaleFactor(newValue: number): void;

        /**
         * Sets the cc.director delegate. It shall implement the CCDirectorDelegate protocol
         * @return {cc.DirectorDelegate}
         */
        setDelegate(delegate: DirectorDelegate): void;

        /**
         * Sets the default values based on the CCConfiguration info
         */
        setDefaultValues(): void;

        /**
         * Enables or disables WebGL depth test.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
         * @function
         * @param {Boolean} newValue
         */
        setDepthTest(newValue: boolean): void;

        /**
         * Sets whether display the FPS on the bottom-left corner
         * @param {Boolean} displayStats
         */
        setDisplayStats(newValue: boolean): void;

        /**
         * Sets whether next delta time equals to zero
         * @param {Boolean} newValue
         */
        setNextDeltaTimeZero(newValue: boolean): void;

        /**
         * Starts the registered next scene
         */
        setNextScene(): void;

        /**
         * Sets Notification Node
         * @param {cc.Node} node
         */
        setNotificationNode(node: Node): void;

        /**
         * Sets the view, where everything is rendered, do not call this function.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @param {cc.view} openGLView
         */
        setOpenGLView(newValue: View): void;

        /**
         * Sets an OpenGL projection.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @param {Number} projection
         */
        setProjection(newValue: number): void;

        /**
         * Sets the cc.Scheduler associated with this director
         * @param {cc.Scheduler} scheduler
         */
        setScheduler(scheduler: Scheduler): void;

        /**
         * Update the view port.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         */
        setViewport(): void;
    }


    /***************************************************
     * implementation of DisplayLinkDirector
     **************************************************/
        //cc.DisplayLinkDirector = cc.Director.extend(/** @lends cc.Director# */{
    export class DisplayLinkDirector extends Director {
        /**
         * Run main loop of director
         */
        mainLoop(): void;

        /**
         * Sets animation interval
         * @param {Number} value the animation interval desired
         */
        setAnimationInterval(value: number): void;

        /**
         * Starts Animation
         */
        startAnimation(): void;

        /**
         * Stops animation
         */
        stopAnimation(): void;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/CCDirector.js
    ////////////////////////////////////////////////////////////////////////////////

    // Variable Definitions
    var PRIORITY_NON_SYSTEM: number;

    // Function Definitions

    /**
     * Helper function to create a HashTimerEntry;
     * @Class
     * @param {Array} timers
     * @param {cc.Class} target  hash key (retained)
     * @param {Number} timerIndex
     * @param {cc.Timer} currentTimer
     * @param {Boolean} currentTimerSalvaged
     * @param {Boolean} paused
     * @param {Array} hh
     * @see cc.HashTimerEntry;
     */
    export function hashSelectorEntry(timers: any[], target: Class, timerIndex: number, currentTimer: Timer,
                                      currentTimerSalvaged: boolean, paused: boolean, hh: any[]): HashTimerEntry;

    // Class Definitions

    /**
     * Hash Element used for "selectors with interval"
     * @Class
     * @param {Array} timers
     * @param {cc.Class} target  hash key (retained)
     * @param {Number} timerIndex
     * @param {cc.Timer} currentTimer
     * @param {Boolean} currentTimerSalvaged
     * @param {Boolean} paused
     * @param {Array} hh
     */
    export class HashTimerEntry {
        constructor(timers: any[], target: Class, timerIndex: number, currentTimer: Timer,
                    currentTimerSalvaged: boolean, paused: boolean, hh: any[]);
    }

    /**
     * A update entry list
     * @Class
     * @name cc.HashUpdateEntry
     * @param {Array} list Which list does it belong to ?
     * @param {cc.ListEntry} entry entry in the list
     * @param {cc.Class} target hash key (retained)
     * @param {function} callback
     * @param {Array} hh
     *
     * TODO: What kind of arrays for the list and hh params, can we specify a type here?
     */
    export class HashUpdateEntry {
        constructor(list: any[], entry: ListEntry, target: Class, callback: (arg?: any) => void, hh: any[]);
    }

    /**
     * A list double-linked list used for "updates with priority"
     * @Class
     * @name cc.ListEntry
     * @param {cc.ListEntry} prev
     * @param {cc.ListEntry} next
     * @param {function} callback
     * @param {cc.Class} target not retained (retained by hashUpdateEntry)
     * @param {Number} priority
     * @param {Boolean} paused
     * @param {Boolean} markedForDeletion selector will no longer be called and entry will be removed at end of the next tick
     *
     * TODO: What's the signature for the callback param, can we specify a type here?
     */
    export class ListEntry {
        constructor(prev: ListEntry, next: ListEntry, callback: (arg?:any) => void, target: Class,
                    priority: number, paused: boolean, markedForDeletion: boolean);
    }

    /**
     * <p>
     *    Scheduler is responsible of triggering the scheduled callbacks.<br/>
     *    You should not use NSTimer. Instead use this class.<br/>
     *    <br/>
     *    There are 2 different types of callbacks (selectors):<br/>
     *       - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
     *       - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
     *       <br/>
     *    The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'. *
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //register a schedule to scheduler
     * cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);
     */
    export class Scheduler extends Class {
        /**
         * Priority level reserved for system services.
         * @constant
         * @type Number
         */
        public static PRIORITY_SYSTEM:number;

        constructor();

        /**
         * Returns time scale of scheduler
         * @return {Number}
         */
        getTimeScale():number;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         * @param {any} key ???
         * @param {Class} target
         */
        isScheduled(key:any, target:Class):void;

        /**
         * Returns whether or not the target is paused
         * @param {cc.Class} target
         * @return {Boolean}
         */
        isTargetPaused(target:Class):boolean;

        /**
         * <p>
         *  Pause all selectors from all targets.<br/>
         *  You should NEVER call this method, unless you know what you are doing.
         * </p>
         */
        pauseAllTargets():void;

        /**
         * Pause all selectors from all targets with a minimum priority. <br/>
         * You should only call this with kCCPriorityNonSystemMin or higher.
         * @param {Number} minPriority
         */
        pauseAllTargetsWithMinPriority(minPriority):void;

        /**
         * <p>
         *    Pauses the target.<br/>
         *    All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
         *    If the target is not present, nothing happens.
         * </p>
         * @param {cc.Class} target
         */
        pauseTarget(target:Class):void;

        /**
         * Resumes the target.<br/>
         * The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
         * If the target is not present, nothing happens.
         * @param {cc.Class} target
         */
        resumeTarget(target:Class):void;

        /**
         * Resume selectors on a set of targets.<br/>
         * This can be useful for undoing a call to pauseAllCallbacks.
         * @param {Array} targetsToResume
         */
        resumeTargets(targetsToResume:Class[]):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         *
         * @param {cc.Class} target
         * @param {function} callback
         * @param {Number} interval
         * @param {Number} repeat
         * @param {Number} delay
         * @param {Boolean} paused
         * @param {any} key
         * @example
         */
        schedule(callback:(arg?:any) => void, target:Class,
                 interval:number, repeat:number, delay:number, paused:boolean, key:any):void;

        /**
         * <p>
         *   The scheduled method will be called every 'interval' seconds.</br>
         *   If paused is YES, then it won't be called until it is resumed.<br/>
         *   If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
         *   If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
         *   repeat let the action be repeated repeat + 1 times, use cc.REPEAT_FOREVER to let the action run continuously<br/>
         *   delay is the amount of time the action will wait before it'll start<br/>
         * </p>
         * @deprecated since v3.4 please use .schedule
         * @param {cc.Class} target
         * @param {function} callback_fn
         * @param {Number} interval
         * @param {Number} repeat
         * @param {Number} delay
         * @param {Boolean} paused
         * @example
         * //register a schedule to scheduler
         * cc.director.getScheduler().scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning );
         */
        scheduleCallbackForTarget(target:Class, callback_fn:(arg?:any) => void,
                                  interval:number, repeat:number, delay:number, paused:boolean):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         *
         * @param {cc.Class} target
         * @param {Number} priority
         * @param {Boolean} paused
         * @example
         */
        scheduleUpdate(target:Class, priority:number, paused:boolean):void;

        /**
         * <p>
         *    Schedules the 'update' callback_fn for a given target with a given priority.<br/>
         *    The 'update' callback_fn will be called every frame.<br/>
         *    The lower the priority, the earlier it is called.
         * </p>
         * @deprecated since v3.4 please use .scheduleUpdate
         * @param {cc.Class} target
         * @param {Number} priority
         * @param {Boolean} paused
         * @example
         * //register this object to scheduler
         * cc.director.getScheduler().scheduleUpdateForTarget(this, priority, !this._isRunning );
         */
        scheduleUpdateForTarget(target:Class, priority:number, paused:boolean):void;

        /**
         * <p>
         *    Modifies the time of all scheduled callbacks.<br/>
         *    You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
         *    Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
         *    To create a 'fast forward' effect, use values higher than 1.0.<br/>
         *    @warning It will affect EVERY scheduled selector / action.
         * </p>
         * @param {Number} timeScale
         */
        setTimeScale(timeScale:number):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         * @param {any} key ???
         * @param {Class} target
         */
        unschedule(key:any, target:Class):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         */
        unscheduleAll():void;

        /**
         *  <p>
         *      Unschedules all function callbacks from all targets. <br/>
         *      You should NEVER call this method, unless you know what you are doing.
         *  </p>
         * @deprecated since v3.4 please use .unscheduleAllWithMinPriority
         */
        unscheduleAllCallbacks():void;

        /**
         * Unschedules all function callbacks for a given target. This also includes the "update" callback function.
         * @deprecated since v3.4 please use .unscheduleAll
         * @param {cc.Class} target
         */
        unscheduleAllCallbacksForTarget(target:Class):void;

        /**
         * <p>
         *    Unschedules all function callbacks from all targets with a minimum priority.<br/>
         *    You should only call this with kCCPriorityNonSystemMin or higher.
         * </p>
         * @deprecated since v3.4 please use .unscheduleAllWithMinPriority
         * @param {Number} minPriority
         */
        unscheduleAllCallbacksWithMinPriority(minPriority:number):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         * @param {Class} target
         */
        unscheduleAllForTarget(target:Class):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         * @param {Number} minPriority ???
         */
        unscheduleAllWithMinPriority(minPriority:number):void;

        /**
         * <p>
         *   Unschedule a callback function for a given target.<br/>
         *   If you want to unschedule the "update", use unscheudleUpdateForTarget.
         * </p>
         * @deprecated since v3.4 please use .unschedule
         * @param {cc.Class} target
         * @param {function} callback callback[Function] or key[String]
         * @example
         * //unschedule a callback of target
         * cc.director.getScheduler().unscheduleCallbackForTarget(function, this);
         */
        unscheduleCallbackForTarget(target:Class, callback:(arg?:any) => void):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         * @param {Class} target
         */
        unscheduleUpdate(target:Class):void;

        /**
         * Unschedules the update callback function for a given target
         * @param {cc.Class} target
         * @deprecated since v3.4 please use .unschedule
         * @example
         * //unschedules the "update" method.
         * cc.director.getScheduler().unscheduleUpdateForTarget(this);
         */
        unscheduleUpdateForTarget(target:Class):void;

        /**
         * 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
         * @param {Number} dt delta time
         */
        update(dt:number):void;
    }

    /**
     * Light weight timer
     * @class
     * @extends cc.Class
     */
    export class Timer extends Class {
        constructor();

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         * TODO: In the implementation (CCScheduler.js), this returns a number (0).
         *       I see no use for this anywhere, as all concrete implementations return nothing.
         *       So I'm making this, as well as all overridden methods, return void.
         */
        cancel():void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @return {Number} returns interval of timer
         */
        getInterval():number;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @param {Number} interval set interval in seconds
         */
        setInterval(interval:number):void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @param {Number} seconds ???
         * @param {Number} repeat ???
         * @param {Number} delay ???
         */
        setupTimerWithInterval(seconds:number, repeat:boolean, delay:number):void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * TODO: In the implementation (CCScheduler.js), this returns a number (0).
         *       I see no use for this anywhere, as all concrete implementations return nothing.
         *       So I'm making this, as well as all overridden methods, return void.
         */
        trigger():void;

        /**
         * triggers the timer
         * @param {Number} dt delta time
         */
        update(dt:number):void;
    }

    /**
     * TODO: Comment this with an explanation of this class' purpose / functionality
     *
     * @class cc.TimerTargetCallback
     */
        //cc.TimerTargetCallback = cc.Timer.extend({
    export class TimerTargetCallback extends Timer {

        constructor();

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         * WTF is "key" used for, and WTF kind of type is it?!?
         *
         * @param {cc.Scheduler} scheduler ???
         * @param {Function} callback ???
         * @param {cc.Class} target ???
         * @param {any} key ???
         * @param {Number} seconds ???
         * @param {Boolean} repeat ???
         * @param {Number} delay ???
         * @return {boolean} ???
         */
        initWithCallback(scheduler:Scheduler, callback:(arg?:any) => void, target:Class,
                         key:any, seconds:number, repeat:boolean, delay:number):boolean;

        getCallback():((arg?:any) => void);

        getKey():any;

        trigger():void;

        cancel():void;
    }

    /**
     * TODO: Comment this with an explanation of this class' purpose / functionality
     *
     * @class cc.TimerTargetSelector
     */
    export class TimerTargetSelector extends Timer {

        constructor();

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         */
        cancel():void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @return {Function} ???
         */
        getSelector():((arg?:any) => void);

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @param {cc.Scheduler} scheduler ???
         * @param {Function} selector ???
         * @param {cc.Class} target ???
         * @param {Number} seconds ???
         * @param {Boolean} repeat ???
         * @param {Number} delay ???
         * @return {boolean} ???
         */
        initWithSelector(scheduler:Scheduler, selector:(arg?:any) => void, target:Class,
                         seconds:number, repeat:boolean, delay:number):boolean;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         */
        trigger():void;
    }


    // Module definitions
    export module Node {
        //+-------------------- Function Definitions --------------------+//
        ///**
        // * Allocates and initializes a node.
        // * @deprecated since v3.0, please use new construction instead.
        // * @see cc.Node
        // * @return {cc.Node}
        // */
        //export function create():Node;

        // Class Definitions
        export class RenderCmd{}
    }

}
