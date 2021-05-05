const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand, slingShot;
var polygon, polygon_img;
var block1, block2, block3, block4,
 block5, block6, block7, block8,
 block9, block10, block11, block12,
 block13, block14, block15, block16; 
var score = 0;

function preload(){
    polygon_img = loadImage("polygon.png");
} 

function setup(){
    stand = new Ground(390,300,220,20);

    //level one
    block1 = new Box(300, 275, 30, 40);
    block2 = new Box(330, 275, 30, 40);
    block3 = new Box(360, 275, 30, 40);
    block4 = new Box(390, 275, 30, 40);
    block5 = new Box(420, 275, 30, 40);
    block6 = new Box(450, 275, 30, 40);
    block7 = new Box(480, 275, 30, 40);

    //level two
    block8 = new Box(330, 235, 30, 40);
    block9 = new Box(360, 235, 30, 40);
    block10 = new Box(390, 235, 30, 40);
    block11 = new Box(420, 235, 30, 40);
    block12 = new Box(450, 235, 30, 40);

    //level three
    block13 = new Box(360, 195, 30, 40);
    block14 = new Box(390, 195, 30, 40);
    block15 = new Box(420, 195, 30, 40);

    //top
    block16 = new Box(390, 155, 30, 40);

    //polygon holder with sling
    polygon = Bodies.circle(50,200,20);
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    World.add(world, polygon);

    slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
    background("lightBlue");
    text("score: " +score, 750, 40);
    Engine.update(engine);

    text(mouseX + "," + mouseY, 50, 50);

    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}

async function changeBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}