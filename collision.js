function collision() {
  //collision detection for top of start platform
  if (
    p1x >= b1x &&
    p1x <= b1x + bW &&
    p1y >= b1y - bH / 2 &&
    p1y <= b1y + bH / 2 &&
    jump == false
  ) {
    p1y = p1y; //prevent falling through platform
    velocityY = 0; //no velocity as on platform
    jumpCount = 0; //resets the jump counter to allow the player to be able to jump again
  }

  //collision detection for the left, right and underneath of the start platform (didnt use this for the newer platforms)
  if (
    (p1x + pW >= b1x &&
      p1x <= b1x + bW / 2 &&
      p1y + pH >= b1y &&
      p1y <= b1y + bH) ||
    (p1x <= b1x + bW &&
      p1x >= b1x + bW / 2 &&
      p1y + pH >= b1y &&
      p1y <= b1y + bH)
  ) {
    inp = false;
    velocityY = fallspeed;
  } else {
    inp = true;
  }
}
