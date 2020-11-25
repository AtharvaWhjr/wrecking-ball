const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2,box3,box4,box5,box6,box7,box8,box9,box10,box11, box12;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

     
    ground = new Ground(500,780, 1000, 10);

    box1 = new Box(600, 750, 50,50);
    box2 = new Box(600, 700, 50,50);
    box3 = new Box(600, 650, 50,50);
    box4 = new Box(600, 600, 50,50);
    box5 = new Box(600, 550, 50,50);
    box6 = new Box(600, 500, 50,50);
    box7 = new Box(600, 450, 50,50);
    box8 = new Box(700, 750, 50,50);
    box9 = new Box(700, 700, 50,50);
    box10 = new Box(700, 650, 50,50);
    box11 = new Box(700, 600, 50,50);
    box12 = new Box(700, 550, 50,50);

    ball = new Ball(400, 400, 50,50);
    rope = new Rope(ball.body, {x: 400, y: 400})


}

function draw(){
     background("green");
    Engine.update(engine);

     ground.display();
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
     ball.display();
     rope.display();

       
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}

