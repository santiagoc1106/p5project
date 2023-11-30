var xoff = 0;
var yoff = 0;


function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(51);


  var x = map(noise(xoff), 0, 1, 0, width);
  var y = map(nosie(xoff), 0, 1, 0, height);

  xoff += 0.02;

  ellipse (x, y, 24, 24);
}
