
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var block1,block2,block3,block4,block5;
var Log;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;
	ball1 = new ball(250,300);
	ball2 = new ball(280,300);
	ball3 = new ball(310,300);
	ball4 = new ball(340,300);
	ball5 = new ball(370,300);

	Log = new log(310,150,185,25);
	block1 = new log(280,150,10,10);
	block2 = new log(250,150,10,10);
	block3 = new log(340,150,10,10);
	block4 = new log(310,150,10,10);
	block5 = new log(370,150,10,10);

	chain1 = new Chain(ball1.body,block2.body,10*2,0);
	chain2 = new Chain(ball2.body,block1.body,10*2,0);
	chain3 = new Chain(ball3.body,block4.body,10*2,0);
	chain4 = new Chain(ball4.body,block3.body,10*2,0);
	chain5 = new Chain(ball5.body,block5.body,10*2,0);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("pink");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  Log.display();
  chain1.display();
  chain2.display(); 
  chain3.display(); 
  chain4.display();
  chain5.display(); 

  moveBob();

  drawSprites();
 
}
function moveBob()
{
	console.log("IM OUT");
	if(keyWentDown ("UP_ARROW"))
	{
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-15,y:0});
	}
}


