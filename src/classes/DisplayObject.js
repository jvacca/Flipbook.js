/**
*   DisplayObject: Common display objects parent class
*
*/


/**
 * @module Flipbook
 */
    
    // constructor:
    /**
     * DisplayObject is an abstract class
     * @class DisplayObject
     * @extends
     * @constructor
    **/

    Flipbook.DisplayObject = function() {

        // public properties:

        this.id = getID();
        this.name = "";
        this.parent = null;
        this.mouseEnabled = null;
        this.x = 0;
        this.y = 0;
        this.regX = 0;
        this.regY = 0;
        this.width = 0;         // NOTE: only bitmaps use width and height
        this.height = 0;
        this.definition = null;
        this.scaleX = 1;
        this.scaleY = 1;
        this.skewX = -1;
        this.skewY = -1;
        this.rotation = -1;
        this.alpha = -1;
        this.mask = null;
        this.bounds = null;
        this.mouseX = null;
        this.mouseY = null;
        this.visible = true;
        this.onRelease = null;
        this.onRollOver = null;
        this.onRollOut = null;
        this.EventCollection = {};
        this.uid = -1;

        if (Flipbook.Config.mouseEventsEnabled) {
            var self = this;
            Flipbook.canvas.addEventListener('mousemove', function(evt) {
                var rect = Flipbook.canvas.getBoundingClientRect();

                self.mouseX = evt.clientX - rect.left;
                self.mouseY = evt.clientY - rect.top;

                self.onMouseOver();
                self.onMouseOut();

                self.dispatchEvent(Flipbook.Events.MouseMove);
            });

            Flipbook.canvas.addEventListener('click', function(evt) {
                self.onMouseClick();
            });
        }
    };

    extend(Flipbook.DisplayObject.prototype, {

        // public methods:

        /**
         * Automatically applies all transform properties 
         * Returns <code>none</code> 
         *
         * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
         * @method applyProperties
         * @param {} [] none
         * @return {} none
         **/
        applyProperties: function() {
            Flipbook.ctx.transform(this.scaleX, 0, 0, this.scaleY, this.x, this.y);

            if (this.alpha != -1) {
                Flipbook.ctx.globalAlpha = this.alpha;
            }

            if (this.rotation !==  -1) {
                Flipbook.ctx.rotate(this.rotation);
            }

            if (this.skewX !== -1 || this.skewY !== -1) {
                Flipbook.ctx.transform(1, this.skewX, this.skewY, 1, 0, 0);
            }

            if (this.scaleX !== -1 || this.scaleY !== -1 || this.rotation !==  -1 || this.skewX !== -1 || this.skewY !== -1) {
                Flipbook.ctx.translate(this.regX, this.regY);
            }
        },

        checkBounds: function(x, y) {
            if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height)) {
                return true;
            }
            
            return false;
        },

        addEventListener: function(eventName, func) {
            if (!this.EventCollection.hasOwnProperty(eventName)) {
                this.EventCollection[eventName] = [];
            }

            var token = ++this.uid;

            var evt = {
                token: token,
                func: func
            };

            this.EventCollection[eventName].push(evt);
            return token;
        },

        removeEventListener: function(eventName, func) {
            if (this.EventCollection.hasOwnProperty(eventName)) {
                var eventObj = this.EventCollection[eventName];
                for (var x=0; x < eventObj.length; x++) {
                    if (eventObj[x].func == func) {
                        eventObj.splice(x, 1);
                    }
                }
            }
            return false;
        },

        dispatchEvent: function(evtName, data) {
            if (!this.EventCollection.hasOwnProperty(evtName)) return false;

            var evt = this.EventCollection[evtName];
            for (var x=0; x < evt.length; x++) {
                evt[x].func(evtName, data);
            }

            return true;
        },

        onMouseClick: function() {
            if (this.onRelease === null) return;
            
            if (this.checkBounds(this.mouseX, this.mouseY) === true) {
                this.onRelease();
            }
        },

        onMouseOver: function(func) {
            if (this.onRollOver === null) return;

            if (this.checkBounds(this.mouseX, this.mouseY) === true) {
                this.onRollOver();
            }
        },

        onMouseOut: function(func) {
            if (this.onRollOut === null) return;

            if (this.checkBounds(this.mouseX, this.mouseY) !== true) {
                this.onRollOut();
            }
        },

        clone: function() {
            return cloneProps(new DisplayObject(), this);
        },

        toString: function() {
            console.log("id = " + this.id + " name = " + this.name);
        }
    });

