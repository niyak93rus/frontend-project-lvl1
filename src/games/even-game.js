import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random.js';
import { maxRounds } from '../index.js';
import isEven from '../isEven.js';

const evenGame = () => {
  let correctAnswer;

  let counter = 0;
  const pairs = [];
  while (counter < maxRounds) {
    const number = getRandomInt(25);
    const question = `Question: ${number}`;
    if (isEven(number) === true) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    pairs.push(cons(question, correctAnswer));

    counter += 1;
  }

  return pairs;
};

export default evenGame;
