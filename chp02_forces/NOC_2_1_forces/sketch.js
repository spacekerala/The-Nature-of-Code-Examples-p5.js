// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var m;

function setup() {
  createGraphics(640, 360);
  m = new Mover();
}

function draw() {
  background(51);

  var wind = new PVector(0.01, 0);
  var gravity = new PVector(0, 0.1);
  m.applyForce(wind);
  m.applyForce(gravity);


  m.update();
  m.display();
  m.checkEdges();

}




