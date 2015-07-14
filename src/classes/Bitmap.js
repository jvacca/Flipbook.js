/**
*   Bitmap: represents any image drawing
*
*/


/**
 * @module Flipbook
 */
    
    // constructor:
    /**
     * Bitmap objects represent any bitmap image
     * @class Bitmap
     * @extends DisplayObject
     * @constructor
    **/

    Flipbook.Bitmap = function(src, width, height) {
        Flipbook.DisplayObject.call(this);
        
        this.args = arguments;
        if (typeof src == "string") {
            this.definition = document.createElement("img");
            var self = this;
            this.definition.onload = function() {
                if (self.width === 0 || self.height === 0) {
                    if (self.args.length <= 3) {
                        self.width = width || self.definition.width;
                        self.height = height || self.definition.height;
                    } else {
                        self.width = self.args[7];
                        self.height = self.args[8];
                    }
                }
            };

            this.definition.src = src;
        } else {
            this.definition = src;
            if (this.args.length <= 3) {
                this.width = width || this.definition.width;
                this.height = height || this.definition.height;
            } else {
                this.width = this.args[7];
                this.height = this.args[8];
            }
        }
       
    };

    Flipbook.Bitmap.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Bitmap.prototype.constructor = Flipbook.DisplayObject;

    extend(Flipbook.Bitmap.prototype, {

		// public methods:

        /**
         * render bitmap image on canvas
         *
         * @method draw
         * @param {} none
         * @return {} none
         **/
        draw: function() {
            if (this.visible === false || !this.definition) return;
            if (this.mask) {
                Flipbook.ctx.save();
                this.mask.draw(Flipbook.ctx);
                Flipbook.ctx.clip();
                Flipbook.ctx.drawImage(this.definition, 0, 0, this.width, this.height);
                Flipbook.ctx.restore();
            } else {
                if (this.args.length > 3) {
                    var sx = this.args[1],
                    sy = this.args[2],
                    sw = this.args[3],
                    sh = this.args[4],
                    dx = this.args[5],
                    dy = this.args[6];
                    Flipbook.ctx.drawImage(this.definition,sx,sy,sw,sh,0,0,this.width, this.height);
                } else {
                    Flipbook.ctx.drawImage(this.definition, 0, 0, this.width, this.height);
                }
            }
        },

        clone: function() {
            return cloneProps(new Bitmap(), this);
        }
    });

