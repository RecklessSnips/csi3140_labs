import { rollDice } from "./dice.js";

let dices = rollDice(5);
// Player's final choice, this array will increment as he select more dice
let choice = [];

/* 
The selectDice function will take any size parameters which represent the index
of the dice Player want to choose, and it will return a Result[] represent the
dices left, for the subsequent rolls.
*/
const selectDice = (result, ...params) => {
  console.log(result);
  const dice = params;
  console.log("index", dice);
  for (const index of dice) {
    if (index > result.length) {
      alert("Too big");
      return;
    }
    // Choice array incrmented because of player's choice
    choice.push(result[index - 1]);
    result[index - 1] = 0;
  }
  // filter the 0s and return a new array
  result = result.filter((choice) => choice !== 0);
  console.log("Choice: ", choice);
  console.log("Result", result);
  return result;
};

/*
A sample run of the game, it will select position at 2, 4 first, then 1, 2
finally the last position. Finally, the result array should be empty and choice array
should be full.
*/
const yatzy = () => {
  dices = rollDice(5);
  console.log("dices", dices);
  let result = selectDice(dices, 2, 4);

  dices = rollDice(result.length);
  result = selectDice(dices, 1, 2);

  dices = rollDice(result.length);
  selectDice(dices, 1);
};

// Run a sample game
yatzy();
