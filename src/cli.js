import readlineSync from 'readline-sync';

export default () => {
  const name = (readlineSync.question('What is your name? '));
  return console.log(`Hello, ${name}!`);
};
