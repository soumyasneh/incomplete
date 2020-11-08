const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0;k <=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }


}

function draw() {
  background("salmon");  
 for(var k=40;k<divisions.length; k++){
   
  divisions[k].display();
 }
  drawSprites();
}