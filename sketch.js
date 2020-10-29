var wall,thickness;
var bullet,speed,weight;

function setup(){

  //To create canvas
  createCanvas(1600,400);

  //To add random value to thickness
  thickness = random(22,83);

  //To create bullet as a sprite
  bullet = createSprite(50,200,20,20);

  //To add colour to bullet
  bullet.shapeColor = "white";

  //To craete wall as a sprite
  wall = createSprite(1200,200,thickness,height/2);

  //To add colour to wall
  wall.shapeColor = color(80,80,80);

  //To give random value to speed 
  speed = random(223,321);

  //To give random value to weight
  weight = random(30,52);

}

function draw(){

  //To add background
  background(0,0,0);

  //To give speed to bullet
  bullet.velocityX = speed;

  if(hascollided(bullet,wall)){
  
  //To stop bullet when it touches wall
  bullet.velocityX = 0;

  //To measure the damage
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  //To change the colour of the wall when damage is greater then 10
  if(damage > 10){

    //Change the colour of wall
    wall.changeColor ="green";

  }

  //To chnage the colour of wall when damage is less then 10
  if(damge < 10){

    //Change the colour of wall
    wall.changeColor = "red";
    
  }
  }
  //To display everything
  drawSprites();

}

function hascollided(lbullet , lwall){


  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  //To return bullet
  if(bulletRightEdge>=wallLeftEdge){

    return true
  }

  return false;
  
}