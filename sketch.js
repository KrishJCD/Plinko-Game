const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var plinkos=[];
var particles=[];
var divisions=[];
var ground;



function setup() {
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width*3,20);
  for(var k=0;k<=width*3;k+=80)
  {
    divisions.push(new Divisions(k,(height-100/2),10,100));
  }
  createCanvas(800,400);  

  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,40));
  }
  for(var i=10;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,80));
  }
  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,120));
  }
  for(var i=10;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,160));
  }
  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,200));
  }
  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,40));
  }




}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }
  for(var k=0;k<divisions.length;k++)
  {
    divisions[k].display();
  }
  if(frameCount%60==0)
  {
    particles.push(new Particles(random(width/2-40,width/2+40),10));
  }

  for(var j=0;j<particles.length;j++)
  {
    particles[j].display();
  }
  ground.display();

}