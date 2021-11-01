import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random-int.js';
import { maxRounds } from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = (start, step, length) => {
  const values = [];
  for (let i = 0; i < length; i += 1) {
    values.push(start + i * step);
  }
  return values;
};

const progressGame = () => {
  const pairs = [];

  for (let counter = 0; counter < maxRounds; counter += 1) {
    const length = getRandomInt(5, 10);
    const startNumber = getRandomInt(0, 20);
    const progressor = getRandomInt(1, 10);

    const numbers = progression(startNumber, progressor, length);

    const hiddenElement = getRandomInt(0, numbers.length);
    const correctAnswer = numbers[hiddenElement].toString();

    numbers[hiddenElement] = '..';

    pairs.push(cons(numbers.join(' '), correctAnswer));
  }

  return { rules, pairs };
};

export default progressGame;
