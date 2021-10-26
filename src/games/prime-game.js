import { cons } from '@hexlet/pairs';
import { maxRounds } from '../index.js';
import getRandomInt from '../get-random.js';
import isPrime from '../isPrime.js';

const primeGame = () => {
  let counter = 0;
  const pairs = [];

  while (counter < maxRounds) {
    const number = getRandomInt(100);

    const question = `Question: ${number}`;

    let correctAnswer;
    if (isPrime(number) === true) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    pairs.push(cons(question, correctAnswer));

    counter += 1;
  }

  return pairs;
};

export default primeGame;
