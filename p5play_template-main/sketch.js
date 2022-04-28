var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  /*b1 = createButton("ADD");
  b1.position(10, 200);
  b2.mousePressed(add)*/

  b1 = createImg('add.png');
  b1.position(25,200);
  b1.size(50,50);
  b1.mouseClicked(add);
  
  b2 = createImg('mul.png');
  b2.position(120,200);
  b2.size(50,50);
  b2.mouseClicked(mul);
  
  b3 = createImg('sub.png');
  b3.position(225,200);
  b3.size(50,50);
  b3.mouseClicked(sub);
  
  b4 = createImg('div.png');
  b4.position(325,200);
  b4.size(50,50);
  b4.mouseClicked(div);
  
  
  
  textAlign(CENTER);
  textSize(15);
}

function mul() {
  console.log(n1 * n2);
}

function add() {
  console.log(n1 + n2);
}

function sub() {
  console.log(n1 - n2);
}

function div() {
  console.log(n1 / n2);
}

function draw() {


  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)


  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())

}