/* Elisabeth Giraldo, giraldo.e@northeastern.edu , Prototyping with Code, Lab #6, Assignment 6
Title: Drawing App
Instructions: 
 - Click and hold drag with mouse to draw
 - Click the corresponding letters on the keyboard to change the colors, erase, clear the space, or save
 - Colors:
   K = Black, R = Red, O = Orange, Y = Yellow
   G = Green, B = Blue, P = Purple
 - Other functions
   E = Erase, C = Clear, S = Save
*/

let clr = [0, 0, 0, 255];
let isEraser = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {    
  // UI header area
  noStroke();
  fill(300);
  rect(0, 0, width, 30);
  
  fill(0);
  textSize(12);
  let modeText = isEraser ? "ERASER ACTIVE" : "PAINTING ACTIVE";
  text("Press Buttons, K: Black | R: Red | O: Orange | Y: Yellow | G: Green | B: Blue | P: Purple | C: Clear | S: Save ", 10, 18);
  
  if (mouseIsPressed) {
    if (isEraser) {
      // Eraser 
      stroke(255);
      strokeWeight(30); 
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
      // Paint 
      let d = dist(mouseX, mouseY, pmouseX, pmouseY);
      stroke(clr);
      strokeWeight(constrain(0.3 * d, 1, 20)); 
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}

function keyPressed() {
  let k = key.toLowerCase();

  if (k === 'c') {
    background(255);
  } else if (k === 's') {
    saveCanvas("drawing.png");
  } else if (k === 'e') {
    isEraser = true;
  } else if (k === 'r') {
    isEraser = false;
    clr = [255, 0, 0, 255];
  } else if (k === 'g') {
    isEraser = false;
    clr = [2, 207, 2, 255];
  } else if (k === 'b') {
    isEraser = false;
    clr = [0, 0, 255, 255];
  } else if (k === 'k') {
    isEraser = false;
    clr = [0, 0, 0, 255];
  } else if (k === 'p') {
    isEraser = false;
    clr = [182, 5, 252, 255];
  } else if (k === 'y'){
    isEraser = false;
    clr = [238, 250, 2, 255];
  } else if (k === 'o'){
    isEraser = false;
    clr = [255, 162, 0, 255];
  }
}
