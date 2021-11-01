import { cons } from '@hexlet/pairs';
import { maxRounds } from '../index.js';
import getRandomInt from '../get-random-int.js';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));
const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const pairs = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const firstNumber = getRandomInt(0, 50);
    const secondNumber = getRandomInt(0, 50);

    pairs.push(cons(`${firstNumber} ${secondNumber}`, gcd(firstNumber, secondNumber).toString()));
  }

  return { rules, pairs };
};

export default gcdGame;
