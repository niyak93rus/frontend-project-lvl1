import getRandomInt from './get-random.js';

const getRandomItem = (arr) => arr[getRandomInt(0, arr.length)];

export default getRandomItem;
