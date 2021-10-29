import getRandomInt from './get-random.js';

const getRandomItem = (arr) => arr[getRandomInt(arr.length)];

export default getRandomItem;
