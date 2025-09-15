// Write a function that takes an array of numbers and an integer k, and returns the maximum sum of any contiguous subarray of length k.

// maxSubarraySum([2, 1, 5, 1, 3, 2], 3); // 9 (5+1+3)
// maxSubarraySum([1, 9, -1, -2, 7, 3, -1, 2], 4); // 13 (9-1-2+7)

const slidingWindow = (arr: number[], k: number): number | null => {
  if (arr.length < k) return null;

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(slidingWindow([2, 1, 5, 1, 3, 2], 3));
