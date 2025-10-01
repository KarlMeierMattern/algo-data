// https://neetcode.io/problems/longest-consecutive-sequence

// Longest Consecutive Sequence
// Medium

// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
// The elements do not have to be consecutive in the original array.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [2,20,4,10,3,4,5]
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:
// Input: nums = [0,3,2,5,4,6,1,1]
// Output: 7

// Constraints:
// 0 <= nums.length <= 1000
// -10^9 <= nums[i] <= 10^9

const nums = [0, 3, 2, 5, 4, 6, 1, 1];

// Solution 1 using sorting with O(n log n) time complexity
// const longestConsecutive = (nums) => {
//   const sortedNums = nums.sort((a, b) => a - b);
//   let count = 1;
//   let maxCount = 1;

//   for (let i = 0; i < sortedNums.length; i++) {
//     if (sortedNums[i] === sortedNums[i + 1]) {
//       continue;
//     }
//     if (sortedNums[i] === sortedNums[i + 1] - 1) {
//       count++;
//       maxCount = Math.max(maxCount, count);
//     } else {
//       count = 1;
//     }
//   }
//   return maxCount;
// };

// console.log(longestConsecutive(nums));

// Solution 2 using Set with O(n) time complexity

const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let maxLength = 1;

  for (const num of numSet) {
    // Only start counting from the beginning of a sequence
    // If the previous number is not in the set, then it is the start of a sequence and we can start counting
    // Otherwise, we would be counting from the middle of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num; // need to set this so that we can increment it below
      let currentLength = 1;

      // Count consecutive numbers
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

console.log(longestConsecutive(nums));
