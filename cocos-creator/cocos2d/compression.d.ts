/// <reference path="../cocos-creator-lib.d.ts" />

declare namespace cc {
    export module Codec {
        //+--------------------------------------------------------------------------------
        //  File: cocos2d/compression/base64.js
        //+--------------------------------------------------------------------------------
        export module Base64 {
            // /**
            //  * mixin cc.Codec.Base64
            //  */
            // cc.Codec.Base64 = {name:'Jacob__Codec__Base64'};
            export const name:string;

            // cc.Codec.Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            /**
             * <p>
             *    cc.Codec.Base64.decode(input[, unicode=false]) -> String (http://en.wikipedia.org/wiki/Base64).
             * </p>
             * @function
             * @param {String} input The base64 encoded string to decode
             * @return {String} Decodes a base64 encoded String
             * @example
             * //decode string
             * cc.Codec.Base64.decode("U29tZSBTdHJpbmc="); // => "Some String"
             */
            // cc.Codec.Base64.decode = function Jacob__Codec__Base64__decode(input) {
            export function decode(input:string):string;

            /**
             * <p>
             *    Converts an input string encoded in base64 to an array of integers whose<br/>
             *    values represent the decoded string's characters' bytes.
             * </p>
             * @function
             * @param {String} input The String to convert to an array of Integers
             * @param {Number} bytes
             * @return {Array}
             * @example
             * //decode string to array
             * var decodeArr = cc.Codec.Base64.decodeAsArray("U29tZSBTdHJpbmc=");
             */
            // cc.Codec.Base64.decodeAsArray = function Jacob__Codec__Base64___decodeAsArray(input, bytes) {
            export function decodeAsArray(input:string, bytes:number):number[];
        }



            //+--------------------------------------------------------------------------------
            //  File: cocos2d/compression/gzip.js
            //+--------------------------------------------------------------------------------
            /**
             * See cc.Codec.GZip.gunzip.
             * @param {Array | String} data The bytestream to decompress
             * Constructor
             */
        export class GZip {
            public constructor(data:number[]|string);

            /**
             * Unzips the gzipped data of the 'data' argument.
             * @param string  The bytestream to decompress. Either an array of Integers between 0 and 255, or a String.
             * @return {String}
             */
            public static gunzip(string:string):string;

            public HufNode():void;

            /**
             * @constant
             * @type Number
             */
            public static readonly LITERALS:number;
            /**
             * @constant
             * @type Number
             */
            public static readonly NAMEMAX:number;

            public static readonly bitReverse:number[];
            public static readonly cplens:number[];
            public static readonly cplext:number[];
            public static readonly cpdist:number[];
            public static readonly cpdext:number[];
            public static readonly border:number[];


            /**
             * gunzip
             * @return {Array}
             */
            // cc.Codec.GZip.prototype.gunzip = function () {
            public gunzip():number[];

            public readByte():number;

            public byteAlign():void;

            public readBit():number;

            // TODO: No idea if this is the proper method signature, what are the parameter and return types?!
            public readBits(a:number):number;

            public flushBuffer():void;

            public addBuffer(a:number):void;

            public IsPat():number;

            public Rec():number;

            // TODO: No idea what the proper method signature is
            // public CreateTree(currentTree:???, numval:???, lengths:???, show:???):number;

            // TODO: No idea what the proper method signature is
            // public DecodeValue(currentTree:???):number;

            public DeflateLoop():number;

            public unzipFile(name:string):string;
            //     var i;
            //     this.gunzip();
            //     for (i = 0; i < this.unzipped.length; i++) {
            //         if (this.unzipped[i][1] === name) {
            //             return this.unzipped[i][0];
            //         }
            //     }
            // };

            public nextFile():void;

            public skipdir():void;
        }

        //+--------------------------------------------------------------------------------
        //  File: cocos2d/compression/ZipUtils.js
        //+--------------------------------------------------------------------------------

        // TODO: Not sure the signature of any of these functions, they could all be wrong.

        /**
         * Unpack a gzipped byte array
         * @param {Array} input Byte array
         * @returns {String} Unpacked byte string
         */
        export function unzip(bytes:number[]):string;

        /**
         * Unpack a gzipped byte string encoded as base64
         * @param {String} input Byte string encoded as base64
         * @returns {String} Unpacked byte string
         */
        export function unzipBase64(bytes:number[]):string;

        /**
         * Unpack a gzipped byte string encoded as base64
         * @param {String} input Byte string encoded as base64
         * @param {Number} bytes Bytes per array item
         * @returns {Array} Unpacked byte array
         */
        // cc.Codec.unzipBase64AsArray = function (input, bytes) {
        export function unzipBase64AsArray(input:number[], bytes:number):number[];

        /**
         * Unpack a gzipped byte array
         * @param {Array} input Byte array
         * @param {Number} bytes Bytes per array item
         * @returns {Array} Unpacked byte array
         */
        export function unzipAsArray(input:number[], bytes:number):number[];
    }

        //+--------------------------------------------------------------------------------
        //  File: cocos2d/compression/zlib.js
        //  TODO: The zlib file has been run through a minimizer, request a clean version from Chukong.
        //+--------------------------------------------------------------------------------


}
