//make all the variables that you require
var canvas
var sea, boat, man, manimage, boatimage, seaimage

function preload(){
  manimage = loadAnimation("Images/Fishing man 1.png","Images/Fishing Man 2.png")
  boatimage = loadImage("Images/Submarine 1.png")
  seaimage = loadImage("Images/Sea.jpg")
}



function setup() {
  canvas = createCanvas(1000, 800);
  sea = createSprite(400, 500, 20, 20);
  sea.velocityX = -4
  sea.x = sea.width / 2;
  sea.scale = 2.5
  sea.addImage(seaimage)
  boat = createSprite(83, 485, 100, 50);
  man = createSprite(88, 455, 50, 40);
  man.addAnimation("Fishing",manimage);
  boat.addImage(boatimage);
  boat.scale = 2
}

function draw() {
  background(255, 255, 255);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  sea.velocityX = -4
  if (sea.x < 600) {
    sea.x = sea.width / 2
    
    
  }
  spawnClouds();
  spawnBirds();
  spawnFish();
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 200 === 0) {
    var clouds = createSprite(957, 98, 30, 30)
    clouds.y = Math.round(random(80, 300))
    clouds.velocityX = -3;
  }
}
//make function spawnbirds
function spawnBirds() {
  if (frameCount % 250 === 0) {
    var birds = createSprite(957, 168, 15, 20)
    birds.y = Math.round(random(190, 245))
    birds.velocityX = -5;
  }
}
//make function spawnFish
function spawnFish() {
  if(frameCount % 150 === 0){
    var fish = createSprite(898,674,40,40)
    fish.y = Math.round(random(890,728))
    fish.velocityX = -4.5;
  }
}
