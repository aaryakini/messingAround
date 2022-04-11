let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = document.getElementById("hacked");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (mouseIsPressed) {
    pen()
  }
}

// function draw() {
//   if (mouseIsPressed) {
//     pen()
//   }
// }

function pen() {
 image(img,mouseX,mouseY,560,350);
}