const area = document.getElementById("area");
let move = 0;
const boxes = document.getElementsByClassName("box");

area.addEventListener("click", function(event) {
  if (event.target.className == "box") {
    if(move % 2==0){
      event.target.innerHTML = "X";
     } else if (move % 2 !==0){
      event.target.innerHTML = "O";
     } else if (event.target.innerHTML= "X" || "O") {
      alert("Busy");
     }
      
     }
     console.log(event.target);
    move++;
    check();
    draw();
  }
)

function audioSania() {
  const audioSania = new Audio("sounds/sania.mp3")
  audioSania.play();
}

function audioKolia() {
  const audioKolia = new Audio("sounds/kolia.mp3")
  audioKolia.play();
}

function cheese() {
  const cheese = new Audio("sounds/cheese.mp3")
  cheese.play();
}

function check() {
      const boxes = document.getElementsByClassName("box");
      const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for (i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML === "X" && boxes[arr[i][1]].innerHTML === "X" && boxes[arr[i][2]].innerHTML === "X") {
          audioSania();
          $(".sub").text("The first player wins");
          $("body").addClass("first");
            setTimeout(function() {
            $("body").removeClass("first");
            alert("The first player wins");
            location.reload(); 
          }, 200)
        } 

        if (boxes[arr[i][0]].innerHTML === "O" && boxes[arr[i][1]].innerHTML === "O" && boxes[arr[i][2]].innerHTML === "O") {
          audioKolia();
          $(".sub").text("The second player wins");
          $("body").addClass("second");
          setTimeout(function() {
          $("body").removeClass("second");
          alert("The second player wins");
          location.reload(); 
        }, 200)
    } 
    }
}

function draw() {
      if (move === 9) {
            cheese();
            $(".sub").text("Draw");
            $("body").addClass("third");
            setTimeout(function() {
            $("body").removeClass("third");
            alert("Draw");
            location.reload(); 
      }, 200)
      }
}

