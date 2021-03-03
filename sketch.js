var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200); 

  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  
  monkey.scale = 0.1;
  
  ground = createSprite(200,180,400,20);
  ground.velocityX=-4;
  ground.x = ground.width /2;
   console.log(ground.x)
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  score = 0;
}


function draw() {

    background(180);
  //displaying score
  text("Survival Time: "+ score, 500,50);  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
 }
    
  
  
  
  
  drawSprites();
}






