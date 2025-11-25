const mergeSort = (arr) => {
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

const sort = (arr) => {
  let i = 0;
  let j = 0;
  let sortedArray = [];

  while (left < right) {
    if (arr[left] > arr[right]) {
      sortedArray.push(arr[left]);
    } else {
    }
  }
  return [...sortedArray];
};

console.log(mergeSort([64, 25, 12, 22, 11]));
