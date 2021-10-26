#!/usr/bin/env node
import primeGame from '../src/games/prime-game.js';
import gameMaster from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameMaster(rules, primeGame());
