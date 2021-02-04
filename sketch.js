
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var userEngine,userWorld;

var ground;
var paper1;

var box1;
var box2;
var box3;
var box4;

var boxS,boxSimg;

function preload()
{
  boxSimg = loadImage ("dustbingreen.png");
}


function setup() {
	createCanvas(1800, 700);

	boxS = createSprite(1505,530,220,190);
	boxS.addImage("boxSimg",boxSimg);

	userEngine = Engine.create();
	userWorld = userEngine.world;

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(userWorld, ground);

	//Create the Bodies Here.
	paper1 = new paper(200,20,50)

	box3 = new Box(1509,670,198,30);	
	box1 = new Box(1600,590,30,190);
	box2 = new Box(1410,590,30,190);


	Engine.run(userEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(69,420,222);

  paper1.display();

  box3.display();
  box1.display();
  box2.display();

  
  drawSprites();


 
}

function keyPressed(){
	if (keyCode === 38){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:230,y:-120})
	}
}