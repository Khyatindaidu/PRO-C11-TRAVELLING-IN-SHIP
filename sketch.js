var ship, ship_sailing;
var sea, seaImage
function preload(){
 ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
 seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
edges = createEdgeSprites()



sea = createSprite(300,180,600,10)
sea.addImage("seawater", seaImage)
sea.scale = 0.2
sea.velocityX = -5
ship = createSprite(90,160,20,50)
ship.addAnimation("sailing", ship_sailing)
ship.scale = 0.3
}

function draw() {
  background("blue");
console.log
  if (sea.x <0 ){
    sea.x = sea.width/12
    }
  drawSprites();
}