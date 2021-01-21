var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(700, 200, 100, 100);
}

function draw() {
  background(255,255,255);  
  b.x = World.mouseX;
  b.y = World.mouseY;
  if(b.x-a.x<b.width/2+a.width/2&&a.x-b.x<b.width/2+a.width/2&&
    b.y-a.y<b.height/2+a.height/2&&a.y-b.y<b.height/2+a.height/2){
    b.shapeColor = "red";
    a.shapeColor = "red";
    }
  else{
    b.shapeColor = "purple";
    a.shapeColor = "purple";
  }
  drawSprites();
}