const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImage
var ground1, ground2, ground3, ground4, ground5, ground6;
var jiffy;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7;

function preload(){
  backgroundImage = loadImage("images/caveBackground.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(1490,75,450,50,PI*-5);
  ground2 = new Ground(450,125,1200,50,PI/0.5);
  ground3 = new Ground(1400,320,400,50,PI*-5);
  ground4 = new Ground(300,320,1200,50,PI*5);
  ground5 = new Ground(600,265,120,20);
  ground6 = new Ground(1400,570,670,50,PI*4);
  ground7 = new Ground(windowWidth/2,725,1600,150,PI*1.5);
  ground8 = new Ground(350,480,75,20,PI*-100);

  jiffy = new Player(500,250);
  rock1 = new Rocks(250,400,50,50);
  rock2 = new Rocks(150,-320,50,50);
}

function draw() {
  background(backgroundImage); 
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  jiffy.display();
  rock1.display();
  rock2.display();
}