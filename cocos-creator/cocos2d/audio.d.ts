/// <reference path="../cocos-creator-lib.d.ts" />

// NOTE: I'm sure there are a bunch of errors here, I guessed at a lot of method parameter types.


declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/audio/CCAudio.js
    //+--------------------------------------------------------------------------------

    // var JS = require('../core/platform/js');

    export module Audio {
        export class WebAudio {
            // public readonly buffer:???;
            // public readonly context:???;
            public readonly paused:boolean;
            public loop:boolean;
            public volume:number;
            public currentTime:number;

            // TODO: Figure out WTF the proper type for buffer is
            public constructor(buffer:???);
            public play(offset?:number):void;
            public pause():void;
        }
    }


    /**
     * Encapsulate DOM and webAudio
     */
    // cc.Audio = function (url) {
    export class Audio {
        public constructor(url:string);

        // TODO: Not sure if this is really a string array or not, verify
        public static touchPlayList:string[];

        public static bindTouch:boolean;
        public touchStart();

        // setBuffer: function (buffer) {
        public setBuffer(buffer:???):void;

        public setElement(element:???):void;

        public play(offset?:number, loop?:boolean):void;

        public getPlaying():boolean;

        public stop():void;

        public pause():void;

        public resume():void;

        public setVolume(volume:number):void;

        public getVolume():number;

        public cloneNode():Audio;
    }

    /**
     * !#en cc.audioEngine is the singleton object, it provide simple audio APIs.
     * !#zh
     * cc.audioengine是单例对象。<br/>
     * 主要用来播放背景音乐和音效，背景音乐同一时间只能播放一个，而音效则可以同时播放多个。<br/>
     * 注意：<br/>
     * 在 Android 系统浏览器上，不同浏览器，不同版本的效果不尽相同。<br/>
     * 比如说：大多数浏览器都需要用户物理交互才可以开始播放音效，有一些不支持 WebAudio，<br/>
     * 有一些不支持多音轨播放。总之如果对音乐依赖比较强，请做尽可能多的测试。
     * @class audioEngine
     * @static
     */
    // cc.audioEngine = {
    export interface AudioEngine {
        // public readonly features:???;

        /**
         * !#en Play music.
         * !#zh
         * 播放指定音乐，并可以设置是否循环播放。<br/>
         * 注意：音乐播放接口不支持多音轨，同一时间只能播放一个音乐。
         * @method playMusic
         * @param {String} url - The path of the music file without filename extension.
         * @param {Boolean} loop - Whether the music loop or not.
         * @example
         * //example
         * cc.audioEngine.playMusic(path, false);
         */
        // playMusic: function(url, loop){
        public playMusic(url:string, loop:boolean):Audio;

        /**
         * !#en Stop playing music.
         * !#zh 停止当前音乐。
         * @method stopMusic
         * @param {Boolean} [releaseData] - If release the music data or not.As default value is false.
         * @example
         * //example
         * cc.audioEngine.stopMusic();
         */
        // stopMusic: function(releaseData){
        public stopMusic(releaseData:boolean):void;

        /**
         * !#en Pause playing music.
         * !#zh 暂停正在播放音乐。
         * @method pauseMusic
         * @example
         * //example
         * cc.audioEngine.pauseMusic();
         */
        public pauseMusic():void;

        /**
         * !#en Resume playing music.
         * !#zh 恢复音乐播放。
         * @method resumeMusic
         * @example
         * //example
         * cc.audioEngine.resumeMusic();
         */
        public resumeMusic():void;

        /**
         * !#en Rewind playing music.
         * !#zh 从头开始重新播放当前音乐。
         * @method rewindMusic
         * @example
         * //example
         * cc.audioEngine.rewindMusic();
         */
        public rewindMusic():void;

        /**
         * !#en The volume of the music max value is 1.0,the min value is 0.0 .
         * !#zh 获取音量（0.0 ~ 1.0）。
         * @method getMusicVolume
         * @return {Number}
         * @example
         * //example
         * var volume = cc.audioEngine.getMusicVolume();
         */
        public getMusicVolume():number;

        /**
         * !#en Set the volume of music.
         * !#zh 设置音量（0.0 ~ 1.0）。
         * @method setMusicVolume
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.audioEngine.setMusicVolume(0.5);
         */
        public setMusicVolume(volume:number):void;

        /**
         * !#en Whether the music is playing.
         * !#zh 音乐是否正在播放。
         * @method isMusicPlaying
         * @return {Boolean} If is playing return true,or return false.
         * @example
         * //example
         *  if (cc.audioEngine.isMusicPlaying()) {
         *      cc.log("music is playing");
         *  }
         *  else {
         *      cc.log("music is not playing");
         *  }
         */
        public isMusicPlaying():boolean;

        // _audioPool: {},
        // _maxAudioInstance: 10,
        // _effectVolume: 1,
        /**
         * !#en Play sound effect.
         * !#zh
         * 播放指定音效，并可以设置是否循环播放。<br/>
         * 注意：在部分不支持多音轨的浏览器上，这个接口会失效，请使用 playMusic
         * @method playEffect
         * @param {String} url The path of the sound effect with filename extension.
         * @param {Boolean} loop Whether to loop the effect playing, default value is false
         * @param {Boolean} volume
         * @return {Number|null} the audio id
         * @example
         * //example
         * var soundId = cc.audioEngine.playEffect(path);
         */
        public playEffect(url:string, loop?:boolean, volume?:boolean):number;

        /**
         * !#en Set the volume of sound effects.
         * !#zh 设置音效音量（0.0 ~ 1.0）。
         * @method setEffectsVolume
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.audioEngine.setEffectsVolume(0.5);
         */
        public setEffectsVolume(volume:number):void;

        /**
         * !#en The volume of the effects max value is 1.0,the min value is 0.0 .
         * !#zh 获取音效音量（0.0 ~ 1.0）。
         * @method getEffectsVolume
         * @return {Number}
         * @example
         * //example
         * var effectVolume = cc.audioEngine.getEffectsVolume();
         */
        public getEffectsVolume():number;

        /**
         * !#en Pause playing sound effect.
         * !#zh 暂停指定的音效。
         * @method pauseEffect
         * @param {Number} audio - The return value of function playEffect.
         * @example
         * //example
         * cc.audioEngine.pauseEffect(audioID);
         */
        public pauseEffect(audio:number):void;

        /**
         * !#en Pause all playing sound effect.
         * !#zh 暂停现在正在播放的所有音效。
         * @method pauseAllEffects
         * @example
         * //example
         * cc.audioEngine.pauseAllEffects();
         */
        public pauseAllEffects():void;

        /**
         * !#en Resume playing sound effect.
         * !#zh 恢复播放指定的音效。
         * @method resumeEffect
         * @param {Number} audioID - The return value of function playEffect.
         * @audioID
         * //example
         * cc.audioEngine.resumeEffect(audioID);
         */
        public resumeEffect(audio:number):void;

        /**
         * !#en Resume all playing sound effect.
         * !#zh 恢复播放所有之前暂停的所有音效。
         * @method resumeAllEffects
         * @example
         * //example
         * cc.audioEngine.resumeAllEffects();
         */
        public resumeAllEffects():void;

        /**
         * !#en Stop playing sound effect.
         * !#zh 停止播放指定音效。
         * @method stopEffect
         * @param {Number} audioID - The return value of function playEffect.
         * @example
         * //example
         * cc.audioEngine.stopEffect(audioID);
         */
        public stopEffect(audio:number):void;

        /**
         * !#en Stop all playing sound effects.
         * !#zh 停止正在播放的所有音效。
         * @method stopAllEffects
         * @example
         * //example
         * cc.audioEngine.stopAllEffects();
         */
        public stopAllEffects():void;

        /**
         * !#en Unload the preloaded effect from internal buffer.
         * !#zh 卸载预加载的音效。
         * @method unloadEffect
         * @param {String} url
         * @example
         * //example
         * cc.audioEngine.unloadEffect(EFFECT_FILE);
         */
        public unloadEffect(url:string):void;

        /**
         * !#en End music and effects.
         * !#zh 停止所有音乐和音效的播放。
         * @method end
         */
        public end():void;
    }

    export const audioEngine:AudioEngine;
}
