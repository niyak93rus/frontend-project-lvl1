import { cons } from '@hexlet/pairs';
import { maxRounds } from '../index.js';
import getRandomInt from '../get-random-int.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const primeGame = () => {
  const pairs = [];

  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomInt(0, 100);

    pairs.push(cons(number, isPrime(number) ? 'yes' : 'no'));
  }

  return { rules, pairs };
};

export default primeGame;
