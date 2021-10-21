import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const checkEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const checkAnswer = (number, answer) => {
  if (checkEven(number) === true && answer === 'yes') {
    return true;
  }
  if (checkEven(number) === false && answer === 'no') {
    return true;
  }
  return false;
};

const gameMaster = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInt(100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question();

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
