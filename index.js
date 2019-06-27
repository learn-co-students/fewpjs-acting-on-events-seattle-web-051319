// Your code here

var doger = document.getElementById("dodger");

dodger.style.backgroundColor ="#FF69B4"
doger.style.height ="15px"
dodger.style.left = "180px";
dodger.style.bottom = "100px";

document.addEventListener("keydown", function(e){

  console.log(e.key);

  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

});

document.addEventListener("keydown", function(e){

  console.log(e.key);

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
  dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
  dodger.style.left = `${left + 10}px`;
  }
}
