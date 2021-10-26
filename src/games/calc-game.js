import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random.js';
import randomItem from '../random-item.js';
import { maxRounds } from '../index.js';

const calcGame = () => {
  let counter = 0;
  const pairs = [];
  while (counter < maxRounds) {
    const arr = ['+', '-', '*'];

    const firstNum = getRandomInt(25);
    const operand = randomItem(arr);
    const secondNum = getRandomInt(25);

    const expression = `${firstNum} ${operand} ${secondNum}`;

    let result;
    if (operand === arr[0]) {
      result = firstNum + secondNum;
    }
    if (operand === arr[1]) {
      result = firstNum - secondNum;
    }
    if (operand === arr[2]) {
      result = firstNum * secondNum;
    }

    const question = `Question: ${expression}`;
    const correctAnswer = result.toString();

    pairs.push(cons(question, correctAnswer));

    counter += 1;
  }

  return pairs;
};

export default calcGame;
