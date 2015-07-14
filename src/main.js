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