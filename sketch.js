const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground,box1,box2

function setup() {
  createCanvas(800,800);

  engine=Engine.create()
  world=engine.world
  
  ground=new Ground(400,780,800,20)

  box2=new Box(400,500,50,50)
  box1=new Box(440,400,50,100);
}

function draw() {
 background("orange");  
Engine.update(engine)

box2.display();
box1.display();
ground.display();

}

