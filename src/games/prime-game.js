import getRandomInt from '../get-random.js';
import isPrime from '../isPrime.js';

const primeGame = () => {
  const number = getRandomInt(100);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${number}`);

  let answer;
  if (isPrime(number) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return answer;
};

export default primeGame;
