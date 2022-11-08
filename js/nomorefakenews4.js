let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = createCanvas(window.innerWidth, 600);
  canvas.parent('animate');
  background("white");
  translate(width/2 - img.width/2, height/2 - img.height/2);
  image(img,0,0);
  img.resize(100,100);
}

function draw() {
   if (mouseIsPressed === true){
      translate(-img.width/2, -img.height/2);
      image(img,mouseX,mouseY);
      img.resize(100,100);
   }
}