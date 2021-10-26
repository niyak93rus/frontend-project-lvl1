import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxRounds = 3;
// greet user
const gameMaster = (rules, pairs) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  // iterate pairs
  for (let i = 0; i < pairs.length; i += 1) {
    // ask question and prompt user for answer
    console.log(car(pairs[i]));
    const userAnswer = readlineSync.question('Your answer: ');
    // compare answer
    if (userAnswer !== cdr(pairs[i])) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(pairs[i])}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  // finish
  console.log(`Congratulations, ${name}!`);
};

export default gameMaster;
