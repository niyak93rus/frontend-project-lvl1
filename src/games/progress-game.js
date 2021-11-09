import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random-int.js';
import { roundsCount } from '../index.js';

const rule = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const values = [];
  for (let i = 0; i < length; i += 1) {
    values.push(start + i * step);
  }
  return values;
};

const progressGame = () => {
  const roundsData = [];

  for (let counter = 0; counter < roundsCount; counter += 1) {
    const length = getRandomInt(5, 10);
    const startNumber = getRandomInt(0, 20);
    const progressor = getRandomInt(1, 10);

    const progression = createProgression(startNumber, progressor, length);

    const hiddenElement = getRandomInt(0, progression.length);
    const correctAnswer = progression[hiddenElement].toString();

    progression[hiddenElement] = '..';

    roundsData.push(cons(progression.join(' '), correctAnswer));
  }

  return { rule, roundsData };
};

export default progressGame;
