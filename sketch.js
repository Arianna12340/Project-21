var bullet, wall;
var speed,weight;

function setup() {
  
  wall = createCanvas(1500,200,60,height/2);
  bullet = createSprite(50, 200, 50, 50);
  speed=random(223,321);
  weight-random(30,52);

 
  wall.shapeColor(80,80,80);

speed=random(55,90);
weight=random(40,1500)

bullet.velocityX = speed;

}

var wall, thickness;
var bullet, speed, weight;

wall = createSprites(1200, 200, thickness, height/2);

function draw() {
  background(255,255,255);  
  drawSprites();
  thickness=random(22,83)
}