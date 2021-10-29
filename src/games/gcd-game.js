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

  const pairs = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const firstNumber = getRandomInt(50);
    const secondNumber = getRandomInt(50);

    let max;

    if (firstNumber > secondNumber) {
      max = firstNumber;
    } else {
      max = secondNumber;
    }

    const divisors = [];
    for (let j = 1; j <= max; j += 1) {
      if (firstNumber % j === 0 && secondNumber % j === 0) {
        divisors.push(j);
      }
    }
    const answer = findMaxItem(divisors);
    const question = `Question: ${firstNumber} ${secondNumber}`;

    const correctAnswer = answer.toString();
    pairs.push(cons(question, correctAnswer));
  }

  return { rules, pairs };
};

export default gcdGame;
