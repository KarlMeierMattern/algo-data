// https://neetcode.io/problems/three-integer-sum

// 3Sum
// Medium

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 1000
// -10^5 <= nums[i] <= 10^5

const threeSum = (nums) => {
  if (nums.length < 3) return [];
  const sortedNums = nums.sort((a, b) => a - b);
  const triplets = [];
  const target = 0;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      let remainder = target - sum;

      if (remainder > 0) {
        left++;
      } else if (remainder < 0) {
        right--;
      } else {
        triplets.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;
        while (sortedNums[left] === sortedNums[left - 1]) left++;
        while (sortedNums[right] === sortedNums[right + 1]) right--;
      }
    }
  }
  return triplets;
};

console.log(threeSum([-5, 4, 1, 0, 3, 2, -3]));
