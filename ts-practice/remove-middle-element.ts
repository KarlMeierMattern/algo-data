// Write a function that removes the middle element(s) from an array:

// ["a", "b", "c"]        → ["a", "c"]
// ["a", "b", "c", "d"]   → ["a", "d"]
// ["a", "b", "c", "d", "e", "f"] → ["a", "b", "e", "f"]

// Modify the original array in-place using .splice()
// Return the same array.

const spliceArray = (array: Array<string>): Array<string> => {
  if (array.length % 2 === 0) {
    const left = array.length / 2 - 1;
    array.splice(left, 2);
  } else {
    const left = Math.floor(array.length / 2);
    array.splice(left, 1);
  }
  return array;
};

console.log(spliceArray(["a", "b", "c", "d"]));
