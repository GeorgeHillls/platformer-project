function gravity() {
  input();

  if (p1y >= MinHeight && jump == false) {
    //if the player is exceeding the MinHeight value that means that the player has gone below the minimum height and if jump is false (not going up) then the player will fall
    p1y = p1y;
    jumpCount = 0;
  } else {
    p1y = p1y + velocityY * dir;
  }

  if (jump == true) {
    if (p1y >= MinHeight) {
      //gone through the point of the MinHeight (the floor)
      p1y = MinHeight; //puts the player back on the point of the MinHeight
    }
    velocityY = -jumpPower * 2; //player jumps
    jumpCount++; //increases up to the max set anad then the player begins to fall
  } else {
    velocityY = fallspeed; // speed the player falls at
  }
}
