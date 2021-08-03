
let img;
let img1;



function setup(){
  var canvas = createCanvas(1500, 1000);
  var xc = windowWidth /2;
  var yc = windowHeight / 3;
  canvas.position(xc,yc);
  background(0);

  img  = createImg('../imag/T20210623_005_0001.jpg');
  img1  = createImg('../imag/T20210623_006_0001.jpg');




}
function draw() {
image(img, 0, 0);
image(img1, 0, 0);
rect(30, 20, 250, 250);
fill(255);
}
