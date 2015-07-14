/**
*   SpriteSheet: represents any sprite animations
*
*/


/**
 * @module Flipbook
 */

    
    // constructor:
    /**
     * SpriteSheet represents any sprite animations
     * @class SpriteSheet
     * @extends DisplayObject
     * @constructor
    **/

    Flipbook.SpriteSheet = function(data) {
        Flipbook.DisplayObject.call(this);

        // public properties:
        this.data = data;
        this.currentFrame = 0;
        this.totalFrames = this.data.frames.length;
        this.paused = false;
        this.loop = false;

        this.definition = document.createElement("img");
            var self = this;
            this.definition.onload = function() {
                self.width = self.data.frames[0][2];
                self.height = self.data.frames[0][3];
            };

            this.definition.src = this.data.images[0];
    };

    Flipbook.SpriteSheet.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.SpriteSheet.prototype.constructor = Flipbook.DisplayObject;

    extend(Flipbook.SpriteSheet.prototype, {

		// public methods:

        /**
         * render sprite animations on canvas
         *
         * @method draw
         * @param {} none
         * @return {} none
         **/
        draw: function() {
            if (this.visible === false || !this.definition) return;

            var count;
            if (this.currentFrame < this.totalFrames && this.paused !== true) {
                count = this.currentFrame++;
            } else {
                if (this.loop === true) {
                    count = 0;
                } else {
                    count = this.totalFrames-1;
                }
                
            }

            var arr = this.data.frames[count];
                var sx = arr[0],
                    sy = arr[1],
                    sw = arr[2],
                    sh = arr[3],
                    dx = 0,
                    dy = 0;
                Flipbook.ctx.drawImage(this.definition,sx,sy,sw,sh,0,0,this.width, this.height);
        },

        play: function() {
            this.paused = false;
        },

        stop: function() {
            this.paused = true;
        },

        gotoAndPlay: function(frame) {
            if (frame > 0 && frame < this.totalFrames) {
                currentFrame = frame;
                this.paused = false;
            }
        },

        gotoAndStop: function(frame) {
            if (frame > 0 && frame < this.totalFrames) {
                currentFrame = frame;
                this.paused = true;
            }
        },

        advance: function() {
             if (this.currentFrame + 1 < this.totalFrames) {
                this.currentFrame++;
            }
        },

        clone: function() {
            return cloneProps(new SpriteSheet(), this);
        }
    });

