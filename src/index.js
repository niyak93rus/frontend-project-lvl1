import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxRounds = 3;

const gameMaster = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const gameInfo = game();
  console.log(gameInfo.rules);

  for (let i = 0; i < gameInfo.roundsData.length; i += 1) {
    console.log(`Question: ${car(gameInfo.roundsData[i])}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(gameInfo.roundsData[i]);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameMaster;
