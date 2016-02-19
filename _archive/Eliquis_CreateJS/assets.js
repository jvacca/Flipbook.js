(function (lib, img, cjs) {

var p; // shortcut to reference prototypes


// symbols:
(lib.orangewitharrowbtn = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,2,0,3).p("AgugmIBTAmIhTAog");
	this.shape.setTransform(25.3,21.3,1,1,0,0,0,0,0.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EE8300","#F2A000"],[0,1],0,21.2,0,-21).s().p("Aj0DSIAAmjIHoAAIAAGjg");
	this.shape_1.setTransform(24.5,21);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49,42);


(lib.box2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB6D3D","#F3B100"],[0,1],0,33.9,0,-33.7).s().p("A0xFWQhhgCAAhiIAAnjQAAhiBhgCMArEAAAIAAJHQAABkhkAAg");
	this.shape.setTransform(142.7,34.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,285.5,68.5);


(lib.box1 = function() {
	this.initialize();

	// bg btn
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7A0F4E","#9D2373"],[0,1],0,33.9,0,-33.7).s().p("A0xFWQhhgCAAhiIAAnjQAAhiBhgCMArEAAAIAAJHQAABkhkAAg");
	this.shape.setTransform(142.7,34.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,285.5,68.5);


(lib.base = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#710D48","#A2247C"],[0,1],0,21.3,0,-21.1).s().p("AtWDSQhjAAgBhkIAAjbQABhjBjgBIcQAAIAAE/QABBkhlAAg");
	this.shape.setTransform(95.5,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191,42);


(lib.btn = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtWDSQhjAAgBhkIAAjbQABhjBjgBIcQAAIAAE/QABBkhlAAg");
	mask.setTransform(95.5,21);

	// orange box
	this.orange = new lib.orangewitharrowbtn();
	this.orange.setTransform(165.2,20,1,1,0,0,0,23.2,20);

	this.orange.mask = mask;

	// Layer 5
	this.bgBtn = new lib.base();
	this.bgBtn.setTransform(95.5,21,1,1,0,0,0,95.5,21);

	this.bgBtn.mask = mask;

	this.addChild(this.bgBtn,this.orange);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191,42);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;