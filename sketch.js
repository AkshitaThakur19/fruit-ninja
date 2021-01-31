var PLAY=0
var END=1
var gamestate=0; 

var gameover,gameover1;

var sword,sw;
var score=0;
var fruit,fruit1,fruit2,fruit3,fruit4;
var alien ,alien1,alien2;


function preload(){
  
  sw=loadImage("sword.png")
  fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png")
  alien1=loadImage("alien1.png")
  alien2=loadImage("alien2.png")
  gameover1=loadImage("gameover.png")
}

function setup(){
  createCanvas(400,400);
 fruitGroup=new Group();
  alienGroup=new Group();
  
 sword = createSprite(200,200,200,200) 
  sword.addImage(sw)
  sword.scale=0.5
 
  gameover=createSprite(200,200);
  gameover.addImage(gameover1);
  
   sword.debug=false
}

function  draw(){
  background(66,188,240);
  
  
  text("Score: "+score,330,20)
 
     sword.x=World.mouseX
   sword.y=World.mouseY
    
    if(gamestate===PLAY){
      spawnalien();
  spawnfruit();
       
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+1;}
 
  
    if(alienGroup.isTouching(sword)){
      gamestate=END;}
  gameover.visible=false;
    
    }
    
 if(gamestate===END){
   score=0;
   gameover.visible=true;
   text("CLICK 'SPACE' TO RESTART",130,240);
   
   if(keyDown("space")){
     gamestate=PLAY 
   }
   
   
 }
  
  
  
  
  
  
  
  
  
 
  
   drawSprites();
}

function spawnfruit(){
  if(frameCount% 80 === 0){
  fruit=createSprite(340,200)
  
  var r=Math.round(random(1,4));
  switch(r){
    case 1:fruit.addImage(fruit1);
      break
     case 2:fruit.addImage(fruit2);
      break 
      case 3:fruit.addImage(fruit3);
      break
      case 4:fruit.addImage(fruit4);
      break
   
  }
      fruit.scale=0.2;
      fruit.y=Math.round(random(50,340))
      fruit.velocityX=-2
      
      fruit.lifetime=100;
      
      fruitGroup.add(fruit);
      }
  
}
function spawnalien(){
  if(frameCount% 300 === 0){
  alien=createSprite(340,200)
  
  var ra=Math.round(random(1,2));
  switch(ra){
    case 1:alien.addImage(alien2);
      break
     case 2:alien.addImage(alien1);
      break;
   
  }
      alien.scale=1;
      alien.y=Math.round(random(50,340))
      alien.velocityX=-2
      
      alien.lifetime=100;
      
      alienGroup.add(alien);
      }
  
}




