let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = document.getElementById("hacked");
  let ctx = canvas.getContext("2D");
  ctx.background("pink");
}

function draw() {
  if (mouseIsPressed) {
    pen()
  }
}

function pen() {
 image(img,mouseX,mouseY,560,350);
}