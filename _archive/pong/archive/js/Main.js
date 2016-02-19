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

var titleView = new Container();

	function Main() {
		console.log("Wassah");

		canvas = document.getElementById('PongStage');
		stage = new Stage(canvas);

		stage.mouseEventsEnabled = true;

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

		Ticker.setFPS(30);
		Ticker.addListener(stage);
	}

	function handleProgress(e) {
		//
	}

	function handleComplete(e) {
		//
	}

	function handleFileLoad(e) {
		var img = new Image();
		img.src = e.src;
		img.onload = handleLoadComplete;
		window[e.id] = new Bitmap(img);
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
		stage.addChild(bg, titleView);
		stage.update();

		startB.onPress = tweenTitleView;
		creditsB.onPress = showCredits;
	}

	function showCredits() {
		credits.x = 480;

		stage.addChild(credits);
		stage.update();

		Tween.get(credits).to({x:0}, 300);
		credits.onPress = hideCredits;
	}
 
	function hideCredits(e) {
		Tween.get(credits).to({x:480}, 300).call(rmvCredits);
	}

	function rmvCredits() {
		stage.removeChild(credits);
	}

	function tweenTitleView(e) {
		Tween.get(titleView).to({y:-320}, 300).call(addGameView);
	}

	function addGameView() {
		stage.removeChild(titleView);
		titleView = null;
		credits = null;

		player.x = 2;
		player.y = 160 - 37.5;

		cpu.x = 480 - 25;
		cpu.y = 160 - 37.5;

		ball.x = 240 - 15;
		ball.y = 160 - 15;

		playerScore = new Text('0', 'bold 20px Arial', '#A3FF24');
		playerScore.x = 211;
		playerScore.y = 20;

		cpuScore = new Text('0', 'bold 20px Arial', '#A3FF24');
		cpuScore.x = 262;
		cpuScore.y = 20;

		stage.addChild(playerScore, cpuScore, player, cpu, ball);
		stage.update();

		bg.onPress = startGame;
	}

	function startGame(e) {
		bg.onPress = null;
		stage.onMouseMove = movePaddle;

		Ticker.addListener(tkr, false);
		tkr.tick = update;
	}

	function movePaddle(e) {
		player.y = e.stageY;
	}

	function reset() {
		ball.x = 240 - 15;
		ball.y = 160 - 15;

		player.y = 160 - 37.5;
		cpu.y = 160 - 37.5;

		stage.onMouseMove = null;
		Ticker.removeListener(tkr);

		bg.onPress = startGame;
	}

	function alert(e) {
		Ticker.removeListener(tkr);
		stage.onMouseMove = null;
		bg.onPress = null;

		if (e == 'win') {
			win.x = 140;
			win.y = -90;

			stage.addChild(win);
			Tween.get(win).to({y: 115}, 300);
		} else {
			lose.x = 140;
			lose.y = -90;

			stage.addChild(lose);
			Tween.get(lose).to({y: 115}, 300);
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

