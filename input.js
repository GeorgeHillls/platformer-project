function input() {
  if (inp == true && keyIsDown(65)) {
    p1x = p1x - velocityX * dir;
  } else {
    p1x = p1x
  }
  if (inp == true && keyIsDown(68)) {
    p1x = p1x + velocityX * dir;
  } else {
    p1x = p1x
  }
  //if (keyIsDown(87)) {
    //p1y = p1y - 5;
  //} if(keyIsDown(83)){
    //p1y = p1y + 5;
  
  if (keyIsDown(32) && jumpCount < 15) {
    jump = true;
  } else {
    jump = false;
  }
}
