
let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(700, 700);
  
}
  var xPositions = [0];
  var w = 100;
  var h = 100;
  var startTime = new Date().getTime();
function draw() {
  background(135, 206, 235);
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x+=0.75) {
    let y = noise(xoff) * 750;
    vertex(x, y);
    vertex(0,700)
    vertex(700,700)
    xoff += .005;
  }
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


  fill(200,210,0)
  ellipse(65, 65, 100, 100);


  for (var i = 0; i < xPositions.length; i++) {
        fill(255,255,255);
        ellipse(xPositions[i], 100, w-10, h-10);
        ellipse(xPositions[i]+5, 105, w-20, h-20);
        ellipse(xPositions[i]-15, 105, w-20, h-20);

        ellipse(xPositions[i]+30, 100, w-20, h-10);
        ellipse(xPositions[i]+35, 105, w-20, h-20);
        ellipse(xPositions[i]+15, 105, w-20, h-20);



        xPositions[i] ++;
        if(xPositions[i]>=700){
         xPositions[i] = -10;
        }
    }
    
    var birdfly= document.getElementById("birds");
    var birdy = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);
      var newLeft= secondsElapsed * 20;
      birdfly.style.left = newLeft + "px";
      window.requestAnimationFrame(birdy);
      console.log(newLeft);
      if (newLeft>500){
        birdfly.style.left = 0 + "px";
      }
  }
  birdy();
fill(50);
} 
