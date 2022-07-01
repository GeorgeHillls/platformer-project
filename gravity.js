function gravity() {
  input();

  if (p1y >= MinHeight && jump == false) {
    p1y = p1y;
    jumpCount = 0;
    //}else if (jump == true){
    //p1y = p1y + (velocityY * revdir);
  } else {
    p1y = p1y + velocityY * dir;
  }

  if (jump == true) {
    if (p1y >= MinHeight) {
      //gone through the floor
      p1y = MinHeight;
    }
    velocityY = -jumpPower;
    jumpCount++;
  } else {
    velocityY = fallspeed;
  }
}
