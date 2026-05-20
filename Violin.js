function setup() {
  createCanvas(690,690)
  background("white")
  angleMode(DEGREES)
    noLoop()
}

function alot() {
    ellipse(-158, -280, 0, 45);
    ellipse(-158, -280, 1, 45);
    ellipse(-158, -280, 2, 45);
    ellipse(-158, -280, 3, 45);
    ellipse(-158, -280, 4, 45);
    ellipse(-158, -280, 5, 45);
    ellipse(-158, -280, 6, 45);
    ellipse(-158, -280, 7, 45);
    ellipse(-158, -280, 8, 45);
    ellipse(-158, -280, 9, 45);
    ellipse(-158, -280, 10, 45);
    ellipse(-158, -280, 11, 45);
    ellipse(-158, -280, 12, 45);
    ellipse(-158, -280, 13, 45);
    ellipse(-158, -280, 14, 45);
    ellipse(-158, -280, 15, 45);
    ellipse(-158, -280, 16, 45);
    ellipse(-158, -280, 17, 45);
    ellipse(-158, -280, 18, 45);
    ellipse(-158, -280, 19, 45);
    ellipse(-158, -280, 20, 45);
    ellipse(-158, -280, 21, 44);
    ellipse(-158, -280, 22, 43);
    ellipse(-158, -280, 23, 42);
    ellipse(-158, -280, 24, 41);
    ellipse(-158, -280, 25, 40);
    ellipse(-158, -280, 26, 39);
    ellipse(-158, -280, 27, 38);
    ellipse(-158, -280, 28, 37);
    ellipse(-158, -280, 29, 36);
    ellipse(-158, -280, 30, 35);
    ellipse(-158, -280, 31, 34);
    ellipse(-158, -280, 32, 33);
    ellipse(-158, -280, 33, 32);
    ellipse(-158, -280, 34, 31);
    ellipse(-158, -280, 35, 30);
}


function draw() {
    noFill()
    translate(250, 250);
    rotate(180)
    stroke(103,69,3)
    fill(103,69,3)
    arc(70, 80, 90, 90, 0, 180 + 0);
    triangle(30, 80, 46, 12, 45, 80)
    triangle(88, 80, 88, 50, 110, 80);
    triangle(85, 10, 85, 80, 110, 10);
    triangle(85, 10, 45, 40, 18, 10);
    rotate(90)
    noFill();
    arc(45, -115, 70, 55, 0, 175 + 0);
    fill(197,132,92);
    arc(45, -115, 70, 55, 0, 175 + 0);
    rotate(90)
    fill(103,69,3)
    arc(-65, -10, 95, 95, 0, 180 + 0);
    rotate(90)
    noFill();
    arc(-47, 18, 70, 55, 0, 165 + 0);
    fill(197,132,92)
    arc(-47, 18, 70, 55, 0, 165 + 0);
    noFill();
    noStroke();
    rotate(90)
    fill(103,69,3)
    quad(45, 80, 88, 80, 86, 10, 47, 10);
    fill(0)
    quad(77, 167, 57, 167, 57, 57, 77, 57);
    rotate(180)
    resetMatrix()
    noFill();
    stroke(0)
    translate(340, 340);
    rotate(90)
    fill(0)
    rect(-275, 170, 5, 15);
    rect(-290, 170, 5, 15);
    rect(-290, 131, 5, 15);
    rect(-275, 131, 5, 15);
    arc(-273, 185.5, 10, 8, 0, 180 + 0);
    arc(-287, 185.5, 10, 8, 0, 180 + 0);
    rotate(180)
    arc(287, -131, 10, 8, 0, 180 + 0);
    arc(273, -131, 10, 8, 0, 180 + 0);
    resetMatrix()
    translate(340, 340)
    strokeWeight(3)
    stroke(236,176,66)
    line(-140,-100, -170, -100) 
    strokeWeight(1)
    stroke(0)
    fill('black') 
    triangle(-165, -94, -145, -94, -155, -60);
    alot();
    
    noFill()
    strokeWeight(2);
    bezier(-140, -140, -160, -155, -130, -100, -145, -110);
    stroke(0);
    point(-165,-110)
    noFill()
    strokeWeight(2);
    bezier(-174, -140, -160, -155, -178, -100, -165, -110);
     strokeWeight(5);
    point(-165, -110)
    point(-145, -110)
     strokeWeight(2);
    
    
    
    
    
    fill(0)
    rotate(30)
    arc(-185, 29, 45, 17, 0, 180 + 0);//brim
    resetMatrix()
    translate(340, 340);
    strokeWeight(2);
    beginShape();
    curveVertex(-195,-78)//white
    curveVertex(-195,-78)//white
    curveVertex(-180,-86)//green
    curveVertex(-160,-73)//orange
    curveVertex(-155, -54)//red
    curveVertex(-155, -54)//red
    endShape();
    
    
    
    
    
    
    
    
    
    
}
