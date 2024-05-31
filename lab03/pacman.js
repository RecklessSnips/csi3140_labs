// Step 1
let gameBoard = [];
let position = 0;
let score = 0;

const printBoard = () => {
  console.log(gameBoard);
};

// Step 4
const gainScore = () => {
  score++;
};

// Step 2
const createGame = (length) => {
  let l = length / 2 - 1;
  for (let i = 0; i < l; i++) {
    gameBoard.push(".");
  }
  gameBoard.push("C");
  for (let i = 0; i < l - 2; i++) {
    gameBoard.push(".");
  }
  gameBoard.push("@");
  gameBoard.push(".");
  gameBoard.push("^.");

  position = gameBoard.indexOf("C");
};

createGame(10);
printBoard();
console.log("C's position: ", position);

// Step 3
const moveLeft = () => {
  let left = position - 1;
  if (gameBoard[left] != "") {
    gainScore();
  }
  gameBoard[left] = "C" + gameBoard[left];
  gameBoard[position] = "";
  position = position - 1;
  printBoard();
  console.log("C's position after move left: ", position);
  console.log("Player score: ", score);
};
moveLeft();
moveLeft();
moveLeft();

const moveRight = () => {
  let right = position + 1;
  if (gameBoard[right] != "") {
    gainScore();
  }
  gameBoard[right] = "C" + gameBoard[right];
  gameBoard[position] = "";
  position = position + 1;
  printBoard();
  console.log("C's position after move right: ", position);
  console.log("Player score: ", score);
};
moveRight();

printBoard();
// Step 5
const resetBoard = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] != "C" && gameBoard[i] != "^.") {
      gameBoard[i] = ".";
    }
  }
  printBoard();
};

resetBoard();
