var fr = 50;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("cool_canvas");
  colorMode(HSB,360,100,100);
  frameRate(fr);
}

var sat = {
  rotate: function(t){
    return t;
  },
  radius: function(t){
    return 50;
  },
  mark: function(t){
    noStroke();
    fill(0, 100, 100, 80);
    ellipse(0,0, 10);
  },
  children: []
}
var rootobj = {
  rotate: function(t){
    return t;
  },
  radius: function(t){
    return 300 + sin(t);
  },
  mark: function(t){
    noStroke();
    fill(100, 100, 100, 80);
    ellipse(0,0, 50);
  },
  children: [sat]
};


function drawObj(t, obj){
push();
  rotate(obj.rotate(t));
  translate(obj.radius(t), 0);
  obj.mark(t);
  for(var i=0; i<obj.children.length; i++){
    drawObj(t, obj.children[i]);
  }
pop();
}

function draw(){
  // FADE
  background(0, 0, 0, 0.1);
  translate(width/2, height/2);
  
  var t = frameCount * 1.0 / fr;
  drawObj(t, rootobj);
} 
