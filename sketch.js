const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine,world;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,200,50,100);
  ground= new Ground(200,390,400,40);
}

function draw() {
  background("pink");  
  Engine.update(engine);
  rect(0,0,this.width,this.height);
  box1.display();
  box2.display();
 
  ground.display();
  
  
}