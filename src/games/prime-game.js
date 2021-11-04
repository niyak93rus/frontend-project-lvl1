import { cons } from '@hexlet/pairs';
import { maxRounds } from '../index.js';
import getRandomInt from '../get-random-int.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGame = () => {
  const roundsData = [];

  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomInt(0, 100);

    roundsData.push(cons(number, isPrime(number) ? 'yes' : 'no'));
  }

  return { rules, roundsData };
};

export default primeGame;
