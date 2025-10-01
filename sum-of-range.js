// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

const range = (start, end, step = 1) => {
  const newArr = [];

  if (start > end) {
    for (i = start; i > end - 1; i = i + step) {
      newArr.push(i);
    }
    return newArr;
  } else {
    for (let i = start; i < end + 1; i = i + step) {
      newArr.push(i);
    }
    return newArr;
  }
};

const sum = (arr) => {
  let cumSum = 0;
  for (let i of arr) {
    cumSum += i;
  }
  return cumSum;
};

console.log(range(10, 2, -1));
// console.log(sum(range(1, 10)));
