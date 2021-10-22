import getRandomInt from '../get-random.js';

const gcdGame = () => {
  const firstNumber = getRandomInt(50);
  const secondNumber = getRandomInt(50);

  let max;
  let answer;

  if (firstNumber > secondNumber) {
    max = firstNumber;
  } else {
    max = secondNumber;
  }

  for (let i = 0; i < max; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      answer = i;
    }
  }

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`${firstNumber} ${secondNumber}`);

  return answer.toString();
};

export default gcdGame;
