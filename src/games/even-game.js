import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random-int.js';
import { maxRounds } from '../index.js';

// eslint-disable-next-line no-unneeded-ternary
const isEven = (num) => (num % 2 === 0 ? true : false);
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const pairs = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomInt(1, 25);

    pairs.push(cons(number, isEven(number) ? 'yes' : 'no'));
  }

  return { rules, pairs };
};

export default evenGame;
