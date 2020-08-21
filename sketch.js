var fixrect;
var moverect;
function setup() {
  createCanvas(800,400);
  fixrect = createSprite(100,200,100,50);
  moverect = createSprite(300,200,50,100);
  fixrect.shapeColor  = "green";
  moverect.shapeColor  = "green";
}

function draw() {
  background(255,255,255);  
  if( fixrect.width/2+moverect.width/2>fixrect.x-moverect.x&&
    fixrect.width/2+moverect.width/2>moverect.x-fixrect.x &&fixrect.height/2+moverect.height/2>fixrect.y-moverect.y&&
    fixrect.height/2+moverect.height/2>moverect.y-fixrect.y){
    fixrect.shapeColor  = "red";
    moverect.shapeColor  = "red";
  }
  else{
    fixrect.shapeColor  = "green";
    moverect.shapeColor  = "green";
  }
  moverect.y = mouseY;
  moverect.x = mouseX;
  drawSprites();
}