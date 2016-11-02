/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXObjectGroup.js
  // +--------------------------------------------------------------------------------
  
  /**
   * cc.TMXObjectGroup represents the TMX object group.
   * @class
   * @extends cc.Class
   *
   * @property {any[]}    properties  - Properties from the group. They can be added using tilemap editors
   * @property {string}   groupName   - Name of the group
   */
  export class TMXObjectGroup extends Class {
    /**
     * Properties from the group. They can be added using tilemap editors
     * @member {any[]} properties
     */
    properties: any[]
    
    /**
     * Name of the group
     * @member {string} groupName
     */
    groupName: string

    /**
     * <p>The cc.TMXObjectGroup's constructor. <br/>
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.TMXObjectGroup()".<br/>
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.</p>
     */
    constructor()

    /**
     * Offset position of child objects
     * @return {cc.Point}
     */
    getPositionOffset(): Point

    /**
     * Offset position of child objects
     * @param {cc.Point} offset
     */
    setPositionOffset(offset: Point): void

    /**
     * List of properties stored in a dictionary
     * @param {any} Var
     */
    setProperties(Var: any): void

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {any}
     */
    propertyNamed(propertyName: string): any

    /**
     * <p>Return the dictionary for the specific object name. <br />
     * It will return the 1st object found on the array for the given name.</p>
     * @param {string} objectName
     * @return {any|null}
     */
    getObject(objectName: string): any

    /**
     * Gets the objects.
     * @return {any[]}
     */
    getObjects(): any[]

    /**
     * Set the objects.
     * @param {any} objects
     */
    setObjects(objects: any): void
  }
}