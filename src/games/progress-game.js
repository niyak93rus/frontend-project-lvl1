import { cons } from '@hexlet/pairs';
import getRandomInt from '../get-random.js';
import { maxRounds } from '../index.js';
import randomItem from '../random-item.js';

const progressGame = () => {
  const rules = 'What number is missing in the progression?';

  let counter = 0;
  const pairs = [];

  while (counter < maxRounds) {
    let length = getRandomInt(10);
    while (length < 5) {
      length = getRandomInt(10);
    }

    let progressor = getRandomInt(10);
    while (progressor < 1) {
      progressor = getRandomInt(10);
    }

    const numbers = [];
    const startNumber = getRandomInt(20);

    for (
      let j = startNumber, i = 0;
      i < length && j < length * progressor + startNumber;
      j += progressor, i += 1
    ) {
      numbers.push(j);
    }

    const hiddenElement = randomItem(numbers);
    const index = numbers.indexOf(hiddenElement);

    numbers[index] = '..';
    const question = `Question: ${numbers.join(' ')}`;

    const correctAnswer = hiddenElement.toString();

    pairs.push(cons(question, correctAnswer));

    counter += 1;
  }

  return { rules, pairs };
};

export default progressGame;
