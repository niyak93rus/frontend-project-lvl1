import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random.js';
import { maxRounds } from '../index.js';

const calcGame = () => {
  const getRandomItem = (arr) => arr[getRandomInt(0, arr.length)];

  const rules = 'What is the result of the expression?';

  const calculate = (num1, num2, operand) => {
    let result;
    switch (operand) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      default:
        result = num1 * num2;
        break;
    }
    return result;
  };

  const pairs = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const arr = ['+', '-', '*'];

    const firstNum = getRandomInt(1, 25);
    const operand = getRandomItem(arr);
    const secondNum = getRandomInt(1, 25);

    const expression = `${firstNum} ${operand} ${secondNum}`;

    const correctAnswer = calculate(firstNum, secondNum, operand).toString();

    pairs.push(cons(expression, correctAnswer));
  }

  return { rules, pairs };
};

export default calcGame;
