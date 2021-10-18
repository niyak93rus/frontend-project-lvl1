import readlineSync from 'readline-sync';

export const askName = () => {
    const name = (readlineSync.question('What is your name? '));
    return console.log(`Hello, ${name}!`);
};