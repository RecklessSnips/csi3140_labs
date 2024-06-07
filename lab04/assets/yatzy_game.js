import { rollDice } from "./dice.js";

let dices = rollDice(5);
let choice = [];
console.log(dices);

const selectDice = (...params) => {
  const dice = params;
  console.log(dice);
  for (const index of dice) {
    if (index > dices.length) {
      alert("Too big");
      return;
    }
    choice.push(dices[index - 1]);
    dices[index - 1] = 0;
  }
  let result = dices.filter((choice) => choice !== 0);
  console.log("Choice: ", choice);
  console.log("Left: ", dices);
  console.log(result);
};

selectDice(3, 5, 1);

const yatzy = () => {
  /*
    Let state be 0: initial roll, 1: second roll, 2: thrid roll
  */
  let state = 0;
};
