// Write a function that returns the maximum sum of any k consecutive numbers in an array.
const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

// output
// 9 // → because 5 + 1 + 3 = 9 is the highest sum of 3 consecutive numbers

// solutions 1
const optimisedSlidingWindow = (array: number[], k: number): number => {
  if (array.length < k) return 0;

  let max = 0;
  let current = 0;

  // Initial window
  for (let i = 0; i < k; i++) {
    current += array[i];
  }

  max = current;

  // Slide the window
  for (let i = k; i < array.length; i++) {
    current = current - array[i - k] + array[i];
    max = Math.max(max, current);
  }

  return max;
};

console.log(optimisedSlidingWindow(nums, k));

// solution 2
const slidingWindow = (array: Array<number>, k: number): number => {
  let max = 0;
  let current = 0;
  for (let i = 0; i <= array.length - k; i++) {
    current = array
      .slice(i, i + k)
      .reduce((acc: number, curr: number) => acc + curr, 0);
    max = Math.max(current, max);
  }
  return max;
};

// console.log(slidingWindow(nums, k));

// const sliceArray = nums.slice(0, 3);
// const sumSlice = sliceArray.reduce((acc, curr) => acc + curr, 0);
// console.log(sumSlice);
