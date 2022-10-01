let so = function(p){

let i = 0;

p.setup = function(){
  p.createCanvas(200,200,p.WEBGL);
  p.background(255,0,255);
}

p.draw = function(){
  p.background(255,0,255);

  p.rotateY(i);
  p.rotateX(i*1.4);

  p.box(42);
  
  i+=0.04;
}

}

let myp5 = new p5(so, 'c1');