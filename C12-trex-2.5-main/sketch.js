var trex, trex_running, edges;
var groundImage;
var invisibleground;
var cloud;
var cloudImage;

var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200,180,400,20);
  ground.addAnimation("ground", groundImage);
}



function draw(){
  //establecer color de fondo.
  background("black");

  
  ground.velocityX = -2;
  invisibleground = createSprite(200,190,400,20);
  invisibleground.visible = false;
  if(ground.x<0){
    ground.x = ground.width/2;



  }
  //cargar la posición Y del Trex
  
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&&trex.y>=100){
    trex.velocityY = -10;

  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(invisibleground)

  spawnClouds();
  drawSprites();


}
function spawnClouds(){
  if(frameCount %60 == 0){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.scale = 0.4;
    cloud.y = Math.round(random(10,60));
    cloud.velocityX = -3;

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    console.log(trex.depth);
    console.log(cloud.depth);
  
  }

}




