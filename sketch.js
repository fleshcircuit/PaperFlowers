//tileCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100); 
  //tileCount = 20;
  frameRate(15)
  
}

function draw() {
  background(15, 1);
  grid();
  comb();
}

function comb(){
  stroke(random(50, 250), 100, 100);
  strokeWeight(random(5));
  fill(random(250, 300), 50, 100, 50);
  //noFill();
  push();
    //translate(width/2, height / 2);
    translate(mouseX, mouseY)
    //var circleResolution = int(map(mouseY+100, 0, height, 2, 10));
    var circleResolution = random(3,9);
    //var radius = mouseX - width / 3;
    var radius = random(width*0.3);
    var angle = TAU / circleResolution;


    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape(CLOSE);

    pop();
}

function grid(){
  if (frameCount%10 == 0){
  var tileCount = (int(random(5, 30)));
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;
      var toggle = int(random(0, 3));
      
      if (toggle == 0){
      strokeWeight(2);
      fill(random(), random(100), random(100), 10);
      beginShape();
      vertex(posX + random(-5, 5), posY + random(-5, 5));
      vertex(posX + random(-5, 5) + width/tileCount, posY + random(-5, 5));
      vertex(posX + random(-5, 5) + width/tileCount, posY + random(-5, 5) + height/tileCount);
     vertex(posX + random(-5, 5), posY + random(-5, 5) + height/tileCount); 
    endShape(CLOSE);
      }
    }
  }
}
}
