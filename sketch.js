var a;
var b;
var c;
var d;
var e;
var f;

function setup() {
  createCanvas(windowWidth,windowHeight);

  a = new Draggable(100,150,120,120);
  b = new Draggable(250,150,120,120);
  c = new Draggable(400,150,120,120);
  d = new Draggable(100,350,120,120);
  e = new Draggable(250,350,120,120);
  f = new Draggable(400,350,120,120);

}

function draw() {
	background(255);
	a.rollover(mouseX,mouseY);
  	a.drag(mouseX,mouseY);
  	a.display();
  	b.rollover(mouseX,mouseY);
  	b.drag(mouseX,mouseY);
  	b.display();
  	c.rollover(mouseX,mouseY);
  	c.drag(mouseX,mouseY);
  	c.display();
  	d.rollover(mouseX,mouseY);
  	d.drag(mouseX,mouseY);
  	d.display();
  	e.rollover(mouseX,mouseY);
  	e.drag(mouseX,mouseY);
  	e.display();
  	f.rollover(mouseX,mouseY);
  	f.drag(mouseX,mouseY);
  	f.display();
 
  noStroke();
 fill('black');
 rect(930, 40, 10, 500);

 fill('black');
 rect(1150, 40, 10, 500); 

 fill('black');
 rect(750, 180, 600, 10);

 fill('black');
 rect(750, 380, 600, 10);
}

function mousePressed() {
	a.clicked(mouseX,mouseY);
	b.clicked(mouseX,mouseY);
	c.clicked(mouseX,mouseY);
	d.clicked(mouseX,mouseY);
	e.clicked(mouseX,mouseY);
	f.clicked(mouseX,mouseY);

}

function mouseReleased() {
	a.stopDragging();
	b.stopDragging();
	c.stopDragging();
	d.stopDragging();
	e.stopDragging();
	f.stopDragging();
}


function Draggable(tempX, tempY, tempW, tempH) {
  this.dragging = false;
  this.over = false;
  
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
  this.h = tempH;
  this.offsetX = 0;
  this.offsetY = 0; 

  Draggable.prototype.display = function() {
    if (this.dragging) fill ('red');
    else if (this.over) fill('grey');
    else noFill();
    strokeWeight(4);
    stroke('red');
    ellipse(this.x,this.y,this.w,this.h);
    ellipse(this.x,this.y,this.w,this.h);
    ellipse(this.x,this.y,this.w,this.h);
  }

  Draggable.prototype.clicked = function(mx, my) {
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x-mx;
      this.offsetY = this.y-my;
    }
  }
  
  Draggable.prototype.rollover = function(mx, my) {
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.over = true;
    } else {
      this.over = false;
    }
  }

  Draggable.prototype.stopDragging = function() {
    this.dragging = false;
  }
  
  Draggable.prototype.drag = function(mx, my) {
    if (this.dragging) {
      this.x = mx + this.offsetX;
      this.y = my + this.offsetY;
    }
  }

}