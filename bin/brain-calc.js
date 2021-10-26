#!/usr/bin/env node

import gameMaster from '../src/index.js';
import calcGame from '../src/games/calc-game.js';

const rules = 'What is the result of the expression?';

gameMaster(rules, calcGame());
