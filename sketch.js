
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var paper1;
var dustbin1;
var dustbin2;
var dustbin3;
var dustbinImg;

function preload() 
{
	dustbinImg=loadImage("dustbin.png")
}

function setup() {
	createCanvas(1000, 400);
    var options={
     isStatic:false,
     restitution:0.3,
     friction:0.5,
	 density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(500,350,1000,20)
  paper1 = new Paper(130,200,30)
  dustbin1 = new Dustbin(720,290,20,110)
  dustbin2 = new Dustbin(800,330,160,20)
  dustbin3 = new Dustbin(830,290,20,110)
  Launcher= new Launcher(paper1.body,{x:200 ,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  textSize(20)
  fill("Black")
  text("THROW THE PAPER IN DUSTBIN",380,60)


  drawSprites();
  ground.display();
  paper1.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  image(dustbinImg,700,220,130,120);
 Launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x:mouseX ,y:mouseY})
  
  }
  
  function mouseReleased(){
  Launcher.fly()    
  
  }
