import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random.js';
import { maxRounds } from '../index.js';

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };

  const pairs = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomInt(25);
    const question = `Question: ${number}`;

    pairs.push(cons(question, isEven(number) ? 'yes' : 'no'));
  }

  return { rules, pairs };
};

export default evenGame;
