//creating variables for monkey, ground, banana, stone, score, time and for food and stonE group
  var monkey , monkey_running;

  var ground;

  var banana ,bananaImage;

  var stone, stoneImage;

  var FoodGroup,stoneGroup;

  var score = 0;

  var survivalTime = 0;

 function preload(){
//loading mage of stone, banana, and monkey
   monkey_running = loadAnimation               ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   
  bananaImage = loadImage("banana.png");
   
  stoneImage = loadImage("obstacle.png");
 
 }

 function setup() {
//creating canvas
   createCanvas(400,400);

//creating monkey and giviNg it animation and size
  monkey = createSprite(50,297,10,10);
  monkey.addAnimation("moving",monkey_running); 
  monkey.scale = 0.15;
  
//creating ground and making the ground infinite
  ground = createSprite(400,350,800,10);
  ground.shapeColor = "peru"
  ground.x = ground.width/2;
 }


 function draw() {
//giving colour to the canvas
  background("orange");

//giving ground velocity
  ground.velocityX = -5;
  
//if space key is pressed monkey wil jump
  if(keyDown("space")&&(monkey.y>297)) {
     monkey.velocityY = -15;
   } 

//making ground infinite 
   if(ground.x < 0){
     ground.x = ground.width/2;
   } 

//giving gravity to the monkey   
  monkey.velocityY = monkey.velocityY + 0.8;
 
//colLiding monkey with the ground   
  monkey.collide(ground);
 
//creating group   
  foodGroup = createGroup();
  stoneGroup = createGroup();
  
//giving text for score
  stroke("white")
  textSize(20)
  fill("white")
  text("Score = "+ score,50,40)

//giving text for surviving time
  stroke("black")
  textSize(20)
  fill("black")
  text(" SurvivalTime: "+ survivalTime,200,40)
 
   if(frameCount % 40 === 0){
     survivalTime = survivalTime+1;
   }
 
//giving text for instruction
  stroke("red")
  textSize(25)
  fill("purple")
  text("help monkey to eat bananas ",30,380)
  
//giving instruction to sprits to draw 
  drawSprites();
 
//giving instructon for creating new function
  fruit();
  rock();
   
 }

 function fruit(){
//giving instruction for add image, velocity, lifetime, spawning them randomly and adding banana in food group
  if(frameCount % 80 === 0){
    banana = createSprite(400,200,20,20);
    banana.addImage("ty",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 80  ;
    banana.y = Math.round(random(120,200));
    foodGroup.add(banana);
  }
 }

 function rock(){
//giving instruction for add image, velocity, lifetime, spawning them randomly and adding stone in stone group
  if(frameCount % 300 === 0) {
    var stone = createSprite(400,315,20,20);
    stone.addImage("hu",stoneImage);  
    stone.scale = 0.175; 
    stone.velocityX = -7;
    stone.lifetime = 90;
    stoneGroup.add(stone);
  }
 }

//DONE
//HAPPY CODING:)