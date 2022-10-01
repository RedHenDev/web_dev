let so2 = function(p){

p.setup = function(){
  p.createCanvas(200,200);
  p.background(0,255,0);
}

p.mousePressed = function(){
  p.background(0,255,0);
}

p.draw = function(){
  p.circle(p.mouseX,p.mouseY,10);
}

}

let myp5_2 = new p5(so2, 'c2');