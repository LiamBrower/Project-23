var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dropSide1, dropSide2, dropSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 190, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody, dropSide1, dropSide2, dropSide3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
  dropSide1 = createSprite(310,620,20,60);
  dropSide1.shapeColor = "red";
  dropSide1.isStatic = true;
  
  dropSide2 = createSprite(490,620,20,60);
  dropSide2.shapeColor = "red";
  dropSide2.isStatic = true;
  
  dropSide3 = createSprite(400,650,200,20);
  dropSide3.shapeColor = "red";
  dropSide3.isStatic = true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
    function collisions(){
    
    packageSprite.collide(dropSide1);
    packageSprite.collide(dropSide2);
    packageSprite.collide(dropside3);
  }
 
}