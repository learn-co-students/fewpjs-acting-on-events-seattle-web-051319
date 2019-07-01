// Your code here

var dodger = document.getElementById("dodger");
var game = document.getElementById("game");

dodger.style.backgroundColor = "blue";
game.style.backgroundColor = "red";
dodger.style.button = "0px";

function moveDodgerLeft(){
  var leftNum = dodger.style.left.replace("px", "");
  var left = parseInt(leftNum, 10);

  if (left > 0 ){
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight(){
  var rightNum = dodger.style.left.replace("px", "");
  var right = parseInt(rightNum, 10);

  if (right < 360){
    dodger.style.left = `${right + 10}px`;
  }
}

document.addEventListener("keydown", function(act){
  if (act.key === "ArrowLeft") {
    console.log("wooooooosh!")
    moveDodgerLeft();
  }
  if (act.key === "ArrowRight"){
    console.log("zooooooooom!!!!")
    moveDodgerRight();
  }
});
