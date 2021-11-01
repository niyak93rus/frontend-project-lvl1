import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random.js';
import { maxRounds } from '../index.js';

const progressGame = () => {
  const rules = 'What number is missing in the progression?';

  const pairs = [];

  const progression = (start, step, i) => {
    const val = start + i * step;
    return val;
  };

  for (let counter = 0; counter < maxRounds; counter += 1) {
    const length = getRandomInt(5, 10);
    const startNumber = getRandomInt(0, 20);
    const progressor = getRandomInt(1, 10);

    const numbers = [];
    for (let i = 0; i < length; i += 1) {
      numbers.push(progression(startNumber, progressor, i));
    }

    const hiddenElement = getRandomInt(0, numbers.length);
    const correctAnswer = numbers[hiddenElement].toString();

    numbers[hiddenElement] = '..';

    pairs.push(cons(numbers.join(' '), correctAnswer));
  }

  return { rules, pairs };
};

export default progressGame;
