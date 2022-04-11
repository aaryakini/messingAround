let img;

function preload() {
  img = loadImage('assets/images/comp.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  background('#fbf8f3');
  canvas.style.zIndex = "-1";
}

function draw() {
  if (mouseIsPressed) {
    pen()
  }
}

function pen() {
 image(img,mouseX,mouseY);
}


























// let mouseCounter = 0;
// let img;

// let main = document.getElementById("header");
// main.addEventListener('click', start());

// function setup(){
//   frameRate(1);
// }

// function draw() {
//   if(mouseCounter % 2 != 0){
//     image(img,mouseX,mouseY);
//   }
// }

// function mouseClicked(){
//   mouseCounter++;
//   if(mouseCounter % 2 != 0){
//     loop();
//   }
//   else{
//     noLoop();
//   }
// }





























// const fr = 10;

// function setup() {
//   frameRate(fr);
//   let canvas = createCanvas(windowWidth,windowHeight);
//   canvas.center('horizontal');
//   background('red');
// }

// function draw() {
//   if (mouseIsPressed) {
//     stroke(255);
//   } else {
//     stroke(237, 34, 93);
//   }
//   line(mouseX - 66, mouseY, mouseX + 66, mouseY);
//   line(mouseX, mouseY - 66, mouseX, mouseY + 66);
// }
