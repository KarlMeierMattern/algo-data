// 1. Two-Sum (Easy)
// https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

const nums = [1, 4, 2, 3];
const target = 6;

function twoSum(nums, target) {
  const map = new Map(); // To store numbers and their indices in key-value pairs

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement is already stored in the map, if it is return both indices
    if (map.has(complement)) {
      // search map by key (which is the complement number)
      return [map.get(complement), i]; // Return the index of the complement as well as the current index
    }

    // If complement is not found, store the current number and its index
    map.set(nums[i], i);
  }

  // Return an empty array if no solution is found (though the problem guarantees there will be a solution)
  return [];
}

// My version
const twoSumMyVersion = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // Check if complement exists and is at a different index
    const complementIndex = nums.indexOf(complement);
    if (complementIndex !== -1 && complementIndex !== i) {
      return [i, complementIndex];
    }
  }
  // Return empty array if no solution found
  return [];
};

const sums = twoSum(nums, target);
const mySums = twoSumMyVersion(nums, target);
console.log(sums);
console.log(mySums);
