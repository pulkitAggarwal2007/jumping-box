var canvas;
var music;
var ball;
var box1,box2,box3,box4;
var s1,s2,s3,s4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(400,300,20,20);
    ball.velocityX = 8;
    ball.velocityY = 8;
    ball.shapeColor = "red";
    
box1 = createSprite(60,580,70,20);
box2 = createSprite(260,580,70,20);
box3 = createSprite(460,580,70,20);
box4 = createSprite(660,580,70,20);

s1 = createSprite(400,595,800,5);
s2 = createSprite(400,5,800,5);
s3 = createSprite(5,300,5,600);
s4 = createSprite(795,300,5,600);
}

function draw() {
    background(0);
    

box1.shapeColor = "blue";
box2.shapeColor = "green";
box3.shapeColor = "orange";
box4.shapeColor = "white";
s1.shapeColor = "black";
s2.shapeColor = "black";
s3.shapeColor = "black";
s4.shapeColor = "black";

if(ball.isTouching(s1)){
    ball.bounceOff(s1);
}

if(ball.isTouching(s2)){
    ball.bounceOff(s2);
}

if(ball.isTouching(s3)){
    ball.bounceOff(s3);
}

if(ball.isTouching(s4)){
    ball.bounceOff(s4);
}

if(ball.isTouching(box1)){
    ball.shapeColor = "blue";
}

if(ball.isTouching(box2)){
    music.play();
ball.velocityX = 0;
ball.velocityY = 0;
    ball.shapeColor = "green";
}

if(ball.isTouching(box3)){
    ball.shapeColor = "orange";
}

if(ball.isTouching(box4)){
    ball.shapeColor = "white";
}



    drawSprites();
}
