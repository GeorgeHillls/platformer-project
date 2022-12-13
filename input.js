function input() {
  //allows the player to move left and right depending on whether a or d is pressed
  if (inp == true && keyIsDown(68)) {
    p1x = p1x + velocityX * dir;
  } else {
    p1x = p1x;
  }
  if (inp == true && keyIsDown(65)) {
    p1x = p1x - velocityX * dir;
  } else {
    p1x = p1x;
  }
  //if (keyIsDown(87)) {
  //p1y = p1y - 20;
  //} if(keyIsDown(83)){
  //p1y = p1y + 20;
  //}
  if (keyIsDown(32) && jumpCount < 15) {
    //if the player hasnt exceeded the jumpCount and space is pressed, then the player will jump and no scrolling down will happen, may scroll up if the player goes high up the screen enough
    jump = true;
    MoveUp = true;
    Movedown = false;
  } else {
    jump = false;
    Moveup = false;
    MoveDown = true;
  }
}
