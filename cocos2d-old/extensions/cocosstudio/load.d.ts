
/// <reference path="../../cocos2d-lib.d.ts" />

declare namespace ccs {
  
  ////////////////////////////////////////////////////////////////////////////////
  // File: cocos2d/extensions/cocosstudio/load.js
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Parsed out object from studio JSON file
   */
  export interface Loadable {
    node: cc.Node;
    action: cc.Action;
  }
  
  /**
   * Analysis of studio JSON file
   * The incoming file name, parse out the corresponding object
   * Temporary support file list:
   *   ui 1.*
   *   node 1.* - 2.*
   *   action 1.* - 2.*
   *   scene 0.* - 1.*
   * @param {string} file
   * @param {string} [path=] Resource path
   * @returns {{node: cc.Node, action: cc.Action}}
   */
  export function load(file: string, path?: string): Loadable
  
  /**
   * Analysis of studio JSON file and layout ui widgets by visible size.
   * The incoming file name, parse out the corresponding object
   * Temporary support file list:
   *   ui 1.*
   *   node 1.* - 2.*
   *   action 1.* - 2.*
   *   scene 0.* - 1.*
   * @param {string} file
   * @param {string} [path=] Resource path
   * @returns {{node: cc.Node, action: cc.Action}}
   */
  export function loadWithVisibleSize(file: string, path?: string): Loadable
}