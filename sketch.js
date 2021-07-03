const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var ground2;

var divisionHeight = 300;

var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9;
var particle;
var division;

function setup() {
  createCanvas(500,800);

  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground = new Ground(242,725,510,10);

  for(k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2, 10, divisionHeight));
  }


  
// Top Layer
 plinko1 = new Plinko(40,80,10);
 plinko2 = new Plinko(90,80,10);
 plinko3 = new Plinko(140,80,10);
 plinko4 = new Plinko(190,80,10);
 plinko5 = new Plinko(240,80,10);
 plinko6 = new Plinko(290,80,10);
 plinko7 = new Plinko(340,80,10);
 plinko8 = new Plinko(390,80,10);
 plinko9 = new Plinko(440,80,10);

/// 2nd Layer
 plinko10 = new Plinko(10,160,10);
 plinko11 = new Plinko(65,160,10);
 plinko12 = new Plinko(125,160,10);
 plinko13 = new Plinko(185,160,10);
 plinko14 = new Plinko(245,160,10);
 plinko15 = new Plinko(295,160,10);
 plinko16 = new Plinko(345,160,10);
 plinko17 = new Plinko(395,160,10);
 plinko18 = new Plinko(445,160,10);
 plinko19 = new Plinko(490,160,10);

/// 3rd Layer
 plinko20 = new Plinko(40,240,10);
 plinko21 = new Plinko(90,240,10);
 plinko22 = new Plinko(140,240,10);
 plinko23 = new Plinko(190,240,10);
 plinko24 = new Plinko(240,240,10);
 plinko25 = new Plinko(290,240,10);
 plinko26 = new Plinko(340,240,10);
 plinko27 = new Plinko(390,240,10);
 plinko28 = new Plinko(440,240,10);

///4th Layer
 plinko29 = new Plinko(10,320,10);
 plinko30 = new Plinko(65,320,10);
 plinko31 = new Plinko(125,320,10);
 plinko32 = new Plinko(185,320,10);
 plinko33 = new Plinko(245,320,10);
 plinko34 = new Plinko(295,320,10);
 plinko35 = new Plinko(345,320,10);
 plinko36 = new Plinko(395,320,10);
 plinko37 = new Plinko(445,320,10);
 plinko38 = new Plinko(490,320,10); 

 division = new Division(2,550,5,300);
 division2 = new Division(80,550,5,300);
 division3 = new Division(160,550,5,300);
 division4 = new Division(245,550,5,300);
 division5 = new Division(330,550,5,300);
 division6 = new Division(410,550,5,300);
 division7 = new Division(490,550,5,300);

}

function draw() {
  background(0);

  ground.display();

 

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var r=0; r<plinkos.length;r++){
    plinkos[r].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }

 
 
  
 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();

 plinko10.display();
 plinko11.display();
 plinko12.display();
 plinko13.display();
 plinko14.display();
 plinko15.display();
 plinko16.display();
 plinko17.display();
 plinko18.display();
 plinko19.display();
 plinko20.display();

 plinko21.display();
 plinko22.display();
 plinko23.display();
 plinko24.display();
 plinko25.display();
 plinko26.display();
 plinko27.display();
 plinko28.display();

  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();

 //particle.display();

 //division.display();
 //division2.display();
 //division3.display();
 //division4.display();
 //division4.display();
 //division5.display();
 //division6.display();
 //division7.display();

  drawSprites();
}