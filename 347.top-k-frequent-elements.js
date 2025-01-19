// https://leetcode.com/problems/top-k-frequent-elements/description/

// Top K Frequent Elements
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]

// Constraints:
// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

const topK = (intArray, k) => {
  // create a frequency map
  const mapObject = {};
  for (let int of intArray) {
    mapObject[int] = (mapObject[int] || 0) + 1;
  }

  // array of [key, value] pairs
  const frequencyMap = Object.entries(mapObject);
  frequencyMap.sort((a, b) => b[1] - a[1]);

  // return top k most frequency elemse
  const answerKeys = frequencyMap.slice(0, k).map(([key]) => Number(key));

  return answerKeys;
};

// Option 2
const topKSolution2 = (intArray, k) => {
  // Step 1: Create a frequency map using a Map object
  const frequencyMap = new Map();

  for (const int of intArray) {
    frequencyMap.set(int, (frequencyMap.get(int) || 0) + 1);
  }

  // Step 2: Convert Map entries to an array and sort by frequency
  // You cannot directly use Object.entries on a Map because Object.entries is specifically designed for plain JavaScript objects, not for Map objects.
  const sortedEntries = Array.from(frequencyMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // Step 3: Extract the top k keys
  const result = sortedEntries.slice(0, k).map(([key]) => key);

  return result;
};

// Test solution

const intTest = [1, 2, 2, 3, 3, 3, 3, 4];
k = 2;

console.log(topKSolution2(intTest, k));
