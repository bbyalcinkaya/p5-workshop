function drawTree(thickness, length, angle, x, y){
  if(thickness < 1) return;
  var x2 = length * cos(angle) + x;
  var y2 = length * sin(angle) + y;
  
  strokeWeight(thickness);
  
  line(x,y, x2, y2);
  
  drawTree(thickness * 0.7 , length * 0.7, angle + PI / 6, x2, y2);
  drawTree(thickness * 0.7,  length * 0.7, angle - PI / 6, x2, y2);
}


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("drawing");
  
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
  angleMode(RADIANS);
}
function draw(){
  background(0, 0, 10, 0);
  translate(width/2, height);
  rotate(PI);
  drawTree(40, 100, PI/2.0, 0,0);
} 
