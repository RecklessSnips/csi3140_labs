// Step 1
let gameBoard = [];
let ghostDirection = "left";
let pacman = 0;
let ghost = 0;
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

  pacman = gameBoard.indexOf("C");
  ghost = gameBoard.indexOf("^.");
};

createGame(10);
printBoard();

const gameEnd = () => {
  console.log("Game ends.");
  clearInterval(interval);
  clearInterval(moveInterval);
  printBoard();
  console.log("C's position: ", pacman);
  console.log("Ghost's position: ", ghost);
};

// Step 3
const moveLeft = (id) => {
  if (id == "p") {
    let left = pacman - 1;
    if (gameBoard[left] != "") {
      gainScore();
    }
    gameBoard[left] = "C" + gameBoard[left];
    gameBoard[pacman] = "";
    pacman = pacman - 1;
    printBoard();
    console.log("C's position after move left: ", pacman);
    console.log("Player score: ", score);
  }
  if (id == "g") {
    let left = ghost - 1;
    if (left < 0) {
      ghostDirection = "right";
      return;
    }
    gameBoard[left] = "^" + gameBoard[left];
    let tmp = gameBoard[ghost];
    gameBoard[ghost] = tmp.replace("^", "");
    ghost = ghost - 1;
    if (ghost == pacman) {
      gameEnd();
      return;
    }
    printBoard();
    console.log("Ghost after move left: ", ghost);
  }
};
// moveLeft("p");
// moveLeft("p");
// moveLeft("p");
moveLeft("g");

const moveRight = (id) => {
  if (id == "p") {
    let right = pacman + 1;
    if (gameBoard[right] != "") {
      gainScore();
      return;
    }
    gameBoard[right] = "C" + gameBoard[right];
    gameBoard[pacman] = "";
    pacman = pacman + 1;
    printBoard();
    console.log("C's pacman after move right: ", pacman);
    console.log("Player score: ", score);
  }

  if (id == "g") {
    let right = ghost + 1;
    if (right >= gameBoard.length) {
      ghostDirection = "left";
      return;
    }
    gameBoard[right] = "^" + gameBoard[right];
    let tmp = gameBoard[ghost];
    gameBoard[ghost] = tmp.replace("^", "");
    ghost = ghost + 1;
    if (ghost == pacman) {
      gameEnd();
      return;
    }
    printBoard();
    console.log("Ghost after move right: ", ghost);
  }
};
// moveRight('p');
moveRight("g");

// printBoard();
// Step 5
const resetBoard = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] != "C" && gameBoard[i] != "^.") {
      gameBoard[i] = ".";
    }
  }
  printBoard();
};

// resetBoard();

// Step 6
const ghostMove = () => {
  if (ghostDirection === "left") {
    moveLeft("g");
  } else {
    moveRight("g");
  }
};

let interval = setInterval(() => {
  if (ghostDirection === "left") {
    ghostDirection = "right";
  } else {
    ghostDirection = "left";
  }
}, 2000);

let moveInterval = setInterval(ghostMove, 300);
