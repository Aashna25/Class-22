const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
var engine, world;
var object;
var ground;
var ball;
function setup() 
{ engine = Engine.create();
world = engine.world;
object = Bodies.rectangle(200,200,50,50); 
World.add(world,object);
console.log(object);
console.log(object.position.x) 
console.log(object.position.y)
var ground_options ={
  isStatic: true
 } 
ground = Bodies.rectangle(200,390,200,20,ground_options);
 World.add(world,ground);
 var ball_options ={ 
   restitution: 0.3
  } 
 ball = Bodies.circle(200,100,20, ball_options); 
 World.add(world,ball);
 } 

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  rect(object.position.x,object.position.y,50,50);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);  
  drawSprites();
}