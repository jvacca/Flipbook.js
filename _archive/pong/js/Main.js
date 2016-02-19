var canvas;
var stage;
var bg;
var main;
var startB;
var creditsB;
var credits;
var player;
var ball;
var cpu;
var win;
var lose;

var playerScore;
var cpuScore;
var cpuSpeed = 6;

var xSpeed = 5;
var ySpeed = 5;

var tkr = {};

var preloader;
var manifest;
var totalLoaded = 0;
var tokenUpdate;
var tokenPaddle;

var titleView = new Flipbook.Container();

	function Main() {
		Flipbook.Config.mouseEventsEnabled = true;
		//Flipbook.Config.useTweener = false;

		//canvas = document.getElementById('PongStage');
		//stage = new Stage(canvas);
		Flipbook.Controller.initialize("PongStage");

		manifest = [
					{src: "images/bg.png", id: "bg"},
					{src: "images/main.png", id: "main"},
					{src: "images/startB.png", id: "startB"},
					{src: "images/creditsB.png", id: "creditsB"},
					{src: "images/credits.png", id: "credits"},
					{src: "images/paddle.png", id: "player"},
					{src: "images/paddle.png", id: "cpu"},
					{src: "images/ball.png", id: "ball"},
					{src: "images/win.png", id: "win"},
					{src: "images/lose.png", id: "lose"}
					];

		preloader = new PreloadJS();
		preloader.onProgress = handleProgress;
		preloader.onComplete = handleComplete;
		preloader.onFileLoad = handleFileLoad;
		preloader.loadManifest(manifest);

		//createjs.Ticker.setFPS(30);
		//createjs.Ticker.addEventListener("tick", stage);
		//createjs.Ticker.addEventListener("tick", Flipbook.stageObj.update);
	}

	function handleProgress(e) {
		//
	}

	function handleComplete(e) {
		//
	}

	function handleFileLoad(e) {
		var img = document.createElement("img");
		img.src = e.src;
		img.onload = handleLoadComplete;
		window[e.id] = new Flipbook.Bitmap(img);
		window[e.id].width = img.width;
		window[e.id].height = img.height;
	}

	function handleLoadComplete(e) {
		totalLoaded++;

		if (manifest.length == totalLoaded) {
			addTitleView();
		}
	}

	function addTitleView() {
		startB.x = 240 - 31.5;
		startB.y = 160;

		creditsB.x = 241 - 42;
		creditsB.y = 200;

		titleView.addChild(main, startB, creditsB);
		Flipbook.stageObj.addChild(bg, titleView);
		Flipbook.stageObj.update();

		startB.onRelease = tweenTitleView;
		creditsB.onRelease = showCredits;
	}

	function showCredits() {
		credits.x = 480;

		Flipbook.stageObj.addChild(credits);
		Flipbook.stageObj.update();

		createjs.Tween.get(credits).to({x:0}, 300);
		credits.onRelease = hideCredits;
	}
 
	function hideCredits(e) {
		createjs.Tween.get(credits).to({x:480}, 300).call(rmvCredits);
	}

	function rmvCredits() {
		Flipbook.stageObj.removeChild(credits);
	}

	function tweenTitleView(e) {
		createjs.Tween.get(titleView).to({y:-320}, 300).call(addGameView);
	}

	function addGameView() {
		Flipbook.stageObj.removeChild(titleView);
		titleView = null;
		credits = null;

		player.x = 2;
		player.y = 160 - 37.5;

		cpu.x = 480 - 25;
		cpu.y = 160 - 37.5;

		ball.x = 240 - 15;
		ball.y = 160 - 15;

		playerScore = new Flipbook.Textfield('0', {style:'bold', size:'20px', font:'Arial'}, '#A3FF24');
		playerScore.x = 211;
		playerScore.y = 20;

		cpuScore = new Flipbook.Textfield('0', {style:'bold', size:'20px', font:'Arial'}, '#A3FF24');
		cpuScore.x = 262;
		cpuScore.y = 20;

		Flipbook.stageObj.addChild(playerScore, cpuScore, player, cpu, ball);
		Flipbook.stageObj.update();

		bg.onRelease = startGame;
	}

	function startGame(e) {
		
		bg.onRelease = null;
		Flipbook.stageObj.addEventListener(Flipbook.Events.MouseMove, movePaddle);
		Flipbook.stageObj.addEventListener(Flipbook.Events.OnUpdate, update);
	}

	function movePaddle(e) {
		player.y = Flipbook.stageObj.mouseY;
	}

	function reset() {
		
		ball.x = 240 - 15;
		ball.y = 160 - 15;

		player.y = 160 - 37.5;
		cpu.y = 160 - 37.5;

		Flipbook.stageObj.removeEventListener(Flipbook.Events.MouseMove, movePaddle);
		Flipbook.stageObj.removeEventListener(Flipbook.Events.OnUpdate, update);

		bg.onRelease = startGame;
	}

	function alert(e) {
		Flipbook.stageObj.removeEventListener(Flipbook.Events.MouseMove, movePaddle);
		Flipbook.stageObj.removeEventListener(Flipbook.Events.OnUpdate, update);
		bg.onRelease = null;

		if (e == 'win') {
			win.x = 140;
			win.y = -90;

			Flipbook.stageObj.addChild(win);
			createjs.Tween.get(win).to({y: 115}, 300);
		} else {
			lose.x = 140;
			lose.y = -90;

			Flipbook.stageObj.addChild(lose);
			createjs.Tween.get(lose).to({y: 115}, 300);
		}
	}

	function update() {
		ball.x = ball.x + xSpeed;
		ball.y = ball.y + ySpeed;

		if (cpu.y < ball.y) {
			cpu.y = cpu.y + 5;
		}

		if (cpu.y > ball.y) {
			cpu.y = cpu.y - 5;
		}

		if ((ball.y) < 0) {
			ySpeed = -ySpeed;
		}

		if ((ball.y + 30) > 320) {
			ySpeed = -ySpeed;
		}

		if (ball.x < 0) {
			xSpeed = -xSpeed;
			cpuScore.text = parseInt(cpuScore.text + 1);
			reset();
		}

		if (ball.x + 30 > 480) {
			xSpeed = -xSpeed;
			playerScore.text = parseInt(playerScore.text + 1);
			reset();
		}

		if (ball.x + 30 > cpu.x && ball.x + 30 < cpu.x + 22 && ball.y >= cpu.y && ball.y < cpu.y + 75) {
			xSpeed *= -1;
		}

		if (ball.x <= player.x + 22 && ball.x > player.x && ball.y >= player.y && ball.y < player.y + 75) {
			xSpeed *= -1;
		}

		if (player.y >= 249) {
			player.y = 249;
		}

		if (playerScore.text == '10') {
			alert('win');
		}

		if (cpuScore.text == '10') {
			alert('lose');
		}
	}

Main();