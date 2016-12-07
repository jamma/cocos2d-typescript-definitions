/// <reference path="../../../cocos-creator-lib.d.ts" />


declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/CCActionManager.js
    //+--------------------------------------------------------------------------------

    /*
     * @class HashElement
     * @extends cc._Class
     * @private
     * @example
     * var element = new cc.HashElement();
     */
    export class HashElement extends Class {
        public actions:Action[];
        // public target:Node;
        public target:Object;
        public actionIndex:number;
        public currentAction:Action;
        public paused:boolean;
        public hh:HashHandle;

        /**
         * Constructor
         * @method HashElement
         */
        public constructor();
    }

    /**
     * !#en
     * cc.ActionManager is a class that can manage actions.<br/>
     * Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
     * which uses this class's singleton object.
     * But there are some cases where you might need to use this class. <br/>
     * Examples:<br/>
     * - When you want to run an action where the target is different from a CCNode.<br/>
     * - When you want to pause / resume the actions<br/>
     * !#zh
     * cc.ActionManager 是可以管理动作的单例类。<br/>
     * 通常你并不需要直接使用这个类，99%的情况您将使用 CCNode 的接口。<br/>
     * 但也有一些情况下，您可能需要使用这个类。 <br/>
     * 例如：
     *  - 当你想要运行一个动作，但目标不是 CCNode 类型时。 <br/>
     *  - 当你想要暂停/恢复动作时。 <br/>
     * @class ActionManager
     * @example {@link utils/api/engine/docs/cocos2d/core/CCActionManager/ActionManager.js}
     */
    export class ActionManager extends Class {
        public constructor();

        /**
         * !#en
         * Adds an action with a target.<br/>
         * If the target is already present, then the action will be added to the existing target.
         * If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
         * When the target is paused, the queued actions won't be 'ticked'.
         * !#zh
         * 增加一个动作，同时还需要提供动作的目标对象，目标对象是否暂停作为参数。<br/>
         * 如果目标已存在，动作将会被直接添加到现有的节点中。<br/>
         * 如果目标不存在，将为这一目标创建一个新的实例，并将动作添加进去。<br/>
         * 当目标状态的 paused 为 true，动作将不会被执行
         *
         * @method addAction
         * @param {Action} action
         * @param {Node} target
         * @param {Boolean} paused
         */
        // addAction:function (action, target, paused) {
        public addAction(action:Action, target:Node, paused:boolean):void;

        /**
         * !#en Removes all actions from all the targets.
         * !#zh 移除所有对象的所有动作。
         * @method removeAllActions
         */
        public removeAllActions():void;

        /**
         * !#en
         * Removes all actions from a certain target. <br/>
         * All the actions that belongs to the target will be removed.
         * !#zh
         * 移除指定对象上的所有动作。<br/>
         * 属于该目标的所有的动作将被删除。
         * @method removeAllActionsFromTarget
         * @param {Object} target
         * @param {Boolean} forceDelete
         */
        // removeAllActionsFromTarget:function (target, forceDelete) {
        public removeAllActionsFromTarget(target:Object, forceDelete:boolean):void;

        /**
         * !#en Removes an action given an action reference.
         * !#zh 移除指定的动作。
         * @method removeAction 
         * @param {Action} action
         */
        public removeAction(action:Action):void;

        /**
         * !#en Removes an action given its tag and the target.
         * !#zh 删除指定对象下特定标签的一个动作，将删除首个匹配到的动作。
         * @method removeActionByTag
         * @param {Number} tag
         * @param {Object} target
         */
        public removeActionByTag(tag:number, target:Object):void;

        /**
         * !#en Gets an action given its tag an a target.
         * !#zh 通过目标对象和标签获取一个动作。
         * @method getActionByTag
         * @param {Number} tag
         * @param {Object} target
         * @return {Action|Null}  return the Action with the given tag on success
         */
        public getActionByTag(tag:number, target:Object):Action;

        /**
         * !#en
         * Returns the numbers of actions that are running in a certain target. <br/>
         * Composable actions are counted as 1 action. <br/>
         * Example: <br/>
         * - If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         * - If you are running 7 Sequences of 2 actions, it will return 7.
         * !#zh
         * 返回指定对象下所有正在运行的动作数量。 <br/>
         * 组合动作被算作一个动作。<br/>
         * 例如：<br/>
         *  - 如果您正在运行 7 个动作组成的序列动作（Sequence），这个函数将返回 1。<br/>
         *  - 如果你正在运行 2 个序列动作（Sequence）和 5 个普通动作，这个函数将返回 7。<br/>
         *
         * @method numberOfRunningActionsInTarget
         * @param {Object} target
         * @return {Number}
         */
        public numberOfRunningActionsInTarget(target:Object):number;

        /**
         * !#en Pauses the target: all running actions and newly added actions will be paused.
         * !#zh 暂停指定对象：所有正在运行的动作和新添加的动作都将会暂停。
         * @method pauseTarget
         * @param {Object} target
         */
        public pauseTarget(target:Object):void;

        /**
         * !#en Resumes the target. All queued actions will be resumed.
         * !#zh 让指定目标恢复运行。在执行序列中所有被暂停的动作将重新恢复运行。
         * @method resumeTarget
         * @param {Object} target
         */
        public resumeTarget(target:Object):void;

        /**
         * !#en Pauses all running actions, returning a list of targets whose actions were paused.
         * !#zh 暂停所有正在运行的动作，返回一个包含了那些动作被暂停了的目标对象的列表。
         * @method pauseAllRunningActions
         * @return {Array}  a list of targets whose actions were paused.
         */
        public pauseAllRunningActions():void;

        /**
         * !#en Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call).
         * !#zh 让一组指定对象恢复运行（用来逆转 pauseAllRunningActions 效果的便捷函数）。
         * @method resumeTargets
         * @param {Array} targetsToResume
         */
        public resumeTargets(targetsToResume:Object[]):void;

        /**
         * !#en Pause a set of targets.
         * !#zh 暂停一组指定对象。
         * @method pauseTargets
         * @param {Array} targetsToPause
         */
        public pauseTargets(targetsToPause:Object[]):void;

        /**
         * !#en
         * purges the shared action manager. It releases the retained instance. <br/>
         * because it uses this, so it can not be static.
         * !#zh
         * 清除共用的动作管理器。它释放了持有的实例。 <br/>
         * 因为它使用 this，因此它不能是静态的。
         * @method purgeSharedManager
         */
        public purgeSharedManager():void;

        /**
         * !#en The ActionManager update。
         * !#zh ActionManager 主循环。
         * @method update
         * @param {Number} dt delta time in seconds
         */
        public update(dt:number):void;
    }
}
