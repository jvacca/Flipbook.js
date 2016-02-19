/**
*   Textfield: represents any text
*
*/


/**
 * @module Flipbook
 */

    
    // constructor:
    /**
     * Textfield represents any text
     * @class Textfield
     * @extends DisplayObject
     * @constructor
    **/

    Flipbook.Textfield = function(text, attr, color) {

	// public properties:
        this.text = text;
        this.font = attr.font || "Arial";
        this.size = attr.size || "12 pt";
        this.align = attr.align || "start";
        this.style = attr.style || "normal";

        this.color = color || 'black';
    };

    Flipbook.Textfield.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Textfield.prototype.constructor = Flipbook.Textfield;

    extend(Flipbook.Textfield.prototype, {

	// public methods:

        /**
         * render text on canvas
         *
         * @method draw
         * @param {} none
         * @return {} none
         **/
        draw: function() {
            if (this.visible === false) return;
            if (this.definition) {
                this.definition.draw(Flipbook.ctx);
            } else {
                Flipbook.ctx.font = this.style + " " + this.size + " " + this.font;
                Flipbook.ctx.textAlign = this.align;
                Flipbook.ctx.fillStyle = this.color;
                Flipbook.ctx.fillText(this.text, this.x, this.y);
            }

            var metrics = Flipbook.ctx.measureText(this.text);
            this.width = metrics.width;
            this.height = this.size;
        },

        clone: function() {
            return cloneProps(new Textfield(), this);
        }
    });

