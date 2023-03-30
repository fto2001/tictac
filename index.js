let move = 0;
const area = document.getElementById("area");
const boxes = document.getElementsByClassName("box");

area.addEventListener("click", (event) => onCellClick(event));

function onCellClick(event) {
    if (event.target.className == "box") {
        const isCellOccupied = event.target.innerHTML !== "";

        if (isCellOccupied) return;

        if (move % 2 == 0) {
            event.target.innerHTML = "X";
        } else if (move % 2 !== 0) {
            event.target.innerHTML = "O";
        }
    }

    move++;
    check();
    draw();
}

function audioSania() {
    const audioSania = new Audio("sounds/sania.mp3");
    audioSania.play();
}

function audioKolia() {
    const audioKolia = new Audio("sounds/kolia.mp3");
    audioKolia.play();
}

function cheese() {
    const cheese = new Audio("sounds/cheese.mp3");
    cheese.play();
}

function check() {
    const boxes = document.getElementsByClassName("box");
    const symbols = ['X', 'O'];
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (i = 0; i < arr.length; i++) {
        symbols.forEach((symbol, index) => {
            const isWinningCombination = boxes[arr[i][0]].innerHTML === symbol
                && boxes[arr[i][1]].innerHTML === symbol
                && boxes[arr[i][2]].innerHTML === symbol;

            if (isWinningCombination) {
                const winningSymbol = index === 0 ? 'first' : 'second';

                winningSymbol ===' first' ? audioSania() : audioKolia();
                $(".sub").text(`The ${winningSymbol} player wins`);
                $("body").addClass(winningSymbol);
                setTimeout(() => {
                    $("body").removeClass(winningSymbol);
                    alert(`The ${winningSymbol} player wins`);
                    location.reload();
                }, 200);
            }
        })
    }
}

function draw() {
    if (move === 9) {
        cheese();
        $(".sub").text("Draw");
        $("body").addClass("third");
        setTimeout(function () {
            $("body").removeClass("third");
            alert("Draw");
            location.reload();
        }, 200);
    }
}
