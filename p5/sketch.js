

var canvas;
let img;
var x = 100;
var y = 100;


function setup(){
canvas = createCanvas(640,480);
canvas.position(x,y);
  textSize(width / 3);
  textAlign(CENTER, CENTER);

}

function draw() {
  background(0);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('En construcción', 0, 0);
}



