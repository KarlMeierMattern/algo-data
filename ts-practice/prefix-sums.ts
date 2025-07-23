// Write a function that takes an array of numbers and returns an array of prefix sums.
// Prefix sums are precomputed running totals of an array.

// [1, 2, 3, 4] → [1, 3, 6, 10]
// [5, 10, -2] → [5, 15, 13]

// Output type: number[]
// Time: O(n)
// No external libraries

const prefixSums = (arr: number[]): number[] => {
  const cumSum: number[] = [];
  arr.reduce((acc, curr) => {
    cumSum.push(acc + curr);
    return acc + curr;
  }, 0);
  return cumSum;
};

console.log(prefixSums([1, 2, 3, 4]));

// solution 2
const prefixSums2 = (arr: number[]): number[] => {
  const cumSum: number[] = [];
  let total = 0;
  for (const num of arr) {
    total += num;
    cumSum.push(total);
  }
  return cumSum;
};

console.log(prefixSums2([1, 2, 3, 4]));
