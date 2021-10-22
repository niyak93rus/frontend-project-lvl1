const findMaxItem = (arr) => {
  let maxItem;
  for (let i = 0; i < arr.length; i += 1) {
    maxItem = arr.indexOf(arr[0]);
    if (arr[i] > maxItem) {
      maxItem = arr[i];
    }
  }
  return maxItem;
};

export default findMaxItem;
