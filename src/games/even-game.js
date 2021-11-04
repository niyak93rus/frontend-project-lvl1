import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random-int.js';
import { maxRounds } from '../index.js';

const isEven = (num) => num % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const roundsData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomInt(1, 25);

    roundsData.push(cons(number, isEven(number) ? 'yes' : 'no'));
  }

  return { rules, roundsData };
};

export default evenGame;
