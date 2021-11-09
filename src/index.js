import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const roundsCount = 3;

const play = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const { rule, roundsData } = game();
  console.log(rule);

  for (let i = 0; i < roundsData.length; i += 1) {
    console.log(`Question: ${car(roundsData[i])}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(roundsData[i]);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default play;
