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
	
	var Banner = (function()
	{
		var expanded = false,
			box1,
			box2,
			logo,
			btn,
			f1txt1_f2txt1_f3txt1,
			f2txt2_f3txt3_f5txt3,
			f3txt2,
			f4txt1,
			f5txt1,
			f5txt2,
			orange,
			txtBtn,
			txtPurpleBox,
			txtOrangeBox,
			mini;
		
			
		function init()
		{
			console.log("INIT");
		
			mini = new Miniscroll("#scroller", { axis: "y", size: 8, sizethumb: "auto", scrollbarSize: 180, thumbColor: "#F00", trackerColor: "#9E8DB5", mousewheel: true});
						

			//var canvas = document.getElementById("elements");
			//stage = new Flipbook.Stage(canvas);
			Flipbook.Controller.initialize("elements");

			// box1
			box1 = new Flipbook.Bitmap("boxPurpleBg.gif");
			box1.x = 7;
			box1.y = 103;
			box1.alpha = 0;
			box1.scaleY = 0.1;

			txtPurpleBox = new Flipbook.Bitmap("txtPurpleBox.png");
			txtPurpleBox.x = -250;
			txtPurpleBox.y = 116;
			
			// box2
			box2 = new Flipbook.Bitmap("boxOrangeBg.gif");
			box2.x = 7;
			box2.y = 190;
			box2.alpha = 0;
			box2.scaleY = 0.1;

			txtOrangeBox = new Flipbook.Bitmap("txtOrangeBox.png");
			txtOrangeBox.x = -250;
			txtOrangeBox.y = 204;
			
			// logo
			logo = new Flipbook.Bitmap("logo.gif");
			logo.x = 100;
			logo.y = 70;
			logo.alpha = 0;
			Flipbook.stageObj.addChild(logo);

			// btn
			btn = new Flipbook.Bitmap("btn.gif");
			btn.alpha = 0;
			btn.x = 53.5;
			btn.y = 204;

			f1txt1_f2txt1_f3txt1 = new Flipbook.Bitmap("f1txt1_f2txt1_f3txt1.gif");
			f1txt1_f2txt1_f3txt1.x = 23;
			f1txt1_f2txt1_f3txt1.y = 70;
			f1txt1_f2txt1_f3txt1.alpha = 0;
			Flipbook.stageObj.addChild(f1txt1_f2txt1_f3txt1);

			f2txt2_f3txt3_f5txt3 = new Flipbook.Bitmap("f2txt2_f3txt3_f5txt3.gif");
			f2txt2_f3txt3_f5txt3.x = 13;
			f2txt2_f3txt3_f5txt3.y = 280;
			f2txt2_f3txt3_f5txt3.alpha = 0;
			Flipbook.stageObj.addChild(f2txt2_f3txt3_f5txt3);

			f3txt2 = new Flipbook.Bitmap("f3txt2.gif");
			f3txt2.x = 93;
			f3txt2.y = 243;
			f3txt2.alpha = 0;
			Flipbook.stageObj.addChild(f3txt2);

			f4txt1 = new Flipbook.Bitmap("f4txt1.gif");
			f4txt1.x = 59;
			f4txt1.y = 156;
			f4txt1.alpha = 0;
			Flipbook.stageObj.addChild(f4txt1);

			f5txt1 = new Flipbook.Bitmap("f5txt1.gif");
			f5txt1.x = 35;
			f5txt1.y = 139;
			f5txt1.alpha = 0;
			Flipbook.stageObj.addChild(f5txt1);

			f5txt2 = new Flipbook.Bitmap("f5txt2.gif");
			f5txt2.x = 8;
			f5txt2.y = 164;
			f5txt2.alpha = 0;
			Flipbook.stageObj.addChild(f5txt2);

			/*
			orange = new Flipbook.Bitmap("orangeBgBtn.gif");
			orange.x = 3;
			orange.y = 180;
			orange.alpha = 0;
			stage.addChild(orange);
			*/

			txtBtn = new Flipbook.Bitmap("txtBtn.png");
			txtBtn.x = 83;
			txtBtn.y = 217;
			txtBtn.alpha = 0;
			
			Flipbook.stageObj.addChild(box2);
			Flipbook.stageObj.addChild(box1);
			Flipbook.stageObj.addChild(txtPurpleBox);
			Flipbook.stageObj.addChild(txtOrangeBox);
			Flipbook.stageObj.addChild(btn);
			Flipbook.stageObj.addChild(txtBtn);
			Flipbook.stageObj.update();

			//Flipbook.Ticker.setFPS(30);
			//Flipbook.Ticker.addEventListener("tick", stage);

			animate();
		}
		
		// ANIMATION //
		function animate() {
			console.log("ANIMATING");
			
			createjs.Tween.get(f1txt1_f2txt1_f3txt1).to({alpha:1}, 800);
			createjs.Tween.get(box1).wait(700).to({alpha:1, scaleY:1}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(txtPurpleBox).wait(1000).to({x:38}, 400, createjs.Ease.quadOut).wait(1500).call(frame2);
		}

		function frame2() {
			createjs.Tween.get(box2).to({alpha:1, scaleY:1}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(txtOrangeBox).wait(300).to({x:52}, 400, createjs.Ease.quadOut);
			createjs.Tween.get(f2txt2_f3txt3_f5txt3).wait(600).to({alpha:1}, 800).wait(1000).call(frame3);
		}

		function frame3() {
			createjs.Tween.get(box2).to({y:148, scaleY:1.1}, 400, createjs.Ease.quadOut);
			createjs.Tween.get(txtOrangeBox).to({y:177, scaleY:.9}, 400, createjs.Ease.quadOut);
			createjs.Tween.get(f3txt2).wait(200).to({alpha:1}, 1000, createjs.Ease.quadOut).wait(2000).call(frame4);
		}

		function frame4() {
			createjs.Tween.get(f1txt1_f2txt1_f3txt1).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(box1).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(box2).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(txtPurpleBox).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(txtOrangeBox).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(f2txt2_f3txt3_f5txt3).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(f3txt2).to({alpha:0}, 500, createjs.Ease.quadOut);
			createjs.Tween.get(f4txt1).wait(300).to({alpha:1}, 600, createjs.Ease.quadOut).wait(2000).call(frame5);
		}

		function frame5() {
			createjs.Tween.get(f4txt1).to({alpha:0}, 400, createjs.Ease.quadOut);
			createjs.Tween.get(logo).to({alpha:1}, 800, createjs.Ease.quadOut);
			createjs.Tween.get(f5txt1).wait(200).to({alpha:1}, 600, createjs.Ease.quadOut);
			createjs.Tween.get(f5txt2).wait(400).to({alpha:1}, 600, createjs.Ease.quadOut);
			
			createjs.Tween.get(btn).wait(600).to({alpha:1}, 400, createjs.Ease.quadOut);
			//createjs.Tween.get(orange).wait(1000).to({x:155}, 400, createjs.Ease.quadOut);
			createjs.Tween.get(txtBtn).wait(1000).to({alpha:1}, 600, createjs.Ease.quadOut);
			createjs.Tween.get(f2txt2_f3txt3_f5txt3).wait(1000).to({alpha:1}, 600, createjs.Ease.quadOut);
		}
			
		return {
			initialize: function()
			{
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