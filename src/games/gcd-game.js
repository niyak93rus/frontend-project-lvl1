import { cons } from '@hexlet/pairs';
import { maxRounds } from '../index.js';
import getRandomInt from '../get-random.js';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const findMaxItem = (arr) => {
    let maxItem;
    for (let i = 0; i < arr.length; i += 1) {
      maxItem = arr.indexOf(arr[0]);
      if (arr[i] > maxItem) {
        maxItem = arr[i];
      }
    }
    return maxItem;
  };

  let counter = 0;
  const pairs = [];
  while (counter < maxRounds) {
    const firstNumber = getRandomInt(50);
    const secondNumber = getRandomInt(50);

    let max;

    if (firstNumber > secondNumber) {
      max = firstNumber;
    } else {
      max = secondNumber;
    }

    const divisors = [];
    for (let i = 1; i <= max; i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        divisors.push(i);
      }
    }
    const answer = findMaxItem(divisors);
    const question = `Question: ${firstNumber} ${secondNumber}`;

    const correctAnswer = answer.toString();
    pairs.push(cons(question, correctAnswer));

    counter += 1;
  }

  return { rules, pairs };
};

export default gcdGame;
