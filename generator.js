//-----------------------------------------------------------
//TEST RITA
var rs = new RiString("The elephant took a bite!");
console.log(rs.features());
//-----------------------------------------------------------


//-----------------------------------------------------------
//THE USER INPUT VIA P5
var userString1
var userString2


function setup() {
  var canvas = createCanvas(500, 150);
  canvas.parent("linesIn");

  userLine1 = createInput("Insert your first line of the first bar here");
  userLine2 = createInput("Insert your first line of the second bar here");
  userLine1.position(windowWidth/4, 80);
  userLine2.position(windowWidth/4, 130);
  userLine1.size(500, 30);
  userLine2.size(500, 30);

  button = createButton("Submit");
  button.position(windowWidth/4, 180);
  button.size(80, 40);
  button.mousePressed(handleInput);
  textAlign(CENTER);
  textSize(50);

  userLine1.center('horizontal');
  userLine2.center('horizontal');
  button.center('horizontal');
}

function draw() {
  clear();
}
function windowResized() {
  userLine1.center('horizontal');
  userLine2.center('horizontal');
  button.center('horizontal');
}
//-----------------------------------------------------------


//-----------------------------------------------------------
//HANDLING THE USER INPUT
function handleInput() {
  userString1 = userLine1.value()
  userString2 = userLine2.value()

  var x = generateRapLines()
  updateBars(0, userString1, x[0], x[1], x[2])

  var y = generateRapLines()
  updateBars(1, userString2, y[0], y[1], y[2])

  var w = generateRapLines()
  updateBars(2, userString1, w[0], w[1], w[2])

  var z = generateRapLines()
  updateBars(3, userString2, z[0], z[1], z[2])
}


//THIS IS WHERE RITA WORKS
function generateRapLines()
{
  var lines = []
//"dt nn vbd dt nn !"
  var testS1 = RiTa.randomWord("dt") + " " + RiTa.randomWord("nn")
  + " " + RiTa.randomWord("vbd") + " " + RiTa.randomWord("dt")
  + " " + RiTa.randomWord("nn")

  var testS2 = RiTa.randomWord("dt") + " " + RiTa.randomWord("nn")
  + " " + RiTa.randomWord("vbd") + " " + RiTa.randomWord("dt")
  + " " + RiTa.randomWord("nn")

  var testS3 = RiTa.randomWord("dt") + " " + RiTa.randomWord("nn")
  + " " + RiTa.randomWord("vbd") + " " + RiTa.randomWord("dt")
  + " " + RiTa.randomWord("nn")
  
  lines.push(testS1)
  lines.push(testS2)
  lines.push(testS3)

  return lines

}


function updateBars(barNum, l1, l2, l3, l4)
{
  var a = "line" + (4*barNum + 1)
  console.log(a)
  var b = "line" + (4*barNum + 2)
  var c = "line" + (4*barNum + 3)
  var d = "line" + (4*barNum + 4)

  document.getElementById(a).innerHTML = l1
  document.getElementById(b).innerHTML = l2
  document.getElementById(c).innerHTML = l3
  document.getElementById(d).innerHTML = l4
}
