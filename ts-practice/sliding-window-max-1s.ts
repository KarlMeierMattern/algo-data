// You’re given a binary array (only 0s and 1s). Return the length of the longest streak of consecutive 1s.

// [1, 1, 0, 1, 1, 1] → 3
// [1, 0, 1, 1, 0, 1] → 2
// [0, 0, 0] → 0

// Output: number
// Use a simple loop
// No .filter() or .map()

const slidingWindow = (arr: number[]): number => {
  let max = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      current++;
      max = Math.max(current, max);
    } else {
      current = 0;
    }
  }
  return max;
};

console.log(slidingWindow([1, 1, 1, 1, 0, 1, 1, 1]));
