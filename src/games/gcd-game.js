import { cons } from '@hexlet/pairs';
import { maxRounds } from '../index.js';
import findMaxItem from '../find-max-item.js';
import getRandomInt from '../get-random.js';

const gcdGame = () => {
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

  return pairs;
};

export default gcdGame;
