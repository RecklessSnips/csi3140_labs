let gameBoard = [];
let position = 0;
// Step 1
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
console.log(gameBoard);
console.log("C's position: ", position);

// Step 2
const moveLeft = () => {
  let left = position - 1;
  gameBoard[left] = gameBoard[position] + gameBoard[left];
  gameBoard[position] = "";
  position = position - 1;
  console.log(gameBoard);
  console.log("C's position after move left: ", position);
};
// moveLeft();

const moveRight = () => {
  let right = position + 1;
  gameBoard[right] = gameBoard[position] + gameBoard[right];
  gameBoard[position] = "";
  position = position + 1;
  console.log(gameBoard);
  console.log("C's position after move right: ", position);
};
moveRight();
