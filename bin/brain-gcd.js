#!/usr/bin/env node
import gcdGame from '../src/games/gcd-game.js';
import gameMaster from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
gameMaster(rules, gcdGame());
