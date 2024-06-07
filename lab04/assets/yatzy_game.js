import { rollDice } from "./dice.js";

let dices = rollDice(5);
let choice = [];
// let result = [];
// console.log(dices);


const selectDice = (result, ...params) => {
  console.log(result)
  const dice = params;
  console.log('index', dice);
  for (const index of dice) {
    if (index > result.length) {
      alert("Too big");
      return;
    }
    choice.push(result[index - 1]);
    result[index - 1] = 0;
  }
  result = result.filter((choice) => choice !== 0);
  console.log("Choice: ", choice);
  console.log('Result',result);
  return result;
};

// selectDice(3, 5, 1);

const yatzy = () => {
  /*
    Let state be 0: initial roll, 1: second roll, 2: thrid roll
  */
  let state = 0;
  dices= rollDice(5); 
  console.log('dices', dices)
  let result = selectDice(dices, 2,4)
  state++

  dices = rollDice(result.length)
  result = selectDice(dices, 1,2)

  dices = rollDice(result.length)
  selectDice(dices, 1)
};

yatzy();