
let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(135, 206, 235);
  stroke(255);
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x+=0.75) {
    
   noStroke();
   noFill();
    let y = noise(xoff) * 800;
    vertex(x, y);
    xoff += .007;
  }
  fill(50);
  endShape();

  start += inc/2;
  var trunk = 0;

  noStroke();
  for(trunk = 10; trunk < 800; trunk +=50){
    fill(64, 44, 5);
    rect(trunk,550,40,332);
  }

  var leaves=10;
  for(leaves=30;leaves<800;leaves+=50){
    fill(72, 110, 12);
    ellipse(leaves,520,127,116);
  }
  stroke(250);


} 
