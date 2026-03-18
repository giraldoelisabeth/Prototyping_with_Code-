// Elisabeth Giraldo, giraldo.e@northeastern.edu , Prototyping with Code, Lab #6, Assignment 3

function setup(){
  createCanvas(500,500);
}

function draw(){
  background(166, 189, 247);

  // shapes
  
  fill(97, 70, 112);
  stroke(97, 70, 112);
  strokeWeight(5);
  bezier(220, 90, 20, 20, 100, 100, 140, 190); 
  
  fill(141, 98, 166);
  stroke(141, 98, 166);
  strokeWeight(5);
  bezier(320, 140, 20, 20, 100, 100, 160, 190);
  
  fill(97, 70, 112);
  stroke(97, 70, 112);
  ellipse(250, 230, 280, 340);  //Hair
  
  fill(141, 98, 166);
  stroke(141, 98, 166);
  ellipse(250, 240, 230, 340);  //Hair 
  
  fill(175, 99, 230);
  stroke(175, 99, 230);
  rect(165,250,170,300); //Body
  
  fill(23, 173, 121);
  stroke(23, 173, 121);
  rect(165,250,170,90)
  
  fill(23, 173, 121);
  stroke(23, 173, 121);
  rect(165,390,170,50)
  
  fill(175, 99, 230);
  stroke(175, 99, 230);
  rect(165,209,170,90)

  
  fill(230, 173, 106);
  stroke(230, 173, 106);
  circle(250,200,230); // (x, y, d); //Head
  
  fill(217, 104, 175);
  stroke(217, 104, 175);
  ellipse(180, 220, 60, 40); //cheek left
  
  fill(217, 104, 175);
  stroke(217, 104, 175);
  ellipse(325, 220, 60, 40); // cheek right
  
  fill(240, 84, 84);
  stroke(240, 84, 84);
  ellipse(250, 250, 70, 30); // Mouth
  
  fill(102, 228, 237);
  stroke(102, 228, 237);
  ellipse(210, 170, 40, 60); //Left eye
  
  fill(203, 102, 237);
  stroke(203, 102, 237); 
  ellipse(285, 170, 40, 60); //Right eye
  
  fill(77, 76, 82);
  stroke(77, 76, 82);
  circle(210,170,30); //Left pupil
  
  fill(77, 76, 82);
  stroke(77, 76, 82);
  circle(285,170,30); //Right pupil
  
      //right side of hair
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(390, 280, 40, 60); 
  
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(390, 220, 40, 60); 
  
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(390, 160, 40, 60); 
  
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(390, 340, 40, 60); 
  
    //left side of hair
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(110, 160, 40, 60); 
  
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(110, 340, 40, 60); 
  
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(110, 280, 40, 60); 
  
  fill(111, 77, 130);
  stroke(111, 77, 130);
  ellipse(110, 220, 40, 60); 
  
    //Other
  fill(141, 98, 166);
  stroke(141, 98, 166);
  ellipse(250, 110, 150, 70);
  

  // text
  fill(255,255,255);
  stroke(255,0,255);
  strokeWeight(2);
  textSize(17);
  textStyle(BOLD);
  text("Hello World! from Elisabeth", 265,490);
     
  
// Things to remember fill, stroke, strokeWeight, nostroke
// Style first, shape second; fill, stroke, shape order
}