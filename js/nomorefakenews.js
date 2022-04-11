let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = document.getElementById("hacked");
}

function draw() {
  if (mouseIsPressed) {
    pen()
  }
}

function pen() {
 image(img,mouseX,mouseY,560,350);
}