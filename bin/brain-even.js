#!/usr/bin/env node
import gameMaster from '../src/check-even.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  gameMaster();
  return 0;
};
