// https://neetcode.io/problems/products-of-array-discluding-self

// Products of Array Except Self
// Medium
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]

// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]

// // Constraints:
// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

// create empty array of same length as nums
// iterate through nums
// for each element, calculate the product of all elements to the left
// for each element, calculate the product of all elements to the right
// multiply the left and right products for each element
// return the result array

const productOfArrary = (nums) => {
  const result = new Array(nums.length).fill(1);

  // First pass (left to right)
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Second pass (right to left)
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};

// Test
console.log(productOfArrary([1, 2, 4, 6]));
console.log(productOfArrary([-1, 0, 1, 2, 3]));
