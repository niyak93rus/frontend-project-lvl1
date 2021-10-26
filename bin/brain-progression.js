#!/usr/bin/env node
import progressGame from '../src/games/progress-game.js';
import gameMaster from '../src/index.js';

const rules = 'What number is missing in the progression?';
gameMaster(rules, progressGame());
