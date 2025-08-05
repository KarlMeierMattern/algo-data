// Write a function that returns true if the array contains any duplicates.

// hasDuplicates([1, 2, 3]);           // false
// hasDuplicates([1, 2, 2, 3, 4]);     // true
// hasDuplicates(['a', 'b', 'a']);     // true

const checkDuplicates = (arr: Array<number>): boolean => {
  return new Set(arr).size !== arr.length;
};

console.log(checkDuplicates([1, 2, 3]));

// O(n) time and space for new Set(arr)
// O(1) time and space for .size and .length
// Final: O(n) time and O(n) space complexity
