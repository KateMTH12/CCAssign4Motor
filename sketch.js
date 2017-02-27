function setup() {
  createCanvas(700, 700);
  background(255);
}

function draw() {
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  fill(106, 78, 66); //hair
  arc(width / 2, height / 2, 350, 400, PI, TWO_PI);
  rectMode(CORNER);
  rect(200, 270, 300, 500);

  arc(470, 540, 150, 600, -HALF_PI, 3 * HALF_PI);


  noStroke();
  fill(239, 194, 152); //skin
  ellipse(width / 2, height / 2, 300, 350);
  ellipse(490, 360, 40, 60);
  ellipse(190, 360, 40, 60);
  noFill();
  stroke(0);
  arc(490, 360, 20, 40, -HALF_PI, 3 * HALF_PI);

  stroke(0);
  strokeWeight(5);
  fill(106, 78, 66); //hair
  arc(210, 560, 120, 600, HALF_PI, 3 * HALF_PI);
  arc(220, 220, 220, 270, -.46, 2);

  arc(452, 202, 265, 300, 1, 1.12 * PI);

  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(290, 370, 50, 50);
  ellipse(410, 370, 50, 50);
  fill(0);
  ellipse(290, 370, 30, 30);
  ellipse(410, 370, 30, 30);
  noStroke();
  fill(255);
  ellipse(295, 365, 5, 5);
  ellipse(415, 365, 5, 5);

  stroke(0);
  noFill();
  strokeWeight(8);
  quad(240, 350, 330, 350, 325, 400, 245, 400);
  quad(370, 350, 460, 350, 455, 400, 375, 400);
  line(330, 370, 370, 370);
  strokeWeight(5);
  arc(350, 390, 40, 40, HALF_PI - .5, 3 * HALF_PI);

  fill(232, 29, 94);
  arc(350, 460, 80, 60, 0, PI);
  strokeWeight(3);

  fill(255);
  quad(312, 460, 388, 460, 383, 470, 317, 470);
  quad(330, 485, 370, 485, 355, 490, 345, 490);
  
  noStroke();
  fill(239, 194, 152); //skin
  quad(325,520,375,520,395,570,305,570);
  
  fill(255);
  rect(120,570,580,130);
  
  strokeWeight(5);
  stroke(0);
  line(150,570,545,570);
  fill(44,63,255);
  arc(285,590,100,100,PI,TWO_PI-HALF_PI);
  arc(415,590,100,100,PI+HALF_PI,TWO_PI);
  noStroke();
  rect(285,540,130,160);
  rect(235,590,230,110);
  strokeWeight(5);
  stroke(0);
  line(285,540,315,540);
  line(385,540,415,540);
  line(285,620,285,700);
  line(415,620,415,700);
  line(235,590,235,700);
  line(465,590,465,700);
  
  fill(239, 194, 152); //skin
  arc(350,540,65,65,0,PI);
  
  print(mouseX);
  print(mouseY);
}