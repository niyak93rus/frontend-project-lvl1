#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const brainCalc = () => {
  const arr = ['+', '-', '*'];

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 0;
  while (counter < 3) {
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
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(userAnswer, 10) === result) {
      counter += 1;
      console.log('Correct!');
    }
    if (parseInt(userAnswer, 10) !== result) {
      console.log(
        // eslint-disable-next-line comma-dangle
        `${userAnswer} is wrong answer ;(. Correct answer was ${result}`
      );
      console.log(`Let's try again, ${name}!`);
      return 1;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainCalc();
