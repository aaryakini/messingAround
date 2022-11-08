let img;
let scale = 1.5;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = createCanvas(window.innerWidth, 600);
  canvas.parent('animate');
  background("white");
  imageMode(CENTER);
  image(img, width, height, scale*img.width, scale*img.height);
}

function draw() {
   if (mouseIsPressed === true){
      imageMode(CENTER);
      image(img, mouseX, mouseY, scale*img.width, scale*img.height);
   }
}