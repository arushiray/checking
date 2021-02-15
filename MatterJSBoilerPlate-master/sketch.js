
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(300,400,4);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  
  drawSprites();
 
}



