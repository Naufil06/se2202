let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Initialize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

// This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard() {
    // Programmatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById('c' + i);
        let btn = document.createElement('button');
        btn.innerText = "[ ]";
        cell.appendChild(btn);

        // Add event listener to call takeCell when clicked
        btn.addEventListener('click', function(event) {
            takeCell(event);
        });
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event) {
    // Replace [ ] with the current player's symbol (X or O)
    let btn = event.target;
    btn.innerText = "[" + nextPlayer + "]";

    // Disable the button after it's clicked once
    btn.disabled = true;

    // Switch to the next player
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';

    // Update the label for the next player
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver()) {
        document.getElementById('game-over-lbl').innerHTML = "<h1>Game Over</h1>";
    }
}

function isGameOver() {
    // Return true if all buttons are disabled (all cells clicked)
    let btns = document.querySelectorAll('button');
    for (let btn of btns) {
        if (!btn.disabled) {
            return false;
        }
    }
    return true;
}
