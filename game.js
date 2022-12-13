function game() {
  noStroke();

  //ground
  stroke(1);
  fill(100, 100, 100);
  rect(
    0,
    Math.ceil(windowHeight - windowHeight / 6),
    windowWidth,
    Math.ceil(windowHeight / 6)
  );

  //start platform
  stroke(0);
  strokeWeight(8);
  fill(255, 125, 50);
  rect(b1x, b1y, bW, bH);

  //player
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255);
  Player = rect(p1x, p1y, pW, pH);
}
