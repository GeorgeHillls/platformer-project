//middle of screen x pos and y pos
var MidX;
var MidY;

//variable for the input
var inp = true;

//player width and height, x and y positions
var pW;
var pH;
var p1x;
var p1y;

//boxes (platforms) , x = x pos, y = y pos, w = width, h = height
var b1x;
var b1y;
var bW;
var bH;

//score by default is 0
let score = 0;

let currentTime;

//scrolling variables
let MoveUp;
let MoveDown;
let scroll = 0;
var botscreen; //bottom of the screen

//velocity of player
var velocityX = 4;
var velocityY = 4;
var fallspeed = 4; // copy of velocityY basically

//jumping variables
var jumpCount = 0;
var jumpPower = 15;
var jump = false;

//direction of player, 1 is down
var dir = 1;

//minimum height the player can go (technically the max as the further down, the y position increases)
var MinHeight;

//random seed
let rs;

//variable to set how many times the windowheight should be multiplied by
let k1 = 1;
let k2 = 1;
let k3 = 1;

var TotalScore;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //for the scrolling of the screen
  MoveUp = false;
  MoveDown = false;

  rectMode(CORNER); //rectangles drawn from the top left corner
  textAlign(CENTER); //text drawn from the centre

  MidX = windowWidth / 2; //middle of the screen, X pos
  MidY = windowHeight / 2; //middle of the screen, Y pos

  //player x and y for spawning
  p1x = MidX;
  p1y = MidY;

  //player width and height
  pW = 15;
  pH = 15;

  //platform x, y, width and height
  b1x = windowWidth / 2.5;
  b1y = windowHeight * 0.7;
  bW = windowWidth / 5;
  bH = windowHeight / 20;

  //min player can go
  MinHeight = Math.ceil(windowHeight - windowHeight / 6 - 16);

  //initial 3 platform values
  SpawnPosY1 = random(300, 400);
  SpawnPosX1 = random(0, windowWidth);
  PlatWidth1 = random(50, 400);
  SpawnPosY2 = random(0, 150);
  SpawnPosX2 = random(0, windowWidth);
  PlatWidth2 = random(50, 400);
  SpawnPosY3 = random(-200, -100);
  SpawnPosX3 = random(0, windowWidth);
  PlatWidth3 = random(50, 400);

  //random seeds
  rs1 = random(0, windowWidth);
  rs2 = random(0, windowWidth);
  rs3 = random(0, windowWidth);
}

function draw() {
  currentTime = int(millis() / 1000); // time elapsed in seconds since setup function       started

  background(135, 206, 205);
  translate(0, scroll); //moves the background depending on the scroll value
  game();
  input();
  gravity();
  collision();

  CheckPlat1(SpawnPosY1);
  CheckPlat2(SpawnPosY2);
  CheckPlat3(SpawnPosY3);
  //CheckPlat1(SpawnPosY1 - (k1*windowHeight));
  //CheckPlat2(SpawnPosY2 - (k2*windowHeight));
  //CheckPlat3(SpawnPosY3 - (k3*windowHeight));

  SpawnPlatform();

  botscreen = windowHeight - scroll; //bottom of the screen no matter the amount of scrolling that has happened

  //when player is going down
  if (MoveDown) {
    if (p1y >= botscreen) {
      death();
      TotalScore = score;
    }
  }

  //when player is moving up
  if (MoveUp) {
    if (p1y < 0.65 * height && velocityY < 0) {
      scroll += 15;
    }
  }

  textSize(24);
  text("TIME: " + currentTime, 90, botscreen - 50);
  text("SCORE: " + score, 90, botscreen - 20);
}

//function CheckPlat(SpawnPosY){
//if(SpawnPosY > botscreen + 20){
//SpawnPosY = SpawnPosY - (windowHeight)
//PlatVals();
//drawPlatform(plat, SpawnPosX, SpawnPosY, PlatWidth, 20)
//}
//}

//checks the first platforms y position to see if it has gone below the bottom of the screen and then generates a new platform and increments k1
function CheckPlat1(SpawnPosY1) {
  if (SpawnPosY1 > botscreen + 20) {
    SpawnPosY1 = SpawnPosY1 - windowHeight;
    PlatVals1();
    drawPlatform("plat1", SpawnPosX1, SpawnPosY1, PlatWidth1, 20);
    k1++;
  }
}

//checks the second platforms y position to see if it has gone below the bottom of the screen and then generates a new platform and increments k2
function CheckPlat2(SpawnPosY2) {
  if (SpawnPosY2 > botscreen + 20) {
    SpawnPosY2 = SpawnPosY2 - windowHeight;
    PlatVals2();
    drawPlatform("plat2", SpawnPosX2, SpawnPosY2, PlatWidth2, 20);
    k2++;
  }
}

//checks the third platforms y position to see if it has gone below the bottom of the screen and then generates a new platform and increments k3
function CheckPlat3(SpawnPosY3) {
  if (SpawnPosY3 > botscreen + 20) {
    SpawnPosY3 = SpawnPosY3 - windowHeight;
    PlatVals3();
    drawPlatform("plat3", SpawnPosX3, SpawnPosY3, PlatWidth3, 20);
    k3++;
  }
}

//three functions to generate values for each of the platforms when they need to spawn new platforms
function PlatVals1() {
  randomSeed(rs1);
  SpawnPosX1 = random(0, windowWidth);
  PlatWidth1 = random(50, 200);
}
function PlatVals2() {
  randomSeed(rs2);
  SpawnPosX2 = random(0, windowWidth);
  PlatWidth2 = random(50, 200);
}
function PlatVals3() {
  randomSeed(rs3);
  SpawnPosX3 = random(0, windowWidth);
  PlatWidth3 = random(50, 200);
}

//function to draw platforms using given variables, also then displays it and allows collision
function drawPlatform(name, x, y, wid, hei) {
  name = new Platform(x, y, wid, hei);
  name.display();
  name.collision();
}

//function to spawn the platforms in, always running in draw()
function SpawnPlatform() {
  drawPlatform("plat1", SpawnPosX1, SpawnPosY1, PlatWidth1, 20);
  drawPlatform("plat2", SpawnPosX2, SpawnPosY2, PlatWidth2, 20);
  drawPlatform("plat3", SpawnPosX3, SpawnPosY3, PlatWidth3, 20);
}

//x is x position, y is y position, wid is width, hei is height
class Platform {
  constructor(x, y, wid, hei) {
    this.x = x;
    this.y = y;
    this.w = wid;
    this.h = hei;
  }
  display() {
    stroke(0);
    strokeWeight(2);
    fill(255, 125, 50);
    rect(this.x, this.y, this.w, this.h);
  }
  collision() {
    //collision detection for top of platform
    if (
      p1x >= this.x &&
      p1x <= this.x + this.w &&
      p1y >= this.y - this.h + 2 &&
      p1y <= this.y + this.h / 2 &&
      jump == false
    ) {
      //console.log("hit")
      p1y = p1y; //prevent falling through platform
      velocityY = 0; //no velocity as on platform
      jumpCount = 0;
      score++;
    }
  }
}
