let turn = document.getElementById("turn")
let board = document.getElementById("board")

let gameState = {
    players: "X",
    board : [
        [null, null, null],
        [null, null, null],
        [null, null, null]]
}

function makeBoard() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            const cell = document.createElement("div")
            cell.classList.add("cell")
            cell.id = `${i},${j}`
            board.appendChild(cell)
        }
    }
}

function playMove(id) {
    let row = id[0];
    let column = id[2];

    if (gameState.board[row][column] === null) {
        gameState.board[row][column] = gameState.players;
        console.log(gameState.board[row][column])
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
        gameState.players === "O"
    } else {
        gameState.players === "X"
    }
}

board.addEventListener('click', handleEvent)

function handleEvent(event) {
    let id = event.target.id;
    playMove(id)
    renderBoard()
    switchTurns()

}

makeBoard();