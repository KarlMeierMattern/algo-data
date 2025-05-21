// https://neetcode.io/problems/trapping-rain-water

// Trapping Rain Water
// Hard

// You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
// Return the maximum area of water that can be trapped between the bars.

// Example 1:
// Input: height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9

const trappingRainWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    // Update the maximum heights seen from both sides
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    // Calculate water trapped at current position
    if (leftMax < rightMax) {
      totalWater += leftMax - height[left];
      left++;
    } else {
      totalWater += rightMax - height[right];
      right--;
    }
  }

  return totalWater;
};

console.log(trappingRainWater([0, 2, 0, 3, 1, 0, 1, 3, 2, 1])); // Expected output: 9
