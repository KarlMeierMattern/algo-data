// Given an array of numbers and a number k, return the maximum sum of any contiguous subarray of length k.

// maxSubarraySum([2, 1, 5, 1, 3, 2], 3); // 9 → [5,1,3]
// maxSubarraySum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3); // 16 → [7,8,1]

const maxSubarraySum = (arr: number[], k: number): number => {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  maxSum = sum;

  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));
console.log(maxSubarraySum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));

// Time: O(n) → one pass for the first window (k steps), then one pass through the rest (n - k).
// Space: O(1) → just a few variables.
