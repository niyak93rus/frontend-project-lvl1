import readlineSync from 'readline-sync';
import checkAnswer from './check-answer.js';
import getRandomInt from './get-random.js';

const gameMaster = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInt(100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(randomNumber, userAnswer) === true) {
      counter += 1;
      console.log('Correct!');
    }
    if (checkAnswer(randomNumber, userAnswer) === false) {
      if (userAnswer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      }
      console.log(`Let's try again, ${name}!`);
      return 1;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameMaster();
