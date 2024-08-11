var slider;
var angle = 0;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider.hide();
}

function draw() {
  background(51);
  var x = map(sin(angle), -1, 1, 0, 255);
  slider.value(x);
  stroke("yellow");
  translate(200, height);
  branch(100);
  angle += 0.01;
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 2) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}

function keyTyped() {
  if (key === "s" || key === "S") {
    saveGif("myGif", 10.5);
    print("saving image");
  }
  return false;
}
