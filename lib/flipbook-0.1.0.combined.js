/**
*	Version documentation properties
*
*/


/**
 * @module Flipbook
 */

// namespace:
this.Flipbook = this.Flipbook || {};

(function() {
	"use strict";

	/**
	 * Static class holding library specific information such as the version and buildDate of
	 * the library.
	 **/
	Flipbook.VERSION = 0.5;
	
	Flipbook.buildDate = "061815";

/**
*	utility functions
*
*/


/**
 * @module Flipbook
 */



	function extend(destination, source) {
        var prop;

        for (prop in source) {
            if (source.hasOwnProperty(prop)) {
                destination[prop] = source[prop];
            }
        }
    }

    // Polly-fill for Object.create()
    if (!Object.create) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error('Object.create implementation only accepts the first parameter.');
            }
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    // proxy pattern
    var proxy = function(fn, context) {
        return (function() {
            return fn.apply(context, arguments);
        });
    };

    function getID() {
        return(new Date().getTime());
    }

    function cloneProps(src, dest) {
        dest.id = getID();
        dest.name = "";
        dest.parent = null;
        dest.mouseEnabled = src.mouseEnabled;
        dest.x = src.x;
        dest.y = src.y;
        dest.regX = src.regX;
        dest.regY = src.regY;
        dest.width = src.width;
        dest.height = src.height;
        dest.definition = src.definition;
        dest.scaleX = src.scaleX;
        dest.scaleY = src.scaleY;
        dest.skewX = src.skewX;
        dest.skewY = src.skewY;
        dest.rotation = src.rotation;
        dest.alpha = src.alpha;
        dest.mask = src.mask;
        dest.bounds = src.bounds;
        dest.visible = src.visible;
        dest.onPressFunc = null;
        dest.onHoverFunc = null;
        dest.EventCollection = {};
        dest.uid = -1;
        return dest;
    }


    // ticker
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback){
                return window.setTimeout(callback, 1000 / 60);
            };
    })();

    window.cancelRequestAnimFrame = (function(){
        return window.cancelAnimationFrame              ||
            window.webkitCancelRequestAnimationFrame    ||
            window.mozCancelRequestAnimationFrame       ||
            window.oCancelRequestAnimationFrame         ||
            window.msCancelRequestAnimationFrame        ||
            function(){
                console.log("Shit out of luck!");
            };
    })();
	

/**
*	Configuration properties
*
*/


/**
 * @module Flipbook
 */


	Flipbook.Events = {
        Added: "added",					// Added to stage
        Removed: "removed",				// Removed from stage
        MouseMove: "mouseMove",			// mouse position
        MouseClick: "mouseClick",		// mouse click
        OnUpdate: "onUpdate"			// on ticker update
    };


/**
*	Configuration properties
*
*/


/**
 * @module Flipbook
 */

	Flipbook.Config = {
        useCreateJS: true,				//Use CreatJS tweener?
        useGreensock: false,			//Use Greensock tweener?
        mouseEventsEnabled: false		//Enable Mouse Events?
    };

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
    Flipbook.Bitmap.prototype.constructor = Flipbook.Bitmap;

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


/**
*   Container: Container objects can contain multiple display objects
*
*/


/**
 * @module Flipbook
 */

    
    // constructor:
    /**
     * Container objects can contain multiple display objects
     * @class Container
     * @extends DisplayObject
     * @constructor
    **/

    Flipbook.Container = function() {
        Flipbook.DisplayObject.call(this);

        // public properties:
        this.displayList = [];
    };

    Flipbook.Container.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Container.prototype.constructor = Flipbook.Container;

    extend(Flipbook.Container.prototype, {

    	// public methods:

        /**
         * Add a child display object to the display list of this container
         *
         * @method addChild
         * @param {DisplayObject} childObj
         * @return {} none
         **/
        addChild: function(childObj) {
            var args = arguments.length;
            for (var i = 0; i < args; i++) {
                var child = arguments[i];
                child.parent = this;
                this.displayList.push(child);
                this.dispatchEvent(Flipbook.Events.Added);
            }
        },

        getChildIndexById: function(id) {
            var x;
            for (x=0; x<this.displayList.length; x++) {
                if (this.displayList[x].id == id) {
                    return x;
                }
            }
            return false;
        },

        removeChild: function(childObj) {
            var x = this.getChildIndexById(childObj.id);
            this.displayList.splice(x, 1);
            this.dispatchEvent(Flipbook.Events.Removed);
        },

        removeAllChildren: function() {
            this.displayList.splice(0, this.displayList.length);
            this.dispatchEvent(Flipbook.Events.Removed);
        },

        getNumChildren: function() {
            return this.displayList.length;
        },

        getChildByName: function(name) {
            var x;
            for (x=0; x<this.displayList.length; x++) {
                if (this.displayList[x].name == name) {
                    return this.displayList[x];
                }
            }
            return false;
        },

        swapChildren: function(child1, child2) {
            var x = getChildIndexById(child1.id);
            var y = getChildIndexById(child2.id);
            this.displayList[x] = child2;
            this.displayList[y] = child1;
        },

        contains: function(childObj) {
            if (this.getChildIndexById(childObj.id) !== false) {
                return true;
            }
            return false;
        },

        draw: function() {
            if (this.visible === false) return;
            var x = 0;
            for (x = 0; x < this.displayList.length; x++) {
                Flipbook.ctx.save();
                this.displayList[x].applyProperties();
                this.displayList[x].draw(Flipbook.ctx);
                Flipbook.ctx.restore();
            }
        },

        update: function() {
            this.dispatchEvent(Flipbook.Events.OnUpdate);
            Flipbook.ctx.setTransform(1, 0, 0, 1, 0, 0);
            Flipbook.ctx.clearRect(0, 0, Flipbook.canvas.width, Flipbook.canvas.height);
            this.draw();
        },

        clone: function() {
            return cloneProps(new Container(), this);
        }
    });


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
    Flipbook.SpriteSheet.prototype.constructor = Flipbook.SpriteSheet;

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


/**
*   Controller: helps initialize Flipbook
*
*/


/**
 * @module Flipbook
 */

    
    /**
     * Controller helps initialize Flipbook
     * This is a controller module 
     *
    **/

    Flipbook.Main = (function(canvas_name) {
        
        function init(canvas_name) {
            Flipbook.canvas = document.getElementById(canvas_name);
            Flipbook.ctx = Flipbook.canvas.getContext("2d");

            Flipbook.stageObj = new Flipbook.Container(canvas_name);
            Flipbook.stageObj.name = "stage";

            if (Flipbook.Config.useCreateJS) {
                createjs.Ticker.setFPS(30);
                createjs.Ticker.addEventListener("tick", function() {
                    Flipbook.stageObj.update();
                });
            } else if (Flipbook.Config.useGreensock) {
                TweenLite.ticker.addEventListener("tick", function() {
                    Flipbook.stageObj.update();
                });
            } else {
                var animate = function() {
                    Flipbook.stageObj.update();
                    window.requestAnimFrame(animate);
                };

                animate();
            }
                        
        }

        return {
            initialize: function(canvas_name) {
                init(canvas_name);
            }
        };

    }());

})();