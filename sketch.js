var gameState = 0;
var Player;
var MidX;
var MidY;
var inp = true;

//player width and height
var pW;
var pH;

//boxes (platforms)
var b1x;
var b1y;
var bW;
var bH;
 
//stuff for gravity
//velocity of player
var velocityX = 4;
var velocityY = 4;
var fallspeed = 4; // copy of velocityY basically

//jumping stuff
var jumpCount = 0;
var jumpPower = 15;
var jump = false;

//direction of player, 1 is down
var dir = 1;
var revdir = -1;

var MinHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //make rectangles from the centre of them and aligns text to centre
  rectMode(CORNER);
  textAlign(CENTER);

  MidX = windowWidth / 2;
  MidY = windowHeight / 2;
  //player x and y
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
}

function draw() {
  if (gameState == 0) {
    game();
    input();
    gravity();
    collision();
  }
}
