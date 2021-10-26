import findMaxItem from '../find-max-item.js';
import getRandomInt from '../get-random.js';

const gcdGame = () => {
  const firstNumber = getRandomInt(50);
  const secondNumber = getRandomInt(50);

  let max;

  if (firstNumber > secondNumber) {
    max = firstNumber;
  } else {
    max = secondNumber;
  }

  const divisors = [];
  for (let i = 1; i <= max; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      divisors.push(i);
    }
  }
  const answer = findMaxItem(divisors);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);

  return answer.toString();
};

export default gcdGame;
