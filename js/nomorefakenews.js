let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  const canvas = document.getElementById("hacked");
  const ctx = canvas.getContext('2d')
}

function draw() {
  if (mouseIsPressed) {
    pen()
  }
}

function pen() {
 image(img,mouseX,mouseY,400);
}