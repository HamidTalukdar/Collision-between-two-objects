var fixedRect, movingRect;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  game1object = createSprite(100, 100, 50, 50);
  game1object.shapeColor = "green";
  game2object = createSprite(200, 100, 50, 50);
  game2object.shapeColor = "green";
  game3object = createSprite(300, 100, 50, 50);
  game3object.shapeColor = "green";
  game4object = createSprite(400, 100, 50, 50);
  game4object.shapeColor = "green";

  //movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0, 0, 0);
  
  bounceOff();
  if (isTouching(movingRect, game1object)) {
    movingRect.shapeColor = "purple";
    game1object.shapeColor = "purple";
  } else {
    movingRect.shapeColor = "green";
    game1object.shapeColor = "green";
  }
  drawSprites();
}