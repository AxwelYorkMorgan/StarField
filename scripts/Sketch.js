let stars = [];
let starNumber = 400;
let speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < starNumber; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0, 200);
  translate(width / 2, height / 2);

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}