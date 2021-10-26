#!/usr/bin/env node
import evenGame from '../src/games/even-game.js';
import gameMaster from '../src/index.js';

// const gameName = 'brain-even';
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

gameMaster(rules, evenGame());
