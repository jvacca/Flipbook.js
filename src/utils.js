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
	
