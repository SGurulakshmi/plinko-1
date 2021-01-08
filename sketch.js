const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world
// variable for the division
var floor
var divi1
var divi2
var divi3
var divi4
var divi5
var divi6
var divi7
var divi8
var divi9
// array
var Particle = [];
var Plinko = [];
var Divisions = []; 
var DivisionsHeight = 300;

function setup()
{
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

    floor = new Ground(0,790,480,10)

    divi1 = new Divisions(2,620,10,480)
    divi2 = new Divisions(60,495,10,480)
    divi3 = new Divisions(120,495,10,480)
    divi4 = new Divisions(180,495,10,480)
    divi5 = new Divisions(240,495,10,480)
    divi6 = new Divisions(300,495,10,480)
    divi7 = new Divisions(360,495,10,480)
    divi8 = new Divisions(420,495,10,480)
    divi9 = new Divisions(480,495,10,480)
  

    for(var k = 0;k <=width; k = k + 50 ){
        Divisions.push(new Divisions(k,height-DivisionsHeight/2,10,DivisionsHeight))
    }
    //firt row of plinko
    for(var j = 0 ;j <=width; j = j + 50)
    {
      Plinko.push(new Plinko(j,75))
    }

    //second row of plinko
    for(var j = 0 ;j <=width-10; j = j + 50)
    {
      Plinko.push(new Plinko(j,175))
    }

    //third row of plinko
    for(var j = 0 ;j <=width; j = j + 50)
    {
      Plinko.push(new Plinko(j,275))
    }

    //fourth row of plinko
    for(var j = 0 ;j <=width-10; j = j + 50)
    {
      Plinko.push(new Plinko(j,375))
    }

  Engine.update(engine)
}

function draw()
{
  background("black");  
   floor.display();

   divi1.display();
   divi2.display();
   divi3.display();
   divi4.display();
   divi5.display();
   divi6.display();
   divi7.display();
   divi8.display();
   divi9.display();
  
   
   for (var j = 0 ; j < Plinko.length ; j++){
     Plinko[i].display();
   }

   if (frameCount%90 === 0){
     Particle.push(new Particle(random(100,700),10,10))
   }
   for (var j = 0 ; j < Particle.length; j++ ){
    Particle[j].display();
  }
   for (var k = 0 ; k < Division.length; k++ ){
     Divisions[k].display();
   }

 
}