var wall,deformation;
var car;
var speed,weight;
var deformation;



function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "orange";
  wall = createSprite(1550,200,60,200);
  wall.shapeColor = "white";
  //wall.visible = false;
}

function draw() {
  background(0,0,0);  
  car.depth = wall.depth + 1;
  car.velocityX = speed;
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22500;
    if(100 > deformation){
      car.shapeColor = color(0,255,0);
    }
    if(100 < deformation && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
  }
  /*if(car.velocityX = 0 && deformation < 100){
    car.shapeColor(0,255,0);
  }
  if(car.velocityX = 0 && 100 < deformation < 180){
    car.shapeColor(230,230,0);
  }
  if(car.velocityX = 0 && deformation > 180){
    car.shapeColor(255,255,0);
  }
  */
  
  console.log(deformation);
  drawSprites();
}