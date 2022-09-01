var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.8;
  
   score = 0  
}

function draw() {
 background(0);
  // mover el suelo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover arco
  bow.y = World.mouseY
    
  drawSprites();

  spawnBallons();

}

function spawnBallons(){
  var ballon
  if (frameCount %60 === 0 ) {
   ballon=createSprite(600,165,10,40);
   ballon.velocityX=6;
   ballon.scale=0.5;
   ballon.x = 0;
   ballon.y=Math.round(random(1,400));
   ballon.depth = bow.depth;
   bow.depth = bow.depth + 1;
   
   
   var rand =  Math.round(random(1,4))

   switch(rand){

  case 1: ballon.addImage(red_balloonImage); 
  break;

  case 2: ballon.addImage(green_balloonImage); 
  break;

  case 3: ballon.addImage(pink_balloonImage); 
  break;

  case 4: ballon.addImage(blue_balloonImage); 
  break;
  default:break; 

   }
  
ballon.lifetime=100;

if (ballon.collide(bow)){

ballon.destroy();

}

}

}
















