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
            title,
            titleCopy,
            titleTxt,
            logo;

        function init() {
            
            
            mini = new Miniscroll(".scroller", {
                axis: "y",
                size: 17,
                sizethumb: 17,
                scrollbarSize: 85,
                mousewheel: true
            });


            Flipbook.Controller.initialize("banner_canvas");

            logo = new Flipbook.Shape(lib.logo);
            logo.name = "logo";
            logo.x = 190;
            logo.y = 351;
            logo.regX = -4938;
            logo.regY = -2698;


            Flipbook.stageObj.addChild(logo);
            
            title = new Flipbook.Bitmap("img_nowApproved_title.png", 228, 25);
            title.name = "title";
            title.x = 148;
            title.y = 110;
            title.regX = -112;
            title.regY = -11;
            title.alpha = 0;

            titleCopy = new Flipbook.Bitmap("img_nowApproved.png", 235, 79);
            titleCopy.name = "title_copy";
            titleCopy.x = 135;
            titleCopy.y = 120;
            titleCopy.regX = -115;
            titleCopy.regY = -37;
            titleCopy.alpha = 0;

            titleTxt = new Flipbook.Bitmap("img_nowApproved_title_small.png", 100, 12);
            titleTxt.name = "titleTxt";
            titleTxt.x = 21;
            titleTxt.y = 17;
            titleTxt.alpha = 0;

            Flipbook.stageObj.addChild(title, titleCopy, titleTxt);

            isiBox = document.getElementById("ISI_holder");
            prescribingInfo = document.getElementById("prescribingInfo");
            cta = document.getElementById("ctaBtn");

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
            createjs.Tween.get(title).to({alpha: 1}, 1000, createjs.Ease.sineOut);

            createjs.Tween.get({}).wait(1500).call(frameTwo);
        }

        function frameTwo() {
            createjs.Tween.get(title).to({scaleX:0.45, scaleY:0.45, x:71, y:22}, 500, createjs.Ease.sineOut);
            createjs.Tween.get(title).wait(500).to({alpha: 0}, 100);
            createjs.Tween.get(titleTxt).wait(500).to({alpha: 1}, 100);

            createjs.Tween.get(titleCopy).wait(500).to({alpha: 1}, 500, createjs.Ease.sineOut);
            
            createjs.Tween.get({}).wait(3500).call(frameThree);
        }

        function frameThree() {
            createjs.Tween.get(titleTxt).to({scaleX:0, scaleY:0, x:150, y:90}, 800, createjs.Ease.sineOut);
            createjs.Tween.get(titleCopy).to({scaleX:0, scaleY:0, x:150, y:90}, 800, createjs.Ease.sineOut);
            createjs.Tween.get(logo).to({scaleX:0.0245, scaleY:0.0245, x:150, y:95}, 1000, createjs.Ease.sineOut);
           
            createjs.Tween.get({}).wait(2000).call(frameFour);
        }

        function frameFour() {
            createjs.Tween.get(logo).to({scaleX:0.0165, scaleY:0.0165, y:50}, 1000, createjs.Ease.sineOut);
            isiBox.setAttribute("class", "isiSlideUp");
            prescribingInfo.setAttribute("class", "PISlideUp");

            createjs.Tween.get({}).wait(2500).call(isiAutoScroll);
        }

        function isiAutoScroll() {
            mini.autoScrollStart(0.1, scrollComplete);
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