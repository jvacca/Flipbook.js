			

			Flipbook.Config.mouseEventsEnabled = true;
			Flipbook.Main.initialize("canvas_exp");
			

			var testContainer = new Flipbook.Container();
			testContainer.name = "testContainer";
			Flipbook.stageObj.addChild(testContainer);

			var bus = new Flipbook.Shape(lib.box2);
			bus.name = "bus";
			bus.x = -400;
			bus.y = 20;
			bus.scaleX = .75;
			bus.scaleY = .75;
			//bus.alpha = 0;
			//bus.mask = lib.amask;
			//Flipbook.stageObj.addChild(bus);
			
			var logoImg = document.createElement("img");
			logoImg.src = "images/logo.gif";
			var logo = new Flipbook.Bitmap(logoImg);
			logo.name = "logo";
			logo.x = 0;
			logo.y = 0;
            logoImg.onload = function() {
				logo.width = logoImg.width;
				logo.height = logoImg.height;
            };

            logo.onRelease = function(e) {
				console.log("DUDE ");
			};

			logo.onRollOver = function(e) {
				logo.scaleX = 2;
				logo.scaleY = 2;
			};

			logo.onRollOut = function(e) {
				logo.scaleX = 1;
				logo.scaleY = 1;
			};
			
			//var logo = new Flipbook.Bitmap("logo.gif");
			//testContainer.addChild(logo);
			//Flipbook.stageObj.addChild(logo);
			testContainer.addChild(bus, logo);
			testContainer.x = 0;
			testContainer.y = 0;
			testContainer.alpha = 0;

			var man = new Flipbook.Shape(lib.box1);
			man.name = "man";
			man.x = 150;
			man.y = 150;
			man.regX = -24;
			man.regY = -24;
			man.scaleX = .75;
			man.scaleY = .75;
			//man.alpha = 0;
			man.mask = lib.mask
			Flipbook.stageObj.addChild(man);
			man.mouseEnabled = true;

			var woman = new Flipbook.Bitmap("images/woman.jpg");
			woman.name = "woman";
			woman.x = 365;
			woman.y = 350;
			//woman.width = 260;
			//woman.height = 600;
			woman.regX = -65;
			woman.regY = -150;
			//woman.alpha = 0;
			//woman.onPress(function(e) {
				//console.log("OMG ");
				//testContainer.removeChild(logo);
			//});

			Flipbook.stageObj.addChild(woman);

			
			createjs.Tween.get(woman).to({x:200, rotation: Math.PI * 2, scaleX:.5, scaleY:.5}, 1000).call(onTweenComplete);
			createjs.Tween.get(testContainer).to({alpha: 1}, 1000);
			createjs.Tween.get(man).to({scaleX:3, scaleY:3}, 1000);
			createjs.Tween.get(bus).to({x:150, scaleX:.5, scaleY:.5}, 1000);
			createjs.Tween.get(logo).to({x:150}, 1000);
			
			/*
			TweenLite.to(woman, 1, {x:200, rotation: Math.PI * 2, scaleX:.5, scaleY:.5});
			TweenLite.to(testContainer, 1, {alpha: 1});
			TweenLite.to(man, 1, {x:150, scaleX:3, scaleY:3, alpha: 1});
			TweenLite.to(bus, 1, {x:150, scaleX:.5, scaleY:.5});
			TweenLite.to(logo, 1, {x:150});	
			*/
			
			function onTweenComplete() {
				//Flipbook.stageObj.removeChild(aqua);
				//woman.onPress(null);
			}