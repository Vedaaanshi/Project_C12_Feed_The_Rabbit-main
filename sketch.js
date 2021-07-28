var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeLeaf, orangeLeafImg;
var select

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);

  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x=World.mouseX;
 
  if(frameCount % 80 === 0){
    var rand = Math.round(random(1,2));
    console.log(rand);  
    if(rand === 1){
      createApples();
    }
    else{
     createLeaves();
    }
  }//end outer if

}//end draw

function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.scale =.05;
  apple.addImage(appleImg);
  apple.velocityY = 5;
  apple.lifetime = 50;
}
function createLeaves() {
  orangeLeaf = createSprite(random(70,350),50,10,20);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = .06;
  orangeLeaf.velocityY = 5;
  orangeLeaf.lifetime = 50;

}

