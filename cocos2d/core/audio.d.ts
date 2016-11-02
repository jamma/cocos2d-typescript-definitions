/// <reference path="../cocos2d-lib.d.ts" />

/**
 * Audio support in the browser
 *
 * MULTI_CHANNEL        : Multiple audio while playing - If it doesn't, you can only play background music
 * WEB_AUDIO            : Support for WebAudio - Support W3C WebAudio standards, all of the audio can be played
 * AUTOPLAY             : Supports auto-play audio - if Don‘t support it, On a touch detecting background music canvas, and then replay
 * REPLAY_AFTER_TOUCH   : The first music will fail, must be replay after touchstart
 * USE_EMPTIED_EVENT    : Whether to use the emptied event to replace load callback
 * DELAY_CREATE_CTX     : delay created the context object - only webAudio
 * NEED_MANUAL_LOOP     : WebAudio loop attribute failure, need to manually perform loop
 *
 * May be modifications for a few browser version
 */

declare namespace cc {
    /**
     * Encapsulate DOM and webAudio
     */
    export class Audio extends Class {
        public volume:number;
        public loop:boolean;
        public src:any;

        // TODO: Figure out what type context is supposed to be
        public constructor(context:any, volume:number, url:string);

        public ctor(context:any, volume:number, url:string):void;
        public ctor():void;

        // TODO: Figure out what type buffer is supposed to be
        public setBuffer(buffer:any):void;

        // TODO: Figure out what type element is supposed to be
        public setElement(element:any):void;

        public play(offset:number, loop:boolean):void;

        public getPlaying():boolean;


        public stop():void;

        public pause():void;

        public resume():void;

        public setVolume(volume:number):void;

        public getVolume():number;

        public cloneNode():Audio;
    }

    /**
     * cc.audioEngine is the singleton object, it provide simple audio APIs.
     * @namespace
     */
    export namespace audioEngine {
        /**
         * Indicates whether any background music can be played or not.
         * @returns {boolean} true if the background music is playing, otherwise false
         */
        export function willPlayMusic():boolean;

        /**
         * Play music.
         * @param {String} url The path of the music file without filename extension.
         * @param {Boolean} loop Whether the music loop or not.
         * @example
         * //example
         * cc.audioEngine.playMusic(path, false);
         */
        export function playMusic(url:string, loop:boolean):void;

        /**
         * Stop playing music.
         * @param {Boolean} [releaseData] If release the music data or not.As default value is false.
         * @example
         * //example
         * cc.audioEngine.stopMusic();
         */
        export function stopMusic(releaseData?:boolean):void;

        /**
         * Pause playing music.
         * @example
         * //example
         * cc.audioEngine.pauseMusic();
         */
        export function pauseMusic():void;

        /**
         * Resume playing music.
         * @example
         * //example
         * cc.audioEngine.resumeMusic();
         */
        export function resumeMusic():void;

        /**
         * Rewind playing music.
         * @example
         * //example
         * cc.audioEngine.rewindMusic();
         */
        export function rewindMusic():void;

        /**
         * The volume of the music max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var volume = cc.audioEngine.getMusicVolume();
         */
        export function getMusicVolume():number;

        /**
         * Set the volume of music.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.audioEngine.setMusicVolume(0.5);
         */
        export function setMusicVolume(volume:number):void;

        /**
         * Whether the music is playing.
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
        export function isMusicPlaying():boolean;

        /**
         * Play sound effect.
         * @param {String} url The path of the sound effect with filename extension.
         * @param {Boolean} loop Whether to loop the effect playing, default value is false
         * @return {Number|null} the audio id
         * @example
         * //example
         * var soundId = cc.audioEngine.playEffect(path);
         */
        export function playEffect(url:string, loop:boolean):void;

        /**
         * Set the volume of sound effects.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.audioEngine.setEffectsVolume(0.5);
         */
        export function setEffectsVolume(volume:number):void;

        /**
         * The volume of the effects max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var effectVolume = cc.audioEngine.getEffectsVolume();
         */
        export function getEffectsVolume():number;

        /**
         * Pause playing sound effect.
         * @param {cc.Audio} audio The return value of function playEffect.
         * @example
         * //example
         * cc.audioEngine.pauseEffect(audioID);
         */
        export function pauseEffect(audio:Audio):void;

        /**
         * Pause all playing sound effect.
         * @example
         * //example
         * cc.audioEngine.pauseAllEffects();
         */
        export function pauseAllEffects():void;

        /**
         * Resume playing sound effect.
         * @param {cc.Audio} audio The return value of function playEffect.
         * @audioID
         * //example
         * cc.audioEngine.resumeEffect(audioID);
         */
        export function resumeEffect(audio:Audio):void;

        /**
         * Resume all playing sound effect
         * @example
         * //example
         * cc.audioEngine.resumeAllEffects();
         */
        export function resumeAllEffects():void;

        /**
         * Stop playing sound effect.
         * @param {cc.Audio} audio The return value of function playEffect.
         * @example
         * //example
         * cc.audioEngine.stopEffect(audioID);
         */
        export function stopEffect(audio:Audio):void;

        /**
         * Stop all playing sound effects.
         * @example
         * //example
         * cc.audioEngine.stopAllEffects();
         */
        export function stopAllEffects():void;

        /**
         * Unload the preloaded effect from internal buffer
         * @param {String} url
         * @example
         * //example
         * cc.audioEngine.unloadEffect(EFFECT_FILE);
         */
        export function unloadEffect(url:string):void;

        /**
         * End music and effects.
         */
        export function end():void;
    }
}