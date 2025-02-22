// Write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

// const reverseArray = (array) => {
//   const newArray = [];
//   for (let i of array) newArray.unshift(i);
//   return newArray;
// };

const reverseArray = (array) => {
  const newArray = [];
  for (let i = array.length; i > 0; i--) {
    newArray.push(i);
  }
  return newArray;
};

const reverseArrayInPlace = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

testArray = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(testArray));
