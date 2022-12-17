var bg,bgimg
var man, manimg
var ground
var monster, monsterimg
var plank, plankimg

function preload(){
 bgimg = loadAnimation('background.gif')
 manimg = loadAnimation('man1.gif')
 monsterimg = loadAnimation('monster.gif')
 plankimg = loadImage('plank.png')
}

function setup(){
 createCanvas(windowWidth,windowHeight)

 bg = createSprite(windowWidth/2 - 7, windowHeight/2, windowWidth, windowHeight)
 bg.addAnimation('moving',bgimg)
 bg.scale = 1.085

 man = createSprite(windowWidth/5 + 120, windowHeight/5 +380)
 man.addAnimation('running',manimg)
 man.scale = 0.75

 monster = createSprite(windowWidth/5 -190,windowHeight/5 +430)
 monster.addAnimation('running1',monsterimg)
 monster.scale = 0.4

 ground = createSprite(windowWidth/2 - 7,  windowHeight/5 +570, windowWidth, 10)
}

function draw(){
 background(0)

 

 if(keyDown("space") && man.y>windowWidth/3) {
  man.velocityY = -22;
  setTimeout(follow, 1000);
 }
 man.velocityY = man.velocityY + 0.8
 man.collide(ground)

 monster.velocityY = monster.velocityY + 0.8
 monster.collide(ground)

 if (frameCount%150 === 0){
    createPlanks()
 }

 drawSprites()

 fill('white')
 text("X "+mouseX+","+"Y "+mouseY,mouseX,mouseY);
}

function follow() {
 monster.velocityY = -22
}

function createPlanks (){
 plank = createSprite(windowWidth, random(363,447))
 plank.velocityX = -7.5
 plank.addImage('plank',plankimg)
 plank.scale = 0.3
 
}
