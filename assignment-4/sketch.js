/* Elisabeth Giraldo, giraldo.e@northeastern.edu , Prototyping with Code, Lab #6, Assignment 4
Title: Picnic blanket
*/

function setup() {
  createCanvas(400, 400);
  loop();//
   
}

function draw() {
  background(113, 245, 232);
  noStroke();
  fill(0);
  strokeWeight(0);
  rectMode(CENTER);
  
  for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {

    let x = 4 + col * 40;
    let y = 4 + row * 40;
  
    if ((row + col) % 0 === 0) {
  fill(255);
   } else {
  fill(255);
  
}
    circle(x, y, 10);
  }
}
  
  // Position = cnv // space between the shapes
  let cnv = 45
  for (x=0; x<width+40; x+=cnv){
    for (y=0; y<height+30; y+=cnv){
      
    // Shapes
      fill(247, 141, 223);
      stroke(247, 141, 223);
      strokeWeight(0);
      square(x,y, 20)
      
      fill(186, 73, 242);
      stroke(186, 73, 242);
      strokeWeight(0);
      circle(x+cnv/2, y+cnv/2, 15)
      
      fill(153, 141, 247);
      stroke(153, 141, 247);
      circle(x,y, 10)
      
      fill(227, 66, 245);
      stroke(227, 66, 245);
      square(x+cnv/2, y+cnv/50, 10)
// Used opened sourced materials for position code      
    }
  }
  
}

  function keyPressed() {
// Was it the upper/lower 'S' key?
if (key == 'S' || key == 's') {
saveCanvas("assignment[3]_pattern_roe_jane");
    }
  }