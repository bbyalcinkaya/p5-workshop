var fr = 50;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("cool_canvas");
  colorMode(HSB,360,100,100);
  frameRate(fr);
}

var bugra = {
  rotate: function(t){
    return -t * 10 + QUARTER_PI;
  },
  radius: function(t){
    return random(470,570) * sin(t * floor(random(4,5)));
  },
  mark: function(t){
    stroke( t % 10, 0, 255);
    strokeWeight(2);
    fill(t % 20, 100, 100);
    ellipse(0, 0, 20);
  },
  children: []
}


var altuner_sat = {
  rotate: function(t){
    return t * cos(frameCount);
  },
  radius: function(t){
    return 100;
  },
  mark: function(t){
    noStroke();
    fill(random(0, 360), 100, 100, 80);
    ellipse(0,0, 10);
  },
  children: []
}

var altuner_sat2 = {
  rotate: function(t){
    return t * sin(frameCount);
  },
  radius: function(t){
    return 200;
  },
  mark: function(t){
    noStroke();
    fill(random(0, 360), 100, 200, 80);
    ellipse(0,0, 10);
  },
  children: []
}

//capitalistsavage

var altuner = {
  rotate: function(t){
    return t;
  },
  radius: function(t){
    return 500 + sin(t);
  },
  mark: function(t){
    noStroke();
    fill(frameCount % 360, 100, 100, 80);
    ellipse(0,0, 50);
  },
  children: [altuner_sat, altuner_sat2]
};
var uzay_sat3 = {
  rotate: function(t){
    return t;
  },
  radius: function(t){
    return 100+sin(t)*25;
  },
  mark: function(t){
    noStroke();
    fill(cos(t)*180, 100, 100, 100);
    ellipse(0,0, 20);
  },
  children: []
}
var uzay_sat2 = {
  rotate: function(t){
    return t*1.5;
  },
  radius: function(t){
    return 100+sin(t)*25;
  },
  mark: function(t){
    noStroke();
    fill(sin(t)*180, 100, 100, 100);
    ellipse(0,0, 20);
  },
  children: [uzay_sat3]
}

var uzay = {
  rotate: function(t){
    return t/2;
  },
  radius: function(t){
    return 200 + sin(t);
  },
  mark: function(t){
    noStroke();
    fill(0, 0, 0, 0);
    ellipse(0,0, 50);
  },
  children: [uzay_sat2]
};

var bekci_sat2 = {
  rotate: function(t){
    return 0.5 * t * cos(t);
  },
  radius: function(t){
    return 50 + cos(t) ;
  },
  mark: function(t){
    noStroke();
    fill( random(0 , 90 ) , 200, 100, 80);
    ellipse(0, 0, 10 );
  },
  children: []
}


var bekci_sat = {
  rotate: function(t){
    return 0.2 * t * sin(t);
  },
  radius: function(t){
    return 50;
  },
  mark: function(t){
    noStroke();
    fill( random(180, 280 ) , 200, 100, 80);
    ellipse(0, 0, 40 * sin(t) , 20 );
  },
  children: []
}
var bekci = {
  rotate: function(t){
    return t + HALF_PI;
  },
  radius: function(t){
    return 500 + sin(t);
  },
  mark: function(t){
    noStroke();
    fill(100, 100, 100, 80);
    ellipse(0,0, 50);
  },
  children: [bekci_sat, bekci_sat2]
};


var onat_satsat = {
  rotate: function(t){
    return 0.5 * cos(-t) * random(0,10);
  },
  radius: function(t){
    return sin(t) * random(500,520);
  },
  mark: function(t){
    noStroke();
    fill(0, 0, 100, 80);
    ellipse(0, 0, 10);
    //arc(50, 55, 50, 50, 0, HALF_PI);
    //line(30, 20, 85, 75);
  },
  children: []
}

var onat = {
  rotate: function(t){
    return 0.1 * sin(t) * 50;
  },
  radius: function(t){
    return cos(t) * 100;
  },
  mark: function(t){
    noStroke();
    fill(random(0,360), 100, 100, 80);
    //ellipse(0,0, 10);
    arc(50, 55, random(0,50), 50, 0, random(0,2)*PI);
    //line(30, 20, 85, 75);
  },
  children: [onat_satsat]
}
var rootobj = {
  rotate: function(t){
    return 0;
  },
  radius: function(t){
    return 0;
  },
  mark: function(t){
  },
  children: [altuner, bugra, uzay, bekci, onat]
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










