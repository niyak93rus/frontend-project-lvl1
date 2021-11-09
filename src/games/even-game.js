import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random-int.js';
import { roundsCount } from '../index.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const roundsData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(1, 25);

    roundsData.push(cons(number, isEven(number) ? 'yes' : 'no'));
  }

  return { rule, roundsData };
};

export default evenGame;
