/* Elisabeth Giraldo, giraldo.e@northeastern.edu , Prototyping with Code, Lab #6, Assignment 5
Title: Snowball fight during the blizzard
*/ 

  // snowfall
let xPos = [];
let yPos = [];
let sizes = [];
let speeds = [];

  // snowballs
let x = [];
let y = [];
let velX = [];
let velY = [];
let count = 8;

  // date and time
let cx, cy;
let rad;

function setup(){
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i<50; i++){
    xPos.push(random(0, width));
    yPos.push(random(0, height));
    sizes.push(random(10,30));
    speeds.push(random(5,7));
  }
  
 for(let j =0; j<50; j++){
    xPos.push(random(0, width));
    yPos.push(random(0, height));
    sizes.push(random(10, 20));
    speeds.push(random(1, 5));
  }
  
  // date and time
   cx = width / 2;
   cy = height / 2;
   rad = min(width, height) * 0.25;
  noStroke();
  textFont("Helvetica");
}

function draw(){
  background(4, 39, 74);
  
  // Cloud
    fill(218, 243, 247);
    stroke(218, 243, 247);
    ellipse(width/2, height/20, 2000, 100);
  
   // Animated snowballs
  
  push();
   for(let i = 0; i < count; i++) {
    x.push(width/2);
    y.push(height/2);
    velX.push(random(1, 5));
    velY.push(random(-5, 5));
    fill(151, 176, 199);
    stroke(151, 176, 199);
    circle(x[i], y[i], 20);
    
    x[i] += velX[i];
    y[i] += velY[i];
    
    if (x [i] < 0 || x[i] > width){
      velX[i] = -velX[i];
    }
    if (y [i] < 0 || y[i] > height){
      velY[i] = -velY[i];
    }
  }
  
  // Animated snowfall
  for (let i = 0; i< xPos.length; i++){
    fill(218, 243, 247);
    stroke(218, 243, 247);
    circle(xPos [i], yPos [i], sizes[i])
    
    xPos[i] -= speeds[i];
    
    if(xPos[i]>width){
      xPos[i] = 0;
    }
    yPos[i] += speeds[i];
    if(yPos[i]>height){
      yPos[i] = 0;
    }
  }
  
  for(let j = 0; j< xPos.length; j++){
  fill(237, 244, 250);
  stroke(237, 244, 250);
  scale(0.5, 7.7);
  square(xPos [j], yPos [j], sizes[1])
    
  xPos[j] += speeds[j];
    if(xPos[j]>width){
      xPos[j] = 0;
    }
    yPos[j] += speeds[j];
    if(yPos[j]>height){
      yPos[j] = 0;
    }
  }
  pop(); 
  
  // date and time
  fill(10, 102, 125);
  textSize(15);
  textAlign(LEFT, TOP);

 
  let timeStr = nf(hour(), 2) + ":" + nf(minute(), 2) + ":" + nf(second(), 2);
  let dateStr = nf(month(), 2) + "/" + nf(day(), 2) + "/" + year();

  text(timeStr, 20, 45);
  text(dateStr, 20, 20);

}