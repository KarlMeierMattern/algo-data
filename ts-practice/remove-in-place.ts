// Given an array of numbers, remove all zeroes in-place (no filter(), no .splice()), and return the new length.

// [0, 1, 0, 3, 12] → [1, 3, 12, _, _], returns 3
// [1, 2, 3] → [1, 2, 3], returns 3
// [0, 0, 0] → [_, _, _], returns 0

// Output: number (the new length)
// Modify array in-place (no new array)
// Fill the remaining values with 0 if needed
// Time: O(n), Space: O(1)

const removeZeroes = (arr: number[]): number => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
};

console.log(removeZeroes([0, 1, 0, 3, 12]));
