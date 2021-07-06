var Ghost1Img,Ghost2Img,Ghost3Img,PacmanImg; 
var Ghost1,Ghost2,Ghost3,Pacman;
var coinGroup; 
var maze,powerpallet;
var score=0;
var edges;
var life = 3;
var PLAY=1;
var END=0;
var gameState=PLAY;
var chomp;

function preload(){
  Ghost1Img=loadImage("Images/ghost1.png");
  Ghost2Img=loadImage("Images/ghost2.png");
  Ghost3Img=loadImage("Images/ghost3.png");
  PacmanImg=loadImage("Images/pac2.png ");
  coinImg=loadImage("Images/coin1.png");
  powerImg=loadImage("Images/power1.png");
  chomp=loadSound("pacman_chomp.wav");
}



function setup() {
  createCanvas(500,600);
  maze=createGroup();
  powerpallet=createGroup();
  maze.add(createSprite(40,90,8,150));
  maze.add(createSprite(247,20,420,10));
  maze.add(createSprite(453,90,8,150));
  maze.add(createSprite(246,60,8,75));
  maze.add(createSprite(86,170,100,10));
  maze.add(createSprite(131,215,10,80));
  maze.add(createSprite(86,260,100,10));
  maze.add(createSprite(407,170,100,10));
  maze.add(createSprite(357,210,10,90));
  maze.add(createSprite(402,260,100,10));
  maze.add(createSprite(86,303,100,10));
  maze.add(createSprite(134,343,10,90));
  maze.add(createSprite(86.5,388,105,10));
  maze.add(createSprite(38,468,8,170));
  maze.add(createSprite(241.5,555,415,10));
  maze.add(createSprite(450,479,8,163));
  maze.add(createSprite(401.5,397,105,10));
  maze.add(createSprite(350,357,10,90));
  maze.add(createSprite(400,314,110,10));
  maze.add(createSprite(164,201,8,130));
  maze.add(createSprite(190,200,50,10));
  maze.add(createSprite(323,201,8,130));
  maze.add(createSprite(297,201,50,10));
  maze.add(createSprite(244,183,8,45));
  maze.add(createSprite(320,355,10,95));
  maze.add(createSprite(164,348,10,95));
  
  maze.add(createSprite(128,426,45,8));
  
  maze.add(createSprite(147,445.5,8,45));
  
  maze.add(createSprite(57,472,45,8));
  
  maze.add(createSprite(75.8 ,483,8,25));
  
  maze.add(createSprite(57,495,45,8));
  
  maze.add(createSprite(190,491,8,50));
  
  maze.add(createSprite(160,520,110,10));
  
  maze.add(createSprite(198,425,35,8));
  
  maze.add(createSprite(301,425,35,8));
 
  maze.add(createSprite(387,425,45,8));
  
  maze.add(createSprite(366.5,444,8,45));
  
  maze.add(createSprite(425,480,45,8));
 
  maze.add(createSprite(406 ,489,8,25));
 
  maze.add(createSprite(426,498,45,8));
 
  maze.add(createSprite(330,491,8,50));
  
  maze.add(createSprite(345,520,110,10));
  
  maze.add(createSprite(254,502,8,45));
  
  maze.add(createSprite(100,60,60,25));

  maze.add(createSprite(190,60,60,25));
 
  maze.add(createSprite(350,110,100,20));
  
  maze.add(createSprite(320,60,60,25));

  maze.add(createSprite(140,110,100,20));
  
  maze.add(createSprite(245,250,100,20));
 
  maze.add(createSprite(245,370,100,20));

  maze.add(createSprite(450,290,10,55));

  maze.add(createSprite(40,280,10,45));

  maze.setColorEach(rgb(72,146,255));

  power1=createSprite(64,122,15,15);
  power1.shapeColor="pink";
  power2=createSprite(428,100,15,15);
  power2.shapeColor="pink";
  power3=createSprite(60,522,15,15);
  power3.shapeColor="pink";
  power4=createSprite(63,420,15,15);
  power4.shapeColor="pink";

  
  Ghost1=createSprite(200,220,20,20)
  Ghost1.addImage(Ghost1Img);
  Ghost1.scale=0.08;
  Ghost2=createSprite(230,220,20,20)
  Ghost2.addImage(Ghost2Img);
  Ghost2.scale=0.08;
  Ghost3=createSprite(260,220,20,20)
  Ghost3.addImage(Ghost3Img);
  Ghost3.scale=0.08;

  Pacman=createSprite(60,35,20,20)
  Pacman.addImage(PacmanImg);
  Pacman.scale=0.05;

  Ghost1.velocityY=5;
  Ghost1.veocityX=0;
  Ghost2.velocityY=5;
  Ghost2.veocityX=0;
  Ghost3.velocityY=5;
  Ghost3.veocityX=0;
  
  coinGroup=createGroup();
  centre=createSprite(236,290,90,35)
  centre.shapeColor="black";
  centre1=createSprite(400,210,60,50)
  centre1.shapeColor="black"
  centre2=createSprite(401,352,60,50)
  centre2.shapeColor="black"
  centre3=createSprite(84,341,60,60)
  centre3.shapeColor="black"
  centre4=createSprite(76,212,60,50)
  centre4.shapeColor="black"

  edges=createEdgeSprites();
  for(var i=100;i<=445;i+=25){
    for(var j=33;j<=565;j+=20){
      var coin=createSprite(i,j,5,5);
      coin.shapeColor="yellow";

      coin.addImage(coinImg);
     coin.scale=0.3;

      if(coin.overlap(centre)||
      coin.overlap(centre1)||
      coin.overlap(centre2)||
      coin.overlap(centre3)||
      coin.overlap(centre4)||
       coin.overlap(maze)||
       coin.overlap(Ghost1)||
       coin.overlap(Ghost2)||
       coin.overlap(Ghost3)||
       coin.overlap(power1)||
       coin.overlap(power2)||
       coin.overlap(power3)||
       coin.overlap(power4)){
      coin.visible=false;
    }
    else{coinGroup.add(coin)}
  }
  }

   }


function draw() {
  background("black");  
  drawSprites();
   text(mouseX + " " + mouseY,233,347);
 
 
  textSize(25);
  text("Score:" +score,314,586);

  textSize(25);
  text("Life:" +life,200,586);



  if (gameState=== PLAY)
  {
    pacMovement();
    coinCollection();
    powerCollection();
    ghostControls();
    if (Ghost1.collide(Pacman)  && life<6 ||
    Ghost2.collide(Pacman)  && life<6||
    Ghost3.collide(Pacman) && life<6)
    {
      life=life-1;
      Pacman.x=60;
      Pacman.y=35;

    }
    if (life>=6){
      if(Pacman.isTouching(Ghost1))
      {
        Ghost1.destroy();
      }
      if(Pacman.isTouching(Ghost2))
      {
        Ghost2.destroy();
      }
     if(Pacman.isTouching(Ghost3))
      {
       Ghost3.destroy();
      }
    }
    if(life<=0){
      gameState=END
    }
  }

  if (gameState=== END)
  {
    text("Game Over",200,280)
  }

}

   
function pacMovement(){
  if(keyDown("up")){
    Pacman.y-=6;
    Pacman.rotation=-90;
  }


  
  if(keyDown("down")){
    Pacman.y+=6;
    Pacman.rotation=90;
  }

    
  if(keyDown("left")){
    Pacman.x-=6;
    Pacman.rotation=180;
  }
    
  if(keyDown("right")){
    Pacman.x+=6;
    Pacman.rotation=0;
  }
  Pacman.bounceOff(maze);
}
function coinCollection(){
  for (var c = 0 ; c<coinGroup.length ; c++){
    if (Pacman.isTouching(coinGroup.get(c))){
      coinGroup.get(c).destroy();
      score=score+10;
      chomp.play();
    }
  
  }
  }

  function powerCollection(){
    if (Pacman.isTouching(power1)){
      
      power1.destroy();
      score=score+50;
         
      life=life+1;
    }
    if (Pacman.isTouching(power2)){
      
      power2.destroy();
      score=score+50;
      life=life+1;
    }
    if (Pacman.isTouching(power3)){
      
      power3.destroy();
      score=score+50;
      life=life+1;
    }
    if (Pacman.isTouching(power4)){
      
      power4.destroy();
      score=score+50;
      life=life+1;
    }
  }

  function ghostControls()
{
  Ghost1.bounce(Ghost2);
  Ghost1.bounce(Ghost3);
  Ghost2.bounce(Ghost3);
   r=Math.round(random(1,2));
  
  if(Ghost1.velocityX === 0 && Ghost1.collide(maze) )
  {
    if(r===1)
    {
     Ghost1.velocityX=5;
     Ghost1.velocityY=0;
    }
    else
    {
      Ghost1.velocityX=-5
      Ghost1.velocityY=0;
    }
    Ghost1.velocityY=0;
  }
  
   if(Ghost1.velocityY===0 && Ghost1.collide(maze) )
  {
    if(r===1)
    {
     Ghost1.velocityY=5;
     Ghost1.velocityX=0;
    }
    else
    {
      Ghost1.velocityY=-5;
      Ghost1.velocityX=0;
    }
   Ghost1.velocityX=0; 
  }
   
  if(Ghost2.velocityX === 0 && Ghost2.collide(maze) )
  {
    if(r===1)
    {
     Ghost2.velocityX=5;
     Ghost2.velocityY=0;
    }
    else
    {
      Ghost2.velocityX=-5
      Ghost2.velocityY=0;
    }
    Ghost2.velocityY=0;
  }
  
   if(Ghost2.velocityY===0 && Ghost2.collide(maze) )
  {
    if(r===1)
    {
     Ghost2.velocityY=5;
     Ghost2.velocityX=0;
    }
    else
    {
      Ghost2.velocityY=-5;
      Ghost2.velocityX=0;
    }
   Ghost2.velocityX=0; 
  }

   
  if(Ghost3.velocityX === 0 && Ghost3.collide(maze) )
  {
    if(r===1)
    {
     Ghost3.velocityX=5;
     Ghost3.velocityY=0;
    }
    else
    {
      Ghost3.velocityX=-5;
      Ghost3.velocityY=0;
    }
    Ghost3.velocityY=0;
  }
  
   if(Ghost3.velocityY===0 && Ghost3.collide(maze) )
  {
    if(r===1)
    {
     Ghost3.velocityY=5;
     Ghost3.velocityX=0;
    }
    else
    {
      Ghost3.velocityY=-5;
      Ghost3.velocityX=0;
    }
   Ghost3.velocityX=0; 

  }
  Ghost1.bounceOff(maze);
   Ghost2.bounceOff(maze);
   Ghost3.bounceOff(maze);
   Ghost1.bounceOff(edges);
   Ghost2.bounceOff(edges);
   Ghost3.bounceOff(edges);

}





