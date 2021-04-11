var car ; 
var wall ;
var speed ;
var weight ;
var thickness;
var deformation ;
function setup() {
  createCanvas(1600,400);
  
  weight = random(30,52)
  speed = random(223,321)
  thickness = random(23,80)
  bullet = createSprite(50,200,20,5)
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = rgb(80,80,80)
  
}

function draw() {
  background("pink");  
  drawSprites();
  bullet.velocityX = speed;
  deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
 bullet.velocityX = 0;
 if(deformation>10){
   bullet.shapeColor = "red"
 }
 if(deformation<10){
  bullet.shapeColor = "green"
}

 drawSprites();
  }






 
  
  
}