
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var ground;
var groundObj
var leftSide
var rightSide

function preload()
{
	
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-0.25});
	}
}
function setup() {
	createCanvas(1200,700);
 
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(500,670,2000,20)

	leftSide =new Ground(800,600,20,120)

	rightSide =new Ground(1000,600,20,120)


	// //Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
    World.add(world,ball);
	Engine.run(engine);
	ellipseMode(RADIUS)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
 
  
  ground.display()
  leftSide.display()
  rightSide.display()

  drawSprites();
  
 
}



