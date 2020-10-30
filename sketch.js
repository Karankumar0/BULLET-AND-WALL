var wall;
var bullet,speed,weight;



function setup() {

 createCanvas(1600,400);
 wall = createSprite(1500,200,60,height/2);
 bullet = createSprite(50,200,50,10);
 
 bullet.shapeColor = color(255);
 
 wall.shapeColor=color(80,80,80);
  carSpeed();
}

function draw() {
  
  background(0);
  if (wall.x-bullet.x > (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed*speed/22509;
    if (deformation>180){
      wall.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      wall.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      wall.shapeColor=color(0,250,0);
    }

  }
  drawSprites();
}
function carSpeed(){
   speed=Math.round(random(55,90));
   weight=Math.round(random(400,1500));
 
   bullet.velocityX = speed ;
}