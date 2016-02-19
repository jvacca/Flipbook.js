/**
*   Shape: represents any vector art
*
*/


/**
 * @module Flipbook
 */

    
    // constructor:
    /**
     * Shape objects represent any vector art
     * @class Shape
     * @extends DisplayObject
     * @constructor
    **/

    Flipbook.Shape = function(libraryObject, width, height) {
        Flipbook.DisplayObject.call(this);

        // public properties:
        this.width = width || 0;
        this.height = height || 0;
        this.definition = libraryObject;
    };

    Flipbook.Shape.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Shape.prototype.constructor = Flipbook.Shape;

    extend(Flipbook.Shape.prototype, {

		// public methods:

        /**
         * render vector art on canvas
         *
         * @method draw
         * @param {} none
         * @return {} none
         **/
        draw: function() {
            if (this.visible === false) return;
            if (this.mask) {
                Flipbook.ctx.save();
                this.mask.draw(Flipbook.ctx);
                Flipbook.ctx.clip();
                if (this.definition) this.definition.draw(Flipbook.ctx);
                Flipbook.ctx.restore();
            } else {
                if (this.definition) this.definition.draw(Flipbook.ctx);
            }
        },

        clone: function() {
            return cloneProps(new Shape(), this);
        }
    });
