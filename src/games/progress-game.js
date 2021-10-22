import getRandomInt from '../get-random.js';
import randomItem from '../random-item.js';

const progressGame = () => {
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
  console.log(numbers.join(', '));

  return hiddenElement.toString();
};

export default progressGame;
