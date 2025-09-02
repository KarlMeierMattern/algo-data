// Given an array of numbers and an integer k, rotate the array to the right by k steps.

// rotateArray([1, 2, 3, 4, 5], 2);
// → [4, 5, 1, 2, 3]

// Think about slicing and concatenating (slice + concat) OR do it with reverse in place (harder but O(1) space).

const rotateArray = (arr: number[], k: number): number[] => {
  const n = arr.length;
  const shift = k % n; // handle k > n
  return arr.slice(-shift).concat(arr.slice(0, n - shift));
};
// console.log(rotateArray([1, 2, 3, 4, 5], 1));

const rotateArray2 = (arr: number[], k: number): number[] => {
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
};
console.log(rotateArray2([1, 2, 3, 4, 5], 7));
