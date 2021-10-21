import checkEven from './check-even.js';

const checkAnswer = (number, answer) => {
  if (checkEven(number) === true && answer === 'yes') {
    return true;
  }
  if (checkEven(number) === false && answer === 'no') {
    return true;
  }
  return false;
};

export default checkAnswer;
