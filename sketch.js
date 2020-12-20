var car,wall; 

var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(253,291)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,10);

  bullet.velocityX=speed;
 bullet.shapeColor=color(255);


wall = createSprite(1500,200,thickness,height/2)
wall.shapeColor=color(80,80,80)


}




function draw() {
  background("grey");  
  
  if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * waight * speed * speed/(thickness*thickness*thickness);


if (damage>10)
{

  wall.shapeColor=color(255,0,0)

}

if (damage<10)
{

wall.shapeColor=color(0,255,0)
  
}


}

drawSprites();
}

function hasCollided(lbullet,lwall) {

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){

return true

}


}
