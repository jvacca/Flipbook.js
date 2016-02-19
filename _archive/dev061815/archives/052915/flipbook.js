// *************************************************
// *        FLIPBOOK                               *
// *                                               *
// *  By John Vacca                                *
// *  Date: 5/7/2015                               *
// *                                               *  
// *************************************************



; (function(window, undefined) {

    "use strict";
    //console.log("flipbook lives!");

    /*        utility functions library                           */

    // mix-in pattern
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


    // EventController: custom event handling and listening

    var EventController = (function() {
        var EventCollection = {};
        var uid = -1;

        return {
            addEventListener: function(eventName, func) {
                if (!EventCollection.hasOwnProperty(eventName)) {
                    EventCollection[eventName] = [];
                }

                var token = ++uid;

                var evt = {
                    token: token,
                    func: func
                };

                EventCollection[eventName].push(evt);

                return token;
            },

            removeEventListener: function(token) {
                for (var evt in EventCollection) {
                    if (EventCollection.hasOwnProperty(evt)) {
                        var eventObj = EventCollection[evt];
                        for (var x=0; x < eventObj.length; x++) {
                            if (eventObj[x].token == token) {
                                eventObj.splice(x, 1);
                                return token;
                            }
                        }
                    }
                }
                return false;
            },

            dispatchEvent: function(evtName, data) {
                if (!EventCollection.hasOwnProperty(evtName)) return false;

                var evt = EventCollection[evtName];
                for (var x=0; x < evt.length; x++) {
                    evt[x].func(evtName, data);
                }

                return true;
            }
        };
    })();

    window.EventController = EventController;


    function getID() {
        return(new Date().getTime());
    }

    function cloneProps(src, dest) {
        dest.id = getID();
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

    // *************************************************
    // *        API starts here                        *
    // *************************************************

    /*                initialize namespace              */
    var Flipbook = {};
    Flipbook.VERSION = 0.01;



    /*                Initialize default values for configuration variables            */

    Flipbook.Config = {
        useTweener: true,
        mouseEventsEnabled: false
    };


    /*                Events: custom events              */
    
    Flipbook.Events = {
        AddedToStage: "added",
        MouseMove: "mouseMove",
        MouseClick: "mouseClick",
        OnUpdate: "onUpdate"
    };



    /*                Stage: Stage represents a canvas drawing all objects        */

    Flipbook.Stage = function(canvas_name) {
        this.mouseX = 0;
        this.mouseY = 0;
        this.name = "stage";
        this.displayList = [];
        this.counter = 0;

        

        if (Flipbook.Config.mouseEventsEnabled) {
            var self = this;
            Flipbook.canvas.addEventListener('mousemove', function(evt) {
                var rect = Flipbook.canvas.getBoundingClientRect();

                self.mouseX = evt.clientX - rect.left;
                self.mouseY = evt.clientY - rect.top;

                EventController.dispatchEvent(Flipbook.Events.MouseMove);
            });

            Flipbook.canvas.addEventListener('click', function(evt) {
                EventController.dispatchEvent(Flipbook.Events.MouseClick);
            });
        }
    };

    extend(Flipbook.Stage.prototype, {
        addChild: function(childObj) {
            var args = arguments.length;
            for (var i = 0; i < args; i++) {
                var child = arguments[i];
                this.counter +=  1;
                child.depth = this.counter;
                child.parent = this;
                this.displayList.push(child);
                EventController.dispatchEvent(Flipbook.Events.AddedToStage);
            }
        },

        removeChild: function(childObj) {
            var x;
            for (x=0; x<this.displayList.length; x++) {
                if (this.displayList[x].depth == childObj.depth) {
                    this.displayList.splice(x, 1);
                }
            }
        },

        removeAllChildren: function() {
            //TODO: Add functionality
        },

        getNumChildren: function() {
            //TODO: Add functionality
        },

        getChildByName: function() {
            //TODO: Add functionality
        },

        swapChildren: function() {
            //TODO: Add functionality
        },

        contains: function() {
            //TODO: Add functionality
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
            EventController.dispatchEvent(Flipbook.Events.OnUpdate);
            Flipbook.ctx.setTransform(1, 0, 0, 1, 0, 0);
            Flipbook.ctx.clearRect(0, 0, Flipbook.canvas.width, Flipbook.canvas.height);
            this.draw();
        }
    });


    
    /*                DisplayObject: Common display objects parent class         */
    
    Flipbook.DisplayObject = function() {
        this.id = getID();
        this.name = "";
        this.depth = 0;
        this.parent = null;
        this.mouseEnabled = null;
        this.x = 0;
        this.y = 0;
        this.regX = 0;
        this.regY = 0;
        this.width = 0;
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
        this.visible = true;
        this.onPressFunc = null;
        this.onHoverFunc = null;
        this.token = null;
    };

    extend(Flipbook.DisplayObject.prototype, {
        // used to automatically apply property changes
        applyProperties: function() {
            Flipbook.ctx.transform(this.scaleX, 0, 0, this.scaleY, this.x, this.y);

            if (this.alpha != -1) {
                Flipbook.ctx.globalAlpha = this.alpha;
            }

            if (this.rotation != -1) {
                Flipbook.ctx.rotate(this.rotation);
                Flipbook.ctx.translate(this.regX, this.regY);
            }

            if (this.skewX != -1 || this.skewY != -1) {
                Flipbook.ctx.translate(this.regX, this.regY);
                Flipbook.ctx.transform(1, this.skewX, this.skewY, 1, 0, 0);
            }
        },

        checkBounds: function(x, y) {
            if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height)) {
                return true;
            }
            
            return false;
        },

        onPress: function(func) {
            if (func === null) {
                EventController.removeEventListener(this.token);
                this.onPressFunc = null;
                return;
            }

            var self = this;
            this.onPressFunc = function() {
                if (self.checkBounds(Flipbook.stageObj.mouseX, Flipbook.stageObj.mouseY) === true) {
                    func();
                }
            };

            this.token = EventController.addEventListener(Flipbook.Events.MouseClick, this.onPressFunc);
        },

        onHover: function(func) {
            if (func === null) {
                EventController.removeEventListener(this.token);
                this.onHoverFunc = null;
                return;
            }

            var self = this;
            this.onHoverFunc = function() {
                if (self.checkBounds(Flipbook.stageObj.mouseX, Flipbook.stageObj.mouseY) === true) {
                    func();
                }
            };

            this.token = EventController.addEventListener(Flipbook.Events.MouseMove, this.onHoverFunc);
        },

        clone: function() {
            return cloneProps(new DisplayObject(), this);
        },

        toString: function() {
            console.log("id = " + this.id + " name = " + this.name);
        }
    });



    /*       Container: Container class can contain multiple display objects -NOT WORKING YET-    */

    Flipbook.Container = function() {
        Flipbook.DisplayObject.call(this);
        this.displayList = [];
        this.counter = 0;
    };

    Flipbook.Container.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Container.prototype.constructor = Flipbook.DisplayObject;

    extend(Flipbook.Container.prototype, {
        addChild: function(childObj) {
            var args = arguments.length;
            for (var i = 0; i < args; i++) {
                var child = arguments[i];
                this.counter +=  1;
                child.depth = this.counter;
                child.parent = this;
                this.displayList.push(child);
            }
        },

        removeChild: function(childObj) {
            var x;
            for (x=0; x<this.displayList.length; x++) {
                if (this.displayList[x].depth == childObj.depth) {
                    this.displayList.splice(x, 1);
                }
            }
        },

        removeAllChildren: function() {
            //TODO: Add functionality
        },

        getNumChildren: function() {
            //TODO: Add functionality
        },

        getChildByName: function() {
            //TODO: Add functionality
        },

        swapChildren: function() {
            //TODO: Add functionality
        },

        contains: function() {
            //TODO: Add functionality
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

        clone: function() {
            return cloneProps(new Container(), this);
        }
    });



    /*                Shape: represents any vector drawing        */

    Flipbook.Shape = function(libraryObject, width, height) {
        Flipbook.DisplayObject.call(this);
        this.width = width;
        this.height = height;
        this.definition = libraryObject;
    };

    Flipbook.Shape.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Shape.prototype.constructor = Flipbook.DisplayObject;

    extend(Flipbook.Shape.prototype, {
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



    /*                Bitmap: represents any image drawing        */

    Flipbook.Bitmap = function(src) {
        Flipbook.DisplayObject.call(this);
        
        if (typeof src == "string") {
            this.definition = document.createElement("img");
            var self = this;
            this.definition.onload = function() {
                self.width = self.definition.width;
                self.height = self.definition.height;
            };

             this.definition.src = src;
        } else {
            this.definition = src;
        }
       
    };

    Flipbook.Bitmap.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Bitmap.prototype.constructor = Flipbook.DisplayObject;

    extend(Flipbook.Bitmap.prototype, {
        draw: function() {
            if (this.visible === false) return;
            if (this.mask && this.definition) {
                Flipbook.ctx.save();
                this.mask.draw(Flipbook.ctx);
                Flipbook.ctx.clip();
                Flipbook.ctx.drawImage(this.definition, 0, 0, this.width, this.height);
                Flipbook.ctx.restore();
            } else {
                if (this.definition) Flipbook.ctx.drawImage(this.definition, 0, 0, this.width, this.height);
            }
        },

        clone: function() {
            return cloneProps(new Bitmap(), this);
        }
    });



/*                Textfield: represents any text drawing - FIX SOME ISSUES       */

    Flipbook.Textfield = function(text, attr, color) {
        this.text = text;

        this.font = attr.font || "Arial";
        this.size = attr.size || "12 pt";
        this.align = attr.align || "start";
        this.style = attr.style || "normal";

        this.color = color || 'black';
    };

    Flipbook.Textfield.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Textfield.prototype.constructor = Flipbook.DisplayObject;

    extend(Flipbook.Textfield.prototype, {
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
        },

        clone: function() {
            return cloneProps(new Textfield(), this);
        }
    });



    /*                Controller: Initialize canvas and add a "ticker"        */

    Flipbook.Controller = (function(canvas_name) {
        
        function init(canvas_name) {
            Flipbook.canvas = document.getElementById(canvas_name);
            Flipbook.ctx = Flipbook.canvas.getContext("2d");

            Flipbook.stageObj = new Flipbook.Stage(canvas_name);

            if (Flipbook.Config.useTweener) {
                createjs.Ticker.setFPS(30);
                createjs.Ticker.addEventListener("tick", function() {
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

    window.Flipbook = Flipbook;
   
}(this));