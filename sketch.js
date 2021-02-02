const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var polygon;
function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, 390, width, 20);
    ground2 = new Ground(500, 300, 300, 10);

    box1 = new Box(400, 279, 30, 30);
    box2 = new Box(430, 279, 30, 30);
    box3 = new Box(460, 279, 30, 30);
    box4 = new Box(490, 279, 30, 30);
    box5 = new Box(520, 279, 30, 30);
    box6 = new Box(550, 279, 30, 30);
    box7 = new Box(580, 279, 30, 30);
    box8 = new Box(430, 249, 30, 30);
    box9 = new Box(460, 249, 30, 30);
    box10 = new Box(490, 249, 30, 30);
    box11 = new Box(520, 249, 30, 30);
    box12 = new Box(550, 249, 30, 30);
    box13 = new Box(460, 219, 30, 30);
    box14 = new Box(490, 219, 30, 30);
    box15 = new Box(520, 219, 30, 30);
    box16 = new Box(490, 189, 30, 30);

    polygon = new Polygon(170, 200, 40);
    slingshot= new SlingShot(polygon.body,{x:170, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    polygon.display();

    slingshot.display();

    textSize(20);
    text("Drag the Hexagonal Stone and realease it, to launch it towards the blocks.", 350, 50)
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
