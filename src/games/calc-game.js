import getRandomInt from '../get-random.js';
import randomItem from '../random-item.js';

const calcGame = () => {
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

  console.log('What is the result of the expression?');
  console.log(`${expression}`);

  const correctAnswer = result.toString();
  return correctAnswer;
};

export default calcGame;
