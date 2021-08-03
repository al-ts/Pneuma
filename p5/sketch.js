

var canvas;
let img;
var x = 100;
var y = 100;


function setup(){
canvas = createCanvas(640,480);
canvas.position(x,y);

}

function draw() {
 textSize(32);
text('word', 10, 30);
fill(0, 102, 153);
text('word', 10, 60);
fill(0, 102, 153, 51);
text('word', 10, 90);
}



