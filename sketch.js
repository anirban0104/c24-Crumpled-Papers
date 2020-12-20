const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(1500, 750);
  rectMode(CENTER);

  gameState = "play";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "play") {
    background("black");
    textSize(20);
    fill("red");
    text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to play, and Up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 10,
      y: -10
    });
 }
 if (keyCode === DOWN_ARROW && gameState === "play") {
  Matter.Body.applyForce(paper.body, paper.body.position, {
    x: -10,
    y: -10
  });


}
if (keyCode === LEFT_ARROW && gameState === "play") {
  Matter.Body.applyForce(paper.body, paper.body.position, {
    x: -10,
    y: -10
  })


  if (keyCode === RIGHT_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 10,
      y: -10
    });


}}}
