let n = 0;
let c = 5;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  let a = n * 137.5;
  let r = c * sqrt(n);

  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;

  fill((a - r) % 360, 360, 360);
  // fill(255);
  noStroke();
  ellipse(x, y, 5, 5);
  n++;
}
