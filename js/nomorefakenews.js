let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = document.getElementById("hacked");
  let ctx = canvas.getContext("2D");
}

function draw(ctx) {
  if (mouseIsPressed) {
    ctx.pen()
  }
}

function pen() {
 image(img,mouseX,mouseY,560,350);
}