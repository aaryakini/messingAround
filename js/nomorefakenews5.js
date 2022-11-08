let img;
let scale = 0.2;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = createCanvas(window.innerWidth, 600);
  canvas.parent('animate');
  background("white");
  imageMode(CENTER);
  image(img, 0.5*width, 0.5*height, scale*img.width, scale*img.height);
}

function draw() {
   if (mouseIsPressed === true){
      imageMode(CENTER);
      image(img, 0.5*mouseX, 0.5*mouseY, scale*img.width, scale*img.height);
   }
}