import readlineSync from 'readline-sync';
import calcGame from './games/calc-game.js';
import evenGame from './games/even-game.js';
import gcdGame from './games/gcd-game.js';
import progressGame from './games/progress-game.js';
import primeGame from './games/prime-game.js';

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
    if (gameName === 'brain-progression') {
      correctAnswer = progressGame();
    }
    if (gameName === 'brain-prime') {
      correctAnswer = primeGame();
    }
    const userAnswer = readlineSync.question('Your answer: ');
    // compare answer
    if (userAnswer !== correctAnswer) {
      console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    counter += 1;
    console.log('Correct!');
  }

  // finish
  console.log(`Congratulations, ${name}!`);
};

export default gameMaster;
