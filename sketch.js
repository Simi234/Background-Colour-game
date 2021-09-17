var Box;
function setup() {
  createCanvas(400,400);
  
  Box = createSprite(200,200,30,50);
  Box.shapeColor="red"
}

function draw() 
{
  background("white");
if (keyDown("right")){
  Box.x = Box.x+4;
  background("black");
}
if (keyDown("left")){
  Box.x = Box.x-4;
  background("lightblue");
}
if (keyDown("up")){
  Box.y = Box.y-4;
  background("green");
}
if (keyDown("down")){
  Box.y = Box.y+4;
  background("yellow");
}
drawSprites();
}




