var a , b;

function setup() {
  createCanvas(800,800);
  a = createSprite(600, 100, 50, 50);
  a.shapeColor = "green";
  a.velocityY = 5;
  a.veloc
  a.debug = true;
  b = createSprite(600, 600,50,50);
b.shapeColor = "green"
b.debug = true;
b.velocityY = -5;
}

function draw() {
  //a.x = mouseX;
 // a.y = mouseY;
 /* if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2 
    && b.y-a.y < a.height/2+b.height/2 && a.y-b.y < a.height/2+b.height/2){
    a.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }

  console.log(b.x -a.x ,"<", a.width/2 + b.width/2)*/
  if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2 ){
    a.velocityX=a.velocityX*(-1)
b.velocityX=b.

  }
 
if(b.y-a.y < a.height/2+b.height/2 && a.y-b.y < a.height/2+b.height/2){
  a.velocityY = a.velocityY *(-1);
  b.velocityY = b.velocityY *(-1);
}
  background(255,255,255);  
  drawSprites();
}