console.log("Game development");
console.log("Tic Tac Toe Game Started");

let board = [
    "", "", "", "", "", "", "", "", ""
]

let currentPlayer = "X";

let gameActive = true;

// let cells = document.getElementsByClassName("cell");
const cells = document.querySelectorAll(".cell");

function renderBoard(){
    cells.forEach(function(cell){
        let index = cell.dataset.index;
        cell.textContent = board[index];
    })
}

function resetBoard(){
    board = [
        "", "", "", "", "", "", "", "", ""
    ]
    // renderBoard();
    cells.forEach(function(cell){
        cell.textContent = "";
        cell.classList.remove("x", "o");
    })
    if(parseInt(Math.random()*10)%2==0){
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
    gameActive = true;
}

function handleCellClick(event){
    if(gameActive == false){
        return;
    }
    let clickedCell = event.target;
    let clickedCellIndex = event.target.dataset.index;
    console.log("cell is clicked")
    console.log(clickedCellIndex)
    console.log(board[clickedCellIndex])
    if(board[clickedCellIndex]!==""){
        console.log("cell is not empty")
        return;
    }
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    console.log(board)
}

// cells[0].addEventListener("click", handleCellClick)
// cells[1].addEventListener("click", handleCellClick)
// cells[2].addEventListener("click", handleCellClick)

cells.forEach(function(cell){
    cell.addEventListener("click", handleCellClick)
})


renderBoard()

