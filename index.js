// Your code here

var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = "0px";

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    // debugger;
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    // debugger;
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
    // debugger;
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
    
  });

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//       }
//   });