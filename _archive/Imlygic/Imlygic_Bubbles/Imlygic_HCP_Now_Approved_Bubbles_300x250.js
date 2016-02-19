(function(window, document, undefined)
{
    var boundEvents = {};

    function bind (elem, eventName, callback) {
        if (elem.addEventListener) {
            elem.addEventListener(eventName, callback, false);
        }

        else if (elem.attachEvent) {
            var eID = elem.attachEvent('on'+ eventName, callback);
            boundEvents[eID] = { name: eventName, callback: callback };
        }
    }

    function unbind (elem, eventName, callback) {
        if (elem.removeEventListener) {
            elem.removeEventListener(eventName, callback, false);
        }

        else if (elem.detachEvent) {
            for (var eID in boundEvents) {
                if ((boundEvents[eID].name === eventName) &&
                        (boundEvents[eID].callback === callback)) {
                    elem.detachEvent(eID);
                    delete boundEvents[eID];
                }
            }
        }
    }
    
    var Banner = (function() {

        var mini,
            title_container,
            title_box,
            title,
            titleCopy,
            shape_yellow,
            shape_blue,
            bubbles,
            circle1,
            circle2,
            circle3,
            circle4,
            circle5,
            circle6,
            ctaBTN,
            logoType,
            logo,
            isiBox,
            prescribingInfo,
            cta,
            btn;


        function init() {
            
            
            mini = new Miniscroll(".scroller", {
                axis: "y",
                size: 17,
                sizethumb: 17,
                scrollbarSize: 85,
                mousewheel: true
            });


            Flipbook.Controller.initialize("banner_canvas");

            title_container = new Flipbook.Container();
            title_container.name = "title_container";

            title_box = new Flipbook.Shape(lib.title_box);
            title_box.name = "tilte_box";
            title_box.x = 0;
            title_box.y = 0;

            title = new Flipbook.Bitmap("img_nowApproved_title.png", 144, 18);
            title.name = "title";
            title.x = 82;
            title.y = 5;

            titleCopy = new Flipbook.Bitmap("img_nowApproved.png", 261, 29);
            titleCopy.name = "title_copy";
            titleCopy.x = 23;
            titleCopy.y = 29;
            titleCopy.alpha = 1;

            title_container.addChild(title_box, title, titleCopy);

            shape_yellow = new Flipbook.Shape(lib.shape_yellow);
            shape_yellow.name = "yellow";
            shape_yellow.x = -75;
            shape_yellow.y = 108;
            shape_yellow.regX = -133;
            shape_yellow.regY = -297;
            shape_yellow.rotation = 1 * Math.PI/180;

            Flipbook.stageObj.addChild(shape_yellow);

            shape_blue = new Flipbook.Shape(lib.shape_blue);
            shape_blue.name = "blue";
            shape_blue.x = 325;
            shape_blue.y = 64;
            shape_blue.regX = -83;
            shape_blue.regY = -197;
            shape_blue.alpha = 0.8;
            shape_blue.rotation = 1 * Math.PI/180;

            Flipbook.stageObj.addChild(shape_blue);



            bubbles = new Flipbook.SpriteSheet(lib.bubbles.data);
            bubbles.name = "bubbles";
            bubbles.x = 121;
            bubbles.y = 73;
            bubbles.alpha = 1;

            Flipbook.stageObj.addChild(bubbles);
            


            logoType = new Flipbook.Bitmap("logoType.png");
            logoType.name = "logoType";
            logoType.x = 150;
            logoType.y = 155;
            logoType.regX = -87;
            logoType.regY = -33;
            logoType.alpha = 0;

            Flipbook.stageObj.addChild(logoType);

            logo = new Flipbook.Bitmap("logo.png");
            logo.name = "logo";
            logo.x = 150;
            logo.y = 98;
            logo.regX = -24;
            logo.regY = -25;
            logo.alpha = 0;

            Flipbook.stageObj.addChild(logo);

            Flipbook.stageObj.addChild(title_container);

            isiBox = document.getElementById("ISI_holder");
            prescribingInfo = document.getElementById("prescribingInfo");
            cta = document.getElementById("ctaBtn");
            btn = document.getElementById("btn");

            // CTA and Btn
            
            bind(cta, 'click', function(e)
            {
                e.preventDefault();
                Enabler.exit("clickTag1");
            });
            
            bind(prescribingInfo, 'click', function(e)
            {
                e.preventDefault();
                Enabler.exit("clickTag2");
            });

            frameOne();
        }

        function frameOne() {
            createjs.Tween.get(shape_yellow).to({x:139, y:103.75, scaleX:0.081, scaleY:0.081, rotation:-40 * Math.PI/180}, 3000, createjs.Ease.sineOut);
            createjs.Tween.get(shape_blue).to({x:159.55, y:110.4, scaleX:0.123, scaleY:0.123, rotation:46.29 * Math.PI/180}, 3000, createjs.Ease.sineOut);
            createjs.Tween.get(logoType).wait(2200).to({alpha:1}, 500, createjs.Ease.sineOut);

            createjs.Tween.get({}).wait(3000).call(frameTwo);
        }

        function frameTwo() {
            createjs.Tween.get(logo).to({alpha:1}, 300, createjs.Ease.sineOut);
            createjs.Tween.get(shape_yellow).to({alpha:0}, 300, createjs.Ease.sineOut);
            createjs.Tween.get(shape_blue).to({alpha:0}, 300, createjs.Ease.sineOut);
            createjs.Tween.get(bubbles).to({alpha:0}, 300, createjs.Ease.sineOut);
            createjs.Tween.get({}).wait(1900).call(frameThree);
        }

        function frameThree() {
            createjs.Tween.get(titleCopy).to({alpha:0}, 500, createjs.Ease.sineOut);
            createjs.Tween.get(title_box).to({scaleY:0.5}, 500, createjs.Ease.sineOut);
            createjs.Tween.get(logo).to({x:82, y:59, scaleX:0.68, scaleY:0.68}, 1000, createjs.Ease.sineOut);
            createjs.Tween.get(logoType).to({x:82, y:98, scaleX:0.68, scaleY:0.68}, 1000, createjs.Ease.sineOut);
            createjs.Tween.get({}).wait(400).call(startISISlideup);
        }

        function startISISlideup() {
            isiBox.setAttribute("class", "isiSlideUp");
            prescribingInfo.setAttribute("class", "PISlideUp");
            createjs.Tween.get({}).wait(100).call(showButton);
            createjs.Tween.get({}).wait(2000).call(isiAutoScroll);
        }

        function showButton() {
            btn.setAttribute("class", "btnOpacity");

            bind(cta, 'mouseover', function(e)
            {
                btn.setAttribute("class", "btnOver");
            });

            bind(cta, 'mouseout', function(e)
            {
                btn.setAttribute("class", "btnOut");
            });
        }

        function isiAutoScroll() {
            mini.autoScrollStart(0.2, scrollComplete);
        }

        function scrollComplete() {
            createjs.Tween.get({}).wait(50).call(function() { mini.scrollTo(0); });
        }

        return {
            initialize: function() {
                init();
            }
        };

    // Public API
    }());
    
    window.Banner = Banner;

}(window, document));

// If true, start function "building". If false, listen for INIT.
if (Enabler.isInitialized()) {
    enablerInitHandler();
} else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}

function enablerInitHandler() {
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}

function pageLoadedHandler() {
    document.getElementById("loader").style.display = "none";
    Banner.initialize();
}