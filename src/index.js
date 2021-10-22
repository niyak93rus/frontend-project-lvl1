import readlineSync from 'readline-sync';
import checkAnswer from './check-answer.js';
import calcGame from './games/calc-game.js';
import evenGame from './games/even-game.js';
import gcdGame from './games/gcd-game.js';

// greet user
const gameMaster = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // iterate rounds
  const maxRounds = 3;
  let counter = 0;
  while (counter < maxRounds) {
    // ask question
    let correctAnswer;
    if (gameName === 'brain-even') {
      correctAnswer = evenGame();
    }
    if (gameName === 'brain-calc') {
      correctAnswer = calcGame();
    }
    if (gameName === 'brain-gcd') {
      correctAnswer = gcdGame();
    }
    const userAnswer = readlineSync.question('Your answer: ');
    // compare answer
    if (checkAnswer(userAnswer, correctAnswer) === true) {
      counter += 1;
      console.log('Correct!');
    }
    if (checkAnswer(userAnswer, correctAnswer) === false) {
      console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  // finish
  console.log(`Congratulations, ${name}!`);
};

export default gameMaster;
