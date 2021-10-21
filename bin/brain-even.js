#!/usr/bin/env node
import gameMaster from '../src/index.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameMaster();
  return 0;
};

export default brainEven;
