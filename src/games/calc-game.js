import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random-int.js';
import { maxRounds } from '../index.js';

const operands = ['+', '-', '*'];

const calculate = (num1, num2, operand) => {
  let result;
  switch (operand) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const getRandomItem = (items) => items[getRandomInt(0, items.length)];

const rules = 'What is the result of the expression?';

const calcGame = () => {
  const roundsData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const firstNum = getRandomInt(1, 25);
    const operand = getRandomItem(operands);
    const secondNum = getRandomInt(1, 25);

    const expression = `${firstNum} ${operand} ${secondNum}`;

    const correctAnswer = calculate(firstNum, secondNum, operand).toString();

    roundsData.push(cons(expression, correctAnswer));
  }

  return { rules, roundsData };
};

export default calcGame;
