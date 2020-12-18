var bullet , thickness
var wall
var speed , weight;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background("BLACK"); 
 
  
  bullet.velocityX=speed 
  bullet.depth = wall.depth+1

  if(hasCollided(bullet,wall)){
  
    bullet.speed=0;
    bullet.velocityX=0;
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(deformation>10){
      wall.shapeColor="red"
    }
  
    if(deformation<10){
      wall.shapeColor="green"
    }
  
  
  
  }
  
  
  
  

 
  drawSprites();
}




function hasCollided(bullet,wall ){

bulletRigthEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRigthEdge>=wallLeftEdge){
  return true
}
return false
}