/// <reference path="../../cocos2d-lib.d.ts" />

declare namespace cc {
  
  /**
   * To use cc.pool you must have a class with unuse and reuse functions
   */
  export interface Poolable {
    
    /**
     * cc.pool will call unuse function when you put it into the pool
     */    
    unuse(): void
    
    /**
     * cc.pool will call reuse function when you retrieve an object from the pool to reinitialize it with the given parameters.
     * @param {any[]} args
     */
    reuse(...args: any[]): void
  }

  /**
   * <p>
   *  cc.pool is a singleton object serves as an object cache pool.<br/>
   *  It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
   *  Some common use case is :
   *      1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)
   *      2. Blocks in candy crash (massive creation and recreation)
   *      etc...
   * </p>
   *
  * @example
  * var sp = new cc.Sprite("a.png");
  * this.addChild(sp);
  * cc.pool.putInPool(sp);
  *
  * cc.pool.getFromPool(cc.Sprite, "a.png");
  * @class
  * @name cc.pool
  */
  export namespace pool {
    /**
     * Put the obj in pool
     * @param {cc.Poolable} obj
     */
    function putInPool(obj: Poolable): void
    
    /**
     * Check if this kind of obj has already in pool
     * @param {cc.Class} objClass
     * @returns {boolean} if this kind of obj is already in pool return true,else return false;
     */
    function hasObject(objClass: Class): boolean
    
    /**
     * Remove the obj if you want to delete it;
     * @param {cc.Poolable} obj
     */
    function removeObject(obj: Poolable): void
    
    /**
     * Get the obj from pool
     * @param {cc.Class} objClass
     * @param {any[]} args
     * @returns {any} call the reuse function an return the obj
     */
    function getFromPool(objClass: Class, ...args: any[]): any
    
    /**
     * remove all objs in pool and reset the pool
     */
    function drainAllPools(): void
  }
}
