let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

// function setup() {
 
// }

function draw() {
  let canvas = document.getElementById("hacked");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (mouseIsPressed) {
    image(img,mouseX,mouseY,560,350);
  }
}