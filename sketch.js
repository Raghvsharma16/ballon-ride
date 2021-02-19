var  hotAirBallon,hotAirBallonImage;
var bg,bgImage;
var position;
var database;

function preload() {
hotAirBallonImage=loadImage("Hot Air Ballon-02.png");
bg=loadImage("background.png");




}
function setup() {
  createCanvas(800,400);
 hotAirBallon = createSprite(250,250,10,10);
hotAirBallon.addImage(hotAirBallonImage);
database=firebase.database();

  var hotAirBallonPosition=database.ref("hotAirBallon/position");
  hotAirBallonPosition.on("value",readPosition,showErr);

}

function draw() {
  background(255,255,255);  
  if(keyDown(LEFT_ARROW)){
  hotAirBallon.x=hotAirBallon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  hotAirBallon.x=hotAirBallon.x+10;
}
else if(keyDown(UP_ARROW)){
  hotAirBallon.y=hotAirBallon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  hotAirBallon.x=hotAirBallon.x=10;
}
database=firebase.database();

  var hotAirBallonPosition=database.ref("hotAirBallon/position");
  hotAirBallonPosition.on("value",readPosition,showErr);
drawSprites();
  
}





function readPosition(data)
{
position=data.val();
hotAirBallon.x=position.x;
hotAirBallon.y=position.y;
}

function showErr(){
console.log("ERROR");
}









