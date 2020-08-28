const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var slingShot;
var polygonimg;
var score = 0;

function preload() {
    polygonimg = loadImage("pol.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,390,1000,20);
    ground1 = new Ground(390,295,240,10);
    ground2 = new Ground(700,180,180,10);
    
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(420,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(360,195,30,40);

    box16 = new Box(390,155,30,40);

    box17 = new Box(640,160,30,40);
    box18 = new Box(670,160,30,40);
    box19 = new Box(700,160,30,40);
    box20 = new Box(730,160,30,40);
    box21 = new Box(760,160,30,40);

    box22 = new Box(730,120,30,40);
    box23 = new Box(700,120,30,40);
    box24 = new Box(670,120,30,40);

    box25 = new Box(700,80,30,40);
        
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(200);
    Engine.update(engine);

    textSize(30);
    fill("blue");
    text("score :" +score, 750, 40);

    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);

    ground.display();
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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    slingshot.display();
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}