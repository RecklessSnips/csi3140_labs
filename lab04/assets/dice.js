export const rollDice = (times) => {
  let dices = [];
  for (let i = 0; i < times; i++) {
    dices.push(Math.floor(Math.random() * 6) + 1);
  }
  return dices;
};
