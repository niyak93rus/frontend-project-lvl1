import { cons } from '@hexlet/pairs';
import { roundsCount } from '../index.js';
import getRandomInt from '../get-random-int.js';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));
const rule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const roundsData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNum = getRandomInt(0, 50);
    const secondNum = getRandomInt(0, 50);

    const pairOfNumbers = `${firstNum} ${secondNum}`;
    const answer = gcd(firstNum, secondNum).toString();

    roundsData.push(cons(pairOfNumbers, answer));
  }

  return { rule, roundsData };
};

export default gcdGame;
