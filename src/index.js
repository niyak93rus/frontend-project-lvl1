import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxRounds = 3;
// greet user
const gameMaster = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // invoke game function to show the rules and get the question-answer pairs
  const gameAnswer = game();
  console.log(gameAnswer.rules);
  // iterate pairs
  for (let i = 0; i < gameAnswer.pairs.length; i += 1) {
    // ask question and prompt user for answer
    console.log(`Question: ${car(gameAnswer.pairs[i])}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // compare answer
    const correctAnswer = cdr(gameAnswer.pairs[i]);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  // finish
  console.log(`Congratulations, ${name}!`);
};

export default gameMaster;
