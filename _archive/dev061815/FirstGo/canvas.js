; (function(window, undefined) {

    "use strict";
    console.log("Here we go!");

    //Support code
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(/* function */ callback, /* DOMElement */ element){
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

     // Canvas code
    var canvas = document.getElementById("canvas_exp");
    var ctx = canvas.getContext("2d");
    var counter = 0;

    animationLoop();

    function animationLoop() {
        counter +=  1;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        render();

        requestAnimFrame(animationLoop);
    }

    function render() {
        ctx.fillStyle = "yellow";

        if (counter < 300) {
            ctx.fillRect(0 + counter, 0 + counter, 150, 100);
        }
    }
   
}(this));