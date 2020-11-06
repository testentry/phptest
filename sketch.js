var angle = 0;
var slider;
var slider1;
function setup(){
  createCanvas(500, 500)
  angle = PI / 4;
  slider = createSlider(0, TWO_PI, 0.5, 0.1)
  slider1 = createSlider(0, 255, 19, 1)
}

function draw(){
  background(51);
  angle = slider.value();
  colorSlider = slider1.value();
  stroke(255, 0, 0);
  translate(height/2, height);
  branch(150, 255);
}

function branch(len, color){
    line(0,0,0,-len);
    translate(0, -len);
    color -= colorSlider;
    stroke(color,0,0);
    if(len > 2){
      push();
      rotate(angle);
      branch(len * 0.67, color);
      pop();
      rotate(-angle);
      branch(len * 0.67, color);
  }
}
