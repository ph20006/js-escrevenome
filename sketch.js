function setup() {
    createCanvas(600, 400);
    background("black");
  }
  
  function draw() {
    stroke("red");
    fill("white");
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35)
    
    }    
  }