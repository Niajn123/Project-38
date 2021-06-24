var bow , arrow,  background, redB, pinkB, greenB ,blueB 
var arrowGroup,redBGroup,blueBGroup,greenBGroup,pinkBGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


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
  createCanvas(600, 600);
  
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 2.5
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redBGroup = new Group();
  blueBGroup = new Group();
  greenBGroup = new Group();
  pinkBGroup = new Group ();
  arrowGroup = new Group();
  score = 0  
 
}

function draw() {
  background(255)
  background1.velocityX = -3 
  
  camera.position.x = background1.x
  if(camera.position.x < 0){
    background1.x = background1.width
    }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
   }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  if(arrowGroup.isTouching(redBGroup)){
    redBGroup.destroyEach();
    arrowGroup.destroyEach();
    score  = score+1;
  }
    
  if(arrowGroup.isTouching(blueBGroup)){
    blueBGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
    
  }
  
  if(arrowGroup.isTouching(greenBGroup)){
    greenBGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
    
  }
  
  if(arrowGroup.isTouching(pinkBGroup)){
    pinkBGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
    
  }
  drawSprites();
  
  textSize(20);
    text("Score: "+ score, 500,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 185;
  red.scale = 0.1;
  redBGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 185;
  blue.scale = 0.1;
  blueBGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 185;
  green.scale = 0.1;
  greenBGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 185;
  pink.scale = 1
  pinkBGroup.add(pink);
}


 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.setCollider("rectangle",0,0,10,10);
  arrow.debug=false;
  arrowGroup.add(arrow);
}
