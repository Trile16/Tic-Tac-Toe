let turn = document.getElementById("turn")
let board = document.getElementById("board")

let gameState = {
    active: true,
    players: "X",
    board : [
        [null, null, null],
        [null, null, null],
        [null, null, null]]
}

function makeBoard() {
    turn.innerHTML = `It's ${gameState.players} turn!`;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            const cell = document.createElement("div")
            cell.classList.add("cell")
            cell.id = `${i},${j}`
            board.appendChild(cell)
        }
    }
}

makeBoard();

function playMove(id) {
    let row = id[0];
    let column = id[2];

    if (gameState.board[row][column] === null) {
        gameState.board[row][column] = gameState.players;
        console.log(gameState.board[row][column])
        switchTurns()
    }
}

function renderBoard() {
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            let cell = document.getElementById(`${i},${j}`)
            if (gameState.board[i][j] !== null) {
                cell.innerHTML = gameState.board[i][j]
            }
        }
    }
}

function switchTurns() {
    if (gameState.players === "X") {
        gameState.players = "O"
    } else {
        gameState.players = "X"
    }
}

function checkRow() {
    for (let i = 0; i < 3; i++) {
        if (gameState.board[i][0] === "X" && gameState.board[i][1] === "X" && gameState.board[i][2] === "X") {
            turn.innerHTML = "X wins~!"
            gameState.active = false;
        } else if (gameState.board[i][0] === "O" && gameState.board[i][1] === "O" && gameState.board[i][2] === "O") {
            turn.innerHTML = `O wins~!`;
            gameState.active = false;
        }
    }
}

function checkColumn() {
    for (let i = 0; i < 3; i++) {
        if (gameState.board[0][i] === "X" && gameState.board[1][i] === "X" && gameState.board[2][i] === "X") {
            turn.innerHTML = "X wins~!"
            gameState.active = false;
        } else if (gameState.board[0][i] === "O" && gameState.board[1][i] === "O" && gameState.board[2][i] === "O") {
            turn.innerHTML = `O wins~!`;
            gameState.active = false;
        }
    }
}

function checkDiagonal() {
    if (gameState.board[0][0] === "X" && gameState.board[1][1] === "X" && gameState.board[2][2] === "X") {
        turn.innerHTML = "X wins~!"
        gameState.active = false;
    } else if (gameState.board[0][2] === "X" && gameState.board[1][1] === "O" && gameState.board[2][0] === "O") {
        turn.innerHTML = `X wins~!`;
        gameState.active = false;
    } else if (gameState.board[0][0] === "O" && gameState.board[1][1] === "O" && gameState.board[2][2] === "O") {
        turn.innerHTML = `O wins~!`;
        gameState.active = false;
    } else if (gameState.board[0][2] === "O" && gameState.board[1][1] === "O" && gameState.board[0][2] === "O") {
        turn.innerHTML = `O wins~!`;
        gameState.active = false;
    }
}

board.addEventListener('click', handleEvent)

function handleEvent(event) {
    let id = event.target.id;

    if (gameState.active === true) {
        playMove(id)
        turn.innerHTML = `It's ${gameState.players} turn!`;
        renderBoard()
        checkRow()
        checkColumn()
        checkDiagonal()
    }
}