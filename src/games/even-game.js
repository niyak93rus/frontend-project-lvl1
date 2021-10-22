import getRandomInt from '../get-random.js';
import isEven from '../isEven.js';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = getRandomInt(25);

  let correctAnswer;
  console.log(`Question: ${number}`);
  if (isEven(number) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

export default evenGame;
