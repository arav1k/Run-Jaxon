var Boy;
var Track
var BoyImage
var TrackImage
var InvisibleEdge
var InvisibleEdge2









function preload(){
  BoyImage=loadAnimation('Runner-1.png','Runner-2.png')
  TrackImage=loadAnimation('path.png')

}

function setup(){
  createCanvas(400,400);
  Track=createSprite(201,187,10,10)
  Track.addAnimation('Still',TrackImage)
  Track.velocityY=4
  Track.scale=1.2
  Boy=createSprite(146,307,10,10)
  Boy.addAnimation('Running',BoyImage)
  Boy.scale=0.1
  InvisibleEdge=createSprite(370,206,20,800)
  InvisibleEdge.visible=false
  InvisibleEdge2=createSprite(30,195,20,800)
  InvisibleEdge2.visible=false
  
  }

function draw() {
  background(0);
  drawSprites()
  Boy.collide(InvisibleEdge)
  Boy.collide(InvisibleEdge2)
  
  
  
  fill ('red')
  text(mouseX+','+mouseY,mouseX,mouseY)

  if(keyDown('left'))
  {
    Boy.velocityX=-4
  }

  if(keyDown('right'))
  {
    Boy.velocityX=4
  }

  
  
  
  
  if(Track.y>600){
    Track.y=height/2
  }
  
}
